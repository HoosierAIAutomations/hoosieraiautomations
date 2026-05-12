// Haas Playground Offline PWA Service Worker - Hoosier AI Automations
const CACHE_NAME = 'haas-playground-cache-v1';
const ASSETS_TO_CACHE = [
  'playground.html',
  'playground.js',
  'styles.css',
  '1330.png',
  'manifest.json'
];

// Install Event: Pre-cache static assets
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed!');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching static core assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Cleanup older obsolete caches
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated!');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Clearing obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First, Fallback-to-Network paradigm
self.addEventListener('fetch', (e) => {
  // Only process local assets
  if (e.request.url.startsWith(self.location.origin)) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((networkResponse) => {
          // Open cache dynamically and store new request if it matches static schema
          if (networkResponse && networkResponse.status === 200 && e.request.method === 'GET') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback
          return caches.match('playground.html');
        });
      })
    );
  }
});
