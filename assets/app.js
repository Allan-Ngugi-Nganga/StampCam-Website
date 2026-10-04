/* StampCam site interactions */
(function () {
  "use strict";

  // Scroll progress bar
  var progress = document.getElementById("scrollProgress");
  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (nav) nav.classList.toggle("is-scrolled", doc.scrollTop > 12);
  }

  // Sticky nav background
  var nav = document.getElementById("nav");

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = (el.dataset.delay || (i * 60)) + "ms";
          el.style.transitionDelay = delay;
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Camera mode tabs
  var tabs = document.querySelectorAll(".mode-tab");
  var panels = document.querySelectorAll(".mode-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.dataset.mode;
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.dataset.panel === id);
      });
    });
  });

  // Anchor scroll offset for fixed nav
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", id);
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
