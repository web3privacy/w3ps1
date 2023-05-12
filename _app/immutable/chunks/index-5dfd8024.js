import { W, k as k$1, a as a$2, L, b as P$1, A as A$1, d as d$2, g as g$2 } from "./_page-87169cf6.js";
import { d as dijkstraExports } from "./dijkstra-cb1f074b.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window, e$5 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$4 = /* @__PURE__ */ new WeakMap();
let o$4 = class o {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$5 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = n$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$4.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new o$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), i$3 = (t2, ...e2) => {
  const n2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, n3) => e3 + ((t3) => {
    if (true === t3._$cssResult$)
      return t3.cssText;
    if ("number" == typeof t3)
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[n3 + 1], t2[0]);
  return new o$4(n2, t2, s$3);
}, S$1 = (s2, n2) => {
  e$5 ? s2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o3 = t$3.litNonce;
    void 0 !== o3 && n3.setAttribute("nonce", o3), n3.textContent = e2.cssText, s2.appendChild(n3);
  });
}, c$1 = e$5 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules)
    e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$4 = window, r$1 = e$4.trustedTypes, h$2 = r$1 ? r$1.emptyScript : "", o$3 = e$4.reactiveElementPolyfillSupport, n$3 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? h$2 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = null !== t2;
      break;
    case Number:
      s2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, a$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$3 = { attribute: true, type: String, converter: n$3, reflect: false, hasChanged: a$1 };
let d$1 = class d extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t2) {
    var i2;
    this.finalize(), (null !== (i2 = this.h) && void 0 !== i2 ? i2 : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Ep(s2, i2);
      void 0 !== e2 && (this._$Ev.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$3) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(c$1(i3));
    } else
      void 0 !== i2 && s2.push(c$1(i2));
    return s2;
  }
  static _$Ep(t2, i2) {
    const s2 = i2.attribute;
    return false === s2 ? void 0 : "string" == typeof s2 ? s2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    (null !== (i2 = this._$ES) && void 0 !== i2 ? i2 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s2 = t2.hostConnected) || void 0 === s2 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostConnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostDisconnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$EO(t2, i2, s2 = l$3) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s2);
    if (void 0 !== r2 && true === s2.reflect) {
      const h2 = (void 0 !== (null === (e2 = s2.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s2.converter : n$3).toAttribute(i2, s2.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i2) {
    var s2;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s2 = t3.converter) || void 0 === s2 ? void 0 : s2.fromAttribute) ? t3.converter : n$3;
      this._$El = r2, this[r2] = h2.fromAttribute(i2, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    void 0 !== t2 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || a$1)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), true === s2.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i3) => this[i3] = t3), this._$Ei = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i3;
        return null === (i3 = t3.hostUpdate) || void 0 === i3 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$Ek();
    } catch (t3) {
      throw i2 = false, this._$Ek(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostUpdated) || void 0 === i3 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i2) => this._$EO(i2, this[i2], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
d$1.finalized = true, d$1.elementProperties = /* @__PURE__ */ new Map(), d$1.elementStyles = [], d$1.shadowRootOptions = { mode: "open" }, null == o$3 || o$3({ ReactiveElement: d$1 }), (null !== (s$2 = e$4.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$4.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$2 = window, s$1 = i$2.trustedTypes, e$3 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$2 = `lit$${(Math.random() + "").slice(9)}$`, n$2 = "?" + o$2, l$2 = `<${n$2}>`, h$1 = document, r = (t2 = "") => h$1.createComment(t2), d2 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u$1 = Array.isArray, c = (t2) => u$1(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g$1 = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), y = g$1(1), w = g$1(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), A = h$1.createTreeWalker(h$1, 129, null, false), E = (t2, i2) => {
  const s2 = t2.length - 1, n2 = [];
  let h2, r2 = 2 === i2 ? "<svg>" : "", d3 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let e2, u3, c2 = -1, g2 = 0;
    for (; g2 < s3.length && (d3.lastIndex = g2, u3 = d3.exec(s3), null !== u3); )
      g2 = d3.lastIndex, d3 === v ? "!--" === u3[1] ? d3 = a : void 0 !== u3[1] ? d3 = f : void 0 !== u3[2] ? ($.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d3 = _) : void 0 !== u3[3] && (d3 = _) : d3 === _ ? ">" === u3[0] ? (d3 = null != h2 ? h2 : v, c2 = -1) : void 0 === u3[1] ? c2 = -2 : (c2 = d3.lastIndex - u3[2].length, e2 = u3[1], d3 = void 0 === u3[3] ? _ : '"' === u3[3] ? p : m) : d3 === p || d3 === m ? d3 = _ : d3 === a || d3 === f ? d3 = v : (d3 = _, h2 = void 0);
    const y2 = d3 === _ && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d3 === v ? s3 + l$2 : c2 >= 0 ? (n2.push(e2), s3.slice(0, c2) + "$lit$" + s3.slice(c2) + o$2 + y2) : s3 + o$2 + (-2 === c2 ? (n2.push(void 0), i3) : y2);
  }
  const u2 = r2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [void 0 !== e$3 ? e$3.createHTML(u2) : u2, n2];
};
class C {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let l2;
    this.parts = [];
    let h2 = 0, d3 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = E(t2, i2);
    if (this.el = C.createElement(v2, e2), A.currentNode = this.el.content, 2 === i2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; null !== (l2 = A.nextNode()) && c2.length < u2; ) {
      if (1 === l2.nodeType) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i3 of l2.getAttributeNames())
            if (i3.endsWith("$lit$") || i3.startsWith(o$2)) {
              const s2 = a2[d3++];
              if (t3.push(i3), void 0 !== s2) {
                const t4 = l2.getAttribute(s2.toLowerCase() + "$lit$").split(o$2), i4 = /([.?@])?(.*)/.exec(s2);
                c2.push({ type: 1, index: h2, name: i4[2], strings: t4, ctor: "." === i4[1] ? M : "?" === i4[1] ? k : "@" === i4[1] ? H$1 : S });
              } else
                c2.push({ type: 6, index: h2 });
            }
          for (const i3 of t3)
            l2.removeAttribute(i3);
        }
        if ($.test(l2.tagName)) {
          const t3 = l2.textContent.split(o$2), i3 = t3.length - 1;
          if (i3 > 0) {
            l2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++)
              l2.append(t3[s2], r()), A.nextNode(), c2.push({ type: 2, index: ++h2 });
            l2.append(t3[i3], r());
          }
        }
      } else if (8 === l2.nodeType)
        if (l2.data === n$2)
          c2.push({ type: 2, index: h2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = l2.data.indexOf(o$2, t3 + 1)); )
            c2.push({ type: 7, index: h2 }), t3 += o$2.length - 1;
        }
      h2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = h$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o3, n2, l2, h2;
  if (i2 === x)
    return i2;
  let r2 = void 0 !== e2 ? null === (o3 = s2._$Co) || void 0 === o3 ? void 0 : o3[e2] : s2._$Cl;
  const u2 = d2(i2) ? void 0 : i2._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== u2 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u2 ? r2 = void 0 : (r2 = new u2(t2), r2._$AT(t2, s2, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s2)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), void 0 !== r2 && (i2 = P(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
}
class V {
  constructor(t2, i2) {
    this.u = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o3 = (null !== (i2 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i2 ? i2 : h$1).importNode(s2, true);
    A.currentNode = o3;
    let n2 = A.nextNode(), l2 = 0, r2 = 0, d3 = e2[0];
    for (; void 0 !== d3; ) {
      if (l2 === d3.index) {
        let i3;
        2 === d3.type ? i3 = new N(n2, n2.nextSibling, this, t2) : 1 === d3.type ? i3 = new d3.ctor(n2, d3.name, d3.strings, this, t2) : 6 === d3.type && (i3 = new I(n2, this, t2)), this.u.push(i3), d3 = e2[++r2];
      }
      l2 !== (null == d3 ? void 0 : d3.index) && (n2 = A.nextNode(), l2++);
    }
    return o3;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this.u)
      void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o3;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cm = null === (o3 = null == e2 ? void 0 : e2.isConnected) || void 0 === o3 || o3;
  }
  get _$AU() {
    var t2, i2;
    return null !== (i2 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i2 ? i2 : this._$Cm;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === t2.nodeType && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), d2(t2) ? t2 === b || null == t2 || "" === t2 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t2 !== this._$AH && t2 !== x && this.g(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : c(t2) ? this.k(t2) : this.g(t2);
  }
  O(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  g(t2) {
    this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(h$1.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o3 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = C.createElement(e2.h, this.options)), e2);
    if ((null === (i2 = this._$AH) || void 0 === i2 ? void 0 : i2._$AD) === o3)
      this._$AH.p(s2);
    else {
      const t3 = new V(o3, this), i3 = t3.v(this.options);
      t3.p(s2), this.T(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T.get(t2.strings);
    return void 0 === i2 && T.set(t2.strings, i2 = new C(t2)), i2;
  }
  k(t2) {
    u$1(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o3 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.O(r()), this.O(r()), this, this.options)) : s2 = i2[e2], s2._$AI(o3), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for (null === (s2 = this._$AP) || void 0 === s2 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    void 0 === this._$AM && (this._$Cm = t2, null === (i2 = this._$AP) || void 0 === i2 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o3) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = b;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o3 = this.strings;
    let n2 = false;
    if (void 0 === o3)
      t2 = P(this, t2, i2, 0), n2 = !d2(t2) || t2 !== this._$AH && t2 !== x, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o3[0], l2 = 0; l2 < o3.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === x && (h2 = this._$AH[l2]), n2 || (n2 = !d2(h2) || h2 !== this._$AH[l2]), h2 === b ? t2 = b : t2 !== b && (t2 += (null != h2 ? h2 : "") + o3[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === b ? void 0 : t2;
  }
}
const R$1 = s$1 ? s$1.emptyScript : "";
class k extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== b ? this.element.setAttribute(this.name, R$1) : this.element.removeAttribute(this.name);
  }
}
let H$1 = class H extends S {
  constructor(t2, i2, s2, e2, o3) {
    super(t2, i2, s2, e2, o3), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = null !== (s2 = P(this, t2, i2, 0)) && void 0 !== s2 ? s2 : b) === x)
      return;
    const e2 = this._$AH, o3 = t2 === b && e2 !== b || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== b && (e2 === b || o3);
    o3 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s2 = null === (i2 = this.options) || void 0 === i2 ? void 0 : i2.host) && void 0 !== s2 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
};
class I {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z$1 = i$2.litHtmlPolyfillSupport;
null == z$1 || z$1(C, N), (null !== (t$2 = i$2.litHtmlVersions) && void 0 !== t$2 ? t$2 : i$2.litHtmlVersions = []).push("2.6.1");
const Z$1 = (t2, i2, s2) => {
  var e2, o3;
  const n2 = null !== (e2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e2 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o3 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o3 ? o3 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(r(), t3), t3, void 0, null != s2 ? s2 : {});
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$1;
class s extends d$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = Z$1(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return x;
  }
}
s.finalized = true, s._$litElement$ = true, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, { LitElement: s });
const n$1 = globalThis.litElementPolyfillSupport;
null == n$1 || n$1({ LitElement: s });
(null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
  const { kind: t2, elements: s2 } = n3;
  return { kind: t2, elements: s2, finisher(n4) {
    customElements.define(e3, n4);
  } };
})(e2, n2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1 = (i2, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i2);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e$1(e2) {
  return (n2, t2) => void 0 !== t2 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$1(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$1(t2) {
  return e$1({ ...t2, state: true });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o3, n2) => o3.assignedElements(n2) : (o3, n2) => o3.assignedNodes(n2).filter((o4) => o4.nodeType === Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o2 = e(class extends i {
  constructor(t$12) {
    var i2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || (null === (i2 = t$12.strings) || void 0 === i2 ? void 0 : i2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
  }
  update(i2, [s2]) {
    var r2, o3;
    if (void 0 === this.nt) {
      this.nt = /* @__PURE__ */ new Set(), void 0 !== i2.strings && (this.st = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in s2)
        s2[t2] && !(null === (r2 = this.st) || void 0 === r2 ? void 0 : r2.has(t2)) && this.nt.add(t2);
      return this.render(s2);
    }
    const e2 = i2.element.classList;
    this.nt.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.nt.delete(t2));
    });
    for (const t2 in s2) {
      const i3 = !!s2[t2];
      i3 === this.nt.has(t2) || (null === (o3 = this.st) || void 0 === o3 ? void 0 : o3.has(t2)) || (i3 ? (e2.add(t2), this.nt.add(t2)) : (e2.remove(t2), this.nt.delete(t2)));
    }
    return x;
  }
});
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
const clamp = (min, max, v2) => Math.min(Math.max(v2, min), max);
const defaults$1 = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};
const isNumber = (value) => typeof value === "number";
const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);
const wrap = (min, max, v2) => {
  const rangeSize = max - min;
  return ((v2 - min) % rangeSize + rangeSize) % rangeSize + min;
};
function getEasingForSegment(easing, i2) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i2)] : easing;
}
const mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;
const noop = () => {
};
const noopReturn = (v2) => v2;
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i2 = 1; i2 <= remaining; i2++) {
    const offsetProgress = progress(0, remaining, i2);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}
function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t2) => {
    let i2 = 0;
    for (; i2 < length - 2; i2++) {
      if (t2 < input[i2 + 1])
        break;
    }
    let progressInRange = clamp(0, 1, progress(input[i2], input[i2 + 1], t2));
    const segmentEasing = getEasingForSegment(easing, i2);
    progressInRange = segmentEasing(progressInRange);
    return mix(output[i2], output[i2 + 1], progressInRange);
  };
}
const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);
const isEasingGenerator = (easing) => typeof easing === "object" && Boolean(easing.createAnimation);
const isFunction = (value) => typeof value === "function";
const isString = (value) => typeof value === "string";
const time = {
  ms: (seconds) => seconds * 1e3,
  s: (milliseconds) => milliseconds / 1e3
};
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
const calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x2, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i2 = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x2;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noopReturn;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}
const steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
const namedEasings = {
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier(0.42, 0, 1, 1),
  "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
  "ease-out": cubicBezier(0, 0, 0.58, 1)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  if (isFunction(definition))
    return definition;
  if (isCubicBezier(definition))
    return cubicBezier(...definition);
  if (namedEasings[definition])
    return namedEasings[definition];
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return steps(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return noopReturn;
}
class Animation {
  constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults$1.duration, delay = defaults$1.delay, endDelay = defaults$1.endDelay, repeat = defaults$1.repeat, offset, direction = "normal" } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing = easing || defaults$1.easing;
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
    this.updateDuration(initialDuration);
    const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
    this.tick = (timestamp) => {
      var _a2;
      delay = delay;
      let t2 = 0;
      if (this.pauseTime !== void 0) {
        t2 = this.pauseTime;
      } else {
        t2 = (timestamp - this.startTime) * this.rate;
      }
      this.t = t2;
      t2 /= 1e3;
      t2 = Math.max(t2 - delay, 0);
      if (this.playState === "finished" && this.pauseTime === void 0) {
        t2 = this.totalDuration;
      }
      const progress2 = t2 / this.duration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p2 = t2 >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p2));
      output(latest);
      const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t2 >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a2 = this.resolve) === null || _a2 === void 0 ? void 0 : _a2.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== void 0) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = void 0;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a2;
    this.playState = "idle";
    if (this.frameRequestId !== void 0) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a2 = this.reject) === null || _a2 === void 0 ? void 0 : _a2.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2) {
    if (this.pauseTime !== void 0 || this.rate === 0) {
      this.pauseTime = t2;
    } else {
      this.startTime = performance.now() - t2 / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
}
class MotionValue {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const data = /* @__PURE__ */ new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: /* @__PURE__ */ new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new MotionValue());
  }
  return motionValues.get(name);
}
const axes = ["", "X", "Y", "Z"];
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
const rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (v2) => v2 + "deg"
};
const baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (v2) => v2 + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
const transformDefinitions = /* @__PURE__ */ new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
const transforms = ["x", "y", "z"];
order.forEach((name) => {
  axes.forEach((axis) => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
const compareTransformOrder = (a2, b2) => transforms.indexOf(a2) - transforms.indexOf(b2);
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
  if (transformAlias[name])
    name = transformAlias[name];
  const { transforms: transforms2 } = getAnimationData(element);
  addUniqueItem(transforms2, name);
  element.style.transform = buildTransformTemplate(transforms2);
};
const buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;
const isCssVar = (name) => name.startsWith("--");
const registeredProperties = /* @__PURE__ */ new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name))
    return;
  registeredProperties.add(name);
  try {
    const { syntax, initialValue } = transformDefinitions.has(name) ? transformDefinitions.get(name) : {};
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e2) {
  }
}
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e2) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
  linearEasing: () => {
    try {
      testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e2) {
      return false;
    }
    return true;
  }
};
const results = {};
const supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i2 = 0; i2 < numPoints; i2++) {
    points += easing(progress(0, numPoints - 1, i2)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
  if (isFunction(easing)) {
    return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : defaults$1.easing;
  } else {
    return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
  }
};
const cubicBezierAsString = ([a2, b2, c2, d3]) => `cubic-bezier(${a2}, ${b2}, ${c2}, ${d3})`;
function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i2 = 0; i2 < keyframes.length; i2++) {
    if (keyframes[i2] === null) {
      keyframes[i2] = i2 ? keyframes[i2 - 1] : readInitialValue();
    }
  }
  return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];
function getStyleName(key) {
  if (transformAlias[key])
    key = transformAlias[key];
  return isTransform(key) ? asTransformCssVar(key) : key;
}
const style = {
  get: (element, name) => {
    name = getStyleName(name);
    let value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      const definition = transformDefinitions.get(name);
      if (definition)
        value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = getStyleName(name);
    if (isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};
function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished")
    return;
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e2) {
  }
}
function getUnitConverter(keyframes, definition) {
  var _a2;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if (isString(finalKeyframe)) {
    const unit = ((_a2 = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a2 === void 0 ? void 0 : _a2[2]) || "";
    if (unit)
      toUnit = (value) => value + unit;
  }
  return toUnit;
}
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let { duration = defaults$1.duration, delay = defaults$1.delay, endDelay = defaults$1.endDelay, repeat = defaults$1.repeat, easing = defaults$1.easing, persist = false, direction, offset, allowWebkitAcceleration = false } = options;
  const data2 = getAnimationData(element);
  const valueIsTransform = isTransform(key);
  let canAnimateNatively = supports.waapi();
  valueIsTransform && addTransformToElement(element, key);
  const name = getStyleName(key);
  const motionValue = getMotionValue(data2.values, name);
  const definition = transformDefinitions.get(name);
  stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
  return () => {
    const readInitialValue = () => {
      var _a2, _b;
      return (_b = (_a2 = style.get(element, name)) !== null && _a2 !== void 0 ? _a2 : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
    const toUnit = getUnitConverter(keyframes, definition);
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    if (isCssVar(name)) {
      if (supports.cssRegisterProperty()) {
        registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
      canAnimateNatively = false;
    }
    if (canAnimateNatively) {
      if (definition) {
        keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
      }
      if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: time.ms(delay),
        duration: time.ms(duration),
        endDelay: time.ms(endDelay),
        easing: !isEasingList(easing) ? convertEasing(easing, duration) : void 0,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes,
        offset,
        easing: isEasingList(easing) ? easing.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
      }, animationOptions);
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes[keyframes.length - 1];
      animation.finished.then(() => {
        if (persist)
          return;
        style.set(element, name, target);
        animation.cancel();
      }).catch(noop);
      if (!allowWebkitAcceleration)
        animation.playbackRate = 1.000001;
    } else if (AnimationPolyfill && valueIsTransform) {
      keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill((latest) => {
        style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration,
        easing
      }));
    } else {
      const target = keyframes[keyframes.length - 1];
      style.set(element, name, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration,
        delay,
        easing,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    return animation;
  };
}
const getOptions = (options, key) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
);
function resolveElements(elements, selectorCache) {
  var _a2;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a2 = selectorCache[elements]) !== null && _a2 !== void 0 ? _a2 : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}
