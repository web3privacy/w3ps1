import { c as buffer$1, i as inherits_browserExports, r as require$$1$1, e as commonjsGlobal, f as bnExports, h as getAugmentedNamespace, j as getDefaultExportFromCjs } from "./_page-88d93b16.js";
import { e as eventsExports, t as tslibExports$1 } from "./tslib-63f898a0.js";
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e2 = m2[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var dist$2 = {};
var CoinbaseWalletSDK$1 = {};
var walletLogo$1 = {};
Object.defineProperty(walletLogo$1, "__esModule", { value: true });
walletLogo$1.walletLogo = void 0;
const walletLogo = (type, width) => {
  let height;
  switch (type) {
    case "standard":
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      height = width;
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      height = (0.1 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      height = (0.25 * width).toFixed(2);
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      height = width;
      return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
walletLogo$1.walletLogo = walletLogo;
var ScopedLocalStorage$1 = {};
Object.defineProperty(ScopedLocalStorage$1, "__esModule", { value: true });
ScopedLocalStorage$1.ScopedLocalStorage = void 0;
class ScopedLocalStorage {
  constructor(scope) {
    this.scope = scope;
  }
  setItem(key, value) {
    localStorage.setItem(this.scopedKey(key), value);
  }
  getItem(key) {
    return localStorage.getItem(this.scopedKey(key));
  }
  removeItem(key) {
    localStorage.removeItem(this.scopedKey(key));
  }
  clear() {
    const prefix = this.scopedKey("");
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (typeof key === "string" && key.startsWith(prefix)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }
  scopedKey(key) {
    return `${this.scope}:${key}`;
  }
}
ScopedLocalStorage$1.ScopedLocalStorage = ScopedLocalStorage;
var CoinbaseWalletProvider$1 = {};
var safeEventEmitter$1 = {};
Object.defineProperty(safeEventEmitter$1, "__esModule", { value: true });
const events_1 = eventsExports;
function safeApply$1(handler, context, args) {
  try {
    Reflect.apply(handler, context, args);
  } catch (err) {
    setTimeout(() => {
      throw err;
    });
  }
}
function arrayClone$1(arr2) {
  const n2 = arr2.length;
  const copy = new Array(n2);
  for (let i = 0; i < n2; i += 1) {
    copy[i] = arr2[i];
  }
  return copy;
}
let SafeEventEmitter$4 = class SafeEventEmitter extends events_1.EventEmitter {
  emit(type, ...args) {
    let doError = type === "error";
    const events = this._events;
    if (events !== void 0) {
      doError = doError && events.error === void 0;
    } else if (!doError) {
      return false;
    }
    if (doError) {
      let er;
      if (args.length > 0) {
        [er] = args;
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
      err.context = er;
      throw err;
    }
    const handler = events[type];
    if (handler === void 0) {
      return false;
    }
    if (typeof handler === "function") {
      safeApply$1(handler, this, args);
    } else {
      const len = handler.length;
      const listeners = arrayClone$1(handler);
      for (let i = 0; i < len; i += 1) {
        safeApply$1(listeners[i], this, args);
      }
    }
    return true;
  }
};
safeEventEmitter$1.default = SafeEventEmitter$4;
var dist$1 = {};
var classes = {};
var fastSafeStringify = stringify$2;
stringify$2.default = stringify$2;
stringify$2.stable = deterministicStringify;
stringify$2.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = "[...]";
var CIRCULAR_REPLACE_NODE = "[Circular]";
var arr = [];
var replacerStack = [];
function defaultOptions() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function stringify$2(obj, replacer, spacer, options) {
  if (typeof options === "undefined") {
    options = defaultOptions();
  }
  decirc(obj, "", 0, [], void 0, 0, options);
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer);
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    }
  } catch (_2) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res;
}
function setReplace(replace2, val, k2, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k2);
  if (propertyDescriptor.get !== void 0) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k2, { value: replace2 });
      arr.push([parent, k2, val, propertyDescriptor]);
    } else {
      replacerStack.push([val, k2, replace2]);
    }
  } else {
    parent[k2] = replace2;
    arr.push([parent, k2, val]);
  }
}
function decirc(val, k2, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (typeof val === "object" && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
        return;
      }
    }
    if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
      return;
    }
    if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
      return;
    }
    stack.push(val);
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      var keys = Object.keys(val);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, i, stack, val, depth, options);
      }
    }
    stack.pop();
  }
}
function compareFunction(a2, b2) {
  if (a2 < b2) {
    return -1;
  }
  if (a2 > b2) {
    return 1;
  }
  return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
  if (typeof options === "undefined") {
    options = defaultOptions();
  }
  var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
  var res;
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer);
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    }
  } catch (_2) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop();
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3]);
      } else {
        part[0][part[1]] = part[2];
      }
    }
  }
  return res;
}
function deterministicDecirc(val, k2, edgeIndex, stack, parent, depth, options) {
  depth += 1;
  var i;
  if (typeof val === "object" && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k2, parent);
        return;
      }
    }
    try {
      if (typeof val.toJSON === "function") {
        return;
      }
    } catch (_2) {
      return;
    }
    if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
      return;
    }
    if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
      setReplace(LIMIT_REPLACE_NODE, val, k2, parent);
      return;
    }
    stack.push(val);
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options);
      }
    } else {
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, i, stack, val, depth, options);
        tmp[key] = val[key];
      }
      if (typeof parent !== "undefined") {
        arr.push([parent, k2, val]);
        parent[k2] = tmp;
      } else {
        return tmp;
      }
    }
    stack.pop();
  }
}
function replaceGetterValues(replacer) {
  replacer = typeof replacer !== "undefined" ? replacer : function(k2, v2) {
    return v2;
  };
  return function(key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];
        if (part[1] === key && part[0] === val) {
          val = part[2];
          replacerStack.splice(i, 1);
          break;
        }
      }
    }
    return replacer.call(this, key, val);
  };
}
Object.defineProperty(classes, "__esModule", { value: true });
classes.EthereumProviderError = classes.EthereumRpcError = void 0;
const fast_safe_stringify_1 = fastSafeStringify;
class EthereumRpcError extends Error {
  constructor(code, message, data) {
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== "string") {
      throw new Error('"message" must be a nonempty string.');
    }
    super(message);
    this.code = code;
    if (data !== void 0) {
      this.data = data;
    }
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const serialized = {
      code: this.code,
      message: this.message
    };
    if (this.data !== void 0) {
      serialized.data = this.data;
    }
    if (this.stack) {
      serialized.stack = this.stack;
    }
    return serialized;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
  }
}
classes.EthereumRpcError = EthereumRpcError;
class EthereumProviderError extends EthereumRpcError {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(code, message, data) {
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    super(code, message, data);
  }
}
classes.EthereumProviderError = EthereumProviderError;
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1e3 && code <= 4999;
}
function stringifyReplacer(_2, value) {
  if (value === "[Circular]") {
    return void 0;
  }
  return value;
}
var utils$3 = {};
var errorConstants = {};
Object.defineProperty(errorConstants, "__esModule", { value: true });
errorConstants.errorValues = errorConstants.errorCodes = void 0;
errorConstants.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
errorConstants.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  "4001": {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  "4100": {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  "4900": {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  "4901": {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.serializeError = exports2.isValidCode = exports2.getMessageFromCode = exports2.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const error_constants_12 = errorConstants;
  const classes_12 = classes;
  const FALLBACK_ERROR_CODE = error_constants_12.errorCodes.rpc.internal;
  const FALLBACK_MESSAGE = "Unspecified error message. This is a bug, please report it.";
  const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE)
  };
  exports2.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
      const codeString = code.toString();
      if (hasKey(error_constants_12.errorValues, codeString)) {
        return error_constants_12.errorValues[codeString].message;
      }
      if (isJsonRpcServerError(code)) {
        return exports2.JSON_RPC_SERVER_ERROR_MESSAGE;
      }
    }
    return fallbackMessage;
  }
  exports2.getMessageFromCode = getMessageFromCode;
  function isValidCode(code) {
    if (!Number.isInteger(code)) {
      return false;
    }
    const codeString = code.toString();
    if (error_constants_12.errorValues[codeString]) {
      return true;
    }
    if (isJsonRpcServerError(code)) {
      return true;
    }
    return false;
  }
  exports2.isValidCode = isValidCode;
  function serializeError(error, { fallbackError = FALLBACK_ERROR, shouldIncludeStack = false } = {}) {
    var _a, _b;
    if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== "string") {
      throw new Error("Must provide fallback error with integer number code and string message.");
    }
    if (error instanceof classes_12.EthereumRpcError) {
      return error.serialize();
    }
    const serialized = {};
    if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
      const _error = error;
      serialized.code = _error.code;
      if (_error.message && typeof _error.message === "string") {
        serialized.message = _error.message;
        if (hasKey(_error, "data")) {
          serialized.data = _error.data;
        }
      } else {
        serialized.message = getMessageFromCode(serialized.code);
        serialized.data = { originalError: assignOriginalError(error) };
      }
    } else {
      serialized.code = fallbackError.code;
      const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
      serialized.message = message && typeof message === "string" ? message : fallbackError.message;
      serialized.data = { originalError: assignOriginalError(error) };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === "string") {
      serialized.stack = stack;
    }
    return serialized;
  }
  exports2.serializeError = serializeError;
  function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32e3;
  }
  function assignOriginalError(error) {
    if (error && typeof error === "object" && !Array.isArray(error)) {
      return Object.assign({}, error);
    }
    return error;
  }
  function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
})(utils$3);
var errors = {};
Object.defineProperty(errors, "__esModule", { value: true });
errors.ethErrors = void 0;
const classes_1 = classes;
const utils_1 = utils$3;
const error_constants_1 = errorConstants;
errors.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      }
      const { code } = opts;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (arg) => getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (arg) => {
      return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
    },
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (arg) => {
      return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
    },
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (arg) => {
      return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
    },
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (arg) => {
      return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
    },
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (arg) => {
      return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
    },
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (opts) => {
      if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      }
      const { code, message, data } = opts;
      if (!message || typeof message !== "string") {
        throw new Error('"message" must be a nonempty string');
      }
      return new classes_1.EthereumProviderError(code, message, data);
    }
  }
};
function getEthJsonRpcError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  const [message, data] = parseOpts(arg);
  return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === "string") {
      return [arg];
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      const { message, data } = arg;
      if (message && typeof message !== "string") {
        throw new Error("Must specify string message.");
      }
      return [message || void 0, data];
    }
  }
  return [];
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.getMessageFromCode = exports2.serializeError = exports2.EthereumProviderError = exports2.EthereumRpcError = exports2.ethErrors = exports2.errorCodes = void 0;
  const classes_12 = classes;
  Object.defineProperty(exports2, "EthereumRpcError", { enumerable: true, get: function() {
    return classes_12.EthereumRpcError;
  } });
  Object.defineProperty(exports2, "EthereumProviderError", { enumerable: true, get: function() {
    return classes_12.EthereumProviderError;
  } });
  const utils_12 = utils$3;
  Object.defineProperty(exports2, "serializeError", { enumerable: true, get: function() {
    return utils_12.serializeError;
  } });
  Object.defineProperty(exports2, "getMessageFromCode", { enumerable: true, get: function() {
    return utils_12.getMessageFromCode;
  } });
  const errors_1 = errors;
  Object.defineProperty(exports2, "ethErrors", { enumerable: true, get: function() {
    return errors_1.ethErrors;
  } });
  const error_constants_12 = errorConstants;
  Object.defineProperty(exports2, "errorCodes", { enumerable: true, get: function() {
    return error_constants_12.errorCodes;
  } });
})(dist$1);
var DiagnosticLogger = {};
Object.defineProperty(DiagnosticLogger, "__esModule", { value: true });
DiagnosticLogger.EVENTS = void 0;
DiagnosticLogger.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var Session$1 = {};
var sha_jsExports = {};
var sha_js = {
  get exports() {
    return sha_jsExports;
  },
  set exports(v2) {
    sha_jsExports = v2;
  }
};
var safeBufferExports = {};
var safeBuffer = {
  get exports() {
    return safeBufferExports;
  },
  set exports(v2) {
    safeBufferExports = v2;
  }
};
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(module, exports2) {
  var buffer2 = buffer$1;
  var Buffer2 = buffer2.Buffer;
  function copyProps(src2, dst) {
    for (var key in src2) {
      dst[key] = src2[key];
    }
  }
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    module.exports = buffer2;
  } else {
    copyProps(buffer2, exports2);
    exports2.Buffer = SafeBuffer;
  }
  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer2(arg, encodingOrOffset, length);
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== void 0) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer2.SlowBuffer(size);
  };
})(safeBuffer, safeBufferExports);
var Buffer$7 = safeBufferExports.Buffer;
function Hash$6(blockSize, finalSize) {
  this._block = Buffer$7.alloc(blockSize);
  this._finalSize = finalSize;
  this._blockSize = blockSize;
  this._len = 0;
}
Hash$6.prototype.update = function(data, enc) {
  if (typeof data === "string") {
    enc = enc || "utf8";
    data = Buffer$7.from(data, enc);
  }
  var block = this._block;
  var blockSize = this._blockSize;
  var length = data.length;
  var accum = this._len;
  for (var offset = 0; offset < length; ) {
    var assigned = accum % blockSize;
    var remainder = Math.min(length - offset, blockSize - assigned);
    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data[offset + i];
    }
    accum += remainder;
    offset += remainder;
    if (accum % blockSize === 0) {
      this._update(block);
    }
  }
  this._len += length;
  return this;
};
Hash$6.prototype.digest = function(enc) {
  var rem = this._len % this._blockSize;
  this._block[rem] = 128;
  this._block.fill(0, rem + 1);
  if (rem >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }
  var bits = this._len * 8;
  if (bits <= 4294967295) {
    this._block.writeUInt32BE(bits, this._blockSize - 4);
  } else {
    var lowBits = (bits & 4294967295) >>> 0;
    var highBits = (bits - lowBits) / 4294967296;
    this._block.writeUInt32BE(highBits, this._blockSize - 8);
    this._block.writeUInt32BE(lowBits, this._blockSize - 4);
  }
  this._update(this._block);
  var hash2 = this._hash();
  return enc ? hash2.toString(enc) : hash2;
};
Hash$6.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var hash = Hash$6;
var inherits$5 = inherits_browserExports;
var Hash$5 = hash;
var Buffer$6 = safeBufferExports.Buffer;
var K$3 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$5 = new Array(80);
function Sha() {
  this.init();
  this._w = W$5;
  Hash$5.call(this, 64, 56);
}
inherits$5(Sha, Hash$5);
Sha.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl5$1(num) {
  return num << 5 | num >>> 27;
}
function rotl30$1(num) {
  return num << 30 | num >>> 2;
}
function ft$1(s2, b2, c2, d2) {
  if (s2 === 0)
    return b2 & c2 | ~b2 & d2;
  if (s2 === 2)
    return b2 & c2 | b2 & d2 | c2 & d2;
  return b2 ^ c2 ^ d2;
}
Sha.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M2.readInt32BE(i * 4);
  for (; i < 80; ++i)
    W2[i] = W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16];
  for (var j2 = 0; j2 < 80; ++j2) {
    var s2 = ~~(j2 / 20);
    var t2 = rotl5$1(a2) + ft$1(s2, b2, c2, d2) + e2 + W2[j2] + K$3[s2] | 0;
    e2 = d2;
    d2 = c2;
    c2 = rotl30$1(b2);
    b2 = a2;
    a2 = t2;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
};
Sha.prototype._hash = function() {
  var H2 = Buffer$6.allocUnsafe(20);
  H2.writeInt32BE(this._a | 0, 0);
  H2.writeInt32BE(this._b | 0, 4);
  H2.writeInt32BE(this._c | 0, 8);
  H2.writeInt32BE(this._d | 0, 12);
  H2.writeInt32BE(this._e | 0, 16);
  return H2;
};
var sha = Sha;
var inherits$4 = inherits_browserExports;
var Hash$4 = hash;
var Buffer$5 = safeBufferExports.Buffer;
var K$2 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$4 = new Array(80);
function Sha1() {
  this.init();
  this._w = W$4;
  Hash$4.call(this, 64, 56);
}
inherits$4(Sha1, Hash$4);
Sha1.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl1(num) {
  return num << 1 | num >>> 31;
}
function rotl5(num) {
  return num << 5 | num >>> 27;
}
function rotl30(num) {
  return num << 30 | num >>> 2;
}
function ft(s2, b2, c2, d2) {
  if (s2 === 0)
    return b2 & c2 | ~b2 & d2;
  if (s2 === 2)
    return b2 & c2 | b2 & d2 | c2 & d2;
  return b2 ^ c2 ^ d2;
}
Sha1.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M2.readInt32BE(i * 4);
  for (; i < 80; ++i)
    W2[i] = rotl1(W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16]);
  for (var j2 = 0; j2 < 80; ++j2) {
    var s2 = ~~(j2 / 20);
    var t2 = rotl5(a2) + ft(s2, b2, c2, d2) + e2 + W2[j2] + K$2[s2] | 0;
    e2 = d2;
    d2 = c2;
    c2 = rotl30(b2);
    b2 = a2;
    a2 = t2;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
};
Sha1.prototype._hash = function() {
  var H2 = Buffer$5.allocUnsafe(20);
  H2.writeInt32BE(this._a | 0, 0);
  H2.writeInt32BE(this._b | 0, 4);
  H2.writeInt32BE(this._c | 0, 8);
  H2.writeInt32BE(this._d | 0, 12);
  H2.writeInt32BE(this._e | 0, 16);
  return H2;
};
var sha1 = Sha1;
var inherits$3 = inherits_browserExports;
var Hash$3 = hash;
var Buffer$4 = safeBufferExports.Buffer;
var K$1 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
var W$3 = new Array(64);
function Sha256$1() {
  this.init();
  this._w = W$3;
  Hash$3.call(this, 64, 56);
}
inherits$3(Sha256$1, Hash$3);
Sha256$1.prototype.init = function() {
  this._a = 1779033703;
  this._b = 3144134277;
  this._c = 1013904242;
  this._d = 2773480762;
  this._e = 1359893119;
  this._f = 2600822924;
  this._g = 528734635;
  this._h = 1541459225;
  return this;
};
function ch(x2, y2, z2) {
  return z2 ^ x2 & (y2 ^ z2);
}
function maj$1(x2, y2, z2) {
  return x2 & y2 | z2 & (x2 | y2);
}
function sigma0$1(x2) {
  return (x2 >>> 2 | x2 << 30) ^ (x2 >>> 13 | x2 << 19) ^ (x2 >>> 22 | x2 << 10);
}
function sigma1$1(x2) {
  return (x2 >>> 6 | x2 << 26) ^ (x2 >>> 11 | x2 << 21) ^ (x2 >>> 25 | x2 << 7);
}
function gamma0(x2) {
  return (x2 >>> 7 | x2 << 25) ^ (x2 >>> 18 | x2 << 14) ^ x2 >>> 3;
}
function gamma1(x2) {
  return (x2 >>> 17 | x2 << 15) ^ (x2 >>> 19 | x2 << 13) ^ x2 >>> 10;
}
Sha256$1.prototype._update = function(M2) {
  var W2 = this._w;
  var a2 = this._a | 0;
  var b2 = this._b | 0;
  var c2 = this._c | 0;
  var d2 = this._d | 0;
  var e2 = this._e | 0;
  var f2 = this._f | 0;
  var g2 = this._g | 0;
  var h2 = this._h | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M2.readInt32BE(i * 4);
  for (; i < 64; ++i)
    W2[i] = gamma1(W2[i - 2]) + W2[i - 7] + gamma0(W2[i - 15]) + W2[i - 16] | 0;
  for (var j2 = 0; j2 < 64; ++j2) {
    var T1 = h2 + sigma1$1(e2) + ch(e2, f2, g2) + K$1[j2] + W2[j2] | 0;
    var T2 = sigma0$1(a2) + maj$1(a2, b2, c2) | 0;
    h2 = g2;
    g2 = f2;
    f2 = e2;
    e2 = d2 + T1 | 0;
    d2 = c2;
    c2 = b2;
    b2 = a2;
    a2 = T1 + T2 | 0;
  }
  this._a = a2 + this._a | 0;
  this._b = b2 + this._b | 0;
  this._c = c2 + this._c | 0;
  this._d = d2 + this._d | 0;
  this._e = e2 + this._e | 0;
  this._f = f2 + this._f | 0;
  this._g = g2 + this._g | 0;
  this._h = h2 + this._h | 0;
};
Sha256$1.prototype._hash = function() {
  var H2 = Buffer$4.allocUnsafe(32);
  H2.writeInt32BE(this._a, 0);
  H2.writeInt32BE(this._b, 4);
  H2.writeInt32BE(this._c, 8);
  H2.writeInt32BE(this._d, 12);
  H2.writeInt32BE(this._e, 16);
  H2.writeInt32BE(this._f, 20);
  H2.writeInt32BE(this._g, 24);
  H2.writeInt32BE(this._h, 28);
  return H2;
};
var sha256 = Sha256$1;
var inherits$2 = inherits_browserExports;
var Sha256 = sha256;
var Hash$2 = hash;
var Buffer$3 = safeBufferExports.Buffer;
var W$2 = new Array(64);
function Sha224() {
  this.init();
  this._w = W$2;
  Hash$2.call(this, 64, 56);
}
inherits$2(Sha224, Sha256);
Sha224.prototype.init = function() {
  this._a = 3238371032;
  this._b = 914150663;
  this._c = 812702999;
  this._d = 4144912697;
  this._e = 4290775857;
  this._f = 1750603025;
  this._g = 1694076839;
  this._h = 3204075428;
  return this;
};
Sha224.prototype._hash = function() {
  var H2 = Buffer$3.allocUnsafe(28);
  H2.writeInt32BE(this._a, 0);
  H2.writeInt32BE(this._b, 4);
  H2.writeInt32BE(this._c, 8);
  H2.writeInt32BE(this._d, 12);
  H2.writeInt32BE(this._e, 16);
  H2.writeInt32BE(this._f, 20);
  H2.writeInt32BE(this._g, 24);
  return H2;
};
var sha224 = Sha224;
var inherits$1 = inherits_browserExports;
var Hash$1 = hash;
var Buffer$2 = safeBufferExports.Buffer;
var K = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
var W$1 = new Array(160);
function Sha512() {
  this.init();
  this._w = W$1;
  Hash$1.call(this, 128, 112);
}
inherits$1(Sha512, Hash$1);
Sha512.prototype.init = function() {
  this._ah = 1779033703;
  this._bh = 3144134277;
  this._ch = 1013904242;
  this._dh = 2773480762;
  this._eh = 1359893119;
  this._fh = 2600822924;
  this._gh = 528734635;
  this._hh = 1541459225;
  this._al = 4089235720;
  this._bl = 2227873595;
  this._cl = 4271175723;
  this._dl = 1595750129;
  this._el = 2917565137;
  this._fl = 725511199;
  this._gl = 4215389547;
  this._hl = 327033209;
  return this;
};
function Ch(x2, y2, z2) {
  return z2 ^ x2 & (y2 ^ z2);
}
function maj(x2, y2, z2) {
  return x2 & y2 | z2 & (x2 | y2);
}
function sigma0(x2, xl) {
  return (x2 >>> 28 | xl << 4) ^ (xl >>> 2 | x2 << 30) ^ (xl >>> 7 | x2 << 25);
}
function sigma1(x2, xl) {
  return (x2 >>> 14 | xl << 18) ^ (x2 >>> 18 | xl << 14) ^ (xl >>> 9 | x2 << 23);
}
function Gamma0(x2, xl) {
  return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ x2 >>> 7;
}
function Gamma0l(x2, xl) {
  return (x2 >>> 1 | xl << 31) ^ (x2 >>> 8 | xl << 24) ^ (x2 >>> 7 | xl << 25);
}
function Gamma1(x2, xl) {
  return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ x2 >>> 6;
}
function Gamma1l(x2, xl) {
  return (x2 >>> 19 | xl << 13) ^ (xl >>> 29 | x2 << 3) ^ (x2 >>> 6 | xl << 26);
}
function getCarry(a2, b2) {
  return a2 >>> 0 < b2 >>> 0 ? 1 : 0;
}
Sha512.prototype._update = function(M2) {
  var W2 = this._w;
  var ah = this._ah | 0;
  var bh = this._bh | 0;
  var ch2 = this._ch | 0;
  var dh = this._dh | 0;
  var eh = this._eh | 0;
  var fh = this._fh | 0;
  var gh = this._gh | 0;
  var hh = this._hh | 0;
  var al = this._al | 0;
  var bl = this._bl | 0;
  var cl = this._cl | 0;
  var dl = this._dl | 0;
  var el = this._el | 0;
  var fl = this._fl | 0;
  var gl = this._gl | 0;
  var hl = this._hl | 0;
  for (var i = 0; i < 32; i += 2) {
    W2[i] = M2.readInt32BE(i * 4);
    W2[i + 1] = M2.readInt32BE(i * 4 + 4);
  }
  for (; i < 160; i += 2) {
    var xh = W2[i - 15 * 2];
    var xl = W2[i - 15 * 2 + 1];
    var gamma02 = Gamma0(xh, xl);
    var gamma0l = Gamma0l(xl, xh);
    xh = W2[i - 2 * 2];
    xl = W2[i - 2 * 2 + 1];
    var gamma12 = Gamma1(xh, xl);
    var gamma1l = Gamma1l(xl, xh);
    var Wi7h = W2[i - 7 * 2];
    var Wi7l = W2[i - 7 * 2 + 1];
    var Wi16h = W2[i - 16 * 2];
    var Wi16l = W2[i - 16 * 2 + 1];
    var Wil = gamma0l + Wi7l | 0;
    var Wih = gamma02 + Wi7h + getCarry(Wil, gamma0l) | 0;
    Wil = Wil + gamma1l | 0;
    Wih = Wih + gamma12 + getCarry(Wil, gamma1l) | 0;
    Wil = Wil + Wi16l | 0;
    Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
    W2[i] = Wih;
    W2[i + 1] = Wil;
  }
  for (var j2 = 0; j2 < 160; j2 += 2) {
    Wih = W2[j2];
    Wil = W2[j2 + 1];
    var majh = maj(ah, bh, ch2);
    var majl = maj(al, bl, cl);
    var sigma0h = sigma0(ah, al);
    var sigma0l = sigma0(al, ah);
    var sigma1h = sigma1(eh, el);
    var sigma1l = sigma1(el, eh);
    var Kih = K[j2];
    var Kil = K[j2 + 1];
    var chh = Ch(eh, fh, gh);
    var chl = Ch(el, fl, gl);
    var t1l = hl + sigma1l | 0;
    var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
    t1l = t1l + chl | 0;
    t1h = t1h + chh + getCarry(t1l, chl) | 0;
    t1l = t1l + Kil | 0;
    t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
    t1l = t1l + Wil | 0;
    t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
    var t2l = sigma0l + majl | 0;
    var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    el = dl + t1l | 0;
    eh = dh + t1h + getCarry(el, dl) | 0;
    dh = ch2;
    dl = cl;
    ch2 = bh;
    cl = bl;
    bh = ah;
    bl = al;
    al = t1l + t2l | 0;
    ah = t1h + t2h + getCarry(al, t1l) | 0;
  }
  this._al = this._al + al | 0;
  this._bl = this._bl + bl | 0;
  this._cl = this._cl + cl | 0;
  this._dl = this._dl + dl | 0;
  this._el = this._el + el | 0;
  this._fl = this._fl + fl | 0;
  this._gl = this._gl + gl | 0;
  this._hl = this._hl + hl | 0;
  this._ah = this._ah + ah + getCarry(this._al, al) | 0;
  this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
  this._ch = this._ch + ch2 + getCarry(this._cl, cl) | 0;
  this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
  this._eh = this._eh + eh + getCarry(this._el, el) | 0;
  this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
  this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
  this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
};
Sha512.prototype._hash = function() {
  var H2 = Buffer$2.allocUnsafe(64);
  function writeInt64BE(h2, l2, offset) {
    H2.writeInt32BE(h2, offset);
    H2.writeInt32BE(l2, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  writeInt64BE(this._gh, this._gl, 48);
  writeInt64BE(this._hh, this._hl, 56);
  return H2;
};
var sha512 = Sha512;
var inherits = inherits_browserExports;
var SHA512 = sha512;
var Hash = hash;
var Buffer$1 = safeBufferExports.Buffer;
var W = new Array(160);
function Sha384() {
  this.init();
  this._w = W;
  Hash.call(this, 128, 112);
}
inherits(Sha384, SHA512);
Sha384.prototype.init = function() {
  this._ah = 3418070365;
  this._bh = 1654270250;
  this._ch = 2438529370;
  this._dh = 355462360;
  this._eh = 1731405415;
  this._fh = 2394180231;
  this._gh = 3675008525;
  this._hh = 1203062813;
  this._al = 3238371032;
  this._bl = 914150663;
  this._cl = 812702999;
  this._dl = 4144912697;
  this._el = 4290775857;
  this._fl = 1750603025;
  this._gl = 1694076839;
  this._hl = 3204075428;
  return this;
};
Sha384.prototype._hash = function() {
  var H2 = Buffer$1.allocUnsafe(48);
  function writeInt64BE(h2, l2, offset) {
    H2.writeInt32BE(h2, offset);
    H2.writeInt32BE(l2, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  return H2;
};
var sha384 = Sha384;
var exports = sha_js.exports = function SHA(algorithm) {
  algorithm = algorithm.toLowerCase();
  var Algorithm = exports[algorithm];
  if (!Algorithm)
    throw new Error(algorithm + " is not supported (we accept pull requests)");
  return new Algorithm();
};
exports.sha = sha;
exports.sha1 = sha1;
exports.sha224 = sha224;
exports.sha256 = sha256;
exports.sha384 = sha384;
exports.sha512 = sha512;
var util$5 = {};
var shams$1 = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$2 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr$4 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$4.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        args.concat(slice.call(arguments))
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(
        that,
        args.concat(slice.call(arguments))
      );
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var bind$2 = functionBind;
var src = bind$2.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e2) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e2) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$1();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols$1 = hasSymbols$2();
var getProto$1 = Object.getPrototypeOf || function(x2) {
  return x2.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto$1(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols$1 ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols$1 ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols$1 ? getProto$1(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols$1 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$1,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
try {
  null.error;
} catch (e2) {
  var errorProto = getProto$1(getProto$1(e2));
  INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval2(name2) {
  var value;
  if (name2 === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name2 === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name2 === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name2 === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name2 === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value = getProto$1(gen.prototype);
    }
  }
  INTRINSICS[name2] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind$1 = functionBind;
var hasOwn$1 = src;
var $concat$1 = bind$1.call(Function.call, Array.prototype.concat);
var $spliceApply = bind$1.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind$1.call(Function.call, String.prototype.replace);
var $strSlice = bind$1.call(Function.call, String.prototype.slice);
var $exec = bind$1.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first2 = $strSlice(string, 0, 1);
  var last2 = $strSlice(string, -1);
  if (first2 === "%" && last2 !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last2 === "%" && first2 !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace$1(string, rePropName, function(match, number, quote2, subString) {
    result[result.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
  var intrinsicName = name2;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$1("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name2, allowMissing) {
  if (typeof name2 !== "string" || name2.length === 0) {
    throw new $TypeError$1("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$1('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name2) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name2);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat$1([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first2 = $strSlice(part, 0, 1);
    var last2 = $strSlice(part, -1);
    if ((first2 === '"' || first2 === "'" || first2 === "`" || (last2 === '"' || last2 === "'" || last2 === "`")) && first2 !== last2) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$1("base intrinsic for " + name2 + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn$1(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBindExports = {};
var callBind$1 = {
  get exports() {
    return callBindExports;
  },
  set exports(v2) {
    callBindExports = v2;
  }
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e2) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(
          func,
          "length",
          { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
        );
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$2 = getIntrinsic;
var callBind = callBindExports;
var $indexOf$1 = callBind(GetIntrinsic$2("String.prototype.indexOf"));
var callBound$4 = function callBoundIntrinsic(name2, allowMissing) {
  var intrinsic = GetIntrinsic$2(name2, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf$1(name2, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice$2 = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O2) {
  return O2.__proto__;
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === "number") {
    var int = num < 0 ? -$floor(-num) : $floor(num);
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice$2.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require$$1$1;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$3(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has$3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === "bigint") {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$5(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from2, noIndent) {
    if (from2) {
      seen = $arrSlice.call(seen);
      seen.push(from2);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$3(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function" && !isRegExp$1(obj)) {
    var name2 = nameOf(obj);
    var keys = arrObjKeys(obj, inspect2);
    return "[Function" + (name2 ? ": " + name2 : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s2 = "<" + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s2 += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s2 += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s2 += "...";
    }
    s2 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
    return s2;
  }
  if (isArray$5(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + $join.call(xs, ", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
      return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
    }
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
      return utilInspect(obj, { depth: maxDepth - depth });
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function(value, key) {
        mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
      });
    }
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function(value) {
        setParts.push(inspect2(value, obj));
      });
    }
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (!isDate$1(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice$2.call(toStr$3(obj), 8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s2, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s2 + quoteChar;
}
function quote(s2) {
  return $replace.call(String(s2), /"/g, "&quot;");
}
function isArray$5(obj) {
  return toStr$3(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate$1(obj) {
  return toStr$3(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
  return toStr$3(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr$3(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr$3(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr$3(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr$3(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e2) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e2) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$3(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr$3(obj) {
  return objectToString.call(obj);
}
function nameOf(f2) {
  if (f2.name) {
    return f2.name;
  }
  var m2 = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
  if (m2) {
    return m2[1];
  }
  return null;
}
function indexOf(xs, x2) {
  if (xs.indexOf) {
    return xs.indexOf(x2);
  }
  for (var i = 0, l2 = xs.length; i < l2; i++) {
    if (xs[i] === x2) {
      return i;
    }
  }
  return -1;
}
function isMap(x2) {
  if (!mapSize || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    mapSize.call(x2);
    try {
      setSize.call(x2);
    } catch (s2) {
      return true;
    }
    return x2 instanceof Map;
  } catch (e2) {
  }
  return false;
}
function isWeakMap(x2) {
  if (!weakMapHas || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x2, weakMapHas);
    try {
      weakSetHas.call(x2, weakSetHas);
    } catch (s2) {
      return true;
    }
    return x2 instanceof WeakMap;
  } catch (e2) {
  }
  return false;
}
function isWeakRef(x2) {
  if (!weakRefDeref || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x2);
    return true;
  } catch (e2) {
  }
  return false;
}
function isSet(x2) {
  if (!setSize || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    setSize.call(x2);
    try {
      mapSize.call(x2);
    } catch (m2) {
      return true;
    }
    return x2 instanceof Set;
  } catch (e2) {
  }
  return false;
}
function isWeakSet(x2) {
  if (!weakSetHas || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x2, weakSetHas);
    try {
      weakMapHas.call(x2, weakMapHas);
    } catch (s2) {
      return true;
    }
    return x2 instanceof WeakSet;
  } catch (e2) {
  }
  return false;
}
function isElement(x2) {
  if (!x2 || typeof x2 !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x2 instanceof HTMLElement) {
    return true;
  }
  return typeof x2.nodeName === "string" && typeof x2.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString($slice$2.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var s2 = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s2, "single", opts);
}
function lowbyte(c2) {
  var n2 = c2.charCodeAt(0);
  var x2 = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n2];
  if (x2) {
    return "\\" + x2;
  }
  return "\\x" + (n2 < 16 ? "0" : "") + $toUpperCase.call(n2.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
  return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$5(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$3(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k2 = 0; k2 < syms.length; k2++) {
      symMap["$" + syms[k2]] = syms[k2];
    }
  }
  for (var key in obj) {
    if (!has$3(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j2 = 0; j2 < syms.length; j2++) {
      if (isEnumerable.call(obj, syms[j2])) {
        xs.push("[" + inspect2(syms[j2]) + "]: " + inspect2(obj[syms[j2]], obj));
      }
    }
  }
  return xs;
}
var GetIntrinsic$1 = getIntrinsic;
var callBound$3 = callBound$4;
var inspect = objectInspect;
var $TypeError = GetIntrinsic$1("%TypeError%");
var $WeakMap = GetIntrinsic$1("%WeakMap%", true);
var $Map = GetIntrinsic$1("%Map%", true);
var $weakMapGet = callBound$3("WeakMap.prototype.get", true);
var $weakMapSet = callBound$3("WeakMap.prototype.set", true);
var $weakMapHas = callBound$3("WeakMap.prototype.has", true);
var $mapGet = callBound$3("Map.prototype.get", true);
var $mapSet = callBound$3("Map.prototype.set", true);
var $mapHas = callBound$3("Map.prototype.has", true);
var listGetNode = function(list, key) {
  for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = list.next;
      list.next = curr;
      return curr;
    }
  }
};
var listGet = function(objects, key) {
  var node = listGetNode(objects, key);
  return node && node.value;
};
var listSet = function(objects, key, value) {
  var node = listGetNode(objects, key);
  if (node) {
    node.value = value;
  } else {
    objects.next = {
      // eslint-disable-line no-param-reassign
      key,
      next: objects.next,
      value
    };
  }
};
var listHas = function(objects, key) {
  return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel() {
  var $wm;
  var $m;
  var $o;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError("Side channel does not contain " + inspect(key));
      }
    },
    get: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapGet($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key);
        }
      } else {
        if ($o) {
          return listGet($o, key);
        }
      }
    },
    has: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapHas($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key);
        }
      } else {
        if ($o) {
          return listHas($o, key);
        }
      }
      return false;
    },
    set: function(key, value) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key, value);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      } else {
        if (!$o) {
          $o = { key: {}, next: null };
        }
        listSet($o, key, value);
      }
    }
  };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$3 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$4 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue2) {
  while (queue2.length > 1) {
    var item = queue2.pop();
    var obj = item.obj[item.prop];
    if (isArray$4(obj)) {
      var compacted = [];
      for (var j2 = 0; j2 < obj.length; ++j2) {
        if (typeof obj[j2] !== "undefined") {
          compacted.push(obj[j2]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge$2 = function merge(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (isArray$4(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$4(target) && !isArray$4(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$4(target) && isArray$4(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e2) {
    return strWithoutPlus;
  }
};
var encode = function encode2(str, defaultEncoder, charset, kind, format) {
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var i = 0; i < string.length; ++i) {
    var c2 = string.charCodeAt(i);
    if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats$2.RFC1738 && (c2 === 40 || c2 === 41)) {
      out += string.charAt(i);
      continue;
    }
    if (c2 < 128) {
      out = out + hexTable[c2];
      continue;
    }
    if (c2 < 2048) {
      out = out + (hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63]);
      continue;
    }
    if (c2 < 55296 || c2 >= 57344) {
      out = out + (hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63]);
      continue;
    }
    i += 1;
    c2 = 65536 + ((c2 & 1023) << 10 | string.charCodeAt(i) & 1023);
    out += hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
  }
  return out;
};
var compact = function compact2(value) {
  var queue2 = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue2.length; ++i) {
    var item = queue2[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j2 = 0; j2 < keys.length; ++j2) {
      var key = keys[j2];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue2.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue2);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a2, b2) {
  return [].concat(a2, b2);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$4(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge: merge$2
};
var getSideChannel2 = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$3 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr2, valueOrArray) {
  push.apply(arr2, isArray$3(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$1 = {
  addQueryPrefix: false,
  allowDots: false,
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
  return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
};
var sentinel = {};
var stringify$1 = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter2, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object;
  var tmpSc = sideChannel2;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
    var pos = tmpSc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        findFlag = true;
      }
    }
    if (typeof tmpSc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter2 === "function") {
    obj = filter2(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$3(obj)) {
    obj = utils$1.maybeMap(obj, function(value2) {
      if (value2 instanceof Date) {
        return serializeDate2(value2);
      }
      return value2;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format);
      if (generateArrayPrefix === "comma" && encodeValuesOnly) {
        var valuesArray = split.call(String(obj), ",");
        var valuesJoined = "";
        for (var i = 0; i < valuesArray.length; ++i) {
          valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, "value", format));
        }
        return [formatter(keyValue) + (commaRoundTrip && isArray$3(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
      }
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$3(obj)) {
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$3(filter2)) {
    objKeys = filter2;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  var adjustedPrefix = commaRoundTrip && isArray$3(obj) && obj.length === 1 ? prefix + "[]" : prefix;
  for (var j2 = 0; j2 < objKeys.length; ++j2) {
    var key = objKeys[j2];
    var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var keyPrefix = isArray$3(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
    sideChannel2.set(object, step);
    var valueSideChannel = getSideChannel2();
    valueSideChannel.set(sentinel, sideChannel2);
    pushToArray(values, stringify(
      value,
      keyPrefix,
      generateArrayPrefix,
      commaRoundTrip,
      strictNullHandling,
      skipNulls,
      encoder,
      filter2,
      sort,
      allowDots,
      serializeDate2,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      valueSideChannel
    ));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$1.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$1.formatters[format];
  var filter2 = defaults$1.filter;
  if (typeof opts.filter === "function" || isArray$3(opts.filter)) {
    filter2 = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter: filter2,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var stringify_1 = function(object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter2;
  if (typeof options.filter === "function") {
    filter2 = options.filter;
    obj = filter2("", obj);
  } else if (isArray$3(options.filter)) {
    filter2 = options.filter;
    objKeys = filter2;
  }
  var keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && "indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel2 = getSideChannel2();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys, stringify$1(
      obj[key],
      key,
      generateArrayPrefix,
      commaRoundTrip,
      options.strictNullHandling,
      options.skipNulls,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.format,
      options.formatter,
      options.encodeValuesOnly,
      options.charset,
      sideChannel2
    ));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options) {
  if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, "key");
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
      val = utils.maybeMap(
        parseArrayValue(part.slice(pos + 1), options),
        function(encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, "value");
        }
      );
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (part.indexOf("[]=") > -1) {
      val = isArray$2(val) ? [val] : val;
    }
    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === "[]" && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
      var index2 = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index2) && root !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
        obj = [];
        obj[index2] = leaf;
      } else if (cleanRoot !== "__proto__") {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options.depth > 0 && brackets2.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;
  var keys = [];
  if (parent) {
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent);
  }
  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }
  if (segment) {
    keys.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults;
  }
  if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$3;
var lib$1 = {
  formats,
  parse,
  stringify: stringify2
};
var types$2 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ProviderType = exports2.RegExpString = exports2.IntNumber = exports2.BigIntString = exports2.AddressString = exports2.HexString = exports2.OpaqueType = void 0;
  function OpaqueType() {
    return (value) => value;
  }
  exports2.OpaqueType = OpaqueType;
  exports2.HexString = OpaqueType();
  exports2.AddressString = OpaqueType();
  exports2.BigIntString = OpaqueType();
  function IntNumber(num) {
    return Math.floor(num);
  }
  exports2.IntNumber = IntNumber;
  exports2.RegExpString = OpaqueType();
  (function(ProviderType) {
    ProviderType["CoinbaseWallet"] = "CoinbaseWallet";
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["Unselected"] = "";
  })(exports2.ProviderType || (exports2.ProviderType = {}));
})(types$2);
var __importDefault$9 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(util$5, "__esModule", { value: true });
util$5.isInIFrame = util$5.createQrUrl = util$5.getFavicon = util$5.range = util$5.isBigNumber = util$5.ensureParsedJSONObject = util$5.ensureBN = util$5.ensureRegExpString = util$5.ensureIntNumber = util$5.ensureBuffer = util$5.ensureAddressString = util$5.ensureEvenLengthHexString = util$5.ensureHexString = util$5.isHexString = util$5.prepend0x = util$5.strip0x = util$5.has0xPrefix = util$5.hexStringFromIntNumber = util$5.intNumberFromHexString = util$5.bigIntStringFromBN = util$5.hexStringFromBuffer = util$5.hexStringToUint8Array = util$5.uint8ArrayToHex = util$5.randomBytesHex = void 0;
const bn_js_1$1 = __importDefault$9(bnExports);
const qs_1 = lib$1;
const types_1$3 = types$2;
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
util$5.randomBytesHex = randomBytesHex;
function uint8ArrayToHex(value) {
  return [...value].map((b2) => b2.toString(16).padStart(2, "0")).join("");
}
util$5.uint8ArrayToHex = uint8ArrayToHex;
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}
util$5.hexStringToUint8Array = hexStringToUint8Array;
function hexStringFromBuffer(buf, includePrefix = false) {
  const hex = buf.toString("hex");
  return (0, types_1$3.HexString)(includePrefix ? "0x" + hex : hex);
}
util$5.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBN(bn) {
  return (0, types_1$3.BigIntString)(bn.toString(10));
}
util$5.bigIntStringFromBN = bigIntStringFromBN;
function intNumberFromHexString(hex) {
  return (0, types_1$3.IntNumber)(new bn_js_1$1.default(ensureEvenLengthHexString(hex, false), 16).toNumber());
}
util$5.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
  return (0, types_1$3.HexString)("0x" + new bn_js_1$1.default(num).toString(16));
}
util$5.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
  return str.startsWith("0x") || str.startsWith("0X");
}
util$5.has0xPrefix = has0xPrefix;
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
util$5.strip0x = strip0x;
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return "0x" + hex.slice(2);
  }
  return "0x" + hex;
}
util$5.prepend0x = prepend0x;
function isHexString$1(hex) {
  if (typeof hex !== "string") {
    return false;
  }
  const s2 = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s2);
}
util$5.isHexString = isHexString$1;
function ensureHexString(hex, includePrefix = false) {
  if (typeof hex === "string") {
    const s2 = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s2)) {
      return (0, types_1$3.HexString)(includePrefix ? "0x" + s2 : s2);
    }
  }
  throw new Error(`"${String(hex)}" is not a hexadecimal string`);
}
util$5.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
  let h2 = ensureHexString(hex, false);
  if (h2.length % 2 === 1) {
    h2 = (0, types_1$3.HexString)("0" + h2);
  }
  return includePrefix ? (0, types_1$3.HexString)("0x" + h2) : h2;
}
util$5.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
  if (typeof str === "string") {
    const s2 = strip0x(str).toLowerCase();
    if (isHexString$1(s2) && s2.length === 40) {
      return (0, types_1$3.AddressString)(prepend0x(s2));
    }
  }
  throw new Error(`Invalid Ethereum address: ${String(str)}`);
}
util$5.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === "string") {
    if (isHexString$1(str)) {
      const s2 = ensureEvenLengthHexString(str, false);
      return Buffer.from(s2, "hex");
    } else {
      return Buffer.from(str, "utf8");
    }
  }
  throw new Error(`Not binary data: ${String(str)}`);
}
util$5.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    return (0, types_1$3.IntNumber)(num);
  }
  if (typeof num === "string") {
    if (INT_STRING_REGEX.test(num)) {
      return (0, types_1$3.IntNumber)(Number(num));
    }
    if (isHexString$1(num)) {
      return (0, types_1$3.IntNumber)(new bn_js_1$1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
    }
  }
  throw new Error(`Not an integer: ${String(num)}`);
}
util$5.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
  if (regExp instanceof RegExp) {
    return (0, types_1$3.RegExpString)(regExp.toString());
  }
  throw new Error(`Not a RegExp: ${String(regExp)}`);
}
util$5.ensureRegExpString = ensureRegExpString;
function ensureBN(val) {
  if (val !== null && (bn_js_1$1.default.isBN(val) || isBigNumber(val))) {
    return new bn_js_1$1.default(val.toString(10), 10);
  }
  if (typeof val === "number") {
    return new bn_js_1$1.default(ensureIntNumber(val));
  }
  if (typeof val === "string") {
    if (INT_STRING_REGEX.test(val)) {
      return new bn_js_1$1.default(val, 10);
    }
    if (isHexString$1(val)) {
      return new bn_js_1$1.default(ensureEvenLengthHexString(val, false), 16);
    }
  }
  throw new Error(`Not an integer: ${String(val)}`);
}
util$5.ensureBN = ensureBN;
function ensureParsedJSONObject(val) {
  if (typeof val === "string") {
    return JSON.parse(val);
  }
  if (typeof val === "object") {
    return val;
  }
  throw new Error(`Not a JSON string or an object: ${String(val)}`);
}
util$5.ensureParsedJSONObject = ensureParsedJSONObject;
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== "function") {
    return false;
  }
  const { constructor } = val;
  return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
}
util$5.isBigNumber = isBigNumber;
function range$1(start, stop) {
  return Array.from({ length: stop - start }, (_2, i) => start + i);
}
util$5.range = range$1;
function getFavicon() {
  const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
  const { protocol, host } = document.location;
  const href = el ? el.getAttribute("href") : null;
  if (!href || href.startsWith("javascript:")) {
    return null;
  }
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
    return href;
  }
  if (href.startsWith("//")) {
    return protocol + href;
  }
  return `${protocol}//${host}${href}`;
}
util$5.getFavicon = getFavicon;
function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version2, chainId) {
  const sessionIdKey = isParentConnection ? "parent-id" : "id";
  const query2 = (0, qs_1.stringify)({
    [sessionIdKey]: sessionId,
    secret: sessionSecret,
    server: serverUrl,
    v: version2,
    chainId
  });
  const qrUrl = `${serverUrl}/#/link?${query2}`;
  return qrUrl;
}
util$5.createQrUrl = createQrUrl;
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (e2) {
    return false;
  }
}
util$5.isInIFrame = isInIFrame;
Object.defineProperty(Session$1, "__esModule", { value: true });
Session$1.Session = void 0;
const sha_js_1 = sha_jsExports;
const util_1$7 = util$5;
const STORAGE_KEY_SESSION_ID = "session:id";
const STORAGE_KEY_SESSION_SECRET = "session:secret";
const STORAGE_KEY_SESSION_LINKED = "session:linked";
class Session {
  constructor(storage, id, secret, linked) {
    this._storage = storage;
    this._id = id || (0, util_1$7.randomBytesHex)(16);
    this._secret = secret || (0, util_1$7.randomBytesHex)(32);
    this._key = new sha_js_1.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex");
    this._linked = !!linked;
  }
  static load(storage) {
    const id = storage.getItem(STORAGE_KEY_SESSION_ID);
    const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
    const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
    if (id && secret) {
      return new Session(storage, id, secret, linked === "1");
    }
    return null;
  }
  /**
   * Takes in a session ID and returns the sha256 hash of it.
   * @param sessionId session ID
   */
  static hash(sessionId) {
    return new sha_js_1.sha256().update(sessionId).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(val) {
    this._linked = val;
    this.persistLinked();
  }
  save() {
    this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
    this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
    this.persistLinked();
    return this;
  }
  persistLinked() {
    this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
  }
}
Session$1.Session = Session;
var WalletSDKRelayAbstract$1 = {};
Object.defineProperty(WalletSDKRelayAbstract$1, "__esModule", { value: true });
WalletSDKRelayAbstract$1.WalletSDKRelayAbstract = WalletSDKRelayAbstract$1.APP_VERSION_KEY = WalletSDKRelayAbstract$1.LOCAL_STORAGE_ADDRESSES_KEY = WalletSDKRelayAbstract$1.WALLET_USER_NAME_KEY = void 0;
const eth_rpc_errors_1$3 = dist$1;
WalletSDKRelayAbstract$1.WALLET_USER_NAME_KEY = "walletUsername";
WalletSDKRelayAbstract$1.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
WalletSDKRelayAbstract$1.APP_VERSION_KEY = "AppVersion";
class WalletSDKRelayAbstract {
  async makeEthereumJSONRPCRequest(request, jsonRpcUrl) {
    if (!jsonRpcUrl)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(jsonRpcUrl, {
      method: "POST",
      body: JSON.stringify(request),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((res) => res.json()).then((json) => {
      if (!json) {
        throw eth_rpc_errors_1$3.ethErrors.rpc.parse({});
      }
      const response = json;
      const { error } = response;
      if (error) {
        throw (0, eth_rpc_errors_1$3.serializeError)(error);
      }
      return response;
    });
  }
}
WalletSDKRelayAbstract$1.WalletSDKRelayAbstract = WalletSDKRelayAbstract;
var readableBrowserExports = {};
var readableBrowser = {
  get exports() {
    return readableBrowserExports;
  },
  set exports(v2) {
    readableBrowserExports = v2;
  }
};
var streamBrowser = eventsExports.EventEmitter;
var buffer_list;
var hasRequiredBuffer_list;
function requireBuffer_list() {
  if (hasRequiredBuffer_list)
    return buffer_list;
  hasRequiredBuffer_list = 1;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  const _require = buffer$1, Buffer2 = _require.Buffer;
  const _require2 = require$$1$1, inspect2 = _require2.inspect;
  const custom = inspect2 && inspect2.custom || "inspect";
  function copyBuffer(src2, target, offset) {
    Buffer2.prototype.copy.call(src2, target, offset);
  }
  buffer_list = class BufferList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(v2) {
      const entry = {
        data: v2,
        next: null
      };
      if (this.length > 0)
        this.tail.next = entry;
      else
        this.head = entry;
      this.tail = entry;
      ++this.length;
    }
    unshift(v2) {
      const entry = {
        data: v2,
        next: this.head
      };
      if (this.length === 0)
        this.tail = entry;
      this.head = entry;
      ++this.length;
    }
    shift() {
      if (this.length === 0)
        return;
      const ret = this.head.data;
      if (this.length === 1)
        this.head = this.tail = null;
      else
        this.head = this.head.next;
      --this.length;
      return ret;
    }
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
    join(s2) {
      if (this.length === 0)
        return "";
      var p2 = this.head;
      var ret = "" + p2.data;
      while (p2 = p2.next)
        ret += s2 + p2.data;
      return ret;
    }
    concat(n2) {
      if (this.length === 0)
        return Buffer2.alloc(0);
      const ret = Buffer2.allocUnsafe(n2 >>> 0);
      var p2 = this.head;
      var i = 0;
      while (p2) {
        copyBuffer(p2.data, ret, i);
        i += p2.data.length;
        p2 = p2.next;
      }
      return ret;
    }
    // Consumes a specified amount of bytes or characters from the buffered data.
    consume(n2, hasStrings) {
      var ret;
      if (n2 < this.head.data.length) {
        ret = this.head.data.slice(0, n2);
        this.head.data = this.head.data.slice(n2);
      } else if (n2 === this.head.data.length) {
        ret = this.shift();
      } else {
        ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
      }
      return ret;
    }
    first() {
      return this.head.data;
    }
    // Consumes a specified amount of characters from the buffered data.
    _getString(n2) {
      var p2 = this.head;
      var c2 = 1;
      var ret = p2.data;
      n2 -= ret.length;
      while (p2 = p2.next) {
        const str = p2.data;
        const nb = n2 > str.length ? str.length : n2;
        if (nb === str.length)
          ret += str;
        else
          ret += str.slice(0, n2);
        n2 -= nb;
        if (n2 === 0) {
          if (nb === str.length) {
            ++c2;
            if (p2.next)
              this.head = p2.next;
            else
              this.head = this.tail = null;
          } else {
            this.head = p2;
            p2.data = str.slice(nb);
          }
          break;
        }
        ++c2;
      }
      this.length -= c2;
      return ret;
    }
    // Consumes a specified amount of bytes from the buffered data.
    _getBuffer(n2) {
      const ret = Buffer2.allocUnsafe(n2);
      var p2 = this.head;
      var c2 = 1;
      p2.data.copy(ret);
      n2 -= p2.data.length;
      while (p2 = p2.next) {
        const buf = p2.data;
        const nb = n2 > buf.length ? buf.length : n2;
        buf.copy(ret, ret.length - n2, 0, nb);
        n2 -= nb;
        if (n2 === 0) {
          if (nb === buf.length) {
            ++c2;
            if (p2.next)
              this.head = p2.next;
            else
              this.head = this.tail = null;
          } else {
            this.head = p2;
            p2.data = buf.slice(nb);
          }
          break;
        }
        ++c2;
      }
      this.length -= c2;
      return ret;
    }
    // Make sure the linked list only shows the minimal necessary information.
    [custom](_2, options) {
      return inspect2(this, _objectSpread(_objectSpread({}, options), {}, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  };
  return buffer_list;
}
function destroy(err, cb) {
  const readableDestroyed = this._readableState && this._readableState.destroyed;
  const writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }
  if (this._readableState) {
    this._readableState.destroyed = true;
  }
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, (err2) => {
    if (!cb && err2) {
      if (!this._writableState) {
        process.nextTick(emitErrorAndCloseNT, this, err2);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, this, err2);
      } else {
        process.nextTick(emitCloseNT, this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, this);
      cb(err2);
    } else {
      process.nextTick(emitCloseNT, this);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self2, err) {
  emitErrorNT(self2, err);
  emitCloseNT(self2);
}
function emitCloseNT(self2) {
  if (self2._writableState && !self2._writableState.emitClose)
    return;
  if (self2._readableState && !self2._readableState.emitClose)
    return;
  self2.emit("close");
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self2, err) {
  self2.emit("error", err);
}
function errorOrDestroy(stream, err) {
  const rState = stream._readableState;
  const wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy)
    stream.destroy(err);
  else
    stream.emit("error", err);
}
var destroy_1 = {
  destroy,
  undestroy,
  errorOrDestroy
};
var errorsBrowser = {};
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  function getMessage(arg1, arg2, arg3) {
    if (typeof message === "string") {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }
  var NodeError = /* @__PURE__ */ function(_Base) {
    _inheritsLoose(NodeError2, _Base);
    function NodeError2(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }
    return NodeError2;
  }(Base);
  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
}
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function(i) {
      return String(i);
    });
    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
}
function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
function endsWith(str, search, this_len) {
  if (this_len === void 0 || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}
function includes(str, search, start) {
  if (typeof start !== "number") {
    start = 0;
  }
  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
  return 'The value "' + value + '" is invalid for option "' + name2 + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
  var determiner;
  if (typeof expected === "string" && startsWith(expected, "not ")) {
    determiner = "must not be";
    expected = expected.replace(/^not /, "");
  } else {
    determiner = "must be";
  }
  var msg;
  if (endsWith(name2, " argument")) {
    msg = "The ".concat(name2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  } else {
    var type = includes(name2, ".") ? "property" : "argument";
    msg = 'The "'.concat(name2, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  }
  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
  return "The " + name2 + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name2) {
  return "Cannot call " + name2 + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
  return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
errorsBrowser.codes = codes;
const ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state2, options, duplexKey, isDuplex) {
  const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      const name2 = isDuplex ? duplexKey : "highWaterMark";
      throw new ERR_INVALID_OPT_VALUE(name2, hwm);
    }
    return Math.floor(hwm);
  }
  return state2.objectMode ? 16 : 16 * 1024;
}
var state = {
  getHighWaterMark
};
var browser = deprecate;
function deprecate(fn, msg) {
  if (config$1("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config$1("throwDeprecation")) {
        throw new Error(msg);
      } else if (config$1("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config$1(name2) {
  try {
    if (!commonjsGlobal.localStorage)
      return false;
  } catch (_2) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name2];
  if (null == val)
    return false;
  return String(val).toLowerCase() === "true";
}
var _stream_writable;
var hasRequired_stream_writable;
function require_stream_writable() {
  if (hasRequired_stream_writable)
    return _stream_writable;
  hasRequired_stream_writable = 1;
  _stream_writable = Writable;
  function CorkedRequest(state2) {
    this.next = null;
    this.entry = null;
    this.finish = () => {
      onCorkedFinish(this, state2);
    };
  }
  var Duplex2;
  Writable.WritableState = WritableState;
  const internalUtil = {
    deprecate: browser
  };
  var Stream = streamBrowser;
  const Buffer2 = buffer$1.Buffer;
  const OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  const destroyImpl = destroy_1;
  const _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  const _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
  const errorOrDestroy2 = destroyImpl.errorOrDestroy;
  inherits_browserExports(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_2) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    const isDuplex = this instanceof Duplex2;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy2(stream, er);
    process.nextTick(cb, er);
  }
  function validChunk(stream, state2, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy2(stream, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    var isBuf = !state2.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state2.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state2.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest)
        clearBuffer(this, state2);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state2, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state2, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret)
      state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last2 = state2.lastBufferedRequest;
      state2.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last2) {
        last2.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (state2.destroyed)
      state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
    else if (writev)
      stream._writev(chunk, state2.onwrite);
    else
      stream._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream, state2, sync, er, cb) {
    --state2.pendingcb;
    if (sync) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream, state2);
      stream._writableState.errorEmitted = true;
      errorOrDestroy2(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy2(stream, er);
      finishMaybe(stream, state2);
    }
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream, er) {
    var state2 = stream._writableState;
    var sync = state2.sync;
    var cb = state2.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK2();
    onwriteStateUpdate(state2);
    if (er)
      onwriteError(stream, state2, sync, er, cb);
    else {
      var finished = needFinish(state2) || stream.destroyed;
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream, state2);
      }
      if (sync) {
        process.nextTick(afterWrite, stream, state2, finished, cb);
      } else {
        afterWrite(stream, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream, state2, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream, state2);
  }
  function onwriteDrain(stream, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l2 = state2.bufferedRequestCount;
      var buffer2 = new Array(l2);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count2 = 0;
      var allBuffers = true;
      while (entry) {
        buffer2[count2] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count2 += 1;
      }
      buffer2.allBuffers = allBuffers;
      doWrite(stream, state2, true, state2.length, buffer2, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
      state2.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        state2.bufferedRequestCount--;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null)
        state2.lastBufferedRequest = null;
    }
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending)
      endWritable(this, state2, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      return this._writableState.length;
    }
  });
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function callFinal(stream, state2) {
    stream._final((err) => {
      state2.pendingcb--;
      if (err) {
        errorOrDestroy2(stream, err);
      }
      state2.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state2);
    });
  }
  function prefinish2(stream, state2) {
    if (!state2.prefinished && !state2.finalCalled) {
      if (typeof stream._final === "function" && !state2.destroyed) {
        state2.pendingcb++;
        state2.finalCalled = true;
        process.nextTick(callFinal, stream, state2);
      } else {
        state2.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state2) {
    var need = needFinish(state2);
    if (need) {
      prefinish2(stream, state2);
      if (state2.pendingcb === 0) {
        state2.finished = true;
        stream.emit("finish");
        if (state2.autoDestroy) {
          const rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state2, cb) {
    state2.ending = true;
    finishMaybe(stream, state2);
    if (cb) {
      if (state2.finished)
        process.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state2.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state2, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state2.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state2.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return _stream_writable;
}
var _stream_duplex;
var hasRequired_stream_duplex;
function require_stream_duplex() {
  if (hasRequired_stream_duplex)
    return _stream_duplex;
  hasRequired_stream_duplex = 1;
  var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj)
      keys.push(key);
    return keys;
  };
  _stream_duplex = Duplex2;
  const Readable = require_stream_readable();
  const Writable = require_stream_writable();
  inherits_browserExports(Duplex2, Readable);
  {
    const keys = objectKeys(Writable.prototype);
    for (var v2 = 0; v2 < keys.length; v2++) {
      const method = keys[v2];
      if (!Duplex2.prototype[method])
        Duplex2.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex2(options) {
    if (!(this instanceof Duplex2))
      return new Duplex2(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return _stream_duplex;
}
var string_decoder = {};
var hasRequiredString_decoder;
function requireString_decoder() {
  if (hasRequiredString_decoder)
    return string_decoder;
  hasRequiredString_decoder = 1;
  var Buffer2 = safeBufferExports.Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc)
      return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried)
            return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
      throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  }
  string_decoder.StringDecoder = StringDecoder;
  function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  }
  StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0)
      return "";
    var r2;
    var i;
    if (this.lastNeed) {
      r2 = this.fillLast(buf);
      if (r2 === void 0)
        return "";
      i = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i = 0;
    }
    if (i < buf.length)
      return r2 ? r2 + this.text(buf, i) : this.text(buf, i);
    return r2 || "";
  };
  StringDecoder.prototype.end = utf8End;
  StringDecoder.prototype.text = utf8Text;
  StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(byte) {
    if (byte <= 127)
      return 0;
    else if (byte >> 5 === 6)
      return 2;
    else if (byte >> 4 === 14)
      return 3;
    else if (byte >> 3 === 30)
      return 4;
    return byte >> 6 === 2 ? -1 : -2;
  }
  function utf8CheckIncomplete(self2, buf, i) {
    var j2 = buf.length - 1;
    if (j2 < i)
      return 0;
    var nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j2 < i || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j2 < i || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j2]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2)
          nb = 0;
        else
          self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self2, buf, p2) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "�";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "�";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "�";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p2 = this.lastTotal - this.lastNeed;
    var r2 = utf8CheckExtraBytes(this, buf);
    if (r2 !== void 0)
      return r2;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p2, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p2, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed)
      return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
  }
  function utf8End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r2 + "�";
    return r2;
  }
  function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
      var r2 = buf.toString("utf16le", i);
      if (r2) {
        var c2 = r2.charCodeAt(r2.length - 1);
        if (c2 >= 55296 && c2 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r2.slice(0, -1);
        }
      }
      return r2;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
  }
  function utf16End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r2 + this.lastChar.toString("utf16le", 0, end);
    }
    return r2;
  }
  function base64Text(buf, i) {
    var n2 = (buf.length - i) % 3;
    if (n2 === 0)
      return buf.toString("base64", i);
    this.lastNeed = 3 - n2;
    this.lastTotal = 3;
    if (n2 === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n2);
  }
  function base64End(buf) {
    var r2 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r2;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
  }
  return string_decoder;
}
const ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
function once$1(callback) {
  let called = false;
  return function() {
    if (called)
      return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop$3() {
}
function isRequest$1(stream) {
  return stream.setHeader && typeof stream.abort === "function";
}
function eos$1(stream, opts, callback) {
  if (typeof opts === "function")
    return eos$1(stream, null, opts);
  if (!opts)
    opts = {};
  callback = once$1(callback || noop$3);
  let readable = opts.readable || opts.readable !== false && stream.readable;
  let writable = opts.writable || opts.writable !== false && stream.writable;
  const onlegacyfinish = () => {
    if (!stream.writable)
      onfinish();
  };
  var writableEnded = stream._writableState && stream._writableState.finished;
  const onfinish = () => {
    writable = false;
    writableEnded = true;
    if (!readable)
      callback.call(stream);
  };
  var readableEnded = stream._readableState && stream._readableState.endEmitted;
  const onend = () => {
    readable = false;
    readableEnded = true;
    if (!writable)
      callback.call(stream);
  };
  const onerror = (err) => {
    callback.call(stream, err);
  };
  const onclose = () => {
    let err;
    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };
  const onrequest = () => {
    stream.req.on("finish", onfinish);
  };
  if (isRequest$1(stream)) {
    stream.on("complete", onfinish);
    stream.on("abort", onclose);
    if (stream.req)
      onrequest();
    else
      stream.on("request", onrequest);
  } else if (writable && !stream._writableState) {
    stream.on("end", onlegacyfinish);
    stream.on("close", onlegacyfinish);
  }
  stream.on("end", onend);
  stream.on("finish", onfinish);
  if (opts.error !== false)
    stream.on("error", onerror);
  stream.on("close", onclose);
  return function() {
    stream.removeListener("complete", onfinish);
    stream.removeListener("abort", onclose);
    stream.removeListener("request", onrequest);
    if (stream.req)
      stream.req.removeListener("finish", onfinish);
    stream.removeListener("end", onlegacyfinish);
    stream.removeListener("close", onlegacyfinish);
    stream.removeListener("finish", onfinish);
    stream.removeListener("end", onend);
    stream.removeListener("error", onerror);
    stream.removeListener("close", onclose);
  };
}
var endOfStream = eos$1;
var async_iterator;
var hasRequiredAsync_iterator;
function requireAsync_iterator() {
  if (hasRequiredAsync_iterator)
    return async_iterator;
  hasRequiredAsync_iterator = 1;
  const finished = endOfStream;
  const kLastResolve = Symbol("lastResolve");
  const kLastReject = Symbol("lastReject");
  const kError = Symbol("error");
  const kEnded = Symbol("ended");
  const kLastPromise = Symbol("lastPromise");
  const kHandlePromise = Symbol("handlePromise");
  const kStream = Symbol("stream");
  function createIterResult(value, done2) {
    return {
      value,
      done: done2
    };
  }
  function readAndResolve(iter) {
    const resolve = iter[kLastResolve];
    if (resolve !== null) {
      const data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }
  function onReadable(iter) {
    process.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return (resolve, reject) => {
      lastPromise.then(() => {
        if (iter[kEnded]) {
          resolve(createIterResult(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  const AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  const ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf({
    get stream() {
      return this[kStream];
    },
    next() {
      const error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise((resolve, reject) => {
          process.nextTick(() => {
            if (this[kError]) {
              reject(this[kError]);
            } else {
              resolve(createIterResult(void 0, true));
            }
          });
        });
      }
      const lastPromise = this[kLastPromise];
      let promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        const data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    },
    [Symbol.asyncIterator]() {
      return this;
    },
    return() {
      return new Promise((resolve, reject) => {
        this[kStream].destroy(null, (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }
  }, AsyncIteratorPrototype);
  const createReadableStreamAsyncIterator = (stream) => {
    const iterator2 = Object.create(ReadableStreamAsyncIteratorPrototype, {
      [kStream]: {
        value: stream,
        writable: true
      },
      [kLastResolve]: {
        value: null,
        writable: true
      },
      [kLastReject]: {
        value: null,
        writable: true
      },
      [kError]: {
        value: null,
        writable: true
      },
      [kEnded]: {
        value: stream._readableState.endEmitted,
        writable: true
      },
      // the function passed to new Promise
      // is cached so we avoid allocating a new
      // closure at every run
      [kHandlePromise]: {
        value: (resolve, reject) => {
          const data = iterator2[kStream].read();
          if (data) {
            iterator2[kLastPromise] = null;
            iterator2[kLastResolve] = null;
            iterator2[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator2[kLastResolve] = resolve;
            iterator2[kLastReject] = reject;
          }
        },
        writable: true
      }
    });
    iterator2[kLastPromise] = null;
    finished(stream, (err) => {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        const reject = iterator2[kLastReject];
        if (reject !== null) {
          iterator2[kLastPromise] = null;
          iterator2[kLastResolve] = null;
          iterator2[kLastReject] = null;
          reject(err);
        }
        iterator2[kError] = err;
        return;
      }
      const resolve = iterator2[kLastResolve];
      if (resolve !== null) {
        iterator2[kLastPromise] = null;
        iterator2[kLastResolve] = null;
        iterator2[kLastReject] = null;
        resolve(createIterResult(void 0, true));
      }
      iterator2[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator2));
    return iterator2;
  };
  async_iterator = createReadableStreamAsyncIterator;
  return async_iterator;
}
var fromBrowser;
var hasRequiredFromBrowser;
function requireFromBrowser() {
  if (hasRequiredFromBrowser)
    return fromBrowser;
  hasRequiredFromBrowser = 1;
  fromBrowser = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return fromBrowser;
}
var _stream_readable;
var hasRequired_stream_readable;
function require_stream_readable() {
  if (hasRequired_stream_readable)
    return _stream_readable;
  hasRequired_stream_readable = 1;
  _stream_readable = Readable;
  var Duplex2;
  Readable.ReadableState = ReadableState;
  eventsExports.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = streamBrowser;
  const Buffer2 = buffer$1.Buffer;
  const OurUint8Array = (typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  const debugUtil = require$$1$1;
  let debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  const BufferList = requireBuffer_list();
  const destroyImpl = destroy_1;
  const _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  const _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  let StringDecoder;
  let createReadableStreamAsyncIterator;
  let from2;
  inherits_browserExports(Readable, Stream);
  const errorOrDestroy2 = destroyImpl.errorOrDestroy;
  const kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder)
        StringDecoder = requireString_decoder().StringDecoder;
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    if (!(this instanceof Readable))
      return new Readable(options);
    const isDuplex = this instanceof Duplex2;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    var skipChunkCheck;
    if (!state2.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state2.defaultEncoding;
        if (encoding !== state2.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state2 = stream._readableState;
    if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream, state2);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state2, chunk);
      if (er) {
        errorOrDestroy2(stream, er);
      } else if (state2.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state2.endEmitted)
            errorOrDestroy2(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream, state2, chunk, true);
        } else if (state2.ended) {
          errorOrDestroy2(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state2.destroyed) {
          return false;
        } else {
          state2.reading = false;
          if (state2.decoder && !encoding) {
            chunk = state2.decoder.write(chunk);
            if (state2.objectMode || chunk.length !== 0)
              addChunk(stream, state2, chunk, false);
            else
              maybeReadMore(stream, state2);
          } else {
            addChunk(stream, state2, chunk, false);
          }
        }
      } else if (!addToFront) {
        state2.reading = false;
        maybeReadMore(stream, state2);
      }
    }
    return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
  }
  function addChunk(stream, state2, chunk, addToFront) {
    if (state2.flowing && state2.length === 0 && !state2.sync) {
      state2.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state2.length += state2.objectMode ? 1 : chunk.length;
      if (addToFront)
        state2.buffer.unshift(chunk);
      else
        state2.buffer.push(chunk);
      if (state2.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state2);
  }
  function chunkInvalid(state2, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder)
      StringDecoder = requireString_decoder().StringDecoder;
    const decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    let p2 = this._readableState.buffer.head;
    let content = "";
    while (p2 !== null) {
      content += decoder.write(p2.data);
      p2 = p2.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  const MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n2) {
    if (n2 >= MAX_HWM) {
      n2 = MAX_HWM;
    } else {
      n2--;
      n2 |= n2 >>> 1;
      n2 |= n2 >>> 2;
      n2 |= n2 >>> 4;
      n2 |= n2 >>> 8;
      n2 |= n2 >>> 16;
      n2++;
    }
    return n2;
  }
  function howMuchToRead(n2, state2) {
    if (n2 <= 0 || state2.length === 0 && state2.ended)
      return 0;
    if (state2.objectMode)
      return 1;
    if (n2 !== n2) {
      if (state2.flowing && state2.length)
        return state2.buffer.head.data.length;
      else
        return state2.length;
    }
    if (n2 > state2.highWaterMark)
      state2.highWaterMark = computeNewHighWaterMark(n2);
    if (n2 <= state2.length)
      return n2;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n2) {
    debug("read", n2);
    n2 = parseInt(n2, 10);
    var state2 = this._readableState;
    var nOrig = n2;
    if (n2 !== 0)
      state2.emittedReadable = false;
    if (n2 === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
      debug("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n2 = howMuchToRead(n2, state2);
    if (n2 === 0 && state2.ended) {
      if (state2.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug("need readable", doRead);
    if (state2.length === 0 || state2.length - n2 < state2.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0)
        state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading)
        n2 = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n2 > 0)
      ret = fromList(n2, state2);
    else
      ret = null;
    if (ret === null) {
      state2.needReadable = state2.length <= state2.highWaterMark;
      n2 = 0;
    } else {
      state2.length -= n2;
      state2.awaitDrain = 0;
    }
    if (state2.length === 0) {
      if (!state2.ended)
        state2.needReadable = true;
      if (nOrig !== n2 && state2.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state2) {
    debug("onEofChunk");
    if (state2.ended)
      return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    if (state2.sync) {
      emitReadable(stream);
    } else {
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        state2.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state2 = stream._readableState;
    debug("emitReadable", state2.needReadable, state2.emittedReadable);
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      process.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state2 = stream._readableState;
    debug("emitReadable_", state2.destroyed, state2.length, state2.ended);
    if (!state2.destroyed && (state2.length || state2.ended)) {
      stream.emit("readable");
      state2.emittedReadable = false;
    }
    state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      process.nextTick(maybeReadMore_, stream, state2);
    }
  }
  function maybeReadMore_(stream, state2) {
    while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
      const len = state2.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state2.length)
        break;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n2) {
    errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src2 = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [state2.pipes, dest];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state2.endEmitted)
      process.nextTick(endFn);
    else
      src2.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src2) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src2);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src2.removeListener("end", onend);
      src2.removeListener("end", unpipe);
      src2.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src2.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf3(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state2.awaitDrain);
          state2.awaitDrain++;
        }
        src2.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy2(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src2.unpipe(dest);
    }
    dest.emit("pipe", src2);
    if (!state2.flowing) {
      debug("pipe resume");
      src2.resume();
    }
    return dest;
  };
  function pipeOnDrain(src2) {
    return function pipeOnDrainFunctionResult() {
      var state2 = src2._readableState;
      debug("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain)
        state2.awaitDrain--;
      if (state2.awaitDrain === 0 && EElistenerCount(src2, "data")) {
        state2.flowing = true;
        flow(src2);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state2.pipesCount === 0)
      return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes)
        return this;
      if (!dest)
        dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var i = 0; i < len; i++)
        dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    var index2 = indexOf3(state2.pipes, dest);
    if (index2 === -1)
      return this;
    state2.pipes.splice(index2, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1)
      state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    const res = Stream.prototype.on.call(this, ev, fn);
    const state2 = this._readableState;
    if (ev === "data") {
      state2.readableListening = this.listenerCount("readable") > 0;
      if (state2.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.flowing = false;
        state2.emittedReadable = false;
        debug("on readable", state2.length, state2.reading);
        if (state2.length) {
          emitReadable(this);
        } else if (!state2.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    const res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    const res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    const state2 = self2._readableState;
    state2.readableListening = self2.listenerCount("readable") > 0;
    if (state2.resumeScheduled && !state2.paused) {
      state2.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug("resume");
      state2.flowing = !state2.readableListening;
      resume(this, state2);
    }
    state2.paused = false;
    return this;
  };
  function resume(stream, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      process.nextTick(resume_, stream, state2);
    }
  }
  function resume_(stream, state2) {
    debug("resume", state2.reading);
    if (!state2.reading) {
      stream.read(0);
    }
    state2.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state2.flowing && !state2.reading)
      stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    const state2 = stream._readableState;
    debug("flow", state2.flowing);
    while (state2.flowing && stream.read() !== null)
      ;
  }
  Readable.prototype.wrap = function(stream) {
    var state2 = this._readableState;
    var paused = false;
    stream.on("end", () => {
      debug("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length)
          this.push(chunk);
      }
      this.push(null);
    });
    stream.on("data", (chunk) => {
      debug("wrapped data");
      if (state2.decoder)
        chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state2.objectMode && (!chunk || !chunk.length))
        return;
      var ret = this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i in stream) {
      if (this[i] === void 0 && typeof stream[i] === "function") {
        this[i] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }
    for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
      stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
    }
    this._read = (n3) => {
      debug("wrapped _read", n3);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = requireAsync_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state2) {
      if (this._readableState) {
        this._readableState.flowing = state2;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get() {
      return this._readableState.length;
    }
  });
  function fromList(n2, state2) {
    if (state2.length === 0)
      return null;
    var ret;
    if (state2.objectMode)
      ret = state2.buffer.shift();
    else if (!n2 || n2 >= state2.length) {
      if (state2.decoder)
        ret = state2.buffer.join("");
      else if (state2.buffer.length === 1)
        ret = state2.buffer.first();
      else
        ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = state2.buffer.consume(n2, state2.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state2 = stream._readableState;
    debug("endReadable", state2.endEmitted);
    if (!state2.endEmitted) {
      state2.ended = true;
      process.nextTick(endReadableNT, state2, stream);
    }
  }
  function endReadableNT(state2, stream) {
    debug("endReadableNT", state2.endEmitted, state2.length);
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state2.autoDestroy) {
        const wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from2 === void 0) {
        from2 = requireFromBrowser();
      }
      return from2(Readable, iterable, opts);
    };
  }
  function indexOf3(xs, x2) {
    for (var i = 0, l2 = xs.length; i < l2; i++) {
      if (xs[i] === x2)
        return i;
    }
    return -1;
  }
  return _stream_readable;
}
var _stream_transform = Transform$3;
const _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
const Duplex = require_stream_duplex();
inherits_browserExports(Transform$3, Duplex);
function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit("error", new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data != null)
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform$3(options) {
  if (!(this instanceof Transform$3))
    return new Transform$3(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  if (typeof this._flush === "function" && !this._readableState.destroyed) {
    this._flush((er, data) => {
      done(this, er, data);
    });
  } else {
    done(this, null, null);
  }
}
Transform$3.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};
Transform$3.prototype._transform = function(chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform$3.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};
Transform$3.prototype._read = function(n2) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    ts.needTransform = true;
  }
};
Transform$3.prototype._destroy = function(err, cb) {
  Duplex.prototype._destroy.call(this, err, (err2) => {
    cb(err2);
  });
};
function done(stream, er, data) {
  if (er)
    return stream.emit("error", er);
  if (data != null)
    stream.push(data);
  if (stream._writableState.length)
    throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming)
    throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
var _stream_passthrough = PassThrough;
const Transform$2 = _stream_transform;
inherits_browserExports(PassThrough, Transform$2);
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform$2.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};
let eos;
function once(callback) {
  let called = false;
  return function() {
    if (called)
      return;
    called = true;
    callback(...arguments);
  };
}
const _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop$2(err) {
  if (err)
    throw err;
}
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === "function";
}
function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  let closed = false;
  stream.on("close", () => {
    closed = true;
  });
  if (eos === void 0)
    eos = endOfStream;
  eos(stream, {
    readable: reading,
    writable: writing
  }, (err) => {
    if (err)
      return callback(err);
    closed = true;
    callback();
  });
  let destroyed = false;
  return (err) => {
    if (closed)
      return;
    if (destroyed)
      return;
    destroyed = true;
    if (isRequest(stream))
      return stream.abort();
    if (typeof stream.destroy === "function")
      return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED("pipe"));
  };
}
function call(fn) {
  fn();
}
function pipe$1(from2, to) {
  return from2.pipe(to);
}
function popCallback(streams) {
  if (!streams.length)
    return noop$2;
  if (typeof streams[streams.length - 1] !== "function")
    return noop$2;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  const callback = popCallback(streams);
  if (Array.isArray(streams[0]))
    streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS("streams");
  }
  let error;
  const destroys = streams.map(function(stream, i) {
    const reading = i < streams.length - 1;
    const writing = i > 0;
    return destroyer(stream, reading, writing, function(err) {
      if (!error)
        error = err;
      if (err)
        destroys.forEach(call);
      if (reading)
        return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe$1);
}
var pipeline_1 = pipeline;
(function(module, exports2) {
  exports2 = module.exports = require_stream_readable();
  exports2.Stream = exports2;
  exports2.Readable = exports2;
  exports2.Writable = require_stream_writable();
  exports2.Duplex = require_stream_duplex();
  exports2.Transform = _stream_transform;
  exports2.PassThrough = _stream_passthrough;
  exports2.finished = endOfStream;
  exports2.pipeline = pipeline_1;
})(readableBrowser, readableBrowserExports);
const { Transform: Transform$1 } = readableBrowserExports;
var keccak$2 = (KeccakState) => class Keccak2 extends Transform$1 {
  constructor(rate, capacity, delimitedSuffix, hashBitLength, options) {
    super(options);
    this._rate = rate;
    this._capacity = capacity;
    this._delimitedSuffix = delimitedSuffix;
    this._hashBitLength = hashBitLength;
    this._options = options;
    this._state = new KeccakState();
    this._state.initialize(rate, capacity);
    this._finalized = false;
  }
  _transform(chunk, encoding, callback) {
    let error = null;
    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  _flush(callback) {
    let error = null;
    try {
      this.push(this.digest());
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  update(data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    if (!Buffer.isBuffer(data))
      data = Buffer.from(data, encoding);
    this._state.absorb(data);
    return this;
  }
  digest(encoding) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = true;
    if (this._delimitedSuffix)
      this._state.absorbLastFewBits(this._delimitedSuffix);
    let digest = this._state.squeeze(this._hashBitLength / 8);
    if (encoding !== void 0)
      digest = digest.toString(encoding);
    this._resetState();
    return digest;
  }
  // remove result from memory
  _resetState() {
    this._state.initialize(this._rate, this._capacity);
    return this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const clone = new Keccak2(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    this._state.copy(clone._state);
    clone._finalized = this._finalized;
    return clone;
  }
};
const { Transform } = readableBrowserExports;
var shake = (KeccakState) => class Shake extends Transform {
  constructor(rate, capacity, delimitedSuffix, options) {
    super(options);
    this._rate = rate;
    this._capacity = capacity;
    this._delimitedSuffix = delimitedSuffix;
    this._options = options;
    this._state = new KeccakState();
    this._state.initialize(rate, capacity);
    this._finalized = false;
  }
  _transform(chunk, encoding, callback) {
    let error = null;
    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }
    callback(error);
  }
  _flush() {
  }
  _read(size) {
    this.push(this.squeeze(size));
  }
  update(data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    if (!Buffer.isBuffer(data))
      data = Buffer.from(data, encoding);
    this._state.absorb(data);
    return this;
  }
  squeeze(dataByteLength, encoding) {
    if (!this._finalized) {
      this._finalized = true;
      this._state.absorbLastFewBits(this._delimitedSuffix);
    }
    let data = this._state.squeeze(dataByteLength);
    if (encoding !== void 0)
      data = data.toString(encoding);
    return data;
  }
  _resetState() {
    this._state.initialize(this._rate, this._capacity);
    return this;
  }
  _clone() {
    const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
    this._state.copy(clone._state);
    clone._finalized = this._finalized;
    return clone;
  }
};
const createKeccak = keccak$2;
const createShake = shake;
var api = function(KeccakState) {
  const Keccak2 = createKeccak(KeccakState);
  const Shake = createShake(KeccakState);
  return function(algorithm, options) {
    const hash2 = typeof algorithm === "string" ? algorithm.toLowerCase() : algorithm;
    switch (hash2) {
      case "keccak224":
        return new Keccak2(1152, 448, null, 224, options);
      case "keccak256":
        return new Keccak2(1088, 512, null, 256, options);
      case "keccak384":
        return new Keccak2(832, 768, null, 384, options);
      case "keccak512":
        return new Keccak2(576, 1024, null, 512, options);
      case "sha3-224":
        return new Keccak2(1152, 448, 6, 224, options);
      case "sha3-256":
        return new Keccak2(1088, 512, 6, 256, options);
      case "sha3-384":
        return new Keccak2(832, 768, 6, 384, options);
      case "sha3-512":
        return new Keccak2(576, 1024, 6, 512, options);
      case "shake128":
        return new Shake(1344, 256, 31, options);
      case "shake256":
        return new Shake(1088, 512, 31, options);
      default:
        throw new Error("Invald algorithm: " + algorithm);
    }
  };
};
var keccakStateUnroll = {};
const P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
keccakStateUnroll.p1600 = function(s2) {
  for (let round = 0; round < 24; ++round) {
    const lo0 = s2[0] ^ s2[10] ^ s2[20] ^ s2[30] ^ s2[40];
    const hi0 = s2[1] ^ s2[11] ^ s2[21] ^ s2[31] ^ s2[41];
    const lo1 = s2[2] ^ s2[12] ^ s2[22] ^ s2[32] ^ s2[42];
    const hi1 = s2[3] ^ s2[13] ^ s2[23] ^ s2[33] ^ s2[43];
    const lo2 = s2[4] ^ s2[14] ^ s2[24] ^ s2[34] ^ s2[44];
    const hi2 = s2[5] ^ s2[15] ^ s2[25] ^ s2[35] ^ s2[45];
    const lo3 = s2[6] ^ s2[16] ^ s2[26] ^ s2[36] ^ s2[46];
    const hi3 = s2[7] ^ s2[17] ^ s2[27] ^ s2[37] ^ s2[47];
    const lo4 = s2[8] ^ s2[18] ^ s2[28] ^ s2[38] ^ s2[48];
    const hi4 = s2[9] ^ s2[19] ^ s2[29] ^ s2[39] ^ s2[49];
    let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
    let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
    const t1slo0 = s2[0] ^ lo;
    const t1shi0 = s2[1] ^ hi;
    const t1slo5 = s2[10] ^ lo;
    const t1shi5 = s2[11] ^ hi;
    const t1slo10 = s2[20] ^ lo;
    const t1shi10 = s2[21] ^ hi;
    const t1slo15 = s2[30] ^ lo;
    const t1shi15 = s2[31] ^ hi;
    const t1slo20 = s2[40] ^ lo;
    const t1shi20 = s2[41] ^ hi;
    lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
    hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
    const t1slo1 = s2[2] ^ lo;
    const t1shi1 = s2[3] ^ hi;
    const t1slo6 = s2[12] ^ lo;
    const t1shi6 = s2[13] ^ hi;
    const t1slo11 = s2[22] ^ lo;
    const t1shi11 = s2[23] ^ hi;
    const t1slo16 = s2[32] ^ lo;
    const t1shi16 = s2[33] ^ hi;
    const t1slo21 = s2[42] ^ lo;
    const t1shi21 = s2[43] ^ hi;
    lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
    hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
    const t1slo2 = s2[4] ^ lo;
    const t1shi2 = s2[5] ^ hi;
    const t1slo7 = s2[14] ^ lo;
    const t1shi7 = s2[15] ^ hi;
    const t1slo12 = s2[24] ^ lo;
    const t1shi12 = s2[25] ^ hi;
    const t1slo17 = s2[34] ^ lo;
    const t1shi17 = s2[35] ^ hi;
    const t1slo22 = s2[44] ^ lo;
    const t1shi22 = s2[45] ^ hi;
    lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
    hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
    const t1slo3 = s2[6] ^ lo;
    const t1shi3 = s2[7] ^ hi;
    const t1slo8 = s2[16] ^ lo;
    const t1shi8 = s2[17] ^ hi;
    const t1slo13 = s2[26] ^ lo;
    const t1shi13 = s2[27] ^ hi;
    const t1slo18 = s2[36] ^ lo;
    const t1shi18 = s2[37] ^ hi;
    const t1slo23 = s2[46] ^ lo;
    const t1shi23 = s2[47] ^ hi;
    lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
    hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
    const t1slo4 = s2[8] ^ lo;
    const t1shi4 = s2[9] ^ hi;
    const t1slo9 = s2[18] ^ lo;
    const t1shi9 = s2[19] ^ hi;
    const t1slo14 = s2[28] ^ lo;
    const t1shi14 = s2[29] ^ hi;
    const t1slo19 = s2[38] ^ lo;
    const t1shi19 = s2[39] ^ hi;
    const t1slo24 = s2[48] ^ lo;
    const t1shi24 = s2[49] ^ hi;
    const t2slo0 = t1slo0;
    const t2shi0 = t1shi0;
    const t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
    const t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
    const t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
    const t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
    const t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
    const t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
    const t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
    const t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
    const t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
    const t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
    const t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
    const t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
    const t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
    const t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
    const t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
    const t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
    const t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
    const t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
    const t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
    const t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
    const t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
    const t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
    const t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
    const t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
    const t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
    const t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
    const t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
    const t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
    const t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
    const t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
    const t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
    const t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
    const t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
    const t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
    const t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
    const t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
    const t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
    const t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
    const t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
    const t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
    const t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
    const t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
    const t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
    const t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
    const t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
    const t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
    const t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
    const t2shi4 = t1shi24 << 14 | t1slo24 >>> 18;
    s2[0] = t2slo0 ^ ~t2slo1 & t2slo2;
    s2[1] = t2shi0 ^ ~t2shi1 & t2shi2;
    s2[10] = t2slo5 ^ ~t2slo6 & t2slo7;
    s2[11] = t2shi5 ^ ~t2shi6 & t2shi7;
    s2[20] = t2slo10 ^ ~t2slo11 & t2slo12;
    s2[21] = t2shi10 ^ ~t2shi11 & t2shi12;
    s2[30] = t2slo15 ^ ~t2slo16 & t2slo17;
    s2[31] = t2shi15 ^ ~t2shi16 & t2shi17;
    s2[40] = t2slo20 ^ ~t2slo21 & t2slo22;
    s2[41] = t2shi20 ^ ~t2shi21 & t2shi22;
    s2[2] = t2slo1 ^ ~t2slo2 & t2slo3;
    s2[3] = t2shi1 ^ ~t2shi2 & t2shi3;
    s2[12] = t2slo6 ^ ~t2slo7 & t2slo8;
    s2[13] = t2shi6 ^ ~t2shi7 & t2shi8;
    s2[22] = t2slo11 ^ ~t2slo12 & t2slo13;
    s2[23] = t2shi11 ^ ~t2shi12 & t2shi13;
    s2[32] = t2slo16 ^ ~t2slo17 & t2slo18;
    s2[33] = t2shi16 ^ ~t2shi17 & t2shi18;
    s2[42] = t2slo21 ^ ~t2slo22 & t2slo23;
    s2[43] = t2shi21 ^ ~t2shi22 & t2shi23;
    s2[4] = t2slo2 ^ ~t2slo3 & t2slo4;
    s2[5] = t2shi2 ^ ~t2shi3 & t2shi4;
    s2[14] = t2slo7 ^ ~t2slo8 & t2slo9;
    s2[15] = t2shi7 ^ ~t2shi8 & t2shi9;
    s2[24] = t2slo12 ^ ~t2slo13 & t2slo14;
    s2[25] = t2shi12 ^ ~t2shi13 & t2shi14;
    s2[34] = t2slo17 ^ ~t2slo18 & t2slo19;
    s2[35] = t2shi17 ^ ~t2shi18 & t2shi19;
    s2[44] = t2slo22 ^ ~t2slo23 & t2slo24;
    s2[45] = t2shi22 ^ ~t2shi23 & t2shi24;
    s2[6] = t2slo3 ^ ~t2slo4 & t2slo0;
    s2[7] = t2shi3 ^ ~t2shi4 & t2shi0;
    s2[16] = t2slo8 ^ ~t2slo9 & t2slo5;
    s2[17] = t2shi8 ^ ~t2shi9 & t2shi5;
    s2[26] = t2slo13 ^ ~t2slo14 & t2slo10;
    s2[27] = t2shi13 ^ ~t2shi14 & t2shi10;
    s2[36] = t2slo18 ^ ~t2slo19 & t2slo15;
    s2[37] = t2shi18 ^ ~t2shi19 & t2shi15;
    s2[46] = t2slo23 ^ ~t2slo24 & t2slo20;
    s2[47] = t2shi23 ^ ~t2shi24 & t2shi20;
    s2[8] = t2slo4 ^ ~t2slo0 & t2slo1;
    s2[9] = t2shi4 ^ ~t2shi0 & t2shi1;
    s2[18] = t2slo9 ^ ~t2slo5 & t2slo6;
    s2[19] = t2shi9 ^ ~t2shi5 & t2shi6;
    s2[28] = t2slo14 ^ ~t2slo10 & t2slo11;
    s2[29] = t2shi14 ^ ~t2shi10 & t2shi11;
    s2[38] = t2slo19 ^ ~t2slo15 & t2slo16;
    s2[39] = t2shi19 ^ ~t2shi15 & t2shi16;
    s2[48] = t2slo24 ^ ~t2slo20 & t2slo21;
    s2[49] = t2shi24 ^ ~t2shi20 & t2shi21;
    s2[0] ^= P1600_ROUND_CONSTANTS[round * 2];
    s2[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
  }
};
const keccakState = keccakStateUnroll;
function Keccak() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  this.blockSize = null;
  this.count = 0;
  this.squeezing = false;
}
Keccak.prototype.initialize = function(rate, capacity) {
  for (let i = 0; i < 50; ++i)
    this.state[i] = 0;
  this.blockSize = rate / 8;
  this.count = 0;
  this.squeezing = false;
};
Keccak.prototype.absorb = function(data) {
  for (let i = 0; i < data.length; ++i) {
    this.state[~~(this.count / 4)] ^= data[i] << 8 * (this.count % 4);
    this.count += 1;
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }
};
Keccak.prototype.absorbLastFewBits = function(bits) {
  this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
  if ((bits & 128) !== 0 && this.count === this.blockSize - 1)
    keccakState.p1600(this.state);
  this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4);
  keccakState.p1600(this.state);
  this.count = 0;
  this.squeezing = true;
};
Keccak.prototype.squeeze = function(length) {
  if (!this.squeezing)
    this.absorbLastFewBits(1);
  const output = Buffer.alloc(length);
  for (let i = 0; i < length; ++i) {
    output[i] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255;
    this.count += 1;
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }
  return output;
};
Keccak.prototype.copy = function(dest) {
  for (let i = 0; i < 50; ++i)
    dest.state[i] = this.state[i];
  dest.blockSize = this.blockSize;
  dest.count = this.count;
  dest.squeezing = this.squeezing;
};
var keccak$1 = Keccak;
var js = api(keccak$1);
const createKeccakHash = js;
const BN$1 = bnExports;
function zeros(bytes) {
  return Buffer.allocUnsafe(bytes).fill(0);
}
function setLength(msg, length, right) {
  const buf = zeros(length);
  msg = toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf;
    }
    return msg.slice(0, length);
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf;
    }
    return msg.slice(-length);
  }
}
function setLengthRight(msg, length) {
  return setLength(msg, length, true);
}
function toBuffer(v2) {
  if (!Buffer.isBuffer(v2)) {
    if (Array.isArray(v2)) {
      v2 = Buffer.from(v2);
    } else if (typeof v2 === "string") {
      if (isHexString(v2)) {
        v2 = Buffer.from(padToEven(stripHexPrefix(v2)), "hex");
      } else {
        v2 = Buffer.from(v2);
      }
    } else if (typeof v2 === "number") {
      v2 = intToBuffer(v2);
    } else if (v2 === null || v2 === void 0) {
      v2 = Buffer.allocUnsafe(0);
    } else if (BN$1.isBN(v2)) {
      v2 = v2.toArrayLike(Buffer);
    } else if (v2.toArray) {
      v2 = Buffer.from(v2.toArray());
    } else {
      throw new Error("invalid type");
    }
  }
  return v2;
}
function bufferToHex(buf) {
  buf = toBuffer(buf);
  return "0x" + buf.toString("hex");
}
function keccak(a2, bits) {
  a2 = toBuffer(a2);
  if (!bits)
    bits = 256;
  return createKeccakHash("keccak" + bits).update(a2).digest();
}
function padToEven(str) {
  return str.length % 2 ? "0" + str : str;
}
function isHexString(str) {
  return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
}
function stripHexPrefix(str) {
  if (typeof str === "string" && str.startsWith("0x")) {
    return str.slice(2);
  }
  return str;
}
var util$4 = {
  zeros,
  setLength,
  setLengthRight,
  isHexString,
  stripHexPrefix,
  toBuffer,
  bufferToHex,
  keccak
};
const util$3 = util$4;
const BN = bnExports;
function elementaryName(name2) {
  if (name2.startsWith("int[")) {
    return "int256" + name2.slice(3);
  } else if (name2 === "int") {
    return "int256";
  } else if (name2.startsWith("uint[")) {
    return "uint256" + name2.slice(4);
  } else if (name2 === "uint") {
    return "uint256";
  } else if (name2.startsWith("fixed[")) {
    return "fixed128x128" + name2.slice(5);
  } else if (name2 === "fixed") {
    return "fixed128x128";
  } else if (name2.startsWith("ufixed[")) {
    return "ufixed128x128" + name2.slice(6);
  } else if (name2 === "ufixed") {
    return "ufixed128x128";
  }
  return name2;
}
function parseTypeN(type) {
  return parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
}
function parseTypeNxM(type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
  return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
}
function parseTypeArray(type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/);
  if (tmp) {
    return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
  }
  return null;
}
function parseNumber(arg) {
  var type = typeof arg;
  if (type === "string") {
    if (util$3.isHexString(arg)) {
      return new BN(util$3.stripHexPrefix(arg), 16);
    } else {
      return new BN(arg, 10);
    }
  } else if (type === "number") {
    return new BN(arg);
  } else if (arg.toArray) {
    return arg;
  } else {
    throw new Error("Argument is not a number");
  }
}
function encodeSingle(type, arg) {
  var size, num, ret, i;
  if (type === "address") {
    return encodeSingle("uint160", parseNumber(arg));
  } else if (type === "bool") {
    return encodeSingle("uint8", arg ? 1 : 0);
  } else if (type === "string") {
    return encodeSingle("bytes", new Buffer(arg, "utf8"));
  } else if (isArray$1(type)) {
    if (typeof arg.length === "undefined") {
      throw new Error("Not an array?");
    }
    size = parseTypeArray(type);
    if (size !== "dynamic" && size !== 0 && arg.length > size) {
      throw new Error("Elements exceed array size: " + size);
    }
    ret = [];
    type = type.slice(0, type.lastIndexOf("["));
    if (typeof arg === "string") {
      arg = JSON.parse(arg);
    }
    for (i in arg) {
      ret.push(encodeSingle(type, arg[i]));
    }
    if (size === "dynamic") {
      var length = encodeSingle("uint256", arg.length);
      ret.unshift(length);
    }
    return Buffer.concat(ret);
  } else if (type === "bytes") {
    arg = new Buffer(arg);
    ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
    if (arg.length % 32 !== 0) {
      ret = Buffer.concat([ret, util$3.zeros(32 - arg.length % 32)]);
    }
    return ret;
  } else if (type.startsWith("bytes")) {
    size = parseTypeN(type);
    if (size < 1 || size > 32) {
      throw new Error("Invalid bytes<N> width: " + size);
    }
    return util$3.setLengthRight(arg, 32);
  } else if (type.startsWith("uint")) {
    size = parseTypeN(type);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid uint<N> width: " + size);
    }
    num = parseNumber(arg);
    if (num.bitLength() > size) {
      throw new Error("Supplied uint exceeds width: " + size + " vs " + num.bitLength());
    }
    if (num < 0) {
      throw new Error("Supplied uint is negative");
    }
    return num.toArrayLike(Buffer, "be", 32);
  } else if (type.startsWith("int")) {
    size = parseTypeN(type);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error("Invalid int<N> width: " + size);
    }
    num = parseNumber(arg);
    if (num.bitLength() > size) {
      throw new Error("Supplied int exceeds width: " + size + " vs " + num.bitLength());
    }
    return num.toTwos(256).toArrayLike(Buffer, "be", 32);
  } else if (type.startsWith("ufixed")) {
    size = parseTypeNxM(type);
    num = parseNumber(arg);
    if (num < 0) {
      throw new Error("Supplied ufixed is negative");
    }
    return encodeSingle("uint256", num.mul(new BN(2).pow(new BN(size[1]))));
  } else if (type.startsWith("fixed")) {
    size = parseTypeNxM(type);
    return encodeSingle("int256", parseNumber(arg).mul(new BN(2).pow(new BN(size[1]))));
  }
  throw new Error("Unsupported or invalid type: " + type);
}
function isDynamic(type) {
  return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
}
function isArray$1(type) {
  return type.lastIndexOf("]") === type.length - 1;
}
function rawEncode(types2, values) {
  var output = [];
  var data = [];
  var headLength = 32 * types2.length;
  for (var i in types2) {
    var type = elementaryName(types2[i]);
    var value = values[i];
    var cur = encodeSingle(type, value);
    if (isDynamic(type)) {
      output.push(encodeSingle("uint256", headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output.push(cur);
    }
  }
  return Buffer.concat(output.concat(data));
}
function solidityPack(types2, values) {
  if (types2.length !== values.length) {
    throw new Error("Number of types are not matching the values");
  }
  var size, num;
  var ret = [];
  for (var i = 0; i < types2.length; i++) {
    var type = elementaryName(types2[i]);
    var value = values[i];
    if (type === "bytes") {
      ret.push(value);
    } else if (type === "string") {
      ret.push(new Buffer(value, "utf8"));
    } else if (type === "bool") {
      ret.push(new Buffer(value ? "01" : "00", "hex"));
    } else if (type === "address") {
      ret.push(util$3.setLength(value, 20));
    } else if (type.startsWith("bytes")) {
      size = parseTypeN(type);
      if (size < 1 || size > 32) {
        throw new Error("Invalid bytes<N> width: " + size);
      }
      ret.push(util$3.setLengthRight(value, size));
    } else if (type.startsWith("uint")) {
      size = parseTypeN(type);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error("Invalid uint<N> width: " + size);
      }
      num = parseNumber(value);
      if (num.bitLength() > size) {
        throw new Error("Supplied uint exceeds width: " + size + " vs " + num.bitLength());
      }
      ret.push(num.toArrayLike(Buffer, "be", size / 8));
    } else if (type.startsWith("int")) {
      size = parseTypeN(type);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error("Invalid int<N> width: " + size);
      }
      num = parseNumber(value);
      if (num.bitLength() > size) {
        throw new Error("Supplied int exceeds width: " + size + " vs " + num.bitLength());
      }
      ret.push(num.toTwos(size).toArrayLike(Buffer, "be", size / 8));
    } else {
      throw new Error("Unsupported or invalid type: " + type);
    }
  }
  return Buffer.concat(ret);
}
function soliditySHA3(types2, values) {
  return util$3.keccak(solidityPack(types2, values));
}
var abi$1 = {
  rawEncode,
  solidityPack,
  soliditySHA3
};
const util$2 = util$4;
const abi = abi$1;
const TYPED_MESSAGE_SCHEMA = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
};
const TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(primaryType, data, types2, useV4 = true) {
    const encodedTypes = ["bytes32"];
    const encodedValues = [this.hashType(primaryType, types2)];
    if (useV4) {
      const encodeField = (name2, type, value) => {
        if (types2[type] !== void 0) {
          return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util$2.keccak(this.encodeData(type, value, types2, useV4))];
        }
        if (value === void 0)
          throw new Error(`missing value for field ${name2} of type ${type}`);
        if (type === "bytes") {
          return ["bytes32", util$2.keccak(value)];
        }
        if (type === "string") {
          if (typeof value === "string") {
            value = Buffer.from(value, "utf8");
          }
          return ["bytes32", util$2.keccak(value)];
        }
        if (type.lastIndexOf("]") === type.length - 1) {
          const parsedType = type.slice(0, type.lastIndexOf("["));
          const typeValuePairs = value.map((item) => encodeField(name2, parsedType, item));
          return ["bytes32", util$2.keccak(abi.rawEncode(
            typeValuePairs.map(([type2]) => type2),
            typeValuePairs.map(([, value2]) => value2)
          ))];
        }
        return [type, value];
      };
      for (const field of types2[primaryType]) {
        const [type, value] = encodeField(field.name, field.type, data[field.name]);
        encodedTypes.push(type);
        encodedValues.push(value);
      }
    } else {
      for (const field of types2[primaryType]) {
        let value = data[field.name];
        if (value !== void 0) {
          if (field.type === "bytes") {
            encodedTypes.push("bytes32");
            value = util$2.keccak(value);
            encodedValues.push(value);
          } else if (field.type === "string") {
            encodedTypes.push("bytes32");
            if (typeof value === "string") {
              value = Buffer.from(value, "utf8");
            }
            value = util$2.keccak(value);
            encodedValues.push(value);
          } else if (types2[field.type] !== void 0) {
            encodedTypes.push("bytes32");
            value = util$2.keccak(this.encodeData(field.type, value, types2, useV4));
            encodedValues.push(value);
          } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
            throw new Error("Arrays currently unimplemented in encodeData");
          } else {
            encodedTypes.push(field.type);
            encodedValues.push(value);
          }
        }
      }
    }
    return abi.rawEncode(encodedTypes, encodedValues);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(primaryType, types2) {
    let result = "";
    let deps = this.findTypeDependencies(primaryType, types2).filter((dep) => dep !== primaryType);
    deps = [primaryType].concat(deps.sort());
    for (const type of deps) {
      const children = types2[type];
      if (!children) {
        throw new Error("No type definition specified: " + type);
      }
      result += type + "(" + types2[type].map(({ name: name2, type: type2 }) => type2 + " " + name2).join(",") + ")";
    }
    return result;
  },
  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(primaryType, types2, results = []) {
    primaryType = primaryType.match(/^\w*/)[0];
    if (results.includes(primaryType) || types2[primaryType] === void 0) {
      return results;
    }
    results.push(primaryType);
    for (const field of types2[primaryType]) {
      for (const dep of this.findTypeDependencies(field.type, types2, results)) {
        !results.includes(dep) && results.push(dep);
      }
    }
    return results;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(primaryType, data, types2, useV4 = true) {
    return util$2.keccak(this.encodeData(primaryType, data, types2, useV4));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(primaryType, types2) {
    return util$2.keccak(this.encodeType(primaryType, types2));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(data) {
    const sanitizedData = {};
    for (const key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key]);
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
    }
    return sanitizedData;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(typedData, useV4 = true) {
    const sanitizedData = this.sanitizeData(typedData);
    const parts = [Buffer.from("1901", "hex")];
    parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
    if (sanitizedData.primaryType !== "EIP712Domain") {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
    }
    return util$2.keccak(Buffer.concat(parts));
  }
};
var ethEip712Util = {
  TYPED_MESSAGE_SCHEMA,
  TypedDataUtils,
  hashForSignTypedDataLegacy: function(msgParams) {
    return typedSignatureHashLegacy(msgParams.data);
  },
  hashForSignTypedData_v3: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data, false);
  },
  hashForSignTypedData_v4: function(msgParams) {
    return TypedDataUtils.hash(msgParams.data);
  }
};
function typedSignatureHashLegacy(typedData) {
  const error = new Error("Expect argument to be non-empty array");
  if (typeof typedData !== "object" || !typedData.length)
    throw error;
  const data = typedData.map(function(e2) {
    return e2.type === "bytes" ? util$2.toBuffer(e2.value) : e2.value;
  });
  const types2 = typedData.map(function(e2) {
    return e2.type;
  });
  const schema = typedData.map(function(e2) {
    if (!e2.name)
      throw error;
    return e2.type + " " + e2.name;
  });
  return abi.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
      abi.soliditySHA3(types2, data)
    ]
  );
}
var FilterPolyfill$1 = {};
Object.defineProperty(FilterPolyfill$1, "__esModule", { value: true });
FilterPolyfill$1.filterFromParam = FilterPolyfill$1.FilterPolyfill = void 0;
const types_1$2 = types$2;
const util_1$6 = util$5;
const TIMEOUT = 5 * 60 * 1e3;
const JSONRPC_TEMPLATE = {
  jsonrpc: "2.0",
  id: 0
};
class FilterPolyfill {
  constructor(provider) {
    this.logFilters = /* @__PURE__ */ new Map();
    this.blockFilters = /* @__PURE__ */ new Set();
    this.pendingTransactionFilters = /* @__PURE__ */ new Set();
    this.cursors = /* @__PURE__ */ new Map();
    this.timeouts = /* @__PURE__ */ new Map();
    this.nextFilterId = (0, types_1$2.IntNumber)(1);
    this.provider = provider;
  }
  async newFilter(param) {
    const filter2 = filterFromParam(param);
    const id = this.makeFilterId();
    const cursor = await this.setInitialCursorPosition(id, filter2.fromBlock);
    console.log(`Installing new log filter(${id}):`, filter2, "initial cursor position:", cursor);
    this.logFilters.set(id, filter2);
    this.setFilterTimeout(id);
    return (0, util_1$6.hexStringFromIntNumber)(id);
  }
  async newBlockFilter() {
    const id = this.makeFilterId();
    const cursor = await this.setInitialCursorPosition(id, "latest");
    console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
    this.blockFilters.add(id);
    this.setFilterTimeout(id);
    return (0, util_1$6.hexStringFromIntNumber)(id);
  }
  async newPendingTransactionFilter() {
    const id = this.makeFilterId();
    const cursor = await this.setInitialCursorPosition(id, "latest");
    console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
    this.pendingTransactionFilters.add(id);
    this.setFilterTimeout(id);
    return (0, util_1$6.hexStringFromIntNumber)(id);
  }
  uninstallFilter(filterId) {
    const id = (0, util_1$6.intNumberFromHexString)(filterId);
    console.log(`Uninstalling filter (${id})`);
    this.deleteFilter(id);
    return true;
  }
  getFilterChanges(filterId) {
    const id = (0, util_1$6.intNumberFromHexString)(filterId);
    if (this.timeouts.has(id)) {
      this.setFilterTimeout(id);
    }
    if (this.logFilters.has(id)) {
      return this.getLogFilterChanges(id);
    } else if (this.blockFilters.has(id)) {
      return this.getBlockFilterChanges(id);
    } else if (this.pendingTransactionFilters.has(id)) {
      return this.getPendingTransactionFilterChanges(id);
    }
    return Promise.resolve(filterNotFoundError());
  }
  async getFilterLogs(filterId) {
    const id = (0, util_1$6.intNumberFromHexString)(filterId);
    const filter2 = this.logFilters.get(id);
    if (!filter2) {
      return filterNotFoundError();
    }
    return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [paramFromFilter(filter2)] }));
  }
  makeFilterId() {
    return (0, types_1$2.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(request) {
    return new Promise((resolve, reject) => {
      this.provider.sendAsync(request, (err, response) => {
        if (err) {
          return reject(err);
        }
        if (Array.isArray(response) || response == null) {
          return reject(new Error(`unexpected response received: ${JSON.stringify(response)}`));
        }
        resolve(response);
      });
    });
  }
  deleteFilter(id) {
    console.log(`Deleting filter (${id})`);
    this.logFilters.delete(id);
    this.blockFilters.delete(id);
    this.pendingTransactionFilters.delete(id);
    this.cursors.delete(id);
    this.timeouts.delete(id);
  }
  async getLogFilterChanges(id) {
    const filter2 = this.logFilters.get(id);
    const cursorPosition = this.cursors.get(id);
    if (!cursorPosition || !filter2) {
      return filterNotFoundError();
    }
    const currentBlockHeight = await this.getCurrentBlockHeight();
    const toBlock = filter2.toBlock === "latest" ? currentBlockHeight : filter2.toBlock;
    if (cursorPosition > currentBlockHeight) {
      return emptyResult();
    }
    if (cursorPosition > filter2.toBlock) {
      return emptyResult();
    }
    console.log(`Fetching logs from ${cursorPosition} to ${toBlock} for filter ${id}`);
    const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getLogs", params: [
      paramFromFilter(Object.assign(Object.assign({}, filter2), { fromBlock: cursorPosition, toBlock }))
    ] }));
    if (Array.isArray(response.result)) {
      const blocks = response.result.map((log) => (0, util_1$6.intNumberFromHexString)(log.blockNumber || "0x0"));
      const highestBlock = Math.max(...blocks);
      if (highestBlock && highestBlock > cursorPosition) {
        const newCursorPosition = (0, types_1$2.IntNumber)(highestBlock + 1);
        console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
        this.cursors.set(id, newCursorPosition);
      }
    }
    return response;
  }
  async getBlockFilterChanges(id) {
    const cursorPosition = this.cursors.get(id);
    if (!cursorPosition) {
      return filterNotFoundError();
    }
    const currentBlockHeight = await this.getCurrentBlockHeight();
    if (cursorPosition > currentBlockHeight) {
      return emptyResult();
    }
    console.log(`Fetching blocks from ${cursorPosition} to ${currentBlockHeight} for filter (${id})`);
    const blocks = (await Promise.all(
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (0, util_1$6.range)(cursorPosition, currentBlockHeight + 1).map((i) => this.getBlockHashByNumber((0, types_1$2.IntNumber)(i)))
    )).filter((hash2) => !!hash2);
    const newCursorPosition = (0, types_1$2.IntNumber)(cursorPosition + blocks.length);
    console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
    this.cursors.set(id, newCursorPosition);
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: blocks });
  }
  async getPendingTransactionFilterChanges(_id) {
    return Promise.resolve(emptyResult());
  }
  async setInitialCursorPosition(id, startBlock) {
    const currentBlockHeight = await this.getCurrentBlockHeight();
    const initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight ? startBlock : currentBlockHeight;
    this.cursors.set(id, initialCursorPosition);
    return initialCursorPosition;
  }
  setFilterTimeout(id) {
    const existing = this.timeouts.get(id);
    if (existing) {
      window.clearTimeout(existing);
    }
    const timeout2 = window.setTimeout(() => {
      console.log(`Filter (${id}) timed out`);
      this.deleteFilter(id);
    }, TIMEOUT);
    this.timeouts.set(id, timeout2);
  }
  async getCurrentBlockHeight() {
    const { result } = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_blockNumber", params: [] }));
    return (0, util_1$6.intNumberFromHexString)((0, util_1$6.ensureHexString)(result));
  }
  async getBlockHashByNumber(blockNumber) {
    const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { method: "eth_getBlockByNumber", params: [(0, util_1$6.hexStringFromIntNumber)(blockNumber), false] }));
    if (response.result && typeof response.result.hash === "string") {
      return (0, util_1$6.ensureHexString)(response.result.hash);
    }
    return null;
  }
}
FilterPolyfill$1.FilterPolyfill = FilterPolyfill;
function filterFromParam(param) {
  return {
    fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
    toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
    addresses: param.address === void 0 ? null : Array.isArray(param.address) ? param.address : [param.address],
    topics: param.topics || []
  };
}
FilterPolyfill$1.filterFromParam = filterFromParam;
function paramFromFilter(filter2) {
  const param = {
    fromBlock: hexBlockHeightFromIntBlockHeight(filter2.fromBlock),
    toBlock: hexBlockHeightFromIntBlockHeight(filter2.toBlock),
    topics: filter2.topics
  };
  if (filter2.addresses !== null) {
    param.address = filter2.addresses;
  }
  return param;
}
function intBlockHeightFromHexBlockHeight(value) {
  if (value === void 0 || value === "latest" || value === "pending") {
    return "latest";
  } else if (value === "earliest") {
    return (0, types_1$2.IntNumber)(0);
  } else if ((0, util_1$6.isHexString)(value)) {
    return (0, util_1$6.intNumberFromHexString)(value);
  }
  throw new Error(`Invalid block option: ${String(value)}`);
}
function hexBlockHeightFromIntBlockHeight(value) {
  if (value === "latest") {
    return value;
  }
  return (0, util_1$6.hexStringFromIntNumber)(value);
}
function filterNotFoundError() {
  return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { error: { code: -32e3, message: "filter not found" } });
}
function emptyResult() {
  return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), { result: [] });
}
var JSONRPC = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.JSONRPCMethod = void 0;
  (function(JSONRPCMethod) {
    JSONRPCMethod["eth_accounts"] = "eth_accounts";
    JSONRPCMethod["eth_coinbase"] = "eth_coinbase";
    JSONRPCMethod["net_version"] = "net_version";
    JSONRPCMethod["eth_chainId"] = "eth_chainId";
    JSONRPCMethod["eth_uninstallFilter"] = "eth_uninstallFilter";
    JSONRPCMethod["eth_requestAccounts"] = "eth_requestAccounts";
    JSONRPCMethod["eth_sign"] = "eth_sign";
    JSONRPCMethod["eth_ecRecover"] = "eth_ecRecover";
    JSONRPCMethod["personal_sign"] = "personal_sign";
    JSONRPCMethod["personal_ecRecover"] = "personal_ecRecover";
    JSONRPCMethod["eth_signTransaction"] = "eth_signTransaction";
    JSONRPCMethod["eth_sendRawTransaction"] = "eth_sendRawTransaction";
    JSONRPCMethod["eth_sendTransaction"] = "eth_sendTransaction";
    JSONRPCMethod["eth_signTypedData_v1"] = "eth_signTypedData_v1";
    JSONRPCMethod["eth_signTypedData_v2"] = "eth_signTypedData_v2";
    JSONRPCMethod["eth_signTypedData_v3"] = "eth_signTypedData_v3";
    JSONRPCMethod["eth_signTypedData_v4"] = "eth_signTypedData_v4";
    JSONRPCMethod["eth_signTypedData"] = "eth_signTypedData";
    JSONRPCMethod["cbWallet_arbitrary"] = "walletlink_arbitrary";
    JSONRPCMethod["wallet_addEthereumChain"] = "wallet_addEthereumChain";
    JSONRPCMethod["wallet_switchEthereumChain"] = "wallet_switchEthereumChain";
    JSONRPCMethod["wallet_watchAsset"] = "wallet_watchAsset";
    JSONRPCMethod["eth_subscribe"] = "eth_subscribe";
    JSONRPCMethod["eth_unsubscribe"] = "eth_unsubscribe";
    JSONRPCMethod["eth_newFilter"] = "eth_newFilter";
    JSONRPCMethod["eth_newBlockFilter"] = "eth_newBlockFilter";
    JSONRPCMethod["eth_newPendingTransactionFilter"] = "eth_newPendingTransactionFilter";
    JSONRPCMethod["eth_getFilterChanges"] = "eth_getFilterChanges";
    JSONRPCMethod["eth_getFilterLogs"] = "eth_getFilterLogs";
  })(exports2.JSONRPCMethod || (exports2.JSONRPCMethod = {}));
})(JSONRPC);
var SubscriptionManager$1 = {};
const processFn$1 = (fn, opts) => function() {
  const P2 = opts.promiseModule;
  const args = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }
  return new P2((resolve, reject) => {
    if (opts.errorFirst) {
      args.push(function(err, result) {
        if (opts.multiArgs) {
          const results = new Array(arguments.length - 1);
          for (let i = 1; i < arguments.length; i++) {
            results[i - 1] = arguments[i];
          }
          if (err) {
            results.unshift(err);
            reject(results);
          } else {
            resolve(results);
          }
        } else if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      args.push(function(result) {
        if (opts.multiArgs) {
          const results = new Array(arguments.length - 1);
          for (let i = 0; i < arguments.length; i++) {
            results[i] = arguments[i];
          }
          resolve(results);
        } else {
          resolve(result);
        }
      });
    }
    fn.apply(this, args);
  });
};
var pify$3 = (obj, opts) => {
  opts = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: true,
    promiseModule: Promise
  }, opts);
  const filter2 = (key) => {
    const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
    return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
  };
  let ret;
  if (typeof obj === "function") {
    ret = function() {
      if (opts.excludeMain) {
        return obj.apply(this, arguments);
      }
      return processFn$1(obj, opts).apply(this, arguments);
    };
  } else {
    ret = Object.create(Object.getPrototypeOf(obj));
  }
  for (const key in obj) {
    const x2 = obj[key];
    ret[key] = typeof x2 === "function" && filter2(key) ? processFn$1(x2, opts) : x2;
  }
  return ret;
};
var immutable = extend$1;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function extend$1() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty$1.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var jsonRpcRandomId = IdIterator;
function IdIterator(opts) {
  opts = opts || {};
  var max2 = opts.max || Number.MAX_SAFE_INTEGER;
  var idCounter2 = typeof opts.start !== "undefined" ? opts.start : Math.floor(Math.random() * max2);
  return function createRandomId2() {
    idCounter2 = idCounter2 % max2;
    return idCounter2++;
  };
}
const extend = immutable;
const createRandomId = jsonRpcRandomId();
var ethQuery = EthQuery$1;
function EthQuery$1(provider) {
  const self2 = this;
  self2.currentProvider = provider;
}
EthQuery$1.prototype.getBalance = generateFnWithDefaultBlockFor(2, "eth_getBalance");
EthQuery$1.prototype.getCode = generateFnWithDefaultBlockFor(2, "eth_getCode");
EthQuery$1.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, "eth_getTransactionCount");
EthQuery$1.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, "eth_getStorageAt");
EthQuery$1.prototype.call = generateFnWithDefaultBlockFor(2, "eth_call");
EthQuery$1.prototype.protocolVersion = generateFnFor("eth_protocolVersion");
EthQuery$1.prototype.syncing = generateFnFor("eth_syncing");
EthQuery$1.prototype.coinbase = generateFnFor("eth_coinbase");
EthQuery$1.prototype.mining = generateFnFor("eth_mining");
EthQuery$1.prototype.hashrate = generateFnFor("eth_hashrate");
EthQuery$1.prototype.gasPrice = generateFnFor("eth_gasPrice");
EthQuery$1.prototype.accounts = generateFnFor("eth_accounts");
EthQuery$1.prototype.blockNumber = generateFnFor("eth_blockNumber");
EthQuery$1.prototype.getBlockTransactionCountByHash = generateFnFor("eth_getBlockTransactionCountByHash");
EthQuery$1.prototype.getBlockTransactionCountByNumber = generateFnFor("eth_getBlockTransactionCountByNumber");
EthQuery$1.prototype.getUncleCountByBlockHash = generateFnFor("eth_getUncleCountByBlockHash");
EthQuery$1.prototype.getUncleCountByBlockNumber = generateFnFor("eth_getUncleCountByBlockNumber");
EthQuery$1.prototype.sign = generateFnFor("eth_sign");
EthQuery$1.prototype.sendTransaction = generateFnFor("eth_sendTransaction");
EthQuery$1.prototype.sendRawTransaction = generateFnFor("eth_sendRawTransaction");
EthQuery$1.prototype.estimateGas = generateFnFor("eth_estimateGas");
EthQuery$1.prototype.getBlockByHash = generateFnFor("eth_getBlockByHash");
EthQuery$1.prototype.getBlockByNumber = generateFnFor("eth_getBlockByNumber");
EthQuery$1.prototype.getTransactionByHash = generateFnFor("eth_getTransactionByHash");
EthQuery$1.prototype.getTransactionByBlockHashAndIndex = generateFnFor("eth_getTransactionByBlockHashAndIndex");
EthQuery$1.prototype.getTransactionByBlockNumberAndIndex = generateFnFor("eth_getTransactionByBlockNumberAndIndex");
EthQuery$1.prototype.getTransactionReceipt = generateFnFor("eth_getTransactionReceipt");
EthQuery$1.prototype.getUncleByBlockHashAndIndex = generateFnFor("eth_getUncleByBlockHashAndIndex");
EthQuery$1.prototype.getUncleByBlockNumberAndIndex = generateFnFor("eth_getUncleByBlockNumberAndIndex");
EthQuery$1.prototype.getCompilers = generateFnFor("eth_getCompilers");
EthQuery$1.prototype.compileLLL = generateFnFor("eth_compileLLL");
EthQuery$1.prototype.compileSolidity = generateFnFor("eth_compileSolidity");
EthQuery$1.prototype.compileSerpent = generateFnFor("eth_compileSerpent");
EthQuery$1.prototype.newFilter = generateFnFor("eth_newFilter");
EthQuery$1.prototype.newBlockFilter = generateFnFor("eth_newBlockFilter");
EthQuery$1.prototype.newPendingTransactionFilter = generateFnFor("eth_newPendingTransactionFilter");
EthQuery$1.prototype.uninstallFilter = generateFnFor("eth_uninstallFilter");
EthQuery$1.prototype.getFilterChanges = generateFnFor("eth_getFilterChanges");
EthQuery$1.prototype.getFilterLogs = generateFnFor("eth_getFilterLogs");
EthQuery$1.prototype.getLogs = generateFnFor("eth_getLogs");
EthQuery$1.prototype.getWork = generateFnFor("eth_getWork");
EthQuery$1.prototype.submitWork = generateFnFor("eth_submitWork");
EthQuery$1.prototype.submitHashrate = generateFnFor("eth_submitHashrate");
EthQuery$1.prototype.sendAsync = function(opts, cb) {
  const self2 = this;
  self2.currentProvider.sendAsync(createPayload(opts), function(err, response) {
    if (!err && response.error)
      err = new Error("EthQuery - RPC Error - " + response.error.message);
    if (err)
      return cb(err);
    cb(null, response.result);
  });
};
function generateFnFor(methodName) {
  return function() {
    const self2 = this;
    var args = [].slice.call(arguments);
    var cb = args.pop();
    self2.sendAsync({
      method: methodName,
      params: args
    }, cb);
  };
}
function generateFnWithDefaultBlockFor(argCount, methodName) {
  return function() {
    const self2 = this;
    var args = [].slice.call(arguments);
    var cb = args.pop();
    if (args.length < argCount)
      args.push("latest");
    self2.sendAsync({
      method: methodName,
      params: args
    }, cb);
  };
}
function createPayload(data) {
  return extend({
    // defaults
    id: createRandomId(),
    jsonrpc: "2.0",
    params: []
    // user-specified
  }, data);
}
var util$1 = {};
var types$1 = {};
var hasSymbols2 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols2() && !!Symbol.toStringTag;
};
var hasToStringTag$4 = shams();
var callBound$2 = callBound$4;
var $toString$2 = callBound$2("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$4 && value && typeof value === "object" && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$2(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments2(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$2(value) !== "[object Array]" && $toString$2(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments;
var isArguments3 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
var toStr$2 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$3 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
  if (!hasToStringTag$3) {
    return false;
  }
  try {
    return Function("return function*() {}")();
  } catch (e2) {
  }
};
var GeneratorFunction;
var isGeneratorFunction = function isGeneratorFunction2(fn) {
  if (typeof fn !== "function") {
    return false;
  }
  if (isFnRegex.test(fnToStr$1.call(fn))) {
    return true;
  }
  if (!hasToStringTag$3) {
    var str = toStr$2.call(fn);
    return str === "[object GeneratorFunction]";
  }
  if (!getProto) {
    return false;
  }
  if (typeof GeneratorFunction === "undefined") {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }
  return getProto(fn) === GeneratorFunction;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_2) {
    if (_2 !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e2) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e2) {
    return false;
  }
};
var toStr$1 = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag$2 = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr$1.call(all) === toStr$1.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr$1.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e2) {
        }
      }
      return false;
    };
  }
}
var isCallable$1 = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e2) {
    if (e2 !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable2(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag$2) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$1.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};
var isCallable3 = isCallable$1;
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray2(array, iterator2, receiver) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (hasOwnProperty.call(array, i)) {
      if (receiver == null) {
        iterator2(array[i], i, array);
      } else {
        iterator2.call(receiver, array[i], i, array);
      }
    }
  }
};
var forEachString = function forEachString2(string, iterator2, receiver) {
  for (var i = 0, len = string.length; i < len; i++) {
    if (receiver == null) {
      iterator2(string.charAt(i), i, string);
    } else {
      iterator2.call(receiver, string.charAt(i), i, string);
    }
  }
};
var forEachObject = function forEachObject2(object, iterator2, receiver) {
  for (var k2 in object) {
    if (hasOwnProperty.call(object, k2)) {
      if (receiver == null) {
        iterator2(object[k2], k2, object);
      } else {
        iterator2.call(receiver, object[k2], k2, object);
      }
    }
  }
};
var forEach$2 = function forEach(list, iterator2, thisArg) {
  if (!isCallable3(iterator2)) {
    throw new TypeError("iterator must be a function");
  }
  var receiver;
  if (arguments.length >= 3) {
    receiver = thisArg;
  }
  if (toStr.call(list) === "[object Array]") {
    forEachArray(list, iterator2, receiver);
  } else if (typeof list === "string") {
    forEachString(list, iterator2, receiver);
  } else {
    forEachObject(list, iterator2, receiver);
  }
};
var forEach_1 = forEach$2;
var possibleNames = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
];
var g$4 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var availableTypedArrays$2 = function availableTypedArrays() {
  var out = [];
  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g$4[possibleNames[i]] === "function") {
      out[out.length] = possibleNames[i];
    }
  }
  return out;
};
var GetIntrinsic2 = getIntrinsic;
var $gOPD = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e2) {
    $gOPD = null;
  }
}
var gopd = $gOPD;
var forEach$1 = forEach_1;
var availableTypedArrays$1 = availableTypedArrays$2;
var callBound$1 = callBound$4;
var $toString$1 = callBound$1("Object.prototype.toString");
var hasToStringTag$1 = shams();
var gOPD$1 = gopd;
var g$3 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays$1 = availableTypedArrays$1();
var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf2(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
var $slice$1 = callBound$1("String.prototype.slice");
var toStrTags$1 = {};
var getPrototypeOf$1 = Object.getPrototypeOf;
if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
  forEach$1(typedArrays$1, function(typedArray) {
    var arr2 = new g$3[typedArray]();
    if (Symbol.toStringTag in arr2) {
      var proto = getPrototypeOf$1(arr2);
      var descriptor = gOPD$1(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf$1(proto);
        descriptor = gOPD$1(superProto, Symbol.toStringTag);
      }
      toStrTags$1[typedArray] = descriptor.get;
    }
  });
}
var tryTypedArrays$1 = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach$1(toStrTags$1, function(getter, typedArray) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray;
      } catch (e2) {
      }
    }
  });
  return anyTrue;
};
var isTypedArray$1 = function isTypedArray(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (!hasToStringTag$1 || !(Symbol.toStringTag in value)) {
    var tag = $slice$1($toString$1(value), 8, -1);
    return $indexOf(typedArrays$1, tag) > -1;
  }
  if (!gOPD$1) {
    return false;
  }
  return tryTypedArrays$1(value);
};
var forEach2 = forEach_1;
var availableTypedArrays2 = availableTypedArrays$2;
var callBound = callBound$4;
var gOPD = gopd;
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = shams();
var g$2 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays = availableTypedArrays2();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf;
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach2(typedArrays, function(typedArray) {
    if (typeof g$2[typedArray] === "function") {
      var arr2 = new g$2[typedArray]();
      if (Symbol.toStringTag in arr2) {
        var proto = getPrototypeOf(arr2);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
      }
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays2(value) {
  var foundName = false;
  forEach2(toStrTags, function(getter, typedArray) {
    if (!foundName) {
      try {
        var name2 = getter.call(value);
        if (name2 === typedArray) {
          foundName = name2;
        }
      } catch (e2) {
      }
    }
  });
  return foundName;
};
var isTypedArray2 = isTypedArray$1;
var whichTypedArray = function whichTypedArray2(value) {
  if (!isTypedArray2(value)) {
    return false;
  }
  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    return $slice($toString(value), 8, -1);
  }
  return tryTypedArrays(value);
};
(function(exports2) {
  var isArgumentsObject = isArguments3;
  var isGeneratorFunction$1 = isGeneratorFunction;
  var whichTypedArray$1 = whichTypedArray;
  var isTypedArray3 = isTypedArray$1;
  function uncurryThis(f2) {
    return f2.call.bind(f2);
  }
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue = uncurryThis(Number.prototype.valueOf);
  var stringValue = uncurryThis(String.prototype.valueOf);
  var booleanValue = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
  }
  if (SymbolSupported) {
    var symbolValue = uncurryThis(Symbol.prototype.valueOf);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e2) {
      return false;
    }
  }
  exports2.isArgumentsObject = isArgumentsObject;
  exports2.isGeneratorFunction = isGeneratorFunction$1;
  exports2.isTypedArray = isTypedArray3;
  function isPromise2(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
  }
  exports2.isPromise = isPromise2;
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray3(value) || isDataView(value);
  }
  exports2.isArrayBufferView = isArrayBufferView;
  function isUint8Array(value) {
    return whichTypedArray$1(value) === "Uint8Array";
  }
  exports2.isUint8Array = isUint8Array;
  function isUint8ClampedArray(value) {
    return whichTypedArray$1(value) === "Uint8ClampedArray";
  }
  exports2.isUint8ClampedArray = isUint8ClampedArray;
  function isUint16Array(value) {
    return whichTypedArray$1(value) === "Uint16Array";
  }
  exports2.isUint16Array = isUint16Array;
  function isUint32Array(value) {
    return whichTypedArray$1(value) === "Uint32Array";
  }
  exports2.isUint32Array = isUint32Array;
  function isInt8Array(value) {
    return whichTypedArray$1(value) === "Int8Array";
  }
  exports2.isInt8Array = isInt8Array;
  function isInt16Array(value) {
    return whichTypedArray$1(value) === "Int16Array";
  }
  exports2.isInt16Array = isInt16Array;
  function isInt32Array(value) {
    return whichTypedArray$1(value) === "Int32Array";
  }
  exports2.isInt32Array = isInt32Array;
  function isFloat32Array(value) {
    return whichTypedArray$1(value) === "Float32Array";
  }
  exports2.isFloat32Array = isFloat32Array;
  function isFloat64Array(value) {
    return whichTypedArray$1(value) === "Float64Array";
  }
  exports2.isFloat64Array = isFloat64Array;
  function isBigInt64Array(value) {
    return whichTypedArray$1(value) === "BigInt64Array";
  }
  exports2.isBigInt64Array = isBigInt64Array;
  function isBigUint64Array(value) {
    return whichTypedArray$1(value) === "BigUint64Array";
  }
  exports2.isBigUint64Array = isBigUint64Array;
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
  function isMap2(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  exports2.isMap = isMap2;
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
  function isSet2(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  exports2.isSet = isSet2;
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
  function isWeakMap2(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  exports2.isWeakMap = isWeakMap2;
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
  function isWeakSet2(value) {
    return isWeakSetToString(value);
  }
  exports2.isWeakSet = isWeakSet2;
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  exports2.isArrayBuffer = isArrayBuffer;
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  exports2.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  exports2.isSharedArrayBuffer = isSharedArrayBuffer;
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  exports2.isAsyncFunction = isAsyncFunction;
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  exports2.isMapIterator = isMapIterator;
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  exports2.isSetIterator = isSetIterator;
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  exports2.isGeneratorObject = isGeneratorObject;
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  exports2.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
  }
  exports2.isNumberObject = isNumberObject;
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
  }
  exports2.isStringObject = isStringObject;
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
  }
  exports2.isBooleanObject = isBooleanObject;
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
  }
  exports2.isBigIntObject = isBigIntObject;
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
  }
  exports2.isSymbolObject = isSymbolObject;
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  exports2.isBoxedPrimitive = isBoxedPrimitive;
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  exports2.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports2, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
})(types$1);
var isBufferBrowser = function isBuffer3(arg) {
  return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};
(function(exports2) {
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports2.format = function(f2) {
    if (!isString2(f2)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect2(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f2).replace(formatRegExp, function(x3) {
      if (x3 === "%%")
        return "%";
      if (i >= len)
        return x3;
      switch (x3) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_2) {
            return "[Circular]";
          }
        default:
          return x3;
      }
    });
    for (var x2 = args[i]; i < len; x2 = args[++i]) {
      if (isNull(x2) || !isObject2(x2)) {
        str += " " + x2;
      } else {
        str += " " + inspect2(x2);
      }
    }
    return str;
  };
  exports2.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return fn;
    }
    if (typeof process === "undefined") {
      return function() {
        return exports2.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if ({}.NODE_DEBUG) {
    var debugEnv = {}.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  exports2.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (debugEnvRegex.test(set)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports2.format.apply(exports2, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  function inspect2(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean2(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports2._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports2.inspect = inspect2;
  inspect2.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect2.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect2.styles[styleType];
    if (style) {
      return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash2 = {};
    array.forEach(function(val, idx) {
      hash2[val] = true;
    });
    return hash2;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction2(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports2.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString2(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError2(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction2(value)) {
        var name2 = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name2 + "]", "special");
      }
      if (isRegExp3(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate2(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError2(value)) {
        return formatError(value);
      }
    }
    var base2 = "", array = false, braces = ["{", "}"];
    if (isArray2(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction2(value)) {
      var n2 = value.name ? ": " + value.name : "";
      base2 = " [Function" + n2 + "]";
    }
    if (isRegExp3(value)) {
      base2 = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate2(value)) {
      base2 = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError2(value)) {
      base2 = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base2 + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp3(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base2, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString2(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber2(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean2(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l2 = value.length; i < l2; ++i) {
      if (hasOwnProperty2(value, String(i))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name2, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty2(visibleKeys, key)) {
      name2 = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name2)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name2 = JSON.stringify("" + key);
      if (name2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name2 = name2.slice(1, -1);
        name2 = ctx.stylize(name2, "name");
      } else {
        name2 = name2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name2 = ctx.stylize(name2, "string");
      }
    }
    return name2 + ": " + str;
  }
  function reduceToSingleString(output, base2, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0)
        ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
  }
  exports2.types = types$1;
  function isArray2(ar) {
    return Array.isArray(ar);
  }
  exports2.isArray = isArray2;
  function isBoolean2(arg) {
    return typeof arg === "boolean";
  }
  exports2.isBoolean = isBoolean2;
  function isNull(arg) {
    return arg === null;
  }
  exports2.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports2.isNullOrUndefined = isNullOrUndefined;
  function isNumber2(arg) {
    return typeof arg === "number";
  }
  exports2.isNumber = isNumber2;
  function isString2(arg) {
    return typeof arg === "string";
  }
  exports2.isString = isString2;
  function isSymbol2(arg) {
    return typeof arg === "symbol";
  }
  exports2.isSymbol = isSymbol2;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports2.isUndefined = isUndefined;
  function isRegExp3(re) {
    return isObject2(re) && objectToString2(re) === "[object RegExp]";
  }
  exports2.isRegExp = isRegExp3;
  exports2.types.isRegExp = isRegExp3;
  function isObject2(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports2.isObject = isObject2;
  function isDate2(d2) {
    return isObject2(d2) && objectToString2(d2) === "[object Date]";
  }
  exports2.isDate = isDate2;
  exports2.types.isDate = isDate2;
  function isError2(e2) {
    return isObject2(e2) && (objectToString2(e2) === "[object Error]" || e2 instanceof Error);
  }
  exports2.isError = isError2;
  exports2.types.isNativeError = isError2;
  function isFunction2(arg) {
    return typeof arg === "function";
  }
  exports2.isFunction = isFunction2;
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports2.isPrimitive = isPrimitive;
  exports2.isBuffer = isBufferBrowser;
  function objectToString2(o2) {
    return Object.prototype.toString.call(o2);
  }
  function pad(n2) {
    return n2 < 10 ? "0" + n2.toString(10) : n2.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp2() {
    var d2 = new Date();
    var time = [
      pad(d2.getHours()),
      pad(d2.getMinutes()),
      pad(d2.getSeconds())
    ].join(":");
    return [d2.getDate(), months[d2.getMonth()], time].join(" ");
  }
  exports2.log = function() {
    console.log("%s - %s", timestamp2(), exports2.format.apply(exports2, arguments));
  };
  exports2.inherits = inherits_browserExports;
  exports2._extend = function(origin, add) {
    if (!add || !isObject2(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  function hasOwnProperty2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports2.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(
      fn,
      getOwnPropertyDescriptors(original)
    );
  };
  exports2.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self2 = this;
      var cb = function() {
        return maybeCb.apply(self2, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        },
        function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports2.callbackify = callbackify;
})(util$1);
const util = util$1;
const EventEmitter = eventsExports;
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var safeEventEmitter = SafeEventEmitter$3;
function SafeEventEmitter$3() {
  EventEmitter.call(this);
}
util.inherits(SafeEventEmitter$3, EventEmitter);
SafeEventEmitter$3.prototype.emit = function(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++)
    args.push(arguments[i]);
  var doError = type === "error";
  var events = this._events;
  if (events !== void 0)
    doError = doError && events.error === void 0;
  else if (!doError)
    return false;
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      throw er;
    }
    var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
    err.context = er;
    throw err;
  }
  var handler = events[type];
  if (handler === void 0)
    return false;
  if (typeof handler === "function") {
    safeApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      safeApply(listeners[i], this, args);
  }
  return true;
};
function safeApply(handler, context, args) {
  try {
    ReflectApply(handler, context, args);
  } catch (err) {
    setTimeout(() => {
      throw err;
    });
  }
}
function arrayClone(arr2, n2) {
  var copy = new Array(n2);
  for (var i = 0; i < n2; ++i)
    copy[i] = arr2[i];
  return copy;
}
const SafeEventEmitter$2 = safeEventEmitter;
const sec$1 = 1e3;
const calculateSum = (accumulator, currentValue) => accumulator + currentValue;
const blockTrackerEvents = ["sync", "latest"];
let BaseBlockTracker$1 = class BaseBlockTracker extends SafeEventEmitter$2 {
  //
  // public
  //
  constructor(opts = {}) {
    super();
    this._blockResetDuration = opts.blockResetDuration || 20 * sec$1;
    this._blockResetTimeout;
    this._currentBlock = null;
    this._isRunning = false;
    this._onNewListener = this._onNewListener.bind(this);
    this._onRemoveListener = this._onRemoveListener.bind(this);
    this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
    this._setupInternalEvents();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    if (this._currentBlock)
      return this._currentBlock;
    const latestBlock = await new Promise((resolve) => this.once("latest", resolve));
    return latestBlock;
  }
  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(eventName) {
    if (eventName) {
      super.removeAllListeners(eventName);
    } else {
      super.removeAllListeners();
    }
    this._setupInternalEvents();
    this._onRemoveListener();
  }
  //
  // to be implemented in subclass
  //
  _start() {
  }
  _end() {
  }
  //
  // private
  //
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener);
    this.removeListener("removeListener", this._onRemoveListener);
    this.on("newListener", this._onNewListener);
    this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(eventName, handler) {
    if (!blockTrackerEvents.includes(eventName))
      return;
    this._maybeStart();
  }
  _onRemoveListener(eventName, handler) {
    if (this._getBlockTrackerEventCount() > 0)
      return;
    this._maybeEnd();
  }
  _maybeStart() {
    if (this._isRunning)
      return;
    this._isRunning = true;
    this._cancelBlockResetTimeout();
    this._start();
  }
  _maybeEnd() {
    if (!this._isRunning)
      return;
    this._isRunning = false;
    this._setupBlockResetTimeout();
    this._end();
  }
  _getBlockTrackerEventCount() {
    return blockTrackerEvents.map((eventName) => this.listenerCount(eventName)).reduce(calculateSum);
  }
  _newPotentialLatest(newBlock) {
    const currentBlock = this._currentBlock;
    if (currentBlock && hexToInt$4(newBlock) <= hexToInt$4(currentBlock))
      return;
    this._setCurrentBlock(newBlock);
  }
  _setCurrentBlock(newBlock) {
    const oldBlock = this._currentBlock;
    this._currentBlock = newBlock;
    this.emit("latest", newBlock);
    this.emit("sync", { oldBlock, newBlock });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout();
    this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration);
    if (this._blockResetTimeout.unref) {
      this._blockResetTimeout.unref();
    }
  }
  _cancelBlockResetTimeout() {
    clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
};
var base = BaseBlockTracker$1;
function hexToInt$4(hexInt) {
  return Number.parseInt(hexInt, 16);
}
const pify$2 = pify$3;
const BaseBlockTracker2 = base;
const sec = 1e3;
let PollingBlockTracker$1 = class PollingBlockTracker extends BaseBlockTracker2 {
  constructor(opts = {}) {
    if (!opts.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    const pollingInterval = opts.pollingInterval || 20 * sec;
    const retryTimeout = opts.retryTimeout || pollingInterval / 10;
    const keepEventLoopActive = opts.keepEventLoopActive !== void 0 ? opts.keepEventLoopActive : true;
    const setSkipCacheFlag = opts.setSkipCacheFlag || false;
    super(Object.assign({
      blockResetDuration: pollingInterval
    }, opts));
    this._provider = opts.provider;
    this._pollingInterval = pollingInterval;
    this._retryTimeout = retryTimeout;
    this._keepEventLoopActive = keepEventLoopActive;
    this._setSkipCacheFlag = setSkipCacheFlag;
  }
  //
  // public
  //
  // trigger block polling
  async checkForLatestBlock() {
    await this._updateLatestBlock();
    return await this.getLatestBlock();
  }
  //
  // private
  //
  _start() {
    this._performSync().catch((err) => this.emit("error", err));
  }
  async _performSync() {
    while (this._isRunning) {
      try {
        await this._updateLatestBlock();
        await timeout$1(this._pollingInterval, !this._keepEventLoopActive);
      } catch (err) {
        const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${err.stack}`);
        try {
          this.emit("error", newErr);
        } catch (emitErr) {
          console.error(newErr);
        }
        await timeout$1(this._retryTimeout, !this._keepEventLoopActive);
      }
    }
  }
  async _updateLatestBlock() {
    const latestBlock = await this._fetchLatestBlock();
    this._newPotentialLatest(latestBlock);
  }
  async _fetchLatestBlock() {
    const req = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
    if (this._setSkipCacheFlag)
      req.skipCache = true;
    const res = await pify$2((cb) => this._provider.sendAsync(req, cb))();
    if (res.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${res.error}`);
    return res.result;
  }
};
var polling = PollingBlockTracker$1;
function timeout$1(duration, unref) {
  return new Promise((resolve) => {
    const timoutRef = setTimeout(resolve, duration);
    if (timoutRef.unref && unref) {
      timoutRef.unref();
    }
  });
}
var dist = {};
var idRemapMiddleware = {};
var getUniqueId$1 = {};
Object.defineProperty(getUniqueId$1, "__esModule", { value: true });
getUniqueId$1.getUniqueId = void 0;
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
  idCounter = (idCounter + 1) % MAX;
  return idCounter;
}
getUniqueId$1.getUniqueId = getUniqueId;
Object.defineProperty(idRemapMiddleware, "__esModule", { value: true });
idRemapMiddleware.createIdRemapMiddleware = void 0;
const getUniqueId_1 = getUniqueId$1;
function createIdRemapMiddleware() {
  return (req, res, next, _end) => {
    const originalId = req.id;
    const newId = getUniqueId_1.getUniqueId();
    req.id = newId;
    res.id = newId;
    next((done2) => {
      req.id = originalId;
      res.id = originalId;
      done2();
    });
  };
}
idRemapMiddleware.createIdRemapMiddleware = createIdRemapMiddleware;
var createAsyncMiddleware$3 = {};
Object.defineProperty(createAsyncMiddleware$3, "__esModule", { value: true });
createAsyncMiddleware$3.createAsyncMiddleware = void 0;
function createAsyncMiddleware$2(asyncMiddleware) {
  return async (req, res, next, end) => {
    let resolveNextPromise;
    const nextPromise = new Promise((resolve) => {
      resolveNextPromise = resolve;
    });
    let returnHandlerCallback = null;
    let nextWasCalled = false;
    const asyncNext = async () => {
      nextWasCalled = true;
      next((runReturnHandlersCallback) => {
        returnHandlerCallback = runReturnHandlersCallback;
        resolveNextPromise();
      });
      await nextPromise;
    };
    try {
      await asyncMiddleware(req, res, asyncNext);
      if (nextWasCalled) {
        await nextPromise;
        returnHandlerCallback(null);
      } else {
        end(null);
      }
    } catch (error) {
      if (returnHandlerCallback) {
        returnHandlerCallback(error);
      } else {
        end(error);
      }
    }
  };
}
createAsyncMiddleware$3.createAsyncMiddleware = createAsyncMiddleware$2;
var createScaffoldMiddleware$3 = {};
Object.defineProperty(createScaffoldMiddleware$3, "__esModule", { value: true });
createScaffoldMiddleware$3.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware$2(handlers) {
  return (req, res, next, end) => {
    const handler = handlers[req.method];
    if (handler === void 0) {
      return next();
    }
    if (typeof handler === "function") {
      return handler(req, res, next, end);
    }
    res.result = handler;
    return end();
  };
}
createScaffoldMiddleware$3.createScaffoldMiddleware = createScaffoldMiddleware$2;
var JsonRpcEngine$1 = {};
var __importDefault$8 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(JsonRpcEngine$1, "__esModule", { value: true });
JsonRpcEngine$1.JsonRpcEngine = void 0;
const safe_event_emitter_1$1 = __importDefault$8(safeEventEmitter$1);
const eth_rpc_errors_1$2 = dist$1;
class JsonRpcEngine extends safe_event_emitter_1$1.default {
  constructor() {
    super();
    this._middleware = [];
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(middleware) {
    this._middleware.push(middleware);
  }
  handle(req, cb) {
    if (cb && typeof cb !== "function") {
      throw new Error('"callback" must be a function if provided.');
    }
    if (Array.isArray(req)) {
      if (cb) {
        return this._handleBatch(req, cb);
      }
      return this._handleBatch(req);
    }
    if (cb) {
      return this._handle(req, cb);
    }
    return this._promiseHandle(req);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (req, res, next, end) => {
      try {
        const [middlewareError, isComplete, returnHandlers] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        if (isComplete) {
          await JsonRpcEngine._runReturnHandlers(returnHandlers);
          return end(middlewareError);
        }
        return next(async (handlerCallback) => {
          try {
            await JsonRpcEngine._runReturnHandlers(returnHandlers);
          } catch (error) {
            return handlerCallback(error);
          }
          return handlerCallback();
        });
      } catch (error) {
        return end(error);
      }
    };
  }
  async _handleBatch(reqs, cb) {
    try {
      const responses = await Promise.all(
        // 1. Begin executing each request in the order received
        reqs.map(this._promiseHandle.bind(this))
      );
      if (cb) {
        return cb(null, responses);
      }
      return responses;
    } catch (error) {
      if (cb) {
        return cb(error);
      }
      throw error;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(req) {
    return new Promise((resolve) => {
      this._handle(req, (_err, res) => {
        resolve(res);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(callerReq, cb) {
    if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
      const error2 = new eth_rpc_errors_1$2.EthereumRpcError(eth_rpc_errors_1$2.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
      return cb(error2, { id: void 0, jsonrpc: "2.0", error: error2 });
    }
    if (typeof callerReq.method !== "string") {
      const error2 = new eth_rpc_errors_1$2.EthereumRpcError(eth_rpc_errors_1$2.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
      return cb(error2, { id: callerReq.id, jsonrpc: "2.0", error: error2 });
    }
    const req = Object.assign({}, callerReq);
    const res = {
      id: req.id,
      jsonrpc: req.jsonrpc
    };
    let error = null;
    try {
      await this._processRequest(req, res);
    } catch (_error) {
      error = _error;
    }
    if (error) {
      delete res.result;
      if (!res.error) {
        res.error = eth_rpc_errors_1$2.serializeError(error);
      }
    }
    return cb(error, res);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(req, res) {
    const [error, isComplete, returnHandlers] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
    JsonRpcEngine._checkForCompletion(req, res, isComplete);
    await JsonRpcEngine._runReturnHandlers(returnHandlers);
    if (error) {
      throw error;
    }
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(req, res, middlewareStack) {
    const returnHandlers = [];
    let error = null;
    let isComplete = false;
    for (const middleware of middlewareStack) {
      [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
      if (isComplete) {
        break;
      }
    }
    return [error, isComplete, returnHandlers.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(req, res, middleware, returnHandlers) {
    return new Promise((resolve) => {
      const end = (err) => {
        const error = err || res.error;
        if (error) {
          res.error = eth_rpc_errors_1$2.serializeError(error);
        }
        resolve([error, true]);
      };
      const next = (returnHandler) => {
        if (res.error) {
          end(res.error);
        } else {
          if (returnHandler) {
            if (typeof returnHandler !== "function") {
              end(new eth_rpc_errors_1$2.EthereumRpcError(eth_rpc_errors_1$2.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof returnHandler}" for request:
${jsonify(req)}`, { request: req }));
            }
            returnHandlers.push(returnHandler);
          }
          resolve([null, false]);
        }
      };
      try {
        middleware(req, res, next, end);
      } catch (error) {
        end(error);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(handlers) {
    for (const handler of handlers) {
      await new Promise((resolve, reject) => {
        handler((err) => err ? reject(err) : resolve());
      });
    }
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(req, res, isComplete) {
    if (!("result" in res) && !("error" in res)) {
      throw new eth_rpc_errors_1$2.EthereumRpcError(eth_rpc_errors_1$2.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${jsonify(req)}`, { request: req });
    }
    if (!isComplete) {
      throw new eth_rpc_errors_1$2.EthereumRpcError(eth_rpc_errors_1$2.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${jsonify(req)}`, { request: req });
    }
  }
}
JsonRpcEngine$1.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
  return JSON.stringify(request, null, 2);
}
var mergeMiddleware$1 = {};
Object.defineProperty(mergeMiddleware$1, "__esModule", { value: true });
mergeMiddleware$1.mergeMiddleware = void 0;
const JsonRpcEngine_1 = JsonRpcEngine$1;
function mergeMiddleware(middlewareStack) {
  const engine = new JsonRpcEngine_1.JsonRpcEngine();
  middlewareStack.forEach((middleware) => engine.push(middleware));
  return engine.asMiddleware();
}
mergeMiddleware$1.mergeMiddleware = mergeMiddleware;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o2, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o2[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports3) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2))
        __createBinding2(exports3, m2, p2);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(idRemapMiddleware, exports2);
  __exportStar(createAsyncMiddleware$3, exports2);
  __exportStar(createScaffoldMiddleware$3, exports2);
  __exportStar(getUniqueId$1, exports2);
  __exportStar(JsonRpcEngine$1, exports2);
  __exportStar(mergeMiddleware$1, exports2);
})(dist);
var lib = {};
var Mutex$2 = {};
var tslibExports = {};
var tslib = {
  get exports() {
    return tslibExports;
  },
  set exports(v2) {
    tslibExports = v2;
  }
};
(function(module) {
  var __extends;
  var __assign;
  var __rest;
  var __decorate2;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar2;
  var __importDefault2;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding2;
  (function(factory) {
    var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
    {
      factory(createExporter(root, createExporter(module.exports)));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v2) {
        return exports2[id] = previous ? previous(id, v2) : v2;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    __extends = function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
    };
    __assign = Object.assign || function(t2) {
      for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
        s2 = arguments[i];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    __rest = function(s2, e2) {
      var t2 = {};
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
          t2[p2] = s2[p2];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p2 = Object.getOwnPropertySymbols(s2); i < p2.length; i++) {
          if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i]))
            t2[p2[i]] = s2[p2[i]];
        }
      return t2;
    };
    __decorate2 = function(decorators, target, key, desc) {
      var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r2 = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d2 = decorators[i])
            r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
      return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f2) {
        if (f2 !== void 0 && typeof f2 !== "function")
          throw new TypeError("Function expected");
        return f2;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _2, done2 = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p2 in contextIn)
          context[p2] = p2 === "access" ? {} : contextIn[p2];
        for (var p2 in contextIn.access)
          context.access[p2] = contextIn.access[p2];
        context.addInitializer = function(f2) {
          if (done2)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f2 || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_2 = accept(result.get))
            descriptor.get = _2;
          if (_2 = accept(result.set))
            descriptor.set = _2;
          if (_2 = accept(result.init))
            initializers.push(_2);
        } else if (_2 = accept(result)) {
          if (kind === "field")
            initializers.push(_2);
          else
            descriptor[key] = _2;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done2 = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    __propKey = function(x2) {
      return typeof x2 === "symbol" ? x2 : "".concat(x2);
    };
    __setFunctionName = function(f2, name2, prefix) {
      if (typeof name2 === "symbol")
        name2 = name2.description ? "[".concat(name2.description, "]") : "";
      return Object.defineProperty(f2, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name2) : name2 });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _2 = { label: 0, sent: function() {
        if (t2[0] & 1)
          throw t2[1];
        return t2[1];
      }, trys: [], ops: [] }, f2, y2, t2, g2;
      return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
        return this;
      }), g2;
      function verb(n2) {
        return function(v2) {
          return step([n2, v2]);
        };
      }
      function step(op) {
        if (f2)
          throw new TypeError("Generator is already executing.");
        while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2)
          try {
            if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
              return t2;
            if (y2 = 0, t2)
              op = [op[0] & 2, t2.value];
            switch (op[0]) {
              case 0:
              case 1:
                t2 = op;
                break;
              case 4:
                _2.label++;
                return { value: op[1], done: false };
              case 5:
                _2.label++;
                y2 = op[1];
                op = [0];
                continue;
              case 7:
                op = _2.ops.pop();
                _2.trys.pop();
                continue;
              default:
                if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _2 = 0;
                  continue;
                }
                if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                  _2.label = op[1];
                  break;
                }
                if (op[0] === 6 && _2.label < t2[1]) {
                  _2.label = t2[1];
                  t2 = op;
                  break;
                }
                if (t2 && _2.label < t2[2]) {
                  _2.label = t2[2];
                  _2.ops.push(op);
                  break;
                }
                if (t2[2])
                  _2.ops.pop();
                _2.trys.pop();
                continue;
            }
            op = body.call(thisArg, _2);
          } catch (e2) {
            op = [6, e2];
            y2 = 0;
          } finally {
            f2 = t2 = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    __exportStar = function(m2, o2) {
      for (var p2 in m2)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
          __createBinding2(o2, m2, p2);
    };
    __createBinding2 = Object.create ? function(o2, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o2, k22, desc);
    } : function(o2, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o2[k22] = m2[k2];
    };
    __values = function(o2) {
      var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i = 0;
      if (m2)
        return m2.call(o2);
      if (o2 && typeof o2.length === "number")
        return {
          next: function() {
            if (o2 && i >= o2.length)
              o2 = void 0;
            return { value: o2 && o2[i++], done: !o2 };
          }
        };
      throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2)
        return o2;
      var i = m2.call(o2), r2, ar = [], e2;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
          ar.push(r2.value);
      } catch (error) {
        e2 = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i["return"]))
            m2.call(i);
        } finally {
          if (e2)
            throw e2.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s2 = 0, i = 0, il = arguments.length; i < il; i++)
        s2 += arguments[i].length;
      for (var r2 = Array(s2), k2 = 0, i = 0; i < il; i++)
        for (var a2 = arguments[i], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
          r2[k2] = a2[j2];
      return r2;
    };
    __spreadArray = function(to, from2, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l2 = from2.length, ar; i < l2; i++) {
          if (ar || !(i in from2)) {
            if (!ar)
              ar = Array.prototype.slice.call(from2, 0, i);
            ar[i] = from2[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from2));
    };
    __await = function(v2) {
      return this instanceof __await ? (this.v = v2, this) : new __await(v2);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n2) {
        if (g2[n2])
          i[n2] = function(v2) {
            return new Promise(function(a2, b2) {
              q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
            });
          };
      }
      function resume(n2, v2) {
        try {
          step(g2[n2](v2));
        } catch (e2) {
          settle(q2[0][3], e2);
        }
      }
      function step(r2) {
        r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f2, v2) {
        if (f2(v2), q2.shift(), q2.length)
          resume(q2[0][0], q2[0][1]);
      }
    };
    __asyncDelegator = function(o2) {
      var i, p2;
      return i = {}, verb("next"), verb("throw", function(e2) {
        throw e2;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n2, f2) {
        i[n2] = o2[n2] ? function(v2) {
          return (p2 = !p2) ? { value: __await(o2[n2](v2)), done: false } : f2 ? f2(v2) : v2;
        } : f2;
      }
    };
    __asyncValues = function(o2) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m2 = o2[Symbol.asyncIterator], i;
      return m2 ? m2.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n2) {
        i[n2] = o2[n2] && function(v2) {
          return new Promise(function(resolve, reject) {
            v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
          });
        };
      }
      function settle(resolve, reject, d2, v2) {
        Promise.resolve(v2).then(function(v3) {
          resolve({ value: v3, done: d2 });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault2 = Object.create ? function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    } : function(o2, v2) {
      o2["default"] = v2;
    };
    __importStar2 = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k2 in mod)
          if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
            __createBinding2(result, mod, k2);
      }
      __setModuleDefault2(result, mod);
      return result;
    };
    __importDefault2 = function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    __classPrivateFieldGet = function(receiver, state2, kind, f2) {
      if (kind === "a" && !f2)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state2.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state2, value, kind, f2) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f2)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f2 : !state2.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state2.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state2, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate2);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding2);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar2);
    exporter("__importDefault", __importDefault2);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
  });
})(tslib);
var Semaphore$1 = {};
Object.defineProperty(Semaphore$1, "__esModule", { value: true });
var tslib_1$2 = tslibExports;
var Semaphore = (
  /** @class */
  function() {
    function Semaphore2(_maxConcurrency) {
      this._maxConcurrency = _maxConcurrency;
      this._queue = [];
      if (_maxConcurrency <= 0) {
        throw new Error("semaphore must be initialized to a positive value");
      }
      this._value = _maxConcurrency;
    }
    Semaphore2.prototype.acquire = function() {
      var _this = this;
      var locked = this.isLocked();
      var ticket = new Promise(function(r2) {
        return _this._queue.push(r2);
      });
      if (!locked)
        this._dispatch();
      return ticket;
    };
    Semaphore2.prototype.runExclusive = function(callback) {
      return tslib_1$2.__awaiter(this, void 0, void 0, function() {
        var _a, value, release;
        return tslib_1$2.__generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              _a = _b.sent(), value = _a[0], release = _a[1];
              _b.label = 2;
            case 2:
              _b.trys.push([2, , 4, 5]);
              return [4, callback(value)];
            case 3:
              return [2, _b.sent()];
            case 4:
              release();
              return [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Semaphore2.prototype.isLocked = function() {
      return this._value <= 0;
    };
    Semaphore2.prototype.release = function() {
      if (this._maxConcurrency > 1) {
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      }
      if (this._currentReleaser) {
        var releaser = this._currentReleaser;
        this._currentReleaser = void 0;
        releaser();
      }
    };
    Semaphore2.prototype._dispatch = function() {
      var _this = this;
      var nextConsumer = this._queue.shift();
      if (!nextConsumer)
        return;
      var released = false;
      this._currentReleaser = function() {
        if (released)
          return;
        released = true;
        _this._value++;
        _this._dispatch();
      };
      nextConsumer([this._value--, this._currentReleaser]);
    };
    return Semaphore2;
  }()
);
Semaphore$1.default = Semaphore;
Object.defineProperty(Mutex$2, "__esModule", { value: true });
var tslib_1$1 = tslibExports;
var Semaphore_1 = Semaphore$1;
var Mutex$1 = (
  /** @class */
  function() {
    function Mutex2() {
      this._semaphore = new Semaphore_1.default(1);
    }
    Mutex2.prototype.acquire = function() {
      return tslib_1$1.__awaiter(this, void 0, void 0, function() {
        var _a, releaser;
        return tslib_1$1.__generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              _a = _b.sent(), releaser = _a[1];
              return [2, releaser];
          }
        });
      });
    };
    Mutex2.prototype.runExclusive = function(callback) {
      return this._semaphore.runExclusive(function() {
        return callback();
      });
    };
    Mutex2.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    };
    Mutex2.prototype.release = function() {
      this._semaphore.release();
    };
    return Mutex2;
  }()
);
Mutex$2.default = Mutex$1;
var withTimeout$1 = {};
Object.defineProperty(withTimeout$1, "__esModule", { value: true });
withTimeout$1.withTimeout = void 0;
var tslib_1 = tslibExports;
function withTimeout(sync, timeout2, timeoutError) {
  var _this = this;
  if (timeoutError === void 0) {
    timeoutError = new Error("timeout");
  }
  return {
    acquire: function() {
      return new Promise(function(resolve, reject) {
        return tslib_1.__awaiter(_this, void 0, void 0, function() {
          var isTimeout, ticket, release;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                isTimeout = false;
                setTimeout(function() {
                  isTimeout = true;
                  reject(timeoutError);
                }, timeout2);
                return [4, sync.acquire()];
              case 1:
                ticket = _a.sent();
                if (isTimeout) {
                  release = Array.isArray(ticket) ? ticket[1] : ticket;
                  release();
                } else {
                  resolve(ticket);
                }
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    },
    runExclusive: function(callback) {
      return tslib_1.__awaiter(this, void 0, void 0, function() {
        var release, ticket;
        return tslib_1.__generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              release = function() {
                return void 0;
              };
              _a.label = 1;
            case 1:
              _a.trys.push([1, , 7, 8]);
              return [4, this.acquire()];
            case 2:
              ticket = _a.sent();
              if (!Array.isArray(ticket))
                return [3, 4];
              release = ticket[1];
              return [4, callback(ticket[0])];
            case 3:
              return [2, _a.sent()];
            case 4:
              release = ticket;
              return [4, callback()];
            case 5:
              return [2, _a.sent()];
            case 6:
              return [3, 8];
            case 7:
              release();
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    release: function() {
      sync.release();
    },
    isLocked: function() {
      return sync.isLocked();
    }
  };
}
withTimeout$1.withTimeout = withTimeout;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.withTimeout = exports2.Semaphore = exports2.Mutex = void 0;
  var Mutex_1 = Mutex$2;
  Object.defineProperty(exports2, "Mutex", { enumerable: true, get: function() {
    return Mutex_1.default;
  } });
  var Semaphore_12 = Semaphore$1;
  Object.defineProperty(exports2, "Semaphore", { enumerable: true, get: function() {
    return Semaphore_12.default;
  } });
  var withTimeout_1 = withTimeout$1;
  Object.defineProperty(exports2, "withTimeout", { enumerable: true, get: function() {
    return withTimeout_1.withTimeout;
  } });
})(lib);
const processFn = (fn, options, proxy, unwrapped) => function(...arguments_) {
  const P2 = options.promiseModule;
  return new P2((resolve, reject) => {
    if (options.multiArgs) {
      arguments_.push((...result) => {
        if (options.errorFirst) {
          if (result[0]) {
            reject(result);
          } else {
            result.shift();
            resolve(result);
          }
        } else {
          resolve(result);
        }
      });
    } else if (options.errorFirst) {
      arguments_.push((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    } else {
      arguments_.push(resolve);
    }
    const self2 = this === proxy ? unwrapped : this;
    Reflect.apply(fn, self2, arguments_);
  });
};
const filterCache = /* @__PURE__ */ new WeakMap();
var pify$1 = (input, options) => {
  options = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: true,
    promiseModule: Promise,
    ...options
  };
  const objectType = typeof input;
  if (!(input !== null && (objectType === "object" || objectType === "function"))) {
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
  }
  const filter2 = (target, key) => {
    let cached = filterCache.get(target);
    if (!cached) {
      cached = {};
      filterCache.set(target, cached);
    }
    if (key in cached) {
      return cached[key];
    }
    const match = (pattern) => typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
    const desc = Reflect.getOwnPropertyDescriptor(target, key);
    const writableOrConfigurableOwn = desc === void 0 || desc.writable || desc.configurable;
    const included = options.include ? options.include.some(match) : !options.exclude.some(match);
    const shouldFilter = included && writableOrConfigurableOwn;
    cached[key] = shouldFilter;
    return shouldFilter;
  };
  const cache = /* @__PURE__ */ new WeakMap();
  const proxy = new Proxy(input, {
    apply(target, thisArg, args) {
      const cached = cache.get(target);
      if (cached) {
        return Reflect.apply(cached, thisArg, args);
      }
      const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
      cache.set(target, pified);
      return Reflect.apply(pified, thisArg, args);
    },
    get(target, key) {
      const property = target[key];
      if (!filter2(target, key) || property === Function.prototype[key]) {
        return property;
      }
      const cached = cache.get(property);
      if (cached) {
        return cached;
      }
      if (typeof property === "function") {
        const pified = processFn(property, options, proxy, target);
        cache.set(property, pified);
        return pified;
      }
      return property;
    }
  });
  return proxy;
};
const SafeEventEmitter$1 = safeEventEmitter$1.default;
let BaseFilter$3 = class BaseFilter extends SafeEventEmitter$1 {
  constructor() {
    super();
    this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(newResults) {
    this.updates = this.updates.concat(newResults);
    newResults.forEach((result) => this.emit("update", result));
  }
  addInitialResults(newResults) {
  }
  getChangesAndClear() {
    const updates = this.updates;
    this.updates = [];
    return updates;
  }
};
var baseFilter = BaseFilter$3;
const BaseFilter$2 = baseFilter;
let BaseFilterWithHistory$1 = class BaseFilterWithHistory extends BaseFilter$2 {
  constructor() {
    super();
    this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(newResults) {
    this.allResults = this.allResults.concat(newResults);
    super.addResults(newResults);
  }
  addInitialResults(newResults) {
    this.allResults = this.allResults.concat(newResults);
    super.addInitialResults(newResults);
  }
  getAllResults() {
    return this.allResults;
  }
};
var baseFilterHistory = BaseFilterWithHistory$1;
var hexUtils = {
  minBlockRef: minBlockRef$1,
  maxBlockRef,
  sortBlockRefs,
  bnToHex: bnToHex$1,
  blockRefIsNumber: blockRefIsNumber$1,
  hexToInt: hexToInt$3,
  incrementHexInt: incrementHexInt$4,
  intToHex: intToHex$2,
  unsafeRandomBytes: unsafeRandomBytes$1
};
function minBlockRef$1(...refs) {
  const sortedRefs = sortBlockRefs(refs);
  return sortedRefs[0];
}
function maxBlockRef(...refs) {
  const sortedRefs = sortBlockRefs(refs);
  return sortedRefs[sortedRefs.length - 1];
}
function sortBlockRefs(refs) {
  return refs.sort((refA, refB) => {
    if (refA === "latest" || refB === "earliest")
      return 1;
    if (refB === "latest" || refA === "earliest")
      return -1;
    return hexToInt$3(refA) - hexToInt$3(refB);
  });
}
function bnToHex$1(bn) {
  return "0x" + bn.toString(16);
}
function blockRefIsNumber$1(blockRef) {
  return blockRef && !["earliest", "latest", "pending"].includes(blockRef);
}
function hexToInt$3(hexString) {
  if (hexString === void 0 || hexString === null)
    return hexString;
  return Number.parseInt(hexString, 16);
}
function incrementHexInt$4(hexString) {
  if (hexString === void 0 || hexString === null)
    return hexString;
  const value = hexToInt$3(hexString);
  return intToHex$2(value + 1);
}
function intToHex$2(int) {
  if (int === void 0 || int === null)
    return int;
  let hexString = int.toString(16);
  const needsLeftPad = hexString.length % 2;
  if (needsLeftPad)
    hexString = "0" + hexString;
  return "0x" + hexString;
}
function unsafeRandomBytes$1(byteCount) {
  let result = "0x";
  for (let i = 0; i < byteCount; i++) {
    result += unsafeRandomNibble();
    result += unsafeRandomNibble();
  }
  return result;
}
function unsafeRandomNibble() {
  return Math.floor(Math.random() * 16).toString(16);
}
const EthQuery = ethQuery;
const pify = pify$1;
const BaseFilterWithHistory2 = baseFilterHistory;
const { bnToHex, hexToInt: hexToInt$2, incrementHexInt: incrementHexInt$3, minBlockRef, blockRefIsNumber } = hexUtils;
let LogFilter$1 = class LogFilter extends BaseFilterWithHistory2 {
  constructor({ provider, params }) {
    super();
    this.type = "log";
    this.ethQuery = new EthQuery(provider);
    this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, params);
    if (this.params.address) {
      if (!Array.isArray(this.params.address)) {
        this.params.address = [this.params.address];
      }
      this.params.address = this.params.address.map((address) => address.toLowerCase());
    }
  }
  async initialize({ currentBlock }) {
    let fromBlock = this.params.fromBlock;
    if (["latest", "pending"].includes(fromBlock))
      fromBlock = currentBlock;
    if ("earliest" === fromBlock)
      fromBlock = "0x0";
    this.params.fromBlock = fromBlock;
    const toBlock = minBlockRef(this.params.toBlock, currentBlock);
    const params = Object.assign({}, this.params, { toBlock });
    const newLogs = await this._fetchLogs(params);
    this.addInitialResults(newLogs);
  }
  async update({ oldBlock, newBlock }) {
    const toBlock = newBlock;
    let fromBlock;
    if (oldBlock) {
      fromBlock = incrementHexInt$3(oldBlock);
    } else {
      fromBlock = newBlock;
    }
    const params = Object.assign({}, this.params, { fromBlock, toBlock });
    const newLogs = await this._fetchLogs(params);
    const matchingLogs = newLogs.filter((log) => this.matchLog(log));
    this.addResults(matchingLogs);
  }
  async _fetchLogs(params) {
    const newLogs = await pify((cb) => this.ethQuery.getLogs(params, cb))();
    return newLogs;
  }
  matchLog(log) {
    if (hexToInt$2(this.params.fromBlock) >= hexToInt$2(log.blockNumber))
      return false;
    if (blockRefIsNumber(this.params.toBlock) && hexToInt$2(this.params.toBlock) <= hexToInt$2(log.blockNumber))
      return false;
    const normalizedLogAddress = log.address && log.address.toLowerCase();
    if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress))
      return false;
    const topicsMatch = this.params.topics.every((topicPattern, index2) => {
      let logTopic = log.topics[index2];
      if (!logTopic)
        return false;
      logTopic = logTopic.toLowerCase();
      let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern];
      const subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
      if (subtopicsIncludeWildcard)
        return true;
      subtopicsToMatch = subtopicsToMatch.map((topic) => topic.toLowerCase());
      const topicDoesMatch = subtopicsToMatch.includes(logTopic);
      return topicDoesMatch;
    });
    return topicsMatch;
  }
};
var logFilter = LogFilter$1;
var getBlocksForRange_1 = getBlocksForRange$3;
async function getBlocksForRange$3({ provider, fromBlock, toBlock }) {
  if (!fromBlock)
    fromBlock = toBlock;
  const fromBlockNumber = hexToInt$1(fromBlock);
  const toBlockNumber = hexToInt$1(toBlock);
  const blockCountToQuery = toBlockNumber - fromBlockNumber + 1;
  const missingBlockNumbers = Array(blockCountToQuery).fill().map((_2, index2) => fromBlockNumber + index2).map(intToHex$1);
  const blockBodies = await Promise.all(
    missingBlockNumbers.map((blockNum) => query(provider, "eth_getBlockByNumber", [blockNum, false]))
  );
  return blockBodies;
}
function hexToInt$1(hexString) {
  if (hexString === void 0 || hexString === null)
    return hexString;
  return Number.parseInt(hexString, 16);
}
function intToHex$1(int) {
  if (int === void 0 || int === null)
    return int;
  const hexString = int.toString(16);
  return "0x" + hexString;
}
function sendAsync(provider, request) {
  return new Promise((resolve, reject) => {
    provider.sendAsync(request, (error, response) => {
      if (error) {
        reject(error);
      } else if (response.error) {
        reject(response.error);
      } else if (response.result) {
        resolve(response.result);
      } else {
        reject(new Error("Result was empty"));
      }
    });
  });
}
async function query(provider, method, params) {
  for (let i = 0; i < 3; i++) {
    try {
      return await sendAsync(provider, {
        id: 1,
        jsonrpc: "2.0",
        method,
        params
      });
    } catch (error) {
      console.error(
        `provider.sendAsync failed: ${error.stack || error.message || error}`
      );
    }
  }
  throw new Error(`Block not found for params: ${JSON.stringify(params)}`);
}
const BaseFilter$1 = baseFilter;
const getBlocksForRange$2 = getBlocksForRange_1;
const { incrementHexInt: incrementHexInt$2 } = hexUtils;
let BlockFilter$1 = class BlockFilter extends BaseFilter$1 {
  constructor({ provider, params }) {
    super();
    this.type = "block";
    this.provider = provider;
  }
  async update({ oldBlock, newBlock }) {
    const toBlock = newBlock;
    const fromBlock = incrementHexInt$2(oldBlock);
    const blockBodies = await getBlocksForRange$2({ provider: this.provider, fromBlock, toBlock });
    const blockHashes = blockBodies.map((block) => block.hash);
    this.addResults(blockHashes);
  }
};
var blockFilter = BlockFilter$1;
const BaseFilter2 = baseFilter;
const getBlocksForRange$1 = getBlocksForRange_1;
const { incrementHexInt: incrementHexInt$1 } = hexUtils;
let TxFilter$1 = class TxFilter extends BaseFilter2 {
  constructor({ provider }) {
    super();
    this.type = "tx";
    this.provider = provider;
  }
  async update({ oldBlock }) {
    const toBlock = oldBlock;
    const fromBlock = incrementHexInt$1(oldBlock);
    const blocks = await getBlocksForRange$1({ provider: this.provider, fromBlock, toBlock });
    const blockTxHashes = [];
    for (const block of blocks) {
      blockTxHashes.push(...block.transactions);
    }
    this.addResults(blockTxHashes);
  }
};
var txFilter = TxFilter$1;
const Mutex = lib.Mutex;
const { createAsyncMiddleware: createAsyncMiddleware$1, createScaffoldMiddleware: createScaffoldMiddleware$1 } = dist;
const LogFilter2 = logFilter;
const BlockFilter2 = blockFilter;
const TxFilter2 = txFilter;
const { intToHex, hexToInt } = hexUtils;
var ethJsonRpcFilters = createEthFilterMiddleware;
function createEthFilterMiddleware({ blockTracker, provider }) {
  let filterIndex = 0;
  let filters = {};
  const mutex = new Mutex();
  const waitForFree = mutexMiddlewareWrapper({ mutex });
  const middleware = createScaffoldMiddleware$1({
    // install filters
    eth_newFilter: waitForFree(toFilterCreationMiddleware(newLogFilter)),
    eth_newBlockFilter: waitForFree(toFilterCreationMiddleware(newBlockFilter)),
    eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
    // uninstall filters
    eth_uninstallFilter: waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
    // checking filter changes
    eth_getFilterChanges: waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
    eth_getFilterLogs: waitForFree(toAsyncRpcMiddleware(getFilterLogs))
  });
  const filterUpdater = async ({ oldBlock, newBlock }) => {
    if (filters.length === 0)
      return;
    const releaseLock = await mutex.acquire();
    try {
      await Promise.all(objValues(filters).map(async (filter2) => {
        try {
          await filter2.update({ oldBlock, newBlock });
        } catch (err) {
          console.error(err);
        }
      }));
    } catch (err) {
      console.error(err);
    }
    releaseLock();
  };
  middleware.newLogFilter = newLogFilter;
  middleware.newBlockFilter = newBlockFilter;
  middleware.newPendingTransactionFilter = newPendingTransactionFilter;
  middleware.uninstallFilter = uninstallFilterHandler;
  middleware.getFilterChanges = getFilterChanges;
  middleware.getFilterLogs = getFilterLogs;
  middleware.destroy = () => {
    uninstallAllFilters();
  };
  return middleware;
  async function newLogFilter(params) {
    const filter2 = new LogFilter2({ provider, params });
    await installFilter(filter2);
    return filter2;
  }
  async function newBlockFilter() {
    const filter2 = new BlockFilter2({ provider });
    await installFilter(filter2);
    return filter2;
  }
  async function newPendingTransactionFilter() {
    const filter2 = new TxFilter2({ provider });
    await installFilter(filter2);
    return filter2;
  }
  async function getFilterChanges(filterIndexHex) {
    const filterIndex2 = hexToInt(filterIndexHex);
    const filter2 = filters[filterIndex2];
    if (!filter2) {
      throw new Error(`No filter for index "${filterIndex2}"`);
    }
    const results = filter2.getChangesAndClear();
    return results;
  }
  async function getFilterLogs(filterIndexHex) {
    const filterIndex2 = hexToInt(filterIndexHex);
    const filter2 = filters[filterIndex2];
    if (!filter2) {
      throw new Error(`No filter for index "${filterIndex2}"`);
    }
    let results = [];
    if (filter2.type === "log") {
      results = filter2.getAllResults();
    }
    return results;
  }
  async function uninstallFilterHandler(filterIndexHex) {
    const filterIndex2 = hexToInt(filterIndexHex);
    const filter2 = filters[filterIndex2];
    const result = Boolean(filter2);
    if (result) {
      await uninstallFilter(filterIndex2);
    }
    return result;
  }
  async function installFilter(filter2) {
    const prevFilterCount = objValues(filters).length;
    const currentBlock = await blockTracker.getLatestBlock();
    await filter2.initialize({ currentBlock });
    filterIndex++;
    filters[filterIndex] = filter2;
    filter2.id = filterIndex;
    filter2.idHex = intToHex(filterIndex);
    const newFilterCount = objValues(filters).length;
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
    return filterIndex;
  }
  async function uninstallFilter(filterIndex2) {
    const prevFilterCount = objValues(filters).length;
    delete filters[filterIndex2];
    const newFilterCount = objValues(filters).length;
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount });
  }
  async function uninstallAllFilters() {
    const prevFilterCount = objValues(filters).length;
    filters = {};
    updateBlockTrackerSubs({ prevFilterCount, newFilterCount: 0 });
  }
  function updateBlockTrackerSubs({ prevFilterCount, newFilterCount }) {
    if (prevFilterCount === 0 && newFilterCount > 0) {
      blockTracker.on("sync", filterUpdater);
      return;
    }
    if (prevFilterCount > 0 && newFilterCount === 0) {
      blockTracker.removeListener("sync", filterUpdater);
      return;
    }
  }
}
function toFilterCreationMiddleware(createFilterFn) {
  return toAsyncRpcMiddleware(async (...args) => {
    const filter2 = await createFilterFn(...args);
    const result = intToHex(filter2.id);
    return result;
  });
}
function toAsyncRpcMiddleware(asyncFn) {
  return createAsyncMiddleware$1(async (req, res) => {
    const result = await asyncFn.apply(null, req.params);
    res.result = result;
  });
}
function mutexMiddlewareWrapper({ mutex }) {
  return (middleware) => {
    return async (req, res, next, end) => {
      const releaseLock = await mutex.acquire();
      releaseLock();
      middleware(req, res, next, end);
    };
  };
}
function objValues(obj, fn) {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}
const SafeEventEmitter2 = safeEventEmitter$1.default;
const { createAsyncMiddleware, createScaffoldMiddleware } = dist;
const createFilterMiddleware = ethJsonRpcFilters;
const { unsafeRandomBytes, incrementHexInt } = hexUtils;
const getBlocksForRange = getBlocksForRange_1;
var subscriptionManager = createSubscriptionMiddleware;
function createSubscriptionMiddleware({ blockTracker, provider }) {
  const subscriptions = {};
  const filterManager = createFilterMiddleware({ blockTracker, provider });
  let isDestroyed = false;
  const events = new SafeEventEmitter2();
  const middleware = createScaffoldMiddleware({
    eth_subscribe: createAsyncMiddleware(subscribe),
    eth_unsubscribe: createAsyncMiddleware(unsubscribe)
  });
  middleware.destroy = destroy2;
  return { events, middleware };
  async function subscribe(req, res) {
    if (isDestroyed)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const subscriptionType = req.params[0];
    const subId = unsafeRandomBytes(16);
    let sub;
    switch (subscriptionType) {
      case "newHeads":
        sub = createSubNewHeads({ subId });
        break;
      case "logs":
        const filterParams = req.params[1];
        const filter2 = await filterManager.newLogFilter(filterParams);
        sub = createSubFromFilter({ subId, filter: filter2 });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`);
    }
    subscriptions[subId] = sub;
    res.result = subId;
    return;
    function createSubNewHeads({ subId: subId2 }) {
      const sub2 = {
        type: subscriptionType,
        destroy: async () => {
          blockTracker.removeListener("sync", sub2.update);
        },
        update: async ({ oldBlock, newBlock }) => {
          const toBlock = newBlock;
          const fromBlock = incrementHexInt(oldBlock);
          const rawBlocks = await getBlocksForRange({ provider, fromBlock, toBlock });
          const results = rawBlocks.map(normalizeBlock).filter((block) => block !== null);
          results.forEach((value) => {
            _emitSubscriptionResult(subId2, value);
          });
        }
      };
      blockTracker.on("sync", sub2.update);
      return sub2;
    }
    function createSubFromFilter({ subId: subId2, filter: filter2 }) {
      filter2.on("update", (result) => _emitSubscriptionResult(subId2, result));
      const sub2 = {
        type: subscriptionType,
        destroy: async () => {
          return await filterManager.uninstallFilter(filter2.idHex);
        }
      };
      return sub2;
    }
  }
  async function unsubscribe(req, res) {
    if (isDestroyed)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const id = req.params[0];
    const subscription = subscriptions[id];
    if (!subscription) {
      res.result = false;
      return;
    }
    delete subscriptions[id];
    await subscription.destroy();
    res.result = true;
  }
  function _emitSubscriptionResult(filterIdHex, value) {
    events.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: filterIdHex,
        result: value
      }
    });
  }
  function destroy2() {
    events.removeAllListeners();
    for (const id in subscriptions) {
      subscriptions[id].destroy();
      delete subscriptions[id];
    }
    isDestroyed = true;
  }
}
function normalizeBlock(block) {
  if (block === null || block === void 0) {
    return null;
  }
  return {
    hash: block.hash,
    parentHash: block.parentHash,
    sha3Uncles: block.sha3Uncles,
    miner: block.miner,
    stateRoot: block.stateRoot,
    transactionsRoot: block.transactionsRoot,
    receiptsRoot: block.receiptsRoot,
    logsBloom: block.logsBloom,
    difficulty: block.difficulty,
    number: block.number,
    gasLimit: block.gasLimit,
    gasUsed: block.gasUsed,
    nonce: block.nonce,
    mixHash: block.mixHash,
    timestamp: block.timestamp,
    extraData: block.extraData
  };
}
Object.defineProperty(SubscriptionManager$1, "__esModule", { value: true });
SubscriptionManager$1.SubscriptionManager = void 0;
const PollingBlockTracker2 = polling;
const createSubscriptionManager = subscriptionManager;
const noop$1 = () => {
};
class SubscriptionManager {
  constructor(provider) {
    const blockTracker = new PollingBlockTracker2({
      provider,
      pollingInterval: 15 * 1e3,
      setSkipCacheFlag: true
    });
    const { events, middleware } = createSubscriptionManager({
      blockTracker,
      provider
    });
    this.events = events;
    this.subscriptionMiddleware = middleware;
  }
  async handleRequest(request) {
    const result = {};
    await this.subscriptionMiddleware(request, result, noop$1, noop$1);
    return result;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
SubscriptionManager$1.SubscriptionManager = SubscriptionManager;
var __importDefault$7 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(CoinbaseWalletProvider$1, "__esModule", { value: true });
CoinbaseWalletProvider$1.CoinbaseWalletProvider = void 0;
const safe_event_emitter_1 = __importDefault$7(safeEventEmitter$1);
const bn_js_1 = __importDefault$7(bnExports);
const eth_rpc_errors_1$1 = dist$1;
const DiagnosticLogger_1$2 = DiagnosticLogger;
const Session_1$2 = Session$1;
const WalletSDKRelayAbstract_1$1 = WalletSDKRelayAbstract$1;
const util_1$5 = util$5;
const eth_eip712_util_1 = __importDefault$7(ethEip712Util);
const FilterPolyfill_1 = FilterPolyfill$1;
const JSONRPC_1 = JSONRPC;
const SubscriptionManager_1 = SubscriptionManager$1;
const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
class CoinbaseWalletProvider extends safe_event_emitter_1.default {
  constructor(options) {
    var _a, _b;
    super();
    this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
    this._subscriptionManager = new SubscriptionManager_1.SubscriptionManager(this);
    this._relay = null;
    this._addresses = [];
    this.hasMadeFirstChainChangedEmission = false;
    this._send = this.send.bind(this);
    this._sendAsync = this.sendAsync.bind(this);
    this.setProviderInfo = this.setProviderInfo.bind(this);
    this.updateProviderInfo = this.updateProviderInfo.bind(this);
    this.getChainId = this.getChainId.bind(this);
    this.setAppInfo = this.setAppInfo.bind(this);
    this.enable = this.enable.bind(this);
    this.close = this.close.bind(this);
    this.send = this.send.bind(this);
    this.sendAsync = this.sendAsync.bind(this);
    this.request = this.request.bind(this);
    this._setAddresses = this._setAddresses.bind(this);
    this.scanQRCode = this.scanQRCode.bind(this);
    this.genericRequest = this.genericRequest.bind(this);
    this._chainIdFromOpts = options.chainId;
    this._jsonRpcUrlFromOpts = options.jsonRpcUrl;
    this._overrideIsMetaMask = options.overrideIsMetaMask;
    this._relayProvider = options.relayProvider;
    this._storage = options.storage;
    this._relayEventManager = options.relayEventManager;
    this.diagnostic = options.diagnosticLogger;
    this.reloadOnDisconnect = true;
    this.isCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
    this.isCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
    this.qrUrl = options.qrUrl;
    this.supportsAddressSwitching = options.supportsAddressSwitching;
    this.isLedger = options.isLedger;
    const chainId = this.getChainId();
    const chainIdStr = (0, util_1$5.prepend0x)(chainId.toString(16));
    this.emit("connect", { chainIdStr });
    const cachedAddresses = this._storage.getItem(WalletSDKRelayAbstract_1$1.LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      const addresses = cachedAddresses.split(" ");
      if (addresses[0] !== "") {
        this._addresses = addresses.map((address) => (0, util_1$5.ensureAddressString)(address));
        this.emit("accountsChanged", addresses);
      }
    }
    this._subscriptionManager.events.on("notification", (notification) => {
      this.emit("message", {
        type: notification.method,
        data: notification.params
      });
    });
    if (this._addresses.length > 0) {
      void this.initializeRelay();
    }
    window.addEventListener("message", (event) => {
      var _a2;
      if (event.origin !== location.origin || event.source !== window) {
        return;
      }
      if (event.data.type !== "walletLinkMessage")
        return;
      if (event.data.data.action === "defaultChainChanged" || event.data.data.action === "dappChainSwitched") {
        const _chainId = event.data.data.chainId;
        const jsonRpcUrl = (_a2 = event.data.data.jsonRpcUrl) !== null && _a2 !== void 0 ? _a2 : this.jsonRpcUrl;
        this.updateProviderInfo(jsonRpcUrl, Number(_chainId));
      }
      if (event.data.data.action === "addressChanged") {
        this._setAddresses([event.data.data.address]);
      }
    });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, util_1$5.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return true;
  }
  /**
   * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
   * true for this method.
   */
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return true;
  }
  isConnected() {
    return true;
  }
  get jsonRpcUrl() {
    var _a;
    return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(value) {
    this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = false;
  }
  /**
   * this function is called when coinbase provider is being injected to a dapp
   * standalone + walletlinked extension, ledger, in-app browser using cipher-web-view
   */
  setProviderInfo(jsonRpcUrl, chainId) {
    if (!(this.isLedger || this.isCoinbaseBrowser)) {
      this._chainIdFromOpts = chainId;
      this._jsonRpcUrlFromOpts = jsonRpcUrl;
    }
    this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(jsonRpcUrl, chainId) {
    this.jsonRpcUrl = jsonRpcUrl;
    const originalChainId = this.getChainId();
    this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
    const chainChanged = (0, util_1$5.ensureIntNumber)(chainId) !== originalChainId;
    if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
      this.emit("chainChanged", this.getChainId());
      this.hasMadeFirstChainChangedEmission = true;
    }
  }
  async watchAsset(type, address, symbol, decimals, image, chainId) {
    const relay = await this.initializeRelay();
    const result = await relay.watchAsset(type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString()).promise;
    return !!result.result;
  }
  async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
    var _a, _b;
    if ((0, util_1$5.ensureIntNumber)(chainId) === this.getChainId()) {
      return false;
    }
    const relay = await this.initializeRelay();
    const isWhitelistedNetworkOrStandalone = relay.inlineAddEthereumChain(chainId.toString());
    if (!this._isAuthorized() && !isWhitelistedNetworkOrStandalone) {
      await relay.requestEthereumAccounts().promise;
    }
    const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency).promise;
    if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
      this.updateProviderInfo(rpcUrls[0], chainId);
    }
    return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
  }
  async switchEthereumChain(chainId) {
    const relay = await this.initializeRelay();
    const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0).promise;
    if (res.errorCode) {
      throw eth_rpc_errors_1$1.ethErrors.provider.custom({
        code: res.errorCode
      });
    }
    const switchResponse = res.result;
    if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
      this.updateProviderInfo(switchResponse.rpcUrl, chainId);
    }
  }
  setAppInfo(appName, appLogoUrl) {
    void this.initializeRelay().then((relay) => relay.setAppInfo(appName, appLogoUrl));
  }
  async enable() {
    var _a;
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Session_1$2.Session.hash(this._relay.session.id) : void 0
    });
    if (this._addresses.length > 0) {
      return [...this._addresses];
    }
    return await this._send(JSONRPC_1.JSONRPCMethod.eth_requestAccounts);
  }
  async close() {
    const relay = await this.initializeRelay();
    relay.resetAndReload();
  }
  send(requestOrMethod, callbackOrParams) {
    if (typeof requestOrMethod === "string") {
      const method = requestOrMethod;
      const params = Array.isArray(callbackOrParams) ? callbackOrParams : callbackOrParams !== void 0 ? [callbackOrParams] : [];
      const request = {
        jsonrpc: "2.0",
        id: 0,
        method,
        params
      };
      return this._sendRequestAsync(request).then((res) => res.result);
    }
    if (typeof callbackOrParams === "function") {
      const request = requestOrMethod;
      const callback = callbackOrParams;
      return this._sendAsync(request, callback);
    }
    if (Array.isArray(requestOrMethod)) {
      const requests = requestOrMethod;
      return requests.map((r2) => this._sendRequest(r2));
    }
    const req = requestOrMethod;
    return this._sendRequest(req);
  }
  async sendAsync(request, callback) {
    if (typeof callback !== "function") {
      throw new Error("callback is required");
    }
    if (Array.isArray(request)) {
      const arrayCb = callback;
      this._sendMultipleRequestsAsync(request).then((responses) => arrayCb(null, responses)).catch((err) => arrayCb(err, null));
      return;
    }
    const cb = callback;
    return this._sendRequestAsync(request).then((response) => cb(null, response)).catch((err) => cb(err, null));
  }
  async request(args) {
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: args
      });
    }
    const { method, params } = args;
    if (typeof method !== "string" || method.length === 0) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: args
      });
    }
    if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: args
      });
    }
    const newParams = params === void 0 ? [] : params;
    const id = this._relayEventManager.makeRequestId();
    const result = await this._sendRequestAsync({
      method,
      params: newParams,
      jsonrpc: "2.0",
      id
    });
    return result.result;
  }
  async scanQRCode(match) {
    const relay = await this.initializeRelay();
    const res = await relay.scanQRCode((0, util_1$5.ensureRegExpString)(match)).promise;
    if (typeof res.result !== "string") {
      throw new Error("result was not a string");
    }
    return res.result;
  }
  async genericRequest(data, action) {
    const relay = await this.initializeRelay();
    const res = await relay.genericRequest(data, action).promise;
    if (typeof res.result !== "string") {
      throw new Error("result was not a string");
    }
    return res.result;
  }
  async selectProvider(providerOptions) {
    const relay = await this.initializeRelay();
    const res = await relay.selectProvider(providerOptions).promise;
    if (typeof res.result !== "string") {
      throw new Error("result was not a string");
    }
    return res.result;
  }
  supportsSubscriptions() {
    return false;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return true;
  }
  _sendRequest(request) {
    const response = {
      jsonrpc: "2.0",
      id: request.id
    };
    const { method } = request;
    response.result = this._handleSynchronousMethods(request);
    if (response.result === void 0) {
      throw new Error(`Coinbase Wallet does not support calling ${method} synchronously without a callback. Please provide a callback parameter to call ${method} asynchronously.`);
    }
    return response;
  }
  _setAddresses(addresses, isDisconnect) {
    if (!Array.isArray(addresses)) {
      throw new Error("addresses is not an array");
    }
    const newAddresses = addresses.map((address) => (0, util_1$5.ensureAddressString)(address));
    if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
      return;
    }
    if (this._addresses.length > 0 && this.supportsAddressSwitching === false && !isDisconnect) {
      return;
    }
    this._addresses = newAddresses;
    this.emit("accountsChanged", this._addresses);
    this._storage.setItem(WalletSDKRelayAbstract_1$1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
  }
  _sendRequestAsync(request) {
    return new Promise((resolve, reject) => {
      try {
        const syncResult = this._handleSynchronousMethods(request);
        if (syncResult !== void 0) {
          return resolve({
            jsonrpc: "2.0",
            id: request.id,
            result: syncResult
          });
        }
        const filterPromise = this._handleAsynchronousFilterMethods(request);
        if (filterPromise !== void 0) {
          filterPromise.then((res) => resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
          return;
        }
        const subscriptionPromise = this._handleSubscriptionMethods(request);
        if (subscriptionPromise !== void 0) {
          subscriptionPromise.then((res) => resolve({
            jsonrpc: "2.0",
            id: request.id,
            result: res.result
          })).catch((err) => reject(err));
          return;
        }
      } catch (err) {
        return reject(err);
      }
      this._handleAsynchronousMethods(request).then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
    });
  }
  _sendMultipleRequestsAsync(requests) {
    return Promise.all(requests.map((r2) => this._sendRequestAsync(r2)));
  }
  _handleSynchronousMethods(request) {
    const { method } = request;
    const params = request.params || [];
    switch (method) {
      case JSONRPC_1.JSONRPCMethod.eth_accounts:
        return this._eth_accounts();
      case JSONRPC_1.JSONRPCMethod.eth_coinbase:
        return this._eth_coinbase();
      case JSONRPC_1.JSONRPCMethod.eth_uninstallFilter:
        return this._eth_uninstallFilter(params);
      case JSONRPC_1.JSONRPCMethod.net_version:
        return this._net_version();
      case JSONRPC_1.JSONRPCMethod.eth_chainId:
        return this._eth_chainId();
      default:
        return void 0;
    }
  }
  async _handleAsynchronousMethods(request) {
    const { method } = request;
    const params = request.params || [];
    switch (method) {
      case JSONRPC_1.JSONRPCMethod.eth_requestAccounts:
        return this._eth_requestAccounts();
      case JSONRPC_1.JSONRPCMethod.eth_sign:
        return this._eth_sign(params);
      case JSONRPC_1.JSONRPCMethod.eth_ecRecover:
        return this._eth_ecRecover(params);
      case JSONRPC_1.JSONRPCMethod.personal_sign:
        return this._personal_sign(params);
      case JSONRPC_1.JSONRPCMethod.personal_ecRecover:
        return this._personal_ecRecover(params);
      case JSONRPC_1.JSONRPCMethod.eth_signTransaction:
        return this._eth_signTransaction(params);
      case JSONRPC_1.JSONRPCMethod.eth_sendRawTransaction:
        return this._eth_sendRawTransaction(params);
      case JSONRPC_1.JSONRPCMethod.eth_sendTransaction:
        return this._eth_sendTransaction(params);
      case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v1:
        return this._eth_signTypedData_v1(params);
      case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v2:
        return this._throwUnsupportedMethodError();
      case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v3:
        return this._eth_signTypedData_v3(params);
      case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v4:
      case JSONRPC_1.JSONRPCMethod.eth_signTypedData:
        return this._eth_signTypedData_v4(params);
      case JSONRPC_1.JSONRPCMethod.cbWallet_arbitrary:
        return this._cbwallet_arbitrary(params);
      case JSONRPC_1.JSONRPCMethod.wallet_addEthereumChain:
        return this._wallet_addEthereumChain(params);
      case JSONRPC_1.JSONRPCMethod.wallet_switchEthereumChain:
        return this._wallet_switchEthereumChain(params);
      case JSONRPC_1.JSONRPCMethod.wallet_watchAsset:
        return this._wallet_watchAsset(params);
    }
    const relay = await this.initializeRelay();
    return relay.makeEthereumJSONRPCRequest(request, this.jsonRpcUrl);
  }
  _handleAsynchronousFilterMethods(request) {
    const { method } = request;
    const params = request.params || [];
    switch (method) {
      case JSONRPC_1.JSONRPCMethod.eth_newFilter:
        return this._eth_newFilter(params);
      case JSONRPC_1.JSONRPCMethod.eth_newBlockFilter:
        return this._eth_newBlockFilter();
      case JSONRPC_1.JSONRPCMethod.eth_newPendingTransactionFilter:
        return this._eth_newPendingTransactionFilter();
      case JSONRPC_1.JSONRPCMethod.eth_getFilterChanges:
        return this._eth_getFilterChanges(params);
      case JSONRPC_1.JSONRPCMethod.eth_getFilterLogs:
        return this._eth_getFilterLogs(params);
    }
    return void 0;
  }
  _handleSubscriptionMethods(request) {
    switch (request.method) {
      case JSONRPC_1.JSONRPCMethod.eth_subscribe:
      case JSONRPC_1.JSONRPCMethod.eth_unsubscribe:
        return this._subscriptionManager.handleRequest(request);
    }
    return void 0;
  }
  _isKnownAddress(addressString) {
    try {
      const addressStr = (0, util_1$5.ensureAddressString)(addressString);
      const lowercaseAddresses = this._addresses.map((address) => (0, util_1$5.ensureAddressString)(address));
      return lowercaseAddresses.includes(addressStr);
    } catch (_a) {
    }
    return false;
  }
  _ensureKnownAddress(addressString) {
    var _a;
    if (!this._isKnownAddress(addressString)) {
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED);
      throw new Error("Unknown Ethereum address");
    }
  }
  _prepareTransactionParams(tx) {
    const fromAddress = tx.from ? (0, util_1$5.ensureAddressString)(tx.from) : this.selectedAddress;
    if (!fromAddress) {
      throw new Error("Ethereum address is unavailable");
    }
    this._ensureKnownAddress(fromAddress);
    const toAddress = tx.to ? (0, util_1$5.ensureAddressString)(tx.to) : null;
    const weiValue = tx.value != null ? (0, util_1$5.ensureBN)(tx.value) : new bn_js_1.default(0);
    const data = tx.data ? (0, util_1$5.ensureBuffer)(tx.data) : Buffer.alloc(0);
    const nonce = tx.nonce != null ? (0, util_1$5.ensureIntNumber)(tx.nonce) : null;
    const gasPriceInWei = tx.gasPrice != null ? (0, util_1$5.ensureBN)(tx.gasPrice) : null;
    const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1$5.ensureBN)(tx.maxFeePerGas) : null;
    const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1$5.ensureBN)(tx.maxPriorityFeePerGas) : null;
    const gasLimit = tx.gas != null ? (0, util_1$5.ensureBN)(tx.gas) : null;
    const chainId = this.getChainId();
    return {
      fromAddress,
      toAddress,
      weiValue,
      data,
      nonce,
      gasPriceInWei,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      chainId
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized()) {
      throw eth_rpc_errors_1$1.ethErrors.provider.unauthorized({});
    }
  }
  _throwUnsupportedMethodError() {
    throw eth_rpc_errors_1$1.ethErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
    this._ensureKnownAddress(address);
    try {
      const relay = await this.initializeRelay();
      const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson).promise;
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw eth_rpc_errors_1$1.ethErrors.provider.userRejectedRequest("User denied message signature");
      }
      throw err;
    }
  }
  async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
    const relay = await this.initializeRelay();
    const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix).promise;
    return { jsonrpc: "2.0", id: 0, result: res.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, util_1$5.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
    if (!chainIdStr) {
      return (0, util_1$5.ensureIntNumber)(this._chainIdFromOpts);
    }
    const chainId = parseInt(chainIdStr, 10);
    return (0, util_1$5.ensureIntNumber)(chainId);
  }
  async _eth_requestAccounts() {
    var _a;
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$2.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Session_1$2.Session.hash(this._relay.session.id) : void 0
    });
    if (this._addresses.length > 0) {
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    }
    let res;
    try {
      const relay = await this.initializeRelay();
      res = await relay.requestEthereumAccounts().promise;
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw eth_rpc_errors_1$1.ethErrors.provider.userRejectedRequest("User denied account authorization");
      }
      throw err;
    }
    if (!res.result) {
      throw new Error("accounts received is empty");
    }
    this._setAddresses(res.result);
    if (!(this.isLedger || this.isCoinbaseBrowser)) {
      await this.switchEthereumChain(this.getChainId());
    }
    return { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(params) {
    this._requireAuthorization();
    const address = (0, util_1$5.ensureAddressString)(params[0]);
    const message = (0, util_1$5.ensureBuffer)(params[1]);
    return this._signEthereumMessage(message, address, false);
  }
  _eth_ecRecover(params) {
    const message = (0, util_1$5.ensureBuffer)(params[0]);
    const signature = (0, util_1$5.ensureBuffer)(params[1]);
    return this._ethereumAddressFromSignedMessage(message, signature, false);
  }
  _personal_sign(params) {
    this._requireAuthorization();
    const message = (0, util_1$5.ensureBuffer)(params[0]);
    const address = (0, util_1$5.ensureAddressString)(params[1]);
    return this._signEthereumMessage(message, address, true);
  }
  _personal_ecRecover(params) {
    const message = (0, util_1$5.ensureBuffer)(params[0]);
    const signature = (0, util_1$5.ensureBuffer)(params[1]);
    return this._ethereumAddressFromSignedMessage(message, signature, true);
  }
  async _eth_signTransaction(params) {
    this._requireAuthorization();
    const tx = this._prepareTransactionParams(params[0] || {});
    try {
      const relay = await this.initializeRelay();
      const res = await relay.signEthereumTransaction(tx).promise;
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw eth_rpc_errors_1$1.ethErrors.provider.userRejectedRequest("User denied transaction signature");
      }
      throw err;
    }
  }
  async _eth_sendRawTransaction(params) {
    const signedTransaction = (0, util_1$5.ensureBuffer)(params[0]);
    const relay = await this.initializeRelay();
    const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId()).promise;
    return { jsonrpc: "2.0", id: 0, result: res.result };
  }
  async _eth_sendTransaction(params) {
    this._requireAuthorization();
    const tx = this._prepareTransactionParams(params[0] || {});
    try {
      const relay = await this.initializeRelay();
      const res = await relay.signAndSubmitEthereumTransaction(tx).promise;
      return { jsonrpc: "2.0", id: 0, result: res.result };
    } catch (err) {
      if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
        throw eth_rpc_errors_1$1.ethErrors.provider.userRejectedRequest("User denied transaction signature");
      }
      throw err;
    }
  }
  async _eth_signTypedData_v1(params) {
    this._requireAuthorization();
    const typedData = (0, util_1$5.ensureParsedJSONObject)(params[0]);
    const address = (0, util_1$5.ensureAddressString)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  async _eth_signTypedData_v3(params) {
    this._requireAuthorization();
    const address = (0, util_1$5.ensureAddressString)(params[0]);
    const typedData = (0, util_1$5.ensureParsedJSONObject)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  async _eth_signTypedData_v4(params) {
    this._requireAuthorization();
    const address = (0, util_1$5.ensureAddressString)(params[0]);
    const typedData = (0, util_1$5.ensureParsedJSONObject)(params[1]);
    this._ensureKnownAddress(address);
    const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
    const typedDataJSON = JSON.stringify(typedData, null, 2);
    return this._signEthereumMessage(message, address, false, typedDataJSON);
  }
  /** @deprecated */
  async _cbwallet_arbitrary(params) {
    const action = params[0];
    const data = params[1];
    if (typeof data !== "string") {
      throw new Error("parameter must be a string");
    }
    if (typeof action !== "object" || action === null) {
      throw new Error("parameter must be an object");
    }
    const result = await this.genericRequest(action, data);
    return { jsonrpc: "2.0", id: 0, result };
  }
  async _wallet_addEthereumChain(params) {
    var _a, _b, _c, _d;
    const request = params[0];
    if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: `please pass in at least 1 rpcUrl` }
      };
    }
    if (!request.chainName || request.chainName.trim() === "") {
      throw eth_rpc_errors_1$1.ethErrors.provider.custom({
        code: 0,
        message: "chainName is a required field"
      });
    }
    if (!request.nativeCurrency) {
      throw eth_rpc_errors_1$1.ethErrors.provider.custom({
        code: 0,
        message: "nativeCurrency is a required field"
      });
    }
    const chainIdNumber = parseInt(request.chainId, 16);
    const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
    if (success) {
      return { jsonrpc: "2.0", id: 0, result: null };
    } else {
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: `unable to add ethereum chain` }
      };
    }
  }
  async _wallet_switchEthereumChain(params) {
    const request = params[0];
    await this.switchEthereumChain(parseInt(request.chainId, 16));
    return { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(params) {
    const request = Array.isArray(params) ? params[0] : params;
    if (!request.type) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidParams({
        message: "Type is required"
      });
    }
    if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidParams({
        message: `Asset of type '${request.type}' is not supported`
      });
    }
    if (!(request === null || request === void 0 ? void 0 : request.options)) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidParams({
        message: "Options are required"
      });
    }
    if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
      throw eth_rpc_errors_1$1.ethErrors.rpc.invalidParams({
        message: "Address is required"
      });
    }
    const chainId = this.getChainId();
    const { address, symbol, image, decimals } = request.options;
    const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
    return { jsonrpc: "2.0", id: 0, result: res };
  }
  _eth_uninstallFilter(params) {
    const filterId = (0, util_1$5.ensureHexString)(params[0]);
    return this._filterPolyfill.uninstallFilter(filterId);
  }
  async _eth_newFilter(params) {
    const param = params[0];
    const filterId = await this._filterPolyfill.newFilter(param);
    return { jsonrpc: "2.0", id: 0, result: filterId };
  }
  async _eth_newBlockFilter() {
    const filterId = await this._filterPolyfill.newBlockFilter();
    return { jsonrpc: "2.0", id: 0, result: filterId };
  }
  async _eth_newPendingTransactionFilter() {
    const filterId = await this._filterPolyfill.newPendingTransactionFilter();
    return { jsonrpc: "2.0", id: 0, result: filterId };
  }
  _eth_getFilterChanges(params) {
    const filterId = (0, util_1$5.ensureHexString)(params[0]);
    return this._filterPolyfill.getFilterChanges(filterId);
  }
  _eth_getFilterLogs(params) {
    const filterId = (0, util_1$5.ensureHexString)(params[0]);
    return this._filterPolyfill.getFilterLogs(filterId);
  }
  initializeRelay() {
    if (this._relay) {
      return Promise.resolve(this._relay);
    }
    return this._relayProvider().then((relay) => {
      relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
      relay.setChainCallback((chainId, jsonRpcUrl) => {
        this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
      });
      relay.setDappDefaultChainCallback(this._chainIdFromOpts);
      this._relay = relay;
      return relay;
    });
  }
}
CoinbaseWalletProvider$1.CoinbaseWalletProvider = CoinbaseWalletProvider;
var WalletSDKUI$1 = {};
var LinkFlow$1 = {};
var n, l$1, u$1, i$2, t$1, r$2, o$1, f$1, e$1 = {}, c$1 = [], s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v$1(l2, u2, i) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return y$1(l2, f2, t2, r2, null);
}
function y$1(n2, i, t2, r2, o2) {
  var f2 = { type: n2, props: i, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2 };
  return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function p$1() {
  return { current: null };
}
function d$1(n2) {
  return n2.children;
}
function _$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function k$1(n2, l2) {
  if (null == l2)
    return n2.__ ? k$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? k$1(n2) : null;
}
function b$1(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b$1(n2);
  }
}
function g$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !m$1.__r++ || r$2 !== l$1.debounceRendering) && ((r$2 = l$1.debounceRendering) || o$1)(m$1);
}
function m$1() {
  var n2, l2, u2, i, r2, o2, f2, e2;
  for (t$1.sort(function(n3, l3) {
    return n3.__v.__b - l3.__v.__b;
  }); n2 = t$1.shift(); )
    n2.__d && (l2 = t$1.length, i = void 0, r2 = void 0, f2 = (o2 = (u2 = n2).__v).__e, (e2 = u2.__P) && (i = [], (r2 = a$1({}, o2)).__v = o2.__v + 1, z$1(e2, o2, r2, u2.__n, void 0 !== e2.ownerSVGElement, null != o2.__h ? [f2] : null, i, null == f2 ? k$1(o2) : f2, o2.__h), L(i, o2), o2.__e != f2 && b$1(o2)), t$1.length > l2 && t$1.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }));
  m$1.__r = 0;
}
function w$1(n2, l2, u2, i, t2, r2, o2, f2, s2, a2) {
  var h2, v2, p2, _2, b2, g2, m2, w2 = i && i.__k || c$1, A2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (_2 = u2.__k[h2] = null == (_2 = l2[h2]) || "boolean" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? y$1(null, _2, null, null, _2) : Array.isArray(_2) ? y$1(d$1, { children: _2 }, null, null, null) : _2.__b > 0 ? y$1(_2.type, _2.props, _2.key, _2.ref ? _2.ref : null, _2.__v) : _2)) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, null === (p2 = w2[h2]) || p2 && _2.key == p2.key && _2.type === p2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A2; v2++) {
          if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
            w2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      z$1(n2, _2, p2 = p2 || e$1, t2, r2, o2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (m2 || (m2 = []), p2.ref && m2.push(p2.ref, null, _2), m2.push(v2, _2.__c || b2, _2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof _2.type && _2.__k === p2.__k ? _2.__d = s2 = x$1(_2, s2, n2) : s2 = P$1(n2, _2, p2, w2, b2, s2), "function" == typeof u2.type && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$1(p2));
    }
  for (u2.__e = g2, h2 = A2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = C(i).nextSibling), O(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      N(m2[h2], m2[++h2], m2[++h2]);
}
function x$1(n2, l2, u2) {
  for (var i, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i = t2[r2]) && (i.__ = n2, l2 = "function" == typeof i.type ? x$1(i, l2, u2) : P$1(u2, i, i, t2, i.__e, l2));
  return l2;
}
function A$1(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    A$1(n3, l2);
  }) : l2.push(n2)), l2;
}
function P$1(n2, l2, u2, i, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function C(n2) {
  var l2, u2, i;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i = C(u2)))
        return i;
  }
  return null;
}
function $(n2, l2, u2, i, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || I(n2, r2, null, u2[r2], i);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || I(n2, r2, l2[r2], u2[r2], i);
}
function H(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || s$1.test(l2) ? u2 : u2 + "px";
}
function I(n2, l2, u2, i, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i && (n2.style.cssText = i = ""), i)
          for (l2 in i)
            u2 && l2 in u2 || H(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i && u2[l2] === i[l2] || H(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i || n2.addEventListener(l2, r2 ? j$1 : T$1, r2) : n2.removeEventListener(l2, r2 ? j$1 : T$1, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && -1 == l2.indexOf("-") ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function T$1(n2) {
  return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function j$1(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function z$1(n2, u2, i, t2, r2, o2, f2, e2, c2) {
  var s2, h2, v2, y2, p2, k2, b2, g2, m2, x2, A2, P2, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i.__h && (c2 = i.__h, e2 = u2.__e = i.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], x2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i.__c ? b2 = (h2 = u2.__c = i.__c).__ = h2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = h2 = new I2(g2, x2) : (u2.__c = h2 = new _$1(g2, x2), h2.constructor = I2, h2.render = S), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != I2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a$1({}, h2.__s)), a$1(h2.__s, I2.getDerivedStateFromProps(g2, h2.__s))), y2 = h2.props, p2 = h2.state, h2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x2) || u2.__v === i.__v) {
            for (u2.__v !== i.__v && (h2.props = g2, h2.state = h2.__s, h2.__d = false), h2.__e = false, u2.__e = i.__e, u2.__k = i.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p2, k2);
          });
        }
        if (h2.context = x2, h2.props = g2, h2.__P = n2, P2 = l$1.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), s2 = h2.render(h2.props, h2.state, h2.context), $2 = 0; $2 < h2._sb.length; $2++)
            h2.__h.push(h2._sb[$2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, P2 && P2(u2), s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = a$1(a$1({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === d$1 && null == s2.key ? s2.props.children : s2, w$1(n2, Array.isArray(H2) ? H2 : [H2], u2, i, t2, r2, o2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == o2 && u2.__v === i.__v ? (u2.__k = i.__k, u2.__e = i.__e) : u2.__e = M(i.__e, u2, i, t2, r2, o2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i);
  }
}
function L(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function M(l2, u2, i, t2, r2, o2, f2, c2) {
  var s2, a2, v2, y2 = i.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, c2 = false;
  }
  if (null === d2)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i.props || e$1).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if ($(l2, p2, y2, r2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w$1(l2, Array.isArray(_2) ? _2 : [_2], u2, i, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i.__k && k$1(i, 0), c2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && h$1(o2[_2]);
    c2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && I(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && I(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function N(n2, u2, i) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i);
  }
}
function O(n2, u2, i) {
  var t2, r2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || N(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && O(t2[r2], u2, i || "function" != typeof n2.type);
  i || null == n2.__e || h$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function S(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function q$1(u2, i, t2) {
  var r2, o2, f2;
  l$1.__ && l$1.__(u2, i), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i.__k, f2 = [], z$1(i, u2 = (!r2 && t2 || i).__k = v$1(d$1, null, [u2]), o2 || e$1, e$1, void 0 !== i.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i.firstChild ? n.call(i.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i.firstChild, r2), L(f2, u2);
}
function B$1(n2, l2) {
  q$1(n2, l2, B$1);
}
function D(l2, u2, i) {
  var t2, r2, o2, f2 = a$1({}, l2.props);
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i), y$1(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
}
function E(n2, l2) {
  var u2 = { __c: l2 = "__cC" + f$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i;
    return this.getChildContext || (u3 = [], (i = {})[l2] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, g$1(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = c$1.slice, l$1 = { __e: function(n2, l2, u2, i) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, i$2 = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, _$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n2 && (n2 = n2(a$1({}, u2), this.props)), n2 && a$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), g$1(this));
}, _$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), g$1(this));
}, _$1.prototype.render = d$1, t$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m$1.__r = 0, f$1 = 0;
const preact_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: _$1,
  Fragment: d$1,
  cloneElement: D,
  createContext: E,
  createElement: v$1,
  createRef: p$1,
  h: v$1,
  hydrate: B$1,
  get isValidElement() {
    return i$2;
  },
  get options() {
    return l$1;
  },
  render: q$1,
  toChildArray: A$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(preact_module);
function isFunction(x2) {
  return typeof x2 === "function";
}
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = /* @__PURE__ */ new Error();
      /* @__PURE__ */ console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
    }
    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }
};
function hostReportError(err) {
  setTimeout(function() {
    throw err;
  }, 0);
}
var empty$1 = {
  closed: true,
  next: function(value) {
  },
  error: function(err) {
    if (config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError(err);
    }
  },
  complete: function() {
  }
};
var isArray = /* @__PURE__ */ function() {
  return Array.isArray || function(x2) {
    return x2 && typeof x2.length === "number";
  };
}();
function isObject(x2) {
  return x2 !== null && typeof x2 === "object";
}
var UnsubscriptionErrorImpl = /* @__PURE__ */ function() {
  function UnsubscriptionErrorImpl2(errors2) {
    Error.call(this);
    this.message = errors2 ? errors2.length + " errors occurred during unsubscription:\n" + errors2.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors2;
    return this;
  }
  UnsubscriptionErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  return UnsubscriptionErrorImpl2;
}();
var UnsubscriptionError = UnsubscriptionErrorImpl;
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;
    if (unsubscribe) {
      this._ctorUnsubscribe = true;
      this._unsubscribe = unsubscribe;
    }
  }
  Subscription2.prototype.unsubscribe = function() {
    var errors2;
    if (this.closed) {
      return;
    }
    var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;
    if (_parentOrParents instanceof Subscription2) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index2 = 0; index2 < _parentOrParents.length; ++index2) {
        var parent_1 = _parentOrParents[index2];
        parent_1.remove(this);
      }
    }
    if (isFunction(_unsubscribe)) {
      if (_ctorUnsubscribe) {
        this._unsubscribe = void 0;
      }
      try {
        _unsubscribe.call(this);
      } catch (e2) {
        errors2 = e2 instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e2.errors) : [e2];
      }
    }
    if (isArray(_subscriptions)) {
      var index2 = -1;
      var len = _subscriptions.length;
      while (++index2 < len) {
        var sub = _subscriptions[index2];
        if (isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e2) {
            errors2 = errors2 || [];
            if (e2 instanceof UnsubscriptionError) {
              errors2 = errors2.concat(flattenUnsubscriptionErrors(e2.errors));
            } else {
              errors2.push(e2);
            }
          }
        }
      }
    }
    if (errors2) {
      throw new UnsubscriptionError(errors2);
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var subscription = teardown;
    if (!teardown) {
      return Subscription2.EMPTY;
    }
    switch (typeof teardown) {
      case "function":
        subscription = new Subscription2(teardown);
      case "object":
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription2)) {
          var tmp = subscription;
          subscription = new Subscription2();
          subscription._subscriptions = [tmp];
        }
        break;
      default: {
        throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
      }
    }
    var _parentOrParents = subscription._parentOrParents;
    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription2) {
      if (_parentOrParents === this) {
        return subscription;
      }
      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }
    var subscriptions = this._subscriptions;
    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }
    return subscription;
  };
  Subscription2.prototype.remove = function(subscription) {
    var subscriptions = this._subscriptions;
    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);
      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };
  Subscription2.EMPTY = function(empty2) {
    empty2.closed = true;
    return empty2;
  }(new Subscription2());
  return Subscription2;
}();
function flattenUnsubscriptionErrors(errors2) {
  return errors2.reduce(function(errs, err) {
    return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
  }, []);
}
var rxSubscriber = /* @__PURE__ */ function() {
  return typeof Symbol === "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}();
var Subscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(Subscriber2, _super);
  function Subscriber2(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;
    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;
    switch (arguments.length) {
      case 0:
        _this.destination = empty$1;
        break;
      case 1:
        if (!destinationOrNext) {
          _this.destination = empty$1;
          break;
        }
        if (typeof destinationOrNext === "object") {
          if (destinationOrNext instanceof Subscriber2) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }
          break;
        }
      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }
    return _this;
  }
  Subscriber2.prototype[rxSubscriber] = function() {
    return this;
  };
  Subscriber2.create = function(next, error, complete) {
    var subscriber = new Subscriber2(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };
  Subscriber2.prototype.next = function(value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (this.closed) {
      return;
    }
    this.isStopped = true;
    _super.prototype.unsubscribe.call(this);
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    this.destination.error(err);
    this.unsubscribe();
  };
  Subscriber2.prototype._complete = function() {
    this.destination.complete();
    this.unsubscribe();
  };
  Subscriber2.prototype._unsubscribeAndRecycle = function() {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };
  return Subscriber2;
}(Subscription);
var SafeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SafeSubscriber2, _super);
  function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;
    if (isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;
      if (observerOrNext !== empty$1) {
        context = Object.create(observerOrNext);
        if (isFunction(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }
        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }
    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }
  SafeSubscriber2.prototype.next = function(value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;
      if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };
  SafeSubscriber2.prototype.error = function(err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);
          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();
        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }
        hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError(err);
        }
        this.unsubscribe();
      }
    }
  };
  SafeSubscriber2.prototype.complete = function() {
    var _this = this;
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      if (this._complete) {
        var wrappedComplete = function() {
          return _this._complete.call(_this._context);
        };
        if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);
          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };
  SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();
      if (config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError(err);
      }
    }
  };
  SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
    if (!config.useDeprecatedSynchronousErrorHandling) {
      throw new Error("bad call");
    }
    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError(err);
        return true;
      }
    }
    return false;
  };
  SafeSubscriber2.prototype._unsubscribe = function() {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;
    _parentSubscriber.unsubscribe();
  };
  return SafeSubscriber2;
}(Subscriber);
function canReportError(observer) {
  while (observer) {
    var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }
  return true;
}
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber) {
      return nextOrObserver;
    }
    if (nextOrObserver[rxSubscriber]) {
      return nextOrObserver[rxSubscriber]();
    }
  }
  if (!nextOrObserver && !error && !complete) {
    return new Subscriber(empty$1);
  }
  return new Subscriber(nextOrObserver, error, complete);
}
var observable = /* @__PURE__ */ function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x2) {
  return x2;
}
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscribe) {
    this._isScalar = false;
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = toSubscriber(observerOrNext, error, complete);
    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }
    if (config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }
    return sink;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }
      if (canReportError(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function(value) {
        try {
          next(value);
        } catch (err) {
          reject(err);
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    if (operations.length === 0) {
      return this;
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x2) {
        return value = x2;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config.Promise || Promise;
  }
  if (!promiseCtor) {
    throw new Error("no Promise impl found");
  }
  return promiseCtor;
}
var ObjectUnsubscribedErrorImpl = /* @__PURE__ */ function() {
  function ObjectUnsubscribedErrorImpl2() {
    Error.call(this);
    this.message = "object unsubscribed";
    this.name = "ObjectUnsubscribedError";
    return this;
  }
  ObjectUnsubscribedErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  return ObjectUnsubscribedErrorImpl2;
}();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
var SubjectSubscription = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SubjectSubscription2, _super);
  function SubjectSubscription2(subject, subscriber) {
    var _this = _super.call(this) || this;
    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }
  SubjectSubscription2.prototype.unsubscribe = function() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;
    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }
    var subscriberIndex = observers.indexOf(this.subscriber);
    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };
  return SubjectSubscription2;
}(Subscription);
var SubjectSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SubjectSubscriber2, _super);
  function SubjectSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    return _this;
  }
  return SubjectSubscriber2;
}(Subscriber);
var Subject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype[rxSubscriber] = function() {
    return new SubjectSubscriber(this);
  };
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype.next = function(value) {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();
      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };
  Subject2.prototype.error = function(err) {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();
    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }
    this.observers.length = 0;
  };
  Subject2.prototype.complete = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();
    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }
    this.observers.length = 0;
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };
  Subject2.prototype._trySubscribe = function(subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };
  Subject2.prototype._subscribe = function(subscriber) {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new SubjectSubscription(this, subscriber);
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var destination = this.destination;
    if (destination && destination.next) {
      destination.next(value);
    }
  };
  AnonymousSubject2.prototype.error = function(err) {
    var destination = this.destination;
    if (destination && destination.error) {
      this.destination.error(err);
    }
  };
  AnonymousSubject2.prototype.complete = function() {
    var destination = this.destination;
    if (destination && destination.complete) {
      this.destination.complete();
    }
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var source = this.source;
    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return Subscription.EMPTY;
    }
  };
  return AnonymousSubject2;
}(Subject);
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}
var RefCountOperator = /* @__PURE__ */ function() {
  function RefCountOperator2(connectable) {
    this.connectable = connectable;
  }
  RefCountOperator2.prototype.call = function(subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);
    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }
    return subscription;
  };
  return RefCountOperator2;
}();
var RefCountSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RefCountSubscriber2, _super);
  function RefCountSubscriber2(destination, connectable) {
    var _this = _super.call(this, destination) || this;
    _this.connectable = connectable;
    return _this;
  }
  RefCountSubscriber2.prototype._unsubscribe = function() {
    var connectable = this.connectable;
    if (!connectable) {
      this.connection = null;
      return;
    }
    this.connectable = null;
    var refCount2 = connectable._refCount;
    if (refCount2 <= 0) {
      this.connection = null;
      return;
    }
    connectable._refCount = refCount2 - 1;
    if (refCount2 > 1) {
      this.connection = null;
      return;
    }
    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;
    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };
  return RefCountSubscriber2;
}(Subscriber);
var ConnectableObservable = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ConnectableObservable2, _super);
  function ConnectableObservable2(source, subjectFactory) {
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }
  ConnectableObservable2.prototype._subscribe = function(subscriber) {
    return this.getSubject().subscribe(subscriber);
  };
  ConnectableObservable2.prototype.getSubject = function() {
    var subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  };
  ConnectableObservable2.prototype.connect = function() {
    var connection = this._connection;
    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  };
  ConnectableObservable2.prototype.refCount = function() {
    return refCount()(this);
  };
  return ConnectableObservable2;
}(Observable);
var connectableObservableDescriptor = /* @__PURE__ */ function() {
  var connectableProto = ConnectableObservable.prototype;
  return {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
  };
}();
var ConnectableSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ConnectableSubscriber2, _super);
  function ConnectableSubscriber2(destination, connectable) {
    var _this = _super.call(this, destination) || this;
    _this.connectable = connectable;
    return _this;
  }
  ConnectableSubscriber2.prototype._error = function(err) {
    this._unsubscribe();
    _super.prototype._error.call(this, err);
  };
  ConnectableSubscriber2.prototype._complete = function() {
    this.connectable._isComplete = true;
    this._unsubscribe();
    _super.prototype._complete.call(this);
  };
  ConnectableSubscriber2.prototype._unsubscribe = function() {
    var connectable = this.connectable;
    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;
      if (connection) {
        connection.unsubscribe();
      }
    }
  };
  return ConnectableSubscriber2;
}(SubjectSubscriber);
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function(source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}
var GroupByOperator = /* @__PURE__ */ function() {
  function GroupByOperator2(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }
  GroupByOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };
  return GroupByOperator2;
}();
var GroupBySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(GroupBySubscriber2, _super);
  function GroupBySubscriber2(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;
    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }
  GroupBySubscriber2.prototype._next = function(value) {
    var key;
    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }
    this._group(value, key);
  };
  GroupBySubscriber2.prototype._group = function(value, key) {
    var groups = this.groups;
    if (!groups) {
      groups = this.groups = /* @__PURE__ */ new Map();
    }
    var group = groups.get(key);
    var element;
    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }
    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);
      if (this.durationSelector) {
        var duration = void 0;
        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }
        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }
    if (!group.closed) {
      group.next(element);
    }
  };
  GroupBySubscriber2.prototype._error = function(err) {
    var groups = this.groups;
    if (groups) {
      groups.forEach(function(group, key) {
        group.error(err);
      });
      groups.clear();
    }
    this.destination.error(err);
  };
  GroupBySubscriber2.prototype._complete = function() {
    var groups = this.groups;
    if (groups) {
      groups.forEach(function(group, key) {
        group.complete();
      });
      groups.clear();
    }
    this.destination.complete();
  };
  GroupBySubscriber2.prototype.removeGroup = function(key) {
    this.groups.delete(key);
  };
  GroupBySubscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;
      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };
  return GroupBySubscriber2;
}(Subscriber);
var GroupDurationSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(GroupDurationSubscriber2, _super);
  function GroupDurationSubscriber2(key, group, parent) {
    var _this = _super.call(this, group) || this;
    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }
  GroupDurationSubscriber2.prototype._next = function(value) {
    this.complete();
  };
  GroupDurationSubscriber2.prototype._unsubscribe = function() {
    var _a = this, parent = _a.parent, key = _a.key;
    this.key = this.parent = null;
    if (parent) {
      parent.removeGroup(key);
    }
  };
  return GroupDurationSubscriber2;
}(Subscriber);
var GroupedObservable = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(GroupedObservable2, _super);
  function GroupedObservable2(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;
    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }
  GroupedObservable2.prototype._subscribe = function(subscriber) {
    var subscription = new Subscription();
    var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }
    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };
  return GroupedObservable2;
}(Observable);
var InnerRefCountSubscription = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(InnerRefCountSubscription2, _super);
  function InnerRefCountSubscription2(parent) {
    var _this = _super.call(this) || this;
    _this.parent = parent;
    parent.count++;
    return _this;
  }
  InnerRefCountSubscription2.prototype.unsubscribe = function() {
    var parent = this.parent;
    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);
      parent.count -= 1;
      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };
  return InnerRefCountSubscription2;
}(Subscription);
var BehaviorSubject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);
var Action = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state2, delay2) {
    return this;
  };
  return Action2;
}(Subscription);
var AsyncAction = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state2;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    clearInterval(id);
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state2, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state2, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state2, delay2) {
    var errored = false;
    var errorValue = void 0;
    try {
      this.work(state2);
    } catch (e2) {
      errored = true;
      errorValue = !!e2 && e2 || new Error(e2);
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype._unsubscribe = function() {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index2 = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;
    if (index2 !== -1) {
      actions.splice(index2, 1);
    }
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }
    this.delay = null;
  };
  return AsyncAction2;
}(Action);
var QueueAction = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(QueueAction2, _super);
  function QueueAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  QueueAction2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 > 0) {
      return _super.prototype.schedule.call(this, state2, delay2);
    }
    this.delay = delay2;
    this.state = state2;
    this.scheduler.flush(this);
    return this;
  };
  QueueAction2.prototype.execute = function(state2, delay2) {
    return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state2, delay2) : this._execute(state2, delay2);
  };
  QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    return scheduler.flush(this);
  };
  return QueueAction2;
}(AsyncAction);
var Scheduler = /* @__PURE__ */ function() {
  function Scheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.SchedulerAction(this, work).schedule(state2, delay2);
  };
  Scheduler2.now = function() {
    return Date.now();
  };
  return Scheduler2;
}();
var AsyncScheduler = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, function() {
      if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== _this) {
        return AsyncScheduler2.delegate.now();
      } else {
        return now();
      }
    }) || this;
    _this.actions = [];
    _this.active = false;
    _this.scheduled = void 0;
    return _this;
  }
  AsyncScheduler2.prototype.schedule = function(work, delay2, state2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== this) {
      return AsyncScheduler2.delegate.schedule(work, delay2, state2);
    } else {
      return _super.prototype.schedule.call(this, work, delay2, state2);
    }
  };
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this.active) {
      actions.push(action);
      return;
    }
    var error;
    this.active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this.active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);
var QueueScheduler = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(QueueScheduler2, _super);
  function QueueScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return QueueScheduler2;
}(AsyncScheduler);
var queueScheduler = /* @__PURE__ */ new QueueScheduler(QueueAction);
var queue = queueScheduler;
var EMPTY = /* @__PURE__ */ new Observable(function(subscriber) {
  return subscriber.complete();
});
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(function(subscriber) {
    return scheduler.schedule(function() {
      return subscriber.complete();
    });
  });
}
function isScheduler(value) {
  return value && typeof value.schedule === "function";
}
var subscribeToArray = function(array) {
  return function(subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  };
};
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var i = 0;
    sub.add(scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
        return;
      }
      subscriber.next(input[i++]);
      if (!subscriber.closed) {
        sub.add(this.schedule());
      }
    }));
    return sub;
  });
}
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new Observable(subscribeToArray(input));
  } else {
    return scheduleArray(input, scheduler);
  }
}
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = args[args.length - 1];
  if (isScheduler(scheduler)) {
    args.pop();
    return scheduleArray(args, scheduler);
  } else {
    return fromArray(args);
  }
}
function throwError(error, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new Observable(function(subscriber) {
      return scheduler.schedule(dispatch$7, 0, { error, subscriber });
    });
  }
}
function dispatch$7(_a) {
  var error = _a.error, subscriber = _a.subscriber;
  subscriber.error(error);
}
var NotificationKind;
/* @__PURE__ */ (function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /* @__PURE__ */ function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    switch (this.kind) {
      case "N":
        return observer.next && observer.next(this.value);
      case "E":
        return observer.error && observer.error(this.error);
      case "C":
        return observer.complete && observer.complete();
    }
  };
  Notification2.prototype.do = function(next, error, complete) {
    var kind = this.kind;
    switch (kind) {
      case "N":
        return next && next(this.value);
      case "E":
        return error && error(this.error);
      case "C":
        return complete && complete();
    }
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === "function") {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };
  Notification2.prototype.toObservable = function() {
    var kind = this.kind;
    switch (kind) {
      case "N":
        return of(this.value);
      case "E":
        return throwError(this.error);
      case "C":
        return empty();
    }
    throw new Error("unexpected notification kind value");
  };
  Notification2.createNext = function(value) {
    if (typeof value !== "undefined") {
      return new Notification2("N", value);
    }
    return Notification2.undefinedValueNotification;
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  Notification2.undefinedValueNotification = new Notification2("N", void 0);
  return Notification2;
}();
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay2));
  };
}
var ObserveOnOperator = /* @__PURE__ */ function() {
  function ObserveOnOperator2(scheduler, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    this.scheduler = scheduler;
    this.delay = delay2;
  }
  ObserveOnOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };
  return ObserveOnOperator2;
}();
var ObserveOnSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ObserveOnSubscriber2, _super);
  function ObserveOnSubscriber2(destination, scheduler, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    var _this = _super.call(this, destination) || this;
    _this.scheduler = scheduler;
    _this.delay = delay2;
    return _this;
  }
  ObserveOnSubscriber2.dispatch = function(arg) {
    var notification = arg.notification, destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };
  ObserveOnSubscriber2.prototype.scheduleMessage = function(notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber2.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };
  ObserveOnSubscriber2.prototype._next = function(value) {
    this.scheduleMessage(Notification.createNext(value));
  };
  ObserveOnSubscriber2.prototype._error = function(err) {
    this.scheduleMessage(Notification.createError(err));
    this.unsubscribe();
  };
  ObserveOnSubscriber2.prototype._complete = function() {
    this.scheduleMessage(Notification.createComplete());
    this.unsubscribe();
  };
  return ObserveOnSubscriber2;
}(Subscriber);
var ObserveOnMessage = /* @__PURE__ */ function() {
  function ObserveOnMessage2(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }
  return ObserveOnMessage2;
}();
var ReplaySubject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ReplaySubject2, _super);
  function ReplaySubject2(bufferSize, windowTime2, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime2 === void 0) {
      windowTime2 = Number.POSITIVE_INFINITY;
    }
    var _this = _super.call(this) || this;
    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime2 < 1 ? 1 : windowTime2;
    if (windowTime2 === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }
    return _this;
  }
  ReplaySubject2.prototype.nextInfiniteTimeWindow = function(value) {
    if (!this.isStopped) {
      var _events = this._events;
      _events.push(value);
      if (_events.length > this._bufferSize) {
        _events.shift();
      }
    }
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype.nextTimeWindow = function(value) {
    if (!this.isStopped) {
      this._events.push(new ReplayEvent(this._getNow(), value));
      this._trimBufferThenGetEvents();
    }
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;
    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new SubjectSubscription(this, subscriber);
    }
    if (scheduler) {
      subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
    }
    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }
    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }
    return subscription;
  };
  ReplaySubject2.prototype._getNow = function() {
    return (this.scheduler || queue).now();
  };
  ReplaySubject2.prototype._trimBufferThenGetEvents = function() {
    var now = this._getNow();
    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;
    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }
      spliceCount++;
    }
    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }
    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }
    return _events;
  };
  return ReplaySubject2;
}(Subject);
var ReplayEvent = /* @__PURE__ */ function() {
  function ReplayEvent2(time, value) {
    this.time = time;
    this.value = value;
  }
  return ReplayEvent2;
}();
var AsyncSubject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AsyncSubject2, _super);
  function AsyncSubject2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }
  AsyncSubject2.prototype._subscribe = function(subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return Subscription.EMPTY;
    }
    return _super.prototype._subscribe.call(this, subscriber);
  };
  AsyncSubject2.prototype.next = function(value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };
  AsyncSubject2.prototype.error = function(error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };
  AsyncSubject2.prototype.complete = function() {
    this.hasCompleted = true;
    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }
    _super.prototype.complete.call(this);
  };
  return AsyncSubject2;
}(Subject);
var nextHandle = 1;
var RESOLVED = /* @__PURE__ */ function() {
  return /* @__PURE__ */ Promise.resolve();
}();
var activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var Immediate = {
  setImmediate: function(cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;
    RESOLVED.then(function() {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function(handle) {
    findAndClearHandle(handle);
  }
};
var AsapAction = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AsapAction2, _super);
  function AsapAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };
  AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    if (scheduler.actions.length === 0) {
      Immediate.clearImmediate(id);
      scheduler.scheduled = void 0;
    }
    return void 0;
  };
  return AsapAction2;
}(AsyncAction);
var AsapScheduler = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AsapScheduler2, _super);
  function AsapScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AsapScheduler2.prototype.flush = function(action) {
    this.active = true;
    this.scheduled = void 0;
    var actions = this.actions;
    var error;
    var index2 = -1;
    var count2 = actions.length;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index2 < count2 && (action = actions.shift()));
    this.active = false;
    if (error) {
      while (++index2 < count2 && (action = actions.shift())) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsapScheduler2;
}(AsyncScheduler);
var asapScheduler = /* @__PURE__ */ new AsapScheduler(AsapAction);
var asap = asapScheduler;
var asyncScheduler = /* @__PURE__ */ new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
var AnimationFrameAction = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function() {
      return scheduler.flush(null);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0 || delay2 === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);
var AnimationFrameScheduler = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this.active = true;
    this.scheduled = void 0;
    var actions = this.actions;
    var error;
    var index2 = -1;
    var count2 = actions.length;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index2 < count2 && (action = actions.shift()));
    this.active = false;
    if (error) {
      while (++index2 < count2 && (action = actions.shift())) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);
var animationFrameScheduler = /* @__PURE__ */ new AnimationFrameScheduler(AnimationFrameAction);
var animationFrame = animationFrameScheduler;
var VirtualTimeScheduler = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(VirtualTimeScheduler2, _super);
  function VirtualTimeScheduler2(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }
    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }
    var _this = _super.call(this, SchedulerAction, function() {
      return _this.frame;
    }) || this;
    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }
  VirtualTimeScheduler2.prototype.flush = function() {
    var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
    var error, action;
    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  VirtualTimeScheduler2.frameTimeFactor = 10;
  return VirtualTimeScheduler2;
}(AsyncScheduler);
var VirtualAction = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(VirtualAction2, _super);
  function VirtualAction2(scheduler, work, index2) {
    if (index2 === void 0) {
      index2 = scheduler.index += 1;
    }
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index2;
    _this.active = true;
    _this.index = scheduler.index = index2;
    return _this;
  }
  VirtualAction2.prototype.schedule = function(state2, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (!this.id) {
      return _super.prototype.schedule.call(this, state2, delay2);
    }
    this.active = false;
    var action = new VirtualAction2(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state2, delay2);
  };
  VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    this.delay = scheduler.frame + delay2;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction2.sortActions);
    return true;
  };
  VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    return void 0;
  };
  VirtualAction2.prototype._execute = function(state2, delay2) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state2, delay2);
    }
  };
  VirtualAction2.sortActions = function(a2, b2) {
    if (a2.delay === b2.delay) {
      if (a2.index === b2.index) {
        return 0;
      } else if (a2.index > b2.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a2.delay > b2.delay) {
      return 1;
    } else {
      return -1;
    }
  };
  return VirtualAction2;
}(AsyncAction);
function noop() {
}
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || typeof obj.lift === "function" && typeof obj.subscribe === "function");
}
var ArgumentOutOfRangeErrorImpl = /* @__PURE__ */ function() {
  function ArgumentOutOfRangeErrorImpl2() {
    Error.call(this);
    this.message = "argument out of range";
    this.name = "ArgumentOutOfRangeError";
    return this;
  }
  ArgumentOutOfRangeErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  return ArgumentOutOfRangeErrorImpl2;
}();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
var EmptyErrorImpl = /* @__PURE__ */ function() {
  function EmptyErrorImpl2() {
    Error.call(this);
    this.message = "no elements in sequence";
    this.name = "EmptyError";
    return this;
  }
  EmptyErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  return EmptyErrorImpl2;
}();
var EmptyError = EmptyErrorImpl;
var TimeoutErrorImpl = /* @__PURE__ */ function() {
  function TimeoutErrorImpl2() {
    Error.call(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    return this;
  }
  TimeoutErrorImpl2.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  return TimeoutErrorImpl2;
}();
var TimeoutError = TimeoutErrorImpl;
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== "function") {
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    }
    return source.lift(new MapOperator(project, thisArg));
  };
}
var MapOperator = /* @__PURE__ */ function() {
  function MapOperator2(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }
  MapOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };
  return MapOperator2;
}();
var MapSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(MapSubscriber2, _super);
  function MapSubscriber2(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;
    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }
  MapSubscriber2.prototype._next = function(value) {
    var result;
    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  };
  return MapSubscriber2;
}(Subscriber);
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var context = this;
    var subject;
    var params = {
      context,
      subject,
      callbackFunc,
      scheduler
    };
    return new Observable(function(subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        var state2 = {
          args,
          subscriber,
          params
        };
        return scheduler.schedule(dispatch$6, 0, state2);
      }
    });
  };
}
function dispatch$6(state2) {
  var _this = this;
  var args = state2.args, subscriber = state2.subscriber, params = state2.params;
  var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
      _this.add(scheduler.schedule(dispatchNext$3, 0, { value, subject }));
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext$3(state2) {
  var value = state2.value, subject = state2.subject;
  subject.next(value);
  subject.complete();
}
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var params = {
      subject: void 0,
      args,
      callbackFunc,
      scheduler,
      context: this
    };
    return new Observable(function(subscriber) {
      var context = params.context;
      var subject = params.subject;
      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
              return;
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch$5, 0, { params, subscriber, context });
      }
    });
  };
}
function dispatch$5(state2) {
  var _this = this;
  var params = state2.params, subscriber = state2.subscriber, context = state2.context;
  var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var err = innerArgs.shift();
      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
        _this.add(scheduler.schedule(dispatchNext$2, 0, { value, subject }));
      }
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext$2(arg) {
  var value = arg.value, subject = arg.subject;
  subject.next(value);
  subject.complete();
}
function dispatchError(arg) {
  var err = arg.err, subject = arg.subject;
  subject.error(err);
}
var OuterSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(OuterSubscriber2, _super);
  function OuterSubscriber2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  OuterSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };
  OuterSubscriber2.prototype.notifyError = function(error, innerSub) {
    this.destination.error(error);
  };
  OuterSubscriber2.prototype.notifyComplete = function(innerSub) {
    this.destination.complete();
  };
  return OuterSubscriber2;
}(Subscriber);
var InnerSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(InnerSubscriber2, _super);
  function InnerSubscriber2(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;
    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }
  InnerSubscriber2.prototype._next = function(value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };
  InnerSubscriber2.prototype._error = function(error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };
  InnerSubscriber2.prototype._complete = function() {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };
  return InnerSubscriber2;
}(Subscriber);
var subscribeToPromise = function(promise) {
  return function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, hostReportError);
    return subscriber;
  };
};
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = /* @__PURE__ */ getSymbolIterator();
var subscribeToIterable = function(iterable) {
  return function(subscriber) {
    var iterator$1 = iterable[iterator]();
    do {
      var item = void 0;
      try {
        item = iterator$1.next();
      } catch (err) {
        subscriber.error(err);
        return subscriber;
      }
      if (item.done) {
        subscriber.complete();
        break;
      }
      subscriber.next(item.value);
      if (subscriber.closed) {
        break;
      }
    } while (true);
    if (typeof iterator$1.return === "function") {
      subscriber.add(function() {
        if (iterator$1.return) {
          iterator$1.return();
        }
      });
    }
    return subscriber;
  };
};
var subscribeToObservable = function(obj) {
  return function(subscriber) {
    var obs = obj[observable]();
    if (typeof obs.subscribe !== "function") {
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    } else {
      return obs.subscribe(subscriber);
    }
  };
};
var isArrayLike = function(x2) {
  return x2 && typeof x2.length === "number" && typeof x2 !== "function";
};
function isPromise(value) {
  return !!value && typeof value.subscribe !== "function" && typeof value.then === "function";
}
var subscribeTo = function(result) {
  if (!!result && typeof result[observable] === "function") {
    return subscribeToObservable(result);
  } else if (isArrayLike(result)) {
    return subscribeToArray(result);
  } else if (isPromise(result)) {
    return subscribeToPromise(result);
  } else if (!!result && typeof result[iterator] === "function") {
    return subscribeToIterable(result);
  } else {
    var value = isObject(result) ? "an invalid object" : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
    throw new TypeError(msg);
  }
};
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
  if (innerSubscriber === void 0) {
    innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  return subscribeTo(result)(innerSubscriber);
}
var NONE = {};
function combineLatest$1() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = void 0;
  var scheduler = void 0;
  if (isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === "function") {
    resultSelector = observables.pop();
  }
  if (observables.length === 1 && isArray(observables[0])) {
    observables = observables[0];
  }
  return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /* @__PURE__ */ function() {
  function CombineLatestOperator2(resultSelector) {
    this.resultSelector = resultSelector;
  }
  CombineLatestOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };
  return CombineLatestOperator2;
}();
var CombineLatestSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(CombineLatestSubscriber2, _super);
  function CombineLatestSubscriber2(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;
    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }
  CombineLatestSubscriber2.prototype._next = function(observable2) {
    this.values.push(NONE);
    this.observables.push(observable2);
  };
  CombineLatestSubscriber2.prototype._complete = function() {
    var observables = this.observables;
    var len = observables.length;
    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;
      for (var i = 0; i < len; i++) {
        var observable2 = observables[i];
        this.add(subscribeToResult(this, observable2, void 0, i));
      }
    }
  };
  CombineLatestSubscriber2.prototype.notifyComplete = function(unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };
  CombineLatestSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;
    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };
  CombineLatestSubscriber2.prototype._tryResultSelector = function(values) {
    var result;
    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  };
  return CombineLatestSubscriber2;
}(OuterSubscriber);
function scheduleObservable(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      var observable$1 = input[observable]();
      sub.add(observable$1.subscribe({
        next: function(value) {
          sub.add(scheduler.schedule(function() {
            return subscriber.next(value);
          }));
        },
        error: function(err) {
          sub.add(scheduler.schedule(function() {
            return subscriber.error(err);
          }));
        },
        complete: function() {
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
function schedulePromise(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      return input.then(function(value) {
        sub.add(scheduler.schedule(function() {
          subscriber.next(value);
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }));
      }, function(err) {
        sub.add(scheduler.schedule(function() {
          return subscriber.error(err);
        }));
      });
    }));
    return sub;
  });
}
function scheduleIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var iterator$1;
    sub.add(function() {
      if (iterator$1 && typeof iterator$1.return === "function") {
        iterator$1.return();
      }
    });
    sub.add(scheduler.schedule(function() {
      iterator$1 = input[iterator]();
      sub.add(scheduler.schedule(function() {
        if (subscriber.closed) {
          return;
        }
        var value;
        var done2;
        try {
          var result = iterator$1.next();
          value = result.value;
          done2 = result.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done2) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      }));
    }));
    return sub;
  });
}
function isInteropObservable(input) {
  return input && typeof input[observable] === "function";
}
function isIterable(input) {
  return input && typeof input[iterator] === "function";
}
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    } else if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    } else if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    } else if (isIterable(input) || typeof input === "string") {
      return scheduleIterable(input, scheduler);
    }
  }
  throw new TypeError((input !== null && typeof input || input) + " is not observable");
}
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof Observable) {
      return input;
    }
    return new Observable(subscribeTo(input));
  } else {
    return scheduled(input, scheduler);
  }
}
var SimpleInnerSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SimpleInnerSubscriber2, _super);
  function SimpleInnerSubscriber2(parent) {
    var _this = _super.call(this) || this;
    _this.parent = parent;
    return _this;
  }
  SimpleInnerSubscriber2.prototype._next = function(value) {
    this.parent.notifyNext(value);
  };
  SimpleInnerSubscriber2.prototype._error = function(error) {
    this.parent.notifyError(error);
    this.unsubscribe();
  };
  SimpleInnerSubscriber2.prototype._complete = function() {
    this.parent.notifyComplete();
    this.unsubscribe();
  };
  return SimpleInnerSubscriber2;
}(Subscriber);
var SimpleOuterSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SimpleOuterSubscriber2, _super);
  function SimpleOuterSubscriber2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SimpleOuterSubscriber2.prototype.notifyNext = function(innerValue) {
    this.destination.next(innerValue);
  };
  SimpleOuterSubscriber2.prototype.notifyError = function(err) {
    this.destination.error(err);
  };
  SimpleOuterSubscriber2.prototype.notifyComplete = function() {
    this.destination.complete();
  };
  return SimpleOuterSubscriber2;
}(Subscriber);
function innerSubscribe(result, innerSubscriber) {
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  var subscription;
  try {
    subscription = subscribeTo(result)(innerSubscriber);
  } catch (error) {
    innerSubscriber.error(error);
  }
  return subscription;
}
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  if (typeof resultSelector === "function") {
    return function(source) {
      return source.pipe(mergeMap(function(a2, i) {
        return from(project(a2, i)).pipe(map(function(b2, ii) {
          return resultSelector(a2, b2, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return function(source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}
var MergeMapOperator = /* @__PURE__ */ function() {
  function MergeMapOperator2(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    this.project = project;
    this.concurrent = concurrent;
  }
  MergeMapOperator2.prototype.call = function(observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };
  return MergeMapOperator2;
}();
var MergeMapSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(MergeMapSubscriber2, _super);
  function MergeMapSubscriber2(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    var _this = _super.call(this, destination) || this;
    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }
  MergeMapSubscriber2.prototype._next = function(value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };
  MergeMapSubscriber2.prototype._tryNext = function(value) {
    var result;
    var index2 = this.index++;
    try {
      result = this.project(value, index2);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.active++;
    this._innerSub(result);
  };
  MergeMapSubscriber2.prototype._innerSub = function(ish) {
    var innerSubscriber = new SimpleInnerSubscriber(this);
    var destination = this.destination;
    destination.add(innerSubscriber);
    var innerSubscription = innerSubscribe(ish, innerSubscriber);
    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  };
  MergeMapSubscriber2.prototype._complete = function() {
    this.hasCompleted = true;
    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }
    this.unsubscribe();
  };
  MergeMapSubscriber2.prototype.notifyNext = function(innerValue) {
    this.destination.next(innerValue);
  };
  MergeMapSubscriber2.prototype.notifyComplete = function() {
    var buffer2 = this.buffer;
    this.active--;
    if (buffer2.length > 0) {
      this._next(buffer2.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };
  return MergeMapSubscriber2;
}(SimpleOuterSubscriber);
var flatMap = mergeMap;
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return mergeMap(identity, concurrent);
}
function concatAll() {
  return mergeAll(1);
}
function concat$1() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return concatAll()(of.apply(void 0, observables));
}
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    var input;
    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = input ? from(input) : empty();
    return source.subscribe(subscriber);
  });
}
function forkJoin() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 1) {
    var first_1 = sources[0];
    if (isArray(first_1)) {
      return forkJoinInternal(first_1, null);
    }
    if (isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
      var keys = Object.keys(first_1);
      return forkJoinInternal(keys.map(function(key) {
        return first_1[key];
      }), keys);
    }
  }
  if (typeof sources[sources.length - 1] === "function") {
    var resultSelector_1 = sources.pop();
    sources = sources.length === 1 && isArray(sources[0]) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe(map(function(args) {
      return resultSelector_1.apply(void 0, args);
    }));
  }
  return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
  return new Observable(function(subscriber) {
    var len = sources.length;
    if (len === 0) {
      subscriber.complete();
      return;
    }
    var values = new Array(len);
    var completed = 0;
    var emitted = 0;
    var _loop_1 = function(i2) {
      var source = from(sources[i2]);
      var hasValue = false;
      subscriber.add(source.subscribe({
        next: function(value) {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }
          values[i2] = value;
        },
        error: function(err) {
          return subscriber.error(err);
        },
        complete: function() {
          completed++;
          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ? keys.reduce(function(result, key, i3) {
                return result[key] = values[i3], result;
              }, {}) : values);
            }
            subscriber.complete();
          }
        }
      }));
    };
    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
  });
}
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    function handler(e2) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e2);
      }
    }
    setupSubscription(target, eventName, handler, subscriber, options);
  });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;
  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);
    unsubscribe = function() {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);
    unsubscribe = function() {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);
    unsubscribe = function() {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError("Invalid event target");
  }
  subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === "function" && typeof sourceObj.removeListener === "function";
}
function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === "function" && typeof sourceObj.off === "function";
}
function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === "function" && typeof sourceObj.removeEventListener === "function";
}
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var e2 = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        e2[_i] = arguments[_i];
      }
      return subscriber.next(e2.length === 1 ? e2[0] : e2);
    };
    var retValue;
    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!isFunction(removeHandler)) {
      return void 0;
    }
    return function() {
      return removeHandler(handler, retValue);
    };
  });
}
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;
  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === void 0 || isScheduler(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }
  return new Observable(function(subscriber) {
    var state2 = initialState;
    if (scheduler) {
      return scheduler.schedule(dispatch$4, 0, {
        subscriber,
        iterate,
        condition,
        resultSelector,
        state: state2
      });
    }
    do {
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state2);
        } catch (err) {
          subscriber.error(err);
          return void 0;
        }
        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }
      var value = void 0;
      try {
        value = resultSelector(state2);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        break;
      }
      try {
        state2 = iterate(state2);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
    } while (true);
    return void 0;
  });
}
function dispatch$4(state2) {
  var subscriber = state2.subscriber, condition = state2.condition;
  if (subscriber.closed) {
    return void 0;
  }
  if (state2.needIterate) {
    try {
      state2.state = state2.iterate(state2.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
  } else {
    state2.needIterate = true;
  }
  if (condition) {
    var conditionResult = void 0;
    try {
      conditionResult = condition(state2.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!conditionResult) {
      subscriber.complete();
      return void 0;
    }
    if (subscriber.closed) {
      return void 0;
    }
  }
  var value;
  try {
    value = state2.resultSelector(state2.state);
  } catch (err) {
    subscriber.error(err);
    return void 0;
  }
  if (subscriber.closed) {
    return void 0;
  }
  subscriber.next(value);
  if (subscriber.closed) {
    return void 0;
  }
  return this.schedule(state2);
}
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = EMPTY;
  }
  if (falseResult === void 0) {
    falseResult = EMPTY;
  }
  return defer(function() {
    return condition() ? trueResult : falseResult;
  });
}
function isNumeric(val) {
  return !isArray(val) && val - parseFloat(val) + 1 >= 0;
}
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  if (!isNumeric(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== "function") {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    subscriber.add(scheduler.schedule(dispatch$3, period, { subscriber, counter: 0, period }));
    return subscriber;
  });
}
function dispatch$3(state2) {
  var subscriber = state2.subscriber, counter = state2.counter, period = state2.period;
  subscriber.next(counter);
  this.schedule({ subscriber, counter: counter + 1, period }, period);
}
function merge$1() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last2 = observables[observables.length - 1];
  if (isScheduler(last2)) {
    scheduler = observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === "number") {
      concurrent = observables.pop();
    }
  } else if (typeof last2 === "number") {
    concurrent = observables.pop();
  }
  if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
    return observables[0];
  }
  return mergeAll(concurrent)(fromArray(observables, scheduler));
}
var NEVER = /* @__PURE__ */ new Observable(noop);
function never() {
  return NEVER;
}
function onErrorResumeNext$1() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 0) {
    return EMPTY;
  }
  var first2 = sources[0], remainder = sources.slice(1);
  if (sources.length === 1 && isArray(first2)) {
    return onErrorResumeNext$1.apply(void 0, first2);
  }
  return new Observable(function(subscriber) {
    var subNext = function() {
      return subscriber.add(onErrorResumeNext$1.apply(void 0, remainder).subscribe(subscriber));
    };
    return from(first2).subscribe({
      next: function(value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }
      subscriber.complete();
    });
  } else {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      var subscription = new Subscription();
      subscription.add(scheduler.schedule(dispatch$2, 0, { keys, index: 0, subscriber, subscription, obj }));
      return subscription;
    });
  }
}
function dispatch$2(state2) {
  var keys = state2.keys, index2 = state2.index, subscriber = state2.subscriber, subscription = state2.subscription, obj = state2.obj;
  if (!subscriber.closed) {
    if (index2 < keys.length) {
      var key = keys[index2];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({ keys, index: index2 + 1, subscriber, subscription, obj }));
    } else {
      subscriber.complete();
    }
  }
}
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }
  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}
var FilterOperator = /* @__PURE__ */ function() {
  function FilterOperator2(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }
  FilterOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };
  return FilterOperator2;
}();
var FilterSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(FilterSubscriber2, _super);
  function FilterSubscriber2(destination, predicate, thisArg) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.count = 0;
    return _this;
  }
  FilterSubscriber2.prototype._next = function(value) {
    var result;
    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    if (result) {
      this.destination.next(value);
    }
  };
  return FilterSubscriber2;
}(Subscriber);
function partition$1(source, predicate, thisArg) {
  return [
    filter(predicate, thisArg)(new Observable(subscribeTo(source))),
    filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))
  ];
}
function race$1() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  if (observables.length === 1) {
    if (isArray(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }
  return fromArray(observables, void 0).lift(new RaceOperator());
}
var RaceOperator = /* @__PURE__ */ function() {
  function RaceOperator2() {
  }
  RaceOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };
  return RaceOperator2;
}();
var RaceSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RaceSubscriber2, _super);
  function RaceSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }
  RaceSubscriber2.prototype._next = function(observable2) {
    this.observables.push(observable2);
  };
  RaceSubscriber2.prototype._complete = function() {
    var observables = this.observables;
    var len = observables.length;
    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable2 = observables[i];
        var subscription = subscribeToResult(this, observable2, void 0, i);
        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }
        this.add(subscription);
      }
      this.observables = null;
    }
  };
  RaceSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
    if (!this.hasFirst) {
      this.hasFirst = true;
      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }
      this.subscriptions = null;
    }
    this.destination.next(innerValue);
  };
  return RaceSubscriber2;
}(OuterSubscriber);
function range(start, count2, scheduler) {
  if (start === void 0) {
    start = 0;
  }
  return new Observable(function(subscriber) {
    if (count2 === void 0) {
      count2 = start;
      start = 0;
    }
    var index2 = 0;
    var current = start;
    if (scheduler) {
      return scheduler.schedule(dispatch$1, 0, {
        index: index2,
        count: count2,
        start,
        subscriber
      });
    } else {
      do {
        if (index2++ >= count2) {
          subscriber.complete();
          break;
        }
        subscriber.next(current++);
        if (subscriber.closed) {
          break;
        }
      } while (true);
    }
    return void 0;
  });
}
function dispatch$1(state2) {
  var start = state2.start, index2 = state2.index, count2 = state2.count, subscriber = state2.subscriber;
  if (index2 >= count2) {
    subscriber.complete();
    return;
  }
  subscriber.next(start);
  if (subscriber.closed) {
    return;
  }
  state2.index = index2 + 1;
  state2.start = start + 1;
  this.schedule(state2);
}
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  var period = -1;
  if (isNumeric(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if (isScheduler(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }
  if (!isScheduler(scheduler)) {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    var due = isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period,
      subscriber
    });
  });
}
function dispatch(state2) {
  var index2 = state2.index, period = state2.period, subscriber = state2.subscriber;
  subscriber.next(index2);
  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }
  state2.index = index2 + 1;
  this.schedule(state2, period);
}
function using(resourceFactory, observableFactory) {
  return new Observable(function(subscriber) {
    var resource;
    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var result;
    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = result ? from(result) : EMPTY;
    var subscription = source.subscribe(subscriber);
    return function() {
      subscription.unsubscribe();
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
function zip$1() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = observables[observables.length - 1];
  if (typeof resultSelector === "function") {
    observables.pop();
  }
  return fromArray(observables, void 0).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /* @__PURE__ */ function() {
  function ZipOperator2(resultSelector) {
    this.resultSelector = resultSelector;
  }
  ZipOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };
  return ZipOperator2;
}();
var ZipSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ZipSubscriber2, _super);
  function ZipSubscriber2(destination, resultSelector, values) {
    var _this = _super.call(this, destination) || this;
    _this.resultSelector = resultSelector;
    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === "function" ? resultSelector : void 0;
    return _this;
  }
  ZipSubscriber2.prototype._next = function(value) {
    var iterators = this.iterators;
    if (isArray(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[iterator] === "function") {
      iterators.push(new StaticIterator(value[iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };
  ZipSubscriber2.prototype._complete = function() {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();
    if (len === 0) {
      this.destination.complete();
      return;
    }
    this.active = len;
    for (var i = 0; i < len; i++) {
      var iterator2 = iterators[i];
      if (iterator2.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator2.subscribe());
      } else {
        this.active--;
      }
    }
  };
  ZipSubscriber2.prototype.notifyInactive = function() {
    this.active--;
    if (this.active === 0) {
      this.destination.complete();
    }
  };
  ZipSubscriber2.prototype.checkIterators = function() {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;
    for (var i = 0; i < len; i++) {
      var iterator2 = iterators[i];
      if (typeof iterator2.hasValue === "function" && !iterator2.hasValue()) {
        return;
      }
    }
    var shouldComplete = false;
    var args = [];
    for (var i = 0; i < len; i++) {
      var iterator2 = iterators[i];
      var result = iterator2.next();
      if (iterator2.hasCompleted()) {
        shouldComplete = true;
      }
      if (result.done) {
        destination.complete();
        return;
      }
      args.push(result.value);
    }
    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }
    if (shouldComplete) {
      destination.complete();
    }
  };
  ZipSubscriber2.prototype._tryresultSelector = function(args) {
    var result;
    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  };
  return ZipSubscriber2;
}(Subscriber);
var StaticIterator = /* @__PURE__ */ function() {
  function StaticIterator2(iterator2) {
    this.iterator = iterator2;
    this.nextResult = iterator2.next();
  }
  StaticIterator2.prototype.hasValue = function() {
    return true;
  };
  StaticIterator2.prototype.next = function() {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };
  StaticIterator2.prototype.hasCompleted = function() {
    var nextResult = this.nextResult;
    return Boolean(nextResult && nextResult.done);
  };
  return StaticIterator2;
}();
var StaticArrayIterator = /* @__PURE__ */ function() {
  function StaticArrayIterator2(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }
  StaticArrayIterator2.prototype[iterator] = function() {
    return this;
  };
  StaticArrayIterator2.prototype.next = function(value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
  };
  StaticArrayIterator2.prototype.hasValue = function() {
    return this.array.length > this.index;
  };
  StaticArrayIterator2.prototype.hasCompleted = function() {
    return this.array.length === this.index;
  };
  return StaticArrayIterator2;
}();
var ZipBufferIterator = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ZipBufferIterator2, _super);
  function ZipBufferIterator2(destination, parent, observable2) {
    var _this = _super.call(this, destination) || this;
    _this.parent = parent;
    _this.observable = observable2;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }
  ZipBufferIterator2.prototype[iterator] = function() {
    return this;
  };
  ZipBufferIterator2.prototype.next = function() {
    var buffer2 = this.buffer;
    if (buffer2.length === 0 && this.isComplete) {
      return { value: null, done: true };
    } else {
      return { value: buffer2.shift(), done: false };
    }
  };
  ZipBufferIterator2.prototype.hasValue = function() {
    return this.buffer.length > 0;
  };
  ZipBufferIterator2.prototype.hasCompleted = function() {
    return this.buffer.length === 0 && this.isComplete;
  };
  ZipBufferIterator2.prototype.notifyComplete = function() {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };
  ZipBufferIterator2.prototype.notifyNext = function(innerValue) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };
  ZipBufferIterator2.prototype.subscribe = function() {
    return innerSubscribe(this.observable, new SimpleInnerSubscriber(this));
  };
  return ZipBufferIterator2;
}(SimpleOuterSubscriber);
const _esm5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArgumentOutOfRangeError,
  AsyncSubject,
  BehaviorSubject,
  ConnectableObservable,
  EMPTY,
  EmptyError,
  GroupedObservable,
  NEVER,
  Notification,
  get NotificationKind() {
    return NotificationKind;
  },
  ObjectUnsubscribedError,
  Observable,
  ReplaySubject,
  Scheduler,
  Subject,
  Subscriber,
  Subscription,
  TimeoutError,
  UnsubscriptionError,
  VirtualAction,
  VirtualTimeScheduler,
  animationFrame,
  animationFrameScheduler,
  asap,
  asapScheduler,
  async,
  asyncScheduler,
  bindCallback,
  bindNodeCallback,
  combineLatest: combineLatest$1,
  concat: concat$1,
  config,
  defer,
  empty,
  forkJoin,
  from,
  fromEvent,
  fromEventPattern,
  generate,
  identity,
  iif,
  interval,
  isObservable,
  merge: merge$1,
  never,
  noop,
  observable,
  of,
  onErrorResumeNext: onErrorResumeNext$1,
  pairs,
  partition: partition$1,
  pipe,
  queue,
  queueScheduler,
  race: race$1,
  range,
  scheduled,
  throwError,
  timer,
  using,
  zip: zip$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$2$1 = /* @__PURE__ */ getAugmentedNamespace(_esm5);
var ConnectDialog$1 = {};
function r$1(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e2 = arguments[f2++]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const clsx_m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx,
  default: clsx
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(clsx_m);
var t, r, u, i$1, o = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o || u2), o = 0;
  var i = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i.__.length && i.__.push({ __V: c }), i.__[t2];
}
function p(n2) {
  return o = 1, y(B, n2);
}
function y(n2, u2, i) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i ? i(u2) : B(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    r.u = true;
    var f2 = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !f2 || f2.call(this, n3, t2, r2);
      var i2 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i2 = true);
        }
      }), !(!i2 && o2.__c.props === n3) && (!f2 || f2.call(this, n3, t2, r2));
    };
  }
  return o2.__N || o2.__;
}
function h(u2, i) {
  var o2 = d(t++, 3);
  !l$1.__s && z(o2.__H, i) && (o2.__ = u2, o2.i = i, r.__H.__h.push(o2));
}
function s(u2, i) {
  var o2 = d(t++, 4);
  !l$1.__s && z(o2.__H, i) && (o2.__ = u2, o2.i = i, r.__h.push(o2));
}
function _(n2) {
  return o = 5, F(function() {
    return { current: n2 };
  }, []);
}
function A(n2, t2, r2) {
  o = 6, s(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function F(n2, r2) {
  var u2 = d(t++, 7);
  return z(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T(n2, t2) {
  return o = 8, F(function() {
    return n2;
  }, t2);
}
function q(n2) {
  var u2 = r.context[n2.__c], i = d(t++, 9);
  return i.c = n2, u2 ? (null == i.__ && (i.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function x(t2, r2) {
  l$1.useDebugValue && l$1.useDebugValue(r2 ? r2(t2) : t2);
}
function P(n2) {
  var u2 = d(t++, 10), i = p();
  return u2.__ = n2, r.componentDidCatch || (r.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i[1](n3);
  }), [i[0], function() {
    i[1](void 0);
  }];
}
function V() {
  var n2 = d(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; )
      u2 = u2.__;
    var i = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n2.__;
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k), t2.__H.__h.forEach(w), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i = (r = n2.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i$1 === l$1.requestAnimationFrame || ((i$1 = l$1.requestAnimationFrame) || j)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g && (t2 = requestAnimationFrame(r2));
}
function k(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
const hooks_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: T,
  useContext: q,
  useDebugValue: x,
  useEffect: h,
  useErrorBoundary: P,
  useId: V,
  useImperativeHandle: A,
  useLayoutEffect: s,
  useMemo: F,
  useReducer: y,
  useRef: _,
  useState: p
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(hooks_module);
var ConnectContent$1 = {};
var version$1 = {};
Object.defineProperty(version$1, "__esModule", { value: true });
version$1.LIB_VERSION = void 0;
version$1.LIB_VERSION = "3.6.4";
var CloseIcon$1 = {};
Object.defineProperty(CloseIcon$1, "__esModule", { value: true });
CloseIcon$1.CloseIcon = void 0;
const preact_1$b = require$$1;
function CloseIcon(props) {
  return (0, preact_1$b.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$b.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
CloseIcon$1.CloseIcon = CloseIcon;
var coinbaseRoundSvg = {};
Object.defineProperty(coinbaseRoundSvg, "__esModule", { value: true });
coinbaseRoundSvg.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=`;
var coinbaseWalletRoundSvg = {};
Object.defineProperty(coinbaseWalletRoundSvg, "__esModule", { value: true });
coinbaseWalletRoundSvg.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==`;
var QRCodeIcon$1 = {};
Object.defineProperty(QRCodeIcon$1, "__esModule", { value: true });
QRCodeIcon$1.QRCodeIcon = void 0;
const preact_1$a = require$$1;
function QRCodeIcon(props) {
  return (0, preact_1$a.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$a.h)("path", { d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z" }),
    (0, preact_1$a.h)("path", { d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z" }),
    (0, preact_1$a.h)("path", { d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z" }),
    (0, preact_1$a.h)("path", { d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z" }),
    (0, preact_1$a.h)("path", { d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z" }),
    (0, preact_1$a.h)("path", { d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z" }),
    (0, preact_1$a.h)("path", { d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z" }),
    (0, preact_1$a.h)("path", { d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z" }),
    (0, preact_1$a.h)("path", { d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z" })
  );
}
QRCodeIcon$1.QRCodeIcon = QRCodeIcon;
var QRLogoCoinbase = {};
Object.defineProperty(QRLogoCoinbase, "__esModule", { value: true });
const svg = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
QRLogoCoinbase.default = svg;
var QRLogoWallet = {};
Object.defineProperty(QRLogoWallet, "__esModule", { value: true });
QRLogoWallet.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var StatusDotIcon$1 = {};
Object.defineProperty(StatusDotIcon$1, "__esModule", { value: true });
StatusDotIcon$1.StatusDotIcon = void 0;
const preact_1$9 = require$$1;
function StatusDotIcon(props) {
  return (0, preact_1$9.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$9.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z" })
  );
}
StatusDotIcon$1.StatusDotIcon = StatusDotIcon;
var QRCode$2 = {};
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
  this.parsedData = [];
  for (var i = 0, l2 = this.data.length; i < l2; i++) {
    var byteArray = [];
    var code = this.data.charCodeAt(i);
    if (code > 65536) {
      byteArray[0] = 240 | (code & 1835008) >>> 18;
      byteArray[1] = 128 | (code & 258048) >>> 12;
      byteArray[2] = 128 | (code & 4032) >>> 6;
      byteArray[3] = 128 | code & 63;
    } else if (code > 2048) {
      byteArray[0] = 224 | (code & 61440) >>> 12;
      byteArray[1] = 128 | (code & 4032) >>> 6;
      byteArray[2] = 128 | code & 63;
    } else if (code > 128) {
      byteArray[0] = 192 | (code & 1984) >>> 6;
      byteArray[1] = 128 | code & 63;
    } else {
      byteArray[0] = code;
    }
    this.parsedData.push(byteArray);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData);
  if (this.parsedData.length != this.data.length) {
    this.parsedData.unshift(191);
    this.parsedData.unshift(187);
    this.parsedData.unshift(239);
  }
}
QR8bitByte.prototype = {
  getLength: function(buffer2) {
    return this.parsedData.length;
  },
  write: function(buffer2) {
    for (var i = 0, l2 = this.parsedData.length; i < l2; i++) {
      buffer2.put(this.parsedData[i], 8);
    }
  }
};
function QRCodeModel(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}
QRCodeModel.prototype = { addData: function(data) {
  var newData = new QR8bitByte(data);
  this.dataList.push(newData);
  this.dataCache = null;
}, isDark: function(row, col) {
  if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    throw new Error(row + "," + col);
  }
  return this.modules[row][col];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(false, this.getBestMaskPattern());
}, makeImpl: function(test, maskPattern) {
  this.moduleCount = this.typeNumber * 4 + 17;
  this.modules = new Array(this.moduleCount);
  for (var row = 0; row < this.moduleCount; row++) {
    this.modules[row] = new Array(this.moduleCount);
    for (var col = 0; col < this.moduleCount; col++) {
      this.modules[row][col] = null;
    }
  }
  this.setupPositionProbePattern(0, 0);
  this.setupPositionProbePattern(this.moduleCount - 7, 0);
  this.setupPositionProbePattern(0, this.moduleCount - 7);
  this.setupPositionAdjustPattern();
  this.setupTimingPattern();
  this.setupTypeInfo(test, maskPattern);
  if (this.typeNumber >= 7) {
    this.setupTypeNumber(test);
  }
  if (this.dataCache == null) {
    this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
  }
  this.mapData(this.dataCache, maskPattern);
}, setupPositionProbePattern: function(row, col) {
  for (var r2 = -1; r2 <= 7; r2++) {
    if (row + r2 <= -1 || this.moduleCount <= row + r2)
      continue;
    for (var c2 = -1; c2 <= 7; c2++) {
      if (col + c2 <= -1 || this.moduleCount <= col + c2)
        continue;
      if (0 <= r2 && r2 <= 6 && (c2 == 0 || c2 == 6) || 0 <= c2 && c2 <= 6 && (r2 == 0 || r2 == 6) || 2 <= r2 && r2 <= 4 && 2 <= c2 && c2 <= 4) {
        this.modules[row + r2][col + c2] = true;
      } else {
        this.modules[row + r2][col + c2] = false;
      }
    }
  }
}, getBestMaskPattern: function() {
  var minLostPoint = 0;
  var pattern = 0;
  for (var i = 0; i < 8; i++) {
    this.makeImpl(true, i);
    var lostPoint = QRUtil.getLostPoint(this);
    if (i == 0 || minLostPoint > lostPoint) {
      minLostPoint = lostPoint;
      pattern = i;
    }
  }
  return pattern;
}, createMovieClip: function(target_mc, instance_name, depth) {
  var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
  var cs = 1;
  this.make();
  for (var row = 0; row < this.modules.length; row++) {
    var y2 = row * cs;
    for (var col = 0; col < this.modules[row].length; col++) {
      var x2 = col * cs;
      var dark = this.modules[row][col];
      if (dark) {
        qr_mc.beginFill(0, 100);
        qr_mc.moveTo(x2, y2);
        qr_mc.lineTo(x2 + cs, y2);
        qr_mc.lineTo(x2 + cs, y2 + cs);
        qr_mc.lineTo(x2, y2 + cs);
        qr_mc.endFill();
      }
    }
  }
  return qr_mc;
}, setupTimingPattern: function() {
  for (var r2 = 8; r2 < this.moduleCount - 8; r2++) {
    if (this.modules[r2][6] != null) {
      continue;
    }
    this.modules[r2][6] = r2 % 2 == 0;
  }
  for (var c2 = 8; c2 < this.moduleCount - 8; c2++) {
    if (this.modules[6][c2] != null) {
      continue;
    }
    this.modules[6][c2] = c2 % 2 == 0;
  }
}, setupPositionAdjustPattern: function() {
  var pos = QRUtil.getPatternPosition(this.typeNumber);
  for (var i = 0; i < pos.length; i++) {
    for (var j2 = 0; j2 < pos.length; j2++) {
      var row = pos[i];
      var col = pos[j2];
      if (this.modules[row][col] != null) {
        continue;
      }
      for (var r2 = -2; r2 <= 2; r2++) {
        for (var c2 = -2; c2 <= 2; c2++) {
          if (r2 == -2 || r2 == 2 || c2 == -2 || c2 == 2 || r2 == 0 && c2 == 0) {
            this.modules[row + r2][col + c2] = true;
          } else {
            this.modules[row + r2][col + c2] = false;
          }
        }
      }
    }
  }
}, setupTypeNumber: function(test) {
  var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
  }
  for (var i = 0; i < 18; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
  }
}, setupTypeInfo: function(test, maskPattern) {
  var data = this.errorCorrectLevel << 3 | maskPattern;
  var bits = QRUtil.getBCHTypeInfo(data);
  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    if (i < 6) {
      this.modules[i][8] = mod;
    } else if (i < 8) {
      this.modules[i + 1][8] = mod;
    } else {
      this.modules[this.moduleCount - 15 + i][8] = mod;
    }
  }
  for (var i = 0; i < 15; i++) {
    var mod = !test && (bits >> i & 1) == 1;
    if (i < 8) {
      this.modules[8][this.moduleCount - i - 1] = mod;
    } else if (i < 9) {
      this.modules[8][15 - i - 1 + 1] = mod;
    } else {
      this.modules[8][15 - i - 1] = mod;
    }
  }
  this.modules[this.moduleCount - 8][8] = !test;
}, mapData: function(data, maskPattern) {
  var inc = -1;
  var row = this.moduleCount - 1;
  var bitIndex = 7;
  var byteIndex = 0;
  for (var col = this.moduleCount - 1; col > 0; col -= 2) {
    if (col == 6)
      col--;
    while (true) {
      for (var c2 = 0; c2 < 2; c2++) {
        if (this.modules[row][col - c2] == null) {
          var dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
          }
          var mask = QRUtil.getMask(maskPattern, row, col - c2);
          if (mask) {
            dark = !dark;
          }
          this.modules[row][col - c2] = dark;
          bitIndex--;
          if (bitIndex == -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || this.moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
} };
QRCodeModel.PAD0 = 236;
QRCodeModel.PAD1 = 17;
QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer2 = new QRBitBuffer();
  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer2.put(data.mode, 4);
    buffer2.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer2);
  }
  var totalDataCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }
  if (buffer2.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer2.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  }
  if (buffer2.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer2.put(0, 4);
  }
  while (buffer2.getLengthInBits() % 8 != 0) {
    buffer2.putBit(false);
  }
  while (true) {
    if (buffer2.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer2.put(QRCodeModel.PAD0, 8);
    if (buffer2.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer2.put(QRCodeModel.PAD1, 8);
  }
  return QRCodeModel.createBytes(buffer2, rsBlocks);
};
QRCodeModel.createBytes = function(buffer2, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);
  for (var r2 = 0; r2 < rsBlocks.length; r2++) {
    var dcCount = rsBlocks[r2].dataCount;
    var ecCount = rsBlocks[r2].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r2] = new Array(dcCount);
    for (var i = 0; i < dcdata[r2].length; i++) {
      dcdata[r2][i] = 255 & buffer2.buffer[i + offset];
    }
    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r2], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r2] = new Array(rsPoly.getLength() - 1);
    for (var i = 0; i < ecdata[r2].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r2].length;
      ecdata[r2][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }
  var totalCodeCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }
  var data = new Array(totalCodeCount);
  var index2 = 0;
  for (var i = 0; i < maxDcCount; i++) {
    for (var r2 = 0; r2 < rsBlocks.length; r2++) {
      if (i < dcdata[r2].length) {
        data[index2++] = dcdata[r2][i];
      }
    }
  }
  for (var i = 0; i < maxEcCount; i++) {
    for (var r2 = 0; r2 < rsBlocks.length; r2++) {
      if (i < ecdata[r2].length) {
        data[index2++] = ecdata[r2][i];
      }
    }
  }
  return data;
};
var QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
var QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 };
var QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
var QRUtil = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, getBCHTypeInfo: function(data) {
  var d2 = data << 10;
  while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
    d2 ^= QRUtil.G15 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G15);
  }
  return (data << 10 | d2) ^ QRUtil.G15_MASK;
}, getBCHTypeNumber: function(data) {
  var d2 = data << 12;
  while (QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
    d2 ^= QRUtil.G18 << QRUtil.getBCHDigit(d2) - QRUtil.getBCHDigit(QRUtil.G18);
  }
  return data << 12 | d2;
}, getBCHDigit: function(data) {
  var digit = 0;
  while (data != 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
}, getPatternPosition: function(typeNumber) {
  return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
}, getMask: function(maskPattern, i, j2) {
  switch (maskPattern) {
    case QRMaskPattern.PATTERN000:
      return (i + j2) % 2 == 0;
    case QRMaskPattern.PATTERN001:
      return i % 2 == 0;
    case QRMaskPattern.PATTERN010:
      return j2 % 3 == 0;
    case QRMaskPattern.PATTERN011:
      return (i + j2) % 3 == 0;
    case QRMaskPattern.PATTERN100:
      return (Math.floor(i / 2) + Math.floor(j2 / 3)) % 2 == 0;
    case QRMaskPattern.PATTERN101:
      return i * j2 % 2 + i * j2 % 3 == 0;
    case QRMaskPattern.PATTERN110:
      return (i * j2 % 2 + i * j2 % 3) % 2 == 0;
    case QRMaskPattern.PATTERN111:
      return (i * j2 % 3 + (i + j2) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + maskPattern);
  }
}, getErrorCorrectPolynomial: function(errorCorrectLength) {
  var a2 = new QRPolynomial([1], 0);
  for (var i = 0; i < errorCorrectLength; i++) {
    a2 = a2.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
  }
  return a2;
}, getLengthInBits: function(mode, type) {
  if (1 <= type && type < 10) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 10;
      case QRMode.MODE_ALPHA_NUM:
        return 9;
      case QRMode.MODE_8BIT_BYTE:
        return 8;
      case QRMode.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + mode);
    }
  } else if (type < 27) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 12;
      case QRMode.MODE_ALPHA_NUM:
        return 11;
      case QRMode.MODE_8BIT_BYTE:
        return 16;
      case QRMode.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + mode);
    }
  } else if (type < 41) {
    switch (mode) {
      case QRMode.MODE_NUMBER:
        return 14;
      case QRMode.MODE_ALPHA_NUM:
        return 13;
      case QRMode.MODE_8BIT_BYTE:
        return 16;
      case QRMode.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + mode);
    }
  } else {
    throw new Error("type:" + type);
  }
}, getLostPoint: function(qrCode) {
  var moduleCount = qrCode.getModuleCount();
  var lostPoint = 0;
  for (var row = 0; row < moduleCount; row++) {
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var dark = qrCode.isDark(row, col);
      for (var r2 = -1; r2 <= 1; r2++) {
        if (row + r2 < 0 || moduleCount <= row + r2) {
          continue;
        }
        for (var c2 = -1; c2 <= 1; c2++) {
          if (col + c2 < 0 || moduleCount <= col + c2) {
            continue;
          }
          if (r2 == 0 && c2 == 0) {
            continue;
          }
          if (dark == qrCode.isDark(row + r2, col + c2)) {
            sameCount++;
          }
        }
      }
      if (sameCount > 5) {
        lostPoint += 3 + sameCount - 5;
      }
    }
  }
  for (var row = 0; row < moduleCount - 1; row++) {
    for (var col = 0; col < moduleCount - 1; col++) {
      var count2 = 0;
      if (qrCode.isDark(row, col))
        count2++;
      if (qrCode.isDark(row + 1, col))
        count2++;
      if (qrCode.isDark(row, col + 1))
        count2++;
      if (qrCode.isDark(row + 1, col + 1))
        count2++;
      if (count2 == 0 || count2 == 4) {
        lostPoint += 3;
      }
    }
  }
  for (var row = 0; row < moduleCount; row++) {
    for (var col = 0; col < moduleCount - 6; col++) {
      if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
        lostPoint += 40;
      }
    }
  }
  for (var col = 0; col < moduleCount; col++) {
    for (var row = 0; row < moduleCount - 6; row++) {
      if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
        lostPoint += 40;
      }
    }
  }
  var darkCount = 0;
  for (var col = 0; col < moduleCount; col++) {
    for (var row = 0; row < moduleCount; row++) {
      if (qrCode.isDark(row, col)) {
        darkCount++;
      }
    }
  }
  var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
  lostPoint += ratio * 10;
  return lostPoint;
} };
var QRMath = { glog: function(n2) {
  if (n2 < 1) {
    throw new Error("glog(" + n2 + ")");
  }
  return QRMath.LOG_TABLE[n2];
}, gexp: function(n2) {
  while (n2 < 0) {
    n2 += 255;
  }
  while (n2 >= 256) {
    n2 -= 255;
  }
  return QRMath.EXP_TABLE[n2];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
function QRPolynomial(num, shift) {
  if (num.length == void 0) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = { get: function(index2) {
  return this.num[index2];
}, getLength: function() {
  return this.num.length;
}, multiply: function(e2) {
  var num = new Array(this.getLength() + e2.getLength() - 1);
  for (var i = 0; i < this.getLength(); i++) {
    for (var j2 = 0; j2 < e2.getLength(); j2++) {
      num[i + j2] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e2.get(j2)));
    }
  }
  return new QRPolynomial(num, 0);
}, mod: function(e2) {
  if (this.getLength() - e2.getLength() < 0) {
    return this;
  }
  var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e2.get(0));
  var num = new Array(this.getLength());
  for (var i = 0; i < this.getLength(); i++) {
    num[i] = this.get(i);
  }
  for (var i = 0; i < e2.getLength(); i++) {
    num[i] ^= QRMath.gexp(QRMath.glog(e2.get(i)) + ratio);
  }
  return new QRPolynomial(num, 0).mod(e2);
} };
function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
  if (rsBlock == void 0) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }
  var length = rsBlock.length / 3;
  var list = [];
  for (var i = 0; i < length; i++) {
    var count2 = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];
    for (var j2 = 0; j2 < count2; j2++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }
  return list;
};
QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    default:
      return void 0;
  }
};
function QRBitBuffer() {
  this.buffer = [];
  this.length = 0;
}
QRBitBuffer.prototype = { get: function(index2) {
  var bufIndex = Math.floor(index2 / 8);
  return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) == 1;
}, put: function(num, length) {
  for (var i = 0; i < length; i++) {
    this.putBit((num >>> length - i - 1 & 1) == 1);
  }
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(bit) {
  var bufIndex = Math.floor(this.length / 8);
  if (this.buffer.length <= bufIndex) {
    this.buffer.push(0);
  }
  if (bit) {
    this.buffer[bufIndex] |= 128 >>> this.length % 8;
  }
  this.length++;
} };
var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function QRCode$1(options) {
  this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  };
  if (typeof options === "string") {
    options = {
      content: options
    };
  }
  if (options) {
    for (var i in options) {
      this.options[i] = options[i];
    }
  }
  if (typeof this.options.content !== "string") {
    throw new Error("Expected 'content' as string!");
  }
  if (this.options.content.length === 0) {
    throw new Error("Expected 'content' to be non-empty!");
  }
  if (!(this.options.padding >= 0)) {
    throw new Error("Expected 'padding' value to be non-negative!");
  }
  if (!(this.options.width > 0) || !(this.options.height > 0)) {
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  }
  function _getErrorCorrectLevel(ecl2) {
    switch (ecl2) {
      case "L":
        return QRErrorCorrectLevel.L;
      case "M":
        return QRErrorCorrectLevel.M;
      case "Q":
        return QRErrorCorrectLevel.Q;
      case "H":
        return QRErrorCorrectLevel.H;
      default:
        throw new Error("Unknwon error correction level: " + ecl2);
    }
  }
  function _getTypeNumber(content2, ecl2) {
    var length = _getUTF8Length(content2);
    var type2 = 1;
    var limit = 0;
    for (var i2 = 0, len = QRCodeLimitLength.length; i2 <= len; i2++) {
      var table = QRCodeLimitLength[i2];
      if (!table) {
        throw new Error("Content too long: expected " + limit + " but got " + length);
      }
      switch (ecl2) {
        case "L":
          limit = table[0];
          break;
        case "M":
          limit = table[1];
          break;
        case "Q":
          limit = table[2];
          break;
        case "H":
          limit = table[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + ecl2);
      }
      if (length <= limit) {
        break;
      }
      type2++;
    }
    if (type2 > QRCodeLimitLength.length) {
      throw new Error("Content too long");
    }
    return type2;
  }
  function _getUTF8Length(content2) {
    var result = encodeURI(content2).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return result.length + (result.length != content2 ? 3 : 0);
  }
  var content = this.options.content;
  var type = _getTypeNumber(content, this.options.ecl);
  var ecl = _getErrorCorrectLevel(this.options.ecl);
  this.qrcode = new QRCodeModel(type, ecl);
  this.qrcode.addData(content);
  this.qrcode.make();
}
QRCode$1.prototype.svg = function(opt) {
  var options = this.options || {};
  var modules = this.qrcode.modules;
  if (typeof opt == "undefined") {
    opt = { container: options.container || "svg" };
  }
  var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
  var indent = pretty ? "  " : "";
  var EOL = pretty ? "\r\n" : "";
  var width = options.width;
  var height = options.height;
  var length = modules.length;
  var xsize = width / (length + 2 * options.padding);
  var ysize = height / (length + 2 * options.padding);
  var join = typeof options.join != "undefined" ? !!options.join : false;
  var swap = typeof options.swap != "undefined" ? !!options.swap : false;
  var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
  var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
  var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + " v" + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : "";
  var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
  var modrect = "";
  var pathdata = "";
  for (var y2 = 0; y2 < length; y2++) {
    for (var x2 = 0; x2 < length; x2++) {
      var module = modules[x2][y2];
      if (module) {
        var px = x2 * xsize + options.padding * xsize;
        var py = y2 * ysize + options.padding * ysize;
        if (swap) {
          var t2 = px;
          px = py;
          py = t2;
        }
        if (join) {
          var w2 = xsize + px;
          var h2 = ysize + py;
          px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
          py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
          w2 = Number.isInteger(w2) ? Number(w2) : w2.toFixed(2);
          h2 = Number.isInteger(h2) ? Number(h2) : h2.toFixed(2);
          pathdata += "M" + px + "," + py + " V" + h2 + " H" + w2 + " V" + py + " H" + px + " Z ";
        } else if (predefined) {
          modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
        } else {
          modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
        }
      }
    }
  }
  if (join) {
    modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
  }
  let imgSvg = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const imgWidth = width * this.options.image.width / 100;
    const imgHeight = height * this.options.image.height / 100;
    const imgX = width / 2 - imgWidth / 2;
    const imgY = height / 2 - imgHeight / 2;
    imgSvg += `<svg x="${imgX}" y="${imgY}" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`;
    imgSvg += this.options.image.svg + EOL;
    imgSvg += "</svg>";
  }
  var svg2 = "";
  switch (opt.container) {
    case "svg":
      if (xmlDeclaration) {
        svg2 += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg2 += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
      svg2 += defs + bgrect + modrect;
      svg2 += imgSvg;
      svg2 += "</svg>";
      break;
    case "svg-viewbox":
      if (xmlDeclaration) {
        svg2 += '<?xml version="1.0" standalone="yes"?>' + EOL;
      }
      svg2 += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + " " + height + '">' + EOL;
      svg2 += defs + bgrect + modrect;
      svg2 += imgSvg;
      svg2 += "</svg>";
      break;
    case "g":
      svg2 += '<g width="' + width + '" height="' + height + '">' + EOL;
      svg2 += defs + bgrect + modrect;
      svg2 += imgSvg;
      svg2 += "</g>";
      break;
    default:
      svg2 += (defs + bgrect + modrect + imgSvg).replace(/^\s+/, "");
      break;
  }
  return svg2;
};
var qrcodeSvg = QRCode$1;
var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(QRCode$2, "__esModule", { value: true });
QRCode$2.QRCode = void 0;
const preact_1$8 = require$$1;
const hooks_1$3 = require$$2;
const qrcode_svg_1 = __importDefault$6(qrcodeSvg);
const QRCode = (props) => {
  const [svg2, setSvg] = (0, hooks_1$3.useState)("");
  (0, hooks_1$3.useEffect)(() => {
    var _a, _b;
    const qrcode = new qrcode_svg_1.default({
      content: props.content,
      background: props.bgColor || "#ffffff",
      color: props.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
      height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
      padding: 0,
      image: props.image
    });
    const base64 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
    setSvg(`data:image/svg+xml;base64,${base64}`);
  });
  return svg2 ? (0, preact_1$8.h)("img", { src: svg2, alt: "QR Code" }) : null;
};
QRCode$2.QRCode = QRCode;
var Spinner$1 = {};
var SpinnerCss = {};
Object.defineProperty(SpinnerCss, "__esModule", { value: true });
SpinnerCss.default = `.-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}`;
var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Spinner$1, "__esModule", { value: true });
Spinner$1.Spinner = void 0;
const preact_1$7 = require$$1;
const Spinner_css_1 = __importDefault$5(SpinnerCss);
const Spinner = (props) => {
  var _a;
  const size = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
  const color = props.color || "#000";
  return (0, preact_1$7.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, preact_1$7.h)("style", null, Spinner_css_1.default),
    (0, preact_1$7.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: size, height: size } },
      (0, preact_1$7.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: color } })
    )
  );
};
Spinner$1.Spinner = Spinner;
var ConnectContentCss = {};
Object.defineProperty(ConnectContentCss, "__esModule", { value: true });
ConnectContentCss.default = `.-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}`;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(ConnectContent$1, "__esModule", { value: true });
ConnectContent$1.CoinbaseAppSteps = ConnectContent$1.CoinbaseWalletSteps = ConnectContent$1.ConnectItem = ConnectContent$1.ConnectContent = void 0;
const clsx_1$2 = __importDefault$4(require$$0);
const preact_1$6 = require$$1;
const hooks_1$2 = require$$2;
const util_1$4 = util$5;
const version_1 = version$1;
const CloseIcon_1 = CloseIcon$1;
const coinbase_round_svg_1 = __importDefault$4(coinbaseRoundSvg);
const coinbase_wallet_round_svg_1 = __importDefault$4(coinbaseWalletRoundSvg);
const QRCodeIcon_1 = QRCodeIcon$1;
const QRLogoCoinbase_1 = __importDefault$4(QRLogoCoinbase);
const QRLogoWallet_1 = __importDefault$4(QRLogoWallet);
const StatusDotIcon_1 = StatusDotIcon$1;
const QRCode_1 = QRCode$2;
const Spinner_1 = Spinner$1;
const ConnectContent_css_1 = __importDefault$4(ConnectContentCss);
const wallets = {
  "coinbase-wallet-app": {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    icon: coinbase_wallet_round_svg_1.default,
    steps: CoinbaseWalletSteps
  },
  "coinbase-app": {
    title: "Coinbase app",
    description: "Connect with your Coinbase account",
    icon: coinbase_round_svg_1.default,
    steps: CoinbaseAppSteps
  }
};
const makeQrCodeImage = (app) => {
  switch (app) {
    case "coinbase-app":
      return QRLogoCoinbase_1.default;
    case "coinbase-wallet-app":
    default:
      return QRLogoWallet_1.default;
  }
};
const makeIconColor = (theme) => {
  return theme === "light" ? "#FFFFFF" : "#0A0B0D";
};
function ConnectContent(props) {
  const { theme } = props;
  const [selected, setSelected] = (0, hooks_1$2.useState)("coinbase-wallet-app");
  const handleSelect = (0, hooks_1$2.useCallback)((id) => {
    setSelected(id);
  }, []);
  const qrUrl = (0, util_1$4.createQrUrl)(props.sessionId, props.sessionSecret, props.linkAPIUrl, props.isParentConnection, props.version, props.chainId);
  const wallet = wallets[selected];
  if (!selected) {
    return null;
  }
  const WalletSteps = wallet.steps;
  const coinbaseApp = selected === "coinbase-app";
  return (0, preact_1$6.h)(
    "div",
    { "data-testid": "connect-content", class: (0, clsx_1$2.default)("-cbwsdk-connect-content", theme) },
    (0, preact_1$6.h)("style", null, ConnectContent_css_1.default),
    (0, preact_1$6.h)(
      "div",
      { class: "-cbwsdk-connect-content-header" },
      (0, preact_1$6.h)("h2", { class: (0, clsx_1$2.default)("-cbwsdk-connect-content-heading", theme) }, "Scan to connect with one of our mobile apps"),
      props.onCancel && (0, preact_1$6.h)(
        "button",
        { type: "button", class: "-cbwsdk-cancel-button", onClick: props.onCancel },
        (0, preact_1$6.h)(CloseIcon_1.CloseIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, preact_1$6.h)(
      "div",
      { class: "-cbwsdk-connect-content-layout" },
      (0, preact_1$6.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-left" },
        (0, preact_1$6.h)("div", null, Object.entries(wallets).map(([key, value]) => {
          return (0, preact_1$6.h)(ConnectItem, { key, title: value.title, description: value.description, icon: value.icon, selected: selected === key, onClick: () => handleSelect(key), theme });
        })),
        coinbaseApp && (0, preact_1$6.h)(
          "div",
          { class: (0, clsx_1$2.default)("-cbwsdk-connect-content-update-app", theme) },
          "Don’t see a ",
          (0, preact_1$6.h)("strong", null, "Scan"),
          " option? Update your Coinbase app to the latest version and try again."
        )
      ),
      (0, preact_1$6.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-right" },
        (0, preact_1$6.h)(
          "div",
          { class: "-cbwsdk-connect-content-qr-wrapper" },
          (0, preact_1$6.h)(QRCode_1.QRCode, { content: qrUrl, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
            svg: makeQrCodeImage(selected),
            width: 25,
            height: 25
          } }),
          (0, preact_1$6.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: version_1.LIB_VERSION }),
          (0, preact_1$6.h)("input", { type: "hidden", value: qrUrl })
        ),
        (0, preact_1$6.h)(WalletSteps, { theme }),
        !props.isConnected && (0, preact_1$6.h)(
          "div",
          { "data-testid": "connecting-spinner", class: (0, clsx_1$2.default)("-cbwsdk-connect-content-qr-connecting", theme) },
          (0, preact_1$6.h)(Spinner_1.Spinner, { size: 36, color: theme === "dark" ? "#FFF" : "#000" }),
          (0, preact_1$6.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
ConnectContent$1.ConnectContent = ConnectContent;
function ConnectItem({ title, description: description2, icon, selected, theme, onClick }) {
  return (0, preact_1$6.h)(
    "div",
    { onClick, class: (0, clsx_1$2.default)("-cbwsdk-connect-item", theme, { selected }) },
    (0, preact_1$6.h)(
      "div",
      null,
      (0, preact_1$6.h)("img", { src: icon, alt: title })
    ),
    (0, preact_1$6.h)(
      "div",
      { class: "-cbwsdk-connect-item-copy-wrapper" },
      (0, preact_1$6.h)("h3", { class: "-cbwsdk-connect-item-title" }, title),
      (0, preact_1$6.h)("p", { class: "-cbwsdk-connect-item-description" }, description2)
    )
  );
}
ConnectContent$1.ConnectItem = ConnectItem;
function CoinbaseWalletSteps({ theme }) {
  return (0, preact_1$6.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, preact_1$6.h)(
      "li",
      { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
      (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, preact_1$6.h)(
      "li",
      { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
      (0, preact_1$6.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, preact_1$6.h)(
          "span",
          null,
          "Tap ",
          (0, preact_1$6.h)("strong", null, "Scan"),
          " "
        ),
        (0, preact_1$6.h)(
          "span",
          { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
          (0, preact_1$6.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) })
        )
      )
    )
  );
}
ConnectContent$1.CoinbaseWalletSteps = CoinbaseWalletSteps;
function CoinbaseAppSteps({ theme }) {
  return (0, preact_1$6.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, preact_1$6.h)(
      "li",
      { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
      (0, preact_1$6.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")
    ),
    (0, preact_1$6.h)(
      "li",
      { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-item", theme) },
      (0, preact_1$6.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, preact_1$6.h)(
          "span",
          null,
          "Tap ",
          (0, preact_1$6.h)("strong", null, "More")
        ),
        (0, preact_1$6.h)(
          "span",
          { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
          (0, preact_1$6.h)(StatusDotIcon_1.StatusDotIcon, { fill: makeIconColor(theme) })
        ),
        (0, preact_1$6.h)(
          "span",
          { class: "-cbwsdk-wallet-steps-pad-left" },
          "then ",
          (0, preact_1$6.h)("strong", null, "Scan")
        ),
        (0, preact_1$6.h)(
          "span",
          { class: (0, clsx_1$2.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", theme) },
          (0, preact_1$6.h)(QRCodeIcon_1.QRCodeIcon, { fill: makeIconColor(theme) })
        )
      )
    )
  );
}
ConnectContent$1.CoinbaseAppSteps = CoinbaseAppSteps;
var TryExtensionContent$1 = {};
var ArrowLeftIcon$1 = {};
Object.defineProperty(ArrowLeftIcon$1, "__esModule", { value: true });
ArrowLeftIcon$1.ArrowLeftIcon = void 0;
const preact_1$5 = require$$1;
function ArrowLeftIcon(props) {
  return (0, preact_1$5.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$5.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
ArrowLeftIcon$1.ArrowLeftIcon = ArrowLeftIcon;
var LaptopIcon$1 = {};
Object.defineProperty(LaptopIcon$1, "__esModule", { value: true });
LaptopIcon$1.LaptopIcon = void 0;
const preact_1$4 = require$$1;
function LaptopIcon(props) {
  return (0, preact_1$4.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$4.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, preact_1$4.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
LaptopIcon$1.LaptopIcon = LaptopIcon;
var SafeIcon$1 = {};
Object.defineProperty(SafeIcon$1, "__esModule", { value: true });
SafeIcon$1.SafeIcon = void 0;
const preact_1$3 = require$$1;
function SafeIcon(props) {
  return (0, preact_1$3.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, props),
    (0, preact_1$3.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
SafeIcon$1.SafeIcon = SafeIcon;
var TryExtensionContentCss = {};
Object.defineProperty(TryExtensionContentCss, "__esModule", { value: true });
TryExtensionContentCss.default = `.-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}`;
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(TryExtensionContent$1, "__esModule", { value: true });
TryExtensionContent$1.TryExtensionContent = void 0;
const clsx_1$1 = __importDefault$3(require$$0);
const preact_1$2 = require$$1;
const hooks_1$1 = require$$2;
const ArrowLeftIcon_1 = ArrowLeftIcon$1;
const LaptopIcon_1 = LaptopIcon$1;
const SafeIcon_1 = SafeIcon$1;
const TryExtensionContent_css_1 = __importDefault$3(TryExtensionContentCss);
function TryExtensionContent({ theme }) {
  const [clicked, setClicked] = (0, hooks_1$1.useState)(false);
  const handleInstallClick = (0, hooks_1$1.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []);
  const handleClick = (0, hooks_1$1.useCallback)(() => {
    if (clicked) {
      window.location.reload();
    } else {
      handleInstallClick();
      setClicked(true);
    }
  }, [handleInstallClick, clicked]);
  return (0, preact_1$2.h)(
    "div",
    { class: (0, clsx_1$1.default)("-cbwsdk-try-extension", theme) },
    (0, preact_1$2.h)("style", null, TryExtensionContent_css_1.default),
    (0, preact_1$2.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, preact_1$2.h)("h3", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-heading", theme) }, "Or try the Coinbase Wallet browser extension"),
      (0, preact_1$2.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, preact_1$2.h)("button", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-cta", theme), onClick: handleClick }, clicked ? "Refresh" : "Install"),
        (0, preact_1$2.h)("div", null, !clicked && (0, preact_1$2.h)(ArrowLeftIcon_1.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: theme === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, preact_1$2.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, preact_1$2.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, preact_1$2.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, preact_1$2.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, preact_1$2.h)(
              "span",
              { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
              (0, preact_1$2.h)(LaptopIcon_1.LaptopIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, preact_1$2.h)("div", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, preact_1$2.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, preact_1$2.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, preact_1$2.h)(
              "span",
              { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-icon", theme) },
              (0, preact_1$2.h)(SafeIcon_1.SafeIcon, { fill: theme === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, preact_1$2.h)("div", { class: (0, clsx_1$1.default)("-cbwsdk-try-extension-list-item-copy", theme) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
TryExtensionContent$1.TryExtensionContent = TryExtensionContent;
var ConnectDialogCss = {};
Object.defineProperty(ConnectDialogCss, "__esModule", { value: true });
ConnectDialogCss.default = `.-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}`;
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(ConnectDialog$1, "__esModule", { value: true });
ConnectDialog$1.ConnectDialog = void 0;
const clsx_1 = __importDefault$2(require$$0);
const preact_1$1 = require$$1;
const hooks_1 = require$$2;
const ConnectContent_1 = ConnectContent$1;
const TryExtensionContent_1 = TryExtensionContent$1;
const ConnectDialog_css_1 = __importDefault$2(ConnectDialogCss);
const ConnectDialog = (props) => {
  const { isOpen, darkMode } = props;
  const [containerHidden, setContainerHidden] = (0, hooks_1.useState)(!isOpen);
  const [dialogHidden, setDialogHidden] = (0, hooks_1.useState)(!isOpen);
  (0, hooks_1.useEffect)(() => {
    const timers = [
      window.setTimeout(() => {
        setDialogHidden(!isOpen);
      }, 10)
    ];
    if (isOpen) {
      setContainerHidden(false);
    } else {
      timers.push(window.setTimeout(() => {
        setContainerHidden(true);
      }, 360));
    }
    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, [props.isOpen]);
  const theme = darkMode ? "dark" : "light";
  return (0, preact_1$1.h)(
    "div",
    { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-container", containerHidden && "-cbwsdk-connect-dialog-container-hidden") },
    (0, preact_1$1.h)("style", null, ConnectDialog_css_1.default),
    (0, preact_1$1.h)("div", { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-backdrop", theme, dialogHidden && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, preact_1$1.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, preact_1$1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-connect-dialog-box", dialogHidden && "-cbwsdk-connect-dialog-box-hidden") },
        !props.connectDisabled ? (0, preact_1$1.h)(ConnectContent_1.ConnectContent, { theme, version: props.version, sessionId: props.sessionId, sessionSecret: props.sessionSecret, linkAPIUrl: props.linkAPIUrl, isConnected: props.isConnected, isParentConnection: props.isParentConnection, chainId: props.chainId, onCancel: props.onCancel }) : null,
        (0, preact_1$1.h)(TryExtensionContent_1.TryExtensionContent, { theme })
      )
    )
  );
};
ConnectDialog$1.ConnectDialog = ConnectDialog;
Object.defineProperty(LinkFlow$1, "__esModule", { value: true });
LinkFlow$1.LinkFlow = void 0;
const preact_1 = require$$1;
const rxjs_1$2 = require$$2$1;
const ConnectDialog_1 = ConnectDialog$1;
class LinkFlow {
  constructor(options) {
    this.extensionUI$ = new rxjs_1$2.BehaviorSubject({});
    this.subscriptions = new rxjs_1$2.Subscription();
    this.isConnected = false;
    this.chainId = 1;
    this.isOpen = false;
    this.onCancel = null;
    this.root = null;
    this.connectDisabled = false;
    this.darkMode = options.darkMode;
    this.version = options.version;
    this.sessionId = options.sessionId;
    this.sessionSecret = options.sessionSecret;
    this.linkAPIUrl = options.linkAPIUrl;
    this.isParentConnection = options.isParentConnection;
    this.connected$ = options.connected$;
    this.chainId$ = options.chainId$;
  }
  attach(el) {
    this.root = document.createElement("div");
    this.root.className = "-cbwsdk-link-flow-root";
    el.appendChild(this.root);
    this.render();
    this.subscriptions.add(this.connected$.subscribe((v2) => {
      if (this.isConnected !== v2) {
        this.isConnected = v2;
        this.render();
      }
    }));
    this.subscriptions.add(this.chainId$.subscribe((chainId) => {
      if (this.chainId !== chainId) {
        this.chainId = chainId;
        this.render();
      }
    }));
  }
  detach() {
    var _a;
    if (!this.root) {
      return;
    }
    this.subscriptions.unsubscribe();
    (0, preact_1.render)(null, this.root);
    (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.root);
  }
  setConnectDisabled(connectDisabled) {
    this.connectDisabled = connectDisabled;
  }
  open(options) {
    this.isOpen = true;
    this.onCancel = options.onCancel;
    this.render();
  }
  close() {
    this.isOpen = false;
    this.onCancel = null;
    this.render();
  }
  render() {
    if (!this.root) {
      return;
    }
    const subscription = this.extensionUI$.subscribe(() => {
      if (!this.root) {
        return;
      }
      (0, preact_1.render)((0, preact_1.h)(ConnectDialog_1.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
    });
    this.subscriptions.add(subscription);
  }
}
LinkFlow$1.LinkFlow = LinkFlow;
var Snackbar = {};
var SnackbarCss = {};
Object.defineProperty(SnackbarCss, "__esModule", { value: true });
SnackbarCss.default = `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`;
(function(exports2) {
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.SnackbarInstance = exports2.SnackbarContainer = exports2.Snackbar = void 0;
  const clsx_12 = __importDefault2(require$$0);
  const preact_12 = require$$1;
  const hooks_12 = require$$2;
  const Snackbar_css_1 = __importDefault2(SnackbarCss);
  const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
  function makeSnackbarIcon(appSrc) {
    switch (appSrc) {
      case "coinbase-app":
        return `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+`;
      case "coinbase-wallet-app":
      default:
        return `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
    }
  }
  class Snackbar2 {
    constructor(options) {
      this.items = /* @__PURE__ */ new Map();
      this.nextItemKey = 0;
      this.root = null;
      this.darkMode = options.darkMode;
    }
    attach(el) {
      this.root = document.createElement("div");
      this.root.className = "-cbwsdk-snackbar-root";
      el.appendChild(this.root);
      this.render();
    }
    presentItem(itemProps) {
      const key = this.nextItemKey++;
      this.items.set(key, itemProps);
      this.render();
      return () => {
        this.items.delete(key);
        this.render();
      };
    }
    clear() {
      this.items.clear();
      this.render();
    }
    render() {
      if (!this.root) {
        return;
      }
      (0, preact_12.render)((0, preact_12.h)(
        "div",
        null,
        (0, preact_12.h)(exports2.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (0, preact_12.h)(exports2.SnackbarInstance, Object.assign({}, itemProps, { key }))))
      ), this.root);
    }
  }
  exports2.Snackbar = Snackbar2;
  const SnackbarContainer = (props) => (0, preact_12.h)(
    "div",
    { class: (0, clsx_12.default)("-cbwsdk-snackbar-container") },
    (0, preact_12.h)("style", null, Snackbar_css_1.default),
    (0, preact_12.h)("div", { class: "-cbwsdk-snackbar" }, props.children)
  );
  exports2.SnackbarContainer = SnackbarContainer;
  const SnackbarInstance = ({ autoExpand, message, menuItems, appSrc }) => {
    const [hidden, setHidden] = (0, hooks_12.useState)(true);
    const [expanded, setExpanded] = (0, hooks_12.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
    (0, hooks_12.useEffect)(() => {
      const timers = [
        window.setTimeout(() => {
          setHidden(false);
        }, 1),
        window.setTimeout(() => {
          setExpanded(true);
        }, 1e4)
      ];
      return () => {
        timers.forEach(window.clearTimeout);
      };
    });
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
    return (0, preact_12.h)(
      "div",
      { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
      (0, preact_12.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
        (0, preact_12.h)("img", { src: makeSnackbarIcon(appSrc), class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        (0, preact_12.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
        (0, preact_12.h)(
          "div",
          { class: "-gear-container" },
          !expanded && (0, preact_12.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, preact_12.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, preact_12.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
        )
      ),
      menuItems && menuItems.length > 0 && (0, preact_12.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i) => (0, preact_12.h)(
        "div",
        { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i },
        (0, preact_12.h)(
          "svg",
          { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, preact_12.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
        ),
        (0, preact_12.h)("span", { class: (0, clsx_12.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
      )))
    );
  };
  exports2.SnackbarInstance = SnackbarInstance;
})(Snackbar);
var cssReset = {};
var cssResetCss = {};
Object.defineProperty(cssResetCss, "__esModule", { value: true });
cssResetCss.default = `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`;
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(cssReset, "__esModule", { value: true });
cssReset.injectCssReset = void 0;
const cssReset_css_1 = __importDefault$1(cssResetCss);
function injectCssReset() {
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
  document.documentElement.appendChild(styleEl);
}
cssReset.injectCssReset = injectCssReset;
Object.defineProperty(WalletSDKUI$1, "__esModule", { value: true });
WalletSDKUI$1.WalletSDKUI = void 0;
const LinkFlow_1 = LinkFlow$1;
const Snackbar_1 = Snackbar;
const cssReset_1 = cssReset;
class WalletSDKUI {
  constructor(options) {
    this.standalone = null;
    this.attached = false;
    this.appSrc = null;
    this.snackbar = new Snackbar_1.Snackbar({
      darkMode: options.darkMode
    });
    this.linkFlow = new LinkFlow_1.LinkFlow({
      darkMode: options.darkMode,
      version: options.version,
      sessionId: options.session.id,
      sessionSecret: options.session.secret,
      linkAPIUrl: options.linkAPIUrl,
      connected$: options.connected$,
      chainId$: options.chainId$,
      isParentConnection: false
    });
  }
  attach() {
    if (this.attached) {
      throw new Error("Coinbase Wallet SDK UI is already attached");
    }
    const el = document.documentElement;
    const container = document.createElement("div");
    container.className = "-cbwsdk-css-reset";
    el.appendChild(container);
    this.linkFlow.attach(container);
    this.snackbar.attach(container);
    this.attached = true;
    (0, cssReset_1.injectCssReset)();
  }
  setConnectDisabled(connectDisabled) {
    this.linkFlow.setConnectDisabled(connectDisabled);
  }
  /* istanbul ignore next */
  addEthereumChain(_options) {
  }
  /* istanbul ignore next */
  watchAsset(_options) {
  }
  /* istanbul ignore next */
  switchEthereumChain(_options) {
  }
  requestEthereumAccounts(options) {
    this.linkFlow.open({ onCancel: options.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  /* istanbul ignore next */
  signEthereumMessage(_2) {
  }
  /* istanbul ignore next */
  signEthereumTransaction(_2) {
  }
  /* istanbul ignore next */
  submitEthereumTransaction(_2) {
  }
  /* istanbul ignore next */
  ethereumAddressFromSignedMessage(_2) {
  }
  showConnecting(options) {
    let snackbarProps;
    if (options.isUnlinkedErrorState) {
      snackbarProps = {
        autoExpand: true,
        message: "Connection lost",
        appSrc: this.appSrc,
        menuItems: [
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    } else {
      snackbarProps = {
        message: "Confirm on phone",
        appSrc: this.appSrc,
        menuItems: [
          {
            isRed: true,
            info: "Cancel transaction",
            svgWidth: "11",
            svgHeight: "11",
            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
            defaultFillRule: "inherit",
            defaultClipRule: "inherit",
            onClick: options.onCancel
          },
          {
            isRed: false,
            info: "Reset connection",
            svgWidth: "10",
            svgHeight: "11",
            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
            defaultFillRule: "evenodd",
            defaultClipRule: "evenodd",
            onClick: options.onResetConnection
          }
        ]
      };
    }
    return this.snackbar.presentItem(snackbarProps);
  }
  /* istanbul ignore next */
  setAppSrc(appSrc) {
    this.appSrc = appSrc;
  }
  /* istanbul ignore next */
  reloadUI() {
    document.location.reload();
  }
  /* istanbul ignore next */
  inlineAccountsResponse() {
    return false;
  }
  /* istanbul ignore next */
  inlineAddEthereumChain(_chainId) {
    return false;
  }
  /* istanbul ignore next */
  inlineWatchAsset() {
    return false;
  }
  /* istanbul ignore next */
  inlineSwitchEthereumChain() {
    return false;
  }
  /* istanbul ignore next */
  setStandalone(status) {
    this.standalone = status;
  }
  /* istanbul ignore next */
  isStandalone() {
    var _a;
    return (_a = this.standalone) !== null && _a !== void 0 ? _a : false;
  }
}
WalletSDKUI$1.WalletSDKUI = WalletSDKUI;
var WalletSDKRelay$1 = {};
var bindDecorator = {};
Object.defineProperty(bindDecorator, "__esModule", { value: true });
var constants;
(function(constants2) {
  constants2.typeOfFunction = "function";
  constants2.boolTrue = true;
})(constants || (constants = {}));
function bind2(target, propertyKey, descriptor) {
  if (!descriptor || typeof descriptor.value !== constants.typeOfFunction) {
    throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
  }
  return {
    configurable: constants.boolTrue,
    get: function() {
      var bound = descriptor.value.bind(this);
      Object.defineProperty(this, propertyKey, {
        value: bound,
        configurable: constants.boolTrue,
        writable: constants.boolTrue
      });
      return bound;
    }
  };
}
bindDecorator.bind = bind2;
bindDecorator.default = bind2;
function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}
var AuditOperator = /* @__PURE__ */ function() {
  function AuditOperator2(durationSelector) {
    this.durationSelector = durationSelector;
  }
  AuditOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
  };
  return AuditOperator2;
}();
var AuditSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(AuditSubscriber2, _super);
  function AuditSubscriber2(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;
    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    return _this;
  }
  AuditSubscriber2.prototype._next = function(value) {
    this.value = value;
    this.hasValue = true;
    if (!this.throttled) {
      var duration = void 0;
      try {
        var durationSelector = this.durationSelector;
        duration = durationSelector(value);
      } catch (err) {
        return this.destination.error(err);
      }
      var innerSubscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
      if (!innerSubscription || innerSubscription.closed) {
        this.clearThrottle();
      } else {
        this.add(this.throttled = innerSubscription);
      }
    }
  };
  AuditSubscriber2.prototype.clearThrottle = function() {
    var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
    if (throttled) {
      this.remove(throttled);
      this.throttled = void 0;
      throttled.unsubscribe();
    }
    if (hasValue) {
      this.value = void 0;
      this.hasValue = false;
      this.destination.next(value);
    }
  };
  AuditSubscriber2.prototype.notifyNext = function() {
    this.clearThrottle();
  };
  AuditSubscriber2.prototype.notifyComplete = function() {
    this.clearThrottle();
  };
  return AuditSubscriber2;
}(SimpleOuterSubscriber);
function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return audit(function() {
    return timer(duration, scheduler);
  });
}
function buffer(closingNotifier) {
  return function bufferOperatorFunction(source) {
    return source.lift(new BufferOperator(closingNotifier));
  };
}
var BufferOperator = /* @__PURE__ */ function() {
  function BufferOperator2(closingNotifier) {
    this.closingNotifier = closingNotifier;
  }
  BufferOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
  };
  return BufferOperator2;
}();
var BufferSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferSubscriber2, _super);
  function BufferSubscriber2(destination, closingNotifier) {
    var _this = _super.call(this, destination) || this;
    _this.buffer = [];
    _this.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(_this)));
    return _this;
  }
  BufferSubscriber2.prototype._next = function(value) {
    this.buffer.push(value);
  };
  BufferSubscriber2.prototype.notifyNext = function() {
    var buffer2 = this.buffer;
    this.buffer = [];
    this.destination.next(buffer2);
  };
  return BufferSubscriber2;
}(SimpleOuterSubscriber);
function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }
  return function bufferCountOperatorFunction(source) {
    return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  };
}
var BufferCountOperator = /* @__PURE__ */ function() {
  function BufferCountOperator2(bufferSize, startBufferEvery) {
    this.bufferSize = bufferSize;
    this.startBufferEvery = startBufferEvery;
    if (!startBufferEvery || bufferSize === startBufferEvery) {
      this.subscriberClass = BufferCountSubscriber;
    } else {
      this.subscriberClass = BufferSkipCountSubscriber;
    }
  }
  BufferCountOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
  };
  return BufferCountOperator2;
}();
var BufferCountSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferCountSubscriber2, _super);
  function BufferCountSubscriber2(destination, bufferSize) {
    var _this = _super.call(this, destination) || this;
    _this.bufferSize = bufferSize;
    _this.buffer = [];
    return _this;
  }
  BufferCountSubscriber2.prototype._next = function(value) {
    var buffer2 = this.buffer;
    buffer2.push(value);
    if (buffer2.length == this.bufferSize) {
      this.destination.next(buffer2);
      this.buffer = [];
    }
  };
  BufferCountSubscriber2.prototype._complete = function() {
    var buffer2 = this.buffer;
    if (buffer2.length > 0) {
      this.destination.next(buffer2);
    }
    _super.prototype._complete.call(this);
  };
  return BufferCountSubscriber2;
}(Subscriber);
var BufferSkipCountSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferSkipCountSubscriber2, _super);
  function BufferSkipCountSubscriber2(destination, bufferSize, startBufferEvery) {
    var _this = _super.call(this, destination) || this;
    _this.bufferSize = bufferSize;
    _this.startBufferEvery = startBufferEvery;
    _this.buffers = [];
    _this.count = 0;
    return _this;
  }
  BufferSkipCountSubscriber2.prototype._next = function(value) {
    var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count2 = _a.count;
    this.count++;
    if (count2 % startBufferEvery === 0) {
      buffers.push([]);
    }
    for (var i = buffers.length; i--; ) {
      var buffer2 = buffers[i];
      buffer2.push(value);
      if (buffer2.length === bufferSize) {
        buffers.splice(i, 1);
        this.destination.next(buffer2);
      }
    }
  };
  BufferSkipCountSubscriber2.prototype._complete = function() {
    var _a = this, buffers = _a.buffers, destination = _a.destination;
    while (buffers.length > 0) {
      var buffer2 = buffers.shift();
      if (buffer2.length > 0) {
        destination.next(buffer2);
      }
    }
    _super.prototype._complete.call(this);
  };
  return BufferSkipCountSubscriber2;
}(Subscriber);
function bufferTime(bufferTimeSpan) {
  var length = arguments.length;
  var scheduler = async;
  if (isScheduler(arguments[arguments.length - 1])) {
    scheduler = arguments[arguments.length - 1];
    length--;
  }
  var bufferCreationInterval = null;
  if (length >= 2) {
    bufferCreationInterval = arguments[1];
  }
  var maxBufferSize = Number.POSITIVE_INFINITY;
  if (length >= 3) {
    maxBufferSize = arguments[2];
  }
  return function bufferTimeOperatorFunction(source) {
    return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  };
}
var BufferTimeOperator = /* @__PURE__ */ function() {
  function BufferTimeOperator2(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    this.bufferTimeSpan = bufferTimeSpan;
    this.bufferCreationInterval = bufferCreationInterval;
    this.maxBufferSize = maxBufferSize;
    this.scheduler = scheduler;
  }
  BufferTimeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  };
  return BufferTimeOperator2;
}();
var Context = /* @__PURE__ */ function() {
  function Context2() {
    this.buffer = [];
  }
  return Context2;
}();
var BufferTimeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferTimeSubscriber2, _super);
  function BufferTimeSubscriber2(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.bufferTimeSpan = bufferTimeSpan;
    _this.bufferCreationInterval = bufferCreationInterval;
    _this.maxBufferSize = maxBufferSize;
    _this.scheduler = scheduler;
    _this.contexts = [];
    var context = _this.openContext();
    _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
    if (_this.timespanOnly) {
      var timeSpanOnlyState = { subscriber: _this, context, bufferTimeSpan };
      _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    } else {
      var closeState = { subscriber: _this, context };
      var creationState = { bufferTimeSpan, bufferCreationInterval, subscriber: _this, scheduler };
      _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
      _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
    }
    return _this;
  }
  BufferTimeSubscriber2.prototype._next = function(value) {
    var contexts = this.contexts;
    var len = contexts.length;
    var filledBufferContext;
    for (var i = 0; i < len; i++) {
      var context_1 = contexts[i];
      var buffer2 = context_1.buffer;
      buffer2.push(value);
      if (buffer2.length == this.maxBufferSize) {
        filledBufferContext = context_1;
      }
    }
    if (filledBufferContext) {
      this.onBufferFull(filledBufferContext);
    }
  };
  BufferTimeSubscriber2.prototype._error = function(err) {
    this.contexts.length = 0;
    _super.prototype._error.call(this, err);
  };
  BufferTimeSubscriber2.prototype._complete = function() {
    var _a = this, contexts = _a.contexts, destination = _a.destination;
    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      destination.next(context_2.buffer);
    }
    _super.prototype._complete.call(this);
  };
  BufferTimeSubscriber2.prototype._unsubscribe = function() {
    this.contexts = null;
  };
  BufferTimeSubscriber2.prototype.onBufferFull = function(context) {
    this.closeContext(context);
    var closeAction = context.closeAction;
    closeAction.unsubscribe();
    this.remove(closeAction);
    if (!this.closed && this.timespanOnly) {
      context = this.openContext();
      var bufferTimeSpan = this.bufferTimeSpan;
      var timeSpanOnlyState = { subscriber: this, context, bufferTimeSpan };
      this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    }
  };
  BufferTimeSubscriber2.prototype.openContext = function() {
    var context = new Context();
    this.contexts.push(context);
    return context;
  };
  BufferTimeSubscriber2.prototype.closeContext = function(context) {
    this.destination.next(context.buffer);
    var contexts = this.contexts;
    var spliceIndex = contexts ? contexts.indexOf(context) : -1;
    if (spliceIndex >= 0) {
      contexts.splice(contexts.indexOf(context), 1);
    }
  };
  return BufferTimeSubscriber2;
}(Subscriber);
function dispatchBufferTimeSpanOnly(state2) {
  var subscriber = state2.subscriber;
  var prevContext = state2.context;
  if (prevContext) {
    subscriber.closeContext(prevContext);
  }
  if (!subscriber.closed) {
    state2.context = subscriber.openContext();
    state2.context.closeAction = this.schedule(state2, state2.bufferTimeSpan);
  }
}
function dispatchBufferCreation(state2) {
  var bufferCreationInterval = state2.bufferCreationInterval, bufferTimeSpan = state2.bufferTimeSpan, subscriber = state2.subscriber, scheduler = state2.scheduler;
  var context = subscriber.openContext();
  var action = this;
  if (!subscriber.closed) {
    subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber, context }));
    action.schedule(state2, bufferCreationInterval);
  }
}
function dispatchBufferClose(arg) {
  var subscriber = arg.subscriber, context = arg.context;
  subscriber.closeContext(context);
}
function bufferToggle(openings, closingSelector) {
  return function bufferToggleOperatorFunction(source) {
    return source.lift(new BufferToggleOperator(openings, closingSelector));
  };
}
var BufferToggleOperator = /* @__PURE__ */ function() {
  function BufferToggleOperator2(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }
  BufferToggleOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };
  return BufferToggleOperator2;
}();
var BufferToggleSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferToggleSubscriber2, _super);
  function BufferToggleSubscriber2(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;
    _this.closingSelector = closingSelector;
    _this.contexts = [];
    _this.add(subscribeToResult(_this, openings));
    return _this;
  }
  BufferToggleSubscriber2.prototype._next = function(value) {
    var contexts = this.contexts;
    var len = contexts.length;
    for (var i = 0; i < len; i++) {
      contexts[i].buffer.push(value);
    }
  };
  BufferToggleSubscriber2.prototype._error = function(err) {
    var contexts = this.contexts;
    while (contexts.length > 0) {
      var context_1 = contexts.shift();
      context_1.subscription.unsubscribe();
      context_1.buffer = null;
      context_1.subscription = null;
    }
    this.contexts = null;
    _super.prototype._error.call(this, err);
  };
  BufferToggleSubscriber2.prototype._complete = function() {
    var contexts = this.contexts;
    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      this.destination.next(context_2.buffer);
      context_2.subscription.unsubscribe();
      context_2.buffer = null;
      context_2.subscription = null;
    }
    this.contexts = null;
    _super.prototype._complete.call(this);
  };
  BufferToggleSubscriber2.prototype.notifyNext = function(outerValue, innerValue) {
    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
  };
  BufferToggleSubscriber2.prototype.notifyComplete = function(innerSub) {
    this.closeBuffer(innerSub.context);
  };
  BufferToggleSubscriber2.prototype.openBuffer = function(value) {
    try {
      var closingSelector = this.closingSelector;
      var closingNotifier = closingSelector.call(this, value);
      if (closingNotifier) {
        this.trySubscribe(closingNotifier);
      }
    } catch (err) {
      this._error(err);
    }
  };
  BufferToggleSubscriber2.prototype.closeBuffer = function(context) {
    var contexts = this.contexts;
    if (contexts && context) {
      var buffer2 = context.buffer, subscription = context.subscription;
      this.destination.next(buffer2);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    }
  };
  BufferToggleSubscriber2.prototype.trySubscribe = function(closingNotifier) {
    var contexts = this.contexts;
    var buffer2 = [];
    var subscription = new Subscription();
    var context = { buffer: buffer2, subscription };
    contexts.push(context);
    var innerSubscription = subscribeToResult(this, closingNotifier, context);
    if (!innerSubscription || innerSubscription.closed) {
      this.closeBuffer(context);
    } else {
      innerSubscription.context = context;
      this.add(innerSubscription);
      subscription.add(innerSubscription);
    }
  };
  return BufferToggleSubscriber2;
}(OuterSubscriber);
function bufferWhen(closingSelector) {
  return function(source) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}
var BufferWhenOperator = /* @__PURE__ */ function() {
  function BufferWhenOperator2(closingSelector) {
    this.closingSelector = closingSelector;
  }
  BufferWhenOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
  };
  return BufferWhenOperator2;
}();
var BufferWhenSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(BufferWhenSubscriber2, _super);
  function BufferWhenSubscriber2(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;
    _this.closingSelector = closingSelector;
    _this.subscribing = false;
    _this.openBuffer();
    return _this;
  }
  BufferWhenSubscriber2.prototype._next = function(value) {
    this.buffer.push(value);
  };
  BufferWhenSubscriber2.prototype._complete = function() {
    var buffer2 = this.buffer;
    if (buffer2) {
      this.destination.next(buffer2);
    }
    _super.prototype._complete.call(this);
  };
  BufferWhenSubscriber2.prototype._unsubscribe = function() {
    this.buffer = void 0;
    this.subscribing = false;
  };
  BufferWhenSubscriber2.prototype.notifyNext = function() {
    this.openBuffer();
  };
  BufferWhenSubscriber2.prototype.notifyComplete = function() {
    if (this.subscribing) {
      this.complete();
    } else {
      this.openBuffer();
    }
  };
  BufferWhenSubscriber2.prototype.openBuffer = function() {
    var closingSubscription = this.closingSubscription;
    if (closingSubscription) {
      this.remove(closingSubscription);
      closingSubscription.unsubscribe();
    }
    var buffer2 = this.buffer;
    if (this.buffer) {
      this.destination.next(buffer2);
    }
    this.buffer = [];
    var closingNotifier;
    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (err) {
      return this.error(err);
    }
    closingSubscription = new Subscription();
    this.closingSubscription = closingSubscription;
    this.add(closingSubscription);
    this.subscribing = true;
    closingSubscription.add(innerSubscribe(closingNotifier, new SimpleInnerSubscriber(this)));
    this.subscribing = false;
  };
  return BufferWhenSubscriber2;
}(SimpleOuterSubscriber);
function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}
var CatchOperator = /* @__PURE__ */ function() {
  function CatchOperator2(selector) {
    this.selector = selector;
  }
  CatchOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  };
  return CatchOperator2;
}();
var CatchSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(CatchSubscriber2, _super);
  function CatchSubscriber2(destination, selector, caught) {
    var _this = _super.call(this, destination) || this;
    _this.selector = selector;
    _this.caught = caught;
    return _this;
  }
  CatchSubscriber2.prototype.error = function(err) {
    if (!this.isStopped) {
      var result = void 0;
      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        _super.prototype.error.call(this, err2);
        return;
      }
      this._unsubscribeAndRecycle();
      var innerSubscriber = new SimpleInnerSubscriber(this);
      this.add(innerSubscriber);
      var innerSubscription = innerSubscribe(result, innerSubscriber);
      if (innerSubscription !== innerSubscriber) {
        this.add(innerSubscription);
      }
    }
  };
  return CatchSubscriber2;
}(SimpleOuterSubscriber);
function combineAll(project) {
  return function(source) {
    return source.lift(new CombineLatestOperator(project));
  };
}
function combineLatest() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var project = null;
  if (typeof observables[observables.length - 1] === "function") {
    project = observables.pop();
  }
  if (observables.length === 1 && isArray(observables[0])) {
    observables = observables[0].slice();
  }
  return function(source) {
    return source.lift.call(from([source].concat(observables)), new CombineLatestOperator(project));
  };
}
function concat() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function(source) {
    return source.lift.call(concat$1.apply(void 0, [source].concat(observables)));
  };
}
function concatMap(project, resultSelector) {
  return mergeMap(project, resultSelector, 1);
}
function concatMapTo(innerObservable, resultSelector) {
  return concatMap(function() {
    return innerObservable;
  }, resultSelector);
}
function count(predicate) {
  return function(source) {
    return source.lift(new CountOperator(predicate, source));
  };
}
var CountOperator = /* @__PURE__ */ function() {
  function CountOperator2(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }
  CountOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
  };
  return CountOperator2;
}();
var CountSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(CountSubscriber2, _super);
  function CountSubscriber2(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.source = source;
    _this.count = 0;
    _this.index = 0;
    return _this;
  }
  CountSubscriber2.prototype._next = function(value) {
    if (this.predicate) {
      this._tryPredicate(value);
    } else {
      this.count++;
    }
  };
  CountSubscriber2.prototype._tryPredicate = function(value) {
    var result;
    try {
      result = this.predicate(value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    if (result) {
      this.count++;
    }
  };
  CountSubscriber2.prototype._complete = function() {
    this.destination.next(this.count);
    this.destination.complete();
  };
  return CountSubscriber2;
}(Subscriber);
function debounce(durationSelector) {
  return function(source) {
    return source.lift(new DebounceOperator(durationSelector));
  };
}
var DebounceOperator = /* @__PURE__ */ function() {
  function DebounceOperator2(durationSelector) {
    this.durationSelector = durationSelector;
  }
  DebounceOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  };
  return DebounceOperator2;
}();
var DebounceSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DebounceSubscriber2, _super);
  function DebounceSubscriber2(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;
    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    return _this;
  }
  DebounceSubscriber2.prototype._next = function(value) {
    try {
      var result = this.durationSelector.call(this, value);
      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };
  DebounceSubscriber2.prototype._complete = function() {
    this.emitValue();
    this.destination.complete();
  };
  DebounceSubscriber2.prototype._tryNext = function(value, duration) {
    var subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;
    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }
    subscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  };
  DebounceSubscriber2.prototype.notifyNext = function() {
    this.emitValue();
  };
  DebounceSubscriber2.prototype.notifyComplete = function() {
    this.emitValue();
  };
  DebounceSubscriber2.prototype.emitValue = function() {
    if (this.hasValue) {
      var value = this.value;
      var subscription = this.durationSubscription;
      if (subscription) {
        this.durationSubscription = void 0;
        subscription.unsubscribe();
        this.remove(subscription);
      }
      this.value = void 0;
      this.hasValue = false;
      _super.prototype._next.call(this, value);
    }
  };
  return DebounceSubscriber2;
}(SimpleOuterSubscriber);
function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return source.lift(new DebounceTimeOperator(dueTime, scheduler));
  };
}
var DebounceTimeOperator = /* @__PURE__ */ function() {
  function DebounceTimeOperator2(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }
  DebounceTimeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  };
  return DebounceTimeOperator2;
}();
var DebounceTimeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DebounceTimeSubscriber2, _super);
  function DebounceTimeSubscriber2(destination, dueTime, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.dueTime = dueTime;
    _this.scheduler = scheduler;
    _this.debouncedSubscription = null;
    _this.lastValue = null;
    _this.hasValue = false;
    return _this;
  }
  DebounceTimeSubscriber2.prototype._next = function(value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext$1, this.dueTime, this));
  };
  DebounceTimeSubscriber2.prototype._complete = function() {
    this.debouncedNext();
    this.destination.complete();
  };
  DebounceTimeSubscriber2.prototype.debouncedNext = function() {
    this.clearDebounce();
    if (this.hasValue) {
      var lastValue = this.lastValue;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  };
  DebounceTimeSubscriber2.prototype.clearDebounce = function() {
    var debouncedSubscription = this.debouncedSubscription;
    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  };
  return DebounceTimeSubscriber2;
}(Subscriber);
function dispatchNext$1(subscriber) {
  subscriber.debouncedNext();
}
function defaultIfEmpty(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }
  return function(source) {
    return source.lift(new DefaultIfEmptyOperator(defaultValue));
  };
}
var DefaultIfEmptyOperator = /* @__PURE__ */ function() {
  function DefaultIfEmptyOperator2(defaultValue) {
    this.defaultValue = defaultValue;
  }
  DefaultIfEmptyOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
  };
  return DefaultIfEmptyOperator2;
}();
var DefaultIfEmptySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DefaultIfEmptySubscriber2, _super);
  function DefaultIfEmptySubscriber2(destination, defaultValue) {
    var _this = _super.call(this, destination) || this;
    _this.defaultValue = defaultValue;
    _this.isEmpty = true;
    return _this;
  }
  DefaultIfEmptySubscriber2.prototype._next = function(value) {
    this.isEmpty = false;
    this.destination.next(value);
  };
  DefaultIfEmptySubscriber2.prototype._complete = function() {
    if (this.isEmpty) {
      this.destination.next(this.defaultValue);
    }
    this.destination.complete();
  };
  return DefaultIfEmptySubscriber2;
}(Subscriber);
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
function delay(delay2, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  var absoluteDelay = isDate(delay2);
  var delayFor = absoluteDelay ? +delay2 - scheduler.now() : Math.abs(delay2);
  return function(source) {
    return source.lift(new DelayOperator(delayFor, scheduler));
  };
}
var DelayOperator = /* @__PURE__ */ function() {
  function DelayOperator2(delay2, scheduler) {
    this.delay = delay2;
    this.scheduler = scheduler;
  }
  DelayOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  };
  return DelayOperator2;
}();
var DelaySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DelaySubscriber2, _super);
  function DelaySubscriber2(destination, delay2, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.delay = delay2;
    _this.scheduler = scheduler;
    _this.queue = [];
    _this.active = false;
    _this.errored = false;
    return _this;
  }
  DelaySubscriber2.dispatch = function(state2) {
    var source = state2.source;
    var queue2 = source.queue;
    var scheduler = state2.scheduler;
    var destination = state2.destination;
    while (queue2.length > 0 && queue2[0].time - scheduler.now() <= 0) {
      queue2.shift().notification.observe(destination);
    }
    if (queue2.length > 0) {
      var delay_1 = Math.max(0, queue2[0].time - scheduler.now());
      this.schedule(state2, delay_1);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  };
  DelaySubscriber2.prototype._schedule = function(scheduler) {
    this.active = true;
    var destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber2.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler
    }));
  };
  DelaySubscriber2.prototype.scheduleNotification = function(notification) {
    if (this.errored === true) {
      return;
    }
    var scheduler = this.scheduler;
    var message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);
    if (this.active === false) {
      this._schedule(scheduler);
    }
  };
  DelaySubscriber2.prototype._next = function(value) {
    this.scheduleNotification(Notification.createNext(value));
  };
  DelaySubscriber2.prototype._error = function(err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  };
  DelaySubscriber2.prototype._complete = function() {
    this.scheduleNotification(Notification.createComplete());
    this.unsubscribe();
  };
  return DelaySubscriber2;
}(Subscriber);
var DelayMessage = /* @__PURE__ */ function() {
  function DelayMessage2(time, notification) {
    this.time = time;
    this.notification = notification;
  }
  return DelayMessage2;
}();
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function(source) {
      return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
  }
  return function(source) {
    return source.lift(new DelayWhenOperator(delayDurationSelector));
  };
}
var DelayWhenOperator = /* @__PURE__ */ function() {
  function DelayWhenOperator2(delayDurationSelector) {
    this.delayDurationSelector = delayDurationSelector;
  }
  DelayWhenOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
  };
  return DelayWhenOperator2;
}();
var DelayWhenSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DelayWhenSubscriber2, _super);
  function DelayWhenSubscriber2(destination, delayDurationSelector) {
    var _this = _super.call(this, destination) || this;
    _this.delayDurationSelector = delayDurationSelector;
    _this.completed = false;
    _this.delayNotifierSubscriptions = [];
    _this.index = 0;
    return _this;
  }
  DelayWhenSubscriber2.prototype.notifyNext = function(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
    this.destination.next(outerValue);
    this.removeSubscription(innerSub);
    this.tryComplete();
  };
  DelayWhenSubscriber2.prototype.notifyError = function(error, innerSub) {
    this._error(error);
  };
  DelayWhenSubscriber2.prototype.notifyComplete = function(innerSub) {
    var value = this.removeSubscription(innerSub);
    if (value) {
      this.destination.next(value);
    }
    this.tryComplete();
  };
  DelayWhenSubscriber2.prototype._next = function(value) {
    var index2 = this.index++;
    try {
      var delayNotifier = this.delayDurationSelector(value, index2);
      if (delayNotifier) {
        this.tryDelay(delayNotifier, value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };
  DelayWhenSubscriber2.prototype._complete = function() {
    this.completed = true;
    this.tryComplete();
    this.unsubscribe();
  };
  DelayWhenSubscriber2.prototype.removeSubscription = function(subscription) {
    subscription.unsubscribe();
    var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
    if (subscriptionIdx !== -1) {
      this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
    }
    return subscription.outerValue;
  };
  DelayWhenSubscriber2.prototype.tryDelay = function(delayNotifier, value) {
    var notifierSubscription = subscribeToResult(this, delayNotifier, value);
    if (notifierSubscription && !notifierSubscription.closed) {
      var destination = this.destination;
      destination.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
    }
  };
  DelayWhenSubscriber2.prototype.tryComplete = function() {
    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
      this.destination.complete();
    }
  };
  return DelayWhenSubscriber2;
}(OuterSubscriber);
var SubscriptionDelayObservable = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SubscriptionDelayObservable2, _super);
  function SubscriptionDelayObservable2(source, subscriptionDelay) {
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.subscriptionDelay = subscriptionDelay;
    return _this;
  }
  SubscriptionDelayObservable2.prototype._subscribe = function(subscriber) {
    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
  };
  return SubscriptionDelayObservable2;
}(Observable);
var SubscriptionDelaySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SubscriptionDelaySubscriber2, _super);
  function SubscriptionDelaySubscriber2(parent, source) {
    var _this = _super.call(this) || this;
    _this.parent = parent;
    _this.source = source;
    _this.sourceSubscribed = false;
    return _this;
  }
  SubscriptionDelaySubscriber2.prototype._next = function(unused) {
    this.subscribeToSource();
  };
  SubscriptionDelaySubscriber2.prototype._error = function(err) {
    this.unsubscribe();
    this.parent.error(err);
  };
  SubscriptionDelaySubscriber2.prototype._complete = function() {
    this.unsubscribe();
    this.subscribeToSource();
  };
  SubscriptionDelaySubscriber2.prototype.subscribeToSource = function() {
    if (!this.sourceSubscribed) {
      this.sourceSubscribed = true;
      this.unsubscribe();
      this.source.subscribe(this.parent);
    }
  };
  return SubscriptionDelaySubscriber2;
}(Subscriber);
function dematerialize() {
  return function dematerializeOperatorFunction(source) {
    return source.lift(new DeMaterializeOperator());
  };
}
var DeMaterializeOperator = /* @__PURE__ */ function() {
  function DeMaterializeOperator2() {
  }
  DeMaterializeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DeMaterializeSubscriber(subscriber));
  };
  return DeMaterializeOperator2;
}();
var DeMaterializeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DeMaterializeSubscriber2, _super);
  function DeMaterializeSubscriber2(destination) {
    return _super.call(this, destination) || this;
  }
  DeMaterializeSubscriber2.prototype._next = function(value) {
    value.observe(this.destination);
  };
  return DeMaterializeSubscriber2;
}(Subscriber);
function distinct(keySelector, flushes) {
  return function(source) {
    return source.lift(new DistinctOperator(keySelector, flushes));
  };
}
var DistinctOperator = /* @__PURE__ */ function() {
  function DistinctOperator2(keySelector, flushes) {
    this.keySelector = keySelector;
    this.flushes = flushes;
  }
  DistinctOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
  };
  return DistinctOperator2;
}();
var DistinctSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DistinctSubscriber2, _super);
  function DistinctSubscriber2(destination, keySelector, flushes) {
    var _this = _super.call(this, destination) || this;
    _this.keySelector = keySelector;
    _this.values = /* @__PURE__ */ new Set();
    if (flushes) {
      _this.add(innerSubscribe(flushes, new SimpleInnerSubscriber(_this)));
    }
    return _this;
  }
  DistinctSubscriber2.prototype.notifyNext = function() {
    this.values.clear();
  };
  DistinctSubscriber2.prototype.notifyError = function(error) {
    this._error(error);
  };
  DistinctSubscriber2.prototype._next = function(value) {
    if (this.keySelector) {
      this._useKeySelector(value);
    } else {
      this._finalizeNext(value, value);
    }
  };
  DistinctSubscriber2.prototype._useKeySelector = function(value) {
    var key;
    var destination = this.destination;
    try {
      key = this.keySelector(value);
    } catch (err) {
      destination.error(err);
      return;
    }
    this._finalizeNext(key, value);
  };
  DistinctSubscriber2.prototype._finalizeNext = function(key, value) {
    var values = this.values;
    if (!values.has(key)) {
      values.add(key);
      this.destination.next(value);
    }
  };
  return DistinctSubscriber2;
}(SimpleOuterSubscriber);
function distinctUntilChanged(compare, keySelector) {
  return function(source) {
    return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
  };
}
var DistinctUntilChangedOperator = /* @__PURE__ */ function() {
  function DistinctUntilChangedOperator2(compare, keySelector) {
    this.compare = compare;
    this.keySelector = keySelector;
  }
  DistinctUntilChangedOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
  };
  return DistinctUntilChangedOperator2;
}();
var DistinctUntilChangedSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(DistinctUntilChangedSubscriber2, _super);
  function DistinctUntilChangedSubscriber2(destination, compare, keySelector) {
    var _this = _super.call(this, destination) || this;
    _this.keySelector = keySelector;
    _this.hasKey = false;
    if (typeof compare === "function") {
      _this.compare = compare;
    }
    return _this;
  }
  DistinctUntilChangedSubscriber2.prototype.compare = function(x2, y2) {
    return x2 === y2;
  };
  DistinctUntilChangedSubscriber2.prototype._next = function(value) {
    var key;
    try {
      var keySelector = this.keySelector;
      key = keySelector ? keySelector(value) : value;
    } catch (err) {
      return this.destination.error(err);
    }
    var result = false;
    if (this.hasKey) {
      try {
        var compare = this.compare;
        result = compare(this.key, key);
      } catch (err) {
        return this.destination.error(err);
      }
    } else {
      this.hasKey = true;
    }
    if (!result) {
      this.key = key;
      this.destination.next(value);
    }
  };
  return DistinctUntilChangedSubscriber2;
}(Subscriber);
function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged(function(x2, y2) {
    return compare ? compare(x2[key], y2[key]) : x2[key] === y2[key];
  });
}
function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }
  return function(source) {
    return source.lift(new ThrowIfEmptyOperator(errorFactory));
  };
}
var ThrowIfEmptyOperator = /* @__PURE__ */ function() {
  function ThrowIfEmptyOperator2(errorFactory) {
    this.errorFactory = errorFactory;
  }
  ThrowIfEmptyOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
  };
  return ThrowIfEmptyOperator2;
}();
var ThrowIfEmptySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ThrowIfEmptySubscriber2, _super);
  function ThrowIfEmptySubscriber2(destination, errorFactory) {
    var _this = _super.call(this, destination) || this;
    _this.errorFactory = errorFactory;
    _this.hasValue = false;
    return _this;
  }
  ThrowIfEmptySubscriber2.prototype._next = function(value) {
    this.hasValue = true;
    this.destination.next(value);
  };
  ThrowIfEmptySubscriber2.prototype._complete = function() {
    if (!this.hasValue) {
      var err = void 0;
      try {
        err = this.errorFactory();
      } catch (e2) {
        err = e2;
      }
      this.destination.error(err);
    } else {
      return this.destination.complete();
    }
  };
  return ThrowIfEmptySubscriber2;
}(Subscriber);
function defaultErrorFactory() {
  return new EmptyError();
}
function take(count2) {
  return function(source) {
    if (count2 === 0) {
      return empty();
    } else {
      return source.lift(new TakeOperator(count2));
    }
  };
}
var TakeOperator = /* @__PURE__ */ function() {
  function TakeOperator2(total) {
    this.total = total;
    if (this.total < 0) {
      throw new ArgumentOutOfRangeError();
    }
  }
  TakeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  };
  return TakeOperator2;
}();
var TakeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TakeSubscriber2, _super);
  function TakeSubscriber2(destination, total) {
    var _this = _super.call(this, destination) || this;
    _this.total = total;
    _this.count = 0;
    return _this;
  }
  TakeSubscriber2.prototype._next = function(value) {
    var total = this.total;
    var count2 = ++this.count;
    if (count2 <= total) {
      this.destination.next(value);
      if (count2 === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  };
  return TakeSubscriber2;
}(Subscriber);
function elementAt(index2, defaultValue) {
  if (index2 < 0) {
    throw new ArgumentOutOfRangeError();
  }
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(filter(function(v2, i) {
      return i === index2;
    }), take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new ArgumentOutOfRangeError();
    }));
  };
}
function endWith() {
  var array = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }
  return function(source) {
    return concat$1(source, of.apply(void 0, array));
  };
}
function every(predicate, thisArg) {
  return function(source) {
    return source.lift(new EveryOperator(predicate, thisArg, source));
  };
}
var EveryOperator = /* @__PURE__ */ function() {
  function EveryOperator2(predicate, thisArg, source) {
    this.predicate = predicate;
    this.thisArg = thisArg;
    this.source = source;
  }
  EveryOperator2.prototype.call = function(observer, source) {
    return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
  };
  return EveryOperator2;
}();
var EverySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(EverySubscriber2, _super);
  function EverySubscriber2(destination, predicate, thisArg, source) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.source = source;
    _this.index = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }
  EverySubscriber2.prototype.notifyComplete = function(everyValueMatch) {
    this.destination.next(everyValueMatch);
    this.destination.complete();
  };
  EverySubscriber2.prototype._next = function(value) {
    var result = false;
    try {
      result = this.predicate.call(this.thisArg, value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    if (!result) {
      this.notifyComplete(false);
    }
  };
  EverySubscriber2.prototype._complete = function() {
    this.notifyComplete(true);
  };
  return EverySubscriber2;
}(Subscriber);
function exhaust() {
  return function(source) {
    return source.lift(new SwitchFirstOperator());
  };
}
var SwitchFirstOperator = /* @__PURE__ */ function() {
  function SwitchFirstOperator2() {
  }
  SwitchFirstOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SwitchFirstSubscriber(subscriber));
  };
  return SwitchFirstOperator2;
}();
var SwitchFirstSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SwitchFirstSubscriber2, _super);
  function SwitchFirstSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.hasCompleted = false;
    _this.hasSubscription = false;
    return _this;
  }
  SwitchFirstSubscriber2.prototype._next = function(value) {
    if (!this.hasSubscription) {
      this.hasSubscription = true;
      this.add(innerSubscribe(value, new SimpleInnerSubscriber(this)));
    }
  };
  SwitchFirstSubscriber2.prototype._complete = function() {
    this.hasCompleted = true;
    if (!this.hasSubscription) {
      this.destination.complete();
    }
  };
  SwitchFirstSubscriber2.prototype.notifyComplete = function() {
    this.hasSubscription = false;
    if (this.hasCompleted) {
      this.destination.complete();
    }
  };
  return SwitchFirstSubscriber2;
}(SimpleOuterSubscriber);
function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function(source) {
      return source.pipe(exhaustMap(function(a2, i) {
        return from(project(a2, i)).pipe(map(function(b2, ii) {
          return resultSelector(a2, b2, i, ii);
        }));
      }));
    };
  }
  return function(source) {
    return source.lift(new ExhaustMapOperator(project));
  };
}
var ExhaustMapOperator = /* @__PURE__ */ function() {
  function ExhaustMapOperator2(project) {
    this.project = project;
  }
  ExhaustMapOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
  };
  return ExhaustMapOperator2;
}();
var ExhaustMapSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ExhaustMapSubscriber2, _super);
  function ExhaustMapSubscriber2(destination, project) {
    var _this = _super.call(this, destination) || this;
    _this.project = project;
    _this.hasSubscription = false;
    _this.hasCompleted = false;
    _this.index = 0;
    return _this;
  }
  ExhaustMapSubscriber2.prototype._next = function(value) {
    if (!this.hasSubscription) {
      this.tryNext(value);
    }
  };
  ExhaustMapSubscriber2.prototype.tryNext = function(value) {
    var result;
    var index2 = this.index++;
    try {
      result = this.project(value, index2);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.hasSubscription = true;
    this._innerSub(result);
  };
  ExhaustMapSubscriber2.prototype._innerSub = function(result) {
    var innerSubscriber = new SimpleInnerSubscriber(this);
    var destination = this.destination;
    destination.add(innerSubscriber);
    var innerSubscription = innerSubscribe(result, innerSubscriber);
    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  };
  ExhaustMapSubscriber2.prototype._complete = function() {
    this.hasCompleted = true;
    if (!this.hasSubscription) {
      this.destination.complete();
    }
    this.unsubscribe();
  };
  ExhaustMapSubscriber2.prototype.notifyNext = function(innerValue) {
    this.destination.next(innerValue);
  };
  ExhaustMapSubscriber2.prototype.notifyError = function(err) {
    this.destination.error(err);
  };
  ExhaustMapSubscriber2.prototype.notifyComplete = function() {
    this.hasSubscription = false;
    if (this.hasCompleted) {
      this.destination.complete();
    }
  };
  return ExhaustMapSubscriber2;
}(SimpleOuterSubscriber);
function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
  return function(source) {
    return source.lift(new ExpandOperator(project, concurrent, scheduler));
  };
}
var ExpandOperator = /* @__PURE__ */ function() {
  function ExpandOperator2(project, concurrent, scheduler) {
    this.project = project;
    this.concurrent = concurrent;
    this.scheduler = scheduler;
  }
  ExpandOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
  };
  return ExpandOperator2;
}();
var ExpandSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ExpandSubscriber2, _super);
  function ExpandSubscriber2(destination, project, concurrent, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.project = project;
    _this.concurrent = concurrent;
    _this.scheduler = scheduler;
    _this.index = 0;
    _this.active = 0;
    _this.hasCompleted = false;
    if (concurrent < Number.POSITIVE_INFINITY) {
      _this.buffer = [];
    }
    return _this;
  }
  ExpandSubscriber2.dispatch = function(arg) {
    var subscriber = arg.subscriber, result = arg.result, value = arg.value, index2 = arg.index;
    subscriber.subscribeToProjection(result, value, index2);
  };
  ExpandSubscriber2.prototype._next = function(value) {
    var destination = this.destination;
    if (destination.closed) {
      this._complete();
      return;
    }
    var index2 = this.index++;
    if (this.active < this.concurrent) {
      destination.next(value);
      try {
        var project = this.project;
        var result = project(value, index2);
        if (!this.scheduler) {
          this.subscribeToProjection(result, value, index2);
        } else {
          var state2 = { subscriber: this, result, value, index: index2 };
          var destination_1 = this.destination;
          destination_1.add(this.scheduler.schedule(ExpandSubscriber2.dispatch, 0, state2));
        }
      } catch (e2) {
        destination.error(e2);
      }
    } else {
      this.buffer.push(value);
    }
  };
  ExpandSubscriber2.prototype.subscribeToProjection = function(result, value, index2) {
    this.active++;
    var destination = this.destination;
    destination.add(innerSubscribe(result, new SimpleInnerSubscriber(this)));
  };
  ExpandSubscriber2.prototype._complete = function() {
    this.hasCompleted = true;
    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }
    this.unsubscribe();
  };
  ExpandSubscriber2.prototype.notifyNext = function(innerValue) {
    this._next(innerValue);
  };
  ExpandSubscriber2.prototype.notifyComplete = function() {
    var buffer2 = this.buffer;
    this.active--;
    if (buffer2 && buffer2.length > 0) {
      this._next(buffer2.shift());
    }
    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }
  };
  return ExpandSubscriber2;
}(SimpleOuterSubscriber);
function finalize(callback) {
  return function(source) {
    return source.lift(new FinallyOperator(callback));
  };
}
var FinallyOperator = /* @__PURE__ */ function() {
  function FinallyOperator2(callback) {
    this.callback = callback;
  }
  FinallyOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  };
  return FinallyOperator2;
}();
var FinallySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(FinallySubscriber2, _super);
  function FinallySubscriber2(destination, callback) {
    var _this = _super.call(this, destination) || this;
    _this.add(new Subscription(callback));
    return _this;
  }
  return FinallySubscriber2;
}(Subscriber);
function find(predicate, thisArg) {
  if (typeof predicate !== "function") {
    throw new TypeError("predicate is not a function");
  }
  return function(source) {
    return source.lift(new FindValueOperator(predicate, source, false, thisArg));
  };
}
var FindValueOperator = /* @__PURE__ */ function() {
  function FindValueOperator2(predicate, source, yieldIndex, thisArg) {
    this.predicate = predicate;
    this.source = source;
    this.yieldIndex = yieldIndex;
    this.thisArg = thisArg;
  }
  FindValueOperator2.prototype.call = function(observer, source) {
    return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
  };
  return FindValueOperator2;
}();
var FindValueSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(FindValueSubscriber2, _super);
  function FindValueSubscriber2(destination, predicate, source, yieldIndex, thisArg) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.source = source;
    _this.yieldIndex = yieldIndex;
    _this.thisArg = thisArg;
    _this.index = 0;
    return _this;
  }
  FindValueSubscriber2.prototype.notifyComplete = function(value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
    this.unsubscribe();
  };
  FindValueSubscriber2.prototype._next = function(value) {
    var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
    var index2 = this.index++;
    try {
      var result = predicate.call(thisArg || this, value, index2, this.source);
      if (result) {
        this.notifyComplete(this.yieldIndex ? index2 : value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };
  FindValueSubscriber2.prototype._complete = function() {
    this.notifyComplete(this.yieldIndex ? -1 : void 0);
  };
  return FindValueSubscriber2;
}(Subscriber);
function findIndex(predicate, thisArg) {
  return function(source) {
    return source.lift(new FindValueOperator(predicate, source, true, thisArg));
  };
}
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v2, i) {
      return predicate(v2, i, source);
    }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
function ignoreElements() {
  return function ignoreElementsOperatorFunction(source) {
    return source.lift(new IgnoreElementsOperator());
  };
}
var IgnoreElementsOperator = /* @__PURE__ */ function() {
  function IgnoreElementsOperator2() {
  }
  IgnoreElementsOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new IgnoreElementsSubscriber(subscriber));
  };
  return IgnoreElementsOperator2;
}();
var IgnoreElementsSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(IgnoreElementsSubscriber2, _super);
  function IgnoreElementsSubscriber2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  IgnoreElementsSubscriber2.prototype._next = function(unused) {
  };
  return IgnoreElementsSubscriber2;
}(Subscriber);
function isEmpty() {
  return function(source) {
    return source.lift(new IsEmptyOperator());
  };
}
var IsEmptyOperator = /* @__PURE__ */ function() {
  function IsEmptyOperator2() {
  }
  IsEmptyOperator2.prototype.call = function(observer, source) {
    return source.subscribe(new IsEmptySubscriber(observer));
  };
  return IsEmptyOperator2;
}();
var IsEmptySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(IsEmptySubscriber2, _super);
  function IsEmptySubscriber2(destination) {
    return _super.call(this, destination) || this;
  }
  IsEmptySubscriber2.prototype.notifyComplete = function(isEmpty2) {
    var destination = this.destination;
    destination.next(isEmpty2);
    destination.complete();
  };
  IsEmptySubscriber2.prototype._next = function(value) {
    this.notifyComplete(false);
  };
  IsEmptySubscriber2.prototype._complete = function() {
    this.notifyComplete(true);
  };
  return IsEmptySubscriber2;
}(Subscriber);
function takeLast(count2) {
  return function takeLastOperatorFunction(source) {
    if (count2 === 0) {
      return empty();
    } else {
      return source.lift(new TakeLastOperator(count2));
    }
  };
}
var TakeLastOperator = /* @__PURE__ */ function() {
  function TakeLastOperator2(total) {
    this.total = total;
    if (this.total < 0) {
      throw new ArgumentOutOfRangeError();
    }
  }
  TakeLastOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
  };
  return TakeLastOperator2;
}();
var TakeLastSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TakeLastSubscriber2, _super);
  function TakeLastSubscriber2(destination, total) {
    var _this = _super.call(this, destination) || this;
    _this.total = total;
    _this.ring = new Array();
    _this.count = 0;
    return _this;
  }
  TakeLastSubscriber2.prototype._next = function(value) {
    var ring = this.ring;
    var total = this.total;
    var count2 = this.count++;
    if (ring.length < total) {
      ring.push(value);
    } else {
      var index2 = count2 % total;
      ring[index2] = value;
    }
  };
  TakeLastSubscriber2.prototype._complete = function() {
    var destination = this.destination;
    var count2 = this.count;
    if (count2 > 0) {
      var total = this.count >= this.total ? this.total : this.count;
      var ring = this.ring;
      for (var i = 0; i < total; i++) {
        var idx = count2++ % total;
        destination.next(ring[idx]);
      }
    }
    destination.complete();
  };
  return TakeLastSubscriber2;
}(Subscriber);
function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source) {
    return source.pipe(predicate ? filter(function(v2, i) {
      return predicate(v2, i, source);
    }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
function mapTo(value) {
  return function(source) {
    return source.lift(new MapToOperator(value));
  };
}
var MapToOperator = /* @__PURE__ */ function() {
  function MapToOperator2(value) {
    this.value = value;
  }
  MapToOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new MapToSubscriber(subscriber, this.value));
  };
  return MapToOperator2;
}();
var MapToSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(MapToSubscriber2, _super);
  function MapToSubscriber2(destination, value) {
    var _this = _super.call(this, destination) || this;
    _this.value = value;
    return _this;
  }
  MapToSubscriber2.prototype._next = function(x2) {
    this.destination.next(this.value);
  };
  return MapToSubscriber2;
}(Subscriber);
function materialize() {
  return function materializeOperatorFunction(source) {
    return source.lift(new MaterializeOperator());
  };
}
var MaterializeOperator = /* @__PURE__ */ function() {
  function MaterializeOperator2() {
  }
  MaterializeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new MaterializeSubscriber(subscriber));
  };
  return MaterializeOperator2;
}();
var MaterializeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(MaterializeSubscriber2, _super);
  function MaterializeSubscriber2(destination) {
    return _super.call(this, destination) || this;
  }
  MaterializeSubscriber2.prototype._next = function(value) {
    this.destination.next(Notification.createNext(value));
  };
  MaterializeSubscriber2.prototype._error = function(err) {
    var destination = this.destination;
    destination.next(Notification.createError(err));
    destination.complete();
  };
  MaterializeSubscriber2.prototype._complete = function() {
    var destination = this.destination;
    destination.next(Notification.createComplete());
    destination.complete();
  };
  return MaterializeSubscriber2;
}(Subscriber);
function scan(accumulator, seed) {
  var hasSeed = false;
  if (arguments.length >= 2) {
    hasSeed = true;
  }
  return function scanOperatorFunction(source) {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}
var ScanOperator = /* @__PURE__ */ function() {
  function ScanOperator2(accumulator, seed, hasSeed) {
    if (hasSeed === void 0) {
      hasSeed = false;
    }
    this.accumulator = accumulator;
    this.seed = seed;
    this.hasSeed = hasSeed;
  }
  ScanOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
  };
  return ScanOperator2;
}();
var ScanSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ScanSubscriber2, _super);
  function ScanSubscriber2(destination, accumulator, _seed, hasSeed) {
    var _this = _super.call(this, destination) || this;
    _this.accumulator = accumulator;
    _this._seed = _seed;
    _this.hasSeed = hasSeed;
    _this.index = 0;
    return _this;
  }
  Object.defineProperty(ScanSubscriber2.prototype, "seed", {
    get: function() {
      return this._seed;
    },
    set: function(value) {
      this.hasSeed = true;
      this._seed = value;
    },
    enumerable: true,
    configurable: true
  });
  ScanSubscriber2.prototype._next = function(value) {
    if (!this.hasSeed) {
      this.seed = value;
      this.destination.next(value);
    } else {
      return this._tryNext(value);
    }
  };
  ScanSubscriber2.prototype._tryNext = function(value) {
    var index2 = this.index++;
    var result;
    try {
      result = this.accumulator(this.seed, value, index2);
    } catch (err) {
      this.destination.error(err);
    }
    this.seed = result;
    this.destination.next(result);
  };
  return ScanSubscriber2;
}(Subscriber);
function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
    };
  }
  return function reduceOperatorFunction(source) {
    return pipe(scan(function(acc, value, index2) {
      return accumulator(acc, value, index2 + 1);
    }), takeLast(1))(source);
  };
}
function max(comparer) {
  var max2 = typeof comparer === "function" ? function(x2, y2) {
    return comparer(x2, y2) > 0 ? x2 : y2;
  } : function(x2, y2) {
    return x2 > y2 ? x2 : y2;
  };
  return reduce(max2);
}
function merge2() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function(source) {
    return source.lift.call(merge$1.apply(void 0, [source].concat(observables)));
  };
}
function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  if (typeof resultSelector === "function") {
    return mergeMap(function() {
      return innerObservable;
    }, resultSelector, concurrent);
  }
  if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return mergeMap(function() {
    return innerObservable;
  }, concurrent);
}
function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return function(source) {
    return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
  };
}
var MergeScanOperator = /* @__PURE__ */ function() {
  function MergeScanOperator2(accumulator, seed, concurrent) {
    this.accumulator = accumulator;
    this.seed = seed;
    this.concurrent = concurrent;
  }
  MergeScanOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
  };
  return MergeScanOperator2;
}();
var MergeScanSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(MergeScanSubscriber2, _super);
  function MergeScanSubscriber2(destination, accumulator, acc, concurrent) {
    var _this = _super.call(this, destination) || this;
    _this.accumulator = accumulator;
    _this.acc = acc;
    _this.concurrent = concurrent;
    _this.hasValue = false;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }
  MergeScanSubscriber2.prototype._next = function(value) {
    if (this.active < this.concurrent) {
      var index2 = this.index++;
      var destination = this.destination;
      var ish = void 0;
      try {
        var accumulator = this.accumulator;
        ish = accumulator(this.acc, value, index2);
      } catch (e2) {
        return destination.error(e2);
      }
      this.active++;
      this._innerSub(ish);
    } else {
      this.buffer.push(value);
    }
  };
  MergeScanSubscriber2.prototype._innerSub = function(ish) {
    var innerSubscriber = new SimpleInnerSubscriber(this);
    var destination = this.destination;
    destination.add(innerSubscriber);
    var innerSubscription = innerSubscribe(ish, innerSubscriber);
    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  };
  MergeScanSubscriber2.prototype._complete = function() {
    this.hasCompleted = true;
    if (this.active === 0 && this.buffer.length === 0) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    }
    this.unsubscribe();
  };
  MergeScanSubscriber2.prototype.notifyNext = function(innerValue) {
    var destination = this.destination;
    this.acc = innerValue;
    this.hasValue = true;
    destination.next(innerValue);
  };
  MergeScanSubscriber2.prototype.notifyComplete = function() {
    var buffer2 = this.buffer;
    this.active--;
    if (buffer2.length > 0) {
      this._next(buffer2.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    }
  };
  return MergeScanSubscriber2;
}(SimpleOuterSubscriber);
function min(comparer) {
  var min2 = typeof comparer === "function" ? function(x2, y2) {
    return comparer(x2, y2) < 0 ? x2 : y2;
  } : function(x2, y2) {
    return x2 < y2 ? x2 : y2;
  };
  return reduce(min2);
}
function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === "function") {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory2() {
        return subjectOrSubjectFactory;
      };
    }
    if (typeof selector === "function") {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(source, connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}
var MulticastOperator = /* @__PURE__ */ function() {
  function MulticastOperator2(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }
  MulticastOperator2.prototype.call = function(subscriber, source) {
    var selector = this.selector;
    var subject = this.subjectFactory();
    var subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  };
  return MulticastOperator2;
}();
function onErrorResumeNext() {
  var nextSources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }
  if (nextSources.length === 1 && isArray(nextSources[0])) {
    nextSources = nextSources[0];
  }
  return function(source) {
    return source.lift(new OnErrorResumeNextOperator(nextSources));
  };
}
var OnErrorResumeNextOperator = /* @__PURE__ */ function() {
  function OnErrorResumeNextOperator2(nextSources) {
    this.nextSources = nextSources;
  }
  OnErrorResumeNextOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
  };
  return OnErrorResumeNextOperator2;
}();
var OnErrorResumeNextSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(OnErrorResumeNextSubscriber2, _super);
  function OnErrorResumeNextSubscriber2(destination, nextSources) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    _this.nextSources = nextSources;
    return _this;
  }
  OnErrorResumeNextSubscriber2.prototype.notifyError = function() {
    this.subscribeToNextSource();
  };
  OnErrorResumeNextSubscriber2.prototype.notifyComplete = function() {
    this.subscribeToNextSource();
  };
  OnErrorResumeNextSubscriber2.prototype._error = function(err) {
    this.subscribeToNextSource();
    this.unsubscribe();
  };
  OnErrorResumeNextSubscriber2.prototype._complete = function() {
    this.subscribeToNextSource();
    this.unsubscribe();
  };
  OnErrorResumeNextSubscriber2.prototype.subscribeToNextSource = function() {
    var next = this.nextSources.shift();
    if (!!next) {
      var innerSubscriber = new SimpleInnerSubscriber(this);
      var destination = this.destination;
      destination.add(innerSubscriber);
      var innerSubscription = innerSubscribe(next, innerSubscriber);
      if (innerSubscription !== innerSubscriber) {
        destination.add(innerSubscription);
      }
    } else {
      this.destination.complete();
    }
  };
  return OnErrorResumeNextSubscriber2;
}(SimpleOuterSubscriber);
function pairwise() {
  return function(source) {
    return source.lift(new PairwiseOperator());
  };
}
var PairwiseOperator = /* @__PURE__ */ function() {
  function PairwiseOperator2() {
  }
  PairwiseOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  };
  return PairwiseOperator2;
}();
var PairwiseSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(PairwiseSubscriber2, _super);
  function PairwiseSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.hasPrev = false;
    return _this;
  }
  PairwiseSubscriber2.prototype._next = function(value) {
    var pair;
    if (this.hasPrev) {
      pair = [this.prev, value];
    } else {
      this.hasPrev = true;
    }
    this.prev = value;
    if (pair) {
      this.destination.next(pair);
    }
  };
  return PairwiseSubscriber2;
}(Subscriber);
function partition(predicate, thisArg) {
  return function(source) {
    return [
      filter(predicate, thisArg)(source),
      filter(not(predicate, thisArg))(source)
    ];
  };
}
function pluck() {
  var properties = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }
  var length = properties.length;
  if (length === 0) {
    throw new Error("list of properties cannot be empty.");
  }
  return function(source) {
    return map(plucker(properties, length))(source);
  };
}
function plucker(props, length) {
  var mapper = function(x2) {
    var currentProp = x2;
    for (var i = 0; i < length; i++) {
      var p2 = currentProp != null ? currentProp[props[i]] : void 0;
      if (p2 !== void 0) {
        currentProp = p2;
      } else {
        return void 0;
      }
    }
    return currentProp;
  };
  return mapper;
}
function publish(selector) {
  return selector ? multicast(function() {
    return new Subject();
  }, selector) : multicast(new Subject());
}
function publishBehavior(value) {
  return function(source) {
    return multicast(new BehaviorSubject(value))(source);
  };
}
function publishLast() {
  return function(source) {
    return multicast(new AsyncSubject())(source);
  };
}
function publishReplay(bufferSize, windowTime2, selectorOrScheduler, scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== "function") {
    scheduler = selectorOrScheduler;
  }
  var selector = typeof selectorOrScheduler === "function" ? selectorOrScheduler : void 0;
  var subject = new ReplaySubject(bufferSize, windowTime2, scheduler);
  return function(source) {
    return multicast(function() {
      return subject;
    }, selector)(source);
  };
}
function race() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function raceOperatorFunction(source) {
    if (observables.length === 1 && isArray(observables[0])) {
      observables = observables[0];
    }
    return source.lift.call(race$1.apply(void 0, [source].concat(observables)));
  };
}
function repeat2(count2) {
  if (count2 === void 0) {
    count2 = -1;
  }
  return function(source) {
    if (count2 === 0) {
      return empty();
    } else if (count2 < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count2 - 1, source));
    }
  };
}
var RepeatOperator = /* @__PURE__ */ function() {
  function RepeatOperator2(count2, source) {
    this.count = count2;
    this.source = source;
  }
  RepeatOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
  };
  return RepeatOperator2;
}();
var RepeatSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RepeatSubscriber2, _super);
  function RepeatSubscriber2(destination, count2, source) {
    var _this = _super.call(this, destination) || this;
    _this.count = count2;
    _this.source = source;
    return _this;
  }
  RepeatSubscriber2.prototype.complete = function() {
    if (!this.isStopped) {
      var _a = this, source = _a.source, count2 = _a.count;
      if (count2 === 0) {
        return _super.prototype.complete.call(this);
      } else if (count2 > -1) {
        this.count = count2 - 1;
      }
      source.subscribe(this._unsubscribeAndRecycle());
    }
  };
  return RepeatSubscriber2;
}(Subscriber);
function repeatWhen(notifier) {
  return function(source) {
    return source.lift(new RepeatWhenOperator(notifier));
  };
}
var RepeatWhenOperator = /* @__PURE__ */ function() {
  function RepeatWhenOperator2(notifier) {
    this.notifier = notifier;
  }
  RepeatWhenOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
  };
  return RepeatWhenOperator2;
}();
var RepeatWhenSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RepeatWhenSubscriber2, _super);
  function RepeatWhenSubscriber2(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;
    _this.notifier = notifier;
    _this.source = source;
    _this.sourceIsBeingSubscribedTo = true;
    return _this;
  }
  RepeatWhenSubscriber2.prototype.notifyNext = function() {
    this.sourceIsBeingSubscribedTo = true;
    this.source.subscribe(this);
  };
  RepeatWhenSubscriber2.prototype.notifyComplete = function() {
    if (this.sourceIsBeingSubscribedTo === false) {
      return _super.prototype.complete.call(this);
    }
  };
  RepeatWhenSubscriber2.prototype.complete = function() {
    this.sourceIsBeingSubscribedTo = false;
    if (!this.isStopped) {
      if (!this.retries) {
        this.subscribeToRetries();
      }
      if (!this.retriesSubscription || this.retriesSubscription.closed) {
        return _super.prototype.complete.call(this);
      }
      this._unsubscribeAndRecycle();
      this.notifications.next(void 0);
    }
  };
  RepeatWhenSubscriber2.prototype._unsubscribe = function() {
    var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
    if (notifications) {
      notifications.unsubscribe();
      this.notifications = void 0;
    }
    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = void 0;
    }
    this.retries = void 0;
  };
  RepeatWhenSubscriber2.prototype._unsubscribeAndRecycle = function() {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;
    _super.prototype._unsubscribeAndRecycle.call(this);
    this._unsubscribe = _unsubscribe;
    return this;
  };
  RepeatWhenSubscriber2.prototype.subscribeToRetries = function() {
    this.notifications = new Subject();
    var retries;
    try {
      var notifier = this.notifier;
      retries = notifier(this.notifications);
    } catch (e2) {
      return _super.prototype.complete.call(this);
    }
    this.retries = retries;
    this.retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
  };
  return RepeatWhenSubscriber2;
}(SimpleOuterSubscriber);
function retry(count2) {
  if (count2 === void 0) {
    count2 = -1;
  }
  return function(source) {
    return source.lift(new RetryOperator(count2, source));
  };
}
var RetryOperator = /* @__PURE__ */ function() {
  function RetryOperator2(count2, source) {
    this.count = count2;
    this.source = source;
  }
  RetryOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  };
  return RetryOperator2;
}();
var RetrySubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RetrySubscriber2, _super);
  function RetrySubscriber2(destination, count2, source) {
    var _this = _super.call(this, destination) || this;
    _this.count = count2;
    _this.source = source;
    return _this;
  }
  RetrySubscriber2.prototype.error = function(err) {
    if (!this.isStopped) {
      var _a = this, source = _a.source, count2 = _a.count;
      if (count2 === 0) {
        return _super.prototype.error.call(this, err);
      } else if (count2 > -1) {
        this.count = count2 - 1;
      }
      source.subscribe(this._unsubscribeAndRecycle());
    }
  };
  return RetrySubscriber2;
}(Subscriber);
function retryWhen(notifier) {
  return function(source) {
    return source.lift(new RetryWhenOperator(notifier, source));
  };
}
var RetryWhenOperator = /* @__PURE__ */ function() {
  function RetryWhenOperator2(notifier, source) {
    this.notifier = notifier;
    this.source = source;
  }
  RetryWhenOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
  };
  return RetryWhenOperator2;
}();
var RetryWhenSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(RetryWhenSubscriber2, _super);
  function RetryWhenSubscriber2(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;
    _this.notifier = notifier;
    _this.source = source;
    return _this;
  }
  RetryWhenSubscriber2.prototype.error = function(err) {
    if (!this.isStopped) {
      var errors2 = this.errors;
      var retries = this.retries;
      var retriesSubscription = this.retriesSubscription;
      if (!retries) {
        errors2 = new Subject();
        try {
          var notifier = this.notifier;
          retries = notifier(errors2);
        } catch (e2) {
          return _super.prototype.error.call(this, e2);
        }
        retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
      } else {
        this.errors = void 0;
        this.retriesSubscription = void 0;
      }
      this._unsubscribeAndRecycle();
      this.errors = errors2;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      errors2.next(err);
    }
  };
  RetryWhenSubscriber2.prototype._unsubscribe = function() {
    var _a = this, errors2 = _a.errors, retriesSubscription = _a.retriesSubscription;
    if (errors2) {
      errors2.unsubscribe();
      this.errors = void 0;
    }
    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = void 0;
    }
    this.retries = void 0;
  };
  RetryWhenSubscriber2.prototype.notifyNext = function() {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;
    this._unsubscribeAndRecycle();
    this._unsubscribe = _unsubscribe;
    this.source.subscribe(this);
  };
  return RetryWhenSubscriber2;
}(SimpleOuterSubscriber);
function sample(notifier) {
  return function(source) {
    return source.lift(new SampleOperator(notifier));
  };
}
var SampleOperator = /* @__PURE__ */ function() {
  function SampleOperator2(notifier) {
    this.notifier = notifier;
  }
  SampleOperator2.prototype.call = function(subscriber, source) {
    var sampleSubscriber = new SampleSubscriber(subscriber);
    var subscription = source.subscribe(sampleSubscriber);
    subscription.add(innerSubscribe(this.notifier, new SimpleInnerSubscriber(sampleSubscriber)));
    return subscription;
  };
  return SampleOperator2;
}();
var SampleSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SampleSubscriber2, _super);
  function SampleSubscriber2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hasValue = false;
    return _this;
  }
  SampleSubscriber2.prototype._next = function(value) {
    this.value = value;
    this.hasValue = true;
  };
  SampleSubscriber2.prototype.notifyNext = function() {
    this.emitValue();
  };
  SampleSubscriber2.prototype.notifyComplete = function() {
    this.emitValue();
  };
  SampleSubscriber2.prototype.emitValue = function() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.value);
    }
  };
  return SampleSubscriber2;
}(SimpleOuterSubscriber);
function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return source.lift(new SampleTimeOperator(period, scheduler));
  };
}
var SampleTimeOperator = /* @__PURE__ */ function() {
  function SampleTimeOperator2(period, scheduler) {
    this.period = period;
    this.scheduler = scheduler;
  }
  SampleTimeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  };
  return SampleTimeOperator2;
}();
var SampleTimeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SampleTimeSubscriber2, _super);
  function SampleTimeSubscriber2(destination, period, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.period = period;
    _this.scheduler = scheduler;
    _this.hasValue = false;
    _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period }));
    return _this;
  }
  SampleTimeSubscriber2.prototype._next = function(value) {
    this.lastValue = value;
    this.hasValue = true;
  };
  SampleTimeSubscriber2.prototype.notifyNext = function() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  };
  return SampleTimeSubscriber2;
}(Subscriber);
function dispatchNotification(state2) {
  var subscriber = state2.subscriber, period = state2.period;
  subscriber.notifyNext();
  this.schedule(state2, period);
}
function sequenceEqual(compareTo, comparator) {
  return function(source) {
    return source.lift(new SequenceEqualOperator(compareTo, comparator));
  };
}
var SequenceEqualOperator = /* @__PURE__ */ function() {
  function SequenceEqualOperator2(compareTo, comparator) {
    this.compareTo = compareTo;
    this.comparator = comparator;
  }
  SequenceEqualOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
  };
  return SequenceEqualOperator2;
}();
var SequenceEqualSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SequenceEqualSubscriber2, _super);
  function SequenceEqualSubscriber2(destination, compareTo, comparator) {
    var _this = _super.call(this, destination) || this;
    _this.compareTo = compareTo;
    _this.comparator = comparator;
    _this._a = [];
    _this._b = [];
    _this._oneComplete = false;
    _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
    return _this;
  }
  SequenceEqualSubscriber2.prototype._next = function(value) {
    if (this._oneComplete && this._b.length === 0) {
      this.emit(false);
    } else {
      this._a.push(value);
      this.checkValues();
    }
  };
  SequenceEqualSubscriber2.prototype._complete = function() {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
    this.unsubscribe();
  };
  SequenceEqualSubscriber2.prototype.checkValues = function() {
    var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
    while (_a.length > 0 && _b.length > 0) {
      var a2 = _a.shift();
      var b2 = _b.shift();
      var areEqual = false;
      try {
        areEqual = comparator ? comparator(a2, b2) : a2 === b2;
      } catch (e2) {
        this.destination.error(e2);
      }
      if (!areEqual) {
        this.emit(false);
      }
    }
  };
  SequenceEqualSubscriber2.prototype.emit = function(value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
  };
  SequenceEqualSubscriber2.prototype.nextB = function(value) {
    if (this._oneComplete && this._a.length === 0) {
      this.emit(false);
    } else {
      this._b.push(value);
      this.checkValues();
    }
  };
  SequenceEqualSubscriber2.prototype.completeB = function() {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
  };
  return SequenceEqualSubscriber2;
}(Subscriber);
var SequenceEqualCompareToSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SequenceEqualCompareToSubscriber2, _super);
  function SequenceEqualCompareToSubscriber2(destination, parent) {
    var _this = _super.call(this, destination) || this;
    _this.parent = parent;
    return _this;
  }
  SequenceEqualCompareToSubscriber2.prototype._next = function(value) {
    this.parent.nextB(value);
  };
  SequenceEqualCompareToSubscriber2.prototype._error = function(err) {
    this.parent.error(err);
    this.unsubscribe();
  };
  SequenceEqualCompareToSubscriber2.prototype._complete = function() {
    this.parent.completeB();
    this.unsubscribe();
  };
  return SequenceEqualCompareToSubscriber2;
}(Subscriber);
function shareSubjectFactory() {
  return new Subject();
}
function share() {
  return function(source) {
    return refCount()(multicast(shareSubjectFactory)(source));
  };
}
function shareReplay(configOrBufferSize, windowTime2, scheduler) {
  var config2;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    config2 = configOrBufferSize;
  } else {
    config2 = {
      bufferSize: configOrBufferSize,
      windowTime: windowTime2,
      refCount: false,
      scheduler
    };
  }
  return function(source) {
    return source.lift(shareReplayOperator(config2));
  };
}
function shareReplayOperator(_a) {
  var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime2 = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
  var subject;
  var refCount2 = 0;
  var subscription;
  var hasError = false;
  var isComplete = false;
  return function shareReplayOperation(source) {
    refCount2++;
    var innerSub;
    if (!subject || hasError) {
      hasError = false;
      subject = new ReplaySubject(bufferSize, windowTime2, scheduler);
      innerSub = subject.subscribe(this);
      subscription = source.subscribe({
        next: function(value) {
          subject.next(value);
        },
        error: function(err) {
          hasError = true;
          subject.error(err);
        },
        complete: function() {
          isComplete = true;
          subscription = void 0;
          subject.complete();
        }
      });
      if (isComplete) {
        subscription = void 0;
      }
    } else {
      innerSub = subject.subscribe(this);
    }
    this.add(function() {
      refCount2--;
      innerSub.unsubscribe();
      innerSub = void 0;
      if (subscription && !isComplete && useRefCount && refCount2 === 0) {
        subscription.unsubscribe();
        subscription = void 0;
        subject = void 0;
      }
    });
  };
}
function single(predicate) {
  return function(source) {
    return source.lift(new SingleOperator(predicate, source));
  };
}
var SingleOperator = /* @__PURE__ */ function() {
  function SingleOperator2(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }
  SingleOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
  };
  return SingleOperator2;
}();
var SingleSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SingleSubscriber2, _super);
  function SingleSubscriber2(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.source = source;
    _this.seenValue = false;
    _this.index = 0;
    return _this;
  }
  SingleSubscriber2.prototype.applySingleValue = function(value) {
    if (this.seenValue) {
      this.destination.error("Sequence contains more than one element");
    } else {
      this.seenValue = true;
      this.singleValue = value;
    }
  };
  SingleSubscriber2.prototype._next = function(value) {
    var index2 = this.index++;
    if (this.predicate) {
      this.tryNext(value, index2);
    } else {
      this.applySingleValue(value);
    }
  };
  SingleSubscriber2.prototype.tryNext = function(value, index2) {
    try {
      if (this.predicate(value, index2, this.source)) {
        this.applySingleValue(value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };
  SingleSubscriber2.prototype._complete = function() {
    var destination = this.destination;
    if (this.index > 0) {
      destination.next(this.seenValue ? this.singleValue : void 0);
      destination.complete();
    } else {
      destination.error(new EmptyError());
    }
  };
  return SingleSubscriber2;
}(Subscriber);
function skip(count2) {
  return function(source) {
    return source.lift(new SkipOperator(count2));
  };
}
var SkipOperator = /* @__PURE__ */ function() {
  function SkipOperator2(total) {
    this.total = total;
  }
  SkipOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SkipSubscriber(subscriber, this.total));
  };
  return SkipOperator2;
}();
var SkipSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SkipSubscriber2, _super);
  function SkipSubscriber2(destination, total) {
    var _this = _super.call(this, destination) || this;
    _this.total = total;
    _this.count = 0;
    return _this;
  }
  SkipSubscriber2.prototype._next = function(x2) {
    if (++this.count > this.total) {
      this.destination.next(x2);
    }
  };
  return SkipSubscriber2;
}(Subscriber);
function skipLast(count2) {
  return function(source) {
    return source.lift(new SkipLastOperator(count2));
  };
}
var SkipLastOperator = /* @__PURE__ */ function() {
  function SkipLastOperator2(_skipCount) {
    this._skipCount = _skipCount;
    if (this._skipCount < 0) {
      throw new ArgumentOutOfRangeError();
    }
  }
  SkipLastOperator2.prototype.call = function(subscriber, source) {
    if (this._skipCount === 0) {
      return source.subscribe(new Subscriber(subscriber));
    } else {
      return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    }
  };
  return SkipLastOperator2;
}();
var SkipLastSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SkipLastSubscriber2, _super);
  function SkipLastSubscriber2(destination, _skipCount) {
    var _this = _super.call(this, destination) || this;
    _this._skipCount = _skipCount;
    _this._count = 0;
    _this._ring = new Array(_skipCount);
    return _this;
  }
  SkipLastSubscriber2.prototype._next = function(value) {
    var skipCount = this._skipCount;
    var count2 = this._count++;
    if (count2 < skipCount) {
      this._ring[count2] = value;
    } else {
      var currentIndex = count2 % skipCount;
      var ring = this._ring;
      var oldValue = ring[currentIndex];
      ring[currentIndex] = value;
      this.destination.next(oldValue);
    }
  };
  return SkipLastSubscriber2;
}(Subscriber);
function skipUntil(notifier) {
  return function(source) {
    return source.lift(new SkipUntilOperator(notifier));
  };
}
var SkipUntilOperator = /* @__PURE__ */ function() {
  function SkipUntilOperator2(notifier) {
    this.notifier = notifier;
  }
  SkipUntilOperator2.prototype.call = function(destination, source) {
    return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
  };
  return SkipUntilOperator2;
}();
var SkipUntilSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SkipUntilSubscriber2, _super);
  function SkipUntilSubscriber2(destination, notifier) {
    var _this = _super.call(this, destination) || this;
    _this.hasValue = false;
    var innerSubscriber = new SimpleInnerSubscriber(_this);
    _this.add(innerSubscriber);
    _this.innerSubscription = innerSubscriber;
    var innerSubscription = innerSubscribe(notifier, innerSubscriber);
    if (innerSubscription !== innerSubscriber) {
      _this.add(innerSubscription);
      _this.innerSubscription = innerSubscription;
    }
    return _this;
  }
  SkipUntilSubscriber2.prototype._next = function(value) {
    if (this.hasValue) {
      _super.prototype._next.call(this, value);
    }
  };
  SkipUntilSubscriber2.prototype.notifyNext = function() {
    this.hasValue = true;
    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe();
    }
  };
  SkipUntilSubscriber2.prototype.notifyComplete = function() {
  };
  return SkipUntilSubscriber2;
}(SimpleOuterSubscriber);
function skipWhile(predicate) {
  return function(source) {
    return source.lift(new SkipWhileOperator(predicate));
  };
}
var SkipWhileOperator = /* @__PURE__ */ function() {
  function SkipWhileOperator2(predicate) {
    this.predicate = predicate;
  }
  SkipWhileOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  };
  return SkipWhileOperator2;
}();
var SkipWhileSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SkipWhileSubscriber2, _super);
  function SkipWhileSubscriber2(destination, predicate) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.skipping = true;
    _this.index = 0;
    return _this;
  }
  SkipWhileSubscriber2.prototype._next = function(value) {
    var destination = this.destination;
    if (this.skipping) {
      this.tryCallPredicate(value);
    }
    if (!this.skipping) {
      destination.next(value);
    }
  };
  SkipWhileSubscriber2.prototype.tryCallPredicate = function(value) {
    try {
      var result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  };
  return SkipWhileSubscriber2;
}(Subscriber);
function startWith() {
  var array = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }
  var scheduler = array[array.length - 1];
  if (isScheduler(scheduler)) {
    array.pop();
    return function(source) {
      return concat$1(array, source, scheduler);
    };
  } else {
    return function(source) {
      return concat$1(array, source);
    };
  }
}
var SubscribeOnObservable = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SubscribeOnObservable2, _super);
  function SubscribeOnObservable2(source, delayTime, scheduler) {
    if (delayTime === void 0) {
      delayTime = 0;
    }
    if (scheduler === void 0) {
      scheduler = asap;
    }
    var _this = _super.call(this) || this;
    _this.source = source;
    _this.delayTime = delayTime;
    _this.scheduler = scheduler;
    if (!isNumeric(delayTime) || delayTime < 0) {
      _this.delayTime = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== "function") {
      _this.scheduler = asap;
    }
    return _this;
  }
  SubscribeOnObservable2.create = function(source, delay2, scheduler) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (scheduler === void 0) {
      scheduler = asap;
    }
    return new SubscribeOnObservable2(source, delay2, scheduler);
  };
  SubscribeOnObservable2.dispatch = function(arg) {
    var source = arg.source, subscriber = arg.subscriber;
    return this.add(source.subscribe(subscriber));
  };
  SubscribeOnObservable2.prototype._subscribe = function(subscriber) {
    var delay2 = this.delayTime;
    var source = this.source;
    var scheduler = this.scheduler;
    return scheduler.schedule(SubscribeOnObservable2.dispatch, delay2, {
      source,
      subscriber
    });
  };
  return SubscribeOnObservable2;
}(Observable);
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return function subscribeOnOperatorFunction(source) {
    return source.lift(new SubscribeOnOperator(scheduler, delay2));
  };
}
var SubscribeOnOperator = /* @__PURE__ */ function() {
  function SubscribeOnOperator2(scheduler, delay2) {
    this.scheduler = scheduler;
    this.delay = delay2;
  }
  SubscribeOnOperator2.prototype.call = function(subscriber, source) {
    return new SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
  };
  return SubscribeOnOperator2;
}();
function switchMap(project, resultSelector) {
  if (typeof resultSelector === "function") {
    return function(source) {
      return source.pipe(switchMap(function(a2, i) {
        return from(project(a2, i)).pipe(map(function(b2, ii) {
          return resultSelector(a2, b2, i, ii);
        }));
      }));
    };
  }
  return function(source) {
    return source.lift(new SwitchMapOperator(project));
  };
}
var SwitchMapOperator = /* @__PURE__ */ function() {
  function SwitchMapOperator2(project) {
    this.project = project;
  }
  SwitchMapOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  };
  return SwitchMapOperator2;
}();
var SwitchMapSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(SwitchMapSubscriber2, _super);
  function SwitchMapSubscriber2(destination, project) {
    var _this = _super.call(this, destination) || this;
    _this.project = project;
    _this.index = 0;
    return _this;
  }
  SwitchMapSubscriber2.prototype._next = function(value) {
    var result;
    var index2 = this.index++;
    try {
      result = this.project(value, index2);
    } catch (error) {
      this.destination.error(error);
      return;
    }
    this._innerSub(result);
  };
  SwitchMapSubscriber2.prototype._innerSub = function(result) {
    var innerSubscription = this.innerSubscription;
    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }
    var innerSubscriber = new SimpleInnerSubscriber(this);
    var destination = this.destination;
    destination.add(innerSubscriber);
    this.innerSubscription = innerSubscribe(result, innerSubscriber);
    if (this.innerSubscription !== innerSubscriber) {
      destination.add(this.innerSubscription);
    }
  };
  SwitchMapSubscriber2.prototype._complete = function() {
    var innerSubscription = this.innerSubscription;
    if (!innerSubscription || innerSubscription.closed) {
      _super.prototype._complete.call(this);
    }
    this.unsubscribe();
  };
  SwitchMapSubscriber2.prototype._unsubscribe = function() {
    this.innerSubscription = void 0;
  };
  SwitchMapSubscriber2.prototype.notifyComplete = function() {
    this.innerSubscription = void 0;
    if (this.isStopped) {
      _super.prototype._complete.call(this);
    }
  };
  SwitchMapSubscriber2.prototype.notifyNext = function(innerValue) {
    this.destination.next(innerValue);
  };
  return SwitchMapSubscriber2;
}(SimpleOuterSubscriber);
function switchAll() {
  return switchMap(identity);
}
function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? switchMap(function() {
    return innerObservable;
  }, resultSelector) : switchMap(function() {
    return innerObservable;
  });
}
function takeUntil(notifier) {
  return function(source) {
    return source.lift(new TakeUntilOperator(notifier));
  };
}
var TakeUntilOperator = /* @__PURE__ */ function() {
  function TakeUntilOperator2(notifier) {
    this.notifier = notifier;
  }
  TakeUntilOperator2.prototype.call = function(subscriber, source) {
    var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    var notifierSubscription = innerSubscribe(this.notifier, new SimpleInnerSubscriber(takeUntilSubscriber));
    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }
    return takeUntilSubscriber;
  };
  return TakeUntilOperator2;
}();
var TakeUntilSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TakeUntilSubscriber2, _super);
  function TakeUntilSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.seenValue = false;
    return _this;
  }
  TakeUntilSubscriber2.prototype.notifyNext = function() {
    this.seenValue = true;
    this.complete();
  };
  TakeUntilSubscriber2.prototype.notifyComplete = function() {
  };
  return TakeUntilSubscriber2;
}(SimpleOuterSubscriber);
function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }
  return function(source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}
var TakeWhileOperator = /* @__PURE__ */ function() {
  function TakeWhileOperator2(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }
  TakeWhileOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  };
  return TakeWhileOperator2;
}();
var TakeWhileSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TakeWhileSubscriber2, _super);
  function TakeWhileSubscriber2(destination, predicate, inclusive) {
    var _this = _super.call(this, destination) || this;
    _this.predicate = predicate;
    _this.inclusive = inclusive;
    _this.index = 0;
    return _this;
  }
  TakeWhileSubscriber2.prototype._next = function(value) {
    var destination = this.destination;
    var result;
    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }
    this.nextOrComplete(value, result);
  };
  TakeWhileSubscriber2.prototype.nextOrComplete = function(value, predicateResult) {
    var destination = this.destination;
    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }
      destination.complete();
    }
  };
  return TakeWhileSubscriber2;
}(Subscriber);
function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}
var DoOperator = /* @__PURE__ */ function() {
  function DoOperator2(nextOrObserver, error, complete) {
    this.nextOrObserver = nextOrObserver;
    this.error = error;
    this.complete = complete;
  }
  DoOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  };
  return DoOperator2;
}();
var TapSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TapSubscriber2, _super);
  function TapSubscriber2(destination, observerOrNext, error, complete) {
    var _this = _super.call(this, destination) || this;
    _this._tapNext = noop;
    _this._tapError = noop;
    _this._tapComplete = noop;
    _this._tapError = error || noop;
    _this._tapComplete = complete || noop;
    if (isFunction(observerOrNext)) {
      _this._context = _this;
      _this._tapNext = observerOrNext;
    } else if (observerOrNext) {
      _this._context = observerOrNext;
      _this._tapNext = observerOrNext.next || noop;
      _this._tapError = observerOrNext.error || noop;
      _this._tapComplete = observerOrNext.complete || noop;
    }
    return _this;
  }
  TapSubscriber2.prototype._next = function(value) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(value);
  };
  TapSubscriber2.prototype._error = function(err) {
    try {
      this._tapError.call(this._context, err);
    } catch (err2) {
      this.destination.error(err2);
      return;
    }
    this.destination.error(err);
  };
  TapSubscriber2.prototype._complete = function() {
    try {
      this._tapComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    return this.destination.complete();
  };
  return TapSubscriber2;
}(Subscriber);
var defaultThrottleConfig = {
  leading: true,
  trailing: false
};
function throttle(durationSelector, config2) {
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  return function(source) {
    return source.lift(new ThrottleOperator(durationSelector, !!config2.leading, !!config2.trailing));
  };
}
var ThrottleOperator = /* @__PURE__ */ function() {
  function ThrottleOperator2(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }
  ThrottleOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  };
  return ThrottleOperator2;
}();
var ThrottleSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ThrottleSubscriber2, _super);
  function ThrottleSubscriber2(destination, durationSelector, _leading, _trailing) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    _this.durationSelector = durationSelector;
    _this._leading = _leading;
    _this._trailing = _trailing;
    _this._hasValue = false;
    return _this;
  }
  ThrottleSubscriber2.prototype._next = function(value) {
    this._hasValue = true;
    this._sendValue = value;
    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  };
  ThrottleSubscriber2.prototype.send = function() {
    var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }
    this._hasValue = false;
    this._sendValue = void 0;
  };
  ThrottleSubscriber2.prototype.throttle = function(value) {
    var duration = this.tryDurationSelector(value);
    if (!!duration) {
      this.add(this._throttled = innerSubscribe(duration, new SimpleInnerSubscriber(this)));
    }
  };
  ThrottleSubscriber2.prototype.tryDurationSelector = function(value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  };
  ThrottleSubscriber2.prototype.throttlingDone = function() {
    var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
    if (_throttled) {
      _throttled.unsubscribe();
    }
    this._throttled = void 0;
    if (_trailing) {
      this.send();
    }
  };
  ThrottleSubscriber2.prototype.notifyNext = function() {
    this.throttlingDone();
  };
  ThrottleSubscriber2.prototype.notifyComplete = function() {
    this.throttlingDone();
  };
  return ThrottleSubscriber2;
}(SimpleOuterSubscriber);
function throttleTime(duration, scheduler, config2) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  if (config2 === void 0) {
    config2 = defaultThrottleConfig;
  }
  return function(source) {
    return source.lift(new ThrottleTimeOperator(duration, scheduler, config2.leading, config2.trailing));
  };
}
var ThrottleTimeOperator = /* @__PURE__ */ function() {
  function ThrottleTimeOperator2(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }
  ThrottleTimeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  };
  return ThrottleTimeOperator2;
}();
var ThrottleTimeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(ThrottleTimeSubscriber2, _super);
  function ThrottleTimeSubscriber2(destination, duration, scheduler, leading, trailing) {
    var _this = _super.call(this, destination) || this;
    _this.duration = duration;
    _this.scheduler = scheduler;
    _this.leading = leading;
    _this.trailing = trailing;
    _this._hasTrailingValue = false;
    _this._trailingValue = null;
    return _this;
  }
  ThrottleTimeSubscriber2.prototype._next = function(value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
      if (this.leading) {
        this.destination.next(value);
      } else if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    }
  };
  ThrottleTimeSubscriber2.prototype._complete = function() {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  };
  ThrottleTimeSubscriber2.prototype.clearThrottle = function() {
    var throttled = this.throttled;
    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }
      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  };
  return ThrottleTimeSubscriber2;
}(Subscriber);
function dispatchNext(arg) {
  var subscriber = arg.subscriber;
  subscriber.clearThrottle();
}
function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    return defer(function() {
      return source.pipe(scan(function(_a, value) {
        var current = _a.current;
        return { value, current: scheduler.now(), last: current };
      }, { current: scheduler.now(), value: void 0, last: void 0 }), map(function(_a) {
        var current = _a.current, last2 = _a.last, value = _a.value;
        return new TimeInterval(value, current - last2);
      }));
    });
  };
}
var TimeInterval = /* @__PURE__ */ function() {
  function TimeInterval2(value, interval2) {
    this.value = value;
    this.interval = interval2;
  }
  return TimeInterval2;
}();
function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return function(source) {
    var absoluteTimeout = isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}
var TimeoutWithOperator = /* @__PURE__ */ function() {
  function TimeoutWithOperator2(waitFor, absoluteTimeout, withObservable, scheduler) {
    this.waitFor = waitFor;
    this.absoluteTimeout = absoluteTimeout;
    this.withObservable = withObservable;
    this.scheduler = scheduler;
  }
  TimeoutWithOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  };
  return TimeoutWithOperator2;
}();
var TimeoutWithSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(TimeoutWithSubscriber2, _super);
  function TimeoutWithSubscriber2(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.absoluteTimeout = absoluteTimeout;
    _this.waitFor = waitFor;
    _this.withObservable = withObservable;
    _this.scheduler = scheduler;
    _this.scheduleTimeout();
    return _this;
  }
  TimeoutWithSubscriber2.dispatchTimeout = function(subscriber) {
    var withObservable = subscriber.withObservable;
    subscriber._unsubscribeAndRecycle();
    subscriber.add(innerSubscribe(withObservable, new SimpleInnerSubscriber(subscriber)));
  };
  TimeoutWithSubscriber2.prototype.scheduleTimeout = function() {
    var action = this.action;
    if (action) {
      this.action = action.schedule(this, this.waitFor);
    } else {
      this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber2.dispatchTimeout, this.waitFor, this));
    }
  };
  TimeoutWithSubscriber2.prototype._next = function(value) {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }
    _super.prototype._next.call(this, value);
  };
  TimeoutWithSubscriber2.prototype._unsubscribe = function() {
    this.action = void 0;
    this.scheduler = null;
    this.withObservable = null;
  };
  return TimeoutWithSubscriber2;
}(SimpleOuterSubscriber);
function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
function timestamp(scheduler) {
  if (scheduler === void 0) {
    scheduler = async;
  }
  return map(function(value) {
    return new Timestamp(value, scheduler.now());
  });
}
var Timestamp = /* @__PURE__ */ function() {
  function Timestamp2(value, timestamp2) {
    this.value = value;
    this.timestamp = timestamp2;
  }
  return Timestamp2;
}();
function toArrayReducer(arr2, item, index2) {
  if (index2 === 0) {
    return [item];
  }
  arr2.push(item);
  return arr2;
}
function toArray() {
  return reduce(toArrayReducer, []);
}
function window$1(windowBoundaries) {
  return function windowOperatorFunction(source) {
    return source.lift(new WindowOperator$1(windowBoundaries));
  };
}
var WindowOperator$1 = /* @__PURE__ */ function() {
  function WindowOperator2(windowBoundaries) {
    this.windowBoundaries = windowBoundaries;
  }
  WindowOperator2.prototype.call = function(subscriber, source) {
    var windowSubscriber = new WindowSubscriber$1(subscriber);
    var sourceSubscription = source.subscribe(windowSubscriber);
    if (!sourceSubscription.closed) {
      windowSubscriber.add(innerSubscribe(this.windowBoundaries, new SimpleInnerSubscriber(windowSubscriber)));
    }
    return sourceSubscription;
  };
  return WindowOperator2;
}();
var WindowSubscriber$1 = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WindowSubscriber2, _super);
  function WindowSubscriber2(destination) {
    var _this = _super.call(this, destination) || this;
    _this.window = new Subject();
    destination.next(_this.window);
    return _this;
  }
  WindowSubscriber2.prototype.notifyNext = function() {
    this.openWindow();
  };
  WindowSubscriber2.prototype.notifyError = function(error) {
    this._error(error);
  };
  WindowSubscriber2.prototype.notifyComplete = function() {
    this._complete();
  };
  WindowSubscriber2.prototype._next = function(value) {
    this.window.next(value);
  };
  WindowSubscriber2.prototype._error = function(err) {
    this.window.error(err);
    this.destination.error(err);
  };
  WindowSubscriber2.prototype._complete = function() {
    this.window.complete();
    this.destination.complete();
  };
  WindowSubscriber2.prototype._unsubscribe = function() {
    this.window = null;
  };
  WindowSubscriber2.prototype.openWindow = function() {
    var prevWindow = this.window;
    if (prevWindow) {
      prevWindow.complete();
    }
    var destination = this.destination;
    var newWindow = this.window = new Subject();
    destination.next(newWindow);
  };
  return WindowSubscriber2;
}(SimpleOuterSubscriber);
function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }
  return function windowCountOperatorFunction(source) {
    return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
  };
}
var WindowCountOperator = /* @__PURE__ */ function() {
  function WindowCountOperator2(windowSize, startWindowEvery) {
    this.windowSize = windowSize;
    this.startWindowEvery = startWindowEvery;
  }
  WindowCountOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
  };
  return WindowCountOperator2;
}();
var WindowCountSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WindowCountSubscriber2, _super);
  function WindowCountSubscriber2(destination, windowSize, startWindowEvery) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    _this.windowSize = windowSize;
    _this.startWindowEvery = startWindowEvery;
    _this.windows = [new Subject()];
    _this.count = 0;
    destination.next(_this.windows[0]);
    return _this;
  }
  WindowCountSubscriber2.prototype._next = function(value) {
    var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
    var destination = this.destination;
    var windowSize = this.windowSize;
    var windows = this.windows;
    var len = windows.length;
    for (var i = 0; i < len && !this.closed; i++) {
      windows[i].next(value);
    }
    var c2 = this.count - windowSize + 1;
    if (c2 >= 0 && c2 % startWindowEvery === 0 && !this.closed) {
      windows.shift().complete();
    }
    if (++this.count % startWindowEvery === 0 && !this.closed) {
      var window_1 = new Subject();
      windows.push(window_1);
      destination.next(window_1);
    }
  };
  WindowCountSubscriber2.prototype._error = function(err) {
    var windows = this.windows;
    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().error(err);
      }
    }
    this.destination.error(err);
  };
  WindowCountSubscriber2.prototype._complete = function() {
    var windows = this.windows;
    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().complete();
      }
    }
    this.destination.complete();
  };
  WindowCountSubscriber2.prototype._unsubscribe = function() {
    this.count = 0;
    this.windows = null;
  };
  return WindowCountSubscriber2;
}(Subscriber);
function windowTime(windowTimeSpan) {
  var scheduler = async;
  var windowCreationInterval = null;
  var maxWindowSize = Number.POSITIVE_INFINITY;
  if (isScheduler(arguments[3])) {
    scheduler = arguments[3];
  }
  if (isScheduler(arguments[2])) {
    scheduler = arguments[2];
  } else if (isNumeric(arguments[2])) {
    maxWindowSize = Number(arguments[2]);
  }
  if (isScheduler(arguments[1])) {
    scheduler = arguments[1];
  } else if (isNumeric(arguments[1])) {
    windowCreationInterval = Number(arguments[1]);
  }
  return function windowTimeOperatorFunction(source) {
    return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  };
}
var WindowTimeOperator = /* @__PURE__ */ function() {
  function WindowTimeOperator2(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    this.windowTimeSpan = windowTimeSpan;
    this.windowCreationInterval = windowCreationInterval;
    this.maxWindowSize = maxWindowSize;
    this.scheduler = scheduler;
  }
  WindowTimeOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  };
  return WindowTimeOperator2;
}();
var CountedSubject = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(CountedSubject2, _super);
  function CountedSubject2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._numberOfNextedValues = 0;
    return _this;
  }
  CountedSubject2.prototype.next = function(value) {
    this._numberOfNextedValues++;
    _super.prototype.next.call(this, value);
  };
  Object.defineProperty(CountedSubject2.prototype, "numberOfNextedValues", {
    get: function() {
      return this._numberOfNextedValues;
    },
    enumerable: true,
    configurable: true
  });
  return CountedSubject2;
}(Subject);
var WindowTimeSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WindowTimeSubscriber2, _super);
  function WindowTimeSubscriber2(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    _this.windowTimeSpan = windowTimeSpan;
    _this.windowCreationInterval = windowCreationInterval;
    _this.maxWindowSize = maxWindowSize;
    _this.scheduler = scheduler;
    _this.windows = [];
    var window2 = _this.openWindow();
    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
      var closeState = { subscriber: _this, window: window2, context: null };
      var creationState = { windowTimeSpan, windowCreationInterval, subscriber: _this, scheduler };
      _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
      _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
    } else {
      var timeSpanOnlyState = { subscriber: _this, window: window2, windowTimeSpan };
      _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
    }
    return _this;
  }
  WindowTimeSubscriber2.prototype._next = function(value) {
    var windows = this.windows;
    var len = windows.length;
    for (var i = 0; i < len; i++) {
      var window_1 = windows[i];
      if (!window_1.closed) {
        window_1.next(value);
        if (window_1.numberOfNextedValues >= this.maxWindowSize) {
          this.closeWindow(window_1);
        }
      }
    }
  };
  WindowTimeSubscriber2.prototype._error = function(err) {
    var windows = this.windows;
    while (windows.length > 0) {
      windows.shift().error(err);
    }
    this.destination.error(err);
  };
  WindowTimeSubscriber2.prototype._complete = function() {
    var windows = this.windows;
    while (windows.length > 0) {
      var window_2 = windows.shift();
      if (!window_2.closed) {
        window_2.complete();
      }
    }
    this.destination.complete();
  };
  WindowTimeSubscriber2.prototype.openWindow = function() {
    var window2 = new CountedSubject();
    this.windows.push(window2);
    var destination = this.destination;
    destination.next(window2);
    return window2;
  };
  WindowTimeSubscriber2.prototype.closeWindow = function(window2) {
    window2.complete();
    var windows = this.windows;
    windows.splice(windows.indexOf(window2), 1);
  };
  return WindowTimeSubscriber2;
}(Subscriber);
function dispatchWindowTimeSpanOnly(state2) {
  var subscriber = state2.subscriber, windowTimeSpan = state2.windowTimeSpan, window2 = state2.window;
  if (window2) {
    subscriber.closeWindow(window2);
  }
  state2.window = subscriber.openWindow();
  this.schedule(state2, windowTimeSpan);
}
function dispatchWindowCreation(state2) {
  var windowTimeSpan = state2.windowTimeSpan, subscriber = state2.subscriber, scheduler = state2.scheduler, windowCreationInterval = state2.windowCreationInterval;
  var window2 = subscriber.openWindow();
  var action = this;
  var context = { action, subscription: null };
  var timeSpanState = { subscriber, window: window2, context };
  context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
  action.add(context.subscription);
  action.schedule(state2, windowCreationInterval);
}
function dispatchWindowClose(state2) {
  var subscriber = state2.subscriber, window2 = state2.window, context = state2.context;
  if (context && context.action && context.subscription) {
    context.action.remove(context.subscription);
  }
  subscriber.closeWindow(window2);
}
function windowToggle(openings, closingSelector) {
  return function(source) {
    return source.lift(new WindowToggleOperator(openings, closingSelector));
  };
}
var WindowToggleOperator = /* @__PURE__ */ function() {
  function WindowToggleOperator2(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }
  WindowToggleOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };
  return WindowToggleOperator2;
}();
var WindowToggleSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WindowToggleSubscriber2, _super);
  function WindowToggleSubscriber2(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;
    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];
    _this.add(_this.openSubscription = subscribeToResult(_this, openings, openings));
    return _this;
  }
  WindowToggleSubscriber2.prototype._next = function(value) {
    var contexts = this.contexts;
    if (contexts) {
      var len = contexts.length;
      for (var i = 0; i < len; i++) {
        contexts[i].window.next(value);
      }
    }
  };
  WindowToggleSubscriber2.prototype._error = function(err) {
    var contexts = this.contexts;
    this.contexts = null;
    if (contexts) {
      var len = contexts.length;
      var index2 = -1;
      while (++index2 < len) {
        var context_1 = contexts[index2];
        context_1.window.error(err);
        context_1.subscription.unsubscribe();
      }
    }
    _super.prototype._error.call(this, err);
  };
  WindowToggleSubscriber2.prototype._complete = function() {
    var contexts = this.contexts;
    this.contexts = null;
    if (contexts) {
      var len = contexts.length;
      var index2 = -1;
      while (++index2 < len) {
        var context_2 = contexts[index2];
        context_2.window.complete();
        context_2.subscription.unsubscribe();
      }
    }
    _super.prototype._complete.call(this);
  };
  WindowToggleSubscriber2.prototype._unsubscribe = function() {
    var contexts = this.contexts;
    this.contexts = null;
    if (contexts) {
      var len = contexts.length;
      var index2 = -1;
      while (++index2 < len) {
        var context_3 = contexts[index2];
        context_3.window.unsubscribe();
        context_3.subscription.unsubscribe();
      }
    }
  };
  WindowToggleSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (outerValue === this.openings) {
      var closingNotifier = void 0;
      try {
        var closingSelector = this.closingSelector;
        closingNotifier = closingSelector(innerValue);
      } catch (e2) {
        return this.error(e2);
      }
      var window_1 = new Subject();
      var subscription = new Subscription();
      var context_4 = { window: window_1, subscription };
      this.contexts.push(context_4);
      var innerSubscription = subscribeToResult(this, closingNotifier, context_4);
      if (innerSubscription.closed) {
        this.closeWindow(this.contexts.length - 1);
      } else {
        innerSubscription.context = context_4;
        subscription.add(innerSubscription);
      }
      this.destination.next(window_1);
    } else {
      this.closeWindow(this.contexts.indexOf(outerValue));
    }
  };
  WindowToggleSubscriber2.prototype.notifyError = function(err) {
    this.error(err);
  };
  WindowToggleSubscriber2.prototype.notifyComplete = function(inner) {
    if (inner !== this.openSubscription) {
      this.closeWindow(this.contexts.indexOf(inner.context));
    }
  };
  WindowToggleSubscriber2.prototype.closeWindow = function(index2) {
    if (index2 === -1) {
      return;
    }
    var contexts = this.contexts;
    var context = contexts[index2];
    var window2 = context.window, subscription = context.subscription;
    contexts.splice(index2, 1);
    window2.complete();
    subscription.unsubscribe();
  };
  return WindowToggleSubscriber2;
}(OuterSubscriber);
function windowWhen(closingSelector) {
  return function windowWhenOperatorFunction(source) {
    return source.lift(new WindowOperator(closingSelector));
  };
}
var WindowOperator = /* @__PURE__ */ function() {
  function WindowOperator2(closingSelector) {
    this.closingSelector = closingSelector;
  }
  WindowOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
  };
  return WindowOperator2;
}();
var WindowSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WindowSubscriber2, _super);
  function WindowSubscriber2(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;
    _this.destination = destination;
    _this.closingSelector = closingSelector;
    _this.openWindow();
    return _this;
  }
  WindowSubscriber2.prototype.notifyNext = function(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
    this.openWindow(innerSub);
  };
  WindowSubscriber2.prototype.notifyError = function(error) {
    this._error(error);
  };
  WindowSubscriber2.prototype.notifyComplete = function(innerSub) {
    this.openWindow(innerSub);
  };
  WindowSubscriber2.prototype._next = function(value) {
    this.window.next(value);
  };
  WindowSubscriber2.prototype._error = function(err) {
    this.window.error(err);
    this.destination.error(err);
    this.unsubscribeClosingNotification();
  };
  WindowSubscriber2.prototype._complete = function() {
    this.window.complete();
    this.destination.complete();
    this.unsubscribeClosingNotification();
  };
  WindowSubscriber2.prototype.unsubscribeClosingNotification = function() {
    if (this.closingNotification) {
      this.closingNotification.unsubscribe();
    }
  };
  WindowSubscriber2.prototype.openWindow = function(innerSub) {
    if (innerSub === void 0) {
      innerSub = null;
    }
    if (innerSub) {
      this.remove(innerSub);
      innerSub.unsubscribe();
    }
    var prevWindow = this.window;
    if (prevWindow) {
      prevWindow.complete();
    }
    var window2 = this.window = new Subject();
    this.destination.next(window2);
    var closingNotifier;
    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (e2) {
      this.destination.error(e2);
      this.window.error(e2);
      return;
    }
    this.add(this.closingNotification = subscribeToResult(this, closingNotifier));
  };
  return WindowSubscriber2;
}(OuterSubscriber);
function withLatestFrom() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return function(source) {
    var project;
    if (typeof args[args.length - 1] === "function") {
      project = args.pop();
    }
    var observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}
var WithLatestFromOperator = /* @__PURE__ */ function() {
  function WithLatestFromOperator2(observables, project) {
    this.observables = observables;
    this.project = project;
  }
  WithLatestFromOperator2.prototype.call = function(subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  };
  return WithLatestFromOperator2;
}();
var WithLatestFromSubscriber = /* @__PURE__ */ function(_super) {
  tslibExports$1.__extends(WithLatestFromSubscriber2, _super);
  function WithLatestFromSubscriber2(destination, observables, project) {
    var _this = _super.call(this, destination) || this;
    _this.observables = observables;
    _this.project = project;
    _this.toRespond = [];
    var len = observables.length;
    _this.values = new Array(len);
    for (var i = 0; i < len; i++) {
      _this.toRespond.push(i);
    }
    for (var i = 0; i < len; i++) {
      var observable2 = observables[i];
      _this.add(subscribeToResult(_this, observable2, void 0, i));
    }
    return _this;
  }
  WithLatestFromSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
    this.values[outerIndex] = innerValue;
    var toRespond = this.toRespond;
    if (toRespond.length > 0) {
      var found = toRespond.indexOf(outerIndex);
      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  };
  WithLatestFromSubscriber2.prototype.notifyComplete = function() {
  };
  WithLatestFromSubscriber2.prototype._next = function(value) {
    if (this.toRespond.length === 0) {
      var args = [value].concat(this.values);
      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  };
  WithLatestFromSubscriber2.prototype._tryProject = function(args) {
    var result;
    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  };
  return WithLatestFromSubscriber2;
}(OuterSubscriber);
function zip() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return function zipOperatorFunction(source) {
    return source.lift.call(zip$1.apply(void 0, [source].concat(observables)));
  };
}
function zipAll(project) {
  return function(source) {
    return source.lift(new ZipOperator(project));
  };
}
const operators = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit,
  auditTime,
  buffer,
  bufferCount,
  bufferTime,
  bufferToggle,
  bufferWhen,
  catchError,
  combineAll,
  combineLatest,
  concat,
  concatAll,
  concatMap,
  concatMapTo,
  count,
  debounce,
  debounceTime,
  defaultIfEmpty,
  delay,
  delayWhen,
  dematerialize,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  elementAt,
  endWith,
  every,
  exhaust,
  exhaustMap,
  expand,
  filter,
  finalize,
  find,
  findIndex,
  first,
  flatMap,
  groupBy,
  ignoreElements,
  isEmpty,
  last,
  map,
  mapTo,
  materialize,
  max,
  merge: merge2,
  mergeAll,
  mergeMap,
  mergeMapTo,
  mergeScan,
  min,
  multicast,
  observeOn,
  onErrorResumeNext,
  pairwise,
  partition,
  pluck,
  publish,
  publishBehavior,
  publishLast,
  publishReplay,
  race,
  reduce,
  refCount,
  repeat: repeat2,
  repeatWhen,
  retry,
  retryWhen,
  sample,
  sampleTime,
  scan,
  sequenceEqual,
  share,
  shareReplay,
  single,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  startWith,
  subscribeOn,
  switchAll,
  switchMap,
  switchMapTo,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
  throttle,
  throttleTime,
  throwIfEmpty,
  timeInterval,
  timeout,
  timeoutWith,
  timestamp,
  toArray,
  window: window$1,
  windowCount,
  windowTime,
  windowToggle,
  windowWhen,
  withLatestFrom,
  zip,
  zipAll
}, Symbol.toStringTag, { value: "Module" }));
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(operators);
var WalletSDKConnection$1 = {};
var ClientMessage = {};
Object.defineProperty(ClientMessage, "__esModule", { value: true });
ClientMessage.ClientMessagePublishEvent = ClientMessage.ClientMessageSetSessionConfig = ClientMessage.ClientMessageGetSessionConfig = ClientMessage.ClientMessageIsLinked = ClientMessage.ClientMessageHostSession = void 0;
function ClientMessageHostSession(params) {
  return Object.assign({ type: "HostSession" }, params);
}
ClientMessage.ClientMessageHostSession = ClientMessageHostSession;
function ClientMessageIsLinked(params) {
  return Object.assign({ type: "IsLinked" }, params);
}
ClientMessage.ClientMessageIsLinked = ClientMessageIsLinked;
function ClientMessageGetSessionConfig(params) {
  return Object.assign({ type: "GetSessionConfig" }, params);
}
ClientMessage.ClientMessageGetSessionConfig = ClientMessageGetSessionConfig;
function ClientMessageSetSessionConfig(params) {
  return Object.assign({ type: "SetSessionConfig" }, params);
}
ClientMessage.ClientMessageSetSessionConfig = ClientMessageSetSessionConfig;
function ClientMessagePublishEvent(params) {
  return Object.assign({ type: "PublishEvent" }, params);
}
ClientMessage.ClientMessagePublishEvent = ClientMessagePublishEvent;
var RxWebSocket = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.RxWebSocket = exports2.ConnectionState = void 0;
  const rxjs_12 = require$$2$1;
  const operators_12 = require$$3;
  var ConnectionState;
  (function(ConnectionState2) {
    ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
  })(ConnectionState = exports2.ConnectionState || (exports2.ConnectionState = {}));
  class RxWebSocket2 {
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(url, WebSocketClass = WebSocket) {
      this.WebSocketClass = WebSocketClass;
      this.webSocket = null;
      this.connectionStateSubject = new rxjs_12.BehaviorSubject(ConnectionState.DISCONNECTED);
      this.incomingDataSubject = new rxjs_12.Subject();
      this.url = url.replace(/^http/, "ws");
    }
    /**
     * Make a websocket connection
     * @returns an Observable that completes when connected
     */
    connect() {
      if (this.webSocket) {
        return (0, rxjs_12.throwError)(new Error("webSocket object is not null"));
      }
      return new rxjs_12.Observable((obs) => {
        let webSocket;
        try {
          this.webSocket = webSocket = new this.WebSocketClass(this.url);
        } catch (err) {
          obs.error(err);
          return;
        }
        this.connectionStateSubject.next(ConnectionState.CONNECTING);
        webSocket.onclose = (evt) => {
          this.clearWebSocket();
          obs.error(new Error(`websocket error ${evt.code}: ${evt.reason}`));
          this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
        };
        webSocket.onopen = (_2) => {
          obs.next();
          obs.complete();
          this.connectionStateSubject.next(ConnectionState.CONNECTED);
        };
        webSocket.onmessage = (evt) => {
          this.incomingDataSubject.next(evt.data);
        };
      }).pipe((0, operators_12.take)(1));
    }
    /**
     * Disconnect from server
     */
    disconnect() {
      const { webSocket } = this;
      if (!webSocket) {
        return;
      }
      this.clearWebSocket();
      this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
      try {
        webSocket.close();
      } catch (_a) {
      }
    }
    /**
     * Emit current connection state and subsequent changes
     * @returns an Observable for the connection state
     */
    get connectionState$() {
      return this.connectionStateSubject.asObservable();
    }
    /**
     * Emit incoming data from server
     * @returns an Observable for the data received
     */
    get incomingData$() {
      return this.incomingDataSubject.asObservable();
    }
    /**
     * Emit incoming JSON data from server. non-JSON data are ignored
     * @returns an Observable for parsed JSON data
     */
    get incomingJSONData$() {
      return this.incomingData$.pipe((0, operators_12.flatMap)((m2) => {
        let j2;
        try {
          j2 = JSON.parse(m2);
        } catch (err) {
          return (0, rxjs_12.empty)();
        }
        return (0, rxjs_12.of)(j2);
      }));
    }
    /**
     * Send data to server
     * @param data text to send
     */
    sendData(data) {
      const { webSocket } = this;
      if (!webSocket) {
        throw new Error("websocket is not connected");
      }
      webSocket.send(data);
    }
    clearWebSocket() {
      const { webSocket } = this;
      if (!webSocket) {
        return;
      }
      this.webSocket = null;
      webSocket.onclose = null;
      webSocket.onerror = null;
      webSocket.onmessage = null;
      webSocket.onopen = null;
    }
  }
  exports2.RxWebSocket = RxWebSocket2;
})(RxWebSocket);
var ServerMessage = {};
Object.defineProperty(ServerMessage, "__esModule", { value: true });
ServerMessage.isServerMessageFail = void 0;
function isServerMessageFail(msg) {
  return msg && msg.type === "Fail" && typeof msg.id === "number" && typeof msg.sessionId === "string" && typeof msg.error === "string";
}
ServerMessage.isServerMessageFail = isServerMessageFail;
Object.defineProperty(WalletSDKConnection$1, "__esModule", { value: true });
WalletSDKConnection$1.WalletSDKConnection = void 0;
const rxjs_1$1 = require$$2$1;
const operators_1$1 = require$$3;
const Session_1$1 = Session$1;
const types_1$1 = types$2;
const ClientMessage_1 = ClientMessage;
const DiagnosticLogger_1$1 = DiagnosticLogger;
const RxWebSocket_1 = RxWebSocket;
const ServerMessage_1 = ServerMessage;
const HEARTBEAT_INTERVAL = 1e4;
const REQUEST_TIMEOUT = 6e4;
class WalletSDKConnection {
  /**
   * Constructor
   * @param sessionId Session ID
   * @param sessionKey Session Key
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(sessionId, sessionKey, linkAPIUrl, diagnostic, WebSocketClass = WebSocket) {
    this.sessionId = sessionId;
    this.sessionKey = sessionKey;
    this.diagnostic = diagnostic;
    this.subscriptions = new rxjs_1$1.Subscription();
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = (0, types_1$1.IntNumber)(1);
    this.connectedSubject = new rxjs_1$1.BehaviorSubject(false);
    this.linkedSubject = new rxjs_1$1.BehaviorSubject(false);
    this.sessionConfigSubject = new rxjs_1$1.ReplaySubject(1);
    const ws = new RxWebSocket_1.RxWebSocket(linkAPIUrl + "/rpc", WebSocketClass);
    this.ws = ws;
    this.subscriptions.add(ws.connectionState$.pipe(
      (0, operators_1$1.tap)((state2) => {
        var _a;
        return (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.CONNECTED_STATE_CHANGE, {
          state: state2,
          sessionIdHash: Session_1$1.Session.hash(sessionId)
        });
      }),
      // ignore initial DISCONNECTED state
      (0, operators_1$1.skip)(1),
      // if DISCONNECTED and not destroyed
      (0, operators_1$1.filter)((cs) => cs === RxWebSocket_1.ConnectionState.DISCONNECTED && !this.destroyed),
      // wait 5 seconds
      (0, operators_1$1.delay)(5e3),
      // check whether it's destroyed again
      (0, operators_1$1.filter)((_2) => !this.destroyed),
      // reconnect
      (0, operators_1$1.flatMap)((_2) => ws.connect()),
      (0, operators_1$1.retry)()
    ).subscribe());
    this.subscriptions.add(ws.connectionState$.pipe(
      // ignore initial DISCONNECTED and CONNECTING states
      (0, operators_1$1.skip)(2),
      (0, operators_1$1.switchMap)((cs) => (0, rxjs_1$1.iif)(
        () => cs === RxWebSocket_1.ConnectionState.CONNECTED,
        // if CONNECTED, authenticate, and then check link status
        this.authenticate().pipe((0, operators_1$1.tap)((_2) => this.sendIsLinked()), (0, operators_1$1.tap)((_2) => this.sendGetSessionConfig()), (0, operators_1$1.map)((_2) => true)),
        // if not CONNECTED, emit false immediately
        (0, rxjs_1$1.of)(false)
      )),
      (0, operators_1$1.distinctUntilChanged)(),
      (0, operators_1$1.catchError)((_2) => (0, rxjs_1$1.of)(false))
    ).subscribe((connected) => this.connectedSubject.next(connected)));
    this.subscriptions.add(ws.connectionState$.pipe(
      // ignore initial DISCONNECTED state
      (0, operators_1$1.skip)(1),
      (0, operators_1$1.switchMap)((cs) => (0, rxjs_1$1.iif)(
        () => cs === RxWebSocket_1.ConnectionState.CONNECTED,
        // if CONNECTED, start the heartbeat timer
        (0, rxjs_1$1.timer)(0, HEARTBEAT_INTERVAL)
      ))
    ).subscribe((i) => (
      // first timer event updates lastHeartbeat timestamp
      // subsequent calls send heartbeat message
      i === 0 ? this.updateLastHeartbeat() : this.heartbeat()
    )));
    this.subscriptions.add(ws.incomingData$.pipe((0, operators_1$1.filter)((m2) => m2 === "h")).subscribe((_2) => this.updateLastHeartbeat()));
    this.subscriptions.add(ws.incomingJSONData$.pipe((0, operators_1$1.filter)((m2) => ["IsLinkedOK", "Linked"].includes(m2.type))).subscribe((m2) => {
      var _a;
      const msg = m2;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.LINKED, {
        sessionIdHash: Session_1$1.Session.hash(sessionId),
        linked: msg.linked,
        type: m2.type,
        onlineGuests: msg.onlineGuests
      });
      this.linkedSubject.next(msg.linked || msg.onlineGuests > 0);
    }));
    this.subscriptions.add(ws.incomingJSONData$.pipe((0, operators_1$1.filter)((m2) => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(m2.type))).subscribe((m2) => {
      var _a;
      const msg = m2;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.SESSION_CONFIG_RECEIVED, {
        sessionIdHash: Session_1$1.Session.hash(sessionId),
        metadata_keys: msg && msg.metadata ? Object.keys(msg.metadata) : void 0
      });
      this.sessionConfigSubject.next({
        webhookId: msg.webhookId,
        webhookUrl: msg.webhookUrl,
        metadata: msg.metadata
      });
    }));
  }
  /**
   * Make a connection to the server
   */
  connect() {
    var _a;
    if (this.destroyed) {
      throw new Error("instance is destroyed");
    }
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: Session_1$1.Session.hash(this.sessionId)
    });
    this.ws.connect().subscribe();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    var _a;
    this.subscriptions.unsubscribe();
    this.ws.disconnect();
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1$1.EVENTS.DISCONNECTED, {
      sessionIdHash: Session_1$1.Session.hash(this.sessionId)
    });
    this.destroyed = true;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  /**
   * Emit true if connected and authenticated, else false
   * @returns an Observable
   */
  get connected$() {
    return this.connectedSubject.asObservable();
  }
  /**
   * Emit once connected
   * @returns an Observable
   */
  get onceConnected$() {
    return this.connected$.pipe((0, operators_1$1.filter)((v2) => v2), (0, operators_1$1.take)(1), (0, operators_1$1.map)(() => void 0));
  }
  /**
   * Emit true if linked (a guest has joined before)
   * @returns an Observable
   */
  get linked$() {
    return this.linkedSubject.asObservable();
  }
  /**
   * Emit once when linked
   * @returns an Observable
   */
  get onceLinked$() {
    return this.linked$.pipe((0, operators_1$1.filter)((v2) => v2), (0, operators_1$1.take)(1), (0, operators_1$1.map)(() => void 0));
  }
  /**
   * Emit current session config if available, and subsequent updates
   * @returns an Observable for the session config
   */
  get sessionConfig$() {
    return this.sessionConfigSubject.asObservable();
  }
  /**
   * Emit incoming Event messages
   * @returns an Observable for the messages
   */
  get incomingEvent$() {
    return this.ws.incomingJSONData$.pipe((0, operators_1$1.filter)((m2) => {
      if (m2.type !== "Event") {
        return false;
      }
      const sme = m2;
      return typeof sme.sessionId === "string" && typeof sme.eventId === "string" && typeof sme.event === "string" && typeof sme.data === "string";
    }), (0, operators_1$1.map)((m2) => m2));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns an Observable that completes when successful
   */
  setSessionMetadata(key, value) {
    const message = (0, ClientMessage_1.ClientMessageSetSessionConfig)({
      id: (0, types_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      metadata: { [key]: value }
    });
    return this.onceConnected$.pipe((0, operators_1$1.flatMap)((_2) => this.makeRequest(message)), (0, operators_1$1.map)((res) => {
      if ((0, ServerMessage_1.isServerMessageFail)(res)) {
        throw new Error(res.error || "failed to set session metadata");
      }
    }));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param data event data
   * @param callWebhook whether the webhook should be invoked
   * @returns an Observable that emits event ID when successful
   */
  publishEvent(event, data, callWebhook = false) {
    const message = (0, ClientMessage_1.ClientMessagePublishEvent)({
      id: (0, types_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      event,
      data,
      callWebhook
    });
    return this.onceLinked$.pipe((0, operators_1$1.flatMap)((_2) => this.makeRequest(message)), (0, operators_1$1.map)((res) => {
      if ((0, ServerMessage_1.isServerMessageFail)(res)) {
        throw new Error(res.error || "failed to publish event");
      }
      return res.eventId;
    }));
  }
  sendData(message) {
    this.ws.sendData(JSON.stringify(message));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch (_a) {
    }
  }
  makeRequest(message, timeout2 = REQUEST_TIMEOUT) {
    const reqId = message.id;
    try {
      this.sendData(message);
    } catch (err) {
      return (0, rxjs_1$1.throwError)(err);
    }
    return this.ws.incomingJSONData$.pipe((0, operators_1$1.timeoutWith)(timeout2, (0, rxjs_1$1.throwError)(new Error(`request ${reqId} timed out`))), (0, operators_1$1.filter)((m2) => m2.id === reqId), (0, operators_1$1.take)(1));
  }
  authenticate() {
    const msg = (0, ClientMessage_1.ClientMessageHostSession)({
      id: (0, types_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      sessionKey: this.sessionKey
    });
    return this.makeRequest(msg).pipe((0, operators_1$1.map)((res) => {
      if ((0, ServerMessage_1.isServerMessageFail)(res)) {
        throw new Error(res.error || "failed to authentcate");
      }
    }));
  }
  sendIsLinked() {
    const msg = (0, ClientMessage_1.ClientMessageIsLinked)({
      id: (0, types_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(msg);
  }
  sendGetSessionConfig() {
    const msg = (0, ClientMessage_1.ClientMessageGetSessionConfig)({
      id: (0, types_1$1.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(msg);
  }
}
WalletSDKConnection$1.WalletSDKConnection = WalletSDKConnection;
var WalletUIError$1 = {};
Object.defineProperty(WalletUIError$1, "__esModule", { value: true });
WalletUIError$1.WalletUIError = void 0;
class WalletUIError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
  }
}
WalletUIError$1.WalletUIError = WalletUIError;
WalletUIError.UserRejectedRequest = new WalletUIError("User rejected request");
WalletUIError.SwitchEthereumChainUnsupportedChainId = new WalletUIError("Unsupported chainId", 4902);
var aes256gcm$1 = {};
Object.defineProperty(aes256gcm$1, "__esModule", { value: true });
aes256gcm$1.decrypt = aes256gcm$1.encrypt = void 0;
const util_1$3 = util$5;
async function encrypt(plainText, secret) {
  if (secret.length !== 64)
    throw Error(`secret must be 256 bits`);
  const ivBytes = crypto.getRandomValues(new Uint8Array(12));
  const secretKey = await crypto.subtle.importKey("raw", (0, util_1$3.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
  const enc = new TextEncoder();
  const encryptedResult = await window.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: ivBytes
  }, secretKey, enc.encode(plainText));
  const tagLength = 16;
  const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
  const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
  const authTagBytes = new Uint8Array(authTag);
  const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
  const concatted = new Uint8Array([
    ...ivBytes,
    ...authTagBytes,
    ...encryptedPlaintextBytes
  ]);
  return (0, util_1$3.uint8ArrayToHex)(concatted);
}
aes256gcm$1.encrypt = encrypt;
function decrypt(cipherText, secret) {
  if (secret.length !== 64)
    throw Error(`secret must be 256 bits`);
  return new Promise((resolve, reject) => {
    void async function() {
      const secretKey = await crypto.subtle.importKey("raw", (0, util_1$3.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
      const encrypted = (0, util_1$3.hexStringToUint8Array)(cipherText);
      const ivBytes = encrypted.slice(0, 12);
      const authTagBytes = encrypted.slice(12, 28);
      const encryptedPlaintextBytes = encrypted.slice(28);
      const concattedBytes = new Uint8Array([
        ...encryptedPlaintextBytes,
        ...authTagBytes
      ]);
      const algo = {
        name: "AES-GCM",
        iv: new Uint8Array(ivBytes)
      };
      try {
        const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
        const decoder = new TextDecoder();
        resolve(decoder.decode(decrypted));
      } catch (err) {
        reject(err);
      }
    }();
  });
}
aes256gcm$1.decrypt = decrypt;
var Web3Method = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.Web3Method = void 0;
  (function(Web3Method2) {
    Web3Method2["requestEthereumAccounts"] = "requestEthereumAccounts";
    Web3Method2["signEthereumMessage"] = "signEthereumMessage";
    Web3Method2["signEthereumTransaction"] = "signEthereumTransaction";
    Web3Method2["submitEthereumTransaction"] = "submitEthereumTransaction";
    Web3Method2["ethereumAddressFromSignedMessage"] = "ethereumAddressFromSignedMessage";
    Web3Method2["scanQRCode"] = "scanQRCode";
    Web3Method2["generic"] = "generic";
    Web3Method2["childRequestEthereumAccounts"] = "childRequestEthereumAccounts";
    Web3Method2["addEthereumChain"] = "addEthereumChain";
    Web3Method2["switchEthereumChain"] = "switchEthereumChain";
    Web3Method2["makeEthereumJSONRPCRequest"] = "makeEthereumJSONRPCRequest";
    Web3Method2["watchAsset"] = "watchAsset";
    Web3Method2["selectProvider"] = "selectProvider";
  })(exports2.Web3Method || (exports2.Web3Method = {}));
})(Web3Method);
var Web3RequestCanceledMessage$1 = {};
var RelayMessage = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.RelayMessageType = void 0;
  (function(RelayMessageType) {
    RelayMessageType["SESSION_ID_REQUEST"] = "SESSION_ID_REQUEST";
    RelayMessageType["SESSION_ID_RESPONSE"] = "SESSION_ID_RESPONSE";
    RelayMessageType["LINKED"] = "LINKED";
    RelayMessageType["UNLINKED"] = "UNLINKED";
    RelayMessageType["WEB3_REQUEST"] = "WEB3_REQUEST";
    RelayMessageType["WEB3_REQUEST_CANCELED"] = "WEB3_REQUEST_CANCELED";
    RelayMessageType["WEB3_RESPONSE"] = "WEB3_RESPONSE";
  })(exports2.RelayMessageType || (exports2.RelayMessageType = {}));
})(RelayMessage);
Object.defineProperty(Web3RequestCanceledMessage$1, "__esModule", { value: true });
Web3RequestCanceledMessage$1.Web3RequestCanceledMessage = void 0;
const RelayMessage_1$2 = RelayMessage;
function Web3RequestCanceledMessage(id) {
  return { type: RelayMessage_1$2.RelayMessageType.WEB3_REQUEST_CANCELED, id };
}
Web3RequestCanceledMessage$1.Web3RequestCanceledMessage = Web3RequestCanceledMessage;
var Web3RequestMessage$1 = {};
Object.defineProperty(Web3RequestMessage$1, "__esModule", { value: true });
Web3RequestMessage$1.Web3RequestMessage = void 0;
const RelayMessage_1$1 = RelayMessage;
function Web3RequestMessage(params) {
  return Object.assign({ type: RelayMessage_1$1.RelayMessageType.WEB3_REQUEST }, params);
}
Web3RequestMessage$1.Web3RequestMessage = Web3RequestMessage;
var Web3Response = {};
Object.defineProperty(Web3Response, "__esModule", { value: true });
Web3Response.EthereumAddressFromSignedMessageResponse = Web3Response.SubmitEthereumTransactionResponse = Web3Response.SignEthereumTransactionResponse = Web3Response.SignEthereumMessageResponse = Web3Response.isRequestEthereumAccountsResponse = Web3Response.SelectProviderResponse = Web3Response.WatchAssetReponse = Web3Response.RequestEthereumAccountsResponse = Web3Response.SwitchEthereumChainResponse = Web3Response.AddEthereumChainResponse = Web3Response.ErrorResponse = void 0;
const Web3Method_1$1 = Web3Method;
function ErrorResponse(method, errorMessage, errorCode) {
  return { method, errorMessage, errorCode };
}
Web3Response.ErrorResponse = ErrorResponse;
function AddEthereumChainResponse(addResponse) {
  return {
    method: Web3Method_1$1.Web3Method.addEthereumChain,
    result: addResponse
  };
}
Web3Response.AddEthereumChainResponse = AddEthereumChainResponse;
function SwitchEthereumChainResponse(switchResponse) {
  return {
    method: Web3Method_1$1.Web3Method.switchEthereumChain,
    result: switchResponse
  };
}
Web3Response.SwitchEthereumChainResponse = SwitchEthereumChainResponse;
function RequestEthereumAccountsResponse(addresses) {
  return { method: Web3Method_1$1.Web3Method.requestEthereumAccounts, result: addresses };
}
Web3Response.RequestEthereumAccountsResponse = RequestEthereumAccountsResponse;
function WatchAssetReponse(success) {
  return { method: Web3Method_1$1.Web3Method.watchAsset, result: success };
}
Web3Response.WatchAssetReponse = WatchAssetReponse;
function SelectProviderResponse(selectedProviderKey) {
  return { method: Web3Method_1$1.Web3Method.selectProvider, result: selectedProviderKey };
}
Web3Response.SelectProviderResponse = SelectProviderResponse;
function isRequestEthereumAccountsResponse(res) {
  return res && res.method === Web3Method_1$1.Web3Method.requestEthereumAccounts;
}
Web3Response.isRequestEthereumAccountsResponse = isRequestEthereumAccountsResponse;
function SignEthereumMessageResponse(signature) {
  return { method: Web3Method_1$1.Web3Method.signEthereumMessage, result: signature };
}
Web3Response.SignEthereumMessageResponse = SignEthereumMessageResponse;
function SignEthereumTransactionResponse(signedData) {
  return { method: Web3Method_1$1.Web3Method.signEthereumTransaction, result: signedData };
}
Web3Response.SignEthereumTransactionResponse = SignEthereumTransactionResponse;
function SubmitEthereumTransactionResponse(txHash) {
  return { method: Web3Method_1$1.Web3Method.submitEthereumTransaction, result: txHash };
}
Web3Response.SubmitEthereumTransactionResponse = SubmitEthereumTransactionResponse;
function EthereumAddressFromSignedMessageResponse(address) {
  return {
    method: Web3Method_1$1.Web3Method.ethereumAddressFromSignedMessage,
    result: address
  };
}
Web3Response.EthereumAddressFromSignedMessageResponse = EthereumAddressFromSignedMessageResponse;
var Web3ResponseMessage$1 = {};
Object.defineProperty(Web3ResponseMessage$1, "__esModule", { value: true });
Web3ResponseMessage$1.isWeb3ResponseMessage = Web3ResponseMessage$1.Web3ResponseMessage = void 0;
const RelayMessage_1 = RelayMessage;
function Web3ResponseMessage(params) {
  return Object.assign({ type: RelayMessage_1.RelayMessageType.WEB3_RESPONSE }, params);
}
Web3ResponseMessage$1.Web3ResponseMessage = Web3ResponseMessage;
function isWeb3ResponseMessage(msg) {
  return msg && msg.type === RelayMessage_1.RelayMessageType.WEB3_RESPONSE;
}
Web3ResponseMessage$1.isWeb3ResponseMessage = isWeb3ResponseMessage;
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o2, k22, { enumerable: true, get: function() {
    return m2[k2];
  } });
} : function(o2, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o2[k22] = m2[k2];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
  Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
} : function(o2, v2) {
  o2["default"] = v2;
});
var __decorate = commonjsGlobal && commonjsGlobal.__decorate || function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(WalletSDKRelay$1, "__esModule", { value: true });
WalletSDKRelay$1.WalletSDKRelay = void 0;
const bind_decorator_1 = __importDefault(bindDecorator);
const eth_rpc_errors_1 = dist$1;
const rxjs_1 = require$$2$1;
const operators_1 = require$$3;
const DiagnosticLogger_1 = DiagnosticLogger;
const WalletSDKConnection_1 = WalletSDKConnection$1;
const WalletUIError_1 = WalletUIError$1;
const types_1 = types$2;
const util_1$2 = util$5;
const aes256gcm = __importStar(aes256gcm$1);
const Session_1 = Session$1;
const WalletSDKRelayAbstract_1 = WalletSDKRelayAbstract$1;
const Web3Method_1 = Web3Method;
const Web3RequestCanceledMessage_1 = Web3RequestCanceledMessage$1;
const Web3RequestMessage_1 = Web3RequestMessage$1;
const Web3Response_1 = Web3Response;
const Web3ResponseMessage_1 = Web3ResponseMessage$1;
class WalletSDKRelay extends WalletSDKRelayAbstract_1.WalletSDKRelayAbstract {
  constructor(options) {
    var _a;
    super();
    this.accountsCallback = null;
    this.chainCallback = null;
    this.dappDefaultChainSubject = new rxjs_1.BehaviorSubject(1);
    this.dappDefaultChain = 1;
    this.appName = "";
    this.appLogoUrl = null;
    this.subscriptions = new rxjs_1.Subscription();
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    this.options = options;
    const { session, ui, connection } = this.subscribe();
    this._session = session;
    this.connection = connection;
    this.relayEventManager = options.relayEventManager;
    if (options.diagnosticLogger && options.eventListener) {
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    }
    if (options.eventListener) {
      this.diagnostic = {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        log: options.eventListener.onEvent
      };
    } else {
      this.diagnostic = options.diagnosticLogger;
    }
    this._reloadOnDisconnect = (_a = options.reloadOnDisconnect) !== null && _a !== void 0 ? _a : true;
    this.ui = ui;
  }
  subscribe() {
    this.subscriptions.add(this.dappDefaultChainSubject.subscribe((chainId) => {
      if (this.dappDefaultChain !== chainId) {
        this.dappDefaultChain = chainId;
      }
    }));
    const session = Session_1.Session.load(this.storage) || new Session_1.Session(this.storage).save();
    const connection = new WalletSDKConnection_1.WalletSDKConnection(session.id, session.key, this.linkAPIUrl, this.diagnostic);
    this.subscriptions.add(connection.sessionConfig$.subscribe({
      next: (sessionConfig) => {
        this.onSessionConfigChanged(sessionConfig);
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "error while invoking session config callback"
        });
      }
    }));
    this.subscriptions.add(connection.incomingEvent$.pipe((0, operators_1.filter)((m2) => m2.event === "Web3Response")).subscribe({ next: this.handleIncomingEvent }));
    this.subscriptions.add(connection.linked$.pipe((0, operators_1.skip)(1), (0, operators_1.tap)((linked) => {
      var _a;
      this.isLinked = linked;
      const cachedAddresses = this.storage.getItem(WalletSDKRelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        this.session.linked = linked;
      }
      this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        const addresses = cachedAddresses.split(" ");
        const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
        if (addresses[0] !== "" && !linked && this.session.linked && !wasConnectedViaStandalone) {
          this.isUnlinkedErrorState = true;
          const sessionIdHash = this.getSessionIdHash();
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash
          });
        }
      }
    })).subscribe());
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => !!c2.metadata && c2.metadata.__destroyed === "1")).subscribe(() => {
      var _a;
      const alreadyDestroyed = connection.isDestroyed;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed,
        sessionIdHash: this.getSessionIdHash()
      });
      return this.resetAndReload();
    }));
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => c2.metadata && c2.metadata.WalletUsername !== void 0)).pipe((0, operators_1.mergeMap)((c2) => aes256gcm.decrypt(c2.metadata.WalletUsername, session.secret))).subscribe({
      next: (walletUsername) => {
        this.storage.setItem(WalletSDKRelayAbstract_1.WALLET_USER_NAME_KEY, walletUsername);
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "username"
        });
      }
    }));
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => c2.metadata && c2.metadata.AppVersion !== void 0)).pipe((0, operators_1.mergeMap)((c2) => aes256gcm.decrypt(c2.metadata.AppVersion, session.secret))).subscribe({
      next: (appVersion) => {
        this.storage.setItem(WalletSDKRelayAbstract_1.APP_VERSION_KEY, appVersion);
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appversion"
        });
      }
    }));
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => c2.metadata && c2.metadata.ChainId !== void 0 && c2.metadata.JsonRpcUrl !== void 0)).pipe((0, operators_1.mergeMap)((c2) => (0, rxjs_1.zip)(aes256gcm.decrypt(c2.metadata.ChainId, session.secret), aes256gcm.decrypt(c2.metadata.JsonRpcUrl, session.secret)))).pipe((0, operators_1.distinctUntilChanged)()).subscribe({
      next: ([chainId, jsonRpcUrl]) => {
        if (this.chainCallback) {
          this.chainCallback(chainId, jsonRpcUrl);
        }
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    }));
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => c2.metadata && c2.metadata.EthereumAddress !== void 0)).pipe((0, operators_1.mergeMap)((c2) => aes256gcm.decrypt(c2.metadata.EthereumAddress, session.secret))).subscribe({
      next: (selectedAddress) => {
        if (this.accountsCallback) {
          this.accountsCallback([selectedAddress]);
        }
        if (WalletSDKRelay.accountRequestCallbackIds.size > 0) {
          Array.from(WalletSDKRelay.accountRequestCallbackIds.values()).forEach((id) => {
            const message = (0, Web3ResponseMessage_1.Web3ResponseMessage)({
              id,
              response: (0, Web3Response_1.RequestEthereumAccountsResponse)([
                selectedAddress
              ])
            });
            this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
          });
          WalletSDKRelay.accountRequestCallbackIds.clear();
        }
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    }));
    this.subscriptions.add(connection.sessionConfig$.pipe((0, operators_1.filter)((c2) => c2.metadata && c2.metadata.AppSrc !== void 0)).pipe((0, operators_1.mergeMap)((c2) => aes256gcm.decrypt(c2.metadata.AppSrc, session.secret))).subscribe({
      next: (appSrc) => {
        this.ui.setAppSrc(appSrc);
      },
      error: () => {
        var _a;
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appSrc"
        });
      }
    }));
    const ui = this.options.uiConstructor({
      linkAPIUrl: this.options.linkAPIUrl,
      version: this.options.version,
      darkMode: this.options.darkMode,
      session,
      connected$: connection.connected$,
      chainId$: this.dappDefaultChainSubject
    });
    connection.connect();
    return { session, ui, connection };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    this.connection.setSessionMetadata("__destroyed", "1").pipe((0, operators_1.timeout)(1e3), (0, operators_1.catchError)((_2) => (0, rxjs_1.of)(null))).subscribe((_2) => {
      var _a, _b, _c;
      const isStandalone = this.ui.isStandalone();
      try {
        this.subscriptions.unsubscribe();
      } catch (err) {
        (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
          message: "Had error unsubscribing"
        });
      }
      (_b = this.diagnostic) === null || _b === void 0 ? void 0 : _b.log(DiagnosticLogger_1.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      });
      this.connection.destroy();
      const storedSession = Session_1.Session.load(this.storage);
      if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
        this.storage.clear();
      } else if (storedSession) {
        (_c = this.diagnostic) === null || _c === void 0 ? void 0 : _c.log(DiagnosticLogger_1.EVENTS.SKIPPED_CLEARING_SESSION, {
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: Session_1.Session.hash(storedSession.id)
        });
      }
      if (this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      if (this.accountsCallback) {
        this.accountsCallback([], true);
      }
      const { session, ui, connection } = this.subscribe();
      this._session = session;
      this.connection = connection;
      this.ui = ui;
      if (isStandalone && this.ui.setStandalone)
        this.ui.setStandalone(true);
      this.attachUI();
    }, (err) => {
      var _a;
      (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${err}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(appName, appLogoUrl) {
    this.appName = appName;
    this.appLogoUrl = appLogoUrl;
  }
  getStorageItem(key) {
    return this.storage.getItem(key);
  }
  get session() {
    return this._session;
  }
  setStorageItem(key, value) {
    this.storage.setItem(key, value);
  }
  signEthereumMessage(message, address, addPrefix, typedDataJson) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.signEthereumMessage,
      params: {
        message: (0, util_1$2.hexStringFromBuffer)(message, true),
        address,
        addPrefix,
        typedDataJson: typedDataJson || null
      }
    });
  }
  ethereumAddressFromSignedMessage(message, signature, addPrefix) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.ethereumAddressFromSignedMessage,
      params: {
        message: (0, util_1$2.hexStringFromBuffer)(message, true),
        signature: (0, util_1$2.hexStringFromBuffer)(signature, true),
        addPrefix
      }
    });
  }
  signEthereumTransaction(params) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: (0, util_1$2.bigIntStringFromBN)(params.weiValue),
        data: (0, util_1$2.hexStringFromBuffer)(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei) : null,
        maxFeePerGas: params.gasPriceInWei ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei) : null,
        maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei) : null,
        gasLimit: params.gasLimit ? (0, util_1$2.bigIntStringFromBN)(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: false
      }
    });
  }
  signAndSubmitEthereumTransaction(params) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        weiValue: (0, util_1$2.bigIntStringFromBN)(params.weiValue),
        data: (0, util_1$2.hexStringFromBuffer)(params.data, true),
        nonce: params.nonce,
        gasPriceInWei: params.gasPriceInWei ? (0, util_1$2.bigIntStringFromBN)(params.gasPriceInWei) : null,
        maxFeePerGas: params.maxFeePerGas ? (0, util_1$2.bigIntStringFromBN)(params.maxFeePerGas) : null,
        maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_1$2.bigIntStringFromBN)(params.maxPriorityFeePerGas) : null,
        gasLimit: params.gasLimit ? (0, util_1$2.bigIntStringFromBN)(params.gasLimit) : null,
        chainId: params.chainId,
        shouldSubmit: true
      }
    });
  }
  submitEthereumTransaction(signedTransaction, chainId) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.submitEthereumTransaction,
      params: {
        signedTransaction: (0, util_1$2.hexStringFromBuffer)(signedTransaction, true),
        chainId
      }
    });
  }
  scanQRCode(regExp) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.scanQRCode,
      params: { regExp }
    });
  }
  getQRCodeUrl() {
    return (0, util_1$2.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, false, this.options.version, this.dappDefaultChain);
  }
  genericRequest(data, action) {
    return this.sendRequest({
      method: Web3Method_1.Web3Method.generic,
      params: {
        action,
        data
      }
    });
  }
  sendGenericMessage(request) {
    return this.sendRequest(request);
  }
  sendRequest(request) {
    let hideSnackbarItem = null;
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    const promise = new Promise((resolve, reject) => {
      if (!this.ui.isStandalone()) {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload
          // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      if (this.ui.isStandalone()) {
        this.sendRequestStandalone(id, request);
      } else {
        this.publishWeb3RequestEvent(id, request);
      }
    });
    return { promise, cancel };
  }
  setConnectDisabled(disabled) {
    this.ui.setConnectDisabled(disabled);
  }
  setAccountsCallback(accountsCallback) {
    this.accountsCallback = accountsCallback;
  }
  setChainCallback(chainCallback) {
    this.chainCallback = chainCallback;
  }
  setDappDefaultChainCallback(chainId) {
    this.dappDefaultChainSubject.next(chainId);
  }
  publishWeb3RequestEvent(id, request) {
    var _a;
    const message = (0, Web3RequestMessage_1.Web3RequestMessage)({ id, request });
    const storedSession = Session_1.Session.load(this.storage);
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST, {
      eventId: message.id,
      method: `relay::${message.request.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
      isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
    });
    this.subscriptions.add(this.publishEvent("Web3Request", message, true).subscribe({
      next: (_2) => {
        var _a2;
        (_a2 = this.diagnostic) === null || _a2 === void 0 ? void 0 : _a2.log(DiagnosticLogger_1.EVENTS.WEB3_REQUEST_PUBLISHED, {
          eventId: message.id,
          method: `relay::${message.request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: storedSession ? Session_1.Session.hash(storedSession.id) : "",
          isSessionMismatched: ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) !== this._session.id).toString()
        });
      },
      error: (err) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id: message.id,
          response: {
            method: message.request.method,
            errorMessage: err.message
          }
        }));
      }
    }));
  }
  publishWeb3RequestCanceledEvent(id) {
    const message = (0, Web3RequestCanceledMessage_1.Web3RequestCanceledMessage)(id);
    this.subscriptions.add(this.publishEvent("Web3RequestCanceled", message, false).subscribe());
  }
  publishEvent(event, message, callWebhook) {
    const secret = this.session.secret;
    return new rxjs_1.Observable((subscriber) => {
      void aes256gcm.encrypt(JSON.stringify(Object.assign(Object.assign({}, message), { origin: location.origin })), secret).then((encrypted) => {
        subscriber.next(encrypted);
        subscriber.complete();
      });
    }).pipe((0, operators_1.mergeMap)((encrypted) => {
      return this.connection.publishEvent(event, encrypted, callWebhook);
    }));
  }
  handleIncomingEvent(event) {
    try {
      this.subscriptions.add((0, rxjs_1.from)(aes256gcm.decrypt(event.data, this.session.secret)).pipe((0, operators_1.map)((c2) => JSON.parse(c2))).subscribe({
        next: (json) => {
          const message = (0, Web3ResponseMessage_1.isWeb3ResponseMessage)(json) ? json : null;
          if (!message) {
            return;
          }
          this.handleWeb3ResponseMessage(message);
        },
        error: () => {
          var _a;
          (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent"
          });
        }
      }));
    } catch (_a) {
      return;
    }
  }
  handleWeb3ResponseMessage(message) {
    var _a;
    const { response } = message;
    (_a = this.diagnostic) === null || _a === void 0 ? void 0 : _a.log(DiagnosticLogger_1.EVENTS.WEB3_RESPONSE, {
      eventId: message.id,
      method: `relay::${response.method}`,
      sessionIdHash: this.getSessionIdHash()
    });
    if ((0, Web3Response_1.isRequestEthereumAccountsResponse)(response)) {
      WalletSDKRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
      WalletSDKRelay.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(message);
  }
  handleErrorResponse(id, method, error, errorCode) {
    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
      id,
      response: (0, Web3Response_1.ErrorResponse)(method, (error !== null && error !== void 0 ? error : WalletUIError_1.WalletUIError.UserRejectedRequest).message, errorCode)
    }));
  }
  invokeCallback(message) {
    const callback = this.relayEventManager.callbacks.get(message.id);
    if (callback) {
      callback(message.response);
      this.relayEventManager.callbacks.delete(message.id);
    }
  }
  requestEthereumAccounts() {
    const request = {
      method: Web3Method_1.Web3Method.requestEthereumAccounts,
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    };
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
    };
    const promise = new Promise((resolve, reject) => {
      var _a;
      this.relayEventManager.callbacks.set(id, (response) => {
        this.ui.hideRequestEthereumAccounts();
        if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      const userAgent = ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) || null;
      if (userAgent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        let location2;
        try {
          if ((0, util_1$2.isInIFrame)() && window.top) {
            location2 = window.top.location;
          } else {
            location2 = window.location;
          }
        } catch (e2) {
          location2 = window.location;
        }
        location2.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(location2.href)}`;
        return;
      }
      if (this.ui.inlineAccountsResponse()) {
        const onAccounts = (accounts) => {
          this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
            id,
            response: (0, Web3Response_1.RequestEthereumAccountsResponse)(accounts)
          }));
        };
        this.ui.requestEthereumAccounts({
          onCancel: cancel,
          onAccounts
        });
      } else {
        const err = eth_rpc_errors_1.ethErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => cancel(err)
        });
      }
      WalletSDKRelay.accountRequestCallbackIds.add(id);
      if (!this.ui.inlineAccountsResponse() && !this.ui.isStandalone()) {
        this.publishWeb3RequestEvent(id, request);
      }
    });
    return { promise, cancel };
  }
  selectProvider(providerOptions) {
    const request = {
      method: Web3Method_1.Web3Method.selectProvider,
      params: {
        providerOptions
      }
    };
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
    };
    const promise = new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      const _cancel = (_error) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.SelectProviderResponse)(types_1.ProviderType.Unselected)
        }));
      };
      const approve = (selectedProviderKey) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.SelectProviderResponse)(selectedProviderKey)
        }));
      };
      if (this.ui.selectProvider)
        this.ui.selectProvider({
          onApprove: approve,
          onCancel: _cancel,
          providerOptions
        });
    });
    return { cancel, promise };
  }
  watchAsset(type, address, symbol, decimals, image, chainId) {
    const request = {
      method: Web3Method_1.Web3Method.watchAsset,
      params: {
        type,
        options: {
          address,
          symbol,
          decimals,
          image
        },
        chainId
      }
    };
    let hideSnackbarItem = null;
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    if (!this.ui.inlineWatchAsset()) {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    const promise = new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      const _cancel = (_error) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.WatchAssetReponse)(false)
        }));
      };
      const approve = () => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.WatchAssetReponse)(true)
        }));
      };
      if (this.ui.inlineWatchAsset()) {
        this.ui.watchAsset({
          onApprove: approve,
          onCancel: _cancel,
          type,
          address,
          symbol,
          decimals,
          image,
          chainId
        });
      }
      if (!this.ui.inlineWatchAsset() && !this.ui.isStandalone()) {
        this.publishWeb3RequestEvent(id, request);
      }
    });
    return { cancel, promise };
  }
  addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
    const request = {
      method: Web3Method_1.Web3Method.addEthereumChain,
      params: {
        chainId,
        rpcUrls,
        blockExplorerUrls,
        chainName,
        iconUrls,
        nativeCurrency
      }
    };
    let hideSnackbarItem = null;
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
      hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
    };
    if (!this.ui.inlineAddEthereumChain(chainId)) {
      hideSnackbarItem = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: cancel,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      });
    }
    const promise = new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      const _cancel = (_error) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.AddEthereumChainResponse)({
            isApproved: false,
            rpcUrl: ""
          })
        }));
      };
      const approve = (rpcUrl) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.AddEthereumChainResponse)({ isApproved: true, rpcUrl })
        }));
      };
      if (this.ui.inlineAddEthereumChain(chainId)) {
        this.ui.addEthereumChain({
          onCancel: _cancel,
          onApprove: approve,
          chainId: request.params.chainId,
          rpcUrls: request.params.rpcUrls,
          blockExplorerUrls: request.params.blockExplorerUrls,
          chainName: request.params.chainName,
          iconUrls: request.params.iconUrls,
          nativeCurrency: request.params.nativeCurrency
        });
      }
      if (!this.ui.inlineAddEthereumChain(chainId) && !this.ui.isStandalone()) {
        this.publishWeb3RequestEvent(id, request);
      }
    });
    return { promise, cancel };
  }
  switchEthereumChain(chainId, address) {
    const request = {
      method: Web3Method_1.Web3Method.switchEthereumChain,
      params: Object.assign({ chainId }, { address })
    };
    const id = (0, util_1$2.randomBytesHex)(8);
    const cancel = (error) => {
      this.publishWeb3RequestCanceledEvent(id);
      this.handleErrorResponse(id, request.method, error);
    };
    const promise = new Promise((resolve, reject) => {
      this.relayEventManager.callbacks.set(id, (response) => {
        if (response.errorMessage && response.errorCode) {
          return reject(eth_rpc_errors_1.ethErrors.provider.custom({
            code: response.errorCode,
            message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
          }));
        } else if (response.errorMessage) {
          return reject(new Error(response.errorMessage));
        }
        resolve(response);
      });
      const _cancel = (error) => {
        if (typeof error === "number") {
          const errorCode = error;
          this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
            id,
            response: (0, Web3Response_1.ErrorResponse)(Web3Method_1.Web3Method.switchEthereumChain, WalletUIError_1.WalletUIError.SwitchEthereumChainUnsupportedChainId.message, errorCode)
          }));
        } else if (error instanceof WalletUIError_1.WalletUIError) {
          this.handleErrorResponse(id, Web3Method_1.Web3Method.switchEthereumChain, error, error.errorCode);
        } else {
          this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
            id,
            response: (0, Web3Response_1.SwitchEthereumChainResponse)({
              isApproved: false,
              rpcUrl: ""
            })
          }));
        }
      };
      const approve = (rpcUrl) => {
        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
          id,
          response: (0, Web3Response_1.SwitchEthereumChainResponse)({
            isApproved: true,
            rpcUrl
          })
        }));
      };
      this.ui.switchEthereumChain({
        onCancel: _cancel,
        onApprove: approve,
        chainId: request.params.chainId,
        address: request.params.address
      });
      if (!this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone()) {
        this.publishWeb3RequestEvent(id, request);
      }
    });
    return { promise, cancel };
  }
  inlineAddEthereumChain(chainId) {
    return this.ui.inlineAddEthereumChain(chainId);
  }
  getSessionIdHash() {
    return Session_1.Session.hash(this._session.id);
  }
  sendRequestStandalone(id, request) {
    const _cancel = (error) => {
      this.handleErrorResponse(id, request.method, error);
    };
    const onSuccess = (response) => {
      this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
        id,
        response
      }));
    };
    switch (request.method) {
      case Web3Method_1.Web3Method.signEthereumMessage:
        this.ui.signEthereumMessage({
          request,
          onSuccess,
          onCancel: _cancel
        });
        break;
      case Web3Method_1.Web3Method.signEthereumTransaction:
        this.ui.signEthereumTransaction({
          request,
          onSuccess,
          onCancel: _cancel
        });
        break;
      case Web3Method_1.Web3Method.submitEthereumTransaction:
        this.ui.submitEthereumTransaction({
          request,
          onSuccess,
          onCancel: _cancel
        });
        break;
      case Web3Method_1.Web3Method.ethereumAddressFromSignedMessage:
        this.ui.ethereumAddressFromSignedMessage({
          request,
          onSuccess
        });
        break;
      default:
        _cancel();
        break;
    }
  }
  onSessionConfigChanged(_nextSessionConfig) {
  }
}
WalletSDKRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();
__decorate([
  bind_decorator_1.default
], WalletSDKRelay.prototype, "resetAndReload", null);
__decorate([
  bind_decorator_1.default
], WalletSDKRelay.prototype, "handleIncomingEvent", null);
WalletSDKRelay$1.WalletSDKRelay = WalletSDKRelay;
var WalletSDKRelayEventManager$1 = {};
Object.defineProperty(WalletSDKRelayEventManager$1, "__esModule", { value: true });
WalletSDKRelayEventManager$1.WalletSDKRelayEventManager = void 0;
const util_1$1 = util$5;
class WalletSDKRelayEventManager {
  constructor() {
    this._nextRequestId = 0;
    this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const id = this._nextRequestId;
    const idStr = (0, util_1$1.prepend0x)(id.toString(16));
    const callback = this.callbacks.get(idStr);
    if (callback) {
      this.callbacks.delete(idStr);
    }
    return id;
  }
}
WalletSDKRelayEventManager$1.WalletSDKRelayEventManager = WalletSDKRelayEventManager;
const name = "@coinbase/wallet-sdk";
const version = "3.6.4";
const description = "Coinbase Wallet JavaScript SDK";
const keywords = [
  "cipher",
  "cipherbrowser",
  "coinbase",
  "coinbasewallet",
  "eth",
  "ether",
  "ethereum",
  "etherium",
  "injection",
  "toshi",
  "wallet",
  "walletlink",
  "web3"
];
const main = "dist/index.js";
const types = "dist/index.d.ts";
const repository = "https://github.com/coinbase/coinbase-wallet-sdk.git";
const author = "Coinbase, Inc.";
const license = "Apache-2.0";
const scripts = {
  "pretest:unit": "node compile-assets.js",
  "test:unit": "jest",
  "test:unit:coverage": "yarn test:unit && open coverage/lcov-report/index.html",
  "test:karma": "yarn build-npm && karma start",
  prebuild: `rm -rf ./build && node -p "'export const LIB_VERSION = ' + JSON.stringify(require('./package.json').version) + ';'" > src/version.ts`,
  build: "node compile-assets.js && webpack --config webpack.config.js",
  "build-npm": "tsc -p ./tsconfig.build.json",
  "build:dev": "export LINK_API_URL='http://localhost:3000'; yarn build",
  "build:dev:watch": "nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --exec 'yarn build:dev'",
  "build:prod": `yarn prebuild && yarn build && yarn build-npm && cp ./package.json ../../README.md ./LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak 's|  "private": true,||g' build/npm/package.json && rm -f build/npm/package.json.bak`,
  "lint:types": "tsc --noEmit",
  "lint:prettier": 'prettier --check "{src,__tests__}/**/*.(js|ts|tsx)"',
  "lint:eslint": "eslint ./src --ext .ts,.tsx",
  lint: "yarn lint:eslint && yarn lint:types && yarn lint:prettier",
  "fix:eslint": "yarn lint:eslint --fix",
  "fix:prettier": "prettier . --write",
  release: "./scripts/release.sh"
};
const dependencies = {
  "@metamask/safe-event-emitter": "2.0.0",
  "@solana/web3.js": "^1.70.1",
  "bind-decorator": "^1.0.11",
  "bn.js": "^5.1.1",
  buffer: "^6.0.3",
  clsx: "^1.1.0",
  "eth-block-tracker": "4.4.3",
  "eth-json-rpc-filters": "5.1.0",
  "eth-rpc-errors": "4.0.2",
  "json-rpc-engine": "6.1.0",
  keccak: "^3.0.1",
  preact: "^10.5.9",
  qs: "^6.10.3",
  rxjs: "^6.6.3",
  "sha.js": "^2.4.11",
  "stream-browserify": "^3.0.0",
  util: "^0.12.4"
};
const devDependencies = {
  "@babel/core": "^7.17.9",
  "@babel/plugin-proposal-decorators": "^7.17.9",
  "@babel/plugin-transform-react-jsx": "^7.17.3",
  "@babel/preset-env": "^7.16.11",
  "@babel/preset-typescript": "^7.16.7",
  "@peculiar/webcrypto": "^1.3.3",
  "@testing-library/jest-dom": "^5.16.4",
  "@testing-library/preact": "^2.0.1",
  "@types/bn.js": "^4.11.6",
  "@types/jest": "^27.4.1",
  "@types/node": "^14.14.20",
  "@types/qs": "^6.9.7",
  "@types/sha.js": "^2.4.0",
  "@typescript-eslint/eslint-plugin": "^5.7.0",
  "@typescript-eslint/eslint-plugin-tslint": "^5.7.0",
  "@typescript-eslint/parser": "^5.7.0",
  "babel-jest": "^27.5.1",
  browserify: "17.0.0",
  "copy-webpack-plugin": "^6.4.1",
  "core-js": "^3.8.2",
  eslint: "^8.4.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-import": "^2.25.3",
  "eslint-plugin-preact": "^0.1.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  jasmine: "3.8.0",
  jest: "^27.5.1",
  "jest-chrome": "^0.7.2",
  "jest-websocket-mock": "^2.3.0",
  karma: "^6.4.0",
  "karma-browserify": "8.1.0",
  "karma-chrome-launcher": "^3.1.0",
  "karma-jasmine": "^4.0.1",
  nodemon: "^2.0.6",
  prettier: "^2.5.1",
  "raw-loader": "^4.0.2",
  "regenerator-runtime": "^0.13.7",
  sass: "^1.50.0",
  svgo: "^2.8.0",
  "ts-jest": "^27.1.4",
  "ts-loader": "^8.0.13",
  "ts-node": "^10.7.0",
  tslib: "^2.0.3",
  typescript: "^4.1.3",
  watchify: "4.0.0",
  webpack: "^5.72.0",
  "webpack-cli": "^4.9.2",
  "whatwg-fetch": "^3.5.0"
};
const engines = {
  node: ">= 10.0.0"
};
const require$$7 = {
  name,
  version,
  description,
  keywords,
  main,
  types,
  repository,
  author,
  license,
  scripts,
  dependencies,
  devDependencies,
  engines
};
Object.defineProperty(CoinbaseWalletSDK$1, "__esModule", { value: true });
CoinbaseWalletSDK$1.CoinbaseWalletSDK = void 0;
const wallet_logo_1 = walletLogo$1;
const ScopedLocalStorage_1 = ScopedLocalStorage$1;
const CoinbaseWalletProvider_1 = CoinbaseWalletProvider$1;
const WalletSDKUI_1 = WalletSDKUI$1;
const WalletSDKRelay_1 = WalletSDKRelay$1;
const WalletSDKRelayEventManager_1 = WalletSDKRelayEventManager$1;
const util_1 = util$5;
const LINK_API_URL = {}.LINK_API_URL || "https://www.walletlink.org";
const SDK_VERSION = {}.SDK_VERSION || require$$7.version || "unknown";
class CoinbaseWalletSDK {
  /**
   * Constructor
   * @param options Coinbase Wallet SDK constructor options
   */
  constructor(options) {
    var _a, _b, _c;
    this._appName = "";
    this._appLogoUrl = null;
    this._relay = null;
    this._relayEventManager = null;
    const linkAPIUrl = options.linkAPIUrl || LINK_API_URL;
    let uiConstructor;
    if (!options.uiConstructor) {
      uiConstructor = (opts) => new WalletSDKUI_1.WalletSDKUI(opts);
    } else {
      uiConstructor = options.uiConstructor;
    }
    if (typeof options.overrideIsMetaMask === "undefined") {
      this._overrideIsMetaMask = false;
    } else {
      this._overrideIsMetaMask = options.overrideIsMetaMask;
    }
    this._overrideIsCoinbaseWallet = (_a = options.overrideIsCoinbaseWallet) !== null && _a !== void 0 ? _a : true;
    this._overrideIsCoinbaseBrowser = (_b = options.overrideIsCoinbaseBrowser) !== null && _b !== void 0 ? _b : false;
    if (options.diagnosticLogger && options.eventListener) {
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    }
    if (options.eventListener) {
      this._diagnosticLogger = {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        log: options.eventListener.onEvent
      };
    } else {
      this._diagnosticLogger = options.diagnosticLogger;
    }
    this._reloadOnDisconnect = (_c = options.reloadOnDisconnect) !== null && _c !== void 0 ? _c : true;
    const url = new URL(linkAPIUrl);
    const origin = `${url.protocol}//${url.host}`;
    this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${origin}`);
    this._storage.setItem("version", CoinbaseWalletSDK.VERSION);
    if (this.walletExtension || this.coinbaseBrowser) {
      return;
    }
    this._relayEventManager = new WalletSDKRelayEventManager_1.WalletSDKRelayEventManager();
    this._relay = new WalletSDKRelay_1.WalletSDKRelay({
      linkAPIUrl,
      version: SDK_VERSION,
      darkMode: !!options.darkMode,
      uiConstructor,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger,
      reloadOnDisconnect: this._reloadOnDisconnect
    });
    this.setAppInfo(options.appName, options.appLogoUrl);
    if (!!options.headlessMode)
      return;
    this._relay.attachUI();
  }
  /**
   * Create a Web3 Provider object
   * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
   * @param chainId Ethereum Chain ID (Default: 1)
   * @returns A Web3 Provider
   */
  makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
    const extension = this.walletExtension;
    if (extension) {
      if (!this.isCipherProvider(extension)) {
        extension.setProviderInfo(jsonRpcUrl, chainId);
      }
      if (this._reloadOnDisconnect === false && typeof extension.disableReloadOnDisconnect === "function")
        extension.disableReloadOnDisconnect();
      return extension;
    }
    const dappBrowser = this.coinbaseBrowser;
    if (dappBrowser) {
      return dappBrowser;
    }
    const relay = this._relay;
    if (!relay || !this._relayEventManager || !this._storage) {
      throw new Error("Relay not initialized, should never happen");
    }
    if (!jsonRpcUrl)
      relay.setConnectDisabled(true);
    return new CoinbaseWalletProvider_1.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(relay),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl,
      chainId,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  /**
   * Set application information
   * @param appName Application name
   * @param appLogoUrl Application logo image URL
   */
  setAppInfo(appName, appLogoUrl) {
    var _a;
    this._appName = appName || "DApp";
    this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
    const extension = this.walletExtension;
    if (extension) {
      if (!this.isCipherProvider(extension)) {
        extension.setAppInfo(this._appName, this._appLogoUrl);
      }
    } else {
      (_a = this._relay) === null || _a === void 0 ? void 0 : _a.setAppInfo(this._appName, this._appLogoUrl);
    }
  }
  /**
   * Disconnect. After disconnecting, this will reload the web page to ensure
   * all potential stale state is cleared.
   */
  disconnect() {
    var _a;
    const extension = this.walletExtension;
    if (extension) {
      void extension.close();
    } else {
      (_a = this._relay) === null || _a === void 0 ? void 0 : _a.resetAndReload();
    }
  }
  /**
   * Return QR URL for mobile wallet connection, will return null if extension is installed
   */
  getQrUrl() {
    var _a, _b;
    return (_b = (_a = this._relay) === null || _a === void 0 ? void 0 : _a.getQRCodeUrl()) !== null && _b !== void 0 ? _b : null;
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(type, width = 240) {
    return (0, wallet_logo_1.walletLogo)(type, width);
  }
  get walletExtension() {
    var _a;
    return (_a = window.coinbaseWalletExtension) !== null && _a !== void 0 ? _a : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var _a, _b;
    try {
      const ethereum = (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
      if (!ethereum) {
        return void 0;
      }
      if ("isCoinbaseBrowser" in ethereum && ethereum.isCoinbaseBrowser) {
        return ethereum;
      } else {
        return void 0;
      }
    } catch (e2) {
      return void 0;
    }
  }
  isCipherProvider(provider) {
    return typeof provider.isCipher === "boolean" && provider.isCipher;
  }
}
CoinbaseWalletSDK$1.CoinbaseWalletSDK = CoinbaseWalletSDK;
CoinbaseWalletSDK.VERSION = SDK_VERSION;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CoinbaseWalletProvider = exports2.CoinbaseWalletSDK = void 0;
  const CoinbaseWalletSDK_1 = CoinbaseWalletSDK$1;
  const CoinbaseWalletProvider_12 = CoinbaseWalletProvider$1;
  var CoinbaseWalletSDK_2 = CoinbaseWalletSDK$1;
  Object.defineProperty(exports2, "CoinbaseWalletSDK", { enumerable: true, get: function() {
    return CoinbaseWalletSDK_2.CoinbaseWalletSDK;
  } });
  var CoinbaseWalletProvider_2 = CoinbaseWalletProvider$1;
  Object.defineProperty(exports2, "CoinbaseWalletProvider", { enumerable: true, get: function() {
    return CoinbaseWalletProvider_2.CoinbaseWalletProvider;
  } });
  exports2.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
  if (typeof window !== "undefined") {
    window.CoinbaseWalletSDK = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
    window.CoinbaseWalletProvider = CoinbaseWalletProvider_12.CoinbaseWalletProvider;
    window.WalletLink = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
    window.WalletLinkProvider = CoinbaseWalletProvider_12.CoinbaseWalletProvider;
  }
})(dist$2);
const index = /* @__PURE__ */ getDefaultExportFromCjs(dist$2);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [dist$2]);
export {
  index$1 as i
};
