import { $ as $fetch$1$2, a as appDiagnostics, s as sanitizeTag, u as useNuxtApp, b as asyncDataDefaults, f as fetchDefaults, p as prodReporters, d as docsBase, c as createError$1 } from '../virtual/entry.mjs';
import { defineProdDiagnostics } from 'nostics';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, reactive, computed, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, isRef, toValue, onServerPrefetch, useSSRContext, nextTick, toRef, queuePostFlushCb } from 'vue';
import { isPlainObject } from '@vue/shared';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import 'nostics/formatters/ansi';
import 'unhead/utils';
import '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@prisma/adapter-better-sqlite3';
import 'node:url';
import '@prisma/client-runtime-utils';
import 'node:async_hooks';
import 'node:os';
import 'node:dns/promises';
import 'node:net';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';

//#region src/index.ts
/**
* Compute the 64-bit FNV-1a hash of a string as two 32-bit lanes.
*
* This is the fast core: no BigInt, no allocations, plain `Math.imul`-free
* 32-bit arithmetic. Prefer {@link fnv1a64Hex} or {@link fnv1a64Base36} for a
* usable key; use this directly only when you want to avoid string formatting.
*
* The hash is computed over UTF-16 code units (`str.charCodeAt(i)`), not UTF-8
* bytes. For ASCII input this matches a canonical FNV-1a-64; for non-ASCII it
* does not. See the README for details.
*
* @param str - The string to hash.
* @returns The `{ high, low }` 32-bit lanes of the 64-bit hash.
*/
function fnv1a64(str) {
	const len = str.length;
	let i = 0;
	let t0 = 0;
	let v0 = 8997;
	let t1 = 0;
	let v1 = 33826;
	let t2 = 0;
	let v2 = 40164;
	let t3 = 0;
	let v3 = 52210;
	while (i < len) {
		v0 ^= str.charCodeAt(i++);
		t0 = v0 * 435;
		t1 = v1 * 435;
		t2 = v2 * 435;
		t3 = v3 * 435;
		t2 += v0 << 8;
		t3 += v1 << 8;
		t1 += t0 >>> 16;
		v0 = t0 & 65535;
		t2 += t1 >>> 16;
		v1 = t1 & 65535;
		v3 = t3 + (t2 >>> 16) & 65535;
		v2 = t2 & 65535;
	}
	return {
		high: (v3 << 16 | v2) >>> 0,
		low: (v1 << 16 | v0) >>> 0
	};
}
/**
* Compute the 64-bit FNV-1a hash of a string as a `bigint`.
*
* Ergonomic and comparable, at the cost of composing the two lanes into a
* `bigint`. For a compact string key, prefer {@link fnv1a64Base36}.
*
* @param str - The string to hash.
* @returns The 64-bit hash as an unsigned `bigint`.
*/
function fnv1a64BigInt(str) {
	const { high, low } = fnv1a64(str);
	return BigInt(high) << 32n | BigInt(low);
}
const hexDigits = "0123456789abcdef";
/**
* Every byte value rendered as its two hex digits, so a 32-bit lane formats in
* 4 lookups instead of `toString(16)` plus a `padStart`. Leading zeros are
* intrinsic to the table, which is what makes the padding free.
*/
Array.from({ length: 256 }, (_, i) => hexDigits.charAt(i >> 4) + hexDigits.charAt(i & 15));
/**
* Compute the 64-bit FNV-1a hash of a string as a base36 string.
*
* This is the shortest textual form (up to 13 characters) and is ideal for
* cache keys. The length varies with the value; it is not zero-padded. Equal
* inputs always produce identical strings.
*
* @param str - The string to hash.
* @returns A base36 string of the 64-bit hash.
*/
function fnv1a64Base36(str) {
	return fnv1a64BigInt(str).toString(36);
}

function walk(input, seen) {
	if (input === null) return "L";
	let out, i = 0, keys = input, tmp = typeof input;
	if (tmp !== "object") {
		if (tmp === "number") return input - input === 0 ? "n" + input : "L";
		if (tmp === "string") return "s" + input;
		if (tmp === "bigint") return "n" + input;
		if (tmp === "boolean") return input ? "T" : "F";
		return;
	}
	let is_arr = Array.isArray(input);
	if (!is_arr) {
		if (input instanceof Date) return "d" + +input;
		if (input instanceof RegExp) return "r" + input.source + input.flags;
	}
	tmp = seen.indexOf(input);
	if (~tmp) return "~" + (tmp + 1);
	if (typeof input.toJSON === "function" && !ArrayBuffer.isView(input)) {
		input = input.toJSON();
		if (input === null || typeof input !== "object") return walk(input, seen);
		tmp = seen.indexOf(input);
		if (~tmp) return "~" + (tmp + 1);
		is_arr = Array.isArray(input);
	}
	seen.push(keys);
	if (is_arr) {
		for (out = "a"; i < input.length; out += (tmp = walk(input[i++], seen)) === undefined ? "L" : tmp);
	} else if (input instanceof Set) {
		out = "e";
		for (let value of input) out += (tmp = walk(value, seen)) === undefined ? "L" : tmp;
	} else if (input instanceof Map) {
		keys = [...input.keys()];
		if (keys.length > 1) keys.sort();
		for (out = "o"; i < keys.length; i++) {
			if ((tmp = walk(input.get(keys[i]), seen)) !== undefined) out += keys[i] + tmp;
		}
	} else if (input[Symbol.toStringTag] === undefined || ArrayBuffer.isView(input)) {
		keys = Object.keys(input);
		if (keys.length > 1) keys.sort();
		for (out = "o"; i < keys.length; i++) {
			if ((tmp = walk(input[keys[i]], seen)) !== undefined) out += keys[i] + tmp;
		}
	} else {
		throw new Error("Unsupported value");
	}
	seen.pop();
	return out;
}
/**
* Canonicalize a value into a stable identity string. Two structurally-equal
* inputs return the same id, regardless of key order.
*
* @example
* ```ts
* identify({ a: 1, b: 2 }) === identify({ b: 2, a: 1 }); // true
* ```
*/
function identify(input) {
	return walk(input, []) ?? "U";
}

