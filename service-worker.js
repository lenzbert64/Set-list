const CACHE_PREFIX="set-list-personal-";
const CACHE_NAME=CACHE_PREFIX+"v2.9";
const INDEX="./index.html";
const APP_SHELL=[INDEX,"./manifest.json","./robert-lenz-logo.png","./setlist-logo.png","./setlist-icon-192.png","./setlist-icon-512.png","./apple-touch-icon.png","./help-repertoire.png","./help-current.png","./help-saved.png"];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME)
            .map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  // Navigation is network-first so a newly deployed index/metadata is seen
  // immediately; cached index remains the offline fallback.
  if(event.request.mode==="navigate"){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(INDEX,copy));
          return response;
        })
        .catch(()=>caches.match(INDEX))
    );
    return;
  }

  // PWA metadata and icons are network-first to avoid stale Home Screen assets.
  if(/(?:manifest\.json|apple-touch-icon\.png|setlist-icon-(?:192|512)\.png)$/.test(url.pathname)){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));
          return response;
        })
        .catch(()=>caches.match(event.request,{ignoreSearch:true}))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request,{ignoreSearch:true}).then(cached=>cached||fetch(event.request))
  );
});
