import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import * as node_os from 'node:os';
import { tmpdir } from 'node:os';
import { request as request$1, Server } from 'node:http';
import * as node_path from 'node:path';
import { resolve, dirname, join } from 'node:path';
import * as node_crypto from 'node:crypto';
import node_crypto__default from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, setHeader, getHeader, getQuery as getQuery$1, getRequestWebStream, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, readBody, getResponseStatusText } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///D:/site_down_detector/Site_Down_Detector/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///D:/site_down_detector/Site_Down_Detector/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { z } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/zod/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, encodePath, joinRelativeURL } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/ufo/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unhead/dist/server.mjs';
import { isVNode, isRef, toValue } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/vue/index.mjs';
import { DeprecationsPlugin } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unhead/dist/legacy.mjs';
import { PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unhead/dist/plugins.mjs';
import { klona } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/defu/dist/defu.mjs';
import destr, { destr as destr$1 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/scule/dist/index.mjs';
import { defineDiagnostics, createConsoleReporter } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/nostics/dist/index.mjs';
import { ansiFormatter } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/nostics/dist/formatters/ansi.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { renderToString } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/vue/server-renderer/index.mjs';
import { stringify, uneval } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/devalue/index.js';
import { createHooks } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unstorage/drivers/fs.mjs';
import { digest, hash as hash$1 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/youch-core/build/index.js';
import { Youch } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/source-map/source-map.js';
import * as node_async_hooks from 'node:async_hooks';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/errx/dist/index.mjs';
import { PrismaBetterSqlite3 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/@prisma/adapter-better-sqlite3/dist/index.mjs';
import { fileURLToPath } from 'node:url';
import * as dist from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/@prisma/client-runtime-utils/dist/index.mjs';
import * as node_fs from 'node:fs';
import { promises } from 'node:fs';
import * as node_events from 'node:events';
import { lookup } from 'node:dns/promises';
import { isIP, BlockList } from 'node:net';
import { request } from 'node:https';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/pathe/dist/index.mjs';
import { walkResolver } from 'file://D:/site_down_detector/Site_Down_Detector/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"D:/site_down_detector/Site_Down_Detector/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/site_down_detector/Site_Down_Detector","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/site_down_detector/Site_Down_Detector/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/site_down_detector/Site_Down_Detector/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/site_down_detector/Site_Down_Detector/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/site_down_detector/Site_Down_Detector/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

//#region src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

//#region src/runtime/utils/dev.ts
const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e.data) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

//#region src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) return;
	const defaultRes = await defaultHandler(error, event, { json: true });
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) defaultRes.body.stack = defaultRes.body.stack.join("\n");
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	const reqHeaders = getRequestHeaders(event);
	const res = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		errorObject.description = errorObject.message;
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
	}
	return send(event, html);
};

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

