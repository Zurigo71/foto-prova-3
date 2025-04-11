
self.addEventListener('install', e => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open('foto-veicolo-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
