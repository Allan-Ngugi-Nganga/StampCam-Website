/* StampCam site interactions (progressive enhancement) */
(function () {
  "use strict";

  // ---------------------------------------------------------------
  // App Store URL. Every element with [data-store] is updated automatically.
  // ---------------------------------------------------------------
  var STORE_URL = "https://apps.apple.com/app/id6818682653";

  // ---------------------------------------------------------------
  // Privacy-first analytics (cookieless). Cloudflare Web Analytics.
  // Paste your beacon token below. Until the token is replaced the beacon
  // is not injected, so nothing broken ships.
  // Get one: Cloudflare dashboard > Web Analytics > add site > JS snippet.
  // Alternative: Plausible (ANALYTICS_SRC = "https://plausible.io/js/script.js",
  //   ANALYTICS_ATTRS = { "data-domain": "example.com" }).
  // ---------------------------------------------------------------
  var ANALYTICS_SRC = "https://static.cloudflareinsights.com/beacon.min.js";
  var ANALYTICS_ATTRS = { "data-cf-beacon": '{"token":"REPLACE_WITH_CLOUDFLARE_WEB_ANALYTICS_TOKEN"}' };

  var analyticsReady = ANALYTICS_SRC && JSON.stringify(ANALYTICS_ATTRS).indexOf("REPLACE_WITH") === -1;
  if (analyticsReady) {
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
