const cacheName = 'leonardasf1-v1';
const staticAssets = [
  '../',
  '../manifest.webmanifest',
  '../JS/main.js',
  '../JS/header.html',
  '../CSS/style.css',
  '../icons/favicon.ico',
  '../icons/icon144.png',
  '../icons/icon240.png',
  '../icons/alpinism.png',
  '../icons/f1.png',
  '../icons/flamenco.png',
  '../icons/guitar.png',
  '../icons/medieval.png',
  '../icons/programing.png',
  '../icons/sailing.png',
  '../icons/skateboarding.png',
  '../icons/surf.png',
  '../icons/zdorovie.png'
];
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
// self.addEventListener('install', (e) => {
//   console.log('[Service Worker] Install');
//   e.waitUntil(
//     caches.open(cacheName)
//     .then((cache) => {
//       console.log('[Service Worker] Caching all: app shell and content');
//       // return cache.addAll(contentToCache);
//       return cache.addAll(appShellFiles);
//     })
//   );
// });

// self.addEventListener('activate', e => {
// 	self.clients.claim();
// });

// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     caches.match(e.request).then((r) => {
//       console.log('[Service Worker] Fetching resource: '+e.request.url);
//       return r || fetch(e.request)
//       .then((response) => {
//         return caches.open(cacheName)
//         .then((cache) => {
//           console.log('[Service Worker] Caching new resource: '+e.request.url);
//           cache.put(e.request, response.clone());
//           return response;
//         });
//       });
//     })
//   );
// });