const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = defaults$1.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
const getActiveAnimation = (state) => state.animations[0];
const controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach((animation) => stopAnimation(animation));
        };
      case "forEachNative":
        return (callback) => {
          target.animations.forEach((animation) => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = time.ms(value);
      case "currentTime":
      case "playbackRate":
        for (let i2 = 0; i2 < target.animations.length; i2++) {
          target.animations[i2][key] = value;
        }
        return true;
    }
    return false;
  }
};
const selectFinished = (animation) => animation.finished;
function resolveOption(option, i2, total) {
  return isFunction(option) ? option(i2, total) : option;
}
function createAnimate(AnimatePolyfill) {
  return function animate2(elements, keyframes, options = {}) {
    elements = resolveElements(elements);
    const numElements = elements.length;
    const animationFactories = [];
    for (let i2 = 0; i2 < numElements; i2++) {
      const element = elements[i2];
      for (const key in keyframes) {
        const valueOptions = getOptions(options, key);
        valueOptions.delay = resolveOption(valueOptions.delay, i2, numElements);
        const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return withControls(
      animationFactories,
      options,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      options.duration
    );
  };
}
const animate$1 = createAnimate(Animation);
const sampleT = 5;
function calcGeneratorVelocity(resolveValue, t2, current) {
  const prevT = Math.max(t2 - sampleT, 0);
  return velocityPerSecond(current - resolveValue(prevT), t2 - prevT);
}
const defaults = {
  stiffness: 100,
  damping: 10,
  mass: 1
};
const calcDampingRatio = (stiffness = defaults.stiffness, damping = defaults.damping, mass = defaults.mass) => damping / (2 * Math.sqrt(stiffness * mass));
function hasReachedTarget(origin, target, current) {
  return origin < target && current >= target || origin > target && current <= target;
}
const spring$1 = ({ stiffness = defaults.stiffness, damping = defaults.damping, mass = defaults.mass, from = 0, to: to2 = 1, velocity = 0, restSpeed = 2, restDistance = 0.5 } = {}) => {
  velocity = velocity ? time.s(velocity) : 0;
  const state = {
    done: false,
    hasReachedTarget: false,
    current: from,
    target: to2
  };
  const initialDelta = to2 - from;
  const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
  const dampingRatio = calcDampingRatio(stiffness, damping, mass);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
    resolveSpring = (t2) => to2 - Math.exp(-dampingRatio * undampedAngularFreq * t2) * ((-velocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
  } else {
    resolveSpring = (t2) => {
      return to2 - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t2);
    };
  }
  return (t2) => {
    state.current = resolveSpring(t2);
    const currentVelocity = t2 === 0 ? velocity : calcGeneratorVelocity(resolveSpring, t2, state.current);
    const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to2 - state.current) <= restDistance;
    state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
    state.hasReachedTarget = hasReachedTarget(from, to2, state.current);
    return state;
  };
};
const timeStep = 10;
const maxDuration = 1e4;
function pregenerateKeyframes(generator, toUnit = noopReturn) {
  let overshootDuration = void 0;
  let timestamp = timeStep;
  let state = generator(0);
  const keyframes = [toUnit(state.current)];
  while (!state.done && timestamp < maxDuration) {
    state = generator(timestamp);
    keyframes.push(toUnit(state.done ? state.target : state.current));
    if (overshootDuration === void 0 && state.hasReachedTarget) {
      overshootDuration = timestamp;
    }
    timestamp += timeStep;
  }
  const duration = timestamp - timeStep;
  if (keyframes.length === 1)
    keyframes.push(state.current);
  return {
    keyframes,
    duration: duration / 1e3,
    overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1e3
  };
}
function canGenerate(value) {
  return isNumber(value) && !isNaN(value);
}
function getAsNumber(value) {
  return isString(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
  const keyframesCache = /* @__PURE__ */ new WeakMap();
  return (options = {}) => {
    const generatorCache = /* @__PURE__ */ new Map();
    const getGenerator = (from = 0, to2 = 100, velocity = 0, isScale = false) => {
      const key = `${from}-${to2}-${velocity}-${isScale}`;
      if (!generatorCache.has(key)) {
        generatorCache.set(key, createGenerator(Object.assign({
          from,
          to: to2,
          velocity,
          restSpeed: isScale ? 0.05 : 2,
          restDistance: isScale ? 0.01 : 0.5
        }, options)));
      }
      return generatorCache.get(key);
    };
    const getKeyframes = (generator, toUnit) => {
      if (!keyframesCache.has(generator)) {
        keyframesCache.set(generator, pregenerateKeyframes(generator, toUnit));
      }
      return keyframesCache.get(generator);
    };
    return {
      createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
        let settings;
        let origin;
        let target;
        let velocity = 0;
        let toUnit = noopReturn;
        const numKeyframes = keyframes.length;
        if (shouldGenerate) {
          toUnit = getUnitConverter(keyframes, name ? transformDefinitions.get(getStyleName(name)) : void 0);
          const targetDefinition = keyframes[numKeyframes - 1];
          target = getAsNumber(targetDefinition);
          if (numKeyframes > 1 && keyframes[0] !== null) {
            origin = getAsNumber(keyframes[0]);
          } else {
            const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
            if (prevGenerator) {
              const { animation, generatorStartTime } = motionValue;
              const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
              const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
              const prevGeneratorCurrent = prevGenerator(currentTime).current;
              origin = prevGeneratorCurrent;
              velocity = calcGeneratorVelocity((t2) => prevGenerator(t2).current, currentTime, prevGeneratorCurrent);
            } else if (getOrigin) {
              origin = getAsNumber(getOrigin());
            }
          }
        }
        if (canGenerate(origin) && canGenerate(target)) {
          const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
          settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), { easing: "linear" });
          if (motionValue) {
            motionValue.generator = generator;
            motionValue.generatorStartTime = performance.now();
          }
        }
        if (!settings) {
          const keyframesMetadata = getKeyframes(getGenerator(0, 100));
          settings = {
            easing: "ease",
            duration: keyframesMetadata.overshootDuration
          };
        }
        return settings;
      }
    };
  };
}
const spring = createGeneratorEasing(spring$1);
function animateProgress(target, options = {}) {
  return withControls([
    () => {
      const animation = new Animation(target, [0, 1], options);
      animation.finished.catch(() => {
      });
      return animation;
    }
  ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
  const factory = isFunction(target) ? animateProgress : animate$1;
  return factory(target, keyframesOrOptions, options);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = (l2) => null != l2 ? l2 : b;
var browser = {};
var canPromise$1 = function() {
  return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};
var qrcode = {};
var utils$1 = {};
let toSJISFunction;
const CODEWORDS_COUNT = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
utils$1.getSymbolSize = function getSymbolSize(version2) {
  if (!version2)
    throw new Error('"version" cannot be null or undefined');
  if (version2 < 1 || version2 > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return version2 * 4 + 17;
};
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
  return CODEWORDS_COUNT[version2];
};
utils$1.getBCHDigit = function(data2) {
  let digit = 0;
  while (data2 !== 0) {
    digit++;
    data2 >>>= 1;
  }
  return digit;
};
utils$1.setToSJISFunction = function setToSJISFunction(f2) {
  if (typeof f2 !== "function") {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f2;
};
utils$1.isKanjiModeEnabled = function() {
  return typeof toSJISFunction !== "undefined";
};
utils$1.toSJIS = function toSJIS(kanji2) {
  return toSJISFunction(kanji2);
};
var errorCorrectionLevel = {};
(function(exports) {
  exports.L = { bit: 1 };
  exports.M = { bit: 0 };
  exports.Q = { bit: 3 };
  exports.H = { bit: 2 };
  function fromString(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case "l":
      case "low":
        return exports.L;
      case "m":
      case "medium":
        return exports.M;
      case "q":
      case "quartile":
        return exports.Q;
      case "h":
      case "high":
        return exports.H;
      default:
        throw new Error("Unknown EC Level: " + string);
    }
  }
  exports.isValid = function isValid2(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
  };
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(errorCorrectionLevel);
function BitBuffer$1() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer$1.prototype = {
  get: function(index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function(num, length) {
    for (let i2 = 0; i2 < length; i2++) {
      this.putBit((num >>> length - i2 - 1 & 1) === 1);
    }
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
var bitBuffer = BitBuffer$1;
function BitMatrix$1(size) {
  if (!size || size < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}
BitMatrix$1.prototype.set = function(row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved)
    this.reservedBit[index] = true;
};
BitMatrix$1.prototype.get = function(row, col) {
  return this.data[row * this.size + col];
};
BitMatrix$1.prototype.xor = function(row, col, value) {
  this.data[row * this.size + col] ^= value;
};
BitMatrix$1.prototype.isReserved = function(row, col) {
  return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix$1;
var alignmentPattern = {};
(function(exports) {
  const getSymbolSize3 = utils$1.getSymbolSize;
  exports.getRowColCoords = function getRowColCoords(version2) {
    if (version2 === 1)
      return [];
    const posCount = Math.floor(version2 / 7) + 2;
    const size = getSymbolSize3(version2);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [size - 7];
    for (let i2 = 1; i2 < posCount - 1; i2++) {
      positions[i2] = positions[i2 - 1] - intervals;
    }
    positions.push(6);
    return positions.reverse();
  };
  exports.getPositions = function getPositions2(version2) {
    const coords = [];
    const pos = exports.getRowColCoords(version2);
    const posLength = pos.length;
    for (let i2 = 0; i2 < posLength; i2++) {
      for (let j = 0; j < posLength; j++) {
        if (i2 === 0 && j === 0 || // top-left
        i2 === 0 && j === posLength - 1 || // bottom-left
        i2 === posLength - 1 && j === 0) {
          continue;
        }
        coords.push([pos[i2], pos[j]]);
      }
    }
    return coords;
  };
})(alignmentPattern);
var finderPattern = {};
const getSymbolSize2 = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
finderPattern.getPositions = function getPositions(version2) {
  const size = getSymbolSize2(version2);
  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ];
};
var maskPattern = {};
(function(exports) {
  exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  exports.isValid = function isValid2(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : void 0;
  };
  exports.getPenaltyN1 = function getPenaltyN1(data2) {
    const size = data2.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for (let row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;
      for (let col = 0; col < size; col++) {
        let module = data2.get(row, col);
        if (module === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module;
          sameCountCol = 1;
        }
        module = data2.get(col, row);
        if (module === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module;
          sameCountRow = 1;
        }
      }
      if (sameCountCol >= 5)
        points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5)
        points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
  };
  exports.getPenaltyN2 = function getPenaltyN2(data2) {
    const size = data2.size;
    let points = 0;
    for (let row = 0; row < size - 1; row++) {
      for (let col = 0; col < size - 1; col++) {
        const last = data2.get(row, col) + data2.get(row, col + 1) + data2.get(row + 1, col) + data2.get(row + 1, col + 1);
        if (last === 4 || last === 0)
          points++;
      }
    }
    return points * PenaltyScores.N2;
  };
  exports.getPenaltyN3 = function getPenaltyN3(data2) {
    const size = data2.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for (let row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;
      for (let col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 2047 | data2.get(row, col);
        if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
          points++;
        bitsRow = bitsRow << 1 & 2047 | data2.get(col, row);
        if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
          points++;
      }
    }
    return points * PenaltyScores.N3;
  };
  exports.getPenaltyN4 = function getPenaltyN4(data2) {
    let darkCount = 0;
    const modulesCount = data2.data.length;
    for (let i2 = 0; i2 < modulesCount; i2++)
      darkCount += data2.data[i2];
    const k2 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k2 * PenaltyScores.N4;
  };
  function getMaskAt(maskPattern2, i2, j) {
    switch (maskPattern2) {
      case exports.Patterns.PATTERN000:
        return (i2 + j) % 2 === 0;
      case exports.Patterns.PATTERN001:
        return i2 % 2 === 0;
      case exports.Patterns.PATTERN010:
        return j % 3 === 0;
      case exports.Patterns.PATTERN011:
        return (i2 + j) % 3 === 0;
      case exports.Patterns.PATTERN100:
        return (Math.floor(i2 / 2) + Math.floor(j / 3)) % 2 === 0;
      case exports.Patterns.PATTERN101:
        return i2 * j % 2 + i2 * j % 3 === 0;
      case exports.Patterns.PATTERN110:
        return (i2 * j % 2 + i2 * j % 3) % 2 === 0;
      case exports.Patterns.PATTERN111:
        return (i2 * j % 3 + (i2 + j) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern2);
    }
  }
  exports.applyMask = function applyMask(pattern, data2) {
    const size = data2.size;
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        if (data2.isReserved(row, col))
          continue;
        data2.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  exports.getBestMask = function getBestMask(data2, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for (let p2 = 0; p2 < numPatterns; p2++) {
      setupFormatFunc(p2);
      exports.applyMask(p2, data2);
      const penalty = exports.getPenaltyN1(data2) + exports.getPenaltyN2(data2) + exports.getPenaltyN3(data2) + exports.getPenaltyN4(data2);
      exports.applyMask(p2, data2);
      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p2;
      }
    }
    return bestPattern;
  };
})(maskPattern);
var errorCorrectionCode = {};
const ECLevel$1 = errorCorrectionLevel;
const EC_BLOCKS_TABLE = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
];
const EC_CODEWORDS_TABLE = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
var polynomial = {};
var galoisField = {};
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
  let x2 = 1;
  for (let i2 = 0; i2 < 255; i2++) {
    EXP_TABLE[i2] = x2;
    LOG_TABLE[x2] = i2;
    x2 <<= 1;
    if (x2 & 256) {
      x2 ^= 285;
    }
  }
  for (let i2 = 255; i2 < 512; i2++) {
    EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
  }
})();
galoisField.log = function log(n2) {
  if (n2 < 1)
    throw new Error("log(" + n2 + ")");
  return LOG_TABLE[n2];
};
galoisField.exp = function exp(n2) {
  return EXP_TABLE[n2];
};
galoisField.mul = function mul(x2, y2) {
  if (x2 === 0 || y2 === 0)
    return 0;
  return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
};
(function(exports) {
  const GF = galoisField;
  exports.mul = function mul2(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for (let i2 = 0; i2 < p1.length; i2++) {
      for (let j = 0; j < p2.length; j++) {
        coeff[i2 + j] ^= GF.mul(p1[i2], p2[j]);
      }
    }
    return coeff;
  };
  exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while (result.length - divisor.length >= 0) {
      const coeff = result[0];
      for (let i2 = 0; i2 < divisor.length; i2++) {
        result[i2] ^= GF.mul(divisor[i2], coeff);
      }
      let offset = 0;
      while (offset < result.length && result[offset] === 0)
        offset++;
      result = result.slice(offset);
    }
    return result;
  };
  exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([1]);
    for (let i2 = 0; i2 < degree; i2++) {
      poly = exports.mul(poly, new Uint8Array([1, GF.exp(i2)]));
    }
    return poly;
  };
})(polynomial);
const Polynomial = polynomial;
function ReedSolomonEncoder$1(degree) {
  this.genPoly = void 0;
  this.degree = degree;
  if (this.degree)
    this.initialize(this.degree);
}
ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
ReedSolomonEncoder$1.prototype.encode = function encode(data2) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  const paddedData = new Uint8Array(data2.length + this.degree);
  paddedData.set(data2);
  const remainder = Polynomial.mod(paddedData, this.genPoly);
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder$1;
var version = {};
var mode = {};
var versionCheck = {};
versionCheck.isValid = function isValid(version2) {
  return !isNaN(version2) && version2 >= 1 && version2 <= 40;
};
var regex = {};
const numeric = "[0-9]+";
const alphanumeric = "[A-Z $%*+\\-./:]+";
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
regex.KANJI = new RegExp(kanji, "g");
regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
regex.BYTE = new RegExp(byte, "g");
regex.NUMERIC = new RegExp(numeric, "g");
regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
const TEST_KANJI = new RegExp("^" + kanji + "$");
const TEST_NUMERIC = new RegExp("^" + numeric + "$");
const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
regex.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
regex.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
regex.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};
(function(exports) {
  const VersionCheck = versionCheck;
  const Regex = regex;
  exports.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  exports.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  exports.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  exports.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  exports.MIXED = {
    bit: -1
  };
  exports.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
    if (!mode2.ccBits)
      throw new Error("Invalid mode: " + mode2);
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid version: " + version2);
    }
    if (version2 >= 1 && version2 < 10)
      return mode2.ccBits[0];
    else if (version2 < 27)
      return mode2.ccBits[1];
    return mode2.ccBits[2];
  };
  exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr))
      return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr))
      return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr))
      return exports.KANJI;
    else
      return exports.BYTE;
  };
  exports.toString = function toString(mode2) {
    if (mode2 && mode2.id)
      return mode2.id;
    throw new Error("Invalid mode");
  };
  exports.isValid = function isValid2(mode2) {
    return mode2 && mode2.bit && mode2.ccBits;
  };
  function fromString(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case "numeric":
        return exports.NUMERIC;
      case "alphanumeric":
        return exports.ALPHANUMERIC;
      case "kanji":
        return exports.KANJI;
      case "byte":
        return exports.BYTE;
      default:
        throw new Error("Unknown mode: " + string);
    }
  }
  exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(mode);