//#region node_modules/nuxt/dist/app/utils/hash.js
/**
* Hash an arbitrary value into a short, stable string key.
*
* Values are serialized to a canonical, locale-independent representation
* (equal structures hash equally regardless of key order or runtime locale),
* then digested with a fast non-cryptographic hash. This is what `useFetch` and
* `useAsyncData` use internally to derive their cache keys, so it is safe to use
* for the same purpose in your own code.
*
* The digest is non-cryptographic and must not be used for integrity checks.
*
* @since 4.5.0
*/
function hashKey(value) {
	return fnv1a64Base36(identify(value));
}
//#endregion
//#region node_modules/nuxt/dist/compiler/runtime/index.js
/**
* Define a factory for a function that should be registered for automatic key injection.
* @since 4.2.0
* @param factory
*/
function defineKeyedFunctionFactory(factory) {
	const placeholder = function() {
		throw appDiagnostics.NUXT_E1007({ name: factory.name });
	};
	return Object.defineProperty(placeholder, "__nuxt_factory", {
		enumerable: false,
		get: () => factory.factory
	});
}
//#endregion
//#region node_modules/nuxt/dist/app/diagnostics/data.js
/**
* E3xxx
* Data fetching (useFetch / useAsyncData) runtime diagnostics.
*/
var dataDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
//#endregion
//#region node_modules/nuxt/dist/app/utils/debounce-tick.js
/**
* Debounce an async function so that repeated calls within the same tick are
* collapsed into a single call (plus a trailing call if arguments arrived
* while the debounced call was still pending).
*
* Adapted from https://github.com/unjs/perfect-debounce with the timeout
* replaced by Vue's post-flush callback queue.
*/
function debounceTick(fn, options = {}) {
	let leadingValue;
	let active = false;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		const promise = _applyPromised(fn, _this, args);
		currentPromise = promise;
		promise.finally(() => {
			currentPromise = void 0;
			if (trailingArgs && !active) {
				const args = trailingArgs;
				trailingArgs = void 0;
				applyFn(_this, args);
			}
		});
		return promise;
	};
	return function(...args) {
		trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = options.leading && !active;
			if (!active) {
				active = true;
				queuePostFlushCb(() => {
					active = false;
					const flushArgs = trailingArgs ?? args;
					trailingArgs = void 0;
					const promise = options.leading ? leadingValue : applyFn(this, flushArgs);
					for (const _resolve of resolveList) _resolve(promise);
					resolveList = [];
				});
			}
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
defineComponent({
	name: "ServerPlaceholder",
	render() {
		return createElementBlock("div");
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/components/client-only.js
var clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
	name: "ClientOnly",
	inheritAttrs: false,
	props: [
		"fallback",
		"placeholder",
		"placeholderTag",
		"fallbackTag"
	],
	setup(props, { slots, attrs }) {
		const mounted = shallowRef(false);
		const vm = getCurrentInstance();
		if (vm) vm._nuxtClientOnly = true;
		provide(clientOnlySymbol, true);
		return () => {
			if (mounted.value) {
				const vnodes = slots.default?.();
				if (vnodes && vnodes.length === 1) return [cloneVNode(vnodes[0], attrs)];
				return vnodes;
			}
			const slot = slots.fallback || slots.placeholder;
			if (slot) return h(slot);
			const fallbackStr = props.fallback || props.placeholder || "";
			const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
			return createElementBlock(fallbackTag, attrs, fallbackStr);
		};
	}
});
//#endregion
//#region node_modules/nuxt/dist/app/composables/asyncData.js
var createUseAsyncData = defineKeyedFunctionFactory({
	name: "createUseAsyncData",
	factory(options = {}) {
		function useAsyncData(...args) {
			const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
			if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
			let [_key, _handler, opts = {}] = args;
			const key = isRef(_key) || typeof _key === "function" ? computed(() => toValue(_key)) : { value: _key };
			if (!key.value || typeof key.value !== "string") throw dataDiagnostics.NUXT_E3008();
			if (typeof _handler !== "function") throw dataDiagnostics.NUXT_E3009();
			const shouldFactoryOptionsOverride = typeof options === "function";
			const nuxtApp = useNuxtApp();
			const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
			if (!shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				if (opts[key] !== void 0) continue;
				opts[key] = factoryOptions[key];
			}
			opts.server ??= true;
			opts.default ??= getDefault;
			opts.getCachedData ??= getDefaultCachedData;
			opts.lazy ??= false;
			opts.immediate ??= true;
			opts.deep ??= asyncDataDefaults.deep;
			opts.dedupe ??= "cancel";
			opts.enabled ??= true;
			if (shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				opts[key] = factoryOptions[key];
			}
			nuxtApp._asyncData[key.value];
			function createInitialFetch() {
				const initialFetchOptions = {
					cause: "initial",
					dedupe: opts.dedupe
				};
				const existing = nuxtApp._asyncData[key.value];
				if (!existing?._init) {
					initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
					nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
					nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
				} else if (nuxtApp._asyncDataPromises[key.value]) initialFetchOptions.cachedData = existing._initialCachedData;
				return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
			}
			const initialFetch = createInitialFetch();
			const asyncData = nuxtApp._asyncData[key.value];
			asyncData._deps++;
			if (opts.server !== false && nuxtApp.payload.serverRendered && opts.immediate) {
				const promise = initialFetch();
				if (getCurrentInstance()) onServerPrefetch(() => promise);
				else nuxtApp.hook("app:created", async () => {
					await promise;
				});
			}
			const asyncReturn = {
				data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
				pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
				status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
				error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
				refresh: (...args) => {
					if (!nuxtApp._asyncData[key.value]?._init) return createInitialFetch()();
					return nuxtApp._asyncData[key.value].execute(...args);
				},
				execute: (...args) => asyncReturn.refresh(...args),
				clear: () => {
					const entry = nuxtApp._asyncData[key.value];
					if (entry?._abortController) try {
						entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
					} finally {
						entry._abortController = void 0;
					}
					clearNuxtDataByKey(nuxtApp, key.value);
				}
			};
			const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
			Object.assign(asyncDataPromise, asyncReturn);
			Object.defineProperties(asyncDataPromise, {
				then: {
					enumerable: true,
					value: asyncDataPromise.then.bind(asyncDataPromise)
				},
				catch: {
					enumerable: true,
					value: asyncDataPromise.catch.bind(asyncDataPromise)
				},
				finally: {
					enumerable: true,
					value: asyncDataPromise.finally.bind(asyncDataPromise)
				}
			});
			return asyncDataPromise;
		}
		return useAsyncData;
	}
});
var useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
	return computed({
		get() {
			return getter()?.value;
		},
		set(value) {
			const ref = getter();
			if (ref) ref.value = value;
		}
	});
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
	if (typeof keyOrFetcher === "string") return false;
	if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) return false;
	if (typeof keyOrFetcher === "function" && typeof fetcher === "function") return false;
	return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
	delete nuxtApp.payload.data[key];
	delete nuxtApp.payload._errors[key];
	if (nuxtApp._asyncData[key]) {
		nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
		nuxtApp._asyncData[key].error.value = void 0;
		nuxtApp._asyncData[key].status.value = "idle";
		nuxtApp._asyncData[key]._initialCachedData = void 0;
	}
	delete nuxtApp._asyncDataPromises[key];
}
function pick(obj, keys) {
	const newObj = {};
	for (const key of keys) newObj[key] = obj[key];
	return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
	nuxtApp.payload._errors[key] ??= void 0;
	const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
	const handler = _handler ;
	const _ref = options.deep ? ref : shallowRef;
	const hasCachedData = initialCachedData !== void 0;
	const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
		if (!keys || keys.includes(key)) await asyncData.execute({ cause: "refresh:hook" });
	});
	const asyncData = {
		data: _ref(hasCachedData ? initialCachedData : options.default()),
		pending: computed(() => asyncData.status.value === "pending"),
		error: toRef(nuxtApp.payload._errors, key),
		status: shallowRef("idle"),
		execute: (...args) => {
			const [_opts, newValue = void 0] = args;
			const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
			if (nuxtApp._asyncDataPromises[key]) {
				if ((opts.dedupe ?? options.dedupe) === "defer") return nuxtApp._asyncDataPromises[key];
			}
			{
				const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
				if (cachedData !== void 0) {
					nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
					asyncData.error.value = void 0;
					asyncData.status.value = "success";
					return Promise.resolve(cachedData);
				}
			}
			if (toValue(options.enabled) === false) return Promise.resolve(asyncData.data.value);
			if (asyncData._abortController) asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
			asyncData._abortController = new AbortController();
			asyncData.status.value = "pending";
			const cleanupController = new AbortController();
			const promise = new Promise((resolve, reject) => {
				try {
					const timeout = opts.timeout ?? options.timeout;
					const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
					if (mergedSignal.aborted) {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
						return;
					}
					mergedSignal.addEventListener("abort", () => {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
					}, {
						once: true,
						signal: cleanupController.signal
					});
					return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
				} catch (err) {
					reject(err);
				}
			}).then(async (_result) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return;
				let result = _result;
				if (options.transform) result = await options.transform(_result);
				if (options.pick) result = pick(result, options.pick);
				nuxtApp.payload.data[key] = result;
				asyncData.data.value = result;
				asyncData.error.value = void 0;
				asyncData.status.value = "success";
			}).catch((error) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return nuxtApp._asyncDataPromises[key];
				if (asyncData._abortController?.signal.aborted) return nuxtApp._asyncDataPromises[key];
				if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
					asyncData.status.value = "idle";
					return nuxtApp._asyncDataPromises[key];
				}
				asyncData.error.value = createError$1(error);
				asyncData.data.value = unref(options.default());
				asyncData.status.value = "error";
			}).finally(() => {
				cleanupController.abort();
				if (nuxtApp._asyncDataPromises[key] === promise) delete nuxtApp._asyncDataPromises[key];
			});
			nuxtApp._asyncDataPromises[key] = promise;
			return nuxtApp._asyncDataPromises[key];
		},
		_execute: debounceTick((...args) => asyncData.execute(...args)),
		_default: options.default,
		_deps: 0,
		_init: true,
		_hash: void 0,
		_off: () => {
			unsubRefreshAsyncData();
			if (nuxtApp._asyncData[key]?._init) nuxtApp._asyncData[key]._init = false;
			if (nuxtApp._asyncDataPromises[key]) {
				asyncData._abortController?.abort(new DOMException("AsyncData request cancelled by unmount", "AbortError"));
				delete nuxtApp._asyncDataPromises[key];
				if (asyncData.status.value === "pending") asyncData.status.value = "idle";
			}
			if (!hasCustomGetCachedData) nextTick(() => {
				if (!nuxtApp._asyncData[key]?._init) {
					clearNuxtDataByKey(nuxtApp, key);
					asyncData.execute = () => Promise.resolve();
				}
			});
		}
	};
	return asyncData;
}
var getDefault = () => void 0;
var getDefaultCachedData = (key, nuxtApp, ctx) => {
	if (nuxtApp.isHydrating) return nuxtApp.payload.data[key];
	if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") return nuxtApp.static.data[key];
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
	const list = signals.filter((s) => !!s);
	if (typeof timeout === "number" && timeout >= 0) {
		const timeoutSignal = AbortSignal.timeout?.(timeout);
		if (timeoutSignal) list.push(timeoutSignal);
	}
	if (AbortSignal.any) return AbortSignal.any(list);
	const controller = new AbortController();
	for (const sig of list) if (sig.aborted) {
		const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
		return controller.signal;
	}
	const onAbort = () => {
		const reason = list.find((s) => s.aborted)?.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
	};
	for (const sig of list) sig.addEventListener?.("abort", onAbort, {
		once: true,
		signal: cleanupSignal
	});
	return controller.signal;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/ssr.js
var $fetch$1$1 = $fetch$1$2;
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
/** @since 3.2.0 */
function useRequestFetch() {
	return useRequestEvent()?.$fetch || $fetch$1$1;
}
//#endregion
//#region node_modules/nuxt/dist/app/composables/fetch.js
var $fetch$1 = $fetch$1$2;
var MAYBE_REF_OR_GETTER_OPTION_KEYS = [
	"method",
	"baseURL",
	"query",
	"params",
	"body",
	"headers"
];
function generateOptionSegments(opts) {
	const segments = [toValue(opts.method)?.toUpperCase() || "GET", toValue(opts.baseURL)];
	for (const _obj of [opts.query || opts.params]) {
		const obj = toValue(_obj);
		if (!obj) continue;
		const unwrapped = {};
		for (const [key, value] of Object.entries(obj)) unwrapped[toValue(key)] = toValue(value);
		segments.push(unwrapped);
	}
	if (opts.body) {
		const value = toValue(opts.body);
		if (!value) segments.push(hashKey(value));
		else if (value instanceof ArrayBuffer) segments.push(hashKey(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
		else if (value instanceof FormData) {
			const entries = [];
			for (const entry of value.entries()) {
				const [key, val] = entry;
				entries.push([key, val instanceof File ? `${val.name}:${val.size}:${val.lastModified}` : val]);
			}
			segments.push(hashKey(entries));
		} else if (isPlainObject(value)) segments.push(hashKey(reactive(value)));
		else try {
			segments.push(hashKey(value));
		} catch {
			dataDiagnostics.NUXT_E3002({ cause: value });
		}
	}
	return segments;
}
/**
* A factory function to create a custom `useFetch` composable with pre-defined default options.
* @since 4.2.0
*/
var createUseFetch = defineKeyedFunctionFactory({
	name: "createUseFetch",
	factory(options = {}) {
		function useFetch(request, arg1, arg2) {
			const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
			const factoryOptions = typeof options === "function" ? options(opts) : options;
			const { server, lazy, default: defaultFn, transform, pick, watch: watchSources, immediate, getCachedData, deep, dedupe, timeout, enabled, ...fetchOptions } = {
				...typeof options === "function" ? {} : factoryOptions,
				...opts,
				...typeof options === "function" ? factoryOptions : {}
			};
			const _request = computed(() => toValue(request));
			const key = computed(() => toValue(fetchOptions.key) || "$f" + hashKey([
				autoKey,
				typeof _request.value === "string" ? _request.value : "",
				...generateOptionSegments(fetchOptions)
			]));
			if (!fetchOptions.baseURL && typeof _request.value === "string" && _request.value[0] === "/" && _request.value[1] === "/") throw dataDiagnostics.NUXT_E3001({ url: _request.value });
			const _fetchOptions = reactive({
				...fetchDefaults,
				...fetchOptions,
				cache: typeof fetchOptions.cache === "boolean" ? void 0 : fetchOptions.cache
			});
			const _asyncDataOptions = {
				server,
				lazy,
				default: defaultFn,
				transform,
				pick,
				immediate,
				getCachedData,
				deep,
				dedupe,
				timeout,
				enabled,
				watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
			};
			if (watchSources === false) _asyncDataOptions._keyTriggersExecute = false;
			return useAsyncData(key, (_, { signal }) => {
				let _$fetch = fetchOptions.$fetch || $fetch$1;
				if (!fetchOptions.$fetch) {
					if (typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(fetchOptions.baseURL) || toValue(fetchOptions.baseURL)[0] === "/")) _$fetch = useRequestFetch();
				}
				const resolvedOptions = {
					signal,
					..._fetchOptions
				};
				for (const key of MAYBE_REF_OR_GETTER_OPTION_KEYS) if (typeof resolvedOptions[key] === "function") resolvedOptions[key] = toValue(resolvedOptions[key]);
				return _$fetch(_request.value, resolvedOptions);
			}, _asyncDataOptions);
		}
		return useFetch;
	}
});
var useFetch = createUseFetch.__nuxt_factory();
createUseFetch.__nuxt_factory({
	lazy: true,
	_functionName: "useLazyFetch"
});
//#endregion
//#region app/composables/errorMessage.ts
function errorMessage(error) {
	const e = error;
	return e.data?.message || e.data?.statusMessage || "Не удалось выполнить запрос. Попробуйте ещё раз.";
}
//#endregion
//#region app/composables/useMonitors.ts
function useMonitors() {
	const request = useFetch("/api/monitors", { default: () => [] }, "$9XFshKrn7W");
	const { data: monitors, refresh, error: loadError } = request;
	const form = reactive({
		name: "",
		url: "",
		intervalSec: 60
	});
	const busy = ref(false);
	const error = ref("");
	const up = computed(() => monitors.value.filter((m) => m.isActive && m.lastStatus === "UP").length);
	const down = computed(() => monitors.value.filter((m) => m.isActive && m.lastStatus === "DOWN").length);
	async function add() {
		busy.value = true;
		error.value = "";
		try {
			await $fetch$1$2("/api/monitors", {
				method: "POST",
				body: form
			});
			form.name = "";
			form.url = "";
			await refresh();
		} catch (e) {
			error.value = errorMessage(e);
		} finally {
			busy.value = false;
		}
	}
	async function toggle(id, isActive) {
		busy.value = true;
		error.value = "";
		try {
			await $fetch$1$2(`/api/monitors/${id}`, {
				method: "PATCH",
				body: { isActive: !isActive }
			});
			await refresh();
		} catch (e) {
			error.value = errorMessage(e);
		} finally {
			busy.value = false;
		}
	}
	return {
		ready: request,
		monitors,
		refresh,
		loadError,
		form,
		busy,
		error,
		up,
		down,
		add,
		toggle
	};
}
//#endregion
//#region app/components/monitors/MonitorForm.vue?vue&type=script&setup=true&lang.ts
var MonitorForm_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MonitorForm",
	__ssrInlineRender: true,
	props: {
		form: {},
		busy: { type: Boolean },
		error: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "panel" }, _attrs))}><h2>Добавить сайт</h2><form class="monitor-form"><label>Название<input${ssrRenderAttr("value", __props.form.name)} required maxlength="100" placeholder="Мой сайт"></label><label>URL<input${ssrRenderAttr("value", __props.form.url)} type="url" required maxlength="2048" placeholder="https://example.com"></label><label>Интервал<select><option${ssrRenderAttr("value", 30)}${ssrIncludeBooleanAttr(Array.isArray(__props.form.intervalSec) ? ssrLooseContain(__props.form.intervalSec, 30) : ssrLooseEqual(__props.form.intervalSec, 30)) ? " selected" : ""}>30 секунд</option><option${ssrRenderAttr("value", 60)}${ssrIncludeBooleanAttr(Array.isArray(__props.form.intervalSec) ? ssrLooseContain(__props.form.intervalSec, 60) : ssrLooseEqual(__props.form.intervalSec, 60)) ? " selected" : ""}>1 минута</option><option${ssrRenderAttr("value", 300)}${ssrIncludeBooleanAttr(Array.isArray(__props.form.intervalSec) ? ssrLooseContain(__props.form.intervalSec, 300) : ssrLooseEqual(__props.form.intervalSec, 300)) ? " selected" : ""}>5 минут</option><option${ssrRenderAttr("value", 900)}${ssrIncludeBooleanAttr(Array.isArray(__props.form.intervalSec) ? ssrLooseContain(__props.form.intervalSec, 900) : ssrLooseEqual(__props.form.intervalSec, 900)) ? " selected" : ""}>15 минут</option><option${ssrRenderAttr("value", 3600)}${ssrIncludeBooleanAttr(Array.isArray(__props.form.intervalSec) ? ssrLooseContain(__props.form.intervalSec, 3600) : ssrLooseEqual(__props.form.intervalSec, 3600)) ? " selected" : ""}>1 час</option></select></label><button class="button primary"${ssrIncludeBooleanAttr(__props.busy) ? " disabled" : ""}>${ssrInterpolate(__props.busy ? "Подождите…" : "+ Добавить")}</button></form><p class="hint"> Первая проверка запускается автоматически. Только публичные HTTP(S) сайты. </p>`);
			if (__props.error) _push(`<p class="error" role="alert">${ssrInterpolate(__props.error)}</p>`);
			else _push(`<!---->`);
			_push(`</section>`);
		};
	}
});
//#endregion
//#region app/components/monitors/MonitorForm.vue
var _sfc_setup$6 = MonitorForm_vue_vue_type_script_setup_true_lang_default.setup;
MonitorForm_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monitors/MonitorForm.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var MonitorForm_default = Object.assign(MonitorForm_vue_vue_type_script_setup_true_lang_default, { __name: "MonitorsMonitorForm" });
//#endregion
//#region app/components/common/StatusBadge.vue?vue&type=script&setup=true&lang.ts
var StatusBadge_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "StatusBadge",
	__ssrInlineRender: true,
	props: {
		status: {},
		active: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const label = computed(() => props.active === false ? "На паузе" : {
			UP: "Доступен",
			DOWN: "Недоступен",
			UNKNOWN: "Ожидает проверки"
		}[props.status] ?? "Нет данных");
		const tone = computed(() => props.active === false ? "paused" : props.status.toLowerCase());
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${ssrRenderAttrs(mergeProps({ class: ["badge", unref(tone)] }, _attrs))}><span class="status-dot"></span>${ssrInterpolate(unref(label))}</span>`);
		};
	}
});
//#endregion
//#region app/components/common/StatusBadge.vue
var _sfc_setup$5 = StatusBadge_vue_vue_type_script_setup_true_lang_default.setup;
StatusBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/StatusBadge.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var StatusBadge_default = Object.assign(StatusBadge_vue_vue_type_script_setup_true_lang_default, { __name: "CommonStatusBadge" });
//#endregion
//#region app/components/monitors/MonitorList.vue?vue&type=script&setup=true&lang.ts
var MonitorList_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MonitorList",
	__ssrInlineRender: true,
	props: {
		monitors: {},
		selectedId: {},
		busy: { type: Boolean },
		loadError: {}
	},
	emits: [
		"select",
		"toggle",
		"refresh"
	],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "panel" }, _attrs))}><div class="section-heading"><h2>Ваши сайты</h2></div>`);
			if (__props.loadError) _push(`<p class="error" role="alert">${ssrInterpolate(__props.loadError)} <button class="text-button">Повторить</button></p>`);
			else _push(`<!---->`);
			if (!__props.monitors.length) _push(`<div class="empty"> Пока нет мониторов. Добавьте первый сайт с помощью формы выше. </div>`);
			else {
				_push(`<div class="table-scroll"><table><thead><tr><th>Сайт</th><th>Статус</th><th>Отклик</th><th>Действия</th></tr></thead><tbody><!--[-->`);
				ssrRenderList(__props.monitors, (m) => {
					_push(`<tr class="${ssrRenderClass({ selected: __props.selectedId === m.id })}"><td><button class="site-name">${ssrInterpolate(m.name)}</button><span class="site-url">${ssrInterpolate(m.url)}</span></td><td>`);
					_push(ssrRenderComponent(StatusBadge_default, {
						status: m.lastStatus,
						active: m.isActive
					}, null, _parent));
					_push(`</td><td class="nowrap">${ssrInterpolate(m.checks[0]?.responseMs != null ? `${m.checks[0].responseMs} мс` : "—")}</td><td><div class="actions"><button class="button small"> История</button><button class="button small"${ssrIncludeBooleanAttr(__props.busy) ? " disabled" : ""}>${ssrInterpolate(m.isActive ? "Пауза" : "Продолжить")}</button></div></td></tr>`);
				});
				_push(`<!--]--></tbody></table></div>`);
			}
			_push(`</section>`);
		};
	}
});
//#endregion
//#region app/components/monitors/MonitorList.vue
var _sfc_setup$4 = MonitorList_vue_vue_type_script_setup_true_lang_default.setup;
MonitorList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monitors/MonitorList.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var MonitorList_default = Object.assign(MonitorList_vue_vue_type_script_setup_true_lang_default, { __name: "MonitorsMonitorList" });
//#endregion
//#region app/composables/useMonitorDetails.ts
function useMonitorDetails(id) {
	const days = ref(7);
	const page = ref(1);
	const request = useFetch(`/api/monitors/${id}`, { query: {
		days,
		page
	} }, "$SKz1GtzHWW");
	const { data, refresh, error: loadError } = request;
	const deleting = ref(false);
	const busy = ref(false);
	const error = ref("");
	async function remove() {
		busy.value = true;
		error.value = "";
		try {
			await $fetch$1$2(`/api/monitors/${id}`, { method: "DELETE" });
			return true;
		} catch (e) {
			error.value = errorMessage(e);
		} finally {
			busy.value = false;
		}
	}
	return {
		ready: request,
		data,
		refresh,
		loadError,
		days,
		page,
		deleting,
		busy,
		error,
		remove
	};
}
//#endregion
//#region app/utils/format.ts
function formatDate(value) {
	return new Date(value).toLocaleString("ru-RU", { timeZone: "UTC" });
}
function formatSize(value) {
	return value === null ? "—" : `${value} Б`;
}
//#endregion
//#region app/components/monitors/CheckHistory.vue?vue&type=script&setup=true&lang.ts
var CheckHistory_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "CheckHistory",
	__ssrInlineRender: true,
	props: {
		checks: {},
		page: {},
		totalPages: {}
	},
	emits: ["page"],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div class="table-scroll"><table><thead><tr><th>Дата и время</th><th>Результат</th><th>HTTP</th><th>Отклик</th><th>Размер</th><th>Ошибка</th></tr></thead><tbody><!--[-->`);
			ssrRenderList(__props.checks, (check) => {
				_push(`<tr><td class="nowrap">${ssrInterpolate(unref(formatDate)(check.checkedAt))}</td><td>`);
				_push(ssrRenderComponent(StatusBadge_default, { status: check.isUp ? "UP" : "DOWN" }, null, _parent));
				_push(`</td><td>${ssrInterpolate(check.statusCode ?? "—")}</td><td class="nowrap">${ssrInterpolate(check.responseMs === null ? "—" : `${check.responseMs} мс`)}</td><td class="nowrap">${ssrInterpolate(unref(formatSize)(check.responseSize))}</td><td class="error-cell">${ssrInterpolate(check.error || "—")}</td></tr>`);
			});
			_push(`<!--]-->`);
			if (!__props.checks.length) _push(`<tr><td colspan="6" class="empty">${ssrInterpolate(__props.page > 1 ? "Здесь больше нет записей. Вернитесь на предыдущую страницу." : "Нет проверок за выбранный период.")}</td></tr>`);
			else _push(`<!---->`);
			_push(`</tbody></table></div><div class="section-heading pagination"><span class="hint">Страница ${ssrInterpolate(__props.page)} из ${ssrInterpolate(__props.totalPages || 1)}</span><div class="actions"><button class="button small"${ssrIncludeBooleanAttr(__props.page <= 1) ? " disabled" : ""}> ← Назад</button><button class="button small"${ssrIncludeBooleanAttr(__props.page >= __props.totalPages) ? " disabled" : ""}> Далее → </button></div></div><!--]-->`);
		};
	}
});
//#endregion
//#region app/components/monitors/CheckHistory.vue
var _sfc_setup$3 = CheckHistory_vue_vue_type_script_setup_true_lang_default.setup;
CheckHistory_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monitors/CheckHistory.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var CheckHistory_default = Object.assign(CheckHistory_vue_vue_type_script_setup_true_lang_default, { __name: "MonitorsCheckHistory" });
//#endregion
//#region app/components/monitors/MonitorEvents.vue?vue&type=script&setup=true&lang.ts
var MonitorEvents_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MonitorEvents",
	__ssrInlineRender: true,
	props: { notifications: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><h3>Изменения статуса</h3><p class="hint"> Последние 20 событий за выбранный период. </p>`);
			if (!__props.notifications.length) _push(`<p class="muted"> Событий пока нет. Первая проверка задаёт начальное состояние. </p>`);
			else _push(`<!---->`);
			_push(`<!--[-->`);
			ssrRenderList(__props.notifications, (n) => {
				_push(`<div class="event-row"><span class="${ssrRenderClass(n.event === "UP" ? "green-text" : "red-text")}">${ssrInterpolate(n.event === "UP" ? "↗ Сайт снова доступен" : "↘ Сайт недоступен")}</span><time>${ssrInterpolate(unref(formatDate)(n.createdAt))}</time></div>`);
			});
			_push(`<!--]--></div>`);
		};
	}
});
//#endregion
//#region app/components/monitors/MonitorEvents.vue
var _sfc_setup$2 = MonitorEvents_vue_vue_type_script_setup_true_lang_default.setup;
MonitorEvents_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monitors/MonitorEvents.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var MonitorEvents_default = Object.assign(MonitorEvents_vue_vue_type_script_setup_true_lang_default, { __name: "MonitorsMonitorEvents" });
//#endregion
//#region app/components/monitors/MonitorDetails.vue?vue&type=script&setup=true&lang.ts
var MonitorDetails_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "MonitorDetails",
	__ssrInlineRender: true,
	props: { id: {} },
	emits: ["deleted", "close"],
	async setup(__props, { emit: __emit }) {
		let __temp, __restore;
		const { ready, data, loadError, days, page, deleting, busy, error} = useMonitorDetails(__props.id);
		[__temp, __restore] = withAsyncContext(() => ready), await __temp, __restore();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "panel details" }, _attrs))}>`);
			if (unref(loadError)) _push(`<p class="error" role="alert">${ssrInterpolate(("errorMessage" in _ctx ? _ctx.errorMessage : unref(errorMessage))(unref(loadError)))} <button class="text-button">Повторить</button></p>`);
			else _push(`<!---->`);
			if (unref(data)) {
				_push(`<!--[--><div class="section-heading"><div><span class="eyebrow">ИСТОРИЯ МОНИТОРА</span><h2>${ssrInterpolate(unref(data).monitor.name)}</h2><span class="site-url">${ssrInterpolate(unref(data).monitor.url)}</span></div><button class="button small">Закрыть</button></div><div class="section-heading">`);
				_push(ssrRenderComponent(StatusBadge_default, {
					status: unref(data).monitor.lastStatus,
					active: unref(data).monitor.isActive
				}, null, _parent));
				_push(`<label class="period-label">Период<select><option${ssrRenderAttr("value", 1)}${ssrIncludeBooleanAttr(Array.isArray(unref(days)) ? ssrLooseContain(unref(days), 1) : ssrLooseEqual(unref(days), 1)) ? " selected" : ""}>24 часа</option><option${ssrRenderAttr("value", 7)}${ssrIncludeBooleanAttr(Array.isArray(unref(days)) ? ssrLooseContain(unref(days), 7) : ssrLooseEqual(unref(days), 7)) ? " selected" : ""}>7 дней</option><option${ssrRenderAttr("value", 30)}${ssrIncludeBooleanAttr(Array.isArray(unref(days)) ? ssrLooseContain(unref(days), 30) : ssrLooseEqual(unref(days), 30)) ? " selected" : ""}>30 дней</option></select></label></div><div class="stats-grid"><div class="stat"><span>Аптайм</span><strong class="green-text">${ssrInterpolate(unref(data).uptime === null ? "—" : `${unref(data).uptime}%`)}</strong><small>Доля успешных проверок</small></div><div class="stat"><span>Средний отклик</span><strong>${ssrInterpolate(unref(data).averageMs === null ? "—" : `${Math.round(unref(data).averageMs)} мс`)}</strong><small>За выбранный период</small></div><div class="stat"><span>Проверок</span><strong>${ssrInterpolate(unref(data).total)}</strong><small>Интервал: ${ssrInterpolate(unref(data).monitor.intervalSec / 60)} мин</small></div></div><p class="hint"> Все даты — UTC. Аптайм: успешные проверки / все проверки × 100%. </p>`);
				_push(ssrRenderComponent(CheckHistory_default, {
					checks: unref(data).checks,
					page: unref(page),
					"total-pages": unref(data).totalPages,
					onPage: ($event) => page.value = $event
				}, null, _parent));
				_push(ssrRenderComponent(MonitorEvents_default, { notifications: unref(data).notifications }, null, _parent));
				_push(`<div class="delete-area"><button class="button danger small"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}> Удалить монитор </button>`);
				if (unref(deleting)) _push(`<div><p>Удалить сайт и всю его историю? Отменить это действие нельзя.</p><div class="actions"><button class="button danger"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}> Да, удалить</button><button class="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""}> Отмена </button></div></div>`);
				else _push(`<!---->`);
				_push(`</div>`);
				if (unref(error)) _push(`<p class="error" role="alert">${ssrInterpolate(unref(error))}</p>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			} else _push(`<!---->`);
			_push(`</section>`);
		};
	}
});
//#endregion
//#region app/components/monitors/MonitorDetails.vue
var _sfc_setup$1 = MonitorDetails_vue_vue_type_script_setup_true_lang_default.setup;
MonitorDetails_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monitors/MonitorDetails.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MonitorDetails_default = Object.assign(MonitorDetails_vue_vue_type_script_setup_true_lang_default, { __name: "MonitorsMonitorDetails" });
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { ready, monitors, refresh, loadError, form, busy, error, up, down, add, toggle } = useMonitors();
		[__temp, __restore] = withAsyncContext(() => ready), await __temp, __restore();
		const selectedId = ref("");
		async function deleted() {
			selectedId.value = "";
			await refresh();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "container main" }, _attrs))}><div class="page-heading"><span class="eyebrow">МОНИТОРИНГ САЙТОВ</span><h1>Всё ли работает?</h1><p class="muted"> Добавьте сайт — мы сохраним результаты проверок и изменения статуса. </p></div><div class="stats-grid"><div class="stat"><span>Всего сайтов</span><strong>${ssrInterpolate(unref(monitors).length)}</strong></div><div class="stat"><span>Доступны</span><strong class="green-text">${ssrInterpolate(unref(up))}</strong></div><div class="stat"><span>Недоступны</span><strong class="red-text">${ssrInterpolate(unref(down))}</strong></div></div>`);
			_push(ssrRenderComponent(MonitorForm_default, {
				form: unref(form),
				busy: unref(busy),
				error: unref(error),
				onSubmit: unref(add)
			}, null, _parent));
			_push(ssrRenderComponent(MonitorList_default, {
				monitors: unref(monitors),
				"selected-id": unref(selectedId),
				busy: unref(busy),
				"load-error": unref(loadError) ? ("errorMessage" in _ctx ? _ctx.errorMessage : unref(errorMessage))(unref(loadError)) : "",
				onSelect: ($event) => selectedId.value = $event,
				onToggle: unref(toggle),
				onRefresh: ($event) => unref(refresh)()
			}, null, _parent));
			if (unref(selectedId)) _push(ssrRenderComponent(MonitorDetails_default, {
				id: unref(selectedId),
				key: unref(selectedId),
				onDeleted: deleted,
				onClose: ($event) => selectedId.value = ""
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-RRiq-wIe.mjs.map
