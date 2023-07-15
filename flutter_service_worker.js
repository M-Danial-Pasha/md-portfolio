'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "322944830fbca8ecc3b79fef338cdf17",
"assets/AssetManifest.smcbin": "e71be67bbdf570be7d14068d7850cd2d",
"assets/assets/images/balancer/1.jpg": "b8c8cc5703ba2837391e8284bff79f83",
"assets/assets/images/balancer/10.jpg": "eb8914825ede7ced237ae95c7b5dfd0b",
"assets/assets/images/balancer/2.jpg": "e1fa083eab3b124a10a6f427cf493bc4",
"assets/assets/images/balancer/3.jpg": "50e732758d357ba413decf41869bb2c1",
"assets/assets/images/balancer/4.jpg": "8ab8a306bfbe70e316261fbd87b23447",
"assets/assets/images/balancer/5.jpg": "fcfdd9755341ed0461207b011b4fea6d",
"assets/assets/images/balancer/6.jpg": "cdcaea38c353e691dbb3903dcb1f0b0a",
"assets/assets/images/balancer/7.jpg": "dddea78024e0f635d0e1933a13d43056",
"assets/assets/images/balancer/8.jpg": "58e87f849609361df12cf384a00608ad",
"assets/assets/images/balancer/9.jpg": "ab21dd18789d7924e8910918e8828a22",
"assets/assets/images/balancer/Cover.png": "0ad96d66ee3f3b4c1026c4bc7419b3ab",
"assets/assets/images/chatroom/1.PNG": "00bdf02cb28a866b7da01c7b60c557ee",
"assets/assets/images/chatroom/2.PNG": "2191b88cae36fe73d7caf4e4129c0fc8",
"assets/assets/images/chatroom/3.PNG": "63ae0eea05ef28827a7635717bba6ded",
"assets/assets/images/chatroom/4.PNG": "fb629100d31c2526976a207aa3f6afed",
"assets/assets/images/chatroom/Cover.png": "ca3b324761ba0031b42409c0bcbe70fb",
"assets/assets/images/door/1.PNG": "1e24aeb53f8350de091eecc8c73809fe",
"assets/assets/images/door/10.PNG": "2ced5407f0cd8694b132e3273199af57",
"assets/assets/images/door/11.PNG": "547af495cf72dd3c0a52fb05e248512b",
"assets/assets/images/door/12.PNG": "b28047c5c29388064030e53a78eee16b",
"assets/assets/images/door/13.PNG": "1fd41f63c7b2f130cd020d8f71b2b8d1",
"assets/assets/images/door/14.PNG": "f411c113f8fb76d7a36b6ddc6cb8046d",
"assets/assets/images/door/15.PNG": "926bfed361cc56f5619ca132cee19786",
"assets/assets/images/door/2.PNG": "4d0d6fede1540a3dfcbb89720da493f9",
"assets/assets/images/door/3.PNG": "21c5210a4fa7ba1b4811b15901507eda",
"assets/assets/images/door/4.PNG": "59a43356a00c2a84362bb73ad3a97e22",
"assets/assets/images/door/5.PNG": "e7de62537525d2bf3503c73810270283",
"assets/assets/images/door/6.PNG": "b3258ea5cd4d09ff17fe1e2b919fcfbb",
"assets/assets/images/door/7.PNG": "93ae83ed6661c4de9e30ee2ba03966ff",
"assets/assets/images/door/8.PNG": "268436d1d9d9fc75e49f5ef69ed6512c",
"assets/assets/images/door/9.PNG": "0c6e4a1127b0ba021c30645d1008f72c",
"assets/assets/images/door/Cover.png": "e6009a03f8175cfe15251b9ab5377bd3",
"assets/assets/images/gemstore/1.jpg": "4eee2aae5b44558c3262b70266869e36",
"assets/assets/images/gemstore/2.jpg": "9da5754f0ffb9bb9f6f33daea8aac55a",
"assets/assets/images/gemstore/3.jpg": "e4af15e1fa738b5242db364835c8a1d3",
"assets/assets/images/gemstore/4.jpg": "1f5415cdfb3dc430e171134b9348e495",
"assets/assets/images/gemstore/5.jpg": "bc916a1551565afe74e353a78fe0b1a0",
"assets/assets/images/gemstore/6.jpg": "02b1f2b65d9c44ad540ec80505f0ea34",
"assets/assets/images/gemstore/7.jpg": "cd6b332e8dfbcc78ef0bdc5946546d2c",
"assets/assets/images/gemstore/8.jpg": "acc99c64c640c96fe40021288b700ed0",
"assets/assets/images/gemstore/9.jpg": "3edd0ca52e0901ec138cd4d265dda10e",
"assets/assets/images/gemstore/Cover.png": "614833481247515931b0fbe262f1eec5",
"assets/assets/images/itailor/1.jpg": "42f6e172a3502803a9e60b66d932331b",
"assets/assets/images/itailor/10.jpg": "4a6a524926d2500519e8a4c7062dd902",
"assets/assets/images/itailor/11.jpg": "6214a12869fc3043769a5a7d637aefb2",
"assets/assets/images/itailor/12.jpg": "fd6633dda8ea64d7824ea625ef7a5641",
"assets/assets/images/itailor/13.jpg": "1f85a4150a98c6df9e4b9d40a8441e2d",
"assets/assets/images/itailor/14.jpg": "e27db9ba172dba26c112990f17d71825",
"assets/assets/images/itailor/15.jpg": "3c8a23a006d036eef1cd3a13c2d072a9",
"assets/assets/images/itailor/16.jpg": "84c2efc45b3796fce541e02ac9b022e5",
"assets/assets/images/itailor/2.jpg": "747e5b81bce5883b544c3e495708e9ac",
"assets/assets/images/itailor/3.jpg": "1bb122b8f8af91de5f2a2fb0cd8ab93f",
"assets/assets/images/itailor/4.jpg": "6c99bc1b651ed7f2221bbff52cdecd0e",
"assets/assets/images/itailor/5.jpg": "b9566e6a6a405fbf63117f63963e3b5c",
"assets/assets/images/itailor/6.jpg": "d31aceebcfeb9796f1a81e2290493408",
"assets/assets/images/itailor/7.jpg": "4ad1e4396bc9a13c863f0d8b23f1f050",
"assets/assets/images/itailor/8.jpg": "8a8c581e063da194d61e8e8aee67ba67",
"assets/assets/images/itailor/9.jpg": "9ff118470426e69da142efd10ca17dd8",
"assets/assets/images/itailor/Cover.png": "3e8613f833f00c285107abba70d43c7b",
"assets/assets/images/POS/1.PNG": "aa5ac5efc7d62db43cd8cd77b3c4b9f6",
"assets/assets/images/POS/10.PNG": "9fdbc19c99ee0c578e0e132607488035",
"assets/assets/images/POS/2.PNG": "3f6702344781111e4fb0d92876577e0f",
"assets/assets/images/POS/3.PNG": "4a4199af0041199e682663f10b1a7815",
"assets/assets/images/POS/4.PNG": "bd8b52d71c880a5ecaf34e5b3e631964",
"assets/assets/images/POS/5.PNG": "5148405bd9ea97b4bf321b45243e181d",
"assets/assets/images/POS/6.PNG": "9bc612fdd319929b5aee6c369bcf2a20",
"assets/assets/images/POS/7.PNG": "24e65bbf4b55e2c0de59b3906a7148c6",
"assets/assets/images/POS/8.PNG": "e794e7430edf0b37da70cb886b0ae330",
"assets/assets/images/POS/9.PNG": "620f3084e5340e2abb2f51630c374af4",
"assets/assets/images/POS/Cover.png": "a058749abf538f2fee65ab979ddca5f0",
"assets/assets/images/side_bar_image.jpg": "09c43c1a52b906929285ada28a978a97",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ebc7e2b34186dafadde9f561f42d4e3e",
"assets/NOTICES": "3f91ee3f5c08f3634a201586a6547ff3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7d9c15e1d3d1899ec776780327cbcd8d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c6a674ce2faf1d24965610b293da26b8",
"/": "c6a674ce2faf1d24965610b293da26b8",
"main.dart.js": "b3b7d04aabbf048b6b465659230721c1",
"manifest.json": "e122dff0ba3e8923fde1b87380444017",
"temp.js": "18e57d910a4a7c018f3e38126f2cf766",
"version.json": "de4ffd71a80d2614a1abebb3b10ceda2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
