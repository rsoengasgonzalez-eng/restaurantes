const CACHE='mesa-madrid-v1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./favicon.svg','./assets/images/hero-table.webp','./assets/images/food-mediterranean.webp','./assets/images/food-japanese.webp','./assets/images/food-plant.webp','./assets/images/food-spanish.webp','./assets/images/food-italian.webp','./assets/images/food-brunch.webp'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==location.origin)return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):undefined)));
});
