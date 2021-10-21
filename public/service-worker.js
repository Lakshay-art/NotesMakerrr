importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('NotesMakerrr').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       "/static/js/runtime-main.9d317432.js",
       "/static/js/2.0405f225.chunk.js",
       "/static/css/main.c366c98a.chunk.css",
       "/static/js/main.294c5495.chunk.js"
    
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });