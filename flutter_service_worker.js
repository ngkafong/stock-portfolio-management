'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e0817060a8de676f1ca047cd8824736b",
"index.html": "35723edd21f1d474cb432f4b2c9ba20d",
"/": "35723edd21f1d474cb432f4b2c9ba20d",
"main.dart.js": "a3e4f63e8014534811413be90192694f",
"README.md": "95268fbe6361bbad4d10befcef5e0aa7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71f0cd552d0e46ae9c10dc6077246124",
".git/ORIG_HEAD": "f8766d888a5717eb29c60e5a9c845e4e",
".git/config": "227d8b068785c6e37ab3853e0d293857",
".git/objects/59/7af1f57717fcc1a3c88c8efa50be6926688b28": "0a02f7239756444ee63f3d93ad308e90",
".git/objects/0c/c6af67c09e059a72205601f03921c5c1c132d5": "63232695d0bfe8ff7351d80607a58045",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/dc4f934e16c81e4fa2a8846bafd43df8fafe3e": "074f1590535c36810e81604d755b6248",
".git/objects/04/fbd3433302954cf8b435ff5f7bf71c60542ce5": "80010bc9fda3fe34d29114056201c9fb",
".git/objects/04/8c87f80b63ac33b1ac133f5378ee950430dd19": "d7af0aa55972785fc5ba43819984ece7",
".git/objects/6a/d4ffe1817c170e1d76faafe09b1f8467b02d0f": "2b029b7a7cbbdfe1971cc0281bef873f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/60/b522ce90fa366240054f56382a9ae17d8d80f2": "33f653d5359d247707344a300f5ed591",
".git/objects/a5/427628a2209ce38a67be41413b4a143aa4fc7e": "edd02075840c80090eb944b96bd9bd9b",
".git/objects/d8/40fcbda1e3d59dca9552da425b12fb2402cbb3": "eed5599d56c02524b872184dfc640a1a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/264cda66a61a52ab11b040da2b7449a6298170": "0f5427d5e46a12b299c53532bbd71edd",
".git/objects/f4/97b700e898e74a7ed220fb3371d16cae4aed4a": "070a57562356522054103026678408c1",
".git/objects/f3/2f95850a925ca9e485e487f41c7601bf532a11": "50b2f552e43c2f5b0943c9a98c46c7b2",
".git/objects/f3/c2dcc1f844fcee9d34d89616b40f588921373c": "881f76521a967aba73fa2230d067e869",
".git/objects/eb/3e360980aa920091529b3c5492d923a9ec5776": "736c6f3ffc8b2d7c2266d7793f300b8f",
".git/objects/e4/e06f45706daba8d7959a990b6eda3d0dc41070": "b791dfdb4fbfb0b5e3af878c997ee172",
".git/objects/fb/4eead4fe5af99d11f4b2a89bac90eb239fbc2f": "c48949eb30896eea196705b5dced09ec",
".git/objects/c1/fe47d26d449f2d0289ccf6723aa968182a1ccc": "ff65ec4c87a6a81b238116c3e484d46c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/45/8ebc8ea8008ec2879a977ce55d8a2262a308e0": "8b89da43eb278c12bf492a68b2b6a9b5",
".git/objects/1f/062e99cb3c2cf0bd2190f3658435bc0f837157": "b1c977e76034f5cf2ef59ffd16208655",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/28/28c1bd3c2df67bb59981f5beab59dec6dfb8d2": "7fd7353c6c05ecaf72e55e580b8243ff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f6e1f7c88883a706939c985bccda7ea5e04c7a": "eeb38a2168d4b710d00081d723f3f054",
".git/objects/19/31623a247c4b2bcd189a1bd7648161640d77e4": "3cae1a0327836609752d65cc049b66c1",
".git/objects/4c/bc23b2b8d8adb10eab40f94170416bb55eb689": "2b9e1651e3718efdc0123ef164244655",
".git/objects/44/08c8d88c422eee479da3767a891d1c8fcb35ef": "0d866e2cbbb2fe539f4ef50ba802f616",
".git/objects/2a/aa94cb16b52c7e97556fe890c98cda1589c538": "5aa54c849e379826bbefb6dc4e864c57",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/89bde311121c30943b1491f6f126828975c5bc": "9a4dd3801984b36ce563027546614302",
".git/objects/07/93d46a606e028af0902a4280ed23805ac23353": "7400debc9b713713a9e3072676f5c5d8",
".git/objects/6e/1847c6e64fa85324a81ca3599134db497efa22": "d23301723fe2438d7697b15166ed58c7",
".git/objects/9a/e71929cb92c66a17172442901660bd4166298d": "00c84586133dc7ab835f208822772a80",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/96/411f129b5ae0cc6c2a5e2a83f2cfb36dd37f1e": "3a8a5f5f8de8a2b5ec09312f205f1fc7",
".git/objects/98/94a3afa50b3b7cc3763b6e5ee7ad1806329010": "612243fb06bd8ef7ca734c1629be6669",
".git/objects/08/40b5256f9a8067d305a85df58dfd5299e0387b": "a42338bd509660f9755bcc43ec47b32d",
".git/objects/06/068d07f22c04bcc3af56939fc1d10d34096b77": "cae9dfdd2b0855f785c84101dd3cc51c",
".git/objects/06/692d88b5224149ec43a47254fe106ff890e7c4": "be459d0fb34e7ac57dc649f20791d9c9",
".git/objects/63/0de4b0ab90576f6c297b0a0006ee5b45c7f142": "f1ef80ab29e927e7e83f3c6b099320e9",
".git/objects/d4/604e385b735f7d1d7b795e6003d2860730b00b": "37e7b13aa61bcddf5c1dc9d75fca0e3e",
".git/objects/d4/502fd87e561451c2149d94adfebfe76b11cca2": "302a1196f640070529fa31a324f07586",
".git/objects/ba/0e22007b4f5b9f72e5e0eaa5820d1c303a46a7": "80b723794ef829410591b520317c6284",
".git/objects/a0/6e67729189b245bff94e23fe97bc996b4909a1": "a6aac6327be37a2442f5531e2a9f8ffd",
".git/objects/b8/3edcbb98b256f945c9f4f00e54f4a7f743600e": "2dd708a3920c556d505cc43ab84fed66",
".git/objects/b1/a2857ebf9089067ecba44a644c32cd0528d74a": "26ba6cabf53bcf91482dacf8bf763322",
".git/objects/d2/35109d9f785d20be9e98c4a0b3d7a1f43f3833": "6b51634d179ef6389cf39e5d401885fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/45d58e256e12e9a2f4970fb318acbd0d657c28": "d789b50bf35523d1231e09dde2243686",
".git/objects/b0/9a2fe8947f3f878472acbb7ba391668996320f": "8e25d85857bc88f018df536919aaf514",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/f7e117eb3253fcb9bf41e84bf128d38025eebd": "89700fe805bd8b833c71aae9a57d39cd",
".git/objects/cd/6fe58e760508ab2ab434d345fdc7f2f8333ebf": "41886ba0ae66c2d8167ce7601930803e",
".git/objects/ff/d8f8a107a8afb4f714619d33c84d9fb12e57cd": "e49835f05a4f6bfc21b342fcb9965310",
".git/objects/f6/c304524e40b269f250f51956a4932396d1405e": "0357dc88e59e8c0c6c1a9c6b8a90d8a1",
".git/objects/ce/34913f0ece75f253500757608102a14109d971": "ff6527cd017aae619774baa63cc9b767",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/a7dc4dd6dda7b19e429f46bab133090dd0b55a": "cbf9dcc3c1d2e0a7f3e3383c642c558c",
".git/objects/41/ccaae8c8204daad1048d2aeb25c7303c8a5944": "d67ee71956b378690f080b2acf4e40dd",
".git/objects/70/8c1a54de8e55d44fba1f946121f03828faaab0": "c1e00a306fd91b7fcd7c9aef7b9a3c12",
".git/objects/23/ff10c8a840c25003d1139877174ab1ddf242da": "7ae24281e2bd81c43d426ca77ed345cc",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/49/1df5cb9cf2b5ed0fe5b2349512078b0e19d612": "7a0ad6b2e9e310674d5edd81a2418f1b",
".git/objects/13/6456fb3954004f3cd52c9b773919bcbef34bb7": "9621bb2ba25bb04c809f115f35e7a878",
".git/objects/8e/7ce7330c2f7e42d6eab9bd61cafe09b5b2ca74": "4e8e54b5ab9be0b7e10cf9d8f4e0afdb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2019c5f8ffe81cddc467205a6f438fb7",
".git/logs/refs/heads/master": "f1e7f7f371b05afd0f93a7b2d8055cb3",
".git/logs/refs/remotes/origin/master": "5442361ab858fb5c992ebf33e5fd3c28",
".git/logs/refs/stash": "1009a0dbee9e3207899792a1a6b447a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "366cdd62db9c8b21e68838e738e1457e",
".git/refs/remotes/origin/master": "366cdd62db9c8b21e68838e738e1457e",
".git/refs/stash": "33269e615e92e996fad2d61493eb4fbf",
".git/index": "b5ffc1abf06908688bed9289367e6284",
".git/COMMIT_EDITMSG": "50a9bfb541caff481ffc365d481320a5",
".git/FETCH_HEAD": "43aa7022821e528248108bee3552f683",
".git/sourcetreeconfig": "9cb1408557a3e9763ab8b229952fc22d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "bcc49520519b4b83a407ed468803ccff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  ".",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
