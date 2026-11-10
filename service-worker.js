'use strict';

const CACHE_NAME = 'mesa-madrid-v8-20261110';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css?v=20261110-3',
  './app.js?v=20261110-3',
  './manifest.webmanifest',
  './favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = request.mode === 'navigate';
  const isCriticalAsset = /\.(?:html|css|js)$/.test(url.pathname);
  if (!isNavigation && !isCriticalAsset) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        return response;
      }))
    );
    return;
  }

  // Network first for HTML, CSS and JS prevents an old application shell from
  // overriding a newly deployed version. The cache is only an offline fallback.
  event.respondWith(
    fetch(request, { cache: 'no-store' })
      .then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        return response;
      })
      .catch(() => caches.match(request).then(cached => cached || (isNavigation ? caches.match('./index.html') : Response.error())))
  );
});
