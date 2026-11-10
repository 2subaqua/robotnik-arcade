// Robotnik Arcade offline cache.
// The game is always served from the cache straight away, so it starts without a network.
// In the background the newest version is fetched, so an upload to GitHub reaches the phone
// the next time the game is started.
const CACHE = "robotnik-arcade";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const saved = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then(r => { if (r.ok) cache.put(e.request, r.clone()); return r; }).catch(() => saved);
    return saved || fresh;
  }));
});
