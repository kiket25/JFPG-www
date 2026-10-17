(function () {
  // main.js — punto de entrada. IIFE, sin dependencias externas (no usa
  // módulos ES, funciona en file://, FTP y cualquier hosting).
  "use strict";

  // El contenido va hardcodeado en index.html (robustez si JS falla).
  // lib/manifest.js queda como referencia editable de los mismos datos.
  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ---------------------------------------------------------------------
     Nav: sticky solid-on-scroll + mobile fullscreen menu
     --------------------------------------------------------------------- */
  function initNav() {
    var nav = $("[data-nav]");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = $("[data-nav-burger]");
    var mobile = $("[data-nav-mobile]");
    if (!burger || !mobile) return;

    function closeMenu() {
      burger.setAttribute("aria-expanded", "false");
      mobile.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
    }
    function openMenu() {
      burger.setAttribute("aria-expanded", "true");
      mobile.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
    }
    burger.addEventListener("click", function () {
      var expanded = burger.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu(); else openMenu();
    });
    $$("a", mobile).forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------------------------------------------------------------
     Smooth anchor scroll (native — no Lenis, ver gotcha B.1.4)
     --------------------------------------------------------------------- */
  function initSmoothAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 84;
      var top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: top,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    });
  }

  /* ---------------------------------------------------------------------
     Reveal on scroll — universal, funcional (no se apaga con reduced-motion)
     --------------------------------------------------------------------- */
  function initReveals() {
    var els = $$("[data-reveal]");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-revealed"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: "0px 0px -2% 0px" });

    els.forEach(function (el) { io.observe(el); });

    // Red de seguridad: a los 6s, revela lo que siga oculto por encima del fold
    setTimeout(function () {
      $$("[data-reveal]:not(.is-revealed)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-revealed");
        }
      });
    }, 6000);
  }

  /* ---------------------------------------------------------------------
     Tilt 3D sutil en tarjetas (skills, proyectos, experiencia)
     --------------------------------------------------------------------- */
  function initTilt() {
    if (!fineHover) return;
    var cards = $$(".skill-card, .project-card, .exp-card");
    cards.forEach(function (card) {
      card.classList.add("has-tilt");
      var MAX = 6;
      var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        tx = -py * MAX; ty = px * MAX;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      card.addEventListener("mouseleave", function () {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      function loop() {
        cx += (tx - cx) * 0.15;
        cy += (ty - cy) * 0.15;
        card.style.setProperty("--rx", cx.toFixed(2) + "deg");
        card.style.setProperty("--ry", cy.toFixed(2) + "deg");
        raf = (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) ? requestAnimationFrame(loop) : null;
      }
    });
  }


  /* ---------------------------------------------------------------------
     Año automático en el footer
     --------------------------------------------------------------------- */
  function initYear() {
    var el = $("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
     Selector de idioma ES/EN
     El español ya está hardcodeado en el HTML (visible aunque JS falle).
     Este init solo aplica window.__I18N__ cuando el visitante cambia de
     idioma o vuelve con una preferencia guardada.
     --------------------------------------------------------------------- */
  var LANG_KEY = "jfpg-lang";

  function getStoredLang() {
    try { return window.localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  }
  function setStoredLang(lang) {
    try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* noop: cookies/localStorage bloqueados */ }
  }

  function initI18n() {
    var i18n = window.__I18N__;
    if (!i18n) return;

    var toggle = $("[data-lang-toggle]");
    var btns = $$("[data-lang-btn]");

    function applyLang(lang) {
      var dict = i18n[lang] || i18n.es;
      if (!dict) return;

      $$("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.textContent = dict[key];
      });

      $$("[data-i18n-attr]").forEach(function (el) {
        var spec = el.getAttribute("data-i18n-attr"); // "attrName:key"
        var sep = spec.indexOf(":");
        if (sep < 0) return;
        var attrName = spec.slice(0, sep);
        var key = spec.slice(sep + 1);
        if (dict[key] != null) el.setAttribute(attrName, dict[key]);
      });

      document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es");

      btns.forEach(function (b) {
        var isActive = b.getAttribute("data-lang-btn") === lang;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }

    if (!toggle || !btns.length) return;

    var initial = getStoredLang();
    if (initial !== "en" && initial !== "es") initial = "es";
    if (initial !== "es") applyLang(initial); // "es" ya es el estado hardcodeado por defecto

    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang-btn");
        if (btn.classList.contains("is-active")) return;
        applyLang(lang);
        setStoredLang(lang);
      });
    });
  }

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */
  function boot() {
    safe(initNav, "initNav");
    safe(initSmoothAnchors, "initSmoothAnchors");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initRoleRotator, "initRoleRotator");
    safe(initYear, "initYear");
    safe(initI18n, "initI18n");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
