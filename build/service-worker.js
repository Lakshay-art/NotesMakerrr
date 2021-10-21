importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('NotesMakerrr').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       "main.css",
       "main.js",
       "main.js.map",
       "runtime-main.js",
       "runtime-main.js.map",
       "static/js/2.0405f225.chunk.js",
       "static/js/2.0405f225.chunk.js.map",
       "static/js/3.dbe2aaf5.chunk.js",
       "static/js/3.dbe2aaf5.chunk.js.map",
      
       "static/css/main.c366c98a.chunk.css.map",
       "static/js/2.0405f225.chunk.js.LICENSE.txt"
    
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