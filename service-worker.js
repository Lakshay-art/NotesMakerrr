importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('NotesMakerrr').then(function(cache) {
     return cache.addAll([
       '/NotesMakerrr/',
     "/NotesMakerrr/static/css/main.c366c98a.chunk.css",
     "/NotesMakerrr/static/js/main.252d4afd.chunk.js",
     "/NotesMakerrr/static/js/main.252d4afd.chunk.js.map",
     "/NotesMakerrr/static/js/runtime-main.9d317432.js",
     "/NotesMakerrr/static/js/runtime-main.9d317432.js.map",
     "/NotesMakerrr/static/js/2.0405f225.chunk.js",
     "/NotesMakerrr/static/js/2.0405f225.chunk.js.map",
    "/NotesMakerrr/static/js/3.dbe2aaf5.chunk.js",
     "/NotesMakerrr/static/js/3.dbe2aaf5.chunk.js.map",
     "/NotesMakerrr/index.html",
     "/NotesMakerrr/static/css/main.c366c98a.chunk.css.map",
     "/NotesMakerrr/static/js/2.0405f225.chunk.js.LICENSE.txt"
    
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