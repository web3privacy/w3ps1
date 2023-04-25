import { _ as __vitePreload } from "./preload-helper-f8376bb0.js";
import { k, W, a as a$1 } from "./_page-31477f49.js";
var s = Object.defineProperty, a = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable, i = (o, e, t) => e in o ? s(o, e, { enumerable: true, configurable: true, writable: true, value: t }) : o[e] = t, b = (o, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && i(o, t, e[t]);
  if (a)
    for (var t of a(e))
      d.call(e, t) && i(o, t, e[t]);
  return o;
};
class f {
  constructor(e) {
    this.openModal = k.open, this.closeModal = k.close, this.subscribeModal = k.subscribe, this.setTheme = W.setThemeConfig, W.setConfig(b({ enableStandaloneMode: true }, e)), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await __vitePreload(() => import("./index-9242b17c.js"), true ? ["./index-9242b17c.js","./_page-31477f49.js","./index-88d77172.js","./helpers-c3e656fe.js","./singletons-0b808b86.js","./preload-helper-f8376bb0.js","./dijkstra-cb1f074b.js"] : void 0, import.meta.url);
      const e = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", e), a$1.setIsUiLoaded(true);
    }
  }
}
export {
  f as Web3Modal
};
