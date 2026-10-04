/* StampCam site interactions (progressive enhancement) */
(function () {
  "use strict";

  // ---------------------------------------------------------------
  // App Store URL. Set this to the live listing, for example
  //   "https://apps.apple.com/app/id1234567890"
  // Every element with [data-store] is updated automatically.
  // ---------------------------------------------------------------
  var STORE_URL = "";

  // ---------------------------------------------------------------
  // Privacy-first analytics. Leave empty to disable.
  // Recommended: Cloudflare Web Analytics (cookieless, no consent banner)
  //   ANALYTICS_SRC = "https://static.cloudflareinsights.com/beacon.min.js"
  //   ANALYTICS_ATTRS = { "data-cf-beacon": '{"token":"YOUR_TOKEN"}' }
  // Or Plausible: ANALYTICS_SRC = "https://plausible.io/js/script.js"
  //   ANALYTICS_ATTRS = { "data-domain": "stampcam.app" }
  // ---------------------------------------------------------------
  var ANALYTICS_SRC = "";
  var ANALYTICS_ATTRS = {};

  if (ANALYTICS_SRC) {
    var s = document.createElement("script");
    s.defer = true;
    s.src = ANALYTICS_SRC;
    Object.keys(ANALYTICS_ATTRS).forEach(function (k) { s.setAttribute(k, ANALYTICS_ATTRS[k]); });
    document.head.appendChild(s);
  }

  if (STORE_URL) {
    document.querySelectorAll("[data-store]").forEach(function (el) {
      el.setAttribute("href", STORE_URL);
      el.setAttribute("rel", "noopener");
      el.setAttribute("target", "_blank");
    });
  }

  // Sticky nav hairline
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Restrained reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Anchor scroll with fixed-nav offset
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", id);
    });
  });
})();