(function(exports) {
  const Utils2 = utils$1;
  const ECCode2 = errorCorrectionCode;
  const ECLevel2 = errorCorrectionLevel;
  const Mode2 = mode;
  const VersionCheck = versionCheck;
  const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  const G18_BCH = Utils2.getBCHDigit(G18);
  function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  function getReservedBitsCount(mode2, version2) {
    return Mode2.getCharCountIndicator(mode2, version2) + 4;
  }
  function getTotalBitsFromDataArray(segments2, version2) {
    let totalBits = 0;
    segments2.forEach(function(data2) {
      const reservedBits = getReservedBitsCount(data2.mode, version2);
      totalBits += reservedBits + data2.getBitsLength();
    });
    return totalBits;
  }
  function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      const length = getTotalBitsFromDataArray(segments2, currentVersion);
      if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
      return parseInt(value, 10);
    }
    return defaultValue;
  };
  exports.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid QR Code version");
    }
    if (typeof mode2 === "undefined")
      mode2 = Mode2.BYTE;
    const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode2 === Mode2.MIXED)
      return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
    switch (mode2) {
      case Mode2.NUMERIC:
        return Math.floor(usableBits / 10 * 3);
      case Mode2.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);
      case Mode2.KANJI:
        return Math.floor(usableBits / 13);
      case Mode2.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  exports.getBestVersionForData = function getBestVersionForData(data2, errorCorrectionLevel2) {
    let seg;
    const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
    if (Array.isArray(data2)) {
      if (data2.length > 1) {
        return getBestVersionForMixedData(data2, ecl);
      }
      if (data2.length === 0) {
        return 1;
      }
      seg = data2[0];
    } else {
      seg = data2;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  exports.getEncodedBits = function getEncodedBits2(version2) {
    if (!VersionCheck.isValid(version2) || version2 < 7) {
      throw new Error("Invalid QR Code version");
    }
    let d3 = version2 << 12;
    while (Utils2.getBCHDigit(d3) - G18_BCH >= 0) {
      d3 ^= G18 << Utils2.getBCHDigit(d3) - G18_BCH;
    }
    return version2 << 12 | d3;
  };
})(version);
var formatInfo = {};
const Utils$3 = utils$1;
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils$3.getBCHDigit(G15);
formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
  const data2 = errorCorrectionLevel2.bit << 3 | mask;
  let d3 = data2 << 10;
  while (Utils$3.getBCHDigit(d3) - G15_BCH >= 0) {
    d3 ^= G15 << Utils$3.getBCHDigit(d3) - G15_BCH;
  }
  return (data2 << 10 | d3) ^ G15_MASK;
};
var segments = {};
const Mode$4 = mode;
function NumericData(data2) {
  this.mode = Mode$4.NUMERIC;
  this.data = data2.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength2() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer2) {
  let i2, group, value;
  for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
    group = this.data.substr(i2, 3);
    value = parseInt(group, 10);
    bitBuffer2.put(value, 10);
  }
  const remainingNum = this.data.length - i2;
  if (remainingNum > 0) {
    group = this.data.substr(i2);
    value = parseInt(group, 10);
    bitBuffer2.put(value, remainingNum * 3 + 1);
  }
};
var numericData = NumericData;
const Mode$3 = mode;
const ALPHA_NUM_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function AlphanumericData(data2) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data2;
}
AlphanumericData.getBitsLength = function getBitsLength3(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength2() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength4() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write2(bitBuffer2) {
  let i2;
  for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
    value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
    bitBuffer2.put(value, 11);
  }
  if (this.data.length % 2) {
    bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
  }
};
var alphanumericData = AlphanumericData;
var encodeUtf8$1 = function encodeUtf8(input) {
  var result = [];
  var size = input.length;
  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index);
    if (point >= 55296 && point <= 56319 && size > index + 1) {
      var second = input.charCodeAt(index + 1);
      if (second >= 56320 && second <= 57343) {
        point = (point - 55296) * 1024 + second - 56320 + 65536;
        index += 1;
      }
    }
    if (point < 128) {
      result.push(point);
      continue;
    }
    if (point < 2048) {
      result.push(point >> 6 | 192);
      result.push(point & 63 | 128);
      continue;
    }
    if (point < 55296 || point >= 57344 && point < 65536) {
      result.push(point >> 12 | 224);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }
    if (point >= 65536 && point <= 1114111) {
      result.push(point >> 18 | 240);
      result.push(point >> 12 & 63 | 128);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }
    result.push(239, 191, 189);
  }
  return new Uint8Array(result).buffer;
};
const encodeUtf82 = encodeUtf8$1;
const Mode$2 = mode;
function ByteData(data2) {
  this.mode = Mode$2.BYTE;
  if (typeof data2 === "string") {
    data2 = encodeUtf82(data2);
  }
  this.data = new Uint8Array(data2);
}
ByteData.getBitsLength = function getBitsLength5(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength3() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength6() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer2) {
  for (let i2 = 0, l2 = this.data.length; i2 < l2; i2++) {
    bitBuffer2.put(this.data[i2], 8);
  }
};
var byteData = ByteData;
const Mode$1 = mode;
const Utils$2 = utils$1;
function KanjiData(data2) {
  this.mode = Mode$1.KANJI;
  this.data = data2;
}
KanjiData.getBitsLength = function getBitsLength7(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength4() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength8() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer2) {
  let i2;
  for (i2 = 0; i2 < this.data.length; i2++) {
    let value = Utils$2.toSJIS(this.data[i2]);
    if (value >= 33088 && value <= 40956) {
      value -= 33088;
    } else if (value >= 57408 && value <= 60351) {
      value -= 49472;
    } else {
      throw new Error(
        "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
      );
    }
    value = (value >>> 8 & 255) * 192 + (value & 255);
    bitBuffer2.put(value, 13);
  }
};
var kanjiData = KanjiData;
(function(exports) {
  const Mode2 = mode;
  const NumericData2 = numericData;
  const AlphanumericData2 = alphanumericData;
  const ByteData2 = byteData;
  const KanjiData2 = kanjiData;
  const Regex = regex;
  const Utils2 = utils$1;
  const dijkstra = dijkstraExports;
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  function getSegments(regex2, mode2, str) {
    const segments2 = [];
    let result;
    while ((result = regex2.exec(str)) !== null) {
      segments2.push({
        data: result[0],
        index: result.index,
        mode: mode2,
        length: result[0].length
      });
    }
    return segments2;
  }
  function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils2.isKanjiModeEnabled()) {
      byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
      kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
    } else {
      byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
      kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
      return s1.index - s2.index;
    }).map(function(obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  function getSegmentBitsLength(length, mode2) {
    switch (mode2) {
      case Mode2.NUMERIC:
        return NumericData2.getBitsLength(length);
      case Mode2.ALPHANUMERIC:
        return AlphanumericData2.getBitsLength(length);
      case Mode2.KANJI:
        return KanjiData2.getBitsLength(length);
      case Mode2.BYTE:
        return ByteData2.getBitsLength(length);
    }
  }
  function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
      const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
  }
  function buildNodes(segs) {
    const nodes = [];
    for (let i2 = 0; i2 < segs.length; i2++) {
      const seg = segs[i2];
      switch (seg.mode) {
        case Mode2.NUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.ALPHANUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.KANJI:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
          break;
        case Mode2.BYTE:
          nodes.push([
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
      }
    }
    return nodes;
  }
  function buildGraph(nodes, version2) {
    const table = {};
    const graph = { start: {} };
    let prevNodeIds = ["start"];
    for (let i2 = 0; i2 < nodes.length; i2++) {
      const nodeGroup = nodes[i2];
      const currentNodeIds = [];
      for (let j = 0; j < nodeGroup.length; j++) {
        const node = nodeGroup[j];
        const key = "" + i2 + j;
        currentNodeIds.push(key);
        table[key] = { node, lastCount: 0 };
        graph[key] = {};
        for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
          const prevNodeId = prevNodeIds[n2];
          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId])
              table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
          }
        }
      }
      prevNodeIds = currentNodeIds;
    }
    for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
      graph[prevNodeIds[n2]].end = 0;
    }
    return { map: graph, table };
  }
  function buildSingleSegment(data2, modesHint) {
    let mode2;
    const bestMode = Mode2.getBestModeForData(data2);
    mode2 = Mode2.from(modesHint, bestMode);
    if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
      throw new Error('"' + data2 + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
    }
    if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
      mode2 = Mode2.BYTE;
    }
    switch (mode2) {
      case Mode2.NUMERIC:
        return new NumericData2(data2);
      case Mode2.ALPHANUMERIC:
        return new AlphanumericData2(data2);
      case Mode2.KANJI:
        return new KanjiData2(data2);
      case Mode2.BYTE:
        return new ByteData2(data2);
    }
  }
  exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
      if (typeof seg === "string") {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }
      return acc;
    }, []);
  };
  exports.fromString = function fromString(data2, version2) {
    const segs = getSegmentsFromString(data2, Utils2.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version2);
    const path = dijkstra.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for (let i2 = 1; i2 < path.length - 1; i2++) {
      optimizedSegs.push(graph.table[path[i2]].node);
    }
    return exports.fromArray(mergeSegments(optimizedSegs));
  };
  exports.rawSplit = function rawSplit(data2) {
    return exports.fromArray(
      getSegmentsFromString(data2, Utils2.isKanjiModeEnabled())
    );
  };
})(segments);
const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;
function setupFinderPattern(matrix, version2) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version2);
  for (let i2 = 0; i2 < pos.length; i2++) {
    const row = pos[i2][0];
    const col = pos[i2][1];
    for (let r2 = -1; r2 <= 7; r2++) {
      if (row + r2 <= -1 || size <= row + r2)
        continue;
      for (let c2 = -1; c2 <= 7; c2++) {
        if (col + c2 <= -1 || size <= col + c2)
          continue;
        if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r2 = 8; r2 < size - 8; r2++) {
    const value = r2 % 2 === 0;
    matrix.set(r2, 6, value, true);
    matrix.set(6, r2, value, true);
  }
}
function setupAlignmentPattern(matrix, version2) {
  const pos = AlignmentPattern.getPositions(version2);
  for (let i2 = 0; i2 < pos.length; i2++) {
    const row = pos[i2][0];
    const col = pos[i2][1];
    for (let r2 = -2; r2 <= 2; r2++) {
      for (let c2 = -2; c2 <= 2; c2++) {
        if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupVersionInfo(matrix, version2) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version2);
  let row, col, mod;
  for (let i2 = 0; i2 < 18; i2++) {
    row = Math.floor(i2 / 3);
    col = i2 % 3 + size - 8 - 3;
    mod = (bits >> i2 & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}
function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
  let i2, mod;
  for (i2 = 0; i2 < 15; i2++) {
    mod = (bits >> i2 & 1) === 1;
    if (i2 < 6) {
      matrix.set(i2, 8, mod, true);
    } else if (i2 < 8) {
      matrix.set(i2 + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i2, 8, mod, true);
    }
    if (i2 < 8) {
      matrix.set(8, size - i2 - 1, mod, true);
    } else if (i2 < 9) {
      matrix.set(8, 15 - i2 - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i2 - 1, mod, true);
    }
  }
  matrix.set(size - 8, 8, 1, true);
}
function setupData(matrix, data2) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6)
      col--;
    while (true) {
      for (let c2 = 0; c2 < 2; c2++) {
        if (!matrix.isReserved(row, col - c2)) {
          let dark = false;
          if (byteIndex < data2.length) {
            dark = (data2[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c2, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}
function createData(version2, errorCorrectionLevel2, segments2) {
  const buffer = new BitBuffer();
  segments2.forEach(function(data2) {
    buffer.put(data2.mode.bit, 4);
    buffer.put(data2.getLength(), Mode.getCharCountIndicator(data2.mode, version2));
    data2.write(buffer);
  });
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i2 = 0; i2 < remainingByte; i2++) {
    buffer.put(i2 % 2 ? 17 : 236, 8);
  }
  return createCodewords(buffer, version2, errorCorrectionLevel2);
}
function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;
  const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer2.buffer);
  for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
    const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
    dcData[b2] = buffer.slice(offset, offset + dataSize);
    ecData[b2] = rs.encode(dcData[b2]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }
  const data2 = new Uint8Array(totalCodewords);
  let index = 0;
  let i2, r2;
  for (i2 = 0; i2 < maxDataSize; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      if (i2 < dcData[r2].length) {
        data2[index++] = dcData[r2][i2];
      }
    }
  }
  for (i2 = 0; i2 < ecCount; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      data2[index++] = ecData[r2][i2];
    }
  }
  return data2;
}
function createSymbol(data2, version2, errorCorrectionLevel2, maskPattern2) {
  let segments2;
  if (Array.isArray(data2)) {
    segments2 = Segments.fromArray(data2);
  } else if (typeof data2 === "string") {
    let estimatedVersion = version2;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data2);
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
    }
    segments2 = Segments.fromString(data2, estimatedVersion || 40);
  } else {
    throw new Error("Invalid data");
  }
  const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
  if (!bestVersion) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (!version2) {
    version2 = bestVersion;
  } else if (version2 < bestVersion) {
    throw new Error(
      "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
    );
  }
  const dataBits = createData(version2, errorCorrectionLevel2, segments2);
  const moduleCount = Utils$1.getSymbolSize(version2);
  const modules = new BitMatrix(moduleCount);
  setupFinderPattern(modules, version2);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version2);
  setupFormatInfo(modules, errorCorrectionLevel2, 0);
  if (version2 >= 7) {
    setupVersionInfo(modules, version2);
  }
  setupData(modules, dataBits);
  if (isNaN(maskPattern2)) {
    maskPattern2 = MaskPattern.getBestMask(
      modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
    );
  }
  MaskPattern.applyMask(maskPattern2, modules);
  setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
  return {
    modules,
    version: version2,
    errorCorrectionLevel: errorCorrectionLevel2,
    maskPattern: maskPattern2,
    segments: segments2
  };
}
qrcode.create = function create(data2, options) {
  if (typeof data2 === "undefined" || data2 === "") {
    throw new Error("No input text");
  }
  let errorCorrectionLevel2 = ECLevel.M;
  let version2;
  let mask;
  if (typeof options !== "undefined") {
    errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version2 = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data2, version2, errorCorrectionLevel2, mask);
};
var canvas = {};
var utils = {};
(function(exports) {
  function hex2rgba(hex) {
    if (typeof hex === "number") {
      hex = hex.toString();
    }
    if (typeof hex !== "string") {
      throw new Error("Color should be defined as hex string");
    }
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error("Invalid hex color: " + hex);
    }
    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
        return [c2, c2];
      }));
    }
    if (hexCode.length === 6)
      hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: "#" + hexCode.slice(0, 6).join("")
    };
  }
  exports.getOptions = function getOptions2(options) {
    if (!options)
      options = {};
    if (!options.color)
      options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : void 0;
    const scale = options.scale || 4;
    return {
      width,
      scale: width ? 4 : scale,
      margin,
      color: {
        dark: hex2rgba(options.color.dark || "#000000ff"),
        light: hex2rgba(options.color.light || "#ffffffff")
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };
  exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };
  exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };
  exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data2 = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [opts.color.light, opts.color.dark];
    for (let i2 = 0; i2 < symbolSize; i2++) {
      for (let j = 0; j < symbolSize; j++) {
        let posDst = (i2 * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i2 >= scaledMargin && j >= scaledMargin && i2 < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
          const iSrc = Math.floor((i2 - scaledMargin) / scale);
          const jSrc = Math.floor((j - scaledMargin) / scale);
          pxColor = palette[data2[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
})(utils);
(function(exports) {
  const Utils2 = utils;
  function clearCanvas(ctx, canvas2, size) {
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    if (!canvas2.style)
      canvas2.style = {};
    canvas2.height = size;
    canvas2.width = size;
    canvas2.style.height = size + "px";
    canvas2.style.width = size + "px";
  }
  function getCanvasElement() {
    try {
      return document.createElement("canvas");
    } catch (e2) {
      throw new Error("You need to specify a canvas element");
    }
  }
  exports.render = function render2(qrData, canvas2, options) {
    let opts = options;
    let canvasEl = canvas2;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!canvas2) {
      canvasEl = getCanvasElement();
    }
    opts = Utils2.getOptions(opts);
    const size = Utils2.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext("2d");
    const image = ctx.createImageData(size, size);
    Utils2.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };
  exports.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
    let opts = options;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!opts)
      opts = {};
    const canvasEl = exports.render(qrData, canvas2, opts);
    const type = opts.type || "image/png";
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
})(canvas);
var svgTag = {};
const Utils = utils;
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x2, y2) {
  let str = cmd + x2;
  if (typeof y2 !== "undefined")
    str += " " + y2;
  return str;
}
function qrToPath(data2, size, margin) {
  let path = "";
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i2 = 0; i2 < data2.length; i2++) {
    const col = Math.floor(i2 % size);
    const row = Math.floor(i2 / size);
    if (!col && !newRow)
      newRow = true;
    if (data2[i2]) {
      lineLength++;
      if (!(i2 > 0 && col > 0 && data2[i2 - 1])) {
        path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data2[i2 + 1])) {
        path += svgCmd("h", lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
svgTag.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data2 = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
  const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data2, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
  const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
  if (typeof cb === "function") {
    cb(null, svgTag2);
  }
  return svgTag2;
};
const canPromise = canPromise$1;
const QRCode = qrcode;
const CanvasRenderer = canvas;
const SvgRenderer = svgTag;
function renderCanvas(renderFunc, canvas2, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === "function";
  if (!isLastArgCb && !canPromise()) {
    throw new Error("Callback required as last argument");
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 3) {
      if (canvas2.getContext && typeof cb === "undefined") {
        cb = opts;
        opts = void 0;
      } else {
        cb = opts;
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 1) {
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 2 && !canvas2.getContext) {
      opts = text;
      text = canvas2;
      canvas2 = void 0;
    }
    return new Promise(function(resolve, reject) {
      try {
        const data2 = QRCode.create(text, opts);
        resolve(renderFunc(data2, canvas2, opts));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  try {
    const data2 = QRCode.create(text, opts);
    cb(null, renderFunc(data2, canvas2, opts));
  } catch (e2) {
    cb(e2);
  }
}
browser.create = QRCode.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
browser.toString = renderCanvas.bind(null, function(data2, _2, opts) {
  return SvgRenderer.render(data2, opts);
});
var It = Object.defineProperty, st = Object.getOwnPropertySymbols, Et = Object.prototype.hasOwnProperty, Mt = Object.prototype.propertyIsEnumerable, ct = (e2, t2, a2) => t2 in e2 ? It(e2, t2, { enumerable: true, configurable: true, writable: true, value: a2 }) : e2[t2] = a2, dt = (e2, t2) => {
  for (var a2 in t2 || (t2 = {}))
    Et.call(t2, a2) && ct(e2, a2, t2[a2]);
  if (st)
    for (var a2 of st(t2))
      Mt.call(t2, a2) && ct(e2, a2, t2[a2]);
  return e2;
};
function ht() {
  return { default: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(51,150,255)", background: "rgb(232,242,252)" }, dark: { inverse: "rgb(255,255,255)", foreground: "rgb(71,161,255)", background: "rgb(21,38,55)" } }, magenta: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(198,83,128)", background: "rgb(244,221,230)" }, dark: { inverse: "rgb(255,255,255)", foreground: "rgb(203,77,140)", background: "rgb(57,35,43)" } }, blue: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(61,92,245)", background: "rgb(232,235,252)" }, dark: { inverse: "rgb(255,255,255)", foreground: "rgb(81,109,251)", background: "rgb(28,33,59)" } }, orange: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(234,140,46)", background: "rgb(244,236,221)" }, dark: { inverse: "rgb(0,0,0)", foreground: "rgb(255,166,76)", background: "rgb(57,50,34)" } }, green: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(38,181,98)", background: "rgb(218,246,218)" }, dark: { inverse: "rgb(0,0,0)", foreground: "rgb(38,217,98)", background: "rgb(35,52,40)" } }, purple: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(121,76,255)", background: "rgb(225,218,246)" }, dark: { inverse: "rgb(255,255,255)", foreground: "rgb(144,110,247)", background: "rgb(36,31,51)" } }, teal: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(43,182,182)", background: "rgb(217,242,238)" }, dark: { inverse: "rgb(0,0,0)", foreground: "rgb(54,226,226)", background: "rgb(29,48,52)" } }, blackWhite: { light: { inverse: "rgb(255,255,255)", foreground: "rgb(20,20,20)", background: "rgb(255,255,255)" }, dark: { inverse: "rgb(0,0,0)", foreground: "rgb(255,255,255)", background: "rgb(20,20,20)" } } };
}
function Wt() {
  return { light: { foreground: { 1: "rgb(20,20,20)", 2: "rgb(121,134,134)", 3: "rgb(158,169,169)" }, background: { 1: "rgb(255,255,255)", 2: "rgb(241,243,243)", 3: "rgb(228,231,231)" }, overlay: "rgba(0,0,0,0.1)" }, dark: { foreground: { 1: "rgb(228,231,231)", 2: "rgb(148,158,158)", 3: "rgb(110,119,119)" }, background: { 1: "rgb(20,20,20)", 2: "rgb(39,42,42)", 3: "rgb(59,64,64)" }, overlay: "rgba(255,255,255,0.1" } };
}
function At() {
  return { default: { 1: "#B6B9C9", 2: "#C653C6", 3: "#794DFF", 4: "#2EB8B8" }, blue: { 1: "#E8EBFD", 2: "#C653C6", 3: "#2DD2C5", 4: "#3D5CF5" }, magenta: { 1: "#F4DDE6", 2: "#E0D452", 3: "#F09475", 4: "#D1618D" }, orange: { 1: "#F4ECDD", 2: "#B4EB47", 3: "#3075E8", 4: "#EB9947" }, green: { 1: "#DAF6DA", 2: "#E06B92", 3: "#99E54D", 4: "#26B562" }, purple: { 1: "#E1DAF6", 2: "#EB9947", 3: "#E06B92", 4: "#794DFF" }, teal: { 1: "#D9F2EE", 2: "#F09475", 3: "#794DFF", 4: "#2EB8B8" }, blackWhite: { 1: "#E3E8E8", 2: "#98AEAE", 3: "#516767", 4: "#242E2E" } };
}
const u = { color() {
  var e2, t2;
  const a2 = (e2 = W.state.themeColor) != null ? e2 : "default", n2 = (t2 = W.state.themeMode) != null ? t2 : "dark", o3 = ht()[a2][n2], r2 = Wt()[n2], i2 = At()[a2];
  return { foreground: dt({ accent: o3.foreground, inverse: o3.inverse }, r2.foreground), background: dt({ accent: o3.background }, r2.background), gradient: i2, overlay: r2.overlay, error: "rgb(242, 90, 103)" };
}, setTheme() {
  const e2 = document.querySelector(":root"), { themeZIndex: t2 } = W.state;
  if (e2) {
    const a2 = { "--w3m-color-fg-accent": u.color().foreground.accent, "--w3m-color-fg-inverse": u.color().foreground.inverse, "--w3m-color-fg-1": u.color().foreground[1], "--w3m-color-fg-2": u.color().foreground[2], "--w3m-color-fg-3": u.color().foreground[3], "--w3m-color-bg-1": u.color().background[1], "--w3m-color-bg-2": u.color().background[2], "--w3m-color-bg-3": u.color().background[3], "--w3m-color-overlay": u.color().overlay, "--w3m-color-err": u.color().error, "--w3m-color-success": ht().green.light.foreground, "--w3m-gradient-1": u.color().gradient[1], "--w3m-gradient-2": u.color().gradient[2], "--w3m-gradient-3": u.color().gradient[3], "--w3m-gradient-4": u.color().gradient[4], "--w3m-modal-z-index": `${t2}` };
    Object.entries(a2).forEach(([n2, o3]) => e2.style.setProperty(n2, o3));
  }
}, globalCss: i$3`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-color-fg-inverse);background:var(--w3m-color-fg-accent)}` }, Lt = i$3`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--w3m-color-fg-inverse)}`;
var jt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, ke = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? St(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && jt(t2, a2, o3), o3;
};
let te = class extends s {
  constructor() {
    super(...arguments), this.icon = void 0, this.label = "", this.onClick = () => null;
  }
  render() {
    return y`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
  }
};
te.styles = [u.globalCss, Lt], ke([e$1()], te.prototype, "icon", 2), ke([e$1()], te.prototype, "label", 2), ke([e$1()], te.prototype, "onClick", 2), te = ke([e$2("w3m-box-button")], te);
const Pt = i$3`button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--w3m-color-fg-accent)}button path{fill:var(--w3m-color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3)}`;
var _t = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, le = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Dt(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && _t(t2, a2, o3), o3;
};
let G = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null;
  }
  render() {
    const e2 = { "w3m-icon-left": this.iconLeft !== void 0, "w3m-icon-right": this.iconRight !== void 0 };
    return y`<button class="${o2(e2)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>${this.iconRight}</button>`;
  }
};
G.styles = [u.globalCss, Pt], le([e$1()], G.prototype, "disabled", 2), le([e$1()], G.prototype, "iconLeft", 2), le([e$1()], G.prototype, "iconRight", 2), le([e$1()], G.prototype, "onClick", 2), G = le([e$2("w3m-button")], G);
const Tt = i$3`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}`;
var Nt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Te = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Rt(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Nt(t2, a2, o3), o3;
};
let se = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.variant = "primary";
  }
  render() {
    const e2 = { "w3m-secondary": this.variant === "secondary" };
    return y`<button ?disabled="${this.disabled}" class="${o2(e2)}"><slot></slot></button>`;
  }
};
se.styles = [u.globalCss, Tt], Te([e$1()], se.prototype, "disabled", 2), Te([e$1()], se.prototype, "variant", 2), se = Te([e$2("w3m-button-big")], se);
let Bt = class {
  constructor(...t2) {
    this.angle = 0, this.t = 1253106, this.last = 0, this.height = 500, this.amp = 300, this.seed = 15, this.freqX = 14e-5, this.freqY = 29e-5, this.freqDelta = 1e-5, this.activeColors = [1, 1, 1, 1], this.isMetaKey = false, this.playing = false, mt(this, "resize", () => {
      this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 550 ? 5 : 6;
    }), mt(this, "animate", (a2) => {
      if (this.playing) {
        if (this.shouldSkipFrame(a2) || (this.t += Math.min(a2 - this.last, 1e3 / 15), this.last = a2, this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render()), this.last !== 0 && this.isStatic)
          return this.minigl.render();
        requestAnimationFrame(this.animate);
      }
    });
  }
  play(t2) {
    this.el = t2, this.connect();
  }
  stop() {
    this.playing = false;
  }
  async connect() {
    this.shaderFiles = { vertex: "varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}", noise: `
// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`, blend: `
// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend
vec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}`, fragment: "varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}" }, this.conf = { density: [0.06, 0.16] }, this.minigl = new Ht(this.el, null, null, true), requestAnimationFrame(() => {
      this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars());
    });
  }
  initMaterial() {
    this.uniforms = { u_time: new this.minigl.Uniform({ value: 0 }), u_shadow_power: new this.minigl.Uniform({ value: 5 }), u_darken_top: new this.minigl.Uniform({ value: this.el.dataset.jsDarkenTop === "" ? 1 : 0 }), u_active_colors: new this.minigl.Uniform({ value: this.activeColors, type: "vec4" }), u_global: new this.minigl.Uniform({ value: { noiseFreq: new this.minigl.Uniform({ value: [this.freqX, this.freqY], type: "vec2" }), noiseSpeed: new this.minigl.Uniform({ value: 5e-6 }) }, type: "struct" }), u_vertDeform: new this.minigl.Uniform({ value: { incline: new this.minigl.Uniform({ value: Math.sin(this.angle) / Math.cos(this.angle) }), offsetTop: new this.minigl.Uniform({ value: -0.5 }), offsetBottom: new this.minigl.Uniform({ value: -0.5 }), noiseFreq: new this.minigl.Uniform({ value: [3, 4], type: "vec2" }), noiseAmp: new this.minigl.Uniform({ value: this.amp }), noiseSpeed: new this.minigl.Uniform({ value: 10 }), noiseFlow: new this.minigl.Uniform({ value: 3 }), noiseSeed: new this.minigl.Uniform({ value: this.seed }) }, type: "struct", excludeFrom: "fragment" }), u_baseColor: new this.minigl.Uniform({ value: this.sectionColors[0], type: "vec3", excludeFrom: "fragment" }), u_waveLayers: new this.minigl.Uniform({ value: [], excludeFrom: "fragment", type: "array" }) };
    for (let t2 = 1; t2 < this.sectionColors.length; t2 += 1)
      this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({ value: { color: new this.minigl.Uniform({ value: this.sectionColors[t2], type: "vec3" }), noiseFreq: new this.minigl.Uniform({ value: [2 + t2 / this.sectionColors.length, 3 + t2 / this.sectionColors.length], type: "vec2" }), noiseSpeed: new this.minigl.Uniform({ value: 11 + 0.3 * t2 }), noiseFlow: new this.minigl.Uniform({ value: 6.5 + 0.3 * t2 }), noiseSeed: new this.minigl.Uniform({ value: this.seed + 10 * t2 }), noiseFloor: new this.minigl.Uniform({ value: 0.1 }), noiseCeil: new this.minigl.Uniform({ value: 0.63 + 0.07 * t2 }) }, type: "struct" }));
    return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join(""), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
  }
  initMesh() {
    this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry(), this.mesh = new this.minigl.Mesh(this.geometry, this.material);
  }
  shouldSkipFrame(t2) {
    return !!window.document.hidden || parseInt(t2, 10) % 2 == 0 || void 0;
  }
  updateFrequency(t2) {
    this.freqX += t2, this.freqY += t2;
  }
  toggleColor(t2) {
    this.activeColors[t2] = this.activeColors[t2] === 0 ? 1 : 0;
  }
  init() {
    this.playing = true, this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate);
  }
  waitForCssVars() {
    this.computedCanvasStyle && this.computedCanvasStyle.getPropertyValue("--w3m-gradient-1").indexOf("#") !== -1 ? this.init() : this.init();
  }
  initGradientColors() {
    this.sectionColors = ["--w3m-gradient-1", "--w3m-gradient-2", "--w3m-gradient-3", "--w3m-gradient-4"].map((t2) => {
      let a2 = this.computedCanvasStyle.getPropertyValue(t2).trim();
      return a2.length === 4 && (a2 = `#${a2.substr(1).split("").map((n2) => n2 + n2).join("")}`), a2 && `0x${a2.substr(1)}`;
    }).filter(Boolean).map(Ut);
  }
};
function Ut(e2) {
  return [(e2 >> 16 & 255) / 255, (e2 >> 8 & 255) / 255, (255 & e2) / 255];
}
function mt(e2, t2, a2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: a2, enumerable: true, configurable: true, writable: true }) : e2[t2] = a2, e2;
}
let Ht = class {
  constructor(t2, a2, n2) {
    const o3 = this;
    o3.canvas = t2, o3.gl = o3.canvas.getContext("webgl", { antialias: true }), o3.meshes = [];
    const r2 = o3.gl;
    a2 && n2 && this.setSize(a2, n2), Object.defineProperties(o3, { Material: { enumerable: false, value: class {
      constructor(c2, m2, s2 = {}) {
        const d3 = this;
        function v2(N2, E2) {
          const x2 = r2.createShader(N2);
          return r2.shaderSource(x2, E2), r2.compileShader(x2), r2.getShaderParameter(x2, r2.COMPILE_STATUS) || console.error(r2.getShaderInfoLog(x2)), x2;
        }
        function O(N2, E2) {
          return Object.entries(N2).map(([x2, A2]) => A2.getDeclaration(x2, E2)).join("");
        }
        d3.uniforms = s2, d3.uniformInstances = [];
        const C2 = "precision highp float;";
        d3.vertexSource = `${C2} attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;${O(o3.commonUniforms, "vertex")} ${O(s2, "vertex")} ${c2}`, d3.Source = `${C2} ${O(o3.commonUniforms, "fragment")} ${O(s2, "fragment")} ${m2} `, d3.vertexShader = v2(r2.VERTEX_SHADER, d3.vertexSource), d3.fragmentShader = v2(r2.FRAGMENT_SHADER, d3.Source), d3.program = r2.createProgram(), r2.attachShader(d3.program, d3.vertexShader), r2.attachShader(d3.program, d3.fragmentShader), r2.linkProgram(d3.program), r2.getProgramParameter(d3.program, r2.LINK_STATUS) || console.error(r2.getProgramInfoLog(d3.program)), r2.useProgram(d3.program), d3.attachUniforms(void 0, o3.commonUniforms), d3.attachUniforms(void 0, d3.uniforms);
      }
      attachUniforms(c2, m2) {
        const s2 = this;
        c2 === void 0 ? Object.entries(m2).forEach(([d3, v2]) => {
          s2.attachUniforms(d3, v2);
        }) : m2.type == "array" ? m2.value.forEach((d3, v2) => s2.attachUniforms(`${c2}[${v2}]`, d3)) : m2.type == "struct" ? Object.entries(m2.value).forEach(([d3, v2]) => s2.attachUniforms(`${c2}.${d3}`, v2)) : s2.uniformInstances.push({ uniform: m2, location: r2.getUniformLocation(s2.program, c2) });
      }
    } }, Uniform: { enumerable: false, value: class {
      constructor(c2) {
        this.type = "float", Object.assign(this, c2), this.typeFn = { float: "1f", int: "1i", vec2: "2fv", vec3: "3fv", vec4: "4fv", mat4: "Matrix4fv" }[this.type] || "1f", this.update();
      }
      update(c2) {
        this.value !== void 0 && r2[`uniform${this.typeFn}`](c2, this.typeFn.indexOf("Matrix") === 0 ? this.transpose : this.value, this.typeFn.indexOf("Matrix") === 0 ? this.value : null);
      }
      getDeclaration(c2, m2, s2) {
        const d3 = this;
        if (d3.excludeFrom !== m2) {
          if (d3.type === "array")
            return d3.value[0].getDeclaration(c2, m2, d3.value.length) + `const int ${c2}_length=${d3.value.length};`;
          if (d3.type === "struct") {
            let v2 = c2.replace("u_", "");
            return v2 = v2.charAt(0).toUpperCase() + v2.slice(1), `uniform struct ${v2} {` + Object.entries(d3.value).map(([O, C2]) => C2.getDeclaration(O, m2).replace(/^uniform/, "")).join("") + `} ${c2}${s2 > 0 ? `[${s2}]` : ""};`;
          }
          return `uniform ${d3.type} ${c2}${s2 > 0 ? `[${s2}]` : ""};`;
        }
      }
    } }, PlaneGeometry: { enumerable: false, value: class {
      constructor(c2, m2, s2, d3, v2) {
        r2.createBuffer(), this.attributes = { position: new o3.Attribute({ target: r2.ARRAY_BUFFER, size: 3 }), uv: new o3.Attribute({ target: r2.ARRAY_BUFFER, size: 2 }), uvNorm: new o3.Attribute({ target: r2.ARRAY_BUFFER, size: 2 }), index: new o3.Attribute({ target: r2.ELEMENT_ARRAY_BUFFER, size: 3, type: r2.UNSIGNED_SHORT }) }, this.setTopology(s2, d3), this.setSize(c2, m2, v2);
      }
      setTopology(c2 = 1, m2 = 1) {
        const s2 = this;
        s2.xSegCount = c2, s2.ySegCount = m2, s2.vertexCount = (s2.xSegCount + 1) * (s2.ySegCount + 1), s2.quadCount = s2.xSegCount * s2.ySegCount * 2, s2.attributes.uv.values = new Float32Array(2 * s2.vertexCount), s2.attributes.uvNorm.values = new Float32Array(2 * s2.vertexCount), s2.attributes.index.values = new Uint16Array(3 * s2.quadCount);
        for (let d3 = 0; d3 <= s2.ySegCount; d3++)
          for (let v2 = 0; v2 <= s2.xSegCount; v2++) {
            const O = d3 * (s2.xSegCount + 1) + v2;
            if (s2.attributes.uv.values[2 * O] = v2 / s2.xSegCount, s2.attributes.uv.values[2 * O + 1] = 1 - d3 / s2.ySegCount, s2.attributes.uvNorm.values[2 * O] = v2 / s2.xSegCount * 2 - 1, s2.attributes.uvNorm.values[2 * O + 1] = 1 - d3 / s2.ySegCount * 2, v2 < s2.xSegCount && d3 < s2.ySegCount) {
              const C2 = d3 * s2.xSegCount + v2;
              s2.attributes.index.values[6 * C2] = O, s2.attributes.index.values[6 * C2 + 1] = O + 1 + s2.xSegCount, s2.attributes.index.values[6 * C2 + 2] = O + 1, s2.attributes.index.values[6 * C2 + 3] = O + 1, s2.attributes.index.values[6 * C2 + 4] = O + 1 + s2.xSegCount, s2.attributes.index.values[6 * C2 + 5] = O + 2 + s2.xSegCount;
            }
          }
        s2.attributes.uv.update(), s2.attributes.uvNorm.update(), s2.attributes.index.update();
      }
      setSize(c2 = 1, m2 = 1, s2 = "xz") {
        const d3 = this;
        d3.width = c2, d3.height = m2, d3.orientation = s2, d3.attributes.position.values && d3.attributes.position.values.length === 3 * d3.vertexCount || (d3.attributes.position.values = new Float32Array(3 * d3.vertexCount));
        const v2 = c2 / -2, O = m2 / -2, C2 = c2 / d3.xSegCount, N2 = m2 / d3.ySegCount;
        for (let E2 = 0; E2 <= d3.ySegCount; E2++) {
          const x2 = O + E2 * N2;
          for (let A2 = 0; A2 <= d3.xSegCount; A2++) {
            const M2 = v2 + A2 * C2, P2 = E2 * (d3.xSegCount + 1) + A2;
            d3.attributes.position.values[3 * P2 + "xyz".indexOf(s2[0])] = M2, d3.attributes.position.values[3 * P2 + "xyz".indexOf(s2[1])] = -x2;
          }
        }
        d3.attributes.position.update();
      }
    } }, Mesh: { enumerable: false, value: class {
      constructor(c2, m2) {
        const s2 = this;
        s2.geometry = c2, s2.material = m2, s2.attributeInstances = [], Object.entries(s2.geometry.attributes).forEach(([d3, v2]) => {
          s2.attributeInstances.push({ attribute: v2, location: v2.attach(d3, s2.material.program) });
        }), o3.meshes.push(s2);
      }
      draw() {
        r2.useProgram(this.material.program), this.material.uniformInstances.forEach(({ uniform: c2, location: m2 }) => c2.update(m2)), this.attributeInstances.forEach(({ attribute: c2, location: m2 }) => c2.use(m2)), r2.drawElements(r2.TRIANGLES, this.geometry.attributes.index.values.length, r2.UNSIGNED_SHORT, 0);
      }
      remove() {
        o3.meshes = o3.meshes.filter((c2) => c2 != this);
      }
    } }, Attribute: { enumerable: false, value: class {
      constructor(c2) {
        this.type = r2.FLOAT, this.normalized = false, this.buffer = r2.createBuffer(), Object.assign(this, c2), this.update();
      }
      update() {
        this.values !== void 0 && (r2.bindBuffer(this.target, this.buffer), r2.bufferData(this.target, this.values, r2.STATIC_DRAW));
      }
      attach(c2, m2) {
        const s2 = r2.getAttribLocation(m2, c2);
        return this.target === r2.ARRAY_BUFFER && (r2.enableVertexAttribArray(s2), r2.vertexAttribPointer(s2, this.size, this.type, this.normalized, 0, 0)), s2;
      }
      use(c2) {
        r2.bindBuffer(this.target, this.buffer), this.target === r2.ARRAY_BUFFER && (r2.enableVertexAttribArray(c2), r2.vertexAttribPointer(c2, this.size, this.type, this.normalized, 0, 0));
      }
    } } });
    const i2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    o3.commonUniforms = { projectionMatrix: new o3.Uniform({ type: "mat4", value: i2 }), modelViewMatrix: new o3.Uniform({ type: "mat4", value: i2 }), resolution: new o3.Uniform({ type: "vec2", value: [1, 1] }), aspectRatio: new o3.Uniform({ type: "float", value: 1 }) };
  }
  setSize(t2 = 640, a2 = 480) {
    this.width = t2, this.height = a2, this.canvas.width = t2, this.canvas.height = a2, this.gl.viewport(0, 0, t2, a2), this.commonUniforms.resolution.value = [t2, a2], this.commonUniforms.aspectRatio.value = t2 / a2;
  }
  setOrthographicCamera(t2 = 0, a2 = 0, n2 = 0, o3 = -2e3, r2 = 2e3) {
    this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (o3 - r2), 0, t2, a2, n2, 1];
  }
  render() {
    this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach((t2) => t2.draw());
  }
};
const g = { CROSS_ICON: w`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`, NOISE_TEXTURE: w`<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>`, WALLET_CONNECT_LOGO: w`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`, WALLET_CONNECT_ICON: w`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`, WALLET_CONNECT_ICON_COLORED: w`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`, BACK_ICON: w`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`, COPY_ICON: w`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`, RETRY_ICON: w`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`, DESKTOP_ICON: w`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, MOBILE_ICON: w`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`, ARROW_DOWN_ICON: w`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`, ARROW_UP_RIGHT_ICON: w`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, ARROW_RIGHT_ICON: w`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`, QRCODE_ICON: w`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`, SCAN_ICON: w`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`, CHECKMARK_ICON: w`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`, HELP_ETH_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`, HELP_PAINTING_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`, HELP_CHART_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, HELP_KEY_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, HELP_USER_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`, HELP_LOCK_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`, HELP_COMPAS_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`, HELP_NOUN_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`, HELP_DAO_IMG: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, SEARCH_ICON: w`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`, HELP_ICON: w`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`, WALLET_ICON: w`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`, NETWORK_PLACEHOLDER: w`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`, WALLET_PLACEHOLDER: w`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, TOKEN_PLACEHOLDER: w`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`, ACCOUNT_COPY: w`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`, ACCOUNT_DISCONNECT: w`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>` }, Zt = { 1: "692ed6ba-e569-459a-556a-776476829e00", 42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200", 43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00", 56: "93564157-2e8e-4ce7-81df-b264dbee9b00", 250: "06b26297-fe0c-4733-5d6b-ffa5498aac00", 10: "ab9c186a-c52f-464b-2906-ca59d760a400", 137: "41d04d42-da3b-4453-8506-668cc0727900", 100: "02b53f6a-e3d4-479e-1cb4-21178987d100", 9001: "f926ff41-260d-4028-635e-91913fc28e00", 324: "b310f07f-4ef7-49f3-7073-2a0a39685800", 314: "5a73b3dd-af74-424e-cae0-0de859ee9400", 4689: "34e68754-e536-40da-c153-6ef2e7188a00", 1088: "3897a66d-40b9-4833-162f-a2c90531c900", 1284: "161038da-44ae-4ec7-1208-0ea569454b00", 1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00" };
var Z = ((e2) => (e2.metaMask = "metaMask", e2.trust = "trust", e2.phantom = "phantom", e2.brave = "brave", e2.spotEthWallet = "spotEthWallet", e2.exodus = "exodus", e2.tokenPocket = "tokenPocket", e2.frame = "frame", e2.tally = "tally", e2.coinbaseWallet = "coinbaseWallet", e2.core = "core", e2.bitkeep = "bitkeep", e2.mathWallet = "mathWallet", e2.opera = "opera", e2.tokenary = "tokenary", e2["1inch"] = "1inch", e2.kuCoinWallet = "kuCoinWallet", e2.ledger = "ledger", e2))(Z || {});
const J = { injectedPreset: { metaMask: { name: "MetaMask", icon: "619537c0-2ff3-4c78-9ed8-a05e7567f300", url: "https://metamask.io", isMobile: true, isInjected: true }, trust: { name: "Trust", icon: "0528ee7e-16d1-4089-21e3-bbfb41933100", url: "https://trustwallet.com", isMobile: true, isInjected: true }, spotEthWallet: { name: "Spot", icon: "1bf33a89-b049-4a1c-d1f6-4dd7419ee400", url: "https://www.spot-wallet.com", isMobile: true, isInjected: true }, phantom: { name: "Phantom", icon: "62471a22-33cb-4e65-5b54-c3d9ea24b900", url: "https://phantom.app", isInjected: true }, core: { name: "Core", icon: "35f9c46e-cc57-4aa7-315d-e6ccb2a1d600", url: "https://core.app", isMobile: true, isInjected: true }, bitkeep: { name: "BitKeep", icon: "3f7075d0-4ab7-4db5-404d-3e4c05e6fe00", url: "https://bitkeep.com", isMobile: true, isInjected: true }, tokenPocket: { name: "TokenPocket", icon: "f3119826-4ef5-4d31-4789-d4ae5c18e400", url: "https://www.tokenpocket.pro", isMobile: true, isInjected: true }, mathWallet: { name: "MathWallet", icon: "26a8f588-3231-4411-60ce-5bb6b805a700", url: "https://mathwallet.org", isMobile: true, isInjected: true }, exodus: { name: "Exodus", icon: "4c16cad4-cac9-4643-6726-c696efaf5200", url: "https://www.exodus.com", isMobile: true, isDesktop: true, isInjected: true }, kuCoinWallet: { name: "KuCoin Wallet", icon: "1e47340b-8fd7-4ad6-17e7-b2bd651fae00", url: "https://kuwallet.com", isMobile: true, isInjected: true }, ledger: { name: "Ledger", icon: "a7f416de-aa03-4c5e-3280-ab49269aef00", url: "https://www.ledger.com", isDesktop: true }, brave: { name: "Brave", icon: "125e828e-9936-4451-a8f2-949c119b7400", url: "https://brave.com/wallet", isInjected: true }, frame: { name: "Frame", icon: "cd492418-ea85-4ef1-aeed-1c9e20b58900", url: "https://frame.sh", isInjected: true }, tally: { name: "Tally", icon: "98d2620c-9fc8-4a1c-31bc-78d59d00a300", url: "https://tallyho.org", isInjected: true }, coinbaseWallet: { name: "Coinbase", icon: "f8068a7f-83d7-4190-1f94-78154a12c600", url: "https://www.coinbase.com/wallet", isInjected: true }, opera: { name: "Opera", icon: "877fa1a4-304d-4d45-ca8e-f76d1a556f00", url: "https://www.opera.com/crypto", isInjected: true }, tokenary: { name: "Tokenary", icon: "5e481041-dc3c-4a81-373a-76bbde91b800", url: "https://tokenary.io", isDesktop: true, isInjected: true }, ["1inch"]: { name: "1inch Wallet", icon: "dce1ee99-403f-44a9-9f94-20de30616500", url: "https://1inch.io/wallet", isMobile: true } }, getInjectedId(e2) {
  if (e2.toUpperCase() !== "INJECTED" && e2.length)
    return e2;
  const { ethereum: t2, spotEthWallet: a2, coinbaseWalletExtension: n2 } = window;
  return t2 ? t2.isTrust || t2.isTrustWallet ? "trust" : t2.isPhantom ? "phantom" : t2.isBraveWallet ? "brave" : a2 ? "spotEthWallet" : t2.isExodus ? "exodus" : t2.isTokenPocket ? "tokenPocket" : t2.isFrame ? "frame" : t2.isTally ? "tally" : n2 ? "coinbaseWallet" : t2.isAvalanche ? "core" : t2.isBitKeep ? "bitkeep" : t2.isMathWallet ? "mathWallet" : t2.isOpera ? "opera" : t2.isTokenary ? "tokenary" : t2.isOneInchIOSWallet || t2.isOneInchAndroidWallet ? "1inch" : t2.isKuCoinWallet ? "kuCoinWallet" : t2.isMetaMask ? "metaMask" : "injected" : "metaMask";
}, getInjectedName(e2) {
  var t2, a2;
  if (e2.length && e2.toUpperCase() !== "INJECTED")
    return e2;
  const n2 = J.getInjectedId("");
  return (a2 = (t2 = J.injectedPreset[n2]) == null ? void 0 : t2.name) != null ? a2 : "Injected";
} }, Ft = { ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" }, WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" }, AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" }, FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" }, BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" }, MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" }, OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" }, xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" }, EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" }, METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" }, IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" } };
var zt = Object.defineProperty, pt = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Gt = Object.prototype.propertyIsEnumerable, ut = (e2, t2, a2) => t2 in e2 ? zt(e2, t2, { enumerable: true, configurable: true, writable: true, value: a2 }) : e2[t2] = a2, qt = (e2, t2) => {
  for (var a2 in t2 || (t2 = {}))
    Vt.call(t2, a2) && ut(e2, a2, t2[a2]);
  if (pt)
    for (var a2 of pt(t2))
      Gt.call(t2, a2) && ut(e2, a2, t2[a2]);
  return e2;
};
const h = { MOBILE_BREAKPOINT: 600, W3M_RECENT_WALLET: "W3M_RECENT_WALLET", rejectStandaloneButtonComponent() {
  const { isStandalone: e2 } = a$2.state;
  if (e2)
    throw new Error("Web3Modal button components are not available in standalone mode.");
}, getShadowRootElement(e2, t2) {
  const a2 = e2.renderRoot.querySelector(t2);
  if (!a2)
    throw new Error(`${t2} not found`);
  return a2;
}, getWalletId(e2) {
  return J.getInjectedId(e2);
}, getWalletIcon(e2) {
  var t2, a2;
  const n2 = (t2 = J.injectedPreset[e2]) == null ? void 0 : t2.icon, { projectId: o3, walletImages: r2 } = W.state;
  return (a2 = r2 == null ? void 0 : r2[e2]) != null ? a2 : o3 && n2 ? A$1.getImageUrl(n2) : "";
}, getWalletName(e2, t2 = false) {
  const a2 = J.getInjectedName(e2);
  return t2 ? a2.split(" ")[0] : a2;
}, getChainIcon(e2) {
  var t2;
  const a2 = Zt[e2], { projectId: n2, chainImages: o3 } = W.state;
  return (t2 = o3 == null ? void 0 : o3[e2]) != null ? t2 : n2 && a2 ? A$1.getImageUrl(a2) : "";
}, getTokenIcon(e2) {
  var t2, a2;
  const n2 = (t2 = Ft[e2]) == null ? void 0 : t2.icon, { projectId: o3, tokenImages: r2 } = W.state;
  return (a2 = r2 == null ? void 0 : r2[e2]) != null ? a2 : o3 && n2 ? A$1.getImageUrl(n2) : "";
}, isMobileAnimation() {
  return window.innerWidth <= h.MOBILE_BREAKPOINT;
}, async preloadImage(e2) {
  return new Promise((t2, a2) => {
    const n2 = new Image();
    n2.onload = t2, n2.onerror = a2, n2.src = e2;
  });
}, getErrorMessage(e2) {
  return e2 instanceof Error ? e2.message : "Unknown Error";
}, debounce(e2, t2 = 500) {
  let a2;
  return (...n2) => {
    function o3() {
      e2(...n2);
    }
    a2 && clearTimeout(a2), a2 = setTimeout(o3, t2);
  };
}, async handleMobileLinking(e2) {
  const { standaloneUri: t2, selectedChain: a2 } = a$2.state, { links: n2, name: o3 } = e2;
  function r2(i2) {
    let c2 = "";
    n2 != null && n2.universal ? c2 = d$2.formatUniversalUrl(n2.universal, i2, o3) : n2 != null && n2.native && (c2 = d$2.formatNativeUrl(n2.native, i2, o3)), d$2.openHref(c2);
  }
  t2 ? (h.setRecentWallet(e2), r2(t2)) : (await L.client().connectWalletConnect((i2) => {
    r2(i2);
  }, a2 == null ? void 0 : a2.id), h.setRecentWallet(e2), k$1.close());
}, async handleAndroidLinking() {
  const { standaloneUri: e2, selectedChain: t2 } = a$2.state;
  e2 ? d$2.openHref(e2) : (await L.client().connectWalletConnect((a2) => {
    d$2.setWalletConnectAndroidDeepLink(a2), d$2.openHref(a2);
  }, t2 == null ? void 0 : t2.id), k$1.close());
}, async handleUriCopy() {
  const { standaloneUri: e2 } = a$2.state;
  if (e2)
    await navigator.clipboard.writeText(e2);
  else {
    const t2 = L.client().walletConnectUri;
    await navigator.clipboard.writeText(t2);
  }
  P$1.openToast("Link copied", "success");
}, async handleConnectorConnection(e2, t2) {
  try {
    const { selectedChain: a2 } = a$2.state;
    await L.client().connectConnector(e2, a2 == null ? void 0 : a2.id), k$1.close();
  } catch (a2) {
    console.error(a2), t2 ? t2() : P$1.openToast(h.getErrorMessage(a2), "error");
  }
}, getCustomWallets() {
  var e2;
  const { desktopWallets: t2, mobileWallets: a2 } = W.state;
  return (e2 = d$2.isMobile() ? a2 : t2) != null ? e2 : [];
}, getCustomImageUrls() {
  const { chainImages: e2, walletImages: t2 } = W.state, a2 = Object.values(e2 ?? {}), n2 = Object.values(t2 ?? {});
  return Object.values([...a2, ...n2]);
}, getConnectorImageUrls() {
  return L.client().getConnectors().map(({ id: e2 }) => J.getInjectedId(e2)).map((e2) => h.getWalletIcon(e2));
}, truncate(e2, t2 = 8) {
  return e2.length <= t2 ? e2 : `${e2.substring(0, 4)}...${e2.substring(e2.length - 4)}`;
}, generateAvatarColors(e2) {
  var t2;
  const a2 = (t2 = e2.match(/.{1,7}/g)) == null ? void 0 : t2.splice(0, 5), n2 = [];
  a2 == null ? void 0 : a2.forEach((r2) => {
    let i2 = 0;
    for (let m2 = 0; m2 < r2.length; m2 += 1)
      i2 = r2.charCodeAt(m2) + ((i2 << 5) - i2), i2 = i2 & i2;
    const c2 = [0, 0, 0];
    for (let m2 = 0; m2 < 3; m2 += 1) {
      const s2 = i2 >> m2 * 8 & 255;
      c2[m2] = s2;
    }
    n2.push(`rgb(${c2[0]}, ${c2[1]}, ${c2[2]})`);
  });
  const o3 = document.querySelector(":root");
  if (o3) {
    const r2 = { "--w3m-color-av-1": n2[0], "--w3m-color-av-2": n2[1], "--w3m-color-av-3": n2[2], "--w3m-color-av-4": n2[3], "--w3m-color-av-5": n2[4] };
    Object.entries(r2).forEach(([i2, c2]) => o3.style.setProperty(i2, c2));
  }
}, setRecentWallet(e2) {
  const { walletConnectVersion: t2 } = a$2.state;
  localStorage.setItem(h.W3M_RECENT_WALLET, JSON.stringify({ [t2]: e2 }));
}, getRecentWallet() {
  const e2 = localStorage.getItem(h.W3M_RECENT_WALLET);
  if (e2) {
    const { walletConnectVersion: t2 } = a$2.state, a2 = JSON.parse(e2);
    if (a2[t2])
      return a2[t2];
  }
}, getExtensionWallets() {
  const e2 = [];
  for (const [t2, a2] of Object.entries(J.injectedPreset))
    t2 !== Z.coinbaseWallet && a2 && a2.isInjected && !a2.isDesktop && e2.push(qt({ id: t2 }, a2));
  return e2;
}, caseSafeIncludes(e2, t2) {
  return e2.toUpperCase().includes(t2.toUpperCase());
} }, Kt = i$3`#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--w3m-gradient-1),var(--w3m-gradient-2),var(--w3m-gradient-3),var(--w3m-gradient-4))}.w3m-color-placeholder{background-color:var(--w3m-color-fg-accent)}.w3m-highlight{border:1px solid var(--w3m-color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--w3m-color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--w3m-color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;
var Yt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Ne = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Xt(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Yt(t2, a2, o3), o3;
};
const vt = new Bt();
let ce = class extends s {
  constructor() {
    super(), this.open = false, this.isHelp = false, this.unsubscribeRouter = void 0, this.playTimeout = void 0, this.unsubscribeRouter = g$2.subscribe((e2) => {
      this.isHelp = e2.view === "Help";
    });
  }
  firstUpdated() {
    const { themeBackground: e2 } = W.state;
    e2 === "gradient" && (this.playTimeout = setTimeout(() => {
      vt.play(this.canvasEl), this.open = true;
    }, 800));
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeRouter) == null || e2.call(this), clearTimeout(this.playTimeout), vt.stop();
  }
  get canvasEl() {
    return h.getShadowRootElement(this, ".w3m-canvas");
  }
  onHelp() {
    g$2.push("Help");
  }
  render() {
    const { themeBackground: e2 } = W.state, t2 = { "w3m-canvas": true, "w3m-canvas-visible": this.open }, a2 = { "w3m-actions": true, "w3m-help-active": this.isHelp };
    return y`${e2 === "themeColor" ? y`<div class="w3m-color-placeholder"></div>` : null} ${e2 === "gradient" ? y`<div class="w3m-gradient-placeholder"></div><canvas class="${o2(t2)}"></canvas>${g.NOISE_TEXTURE}` : null}<div class="w3m-highlight"></div><div class="w3m-toolbar">${g.WALLET_CONNECT_LOGO}<div class="${o2(a2)}"><button class="w3m-action-btn" @click="${this.onHelp}">${g.HELP_ICON}</button> <button class="w3m-action-btn" @click="${k$1.close}">${g.CROSS_ICON}</button></div></div>`;
  }
};
ce.styles = [u.globalCss, Kt], Ne([t$1()], ce.prototype, "open", 2), Ne([t$1()], ce.prototype, "isHelp", 2), ce = Ne([e$2("w3m-modal-backcard")], ce);
const Qt = i$3`main{padding:20px;padding-top:0;width:100%}`;
var Jt = Object.defineProperty, eo = Object.getOwnPropertyDescriptor, to = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? eo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Jt(t2, a2, o3), o3;
};
let Re = class extends s {
  render() {
    return y`<main><slot></slot></main>`;
  }
};
Re.styles = [u.globalCss, Qt], Re = to([e$2("w3m-modal-content")], Re);
const oo = i$3`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
var ao = Object.defineProperty, no = Object.getOwnPropertyDescriptor, ro = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? no(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && ao(t2, a2, o3), o3;
};
let Be = class extends s {
  render() {
    return y`<footer><slot></slot></footer>`;
  }
};
Be.styles = [u.globalCss, oo], Be = ro([e$2("w3m-modal-footer")], Be);
const io = i$3`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-color-fg-accent)}`;
var lo = Object.defineProperty, so = Object.getOwnPropertyDescriptor, de = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? so(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && lo(t2, a2, o3), o3;
};
let q = class extends s {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = false;
  }
  backBtnTemplate() {
    return y`<button class="w3m-back-btn" @click="${g$2.goBack}">${g.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return y`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e2 = { "w3m-border": this.border }, t2 = g$2.state.history.length > 1, a2 = this.title ? y`<w3m-text variant="large-bold">${this.title}</w3m-text>` : y`<slot></slot>`;
    return y`<header class="${o2(e2)}">${t2 ? this.backBtnTemplate() : null} ${a2} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
q.styles = [u.globalCss, io], de([e$1()], q.prototype, "title", 2), de([e$1()], q.prototype, "onAction", 2), de([e$1()], q.prototype, "actionIcon", 2), de([e$1()], q.prototype, "border", 2), q = de([e$2("w3m-modal-header")], q);
const co = i$3`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
var ho = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, Ue = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? mo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && ho(t2, a2, o3), o3;
};
let he = class extends s {
  constructor() {
    super(), this.view = g$2.state.view, this.prevView = g$2.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = g$2.subscribe((e2) => {
      this.view !== e2.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([e2]) => {
      const t2 = `${e2.contentRect.height}px`;
      this.oldHeight !== "0px" && (animate(this.routerEl, { height: [this.oldHeight, t2] }, { duration: 0.2 }), animate(this.routerEl, { opacity: [0, 1], scale: [0.99, 1] }, { duration: 0.37, delay: 0.03 })), this.oldHeight = t2;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e2, t2;
    (e2 = this.unsubscribe) == null || e2.call(this), (t2 = this.resizeObserver) == null || t2.disconnect();
  }
  get routerEl() {
    return h.getShadowRootElement(this, ".w3m-router");
  }
  get contentEl() {
    return h.getShadowRootElement(this, ".w3m-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return y`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
      case "SelectNetwork":
        return y`<w3m-select-network-view></w3m-select-network-view>`;
      case "InjectedConnector":
        return y`<w3m-injected-connector-view></w3m-injected-connector-view>`;
      case "InstallConnector":
        return y`<w3m-install-connector-view></w3m-install-connector-view>`;
      case "GetWallet":
        return y`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "DesktopConnector":
        return y`<w3m-desktop-connector-view></w3m-desktop-connector-view>`;
      case "WalletExplorer":
        return y`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
      case "Qrcode":
        return y`<w3m-qrcode-view></w3m-qrcode-view>`;
      case "Help":
        return y`<w3m-help-view></w3m-help-view>`;
      case "Account":
        return y`<w3m-account-view></w3m-account-view>`;
      case "SwitchNetwork":
        return y`<w3m-switch-network-view></w3m-switch-network-view>`;
      default:
        return y`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await animate(this.routerEl, { opacity: [1, 0], scale: [1, 1.02] }, { duration: 0.15 }).finished, this.view = g$2.state.view;
  }
  render() {
    return y`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
  }
};
he.styles = [u.globalCss, co], Ue([t$1()], he.prototype, "view", 2), Ue([t$1()], he.prototype, "prevView", 2), he = Ue([e$2("w3m-modal-router")], he);
const po = i$3`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-color-fg-accent)}.w3m-error path{fill:var(--w3m-color-err)}`;
var uo = Object.defineProperty, vo = Object.getOwnPropertyDescriptor, gt = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? vo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && uo(t2, a2, o3), o3;
};
let $e = class extends s {
  constructor() {
    super(), this.open = false, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = P$1.subscribe((e2) => {
      e2.open ? (this.open = true, this.timeout = setTimeout(() => P$1.closeToast(), 2200)) : (this.open = false, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribe) == null || e2.call(this), clearTimeout(this.timeout), P$1.closeToast();
  }
  render() {
    const { message: e2, variant: t2 } = P$1.state, a2 = { "w3m-success": t2 === "success", "w3m-error": t2 === "error" };
    return this.open ? y`<div class="${o2(a2)}">${t2 === "success" ? g.CHECKMARK_ICON : null} ${t2 === "error" ? g.CROSS_ICON : null}<w3m-text variant="small-normal">${e2}</w3m-text></div>` : null;
  }
};
$e.styles = [u.globalCss, po], gt([t$1()], $e.prototype, "open", 2), $e = gt([e$2("w3m-modal-toast")], $e);
const go = i$3`button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;
var wo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, Oe = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? bo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && wo(t2, a2, o3), o3;
};
let oe = class extends s {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.chainId = "";
  }
  render() {
    return y`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-normal">${this.name}</w3m-text></button>`;
  }
};
oe.styles = [u.globalCss, go], Oe([e$1()], oe.prototype, "onClick", 2), Oe([e$1()], oe.prototype, "name", 2), Oe([e$1()], oe.prototype, "chainId", 2), oe = Oe([e$2("w3m-network-button")], oe);
const fo = i$3`div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var yo = Object.defineProperty, xo = Object.getOwnPropertyDescriptor, wt = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? xo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && yo(t2, a2, o3), o3;
};
let Ie = class extends s {
  constructor() {
    super(...arguments), this.chainId = "";
  }
  render() {
    const e2 = h.getChainIcon(this.chainId);
    return e2 ? y`<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="${e2}" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>` : y`${g.NETWORK_PLACEHOLDER}`;
  }
};
Ie.styles = [u.globalCss, fo], wt([e$1()], Ie.prototype, "chainId", 2), Ie = wt([e$2("w3m-network-image")], Ie);
const Co = 0.1, bt = 2.5, F = 7;
function He(e2, t2, a2) {
  return e2 === t2 ? false : (e2 - t2 < 0 ? t2 - e2 : e2 - t2) <= a2 + Co;
}
function ko(e2, t2) {
  const a2 = Array.prototype.slice.call(browser.create(e2, { errorCorrectionLevel: t2 }).modules.data, 0), n2 = Math.sqrt(a2.length);
  return a2.reduce((o3, r2, i2) => (i2 % n2 === 0 ? o3.push([r2]) : o3[o3.length - 1].push(r2)) && o3, []);
}
const $o = { generate(e2, t2, a2, n2) {
  const o3 = n2 === "light" ? "#141414" : "#fff", r2 = n2 === "light" ? "#fff" : "#141414", i2 = [], c2 = ko(e2, "Q"), m2 = t2 / c2.length, s2 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  s2.forEach(({ x: E2, y: x2 }) => {
    const A2 = (c2.length - F) * m2 * E2, M2 = (c2.length - F) * m2 * x2, P2 = 0.32;
    for (let U = 0; U < s2.length; U += 1) {
      const ee = m2 * (F - U * 2);
      i2.push(w`<rect fill="${U % 2 === 0 ? o3 : r2}" height="${ee}" rx="${ee * P2}" ry="${ee * P2}" width="${ee}" x="${A2 + m2 * U}" y="${M2 + m2 * U}">`);
    }
  });
  const d3 = Math.floor((a2 + 25) / m2), v2 = c2.length / 2 - d3 / 2, O = c2.length / 2 + d3 / 2 - 1, C2 = [];
  c2.forEach((E2, x2) => {
    E2.forEach((A2, M2) => {
      if (c2[x2][M2] && !(x2 < F && M2 < F || x2 > c2.length - (F + 1) && M2 < F || x2 < F && M2 > c2.length - (F + 1)) && !(x2 > v2 && x2 < O && M2 > v2 && M2 < O)) {
        const P2 = x2 * m2 + m2 / 2, U = M2 * m2 + m2 / 2;
        C2.push([P2, U]);
      }
    });
  });
  const N2 = {};
  return C2.forEach(([E2, x2]) => {
    N2[E2] ? N2[E2].push(x2) : N2[E2] = [x2];
  }), Object.entries(N2).map(([E2, x2]) => {
    const A2 = x2.filter((M2) => x2.every((P2) => !He(M2, P2, m2)));
    return [Number(E2), A2];
  }).forEach(([E2, x2]) => {
    x2.forEach((A2) => {
      i2.push(w`<circle cx="${E2}" cy="${A2}" fill="${o3}" r="${m2 / bt}">`);
    });
  }), Object.entries(N2).filter(([E2, x2]) => x2.length > 1).map(([E2, x2]) => {
    const A2 = x2.filter((M2) => x2.some((P2) => He(M2, P2, m2)));
    return [Number(E2), A2];
  }).map(([E2, x2]) => {
    x2.sort((M2, P2) => M2 < P2 ? -1 : 1);
    const A2 = [];
    for (const M2 of x2) {
      const P2 = A2.find((U) => U.some((ee) => He(M2, ee, m2)));
      P2 ? P2.push(M2) : A2.push([M2]);
    }
    return [E2, A2.map((M2) => [M2[0], M2[M2.length - 1]])];
  }).forEach(([E2, x2]) => {
    x2.forEach(([A2, M2]) => {
      i2.push(w`<line x1="${E2}" x2="${E2}" y1="${A2}" y2="${M2}" stroke="${o3}" stroke-width="${m2 / (bt / 2)}" stroke-linecap="round">`);
    });
  }), i2;
} }, Oo = i$3`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-color-fg-accent)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
var Io = Object.defineProperty, Eo = Object.getOwnPropertyDescriptor, me = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Eo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Io(t2, a2, o3), o3;
};
let K = class extends s {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.logoSrc = "", this.walletId = "";
  }
  svgTemplate() {
    var e2;
    const t2 = (e2 = W.state.themeMode) != null ? e2 : "light";
    return w`<svg height="${this.size}" width="${this.size}">${$o.generate(this.uri, this.size, this.size / 4, t2)}</svg>`;
  }
  render() {
    return y`<div>${this.walletId || this.logoSrc ? y`<w3m-wallet-image walletId="${l(this.walletId)}" src="${l(this.logoSrc)}"></w3m-wallet-image>` : g.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
K.styles = [u.globalCss, Oo], me([e$1()], K.prototype, "uri", 2), me([e$1({ type: Number })], K.prototype, "size", 2), me([e$1()], K.prototype, "logoSrc", 2), me([e$1()], K.prototype, "walletId", 2), K = me([e$2("w3m-qrcode")], K);
const Mo = i$3`:host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-color-fg-accent)}path{fill:var(--w3m-color-fg-2)}`;
var Wo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, ft = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ao(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Wo(t2, a2, o3), o3;
};
let Ee = class extends s {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  render() {
    const e2 = d$2.isMobile() ? "Search mobile wallets" : "Search desktop wallets";
    return y`<input type="text" @input="${this.onChange}" placeholder="${e2}"><div class="w3m-placeholder">${g.SEARCH_ICON}<w3m-text color="secondary" variant="medium-thin">${e2}</w3m-text></div>`;
  }
};
Ee.styles = [u.globalCss, Mo], ft([e$1()], Ee.prototype, "onChange", 2), Ee = ft([e$2("w3m-search-input")], Ee);
const Lo = i$3`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-color-fg-accent)}`;
var jo = Object.defineProperty, So = Object.getOwnPropertyDescriptor, Po = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? So(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && jo(t2, a2, o3), o3;
};
let Ze = class extends s {
  render() {
    return y`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
