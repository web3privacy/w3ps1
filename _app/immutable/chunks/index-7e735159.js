import { _ as __vitePreload } from "./preload-helper-f8376bb0.js";
import { k, W, a as a$1 } from "./_page-f40be2e6.js";
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
      await __vitePreload(() => import("./index-93b2d070.js"), true ? ["./index-93b2d070.js","./_page-f40be2e6.js","./index-2a025a89.js","./helpers-88229792.js","./singletons-286ffebd.js","./preload-helper-f8376bb0.js","./dijkstra-cb1f074b.js"] : void 0, import.meta.url);
      const e = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", e), a$1.setIsUiLoaded(true);
    }
  }
}
export {
  f as Web3Modal
};
