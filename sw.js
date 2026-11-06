const CACHE="catan-contador-v24";
const FILES=["./","index.html","manifest.json","icon-192.png","icon-512.png","apple-touch-icon.png","favicon-32.png","splash.webp","icon-48.png","icon-72.png","icon-96.png","icon-144.png","icon-maskable-192.png","icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();if(res.ok&&(e.request.url.startsWith(self.location.origin)||e.request.url.includes("fonts.g")))caches.open(CACHE).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match("index.html"))))});
