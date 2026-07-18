/* Duguláselhárítás Agria – interakciók */
(function () {
  "use strict";

  /* --- Buborékok generálása (hero + belső fejléc) --- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".hero__bubbles, .page-hero__bubbles").forEach(function (box) {
    if (reduceMotion) return;
    var count = 14;
    for (var i = 0; i < count; i++) {
      var b = document.createElement("span");
      var size = 8 + Math.random() * 46;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = (9 + Math.random() * 12) + "s";
      b.style.animationDelay = (-Math.random() * 14) + "s";
      box.appendChild(b);
    }
  });

  /* --- Fejléc scroll állapot --- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Mobil menü --- */
  var toggle = document.querySelector(".nav-toggle");
  var scrim = document.querySelector("[data-nav-scrim]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
    if (scrim) {
      scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") document.body.classList.remove("nav-open");
    });
  }

  /* --- Reveal animáció --- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Számlálók --- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var from = el.hasAttribute("data-from") ? parseFloat(el.getAttribute("data-from")) : 0;
    var dec = (el.getAttribute("data-count").indexOf(".") > -1) ? 1 : 0;
    var dur = 1600, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = from + (target - from) * eased;
      el.textContent = val.toFixed(dec).replace(".", ",");
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec).replace(".", ",");
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* --- GYIK akkordeon --- */
  document.querySelectorAll(".faq__q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq__item");
      var ans = item.querySelector(".faq__a");
      var open = item.classList.contains("open");
      item.classList.toggle("open");
      q.setAttribute("aria-expanded", String(!open));
      ans.style.maxHeight = open ? null : ans.scrollHeight + "px";
    });
  });

  /* --- Aktív menüpont scroll szerint (csak főoldal horgonyok) --- */
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (navLinks.length) {
    var sections = [];
    navLinks.forEach(function (l) {
      var t = document.querySelector(l.getAttribute("href"));
      if (t) sections.push({ link: l, el: t });
    });
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 120;
      sections.forEach(function (s) {
        if (pos >= s.el.offsetTop && pos < s.el.offsetTop + s.el.offsetHeight) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          s.link.classList.add("active");
        }
      });
    }, { passive: true });
  }

  /* --- Sütikezelő --- */
  var COOKIE_KEY = "agria_cookie_consent";
  var banner = document.querySelector(".cookie");
  if (banner) {
    var stored = null;
    try { stored = localStorage.getItem(COOKIE_KEY); } catch (e) {}
    if (!stored) {
      setTimeout(function () { banner.classList.add("show"); }, 900);
    }
    banner.querySelectorAll("[data-cookie]").forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.setItem(COOKIE_KEY, b.getAttribute("data-cookie")); } catch (e) {}
        banner.classList.remove("show");
      });
    });
  }

  /* --- Kapcsolati űrlap (Formspree) --- */
  var form = document.querySelector("#kapcsolat-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var action = form.getAttribute("action") || "";
      if (action.indexOf("FORM_ID") > -1 || action === "") {
        // Helyőrző – Formspree azonosító még nincs beállítva
        showStatus("ok", "Köszönjük! Az űrlap beállítása után az üzenetek e-mailben érkeznek. Addig kérjük, hívjon minket a +36 70 360 1046 számon.");
        form.reset();
        return;
      }
      var data = new FormData(form);
      var btn = form.querySelector('button[type="submit"]');
      var orig = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.innerHTML = "Küldés folyamatban…"; }
      fetch(action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) {
            showStatus("ok", "Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.");
            form.reset();
          } else {
            showStatus("err", "Hiba történt a küldés során. Kérjük, hívjon minket a +36 70 360 1046 számon.");
          }
        })
        .catch(function () {
          showStatus("err", "Hiba történt a küldés során. Kérjük, hívjon minket a +36 70 360 1046 számon.");
        })
        .finally(function () { if (btn) { btn.disabled = false; btn.innerHTML = orig; } });
    });
    function showStatus(type, msg) {
      if (!status) return;
      status.className = "form-status " + type;
      status.textContent = msg;
      status.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  /* --- Aktuális év --- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
