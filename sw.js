/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-015765ce0d6419b70618.js"
  },
  {
    "url": "framework-f09f45822e9ba8fc378b.js"
  },
  {
    "url": "app-7c9e060487bff7f6bbf3.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fab1b548b373c2e511e32595f322ee43"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0eefb2092d535e2a0e88.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b9e252b48256d1de13672d3493fde89f"
  },
  {
    "url": "styles.ab865389455927b1e44a.css"
  },
  {
    "url": "styles-adf20a089d5edc383fbd.js"
  },
  {
    "url": "29107295-0a3aac36b1b9a8a1f06f.js"
  },
  {
    "url": "81854ea35a57a72ecea4e1ad00331346615049e7-644b099117b34956bf8f.js"
  },
  {
    "url": "dc1df2337fb7f999e9fd3a028702d29ff2764eab-fa64dcce7d876a344882.js"
  },
  {
    "url": "component---src-pages-index-js-e833e04bdd2fc53b652a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "component---src-templates-property-js-520baf1651442cbf971b.js"
  },
  {
    "url": "page-data/property/apartment-to-buy-queens/page-data.json",
    "revision": "90773bb2c31010ae868266fe29015d55"
  },
  {
    "url": "page-data/property/commercial-space-san-francisco/page-data.json",
    "revision": "bf4387e96aeeb1d8f2d48b3c633b77cb"
  },
  {
    "url": "page-data/property/energy-certificate-for-eu/page-data.json",
    "revision": "d6e7b6a852f4d5a46ee39af273a407c9"
  },
  {
    "url": "page-data/property/luxury-home-in-manhattan/page-data.json",
    "revision": "4ed5aa9b2d2be417a59cd0f64eaf7e80"
  },
  {
    "url": "page-data/property/new-clue-apartment/page-data.json",
    "revision": "ec24b306c60dcdf97a47b14fb5e141f1"
  },
  {
    "url": "page-data/property/office-space-toronto/page-data.json",
    "revision": "dd7c1f14edbe2ca3e8cc87a5368de0a9"
  },
  {
    "url": "page-data/property/resort-valley-ocs/page-data.json",
    "revision": "227780045e755ee297360ebc55c59427"
  },
  {
    "url": "component---src-pages-about-us-js-2747b8d0d9f230f3439e.js"
  },
  {
    "url": "page-data/about-us/page-data.json",
    "revision": "c43107594c62b91b965b9783c26aa0bd"
  },
  {
    "url": "component---src-pages-contact-js-24a1f0c071a51425410f.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "834bbf3d543e4072836a33f9371aa512"
  },
  {
    "url": "component---src-pages-properties-js-c6c228b03692baf192e4.js"
  },
  {
    "url": "page-data/properties/page-data.json",
    "revision": "771efe1fffeac17aea6cf111982ab32e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "eeba92bf3d61326a98150f1f8e96155e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-7c9e060487bff7f6bbf3.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
