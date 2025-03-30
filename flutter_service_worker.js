'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e11d973b791d8b3882a5da26c58f584a",
"assets/AssetManifest.bin.json": "fffa3c9fb789aab0a02bff7ffe9ea2b3",
"assets/AssetManifest.json": "77d34b595ccaedd532b49d2e73bfe950",
"assets/assets/bags_cutleries.jpg": "924361bd8f0b1f6d42cf5185917b82e4",
"assets/assets/bags_detergents.jpg": "4ecd2e4652850abc8f9c85d5f7a6b176",
"assets/assets/bags_freshener.jpg": "f3a12cd587eb3d427256654aff143927",
"assets/assets/bags_frozen.jpg": "46b749f43b2bc5ba8e1229002378a84b",
"assets/assets/bags_fruits.jpg": "993eee71842d5b6d5a283b571e245d68",
"assets/assets/bags_map.jpg": "757c0c65fea832bc6ffc055f44c5ca27",
"assets/assets/bags_meat.jpg": "ab4955d1619bba57da65933ed22325f6",
"assets/assets/bags_RTE.jpg": "da25f27f246c75a63da635b93cc2c227",
"assets/assets/bags_snacks.jpg": "2ac6269735d98f7e43bbb29a8ebbf6e9",
"assets/assets/bags_toilet.jpg": "24045eb7b29a5f27eb88d5508bb529c0",
"assets/assets/bags_toiletries.jpg": "bd7734d59cf1769bdb234113ba66df40",
"assets/assets/bags_toys.jpg": "3e6447cd9eca27c12868f5fa4c7fb66d",
"assets/assets/bags_vegetables.jpg": "f45bb3f053a7b51872255f254f504fc5",
"assets/assets/cutleries_bags.jpg": "2b24f9d67d5abff64594548fe964f6ba",
"assets/assets/cutleries_detergents.jpg": "24f36041a2bc56497b5550af1f7ea8a9",
"assets/assets/cutleries_frozen.jpg": "2d6b79e58a0e447c02054f8cf4af7b16",
"assets/assets/cutleries_fruits.jpg": "069827c14d41afaac30f7efb4b0ab04f",
"assets/assets/cutleries_map.jpg": "8bbabe932da34478ea5c59a195db9903",
"assets/assets/cutleries_meat.jpg": "9e6b1abb5ecc8c7a113fbdea412c6083",
"assets/assets/cutleries_RTE.jpg": "88f2e25cdebbc472214a200f1c4210a6",
"assets/assets/cutleries_stationaries.jpg": "2d2de68d79aaa9272c295db285f6144e",
"assets/assets/cutleries_toilet.jpg": "c0d468b9219ec69e1becc2ffba857a62",
"assets/assets/cutleries_vegetables.jpg": "7ca5b8796426dd61f699f56fbcf3b4b1",
"assets/assets/detergent_bags.jpg": "7e7069a3043bb1ccf233f8fa84834307",
"assets/assets/detergent_cutleries.jpg": "04e6a3fbb3dfb4d87c00f8559f26b5bf",
"assets/assets/detergent_freshner.jpg": "1bfcf7c5f1646b299315f8d15bfdc106",
"assets/assets/detergent_frozen.jpg": "6c854a525832c6bd2bf134dc097b2149",
"assets/assets/detergent_fruits.jpg": "01d5395b921e663fe67e42fdd4e76fb3",
"assets/assets/detergent_map.jpg": "a59066c806bb2c9e4513a8e3dd7a218c",
"assets/assets/detergent_snacks.jpg": "665a2188eb4dbb3db7a63240ec68b05c",
"assets/assets/floor_plan.jpeg": "c4c425f34afb624aa5d4473dff72f93c",
"assets/assets/freshener_bags.jpg": "641693c5138562b070636a09f2bb05a2",
"assets/assets/freshener_cutleries.jpg": "24f9ea24e8ae10eddd4969505a47bd50",
"assets/assets/freshener_detergents.jpg": "d49441ff1f08af258f1ee137235e3d10",
"assets/assets/freshener_frozen.jpg": "a7c481e93bd38dc024b0b28612d7f901",
"assets/assets/freshener_fruits.jpg": "24d8eb54ed7d05475c88290d72357829",
"assets/assets/freshener_map.jpg": "f15d9c8f00339a1e12876d927a58f3c9",
"assets/assets/freshener_meat.jpg": "f2f64b34083703d90668314809abd08b",
"assets/assets/freshener_RTE.jpg": "d298a63372210c4bec9162693c06c8c7",
"assets/assets/freshener_snacks.jpg": "ed93976814d2ec909fdaad876bbaee32",
"assets/assets/freshener_stationaries.jpg": "208fd03b6b5804d7fadea4d42bac15e3",
"assets/assets/freshener_toilet.jpg": "90b5267d0a7e39248dc75e5d839e530c",
"assets/assets/freshener_toys.jpg": "0bda47ecafc9ade56baba32fb02ae251",
"assets/assets/freshener_vegetables.jpg": "40788ed1e6f03dc23ecb86e072757bdb",
"assets/assets/frozen_bags.jpg": "05ae4d28bc05a14767bba8432854b871",
"assets/assets/frozen_cutleries.jpg": "21b8a263d0dc96d715e0f3e2346594f3",
"assets/assets/frozen_detergents.jpg": "4f65deeaf8681f576db29761395e8d71",
"assets/assets/frozen_freshener.jpg": "f7b749690ac0ff1167dd7b2cf3056f6a",
"assets/assets/frozen_fruits.jpg": "e9f12ebbd258d793c0f3c76c81d7c9c0",
"assets/assets/frozen_map.jpg": "d9da0e9a8420065986e65d04cdbbcc83",
"assets/assets/frozen_snacks.jpg": "a0747338050d19dda8f8d404d3b9751e",
"assets/assets/frozen_stationaries.jpg": "963c8cc6ce78d0d367146251124709d4",
"assets/assets/frozen_toilet.jpg": "d96ffd5d03513c2cf6c3ff5db85271f1",
"assets/assets/frozen_toiletries.jpg": "bc56f374172ac75f48a67475ae7738f9",
"assets/assets/frozen_toys.jpg": "489d5dfd194252e2f9337dc5e23bf244",
"assets/assets/fruits_map.jpg": "707b58581ee43cb4b3af039102b0eaa7",
"assets/assets/meat_bags.jpg": "0dd90d5cc86e24f310587bfeb2232aec",
"assets/assets/meat_cutleries.jpg": "0e621faeca2a5080c655f30ff4db353e",
"assets/assets/meat_detergent.jpg": "5bd41d20bfb0197e04a13422053f5915",
"assets/assets/meat_freshner.jpg": "64fa5106dc8e4f9187ed33b5a62f2fe0",
"assets/assets/meat_map.jpg": "832d6b9eccc2bcf337a2585efa65e49e",
"assets/assets/meat_snacks.jpg": "2542c953595a87c0c2226e5711b4117b",
"assets/assets/meat_stationaries.jpg": "486c011742ad844bac6f1e8c297193c6",
"assets/assets/meat_toileteries.jpg": "ddcc5a54d14dd2b0dcf6bb9d39d45eab",
"assets/assets/meat_toys.jpg": "77b1906e0b269f0fb98103b6c364f0ad",
"assets/assets/RTE_bag.jpg": "de27ab768e53e166ffba89eaa45748e8",
"assets/assets/RTE_cutleries.jpg": "5b27f4816563c980440938fb987d0dfb",
"assets/assets/RTE_detergents.jpg": "ee4f02b610c84d28848dc1569ccbf6f9",
"assets/assets/RTE_freshner.jpg": "74192ff03317c992eeff187c6d702d82",
"assets/assets/RTE_frozen.jpg": "c258ccfde2f4263e4cb0fccf229f5707",
"assets/assets/RTE_fruits.jpg": "79d13f067bbed47ea9b19b7af79cfff7",
"assets/assets/RTE_map.jpg": "a2f65ec98ec2125c297685d6f0138dcb",
"assets/assets/RTE_snacks.jpg": "27843073a8777d6209ce6436f53ef720",
"assets/assets/RTE_toileteries.jpg": "f838b781163bad0ce19daa8c558230d1",
"assets/assets/RTE_vegetables.jpg": "b5fb1c5d14f0b956e0fd8399b2a76eeb",
"assets/assets/snacks_map.jpg": "1fed5baf48d81f9ea05af716e4e84ef8",
"assets/assets/stationaries_cutleries.jpg": "948842927823b576c040e0d388acedf4",
"assets/assets/stationaries_detergents.jpg": "2e7542cabb72a4ba6e13e93fa7da99d2",
"assets/assets/stationaries_fresheners.jpg": "f81ab62ae7e5e1ac6f7b1d08a0ccc533",
"assets/assets/stationaries_frozen.jpg": "6db0d9ca3f604442be197e18e5c9020d",
"assets/assets/stationaries_fruits.jpg": "2062fbb5b15f7982cc2d2f7379097134",
"assets/assets/stationaries_map.jpg": "f179264f566855bd4172489242f5bc7f",
"assets/assets/stationaries_meat.jpg": "bc9e752432421eec3ef9700ae61757f8",
"assets/assets/stationaries_toileteries.jpg": "0a6bdd89c534aab403fdbad4e50d52c1",
"assets/assets/stationaries_toys.jpg": "b752b9e30ff2b9b4a5fadc87745d43f1",
"assets/assets/stationaries_vegetables.jpg": "7ab50ce53c14703f5b8cd52b044ba242",
"assets/assets/toiletries_bags.jpg": "204c273c618737f9beb87e491fd35320",
"assets/assets/toiletries_map.jpg": "4647a02379947d041cd1d1f6abd50ba1",
"assets/assets/toiletries_stationaries.jpg": "cfa46ecd787db807fe5d28ab08bc7a9f",
"assets/assets/toilet_bags.jpg": "b2251badcf47f7eab1cbabe7ccb7d2c6",
"assets/assets/toilet_cutleries.jpg": "e82c14deeeadbc248073efbb6c712fb3",
"assets/assets/toilet_fresheners.jpg": "03f94491a67c0d2532d3aa8c8f2e22fd",
"assets/assets/toilet_frozen.jpg": "59fe59625094e8cbdaae403ae8dd248b",
"assets/assets/toilet_fruits.jpg": "b96495f1d6c1a912fd12a97dfbedcb6c",
"assets/assets/toilet_map.jpg": "27efafad8c74a08acd17f7303172d4de",
"assets/assets/toilet_snacks.jpg": "8c6c352f946cde354c1c3ceb1084dc93",
"assets/assets/toilet_stationaries.jpg": "9cd5edfa8ff7f5d0fe0083144ca8bd3c",
"assets/assets/toilet_toileteries.jpg": "737645750e737fff3fb44b06234f4ca2",
"assets/assets/toilet_vegetable.jpg": "b5d38a8f5e54e0d34c3869ded1f7681f",
"assets/assets/toys_bag.jpg": "30c35fd6b65e50c0ab2134bb4347d84b",
"assets/assets/toys_cutleries.jpg": "a1a217514c8154a65cf2a929a6a7aaad",
"assets/assets/toys_fresheners.jpg": "6ba446fb1cbe74f10249ca249efaf091",
"assets/assets/toys_frozen.jpg": "4315bc56c8fd4496c65f8516ef372557",
"assets/assets/toys_fruits.jpg": "b6c764ca632f60c99ab3fb982b5f251b",
"assets/assets/toys_map.jpg": "cf9d702ff6cb543d957daaa392a80b1e",
"assets/assets/toys_snacks.jpg": "a982b8369f3b78ef06e0957d1ba57aa0",
"assets/assets/toys_stationaries.jpg": "c394a720293fdeeb94fc628ca41ea55a",
"assets/assets/toys_toileteries.jpg": "9398173c6b400d63f6fd05c1d9fd99b0",
"assets/assets/toys_vegetables.jpg": "47d8d23fa1bf1a84a2aab219ee914244",
"assets/assets/vegetable_map.jpg": "4de38e9405809cb4edbe88f821d055f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9602be7fcac39e386856cf2b022422b",
"assets/NOTICES": "6a00e67855cb33af24b1ffbc9613b335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_barcode_scanner/assets/barcode.html": "55dd479b440ade30760a1b3a4db300f1",
"assets/packages/simple_barcode_scanner/assets/html5-qrcode.min.js": "d88d3200cb547c9e86ee972975561dcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5a754e8e01b7055150828c73d3ef7832",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a888caf5eb026c9acf2c13d4adf7bae9",
"/": "a888caf5eb026c9acf2c13d4adf7bae9",
"main.dart.js": "1c910ed552534014c7f73c17b84845b0",
"manifest.json": "080c236a2d83554120749b8c3dd2fec7",
"version.json": "5281d6f56a2494bd06ba049cbd77ad36"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
