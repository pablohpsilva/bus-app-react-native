"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","bb2517b97583f456ea8a4be22b8445bb"],["static/css/app.6e65b4718f25c5d096f816799cd0510b.css","bd5e7d6d5dd7e86c7d03945dfd8ffdc7"],["static/img/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["static/img/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["static/img/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["static/img/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["static/img/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["static/img/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["static/img/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["static/img/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["static/img/icons/favicon-16x16.png","4bb1a55479d61843b89a2fdafa7849b3"],["static/img/icons/favicon-32x32.png","98b614336d9a12cb3f7bedb001da6fca"],["static/img/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/js/app.0ba5a6e4cc3dfd34b958.js","8f8d8f349e397ecd7708e7c7a53c59ed"],["static/js/manifest.fc67843e8e910b9f4686.js","3356f4f4c9e26d576a4b3143cc136c3b"],["static/js/vendor.7cf75f166fe661edffc6.js","e46c7e35f58566ce28752d37c2e3a086"],["static/manifest.json","7a9fd7c110dfe123353664bbcf6509bc"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});