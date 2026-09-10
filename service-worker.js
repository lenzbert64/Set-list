// Set List v1.43 — caching disabled during development.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()));
});
