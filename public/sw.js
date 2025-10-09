// Service Worker for Hermitage Hotels and Resorts
const CACHE_NAME = "hermitage-hotels-v1";
const urlsToCache = [
  "/",
  "/about",
  "/rooms",
  "/contact",
  "/manifest.json",
  // Add critical assets
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});
