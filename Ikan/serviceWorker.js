const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
  "/images/coffee10.jpg",
  "/images/coffee11.jpg",
  "/images/coffee12.jpg",
  
]



self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      if (res) {
        return res; 
      }
      return fetch(fetchEvent.request).then(networkResponse => {
        return caches.open(staticDevGames).then(cache => {
          cache.put(fetchEvent.request, networkResponse.clone());
        });
      }).catch(() => {
        
        return caches.match('/index.html');
      });
    })
  );
});









