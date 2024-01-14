'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b5e0acccd8b9282e5087885d9233b839",
"assets/AssetManifest.bin.json": "1598103f082686607210eafd84386bb1",
"assets/AssetManifest.json": "4c924f70def837b1252833c2d0304380",
"assets/assets/images/icon.png": "013f61e6a10245f45a25f582de8460a4",
"assets/assets/images/order/face.png": "bd1412cae8493979de43bf0de0827abe",
"assets/assets/images/order/product_list/potato.png": "3073058f64a9fec5dbd27c58c8e050f9",
"assets/assets/images/vendor/vendor.png": "46319a28b6fbc27b582bd33cf29c2e9d",
"assets/assets/sounds/error.mp3": "e77530478844f5163034f37ec0df559f",
"assets/assets/svg/common/arrow_return_icon.svg": "d350dffe92826ad214a125989c421f09",
"assets/assets/svg/common/change_icon.svg": "74aafe26e8c2c7bb300caa15bb613bcc",
"assets/assets/svg/common/circle.svg": "b41b373d3403a984b2bf9e252fc6fddc",
"assets/assets/svg/common/customer_type_icon.svg": "5b5917ecd9a65e69b4738231fd84a424",
"assets/assets/svg/common/date_icon.svg": "81d8c160f7ed0cb46423d4c6b8ca62d4",
"assets/assets/svg/common/delete_icon.svg": "085b3b31caa7fa3ee2ad139268b9db06",
"assets/assets/svg/common/delete_icon_2.svg": "40de81c13119c01dbadab6ee9fe2c057",
"assets/assets/svg/common/details_icon.svg": "c065973d92abb8f5a71e0927066c1960",
"assets/assets/svg/common/discount_icon.svg": "d64957d00b12772926a92ca405a968b3",
"assets/assets/svg/common/edit_icon.svg": "4d83e065cb87823c32695bb6e06fc6f8",
"assets/assets/svg/common/edit_icon_2.svg": "de3618a289e548c327c7acf2e3651127",
"assets/assets/svg/common/email_icon.svg": "46f16eafeb6c9687947999deb1622283",
"assets/assets/svg/common/expand_icon.svg": "a6f6ef2c7bc253ab2ee6cbaef742f4b8",
"assets/assets/svg/common/filter_icon.svg": "1f05dc28e3c4f527745f4c70d194df1e",
"assets/assets/svg/common/id_icon.svg": "be1d24b33220297fdee176a43d88592a",
"assets/assets/svg/common/list.svg": "ee2d14459dc9998ebcaa3f60447ab928",
"assets/assets/svg/common/location_icon.svg": "6bb65ffdbb7e9178dc8a52add3e55f2a",
"assets/assets/svg/common/logo.svg": "3ac7086f140700eb746cf487f3e53344",
"assets/assets/svg/common/logout_icon.svg": "f598cdc8edf2551bd4732f9e169511a2",
"assets/assets/svg/common/menu.svg": "40e52b0a1c412824410d5adf39d771fd",
"assets/assets/svg/common/note_icon.svg": "18850d90cb6d72422956e8b1efeb284f",
"assets/assets/svg/common/order.svg": "b14bcc736bd31ee8b85b4e5704ba339d",
"assets/assets/svg/common/packaging_size_icon.svg": "df2b1dc72adb45229df8991af1dc7b8d",
"assets/assets/svg/common/phone_icon.svg": "1f0999358238d176dd2ce11e15a9dcd2",
"assets/assets/svg/common/pickup_location_icon.svg": "bfe314d6ff27bc6d8733b56ed57584f4",
"assets/assets/svg/common/product_category_icon.svg": "0b3982780055ce06e7489dd72be3055d",
"assets/assets/svg/common/product_variant_icon.svg": "e1ad9aa2bbe589142bbd7395a36cd830",
"assets/assets/svg/common/purchase_icon.svg": "12aa59deb72c2b5174d4de101b75c95d",
"assets/assets/svg/common/quantity_icon.svg": "132c6614b1c9366b54bffa059ab78786",
"assets/assets/svg/common/search_icon.svg": "cef001ca1da87acd7902d747bd21f99a",
"assets/assets/svg/common/text_logo.svg": "bdef8a4b720368cdacac169b490071ac",
"assets/assets/svg/common/time_icon.svg": "0263d1cfeeb0d40522eb1fe595d9bb2a",
"assets/assets/svg/common/total_amount_icon.svg": "05c81a1ab524903af8d9ad316308855a",
"assets/assets/svg/common/unit_icon.svg": "113b11e5cc8bc86f4284810a18a90e8f",
"assets/assets/svg/common/unit_price_icon.svg": "92af14c0326ac53e5e41decdf8372d45",
"assets/assets/svg/common/write_icon.svg": "e85edbaab0db45be72aa37a726ceea72",
"assets/assets/svg/common/zone_icon.svg": "d9d1ec71651ea10db50e6432fe112015",
"assets/FontManifest.json": "3d155a1e70da641e1a0f5d1342a35f5f",
"assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/fonts/MaterialIcons-Regular.otf": "d648fe882277628fa72ff7e84c7d9c4b",
"assets/NOTICES": "2102070da9d6b658e91af7423fb55d25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d7c13641b246e015629b7d67d6ced4ed",
"/": "d7c13641b246e015629b7d67d6ced4ed",
"main.dart.js": "05f83cadb58185db248d4b24bde356c9",
"manifest.json": "9276b900d3790ed5076df5b748953617",
"version.json": "5feb268f7f9c46114f2fcb195a303237"};
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