Ze.styles = [u.globalCss, Lo], Ze = Po([e$2("w3m-spinner")], Ze);
const _o = i$3`span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-color-fg-inverse)}.w3m-color-accnt{color:var(--w3m-color-fg-accent)}.w3m-color-error{color:var(--w3m-color-err)}`;
var Do = Object.defineProperty, To = Object.getOwnPropertyDescriptor, Fe = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? To(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Do(t2, a2, o3), o3;
};
let pe = class extends s {
  constructor() {
    super(...arguments), this.variant = "medium-normal", this.color = "primary";
  }
  render() {
    const e2 = { "w3m-large-bold": this.variant === "large-bold", "w3m-medium-bold": this.variant === "medium-bold", "w3m-medium-normal": this.variant === "medium-normal", "w3m-medium-thin": this.variant === "medium-thin", "w3m-small-normal": this.variant === "small-normal", "w3m-small-thin": this.variant === "small-thin", "w3m-xsmall-normal": this.variant === "xsmall-normal", "w3m-xxsmall-bold": this.variant === "xxsmall-bold", "w3m-color-primary": this.color === "primary", "w3m-color-secondary": this.color === "secondary", "w3m-color-tertiary": this.color === "tertiary", "w3m-color-inverse": this.color === "inverse", "w3m-color-accnt": this.color === "accent", "w3m-color-error": this.color === "error" };
    return y`<span class="${o2(e2)}"><slot></slot></span>`;
  }
};
pe.styles = [u.globalCss, _o], Fe([e$1()], pe.prototype, "variant", 2), Fe([e$1()], pe.prototype, "color", 2), pe = Fe([e$2("w3m-text")], pe);
const No = i$3`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var Ro = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, yt = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Bo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ro(t2, a2, o3), o3;
};
let Me = class extends s {
  constructor() {
    super(...arguments), this.symbol = void 0;
  }
  render() {
    var e2;
    const t2 = h.getTokenIcon((e2 = this.symbol) != null ? e2 : "");
    return t2 ? y`<div><img src="${t2}" alt="${this.id}"></div>` : g.TOKEN_PLACEHOLDER;
  }
};
Me.styles = [u.globalCss, No], yt([e$1()], Me.prototype, "symbol", 2), Me = yt([e$2("w3m-token-image")], Me);
const Uo = i$3`button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
var Ho = Object.defineProperty, Zo = Object.getOwnPropertyDescriptor, z = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Zo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ho(t2, a2, o3), o3;
};
let H2 = class extends s {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.src = void 0, this.installed = false, this.recent = false;
  }
  sublabelTemplate() {
    return this.recent ? y`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>` : this.installed ? y`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>` : null;
  }
  render() {
    var e2;
    return y`<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" .src="${this.src}"></w3m-wallet-image><w3m-text variant="xsmall-normal">${(e2 = this.label) != null ? e2 : h.getWalletName(this.name, true)}</w3m-text>${this.sublabelTemplate()}</div></button>`;
  }
};
H2.styles = [u.globalCss, Uo], z([e$1()], H2.prototype, "onClick", 2), z([e$1()], H2.prototype, "name", 2), z([e$1()], H2.prototype, "walletId", 2), z([e$1()], H2.prototype, "label", 2), z([e$1()], H2.prototype, "src", 2), z([e$1()], H2.prototype, "installed", 2), z([e$1()], H2.prototype, "recent", 2), H2 = z([e$2("w3m-wallet-button")], H2);
const Fo = i$3`div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var zo = Object.defineProperty, Vo = Object.getOwnPropertyDescriptor, ze = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Vo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && zo(t2, a2, o3), o3;
};
let ue = class extends s {
  constructor() {
    super(...arguments), this.walletId = void 0, this.src = void 0;
  }
  render() {
    var e2;
    const t2 = h.getWalletId((e2 = this.walletId) != null ? e2 : ""), a2 = h.getWalletId(t2), n2 = this.src ? this.src : h.getWalletIcon(a2);
    return y`${n2.length ? y`<div><img src="${n2}" alt="${this.id}"></div>` : g.WALLET_PLACEHOLDER}`;
  }
};
ue.styles = [u.globalCss, Fo], ze([e$1()], ue.prototype, "walletId", 2), ze([e$1()], ue.prototype, "src", 2), ue = ze([e$2("w3m-wallet-image")], ue);
const Go = i$3`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
var qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, xt = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ko(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && qo(t2, a2, o3), o3;
};
let We = class extends s {
  constructor() {
    super(), this.balance = "hide", h.rejectStandaloneButtonComponent();
  }
  onOpen() {
    const { isStandalone: e2 } = a$2.state;
    e2 || k$1.open({ route: "Account" });
  }
  accountTemplate() {
    return y`<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>`;
  }
  render() {
    return this.balance === "show" ? y`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}">${this.accountTemplate()}</button></div>` : y`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`;
  }
};
We.styles = [u.globalCss, Go], xt([e$1()], We.prototype, "balance", 2), We = xt([e$2("w3m-account-button")], We);
const Yo = i$3`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
var Xo = Object.defineProperty, Qo = Object.getOwnPropertyDescriptor, Ve = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Qo(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Xo(t2, a2, o3), o3;
};
let ve = class extends s {
  constructor() {
    super(), this.chainId = "", this.label = "", this.unsubscribeNetwork = void 0;
    const { selectedChain: e2 } = a$2.state;
    this.chainId = e2 == null ? void 0 : e2.id.toString(), this.label = e2 == null ? void 0 : e2.name, this.unsubscribeNetwork = a$2.subscribe(({ selectedChain: t2 }) => {
      this.chainId = t2 == null ? void 0 : t2.id.toString(), this.label = t2 == null ? void 0 : t2.name;
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeNetwork) == null || e2.call(this);
  }
  onClick() {
    g$2.push("SelectNetwork");
  }
  render() {
    const { chains: e2 } = a$2.state, t2 = e2 && e2.length > 1;
    return y`<button @click="${this.onClick}" ?disabled="${!t2}"><w3m-network-image chainId="${l(this.chainId)}"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`;
  }
};
ve.styles = [u.globalCss, Yo], Ve([t$1()], ve.prototype, "chainId", 2), Ve([t$1()], ve.prototype, "label", 2), ve = Ve([e$2("w3m-account-network-button")], ve);
const Jo = i$3`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
var ea = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, ge = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? ta(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && ea(t2, a2, o3), o3;
};
let Y = class extends s {
  constructor() {
    super(), this.address = void 0, this.name = void 0, this.loading = true, this.variant = "button", this.unsubscribeAccount = void 0, this.address = a$2.state.address, this.name = a$2.state.profileName, this.loading = Boolean(a$2.state.profileLoading), this.unsubscribeAccount = a$2.subscribe(({ address: e2, profileName: t2, profileLoading: a2 }) => {
      this.address = e2, this.name = t2, this.loading = Boolean(a2);
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeAccount) == null || e2.call(this);
  }
  render() {
    var e2;
    const t2 = this.variant === "button", a2 = { "w3m-loading": this.loading };
    return y`<w3m-text class="${o2(a2)}" variant="${t2 ? "medium-normal" : "large-bold"}" color="${t2 ? "inverse" : "primary"}">${this.name ? this.name : h.truncate((e2 = this.address) != null ? e2 : "")}</w3m-text>`;
  }
};
Y.styles = [u.globalCss, Jo], ge([t$1()], Y.prototype, "address", 2), ge([t$1()], Y.prototype, "name", 2), ge([t$1()], Y.prototype, "loading", 2), ge([e$1()], Y.prototype, "variant", 2), Y = ge([e$2("w3m-address-text")], Y);
const oa = i$3`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--w3m-color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}`;
var aa = Object.defineProperty, na = Object.getOwnPropertyDescriptor, ra = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? na(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && aa(t2, a2, o3), o3;
};
let Ge = class extends s {
  onGoToQrcode() {
    g$2.push("Qrcode");
  }
  onGoToGetWallet() {
    g$2.push("GetWallet");
  }
  render() {
    const { previewWallets: e2 } = A$1.state, t2 = e2.length, a2 = [...e2, ...e2];
    return y`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${g.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content>${t2 ? y`<div class="w3m-slider"><div class="w3m-track">${a2.map(({ image_url: n2 }) => y`<w3m-wallet-image src="${n2.lg}"></w3m-wallet-image>`)}</div></div>` : null}<div class="w3m-action"><w3m-button-big @click="${h.handleAndroidLinking}"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="${this.onGoToGetWallet}"><w3m-text variant="medium-normal" color="accent">I don’t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>`;
  }
};
Ge.styles = [u.globalCss, oa], Ge = ra([e$2("w3m-android-wallet-selection")], Ge);
const ia = i$3`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
var la = Object.defineProperty, sa = Object.getOwnPropertyDescriptor, we = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? sa(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && la(t2, a2, o3), o3;
};
let X = class extends s {
  constructor() {
    super(), this.address = void 0, this.avatar = void 0, this.loading = true, this.size = "small", this.unsubscribeAccount = void 0, this.address = a$2.state.address, this.avatar = a$2.state.profileAvatar, this.loading = Boolean(a$2.state.profileLoading), this.unsubscribeAccount = a$2.subscribe(({ address: e2, profileAvatar: t2, profileLoading: a2 }) => {
      this.address = e2, this.avatar = t2, this.loading = Boolean(a2);
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeAccount) == null || e2.call(this);
  }
  render() {
    const e2 = { "w3m-placeholder": true, "w3m-small": this.size === "small", "w3m-medium": this.size === "medium" };
    return this.avatar ? y`<img class="${o2(e2)}" src="${this.avatar}">` : this.address ? (h.generateAvatarColors(this.address), y`<div class="${o2(e2)}">${this.loading ? y`<div class="w3m-loader"></div>` : null}</div>`) : null;
  }
};
X.styles = [u.globalCss, ia], we([t$1()], X.prototype, "address", 2), we([t$1()], X.prototype, "avatar", 2), we([t$1()], X.prototype, "loading", 2), we([e$1()], X.prototype, "size", 2), X = we([e$2("w3m-avatar")], X);
const ca = i$3`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
var da = Object.defineProperty, ha = Object.getOwnPropertyDescriptor, qe = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? ha(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && da(t2, a2, o3), o3;
};
let be = class extends s {
  constructor() {
    var e2, t2;
    super(), this.symbol = void 0, this.amount = void 0, this.unsubscribeAccount = void 0, this.symbol = (e2 = a$2.state.balance) == null ? void 0 : e2.symbol, this.amount = (t2 = a$2.state.balance) == null ? void 0 : t2.amount, this.unsubscribeAccount = a$2.subscribe(({ balance: a2 }) => {
      this.symbol = a2 == null ? void 0 : a2.symbol, this.amount = a2 == null ? void 0 : a2.amount;
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeAccount) == null || e2.call(this);
  }
  render() {
    let e2 = "_._";
    return this.amount === "0.0" && (e2 = 0), this.amount && this.amount.length > 6 && (e2 = parseFloat(this.amount).toFixed(3)), y`<div><w3m-token-image symbol="${l(this.symbol)}"></w3m-token-image><w3m-text variant="medium-normal" color="primary">${e2} ${this.symbol}</w3m-text></div>`;
  }
};
be.styles = [u.globalCss, ca], qe([t$1()], be.prototype, "symbol", 2), qe([t$1()], be.prototype, "amount", 2), be = qe([e$2("w3m-balance")], be);
const ma = i$3`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-color-fg-inverse)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
var pa = Object.defineProperty, ua = Object.getOwnPropertyDescriptor, Ae = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? ua(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && pa(t2, a2, o3), o3;
};
let ae = class extends s {
  constructor() {
    super(), this.loading = false, this.label = "Connect Wallet", this.icon = "show", this.modalUnsub = void 0, h.rejectStandaloneButtonComponent(), this.modalUnsub = k$1.subscribe((e2) => {
      e2.open && (this.loading = true), e2.open || (this.loading = false);
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.modalUnsub) == null || e2.call(this);
  }
  iconTemplate() {
    return this.icon === "show" ? g.WALLET_CONNECT_ICON : null;
  }
  onClick() {
    a$2.state.isConnected ? this.onDisconnect() : this.onConnect();
  }
  onConnect() {
    this.loading = true;
    const { enableNetworkView: e2 } = W.state, { chains: t2, selectedChain: a2 } = a$2.state, n2 = (t2 == null ? void 0 : t2.length) && t2.length > 1;
    e2 || n2 && !a2 ? k$1.open({ route: "SelectNetwork" }) : k$1.open({ route: "ConnectWallet" });
  }
  onDisconnect() {
    L.client().disconnect(), a$2.resetAccount();
  }
  render() {
    return y`<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading ? y`<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>` : y`${this.iconTemplate()}<w3m-text variant="medium-normal" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`;
  }
};
ae.styles = [u.globalCss, ma], Ae([t$1()], ae.prototype, "loading", 2), Ae([e$1()], ae.prototype, "label", 2), Ae([e$1()], ae.prototype, "icon", 2), ae = Ae([e$2("w3m-connect-button")], ae);
var va = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, fe = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? ga(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && va(t2, a2, o3), o3;
};
let ne = class extends s {
  constructor() {
    super(), this.isConnected = false, this.label = "Connect Wallet", this.icon = "show", this.balance = "hide", this.unsubscribeAccount = void 0, h.rejectStandaloneButtonComponent(), this.isConnected = a$2.state.isConnected, this.unsubscribeAccount = a$2.subscribe(({ isConnected: e2 }) => {
      this.isConnected = e2;
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeAccount) == null || e2.call(this);
  }
  render() {
    const { enableAccountView: e2 } = W.state;
    return this.isConnected && e2 ? y`<w3m-account-button balance="${l(this.balance)}"></w3m-account-button>` : y`<w3m-connect-button label="${this.isConnected ? "Disconnect" : l(this.label)}" icon="${l(this.icon)}"></w3m-connect-button>`;
  }
};
fe([t$1()], ne.prototype, "isConnected", 2), fe([e$1()], ne.prototype, "label", 2), fe([e$1()], ne.prototype, "icon", 2), fe([e$1()], ne.prototype, "balance", 2), ne = fe([e$2("w3m-core-button")], ne);
const R = { allowedExplorerListings(e2) {
  const { explorerAllowList: t2, explorerDenyList: a2 } = W.state;
  let n2 = [...e2];
  return t2 && (n2 = n2.filter((o3) => t2.includes(o3.id))), a2 && (n2 = n2.filter((o3) => !a2.includes(o3.id))), n2;
}, walletsWithInjected(e2) {
  let t2 = [...e2 ?? []];
  if (window.ethereum) {
    const a2 = h.getWalletName("");
    t2 = t2.filter(({ name: n2 }) => !h.caseSafeIncludes(n2, a2));
  }
  return t2;
}, connectorWallets() {
  const { isStandalone: e2 } = a$2.state;
  if (e2)
    return [];
  let t2 = L.client().getConnectors();
  return !window.ethereum && d$2.isMobile() && (t2 = t2.filter(({ id: a2 }) => a2 !== "injected" && a2 !== Z.metaMask)), t2;
}, walletTemplatesWithRecent(e2, t2) {
  let a2 = [...e2];
  if (t2) {
    const n2 = h.getRecentWallet();
    a2 = a2.filter((o3) => !o3.values.includes(n2 == null ? void 0 : n2.name)), a2.splice(1, 0, t2);
  }
  return a2;
}, deduplicateExplorerListingsFromConnectors(e2) {
  const { isStandalone: t2 } = a$2.state;
  if (t2)
    return e2;
  const a2 = L.client().getConnectors().map(({ name: n2 }) => n2.toUpperCase());
  return e2.filter(({ name: n2 }) => !a2.includes(n2.toUpperCase()));
} }, wa = i$3`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-color-fg-accent)}`;
var ba = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, ya = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? fa(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && ba(t2, a2, o3), o3;
};
let Ke = class extends s {
  onDesktopWallet(e2) {
    g$2.push("DesktopConnector", { DesktopConnector: e2 });
  }
  onInjectedWallet() {
    g$2.push("InjectedConnector");
  }
  onInstallConnector() {
    g$2.push("InstallConnector", { InstallConnector: { id: "metaMask", name: "MetaMask", isMobile: true, url: "https://metamask.io" } });
  }
  async onConnectorWallet(e2) {
    window.ethereum ? e2 === "injected" || e2 === Z.metaMask ? this.onInjectedWallet() : await h.handleConnectorConnection(e2) : this.onInstallConnector();
  }
  desktopWalletsTemplate() {
    const { desktopWallets: e2 } = W.state;
    return e2 == null ? void 0 : e2.map(({ id: t2, name: a2, links: { universal: n2, native: o3 } }) => y`<w3m-wallet-button walletId="${t2}" name="${a2}" .onClick="${() => this.onDesktopWallet({ name: a2, walletId: t2, universal: n2, native: o3 })}"></w3m-wallet-button>`);
  }
  previewWalletsTemplate() {
    let e2 = R.allowedExplorerListings(A$1.state.previewWallets);
    return e2 = R.deduplicateExplorerListingsFromConnectors(e2), e2.map(({ name: t2, desktop: { universal: a2, native: n2 }, homepage: o3, image_url: r2, id: i2 }) => y`<w3m-wallet-button src="${r2.lg}" name="${t2}" .onClick="${() => this.onDesktopWallet({ walletId: i2, name: t2, native: n2, universal: a2 || o3, icon: r2.lg })}"></w3m-wallet-button>`);
  }
  connectorWalletsTemplate() {
    return R.connectorWallets().map(({ id: e2, name: t2, ready: a2 }) => y`<w3m-wallet-button .installed="${["injected", "metaMask"].includes(e2) && a2}" name="${t2}" walletId="${e2}" .onClick="${async () => this.onConnectorWallet(e2)}"></w3m-wallet-button>`);
  }
  recentWalletTemplate() {
    const e2 = h.getRecentWallet();
    if (!e2)
      return;
    const { id: t2, name: a2, links: n2, image: o3 } = e2;
    return y`<w3m-wallet-button .recent="${true}" name="${a2}" walletId="${l(t2)}" src="${l(o3)}" .onClick="${() => this.onDesktopWallet({ name: a2, walletId: t2, universal: n2 == null ? void 0 : n2.universal, native: n2 == null ? void 0 : n2.native, icon: o3 })}"></w3m-wallet-button>`;
  }
  render() {
    const { standaloneUri: e2 } = a$2.state, t2 = this.desktopWalletsTemplate(), a2 = this.previewWalletsTemplate(), n2 = this.connectorWalletsTemplate(), o3 = this.recentWalletTemplate(), r2 = [...t2 ?? [], ...a2], i2 = [...n2, ...r2], c2 = R.walletTemplatesWithRecent(i2, o3), m2 = R.walletTemplatesWithRecent(r2, o3), s2 = e2 ? m2 : c2, d3 = s2.length > 4;
    let v2 = [];
    d3 ? v2 = s2.filter((C2) => !C2.values.includes(Z.coinbaseWallet)).slice(0, 3) : v2 = s2;
    const O = Boolean(v2.length);
    return y`<w3m-modal-header border="${true}" title="Connect your wallet" .onAction="${h.handleUriCopy}" .actionIcon="${g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${g.MOBILE_ICON}<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${g.SCAN_ICON}<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${O ? y`<w3m-modal-footer><div class="w3m-desktop-title">${g.DESKTOP_ICON}<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${v2} ${d3 ? y`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}</div></w3m-modal-footer>` : null}`;
  }
};
Ke.styles = [u.globalCss, wa], Ke = ya([e$2("w3m-desktop-wallet-selection")], Ke);
const xa = i$3`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}`;
var Ca = Object.defineProperty, ka = Object.getOwnPropertyDescriptor, $a = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? ka(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ca(t2, a2, o3), o3;
};
let Ye = class extends s {
  render() {
    const { termsOfServiceUrl: e2, privacyPolicyUrl: t2 } = W.state;
    return e2 ?? t2 ? y`<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>${e2 ? y`<a href="${e2}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e2 && t2 ? "and" : null} ${t2 ? y`<a href="${t2}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</w3m-text></div>` : null;
  }
};
Ye.styles = [u.globalCss, xa], Ye = $a([e$2("w3m-legal-notice")], Ye);
const Oa = i$3`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Ia = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, Ma = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ea(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ia(t2, a2, o3), o3;
};
let Xe = class extends s {
  onGoToQrcode() {
    g$2.push("Qrcode");
  }
  async onConnectorWallet(e2) {
    await h.handleConnectorConnection(e2);
  }
  mobileWalletsTemplate() {
    const { mobileWallets: e2 } = W.state, t2 = R.walletsWithInjected(e2);
    if (t2.length)
      return t2.map(({ id: a2, name: n2, links: { universal: o3, native: r2 } }) => y`<w3m-wallet-button name="${n2}" walletId="${a2}" .onClick="${async () => h.handleMobileLinking({ links: { native: r2, universal: o3 }, name: n2, id: a2 })}"></w3m-wallet-button>`);
  }
  previewWalletsTemplate() {
    const { previewWallets: e2 } = A$1.state;
    let t2 = R.walletsWithInjected(e2);
    return t2 = R.allowedExplorerListings(t2), t2 = R.deduplicateExplorerListingsFromConnectors(t2), t2.map(({ image_url: a2, name: n2, mobile: { native: o3, universal: r2 }, id: i2 }) => y`<w3m-wallet-button name="${n2}" src="${a2.lg}" .onClick="${async () => h.handleMobileLinking({ links: { native: o3, universal: r2 }, name: n2, id: i2, image: a2.lg })}"></w3m-wallet-button>`);
  }
  connectorWalletsTemplate() {
    let e2 = R.connectorWallets();
    return window.ethereum || (e2 = e2.filter(({ id: t2 }) => t2 !== "injected" && t2 !== Z.metaMask)), e2.map(({ name: t2, id: a2, ready: n2 }) => y`<w3m-wallet-button .installed="${["injected", "metaMask"].includes(a2) && n2}" name="${t2}" walletId="${a2}" .onClick="${async () => this.onConnectorWallet(a2)}"></w3m-wallet-button>`);
  }
  recentWalletTemplate() {
    const e2 = h.getRecentWallet();
    if (!e2)
      return;
    const { id: t2, name: a2, links: n2, image: o3 } = e2;
    return y`<w3m-wallet-button .recent="${true}" name="${a2}" walletId="${l(t2)}" src="${l(o3)}" .onClick="${async () => h.handleMobileLinking({ name: a2, id: t2, links: n2, image: o3 })}"></w3m-wallet-button>`;
  }
  render() {
    const { standaloneUri: e2 } = a$2.state, t2 = this.connectorWalletsTemplate(), a2 = this.mobileWalletsTemplate(), n2 = this.previewWalletsTemplate(), o3 = this.recentWalletTemplate(), r2 = a2 ?? n2, i2 = [...t2, ...r2], c2 = R.walletTemplatesWithRecent(i2, o3), m2 = R.walletTemplatesWithRecent(r2, o3), s2 = e2 ? m2 : c2, d3 = s2.length > 8;
    let v2 = [];
    d3 ? v2 = s2.filter((E2) => !E2.values.includes(Z.coinbaseWallet)).slice(0, 7) : v2 = s2;
    const O = v2.slice(0, 4), C2 = v2.slice(4, 8), N2 = Boolean(v2.length);
    return y`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${g.QRCODE_ICON}"></w3m-modal-header>${N2 ? y`<w3m-modal-content><div class="w3m-grid">${O} ${C2.length ? y`${C2} ${d3 ? y`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>` : null}` : null}</div></w3m-modal-content>` : null}`;
  }
};
Xe.styles = [u.globalCss, Oa], Xe = Ma([e$2("w3m-mobile-wallet-selection")], Xe);
const Wa = i$3`:host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--w3m-modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}`;
var Aa = Object.defineProperty, La = Object.getOwnPropertyDescriptor, Le = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? La(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Aa(t2, a2, o3), o3;
};
let re = class extends s {
  constructor() {
    if (super(), this.open = false, this.preload = true, this.activeChainId = void 0, this.unsubscribeModal = void 0, this.unsubscribeConfig = void 0, this.unwatchAccount = void 0, this.unwatchNetwork = void 0, this.abortController = void 0, u.setTheme(), this.unsubscribeConfig = W.subscribe(u.setTheme), this.unsubscribeModal = k$1.subscribe((e2) => {
      e2.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    }), !a$2.state.isStandalone) {
      a$2.getAccount();
      const e2 = a$2.getSelectedChain();
      this.activeChainId = e2 == null ? void 0 : e2.id, this.fetchEnsProfile(), this.fetchBalance(), this.unwatchNetwork = L.client().watchNetwork((t2) => {
        const a2 = t2.chain;
        a2 && this.activeChainId !== a2.id && (a$2.setSelectedChain(a2), this.activeChainId = a2.id, a$2.resetBalance(), this.fetchBalance());
      }), this.unwatchAccount = L.client().watchAccount((t2) => {
        const { address: a2 } = a$2.state;
        t2.address !== a2 && (this.fetchEnsProfile(t2.address), this.fetchBalance(t2.address)), a$2.setAddress(t2.address), a$2.setIsConnected(t2.isConnected);
      });
    }
    this.preloadModalData();
  }
  disconnectedCallback() {
    var e2, t2, a2, n2;
    (e2 = this.unsubscribeModal) == null || e2.call(this), (t2 = this.unsubscribeConfig) == null || t2.call(this), (a2 = this.unwatchAccount) == null || a2.call(this), (n2 = this.unwatchNetwork) == null || n2.call(this);
  }
  get overlayEl() {
    return h.getShadowRootElement(this, ".w3m-overlay");
  }
  get containerEl() {
    return h.getShadowRootElement(this, ".w3m-container");
  }
  async fetchEnsProfile(e2) {
    try {
      if (W.state.enableAccountView) {
        a$2.setProfileLoading(true);
        const t2 = e2 ?? a$2.state.address, { id: a2 } = L.client().getDefaultChain();
        if (t2 && a2 === 1) {
          const [n2, o3] = await Promise.all([L.client().fetchEnsName({ address: t2, chainId: 1 }), L.client().fetchEnsAvatar({ address: t2, chainId: 1 })]);
          o3 && await h.preloadImage(o3), a$2.setProfileName(n2), a$2.setProfileAvatar(o3);
        }
      }
    } catch (t2) {
      console.error(t2), P$1.openToast(h.getErrorMessage(t2), "error");
    } finally {
      a$2.setProfileLoading(false);
    }
  }
  async fetchBalance(e2) {
    try {
      if (W.state.enableAccountView) {
        a$2.setBalanceLoading(true);
        const t2 = e2 ?? a$2.state.address;
        if (t2) {
          const a2 = await L.client().fetchBalance({ address: t2 });
          a$2.setBalance({ amount: a2.formatted, symbol: a2.symbol });
        }
      }
    } catch (t2) {
      console.error(t2), P$1.openToast(h.getErrorMessage(t2), "error");
    } finally {
      a$2.setBalanceLoading(false);
    }
  }
  toggleBodyScroll(e2) {
    if (document.querySelector("body"))
      if (e2) {
        const t2 = document.getElementById("w3m-styles");
        t2 == null ? void 0 : t2.remove();
      } else
        document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
  }
  async preloadExplorerData() {
    var e2;
    const { standaloneChains: t2, chains: a2, walletConnectVersion: n2 } = a$2.state, o3 = t2 == null ? void 0 : t2.join(",");
    await Promise.all([A$1.getPreviewWallets({ page: 1, entries: 10, chains: o3, device: d$2.isMobile() ? "mobile" : "desktop", version: n2 }), A$1.getRecomendedWallets()]), a$2.setIsDataLoaded(true);
    const { previewWallets: r2, recomendedWallets: i2 } = A$1.state, c2 = (e2 = a2 == null ? void 0 : a2.map((s2) => h.getChainIcon(s2.id))) != null ? e2 : [], m2 = [...r2, ...i2].map((s2) => s2.image_url.lg);
    await this.preloadExplorerImages([...c2, ...m2]);
  }
  async preloadExplorerImages(e2) {
    e2.length && await Promise.all(e2.map(async (t2) => h.preloadImage(t2)));
  }
  async preloadCustomImages() {
    const e2 = h.getCustomImageUrls();
    e2.length && await Promise.all(e2.map(async (t2) => h.preloadImage(t2)));
  }
  async preloadConnectorImages() {
    if (!a$2.state.isStandalone) {
      const e2 = h.getConnectorImageUrls();
      e2.length && await Promise.all(e2.map(async (t2) => h.preloadImage(t2)));
    }
  }
  async preloadModalData() {
    try {
      this.preload && (this.preload = false, await Promise.all([this.preloadExplorerData(), this.preloadCustomImages(), this.preloadConnectorImages()]));
    } catch (e2) {
      console.error(e2), P$1.openToast("Failed preloading", "error");
    }
  }
  onCloseModal(e2) {
    e2.target === e2.currentTarget && k$1.close();
  }
  async onOpenModalEvent() {
    await this.preloadModalData(), this.toggleBodyScroll(false);
    const e2 = 0.2;
    await animate(this.containerEl, { y: 0 }, { duration: 0 }).finished, animate(this.overlayEl, { opacity: [0, 1] }, { duration: 0.2, delay: e2 }), animate(this.containerEl, h.isMobileAnimation() ? { y: ["50vh", 0] } : { scale: [0.98, 1] }, { scale: { easing: spring({ velocity: 0.4 }) }, y: { easing: spring({ mass: 0.5 }) }, delay: e2 }), this.addKeyboardEvents(), this.open = true;
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(true), this.removeKeyboardEvents(), await Promise.all([animate(this.containerEl, h.isMobileAnimation() ? { y: [0, "50vh"] } : { scale: [1, 0.98] }, { scale: { easing: spring({ velocity: 0 }) }, y: { easing: spring({ mass: 0.5 }) } }).finished, animate(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished]), this.open = false;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener("keydown", (e2) => {
      var t2;
      e2.key === "Escape" ? k$1.close() : e2.key === "Tab" && ((t2 = e2.target) != null && t2.tagName.includes("W3M-") || this.containerEl.focus());
    }, this.abortController), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e2;
    (e2 = this.abortController) == null || e2.abort(), this.abortController = void 0;
  }
  render() {
    const e2 = { "w3m-overlay": true, "w3m-open": this.open };
    return y`<div id="w3m-modal" class="${o2(e2)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open ? y`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>` : null}</div></div>`;
  }
};
re.styles = [u.globalCss, Wa], Le([t$1()], re.prototype, "open", 2), Le([t$1()], re.prototype, "preload", 2), Le([t$1()], re.prototype, "activeChainId", 2), re = Le([e$2("w3m-modal")], re);
const ja = i$3`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
var Sa = Object.defineProperty, Pa = Object.getOwnPropertyDescriptor, je = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Pa(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Sa(t2, a2, o3), o3;
};
let ie = class extends s {
  constructor() {
    super(), this.chainId = "", this.label = "", this.wrongNetwork = false, this.unsubscribeNetwork = void 0, h.rejectStandaloneButtonComponent();
    const { selectedChain: e2 } = a$2.state;
    this.onSetChainData(e2), this.unsubscribeNetwork = a$2.subscribe(({ selectedChain: t2 }) => {
      this.onSetChainData(t2);
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeNetwork) == null || e2.call(this);
  }
  onSetChainData(e2) {
    if (e2) {
      const { chains: t2 } = a$2.state, a2 = t2 == null ? void 0 : t2.map((n2) => n2.id);
      this.chainId = e2.id.toString(), this.wrongNetwork = !(a2 != null && a2.includes(e2.id)), this.label = this.wrongNetwork ? "Wrong Network" : e2.name;
    }
  }
  onClick() {
    k$1.open({ route: "SelectNetwork" });
  }
  render() {
    var e2;
    const { chains: t2 } = a$2.state, a2 = t2 && t2.length > 1;
    return y`<w3m-button-big @click="${this.onClick}" ?disabled="${!a2}"><w3m-network-image chainId="${l(this.chainId)}"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">${(e2 = this.label) != null && e2.length ? this.label : "Select Network"}</w3m-text></w3m-button-big>`;
  }
};
ie.styles = [u.globalCss, ja], je([t$1()], ie.prototype, "chainId", 2), je([t$1()], ie.prototype, "label", 2), je([t$1()], ie.prototype, "wrongNetwork", 2), ie = je([e$2("w3m-network-switch")], ie);
const _a = i$3`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
var Da = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, Na = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ta(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Da(t2, a2, o3), o3;
};
let Qe = class extends s {
  onClick() {
    g$2.push("WalletExplorer");
  }
  render() {
    const { previewWallets: e2 } = A$1.state, t2 = h.getCustomWallets(), a2 = [...e2, ...t2].reverse().slice(0, 4);
    return y`<button @click="${this.onClick}"><div class="w3m-icons">${a2.map((n2) => {
      var o3;
      const r2 = (o3 = n2.image_url) == null ? void 0 : o3.lg;
      if (r2)
        return y`<img src="${r2}">`;
      const i2 = h.getWalletId(n2.id), c2 = h.getWalletIcon(i2);
      return c2 ? y`<img src="${c2}">` : g.WALLET_PLACEHOLDER;
    })}</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>`;
  }
};
Qe.styles = [u.globalCss, _a], Qe = Na([e$2("w3m-view-all-wallets-button")], Qe);
const Ra = i$3`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Ba = Object.defineProperty, Ua = Object.getOwnPropertyDescriptor, Ct = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ua(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ba(t2, a2, o3), o3;
};
let Se = class extends s {
  constructor() {
    super(), this.uri = "", this.createConnectionAndWait();
  }
  get overlayEl() {
    return h.getShadowRootElement(this, ".w3m-qr-container");
  }
  async createConnectionAndWait(e2 = 0) {
    var t2;
    try {
      const { standaloneUri: a2 } = a$2.state;
      a2 ? setTimeout(() => this.uri = a2, 0) : (await L.client().connectWalletConnect((n2) => this.uri = n2, (t2 = a$2.state.selectedChain) == null ? void 0 : t2.id), k$1.close());
    } catch (a2) {
      console.error(a2), P$1.openToast("Connection request declined", "error"), e2 < 2 && this.createConnectionAndWait(e2 + 1);
    }
  }
  render() {
    return y`<div class="w3m-qr-container">${this.uri ? y`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}"></w3m-qrcode>` : y`<w3m-spinner></w3m-spinner>`}</div>`;
  }
};
Se.styles = [u.globalCss, Ra], Ct([t$1()], Se.prototype, "uri", 2), Se = Ct([e$2("w3m-walletconnect-qr")], Se);
const Ha = i$3`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-color-success),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
var Za = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, za = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Fa(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Za(t2, a2, o3), o3;
};
let Je = class extends s {
  onDisconnect() {
    k$1.close(), L.client().disconnect(), a$2.resetAccount();
  }
  async onCopyAddress() {
    var e2;
    await navigator.clipboard.writeText((e2 = a$2.state.address) != null ? e2 : ""), P$1.openToast("Address copied", "success");
  }
  render() {
    return y`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${g.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${g.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
  }
};
Je.styles = [u.globalCss, Ha], Je = za([e$2("w3m-account-view")], Je);
var Va = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, qa = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Ga(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Va(t2, a2, o3), o3;
};
let et = class extends s {
  viewTemplate() {
    return d$2.isAndroid() ? y`<w3m-android-wallet-selection></w3m-android-wallet-selection>` : d$2.isMobile() ? y`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>` : y`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
  }
  render() {
    return y`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
  }
};
et.styles = [u.globalCss], et = qa([e$2("w3m-connect-wallet-view")], et);
const Ka = i$3`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}`;
var Ya = Object.defineProperty, Xa = Object.getOwnPropertyDescriptor, kt = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? Xa(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ya(t2, a2, o3), o3;
};
let Pe = class extends s {
  constructor() {
    super(), this.uri = "", this.createConnectionAndWait();
  }
  getRouterData() {
    var e2;
    const t2 = (e2 = g$2.state.data) == null ? void 0 : e2.DesktopConnector;
    if (!t2)
      throw new Error("Missing router data");
    return t2;
  }
  onFormatAndRedirect(e2) {
    const { native: t2, universal: a2, name: n2 } = this.getRouterData();
    if (t2) {
      const o3 = d$2.formatNativeUrl(t2, e2, n2);
      d$2.openHref(o3);
    } else if (a2) {
      const o3 = d$2.formatUniversalUrl(a2, e2, n2);
      d$2.openHref(o3, "_blank");
    }
  }
  async createConnectionAndWait(e2 = 0) {
    var t2;
    const { standaloneUri: a2 } = a$2.state, { name: n2, walletId: o3, native: r2, universal: i2, icon: c2 } = this.getRouterData(), m2 = { name: n2, id: o3, links: { native: r2, universal: i2 }, image: c2 };
    if (a2)
      h.setRecentWallet(m2), this.onFormatAndRedirect(a2);
    else
      try {
        await L.client().connectWalletConnect((s2) => {
          this.uri = s2, this.onFormatAndRedirect(s2);
        }, (t2 = a$2.state.selectedChain) == null ? void 0 : t2.id), h.setRecentWallet(m2), k$1.close();
      } catch (s2) {
        console.error(s2), P$1.openToast("Connection request declined", "error"), e2 < 2 && this.createConnectionAndWait(e2 + 1);
      }
  }
  onConnectWithMobile() {
    g$2.push("Qrcode");
  }
  onGoToWallet() {
    const { universal: e2, name: t2 } = this.getRouterData();
    if (e2) {
      const a2 = d$2.formatUniversalUrl(e2, this.uri, t2);
      d$2.openHref(a2, "_blank");
    }
  }
  render() {
    const { name: e2, icon: t2, universal: a2, walletId: n2 } = this.getRouterData(), o3 = h.getWalletName(e2);
    return y`<w3m-modal-header title="${o3}"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">${t2 ? y`<w3m-wallet-image src="${t2}" size="lg"></w3m-wallet-image>` : y`<w3m-wallet-image size="lg" walletid="${l(n2)}"></w3m-wallet-image>`}<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">${`Continue in ${o3}...`}</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${async () => this.createConnectionAndWait()}" .iconRight="${g.RETRY_ICON}">Retry</w3m-button>${a2 ? y`<w3m-button .onClick="${this.onGoToWallet.bind(this)}" .iconLeft="${g.ARROW_UP_RIGHT_ICON}">Go to Wallet</w3m-button>` : y`<w3m-button .onClick="${this.onConnectWithMobile}" .iconLeft="${g.MOBILE_ICON}">Connect with Mobile</w3m-button>`}</div></div></w3m-modal-content>`;
  }
};
Pe.styles = [u.globalCss, Ka], kt([t$1()], Pe.prototype, "uri", 2), Pe = kt([e$2("w3m-desktop-connector-view")], Pe);
const Qa = i$3`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
var Ja = Object.defineProperty, en = Object.getOwnPropertyDescriptor, tn = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? en(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Ja(t2, a2, o3), o3;
};
let tt = class extends s {
  constructor() {
    super(...arguments), this.explorerUrl = "https://explorer.walletconnect.com/";
  }
  onGet(e2) {
    d$2.openHref(e2, "_blank");
  }
  onExplore() {
    d$2.openHref(this.explorerUrl, "_blank");
  }
  render() {
    const { recomendedWallets: e2 } = A$1.state, t2 = h.getCustomWallets().slice(0, 6), a2 = e2.length, n2 = t2.length;
    return y`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${a2 ? e2.map(({ name: o3, image_url: r2, homepage: i2 }) => y`<div class="w3m-wallet-item"><w3m-wallet-image src="${r2.lg}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o3}</w3m-text><w3m-button .iconRight="${g.ARROW_RIGHT_ICON}" .onClick="${() => this.onGet(i2)}">Get</w3m-button></div></div>`) : null} ${n2 ? t2.map(({ name: o3, id: r2, links: i2 }) => y`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${r2}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o3}</w3m-text><w3m-button .iconRight="${g.ARROW_RIGHT_ICON}" .onClick="${() => this.onGet(i2.universal)}">Get</w3m-button></div></div>`) : null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${this.onExplore.bind(this)}" .iconRight="${g.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`;
  }
};
tt.styles = [u.globalCss, Qa], tt = tn([e$2("w3m-get-wallet-view")], tt);
const on = i$3`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
var an = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, rn = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? nn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && an(t2, a2, o3), o3;
};
let ot = class extends s {
  constructor() {
    super(...arguments), this.learnUrl = "https://ethereum.org/en/wallets/";
  }
  onGet() {
    g$2.push("GetWallet");
  }
  onLearnMore() {
    d$2.openHref(this.learnUrl, "_blank");
  }
  render() {
    return y`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${g.HELP_CHART_IMG} ${g.HELP_PAINTING_IMG} ${g.HELP_ETH_IMG}</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${g.HELP_KEY_IMG} ${g.HELP_USER_IMG} ${g.HELP_LOCK_IMG}</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${g.HELP_COMPAS_IMG} ${g.HELP_NOUN_IMG} ${g.HELP_DAO_IMG}</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${g.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${g.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`;
  }
};
ot.styles = [u.globalCss, on], ot = rn([e$2("w3m-help-view")], ot);
const ln = i$3`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}`;
var sn = Object.defineProperty, cn = Object.getOwnPropertyDescriptor, at = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? cn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && sn(t2, a2, o3), o3;
};
let ye = class extends s {
  constructor() {
    super(), this.connecting = true, this.error = false, this.connector = L.client().getConnectorById("injected"), this.onConnect();
  }
  async onConnect() {
    const { ready: e2 } = this.connector;
    e2 && (this.error = false, this.connecting = true, await h.handleConnectorConnection("injected", () => {
      this.error = true, this.connecting = false;
    }));
  }
  render() {
    const e2 = h.getWalletName(this.connector.name), t2 = h.getWalletId(this.connector.id), a2 = { "w3m-injected-wrapper": true, "w3m-injected-error": this.error };
    return y`<w3m-modal-header title="${e2}"></w3m-modal-header><w3m-modal-content><div class="${o2(a2)}"><w3m-wallet-image walletId="${t2}" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">${this.connecting ? y`<w3m-spinner></w3m-spinner>` : null}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : `Continue in ${e2}...`}</w3m-text></div><w3m-button .onClick="${this.onConnect.bind(this)}" .disabled="${!this.error}" .iconRight="${g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
  }
};
ye.styles = [u.globalCss, ln], at([t$1()], ye.prototype, "connecting", 2), at([t$1()], ye.prototype, "error", 2), ye = at([e$2("w3m-injected-connector-view")], ye);
const dn = i$3`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}`;
var hn = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, pn = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? mn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && hn(t2, a2, o3), o3;
};
let nt = class extends s {
  getRouterData() {
    var e2;
    const t2 = (e2 = g$2.state.data) == null ? void 0 : e2.InstallConnector;
    if (!t2)
      throw new Error("Missing router data");
    return t2;
  }
  onInstall() {
    const { url: e2 } = this.getRouterData();
    d$2.openHref(e2, "_blank");
  }
  onMobile() {
    const { name: e2 } = this.getRouterData();
    g$2.push("ConnectWallet"), P$1.openToast(`Scan the code with ${e2}`, "success");
  }
  render() {
    const { name: e2, id: t2, isMobile: a2 } = this.getRouterData();
    return y`<w3m-modal-header title="${e2}"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="${t2}" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ${e2}</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ${e2}, install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${this.onInstall.bind(this)}" .iconLeft="${g.ARROW_DOWN_ICON}">Install Extension</w3m-button>${a2 ? y`<w3m-button .onClick="${this.onMobile.bind(this)}" .iconLeft="${g.MOBILE_ICON}">${e2} Mobile</w3m-button>` : null}</div></div></w3m-modal-content>`;
  }
};
nt.styles = [u.globalCss, dn], nt = pn([e$2("w3m-install-connector-view")], nt);
var un = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, gn = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? vn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && un(t2, a2, o3), o3;
};
let rt = class extends s {
  render() {
    return y`<w3m-modal-header title="Scan the code" .onAction="${h.handleUriCopy}" .actionIcon="${g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
  }
};
rt.styles = [u.globalCss], rt = gn([e$2("w3m-qrcode-view")], rt);
const wn = i$3`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;
var bn = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, yn = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? fn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && bn(t2, a2, o3), o3;
};
let it = class extends s {
  async onSelectChain(e2) {
    const { isConnected: t2, selectedChain: a2, walletConnectVersion: n2 } = a$2.state;
    t2 ? (a2 == null ? void 0 : a2.id) === e2.id ? g$2.replace("Account") : n2 === 2 ? (await L.client().switchNetwork({ chainId: e2.id }), g$2.replace("Account")) : g$2.push("SwitchNetwork", { SwitchNetwork: e2 }) : (g$2.push("ConnectWallet"), a$2.setSelectedChain(e2));
  }
  render() {
    const { chains: e2 } = a$2.state;
    return y`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">${e2 == null ? void 0 : e2.map((t2) => y`<w3m-network-button name="${t2.name}" chainId="${t2.id}" .onClick="${async () => this.onSelectChain(t2)}">${t2.name}</w3m-network-button>`)}</div></w3m-modal-content>`;
  }
};
it.styles = [u.globalCss, wn], it = yn([e$2("w3m-select-network-view")], it);
const xn = i$3`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}`;
var Cn = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, $t = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? kn(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && Cn(t2, a2, o3), o3;
};
let _e = class extends s {
  constructor() {
    super(), this.error = false, this.onSwitchNetwork();
  }
  getRouterData() {
    var e2;
    const t2 = (e2 = g$2.state.data) == null ? void 0 : e2.SwitchNetwork;
    if (!t2)
      throw new Error("Missing router data");
    return t2;
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      const e2 = this.getRouterData();
      await L.client().switchNetwork({ chainId: e2.id }), a$2.setSelectedChain(e2), g$2.replace("Account");
    } catch {
      this.error = true;
    }
  }
  render() {
    const { id: e2, name: t2 } = this.getRouterData(), a2 = { "w3m-wrapper": true, "w3m-error": this.error };
    return y`<w3m-modal-header title="${`Connect to ${t2}`}"></w3m-modal-header><w3m-modal-content><div class="${o2(a2)}"><w3m-network-image chainId="${e2}"></w3m-network-image><div class="w3m-connecting-title">${this.error ? null : y`<w3m-spinner></w3m-spinner>`}<w3m-text variant="large-bold" color="${this.error ? "error" : "secondary"}">${this.error ? "Connection declined" : "Approve in your wallet"}</w3m-text></div><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.error}" .iconRight="${g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`;
  }
};
_e.styles = [u.globalCss, xn], $t([t$1()], _e.prototype, "error", 2), _e = $t([e$2("w3m-switch-network-view")], _e);
const $n = i$3`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var On = Object.defineProperty, In = Object.getOwnPropertyDescriptor, xe = (e2, t2, a2, n2) => {
  for (var o3 = n2 > 1 ? void 0 : n2 ? In(t2, a2) : t2, r2 = e2.length - 1, i2; r2 >= 0; r2--)
    (i2 = e2[r2]) && (o3 = (n2 ? i2(t2, a2, o3) : i2(o3)) || o3);
  return n2 && o3 && On(t2, a2, o3), o3;
};
const lt = 40;
let Q = class extends s {
  constructor() {
    super(...arguments), this.loading = !A$1.state.wallets.listings.length, this.firstFetch = !A$1.state.wallets.listings.length, this.search = "", this.endReached = false, this.intersectionObserver = void 0, this.searchDebounce = h.debounce((e2) => {
      e2.length >= 3 ? (this.firstFetch = true, this.endReached = false, this.search = e2, A$1.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), A$1.resetSearch());
    });
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.intersectionObserver) == null || e2.disconnect();
  }
  get placeholderEl() {
    return h.getShadowRootElement(this, ".w3m-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([e2]) => {
      e2.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: e2, search: t2 } = A$1.state, { listings: a2, total: n2 } = this.search ? t2 : e2;
    return n2 <= lt || a2.length >= n2;
  }
  async fetchWallets() {
    var e2;
    const { wallets: t2, search: a2 } = A$1.state, n2 = h.getExtensionWallets(), { listings: o3, total: r2, page: i2 } = this.search ? a2 : t2;
    if (!this.endReached && (this.firstFetch || r2 > lt && o3.length < r2))
      try {
        this.loading = true;
        const c2 = (e2 = a$2.state.standaloneChains) == null ? void 0 : e2.join(","), { listings: m2 } = await A$1.getPaginatedWallets({ page: this.firstFetch ? 1 : i2 + 1, entries: lt, device: d$2.isMobile() ? "mobile" : "desktop", search: this.search, version: a$2.state.walletConnectVersion, chains: c2 }), s2 = m2.map(({ image_url: v2 }) => v2.lg), d3 = n2.map(({ id: v2 }) => h.getWalletIcon(v2));
        await Promise.all([...s2.map(async (v2) => h.preloadImage(v2)), ...d3.map(async (v2) => h.preloadImage(v2)), d$2.wait(300)]), this.endReached = this.isLastPage();
      } catch (c2) {
        console.error(c2), P$1.openToast(h.getErrorMessage(c2), "error");
      } finally {
        this.loading = false, this.firstFetch = false;
      }
  }
  onConnectCustom({ name: e2, id: t2, links: a2 }) {
    d$2.isMobile() ? h.handleMobileLinking({ links: a2, name: e2, id: t2 }) : g$2.push("DesktopConnector", { DesktopConnector: { name: e2, walletId: t2, universal: a2.universal, native: a2.native } });
  }
  onConnectListing(e2) {
    if (d$2.isMobile()) {
      const { id: t2, image_url: a2 } = e2, { native: n2, universal: o3 } = e2.mobile;
      h.handleMobileLinking({ links: { native: n2, universal: o3 }, name: e2.name, id: t2, image: a2.lg });
    } else
      g$2.push("DesktopConnector", { DesktopConnector: { name: e2.name, icon: e2.image_url.lg, universal: e2.desktop.universal || e2.homepage, native: e2.desktop.native } });
  }
  onConnectExtension(e2) {
    h.getWalletId("") === e2.id ? g$2.push("InjectedConnector") : g$2.push("InstallConnector", { InstallConnector: e2 });
  }
  onSearchChange(e2) {
    const { value: t2 } = e2.target;
    this.searchDebounce(t2);
  }
  coinbaseConnectorTemplate() {
    try {
      const e2 = L.client().getConnectorById(Z.coinbaseWallet);
      return y`<w3m-wallet-button name="${e2.name}" walletId="${e2.id}" .onClick="${async () => h.handleConnectorConnection(Z.coinbaseWallet)}"></w3m-wallet-button>`;
    } catch {
      return null;
    }
  }
  render() {
    const { wallets: e2, search: t2 } = A$1.state, { isStandalone: a2 } = a$2.state;
    let { listings: n2 } = this.search ? t2 : e2;
    n2 = R.allowedExplorerListings(n2);
    const o$12 = this.loading && !n2.length, r2 = this.search.length >= 3, i2 = !o$12 && (!r2 || h.caseSafeIncludes(Z.coinbaseWallet, this.search));
    let c2 = !a2 && !d$2.isMobile() ? h.getExtensionWallets() : [], m2 = h.getCustomWallets();
    r2 && (c2 = c2.filter(({ name: O }) => h.caseSafeIncludes(O, this.search)), m2 = m2.filter(({ name: O }) => h.caseSafeIncludes(O, this.search)));
    const s2 = !this.loading && !n2.length && !c2.length && !i2, d3 = Math.max(c2.length, n2.length), v2 = { "w3m-loading": o$12, "w3m-end-reached": this.endReached || !this.loading, "w3m-empty": s2 };
    return y`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${o2(v2)}"><div class="w3m-grid">${o$12 ? null : [...Array(d3)].map((O, C2) => y`${m2[C2] ? y`<w3m-wallet-button name="${m2[C2].name}" walletId="${m2[C2].id}" .onClick="${() => this.onConnectCustom(m2[C2])}"></w3m-wallet-button>` : null} ${c2[C2] ? y`<w3m-wallet-button name="${c2[C2].name}" walletId="${c2[C2].id}" .onClick="${() => this.onConnectExtension(c2[C2])}"></w3m-wallet-button>` : null} ${n2[C2] ? y`<w3m-wallet-button src="${n2[C2].image_url.lg}" name="${n2[C2].name}" walletId="${n2[C2].id}" .onClick="${() => this.onConnectListing(n2[C2])}"></w3m-wallet-button>` : null}`)} ${i2 ? this.coinbaseConnectorTemplate() : null}</div><div class="w3m-placeholder-block">${s2 ? y`<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>` : null} ${!s2 && this.loading ? y`<w3m-spinner></w3m-spinner>` : null}</div></w3m-modal-content>`;
  }
};
Q.styles = [u.globalCss, $n], xe([t$1()], Q.prototype, "loading", 2), xe([t$1()], Q.prototype, "firstFetch", 2), xe([t$1()], Q.prototype, "search", 2), xe([t$1()], Q.prototype, "endReached", 2), Q = xe([e$2("w3m-wallet-explorer-view")], Q);
export {
  We as W3mAccountButton,
  ae as W3mConnectButton,
  ne as W3mCoreButton,
  re as W3mModal,
  ie as W3mNetworkSwitch
};
