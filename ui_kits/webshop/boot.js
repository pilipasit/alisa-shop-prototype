/* Alisa web shop — boot (loaded right before the page bundle, as an external file so the CSP can forbid
   inline scripts). Real catalog from Torgsoft (automation/shop_feed.py in alisa-shop-docs, SHOP-FEED.md):
   the feed files are git-ignored and loaded ONLY on localhost, so the public site never requests them and
   shows the curated showcase. Order: feed.local.js (full), sample.js (30 products), else showcase/demo. */
(function () {
  var local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  if (local) document.write('<script src="feed/sample.js"><\/script><script src="feed/feed.local.js"><\/script>');
  else document.querySelectorAll('[data-local-only]').forEach(function (e) { e.remove(); });
  /* icons in the static HTML (toolbar, back bar); React screens call lucide.createIcons() themselves */
  window.addEventListener('DOMContentLoaded', function () { if (window.lucide) window.lucide.createIcons(); });
})();
