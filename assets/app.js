/* StampCam site interactions (progressive enhancement) */
(function () {
  "use strict";

  // ---------------------------------------------------------------
  // App Store URL. Set this to the live listing URL, for example
  //   "https://apps.apple.com/app/id1234567890"
  // Every element with [data-store] is updated automatically.
  // ---------------------------------------------------------------
  var STORE_URL = "";

  if (STORE_URL) {
    document.querySelectorAll("[data-store]").forEach(function (el) {
      el.setAttribute("href", STORE_URL);
      el.setAttribute("rel", "noopener");
      if (el.target !== "_blank") el.target = "_blank";
    });
  }

  // Sticky nav background
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Camera mode tabs (roving tabs, keeps panels in the a11y tree)
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".mode-tab"));
  var panels = document.querySelectorAll(".mode-panel");
  function selectTab(tab) {
    var id = tab.dataset.mode;
    tabs.forEach(function (t) {
      var active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
      t.tabIndex = active ? 0 : -1;
    });
    panels.forEach(function (p) {
      var active = p.dataset.panel === id;
      p.classList.toggle("is-active", active);
      if (active) { p.removeAttribute("hidden"); } else { p.setAttribute("hidden", ""); }
    });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); next.focus(); selectTab(next); }
    });
  });

  // Smooth anchor scroll with fixed-nav offset
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", id);
    });
  });
})();
