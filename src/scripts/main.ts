/**
 * main.ts — the site's only client script.
 * Two responsibilities: the light/dark theme toggle and the mobile menu.
 * Everything else on the site is static HTML/CSS by design.
 */

/* ---- Theme toggle ---- */
const root = document.documentElement;
const themeBtn = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");

function syncThemeButton(): void {
  const dark = root.getAttribute("data-theme") === "dark";
  themeBtn?.setAttribute("aria-pressed", String(dark));
}

themeBtn?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* private browsing — theme just won't persist */
  }
  syncThemeButton();
});
syncThemeButton();

/* ---- Mobile menu ---- */
const burger = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const menu = document.querySelector<HTMLElement>("[data-nav-menu]");

function closeMenu(): void {
  burger?.classList.remove("is-open");
  burger?.setAttribute("aria-expanded", "false");
  burger?.setAttribute("aria-label", "Open menu");
  menu?.classList.remove("is-open");
}

burger?.addEventListener("click", () => {
  const open = !menu?.classList.contains("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu?.classList.toggle("is-open", open);
});

// Close the menu when a link is chosen or the viewport grows past mobile.
menu?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) closeMenu();
});
window.matchMedia("(min-width: 681px)").addEventListener("change", closeMenu);
