const CACHE_NAME = 'hoosier-ai-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/promise.html',
  '/pricing.html',
  '/portfolio.html',
  '/hireus.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
