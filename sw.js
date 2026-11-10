// Robotnik Arcade offline cache.
// With a network the newest version is always fetched (and saved); without one, the saved copy starts.
const CACHE = "robotnik-arcade";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(cache =>
    fetch(e.request, { cache: "no-cache" })
      .then(r => { if (r.ok) cache.put(e.request, r.clone()); return r; })
      .catch(() => cache.match(e.request, { ignoreSearch: true }))
  ));
});
