/**
 * main.ts — all client-side interactions.
 *
 * Design rules:
 *  - Every feature is its own function and runs inside its own try/catch,
 *    so one failing feature can never take down the others.
 *  - Everything degrades gracefully: no JS, no problem — the page still works.
 *  - Motion respects `prefers-reduced-motion`.
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Run an init function safely; log (don't throw) if it fails. */
function safe(name: string, fn: () => void): void {
  try {
    fn();
  } catch (err) {
    console.warn(`[portfolio] "${name}" failed to initialise:`, err);
  }
}

/** Light/dark theme toggle, persisted to localStorage. */
function initTheme(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    toggle.setAttribute("aria-pressed", String(next === "dark"));
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be blocked (private mode) — theme still switches for the session */
    }
  });
}

/** Mobile navigation drawer. */
function initMobileNav(): void {
  const burger = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-nav-menu]");
  if (!burger || !menu) return;

  const setOpen = (open: boolean) => {
    menu.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  };

  burger.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

/** Top scroll-progress bar + nav shadow. */
function initScrollChrome(): void {
  const bar = document.querySelector<HTMLElement>("#progress");
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  let ticking = false;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const ratio = max > 0 ? doc.scrollTop / max : 0;
    if (bar) bar.style.transform = `scaleX(${ratio})`;
    if (nav) nav.classList.toggle("is-scrolled", doc.scrollTop > 8);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/** Highlight the nav link for the section currently in view. */
function initScrollSpy(): void {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setActive = (id: string) => {
    document.querySelectorAll("[data-nav-menu] a").forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
    });
  };

  const spy = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => spy.observe(s));
}

/** Reveal elements (and stagger their children) as they scroll into view. */
function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(".reveal, [data-stagger]");
  if (!targets.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        // Stagger children with a CSS transition-delay.
        if (el.hasAttribute("data-stagger")) {
          Array.from(el.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 70}ms`;
          });
        }
        el.classList.add("is-in");
        obs.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  targets.forEach((el) => io.observe(el));
}

/** Project category filter tabs. */
function initFilters(): void {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-category]"));
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.toggleAttribute("hidden", !show);
      });
    });
  });
}

/** Subtle magnetic pull on elements marked [data-magnetic]. Pointer only. */
function initMagnetic(): void {
  if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = 0.25;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
}

/** Cursor-following spotlight on the hero. Pointer + motion friendly. */
function initSpotlight(): void {
  const hero = document.querySelector<HTMLElement>("[data-spotlight]");
  if (!hero || prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
    hero.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}

/** Contact form: validate, then send. Defaults to opening the mail client. */
function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("#contact-form");
  const note = document.querySelector<HTMLElement>("#form-note");
  if (!form) return;

  // To collect submissions server-side, paste a Formspree/Getform URL here.
  const FORM_ENDPOINT = "";

  const say = (msg: string, kind: "ok" | "err" | "") => {
    if (!note) return;
    note.textContent = msg;
    note.classList.toggle("is-ok", kind === "ok");
    note.classList.toggle("is-err", kind === "err");
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(form);
      const name = String(data.get("name") ?? "").trim();
      const email = String(data.get("email") ?? "").trim();
      const message = String(data.get("message") ?? "").trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      form.querySelectorAll("input, textarea").forEach((el) => el.classList.remove("is-invalid"));
      if (name.length < 2) return invalid("name", "Please enter your name.");
      if (!emailOk) return invalid("email", "Please enter a valid email.");
      if (message.length < 10) return invalid("message", "A little more detail, please (10+ characters).");

      if (FORM_ENDPOINT) {
        say("Sending…", "");
        const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
        if (!res.ok) throw new Error(`status ${res.status}`);
        form.reset();
        return say("Thanks — your message was sent.", "ok");
      }

      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:goyalnaman.work@gmail.com?subject=${subject}&body=${body}`;
      say("Opening your email app… if nothing happens, write to goyalnaman.work@gmail.com", "ok");
    } catch (err) {
      console.warn("[portfolio] contact submit failed:", err);
      say("Something went wrong — please email me directly at goyalnaman.work@gmail.com", "err");
    }

    function invalid(field: string, msg: string) {
      form!.querySelector(`[name="${field}"]`)?.classList.add("is-invalid");
      say(msg, "err");
    }
  });
}

/** Stamp the current year into the footer. */
function initYear(): void {
  const el = document.querySelector("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

// ── Boot ──────────────────────────────────────────────────────────────────
safe("theme", initTheme);
safe("mobile-nav", initMobileNav);
safe("scroll-chrome", initScrollChrome);
safe("scroll-spy", initScrollSpy);
safe("reveal", initReveal);
safe("filters", initFilters);
safe("magnetic", initMagnetic);
safe("spotlight", initSpotlight);
safe("contact-form", initContactForm);
safe("year", initYear);