//#region src/runtime/diagnostics.ts
const ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
/**
* E8xxx
* Nitro server runtime (SSR rendering / dev server) diagnostics.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const serverDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8003: {
			why: (p) => `Failed to stringify dev server logs.${p.error ? ` Received \`${p.error}\`.` : ""}`,
			fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.",
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8005: {
			why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.",
			fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.",
			docs: false
		}
	}
});

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"Мониторинг доступности сайтов, история проверок и уведомления."}],"link":[],"style":[],"script":[],"noscript":[],"title":"SiteWatch — мониторинг сайтов","htmlAttrs":{"lang":"ru"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const rootDir = "D:/site_down_detector/Site_Down_Detector";

//#region src/runtime/plugins/dev-server-logs.ts
const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : void 0,
	URL: (data) => data instanceof URL ? data.toString() : void 0,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : void 0
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
var dev_server_logs_default = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) return;
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) continue;
			if (EXCLUDE_TRACE_RE.test(entry.source)) continue;
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			serverDiagnostics.NUXT_E8003({
				error: e instanceof Error ? e.toString() : void 0,
				cause: e
			});
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(dist);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_async_hooks);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_events);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_os);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_crypto);

var pu=Object.create;var xr=Object.defineProperty;var du=Object.getOwnPropertyDescriptor;var mu=Object.getOwnPropertyNames;var fu=Object.getPrototypeOf,gu=Object.prototype.hasOwnProperty;var eo=(e,t)=>()=>(e&&(t=e(e=0)),t);var at=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),lt=(e,t)=>{for(var r in t)xr(e,r,{get:t[r],enumerable:true});},to=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of mu(t))!gu.call(e,i)&&i!==r&&xr(e,i,{get:()=>t[i],enumerable:!(n=du(t,i))||n.enumerable});return e};var Pe=(e,t,r)=>(r=e!=null?pu(fu(e)):{},to(t||!e||!e.__esModule?xr(r,"default",{value:e,enumerable:true}):r,e)),yu=e=>to(xr({},"__esModule",{value:true}),e);var ho=at((Rf,Lu)=>{Lu.exports={name:"@prisma/engines-version",version:"7.10.0-4.0edf323efd1d98336f3f0a68684b56f689b900d3",main:"index.js",types:"index.d.ts",license:"Apache-2.0",author:"Tim Suchanek <suchanek@prisma.io>",prisma:{enginesVersion:"0edf323efd1d98336f3f0a68684b56f689b900d3"},repository:{type:"git",url:"https://github.com/prisma/engines-wrapper.git",directory:"packages/engines-version"},devDependencies:{"@types/node":"18.19.76",typescript:"4.9.5"},files:["index.js","index.d.ts"],scripts:{build:"tsc -d"}};});var wo=at(Pr=>{Object.defineProperty(Pr,"__esModule",{value:true});Pr.enginesVersion=void 0;Pr.enginesVersion=ho().prisma.enginesVersion;});var bo=at((If,xo)=>{xo.exports=e=>{let t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((r,n)=>Math.min(r,n.length),1/0):0};});var So=at((Nf,vo)=>{vo.exports=(e,t=1,r)=>{if(r={indent:" ",includeEmptyLines:false,...r},typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof t!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(typeof r.indent!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);if(t===0)return e;let n=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,r.indent.repeat(t))};});var Ro=at((Lf,Tr)=>{Tr.exports=(e={})=>{let t;if(e.repoUrl)t=e.repoUrl;else if(e.user&&e.repo)t=`https://github.com/${e.user}/${e.repo}`;else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");let r=new URL(`${t}/issues/new`),n=["body","title","labels","template","milestone","assignee","projects"];for(let i of n){let o=e[i];if(o!==void 0){if(i==="labels"||i==="projects"){if(!Array.isArray(o))throw new TypeError(`The \`${i}\` option should be an array`);o=o.join(",");}r.searchParams.set(i,o);}}return r.toString()};Tr.exports.default=Tr.exports;});var qn=at((Ig,Fo)=>{Fo.exports=function(){function e(t,r,n,i,o){return t<r||n<r?t>n?n+1:t+1:i===o?r:r+1}return function(t,r){if(t===r)return 0;if(t.length>r.length){var n=t;t=r,r=n;}for(var i=t.length,o=r.length;i>0&&t.charCodeAt(i-1)===r.charCodeAt(o-1);)i--,o--;for(var s=0;s<i&&t.charCodeAt(s)===r.charCodeAt(s);)s++;if(i-=s,o-=s,i===0||o<3)return o;var a=0,u,m,P,T,S,I,A,M,L,q,E,D,H=[];for(u=0;u<i;u++)H.push(u+1),H.push(t.charCodeAt(s+u));for(var ce=H.length-1;a<o-3;)for(L=r.charCodeAt(s+(m=a)),q=r.charCodeAt(s+(P=a+1)),E=r.charCodeAt(s+(T=a+2)),D=r.charCodeAt(s+(S=a+3)),I=a+=4,u=0;u<ce;u+=2)A=H[u],M=H[u+1],m=e(A,m,P,L,M),P=e(m,P,T,q,M),T=e(P,T,S,E,M),I=e(T,S,I,D,M),H[u]=I,S=T,T=P,P=m,m=A;for(;a<o;)for(L=r.charCodeAt(s+(m=a)),I=++a,u=0;u<ce;u+=2)A=H[u],H[u]=I=e(A,m,I,L,H[u+1]),m=A;return I}}();});var qo=eo(()=>{});var Uo=eo(()=>{});var Hm={};lt(Hm,{AnyNull:()=>ee.AnyNull,DMMF:()=>Qt,DbNull:()=>ee.DbNull,Debug:()=>K,Decimal:()=>cu.Decimal,Extensions:()=>Rn,JsonNull:()=>ee.JsonNull,NullTypes:()=>ee.NullTypes,ObjectEnumValue:()=>ee.ObjectEnumValue,PrismaClientInitializationError:()=>_.PrismaClientInitializationError,PrismaClientKnownRequestError:()=>_.PrismaClientKnownRequestError,PrismaClientRustPanicError:()=>_.PrismaClientRustPanicError,PrismaClientUnknownRequestError:()=>_.PrismaClientUnknownRequestError,PrismaClientValidationError:()=>_.PrismaClientValidationError,Public:()=>Cn,Sql:()=>Fe.Sql,createParam:()=>os,defineDmmfProperty:()=>ps,deserializeJsonObject:()=>Ae,deserializeRawResult:()=>Tn,dmmfToRuntimeDataModel:()=>so,empty:()=>Fe.empty,getPrismaClient:()=>au,getRuntime:()=>uu,isAnyNull:()=>ee.isAnyNull,isDbNull:()=>ee.isDbNull,isJsonNull:()=>ee.isJsonNull,isObjectEnumValue:()=>ee.isObjectEnumValue,join:()=>Fe.join,makeStrictEnum:()=>lu,makeTypedQueryFactory:()=>ds,raw:()=>Fe.raw,serializeJsonQuery:()=>Vr,skip:()=>Lr,sqltag:()=>Fe.sql,warnOnce:()=>Vn});var client=yu(Hm);var Rn={};lt(Rn,{defineExtension:()=>ro,getExtensionContext:()=>no});function ro(e){return typeof e=="function"?e:t=>t.$extends(e)}function no(e){return e}var Cn={};lt(Cn,{validator:()=>io});function io(...e){return t=>t}var Ie=class{_map=new Map;get(t){return this._map.get(t)?.value}set(t,r){this._map.set(t,{value:r});}getOrCreate(t,r){let n=this._map.get(t);if(n)return n.value;let i=r();return this.set(t,i),i}};function qe(e){return e.substring(0,1).toLowerCase()+e.substring(1)}function oo(e,t){let r={};for(let n of e){let i=n[t];r[i]=n;}return r}function Nt(e){let t;return {get(){return t||(t={value:e()}),t.value}}}function so(e){return {models:In(e.models),enums:In(e.enums),types:In(e.types)}}function In(e){let t={};for(let{name:r,...n}of e)t[r]=n;return t}var as=require$$0;var br={};lt(br,{$:()=>po,bgBlack:()=>Au,bgBlue:()=>ku,bgCyan:()=>Nu,bgGreen:()=>Cu,bgMagenta:()=>Ou,bgRed:()=>Ru,bgWhite:()=>Du,bgYellow:()=>Iu,black:()=>Eu,blue:()=>He,bold:()=>Ee,cyan:()=>_e,dim:()=>Dt,gray:()=>$t,green:()=>Ft,grey:()=>Su,hidden:()=>bu,inverse:()=>xu,italic:()=>wu,magenta:()=>Tu,red:()=>ze,reset:()=>hu,strikethrough:()=>Pu,underline:()=>Mt,white:()=>vu,yellow:()=>_t});var kn,ao,lo,uo,co=true;typeof process<"u"&&({FORCE_COLOR:kn,NODE_DISABLE_COLORS:ao,NO_COLOR:lo,TERM:uo}=process.env||{},co=process.stdout&&process.stdout.isTTY);var po={enabled:!ao&&lo==null&&uo!=="dumb"&&(kn!=null&&kn!=="0"||co)};function B(e,t){let r=new RegExp(`\\x1b\\[${t}m`,"g"),n=`\x1B[${e}m`,i=`\x1B[${t}m`;return function(o){return !po.enabled||o==null?o:n+(~(""+o).indexOf(i)?o.replace(r,i+n):o)+i}}var hu=B(0,0),Ee=B(1,22),Dt=B(2,22),wu=B(3,23),Mt=B(4,24),xu=B(7,27),bu=B(8,28),Pu=B(9,29),Eu=B(30,39),ze=B(31,39),Ft=B(32,39),_t=B(33,39),He=B(34,39),Tu=B(35,39),_e=B(36,39),vu=B(37,39),$t=B(90,39),Su=B(90,39),Au=B(40,49),Ru=B(41,49),Cu=B(42,49),Iu=B(43,49),ku=B(44,49),Ou=B(45,49),Nu=B(46,49),Du=B(47,49);var Mu=100,mo=["green","yellow","blue","magenta","cyan","red"],Lt=[],fo=Date.now(),Fu=0,On=typeof process<"u"?process.env:{};globalThis.DEBUG??=On.DEBUG??"";globalThis.DEBUG_COLORS??=On.DEBUG_COLORS?On.DEBUG_COLORS==="true":true;var Vt={enable(e){typeof e=="string"&&(globalThis.DEBUG=e);},disable(){let e=globalThis.DEBUG;return globalThis.DEBUG="",e},enabled(e){let t=globalThis.DEBUG.split(",").map(i=>i.replace(/[.+?^${}()|[\]\\]/g,"\\$&")),r=t.some(i=>i===""||i[0]==="-"?false:e.match(RegExp(i.split("*").join(".*")+"$"))),n=t.some(i=>i===""||i[0]!=="-"?false:e.match(RegExp(i.slice(1).split("*").join(".*")+"$")));return r&&!n},log:(...e)=>{let[t,r,...n]=e;(console.warn??console.log)(`${t} ${r}`,...n);},formatters:{}};function _u(e){let t={color:mo[Fu++%mo.length],enabled:Vt.enabled(e),namespace:e,log:Vt.log,extend:()=>{}},r=(...n)=>{let{enabled:i,namespace:o,color:s,log:a}=t;if(n.length!==0&&Lt.push([o,...n]),Lt.length>Mu&&Lt.shift(),Vt.enabled(o)||i){let u=n.map(P=>typeof P=="string"?P:$u(P)),m=`+${Date.now()-fo}ms`;fo=Date.now(),globalThis.DEBUG_COLORS?a(br[s](Ee(o)),...u,br[s](m)):a(o,...u,m);}};return new Proxy(r,{get:(n,i)=>t[i],set:(n,i,o)=>t[i]=o})}var K=new Proxy(_u,{get:(e,t)=>Vt[t],set:(e,t,r)=>Vt[t]=r});function $u(e,t=2){let r=new Set;return JSON.stringify(e,(n,i)=>{if(typeof i=="object"&&i!==null){if(r.has(i))return "[Circular *]";r.add(i);}else if(typeof i=="bigint")return i.toString();return i},t)}function go(e=7500){let t=Lt.map(([r,...n])=>`${r} ${n.map(i=>typeof i=="string"?i:JSON.stringify(i)).join(" ")}`).join(`
`);return t.length<e?t:t.slice(-e)}function yo(){Lt.length=0;}function $e(e,t){throw new Error(t)}var Po=Pe(bo(),1);function Nn(e){let t=(0, Po.default)(e);if(t===0)return e;let r=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(r,"")}var Eo="prisma+postgres",Er=`${Eo}:`;function To(e){return e?.toString().startsWith(`${Er}//`)??false}function Dn(e){if(!To(e))return  false;let{host:t}=new URL(e);return t.includes("localhost")||t.includes("127.0.0.1")||t.includes("[::1]")}var Ut={};lt(Ut,{error:()=>Uu,info:()=>qu,log:()=>Vu,query:()=>ju,should:()=>Ao,tags:()=>qt,warn:()=>Mn});var qt={error:ze("prisma:error"),warn:_t("prisma:warn"),info:_e("prisma:info"),query:He("prisma:query")},Ao={warn:()=>!process.env.PRISMA_DISABLE_WARNINGS};function Vu(...e){console.log(...e);}function Mn(e,...t){Ao.warn()&&console.warn(`${qt.warn} ${e}`,...t);}function qu(e,...t){console.info(`${qt.info} ${e}`,...t);}function Uu(e,...t){console.error(`${qt.error} ${e}`,...t);}function ju(e,...t){console.log(`${qt.query} ${e}`,...t);}function Fn({onlyFirst:e=false}={}){let r=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");return new RegExp(r,e?void 0:"g")}var Bu=Fn();function ut(e){if(typeof e!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);return e.replace(Bu,"")}var jt=Pe(require$$1);function _n(e){return jt.default.sep===jt.default.posix.sep?e:e.split(jt.default.sep).join(jt.default.posix.sep)}function $n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vr(e,t){let r={};for(let n of Object.keys(e))r[n]=t(e[n],n);return r}function Ln(e,t){if(e.length===0)return;let r=e[0];for(let n=1;n<e.length;n++)t(r,e[n])<0&&(r=e[n]);return r}function Bt(e,t){Object.defineProperty(e,"name",{value:t,configurable:true});}var Co=new Set,Vn=(e,t,...r)=>{Co.has(e)||(Co.add(e),Mn(t,...r));};function ct(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function pt(e){return e.toString()!=="Invalid Date"}var Io=require$$0;function dt(e){return Io.Decimal.isDecimal(e)?true:e!==null&&typeof e=="object"&&typeof e.s=="number"&&typeof e.e=="number"&&typeof e.toFixed=="function"&&Array.isArray(e.d)}var Yo=require$$0;var Qt={};lt(Qt,{ModelAction:()=>mt,datamodelEnumToSchemaEnum:()=>Qu});function Qu(e){return {name:e.name,values:e.values.map(t=>t.name)}}var mt=(D=>(D.findUnique="findUnique",D.findUniqueOrThrow="findUniqueOrThrow",D.findFirst="findFirst",D.findFirstOrThrow="findFirstOrThrow",D.findMany="findMany",D.create="create",D.createMany="createMany",D.createManyAndReturn="createManyAndReturn",D.update="update",D.updateMany="updateMany",D.updateManyAndReturn="updateManyAndReturn",D.upsert="upsert",D.delete="delete",D.deleteMany="deleteMany",D.groupBy="groupBy",D.count="count",D.aggregate="aggregate",D.findRaw="findRaw",D.aggregateRaw="aggregateRaw",D))(mt||{});var Mo=Pe(So());var Do=Pe(require$$2);var ko={keyword:_e,entity:_e,value:e=>Ee(He(e)),punctuation:He,directive:_e,function:_e,variable:e=>Ee(He(e)),string:e=>Ee(Ft(e)),boolean:_t,number:_e,comment:$t};var Ju=e=>e,Sr={},Gu=0,O={manual:Sr.Prism&&Sr.Prism.manual,disableWorkerMessageHandler:Sr.Prism&&Sr.Prism.disableWorkerMessageHandler,util:{encode:function(e){if(e instanceof Te){let t=e;return new Te(t.type,O.util.encode(t.content),t.alias)}else return Array.isArray(e)?e.map(O.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++Gu}),e.__id},clone:function e(t,r){let n,i,o=O.util.type(t);switch(r=r||{},o){case "Object":if(i=O.util.objId(t),r[i])return r[i];n={},r[i]=n;for(let s in t)t.hasOwnProperty(s)&&(n[s]=e(t[s],r));return n;case "Array":return i=O.util.objId(t),r[i]?r[i]:(n=[],r[i]=n,t.forEach(function(s,a){n[a]=e(s,r);}),n);default:return t}}},languages:{extend:function(e,t){let r=O.util.clone(O.languages[e]);for(let n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){n=n||O.languages;let i=n[e],o={};for(let a in i)if(i.hasOwnProperty(a)){if(a==t)for(let u in r)r.hasOwnProperty(u)&&(o[u]=r[u]);r.hasOwnProperty(a)||(o[a]=i[a]);}let s=n[e];return n[e]=o,O.languages.DFS(O.languages,function(a,u){u===s&&a!=e&&(this[a]=o);}),o},DFS:function e(t,r,n,i){i=i||{};let o=O.util.objId;for(let s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],n||s);let a=t[s],u=O.util.type(a);u==="Object"&&!i[o(a)]?(i[o(a)]=true,e(a,r,null,i)):u==="Array"&&!i[o(a)]&&(i[o(a)]=true,e(a,r,s,i));}}},plugins:{},highlight:function(e,t,r){let n={code:e,grammar:t,language:r};return O.hooks.run("before-tokenize",n),n.tokens=O.tokenize(n.code,n.grammar),O.hooks.run("after-tokenize",n),Te.stringify(O.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,r,n,i,o,s){for(let M in r){if(!r.hasOwnProperty(M)||!r[M])continue;if(M==s)return;let L=r[M];L=O.util.type(L)==="Array"?L:[L];for(let q=0;q<L.length;++q){let E=L[q],D=E.inside,H=!!E.lookbehind,ce=!!E.greedy,ie=0,be=E.alias;if(ce&&!E.pattern.global){let l=E.pattern.toString().match(/[imuy]*$/)[0];E.pattern=RegExp(E.pattern.source,l+"g");}E=E.pattern||E;for(let l=n,c=i;l<t.length;c+=t[l].length,++l){let p=t[l];if(t.length>e.length)return;if(p instanceof Te)continue;if(ce&&l!=t.length-1){E.lastIndex=c;var T=E.exec(e);if(!T)break;var P=T.index+(H?T[1].length:0),S=T.index+T[0].length,a=l,u=c;for(let g=t.length;a<g&&(u<S||!t[a].type&&!t[a-1].greedy);++a)u+=t[a].length,P>=u&&(++l,c=u);if(t[l]instanceof Te)continue;m=a-l,p=e.slice(c,u),T.index-=c;}else {E.lastIndex=0;var T=E.exec(p),m=1;}if(!T){if(o)break;continue}H&&(ie=T[1]?T[1].length:0);var P=T.index+ie,T=T[0].slice(ie),S=P+T.length,I=p.slice(0,P),A=p.slice(S);let h=[l,m];I&&(++l,c+=I.length,h.push(I));let f=new Te(M,D?O.tokenize(T,D):T,be,T,ce);if(h.push(f),A&&h.push(A),Array.prototype.splice.apply(t,h),m!=1&&O.matchGrammar(e,t,r,l,c,true,M),o)break}}}},tokenize:function(e,t){let r=[e],n=t.rest;if(n){for(let i in n)t[i]=n[i];delete t.rest;}return O.matchGrammar(e,r,t,0,0,false),r},hooks:{all:{},add:function(e,t){let r=O.hooks.all;r[e]=r[e]||[],r[e].push(t);},run:function(e,t){let r=O.hooks.all[e];if(!(!r||!r.length))for(var n=0,i;i=r[n++];)i(t);}},Token:Te};O.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true,greedy:true}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:true,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};O.languages.javascript=O.languages.extend("clike",{"class-name":[O.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:true}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:true},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:true}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});O.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;O.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:true,greedy:true},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:true,inside:O.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:O.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:true,inside:O.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:true,inside:O.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});O.languages.markup&&O.languages.markup.tag.addInlined("script","javascript");O.languages.js=O.languages.javascript;O.languages.typescript=O.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/});O.languages.ts=O.languages.typescript;function Te(e,t,r,n,i){this.type=e,this.content=t,this.alias=r,this.length=(n||"").length|0,this.greedy=!!i;}Te.stringify=function(e,t){return typeof e=="string"?e:Array.isArray(e)?e.map(function(r){return Te.stringify(r,t)}).join(""):zu(e.type)(e.content)};function zu(e){return ko[e]||Ju}function Oo(e){return Hu(e,O.languages.javascript)}function Hu(e,t){return O.tokenize(e,t).map(n=>Te.stringify(n)).join("")}function No(e){return Nn(e)}var Ar=class e{firstLineNumber;lines;static read(t){let r;try{r=Do.default.readFileSync(t,"utf-8");}catch{return null}return e.fromContent(r)}static fromContent(t){let r=t.split(/\r?\n/);return new e(1,r)}constructor(t,r){this.firstLineNumber=t,this.lines=r;}get lastLineNumber(){return this.firstLineNumber+this.lines.length-1}mapLineAt(t,r){if(t<this.firstLineNumber||t>this.lastLineNumber)return this;let n=t-this.firstLineNumber,i=[...this.lines];return i[n]=r(i[n]),new e(this.firstLineNumber,i)}mapLines(t){return new e(this.firstLineNumber,this.lines.map((r,n)=>t(r,this.firstLineNumber+n)))}lineAt(t){return this.lines[t-this.firstLineNumber]}prependSymbolAt(t,r){return this.mapLines((n,i)=>i===t?`${r} ${n}`:`  ${n}`)}slice(t,r){let n=Math.max(t,this.firstLineNumber),i=Math.min(r,this.lastLineNumber);if(n>i)return new e(t,[]);let o=this.lines.slice(n-this.firstLineNumber,i-this.firstLineNumber+1).join(`
`);return new e(n,No(o).split(`
`))}highlight(){let t=Oo(this.toString());return new e(this.firstLineNumber,t.split(`
`))}toString(){return this.lines.join(`
`)}};var Wu={red:ze,gray:$t,dim:Dt,bold:Ee,underline:Mt,highlightSource:e=>e.highlight()},Ku={red:e=>e,gray:e=>e,dim:e=>e,bold:e=>e,underline:e=>e,highlightSource:e=>e};function Zu({message:e,originalMethod:t,isPanic:r,callArguments:n}){return {functionName:`prisma.${t}()`,message:e,isPanic:r??false,callArguments:n}}function Xu({callsite:e,message:t,originalMethod:r,isPanic:n,callArguments:i},o){let s=Zu({message:t,originalMethod:r,isPanic:n,callArguments:i});if(!e||"undefined"<"u"||"development"==="production")return s;let a=e.getLocation();if(!a||!a.lineNumber||!a.columnNumber)return s;let u=Math.max(1,a.lineNumber-3),m=Ar.read(a.fileName)?.slice(u,a.lineNumber),P=m?.lineAt(a.lineNumber);if(m&&P){let T=ec(P),S=Yu(P);if(!S)return s;s.functionName=`${S.code})`,s.location=a,n||(m=m.mapLineAt(a.lineNumber,A=>A.slice(0,S.openingBraceIndex))),m=o.highlightSource(m);let I=String(m.lastLineNumber).length;if(s.contextLines=m.mapLines((A,M)=>o.gray(String(M).padStart(I))+" "+A).mapLines(A=>o.dim(A)).prependSymbolAt(a.lineNumber,o.bold(o.red("\u2192"))),i){let A=T+I+1;A+=2,s.callArguments=(0, Mo.default)(i,A).slice(A);}}return s}function Yu(e){let t=Object.keys(mt).join("|"),n=new RegExp(String.raw`\.(${t})\(`).exec(e);if(n){let i=n.index+n[0].length,o=e.lastIndexOf(" ",n.index)+1;return {code:e.slice(o,i),openingBraceIndex:i}}return null}function ec(e){let t=0;for(let r=0;r<e.length;r++){if(e.charAt(r)!==" ")return t;t++;}return t}function tc({functionName:e,location:t,message:r,isPanic:n,contextLines:i,callArguments:o},s){let a=[""],u=t?" in":":";if(n?(a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)),a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))):a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),t&&a.push(s.underline(rc(t))),i){a.push("");let m=[i.toString()];o&&(m.push(o),m.push(s.dim(")"))),a.push(m.join("")),o&&a.push("");}else a.push(""),o&&a.push(o),a.push("");return a.push(r),a.join(`
`)}function rc(e){let t=[e.fileName];return e.lineNumber&&t.push(String(e.lineNumber)),e.columnNumber&&t.push(String(e.columnNumber)),t.join(":")}function Rr(e){let t=e.showColors?Wu:Ku,r;return r=Xu(e,t),tc(r,t)}var Bo=Pe(qn());function Lo(e,t,r){let n=Vo(e),i=nc(n),o=oc(i);o?Cr(o,t,r):t.addErrorMessage(()=>"Unknown error");}function Vo(e){return e.errors.flatMap(t=>t.kind==="Union"?Vo(t):[t])}function nc(e){let t=new Map,r=[];for(let n of e){if(n.kind!=="InvalidArgumentType"){r.push(n);continue}let i=`${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,o=t.get(i);o?t.set(i,{...n,argument:{...n.argument,typeNames:ic(o.argument.typeNames,n.argument.typeNames)}}):t.set(i,n);}return r.push(...t.values()),r}function ic(e,t){return [...new Set(e.concat(t))]}function oc(e){return Ln(e,(t,r)=>{let n=_o(t),i=_o(r);return n!==i?n-i:$o(t)-$o(r)})}function _o(e){let t=0;return Array.isArray(e.selectionPath)&&(t+=e.selectionPath.length),Array.isArray(e.argumentPath)&&(t+=e.argumentPath.length),t}function $o(e){switch(e.kind){case "InvalidArgumentValue":case "ValueTooLarge":return 20;case "InvalidArgumentType":return 10;case "RequiredArgumentMissing":return  -10;default:return 0}}var pe=class{constructor(t,r){this.name=t;this.value=r;}isRequired=false;makeRequired(){return this.isRequired=true,this}write(t){let{colors:{green:r}}=t.context;t.addMarginSymbol(r(this.isRequired?"+":"?")),t.write(r(this.name)),this.isRequired||t.write(r("?")),t.write(r(": ")),typeof this.value=="string"?t.write(r(this.value)):t.write(this.value);}};Uo();var ft=class{constructor(t=0,r){this.context=r;this.currentIndent=t;}lines=[];currentLine="";currentIndent=0;marginSymbol;afterNextNewLineCallback;write(t){return typeof t=="string"?this.currentLine+=t:t.write(this),this}writeJoined(t,r,n=(i,o)=>o.write(i)){let i=r.length-1;for(let o=0;o<r.length;o++)n(r[o],this),o!==i&&this.write(t);return this}writeLine(t){return this.write(t).newLine()}newLine(){this.lines.push(this.indentedCurrentLine()),this.currentLine="",this.marginSymbol=void 0;let t=this.afterNextNewLineCallback;return this.afterNextNewLineCallback=void 0,t?.(),this}withIndent(t){return this.indent(),t(this),this.unindent(),this}afterNextNewline(t){return this.afterNextNewLineCallback=t,this}indent(){return this.currentIndent++,this}unindent(){return this.currentIndent>0&&this.currentIndent--,this}addMarginSymbol(t){return this.marginSymbol=t,this}toString(){return this.lines.concat(this.indentedCurrentLine()).join(`
`)}getCurrentLineLength(){return this.currentLine.length}indentedCurrentLine(){let t=this.currentLine.padStart(this.currentLine.length+2*this.currentIndent);return this.marginSymbol?this.marginSymbol+t.slice(1):t}};qo();var Ir=class{constructor(t){this.value=t;}write(t){t.write(this.value);}markAsError(){this.value.markAsError();}};var kr=e=>e,Or={bold:kr,red:kr,green:kr,dim:kr,enabled:false},jo={bold:Ee,red:ze,green:Ft,dim:Dt,enabled:true},gt={write(e){e.writeLine(",");}};var ke=class{constructor(t){this.contents=t;}isUnderlined=false;color=t=>t;underline(){return this.isUnderlined=true,this}setColor(t){return this.color=t,this}write(t){let r=t.getCurrentLineLength();t.write(this.color(this.contents)),this.isUnderlined&&t.afterNextNewline(()=>{t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));});}};var Ue=class{hasError=false;markAsError(){return this.hasError=true,this}};var yt=class extends Ue{items=[];addItem(t){return this.items.push(new Ir(t)),this}getField(t){return this.items[t]}getPrintWidth(){return this.items.length===0?2:Math.max(...this.items.map(r=>r.value.getPrintWidth()))+2}write(t){if(this.items.length===0){this.writeEmpty(t);return}this.writeWithItems(t);}writeEmpty(t){let r=new ke("[]");this.hasError&&r.setColor(t.context.colors.red).underline(),t.write(r);}writeWithItems(t){let{colors:r}=t.context;t.writeLine("[").withIndent(()=>t.writeJoined(gt,this.items).newLine()).write("]"),this.hasError&&t.afterNextNewline(()=>{t.writeLine(r.red("~".repeat(this.getPrintWidth())));});}asObject(){}};var ht=class e extends Ue{fields={};suggestions=[];addField(t){this.fields[t.name]=t;}addSuggestion(t){this.suggestions.push(t);}getField(t){return this.fields[t]}getDeepField(t){let[r,...n]=t,i=this.getField(r);if(!i)return;let o=i;for(let s of n){let a;if(o.value instanceof e?a=o.value.getField(s):o.value instanceof yt&&(a=o.value.getField(Number(s))),!a)return;o=a;}return o}getDeepFieldValue(t){return t.length===0?this:this.getDeepField(t)?.value}hasField(t){return !!this.getField(t)}removeAllFields(){this.fields={};}removeField(t){delete this.fields[t];}getFields(){return this.fields}isEmpty(){return Object.keys(this.fields).length===0}getFieldValue(t){return this.getField(t)?.value}getDeepSubSelectionValue(t){let r=this;for(let n of t){if(!(r instanceof e))return;let i=r.getSubSelectionValue(n);if(!i)return;r=i;}return r}getDeepSelectionParent(t){let r=this.getSelectionParent();if(!r)return;let n=r;for(let i of t){let o=n.value.getFieldValue(i);if(!o||!(o instanceof e))return;let s=o.getSelectionParent();if(!s)return;n=s;}return n}getSelectionParent(){let t=this.getField("select")?.value.asObject();if(t)return {kind:"select",value:t};let r=this.getField("include")?.value.asObject();if(r)return {kind:"include",value:r}}getSubSelectionValue(t){return this.getSelectionParent()?.value.fields[t].value}getPrintWidth(){let t=Object.values(this.fields);return t.length==0?2:Math.max(...t.map(n=>n.getPrintWidth()))+2}write(t){let r=Object.values(this.fields);if(r.length===0&&this.suggestions.length===0){this.writeEmpty(t);return}this.writeWithContents(t,r);}asObject(){return this}writeEmpty(t){let r=new ke("{}");this.hasError&&r.setColor(t.context.colors.red).underline(),t.write(r);}writeWithContents(t,r){t.writeLine("{").withIndent(()=>{t.writeJoined(gt,[...r,...this.suggestions]).newLine();}),t.write("}"),this.hasError&&t.afterNextNewline(()=>{t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));});}};var Z=class extends Ue{constructor(r){super();this.text=r;}getPrintWidth(){return this.text.length}write(r){let n=new ke(this.text);this.hasError&&n.underline().setColor(r.context.colors.red),r.write(n);}asObject(){}};var Jt=class{fields=[];addField(t,r){return this.fields.push({write(n){let{green:i,dim:o}=n.context.colors;n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));}}),this}write(t){let{colors:{green:r}}=t.context;t.writeLine(r("{")).withIndent(()=>{t.writeJoined(gt,this.fields).newLine();}).write(r("}")).addMarginSymbol(r("+"));}};function Cr(e,t,r){switch(e.kind){case "MutuallyExclusiveFields":sc(e,t);break;case "IncludeOnScalar":ac(e,t);break;case "EmptySelection":lc(e,t,r);break;case "UnknownSelectionField":dc(e,t);break;case "InvalidSelectionValue":mc(e,t);break;case "UnknownArgument":fc(e,t);break;case "UnknownInputField":gc(e,t);break;case "RequiredArgumentMissing":yc(e,t);break;case "InvalidArgumentType":hc(e,t);break;case "InvalidArgumentValue":wc(e,t);break;case "ValueTooLarge":xc(e,t);break;case "SomeFieldsMissing":bc(e,t);break;case "TooManyFieldsGiven":Pc(e,t);break;case "Union":Lo(e,t,r);break;default:throw new Error("not implemented: "+e.kind)}}function sc(e,t){let r=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();r&&(r.getField(e.firstField)?.markAsError(),r.getField(e.secondField)?.markAsError()),t.addErrorMessage(n=>`Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);}function ac(e,t){let[r,n]=wt(e.selectionPath),i=e.outputType,o=t.arguments.getDeepSelectionParent(r)?.value;if(o&&(o.getField(n)?.markAsError(),i))for(let s of i.fields)s.isRelation&&o.addSuggestion(new pe(s.name,"true"));t.addErrorMessage(s=>{let a=`Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;return i?a+=` on model ${s.bold(i.name)}. ${Gt(s)}`:a+=".",a+=`
Note that ${s.bold("include")} statements only accept relation fields.`,a});}function lc(e,t,r){let n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getField("omit")?.value.asObject();if(i){uc(e,t,i);return}if(n.hasField("select")){cc(e,t);return}}if(r?.[qe(e.outputType.name)]){pc(e,t);return}t.addErrorMessage(()=>`Unknown field at "${e.selectionPath.join(".")} selection"`);}function uc(e,t,r){r.removeAllFields();for(let n of e.outputType.fields)r.addSuggestion(new pe(n.name,"false"));t.addErrorMessage(n=>`The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);}function cc(e,t){let r=e.outputType,n=t.arguments.getDeepSelectionParent(e.selectionPath)?.value,i=n?.isEmpty()??false;n&&(n.removeAllFields(),Go(n,r)),t.addErrorMessage(o=>i?`The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Gt(o)}`:`The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);}function pc(e,t){let r=new Jt;for(let i of e.outputType.fields)i.isRelation||r.addField(i.name,"false");let n=new pe("omit",r).makeRequired();if(e.selectionPath.length===0)t.arguments.addSuggestion(n);else {let[i,o]=wt(e.selectionPath),a=t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);if(a){let u=a?.value.asObject()??new ht;u.addSuggestion(n),a.value=u;}}t.addErrorMessage(i=>`The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);}function dc(e,t){let r=zo(e.selectionPath,t);if(r.parentKind!=="unknown"){r.field.markAsError();let n=r.parent;switch(r.parentKind){case "select":Go(n,e.outputType);break;case "include":Ec(n,e.outputType);break;case "omit":Tc(n,e.outputType);break}}t.addErrorMessage(n=>{let i=[`Unknown field ${n.red(`\`${r.fieldName}\``)}`];return r.parentKind!=="unknown"&&i.push(`for ${n.bold(r.parentKind)} statement`),i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),i.push(Gt(n)),i.join(" ")});}function mc(e,t){let r=zo(e.selectionPath,t);r.parentKind!=="unknown"&&r.field.value.markAsError(),t.addErrorMessage(n=>`Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);}function fc(e,t){let r=e.argumentPath[0],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&(n.getField(r)?.markAsError(),vc(n,e.arguments)),t.addErrorMessage(i=>Qo(i,r,e.arguments.map(o=>o.name)));}function gc(e,t){let[r,n]=wt(e.argumentPath),i=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(i){i.getDeepField(e.argumentPath)?.markAsError();let o=i.getDeepFieldValue(r)?.asObject();o&&Ho(o,e.inputType);}t.addErrorMessage(o=>Qo(o,n,e.inputType.fields.map(s=>s.name)));}function Qo(e,t,r){let n=[`Unknown argument \`${e.red(t)}\`.`],i=Ac(t,r);return i&&n.push(`Did you mean \`${e.green(i)}\`?`),r.length>0&&n.push(Gt(e)),n.join(" ")}function yc(e,t){let r;t.addErrorMessage(u=>r?.value instanceof Z&&r.value.text==="null"?`Argument \`${u.green(o)}\` must not be ${u.red("null")}.`:`Argument \`${u.green(o)}\` is missing.`);let n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(!n)return;let[i,o]=wt(e.argumentPath),s=new Jt,a=n.getDeepFieldValue(i)?.asObject();if(a){if(r=a.getField(o),r&&a.removeField(o),e.inputTypes.length===1&&e.inputTypes[0].kind==="object"){for(let u of e.inputTypes[0].fields)s.addField(u.name,u.typeNames.join(" | "));a.addSuggestion(new pe(o,s).makeRequired());}else {let u=e.inputTypes.map(Jo).join(" | ");a.addSuggestion(new pe(o,u).makeRequired());}if(e.dependentArgumentPath){n.getDeepField(e.dependentArgumentPath)?.markAsError();let[,u]=wt(e.dependentArgumentPath);t.addErrorMessage(m=>`Argument \`${m.green(o)}\` is required because argument \`${m.green(u)}\` was provided.`);}}}function Jo(e){return e.kind==="list"?`${Jo(e.elementType)}[]`:e.name}function hc(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),t.addErrorMessage(i=>{let o=Nr("or",e.argument.typeNames.map(s=>i.green(s)));return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`});}function wc(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),t.addErrorMessage(i=>{let o=[`Invalid value for argument \`${i.bold(r)}\``];if(e.underlyingError&&o.push(`: ${e.underlyingError}`),o.push("."),e.argument.typeNames.length>0){let s=Nr("or",e.argument.typeNames.map(a=>i.green(a)));o.push(` Expected ${s}.`);}return o.join("")});}function xc(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i;if(n){let s=n.getDeepField(e.argumentPath)?.value;s?.markAsError(),s instanceof Z&&(i=s.text);}t.addErrorMessage(o=>{let s=["Unable to fit value"];return i&&s.push(o.red(i)),s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),s.join(" ")});}function bc(e,t){let r=e.argumentPath[e.argumentPath.length-1],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getDeepFieldValue(e.argumentPath)?.asObject();i&&Ho(i,e.inputType);}t.addErrorMessage(i=>{let o=[`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1?e.constraints.requiredFields?o.push(`${i.green("at least one of")} ${Nr("or",e.constraints.requiredFields.map(s=>`\`${i.bold(s)}\``))} arguments.`):o.push(`${i.green("at least one")} argument.`):o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`),o.push(Gt(i)),o.join(" ")});}function Pc(e,t){let r=e.argumentPath[e.argumentPath.length-1],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i=[];if(n){let o=n.getDeepFieldValue(e.argumentPath)?.asObject();o&&(o.markAsError(),i=Object.keys(o.getFields()));}t.addErrorMessage(o=>{let s=[`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1&&e.constraints.maxFieldCount==1?s.push(`${o.green("exactly one")} argument,`):e.constraints.maxFieldCount==1?s.push(`${o.green("at most one")} argument,`):s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`),s.push(`but you provided ${Nr("and",i.map(a=>o.red(a)))}. Please choose`),e.constraints.maxFieldCount===1?s.push("one."):s.push(`${e.constraints.maxFieldCount}.`),s.join(" ")});}function Go(e,t){for(let r of t.fields)e.hasField(r.name)||e.addSuggestion(new pe(r.name,"true"));}function Ec(e,t){for(let r of t.fields)r.isRelation&&!e.hasField(r.name)&&e.addSuggestion(new pe(r.name,"true"));}function Tc(e,t){for(let r of t.fields)!e.hasField(r.name)&&!r.isRelation&&e.addSuggestion(new pe(r.name,"true"));}function vc(e,t){for(let r of t)e.hasField(r.name)||e.addSuggestion(new pe(r.name,r.typeNames.join(" | ")));}function zo(e,t){let[r,n]=wt(e),i=t.arguments.getDeepSubSelectionValue(r)?.asObject();if(!i)return {parentKind:"unknown",fieldName:n};let o=i.getFieldValue("select")?.asObject(),s=i.getFieldValue("include")?.asObject(),a=i.getFieldValue("omit")?.asObject(),u=o?.getField(n);return o&&u?{parentKind:"select",parent:o,field:u,fieldName:n}:(u=s?.getField(n),s&&u?{parentKind:"include",field:u,parent:s,fieldName:n}:(u=a?.getField(n),a&&u?{parentKind:"omit",field:u,parent:a,fieldName:n}:{parentKind:"unknown",fieldName:n}))}function Ho(e,t){if(t.kind==="object")for(let r of t.fields)e.hasField(r.name)||e.addSuggestion(new pe(r.name,r.typeNames.join(" | ")));}function wt(e){let t=[...e],r=t.pop();if(!r)throw new Error("unexpected empty path");return [t,r]}function Gt({green:e,enabled:t}){return "Available options are "+(t?`listed in ${e("green")}`:"marked with ?")+"."}function Nr(e,t){if(t.length===1)return t[0];let r=[...t],n=r.pop();return `${r.join(", ")} ${e} ${n}`}var Sc=3;function Ac(e,t){let r=1/0,n;for(let i of t){let o=(0, Bo.default)(e,i);o>Sc||o<r&&(r=o,n=i);}return n}var Ko=require$$0;var zt=class{modelName;name;typeName;isList;isEnum;constructor(t,r,n,i,o){this.modelName=t,this.name=r,this.typeName=n,this.isList=i,this.isEnum=o;}_toGraphQLInputType(){let t=this.isList?"List":"",r=this.isEnum?"Enum":"";return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`}};function xt(e){return e instanceof zt}var Wo=": ",Dr=class{constructor(t,r){this.name=t;this.value=r;}hasError=false;markAsError(){this.hasError=true;}getPrintWidth(){return this.name.length+this.value.getPrintWidth()+Wo.length}write(t){let r=new ke(this.name);this.hasError&&r.underline().setColor(t.context.colors.red),t.write(r).write(Wo).write(this.value);}};var jn=class{arguments;errorMessages=[];constructor(t){this.arguments=t;}write(t){t.write(this.arguments);}addErrorMessage(t){this.errorMessages.push(t);}renderAllMessages(t){return this.errorMessages.map(r=>r(t)).join(`
`)}};function bt(e){return new jn(Zo(e))}function Zo(e){let t=new ht;for(let[r,n]of Object.entries(e)){let i=new Dr(r,Xo(n));t.addField(i);}return t}function Xo(e){if(typeof e=="string")return new Z(JSON.stringify(e));if(typeof e=="number"||typeof e=="boolean")return new Z(String(e));if(typeof e=="bigint")return new Z(`${e}n`);if(e===null)return new Z("null");if(e===void 0)return new Z("undefined");if(dt(e))return new Z(`new Prisma.Decimal("${e.toFixed()}")`);if(e instanceof Uint8Array)return Buffer.isBuffer(e)?new Z(`Buffer.alloc(${e.byteLength})`):new Z(`new Uint8Array(${e.byteLength})`);if(e instanceof Date){let t=pt(e)?e.toISOString():"Invalid Date";return new Z(`new Date("${t}")`)}return (0, Ko.isObjectEnumValue)(e)?new Z(`Prisma.${e._getName()}`):xt(e)?new Z(`prisma.${qe(e.modelName)}.$fields.${e.name}`):Array.isArray(e)?Rc(e):typeof e=="object"?Zo(e):new Z(Object.prototype.toString.call(e))}function Rc(e){let t=new yt;for(let r of e)t.addItem(Xo(r));return t}function Mr(e,t){let r=t==="pretty"?jo:Or,n=e.renderAllMessages(r),i=new ft(0,{colors:r}).write(e).toString();return {message:n,args:i}}function Fr({args:e,errors:t,errorFormat:r,callsite:n,originalMethod:i,clientVersion:o,globalOmit:s}){let a=bt(e);for(let T of t)Cr(T,a,s);let{message:u,args:m}=Mr(a,r),P=Rr({message:u,callsite:n,originalMethod:i,showColors:r==="pretty",callArguments:m});throw new Yo.PrismaClientValidationError(P,{clientVersion:o})}function Oe(e){return e.replace(/^./,t=>t.toLowerCase())}function ts(e,t,r){let n=Oe(r);return !t.result||!(t.result.$allModels||t.result[n])?e:Cc({...e,...es(t.name,e,t.result.$allModels),...es(t.name,e,t.result[n])})}function Cc(e){let t=new Ie,r=(n,i)=>t.getOrCreate(n,()=>i.has(n)?[n]:(i.add(n),e[n]?e[n].needs.flatMap(o=>r(o,i)):[n]));return vr(e,n=>({...n,needs:r(n.name,new Set)}))}function es(e,t,r){return r?vr(r,({needs:n,compute:i},o)=>({name:o,needs:n?Object.keys(n).filter(s=>n[s]):[],compute:Ic(t,o,i)})):{}}function Ic(e,t,r){let n=e?.[t]?.compute;return n?(i,o)=>r({...i,[t]:n(i,o)},o):r}function rs(e,t){if(!t)return e;let r={...e};for(let n of Object.values(t))if(e[n.name])for(let i of n.needs)r[i]=true;return r}function ns(e,t){if(!t)return e;let r={...e};for(let n of Object.values(t))if(!e[n.name])for(let i of n.needs)delete r[i];return r}var _r=class{constructor(t,r){this.extension=t;this.previous=r;}computedFieldsCache=new Ie;modelExtensionsCache=new Ie;queryCallbacksCache=new Ie;clientExtensions=Nt(()=>this.extension.client?{...this.previous?.getAllClientExtensions(),...this.extension.client}:this.previous?.getAllClientExtensions());batchCallbacks=Nt(()=>{let t=this.previous?.getAllBatchQueryCallbacks()??[],r=this.extension.query?.$__internalBatch;return r?t.concat(r):t});getAllComputedFields(t){return this.computedFieldsCache.getOrCreate(t,()=>ts(this.previous?.getAllComputedFields(t),this.extension,t))}getAllClientExtensions(){return this.clientExtensions.get()}getAllModelExtensions(t){return this.modelExtensionsCache.getOrCreate(t,()=>{let r=Oe(t);return !this.extension.model||!(this.extension.model[r]||this.extension.model.$allModels)?this.previous?.getAllModelExtensions(t):{...this.previous?.getAllModelExtensions(t),...this.extension.model.$allModels,...this.extension.model[r]}})}getAllQueryCallbacks(t,r){return this.queryCallbacksCache.getOrCreate(`${t}:${r}`,()=>{let n=this.previous?.getAllQueryCallbacks(t,r)??[],i=[],o=this.extension.query;return !o||!(o[t]||o.$allModels||o[r]||o.$allOperations)?n:(o[t]!==void 0&&(o[t][r]!==void 0&&i.push(o[t][r]),o[t].$allOperations!==void 0&&i.push(o[t].$allOperations)),t!=="$none"&&o.$allModels!==void 0&&(o.$allModels[r]!==void 0&&i.push(o.$allModels[r]),o.$allModels.$allOperations!==void 0&&i.push(o.$allModels.$allOperations)),o[r]!==void 0&&i.push(o[r]),o.$allOperations!==void 0&&i.push(o.$allOperations),n.concat(i))})}getAllBatchQueryCallbacks(){return this.batchCallbacks.get()}},Pt=class e{constructor(t){this.head=t;}static empty(){return new e}static single(t){return new e(new _r(t))}isEmpty(){return this.head===void 0}append(t){return new e(new _r(t,this.head))}getAllComputedFields(t){return this.head?.getAllComputedFields(t)}getAllClientExtensions(){return this.head?.getAllClientExtensions()}getAllModelExtensions(t){return this.head?.getAllModelExtensions(t)}getAllQueryCallbacks(t,r){return this.head?.getAllQueryCallbacks(t,r)??[]}getAllBatchQueryCallbacks(){return this.head?.getAllBatchQueryCallbacks()??[]}};var $r=class{constructor(t){this.name=t;}};function is(e){return e instanceof $r}function os(e){return new $r(e)}var ss=Symbol(),Ht=class{constructor(t){if(t!==ss)throw new Error("Skip instance can not be constructed directly")}ifUndefined(t){return t===void 0?Lr:t}},Lr=new Ht(ss);function fe(e){return e instanceof Ht}var kc={findUnique:"findUnique",findUniqueOrThrow:"findUniqueOrThrow",findFirst:"findFirst",findFirstOrThrow:"findFirstOrThrow",findMany:"findMany",count:"aggregate",create:"createOne",createMany:"createMany",createManyAndReturn:"createManyAndReturn",update:"updateOne",updateMany:"updateMany",updateManyAndReturn:"updateManyAndReturn",upsert:"upsertOne",delete:"deleteOne",deleteMany:"deleteMany",executeRaw:"executeRaw",queryRaw:"queryRaw",aggregate:"aggregate",groupBy:"groupBy",runCommandRaw:"runCommandRaw",findRaw:"findRaw",aggregateRaw:"aggregateRaw"},ls="explicitly `undefined` values are not allowed";function Vr({modelName:e,action:t,args:r,runtimeDataModel:n,extensions:i=Pt.empty(),callsite:o,clientMethod:s,errorFormat:a,clientVersion:u,previewFeatures:m,globalOmit:P,wrapRawValues:T}){let S=new Bn({runtimeDataModel:n,modelName:e,action:t,rootArgs:r,callsite:o,extensions:i,selectionPath:[],argumentPath:[],originalMethod:s,errorFormat:a,clientVersion:u,previewFeatures:m,globalOmit:P,wrapRawValues:T});return {modelName:e,action:kc[t],query:Wt(r,S)}}function Wt({select:e,include:t,...r}={},n){let i=r.omit;return delete r.omit,{arguments:cs(r,n),selection:Oc(e,t,i,n)}}function Oc(e,t,r,n){return e?(t?n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"include",secondField:"select",selectionPath:n.getSelectionPath()}):r&&n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"omit",secondField:"select",selectionPath:n.getSelectionPath()}),Fc(e,n)):Nc(n,t,r)}function Nc(e,t,r){let n={};return e.modelOrType&&!e.isRawAction()&&(n.$composites=true,n.$scalars=true),t&&Dc(n,t,e),Mc(n,r,e),n}function Dc(e,t,r){for(let[n,i]of Object.entries(t)){if(fe(i))continue;let o=r.nestSelection(n);if(Qn(i,o),i===false||i===void 0){e[n]=false;continue}let s=r.findField(n);if(s&&s.kind!=="object"&&r.throwValidationError({kind:"IncludeOnScalar",selectionPath:r.getSelectionPath().concat(n),outputType:r.getOutputTypeDescription()}),s){e[n]=Wt(i===true?{}:i,o);continue}if(i===true){e[n]=true;continue}e[n]=Wt(i,o);}}function Mc(e,t,r){let n=r.getComputedFields(),i={...r.getGlobalOmit(),...t},o=ns(i,n);for(let[s,a]of Object.entries(o)){if(fe(a))continue;Qn(a,r.nestSelection(s));let u=r.findField(s);n?.[s]&&!u||(e[s]=!a);}}function Fc(e,t){let r={},n=t.getComputedFields(),i=rs(e,n);for(let[o,s]of Object.entries(i)){if(fe(s))continue;let a=t.nestSelection(o);Qn(s,a);let u=t.findField(o);if(!(n?.[o]&&!u)){if(s===false||s===void 0||fe(s)){r[o]=false;continue}if(s===true){u?.kind==="object"?r[o]=Wt({},a):r[o]=true;continue}r[o]=Wt(s,a);}}return r}function us(e,t){if(e===null)return null;if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return e;if(typeof e=="bigint")return {$type:"BigInt",value:String(e)};if(ct(e)){if(pt(e))return {$type:"DateTime",value:e.toISOString()};t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:t.getSelectionPath(),argumentPath:t.getArgumentPath(),argument:{name:t.getArgumentName(),typeNames:["Date"]},underlyingError:"Provided Date object is invalid"});}if(is(e))return {$type:"Param",value:e.name};if(xt(e))return {$type:"FieldRef",value:{_ref:e.name,_container:e.modelName}};if(Array.isArray(e))return _c(e,t);if(ArrayBuffer.isView(e)){let{buffer:r,byteOffset:n,byteLength:i}=e;return {$type:"Bytes",value:Buffer.from(r,n,i).toString("base64")}}if($c(e))return e.values;if(dt(e))return {$type:"Decimal",value:e.toFixed()};if((0, as.isObjectEnumValue)(e)){let r=e._getName();if(r!=="DbNull"&&r!=="JsonNull"&&r!=="AnyNull")throw new Error(`Invalid ObjectEnumValue: expected DbNull, JsonNull, or AnyNull, got ${r}`);return {$type:"Enum",value:r}}if(Lc(e))return e.toJSON();if(typeof e=="object")return cs(e,t);t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:t.getSelectionPath(),argumentPath:t.getArgumentPath(),argument:{name:t.getArgumentName(),typeNames:[]},underlyingError:`We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`});}function cs(e,t){if(t.shouldWrapRawValues()&&e.$type)return {$type:"Raw",value:e};let r={};for(let n in e){let i=e[n],o=t.nestArgument(n);fe(i)||(i!==void 0?r[n]=us(i,o):t.isPreviewFeatureOn("strictUndefinedChecks")&&t.throwValidationError({kind:"InvalidArgumentValue",argumentPath:o.getArgumentPath(),selectionPath:t.getSelectionPath(),argument:{name:t.getArgumentName(),typeNames:[]},underlyingError:ls}));}return r}function _c(e,t){let r=[];for(let n=0;n<e.length;n++){let i=t.nestArgument(String(n)),o=e[n];if(o===void 0||fe(o)){let s=o===void 0?"undefined":"Prisma.skip";t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:i.getSelectionPath(),argumentPath:i.getArgumentPath(),argument:{name:`${t.getArgumentName()}[${n}]`,typeNames:[]},underlyingError:`Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`});}r.push(us(o,i));}return r}function $c(e){return typeof e=="object"&&e!==null&&e.__prismaRawParameters__===true}function Lc(e){return typeof e=="object"&&e!==null&&typeof e.toJSON=="function"}function Qn(e,t){e===void 0&&t.isPreviewFeatureOn("strictUndefinedChecks")&&t.throwValidationError({kind:"InvalidSelectionValue",selectionPath:t.getSelectionPath(),underlyingError:ls});}var Bn=class e{constructor(t){this.params=t;this.params.modelName&&(this.modelOrType=this.params.runtimeDataModel.models[this.params.modelName]??this.params.runtimeDataModel.types[this.params.modelName]);}modelOrType;throwValidationError(t){Fr({errors:[t],originalMethod:this.params.originalMethod,args:this.params.rootArgs??{},callsite:this.params.callsite,errorFormat:this.params.errorFormat,clientVersion:this.params.clientVersion,globalOmit:this.params.globalOmit});}getSelectionPath(){return this.params.selectionPath}getArgumentPath(){return this.params.argumentPath}getArgumentName(){return this.params.argumentPath[this.params.argumentPath.length-1]}getOutputTypeDescription(){if(!(!this.params.modelName||!this.modelOrType))return {name:this.params.modelName,fields:this.modelOrType.fields.map(t=>({name:t.name,typeName:"boolean",isRelation:t.kind==="object"}))}}isRawAction(){return ["executeRaw","queryRaw","runCommandRaw","findRaw","aggregateRaw"].includes(this.params.action)}isPreviewFeatureOn(t){return this.params.previewFeatures.includes(t)}shouldWrapRawValues(){return this.params.wrapRawValues??true}getComputedFields(){if(this.params.modelName)return this.params.extensions.getAllComputedFields(this.params.modelName)}findField(t){return this.modelOrType?.fields.find(r=>r.name===t)}nestSelection(t){let r=this.findField(t),n=r?.kind==="object"?r.type:void 0;return new e({...this.params,modelName:n,selectionPath:this.params.selectionPath.concat(t)})}getGlobalOmit(){return this.params.modelName&&this.shouldApplyGlobalOmit()?this.params.globalOmit?.[qe(this.params.modelName)]??{}:{}}shouldApplyGlobalOmit(){switch(this.params.action){case "findFirst":case "findFirstOrThrow":case "findUniqueOrThrow":case "findMany":case "upsert":case "findUnique":case "createManyAndReturn":case "create":case "update":case "updateManyAndReturn":case "delete":return  true;case "executeRaw":case "aggregateRaw":case "runCommandRaw":case "findRaw":case "createMany":case "deleteMany":case "groupBy":case "updateMany":case "count":case "aggregate":case "queryRaw":return  false;default:$e(this.params.action,"Unknown action");}}nestArgument(t){return new e({...this.params,argumentPath:this.params.argumentPath.concat(t)})}};function ps(e,t){let r=Nt(()=>Vc(t));Object.defineProperty(e,"dmmf",{get:()=>r.get()});}function Vc(e){return {datamodel:{models:Jn(e.models),enums:Jn(e.enums),types:Jn(e.types)}}}function Jn(e){return Object.entries(e).map(([t,r])=>({name:t,...r}))}var Gn=new WeakMap,qr="$$PrismaTypedSql",Kt=class{constructor(t,r){Gn.set(this,{sql:t,values:r}),Object.defineProperty(this,qr,{value:qr});}get sql(){return Gn.get(this).sql}get values(){return Gn.get(this).values}};function ds(e){return (...t)=>new Kt(e,t)}function Ur(e){return e!=null&&e[qr]===qr}var nu=require$$0;var iu=require$$3,ou=require$$4;function Zt(e){return {getKeys(){return Object.keys(e)},getPropertyValue(t){return e[t]}}}function ae(e,t){return {getKeys(){return [e]},getPropertyValue(){return t()}}}function We(e){let t=new Ie;return {getKeys(){return e.getKeys()},getPropertyValue(r){return t.getOrCreate(r,()=>e.getPropertyValue(r))},getPropertyDescriptor(r){return e.getPropertyDescriptor?.(r)}}}var jr={enumerable:true,configurable:true,writable:true};function Br(e){let t=new Set(e);return {getPrototypeOf:()=>Object.prototype,getOwnPropertyDescriptor:()=>jr,has:(r,n)=>t.has(n),set:(r,n,i)=>t.add(n)&&Reflect.set(r,n,i),ownKeys:()=>[...t]}}var ms=Symbol.for("nodejs.util.inspect.custom");function ve(e,t){let r=qc(t),n=new Set,i=new Proxy(e,{get(o,s){if(n.has(s))return o[s];let a=r.get(s);return a?a.getPropertyValue(s):o[s]},has(o,s){if(n.has(s))return  true;let a=r.get(s);return a?a.has?.(s)??true:Reflect.has(o,s)},ownKeys(o){let s=fs(Reflect.ownKeys(o),r),a=fs(Array.from(r.keys()),r);return [...new Set([...s,...a,...n])]},set(o,s,a){return r.get(s)?.getPropertyDescriptor?.(s)?.writable===false?false:(n.add(s),Reflect.set(o,s,a))},getOwnPropertyDescriptor(o,s){let a=Reflect.getOwnPropertyDescriptor(o,s);if(a&&!a.configurable)return a;let u=r.get(s);return u?u.getPropertyDescriptor?{...jr,...u?.getPropertyDescriptor(s)}:jr:a},defineProperty(o,s,a){return n.add(s),Reflect.defineProperty(o,s,a)},getPrototypeOf:()=>Object.prototype});return i[ms]=function(){let o={...this};return delete o[ms],o},i}function qc(e){let t=new Map;for(let r of e){let n=r.getKeys();for(let i of n)t.set(i,r);}return t}function fs(e,t){return e.filter(r=>t.get(r)?.has?.(r)??true)}function Et(e){return {getKeys(){return e},has(){return  false},getPropertyValue(){}}}function gs(e){if(e===void 0)return "";let t=bt(e);return new ft(0,{colors:Or}).write(t).toString()}var Xt="<unknown>";function ys(e){var t=e.split(`
`);return t.reduce(function(r,n){var i=Bc(n)||Jc(n)||Hc(n)||Xc(n)||Kc(n);return i&&r.push(i),r},[])}var Uc=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,jc=/\((\S*)(?::(\d+))(?::(\d+))\)/;function Bc(e){var t=Uc.exec(e);if(!t)return null;var r=t[2]&&t[2].indexOf("native")===0,n=t[2]&&t[2].indexOf("eval")===0,i=jc.exec(t[2]);return n&&i!=null&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:r?null:t[2],methodName:t[1]||Xt,arguments:r?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var Qc=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function Jc(e){var t=Qc.exec(e);return t?{file:t[2],methodName:t[1]||Xt,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var Gc=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,zc=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function Hc(e){var t=Gc.exec(e);if(!t)return null;var r=t[3]&&t[3].indexOf(" > eval")>-1,n=zc.exec(t[3]);return r&&n!=null&&(t[3]=n[1],t[4]=n[2],t[5]=null),{file:t[3],methodName:t[1]||Xt,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var Wc=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function Kc(e){var t=Wc.exec(e);return t?{file:t[3],methodName:t[1]||Xt,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var Zc=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function Xc(e){var t=Zc.exec(e);return t?{file:t[2],methodName:t[1]||Xt,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var zn=class{getLocation(){return null}},Hn=class{_error;constructor(){this._error=new Error;}getLocation(){let t=this._error.stack;if(!t)return null;let n=ys(t).find(i=>{if(!i.file)return  false;let o=_n(i.file);return o!=="<anonymous>"&&!o.includes("@prisma")&&!o.includes("/packages/client/src/runtime/")&&!o.endsWith("/runtime/client.js")&&!o.startsWith("internal/")&&!i.methodName.includes("new ")&&!i.methodName.includes("getCallSite")&&!i.methodName.includes("Proxy.")&&i.methodName.split(".").length<4});return !n||!n.file?null:{fileName:n.file,lineNumber:n.lineNumber,columnNumber:n.column}}};function je(e){return e==="minimal"?typeof $EnabledCallSite=="function"&&e!=="minimal"?new $EnabledCallSite:new zn:new Hn}var hs={_avg:true,_count:true,_sum:true,_min:true,_max:true};function Tt(e={}){let t=ep(e);return Object.entries(t).reduce((n,[i,o])=>(hs[i]!==void 0?n.select[i]={select:o}:n[i]=o,n),{select:{}})}function ep(e={}){return typeof e._count=="boolean"?{...e,_count:{_all:e._count}}:e}function Qr(e={}){return t=>(typeof e._count=="boolean"&&(t._count=t._count._all),t)}function ws(e,t){let r=Qr(e);return t({action:"aggregate",unpacker:r,argsMapper:Tt})(e)}function tp(e={}){let{select:t,...r}=e;return typeof t=="object"?Tt({...r,_count:t}):Tt({...r,_count:{_all:true}})}function rp(e={}){return typeof e.select=="object"?t=>Qr(e)(t)._count:t=>Qr(e)(t)._count._all}function xs(e,t){return t({action:"count",unpacker:rp(e),argsMapper:tp})(e)}function np(e={}){let t=Tt(e);if(Array.isArray(t.by))for(let r of t.by)typeof r=="string"&&(t.select[r]=true);else typeof t.by=="string"&&(t.select[t.by]=true);return t}function ip(e={}){return t=>(typeof e?._count=="boolean"&&t.forEach(r=>{r._count=r._count._all;}),t)}function bs(e,t){return t({action:"groupBy",unpacker:ip(e),argsMapper:np})(e)}function Ps(e,t,r){if(t==="aggregate")return n=>ws(n,r);if(t==="count")return n=>xs(n,r);if(t==="groupBy")return n=>bs(n,r)}function Es(e,t){let r=t.fields.filter(i=>!i.relationName),n=oo(r,"name");return new Proxy({},{get(i,o){if(o in i||typeof o=="symbol")return i[o];let s=n[o];if(s)return new zt(e,o,s.type,s.isList,s.kind==="enum")},...Br(Object.keys(n))})}var Ts=e=>Array.isArray(e)?e:e.split("."),Wn=(e,t)=>Ts(t).reduce((r,n)=>r&&r[n],e),vs=(e,t,r)=>Ts(t).reduceRight((n,i,o,s)=>Object.assign({},Wn(e,s.slice(0,o)),{[i]:n}),r);function op(e,t){return e===void 0||t===void 0?[]:[...t,"select",e]}function sp(e,t,r){return t===void 0?e??{}:vs(t,r,e||true)}function Kn(e,t,r,n,i,o){let s=e._runtimeDataModel.models[t],a;return u=>{let m=je(e._errorFormat),P=op(n,i),T=sp(u,o,P),S=r({dataPath:P,callsite:m})(T),I=ap(e,t);return new Proxy(S,{get(A,M){if(!I.includes(M))return A[M];a??=Object.fromEntries(s.fields.map(D=>[D.name,D]));let q=[a[M].type,r,M],E=[P,T];return Kn(e,...q,...E)},...Br([...I,...Object.getOwnPropertyNames(S)])})}}function ap(e,t){return e._runtimeDataModel.models[t].fields.filter(r=>r.kind==="object").map(r=>r.name)}var lp=["findUnique","findUniqueOrThrow","findFirst","findFirstOrThrow","create","update","upsert","delete"],up=["aggregate","count","groupBy"];function Zn(e,t){let r=e._extensions.getAllModelExtensions(t)??{},n=[cp(e,t),dp(e,t),Zt(r),ae("name",()=>t),ae("$name",()=>t),ae("$parent",()=>e._appliedParent)];return ve({},n)}function cp(e,t){let r=Oe(t),n=Object.keys(mt).concat("count");return {getKeys(){return n},getPropertyValue(i){let o=i,s=a=>u=>{let m=je(e._errorFormat);return e._createPrismaPromise(P=>{let T={args:u,dataPath:[],action:o,model:t,clientMethod:`${r}.${i}`,jsModelName:r,transaction:P,callsite:m};return e._request({...T,...a})},{action:o,args:u,model:t})};return lp.includes(o)?Kn(e,t,s):pp(i)?Ps(e,i,s):s({})}}}function pp(e){return up.includes(e)}function dp(e,t){return We(ae("fields",()=>{let r=e._runtimeDataModel.models[t];return Es(t,r)}))}function Ss(e){return e.replace(/^./,t=>t.toUpperCase())}var Xn=Symbol();function Yt(e){let t=[mp(e),fp(e),ae(Xn,()=>e),ae("$parent",()=>e._appliedParent)],r=e._extensions.getAllClientExtensions();return r&&t.push(Zt(r)),ve(e,t)}function mp(e){let t=Object.getPrototypeOf(e._originalClient),r=[...new Set(Object.getOwnPropertyNames(t))];return {getKeys(){return r},getPropertyValue(n){return e[n]}}}function fp(e){let t=Object.keys(e._runtimeDataModel.models),r=t.map(Oe),n=[...new Set(t.concat(r))];return We({getKeys(){return n},getPropertyValue(i){let o=Ss(i);if(e._runtimeDataModel.models[o]!==void 0)return Zn(e,o);if(e._runtimeDataModel.models[i]!==void 0)return Zn(e,i)},getPropertyDescriptor(i){if(!r.includes(i))return {enumerable:false}}})}function As(e){return e[Xn]?e[Xn]:e}function Rs(e){if(typeof e=="function")return e(this);let t=Object.create(this._originalClient,{_extensions:{value:this._extensions.append(e)},_appliedParent:{value:this,configurable:true},$on:{value:void 0}});return Yt(t)}function Cs({result:e,modelName:t,select:r,omit:n,extensions:i}){let o=i.getAllComputedFields(t);if(!o)return e;let s=[],a=[];for(let u of Object.values(o)){if(n){if(n[u.name])continue;let m=u.needs.filter(P=>n[P]);m.length>0&&a.push(Et(m));}else if(r){if(!r[u.name])continue;let m=u.needs.filter(P=>!r[P]);m.length>0&&a.push(Et(m));}gp(e,u.needs)&&s.push(yp(u,ve(e,s),t));}return s.length>0||a.length>0?ve(e,[...s,...a]):e}function gp(e,t){return t.every(r=>$n(e,r))}function yp(e,t,r){return We(ae(e.name,()=>e.compute(t,r)))}function Jr({visitor:e,result:t,args:r,runtimeDataModel:n,modelName:i}){if(Array.isArray(t)){for(let s=0;s<t.length;s++)t[s]=Jr({result:t[s],args:r,modelName:i,runtimeDataModel:n,visitor:e});return t}let o=e(t,i,r)??t;return r.include&&Is({includeOrSelect:r.include,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),r.select&&Is({includeOrSelect:r.select,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),o}function Is({includeOrSelect:e,result:t,parentModelName:r,runtimeDataModel:n,visitor:i}){for(let[o,s]of Object.entries(e)){if(!s||t[o]==null||fe(s))continue;let u=n.models[r].fields.find(P=>P.name===o);if(!u||u.kind!=="object"||!u.relationName)continue;let m=typeof s=="object"?s:{};t[o]=Jr({visitor:i,result:t[o],args:m,modelName:u.type,runtimeDataModel:n});}}function ks({result:e,modelName:t,args:r,extensions:n,runtimeDataModel:i,globalOmit:o}){return n.isEmpty()||e==null||typeof e!="object"||!i.models[t]?e:Jr({result:e,args:r??{},modelName:t,runtimeDataModel:i,visitor:(a,u,m)=>{let P=Oe(u);return Cs({result:a,modelName:P,select:m.select,omit:m.select?void 0:{...o?.[P],...m.omit},extensions:n})}})}var Ke=require$$0;var hp=["$connect","$disconnect","$on","$use","$extends"],Os=hp;function Ns(e){if(e instanceof Ke.Sql)return wp(e);if(Ur(e))return xp(e);if(Array.isArray(e)){let r=[e[0]];for(let n=1;n<e.length;n++)r[n]=er(e[n]);return r}let t={};for(let r in e)t[r]=er(e[r]);return t}function wp(e){return new Ke.Sql(e.strings,e.values)}function xp(e){return new Kt(e.sql,e.values)}function er(e){if(typeof e!="object"||e==null||(0, Ke.isObjectEnumValue)(e)||xt(e)||fe(e))return e;if(dt(e))return new Ke.Decimal(e.toFixed());if(ct(e))return new Date(+e);if(ArrayBuffer.isView(e))return e.slice(0);if(Array.isArray(e)){let t=e.length,r;for(r=Array(t);t--;)r[t]=er(e[t]);return r}if(typeof e=="object"){let t={};for(let r in e)r==="__proto__"?Object.defineProperty(t,r,{value:er(e[r]),configurable:true,enumerable:true,writable:true}):t[r]=er(e[r]);return t}$e(e,"Unknown value");}function Ms(e,t,r,n=0){return e._createPrismaPromise(i=>{let o=t.customDataProxyFetch;return "transaction"in t&&i!==void 0&&(t.transaction?.kind==="batch"&&t.transaction.lock.then(),t.transaction=i),n===r.length?e._executeRequest(t):r[n]({model:t.model,operation:t.model?t.action:t.clientMethod,args:Ns(t.args??{}),__internalParams:t,query:(s,a=t)=>{let u=a.customDataProxyFetch;return a.customDataProxyFetch=Ls(o,u),a.args=s,Ms(e,a,r,n+1)}})})}function Fs(e,t){let{jsModelName:r,action:n,clientMethod:i}=t,o=r?n:i;if(e._extensions.isEmpty())return e._executeRequest(t);let s=e._extensions.getAllQueryCallbacks(r??"$none",o);return Ms(e,t,s)}function _s(e){return t=>{let r={requests:t},n=t[0].extensions.getAllBatchQueryCallbacks();return n.length?$s(r,n,0,e):e(r)}}function $s(e,t,r,n){if(r===t.length)return n(e);let i=e.customDataProxyFetch,o=e.requests[0].transaction;return t[r]({args:{queries:e.requests.map(s=>({model:s.modelName,operation:s.action,args:s.args})),transaction:o?{isolationLevel:o.kind==="batch"?o.isolationLevel:void 0}:void 0},__internalParams:e,query(s,a=e){let u=a.customDataProxyFetch;return a.customDataProxyFetch=Ls(i,u),$s(a,t,r+1,n)}})}var Ds=e=>e;function Ls(e=Ds,t=Ds){return r=>e(t(r))}function qs({dataPath:e,modelName:t,args:r,runtimeDataModel:n}){let i={modelName:t,args:r??{}},o=bp(e);if(!o||o.length===0)return i;let s=t,a=r??{};for(let u of o){let m=n.models[s];if(!m)return i;let P=m.fields.find(T=>T.name===u);if(!P)throw new Error(`Could not resolve relation field "${u}" on model "${s}" from dataPath "${e.join(".")}"`);if(P.kind!=="object"||!P.relationName)return i;s=P.type,a=Pp(a,u);}return {modelName:s,args:a}}function bp(e){let t=[];for(let r=0;r<e.length;r+=2){let n=e[r],i=e[r+1];if(n!=="select"&&n!=="include"||i===void 0)return;t.push(i);}return t}function Pp(e,t){let r=e.select?.[t];if(Vs(r))return r;let n=e.include?.[t];return Vs(n)?n:{}}function Vs(e){return !!e&&typeof e=="object"&&!Array.isArray(e)}var Gs=require$$0;var tr=require$$0;function vt(e){return ArrayBuffer.isView(e)&&Object.prototype.toString.call(e)==="[object Uint8Array]"}function rr(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,t){throw new Error(t)}function ei(e,t){return e===t||e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>ei(e[r],t[r]))}function St(e,t){let r=Object.keys(e),n=Object.keys(t);return (r.length<n.length?r:n).every(o=>{if(typeof e[o]==typeof t[o]&&typeof e[o]!="object")return e[o]===t[o];if(tr.Decimal.isDecimal(e[o])||tr.Decimal.isDecimal(t[o])){let s=Us(e[o]),a=Us(t[o]);return s&&a&&s.equals(a)}else if(vt(e[o])||vt(t[o])){let s=js(e[o]),a=js(t[o]);return s&&a&&s.equals(a)}else {if(rr(e[o])||rr(t[o]))return Bs(e[o])?.getTime()===Bs(t[o])?.getTime();if(typeof e[o]=="bigint"||typeof t[o]=="bigint")return Qs(e[o])===Qs(t[o]);if(typeof e[o]=="number"||typeof t[o]=="number")return Js(e[o])===Js(t[o])}return ei(e[o],t[o])})}function Us(e){return tr.Decimal.isDecimal(e)?e:typeof e=="number"||typeof e=="string"?new tr.Decimal(e):void 0}function js(e){return Buffer.isBuffer(e)?e:vt(e)?Buffer.from(e.buffer,e.byteOffset,e.byteLength):typeof e=="string"?Buffer.from(e,"base64"):void 0}function Bs(e){return rr(e)?e:typeof e=="string"||typeof e=="number"?new Date(e):void 0}function Qs(e){return typeof e=="bigint"?e:typeof e=="number"||typeof e=="string"?BigInt(e):void 0}function Js(e){return typeof e=="number"?e:typeof e=="string"?Number(e):void 0}function Se(e){return JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString():ArrayBuffer.isView(r)?Buffer.from(r.buffer,r.byteOffset,r.byteLength).toString("base64"):r)}var Yn=8192;function Gr(e,t){if(t.length<=Yn){e.push(...t);return}for(let r=0;r<t.length;r+=Yn)e.push(...t.slice(r,r+Yn));}function Ep(e){return e!==null&&typeof e=="object"&&typeof e.$type=="string"}function Tp(e,t){let r={};for(let n of Object.keys(e))r[n]=t(e[n],n);return r}function Ae(e){return e===null?e:Array.isArray(e)?e.map(Ae):typeof e=="object"?Ep(e)?vp(e):e.constructor!==null&&e.constructor.name!=="Object"?e:Tp(e,Ae):e}function vp({$type:e,value:t}){switch(e){case "BigInt":return BigInt(t);case "Bytes":return new Uint8Array(Buffer.from(t,"base64"));case "DateTime":return new Date(t);case "Decimal":return new Gs.Decimal(t);case "Json":return JSON.parse(t);case "Raw":return t;case "FieldRef":throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");case "Enum":return t;default:V(t,"Unknown tagged value");}}function zr(e){return e.name==="DriverAdapterError"&&typeof e.cause=="object"}var k={Int32:0,Int64:1,Float:2,Double:3,Numeric:4,Boolean:5,Character:6,Text:7,Date:8,Time:9,DateTime:10,Json:11,Enum:12,Bytes:13,Set:14,Uuid:15,Int32Array:64,Int64Array:65,FloatArray:66,DoubleArray:67,NumericArray:68,BooleanArray:69,CharacterArray:70,TextArray:71,DateArray:72,TimeArray:73,DateTimeArray:74,JsonArray:75,EnumArray:76,BytesArray:77,UuidArray:78,UnknownNumber:128};var X=class extends Error{name="UserFacingError";code;meta;constructor(t,r,n){super(t),this.code=r,this.meta=n??{};}toQueryResponseErrorObject(){return {error:this.message,user_facing_error:{is_panic:false,message:this.message,meta:this.meta,error_code:this.code}}}};function Be(e){if(!zr(e))throw e;let t=Cp(e),r=Hs(e);if(t!==void 0&&r!==void 0){let n={driverAdapterError:e};throw e.cause.kind==="UniqueConstraintViolation"&&e.cause.table&&(n.table=e.cause.table),new X(r,t,n)}throw Rp(e.cause.kind)?Ap(e):e}function ri(e){throw zr(e)?Sp(e):e}function Sp(e){let t=e.cause.originalCode??"N/A",r=zs(e);return new X(`Raw query failed. Code: \`${t}\`. Message: \`${r}\``,"P2010",{driverAdapterError:e})}function Ap(e){let t=e.cause.originalCode??"N/A",r=zs(e);return new X(`Database error. Code: \`${t}\`. Message: \`${r}\``,"P2039",{driverAdapterError:e})}function zs(e){return e.cause.originalMessage??Hs(e)??e.message??"N/A"}function Rp(e){switch(e){case "postgres":case "mysql":case "sqlite":case "mssql":return  true;default:return  false}}function Cp(e){switch(e.cause.kind){case "AuthenticationFailed":return "P1000";case "DatabaseNotReachable":return "P1001";case "DatabaseDoesNotExist":return "P1003";case "SocketTimeout":return "P1008";case "DatabaseAlreadyExists":return "P1009";case "DatabaseAccessDenied":return "P1010";case "TlsConnectionError":return "P1011";case "ConnectionClosed":return "P1017";case "TransactionAlreadyClosed":return "P1018";case "LengthMismatch":return "P2000";case "UniqueConstraintViolation":return "P2002";case "ForeignKeyConstraintViolation":case "RestrictViolation":return "P2003";case "InvalidInputValue":return "P2007";case "UnsupportedNativeDataType":return "P2010";case "NullConstraintViolation":return "P2011";case "ValueOutOfRange":return "P2020";case "TableDoesNotExist":return "P2021";case "ColumnNotFound":return "P2022";case "InvalidIsolationLevel":case "InconsistentColumnData":return "P2023";case "MissingFullTextSearchIndex":return "P2030";case "TransactionWriteConflict":return "P2034";case "GenericJs":return "P2036";case "TooManyConnections":return "P2037";case "postgres":case "sqlite":case "mysql":case "mssql":return;default:V(e.cause,`Unknown error: ${Se(e.cause)}`);}}function Hs(e){switch(e.cause.kind){case "AuthenticationFailed":return `Authentication failed against the database server, the provided database credentials for \`${e.cause.user??"(not available)"}\` are not valid`;case "DatabaseNotReachable":{let t=e.cause.host&&e.cause.port?`${e.cause.host}:${e.cause.port}`:e.cause.host;return `Can't reach database server${t?` at ${t}`:""}`}case "DatabaseDoesNotExist":return `Database \`${e.cause.db??"(not available)"}\` does not exist on the database server`;case "SocketTimeout":return "Operation has timed out";case "DatabaseAlreadyExists":return `Database \`${e.cause.db??"(not available)"}\` already exists on the database server`;case "DatabaseAccessDenied":return `User was denied access on the database \`${e.cause.db??"(not available)"}\``;case "TlsConnectionError":return `Error opening a TLS connection: ${e.cause.reason}`;case "ConnectionClosed":return "Server has closed the connection.";case "TransactionAlreadyClosed":return e.cause.cause;case "LengthMismatch":return `The provided value for the column is too long for the column's type. Column: ${e.cause.column??"(not available)"}`;case "UniqueConstraintViolation":return `Unique constraint failed on the ${ti(e.cause.constraint)}`;case "ForeignKeyConstraintViolation":case "RestrictViolation":return `Foreign key constraint violated on the ${ti(e.cause.constraint)}`;case "UnsupportedNativeDataType":return `Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;case "NullConstraintViolation":return `Null constraint violation on the ${ti(e.cause.constraint)}`;case "ValueOutOfRange":return `Value out of range for the type: ${e.cause.cause}`;case "TableDoesNotExist":return `The table \`${e.cause.table??"(not available)"}\` does not exist in the current database.`;case "ColumnNotFound":return `The column \`${e.cause.column??"(not available)"}\` does not exist in the current database.`;case "InvalidIsolationLevel":return `Error in connector: Conversion error: ${e.cause.level}`;case "InconsistentColumnData":return `Inconsistent column data: ${e.cause.cause}`;case "MissingFullTextSearchIndex":return "Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";case "TransactionWriteConflict":return "Transaction failed due to a write conflict or a deadlock. Please retry your transaction";case "GenericJs":return `Error in external connector (id ${e.cause.id})`;case "TooManyConnections":return `Too many database connections opened: ${e.cause.cause}`;case "InvalidInputValue":return `Invalid input value: ${e.cause.message}`;case "sqlite":case "postgres":case "mysql":case "mssql":return;default:V(e.cause,`Unknown error: ${Se(e.cause)}`);}}function ti(e){return e&&"fields"in e?`fields: (${e.fields.map(t=>`\`${t}\``).join(", ")})`:e&&"index"in e?`constraint: \`${e.index}\``:e&&"foreignKey"in e?"foreign key":"(not available)"}function Ip(e){if(typeof e!="object"||e===null)return  false;let t=e;return "$type"in t&&t.$type==="Param"||"prisma__type"in t&&t.prisma__type==="param"}function kp(e){return "prisma__type"in e?e.prisma__value?.name:e.value.name}function Op(e,t){let r={};for(let[n,i]of Object.entries(e))if(r[n]=i,Ip(i)){let o=kp(i);o&&o in t&&(r[n]=t[o]);}return r}function Ws(e,t,r={}){let n=e.map(o=>t.keys.reduce((s,a)=>(s[a]=Ae(o[a]),s),{})),i=new Set(t.nestedSelection);return t.arguments.map(o=>{let s=Op(o,r),a=n.findIndex(u=>St(u,s));if(a===-1)return t.expectNonEmpty?new X("An operation failed because it depends on one or more records that were required but not found","P2025"):null;{let u=Object.entries(e[a]).filter(([m])=>i.has(m));return Object.fromEntries(u)}})}var Xs=require$$0;var Q=class extends X{name="DataMapperError";constructor(t,r){super(t,"P2023",r);}},Ks=new WeakMap;function Np(e){let t=Ks.get(e);return t||(t=Object.entries(e),Ks.set(e,t)),t}function ii(e,t,r){switch(t.type){case "affectedRows":if(typeof e!="number")throw new Q(`Expected an affected rows count, got: ${typeof e} (${e})`);return {count:e};case "object":return oi(e,t.fields,r,t.skipNulls);case "field":return ni(e,"<result>",t.fieldType,r);default:V(t,`Invalid data mapping type: '${t.type}'`);}}function oi(e,t,r,n){if(e===null)return null;if(Array.isArray(e)){let i=e;return n&&(i=i.filter(o=>o!==null)),i.map(o=>Zs(o,t,r))}if(typeof e=="object")return Zs(e,t,r);if(typeof e=="string"){let i;try{i=JSON.parse(e);}catch(o){throw new Q("Expected an array or object, got a string that is not valid JSON",{cause:o})}return oi(i,t,r,n)}throw new Q(`Expected an array or an object, got: ${typeof e}`)}function Zs(e,t,r){if(typeof e!="object")throw new Q(`Expected an object, but got '${typeof e}'`);let n={};for(let[i,o]of Np(t))switch(o.type){case "affectedRows":throw new Q(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);case "object":{let{serializedName:s,fields:a,skipNulls:u}=o;if(s!==null&&!Object.hasOwn(e,s))throw new Q(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);let m=s!==null?e[s]:e;n[i]=oi(m,a,r,u);break}case "field":{let s=o.dbName;if(Object.hasOwn(e,s))n[i]=Dp(e[s],s,o.fieldType,r);else throw new Q(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`)}break;default:V(o,`DataMapper: Invalid data mapping node type: '${o.type}'`);}return n}function Dp(e,t,r,n){return e===null?r.arity==="list"?[]:null:r.arity==="list"?e.map((o,s)=>ni(o,`${t}[${s}]`,r,n)):ni(e,t,r,n)}function ni(e,t,r,n){switch(r.type){case "unsupported":return e;case "string":{if(typeof e!="string")throw new Q(`Expected a string in column '${t}', got ${typeof e}: ${e}`);return e}case "int":switch(typeof e){case "number":return Math.trunc(e);case "string":{let i=Math.trunc(Number(e));if(Number.isNaN(i)||!Number.isFinite(i))throw new Q(`Expected an integer in column '${t}', got string: ${e}`);if(!Number.isSafeInteger(i))throw new Q(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);return i}default:throw new Q(`Expected an integer in column '${t}', got ${typeof e}: ${e}`)}case "bigint":{if(typeof e!="number"&&typeof e!="string")throw new Q(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);return {$type:"BigInt",value:e}}case "float":{if(typeof e=="number")return e;if(typeof e=="string"){let i=Number(e);if(Number.isNaN(i)&&!/^[-+]?nan$/.test(e.toLowerCase()))throw new Q(`Expected a float in column '${t}', got string: ${e}`);return i}throw new Q(`Expected a float in column '${t}', got ${typeof e}: ${e}`)}case "boolean":{if(typeof e=="boolean")return e;if(typeof e=="number")return e===1;if(typeof e=="string"){if(e==="true"||e==="TRUE"||e==="1")return  true;if(e==="false"||e==="FALSE"||e==="0")return  false;throw new Q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`)}if(Array.isArray(e)||vt(e)){for(let i of e)if(i!==0)return  true;return  false}throw new Q(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`)}case "decimal":if(typeof e!="number"&&typeof e!="string"&&!Xs.Decimal.isDecimal(e))throw new Q(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);return {$type:"Decimal",value:e};case "datetime":{if(typeof e=="string")return {$type:"DateTime",value:Fp(e)};if(typeof e=="number"||rr(e))return {$type:"DateTime",value:e};throw new Q(`Expected a date in column '${t}', got ${typeof e}: ${e}`)}case "object":return {$type:"Json",value:Se(e)};case "json":return {$type:"Json",value:`${e}`};case "bytes":{switch(r.encoding){case "base64":if(typeof e!="string")throw new Q(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);return {$type:"Bytes",value:e};case "hex":if(typeof e!="string"||!e.startsWith("\\x"))throw new Q(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);return {$type:"Bytes",value:Buffer.from(e.slice(2),"hex").toString("base64")};case "array":if(Array.isArray(e))return {$type:"Bytes",value:Buffer.from(e).toString("base64")};if(vt(e))return {$type:"Bytes",value:Buffer.from(e).toString("base64")};throw new Q(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);default:V(r.encoding,`DataMapper: Unknown bytes encoding: ${r.encoding}`);}break}case "enum":{let i=n[r.name];if(i===void 0)throw new Q(`Unknown enum '${r.name}'`);let o=i[`${e}`];if(o===void 0)throw new Q(`Value '${e}' not found in enum '${r.name}'`);return o}default:V(r,`DataMapper: Unknown result type: ${r.type}`);}}var Mp=/\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;function Fp(e){let t=Mp.exec(e);if(t===null)return `${e}T00:00:00Z`;let r=e,[n,i,o]=t;if(i!==void 0&&i!=="Z"&&o===void 0?r=`${e}:00`:i===void 0&&(r=`${e}Z`),n.length===e.length)return `1970-01-01T${r}`;let s=t.index-1;return r[s]===" "&&(r=`${r.slice(0,s)}T${r.slice(s+1)}`),r}function ge(e){if(typeof e!="object")return e;var t,r,n=Object.prototype.toString.call(e);if(n==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){r=new e.constructor;for(t in e)e.hasOwnProperty(t)&&r[t]!==e[t]&&(r[t]=ge(e[t]));}else {r={};for(t in e)t==="__proto__"?Object.defineProperty(r,t,{value:ge(e[t]),configurable:true,enumerable:true,writable:true}):r[t]=ge(e[t]);}return r}if(n==="[object Array]"){for(t=e.length,r=Array(t);t--;)r[t]=ge(e[t]);return r}return n==="[object Set]"?(r=new Set,e.forEach(function(i){r.add(ge(i));}),r):n==="[object Map]"?(r=new Map,e.forEach(function(i,o){r.set(ge(o),ge(i));}),r):n==="[object Date]"?new Date(+e):n==="[object RegExp]"?(r=new RegExp(e.source,e.flags),r.lastIndex=e.lastIndex,r):n==="[object DataView]"?new e.constructor(ge(e.buffer)):n==="[object ArrayBuffer]"?e.slice(0):n.slice(-6)==="Array]"?new e.constructor(e):e}function _p(e){let t=Object.entries(e);return t.length===0?"":(t.sort(([n],[i])=>n.localeCompare(i)),`/*${t.map(([n,i])=>{let o=encodeURIComponent(n),s=encodeURIComponent(i).replace(/'/g,"\\'");return `${o}='${s}'`}).join(",")}*/`)}function Hr(e,t){let r={};for(let n of e){let i=n(ge(t));for(let[o,s]of Object.entries(i))s!==void 0&&(r[o]=s);}return r}function Ys(e,t){let r=Hr(e,t);return _p(r)}function ea(e,t){return t?`${e} ${t}`:e}var nr;(function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER";})(nr||(nr={}));function $p(e){switch(e){case "postgresql":case "postgres":case "prisma+postgres":return "postgresql";case "sqlserver":return "mssql";case "mysql":case "sqlite":case "cockroachdb":case "mongodb":return e;default:V(e,`Unknown provider: ${e}`);}}async function Wr({query:e,tracingHelper:t,provider:r,onQuery:n,execute:i}){let o=n===void 0?i:async()=>{let s=new Date,a=performance.now(),u=await i(),m=performance.now();return n({timestamp:s,duration:m-a,query:e.sql,params:e.args}),u};return t.isEnabled()?await t.runInChildSpan({name:"db_query",kind:nr.CLIENT,attributes:{"db.query.text":e.sql,"db.system.name":$p(r)}},o):o()}function Ze(e,t){var r="000000000"+e;return r.substr(r.length-t)}var ta=Pe(require$$5,1);function Lp(){try{return ta.default.hostname()}catch{return process.env._CLUSTER_NETWORK_NAME_||process.env.COMPUTERNAME||"hostname"}}var ra=2,Vp=Ze(process.pid.toString(36),ra),na=Lp(),qp=na.length,Up=Ze(na.split("").reduce(function(e,t){return +e+t.charCodeAt(0)},+qp+36).toString(36),ra);function si(){return Vp+Up}function Kr(e){return typeof e=="string"&&/^c[a-z0-9]{20,32}$/.test(e)}function ai(e){let n=Math.pow(36,4),i=0;function o(){return Ze((Math.random()*n<<0).toString(36),4)}function s(){return i=i<n?i:0,i++,i-1}function a(){var u="c",m=new Date().getTime().toString(36),P=Ze(s().toString(36),4),T=e(),S=o()+o();return u+m+P+T+S}return a.fingerprint=e,a.isCuid=Kr,a}var jp=ai(si);var ia=jp;var Zr=BigInt(4294967295),oa=BigInt(32);function Bp(e,t=false){return t?{h:Number(e&Zr),l:Number(e>>oa&Zr)}:{h:Number(e>>oa&Zr)|0,l:Number(e&Zr)|0}}function sa(e,t=false){let r=e.length,n=new Uint32Array(r),i=new Uint32Array(r);for(let o=0;o<r;o++){let{h:s,l:a}=Bp(e[o],t);[n[o],i[o]]=[s,a];}return [n,i]}var aa=(e,t,r)=>e<<r|t>>>32-r,la=(e,t,r)=>t<<r|e>>>32-r,ua=(e,t,r)=>t<<r-32|e>>>64-r,ca=(e,t,r)=>e<<r-32|t>>>64-r;function Qp(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in e&&e.BYTES_PER_ELEMENT===1}function Xr(e,t=""){if(typeof e!="number"){let r=t&&`"${t}" `;throw new TypeError(`${r}expected number, got ${typeof e}`)}if(!Number.isSafeInteger(e)||e<0){let r=t&&`"${t}" `;throw new RangeError(`${r}expected integer >= 0, got ${e}`)}}function Yr(e,t,r=""){let n=Qp(e),i=e?.length,o=t!==void 0;if(!n||o){let s=r&&`"${r}" `,a="",u=n?`length=${i}`:`type=${typeof e}`,m=s+"expected Uint8Array"+a+", got "+u;throw n?new RangeError(m):new TypeError(m)}return e}function li(e,t=true){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function pa(e,t){Yr(e,void 0,"digestInto() output");let r=t.outputLen;if(e.length<r)throw new RangeError('"digestInto() output" expected to be of length >='+r)}function da(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function ui(...e){for(let t=0;t<e.length;t++)e[t].fill(0);}var Jp=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Gp(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function zp(e){for(let t=0;t<e.length;t++)e[t]=Gp(e[t]);return e}var ci=Jp?e=>e:zp;function ma(e,t={}){let r=(i,o)=>e(o).update(i).digest(),n=e(void 0);return r.outputLen=n.outputLen,r.blockLen=n.blockLen,r.canXOF=n.canXOF,r.create=i=>e(i),Object.assign(r,t),Object.freeze(r)}var fa=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});var Hp=BigInt(0),ir=BigInt(1),Wp=BigInt(2),Kp=BigInt(7),Zp=BigInt(256),Xp=BigInt(113),ha=[],wa=[],xa=[];for(let e=0,t=ir,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],ha.push(2*(5*n+r)),wa.push((e+1)*(e+2)/2%64);let i=Hp;for(let o=0;o<7;o++)t=(t<<ir^(t>>Kp)*Xp)%Zp,t&Wp&&(i^=ir<<(ir<<BigInt(o))-ir);xa.push(i);}var ba=sa(xa,true),Yp=ba[0],ed=ba[1],ga=(e,t,r)=>r>32?ua(e,t,r):aa(e,t,r),ya=(e,t,r)=>r>32?ca(e,t,r):la(e,t,r);function td(e,t=24){if(Xr(t,"rounds"),t<1||t>24)throw new Error('"rounds" expected integer 1..24');let r=new Uint32Array(5*2);for(let n=24-t;n<24;n++){for(let s=0;s<10;s++)r[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){let a=(s+8)%10,u=(s+2)%10,m=r[u],P=r[u+1],T=ga(m,P,1)^r[a],S=ya(m,P,1)^r[a+1];for(let I=0;I<50;I+=10)e[s+I]^=T,e[s+I+1]^=S;}let i=e[2],o=e[3];for(let s=0;s<24;s++){let a=wa[s],u=ga(i,o,a),m=ya(i,o,a),P=ha[s];i=e[P],o=e[P+1],e[P]=u,e[P+1]=m;}for(let s=0;s<50;s+=10){let a=e[s],u=e[s+1],m=e[s+2],P=e[s+3];e[s]^=~e[s+2]&e[s+4],e[s+1]^=~e[s+3]&e[s+5],e[s+2]^=~e[s+4]&e[s+6],e[s+3]^=~e[s+5]&e[s+7],e[s+4]^=~e[s+6]&e[s+8],e[s+5]^=~e[s+7]&e[s+9],e[s+6]^=~e[s+8]&a,e[s+7]^=~e[s+9]&u,e[s+8]^=~a&m,e[s+9]^=~u&P;}e[0]^=Yp[n],e[1]^=ed[n];}ui(r);}var pi=class e{state;pos=0;posOut=0;finished=false;state32;destroyed=false;blockLen;suffix;outputLen;canXOF;enableXOF=false;rounds;constructor(t,r,n,i=false,o=24){if(this.blockLen=t,this.suffix=r,this.outputLen=n,this.enableXOF=i,this.canXOF=i,this.rounds=o,Xr(n,"outputLen"),!(0<t&&t<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=da(this.state);}clone(){return this._cloneInto()}keccak(){ci(this.state32),td(this.state32,this.rounds),ci(this.state32),this.posOut=0,this.pos=0;}update(t){li(this),Yr(t);let{blockLen:r,state:n}=this,i=t.length;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);for(let a=0;a<s;a++)n[this.pos++]^=t[o++];this.pos===r&&this.keccak();}return this}finish(){if(this.finished)return;this.finished=true;let{state:t,suffix:r,pos:n,blockLen:i}=this;t[n]^=r,(r&128)!==0&&n===i-1&&this.keccak(),t[i-1]^=128,this.keccak();}writeInto(t){li(this,false),Yr(t),this.finish();let r=this.state,{blockLen:n}=this;for(let i=0,o=t.length;i<o;){this.posOut>=n&&this.keccak();let s=Math.min(n-this.posOut,o-i);t.set(r.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s;}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Xr(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(pa(t,this),this.finished)throw new Error("digest() was already called");this.writeInto(t.subarray(0,this.outputLen)),this.destroy();}digest(){let t=new Uint8Array(this.outputLen);return this.digestInto(t),t}destroy(){this.destroyed=true,ui(this.state);}_cloneInto(t){let{blockLen:r,suffix:n,outputLen:i,rounds:o,enableXOF:s}=this;return t||=new e(r,n,i,s,o),t.blockLen=r,t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=n,t.outputLen=i,t.enableXOF=s,t.canXOF=this.canXOF,t.destroyed=this.destroyed,t}},rd=(e,t,r,n={})=>ma(()=>new pi(t,e,r),n);var Pa=rd(6,72,64,fa(10));var nd=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,di=Math.ceil,he=Math.floor,le="[BigNumber Error] ",Ea=le+"Number primitive has more than 15 significant digits: ",Re=1e14,N=14,mi=9007199254740991,fi=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Qe=1e7,Y=1e9;function Ta(e){var t,r,n,i=E.prototype={constructor:E,toString:null,valueOf:null},o=new E(1),s=20,a=4,u=-7,m=21,P=-1e7,T=1e7,S=false,I=1,A=0,M={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},L="0123456789abcdefghijklmnopqrstuvwxyz",q=true;function E(l,c){var p,h,f,y,b,d,g,x,w=this;if(!(w instanceof E))return new E(l,c);if(c==null){if(l&&l._isBigNumber===true){w.s=l.s,!l.c||l.e>T?w.c=w.e=null:l.e<P?w.c=[w.e=0]:(w.e=l.e,w.c=l.c.slice());return}if((d=typeof l=="number")&&l*0==0){if(w.s=1/l<0?(l=-l,-1):1,l===~~l){for(y=0,b=l;b>=10;b/=10,y++);y>T?w.c=w.e=null:(w.e=y,w.c=[l]);return}x=String(l);}else {if(!nd.test(x=String(l)))return n(w,x,d);w.s=x.charCodeAt(0)==45?(x=x.slice(1),-1):1;}(y=x.indexOf("."))>-1&&(x=x.replace(".","")),(b=x.search(/e/i))>0?(y<0&&(y=b),y+=+x.slice(b+1),x=x.substring(0,b)):y<0&&(y=x.length);}else {if(J(c,2,L.length,"Base"),c==10&&q)return w=new E(l),ie(w,s+w.e+1,a);if(x=String(l),d=typeof l=="number"){if(l*0!=0)return n(w,x,d,c);if(w.s=1/l<0?(x=x.slice(1),-1):1,E.DEBUG&&x.replace(/^0\.0*|\./,"").length>15)throw Error(Ea+l)}else w.s=x.charCodeAt(0)===45?(x=x.slice(1),-1):1;for(p=L.slice(0,c),y=b=0,g=x.length;b<g;b++)if(p.indexOf(h=x.charAt(b))<0){if(h=="."){if(b>y){y=g;continue}}else if(!f&&(x==x.toUpperCase()&&(x=x.toLowerCase())||x==x.toLowerCase()&&(x=x.toUpperCase()))){f=true,b=-1,y=0;continue}return n(w,String(l),d,c)}d=false,x=r(x,c,10,w.s),(y=x.indexOf("."))>-1?x=x.replace(".",""):y=x.length;}for(b=0;x.charCodeAt(b)===48;b++);for(g=x.length;x.charCodeAt(--g)===48;);if(x=x.slice(b,++g)){if(g-=b,d&&E.DEBUG&&g>15&&(l>mi||l!==he(l)))throw Error(Ea+w.s*l);if((y=y-b-1)>T)w.c=w.e=null;else if(y<P)w.c=[w.e=0];else {if(w.e=y,w.c=[],b=(y+1)%N,y<0&&(b+=N),b<g){for(b&&w.c.push(+x.slice(0,b)),g-=N;b<g;)w.c.push(+x.slice(b,b+=N));b=N-(x=x.slice(b)).length;}else b-=g;for(;b--;x+="0");w.c.push(+x);}}else w.c=[w.e=0];}E.clone=Ta,E.ROUND_UP=0,E.ROUND_DOWN=1,E.ROUND_CEIL=2,E.ROUND_FLOOR=3,E.ROUND_HALF_UP=4,E.ROUND_HALF_DOWN=5,E.ROUND_HALF_EVEN=6,E.ROUND_HALF_CEIL=7,E.ROUND_HALF_FLOOR=8,E.EUCLID=9,E.config=E.set=function(l){var c,p;if(l!=null)if(typeof l=="object"){if(l.hasOwnProperty(c="DECIMAL_PLACES")&&(p=l[c],J(p,0,Y,c),s=p),l.hasOwnProperty(c="ROUNDING_MODE")&&(p=l[c],J(p,0,8,c),a=p),l.hasOwnProperty(c="EXPONENTIAL_AT")&&(p=l[c],p&&p.pop?(J(p[0],-Y,0,c),J(p[1],0,Y,c),u=p[0],m=p[1]):(J(p,-Y,Y,c),u=-(m=p<0?-p:p))),l.hasOwnProperty(c="RANGE"))if(p=l[c],p&&p.pop)J(p[0],-Y,-1,c),J(p[1],1,Y,c),P=p[0],T=p[1];else if(J(p,-Y,Y,c),p)P=-(T=p<0?-p:p);else throw Error(le+c+" cannot be zero: "+p);if(l.hasOwnProperty(c="CRYPTO"))if(p=l[c],p===!!p)if(p)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))S=p;else throw S=!p,Error(le+"crypto unavailable");else S=p;else throw Error(le+c+" not true or false: "+p);if(l.hasOwnProperty(c="MODULO_MODE")&&(p=l[c],J(p,0,9,c),I=p),l.hasOwnProperty(c="POW_PRECISION")&&(p=l[c],J(p,0,Y,c),A=p),l.hasOwnProperty(c="FORMAT"))if(p=l[c],typeof p=="object")M=p;else throw Error(le+c+" not an object: "+p);if(l.hasOwnProperty(c="ALPHABET"))if(p=l[c],typeof p=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(p))q=p.slice(0,10)=="0123456789",L=p;else throw Error(le+c+" invalid: "+p)}else throw Error(le+"Object expected: "+l);return {DECIMAL_PLACES:s,ROUNDING_MODE:a,EXPONENTIAL_AT:[u,m],RANGE:[P,T],CRYPTO:S,MODULO_MODE:I,POW_PRECISION:A,FORMAT:M,ALPHABET:L}},E.isBigNumber=function(l){if(!l||l._isBigNumber!==true)return  false;if(!E.DEBUG)return  true;var c,p,h=l.c,f=l.e,y=l.s;e:if({}.toString.call(h)=="[object Array]"){if((y===1||y===-1)&&f>=-Y&&f<=Y&&f===he(f)){if(h[0]===0){if(f===0&&h.length===1)return  true;break e}if(c=(f+1)%N,c<1&&(c+=N),String(h[0]).length==c){for(c=0;c<h.length;c++)if(p=h[c],p<0||p>=Re||p!==he(p))break e;if(p!==0)return  true}}}else if(h===null&&f===null&&(y===null||y===1||y===-1))return  true;throw Error(le+"Invalid BigNumber: "+l)},E.maximum=E.max=function(){return H(arguments,-1)},E.minimum=E.min=function(){return H(arguments,1)},E.random=function(){var l=9007199254740992,c=Math.random()*l&2097151?function(){return he(Math.random()*l)}:function(){return (Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(p){var h,f,y,b,d,g=0,x=[],w=new E(o);if(p==null?p=s:J(p,0,Y),b=di(p/N),S)if(crypto.getRandomValues){for(h=crypto.getRandomValues(new Uint32Array(b*=2));g<b;)d=h[g]*131072+(h[g+1]>>>11),d>=9e15?(f=crypto.getRandomValues(new Uint32Array(2)),h[g]=f[0],h[g+1]=f[1]):(x.push(d%1e14),g+=2);g=b/2;}else if(crypto.randomBytes){for(h=crypto.randomBytes(b*=7);g<b;)d=(h[g]&31)*281474976710656+h[g+1]*1099511627776+h[g+2]*4294967296+h[g+3]*16777216+(h[g+4]<<16)+(h[g+5]<<8)+h[g+6],d>=9e15?crypto.randomBytes(7).copy(h,g):(x.push(d%1e14),g+=7);g=b/7;}else throw S=false,Error(le+"crypto unavailable");if(!S)for(;g<b;)d=c(),d<9e15&&(x[g++]=d%1e14);for(b=x[--g],p%=N,b&&p&&(d=fi[N-p],x[g]=he(b/d)*d);x[g]===0;x.pop(),g--);if(g<0)x=[y=0];else {for(y=-1;x[0]===0;x.splice(0,1),y-=N);for(g=1,d=x[0];d>=10;d/=10,g++);g<N&&(y-=N-g);}return w.e=y,w.c=x,w}}(),E.sum=function(){for(var l=1,c=arguments,p=new E(c[0]);l<c.length;)p=p.plus(c[l++]);return p},r=function(){var l="0123456789";function c(p,h,f,y){for(var b,d=[0],g,x=0,w=p.length;x<w;){for(g=d.length;g--;d[g]*=h);for(d[0]+=y.indexOf(p.charAt(x++)),b=0;b<d.length;b++)d[b]>f-1&&(d[b+1]==null&&(d[b+1]=0),d[b+1]+=d[b]/f|0,d[b]%=f);}return d.reverse()}return function(p,h,f,y,b){var d,g,x,w,v,R,C,$,G=p.indexOf("."),W=s,F=a;for(G>=0&&(w=A,A=0,p=p.replace(".",""),$=new E(h),R=$.pow(p.length-G),A=w,$.c=c(Le(ye(R.c),R.e,"0"),10,f,l),$.e=$.c.length),C=c(p,h,f,b?(d=L,l):(d=l,L)),x=w=C.length;C[--w]==0;C.pop());if(!C[0])return d.charAt(0);if(G<0?--x:(R.c=C,R.e=x,R.s=y,R=t(R,$,W,F,f),C=R.c,v=R.r,x=R.e),g=x+W+1,G=C[g],w=f/2,v=v||g<0||C[g+1]!=null,v=F<4?(G!=null||v)&&(F==0||F==(R.s<0?3:2)):G>w||G==w&&(F==4||v||F==6&&C[g-1]&1||F==(R.s<0?8:7)),g<1||!C[0])p=v?Le(d.charAt(1),-W,d.charAt(0)):d.charAt(0);else {if(C.length=g,v)for(--f;++C[--g]>f;)C[g]=0,g||(++x,C=[1].concat(C));for(w=C.length;!C[--w];);for(G=0,p="";G<=w;p+=d.charAt(C[G++]));p=Le(p,x,d.charAt(0));}return p}}(),t=function(){function l(h,f,y){var b,d,g,x,w=0,v=h.length,R=f%Qe,C=f/Qe|0;for(h=h.slice();v--;)g=h[v]%Qe,x=h[v]/Qe|0,b=C*g+x*R,d=R*g+b%Qe*Qe+w,w=(d/y|0)+(b/Qe|0)+C*x,h[v]=d%y;return w&&(h=[w].concat(h)),h}function c(h,f,y,b){var d,g;if(y!=b)g=y>b?1:-1;else for(d=g=0;d<y;d++)if(h[d]!=f[d]){g=h[d]>f[d]?1:-1;break}return g}function p(h,f,y,b){for(var d=0;y--;)h[y]-=d,d=h[y]<f[y]?1:0,h[y]=d*b+h[y]-f[y];for(;!h[0]&&h.length>1;h.splice(0,1));}return function(h,f,y,b,d){var g,x,w,v,R,C,$,G,W,F,U,oe,wr,Sn,An,Ce,Ot,me=h.s==f.s?1:-1,se=h.c,z=f.c;if(!se||!se[0]||!z||!z[0])return new E(!h.s||!f.s||(se?z&&se[0]==z[0]:!z)?NaN:se&&se[0]==0||!z?me*0:me/0);for(G=new E(me),W=G.c=[],x=h.e-f.e,me=y+x+1,d||(d=Re,x=we(h.e/N)-we(f.e/N),me=me/N|0),w=0;z[w]==(se[w]||0);w++);if(z[w]>(se[w]||0)&&x--,me<0)W.push(1),v=true;else {for(Sn=se.length,Ce=z.length,w=0,me+=2,R=he(d/(z[0]+1)),R>1&&(z=l(z,R,d),se=l(se,R,d),Ce=z.length,Sn=se.length),wr=Ce,F=se.slice(0,Ce),U=F.length;U<Ce;F[U++]=0);Ot=z.slice(),Ot=[0].concat(Ot),An=z[0],z[1]>=d/2&&An++;do{if(R=0,g=c(z,F,Ce,U),g<0){if(oe=F[0],Ce!=U&&(oe=oe*d+(F[1]||0)),R=he(oe/An),R>1)for(R>=d&&(R=d-1),C=l(z,R,d),$=C.length,U=F.length;c(C,F,$,U)==1;)R--,p(C,Ce<$?Ot:z,$,d),$=C.length,g=1;else R==0&&(g=R=1),C=z.slice(),$=C.length;if($<U&&(C=[0].concat(C)),p(F,C,U,d),U=F.length,g==-1)for(;c(z,F,Ce,U)<1;)R++,p(F,Ce<U?Ot:z,U,d),U=F.length;}else g===0&&(R++,F=[0]);W[w++]=R,F[0]?F[U++]=se[wr]||0:(F=[se[wr]],U=1);}while((wr++<Sn||F[0]!=null)&&me--);v=F[0]!=null,W[0]||W.splice(0,1);}if(d==Re){for(w=1,me=W[0];me>=10;me/=10,w++);ie(G,y+(G.e=w+x*N-1)+1,b,v);}else G.e=x,G.r=+v;return G}}();function D(l,c,p,h){var f,y,b,d,g;if(p==null?p=a:J(p,0,8),!l.c)return l.toString();if(f=l.c[0],b=l.e,c==null)g=ye(l.c),g=h==1||h==2&&(b<=u||b>=m)?tn(g,b):Le(g,b,"0");else if(l=ie(new E(l),c,p),y=l.e,g=ye(l.c),d=g.length,h==1||h==2&&(c<=y||y<=u)){for(;d<c;g+="0",d++);g=tn(g,y);}else if(c-=b+(h===2&&y>b),g=Le(g,y,"0"),y+1>d){if(--c>0)for(g+=".";c--;g+="0");}else if(c+=y-d,c>0)for(y+1==d&&(g+=".");c--;g+="0");return l.s<0&&f?"-"+g:g}function H(l,c){for(var p,h,f=1,y=new E(l[0]);f<l.length;f++)h=new E(l[f]),(!h.s||(p=Xe(y,h))===c||p===0&&y.s===c)&&(y=h);return y}function ce(l,c,p){for(var h=1,f=c.length;!c[--f];c.pop());for(f=c[0];f>=10;f/=10,h++);return (p=h+p*N-1)>T?l.c=l.e=null:p<P?l.c=[l.e=0]:(l.e=p,l.c=c),l}n=function(){var l=/^(-?)0([xbo])(?=\w[\w.]*$)/i,c=/^([^.]+)\.$/,p=/^\.([^.]+)$/,h=/^-?(Infinity|NaN)$/,f=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(y,b,d,g){var x,w=d?b:b.replace(f,"");if(h.test(w))y.s=isNaN(w)?null:w<0?-1:1;else {if(!d&&(w=w.replace(l,function(v,R,C){return x=(C=C.toLowerCase())=="x"?16:C=="b"?2:8,!g||g==x?R:v}),g&&(x=g,w=w.replace(c,"$1").replace(p,"0.$1")),b!=w))return new E(w,x);if(E.DEBUG)throw Error(le+"Not a"+(g?" base "+g:"")+" number: "+b);y.s=null;}y.c=y.e=null;}}();function ie(l,c,p,h){var f,y,b,d,g,x,w,v=l.c,R=fi;if(v){e:{for(f=1,d=v[0];d>=10;d/=10,f++);if(y=c-f,y<0)y+=N,b=c,g=v[x=0],w=he(g/R[f-b-1]%10);else if(x=di((y+1)/N),x>=v.length)if(h){for(;v.length<=x;v.push(0));g=w=0,f=1,y%=N,b=y-N+1;}else break e;else {for(g=d=v[x],f=1;d>=10;d/=10,f++);y%=N,b=y-N+f,w=b<0?0:he(g/R[f-b-1]%10);}if(h=h||c<0||v[x+1]!=null||(b<0?g:g%R[f-b-1]),h=p<4?(w||h)&&(p==0||p==(l.s<0?3:2)):w>5||w==5&&(p==4||h||p==6&&(y>0?b>0?g/R[f-b]:0:v[x-1])%10&1||p==(l.s<0?8:7)),c<1||!v[0])return v.length=0,h?(c-=l.e+1,v[0]=R[(N-c%N)%N],l.e=-c||0):v[0]=l.e=0,l;if(y==0?(v.length=x,d=1,x--):(v.length=x+1,d=R[N-y],v[x]=b>0?he(g/R[f-b]%R[b])*d:0),h)for(;;)if(x==0){for(y=1,b=v[0];b>=10;b/=10,y++);for(b=v[0]+=d,d=1;b>=10;b/=10,d++);y!=d&&(l.e++,v[0]==Re&&(v[0]=1));break}else {if(v[x]+=d,v[x]!=Re)break;v[x--]=0,d=1;}for(y=v.length;v[--y]===0;v.pop());}l.e>T?l.c=l.e=null:l.e<P&&(l.c=[l.e=0]);}return l}function be(l){var c,p=l.e;return p===null?l.toString():(c=ye(l.c),c=p<=u||p>=m?tn(c,p):Le(c,p,"0"),l.s<0?"-"+c:c)}return i.absoluteValue=i.abs=function(){var l=new E(this);return l.s<0&&(l.s=1),l},i.comparedTo=function(l,c){return Xe(this,new E(l,c))},i.decimalPlaces=i.dp=function(l,c){var p,h,f,y=this;if(l!=null)return J(l,0,Y),c==null?c=a:J(c,0,8),ie(new E(y),l+y.e+1,c);if(!(p=y.c))return null;if(h=((f=p.length-1)-we(this.e/N))*N,f=p[f])for(;f%10==0;f/=10,h--);return h<0&&(h=0),h},i.dividedBy=i.div=function(l,c){return t(this,new E(l,c),s,a)},i.dividedToIntegerBy=i.idiv=function(l,c){return t(this,new E(l,c),0,1)},i.exponentiatedBy=i.pow=function(l,c){var p,h,f,y,b,d,g,x,w,v=this;if(l=new E(l),l.c&&!l.isInteger())throw Error(le+"Exponent not an integer: "+be(l));if(c!=null&&(c=new E(c)),d=l.e>14,!v.c||!v.c[0]||v.c[0]==1&&!v.e&&v.c.length==1||!l.c||!l.c[0])return w=new E(Math.pow(+be(v),d?l.s*(2-en(l)):+be(l))),c?w.mod(c):w;if(g=l.s<0,c){if(c.c?!c.c[0]:!c.s)return new E(NaN);h=!g&&v.isInteger()&&c.isInteger(),h&&(v=v.mod(c));}else {if(l.e>9&&(v.e>0||v.e<-1||(v.e==0?v.c[0]>1||d&&v.c[1]>=24e7:v.c[0]<8e13||d&&v.c[0]<=9999975e7)))return y=v.s<0&&en(l)?-0:0,v.e>-1&&(y=1/y),new E(g?1/y:y);A&&(y=di(A/N+2));}for(d?(p=new E(.5),g&&(l.s=1),x=en(l)):(f=Math.abs(+be(l)),x=f%2),w=new E(o);;){if(x){if(w=w.times(v),!w.c)break;y?w.c.length>y&&(w.c.length=y):h&&(w=w.mod(c));}if(f){if(f=he(f/2),f===0)break;x=f%2;}else if(l=l.times(p),ie(l,l.e+1,1),l.e>14)x=en(l);else {if(f=+be(l),f===0)break;x=f%2;}v=v.times(v),y?v.c&&v.c.length>y&&(v.c.length=y):h&&(v=v.mod(c));}return h?w:(g&&(w=o.div(w)),c?w.mod(c):y?ie(w,A,a,b):w)},i.integerValue=function(l){var c=new E(this);return l==null?l=a:J(l,0,8),ie(c,c.e+1,l)},i.isEqualTo=i.eq=function(l,c){return Xe(this,new E(l,c))===0},i.isFinite=function(){return !!this.c},i.isGreaterThan=i.gt=function(l,c){return Xe(this,new E(l,c))>0},i.isGreaterThanOrEqualTo=i.gte=function(l,c){return (c=Xe(this,new E(l,c)))===1||c===0},i.isInteger=function(){return !!this.c&&we(this.e/N)>this.c.length-2},i.isLessThan=i.lt=function(l,c){return Xe(this,new E(l,c))<0},i.isLessThanOrEqualTo=i.lte=function(l,c){return (c=Xe(this,new E(l,c)))===-1||c===0},i.isNaN=function(){return !this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return !!this.c&&this.c[0]==0},i.minus=function(l,c){var p,h,f,y,b=this,d=b.s;if(l=new E(l,c),c=l.s,!d||!c)return new E(NaN);if(d!=c)return l.s=-c,b.plus(l);var g=b.e/N,x=l.e/N,w=b.c,v=l.c;if(!g||!x){if(!w||!v)return w?(l.s=-c,l):new E(v?b:NaN);if(!w[0]||!v[0])return v[0]?(l.s=-c,l):new E(w[0]?b:a==3?-0:0)}if(g=we(g),x=we(x),w=w.slice(),d=g-x){for((y=d<0)?(d=-d,f=w):(x=g,f=v),f.reverse(),c=d;c--;f.push(0));f.reverse();}else for(h=(y=(d=w.length)<(c=v.length))?d:c,d=c=0;c<h;c++)if(w[c]!=v[c]){y=w[c]<v[c];break}if(y&&(f=w,w=v,v=f,l.s=-l.s),c=(h=v.length)-(p=w.length),c>0)for(;c--;w[p++]=0);for(c=Re-1;h>d;){if(w[--h]<v[h]){for(p=h;p&&!w[--p];w[p]=c);--w[p],w[h]+=Re;}w[h]-=v[h];}for(;w[0]==0;w.splice(0,1),--x);return w[0]?ce(l,w,x):(l.s=a==3?-1:1,l.c=[l.e=0],l)},i.modulo=i.mod=function(l,c){var p,h,f=this;return l=new E(l,c),!f.c||!l.s||l.c&&!l.c[0]?new E(NaN):!l.c||f.c&&!f.c[0]?new E(f):(I==9?(h=l.s,l.s=1,p=t(f,l,0,3),l.s=h,p.s*=h):p=t(f,l,0,I),l=f.minus(p.times(l)),!l.c[0]&&I==1&&(l.s=f.s),l)},i.multipliedBy=i.times=function(l,c){var p,h,f,y,b,d,g,x,w,v,R,C,$,G,W,F=this,U=F.c,oe=(l=new E(l,c)).c;if(!U||!oe||!U[0]||!oe[0])return !F.s||!l.s||U&&!U[0]&&!oe||oe&&!oe[0]&&!U?l.c=l.e=l.s=null:(l.s*=F.s,!U||!oe?l.c=l.e=null:(l.c=[0],l.e=0)),l;for(h=we(F.e/N)+we(l.e/N),l.s*=F.s,g=U.length,v=oe.length,g<v&&($=U,U=oe,oe=$,f=g,g=v,v=f),f=g+v,$=[];f--;$.push(0));for(G=Re,W=Qe,f=v;--f>=0;){for(p=0,R=oe[f]%W,C=oe[f]/W|0,b=g,y=f+b;y>f;)x=U[--b]%W,w=U[b]/W|0,d=C*x+w*R,x=R*x+d%W*W+$[y]+p,p=(x/G|0)+(d/W|0)+C*w,$[y--]=x%G;$[y]=p;}return p?++h:$.splice(0,1),ce(l,$,h)},i.negated=function(){var l=new E(this);return l.s=-l.s||null,l},i.plus=function(l,c){var p,h=this,f=h.s;if(l=new E(l,c),c=l.s,!f||!c)return new E(NaN);if(f!=c)return l.s=-c,h.minus(l);var y=h.e/N,b=l.e/N,d=h.c,g=l.c;if(!y||!b){if(!d||!g)return new E(f/0);if(!d[0]||!g[0])return g[0]?l:new E(d[0]?h:f*0)}if(y=we(y),b=we(b),d=d.slice(),f=y-b){for(f>0?(b=y,p=g):(f=-f,p=d),p.reverse();f--;p.push(0));p.reverse();}for(f=d.length,c=g.length,f-c<0&&(p=g,g=d,d=p,c=f),f=0;c;)f=(d[--c]=d[c]+g[c]+f)/Re|0,d[c]=Re===d[c]?0:d[c]%Re;return f&&(d=[f].concat(d),++b),ce(l,d,b)},i.precision=i.sd=function(l,c){var p,h,f,y=this;if(l!=null&&l!==!!l)return J(l,1,Y),c==null?c=a:J(c,0,8),ie(new E(y),l,c);if(!(p=y.c))return null;if(f=p.length-1,h=f*N+1,f=p[f]){for(;f%10==0;f/=10,h--);for(f=p[0];f>=10;f/=10,h++);}return l&&y.e+1>h&&(h=y.e+1),h},i.shiftedBy=function(l){return J(l,-mi,mi),this.times("1e"+l)},i.squareRoot=i.sqrt=function(){var l,c,p,h,f,y=this,b=y.c,d=y.s,g=y.e,x=s+4,w=new E("0.5");if(d!==1||!b||!b[0])return new E(!d||d<0&&(!b||b[0])?NaN:b?y:1/0);if(d=Math.sqrt(+be(y)),d==0||d==1/0?(c=ye(b),(c.length+g)%2==0&&(c+="0"),d=Math.sqrt(+c),g=we((g+1)/2)-(g<0||g%2),d==1/0?c="5e"+g:(c=d.toExponential(),c=c.slice(0,c.indexOf("e")+1)+g),p=new E(c)):p=new E(d+""),p.c[0]){for(g=p.e,d=g+x,d<3&&(d=0);;)if(f=p,p=w.times(f.plus(t(y,f,x,1))),ye(f.c).slice(0,d)===(c=ye(p.c)).slice(0,d))if(p.e<g&&--d,c=c.slice(d-3,d+1),c=="9999"||!h&&c=="4999"){if(!h&&(ie(f,f.e+s+2,0),f.times(f).eq(y))){p=f;break}x+=4,d+=4,h=1;}else {(!+c||!+c.slice(1)&&c.charAt(0)=="5")&&(ie(p,p.e+s+2,1),l=!p.times(p).eq(y));break}}return ie(p,p.e+s+1,a,l)},i.toExponential=function(l,c){return l!=null&&(J(l,0,Y),l++),D(this,l,c,1)},i.toFixed=function(l,c){return l!=null&&(J(l,0,Y),l=l+this.e+1),D(this,l,c)},i.toFormat=function(l,c,p){var h,f=this;if(p==null)l!=null&&c&&typeof c=="object"?(p=c,c=null):l&&typeof l=="object"?(p=l,l=c=null):p=M;else if(typeof p!="object")throw Error(le+"Argument not an object: "+p);if(h=f.toFixed(l,c),f.c){var y,b=h.split("."),d=+p.groupSize,g=+p.secondaryGroupSize,x=p.groupSeparator||"",w=b[0],v=b[1],R=f.s<0,C=R?w.slice(1):w,$=C.length;if(g&&(y=d,d=g,g=y,$-=y),d>0&&$>0){for(y=$%d||d,w=C.substr(0,y);y<$;y+=d)w+=x+C.substr(y,d);g>0&&(w+=x+C.slice(y)),R&&(w="-"+w);}h=v?w+(p.decimalSeparator||"")+((g=+p.fractionGroupSize)?v.replace(new RegExp("\\d{"+g+"}\\B","g"),"$&"+(p.fractionGroupSeparator||"")):v):w;}return (p.prefix||"")+h+(p.suffix||"")},i.toFraction=function(l){var c,p,h,f,y,b,d,g,x,w,v,R,C=this,$=C.c;if(l!=null&&(d=new E(l),!d.isInteger()&&(d.c||d.s!==1)||d.lt(o)))throw Error(le+"Argument "+(d.isInteger()?"out of range: ":"not an integer: ")+be(d));if(!$)return new E(C);for(c=new E(o),x=p=new E(o),h=g=new E(o),R=ye($),y=c.e=R.length-C.e-1,c.c[0]=fi[(b=y%N)<0?N+b:b],l=!l||d.comparedTo(c)>0?y>0?c:x:d,b=T,T=1/0,d=new E(R),g.c[0]=0;w=t(d,c,0,1),f=p.plus(w.times(h)),f.comparedTo(l)!=1;)p=h,h=f,x=g.plus(w.times(f=x)),g=f,c=d.minus(w.times(f=c)),d=f;return f=t(l.minus(p),h,0,1),g=g.plus(f.times(x)),p=p.plus(f.times(h)),g.s=x.s=C.s,y=y*2,v=t(x,h,y,a).minus(C).abs().comparedTo(t(g,p,y,a).minus(C).abs())<1?[x,h]:[g,p],T=b,v},i.toNumber=function(){return +be(this)},i.toPrecision=function(l,c){return l!=null&&J(l,1,Y),D(this,l,c,2)},i.toString=function(l){var c,p=this,h=p.s,f=p.e;return f===null?h?(c="Infinity",h<0&&(c="-"+c)):c="NaN":(l==null?c=f<=u||f>=m?tn(ye(p.c),f):Le(ye(p.c),f,"0"):l===10&&q?(p=ie(new E(p),s+f+1,a),c=Le(ye(p.c),p.e,"0")):(J(l,2,L.length,"Base"),c=r(Le(ye(p.c),f,"0"),10,l,h,true)),h<0&&p.c[0]&&(c="-"+c)),c},i.valueOf=i.toJSON=function(){return be(this)},i._isBigNumber=true,i[Symbol.toStringTag]="BigNumber",i[Symbol.for("nodejs.util.inspect.custom")]=i.valueOf,e!=null&&E.set(e),E}function we(e){var t=e|0;return e>0||e===t?t:t-1}function ye(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(t=e[n++]+"",r=N-t.length;r--;t="0"+t);o+=t;}for(i=o.length;o.charCodeAt(--i)===48;);return o.slice(0,i+1||1)}function Xe(e,t){var r,n,i=e.c,o=t.c,s=e.s,a=t.s,u=e.e,m=t.e;if(!s||!a)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-a:s;if(s!=a)return s;if(r=s<0,n=u==m,!i||!o)return n?0:!i^r?1:-1;if(!n)return u>m^r?1:-1;for(a=(u=i.length)<(m=o.length)?u:m,s=0;s<a;s++)if(i[s]!=o[s])return i[s]>o[s]^r?1:-1;return u==m?0:u>m^r?1:-1}function J(e,t,r,n){if(e<t||e>r||e!==he(e))throw Error(le+(n||"Argument")+(typeof e=="number"?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function en(e){var t=e.c.length-1;return we(e.e/N)==t&&e.c[t]%2!=0}function tn(e,t){return (e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function Le(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e;}else if(n=e.length,++t>n){for(i=r,t-=n;--t;i+=r);e+=i;}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}var id=Ta(),va=id;var od=24,or=32,sd=()=>typeof globalThis<"u"&&globalThis.crypto&&typeof globalThis.crypto.getRandomValues=="function"?()=>{let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]/4294967296}:Math.random,yi=sd(),gi=(e=4,t=yi)=>{let r="";for(;r.length<e;)r=r+Math.floor(t()*36).toString(36);return r};function ad(e){let t=new va(0);for(let r of e.values())t=t.multipliedBy(256).plus(r);return t}var Aa=(e="")=>{let t=new TextEncoder;return ad(Pa(t.encode(e))).toString(36).slice(1)},Sa=Array.from({length:26},(e,t)=>String.fromCharCode(t+97)),ld=e=>Sa[Math.floor(e()*Sa.length)],ud=({globalObj:e=typeof commonjsGlobal<"u"?commonjsGlobal:{},random:t=yi}={})=>{let r=Object.keys(e).toString(),n=r.length?r+gi(or,t):gi(or,t);return Aa(n).substring(0,or)},cd=e=>()=>e++,pd=476782367,Ra=({random:e=yi,counter:t=cd(Math.floor(e()*pd)),length:r=od,fingerprint:n=ud({random:e})}={})=>{if(r>or)throw new Error(`Length must be between 2 and ${or}. Received: ${r}`);return function(){let o=ld(e),s=Date.now().toString(36),a=t().toString(36),u=gi(r,e),m=`${s+u+a+n}`;return `${o+Aa(m).substring(1,r)}`}},hi=dd(Ra);function dd(e){let t;return ()=>(t||(t=e()),t())}var wi=require$$6;var Ca="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var md=128,Je,At;function fd(e){if(e<0)throw new RangeError("Wrong ID size");try{!Je||Je.length<e?(Je=Buffer.allocUnsafe(e*md),wi.webcrypto.getRandomValues(Je),At=0):At+e>Je.length&&(wi.webcrypto.getRandomValues(Je),At=0);}catch(t){throw Je=void 0,t}At+=e;}function xi(e=21){fd(e|=0);let t="";for(let r=At-e;r<At;r++)t+=Ca[Je[r]&63];return t}var sr=Pe(require$$6,1);var ka="0123456789ABCDEFGHJKMNPQRSTVWXYZ",ar=32;var gd=16,Oa=10,Ia=0xffffffffffff;var Ye;(function(e){e.Base32IncorrectEncoding="B32_ENC_INVALID",e.DecodeTimeInvalidCharacter="DEC_TIME_CHAR",e.DecodeTimeValueMalformed="DEC_TIME_MALFORMED",e.EncodeTimeNegative="ENC_TIME_NEG",e.EncodeTimeSizeExceeded="ENC_TIME_SIZE_EXCEED",e.EncodeTimeValueMalformed="ENC_TIME_MALFORMED",e.PRNGDetectFailure="PRNG_DETECT",e.ULIDInvalid="ULID_INVALID",e.Unexpected="UNEXPECTED",e.UUIDInvalid="UUID_INVALID";})(Ye||(Ye={}));var et=class extends Error{constructor(t,r){super(`${r} (${t})`),this.name="ULIDError",this.code=t;}};function yd(e){let t=Math.floor(e()*ar);return t===ar&&(t=ar-1),ka.charAt(t)}function hd(e){let t=wd(),r=t&&(t.crypto||t.msCrypto)||(typeof sr.default<"u"?sr.default:null);if(typeof r?.getRandomValues=="function")return ()=>{let n=new Uint8Array(1);return r.getRandomValues(n),n[0]/255};if(typeof r?.randomBytes=="function")return ()=>r.randomBytes(1).readUInt8()/255;if(sr.default?.randomBytes)return ()=>sr.default.randomBytes(1).readUInt8()/255;throw new et(Ye.PRNGDetectFailure,"Failed to find a reliable PRNG")}function wd(){return Pd()?self:typeof commonjsGlobal<"u"?commonjsGlobal:typeof globalThis<"u"?globalThis:null}function xd(e,t){let r="";for(;e>0;e--)r=yd(t)+r;return r}function bd(e,t=Oa){if(isNaN(e))throw new et(Ye.EncodeTimeValueMalformed,`Time must be a number: ${e}`);if(e>Ia)throw new et(Ye.EncodeTimeSizeExceeded,`Cannot encode a time larger than ${Ia}: ${e}`);if(e<0)throw new et(Ye.EncodeTimeNegative,`Time must be positive: ${e}`);if(Number.isInteger(e)===false)throw new et(Ye.EncodeTimeValueMalformed,`Time must be an integer: ${e}`);let r,n="";for(let i=t;i>0;i--)r=e%ar,n=ka.charAt(r)+n,e=(e-r)/ar;return n}function Pd(){return typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope}function Na(e,t){let r=hd(),n=Date.now();return bd(n,Oa)+xd(gd,r)}var te=[];for(let e=0;e<256;++e)te.push((e+256).toString(16).slice(1));function rn(e,t=0){return (te[e[t+0]]+te[e[t+1]]+te[e[t+2]]+te[e[t+3]]+"-"+te[e[t+4]]+te[e[t+5]]+"-"+te[e[t+6]]+te[e[t+7]]+"-"+te[e[t+8]]+te[e[t+9]]+"-"+te[e[t+10]]+te[e[t+11]]+te[e[t+12]]+te[e[t+13]]+te[e[t+14]]+te[e[t+15]]).toLowerCase()}var Ed=new Uint8Array(16);function Rt(){return crypto.getRandomValues(Ed)}function Td(e,t,r){return !t&&!e&&crypto.randomUUID?crypto.randomUUID():vd(e,t,r)}function vd(e,t,r){e=e||{};let n=e.random??e.rng?.()??Rt();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){if(r=r||0,r<0||r+16>t.length)throw new RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let i=0;i<16;++i)t[r+i]=n[i];return t}return rn(n)}var bi=Td;var Pi={};function Sd(e,t,r){let n;if(e)n=Da(e.random??e.rng?.()??Rt(),e.msecs,e.seq,t,r);else {let i=Date.now(),o=Rt();Ad(Pi,i,o),n=Da(o,Pi.msecs,Pi.seq,t,r);}return t??rn(n)}function Ad(e,t,r){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=r[6]<<23|r[7]<<16|r[8]<<8|r[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function Da(e,t,r,n,i=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!n)n=new Uint8Array(16),i=0;else if(i<0||i+16>n.length)throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);return t??=Date.now(),r??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],n[i++]=t/1099511627776&255,n[i++]=t/4294967296&255,n[i++]=t/16777216&255,n[i++]=t/65536&255,n[i++]=t/256&255,n[i++]=t&255,n[i++]=112|r>>>28&15,n[i++]=r>>>20&255,n[i++]=128|r>>>14&63,n[i++]=r>>>6&255,n[i++]=r<<2&255|e[10]&3,n[i++]=e[11],n[i++]=e[12],n[i++]=e[13],n[i++]=e[14],n[i++]=e[15],n}var Ei=Sd;var nn=class{#e={};constructor(){this.register("uuid",new vi),this.register("cuid",new Si),this.register("ulid",new Ai),this.register("nanoid",new Ri),this.register("product",new Ci);}snapshot(){return Object.create(this.#e,{now:{value:new Ti}})}register(t,r){this.#e[t]=r;}},Ti=class{#e;generate(){return this.#e===void 0&&(this.#e=new Date),this.#e.toISOString()}},vi=class{generate(t){if(t===4)return bi();if(t===7)return Ei();throw new Error("Invalid UUID generator arguments")}},Si=class{generate(t){if(t===1)return ia();if(t===2)return hi();throw new Error("Invalid CUID generator arguments")}},Ai=class{generate(){return Na()}},Ri=class{generate(t){if(typeof t=="number")return xi(t);if(t===void 0)return xi();throw new Error("Invalid Nanoid generator arguments")}},Ci=class{generate(t,r){if(t===void 0||r===void 0)throw new Error("Invalid Product generator arguments");return Array.isArray(t)&&Array.isArray(r)?t.flatMap(n=>r.map(i=>[n,i])):Array.isArray(t)?t.map(n=>[n,r]):Array.isArray(r)?r.map(n=>[t,n]):[[t,r]]}};function lr(e,t){return e==null?e:typeof e=="string"?lr(JSON.parse(e),t):Array.isArray(e)?Cd(e,t):Rd(e,t)}function Rd(e,t){if(t.pagination){let{skip:r,take:n,cursor:i}=t.pagination;if(r!==null&&r>0||n===0||i!==null&&!St(e,i))return null}return Fa(e,t.nested)}function Fa(e,t){for(let[r,n]of Object.entries(t))e[r]=lr(e[r],n);return e}function Cd(e,t){if(t.distinct!==null){let r=t.linkingFields!==null?[...t.distinct,...t.linkingFields]:t.distinct;e=Id(e,r);}return t.pagination&&(e=kd(e,t.pagination,t.linkingFields)),t.reverse&&e.reverse(),Object.keys(t.nested).length===0?e:e.map(r=>Fa(r,t.nested))}function Id(e,t){let r=new Set,n=[];for(let i of e){let o=tt(i,t);r.has(o)||(r.add(o),n.push(i));}return n}function kd(e,t,r){if(r===null)return Ma(e,t);let n=new Map;for(let o of e){let s=tt(o,r);n.has(s)||n.set(s,[]),n.get(s).push(o);}let i=Array.from(n.entries());return i.sort(([o],[s])=>o<s?-1:o>s?1:0),i.flatMap(([,o])=>Ma(o,t))}function Ma(e,{cursor:t,skip:r,take:n}){let i=t!==null?e.findIndex(a=>St(a,t)):0;if(i===-1)return [];let o=i+(r??0),s=n!==null?o+n:e.length;return e.slice(o,s)}function tt(e,t,r){let n=t.map((i,o)=>r?.[o]?e[i]!==null?r[o](e[i]):null:e[i]);return JSON.stringify(n)}function Ii(e){return typeof e=="object"&&e!==null&&e.prisma__type==="param"}function ki(e){return typeof e=="object"&&e!==null&&e.prisma__type==="generatorCall"}function Di(e,t,r,n){let i=e.args.map(o=>de(o,t,r));switch(e.type){case "rawSql":return [Dd(e.sql,i,e.argTypes)];case "templateSql":return (e.chunkable?Fd(e.fragments,i,n):[i]).map(s=>{let a=Od(e.fragments,e.placeholderFormat,s,e.argTypes);if(n!==void 0&&a.args.length>n)throw new X("The query parameter limit supported by your database is exceeded.","P2029");return a});default:V(e.type,"Invalid query type");}}function de(e,t,r){for(;Md(e);)if(Ii(e)){let n=t[e.prisma__value.name];if(n===void 0)throw new Error(`Missing value for query variable ${e.prisma__value.name}`);e.prisma__value.type==="DateTime"&&typeof n=="string"?e=new Date(n):e=n;}else if(ki(e)){let{name:n,args:i}=e.prisma__value,o=r[n];if(!o)throw new Error(`Encountered an unknown generator '${n}'`);e=o.generate(...i.map(s=>de(s,t,r)));}else V(e,`Unexpected unevaluated value type: ${e}`);return Array.isArray(e)&&(e=e.map(n=>de(n,t,r))),e}function Od(e,t,r,n){let i="",o={placeholderNumber:1},s=[],a=[];for(let u of Ni(e,r,n)){if(i+=Nd(u,t,o),u.type==="stringChunk")continue;let m=Array.from(_a$1(u)),P=m.length;if(Gr(s,m),u.argType.arity==="tuple"){if(P%u.argType.elements.length!==0)throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${P} parameters for a tuple of arity ${u.argType.elements.length}.`);for(let T=0;T<P/u.argType.elements.length;T++)a.push(...u.argType.elements);}else for(let T=0;T<P;T++)a.push(u.argType);}return {sql:i,args:s,argTypes:a}}function Nd(e,t,r){let n=e.type;switch(n){case "parameter":return Oi(t,r.placeholderNumber++);case "stringChunk":return e.chunk;case "parameterTuple":return `(${e.value.length==0?"NULL":e.value.map(()=>{let o=Oi(t,r.placeholderNumber++);return `${e.itemPrefix}${o}${e.itemSuffix}`}).join(e.itemSeparator)})`;case "parameterTupleList":return e.value.map(i=>{let o=i.map(()=>Oi(t,r.placeholderNumber++)).join(e.itemSeparator);return `${e.itemPrefix}${o}${e.itemSuffix}`}).join(e.groupSeparator);default:V(n,"Invalid fragment type");}}function Oi(e,t){return e.hasNumbering?`${e.prefix}${t}`:e.prefix}function Dd(e,t,r){return {sql:e,args:t,argTypes:r}}function Md(e){return Ii(e)||ki(e)}function*Ni(e,t,r){let n=0;for(let i of e)switch(i.type){case "parameter":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);yield {...i,value:t[n],argType:r?.[n]},n++;break}case "stringChunk":{yield i;break}case "parameterTuple":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);let o=t[n];yield {...i,value:Array.isArray(o)?o:[o],argType:r?.[n]},n++;break}case "parameterTupleList":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);let o=t[n];if(!Array.isArray(o))throw new Error("Malformed query template. Tuple list expected.");if(o.length===0)throw new Error("Malformed query template. Tuple list cannot be empty.");for(let s of o)if(!Array.isArray(s))throw new Error("Malformed query template. Tuple expected.");yield {...i,value:o,argType:r?.[n]},n++;break}}}function*_a$1(e){switch(e.type){case "parameter":yield e.value;break;case "stringChunk":break;case "parameterTuple":yield*e.value;break;case "parameterTupleList":for(let t of e.value)yield*t;break}}function Fd(e,t,r){let n=0,i=0;for(let s of Ni(e,t,void 0)){let a=0;for(let u of _a$1(s))a++;i=Math.max(i,a),n+=a;}let o=[[]];for(let s of Ni(e,t,void 0))switch(s.type){case "parameter":{for(let a of o)a.push(s.value);break}case "stringChunk":break;case "parameterTuple":{let a=s.value.length,u=[];if(r&&o.length===1&&a===i&&n>r&&n-a<r){let m=r-(n-a);u=_d(s.value,m);}else u=[s.value];o=o.flatMap(m=>u.map(P=>[...m,P]));break}case "parameterTupleList":{let a=s.value.reduce((T,S)=>T+S.length,0),u=[],m=[],P=0;for(let T of s.value)r&&o.length===1&&a===i&&m.length>0&&n-a+P+T.length>r&&(u.push(m),m=[],P=0),m.push(T),P+=T.length;m.length>0&&u.push(m),o=o.flatMap(T=>u.map(S=>[...T,S]));break}}return o}function _d(e,t){let r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r}function $a(e){return e.rows.map(t=>t.reduce((r,n,i)=>(r[e.columnNames[i]]=n,r),{}))}function La(e){return {columns:e.columnNames,types:e.columnTypes.map(t=>$d(t)),rows:e.rows.map(t=>t.map((r,n)=>ur(r,e.columnTypes[n])))}}function ur(e,t){if(e===null)return null;switch(t){case k.Int32:switch(typeof e){case "number":return Math.trunc(e);case "string":return Math.trunc(Number(e));default:throw new Error(`Cannot serialize value of type ${typeof e} as Int32`)}case k.Int32Array:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);return e.map(r=>ur(r,k.Int32));case k.Int64:switch(typeof e){case "number":return BigInt(Math.trunc(e));case "string":return e;default:throw new Error(`Cannot serialize value of type ${typeof e} as Int64`)}case k.Int64Array:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);return e.map(r=>ur(r,k.Int64));case k.Json:switch(typeof e){case "string":return JSON.parse(e);default:throw new Error(`Cannot serialize value of type ${typeof e} as Json`)}case k.JsonArray:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);return e.map(r=>ur(r,k.Json));case k.Boolean:switch(typeof e){case "boolean":return e;case "string":return e==="true"||e==="1";case "number":return e===1;default:throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`)}case k.BooleanArray:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);return e.map(r=>ur(r,k.Boolean));default:return e}}function $d(e){switch(e){case k.Int32:return "int";case k.Int64:return "bigint";case k.Float:return "float";case k.Double:return "double";case k.Text:return "string";case k.Enum:return "enum";case k.Bytes:return "bytes";case k.Boolean:return "bool";case k.Character:return "char";case k.Numeric:return "decimal";case k.Json:return "json";case k.Uuid:return "uuid";case k.DateTime:return "datetime";case k.Date:return "date";case k.Time:return "time";case k.Int32Array:return "int-array";case k.Int64Array:return "bigint-array";case k.FloatArray:return "float-array";case k.DoubleArray:return "double-array";case k.TextArray:return "string-array";case k.EnumArray:return "string-array";case k.BytesArray:return "bytes-array";case k.BooleanArray:return "bool-array";case k.CharacterArray:return "char-array";case k.NumericArray:return "decimal-array";case k.JsonArray:return "json-array";case k.UuidArray:return "uuid-array";case k.DateTimeArray:return "datetime-array";case k.DateArray:return "date-array";case k.TimeArray:return "time-array";case k.UnknownNumber:return "unknown";case k.Set:return "string";default:V(e,`Unexpected column type: ${e}`);}}function Mi(e,t,r){if(!t.every(n=>on(e,n))){let n=Ld(e,r),i=Vd(r);throw new X(n,i,r.context)}}function on(e,t){switch(t.type){case "rowCountEq":return Array.isArray(e)?e.length===t.args:e===null?t.args===0:t.args===1;case "rowCountNeq":return Array.isArray(e)?e.length!==t.args:e===null?t.args!==0:t.args!==1;case "affectedRowCountEq":return e===t.args;case "never":return  false;default:V(t,`Unknown rule type: ${t.type}`);}}function Ld(e,t){switch(t.errorIdentifier){case "RELATION_VIOLATION":return `The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;case "MISSING_RECORD":return `An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;case "MISSING_RELATED_RECORD":{let r=t.context.neededFor?` (needed to ${t.context.neededFor})`:"";return `An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`}case "INCOMPLETE_CONNECT_INPUT":return `An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e)?e.length:e}.`;case "INCOMPLETE_CONNECT_OUTPUT":return `The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e)?e.length:e}.`;case "RECORDS_NOT_CONNECTED":return `The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;default:V(t,`Unknown error identifier: ${t}`);}}function Vd(e){switch(e.errorIdentifier){case "RELATION_VIOLATION":return "P2014";case "RECORDS_NOT_CONNECTED":return "P2017";case "INCOMPLETE_CONNECT_OUTPUT":return "P2018";case "MISSING_RECORD":case "MISSING_RELATED_RECORD":case "INCOMPLETE_CONNECT_INPUT":return "P2025";default:V(e,`Unknown error identifier: ${e}`);}}var qd=K("prisma:client:queryInterpreter"),dr=class e{#e;#t=new nn;#r;#i;#o;#s;#a;constructor({onQuery:t,tracingHelper:r,serializer:n,rawSerializer:i,provider:o,connectionInfo:s}){this.#e=t,this.#r=r,this.#i=n,this.#o=i??n,this.#s=o,this.#a=s;}static forSql(t){return new e({onQuery:t.onQuery,tracingHelper:t.tracingHelper,serializer:$a,rawSerializer:La,provider:t.provider,connectionInfo:t.connectionInfo})}async run(t,r){let n=this.#t.snapshot(),i={...r,generators:n},o=jd(t,a=>this.interpretNode(a,i))?.catch(a=>Be(a));if(o)try{return this.#n(await o,i.scope,n).value}catch(a){Be(a);}let{value:s}=await this.interpretNode(t,i).catch(a=>Be(a));return s}async interpretNode(t,r){switch(t.type){case "value":return {value:de(t.args,r.scope,r.generators),lastInsertId:t.lastInsertId};case "seq":{let n;for(let i of t.args)n=await this.interpretNode(i,r);return n??{value:void 0}}case "let":{let n=Object.create(r.scope);for(let i of t.args.bindings){let{value:o}=await this.interpretNode(i.expr,{...r,scope:n});n[i.name]=o;}return this.interpretNode(t.args.expr,{...r,scope:n})}case "concat":{let n=await Promise.all(t.args.map(i=>this.interpretNode(i,r).then(o=>o.value)));return {value:n.length>0?n.reduce((i,o)=>i.concat(Ct(o)),[]):[]}}case "sum":{let n=await Promise.all(t.args.map(i=>this.interpretNode(i,r).then(o=>o.value)));return {value:n.length>0?n.reduce((i,o)=>xe(i)+xe(o)):0}}case "execute":{let n=Di(t.args,r.scope,r.generators,this.#p());return this.#u(n.length,r,async i=>{let o=0;for(let s of n){let a=ja(s,i.sqlCommenter);o+=await this.#d(a,i.queryable,()=>i.queryable.executeRaw(sn(a)).catch(u=>t.args.type==="rawSql"?ri(u):Be(u)));}return {value:o}})}case "query":{let n=Di(t.args,r.scope,r.generators,this.#p());return this.#u(n.length,r,async i=>{let o;for(let s of n){let a=ja(s,i.sqlCommenter),u=await this.#d(a,i.queryable,()=>i.queryable.queryRaw(sn(a)).catch(m=>t.args.type==="rawSql"?ri(m):Be(m)));o===void 0?o=u:(Gr(o.rows,u.rows),o.lastInsertId=u.lastInsertId);}return {value:t.args.type==="rawSql"?this.#o(o):this.#i(o),lastInsertId:o?.lastInsertId}})}case "reverse":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);return {value:Array.isArray(n)?n.reverse():n,lastInsertId:i}}case "unique":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);if(!Array.isArray(n))return {value:n,lastInsertId:i};if(n.length>1)throw new Error(`Expected zero or one element, got ${n.length}`);return {value:n[0]??null,lastInsertId:i}}case "required":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);if(Fi(n))throw new Error("Required value is empty");return {value:n,lastInsertId:i}}case "mapField":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.records,r);return {value:_i(n,t.args.field),lastInsertId:i}}case "join":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.parent,r);if(n===null)return {value:null,lastInsertId:i};let o=await Promise.all(t.args.children.map(async s=>({joinExpr:s,childRecords:(await this.interpretNode(s.child,r)).value})));return {value:Va(n,o,t.args.canAssumeStrictEquality),lastInsertId:i}}case "transaction":return this.#l(r,n=>this.interpretNode(t.args,n));case "dataMap":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r);return {value:ii(n,t.args.structure,t.args.enums),lastInsertId:i}}case "validate":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r);return Mi(n,t.args.rules,t.args),{value:n,lastInsertId:i}}case "if":{let{value:n}=await this.interpretNode(t.args.value,r);return on(n,t.args.rule)?await this.interpretNode(t.args.then,r):await this.interpretNode(t.args.else,r)}case "diff":{let{value:n}=await this.interpretNode(t.args.from,r),{value:i}=await this.interpretNode(t.args.to,r),o=a=>a!==null?tt(rt(a),t.args.fields):null,s=new Set(Ct(i).map(o));return {value:Ct(n).filter(a=>!s.has(o(a)))}}case "process":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r),o=sn(t.args.operations);return $i(o,r.scope,r.generators),{value:lr(n,o),lastInsertId:i}}case "initializeRecord":{let{lastInsertId:n}=await this.interpretNode(t.args.expr,r),i={};for(let[o,s]of Object.entries(t.args.fields))i[o]=qa(s,n,r.scope,r.generators);return {value:i,lastInsertId:n}}case "mapRecord":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r),o=n===null?{}:rt(n);for(let[s,a]of Object.entries(t.args.fields))o[s]=Ua(a,o[s],r.scope,r.generators);return {value:o,lastInsertId:i}}default:return this.#n(t,r.scope,r.generators)}}#n(t,r,n){switch(t.type){case "value":return {value:de(t.args,r,n),lastInsertId:t.lastInsertId};case "seq":{let i;for(let o of t.args)i=this.#n(o,r,n);return i??{value:void 0}}case "get":return {value:r[t.args.name]};case "let":{let i=Object.create(r);for(let o of t.args.bindings){let{value:s}=this.#n(o.expr,i,n);i[o.name]=s;}return this.#n(t.args.expr,i,n)}case "getFirstNonEmpty":{for(let i of t.args.names){let o=r[i];if(!Fi(o))return {value:o}}return {value:[]}}case "concat":{let i=t.args.map(o=>this.#n(o,r,n).value);return {value:i.length>0?i.reduce((o,s)=>o.concat(Ct(s)),[]):[]}}case "sum":{let i=t.args.map(o=>this.#n(o,r,n).value);return {value:i.length>0?i.reduce((o,s)=>xe(o)+xe(s)):0}}case "reverse":{let{value:i,lastInsertId:o}=this.#n(t.args,r,n);return {value:Array.isArray(i)?i.reverse():i,lastInsertId:o}}case "unique":{let{value:i,lastInsertId:o}=this.#n(t.args,r,n);if(!Array.isArray(i))return {value:i,lastInsertId:o};if(i.length>1)throw new Error(`Expected zero or one element, got ${i.length}`);return {value:i[0]??null,lastInsertId:o}}case "required":{let{value:i,lastInsertId:o}=this.#n(t.args,r,n);if(Fi(i))throw new Error("Required value is empty");return {value:i,lastInsertId:o}}case "mapField":{let{value:i,lastInsertId:o}=this.#n(t.args.records,r,n);return {value:_i(i,t.args.field),lastInsertId:o}}case "join":{let{value:i,lastInsertId:o}=this.#n(t.args.parent,r,n);if(i===null)return {value:null,lastInsertId:o};let s=t.args.children.map(a=>({joinExpr:a,childRecords:this.#n(a.child,r,n).value}));return {value:Va(i,s,t.args.canAssumeStrictEquality),lastInsertId:o}}case "dataMap":{let{value:i,lastInsertId:o}=this.#n(t.args.expr,r,n);return {value:ii(i,t.args.structure,t.args.enums),lastInsertId:o}}case "validate":{let{value:i,lastInsertId:o}=this.#n(t.args.expr,r,n);return Mi(i,t.args.rules,t.args),{value:i,lastInsertId:o}}case "if":{let{value:i}=this.#n(t.args.value,r,n);return on(i,t.args.rule)?this.#n(t.args.then,r,n):this.#n(t.args.else,r,n)}case "unit":return {value:void 0};case "diff":{let{value:i}=this.#n(t.args.from,r,n),{value:o}=this.#n(t.args.to,r,n),s=u=>u!==null?tt(rt(u),t.args.fields):null,a=new Set(Ct(o).map(s));return {value:Ct(i).filter(u=>!a.has(s(u)))}}case "process":{let{value:i,lastInsertId:o}=this.#n(t.args.expr,r,n),s=sn(t.args.operations);return $i(s,r,n),{value:lr(i,s),lastInsertId:o}}case "initializeRecord":{let{lastInsertId:i}=this.#n(t.args.expr,r,n),o={};for(let[s,a]of Object.entries(t.args.fields))o[s]=qa(a,i,r,n);return {value:o,lastInsertId:i}}case "mapRecord":{let{value:i,lastInsertId:o}=this.#n(t.args.expr,r,n),s=i===null?{}:rt(i);for(let[a,u]of Object.entries(t.args.fields))s[a]=Ua(u,s[a],r,n);return {value:s,lastInsertId:o}}default:V(t,`Unexpected node type: ${t.type}`);}}#u(t,r,n){return t<=1?n(r):this.#l(r,n)}async#l(t,r){if(!t.transactionManager.enabled)return r(t);let n=t.transactionManager.manager,i=await n.startInternalTransaction(),o=await n.getTransaction(i,"query");try{let s=await r({...t,queryable:o,transactionManager:{enabled:!1}});return await n.commitTransaction(i.id),s}catch(s){try{await n.rollbackTransaction(i.id);}catch(a){qd("failed to roll back an internal transaction",a);}throw s}}#p(){return this.#a?.maxBindValues!==void 0?this.#a.maxBindValues:this.#c()}#c(){if(this.#s!==void 0)switch(this.#s){case "cockroachdb":case "postgres":case "postgresql":case "prisma+postgres":return 32766;case "mysql":return 65535;case "sqlite":return 999;case "sqlserver":return 2098;case "mongodb":return;default:V(this.#s,`Unexpected provider: ${this.#s}`);}}#d(t,r,n){return Wr({query:t,execute:n,provider:this.#s??r.provider,tracingHelper:this.#r,onQuery:this.#e})}};function Fi(e){return Array.isArray(e)?e.length===0:e==null}function Ct(e){return Array.isArray(e)?e:[e]}function xe(e){if(typeof e=="number")return e;if(typeof e=="string")return Number(e);throw new Error(`Expected number, got ${typeof e}`)}function rt(e){if(typeof e=="object"&&e!==null)return e;throw new Error(`Expected object, got ${typeof e}`)}function _i(e,t){return Array.isArray(e)?e.map(r=>_i(r,t)):typeof e=="object"&&e!==null?e[t]??null:e}function Va(e,t,r){for(let{joinExpr:n,childRecords:i}of t){let o=n.on.map(([P])=>P),s=n.on.map(([,P])=>P),a={},u=Array.isArray(e)?e:[e];for(let P of u){let T=rt(P),S=tt(T,o);a[S]||(a[S]=[]),a[S].push(T),n.isRelationUnique?T[n.parentField]=null:T[n.parentField]=[];}let m=r?void 0:Ud(u,o);for(let P of Array.isArray(i)?i:[i]){if(P===null)continue;let T=tt(rt(P),s,m);for(let S of a[T]??[])n.isRelationUnique?S[n.parentField]=P:S[n.parentField].push(P);}}return e}function Ud(e,t){function r(o){switch(o){case "number":return Number;case "string":return String;case "boolean":return Boolean;case "bigint":return BigInt;default:return}}let n=Array.from({length:t.length}),i=0;for(let o of e){let s=rt(o);for(let[a,u]of t.entries())if(s[u]!==null&&n[a]===void 0){let m=r(typeof s[u]);m!==void 0&&(n[a]=m),i++;}if(i===t.length)break}return n}function qa(e,t,r,n){switch(e.type){case "value":return de(e.value,r,n);case "lastInsertId":return t;default:V(e,`Unexpected field initializer type: ${e.type}`);}}function Ua(e,t,r,n){switch(e.type){case "set":return de(e.value,r,n);case "add":return xe(t)+xe(de(e.value,r,n));case "subtract":return xe(t)-xe(de(e.value,r,n));case "multiply":return xe(t)*xe(de(e.value,r,n));case "divide":{let i=xe(t),o=xe(de(e.value,r,n));return o===0?null:i/o}default:V(e,`Unexpected field operation type: ${e.type}`);}}function jd(e,t){let r=pr(e);if(r)return t(r).then(n=>{let i={type:"value",args:n.value,lastInsertId:n.lastInsertId},o=cr(e,r,i);if(!o)throw new Error("Could not substitute the evaluated impure node into the query plan");return o})}function cr(e,t,r){if(e===t)return r;switch(e.type){case "seq":case "sum":case "concat":{for(let n=0;n<e.args.length;n++){let i=cr(e.args[n],t,r);if(i)return {...e,args:e.args.map((o,s)=>s===n?i:o)}}return}case "dataMap":case "validate":case "initializeRecord":case "mapRecord":case "process":{let n=cr(e.args.expr,t,r);return n&&{...e,args:{...e.args,expr:n}}}case "mapField":{let n=cr(e.args.records,t,r);return n&&{...e,args:{...e.args,records:n}}}case "reverse":case "unique":case "required":{let n=cr(e.args,t,r);return n&&{...e,args:n}}default:return}}function pr(e){switch(e.type){case "query":case "execute":return e;case "seq":case "sum":case "concat":{let t;for(let r of e.args){let n=pr(r);if(n===null)return null;if(n){if(t)return null;t=n;}}return t}case "dataMap":case "validate":case "initializeRecord":case "mapRecord":case "process":return pr(e.args.expr);case "mapField":return pr(e.args.records);case "reverse":case "unique":case "required":return pr(e.args);case "let":case "join":case "diff":case "if":case "transaction":return null;case "value":case "get":case "getFirstNonEmpty":case "unit":return;default:V(e,`Unexpected node type: ${e.type}`);}}function ja(e,t){if(!t||t.plugins.length===0)return e;let r=Ys(t.plugins,{query:t.queryInfo,sql:e.sql});return r?{...e,sql:ea(e.sql,r)}:e}function $i(e,t,r){let n=e.pagination?.cursor;if(n)for(let[i,o]of Object.entries(n))n[i]=de(o,t,r);for(let i of Object.values(e.nested))$i(i,t,r);}function sn(e){return ge(e)}function Ba(e){return new Li(e).deserialize()}function Bd(e){return Buffer.from(e,"base64url")}var Li=class{#e;#t;#r=0;constructor(t){this.#e=t;let r=Bd(t.graph);this.#t=new DataView(r.buffer,r.byteOffset,r.byteLength);}deserialize(){let{inputNodeCount:t,outputNodeCount:r,rootCount:n}=this.#n(),i=this.#u(t),o=this.#l(r),s=this.#p(n);return {strings:this.#e.strings,inputNodes:i,outputNodes:o,roots:s}}#i(){let t=0,r=0,n;do n=this.#t.getUint8(this.#r++),t|=(n&127)<<r,r+=7;while(n>=128);return t}#o(){let t=this.#i();return t===0?void 0:t-1}#s(){let t=this.#t.getUint8(this.#r);return this.#r+=1,t}#a(){let t=this.#t.getUint16(this.#r,true);return this.#r+=2,t}#n(){let t=this.#i(),r=this.#i(),n=this.#i();return {inputNodeCount:t,outputNodeCount:r,rootCount:n}}#u(t){let r=[];for(let n=0;n<t;n++){let i=this.#i(),o={};for(let s=0;s<i;s++){let a=this.#i(),u=this.#a(),m=this.#o(),P=this.#o(),S={flags:this.#s()};u!==0&&(S.scalarMask=u),m!==void 0&&(S.childNodeId=m),P!==void 0&&(S.enumNameIndex=P),o[a]=S;}r.push({edges:o});}return r}#l(t){let r=[];for(let n=0;n<t;n++){let i=this.#i(),o={};for(let s=0;s<i;s++){let a=this.#i(),u=this.#o(),m=this.#o(),P={};u!==void 0&&(P.argsNodeId=u),m!==void 0&&(P.outputNodeId=m),o[a]=P;}r.push({edges:o});}return r}#p(t){let r={};for(let n=0;n<t;n++){let i=this.#i(),o=this.#o(),s=this.#o(),a=this.#e.strings[i],u={};o!==void 0&&(u.argsNodeId=o),s!==void 0&&(u.outputNodeId=s),r[a]=u;}return r}};var mr=class e{#e;#t;#r;constructor(t,r){this.#e=t,this.#r=r,this.#t=new Map;for(let n=0;n<t.strings.length;n++)this.#t.set(t.strings[n],n);}static deserialize(t,r){let n=Ba(t);return new e(n,r)}static fromData(t,r){return new e(t,r)}root(t){let r=this.#e.roots[t];if(r)return {argsNodeId:r.argsNodeId,outputNodeId:r.outputNodeId}}inputNode(t){if(!(t===void 0||t<0||t>=this.#e.inputNodes.length))return {id:t}}outputNode(t){if(!(t===void 0||t<0||t>=this.#e.outputNodes.length))return {id:t}}inputEdge(t,r){if(!t)return;let n=this.#e.inputNodes[t.id];if(!n)return;let i=this.#t.get(r);if(i===void 0)return;let o=n.edges[i];if(o)return {flags:o.flags,childNodeId:o.childNodeId,scalarMask:o.scalarMask??0,enumNameIndex:o.enumNameIndex}}outputEdge(t,r){if(!t)return;let n=this.#e.outputNodes[t.id];if(!n)return;let i=this.#t.get(r);if(i===void 0)return;let o=n.edges[i];if(o)return {argsNodeId:o.argsNodeId,outputNodeId:o.outputNodeId}}enumValues(t){if(t?.enumNameIndex===void 0)return;let r=this.#e.strings[t.enumNameIndex];if(r)return this.#r(r)}getString(t){return this.#e.strings[t]}},Ne={ParamScalar:1,ParamEnum:2,ParamListScalar:4,ListObject:16,Object:32},re={String:1,Int:2,BigInt:4,Float:8,Decimal:16,Boolean:32,DateTime:64,Json:128,Bytes:256};function De(e,t){return (e.flags&t)!==0}function Ge(e){return e.scalarMask}var Qd=new Set(["DateTime","Decimal","BigInt","Bytes","Json","Raw"]);function an(e){if(e==null)return {kind:"null"};if(typeof e=="string")return {kind:"primitive",value:e};if(typeof e=="number")return {kind:"primitive",value:e};if(typeof e=="boolean")return {kind:"primitive",value:e};if(Array.isArray(e))return {kind:"array",items:e};if(typeof e=="object"){let t=e;if("$type"in t&&typeof t.$type=="string"){let r=t.$type;return Qd.has(r)?{kind:"taggedScalar",tag:r,value:t.value}:{kind:"structural",value:t.value}}return {kind:"object",entries:t}}return {kind:"structural",value:e}}function Qa(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!("$type"in e)}function Ja(e){return typeof e=="object"&&e!==null&&"$type"in e&&typeof e.$type=="string"}function Vi(e,t){let r=new ln(t),n=e.modelName?`${e.modelName}.${e.action}`:e.action,i=t.root(n);return {parameterizedQuery:{...e,query:r.parameterizeFieldSelection(e.query,i?.argsNodeId,i?.outputNodeId)},placeholderValues:r.getPlaceholderValues()}}function qi(e,t){let r=new ln(t),n=[];for(let i=0;i<e.batch.length;i++){let o=e.batch[i],s=o.modelName?`${o.modelName}.${o.action}`:o.action,a=t.root(s);n.push({...o,query:r.parameterizeFieldSelection(o.query,a?.argsNodeId,a?.outputNodeId)});}return {parameterizedBatch:{...e,batch:n},placeholderValues:r.getPlaceholderValues()}}var ln=class{#e;#t=new Map;#r=new Map;#i=1;constructor(t){this.#e=t;}getPlaceholderValues(){return Object.fromEntries(this.#t)}#o(t,r){let n=Gd(t,r),i=this.#r.get(n);if(i!==void 0)return Ga(i,r);let o=`%${this.#i++}`;return this.#r.set(n,o),this.#t.set(o,t),Ga(o,r)}parameterizeFieldSelection(t,r,n){let i=this.#e.inputNode(r),o=this.#e.outputNode(n),s={...t};return t.arguments&&t.arguments.$type!=="Raw"&&(s.arguments=this.#s(t.arguments,i)),t.selection&&(s.selection=this.#c(t.selection,o)),s}#s(t,r){if(!r)return t;let n={};for(let[i,o]of Object.entries(t)){let s=this.#e.inputEdge(r,i);s?n[i]=this.#a(o,s):n[i]=o;}return n}#a(t,r){let n=an(t);switch(n.kind){case "null":return t;case "structural":return t;case "primitive":return this.#n(n.value,r);case "taggedScalar":return this.#u(t,n.tag,r);case "array":return this.#l(n.items,t,r);case "object":return this.#p(n.entries,r);default:throw new Error(`Unknown value kind ${n.kind}`)}}#n(t,r){if(De(r,Ne.ParamEnum)&&r.enumNameIndex!==void 0&&typeof t=="string"){let o=this.#e.enumValues(r);if(o&&Object.hasOwn(o,t)){let s={type:"Enum"};return this.#o(o[t],s)}}if(!De(r,Ne.ParamScalar))return t;let n=Ge(r);if(n===0)return t;let i=Ui(t);return Ha(i,n)?(n&re.Json&&(t=JSON.stringify(t)),this.#o(t,i)):t}#u(t,r,n){if(!De(n,Ne.ParamScalar))return t;let i=Ge(n);if(i===0||!Ka(r,i))return t;let o=Wa(t.$type),s=Za(t);return this.#o(s,o)}#l(t,r,n){if(De(n,Ne.ParamScalar)&&Ge(n)&re.Json){let i=Se(Ae(t)),o={type:"Json"};return this.#o(i,o)}if(De(n,Ne.ParamEnum)){let i=this.#e.enumValues(n);if(i&&t.every(o=>typeof o=="string"&&Object.hasOwn(i,o))){let o={type:"List",inner:{type:"Enum"}};return this.#o(t,o)}}if(De(n,Ne.ParamListScalar)&&t.every(o=>Zd(o,n))&&t.length>0){let o=t.map(u=>Xd(u)),a={type:"List",inner:Wd(t)};return this.#o(o,a)}if(De(n,Ne.ListObject)){let i=this.#e.inputNode(n.childNodeId);if(i)return t.map(o=>Qa(o)?this.#s(o,i):o)}return r}#p(t,r){if(De(r,Ne.Object)){let i=this.#e.inputNode(r.childNodeId);if(i)return this.#s(t,i)}if(Ge(r)&re.Json){let i=Se(Ae(t)),o={type:"Json"};return this.#o(i,o)}return t}#c(t,r){if(!t||!r)return t;let n={};for(let[i,o]of Object.entries(t)){if(i==="$scalars"||i==="$composites"||typeof o=="boolean"){n[i]=o;continue}let s=this.#e.outputEdge(r,i);if(s){let a=o,u=this.#e.inputNode(s.argsNodeId),m=this.#e.outputNode(s.outputNodeId),P={selection:a.selection?this.#c(a.selection,m):{}};a.arguments&&(P.arguments=this.#s(a.arguments,u)),n[i]=P;}else n[i]=o;}return n}};function Ga(e,t){return {$type:"Param",value:{name:e,...t}}}function za(e){return e.type==="List"?`List<${za(e.inner)}>`:e.type}function Jd(e){return ArrayBuffer.isView(e)?Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("base64"):JSON.stringify(e)}function Gd(e,t){let r=za(t),n=Jd(e);return `${r}:${n}`}var zd=2**31-1,Hd=-2147483648;function Ui(e){switch(typeof e){case "boolean":return {type:"Boolean"};case "number":return Number.isInteger(e)?Hd<=e&&e<=zd?{type:"Int"}:{type:"BigInt"}:{type:"Float"};case "string":return {type:"String"};default:throw new Error("unreachable")}}function Ha({type:e},t){switch(e){case "Boolean":return (t&re.Boolean)!==0;case "Int":return (t&(re.Int|re.BigInt|re.Float))!==0;case "BigInt":return (t&re.BigInt)!==0;case "Float":return (t&re.Float)!==0;case "String":return (t&re.String)!==0;default:return  false}}function Wa(e){switch(e){case "BigInt":case "Bytes":case "DateTime":case "Json":return {type:e};case "Decimal":return {type:"Float"};default:return}}function Wd(e){let t={type:"Any"};for(let r of e){let n=an(r),i;switch(n.kind){case "primitive":i=Ui(n.value);break;case "taggedScalar":i=Wa(n.tag)??{type:"Any"};break;default:return {type:"Any"}}t=Kd(t,i);}return t}function Kd(e,t){if(e.type==="Any")return t;if(t.type==="Any"||e.type===t.type)return e;let r={Int:0,BigInt:1,Float:2},n=r[e.type],i=r[t.type];return n!==void 0&&i!==void 0?n>=i?e:t:{type:"Any"}}function Ka(e,t){switch(e){case "DateTime":return (t&re.DateTime)!==0;case "Decimal":return (t&re.Decimal)!==0;case "BigInt":return (t&re.BigInt)!==0;case "Bytes":return (t&re.Bytes)!==0;case "Json":return (t&re.Json)!==0;default:return  false}}function Zd(e,t){let r=an(e);switch(r.kind){case "structural":return  false;case "null":return  false;case "primitive":{let n=Ui(r.value),i=Ge(t);return i!==0&&Ha(n,i)}case "taggedScalar":{let n=Ge(t);return n!==0&&Ka(r.tag,n)}default:return  false}}function Xd(e){return Ja(e)?Za(e):e}function Za(e){return e.value}async function Yd(){return globalThis.crypto??await import('node:crypto')}async function Xa(){return (await Yd()).randomUUID()}async function Ya(e,t){return new Promise(r=>{e.addEventListener(t,r,{once:true});})}var ue=class extends X{name="TransactionManagerError";constructor(t,r){super("Transaction API error: "+t,"P2028",r);}},nt=class extends ue{constructor(){super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.");}},un=class extends ue{constructor(t){super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`);}},cn=class extends ue{constructor(t){super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`);}},fr=class extends ue{constructor(){super("Unable to start a transaction in the given time.");}},pn=class extends ue{constructor(t,{timeout:r,timeTaken:n}){super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`,{operation:t,timeout:r,timeTaken:n});}},Me=class extends ue{constructor(t){super(`Internal Consistency Error: ${t}`);}},dn=class extends ue{constructor(t){super(`Invalid isolation level: ${t}`,{isolationLevel:t});}};var em=100,tm=2e3;function rm(){let e,t=new Promise(r=>{e=r;});return {abortController:new AbortController,settled:t,markSettled:e}}var it=K("prisma:client:transactionManager"),nm=()=>({sql:"COMMIT",args:[],argTypes:[]}),el=()=>({sql:"ROLLBACK",args:[],argTypes:[]}),im=()=>({sql:'-- Implicit "COMMIT" query via underlying driver',args:[],argTypes:[]}),om=()=>({sql:'-- Implicit "ROLLBACK" query via underlying driver',args:[],argTypes:[]}),gr=class{transactions=new Map;closedTransactions=[];#e=new Set;driverAdapter;transactionOptions;tracingHelper;#t;#r;constructor({driverAdapter:t,transactionOptions:r,tracingHelper:n,onQuery:i,provider:o}){this.driverAdapter=t,this.transactionOptions=r,this.tracingHelper=n,this.#t=i,this.#r=o;}async startInternalTransaction(t){let r=t!==void 0?this.#y(t):{};return await this.tracingHelper.runInChildSpan("start_transaction",()=>this.#i(r))}async startTransaction(t){let r=t!==void 0?this.#y(t):this.transactionOptions;return await this.tracingHelper.runInChildSpan("start_transaction",()=>this.#i(r))}async#i(t){if(t.newTxId)return await this.#d(t.newTxId,"start",async o=>{if(o.status!=="running")throw new Me(`Transaction in invalid state ${o.status} when starting a nested transaction.`);if(!o.transaction)throw new Me("Transaction missing underlying driver transaction when starting a nested transaction.");o.depth+=1;let s=this.#a(o);o.savepoints.push(s);try{await this.#n(o.transaction)(s);}catch(a){throw o.depth-=1,o.savepoints.pop(),a}return {id:o.id}});let r=rm(),{abortController:n}=r;this.#e.add(r);let i;try{let o={id:await Xa(),status:"waiting",timer:void 0,timeout:t.timeout,startedAt:Date.now(),transaction:void 0,operationQueue:Promise.resolve(),depth:1,savepoints:[],savepointCounter:0};if(n.signal.aborted)throw new fr;let s=tl(()=>n.abort(),t.maxWait);s?.unref?.();let a=this.driverAdapter.startTransaction(t.isolationLevel).catch(Be);switch(o.transaction=await Promise.race([a.finally(()=>clearTimeout(s)),Ya(n.signal,"abort").then(()=>{})]),this.transactions.set(o.id,o),o.status){case "waiting":if(n.signal.aborted)throw o.transaction=void 0,i=this.#o(a),await this.#f(o,"timed_out"),new fr;return o.status="running",o.startedAt=Date.now(),o.timer=this.#c(o.id,t.timeout),{id:o.id};case "timed_out":case "running":case "committed":case "rolled_back":throw new Me(`Transaction in invalid state ${o.status} although it just finished startup.`);default:return V(o.status,"Unknown transaction status.")}}finally{this.#e.delete(r),i?i.finally(r.markSettled):r.markSettled();}}async#o(t){try{let r=await t;if(r.options.usePhantomQuery)await r.rollback();else try{await r.executeRaw(el());}finally{await r.rollback();}}catch(r){it("error in discarded transaction:",r);}}async commitTransaction(t){return await this.tracingHelper.runInChildSpan("commit_transaction",async()=>{await this.#d(t,"commit",async r=>{if(r.depth>1){if(!r.transaction)throw new nt;let n=r.savepoints.at(-1);if(!n)throw new Me(`Missing savepoint for nested commit. Depth: ${r.depth}, transactionId: ${r.id}`);try{await this.#l(r.transaction,n);}finally{r.savepoints.pop(),r.depth-=1;}return}await this.#f(r,"committed");});})}async rollbackTransaction(t){return await this.tracingHelper.runInChildSpan("rollback_transaction",async()=>{await this.#d(t,"rollback",async r=>{if(r.depth>1){if(!r.transaction)throw new nt;let n=r.savepoints.at(-1);if(!n)throw new Me(`Missing savepoint for nested rollback. Depth: ${r.depth}, transactionId: ${r.id}`);try{await this.#u(r.transaction)(n),await this.#l(r.transaction,n);}finally{r.savepoints.pop(),r.depth-=1;}return}await this.#f(r,"rolled_back");});})}async getTransaction(t,r){let n=this.#s(t.id,r);if(n.status==="closing"&&(await n.closing,n=this.#s(t.id,r)),!n.transaction)throw new nt;return n.transaction}#s(t,r){let n=this.transactions.get(t);if(!n){let i=this.closedTransactions.find(o=>o.id===t);if(i)switch(it("Transaction already closed.",{transactionId:t,status:i.status}),i.status){case "closing":case "waiting":case "running":throw new Me("Active transaction found in closed transactions list.");case "committed":throw new un(r);case "rolled_back":throw new cn(r);case "timed_out":throw new pn(r,{timeout:i.timeout,timeTaken:Date.now()-i.startedAt})}else throw it("Transaction not found.",t),new nt}if(["committed","rolled_back","timed_out"].includes(n.status))throw new Me("Closed transaction found in active transactions map.");return n}async cancelAllTransactions(){let t=[...this.#e];for(let{abortController:r}of t)r.abort();await Promise.allSettled([...[...this.transactions.values()].map(r=>this.#m(r,async()=>{let n=this.transactions.get(r.id);n&&await this.#f(n,"rolled_back");})),...t.map(({settled:r})=>sm(r,tm))]);}#a(t){return `prisma_sp_${t.savepointCounter++}`}#n(t){if(t.createSavepoint)return t.createSavepoint.bind(t);throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): createSavepoint is not implemented.`)}#u(t){if(t.rollbackToSavepoint)return t.rollbackToSavepoint.bind(t);throw new ue(`Nested transactions are not supported by adapter "${t.adapterName}" (${t.provider}): rollbackToSavepoint is not implemented.`)}async#l(t,r){t.releaseSavepoint&&await t.releaseSavepoint(r);}#p(t){it("Transaction already committed or rolled back when timeout happened.",t);}#c(t,r){let n=Date.now(),i=tl(async()=>{try{it("Transaction timed out.",{transactionId:t,timeoutStartedAt:n,timeout:r});let o=this.transactions.get(t);if(!o){this.#p(t);return}await this.#m(o,async()=>{let s=this.transactions.get(t);s&&["running","waiting"].includes(s.status)?await this.#f(s,"timed_out"):this.#p(t);});}catch(o){it("Error while closing timed-out transaction.",{transactionId:t,error:o});}},r);return i?.unref?.(),i}async#d(t,r,n){let i=this.#s(t,r);return await this.#m(i,async()=>{let o=this.#s(t,r);return await n(o)})}async#m(t,r){let n=t.operationQueue,i;t.operationQueue=new Promise(o=>{i=o;}),await n;try{return await r()}finally{i();}}async#f(t,r){let n=async()=>{it("Closing transaction.",{transactionId:t.id,status:r});try{if(t.transaction&&r==="committed")if(t.transaction.options.usePhantomQuery)await this.#g(im(),t.transaction,()=>t.transaction.commit());else {let i=nm();await this.#g(i,t.transaction,()=>t.transaction.executeRaw(i)).then(()=>t.transaction.commit(),o=>{let s=()=>Promise.reject(o);return t.transaction.rollback().then(s,s)});}else if(t.transaction)if(t.transaction.options.usePhantomQuery)await this.#g(om(),t.transaction,()=>t.transaction.rollback());else {let i=el();try{await this.#g(i,t.transaction,()=>t.transaction.executeRaw(i));}finally{await t.transaction.rollback();}}}finally{t.status=r,clearTimeout(t.timer),t.timer=void 0,this.transactions.delete(t.id),this.closedTransactions.push(t),this.closedTransactions.length>em&&this.closedTransactions.shift();}};t.status==="closing"?(await t.closing,this.#s(t.id,r==="committed"?"commit":"rollback")):await Object.assign(t,{status:"closing",reason:r,closing:n()}).closing;}#y(t){if(!t.timeout)throw new ue("timeout is required");if(!t.maxWait)throw new ue("maxWait is required");if(t.isolationLevel==="SNAPSHOT")throw new dn(t.isolationLevel);return {...t,timeout:t.timeout,maxWait:t.maxWait}}#g(t,r,n){return Wr({query:t,execute:n,provider:this.#r??r.provider,tracingHelper:this.tracingHelper,onQuery:this.#t})}};function tl(e,t){return t!==void 0?setTimeout(e,t):void 0}function sm(e,t){let r,n=new Promise(i=>{r=setTimeout(i,t),r?.unref?.();});return Promise.race([e,n]).finally(()=>clearTimeout(r))}var ne=require$$0;var mn="7.10.0";var rl={bigint:"bigint",date:"datetime",decimal:"decimal",bytes:"bytes"};function il(e){let t;try{t=JSON.parse(e);}catch(i){throw new Error(`Received invalid serialized parameters: ${i.message}`)}if(!Array.isArray(t))throw new Error("Received invalid serialized parameters: expected an array");let r=t.map(i=>ol(i)),n=t.map(i=>lm(i));return {args:r,argTypes:n}}function ol(e){if(Array.isArray(e))return e.map(t=>ol(t));if(typeof e=="object"&&e!==null&&"prisma__value"in e){if(!("prisma__type"in e))throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");return `${e.prisma__value}`}return typeof e=="object"&&e!==null?JSON.stringify(e):e}function lm(e){return Array.isArray(e)?{scalarType:e.length>0?nl(e[0]):"unknown",arity:"list"}:{scalarType:nl(e),arity:"scalar"}}function nl(e){return typeof e=="object"&&e!==null&&"prisma__type"in e&&typeof e.prisma__type=="string"&&e.prisma__type in rl?rl[e.prisma__type]:typeof e=="number"?"decimal":typeof e=="string"?"string":"unknown"}function sl(e,t){return {batch:e,transaction:t?.kind==="batch"?{isolationLevel:t.options.isolationLevel}:void 0}}function al(e){return e?e.replace(/"(?:[^"\\]|\\.)*"/g,'"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g,t=>`${t[0]}5`):""}function ll(e){return e.split(`
`).map(t=>t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,"").replace(/\+\d+\s*ms$/,"")).join(`
`)}var ul=Pe(Ro());function cl({title:e,user:t="prisma",repo:r="prisma",template:n="bug_report.yml",body:i}){return (0, ul.default)({user:t,repo:r,template:n,title:e,body:i})}function pl({version:e,binaryTarget:t,title:r,description:n,engineVersion:i,database:o,query:s}){let a=go(6e3-(s?.length??0)),u=ll(ut(a)),m=n?`# Description
\`\`\`
${n}
\`\`\``:"",P=ut(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${m}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s?al(s):""}
\`\`\`
`),T=cl({title:r,body:P});return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Mt(T)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`}var fn=class e{#e;#t;#r;#i;#o;constructor(t,r,n){this.#e=t,this.#t=r,this.#r=n,this.#i=r.getConnectionInfo?.(),this.#o=dr.forSql({onQuery:this.#e.onQuery,tracingHelper:this.#e.tracingHelper,provider:this.#e.provider,connectionInfo:this.#i});}static async connect(t){let r,n;try{r=await t.driverAdapterFactory.connect(),n=new gr({driverAdapter:r,transactionOptions:t.transactionOptions,tracingHelper:t.tracingHelper,onQuery:t.onQuery,provider:t.provider});}catch(i){throw await r?.dispose(),i}return new e(t,r,n)}getConnectionInfo(){let t=this.#i??{supportsRelationJoins:false};return Promise.resolve({provider:this.#t.provider,connectionInfo:t})}async execute({plan:t,placeholderValues:r,transaction:n,batchIndex:i,queryInfo:o}){let s=n?await this.#r.getTransaction(n,i!==void 0?"batch query":"query"):this.#t;return await this.#o.run(t,{queryable:s,transactionManager:n?{enabled:false}:{enabled:true,manager:this.#r},scope:r,sqlCommenter:this.#e.sqlCommenters&&{plugins:this.#e.sqlCommenters,queryInfo:o}})}async startTransaction(t){return {...await this.#r.startTransaction(t),payload:void 0}}async commitTransaction(t){await this.#r.commitTransaction(t.id);}async rollbackTransaction(t){await this.#r.rollbackTransaction(t.id);}async disconnect(){try{await this.#r.cancelAllTransactions();}finally{await this.#t.dispose();}}apiKey(){return null}};var gn=class{#e;#t;#r;constructor(t=1e3){this.#e=new Map,this.#t=new Map,this.#r=t;}getSingle(t){let r=this.#e.get(t);return r&&(this.#e.delete(t),this.#e.set(t,r)),r}setSingle(t,r){if(this.#e.has(t)){this.#e.delete(t),this.#e.set(t,r);return}if(this.#e.size>=this.#r){let n=this.#e.keys().next().value;n!==void 0&&this.#e.delete(n);}this.#e.set(t,r);}getBatch(t){let r=this.#t.get(t);return r&&(this.#t.delete(t),this.#t.set(t,r)),r}setBatch(t,r){if(this.#t.has(t)){this.#t.delete(t),this.#t.set(t,r);return}if(this.#t.size>=this.#r){let n=this.#t.keys().next().value;n!==void 0&&this.#t.delete(n);}this.#t.set(t,r);}clear(){this.#e.clear(),this.#t.clear();}get size(){return this.#e.size+this.#t.size}get singleCacheSize(){return this.#e.size}get batchCacheSize(){return this.#t.size}};var hl=require$$0;var yn=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function dl(e,t,r){let n={},i=n.encode||encodeURIComponent;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!yn.test(e))throw new TypeError("argument name is invalid");let o=i(t);if(o&&!yn.test(o))throw new TypeError("argument val is invalid");let s=e+"="+o;if(n.maxAge!==void 0&&n.maxAge!==null){let a=n.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a);}if(n.domain){if(!yn.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain;}if(n.path){if(!yn.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path;}if(n.expires){if(!um(n.expires)||Number.isNaN(n.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString();}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():n.priority){case "low":{s+="; Priority=Low";break}case "medium":{s+="; Priority=Medium";break}case "high":{s+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case  true:{s+="; SameSite=Strict";break}case "lax":{s+="; SameSite=Lax";break}case "strict":{s+="; SameSite=Strict";break}case "none":{s+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(s+="; Partitioned"),s}function um(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function ml(e,t){let r=(e||"").split(";").filter(u=>typeof u=="string"&&!!u.trim()),n=r.shift()||"",i=cm(n),o=i.name,s=i.value;try{s=t?.decode===!1?s:(t?.decode||decodeURIComponent)(s);}catch{}let a={name:o,value:s};for(let u of r){let m=u.split("="),P=(m.shift()||"").trimStart().toLowerCase(),T=m.join("=");switch(P){case "expires":{a.expires=new Date(T);break}case "max-age":{a.maxAge=Number.parseInt(T,10);break}case "secure":{a.secure=true;break}case "httponly":{a.httpOnly=true;break}case "samesite":{a.sameSite=T;break}default:a[P]=T;}}return a}function cm(e){let t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}var hn=class extends Error{clientVersion;cause;constructor(t,r){super(t),this.clientVersion=r.clientVersion,this.cause=r.cause;}get[Symbol.toStringTag](){return this.name}};var wn=class extends hn{isRetryable;constructor(t,r){super(t,r),this.isRetryable=r.isRetryable??true;}};function fl(e,t){return {...e,isRetryable:t}}var ot=class extends wn{name="InvalidDatasourceError";code="P6001";constructor(t,r){super(t,fl(r,false));}};Bt(ot,"InvalidDatasourceError");function gl(e){let t={clientVersion:e.clientVersion},r;try{r=new URL(e.accelerateUrl);}catch(u){let m=u.message;throw new ot(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${m}`,t)}let{protocol:n,searchParams:i}=r;if(n!=="prisma:"&&n!==Er)throw new ot("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`",t);let o=i.get("api_key");if(o===null||o.length<1)throw new ot("Error validating `accelerateUrl`: the URL must contain a valid API key",t);let s=Dn(r)?"http:":"https:";process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR&&r.searchParams.has("use_http")&&(s="http:");let a=new URL(r.href.replace(n,s));return {apiKey:o,url:a}}var yl=Pe(wo()),xn=class{apiKey;tracingHelper;logLevel;logQueries;engineHash;constructor({apiKey:t,tracingHelper:r,logLevel:n,logQueries:i,engineHash:o}){this.apiKey=t,this.tracingHelper=r,this.logLevel=n,this.logQueries=i,this.engineHash=o;}build({traceparent:t,transactionId:r}={}){let n={Accept:"application/json",Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json","Prisma-Engine-Hash":this.engineHash,"Prisma-Engine-Version":yl.enginesVersion};this.tracingHelper.isEnabled()&&(n.traceparent=t??this.tracingHelper.getTraceParent()),r&&(n["X-Transaction-Id"]=r);let i=this.#e();return i.length>0&&(n["X-Capture-Telemetry"]=i.join(", ")),n}#e(){let t=[];return this.tracingHelper.isEnabled()&&t.push("tracing"),this.logLevel&&t.push(this.logLevel),this.logQueries&&t.push("query"),t}};function pm(e){return e[0]*1e3+e[1]/1e6}function ji(e){return new Date(pm(e))}var wl=K("prisma:client:clientEngine:remoteExecutor"),bn=class{#e;#t;#r;#i;#o;#s;constructor(t){this.#e=t.clientVersion,this.#i=t.logEmitter,this.#o=t.tracingHelper,this.#s=t.sqlCommenters;let{url:r,apiKey:n}=gl({clientVersion:t.clientVersion,accelerateUrl:t.accelerateUrl});this.#r=new Bi(r),this.#t=new xn({apiKey:n,engineHash:t.clientVersion,logLevel:t.logLevel,logQueries:t.logQueries,tracingHelper:t.tracingHelper});}async getConnectionInfo(){return await this.#a({path:"/connection-info",method:"GET"})}async execute({plan:t,placeholderValues:r,batchIndex:n,model:i,operation:o,transaction:s,customFetch:a,queryInfo:u}){let m=u&&this.#s?.length?Hr(this.#s,{query:u}):void 0;return (await this.#a({path:s?`/transaction/${s.id}/query`:"/query",method:"POST",body:{model:i,operation:o,plan:t,params:r,comments:m&&Object.keys(m).length>0?m:void 0},batchRequestIdx:n,fetch:a})).data}async startTransaction(t){return {...await this.#a({path:"/transaction/start",method:"POST",body:t}),payload:void 0}}async commitTransaction(t){await this.#a({path:`/transaction/${t.id}/commit`,method:"POST"});}async rollbackTransaction(t){await this.#a({path:`/transaction/${t.id}/rollback`,method:"POST"});}disconnect(){return Promise.resolve()}apiKey(){return this.#t.apiKey}async#a({path:t,method:r,body:n,fetch:i=globalThis.fetch,batchRequestIdx:o}){let s=await this.#r.request({method:r,path:t,headers:this.#t.build(),body:n,fetch:i});s.ok||await this.#n(s,o);let a=await s.json();return typeof a.extensions=="object"&&a.extensions!==null&&this.#u(a.extensions),a}async#n(t,r){let n=t.headers.get("Prisma-Error-Code"),i=await t.text(),o,s=i;try{o=JSON.parse(i);}catch{o={};}typeof o.code=="string"&&(n=o.code),typeof o.error=="string"?s=o.error:typeof o.message=="string"?s=o.message:typeof o.InvalidRequestError=="object"&&o.InvalidRequestError!==null&&typeof o.InvalidRequestError.reason=="string"&&(s=o.InvalidRequestError.reason),s=s||`HTTP ${t.status}: ${t.statusText}`;let a=typeof o.meta=="object"&&o.meta!==null?o.meta:o;throw new hl.PrismaClientKnownRequestError(s,{clientVersion:this.#e,code:n??"P6000",batchRequestIdx:r,meta:a})}#u(t){let r=t.logs??[];if(t.spans)this.#o.dispatchEngineSpans(t.spans,r,n=>this.#l(n));else for(let n of r)this.#l(n);}#l(t){switch(t.level){case "debug":case "trace":wl(t);break;case "error":case "warn":case "info":{this.#i.emit(t.level,{timestamp:ji(t.timestamp),message:t.attributes.message??"",target:t.target??"RemoteExecutor"});break}case "query":{this.#i.emit("query",{query:t.attributes.query??"",timestamp:ji(t.timestamp),duration:t.attributes.duration_ms??0,params:t.attributes.params??"",target:t.target??"RemoteExecutor"});break}default:throw new Error(`Unexpected log level: ${t.level}`)}}},Bi=class{#e;#t;#r;constructor(t){this.#e=t,this.#t=new Map;}async request({method:t,path:r,headers:n,body:i,fetch:o}){let s=new URL(r,this.#e),a=this.#i(s);a&&(n.Cookie=a),this.#r&&(n["Accelerate-Query-Engine-Jwt"]=this.#r);let u=await o(s.href,{method:t,body:i!==void 0?JSON.stringify(i):void 0,headers:n});return wl(t,s,u.status,u.statusText),this.#r=u.headers.get("Accelerate-Query-Engine-Jwt")??void 0,this.#o(s,u),u}#i(t){let r=[],n=new Date;for(let[i,o]of this.#t){if(o.expires&&o.expires<n){this.#t.delete(i);continue}let s=o.domain??t.hostname,a=o.path??"/";t.hostname.endsWith(s)&&t.pathname.startsWith(a)&&r.push(dl(o.name,o.value));}return r.length>0?r.join("; "):void 0}#o(t,r){let n=r.headers.getSetCookie?.()||[];if(n.length===0){let i=r.headers.get("Set-Cookie");i&&n.push(i);}for(let i of n){let o=ml(i),s=o.domain??t.hostname,a=o.path??"/",u=`${s}:${a}:${o.name}`;this.#t.set(u,{name:o.name,value:o.value,domain:s,path:a,expires:o.expires});}}};var Ji=require$$0,Qi={},xl={async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r===void 0)throw new Ji.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`",t);let n;return e.activeProvider===void 0||Qi[e.activeProvider]===void 0?(n=(async()=>{let i=await r.getRuntime(),o=await r.getQueryCompilerWasmModule();if(o==null)throw new Ji.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded",t);let s={[r.importName]:i},a=new WebAssembly.Instance(o,s),u=a.exports.__wbindgen_start;return i.__wbg_set_wasm(a.exports),u(),i.QueryCompiler})(),e.activeProvider!==void 0&&(Qi[e.activeProvider]=n)):n=Qi[e.activeProvider],await n}};var dm="P2038",Ve=K("prisma:client:clientEngine"),Tl=globalThis;Tl.PRISMA_WASM_PANIC_REGISTRY={set_message(e){throw new ne.PrismaClientRustPanicError(e,mn)}};var yr=class{name="ClientEngine";#e;#t={type:"disconnected"};#r;#i;#o;#s;config;datamodel;logEmitter;logQueries;logLevel;tracingHelper;#a;constructor(t,r){if(t.accelerateUrl!==void 0)this.#i={remote:true,accelerateUrl:t.accelerateUrl};else if(t.adapter)this.#i={remote:false,driverAdapterFactory:t.adapter},Ve("Using driver adapter: %O",t.adapter);else throw new ne.PrismaClientInitializationError("PrismaClient requires a driver adapter to connect to your database, but none was provided. Pass one to the PrismaClient constructor, e.g. `new PrismaClient({ adapter })`. Learn more: https://pris.ly/d/driver-adapters",t.clientVersion,dm);this.#r=r??xl,this.config=t,this.logQueries=t.logQueries??false,this.logLevel=t.logLevel??"error",this.logEmitter=t.logEmitter,this.datamodel=t.inlineSchema,this.tracingHelper=t.tracingHelper,this.#o=t.queryPlanCacheMaxSize===0?void 0:new gn(t.queryPlanCacheMaxSize),this.#s=mr.deserialize(t.parameterizationSchema,n=>{if(!Object.hasOwn(t.runtimeDataModel.enums,n))return;let i={};for(let o of t.runtimeDataModel.enums[n].values)i[o.name]=o.dbName??o.name;return i}),t.enableDebugLogs&&(this.logLevel="debug"),this.logQueries&&(this.#a=n=>{this.logEmitter.emit("query",{...n,params:Se(n.params),target:"ClientEngine"});});}async#n(){switch(this.#t.type){case "disconnected":{let t=this.tracingHelper.runInChildSpan("connect",async()=>{let r,n;try{r=await this.#u(),n=await this.#l(r);}catch(o){throw this.#t={type:"disconnected"},n?.free(),await r?.disconnect(),o}let i={executor:r,queryCompiler:n};return this.#t={type:"connected",engine:i},i});return this.#t={type:"connecting",promise:t},await t}case "connecting":return await this.#t.promise;case "connected":return this.#t.engine;case "disconnecting":return await this.#t.promise,await this.#n()}}async#u(){return this.#i.remote?new bn({clientVersion:this.config.clientVersion,accelerateUrl:this.#i.accelerateUrl,logEmitter:this.logEmitter,logLevel:this.logLevel,logQueries:this.logQueries,tracingHelper:this.tracingHelper,sqlCommenters:this.config.sqlCommenters}):await fn.connect({driverAdapterFactory:this.#i.driverAdapterFactory,tracingHelper:this.tracingHelper,transactionOptions:{...this.config.transactionOptions,isolationLevel:this.#g(this.config.transactionOptions.isolationLevel)},onQuery:this.#a,provider:this.config.activeProvider,sqlCommenters:this.config.sqlCommenters})}async#l(t){let r=this.#e;r===void 0&&(r=await this.#r.loadQueryCompiler(this.config),this.#e=r);let{provider:n,connectionInfo:i}=await t.getConnectionInfo();try{return this.#m(()=>new r({datamodel:this.datamodel,provider:n,connectionInfo:i}),void 0,!1)}catch(o){throw this.#p(o)}}#p(t){if(t instanceof ne.PrismaClientRustPanicError)return t;try{let r=JSON.parse(t.message);return new ne.PrismaClientInitializationError(r.message,this.config.clientVersion,r.error_code)}catch{return t}}#c(t,r){if(t instanceof ne.PrismaClientInitializationError)return t;if(t.code==="GenericFailure"&&t.message?.startsWith("PANIC:"))return new ne.PrismaClientRustPanicError(bl(this,t.message,r),this.config.clientVersion);if(t instanceof X)return new ne.PrismaClientKnownRequestError(t.message,{code:t.code,meta:t.meta,clientVersion:this.config.clientVersion});try{let n=JSON.parse(t);return new ne.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`,{clientVersion:this.config.clientVersion})}catch{return t}}#d(t){return t instanceof ne.PrismaClientRustPanicError?t:typeof t.message=="string"&&typeof t.code=="string"?new ne.PrismaClientKnownRequestError(t.message,{code:t.code,meta:t.meta,clientVersion:this.config.clientVersion}):typeof t.message=="string"?new ne.PrismaClientUnknownRequestError(t.message,{clientVersion:this.config.clientVersion}):t}#m(t,r,n=true){let i=Tl.PRISMA_WASM_PANIC_REGISTRY.set_message,o;commonjsGlobal.PRISMA_WASM_PANIC_REGISTRY.set_message=s=>{o=s;};try{return t()}finally{if(commonjsGlobal.PRISMA_WASM_PANIC_REGISTRY.set_message=i,o)throw this.#e=void 0,n&&this.stop().catch(s=>Ve("failed to disconnect:",s)),new ne.PrismaClientRustPanicError(bl(this,o,r),this.config.clientVersion)}}onBeforeExit(){throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.')}async start(){await this.#n();}async stop(){switch(this.#t.type){case "disconnected":return;case "connecting":return await this.#t.promise,await this.stop();case "connected":{let t=this.#t.engine,r=this.tracingHelper.runInChildSpan("disconnect",async()=>{try{await t.executor.disconnect(),t.queryCompiler.free();}finally{this.#t={type:"disconnected"};}});return this.#t={type:"disconnecting",promise:r},await r}case "disconnecting":return await this.#t.promise}}version(){return "unknown"}async transaction(t,r,n){let i,{executor:o}=await this.#n();try{if(t==="start"){let s=n;i=await o.startTransaction({...s,isolationLevel:this.#g(s.isolationLevel)});}else if(t==="commit"){let s=n;await o.commitTransaction(s);}else if(t==="rollback"){let s=n;await o.rollbackTransaction(s);}else $e(t,"Invalid transaction action.");}catch(s){throw this.#c(s)}return i?{id:i.id,payload:void 0}:void 0}async request(t,{interactiveTransaction:r,customDataProxyFetch:n}){Ve("sending request");let{executor:i,queryCompiler:o}=await this.#n().catch(m=>{throw this.#c(m,JSON.stringify(t))}),s,a={},u=t.query;if(Pl(t))s=El(t);else {let{parameterizedQuery:m,placeholderValues:P}=Vi(t,this.#s),T=JSON.stringify(m);a=P,u=m.query;let S=t.action!=="createMany"&&t.action!=="createManyAndReturn",I=S?this.#o?.getSingle(T):void 0;I?(Ve("query plan cache hit"),s=I):(Ve("query plan cache miss"),s=this.#f(m,T,o),S&&this.#o?.setSingle(T,s));}try{Ve("query plan created",s);let m=await i.execute({plan:s,model:t.modelName,operation:t.action,placeholderValues:a,transaction:r,batchIndex:void 0,customFetch:n?.(globalThis.fetch),queryInfo:{type:"single",modelName:t.modelName,action:t.action,query:u}});return Ve("query plan executed"),{data:{[t.action]:m}}}catch(m){throw this.#c(m,JSON.stringify(t))}}async requestBatch(t,{transaction:r,customDataProxyFetch:n}){if(t.length===0)return [];let i=t[0].action,o=t[0].modelName,s=sl(t,r),a=JSON.stringify(s),{executor:u,queryCompiler:m}=await this.#n().catch(A=>{throw this.#c(A,a)}),P=o===void 0,T,S={},I=t.map(A=>A.query);if(P)T=this.#y(t,a,m);else {let{parameterizedBatch:A,placeholderValues:M}=qi(s,this.#s),L=JSON.stringify(A);S=M,I=A.batch.map(E=>E.query);let q=this.#o?.getBatch(L);if(q)Ve("batch query plan cache hit"),T=q;else {Ve("batch query plan cache miss");try{T=this.#y(A.batch,L,m),this.#o?.setBatch(L,T);}catch(E){throw this.#d(E)}}}try{let A;switch(r?.kind==="itx"&&(A=r.options),T.type){case "multi":{if(r?.kind!=="itx"){let E=r?.options,D={maxWait:E?.maxWait??this.config.transactionOptions.maxWait,timeout:E?.timeout??this.config.transactionOptions.timeout,isolationLevel:E?.isolationLevel??this.config.transactionOptions.isolationLevel};A=await this.transaction("start",{},D);}let M=[],L=!1,q;for(let[E,D]of T.plans.entries())try{let H=await u.execute({plan:D,placeholderValues:S,model:t[E].modelName,operation:t[E].action,batchIndex:E,transaction:A,customFetch:n?.(globalThis.fetch),queryInfo:{type:"single",modelName:t[E].modelName,action:t[E].action,query:I[E]}});M.push({data:{[t[E].action]:H}});}catch(H){if(q??=r?.kind!=="batch"&&t.every(ce=>ce.action==="findUnique"||ce.action==="findUniqueOrThrow"),M.push(H),L=!0,!q)break}return A!==void 0&&r?.kind!=="itx"&&(L?await this.transaction("rollback",{},A):await this.transaction("commit",{},A)),M}case "compacted":{if(!t.every(q=>q.action===i&&q.modelName===o)){let q=t.map(D=>D.action).join(", "),E=t.map(D=>D.modelName).join(", ");throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${q}] and model names: [${E}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`)}if(o===void 0)throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");let M=await u.execute({plan:T.plan,placeholderValues:S,model:o,operation:i,batchIndex:void 0,transaction:A,customFetch:n?.(globalThis.fetch),queryInfo:{type:"compacted",action:i,modelName:o,queries:I}});return Ws(M,T,S).map(q=>({data:{[i]:q}}))}}}catch(A){throw this.#c(A,a)}}async apiKey(){let{executor:t}=await this.#n();return t.apiKey()}#f(t,r,n){try{return this.#m(()=>this.#h({queries:[t],execute:()=>n.compile(r)}))}catch(i){throw this.#d(i)}}#y(t,r,n){if(t.every(Pl))return {type:"multi",plans:t.map(i=>El(i))};try{return this.#m(()=>this.#h({queries:t,execute:()=>n.compileBatch(r)}))}catch(i){throw this.#d(i)}}#g(t){switch(t){case void 0:return;case "ReadUncommitted":return "READ UNCOMMITTED";case "ReadCommitted":return "READ COMMITTED";case "RepeatableRead":return "REPEATABLE READ";case "Serializable":return "SERIALIZABLE";case "Snapshot":return "SNAPSHOT";default:throw new ne.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``,{code:"P2023",clientVersion:this.config.clientVersion,meta:{providedIsolationLevel:t}})}}#h({queries:t,execute:r}){return this.tracingHelper.runInChildSpan({name:"compile",attributes:{models:t.map(n=>n.modelName).filter(n=>n!==void 0),actions:t.map(n=>n.action)}},r)}};function bl(e,t,r){return pl({binaryTarget:void 0,title:t,version:e.config.clientVersion,engineVersion:"unknown",database:e.config.activeProvider,query:r})}function Pl(e){return e.action==="queryRaw"||e.action==="executeRaw"}function El(e){let t=e.query.arguments.query,{args:r,argTypes:n}=il(e.query.arguments.parameters);return {type:e.action==="queryRaw"?"query":"execute",args:{type:"rawSql",sql:t,args:r,argTypes:n}}}function vl(e){return new yr(e)}var Sl=e=>({command:e});var Nl=require$$0;var Al=e=>e.strings.reduce((t,r,n)=>`${t}@P${n}${r}`);var Pn=require$$0;function It(e,t){try{return Rl(e,"fast",t)}catch(r){if(r instanceof TypeError)return Rl(e,"slow",t);throw r}}function Rl(e,t,r){return JSON.stringify(e.map(n=>Il(n,t,r)))}function Il(e,t,r){if(Array.isArray(e))return e.map(n=>Il(n,t,r));if(typeof e=="bigint")return {prisma__type:"bigint",prisma__value:e.toString()};if(ct(e)){if(!pt(e))throw new Pn.PrismaClientValidationError("Provided Date object is invalid",{clientVersion:r});return {prisma__type:"date",prisma__value:e.toJSON()}}if(Pn.Decimal.isDecimal(e))return {prisma__type:"decimal",prisma__value:e.toJSON()};if(Buffer.isBuffer(e))return {prisma__type:"bytes",prisma__value:e.toString("base64")};if(mm(e))return {prisma__type:"bytes",prisma__value:Buffer.from(e).toString("base64")};if(ArrayBuffer.isView(e)){let{buffer:n,byteOffset:i,byteLength:o}=e;return {prisma__type:"bytes",prisma__value:Buffer.from(n,i,o).toString("base64")}}return typeof e=="object"&&t==="slow"?kl(e):e}function mm(e){return e instanceof ArrayBuffer||e instanceof SharedArrayBuffer?true:typeof e=="object"&&e!==null?e[Symbol.toStringTag]==="ArrayBuffer"||e[Symbol.toStringTag]==="SharedArrayBuffer":false}function kl(e){if(typeof e!="object"||e===null)return e;if(typeof e.toJSON=="function")return e.toJSON();if(Array.isArray(e))return e.map(Cl);let t={};for(let r of Object.keys(e))t[r]=Cl(e[r]);return t}function Cl(e){return typeof e=="bigint"?e.toString():kl(e)}var fm=/^(\s*alter\s)/i,Ol=K("prisma:client");function Gi(e,t,r,n){if(!(e!=="postgresql"&&e!=="cockroachdb")&&r.length>0&&fm.exec(t))throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)}var zi=({clientMethod:e,activeProvider:t,clientVersion:r})=>n=>{let i="",o;if(Ur(n))i=n.sql,o={values:It(n.values,r),__prismaRawParameters__:true};else if(Array.isArray(n)){let[s,...a]=n;i=s,o={values:It(a||[],r),__prismaRawParameters__:true};}else switch(t){case "sqlite":case "mysql":{i=n.sql,o={values:It(n.values,r),__prismaRawParameters__:true};break}case "cockroachdb":case "postgresql":case "postgres":{i=n.text,o={values:It(n.values,r),__prismaRawParameters__:true};break}case "sqlserver":{i=Al(n),o={values:It(n.values,r),__prismaRawParameters__:true};break}default:throw new Error(`The ${t} provider does not support ${e}`)}return o?.values?Ol(`prisma.${e}(${i}, ${o.values})`):Ol(`prisma.${e}(${i})`),{query:i,parameters:o}},Dl={requestArgsToMiddlewareArgs(e){return [e.strings,...e.values]},middlewareArgsToRequestArgs(e){let[t,...r]=e;return new Nl.Sql(t,r)}},Ml={requestArgsToMiddlewareArgs(e){return [e]},middlewareArgsToRequestArgs(e){return e[0]}};function Hi(e){return function(r,n){let i,o=(s=e)=>{try{return s===void 0||s?.kind==="itx"?i??=Fl(r(s)):Fl(r(s))}catch(a){return Promise.reject(a)}};return {get spec(){return n},then(s,a){return o().then(s,a)},catch(s){return o().catch(s)},finally(s){return o().finally(s)},requestTransaction(s){let a=o(s);return a.requestTransaction?a.requestTransaction(s):a},[Symbol.toStringTag]:"PrismaPromise"}}}function Fl(e){return typeof e.then=="function"?e:Promise.resolve(e)}var _l={version:"7.10.0"};var ym=_l.version.split(".")[0],hm="PRISMA_INSTRUMENTATION",wm=`V${ym}_PRISMA_INSTRUMENTATION`,$l=globalThis;function Ll(){let e=$l[wm];return e?.helper?e.helper:$l[hm]?.helper}var xm={isEnabled(){return  false},getTraceParent(){return "00-10-10-00"},dispatchEngineSpans(e,t,r){for(let n of t)r(n);},getActiveContext(){},runInChildSpan(e,t){return t()}},Wi=class{isEnabled(){return this.getTracingHelper().isEnabled()}getTraceParent(t){return this.getTracingHelper().getTraceParent(t)}dispatchEngineSpans(t,r,n){return this.getTracingHelper().dispatchEngineSpans(t,r,n)}getActiveContext(){return this.getTracingHelper().getActiveContext()}runInChildSpan(t,r){return this.getTracingHelper().runInChildSpan(t,r)}getTracingHelper(){return Ll()??xm}};function Vl(){return new Wi}function ql(e,t=()=>{}){let r,n=new Promise(i=>r=i);return {then(i){return --e===0&&r(t()),i?.(n)}}}function Ul(e){return typeof e=="string"?e:e.reduce((t,r)=>{let n=typeof r=="string"?r:r.level;return n==="query"?t:t&&(r==="info"||t==="info")?"info":n},void 0)}var Ql=require$$0;function Zi(e){if(e.action!=="findUnique"&&e.action!=="findUniqueOrThrow")return;let t=[];return e.modelName&&t.push(e.modelName),e.query.arguments&&t.push(Ki(e.query.arguments)),t.push(Ki(e.query.selection)),t.join("")}function Ki(e){return `(${Object.keys(e).sort().map(r=>{let n=e[r];return typeof n=="object"&&n!==null?`(${r} ${Ki(n)})`:r}).join(" ")})`}var bm={aggregate:false,aggregateRaw:false,createMany:true,createManyAndReturn:true,createOne:true,deleteMany:true,deleteOne:true,executeRaw:true,findFirst:false,findFirstOrThrow:false,findMany:false,findRaw:false,findUnique:false,findUniqueOrThrow:false,groupBy:false,queryRaw:false,runCommandRaw:true,updateMany:true,updateManyAndReturn:true,updateOne:true,upsertOne:true};function Xi(e){return bm[e]}var En=class{constructor(t){this.options=t;this.batches={};}batches;tickActive=false;request(t){let r=this.options.batchBy(t);return r?(this.batches[r]||(this.batches[r]=[],this.tickActive||(this.tickActive=true,process.nextTick(()=>{this.dispatchBatches(),this.tickActive=false;}))),new Promise((n,i)=>{this.batches[r].push({request:t,resolve:n,reject:i});})):this.options.singleLoader(t)}dispatchBatches(){for(let t in this.batches){let r=this.batches[t];delete this.batches[t],r.length===1?this.options.singleLoader(r[0].request).then(n=>{n instanceof Error?r[0].reject(n):r[0].resolve(n);}).catch(n=>{r[0].reject(n);}):(r.sort((n,i)=>this.options.batchOrder(n.request,i.request)),this.options.batchLoader(r.map(n=>n.request)).then(n=>{if(n instanceof Error)for(let i=0;i<r.length;i++)r[i].reject(n);else for(let i=0;i<r.length;i++){let o=n[i];o instanceof Error?r[i].reject(o):r[i].resolve(o);}}).catch(n=>{for(let i=0;i<r.length;i++)r[i].reject(n);}));}}get[Symbol.toStringTag](){return "DataLoader"}};var jl=require$$0;function st(e,t){if(t===null)return t;switch(e){case "bigint":return BigInt(t);case "bytes":return new Uint8Array(Buffer.from(t,"base64"));case "decimal":return new jl.Decimal(t);case "datetime":case "date":return new Date(t);case "time":return new Date(`1970-01-01T${t}Z`);case "bigint-array":return t.map(r=>st("bigint",r));case "bytes-array":return t.map(r=>st("bytes",r));case "decimal-array":return t.map(r=>st("decimal",r));case "datetime-array":return t.map(r=>st("datetime",r));case "date-array":return t.map(r=>st("date",r));case "time-array":return t.map(r=>st("time",r));default:return t}}function Tn(e){let t=[],r=Pm(e);for(let n=0;n<e.rows.length;n++){let i=e.rows[n],o={...r};for(let s=0;s<i.length;s++)o[e.columns[s]]=st(e.types[s],i[s]);t.push(o);}return t}function Pm(e){let t={};for(let r=0;r<e.columns.length;r++)t[e.columns[r]]=null;return t}function Bl(e,t){let{schema:r,name:n}=Em(t),i=Object.entries(e.models).filter(([o,s])=>(s.dbName??o)===n);if(i.length<=1)return i[0]?.[0];if(r!==void 0){let o=i.filter(([,s])=>s.schema===r);if(o.length===1)return o[0][0]}}function Em(e){let t=e.lastIndexOf(".");return t===-1?{schema:void 0,name:e}:{schema:e.slice(0,t),name:e.slice(t+1)}}var Tm=K("prisma:client:request_handler"),vn=class{client;dataloader;logEmitter;constructor(t,r){this.logEmitter=r,this.client=t,this.dataloader=new En({batchLoader:_s(async({requests:n,customDataProxyFetch:i})=>{let{transaction:o,otelParentCtx:s}=n[0],a=n.map(T=>T.protocolQuery),u=this.client._tracingHelper.getTraceParent(s),m=n.some(T=>Xi(T.protocolQuery.action));return (await this.client._engine.requestBatch(a,{traceparent:u,transaction:vm(o),containsWrite:m,customDataProxyFetch:i})).map((T,S)=>{if(T instanceof Error)return T;try{return this.mapQueryEngineResult(n[S],T)}catch(I){return I}})}),singleLoader:async n=>{let i=n.transaction?.kind==="itx"?Jl(n.transaction):void 0,o=await this.client._engine.request(n.protocolQuery,{traceparent:this.client._tracingHelper.getTraceParent(),interactiveTransaction:i,isWrite:Xi(n.protocolQuery.action),customDataProxyFetch:n.customDataProxyFetch});return this.mapQueryEngineResult(n,o)},batchBy:n=>{if(n.transaction?.kind==="itx"){let i=Zi(n.protocolQuery);return `itx-${n.transaction.id}${i?`-${i}`:""}`}return n.transaction?.id?`transaction-${n.transaction.id}`:Zi(n.protocolQuery)},batchOrder(n,i){return n.transaction?.kind==="batch"&&i.transaction?.kind==="batch"?n.transaction.index-i.transaction.index:0}});}async request(t){try{return await this.dataloader.request(t)}catch(r){let{clientMethod:n,callsite:i,transaction:o,args:s,modelName:a}=t;this.handleAndLogRequestError({error:r,clientMethod:n,callsite:i,transaction:o,args:s,modelName:a,globalOmit:t.globalOmit});}}mapQueryEngineResult({dataPath:t,unpacker:r},n){let i=n?.data,o=this.unpack(i,t,r);return process.env.PRISMA_CLIENT_GET_TIME?{data:o}:o}handleAndLogRequestError(t){try{this.handleRequestError(t);}catch(r){throw this.logEmitter&&this.logEmitter.emit("error",{message:r.message,target:t.clientMethod,timestamp:new Date}),r}}handleRequestError({error:t,clientMethod:r,callsite:n,transaction:i,args:o,modelName:s,globalOmit:a}){if(Tm(t),Sm(t,i))throw t;if(t instanceof _.PrismaClientKnownRequestError&&Am(t)){let m=Gl(t.meta);Fr({args:o,errors:[m],callsite:n,errorFormat:this.client._errorFormat,originalMethod:r,clientVersion:this.client._clientVersion,globalOmit:a});}let u=t.message;if(n&&(u=Rr({callsite:n,originalMethod:r,isPanic:t.isPanic,showColors:this.client._errorFormat==="pretty",message:u})),u=this.sanitizeMessage(u),t.code){let m=this.resolveErrorMeta(t.meta,t.code,s);throw new _.PrismaClientKnownRequestError(u,{code:t.code,clientVersion:this.client._clientVersion,meta:m,batchRequestIdx:t.batchRequestIdx})}else {if(t.isPanic)throw new _.PrismaClientRustPanicError(u,this.client._clientVersion);if(t instanceof _.PrismaClientUnknownRequestError)throw new _.PrismaClientUnknownRequestError(u,{clientVersion:this.client._clientVersion,batchRequestIdx:t.batchRequestIdx});if(t instanceof _.PrismaClientInitializationError)throw new _.PrismaClientInitializationError(u,this.client._clientVersion);if(t instanceof _.PrismaClientRustPanicError)throw new _.PrismaClientRustPanicError(u,this.client._clientVersion)}throw t.clientVersion=this.client._clientVersion,t}resolveErrorMeta(t,r,n){if(r!=="P2002"||typeof t?.table!="string")return n?{modelName:n,...t}:t;let i={...t};delete i.table;let o=Bl(this.client._runtimeDataModel,t.table)??(typeof i.modelName=="string"?i.modelName:n);return o!==void 0?{...i,modelName:o}:i}sanitizeMessage(t){return this.client._errorFormat&&this.client._errorFormat!=="pretty"?ut(t):t}unpack(t,r,n){if(!t||(t.data&&(t=t.data),!t))return t;let i=Object.keys(t)[0],o=Object.values(t)[0],s=Rm(r),a=Wn(o,s),u=i==="queryRaw"?Tn(a):Ae(a);return n?n(u):u}get[Symbol.toStringTag](){return "RequestHandler"}};function vm(e){if(e){if(e.kind==="batch")return {kind:"batch",options:{isolationLevel:e.isolationLevel,maxWait:e.maxWait,timeout:e.timeout}};if(e.kind==="itx")return {kind:"itx",options:Jl(e)};$e(e,"Unknown transaction kind");}}function Jl(e){return {id:e.id,payload:e.payload}}function Sm(e,t){return (0, Ql.hasBatchIndex)(e)&&t?.kind==="batch"&&e.batchRequestIdx!==t.index}function Am(e){return e.code==="P2009"||e.code==="P2012"}function Gl(e){if(e.kind==="Union")return {kind:"Union",errors:e.errors.map(Gl)};if(Array.isArray(e.selectionPath)){let[,...t]=e.selectionPath;return {...e,selectionPath:t}}return e}function Rm(e){let t=[];for(let r=1;r<e.length;r+=2)t.push(e[r]);return t}var Yi=mn;var Zl=Pe(qn());var j=class extends Error{constructor(t){super(t+`
Read more at https://pris.ly/d/client-constructor`),this.name="PrismaClientConstructorValidationError";}get[Symbol.toStringTag](){return "PrismaClientConstructorValidationError"}};Bt(j,"PrismaClientConstructorValidationError");var zl=["errorFormat","adapter","accelerateUrl","log","transactionOptions","omit","comments","queryPlanCacheMaxSize","__internal"],Hl=["pretty","colorless","minimal"],Wl=["info","query","warn","error"],Cm={adapter:()=>{},accelerateUrl:e=>{if(e!==void 0){if(typeof e!="string")throw new j(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);if(e.trim().length===0)throw new j('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.')}},errorFormat:e=>{if(e){if(typeof e!="string")throw new j(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);if(!Hl.includes(e)){let t=hr(e,Hl);throw new j(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`)}}},log:e=>{if(!e)return;if(!Array.isArray(e))throw new j(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);function t(r){if(typeof r=="string"&&!Wl.includes(r)){let n=hr(r,Wl);throw new j(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`)}}for(let r of e){t(r);let n={level:t,emit:i=>{let o=["stdout","event"];if(!o.includes(i)){let s=hr(i,o);throw new j(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`)}}};if(r&&typeof r=="object")for(let[i,o]of Object.entries(r))if(n[i])n[i](o);else throw new j(`Invalid property ${i} for "log" provided to PrismaClient constructor`)}},transactionOptions:e=>{if(!e)return;let t=e.maxWait;if(t!=null&&t<=0)throw new j(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);let r=e.timeout;if(r!=null&&r<=0)throw new j(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)},omit:(e,t)=>{if(typeof e!="object")throw new j('"omit" option is expected to be an object.');if(e===null)throw new j('"omit" option can not be `null`');let r=[];for(let[n,i]of Object.entries(e)){let o=Om(n,t.runtimeDataModel);if(!o){r.push({kind:"UnknownModel",modelKey:n});continue}for(let[s,a]of Object.entries(i)){let u=o.fields.find(m=>m.name===s);if(!u){r.push({kind:"UnknownField",modelKey:n,fieldName:s});continue}if(u.relationName){r.push({kind:"RelationInOmit",modelKey:n,fieldName:s});continue}typeof a!="boolean"&&r.push({kind:"InvalidFieldValue",modelKey:n,fieldName:s});}}if(r.length>0)throw new j(Nm(e,r))},queryPlanCacheMaxSize:e=>{if(e!==void 0){if(typeof e!="number")throw new j(`Invalid value ${JSON.stringify(e)} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected a number.`);if(!Number.isInteger(e))throw new j(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Expected an integer.`);if(e<0)throw new j(`Invalid value ${e} for "queryPlanCacheMaxSize" provided to PrismaClient constructor. Cache size needs to be greater or equal to 0.`)}},comments:e=>{if(e!==void 0){if(!Array.isArray(e))throw new j(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);for(let t=0;t<e.length;t++)if(typeof e[t]!="function")throw new j(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`)}},__internal:e=>{if(!e)return;let t=["debug","engine","configOverride"];if(typeof e!="object")throw new j(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);for(let[r]of Object.entries(e))if(!t.includes(r)){let n=hr(r,t);throw new j(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`)}}};function Im(e){let t=e.adapter!==void 0,r=e.accelerateUrl!==void 0;if(t&&r)throw new j('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');if(!t&&!r)throw new j(`PrismaClient requires a driver adapter to connect to your database, but none was provided.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`)}function Xl(e,t){for(let[r,n]of Object.entries(e)){if(!zl.includes(r)){let i=hr(r,zl);throw new j(`Unknown property ${r} provided to PrismaClient constructor.${i}`)}Cm[r](n,t);}Im(e);}function hr(e,t){if(t.length===0||typeof e!="string")return "";let r=km(e,t);return r?` Did you mean "${r}"?`:""}function km(e,t){if(t.length===0)return null;let r=t.map(i=>({value:i,distance:(0, Zl.default)(e,i)}));r.sort((i,o)=>i.distance<o.distance?-1:1);let n=r[0];return n.distance<3?n.value:null}function Om(e,t){return Kl(t.models,e)??Kl(t.types,e)}function Kl(e,t){let r=Object.keys(e).find(n=>qe(n)===t);if(r)return e[r]}function Nm(e,t){let r=bt(e);for(let o of t)switch(o.kind){case "UnknownModel":r.arguments.getField(o.modelKey)?.markAsError(),r.addErrorMessage(()=>`Unknown model name: ${o.modelKey}.`);break;case "UnknownField":r.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>`Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);break;case "RelationInOmit":r.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>'Relations are already excluded by default and can not be specified in "omit".');break;case "InvalidFieldValue":r.arguments.getDeepFieldValue([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>"Omit field option value must be a boolean.");break}let{message:n,args:i}=Mr(r,"colorless");return `Error validating "omit" option:

${i}

${n}`}var Yl=require$$0;function eu(e){return e.length===0?Promise.resolve([]):new Promise((t,r)=>{let n=new Array(e.length),i=null,o=false,s=0,a=()=>{o||(s++,s===e.length&&(o=true,i?r(i):t(n)));},u=m=>{o||(o=true,r(m));};for(let m=0;m<e.length;m++)e[m].then(P=>{n[m]=P,a();},P=>{if(!(0, Yl.hasBatchIndex)(P)){u(P);return}P.batchRequestIdx===m?u(P):(i||(i=P),a());});})}var kt=K("prisma:client");typeof globalThis=="object"&&(globalThis.NODE_CLIENT=true);var Dm={requestArgsToMiddlewareArgs:e=>e,middlewareArgsToRequestArgs:e=>e},su=Symbol.for("prisma.client.transaction.scope_context");function tu(e){let r=e[su];if(r===void 0)return {kind:"top-level"};if(Mm(r))return r;throw new Error("Internal error: inconsistent transaction scope context.")}function Mm(e){if(typeof e!="object"||e===null)return  false;let t=e;return t.kind==="nested"&&typeof t.txId=="string"&&typeof t.scopeId=="string"&&Fm(t.scopeState)}function Fm(e){return typeof e!="object"||e===null?false:Array.isArray(e.stack)}function _m(){return typeof globalThis.crypto?.randomUUID=="function"?globalThis.crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`}var $m={id:0,nextId(){return ++this.id}};function au(e){class t{_originalClient=this;_runtimeDataModel;_requestHandler;_connectionPromise;_disconnectionPromise;_engineConfig;_accelerateEngineConfig;_clientVersion;_errorFormat;_tracingHelper;_previewFeatures;_activeProvider;_globalOmit;_extensions;_engine;_appliedParent;_createPrismaPromise=Hi();constructor(n){if(!n)throw new _.PrismaClientInitializationError(`PrismaClient was instantiated without any options. A driver adapter is required to connect to your database.

Pass a driver adapter to the PrismaClient constructor, for example:

  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from './generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

Learn more about driver adapters: https://pris.ly/d/driver-adapters

If you use Prisma Accelerate instead of connecting to your database directly, pass \`accelerateUrl\` to the PrismaClient constructor instead of \`adapter\`.`,Yi);e=n.__internal?.configOverride?.(e)??e,Xl(n,e);let i=new ou.EventEmitter().on("error",()=>{});this._extensions=Pt.empty(),this._previewFeatures=e.previewFeatures,this._clientVersion=e.clientVersion??Yi,this._activeProvider=e.activeProvider,this._globalOmit=n?.omit,this._tracingHelper=Vl();let o;if(n.adapter){o=n.adapter;let s=e.activeProvider==="postgresql"||e.activeProvider==="cockroachdb"?"postgres":e.activeProvider;if(o.provider!==s)throw new _.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`,this._clientVersion)}try{let s=n??{},u=(s.__internal??{}).debug===!0;if(u&&K.enable("prisma:client"),s.errorFormat?this._errorFormat=s.errorFormat:"development"==="production"?this._errorFormat="minimal":process.env.NO_COLOR?this._errorFormat="colorless":this._errorFormat="colorless",this._runtimeDataModel=e.runtimeDataModel,this._engineConfig={enableDebugLogs:u,logLevel:s.log&&Ul(s.log),logQueries:s.log&&!!(typeof s.log=="string"?s.log==="query":s.log.find(m=>typeof m=="string"?m==="query":m.level==="query")),compilerWasm:e.compilerWasm,clientVersion:e.clientVersion,previewFeatures:this._previewFeatures,activeProvider:e.activeProvider,inlineSchema:e.inlineSchema,tracingHelper:this._tracingHelper,transactionOptions:{maxWait:s.transactionOptions?.maxWait??2e3,timeout:s.transactionOptions?.timeout??5e3,isolationLevel:s.transactionOptions?.isolationLevel},logEmitter:i,adapter:o,accelerateUrl:s.accelerateUrl,sqlCommenters:s.comments,parameterizationSchema:e.parameterizationSchema,runtimeDataModel:e.runtimeDataModel,queryPlanCacheMaxSize:n.queryPlanCacheMaxSize},this._accelerateEngineConfig=Object.create(this._engineConfig),this._accelerateEngineConfig.accelerateUtils={resolveDatasourceUrl:()=>{if(s.accelerateUrl)return s.accelerateUrl;throw new _.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`,e.clientVersion)}},kt("clientVersion",e.clientVersion),this._engine=vl(this._engineConfig),this._requestHandler=new vn(this,i),s.log)for(let m of s.log){let P=typeof m=="string"?m:m.emit==="stdout"?m.level:null;P&&this.$on(P,T=>{Ut.log(`${Ut.tags[P]??""}`,T.message||T.query);});}}catch(s){throw s.clientVersion=this._clientVersion,s}return this._appliedParent=Yt(this)}get[Symbol.toStringTag](){return "PrismaClient"}$on(n,i){return n==="beforeExit"?this._engine.onBeforeExit(i):n&&this._engineConfig.logEmitter.on(n,i),this}$connect(){try{return this._engine.start()}catch(n){throw n.clientVersion=this._clientVersion,n}}async $disconnect(){try{await this._engine.stop();}catch(n){throw n.clientVersion=this._clientVersion,n}finally{yo();}}$executeRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"executeRaw",args:o,transaction:n,clientMethod:i,argsMapper:zi({clientMethod:i,activeProvider:a,clientVersion:this._clientVersion}),callsite:je(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$executeRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0){let[s,a]=ru(n,i);return Gi(this._activeProvider,s.text,s.values,Array.isArray(n)?"prisma.$executeRaw`<SQL>`":"prisma.$executeRaw(sql`<SQL>`)"),this.$executeRawInternal(o,"$executeRaw",s,a)}throw new _.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",{clientVersion:this._clientVersion})})}$executeRawUnsafe(n,...i){return this._createPrismaPromise(o=>(Gi(this._activeProvider,n,i,"prisma.$executeRawUnsafe(<SQL>, [...values])"),this.$executeRawInternal(o,"$executeRawUnsafe",[n,...i])))}$runCommandRaw(n){if(e.activeProvider!=="mongodb")throw new _.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,{clientVersion:this._clientVersion});return this._createPrismaPromise(i=>this._request({args:n,clientMethod:"$runCommandRaw",dataPath:[],action:"runCommandRaw",argsMapper:Sl,callsite:je(this._errorFormat),transaction:i}))}async $queryRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"queryRaw",args:o,transaction:n,clientMethod:i,argsMapper:zi({clientMethod:i,activeProvider:a,clientVersion:this._clientVersion}),callsite:je(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$queryRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0)return this.$queryRawInternal(o,"$queryRaw",...ru(n,i));throw new _.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",{clientVersion:this._clientVersion})})}$queryRawTyped(n){return this._createPrismaPromise(i=>{if(!this._hasPreviewFlag("typedSql"))throw new _.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API",{clientVersion:this._clientVersion});return this.$queryRawInternal(i,"$queryRawTyped",n)})}$queryRawUnsafe(n,...i){return this._createPrismaPromise(o=>this.$queryRawInternal(o,"$queryRawUnsafe",[n,...i]))}_transactionWithArray({promises:n,options:i}){let o=$m.nextId(),s=ql(n.length),a=n.map((u,m)=>{if(u?.[Symbol.toStringTag]!=="PrismaPromise")throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");let P=i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel,T={kind:"batch",id:o,index:m,isolationLevel:P,maxWait:i?.maxWait??this._engineConfig.transactionOptions.maxWait,timeout:i?.timeout??this._engineConfig.transactionOptions.timeout,lock:s};return u.requestTransaction?.(T)??u});return eu(a)}async _transactionWithCallback({callback:n,options:i={}}){let o=tu(this),s=o.kind==="nested",a=s?o.scopeState:{stack:[]},u=a.stack,m=_m();if(s){if(u.at(-1)!==o.scopeId)throw new Error("Concurrent nested transactions are not supported");i.newTxId=o.txId;}u.push(m);let P={traceparent:this._tracingHelper.getTraceParent()},T={maxWait:i?.maxWait??this._engineConfig.transactionOptions.maxWait,timeout:i?.timeout??this._engineConfig.transactionOptions.timeout,isolationLevel:i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel,newTxId:i.newTxId},S;try{S=await this._engine.transaction("start",P,T);}catch(A){throw u.at(-1)===m&&u.pop(),A}let I;try{let A={kind:"itx",...S};if(I=await n(this._createItxClient(A,m,a)),s){if(u.at(-1)!==m)throw new Error("Nested transactions must be closed in reverse order of creation.")}else if(u.length!==1)throw new Error("Cannot close transaction while a nested transaction is still active.");await this._engine.transaction("commit",P,S);}catch(A){let L=u.at(-1)!==m?Math.max(1,u.length):1;for(let q=0;q<L;q++)await this._engine.transaction("rollback",P,S).catch(E=>{kt("rollback attempt %d/%d failed: %O",q+1,L,E);});throw A}finally{u.at(-1)===m?u.pop():u.length=0;}return I}_createItxClient(n,i,o){let s={kind:"nested",txId:n.id,scopeId:i,scopeState:o};return ve(Yt(ve(As(this),[ae("_appliedParent",()=>this._appliedParent._createItxClient(n,i,o)),ae("_createPrismaPromise",()=>Hi(n)),ae(su,()=>s)])),[Et(Os)])}$transaction(n,i){let o;typeof n=="function"?this._engineConfig.adapter?.adapterName==="@prisma/adapter-d1"?o=()=>{throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.")}:e.activeProvider==="mongodb"&&tu(this).kind==="nested"?o=()=>{throw new _.PrismaClientValidationError(`The ${e.activeProvider} provider does not support nested transactions`,{clientVersion:this._clientVersion})}:o=()=>this._transactionWithCallback({callback:n,options:i}):o=()=>this._transactionWithArray({promises:n,options:i});let s={name:"transaction",attributes:{method:"$transaction"}};return this._tracingHelper.runInChildSpan(s,o)}_request(n){n.otelParentCtx=this._tracingHelper.getActiveContext();let i=n.middlewareArgsMapper??Dm,o={args:i.requestArgsToMiddlewareArgs(n.args),dataPath:n.dataPath,runInTransaction:!!n.transaction,action:n.action,model:n.model},s={operation:{name:"operation",attributes:{method:o.action,model:o.model,name:o.model?`${o.model}.${o.action}`:o.action}}},a=async u=>{let{runInTransaction:m,args:P,...T}=u,S={...n,...T};P&&(S.args=i.middlewareArgsToRequestArgs(P)),n.transaction!==void 0&&m===false&&delete S.transaction;let I=await Fs(this,S);if(!S.model)return I;let A=qs({dataPath:S.dataPath,modelName:S.model,args:S.args,runtimeDataModel:this._runtimeDataModel});return ks({result:I,modelName:A.modelName,args:A.args,extensions:this._extensions,runtimeDataModel:this._runtimeDataModel,globalOmit:this._globalOmit})};return this._tracingHelper.runInChildSpan(s.operation,()=>new iu.AsyncResource("prisma-client-request").runInAsyncScope(()=>a(o)))}async _executeRequest({args:n,clientMethod:i,dataPath:o,callsite:s,action:a,model:u,argsMapper:m,transaction:P,unpacker:T,otelParentCtx:S,customDataProxyFetch:I}){try{n=m?m(n):n;let A={name:"serialize"},M=this._tracingHelper.runInChildSpan(A,()=>Vr({modelName:u,runtimeDataModel:this._runtimeDataModel,action:a,args:n,clientMethod:i,callsite:s,extensions:this._extensions,errorFormat:this._errorFormat,clientVersion:this._clientVersion,previewFeatures:this._previewFeatures,globalOmit:this._globalOmit}));return K.enabled("prisma:client")&&(kt("Prisma Client call:"),kt(`prisma.${i}(${gs(n)})`),kt("Generated request:"),kt(JSON.stringify(M,null,2)+`
`)),P?.kind==="batch"&&await P.lock,this._requestHandler.request({protocolQuery:M,modelName:u,action:a,clientMethod:i,dataPath:o,callsite:s,args:n,extensions:this._extensions,transaction:P,unpacker:T,otelParentCtx:S,otelChildCtx:this._tracingHelper.getActiveContext(),globalOmit:this._globalOmit,customDataProxyFetch:I})}catch(A){throw A.clientVersion=this._clientVersion,A}}_hasPreviewFlag(n){return !!this._engineConfig.previewFeatures?.includes(n)}$extends=Rs}return t}function ru(e,t){return Lm(e)?[new nu.Sql(e,t),Dl]:[e,Ml]}function Lm(e){return Array.isArray(e)&&Array.isArray(e.raw)}var Vm=new Set(["toJSON","$$typeof","asymmetricMatch",Symbol.iterator,Symbol.toStringTag,Symbol.isConcatSpreadable,Symbol.toPrimitive]);function lu(e){return new Proxy(e,{get(t,r){if(r in t)return t[r];if(!Vm.has(r))throw new TypeError(`Invalid enum value: ${String(r)}`)}})}var qm=()=>globalThis.process?.release?.name==="node",Um=()=>!!globalThis.Bun||!!globalThis.process?.versions?.bun,jm=()=>!!globalThis.Deno,Bm=()=>typeof globalThis.Netlify=="object",Qm=()=>typeof globalThis.EdgeRuntime=="object",Jm=()=>globalThis.navigator?.userAgent==="Cloudflare-Workers";function Gm(){return [[Bm,"netlify"],[Qm,"edge-light"],[Jm,"workerd"],[jm,"deno"],[Um,"bun"],[qm,"node"]].flatMap(r=>r[0]()?[r[1]]:[]).at(0)??""}var zm={node:"Node.js",workerd:"Cloudflare Workers",deno:"Deno and Deno Deploy",netlify:"Netlify Edge Functions","edge-light":"Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"};function uu(){let e=Gm();return {id:e,prettyName:zm[e]||e,isEdge:["workerd","deno","netlify","edge-light"].includes(e)}}var _=require$$0,Fe=require$$0,ee=require$$0,cu=require$$0;

const config = {
  "previewFeatures": [],
  "clientVersion": "7.10.0",
  "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
  "activeProvider": "sqlite",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n\nmodel User {\n  id        String    @id @default(cuid())\n  email     String    @unique\n  name      String    @default("\u0421\u0442\u0443\u0434\u0435\u043D\u0442")\n  monitors  Monitor[]\n  createdAt DateTime  @default(now())\n}\n\nmodel Monitor {\n  id            String         @id @default(cuid())\n  url           String\n  name          String\n  intervalSec   Int            @default(300)\n  isActive      Boolean        @default(true)\n  lastStatus    MonitorStatus  @default(UNKNOWN)\n  lastCheckedAt DateTime?\n  userId        String\n  user          User           @relation(fields: [userId], references: [id], onDelete: Cascade)\n  checks        Check[]\n  notifications Notification[]\n  createdAt     DateTime       @default(now())\n\n  @@index([isActive, lastCheckedAt])\n}\n\nmodel Check {\n  id           String   @id @default(cuid())\n  monitorId    String\n  monitor      Monitor  @relation(fields: [monitorId], references: [id], onDelete: Cascade)\n  checkedAt    DateTime @default(now())\n  statusCode   Int?\n  responseMs   Int?\n  responseSize Int?\n  isUp         Boolean\n  error        String?\n\n  @@index([monitorId, checkedAt])\n}\n\nmodel Notification {\n  id        String        @id @default(cuid())\n  monitorId String\n  monitor   Monitor       @relation(fields: [monitorId], references: [id], onDelete: Cascade)\n  channel   String        @default("log")\n  event     MonitorStatus\n  createdAt DateTime      @default(now())\n}\n\nenum MonitorStatus {\n  UP\n  DOWN\n  UNKNOWN\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"monitors","kind":"object","type":"Monitor","relationName":"MonitorToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"Monitor":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"url","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"intervalSec","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"lastStatus","kind":"enum","type":"MonitorStatus"},{"name":"lastCheckedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"MonitorToUser"},{"name":"checks","kind":"object","type":"Check","relationName":"CheckToMonitor"},{"name":"notifications","kind":"object","type":"Notification","relationName":"MonitorToNotification"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null},"Check":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"monitorId","kind":"scalar","type":"String"},{"name":"monitor","kind":"object","type":"Monitor","relationName":"CheckToMonitor"},{"name":"checkedAt","kind":"scalar","type":"DateTime"},{"name":"statusCode","kind":"scalar","type":"Int"},{"name":"responseMs","kind":"scalar","type":"Int"},{"name":"responseSize","kind":"scalar","type":"Int"},{"name":"isUp","kind":"scalar","type":"Boolean"},{"name":"error","kind":"scalar","type":"String"}],"dbName":null,"schema":null},"Notification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"monitorId","kind":"scalar","type":"String"},{"name":"monitor","kind":"object","type":"Monitor","relationName":"MonitorToNotification"},{"name":"channel","kind":"scalar","type":"String"},{"name":"event","kind":"enum","type":"MonitorStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null,"schema":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","monitor","checks","notifications","_count","monitors","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_min","_max","User.groupBy","User.aggregate","Monitor.findUnique","Monitor.findUniqueOrThrow","Monitor.findFirst","Monitor.findFirstOrThrow","Monitor.findMany","Monitor.createOne","Monitor.createMany","Monitor.createManyAndReturn","Monitor.updateOne","Monitor.updateMany","Monitor.updateManyAndReturn","Monitor.upsertOne","Monitor.deleteOne","Monitor.deleteMany","_avg","_sum","Monitor.groupBy","Monitor.aggregate","Check.findUnique","Check.findUniqueOrThrow","Check.findFirst","Check.findFirstOrThrow","Check.findMany","Check.createOne","Check.createMany","Check.createManyAndReturn","Check.updateOne","Check.updateMany","Check.updateManyAndReturn","Check.upsertOne","Check.deleteOne","Check.deleteMany","Check.groupBy","Check.aggregate","Notification.findUnique","Notification.findUniqueOrThrow","Notification.findFirst","Notification.findFirstOrThrow","Notification.findMany","Notification.createOne","Notification.createMany","Notification.createManyAndReturn","Notification.updateOne","Notification.updateMany","Notification.updateManyAndReturn","Notification.upsertOne","Notification.deleteOne","Notification.deleteMany","Notification.groupBy","Notification.aggregate","AND","OR","NOT","id","monitorId","channel","MonitorStatus","event","createdAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","checkedAt","statusCode","responseMs","responseSize","isUp","error","url","name","intervalSec","isActive","lastStatus","lastCheckedAt","userId","email","every","some","none","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "-QEnQAgIAACMAQAgUQAAiQEAMFIAABMAEFMAAIkBADBUAQAAAAFZQACLAQAhbAEAigEAIXIBAAAAAQEAAAABACAPAwAAlwEAIAUAAJgBACAGAACZAQAgUQAAlAEAMFIAAAMAEFMAAJQBADBUAQCKAQAhWUAAiwEAIWsBAIoBACFsAQCKAQAhbQIAlQEAIW4gAJIBACFvAACOAVgicEAAlgEAIXEBAIoBACEEAwAA5QEAIAUAAOYBACAGAADnAQAgcAAAogEAIA8DAACXAQAgBQAAmAEAIAYAAJkBACBRAACUAQAwUgAAAwAQUwAAlAEAMFQBAAAAAVlAAIsBACFrAQCKAQAhbAEAigEAIW0CAJUBACFuIACSAQAhbwAAjgFYInBAAJYBACFxAQCKAQAhAwAAAAMAIAEAAAQAMAIAAAUAIAwEAACPAQAgUQAAkAEAMFIAAAcAEFMAAJABADBUAQCKAQAhVQEAigEAIWVAAIsBACFmAgCRAQAhZwIAkQEAIWgCAJEBACFpIACSAQAhagEAkwEAIQUEAADkAQAgZgAAogEAIGcAAKIBACBoAACiAQAgagAAogEAIAwEAACPAQAgUQAAkAEAMFIAAAcAEFMAAJABADBUAQAAAAFVAQCKAQAhZUAAiwEAIWYCAJEBACFnAgCRAQAhaAIAkQEAIWkgAJIBACFqAQCTAQAhAwAAAAcAIAEAAAgAMAIAAAkAIAkEAACPAQAgUQAAjQEAMFIAAAsAEFMAAI0BADBUAQCKAQAhVQEAigEAIVYBAIoBACFYAACOAVgiWUAAiwEAIQEEAADkAQAgCQQAAI8BACBRAACNAQAwUgAACwAQUwAAjQEAMFQBAAAAAVUBAIoBACFWAQCKAQAhWAAAjgFYIllAAIsBACEDAAAACwAgAQAADAAwAgAADQAgAQAAAAcAIAEAAAALACABAAAAAwAgAQAAAAEAIAgIAACMAQAgUQAAiQEAMFIAABMAEFMAAIkBADBUAQCKAQAhWUAAiwEAIWwBAIoBACFyAQCKAQAhAQgAAOMBACADAAAAEwAgAQAAFAAwAgAAAQAgAwAAABMAIAEAABQAMAIAAAEAIAMAAAATACABAAAUADACAAABACAFCAAA4gEAIFQBAAAAAVlAAAAAAWwBAAAAAXIBAAAAAQEOAAAYACAEVAEAAAABWUAAAAABbAEAAAABcgEAAAABAQ4AABoAMAEOAAAaADAFCAAA1QEAIFQBAJ0BACFZQACfAQAhbAEAnQEAIXIBAJ0BACECAAAAAQAgDgAAHQAgBFQBAJ0BACFZQACfAQAhbAEAnQEAIXIBAJ0BACECAAAAEwAgDgAAHwAgAgAAABMAIA4AAB8AIAMAAAABACAVAAAYACAWAAAdACABAAAAAQAgAQAAABMAIAMHAADSAQAgGwAA1AEAIBwAANMBACAHUQAAiAEAMFIAACYAEFMAAIgBADBUAQBsACFZQABuACFsAQBsACFyAQBsACEDAAAAEwAgAQAAJQAwGgAAJgAgAwAAABMAIAEAABQAMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgDAMAAM8BACAFAADQAQAgBgAA0QEAIFQBAAAAAVlAAAAAAWsBAAAAAWwBAAAAAW0CAAAAAW4gAAAAAW8AAABYAnBAAAAAAXEBAAAAAQEOAAAuACAJVAEAAAABWUAAAAABawEAAAABbAEAAAABbQIAAAABbiAAAAABbwAAAFgCcEAAAAABcQEAAAABAQ4AADAAMAEOAAAwADAMAwAAtAEAIAUAALUBACAGAAC2AQAgVAEAnQEAIVlAAJ8BACFrAQCdAQAhbAEAnQEAIW0CALIBACFuIACpAQAhbwAAngFYInBAALMBACFxAQCdAQAhAgAAAAUAIA4AADMAIAlUAQCdAQAhWUAAnwEAIWsBAJ0BACFsAQCdAQAhbQIAsgEAIW4gAKkBACFvAACeAVgicEAAswEAIXEBAJ0BACECAAAAAwAgDgAANQAgAgAAAAMAIA4AADUAIAMAAAAFACAVAAAuACAWAAAzACABAAAABQAgAQAAAAMAIAYHAACtAQAgGwAAsAEAIBwAAK8BACAtAACuAQAgLgAAsQEAIHAAAKIBACAMUQAAgQEAMFIAADwAEFMAAIEBADBUAQBsACFZQABuACFrAQBsACFsAQBsACFtAgCCAQAhbiAAeAAhbwAAbVgicEAAgwEAIXEBAGwAIQMAAAADACABAAA7ADAaAAA8ACADAAAAAwAgAQAABAAwAgAABQAgAQAAAAkAIAEAAAAJACADAAAABwAgAQAACAAwAgAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACAJBAAArAEAIFQBAAAAAVUBAAAAAWVAAAAAAWYCAAAAAWcCAAAAAWgCAAAAAWkgAAAAAWoBAAAAAQEOAABEACAIVAEAAAABVQEAAAABZUAAAAABZgIAAAABZwIAAAABaAIAAAABaSAAAAABagEAAAABAQ4AAEYAMAEOAABGADAJBAAAqwEAIFQBAJ0BACFVAQCdAQAhZUAAnwEAIWYCAKgBACFnAgCoAQAhaAIAqAEAIWkgAKkBACFqAQCqAQAhAgAAAAkAIA4AAEkAIAhUAQCdAQAhVQEAnQEAIWVAAJ8BACFmAgCoAQAhZwIAqAEAIWgCAKgBACFpIACpAQAhagEAqgEAIQIAAAAHACAOAABLACACAAAABwAgDgAASwAgAwAAAAkAIBUAAEQAIBYAAEkAIAEAAAAJACABAAAABwAgCQcAAKMBACAbAACmAQAgHAAApQEAIC0AAKQBACAuAACnAQAgZgAAogEAIGcAAKIBACBoAACiAQAgagAAogEAIAtRAAB2ADBSAABSABBTAAB2ADBUAQBsACFVAQBsACFlQABuACFmAgB3ACFnAgB3ACFoAgB3ACFpIAB4ACFqAQB5ACEDAAAABwAgAQAAUQAwGgAAUgAgAwAAAAcAIAEAAAgAMAIAAAkAIAEAAAANACABAAAADQAgAwAAAAsAIAEAAAwAMAIAAA0AIAMAAAALACABAAAMADACAAANACADAAAACwAgAQAADAAwAgAADQAgBgQAAKEBACBUAQAAAAFVAQAAAAFWAQAAAAFYAAAAWAJZQAAAAAEBDgAAWgAgBVQBAAAAAVUBAAAAAVYBAAAAAVgAAABYAllAAAAAAQEOAABcADABDgAAXAAwBgQAAKABACBUAQCdAQAhVQEAnQEAIVYBAJ0BACFYAACeAVgiWUAAnwEAIQIAAAANACAOAABfACAFVAEAnQEAIVUBAJ0BACFWAQCdAQAhWAAAngFYIllAAJ8BACECAAAACwAgDgAAYQAgAgAAAAsAIA4AAGEAIAMAAAANACAVAABaACAWAABfACABAAAADQAgAQAAAAsAIAMHAACaAQAgGwAAnAEAIBwAAJsBACAIUQAAawAwUgAAaAAQUwAAawAwVAEAbAAhVQEAbAAhVgEAbAAhWAAAbVgiWUAAbgAhAwAAAAsAIAEAAGcAMBoAAGgAIAMAAAALACABAAAMADACAAANACAIUQAAawAwUgAAaAAQUwAAawAwVAEAbAAhVQEAbAAhVgEAbAAhWAAAbVgiWUAAbgAhDgcAAHAAIBsAAHUAIBwAAHUAIFoBAAAAAVsBAAAABFwBAAAABF0BAAAAAV4BAAAAAV8BAAAAAWABAAAAAWEBAHQAIWIBAAAAAWMBAAAAAWQBAAAAAQcHAABwACAbAABzACAcAABzACBaAAAAWAJbAAAAWAhcAAAAWAhhAAByWCILBwAAcAAgGwAAcQAgHAAAcQAgWkAAAAABW0AAAAAEXEAAAAAEXUAAAAABXkAAAAABX0AAAAABYEAAAAABYUAAbwAhCwcAAHAAIBsAAHEAIBwAAHEAIFpAAAAAAVtAAAAABFxAAAAABF1AAAAAAV5AAAAAAV9AAAAAAWBAAAAAAWFAAG8AIQhaAgAAAAFbAgAAAARcAgAAAARdAgAAAAFeAgAAAAFfAgAAAAFgAgAAAAFhAgBwACEIWkAAAAABW0AAAAAEXEAAAAAEXUAAAAABXkAAAAABX0AAAAABYEAAAAABYUAAcQAhBwcAAHAAIBsAAHMAIBwAAHMAIFoAAABYAlsAAABYCFwAAABYCGEAAHJYIgRaAAAAWAJbAAAAWAhcAAAAWAhhAABzWCIOBwAAcAAgGwAAdQAgHAAAdQAgWgEAAAABWwEAAAAEXAEAAAAEXQEAAAABXgEAAAABXwEAAAABYAEAAAABYQEAdAAhYgEAAAABYwEAAAABZAEAAAABC1oBAAAAAVsBAAAABFwBAAAABF0BAAAAAV4BAAAAAV8BAAAAAWABAAAAAWEBAHUAIWIBAAAAAWMBAAAAAWQBAAAAAQtRAAB2ADBSAABSABBTAAB2ADBUAQBsACFVAQBsACFlQABuACFmAgB3ACFnAgB3ACFoAgB3ACFpIAB4ACFqAQB5ACENBwAAewAgGwAAewAgHAAAewAgLQAAgAEAIC4AAHsAIFoCAAAAAVsCAAAABVwCAAAABV0CAAAAAV4CAAAAAV8CAAAAAWACAAAAAWECAH8AIQUHAABwACAbAAB-ACAcAAB-ACBaIAAAAAFhIAB9ACEOBwAAewAgGwAAfAAgHAAAfAAgWgEAAAABWwEAAAAFXAEAAAAFXQEAAAABXgEAAAABXwEAAAABYAEAAAABYQEAegAhYgEAAAABYwEAAAABZAEAAAABDgcAAHsAIBsAAHwAIBwAAHwAIFoBAAAAAVsBAAAABVwBAAAABV0BAAAAAV4BAAAAAV8BAAAAAWABAAAAAWEBAHoAIWIBAAAAAWMBAAAAAWQBAAAAAQhaAgAAAAFbAgAAAAVcAgAAAAVdAgAAAAFeAgAAAAFfAgAAAAFgAgAAAAFhAgB7ACELWgEAAAABWwEAAAAFXAEAAAAFXQEAAAABXgEAAAABXwEAAAABYAEAAAABYQEAfAAhYgEAAAABYwEAAAABZAEAAAABBQcAAHAAIBsAAH4AIBwAAH4AIFogAAAAAWEgAH0AIQJaIAAAAAFhIAB-ACENBwAAewAgGwAAewAgHAAAewAgLQAAgAEAIC4AAHsAIFoCAAAAAVsCAAAABVwCAAAABV0CAAAAAV4CAAAAAV8CAAAAAWACAAAAAWECAH8AIQhaCAAAAAFbCAAAAAVcCAAAAAVdCAAAAAFeCAAAAAFfCAAAAAFgCAAAAAFhCACAAQAhDFEAAIEBADBSAAA8ABBTAACBAQAwVAEAbAAhWUAAbgAhawEAbAAhbAEAbAAhbQIAggEAIW4gAHgAIW8AAG1YInBAAIMBACFxAQBsACENBwAAcAAgGwAAcAAgHAAAcAAgLQAAhwEAIC4AAHAAIFoCAAAAAVsCAAAABFwCAAAABF0CAAAAAV4CAAAAAV8CAAAAAWACAAAAAWECAIYBACELBwAAewAgGwAAhQEAIBwAAIUBACBaQAAAAAFbQAAAAAVcQAAAAAVdQAAAAAFeQAAAAAFfQAAAAAFgQAAAAAFhQACEAQAhCwcAAHsAIBsAAIUBACAcAACFAQAgWkAAAAABW0AAAAAFXEAAAAAFXUAAAAABXkAAAAABX0AAAAABYEAAAAABYUAAhAEAIQhaQAAAAAFbQAAAAAVcQAAAAAVdQAAAAAFeQAAAAAFfQAAAAAFgQAAAAAFhQACFAQAhDQcAAHAAIBsAAHAAIBwAAHAAIC0AAIcBACAuAABwACBaAgAAAAFbAgAAAARcAgAAAARdAgAAAAFeAgAAAAFfAgAAAAFgAgAAAAFhAgCGAQAhCFoIAAAAAVsIAAAABFwIAAAABF0IAAAAAV4IAAAAAV8IAAAAAWAIAAAAAWEIAIcBACEHUQAAiAEAMFIAACYAEFMAAIgBADBUAQBsACFZQABuACFsAQBsACFyAQBsACEICAAAjAEAIFEAAIkBADBSAAATABBTAACJAQAwVAEAigEAIVlAAIsBACFsAQCKAQAhcgEAigEAIQtaAQAAAAFbAQAAAARcAQAAAARdAQAAAAFeAQAAAAFfAQAAAAFgAQAAAAFhAQB1ACFiAQAAAAFjAQAAAAFkAQAAAAEIWkAAAAABW0AAAAAEXEAAAAAEXUAAAAABXkAAAAABX0AAAAABYEAAAAABYUAAcQAhA3MAAAMAIHQAAAMAIHUAAAMAIAkEAACPAQAgUQAAjQEAMFIAAAsAEFMAAI0BADBUAQCKAQAhVQEAigEAIVYBAIoBACFYAACOAVgiWUAAiwEAIQRaAAAAWAJbAAAAWAhcAAAAWAhhAABzWCIRAwAAlwEAIAUAAJgBACAGAACZAQAgUQAAlAEAMFIAAAMAEFMAAJQBADBUAQCKAQAhWUAAiwEAIWsBAIoBACFsAQCKAQAhbQIAlQEAIW4gAJIBACFvAACOAVgicEAAlgEAIXEBAIoBACF2AAADACB3AAADACAMBAAAjwEAIFEAAJABADBSAAAHABBTAACQAQAwVAEAigEAIVUBAIoBACFlQACLAQAhZgIAkQEAIWcCAJEBACFoAgCRAQAhaSAAkgEAIWoBAJMBACEIWgIAAAABWwIAAAAFXAIAAAAFXQIAAAABXgIAAAABXwIAAAABYAIAAAABYQIAewAhAlogAAAAAWEgAH4AIQtaAQAAAAFbAQAAAAVcAQAAAAVdAQAAAAFeAQAAAAFfAQAAAAFgAQAAAAFhAQB8ACFiAQAAAAFjAQAAAAFkAQAAAAEPAwAAlwEAIAUAAJgBACAGAACZAQAgUQAAlAEAMFIAAAMAEFMAAJQBADBUAQCKAQAhWUAAiwEAIWsBAIoBACFsAQCKAQAhbQIAlQEAIW4gAJIBACFvAACOAVgicEAAlgEAIXEBAIoBACEIWgIAAAABWwIAAAAEXAIAAAAEXQIAAAABXgIAAAABXwIAAAABYAIAAAABYQIAcAAhCFpAAAAAAVtAAAAABVxAAAAABV1AAAAAAV5AAAAAAV9AAAAAAWBAAAAAAWFAAIUBACEKCAAAjAEAIFEAAIkBADBSAAATABBTAACJAQAwVAEAigEAIVlAAIsBACFsAQCKAQAhcgEAigEAIXYAABMAIHcAABMAIANzAAAHACB0AAAHACB1AAAHACADcwAACwAgdAAACwAgdQAACwAgAAAAAXsBAAAAAQF7AAAAWAIBe0AAAAABBRUAAPUBACAWAAD4AQAgeAAA9gEAIHkAAPcBACB-AAAFACADFQAA9QEAIHgAAPYBACB-AAAFACAAAAAAAAAFewIAAAABgQECAAAAAYIBAgAAAAGDAQIAAAABhAECAAAAAQF7IAAAAAEBewEAAAABBRUAAPABACAWAADzAQAgeAAA8QEAIHkAAPIBACB-AAAFACADFQAA8AEAIHgAAPEBACB-AAAFACAAAAAAAAV7AgAAAAGBAQIAAAABggECAAAAAYMBAgAAAAGEAQIAAAABAXtAAAAAAQUVAADpAQAgFgAA7gEAIHgAAOoBACB5AADtAQAgfgAAAQAgCxUAAMMBADAWAADIAQAweAAAxAEAMHkAAMUBADB6AADGAQAgewAAxwEAMHwAAMcBADB9AADHAQAwfgAAxwEAMH8AAMkBADCAAQAAygEAMAsVAAC3AQAwFgAAvAEAMHgAALgBADB5AAC5AQAwegAAugEAIHsAALsBADB8AAC7AQAwfQAAuwEAMH4AALsBADB_AAC9AQAwgAEAAL4BADAEVAEAAAABVgEAAAABWAAAAFgCWUAAAAABAgAAAA0AIBUAAMIBACADAAAADQAgFQAAwgEAIBYAAMEBACABDgAA7AEAMAkEAACPAQAgUQAAjQEAMFIAAAsAEFMAAI0BADBUAQAAAAFVAQCKAQAhVgEAigEAIVgAAI4BWCJZQACLAQAhAgAAAA0AIA4AAMEBACACAAAAvwEAIA4AAMABACAIUQAAvgEAMFIAAL8BABBTAAC-AQAwVAEAigEAIVUBAIoBACFWAQCKAQAhWAAAjgFYIllAAIsBACEIUQAAvgEAMFIAAL8BABBTAAC-AQAwVAEAigEAIVUBAIoBACFWAQCKAQAhWAAAjgFYIllAAIsBACEEVAEAnQEAIVYBAJ0BACFYAACeAVgiWUAAnwEAIQRUAQCdAQAhVgEAnQEAIVgAAJ4BWCJZQACfAQAhBFQBAAAAAVYBAAAAAVgAAABYAllAAAAAAQdUAQAAAAFlQAAAAAFmAgAAAAFnAgAAAAFoAgAAAAFpIAAAAAFqAQAAAAECAAAACQAgFQAAzgEAIAMAAAAJACAVAADOAQAgFgAAzQEAIAEOAADrAQAwDAQAAI8BACBRAACQAQAwUgAABwAQUwAAkAEAMFQBAAAAAVUBAIoBACFlQACLAQAhZgIAkQEAIWcCAJEBACFoAgCRAQAhaSAAkgEAIWoBAJMBACECAAAACQAgDgAAzQEAIAIAAADLAQAgDgAAzAEAIAtRAADKAQAwUgAAywEAEFMAAMoBADBUAQCKAQAhVQEAigEAIWVAAIsBACFmAgCRAQAhZwIAkQEAIWgCAJEBACFpIACSAQAhagEAkwEAIQtRAADKAQAwUgAAywEAEFMAAMoBADBUAQCKAQAhVQEAigEAIWVAAIsBACFmAgCRAQAhZwIAkQEAIWgCAJEBACFpIACSAQAhagEAkwEAIQdUAQCdAQAhZUAAnwEAIWYCAKgBACFnAgCoAQAhaAIAqAEAIWkgAKkBACFqAQCqAQAhB1QBAJ0BACFlQACfAQAhZgIAqAEAIWcCAKgBACFoAgCoAQAhaSAAqQEAIWoBAKoBACEHVAEAAAABZUAAAAABZgIAAAABZwIAAAABaAIAAAABaSAAAAABagEAAAABAxUAAOkBACB4AADqAQAgfgAAAQAgBBUAAMMBADB4AADEAQAwegAAxgEAIH4AAMcBADAEFQAAtwEAMHgAALgBADB6AAC6AQAgfgAAuwEAMAAAAAsVAADWAQAwFgAA2wEAMHgAANcBADB5AADYAQAwegAA2QEAIHsAANoBADB8AADaAQAwfQAA2gEAMH4AANoBADB_AADcAQAwgAEAAN0BADAKBQAA0AEAIAYAANEBACBUAQAAAAFZQAAAAAFrAQAAAAFsAQAAAAFtAgAAAAFuIAAAAAFvAAAAWAJwQAAAAAECAAAABQAgFQAA4QEAIAMAAAAFACAVAADhAQAgFgAA4AEAIAEOAADoAQAwDwMAAJcBACAFAACYAQAgBgAAmQEAIFEAAJQBADBSAAADABBTAACUAQAwVAEAAAABWUAAiwEAIWsBAIoBACFsAQCKAQAhbQIAlQEAIW4gAJIBACFvAACOAVgicEAAlgEAIXEBAIoBACECAAAABQAgDgAA4AEAIAIAAADeAQAgDgAA3wEAIAxRAADdAQAwUgAA3gEAEFMAAN0BADBUAQCKAQAhWUAAiwEAIWsBAIoBACFsAQCKAQAhbQIAlQEAIW4gAJIBACFvAACOAVgicEAAlgEAIXEBAIoBACEMUQAA3QEAMFIAAN4BABBTAADdAQAwVAEAigEAIVlAAIsBACFrAQCKAQAhbAEAigEAIW0CAJUBACFuIACSAQAhbwAAjgFYInBAAJYBACFxAQCKAQAhCFQBAJ0BACFZQACfAQAhawEAnQEAIWwBAJ0BACFtAgCyAQAhbiAAqQEAIW8AAJ4BWCJwQACzAQAhCgUAALUBACAGAAC2AQAgVAEAnQEAIVlAAJ8BACFrAQCdAQAhbAEAnQEAIW0CALIBACFuIACpAQAhbwAAngFYInBAALMBACEKBQAA0AEAIAYAANEBACBUAQAAAAFZQAAAAAFrAQAAAAFsAQAAAAFtAgAAAAFuIAAAAAFvAAAAWAJwQAAAAAEEFQAA1gEAMHgAANcBADB6AADZAQAgfgAA2gEAMAAEAwAA5QEAIAUAAOYBACAGAADnAQAgcAAAogEAIAEIAADjAQAgAAAIVAEAAAABWUAAAAABawEAAAABbAEAAAABbQIAAAABbiAAAAABbwAAAFgCcEAAAAABBFQBAAAAAVlAAAAAAWwBAAAAAXIBAAAAAQIAAAABACAVAADpAQAgB1QBAAAAAWVAAAAAAWYCAAAAAWcCAAAAAWgCAAAAAWkgAAAAAWoBAAAAAQRUAQAAAAFWAQAAAAFYAAAAWAJZQAAAAAEDAAAAEwAgFQAA6QEAIBYAAO8BACAGAAAAEwAgDgAA7wEAIFQBAJ0BACFZQACfAQAhbAEAnQEAIXIBAJ0BACEEVAEAnQEAIVlAAJ8BACFsAQCdAQAhcgEAnQEAIQsDAADPAQAgBgAA0QEAIFQBAAAAAVlAAAAAAWsBAAAAAWwBAAAAAW0CAAAAAW4gAAAAAW8AAABYAnBAAAAAAXEBAAAAAQIAAAAFACAVAADwAQAgAwAAAAMAIBUAAPABACAWAAD0AQAgDQAAAAMAIAMAALQBACAGAAC2AQAgDgAA9AEAIFQBAJ0BACFZQACfAQAhawEAnQEAIWwBAJ0BACFtAgCyAQAhbiAAqQEAIW8AAJ4BWCJwQACzAQAhcQEAnQEAIQsDAAC0AQAgBgAAtgEAIFQBAJ0BACFZQACfAQAhawEAnQEAIWwBAJ0BACFtAgCyAQAhbiAAqQEAIW8AAJ4BWCJwQACzAQAhcQEAnQEAIQsDAADPAQAgBQAA0AEAIFQBAAAAAVlAAAAAAWsBAAAAAWwBAAAAAW0CAAAAAW4gAAAAAW8AAABYAnBAAAAAAXEBAAAAAQIAAAAFACAVAAD1AQAgAwAAAAMAIBUAAPUBACAWAAD5AQAgDQAAAAMAIAMAALQBACAFAAC1AQAgDgAA-QEAIFQBAJ0BACFZQACfAQAhawEAnQEAIWwBAJ0BACFtAgCyAQAhbiAAqQEAIW8AAJ4BWCJwQACzAQAhcQEAnQEAIQsDAAC0AQAgBQAAtQEAIFQBAJ0BACFZQACfAQAhawEAnQEAIWwBAJ0BACFtAgCyAQAhbiAAqQEAIW8AAJ4BWCJwQACzAQAhcQEAnQEAIQIHAAYIBgIEAwABBQoDBg4EBwAFAQQAAgEEAAICBQ8ABhAAAQgRAAAAAAMHAAsbAAwcAA0AAAADBwALGwAMHAANAQMAAQEDAAEFBwASGwAVHAAWLQATLgAUAAAAAAAFBwASGwAVHAAWLQATLgAUAQQAAgEEAAIFBwAbGwAeHAAfLQAcLgAdAAAAAAAFBwAbGwAeHAAfLQAcLgAdAQQAAgEEAAIDBwAkGwAlHAAmAAAAAwcAJBsAJRwAJgkCAQoSAQsVAQwWAQ0XAQ8ZARAbBxEcCBIeARMgBxQhCRciARgjARkkBx0nCh4oDh8pAiAqAiErAiIsAiMtAiQvAiUxByYyDyc0Aig2Byk3ECo4Ais5Aiw6By89ETA-FzE_AzJAAzNBAzRCAzVDAzZFAzdHBzhIGDlKAzpMBztNGTxOAz1PAz5QBz9TGkBUIEFVBEJWBENXBERYBEVZBEZbBEddB0heIUlgBEpiB0tjIkxkBE1lBE5mB09pI1BqJw"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import('node:buffer');
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import('file://D:/site_down_detector/Site_Down_Detector/node_modules/@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs'),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import('file://D:/site_down_detector/Site_Down_Detector/node_modules/@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs');
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return client.getPrismaClient(config);
}

globalThis["__dirname"] = node_path.dirname(fileURLToPath(globalThis._importMeta_.url));
const PrismaClient = getPrismaClientClass();

var _a;
const globalDb = globalThis;
const prisma = (_a = globalDb.prisma) != null ? _a : new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: `file:${resolve("prisma/dev.db")}`
  })
});
globalDb.prisma = prisma;
function getDemoUser() {
  return prisma.user.upsert({
    where: { email: "student@example.com" },
    update: {},
    create: { email: "student@example.com", name: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442" }
  });
}

function uptimePercent(successful, total) {
  return total ? Math.round(successful / total * 1e4) / 100 : null;
}
function statusChanged(previous, next) {
  return previous !== "UNKNOWN" && previous !== next;
}
async function runPool(items, limit, work) {
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const item = items[cursor++];
      await work(item);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker)
  );
}

async function saveCheckResult(monitorId, result) {
  const next = result.isUp ? "UP" : "DOWN";
  const checkedAt = /* @__PURE__ */ new Date();
  const notification = await prisma.$transaction(async (tx) => {
    const latest = await tx.monitor.findUnique({
      where: { id: monitorId }
    });
    if (!(latest == null ? void 0 : latest.isActive)) return null;
    await tx.check.create({
      data: { monitorId: latest.id, checkedAt, ...result }
    });
    await tx.monitor.update({
      where: { id: latest.id },
      data: { lastStatus: next, lastCheckedAt: checkedAt }
    });
    if (statusChanged(latest.lastStatus, next)) {
      await tx.notification.create({
        data: { monitorId: latest.id, channel: "log", event: next }
      });
      return `[${checkedAt.toISOString()}] ${latest.name}: ${latest.lastStatus} \u2192 ${next}`;
    }
    return null;
  });
  return notification;
}

const blocked = new BlockList();
for (const [address, prefix] of [
  ["0.0.0.0", 8],
  ["10.0.0.0", 8],
  ["100.64.0.0", 10],
  ["127.0.0.0", 8],
  ["169.254.0.0", 16],
  ["172.16.0.0", 12],
  ["192.0.0.0", 24],
  ["192.0.2.0", 24],
  ["192.168.0.0", 16],
  ["198.18.0.0", 15],
  ["198.51.100.0", 24],
  ["203.0.113.0", 24],
  ["224.0.0.0", 4],
  ["240.0.0.0", 4]
])
  blocked.addSubnet(address, prefix, "ipv4");
const globalV6 = new BlockList();
globalV6.addSubnet("2000::", 3, "ipv6");
blocked.addSubnet("2001::", 23, "ipv6");
blocked.addSubnet("2001:db8::", 32, "ipv6");
blocked.addSubnet("2002::", 16, "ipv6");
function isPublicAddress(address) {
  const family = isIP(address);
  if (family === 4) return !blocked.check(address, "ipv4");
  return family === 6 && globalV6.check(address, "ipv6") && !blocked.check(address, "ipv6");
}
async function publicTarget(raw, allowPrivate = false) {
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password)
    throw new Error("\u041D\u0443\u0436\u0435\u043D HTTP(S) URL \u0431\u0435\u0437 \u043B\u043E\u0433\u0438\u043D\u0430 \u0438 \u043F\u0430\u0440\u043E\u043B\u044F");
  if (url.href === "http://127.0.0.1:3333/health") {
    return { url, address: { address: "127.0.0.1", family: 4 } };
  }
  const host = url.hostname.replace(/^\[|\]$/g, "");
  let timer;
  const addresses = await Promise.race([
    lookup(host, { all: true }),
    new Promise((_, reject) => {
      timer = setTimeout(
        () => reject(new Error("DNS: \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F")),
        3e3
      );
    })
  ]).finally(() => clearTimeout(timer));
  if (!addresses.length || !allowPrivate && addresses.some((a) => !isPublicAddress(a.address)))
    throw new Error("\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0430\u0439\u0442\u043E\u0432");
  return { url, address: addresses[0] };
}

async function probe(raw, options = {}) {
  var _a, _b;
  const started = performance.now();
  const timeoutMs = (_a = options.timeoutMs) != null ? _a : 1e4;
  const maxBytes = (_b = options.maxBytes) != null ? _b : 5 * 1024 * 1024;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let statusCode = null;
  try {
    let current = raw;
    for (let redirects = 0; redirects <= 5; redirects++) {
      const { url, address } = await publicTarget(
        current,
        options.allowPrivate
      );
      controller.signal.throwIfAborted();
      const result = await new Promise(
        (resolve, reject) => {
          const request$2 = (url.protocol === "https:" ? request : request$1)(
            url,
            {
              method: "GET",
              signal: controller.signal,
              headers: {
                "User-Agent": "SiteDownDetector/1.0",
                "Accept-Encoding": "identity"
              },
              // Соединяемся именно с проверенным IP: повторный DNS не обойдёт запрет локальной сети.
              lookup: (_host, opts, callback) => {
                if (opts.all) callback(null, [address]);
                else callback(null, address.address, address.family);
              }
            },
            (response) => {
              var _a2;
              statusCode = (_a2 = response.statusCode) != null ? _a2 : null;
              if ([301, 302, 303, 307, 308].includes(statusCode != null ? statusCode : 0) && response.headers.location) {
                const redirect = new URL(response.headers.location, url).href;
                response.destroy();
                resolve({ redirect, size: 0 });
                return;
              }
              let size = 0;
              response.on("data", (chunk) => {
                size += chunk.length;
                if (size > maxBytes)
                  response.destroy(
                    new Error("\u041E\u0442\u0432\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 5 \u041C\u0411 (\u043B\u0438\u043C\u0438\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438)")
                  );
              });
              response.on("end", () => resolve({ size }));
              response.on("error", reject);
              response.on(
                "aborted",
                () => reject(new Error("\u041E\u0442\u0432\u0435\u0442 \u043F\u0440\u0435\u0440\u0432\u0430\u043D \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C"))
              );
            }
          );
          request$2.on("error", reject);
          request$2.end();
        }
      );
      if (result.redirect) {
        current = result.redirect;
        continue;
      }
      const isUp = statusCode !== null && statusCode >= 200 && statusCode < 400;
      return {
        isUp,
        statusCode,
        responseMs: Math.round(performance.now() - started),
        responseSize: result.size,
        error: isUp ? null : `HTTP ${statusCode}`
      };
    }
    throw new Error("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439");
  } catch (error) {
    return {
      isUp: false,
      statusCode,
      responseMs: Math.round(performance.now() - started),
      responseSize: null,
      error: controller.signal.aborted ? "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043E \u0432\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F" : error.message
    };
  } finally {
    clearTimeout(timer);
  }
}

let running = false;
async function checkDueMonitors() {
  if (running) return;
  running = true;
  try {
    const monitors = await prisma.monitor.findMany({
      where: { isActive: true }
    });
    const now = Date.now();
    const due = monitors.filter(
      (m) => !m.lastCheckedAt || now - m.lastCheckedAt.getTime() >= m.intervalSec * 1e3
    );
    await runPool(due, 5, async (monitor) => {
      try {
        const current = await prisma.monitor.findUnique({
          where: { id: monitor.id }
        });
        if (!(current == null ? void 0 : current.isActive)) return;
        const result = await probe(current.url);
        const notification = await saveCheckResult(current.id, result);
        if (notification) console.log("[monitor]", notification);
      } catch (error) {
        console.error("[checker] \u041E\u0448\u0438\u0431\u043A\u0430 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0430", monitor.id, error);
      }
    });
  } finally {
    running = false;
  }
}

const _ptpWsCXcrX5V09lAou5nrsut68PgkAZA3RHSDRWWlJc = defineNitroPlugin(async (nitro) => {
  await getDemoUser();
  const tick = () => checkDueMonitors().catch((error) => console.error("[checker]", error));
  const timer = setInterval(tick, 1e3);
  timer.unref();
  void tick();
  nitro.hooks.hook("close", () => {
    clearInterval(timer);
  });
});

const plugins = [
  dev_server_logs_default,
_ptpWsCXcrX5V09lAou5nrsut68PgkAZA3RHSDRWWlJc,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"57cfe-4ymP5lOjYsVlgB0kkkT1xDds7rc\"",
    "mtime": "2026-11-26T03:32:06.232Z",
    "size": 359678,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"173f0c-gFghyt/cQTXTX35BTdgEgFuH8vk\"",
    "mtime": "2026-11-26T03:32:06.234Z",
    "size": 1523468,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _wicPpj = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _FrfK8n = defineEventHandler((event) => {
  if (!event.path.startsWith("/api/")) return;
  setHeader(event, "Cache-Control", "no-store");
  if (["POST", "PATCH", "DELETE", "PUT"].includes(event.method)) {
    const origin = getHeader(event, "origin");
    if (getHeader(event, "sec-fetch-site") === "cross-site" || origin && origin !== getRequestURL(event).origin) {
      throw createError({
        statusCode: 403,
        message: "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0437\u0430\u043F\u0440\u043E\u0441\u0430"
      });
    }
  }
});

//#region ../nuxt/src/app/island-hash.ts
/**
* Strip Vue scoped-style attributes (`data-v-*`) from island props before hashing
* or rendering. Scoped-id markers leak in from parent components and are not part
* of the logical island input.
*
* Used before island props are serialized and sent to the island handler.
*
* @internal
*/
function filterIslandProps(props) {
	if (!props) return {};
	const out = {};
	for (const key in props) if (!key.startsWith("data-v-")) out[key] = props[key];
	return out;
}
/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash(input) {
	const props = typeof input.props === "string" ? parseSerializedProps(input.props) : input.props ?? {};
	return hash$1([
		input.name,
		props,
		input.context ?? {},
		input.source
	]).replace(/[-_]/g, "");
}
function parseSerializedProps(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

//#region src/runtime/utils/island-props.ts
/** @internal */
const MAX_ISLAND_BODY_BYTES = 65536;
/**
* Whether the bracket nesting of a JSON-ish string exceeds `maxDepth`, in a single linear
* pass. Brackets inside string values are ignored.
*
* @internal
*/
function exceedsMaxDepth(raw, maxDepth = 64) {
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let i = 0; i < raw.length; i++) {
		const ch = raw[i];
		if (inString) {
			if (escaped) escaped = false;
			else if (ch === "\\") escaped = true;
			else if (ch === "\"") inString = false;
			continue;
		}
		if (ch === "\"") inString = true;
		else if (ch === "{" || ch === "[") {
			if (++depth > maxDepth) return true;
		} else if (ch === "}" || ch === "]") {
			if (depth > 0) depth--;
		}
	}
	return false;
}
/** @internal */
function exceedsMaxBytes(raw, maxBytes = MAX_ISLAND_BODY_BYTES) {
	return Buffer.byteLength(raw, "utf8") > maxBytes;
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;
const NUXT_SSR_STREAMING = false;

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

const VueResolver = /* @__PURE__ */ Object.assign(
  (_, value) => isRef(value) ? toValue(value) : value,
  // identity for plain non-reactive values, so the SSR default init entry
  // keeps its precomputed fast path (see unhead/server createHead)
  { _static: true }
);

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const legacyPlugins = [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin];

const unheadOptions = {
  disableDefaults: true,
  plugins: legacyPlugins,
};

function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) return encodePath(path);
	return encodePath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function createSSRContext(event) {
	const url = encodeEventPath(event.path);
	const ssrContext = {
		url,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

//#region src/runtime/utils/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

//#region src/runtime/utils/renderer/build-files.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => Promise.resolve().then(function () { return entry; }).then((r) => r.default || r);
const getClientManifest = () => Promise.resolve().then(function () { return manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getSSRRenderer = lazyCachedFunction(async () => {
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) throw serverDiagnostics.NUXT_E8004();
	const precomputed = void 0 ;
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		if (process.env.NUXT_VITE_NODE_OPTIONS) renderer.rendererContext.updateManifest(await getClientManifest());
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = void 0 ;
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + (r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "");
		}
	});
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= /* @__PURE__ */ new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

//#region src/runtime/utils/renderer/inline-styles.ts
async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = /* @__PURE__ */ new Set();
	const promises = [];
	for (const mod of usedModules) if (mod in styleMap && styleMap[mod]) promises.push(styleMap[mod]());
	for (const styles of await Promise.all(promises)) for (const style of styles) inlinedStyles.add(style);
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

//#region src/runtime/utils/renderer/islands.ts
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	return body.match(ROOT_NODE_REGEX)?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) return;
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) response[name] = {
		...slot,
		fallback: ssrContext.teleports?.[`island-fallback=${name}`]
	};
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) return;
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		let html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		if (!html && ssrContext.teleports) for (const [key, value] of Object.entries(ssrContext.teleports)) {
			const [, , componentUid] = key.match(SSR_CLIENT_TELEPORT_MARKER) ?? [];
			if (componentUid === clientUid) {
				html = value.replaceAll("<!--teleport start anchor-->", "");
				break;
			}
		}
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) continue;
			slots[slot] = value;
		}
	}
	return slots;
}
const ISLAND_TELEPORT_ANCHOR_RE = / data-island-uid="([^"]*)" data-island-(component|slot)="([^"]*)"[^>]*>/g;
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) return html;
	const contentsByAnchor = /* @__PURE__ */ new Map();
	const uids = /* @__PURE__ */ new Set();
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) continue;
			contentsByAnchor.set(`${uid};component;${clientId}`, teleports[key]);
			uids.add(uid);
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) continue;
			contentsByAnchor.set(`${uid};slot;${slot}`, teleports[key]);
			uids.add(uid);
		}
	}
	if (!contentsByAnchor.size) return html;
	const stitch = (html) => {
		const anchorRE = new RegExp(ISLAND_TELEPORT_ANCHOR_RE);
		let out = "";
		let cursor = 0;
		let m;
		while (contentsByAnchor.size && (m = anchorRE.exec(html))) {
			if (!uids.has(m[1])) continue;
			const anchor = `${m[1]};${m[2]};${m[3]}`;
			const content = contentsByAnchor.get(anchor);
			if (content === void 0) continue;
			contentsByAnchor.delete(anchor);
			const end = m.index + m[0].length;
			out += html.slice(cursor, end) + stitch(content);
			cursor = end;
		}
		return cursor ? out + html.slice(cursor) : html;
	};
	return stitch(html);
}

//#region src/runtime/handlers/island.ts
const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	return toResponse(event, await renderIsland(event));
});
function toResponse(event, result) {
	return "raw" in result ? returnIslandResponse(event, result.raw) : result;
}
async function renderIsland(event) {
	const nitroApp = useNitroApp();
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	const renderer = await getSSRRenderer();
	const renderResult = await (renderer.renderToString(ssrContext)).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") return {};
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) throw createError({
			statusCode: response.statusCode,
			statusMessage: response.statusMessage
		});
		return { raw: response };
	}
	if (ssrContext.payload?.error) throw ssrContext.payload.error;
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			if ("inline" in getQuery(resource.file)) continue;
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) link.push({
				rel: "stylesheet",
				href: renderer.rendererContext.buildAssetsURL(resource.file),
				crossorigin: ""
			});
		}
		if (link.length) ssrContext.head.push({ link });
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) for (const [key, value] of Object.entries(walkResolver(entry.input, VueResolver))) {
		const currentValue = islandHead[key];
		if (Array.isArray(currentValue)) currentValue.push(...value);
		else islandHead[key] = value;
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
}
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) setResponseHeader(event, header, response.headers[header]);
	if (response.statusCode) setResponseStatus(event, response.statusCode, response.statusMessage);
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function readGuardedIslandBody(event) {
	if (Number(getRequestHeader(event, "content-length")) > 65536) throw createError({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	let received = 0;
	let raw = "";
	let overflowed = false;
	const stream = getRequestWebStream(event);
	if (stream) {
		const decoder = new TextDecoder();
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > 65536) {
					overflowed = true;
					continue;
				}
				raw += decoder.decode(value, { stream: true });
			}
		} finally {
			reader.releaseLock();
		}
		raw += decoder.decode();
	}
	if (overflowed) throw createError({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	if (!raw) return {};
	if (exceedsMaxDepth(raw)) throw createError({
		statusCode: 400,
		statusMessage: "Island request body too deeply nested"
	});
	return destr$1(raw) || {};
}
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request path"
	});
	const componentParts = url.substring(15).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island component name"
	});
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readGuardedIslandBody(event);
	const serializedProps = typeof rawContext?.props === "string" ? rawContext.props : "{}";
	if (exceedsMaxBytes(serializedProps)) throw createError({
		statusCode: 413,
		statusMessage: "Island request props too large"
	});
	if (exceedsMaxDepth(serializedProps)) throw createError({
		statusCode: 400,
		statusMessage: "Island request props too deeply nested"
	});
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) if (key !== "props") clientContext[key] = rawContext[key];
	}
	const parsed = destr$1(serializedProps);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request props"
	});
	const parsedProps = filterIslandProps(parsed);
	const expectedHash = getIslandHash({
		name: componentName,
		props: parsedProps,
		context: clientContext
	});
	if (!hashId || hashId !== expectedHash) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request hash"
	});
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: parsedProps,
		slots: {},
		components: {}
	};
}

const _lazy_KuhwB8 = () => Promise.resolve().then(function () { return monitors_get$1; });
const _lazy_Ykj2t1 = () => Promise.resolve().then(function () { return monitors_post$1; });
const _lazy_i3OLKx = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_bKEjuj = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_KE86RP = () => Promise.resolve().then(function () { return _id__patch$1; });
const _lazy_4TV_4v = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _wicPpj, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _FrfK8n, lazy: false, middleware: true, method: undefined },
  { route: '/api/monitors', handler: _lazy_KuhwB8, lazy: true, middleware: false, method: "get" },
  { route: '/api/monitors', handler: _lazy_Ykj2t1, lazy: true, middleware: false, method: "post" },
  { route: '/api/monitors/:id', handler: _lazy_i3OLKx, lazy: true, middleware: false, method: "delete" },
  { route: '/api/monitors/:id', handler: _lazy_bKEjuj, lazy: true, middleware: false, method: "get" },
  { route: '/api/monitors/:id', handler: _lazy_KE86RP, lazy: true, middleware: false, method: "patch" },
  { route: '/__nuxt_error', handler: _lazy_4TV_4v, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_4TV_4v, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = node_crypto__default.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

//#region src/runtime/templates/error-500.ts
const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,minimum-scale=1\" name=\"viewport\"><script>!function(){let e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(let e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(let t of e)if(\"childList\"===t.type)for(let e of t.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;let r=function(e){let r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials=\"use-credentials\"===e.crossOrigin?\"include\":\"anonymous\"===e.crossOrigin?\"omit\":\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:\"\"}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media (width>=640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const manifest = () => viteNodeFetch.getManifest();

const manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manifest
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function listMonitors() {
  return prisma.monitor.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      checks: { orderBy: [{ checkedAt: "desc" }, { id: "desc" }], take: 1 }
    }
  });
}
async function getMonitor(id) {
  const monitor = id ? await prisma.monitor.findUnique({ where: { id } }) : null;
  if (!monitor)
    throw createError({ statusCode: 404, message: "\u041C\u043E\u043D\u0438\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
  return monitor;
}
async function createMonitor(data) {
  try {
    await publicTarget(data.url);
  } catch (error) {
    throw createError({ statusCode: 400, message: error.message });
  }
  const user = await getDemoUser();
  return prisma.monitor.create({ data: { ...data, userId: user.id } });
}
async function setMonitorActive(id, isActive) {
  const monitor = await getMonitor(id);
  return prisma.monitor.update({
    where: { id: monitor.id },
    data: { isActive }
  });
}
async function deleteMonitor(id) {
  const monitor = await getMonitor(id);
  await prisma.monitor.delete({ where: { id: monitor.id } });
  return { ok: true };
}

const monitors_get = defineEventHandler(() => listMonitors());

const monitors_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: monitors_get
}, Symbol.toStringTag, { value: 'Module' }));

const monitorSchema = z.object({
  name: z.string().trim().min(1, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435").max(100),
  url: z.url("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u043D\u044B\u0439 URL").max(2048).refine((value) => {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password;
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 http:// \u0438\u043B\u0438 https:// \u0431\u0435\u0437 \u043B\u043E\u0433\u0438\u043D\u0430 \u0438 \u043F\u0430\u0440\u043E\u043B\u044F \u0432 URL"),
  intervalSec: z.number().int().min(30, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u2014 30 \u0441\u0435\u043A\u0443\u043D\u0434").max(86400),
  isActive: z.boolean().optional()
});
function parse(schema, value) {
  var _a, _b;
  const result = schema.safeParse(value);
  if (!result.success)
    throw createError({
      statusCode: 400,
      message: (_b = (_a = result.error.issues[0]) == null ? void 0 : _a.message) != null ? _b : "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
    });
  return result.data;
}
const historyQuerySchema = z.object({
  page: z.coerce.number().int().min(1).max(1e5).default(1),
  days: z.coerce.number().int().refine((n) => [1, 7, 30].includes(n), "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 1, 7 \u0438\u043B\u0438 30 \u0434\u043D\u0435\u0439").default(7)
});
const activitySchema = z.object({ isActive: z.boolean() });

const monitors_post = defineEventHandler(async (event) => {
  const data = parse(monitorSchema, await readBody(event));
  return createMonitor(data);
});

const monitors_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: monitors_post
}, Symbol.toStringTag, { value: 'Module' }));

const _id__delete = defineEventHandler(
  (event) => deleteMonitor(getRouterParam(event, "id"))
);

const _id__delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__delete
}, Symbol.toStringTag, { value: 'Module' }));

async function getMonitorHistory(id, page, days) {
  const monitor = await getMonitor(id);
  const now = /* @__PURE__ */ new Date();
  const since = new Date(now.getTime() - days * 864e5);
  const where = { monitorId: monitor.id, checkedAt: { gte: since, lte: now } };
  const pageSize = 10;
  const result = await prisma.$transaction(
    async (tx) => {
      const total = await tx.check.count({ where });
      const up = await tx.check.count({ where: { ...where, isUp: true } });
      const avg = await tx.check.aggregate({
        where,
        _avg: { responseMs: true }
      });
      const checks = await tx.check.findMany({
        where,
        orderBy: [{ checkedAt: "desc" }, { id: "desc" }],
        skip: (page - 1) * pageSize,
        take: pageSize
      });
      const notifications = await tx.notification.findMany({
        where: { monitorId: monitor.id, createdAt: { gte: since, lte: now } },
        orderBy: { createdAt: "desc" },
        take: 20
      });
      return {
        checks,
        notifications,
        total,
        uptime: uptimePercent(up, total),
        averageMs: avg._avg.responseMs
      };
    },
    { isolationLevel: "Serializable" }
  );
  return {
    monitor,
    ...result,
    page,
    pageSize,
    totalPages: Math.ceil(result.total / pageSize),
    since,
    until: now
  };
}

const _id__get = defineEventHandler((event) => {
  const { page, days } = parse(historyQuerySchema, getQuery$1(event));
  return getMonitorHistory(getRouterParam(event, "id"), page, days);
});

const _id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__patch = defineEventHandler(async (event) => {
  const { isActive } = parse(activitySchema, await readBody(event));
  return setMonitorActive(getRouterParam(event, "id"), isActive);
});

const _id__patch$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__patch
}, Symbol.toStringTag, { value: 'Module' }));

//#region src/runtime/utils/renderer/payload.ts
function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const payload = {
		"type": "application/json",
		"innerHTML": opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "",
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	payload.id = "__NUXT_DATA__";
	if (opts.src) payload["data-src"] = opts.src;
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, prefetchLinks, ...initial } = ssrContext.payload;
	const payload = {
		data,
		prerenderedAt
	};
	if (prefetchLinks?.length) payload.prefetchLinks = prefetchLinks;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

//#region src/runtime/handlers/renderer.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const PAYLOAD_BUILD_ID_PARAM = "_b";
const handler = defineRenderHandler((event) => {
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) throw createError({
		status: 404,
		statusText: "Page Not Found: /__nuxt_error",
		message: "Page Not Found: /__nuxt_error"
	});
	return renderRoute(event, ssrError);
});
async function renderRoute(event, ssrError) {
	const nitroApp = useNitroApp();
	const ssrContext = createSSRContext(event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = getRouteRules(event);
	if (routeOptions.ssr === false) ssrContext.noSSR = true;
	!ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const payloadURL = new URL(ssrContext.url, "http://localhost");
		const url = payloadURL.pathname.slice(0, -`/${PAYLOAD_FILENAME}`.length) || "/";
		payloadURL.searchParams.delete(PAYLOAD_BUILD_ID_PARAM);
		ssrContext.url = url + payloadURL.search;
		event._path = event.node.req.url = ssrContext.url;
		getPayloadCacheKey(ssrContext.url);
	}
	const renderer = await getRenderer(ssrContext);
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await nitroApp.hooks.callHook("render:route", renderRouteContext, { event });
	const _rendered = await (renderer.renderToString(ssrContext)).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	const link = [];
	for (const resource of Object.values(styles)) {
		if ("inline" in getQuery(resource.file)) continue;
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) ssrContext.head.push({ link });
	if (!NO_SCRIPTS) {
		const dependencyOptions = ssrContext["~lazyHydratedModules"]?.size ? { exclude: ssrContext["~lazyHydratedModules"] } : void 0;
		const excludeHrefs = new Set(link.map((l) => l.href));
		for (const id of ssrContext["~neverHydratedModules"] ?? []) {
			const file = renderer.rendererContext.manifest?.[id]?.file;
			if (file) excludeHrefs.add(renderer.rendererContext.buildAssetsURL(file));
		}
		const hints = [];
		for (const l of getPreloadLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
		for (const l of getPrefetchLinks(ssrContext, renderer.rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
		ssrContext.head.push({ link: hints });
		ssrContext.head.push({ script: renderPayloadJsonScript({
			ssrContext,
			data: stripInlineOnlyPayloadFields(ssrContext.payload)
		})   }, {
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) });
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function getPayloadCacheKey(url) {
	const { pathname, search } = new URL(url, "http://localhost");
	return (pathname === "/" ? "/" : pathname.replace(/\/$/, "")) + (search ? encodeURIComponent(search) : "") + ".json";
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function stripInlineOnlyPayloadFields(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
