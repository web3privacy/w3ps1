import { t as tslibExports, e as eventsExports } from "./tslib-90322880.js";
import { e as commonjsGlobal, h as getAugmentedNamespace, r as require$$1 } from "./_page-229a63fb.js";
import { b as safeJsonStringify$1, s as splitOnFirst, a as strictUriEncode, d as decodeUriComponent, i as isWsUrl, c as cjs$8, e as isLocalhostUrl, g as safeJsonParse$1, f as formatJsonRpcError, h as parseConnectionError, J as JsonRpcProvider, j as isJsonRpcRequest, k as formatJsonRpcResult, l as isJsonRpcResult, m as isJsonRpcError, n as isJsonRpcResponse, o as formatJsonRpcRequest, H as HttpConnection } from "./index-c1472ac1.js";
function tryStringify(o2) {
  try {
    return JSON.stringify(o2);
  } catch (e) {
    return '"[Circular]"';
  }
}
var quickFormatUnescaped = format$1;
function format$1(f, args, opts) {
  var ss2 = opts && opts.stringify || tryStringify;
  var offset = 1;
  if (typeof f === "object" && f !== null) {
    var len = args.length + offset;
    if (len === 1)
      return f;
    var objects = new Array(len);
    objects[0] = ss2(f);
    for (var index = 1; index < len; index++) {
      objects[index] = ss2(args[index]);
    }
    return objects.join(" ");
  }
  if (typeof f !== "string") {
    return f;
  }
  var argLen = args.length;
  if (argLen === 0)
    return f;
  var str = "";
  var a3 = 1 - offset;
  var lastPos = -1;
  var flen = f && f.length || 0;
  for (var i = 0; i < flen; ) {
    if (f.charCodeAt(i) === 37 && i + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0;
      switch (f.charCodeAt(i + 1)) {
        case 100:
        case 102:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += Number(args[a3]);
          lastPos = i + 2;
          i++;
          break;
        case 105:
          if (a3 >= argLen)
            break;
          if (args[a3] == null)
            break;
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += Math.floor(Number(args[a3]));
          lastPos = i + 2;
          i++;
          break;
        case 79:
        case 111:
        case 106:
          if (a3 >= argLen)
            break;
          if (args[a3] === void 0)
            break;
          if (lastPos < i)
            str += f.slice(lastPos, i);
          var type = typeof args[a3];
          if (type === "string") {
            str += "'" + args[a3] + "'";
            lastPos = i + 2;
            i++;
            break;
          }
          if (type === "function") {
            str += args[a3].name || "<anonymous>";
            lastPos = i + 2;
            i++;
            break;
          }
          str += ss2(args[a3]);
          lastPos = i + 2;
          i++;
          break;
        case 115:
          if (a3 >= argLen)
            break;
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += String(args[a3]);
          lastPos = i + 2;
          i++;
          break;
        case 37:
          if (lastPos < i)
            str += f.slice(lastPos, i);
          str += "%";
          lastPos = i + 2;
          i++;
          a3--;
          break;
      }
      ++a3;
    }
    ++i;
  }
  if (lastPos === -1)
    return f;
  else if (lastPos < flen) {
    str += f.slice(lastPos);
  }
  return str;
}
const format = quickFormatUnescaped;
var browser$2 = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
};
function shouldSerialize(serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function(k2) {
      return k2 !== "!stdSerializers.err";
    });
    return hasToFilter;
  } else if (serialize === true) {
    return Object.keys(serializers);
  }
  return false;
}
function pino(opts) {
  opts = opts || {};
  opts.browser = opts.browser || {};
  const transmit2 = opts.browser.transmit;
  if (transmit2 && typeof transmit2.send !== "function") {
    throw Error("pino: transmit option must have a send function");
  }
  const proto = opts.browser.write || _console;
  if (opts.browser.write)
    opts.browser.asObject = true;
  const serializers = opts.serializers || {};
  const serialize = shouldSerialize(opts.browser.serialize, serializers);
  let stdErrSerialize = opts.browser.serialize;
  if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
    stdErrSerialize = false;
  const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
  if (typeof proto === "function") {
    proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
  }
  if (opts.enabled === false)
    opts.level = "silent";
  const level = opts.level || "info";
  const logger = Object.create(proto);
  if (!logger.log)
    logger.log = noop;
  Object.defineProperty(logger, "levelVal", {
    get: getLevelVal
  });
  Object.defineProperty(logger, "level", {
    get: getLevel,
    set: setLevel
  });
  const setOpts = {
    transmit: transmit2,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  };
  logger.levels = pino.levels;
  logger.level = level;
  logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
  logger.serializers = serializers;
  logger._serialize = serialize;
  logger._stdErrSerialize = stdErrSerialize;
  logger.child = child;
  if (transmit2)
    logger._logEvent = createLogEventShape();
  function getLevelVal() {
    return this.level === "silent" ? Infinity : this.levels.values[this.level];
  }
  function getLevel() {
    return this._level;
  }
  function setLevel(level2) {
    if (level2 !== "silent" && !this.levels.values[level2]) {
      throw Error("unknown level " + level2);
    }
    this._level = level2;
    set(setOpts, logger, "error", "log");
    set(setOpts, logger, "fatal", "error");
    set(setOpts, logger, "warn", "error");
    set(setOpts, logger, "info", "log");
    set(setOpts, logger, "debug", "log");
    set(setOpts, logger, "trace", "log");
  }
  function child(bindings, childOptions) {
    if (!bindings) {
      throw new Error("missing bindings for child Pino");
    }
    childOptions = childOptions || {};
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers;
    }
    const childOptionsSerializers = childOptions.serializers;
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
      var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
      delete bindings.serializers;
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
    }
    function Child(parent) {
      this._childLevel = (parent._childLevel | 0) + 1;
      this.error = bind(parent, bindings, "error");
      this.fatal = bind(parent, bindings, "fatal");
      this.warn = bind(parent, bindings, "warn");
      this.info = bind(parent, bindings, "info");
      this.debug = bind(parent, bindings, "debug");
      this.trace = bind(parent, bindings, "trace");
      if (childSerializers) {
        this.serializers = childSerializers;
        this._serialize = childSerialize;
      }
      if (transmit2) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        );
      }
    }
    Child.prototype = this;
    return new Child(this);
  }
  return logger;
}
pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal"
  }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
function set(opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger);
  logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
  wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
  if (!opts.transmit && logger[level] === noop)
    return;
  logger[level] = function(write) {
    return function LOG() {
      const ts2 = opts.timestamp();
      const args = new Array(arguments.length);
      const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
      for (var i = 0; i < args.length; i++)
        args[i] = arguments[i];
      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
      }
      if (opts.asObject)
        write.call(proto, asObject(this, level, args, ts2));
      else
        write.apply(proto, args);
      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level;
        const transmitValue = pino.levels.values[transmitLevel];
        const methodValue = pino.levels.values[level];
        if (methodValue < transmitValue)
          return;
        transmit(this, {
          ts: ts2,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args);
      }
    };
  }(logger[level]);
}
function asObject(logger, level, args, ts2) {
  if (logger._serialize)
    applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
  const argsCloned = args.slice();
  let msg = argsCloned[0];
  const o2 = {};
  if (ts2) {
    o2.time = ts2;
  }
  o2.level = pino.levels.values[level];
  let lvl = (logger._childLevel | 0) + 1;
  if (lvl < 1)
    lvl = 1;
  if (msg !== null && typeof msg === "object") {
    while (lvl-- && typeof argsCloned[0] === "object") {
      Object.assign(o2, argsCloned.shift());
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
  } else if (typeof msg === "string")
    msg = format(argsCloned.shift(), argsCloned);
  if (msg !== void 0)
    o2.msg = msg;
  return o2;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i]);
    } else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
      for (const k2 in args[i]) {
        if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
          args[i][k2] = serializers[k2](args[i][k2]);
        }
      }
    }
  }
}
function bind(parent, bindings, level) {
  return function() {
    const args = new Array(1 + arguments.length);
    args[0] = bindings;
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i - 1];
    }
    return parent[level].apply(this, args);
  };
}
function transmit(logger, opts, args) {
  const send = opts.send;
  const ts2 = opts.ts;
  const methodLevel = opts.methodLevel;
  const methodValue = opts.methodValue;
  const val = opts.val;
  const bindings = logger._logEvent.bindings;
  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
  );
  logger._logEvent.ts = ts2;
  logger._logEvent.messages = args.filter(function(arg) {
    return bindings.indexOf(arg) === -1;
  });
  logger._logEvent.level.label = methodLevel;
  logger._logEvent.level.value = methodValue;
  send(methodLevel, logger._logEvent, val);
  logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: "", value: 0 }
  };
}
function asErrValue(err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  };
  for (const key in err) {
    if (obj[key] === void 0) {
      obj[key] = err[key];
    }
  }
  return obj;
}
function getTimeFunction(opts) {
  if (typeof opts.timestamp === "function") {
    return opts.timestamp;
  }
  if (opts.timestamp === false) {
    return nullTime;
  }
  return epochTime;
}
function mock() {
  return {};
}
function passthrough(a3) {
  return a3;
}
function noop() {
}
function nullTime() {
  return false;
}
function epochTime() {
  return Date.now();
}
function unixTime() {
  return Math.round(Date.now() / 1e3);
}
function isoTime() {
  return new Date(Date.now()).toISOString();
}
function pfGlobalThisOrFallback() {
  function defd(o2) {
    return typeof o2 !== "undefined" && o2;
  }
  try {
    if (typeof globalThis !== "undefined")
      return globalThis;
    Object.defineProperty(Object.prototype, "globalThis", {
      get: function() {
        delete Object.prototype.globalThis;
        return this.globalThis = this;
      },
      configurable: true
    });
    return globalThis;
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {};
  }
}
var browser$1 = {};
var cjs$7 = {};
Object.defineProperty(cjs$7, "__esModule", { value: true });
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}
cjs$7.safeJsonParse = safeJsonParse;
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSON.stringify(value, (key, value2) => typeof value2 === "undefined" ? null : value2);
}
cjs$7.safeJsonStringify = safeJsonStringify;
var localStorageExports = {};
var localStorage = {
  get exports() {
    return localStorageExports;
  },
  set exports(v2) {
    localStorageExports = v2;
  }
};
var hasRequiredLocalStorage;
function requireLocalStorage() {
  if (hasRequiredLocalStorage)
    return localStorageExports;
  hasRequiredLocalStorage = 1;
  (function() {
    let db;
    function LocalStorage() {
    }
    db = LocalStorage;
    db.prototype.getItem = function(key) {
      if (this.hasOwnProperty(key)) {
        return String(this[key]);
      }
      return null;
    };
    db.prototype.setItem = function(key, val) {
      this[key] = String(val);
    };
    db.prototype.removeItem = function(key) {
      delete this[key];
    };
    db.prototype.clear = function() {
      const self2 = this;
      Object.keys(self2).forEach(function(key) {
        self2[key] = void 0;
        delete self2[key];
      });
    };
    db.prototype.key = function(i) {
      i = i || 0;
      return Object.keys(this)[i];
    };
    db.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    });
    if (typeof commonjsGlobal !== "undefined" && commonjsGlobal.localStorage) {
      localStorage.exports = commonjsGlobal.localStorage;
    } else if (typeof window !== "undefined" && window.localStorage) {
      localStorage.exports = window.localStorage;
    } else {
      localStorage.exports = new LocalStorage();
    }
  })();
  return localStorageExports;
}
var shared = {};
var types$2 = {};
var hasRequiredTypes$2;
function requireTypes$2() {
  if (hasRequiredTypes$2)
    return types$2;
  hasRequiredTypes$2 = 1;
  Object.defineProperty(types$2, "__esModule", { value: true });
  types$2.IKeyValueStorage = void 0;
  class IKeyValueStorage {
  }
  types$2.IKeyValueStorage = IKeyValueStorage;
  return types$2;
}
var utils$2 = {};
var hasRequiredUtils$2;
function requireUtils$2() {
  if (hasRequiredUtils$2)
    return utils$2;
  hasRequiredUtils$2 = 1;
  Object.defineProperty(utils$2, "__esModule", { value: true });
  utils$2.parseEntry = void 0;
  const safe_json_utils_12 = cjs$7;
  function parseEntry(entry) {
    var _a;
    return [entry[0], safe_json_utils_12.safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")];
  }
  utils$2.parseEntry = parseEntry;
  return utils$2;
}
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared)
    return shared;
  hasRequiredShared = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireTypes$2(), exports);
    tslib_12.__exportStar(requireUtils$2(), exports);
  })(shared);
  return shared;
}
Object.defineProperty(browser$1, "__esModule", { value: true });
browser$1.KeyValueStorage = void 0;
const tslib_1 = tslibExports;
const safe_json_utils_1 = cjs$7;
const localStorage_1 = tslib_1.__importDefault(requireLocalStorage());
const shared_1 = requireShared();
class KeyValueStorage {
  constructor() {
    this.localStorage = localStorage_1.default;
  }
  getKeys() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(shared_1.parseEntry);
    });
  }
  getItem(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const item = this.localStorage.getItem(key);
      if (item === null) {
        return void 0;
      }
      return safe_json_utils_1.safeJsonParse(item);
    });
  }
  setItem(key, value) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(key, safe_json_utils_1.safeJsonStringify(value));
    });
  }
  removeItem(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(key);
    });
  }
}
browser$1.KeyValueStorage = KeyValueStorage;
var _default = browser$1.default = KeyValueStorage;
var cjs$6 = {};
var heartbeat$2 = {};
var cjs$5 = {};
var utils$1 = {};
var delay = {};
var hasRequiredDelay;
function requireDelay() {
  if (hasRequiredDelay)
    return delay;
  hasRequiredDelay = 1;
  Object.defineProperty(delay, "__esModule", { value: true });
  delay.delay = void 0;
  function delay$1(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  }
  delay.delay = delay$1;
  return delay;
}
var convert = {};
var constants$2 = {};
var misc = {};
var hasRequiredMisc;
function requireMisc() {
  if (hasRequiredMisc)
    return misc;
  hasRequiredMisc = 1;
  Object.defineProperty(misc, "__esModule", { value: true });
  misc.ONE_THOUSAND = misc.ONE_HUNDRED = void 0;
  misc.ONE_HUNDRED = 100;
  misc.ONE_THOUSAND = 1e3;
  return misc;
}
var time = {};
var hasRequiredTime;
function requireTime() {
  if (hasRequiredTime)
    return time;
  hasRequiredTime = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  })(time);
  return time;
}
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2)
    return constants$2;
  hasRequiredConstants$2 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireMisc(), exports);
    tslib_12.__exportStar(requireTime(), exports);
  })(constants$2);
  return constants$2;
}
var hasRequiredConvert;
function requireConvert() {
  if (hasRequiredConvert)
    return convert;
  hasRequiredConvert = 1;
  Object.defineProperty(convert, "__esModule", { value: true });
  convert.fromMiliseconds = convert.toMiliseconds = void 0;
  const constants_1 = requireConstants$2();
  function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
  }
  convert.toMiliseconds = toMiliseconds;
  function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
  }
  convert.fromMiliseconds = fromMiliseconds;
  return convert;
}
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1)
    return utils$1;
  hasRequiredUtils$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireDelay(), exports);
    tslib_12.__exportStar(requireConvert(), exports);
  })(utils$1);
  return utils$1;
}
var watch$1 = {};
var hasRequiredWatch$1;
function requireWatch$1() {
  if (hasRequiredWatch$1)
    return watch$1;
  hasRequiredWatch$1 = 1;
  Object.defineProperty(watch$1, "__esModule", { value: true });
  watch$1.Watch = void 0;
  class Watch {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(label) {
      if (this.timestamps.has(label)) {
        throw new Error(`Watch already started for label: ${label}`);
      }
      this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
      const timestamp = this.get(label);
      if (typeof timestamp.elapsed !== "undefined") {
        throw new Error(`Watch already stopped for label: ${label}`);
      }
      const elapsed = Date.now() - timestamp.started;
      this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
      const timestamp = this.timestamps.get(label);
      if (typeof timestamp === "undefined") {
        throw new Error(`No timestamp found for label: ${label}`);
      }
      return timestamp;
    }
    elapsed(label) {
      const timestamp = this.get(label);
      const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
      return elapsed;
    }
  }
  watch$1.Watch = Watch;
  watch$1.default = Watch;
  return watch$1;
}
var types$1 = {};
var watch = {};
var hasRequiredWatch;
function requireWatch() {
  if (hasRequiredWatch)
    return watch;
  hasRequiredWatch = 1;
  Object.defineProperty(watch, "__esModule", { value: true });
  watch.IWatch = void 0;
  class IWatch {
  }
  watch.IWatch = IWatch;
  return watch;
}
var hasRequiredTypes$1;
function requireTypes$1() {
  if (hasRequiredTypes$1)
    return types$1;
  hasRequiredTypes$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireWatch(), exports);
  })(types$1);
  return types$1;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_12 = tslibExports;
  tslib_12.__exportStar(requireUtils$1(), exports);
  tslib_12.__exportStar(requireWatch$1(), exports);
  tslib_12.__exportStar(requireTypes$1(), exports);
  tslib_12.__exportStar(requireConstants$2(), exports);
})(cjs$5);
var types = {};
var heartbeat$1 = {};
class IEvents {
}
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esm);
var hasRequiredHeartbeat$2;
function requireHeartbeat$2() {
  if (hasRequiredHeartbeat$2)
    return heartbeat$1;
  hasRequiredHeartbeat$2 = 1;
  Object.defineProperty(heartbeat$1, "__esModule", { value: true });
  heartbeat$1.IHeartBeat = void 0;
  const events_1 = require$$0;
  class IHeartBeat extends events_1.IEvents {
    constructor(opts) {
      super();
    }
  }
  heartbeat$1.IHeartBeat = IHeartBeat;
  return heartbeat$1;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types;
  hasRequiredTypes = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireHeartbeat$2(), exports);
  })(types);
  return types;
}
var constants$1 = {};
var heartbeat = {};
var hasRequiredHeartbeat$1;
function requireHeartbeat$1() {
  if (hasRequiredHeartbeat$1)
    return heartbeat;
  hasRequiredHeartbeat$1 = 1;
  Object.defineProperty(heartbeat, "__esModule", { value: true });
  heartbeat.HEARTBEAT_EVENTS = heartbeat.HEARTBEAT_INTERVAL = void 0;
  const time_1 = cjs$5;
  heartbeat.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
  heartbeat.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  };
  return heartbeat;
}
var hasRequiredConstants$1;
function requireConstants$1() {
  if (hasRequiredConstants$1)
    return constants$1;
  hasRequiredConstants$1 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_12 = tslibExports;
    tslib_12.__exportStar(requireHeartbeat$1(), exports);
  })(constants$1);
  return constants$1;
}
var hasRequiredHeartbeat;
function requireHeartbeat() {
  if (hasRequiredHeartbeat)
    return heartbeat$2;
  hasRequiredHeartbeat = 1;
  Object.defineProperty(heartbeat$2, "__esModule", { value: true });
  heartbeat$2.HeartBeat = void 0;
  const tslib_12 = tslibExports;
  const events_1 = eventsExports;
  const time_1 = cjs$5;
  const types_1 = requireTypes();
  const constants_1 = requireConstants$1();
  class HeartBeat extends types_1.IHeartBeat {
    constructor(opts) {
      super(opts);
      this.events = new events_1.EventEmitter();
      this.interval = constants_1.HEARTBEAT_INTERVAL;
      this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
    }
    static init(opts) {
      return tslib_12.__awaiter(this, void 0, void 0, function* () {
        const heartbeat2 = new HeartBeat(opts);
        yield heartbeat2.init();
        return heartbeat2;
      });
    }
    init() {
      return tslib_12.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(event, listener) {
      this.events.on(event, listener);
    }
    once(event, listener) {
      this.events.once(event, listener);
    }
    off(event, listener) {
      this.events.off(event, listener);
    }
    removeListener(event, listener) {
      this.events.removeListener(event, listener);
    }
    initialize() {
      return tslib_12.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
    }
  }
  heartbeat$2.HeartBeat = HeartBeat;
  return heartbeat$2;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const tslib_12 = tslibExports;
  tslib_12.__exportStar(requireHeartbeat(), exports);
  tslib_12.__exportStar(requireTypes(), exports);
  tslib_12.__exportStar(requireConstants$1(), exports);
})(cjs$6);
var cjs$4 = {};
var constants = {};
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants)
    return constants;
  hasRequiredConstants = 1;
  Object.defineProperty(constants, "__esModule", { value: true });
  constants.PINO_CUSTOM_CONTEXT_KEY = constants.PINO_LOGGER_DEFAULTS = void 0;
  constants.PINO_LOGGER_DEFAULTS = {
    level: "info"
  };
  constants.PINO_CUSTOM_CONTEXT_KEY = "custom_context";
  return constants;
}
var utils = {};
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils)
    return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, "__esModule", { value: true });
  utils.generateChildLogger = utils.formatChildLoggerContext = utils.getLoggerContext = utils.setBrowserLoggerContext = utils.getBrowserLoggerContext = utils.getDefaultLoggerOptions = void 0;
  const constants_1 = requireConstants();
  function getDefaultLoggerOptions(opts) {
    return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
  }
  utils.getDefaultLoggerOptions = getDefaultLoggerOptions;
  function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    return logger[customContextKey] || "";
  }
  utils.getBrowserLoggerContext = getBrowserLoggerContext;
  function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    logger[customContextKey] = context;
    return logger;
  }
  utils.setBrowserLoggerContext = setBrowserLoggerContext;
  function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    let context = "";
    if (typeof logger.bindings === "undefined") {
      context = getBrowserLoggerContext(logger, customContextKey);
    } else {
      context = logger.bindings().context || "";
    }
    return context;
  }
  utils.getLoggerContext = getLoggerContext;
  function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const parentContext = getLoggerContext(logger, customContextKey);
    const context = parentContext.trim() ? `${parentContext}/${childContext}` : childContext;
    return context;
  }
  utils.formatChildLoggerContext = formatChildLoggerContext;
  function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
    const context = formatChildLoggerContext(logger, childContext, customContextKey);
    const child = logger.child({ context });
    return setBrowserLoggerContext(child, context, customContextKey);
  }
  utils.generateChildLogger = generateChildLogger;
  return utils;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.pino = void 0;
  const tslib_12 = tslibExports;
  const pino_1 = tslib_12.__importDefault(browser$2);
  Object.defineProperty(exports, "pino", { enumerable: true, get: function() {
    return pino_1.default;
  } });
  tslib_12.__exportStar(requireConstants(), exports);
  tslib_12.__exportStar(requireUtils(), exports);
})(cjs$4);
class n extends IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
let h$3 = class h extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
let a$1 = class a {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
};
let u$1 = class u extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
class g extends IEvents {
  constructor(s) {
    super();
  }
}
let p$2 = class p {
  constructor(s, t, o2, S2) {
    this.core = s, this.logger = t, this.name = o2;
  }
};
class x extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
let E$2 = class E extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
};
let y$3 = class y {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
let C$3 = class C {
  constructor(s) {
    this.client = s;
  }
};
var ed25519 = {};
var random = {};
var system = {};
var browser = {};
Object.defineProperty(browser, "__esModule", { value: true });
browser.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
    if (browserCrypto && browserCrypto.getRandomValues !== void 0) {
      this._crypto = browserCrypto;
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Browser random byte generator is not available.");
    }
    const out = new Uint8Array(length);
    for (let i = 0; i < out.length; i += QUOTA) {
      this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
    }
    return out;
  }
}
browser.BrowserRandomSource = BrowserRandomSource;
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var node = {};
var wipe$1 = {};
Object.defineProperty(wipe$1, "__esModule", { value: true });
function wipe(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
wipe$1.wipe = wipe;
Object.defineProperty(node, "__esModule", { value: true });
node.NodeRandomSource = void 0;
const wipe_1$3 = wipe$1;
class NodeRandomSource {
  constructor() {
    this.isAvailable = false;
    this.isInstantiated = false;
    if (typeof commonjsRequire !== "undefined") {
      const nodeCrypto = require$$1;
      if (nodeCrypto && nodeCrypto.randomBytes) {
        this._crypto = nodeCrypto;
        this.isAvailable = true;
        this.isInstantiated = true;
      }
    }
  }
  randomBytes(length) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Node.js random byte generator is not available.");
    }
    let buffer = this._crypto.randomBytes(length);
    if (buffer.length !== length) {
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    }
    const out = new Uint8Array(length);
    for (let i = 0; i < out.length; i++) {
      out[i] = buffer[i];
    }
    (0, wipe_1$3.wipe)(buffer);
    return out;
  }
}
node.NodeRandomSource = NodeRandomSource;
Object.defineProperty(system, "__esModule", { value: true });
system.SystemRandomSource = void 0;
const browser_1 = browser;
const node_1 = node;
class SystemRandomSource {
  constructor() {
    this.isAvailable = false;
    this.name = "";
    this._source = new browser_1.BrowserRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Browser";
      return;
    }
    this._source = new node_1.NodeRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Node";
      return;
    }
  }
  randomBytes(length) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    return this._source.randomBytes(length);
  }
}
system.SystemRandomSource = SystemRandomSource;
var binary = {};
var int = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function imulShim(a3, b2) {
    var ah = a3 >>> 16 & 65535, al = a3 & 65535;
    var bh = b2 >>> 16 & 65535, bl = b2 & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  exports.mul = Math.imul || imulShim;
  function add(a3, b2) {
    return a3 + b2 | 0;
  }
  exports.add = add;
  function sub(a3, b2) {
    return a3 - b2 | 0;
  }
  exports.sub = sub;
  function rotl(x2, n2) {
    return x2 << n2 | x2 >>> 32 - n2;
  }
  exports.rotl = rotl;
  function rotr(x2, n2) {
    return x2 << 32 - n2 | x2 >>> n2;
  }
  exports.rotr = rotr;
  function isIntegerShim(n2) {
    return typeof n2 === "number" && isFinite(n2) && Math.floor(n2) === n2;
  }
  exports.isInteger = Number.isInteger || isIntegerShim;
  exports.MAX_SAFE_INTEGER = 9007199254740991;
  exports.isSafeInteger = function(n2) {
    return exports.isInteger(n2) && (n2 >= -exports.MAX_SAFE_INTEGER && n2 <= exports.MAX_SAFE_INTEGER);
  };
})(int);
Object.defineProperty(binary, "__esModule", { value: true });
var int_1 = int;
function readInt16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
binary.readInt16BE = readInt16BE;
function readUint16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
function readInt16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
binary.readInt16LE = readInt16LE;
function readUint16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
function writeUint16BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 8;
  out[offset + 1] = value >>> 0;
  return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
function writeUint16LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
function readInt32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
binary.readInt32BE = readInt32BE;
function readUint32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
function readInt32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
binary.readInt32LE = readInt32LE;
function readUint32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
function writeUint32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 24;
  out[offset + 1] = value >>> 16;
  out[offset + 2] = value >>> 8;
  out[offset + 3] = value >>> 0;
  return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
function writeUint32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  out[offset + 2] = value >>> 16;
  out[offset + 3] = value >>> 24;
  return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
function readInt64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readInt32BE(array, offset);
  var lo = readInt32BE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64BE = readInt64BE;
function readUint64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readUint32BE(array, offset);
  var lo = readUint32BE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64BE = readUint64BE;
function readInt64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readInt32LE(array, offset);
  var hi = readInt32LE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64LE = readInt64LE;
function readUint64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readUint32LE(array, offset);
  var hi = readUint32LE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64LE = readUint64LE;
function writeUint64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32BE(value / 4294967296 >>> 0, out, offset);
  writeUint32BE(value >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
function writeUint64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32LE(value >>> 0, out, offset);
  writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
function readUintBE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintBE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
    result += array[i] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintBE = readUintBE;
function readUintLE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintLE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i = offset; i < offset + bitLength / 8; i++) {
    result += array[i] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintLE = readUintLE;
function writeUintBE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintBE value must be an integer");
  }
  var div = 1;
  for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
    out[i] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintBE = writeUintBE;
function writeUintLE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintLE value must be an integer");
  }
  var div = 1;
  for (var i = offset; i < offset + bitLength / 8; i++) {
    out[i] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintLE = writeUintLE;
function readFloat32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
function readFloat32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
function readFloat64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
function readFloat64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
function writeFloat32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value);
  return out;
}
binary.writeFloat32BE = writeFloat32BE;
function writeFloat32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value, true);
  return out;
}
binary.writeFloat32LE = writeFloat32LE;
function writeFloat64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value);
  return out;
}
binary.writeFloat64BE = writeFloat64BE;
function writeFloat64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value, true);
  return out;
}
binary.writeFloat64LE = writeFloat64LE;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
  const system_1 = system;
  const binary_12 = binary;
  const wipe_12 = wipe$1;
  exports.defaultRandomSource = new system_1.SystemRandomSource();
  function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
  }
  exports.randomBytes = randomBytes;
  function randomUint32(prng = exports.defaultRandomSource) {
    const buf = randomBytes(4, prng);
    const result = (0, binary_12.readUint32LE)(buf);
    (0, wipe_12.wipe)(buf);
    return result;
  }
  exports.randomUint32 = randomUint32;
  const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) {
      throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
      throw new Error("randomString charset is too long");
    }
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while (length > 0) {
      const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
      for (let i = 0; i < buf.length && length > 0; i++) {
        const randomByte = buf[i];
        if (randomByte < maxByte) {
          out += charset.charAt(randomByte % charsLen);
          length--;
        }
      }
      (0, wipe_12.wipe)(buf);
    }
    return out;
  }
  exports.randomString = randomString;
  function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
  }
  exports.randomStringForEntropy = randomStringForEntropy;
})(random);
var sha512 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 64;
  exports.BLOCK_SIZE = 128;
  var SHA512 = (
    /** @class */
    function() {
      function SHA5122() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._stateHi = new Int32Array(8);
        this._stateLo = new Int32Array(8);
        this._tempHi = new Int32Array(16);
        this._tempLo = new Int32Array(16);
        this._buffer = new Uint8Array(256);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA5122.prototype._initState = function() {
        this._stateHi[0] = 1779033703;
        this._stateHi[1] = 3144134277;
        this._stateHi[2] = 1013904242;
        this._stateHi[3] = 2773480762;
        this._stateHi[4] = 1359893119;
        this._stateHi[5] = 2600822924;
        this._stateHi[6] = 528734635;
        this._stateHi[7] = 1541459225;
        this._stateLo[0] = 4089235720;
        this._stateLo[1] = 2227873595;
        this._stateLo[2] = 4271175723;
        this._stateLo[3] = 1595750129;
        this._stateLo[4] = 2917565137;
        this._stateLo[5] = 725511199;
        this._stateLo[6] = 4215389547;
        this._stateLo[7] = 327033209;
      };
      SHA5122.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._tempHi);
        wipe_12.wipe(this._tempLo);
        this.reset();
      };
      SHA5122.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA5122.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 128 < 112 ? 128 : 256;
          this._buffer[left] = 128;
          for (var i = left + 1; i < padLength - 8; i++) {
            this._buffer[i] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 8; i++) {
          binary_12.writeUint32BE(this._stateHi[i], out, i * 8);
          binary_12.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }
        return this;
      };
      SHA5122.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA5122.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA5122.prototype.restoreState = function(savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA5122.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.stateHi);
        wipe_12.wipe(savedState.stateLo);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA5122;
    }()
  );
  exports.SHA512 = SHA512;
  var K2 = new Int32Array([
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
  ]);
  function hashBlocks(wh, wl, hh, hl, m2, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h3, l2;
    var th, tl;
    var a3, b2, c2, d2;
    while (len >= 128) {
      for (var i = 0; i < 16; i++) {
        var j2 = 8 * i + pos;
        wh[i] = binary_12.readUint32BE(m2, j2);
        wl[i] = binary_12.readUint32BE(m2, j2 + 4);
      }
      for (var i = 0; i < 80; i++) {
        var bh0 = ah0;
        var bh1 = ah1;
        var bh2 = ah2;
        var bh3 = ah3;
        var bh4 = ah4;
        var bh5 = ah5;
        var bh6 = ah6;
        var bh7 = ah7;
        var bl0 = al0;
        var bl1 = al1;
        var bl2 = al2;
        var bl3 = al3;
        var bl4 = al4;
        var bl5 = al5;
        var bl6 = al6;
        var bl7 = al7;
        h3 = ah7;
        l2 = al7;
        a3 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l2 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        h3 = ah4 & ah5 ^ ~ah4 & ah6;
        l2 = al4 & al5 ^ ~al4 & al6;
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        h3 = K2[i * 2];
        l2 = K2[i * 2 + 1];
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        h3 = wh[i % 16];
        l2 = wl[i % 16];
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b2 += a3 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        th = c2 & 65535 | d2 << 16;
        tl = a3 & 65535 | b2 << 16;
        h3 = th;
        l2 = tl;
        a3 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l2 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        h3 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l2 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b2 += a3 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        bh7 = c2 & 65535 | d2 << 16;
        bl7 = a3 & 65535 | b2 << 16;
        h3 = bh3;
        l2 = bl3;
        a3 = l2 & 65535;
        b2 = l2 >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = th;
        l2 = tl;
        a3 += l2 & 65535;
        b2 += l2 >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b2 += a3 >>> 16;
        c2 += b2 >>> 16;
        d2 += c2 >>> 16;
        bh3 = c2 & 65535 | d2 << 16;
        bl3 = a3 & 65535 | b2 << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i % 16 === 15) {
          for (var j2 = 0; j2 < 16; j2++) {
            h3 = wh[j2];
            l2 = wl[j2];
            a3 = l2 & 65535;
            b2 = l2 >>> 16;
            c2 = h3 & 65535;
            d2 = h3 >>> 16;
            h3 = wh[(j2 + 9) % 16];
            l2 = wl[(j2 + 9) % 16];
            a3 += l2 & 65535;
            b2 += l2 >>> 16;
            c2 += h3 & 65535;
            d2 += h3 >>> 16;
            th = wh[(j2 + 1) % 16];
            tl = wl[(j2 + 1) % 16];
            h3 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
            l2 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
            a3 += l2 & 65535;
            b2 += l2 >>> 16;
            c2 += h3 & 65535;
            d2 += h3 >>> 16;
            th = wh[(j2 + 14) % 16];
            tl = wl[(j2 + 14) % 16];
            h3 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
            l2 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
            a3 += l2 & 65535;
            b2 += l2 >>> 16;
            c2 += h3 & 65535;
            d2 += h3 >>> 16;
            b2 += a3 >>> 16;
            c2 += b2 >>> 16;
            d2 += c2 >>> 16;
            wh[j2] = c2 & 65535 | d2 << 16;
            wl[j2] = a3 & 65535 | b2 << 16;
          }
        }
      }
      h3 = ah0;
      l2 = al0;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[0];
      l2 = hl[0];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[0] = ah0 = c2 & 65535 | d2 << 16;
      hl[0] = al0 = a3 & 65535 | b2 << 16;
      h3 = ah1;
      l2 = al1;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[1];
      l2 = hl[1];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[1] = ah1 = c2 & 65535 | d2 << 16;
      hl[1] = al1 = a3 & 65535 | b2 << 16;
      h3 = ah2;
      l2 = al2;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[2];
      l2 = hl[2];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[2] = ah2 = c2 & 65535 | d2 << 16;
      hl[2] = al2 = a3 & 65535 | b2 << 16;
      h3 = ah3;
      l2 = al3;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[3];
      l2 = hl[3];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[3] = ah3 = c2 & 65535 | d2 << 16;
      hl[3] = al3 = a3 & 65535 | b2 << 16;
      h3 = ah4;
      l2 = al4;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[4];
      l2 = hl[4];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[4] = ah4 = c2 & 65535 | d2 << 16;
      hl[4] = al4 = a3 & 65535 | b2 << 16;
      h3 = ah5;
      l2 = al5;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[5];
      l2 = hl[5];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[5] = ah5 = c2 & 65535 | d2 << 16;
      hl[5] = al5 = a3 & 65535 | b2 << 16;
      h3 = ah6;
      l2 = al6;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[6];
      l2 = hl[6];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[6] = ah6 = c2 & 65535 | d2 << 16;
      hl[6] = al6 = a3 & 65535 | b2 << 16;
      h3 = ah7;
      l2 = al7;
      a3 = l2 & 65535;
      b2 = l2 >>> 16;
      c2 = h3 & 65535;
      d2 = h3 >>> 16;
      h3 = hh[7];
      l2 = hl[7];
      a3 += l2 & 65535;
      b2 += l2 >>> 16;
      c2 += h3 & 65535;
      d2 += h3 >>> 16;
      b2 += a3 >>> 16;
      c2 += b2 >>> 16;
      d2 += c2 >>> 16;
      hh[7] = ah7 = c2 & 65535 | d2 << 16;
      hl[7] = al7 = a3 & 65535 | b2 << 16;
      pos += 128;
      len -= 128;
    }
    return pos;
  }
  function hash2(data) {
    var h3 = new SHA512();
    h3.update(data);
    var digest = h3.digest();
    h3.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha512);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
  const random_1 = random;
  const sha512_1 = sha512;
  const wipe_12 = wipe$1;
  exports.SIGNATURE_LENGTH = 64;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 64;
  exports.SEED_LENGTH = 32;
  function gf(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i = 0; i < init.length; i++) {
        r2[i] = init[i];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const gf0 = gf();
  const gf1 = gf([1]);
  const D2 = gf([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]);
  const D22 = gf([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]);
  const X = gf([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]);
  const Y = gf([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]);
  const I2 = gf([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function set25519(r2, a3) {
    for (let i = 0; i < 16; i++) {
      r2[i] = a3[i] | 0;
    }
  }
  function car25519(o2) {
    let c2 = 1;
    for (let i = 0; i < 16; i++) {
      let v2 = o2[i] + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      o2[i] = v2 - c2 * 65536;
    }
    o2[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b2) {
    const c2 = ~(b2 - 1);
    for (let i = 0; i < 16; i++) {
      const t = c2 & (p3[i] ^ q2[i]);
      p3[i] ^= t;
      q2[i] ^= t;
    }
  }
  function pack25519(o2, n2) {
    const m2 = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
      t[i] = n2[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t[0] - 65517;
      for (let i = 1; i < 15; i++) {
        m2[i] = t[i] - 65535 - (m2[i - 1] >> 16 & 1);
        m2[i - 1] &= 65535;
      }
      m2[15] = t[15] - 32767 - (m2[14] >> 16 & 1);
      const b2 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t, m2, 1 - b2);
    }
    for (let i = 0; i < 16; i++) {
      o2[2 * i] = t[i] & 255;
      o2[2 * i + 1] = t[i] >> 8;
    }
  }
  function verify32(x2, y3) {
    let d2 = 0;
    for (let i = 0; i < 32; i++) {
      d2 |= x2[i] ^ y3[i];
    }
    return (1 & d2 - 1 >>> 8) - 1;
  }
  function neq25519(a3, b2) {
    const c2 = new Uint8Array(32);
    const d2 = new Uint8Array(32);
    pack25519(c2, a3);
    pack25519(d2, b2);
    return verify32(c2, d2);
  }
  function par25519(a3) {
    const d2 = new Uint8Array(32);
    pack25519(d2, a3);
    return d2[0] & 1;
  }
  function unpack25519(o2, n2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = n2[2 * i] + (n2[2 * i + 1] << 8);
    }
    o2[15] &= 32767;
  }
  function add(o2, a3, b2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = a3[i] + b2[i];
    }
  }
  function sub(o2, a3, b2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = a3[i] - b2[i];
    }
  }
  function mul(o2, a3, b2) {
    let v2, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b2[0], b1 = b2[1], b22 = b2[2], b3 = b2[3], b4 = b2[4], b5 = b2[5], b6 = b2[6], b7 = b2[7], b8 = b2[8], b9 = b2[9], b10 = b2[10], b11 = b2[11], b12 = b2[12], b13 = b2[13], b14 = b2[14], b15 = b2[15];
    v2 = a3[0];
    t0 += v2 * b0;
    t1 += v2 * b1;
    t2 += v2 * b22;
    t3 += v2 * b3;
    t4 += v2 * b4;
    t5 += v2 * b5;
    t6 += v2 * b6;
    t7 += v2 * b7;
    t8 += v2 * b8;
    t9 += v2 * b9;
    t10 += v2 * b10;
    t11 += v2 * b11;
    t12 += v2 * b12;
    t13 += v2 * b13;
    t14 += v2 * b14;
    t15 += v2 * b15;
    v2 = a3[1];
    t1 += v2 * b0;
    t2 += v2 * b1;
    t3 += v2 * b22;
    t4 += v2 * b3;
    t5 += v2 * b4;
    t6 += v2 * b5;
    t7 += v2 * b6;
    t8 += v2 * b7;
    t9 += v2 * b8;
    t10 += v2 * b9;
    t11 += v2 * b10;
    t12 += v2 * b11;
    t13 += v2 * b12;
    t14 += v2 * b13;
    t15 += v2 * b14;
    t16 += v2 * b15;
    v2 = a3[2];
    t2 += v2 * b0;
    t3 += v2 * b1;
    t4 += v2 * b22;
    t5 += v2 * b3;
    t6 += v2 * b4;
    t7 += v2 * b5;
    t8 += v2 * b6;
    t9 += v2 * b7;
    t10 += v2 * b8;
    t11 += v2 * b9;
    t12 += v2 * b10;
    t13 += v2 * b11;
    t14 += v2 * b12;
    t15 += v2 * b13;
    t16 += v2 * b14;
    t17 += v2 * b15;
    v2 = a3[3];
    t3 += v2 * b0;
    t4 += v2 * b1;
    t5 += v2 * b22;
    t6 += v2 * b3;
    t7 += v2 * b4;
    t8 += v2 * b5;
    t9 += v2 * b6;
    t10 += v2 * b7;
    t11 += v2 * b8;
    t12 += v2 * b9;
    t13 += v2 * b10;
    t14 += v2 * b11;
    t15 += v2 * b12;
    t16 += v2 * b13;
    t17 += v2 * b14;
    t18 += v2 * b15;
    v2 = a3[4];
    t4 += v2 * b0;
    t5 += v2 * b1;
    t6 += v2 * b22;
    t7 += v2 * b3;
    t8 += v2 * b4;
    t9 += v2 * b5;
    t10 += v2 * b6;
    t11 += v2 * b7;
    t12 += v2 * b8;
    t13 += v2 * b9;
    t14 += v2 * b10;
    t15 += v2 * b11;
    t16 += v2 * b12;
    t17 += v2 * b13;
    t18 += v2 * b14;
    t19 += v2 * b15;
    v2 = a3[5];
    t5 += v2 * b0;
    t6 += v2 * b1;
    t7 += v2 * b22;
    t8 += v2 * b3;
    t9 += v2 * b4;
    t10 += v2 * b5;
    t11 += v2 * b6;
    t12 += v2 * b7;
    t13 += v2 * b8;
    t14 += v2 * b9;
    t15 += v2 * b10;
    t16 += v2 * b11;
    t17 += v2 * b12;
    t18 += v2 * b13;
    t19 += v2 * b14;
    t20 += v2 * b15;
    v2 = a3[6];
    t6 += v2 * b0;
    t7 += v2 * b1;
    t8 += v2 * b22;
    t9 += v2 * b3;
    t10 += v2 * b4;
    t11 += v2 * b5;
    t12 += v2 * b6;
    t13 += v2 * b7;
    t14 += v2 * b8;
    t15 += v2 * b9;
    t16 += v2 * b10;
    t17 += v2 * b11;
    t18 += v2 * b12;
    t19 += v2 * b13;
    t20 += v2 * b14;
    t21 += v2 * b15;
    v2 = a3[7];
    t7 += v2 * b0;
    t8 += v2 * b1;
    t9 += v2 * b22;
    t10 += v2 * b3;
    t11 += v2 * b4;
    t12 += v2 * b5;
    t13 += v2 * b6;
    t14 += v2 * b7;
    t15 += v2 * b8;
    t16 += v2 * b9;
    t17 += v2 * b10;
    t18 += v2 * b11;
    t19 += v2 * b12;
    t20 += v2 * b13;
    t21 += v2 * b14;
    t22 += v2 * b15;
    v2 = a3[8];
    t8 += v2 * b0;
    t9 += v2 * b1;
    t10 += v2 * b22;
    t11 += v2 * b3;
    t12 += v2 * b4;
    t13 += v2 * b5;
    t14 += v2 * b6;
    t15 += v2 * b7;
    t16 += v2 * b8;
    t17 += v2 * b9;
    t18 += v2 * b10;
    t19 += v2 * b11;
    t20 += v2 * b12;
    t21 += v2 * b13;
    t22 += v2 * b14;
    t23 += v2 * b15;
    v2 = a3[9];
    t9 += v2 * b0;
    t10 += v2 * b1;
    t11 += v2 * b22;
    t12 += v2 * b3;
    t13 += v2 * b4;
    t14 += v2 * b5;
    t15 += v2 * b6;
    t16 += v2 * b7;
    t17 += v2 * b8;
    t18 += v2 * b9;
    t19 += v2 * b10;
    t20 += v2 * b11;
    t21 += v2 * b12;
    t22 += v2 * b13;
    t23 += v2 * b14;
    t24 += v2 * b15;
    v2 = a3[10];
    t10 += v2 * b0;
    t11 += v2 * b1;
    t12 += v2 * b22;
    t13 += v2 * b3;
    t14 += v2 * b4;
    t15 += v2 * b5;
    t16 += v2 * b6;
    t17 += v2 * b7;
    t18 += v2 * b8;
    t19 += v2 * b9;
    t20 += v2 * b10;
    t21 += v2 * b11;
    t22 += v2 * b12;
    t23 += v2 * b13;
    t24 += v2 * b14;
    t25 += v2 * b15;
    v2 = a3[11];
    t11 += v2 * b0;
    t12 += v2 * b1;
    t13 += v2 * b22;
    t14 += v2 * b3;
    t15 += v2 * b4;
    t16 += v2 * b5;
    t17 += v2 * b6;
    t18 += v2 * b7;
    t19 += v2 * b8;
    t20 += v2 * b9;
    t21 += v2 * b10;
    t22 += v2 * b11;
    t23 += v2 * b12;
    t24 += v2 * b13;
    t25 += v2 * b14;
    t26 += v2 * b15;
    v2 = a3[12];
    t12 += v2 * b0;
    t13 += v2 * b1;
    t14 += v2 * b22;
    t15 += v2 * b3;
    t16 += v2 * b4;
    t17 += v2 * b5;
    t18 += v2 * b6;
    t19 += v2 * b7;
    t20 += v2 * b8;
    t21 += v2 * b9;
    t22 += v2 * b10;
    t23 += v2 * b11;
    t24 += v2 * b12;
    t25 += v2 * b13;
    t26 += v2 * b14;
    t27 += v2 * b15;
    v2 = a3[13];
    t13 += v2 * b0;
    t14 += v2 * b1;
    t15 += v2 * b22;
    t16 += v2 * b3;
    t17 += v2 * b4;
    t18 += v2 * b5;
    t19 += v2 * b6;
    t20 += v2 * b7;
    t21 += v2 * b8;
    t22 += v2 * b9;
    t23 += v2 * b10;
    t24 += v2 * b11;
    t25 += v2 * b12;
    t26 += v2 * b13;
    t27 += v2 * b14;
    t28 += v2 * b15;
    v2 = a3[14];
    t14 += v2 * b0;
    t15 += v2 * b1;
    t16 += v2 * b22;
    t17 += v2 * b3;
    t18 += v2 * b4;
    t19 += v2 * b5;
    t20 += v2 * b6;
    t21 += v2 * b7;
    t22 += v2 * b8;
    t23 += v2 * b9;
    t24 += v2 * b10;
    t25 += v2 * b11;
    t26 += v2 * b12;
    t27 += v2 * b13;
    t28 += v2 * b14;
    t29 += v2 * b15;
    v2 = a3[15];
    t15 += v2 * b0;
    t16 += v2 * b1;
    t17 += v2 * b22;
    t18 += v2 * b3;
    t19 += v2 * b4;
    t20 += v2 * b5;
    t21 += v2 * b6;
    t22 += v2 * b7;
    t23 += v2 * b8;
    t24 += v2 * b9;
    t25 += v2 * b10;
    t26 += v2 * b11;
    t27 += v2 * b12;
    t28 += v2 * b13;
    t29 += v2 * b14;
    t30 += v2 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v2 = t0 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t0 = v2 - c2 * 65536;
    v2 = t1 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t1 = v2 - c2 * 65536;
    v2 = t2 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t2 = v2 - c2 * 65536;
    v2 = t3 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t3 = v2 - c2 * 65536;
    v2 = t4 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t4 = v2 - c2 * 65536;
    v2 = t5 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t5 = v2 - c2 * 65536;
    v2 = t6 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t6 = v2 - c2 * 65536;
    v2 = t7 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t7 = v2 - c2 * 65536;
    v2 = t8 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t8 = v2 - c2 * 65536;
    v2 = t9 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t9 = v2 - c2 * 65536;
    v2 = t10 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t10 = v2 - c2 * 65536;
    v2 = t11 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t11 = v2 - c2 * 65536;
    v2 = t12 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t12 = v2 - c2 * 65536;
    v2 = t13 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t13 = v2 - c2 * 65536;
    v2 = t14 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t14 = v2 - c2 * 65536;
    v2 = t15 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t15 = v2 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v2 = t0 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t0 = v2 - c2 * 65536;
    v2 = t1 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t1 = v2 - c2 * 65536;
    v2 = t2 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t2 = v2 - c2 * 65536;
    v2 = t3 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t3 = v2 - c2 * 65536;
    v2 = t4 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t4 = v2 - c2 * 65536;
    v2 = t5 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t5 = v2 - c2 * 65536;
    v2 = t6 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t6 = v2 - c2 * 65536;
    v2 = t7 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t7 = v2 - c2 * 65536;
    v2 = t8 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t8 = v2 - c2 * 65536;
    v2 = t9 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t9 = v2 - c2 * 65536;
    v2 = t10 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t10 = v2 - c2 * 65536;
    v2 = t11 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t11 = v2 - c2 * 65536;
    v2 = t12 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t12 = v2 - c2 * 65536;
    v2 = t13 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t13 = v2 - c2 * 65536;
    v2 = t14 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t14 = v2 - c2 * 65536;
    v2 = t15 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t15 = v2 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o2[0] = t0;
    o2[1] = t1;
    o2[2] = t2;
    o2[3] = t3;
    o2[4] = t4;
    o2[5] = t5;
    o2[6] = t6;
    o2[7] = t7;
    o2[8] = t8;
    o2[9] = t9;
    o2[10] = t10;
    o2[11] = t11;
    o2[12] = t12;
    o2[13] = t13;
    o2[14] = t14;
    o2[15] = t15;
  }
  function square(o2, a3) {
    mul(o2, a3, a3);
  }
  function inv25519(o2, i) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i[a3];
    }
    for (a3 = 253; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 2 && a3 !== 4) {
        mul(c2, c2, i);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o2[a3] = c2[a3];
    }
  }
  function pow2523(o2, i) {
    const c2 = gf();
    let a3;
    for (a3 = 0; a3 < 16; a3++) {
      c2[a3] = i[a3];
    }
    for (a3 = 250; a3 >= 0; a3--) {
      square(c2, c2);
      if (a3 !== 1) {
        mul(c2, c2, i);
      }
    }
    for (a3 = 0; a3 < 16; a3++) {
      o2[a3] = c2[a3];
    }
  }
  function edadd(p3, q2) {
    const a3 = gf(), b2 = gf(), c2 = gf(), d2 = gf(), e = gf(), f = gf(), g2 = gf(), h3 = gf(), t = gf();
    sub(a3, p3[1], p3[0]);
    sub(t, q2[1], q2[0]);
    mul(a3, a3, t);
    add(b2, p3[0], p3[1]);
    add(t, q2[0], q2[1]);
    mul(b2, b2, t);
    mul(c2, p3[3], q2[3]);
    mul(c2, c2, D22);
    mul(d2, p3[2], q2[2]);
    add(d2, d2, d2);
    sub(e, b2, a3);
    sub(f, d2, c2);
    add(g2, d2, c2);
    add(h3, b2, a3);
    mul(p3[0], e, f);
    mul(p3[1], h3, g2);
    mul(p3[2], g2, f);
    mul(p3[3], e, h3);
  }
  function cswap(p3, q2, b2) {
    for (let i = 0; i < 4; i++) {
      sel25519(p3[i], q2[i], b2);
    }
  }
  function pack(r2, p3) {
    const tx = gf(), ty = gf(), zi2 = gf();
    inv25519(zi2, p3[2]);
    mul(tx, p3[0], zi2);
    mul(ty, p3[1], zi2);
    pack25519(r2, ty);
    r2[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p3, q2, s) {
    set25519(p3[0], gf0);
    set25519(p3[1], gf1);
    set25519(p3[2], gf1);
    set25519(p3[3], gf0);
    for (let i = 255; i >= 0; --i) {
      const b2 = s[i / 8 | 0] >> (i & 7) & 1;
      cswap(p3, q2, b2);
      edadd(q2, p3);
      edadd(p3, p3);
      cswap(p3, q2, b2);
    }
  }
  function scalarbase(p3, s) {
    const q2 = [gf(), gf(), gf(), gf()];
    set25519(q2[0], X);
    set25519(q2[1], Y);
    set25519(q2[2], gf1);
    mul(q2[3], X, Y);
    scalarmult(p3, q2, s);
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
      throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
    }
    const d2 = (0, sha512_1.hash)(seed);
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    scalarbase(p3, d2);
    pack(publicKey, p3);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
  }
  exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
  const L2 = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
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
    16
  ]);
  function modL(r2, x2) {
    let carry;
    let i;
    let j2;
    let k2;
    for (i = 63; i >= 32; --i) {
      carry = 0;
      for (j2 = i - 32, k2 = i - 12; j2 < k2; ++j2) {
        x2[j2] += carry - 16 * x2[i] * L2[j2 - (i - 32)];
        carry = Math.floor((x2[j2] + 128) / 256);
        x2[j2] -= carry * 256;
      }
      x2[j2] += carry;
      x2[i] = 0;
    }
    carry = 0;
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] += carry - (x2[31] >> 4) * L2[j2];
      carry = x2[j2] >> 8;
      x2[j2] &= 255;
    }
    for (j2 = 0; j2 < 32; j2++) {
      x2[j2] -= carry * L2[j2];
    }
    for (i = 0; i < 32; i++) {
      x2[i + 1] += x2[i] >> 8;
      r2[i] = x2[i] & 255;
    }
  }
  function reduce(r2) {
    const x2 = new Float64Array(64);
    for (let i = 0; i < 64; i++) {
      x2[i] = r2[i];
    }
    for (let i = 0; i < 64; i++) {
      r2[i] = 0;
    }
    modL(r2, x2);
  }
  function sign(secretKey, message) {
    const x2 = new Float64Array(64);
    const p3 = [gf(), gf(), gf(), gf()];
    const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d2.subarray(32), 32);
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(32));
    hs2.update(message);
    const r2 = hs2.digest();
    hs2.clean();
    reduce(r2);
    scalarbase(p3, r2);
    pack(signature, p3);
    hs2.reset();
    hs2.update(signature.subarray(0, 32));
    hs2.update(secretKey.subarray(32));
    hs2.update(message);
    const h3 = hs2.digest();
    reduce(h3);
    for (let i = 0; i < 32; i++) {
      x2[i] = r2[i];
    }
    for (let i = 0; i < 32; i++) {
      for (let j2 = 0; j2 < 32; j2++) {
        x2[i + j2] += h3[i] * d2[j2];
      }
    }
    modL(signature.subarray(32), x2);
    return signature;
  }
  exports.sign = sign;
  function unpackneg(r2, p3) {
    const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r2[2], gf1);
    unpack25519(r2[1], p3);
    square(num, r2[1]);
    mul(den, num, D2);
    sub(num, num, r2[2]);
    add(den, r2[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r2[0], t, den);
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      mul(r2[0], r2[0], I2);
    }
    square(chk, r2[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      return -1;
    }
    if (par25519(r2[0]) === p3[31] >> 7) {
      sub(r2[0], gf0, r2[0]);
    }
    mul(r2[3], r2[0], r2[1]);
    return 0;
  }
  function verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p3 = [gf(), gf(), gf(), gf()];
    const q2 = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
      throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
    }
    if (unpackneg(q2, publicKey)) {
      return false;
    }
    const hs2 = new sha512_1.SHA512();
    hs2.update(signature.subarray(0, 32));
    hs2.update(publicKey);
    hs2.update(message);
    const h3 = hs2.digest();
    reduce(h3);
    scalarmult(p3, q2, h3);
    scalarbase(q2, signature.subarray(32));
    edadd(p3, q2);
    pack(t, p3);
    if (verify32(signature, t)) {
      return false;
    }
    return true;
  }
  exports.verify = verify;
  function convertPublicKeyToX25519(publicKey) {
    let q2 = [gf(), gf(), gf(), gf()];
    if (unpackneg(q2, publicKey)) {
      throw new Error("Ed25519: invalid public key");
    }
    let a3 = gf();
    let b2 = gf();
    let y3 = q2[1];
    add(a3, gf1, y3);
    sub(b2, gf1, y3);
    inv25519(b2, b2);
    mul(a3, a3, b2);
    let z2 = new Uint8Array(32);
    pack25519(z2, a3);
    return z2;
  }
  exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
  function convertSecretKeyToX25519(secretKey) {
    const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d2[0] &= 248;
    d2[31] &= 127;
    d2[31] |= 64;
    const o2 = new Uint8Array(d2.subarray(0, 32));
    (0, wipe_12.wipe)(d2);
    return o2;
  }
  exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
})(ed25519);
const JWT_IRIDIUM_ALG = "EdDSA";
const JWT_IRIDIUM_TYP = "JWT";
const JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const DATA_ENCODING = "utf8";
const DID_DELIMITER = ":";
const DID_PREFIX = "did";
const DID_METHOD = "key";
const MULTICODEC_ED25519_ENCODING = "base58btc";
const MULTICODEC_ED25519_BASE = "z";
const MULTICODEC_ED25519_HEADER = "K36";
const KEY_PAIR_SEED_LENGTH = 32;
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j2 = 0; j2 < BASE_MAP.length; j2++) {
    BASE_MAP[j2] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x2 = ALPHABET.charAt(i);
    var xc = x2.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x2 + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j3 = zeroes;
    while (it4 !== size) {
      vch[j3++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
const coerce = (o2) => {
  if (o2 instanceof Uint8Array && o2.constructor.name === "Uint8Array")
    return o2;
  if (o2 instanceof ArrayBuffer)
    return new Uint8Array(o2);
  if (ArrayBuffer.isView(o2)) {
    return new Uint8Array(o2.buffer, o2.byteOffset, o2.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$1 = (str) => new TextEncoder().encode(str);
const toString$1 = (b2) => new TextDecoder().decode(b2);
class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or$1(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or$1(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or$1 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({ name, prefix, encode: encode2, decode: decode2 }) => new Codec(name, prefix, encode2, decode2);
const baseX = ({ prefix, name, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name);
  return from({
    prefix,
    name,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$1 = (string2, alphabet2, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet2.length; ++i) {
    codes[alphabet2[i]] = i;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string2[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$1 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode$1(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$1(input, alphabet2, bitsPerChar, name);
    }
  });
};
const identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$1(buf),
  decode: (str) => fromString$1(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p3, c2, i) => {
  p3[i] = c2;
  return p3;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p3, c2, i) => {
  p3[c2.codePointAt(0)] = i;
  return p3;
}, []);
function encode(data) {
  return data.reduce((p3, c2) => {
    p3 += alphabetBytesToChars[c2];
    return p3;
  }, "");
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from({
  prefix: "🚀",
  name: "base256emoji",
  encode,
  decode
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
function createCodec(name, prefix, encode2, decode2) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i = 0; i < buf.length; i++) {
    string2 += String.fromCharCode(buf[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify$1(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}
function generateKeyPair(seed = random.randomBytes(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = cjs$5.fromMiliseconds(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}
var chacha20poly1305 = {};
var chacha = {};
Object.defineProperty(chacha, "__esModule", { value: true });
var binary_1 = binary;
var wipe_1$2 = wipe$1;
var ROUNDS = 20;
function core(out, input, key) {
  var j0 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
  var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
  var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
  var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
  var x0 = j0;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i = 0; i < ROUNDS; i += 2) {
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
  binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
  binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
  binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
  binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
  binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
  binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
  binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
  binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
  binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
  binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
  binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
  binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
  binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
  binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
  binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
function streamXOR(key, nonce, src2, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  if (key.length !== 32) {
    throw new Error("ChaCha: key size must be 32 bytes");
  }
  if (dst.length < src2.length) {
    throw new Error("ChaCha: destination is shorter than source");
  }
  var nc;
  var counterLength;
  if (nonceInplaceCounterLength === 0) {
    if (nonce.length !== 8 && nonce.length !== 12) {
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    }
    nc = new Uint8Array(16);
    counterLength = nc.length - nonce.length;
    nc.set(nonce, counterLength);
  } else {
    if (nonce.length !== 16) {
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    }
    nc = nonce;
    counterLength = nonceInplaceCounterLength;
  }
  var block = new Uint8Array(64);
  for (var i = 0; i < src2.length; i += 64) {
    core(block, nc, key);
    for (var j2 = i; j2 < i + 64 && j2 < src2.length; j2++) {
      dst[j2] = src2[j2] ^ block[j2 - i];
    }
    incrementCounter(nc, 0, counterLength);
  }
  wipe_1$2.wipe(block);
  if (nonceInplaceCounterLength === 0) {
    wipe_1$2.wipe(nc);
  }
  return dst;
}
chacha.streamXOR = streamXOR;
function stream(key, nonce, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  wipe_1$2.wipe(dst);
  return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream;
function incrementCounter(counter, pos, len) {
  var carry = 1;
  while (len--) {
    carry = carry + (counter[pos] & 255) | 0;
    counter[pos] = carry & 255;
    carry >>>= 8;
    pos++;
  }
  if (carry > 0) {
    throw new Error("ChaCha: counter overflow");
  }
}
var poly1305 = {};
var constantTime = {};
Object.defineProperty(constantTime, "__esModule", { value: true });
function select(subject, resultIfOne, resultIfZero) {
  return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
constantTime.select = select;
function lessOrEqual(a3, b2) {
  return (a3 | 0) - (b2 | 0) - 1 >>> 31 & 1;
}
constantTime.lessOrEqual = lessOrEqual;
function compare(a3, b2) {
  if (a3.length !== b2.length) {
    return 0;
  }
  var result = 0;
  for (var i = 0; i < a3.length; i++) {
    result |= a3[i] ^ b2[i];
  }
  return 1 & result - 1 >>> 8;
}
constantTime.compare = compare;
function equal(a3, b2) {
  if (a3.length === 0 || b2.length === 0) {
    return false;
  }
  return compare(a3, b2) !== 0;
}
constantTime.equal = equal;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var constant_time_12 = constantTime;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 16;
  var Poly1305 = (
    /** @class */
    function() {
      function Poly13052(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 8191;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this._r[5] = t4 >>> 1 & 8190;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this._r[9] = t7 >>> 5 & 127;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
      }
      Poly13052.prototype._blocks = function(m2, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h22 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
          var t0 = m2[mpos + 0] | m2[mpos + 1] << 8;
          h0 += t0 & 8191;
          var t1 = m2[mpos + 2] | m2[mpos + 3] << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          var t2 = m2[mpos + 4] | m2[mpos + 5] << 8;
          h22 += (t1 >>> 10 | t2 << 6) & 8191;
          var t3 = m2[mpos + 6] | m2[mpos + 7] << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          var t4 = m2[mpos + 8] | m2[mpos + 9] << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          var t5 = m2[mpos + 10] | m2[mpos + 11] << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          var t6 = m2[mpos + 12] | m2[mpos + 13] << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          var t7 = m2[mpos + 14] | m2[mpos + 15] << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          var c2 = 0;
          var d0 = c2;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h22 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c2 = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c2 += d0 >>> 13;
          d0 &= 8191;
          var d1 = c2;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h22 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c2 = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c2 += d1 >>> 13;
          d1 &= 8191;
          var d2 = c2;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h22 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c2 = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c2 += d2 >>> 13;
          d2 &= 8191;
          var d3 = c2;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h22 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c2 = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c2 += d3 >>> 13;
          d3 &= 8191;
          var d4 = c2;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h22 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c2 = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c2 += d4 >>> 13;
          d4 &= 8191;
          var d5 = c2;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h22 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c2 = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c2 += d5 >>> 13;
          d5 &= 8191;
          var d6 = c2;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h22 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c2 = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c2 += d6 >>> 13;
          d6 &= 8191;
          var d7 = c2;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h22 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c2 = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c2 += d7 >>> 13;
          d7 &= 8191;
          var d8 = c2;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h22 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c2 = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c2 += d8 >>> 13;
          d8 &= 8191;
          var d9 = c2;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h22 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c2 = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c2 += d9 >>> 13;
          d9 &= 8191;
          c2 = (c2 << 2) + c2 | 0;
          c2 = c2 + d0 | 0;
          d0 = c2 & 8191;
          c2 = c2 >>> 13;
          d1 += c2;
          h0 = d0;
          h1 = d1;
          h22 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h22;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
      };
      Poly13052.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) {
          macpos = 0;
        }
        var g2 = new Uint16Array(10);
        var c2;
        var mask;
        var f;
        var i;
        if (this._leftover) {
          i = this._leftover;
          this._buffer[i++] = 1;
          for (; i < 16; i++) {
            this._buffer[i] = 0;
          }
          this._fin = 1;
          this._blocks(this._buffer, 0, 16);
        }
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this._h[i] += c2;
          c2 = this._h[i] >>> 13;
          this._h[i] &= 8191;
        }
        this._h[0] += c2 * 5;
        c2 = this._h[0] >>> 13;
        this._h[0] &= 8191;
        this._h[1] += c2;
        c2 = this._h[1] >>> 13;
        this._h[1] &= 8191;
        this._h[2] += c2;
        g2[0] = this._h[0] + 5;
        c2 = g2[0] >>> 13;
        g2[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g2[i] = this._h[i] + c2;
          c2 = g2[i] >>> 13;
          g2[i] &= 8191;
        }
        g2[9] -= 1 << 13;
        mask = (c2 ^ 1) - 1;
        for (i = 0; i < 10; i++) {
          g2[i] &= mask;
        }
        mask = ~mask;
        for (i = 0; i < 10; i++) {
          this._h[i] = this._h[i] & mask | g2[i];
        }
        this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 65535;
        for (i = 1; i < 8; i++) {
          f = (this._h[i] + this._pad[i] | 0) + (f >>> 16) | 0;
          this._h[i] = f & 65535;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
      };
      Poly13052.prototype.update = function(m2) {
        var mpos = 0;
        var bytes = m2.length;
        var want;
        if (this._leftover) {
          want = 16 - this._leftover;
          if (want > bytes) {
            want = bytes;
          }
          for (var i = 0; i < want; i++) {
            this._buffer[this._leftover + i] = m2[mpos + i];
          }
          bytes -= want;
          mpos += want;
          this._leftover += want;
          if (this._leftover < 16) {
            return this;
          }
          this._blocks(this._buffer, 0, 16);
          this._leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this._blocks(m2, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (var i = 0; i < bytes; i++) {
            this._buffer[this._leftover + i] = m2[mpos + i];
          }
          this._leftover += bytes;
        }
        return this;
      };
      Poly13052.prototype.digest = function() {
        if (this._finished) {
          throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
      };
      Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._r);
        wipe_12.wipe(this._h);
        wipe_12.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true;
        return this;
      };
      return Poly13052;
    }()
  );
  exports.Poly1305 = Poly1305;
  function oneTimeAuth(key, data) {
    var h3 = new Poly1305(key);
    h3.update(data);
    var digest = h3.digest();
    h3.clean();
    return digest;
  }
  exports.oneTimeAuth = oneTimeAuth;
  function equal2(a3, b2) {
    if (a3.length !== exports.DIGEST_LENGTH || b2.length !== exports.DIGEST_LENGTH) {
      return false;
    }
    return constant_time_12.equal(a3, b2);
  }
  exports.equal = equal2;
})(poly1305);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var chacha_1 = chacha;
  var poly1305_1 = poly1305;
  var wipe_12 = wipe$1;
  var binary_12 = binary;
  var constant_time_12 = constantTime;
  exports.KEY_LENGTH = 32;
  exports.NONCE_LENGTH = 12;
  exports.TAG_LENGTH = 16;
  var ZEROS = new Uint8Array(16);
  var ChaCha20Poly1305 = (
    /** @class */
    function() {
      function ChaCha20Poly13052(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        this._key = new Uint8Array(key);
      }
      ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        if (sealed.length < this.tagLength) {
          return null;
        }
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        if (!constant_time_12.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
          return null;
        }
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
          if (dst.length !== resultLength) {
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          }
          result = dst;
        } else {
          result = new Uint8Array(resultLength);
        }
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        wipe_12.wipe(counter);
        return result;
      };
      ChaCha20Poly13052.prototype.clean = function() {
        wipe_12.wipe(this._key);
        return this;
      };
      ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        var h3 = new poly1305_1.Poly1305(authKey);
        if (associatedData) {
          h3.update(associatedData);
          if (associatedData.length % 16 > 0) {
            h3.update(ZEROS.subarray(associatedData.length % 16));
          }
        }
        h3.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
          h3.update(ZEROS.subarray(ciphertext.length % 16));
        }
        var length = new Uint8Array(8);
        if (associatedData) {
          binary_12.writeUint64LE(associatedData.length, length);
        }
        h3.update(length);
        binary_12.writeUint64LE(ciphertext.length, length);
        h3.update(length);
        var tag = h3.digest();
        for (var i = 0; i < tag.length; i++) {
          tagOut[i] = tag[i];
        }
        h3.clean();
        wipe_12.wipe(tag);
        wipe_12.wipe(length);
      };
      return ChaCha20Poly13052;
    }()
  );
  exports.ChaCha20Poly1305 = ChaCha20Poly1305;
})(chacha20poly1305);
var hkdf = {};
var hmac$1 = {};
var hash = {};
Object.defineProperty(hash, "__esModule", { value: true });
function isSerializableHash(h3) {
  return typeof h3.saveState !== "undefined" && typeof h3.restoreState !== "undefined" && typeof h3.cleanSavedState !== "undefined";
}
hash.isSerializableHash = isSerializableHash;
Object.defineProperty(hmac$1, "__esModule", { value: true });
var hash_1 = hash;
var constant_time_1 = constantTime;
var wipe_1$1 = wipe$1;
var HMAC = (
  /** @class */
  function() {
    function HMAC2(hash2, key) {
      this._finished = false;
      this._inner = new hash2();
      this._outer = new hash2();
      this.blockSize = this._outer.blockSize;
      this.digestLength = this._outer.digestLength;
      var pad = new Uint8Array(this.blockSize);
      if (key.length > this.blockSize) {
        this._inner.update(key).finish(pad).clean();
      } else {
        pad.set(key);
      }
      for (var i = 0; i < pad.length; i++) {
        pad[i] ^= 54;
      }
      this._inner.update(pad);
      for (var i = 0; i < pad.length; i++) {
        pad[i] ^= 54 ^ 92;
      }
      this._outer.update(pad);
      if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
        this._innerKeyedState = this._inner.saveState();
        this._outerKeyedState = this._outer.saveState();
      }
      wipe_1$1.wipe(pad);
    }
    HMAC2.prototype.reset = function() {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      }
      this._inner.restoreState(this._innerKeyedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.clean = function() {
      if (hash_1.isSerializableHash(this._inner)) {
        this._inner.cleanSavedState(this._innerKeyedState);
      }
      if (hash_1.isSerializableHash(this._outer)) {
        this._outer.cleanSavedState(this._outerKeyedState);
      }
      this._inner.clean();
      this._outer.clean();
    };
    HMAC2.prototype.update = function(data) {
      this._inner.update(data);
      return this;
    };
    HMAC2.prototype.finish = function(out) {
      if (this._finished) {
        this._outer.finish(out);
        return this;
      }
      this._inner.finish(out);
      this._outer.update(out.subarray(0, this.digestLength)).finish(out);
      this._finished = true;
      return this;
    };
    HMAC2.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    HMAC2.prototype.saveState = function() {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      }
      return this._inner.saveState();
    };
    HMAC2.prototype.restoreState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      }
      this._inner.restoreState(savedState);
      this._outer.restoreState(this._outerKeyedState);
      this._finished = false;
      return this;
    };
    HMAC2.prototype.cleanSavedState = function(savedState) {
      if (!hash_1.isSerializableHash(this._inner)) {
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      }
      this._inner.cleanSavedState(savedState);
    };
    return HMAC2;
  }()
);
hmac$1.HMAC = HMAC;
function hmac(hash2, key, data) {
  var h3 = new HMAC(hash2, key);
  h3.update(data);
  var digest = h3.digest();
  h3.clean();
  return digest;
}
hmac$1.hmac = hmac;
hmac$1.equal = constant_time_1.equal;
Object.defineProperty(hkdf, "__esModule", { value: true });
var hmac_1 = hmac$1;
var wipe_1 = wipe$1;
var HKDF = (
  /** @class */
  function() {
    function HKDF2(hash2, key, salt, info) {
      if (salt === void 0) {
        salt = new Uint8Array(0);
      }
      this._counter = new Uint8Array(1);
      this._hash = hash2;
      this._info = info;
      var okm = hmac_1.hmac(this._hash, salt, key);
      this._hmac = new hmac_1.HMAC(hash2, okm);
      this._buffer = new Uint8Array(this._hmac.digestLength);
      this._bufpos = this._buffer.length;
    }
    HKDF2.prototype._fillBuffer = function() {
      this._counter[0]++;
      var ctr = this._counter[0];
      if (ctr === 0) {
        throw new Error("hkdf: cannot expand more");
      }
      this._hmac.reset();
      if (ctr > 1) {
        this._hmac.update(this._buffer);
      }
      if (this._info) {
        this._hmac.update(this._info);
      }
      this._hmac.update(this._counter);
      this._hmac.finish(this._buffer);
      this._bufpos = 0;
    };
    HKDF2.prototype.expand = function(length) {
      var out = new Uint8Array(length);
      for (var i = 0; i < out.length; i++) {
        if (this._bufpos === this._buffer.length) {
          this._fillBuffer();
        }
        out[i] = this._buffer[this._bufpos++];
      }
      return out;
    };
    HKDF2.prototype.clean = function() {
      this._hmac.clean();
      wipe_1.wipe(this._buffer);
      wipe_1.wipe(this._counter);
      this._bufpos = 0;
    };
    return HKDF2;
  }()
);
var HKDF_1 = hkdf.HKDF = HKDF;
var sha256 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 32;
  exports.BLOCK_SIZE = 64;
  var SHA256 = (
    /** @class */
    function() {
      function SHA2562() {
        this.digestLength = exports.DIGEST_LENGTH;
        this.blockSize = exports.BLOCK_SIZE;
        this._state = new Int32Array(8);
        this._temp = new Int32Array(64);
        this._buffer = new Uint8Array(128);
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        this.reset();
      }
      SHA2562.prototype._initState = function() {
        this._state[0] = 1779033703;
        this._state[1] = 3144134277;
        this._state[2] = 1013904242;
        this._state[3] = 2773480762;
        this._state[4] = 1359893119;
        this._state[5] = 2600822924;
        this._state[6] = 528734635;
        this._state[7] = 1541459225;
      };
      SHA2562.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.clean = function() {
        wipe_12.wipe(this._buffer);
        wipe_12.wipe(this._temp);
        this.reset();
      };
      SHA2562.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }
        if (this._finished) {
          throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
          while (this._bufferLength < this.blockSize && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }
        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        return this;
      };
      SHA2562.prototype.finish = function(out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 536870912 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 64 < 56 ? 64 : 128;
          this._buffer[left] = 128;
          for (var i = left + 1; i < padLength - 8; i++) {
            this._buffer[i] = 0;
          }
          binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
          this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 4; i++) {
          binary_12.writeUint32BE(this._state[i], out, i * 4);
        }
        return this;
      };
      SHA2562.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      SHA2562.prototype.saveState = function() {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      SHA2562.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      SHA2562.prototype.cleanSavedState = function(savedState) {
        wipe_12.wipe(savedState.state);
        if (savedState.buffer) {
          wipe_12.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };
      return SHA2562;
    }()
  );
  exports.SHA256 = SHA256;
  var K2 = new Int32Array([
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
  ]);
  function hashBlocks(w2, v2, p3, pos, len) {
    while (len >= 64) {
      var a3 = v2[0];
      var b2 = v2[1];
      var c2 = v2[2];
      var d2 = v2[3];
      var e = v2[4];
      var f = v2[5];
      var g2 = v2[6];
      var h3 = v2[7];
      for (var i = 0; i < 16; i++) {
        var j2 = pos + i * 4;
        w2[i] = binary_12.readUint32BE(p3, j2);
      }
      for (var i = 16; i < 64; i++) {
        var u3 = w2[i - 2];
        var t1 = (u3 >>> 17 | u3 << 32 - 17) ^ (u3 >>> 19 | u3 << 32 - 19) ^ u3 >>> 10;
        u3 = w2[i - 15];
        var t2 = (u3 >>> 7 | u3 << 32 - 7) ^ (u3 >>> 18 | u3 << 32 - 18) ^ u3 >>> 3;
        w2[i] = (t1 + w2[i - 7] | 0) + (t2 + w2[i - 16] | 0);
      }
      for (var i = 0; i < 64; i++) {
        var t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g2) | 0) + (h3 + (K2[i] + w2[i] | 0) | 0) | 0;
        var t2 = ((a3 >>> 2 | a3 << 32 - 2) ^ (a3 >>> 13 | a3 << 32 - 13) ^ (a3 >>> 22 | a3 << 32 - 22)) + (a3 & b2 ^ a3 & c2 ^ b2 & c2) | 0;
        h3 = g2;
        g2 = f;
        f = e;
        e = d2 + t1 | 0;
        d2 = c2;
        c2 = b2;
        b2 = a3;
        a3 = t1 + t2 | 0;
      }
      v2[0] += a3;
      v2[1] += b2;
      v2[2] += c2;
      v2[3] += d2;
      v2[4] += e;
      v2[5] += f;
      v2[6] += g2;
      v2[7] += h3;
      pos += 64;
      len -= 64;
    }
    return pos;
  }
  function hash2(data) {
    var h3 = new SHA256();
    h3.update(data);
    var digest = h3.digest();
    h3.clean();
    return digest;
  }
  exports.hash = hash2;
})(sha256);
var x25519 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
  const random_1 = random;
  const wipe_12 = wipe$1;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 32;
  exports.SHARED_KEY_LENGTH = 32;
  function gf(init) {
    const r2 = new Float64Array(16);
    if (init) {
      for (let i = 0; i < init.length; i++) {
        r2[i] = init[i];
      }
    }
    return r2;
  }
  const _9 = new Uint8Array(32);
  _9[0] = 9;
  const _121665 = gf([56129, 1]);
  function car25519(o2) {
    let c2 = 1;
    for (let i = 0; i < 16; i++) {
      let v2 = o2[i] + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      o2[i] = v2 - c2 * 65536;
    }
    o2[0] += c2 - 1 + 37 * (c2 - 1);
  }
  function sel25519(p3, q2, b2) {
    const c2 = ~(b2 - 1);
    for (let i = 0; i < 16; i++) {
      const t = c2 & (p3[i] ^ q2[i]);
      p3[i] ^= t;
      q2[i] ^= t;
    }
  }
  function pack25519(o2, n2) {
    const m2 = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
      t[i] = n2[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j2 = 0; j2 < 2; j2++) {
      m2[0] = t[0] - 65517;
      for (let i = 1; i < 15; i++) {
        m2[i] = t[i] - 65535 - (m2[i - 1] >> 16 & 1);
        m2[i - 1] &= 65535;
      }
      m2[15] = t[15] - 32767 - (m2[14] >> 16 & 1);
      const b2 = m2[15] >> 16 & 1;
      m2[14] &= 65535;
      sel25519(t, m2, 1 - b2);
    }
    for (let i = 0; i < 16; i++) {
      o2[2 * i] = t[i] & 255;
      o2[2 * i + 1] = t[i] >> 8;
    }
  }
  function unpack25519(o2, n2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = n2[2 * i] + (n2[2 * i + 1] << 8);
    }
    o2[15] &= 32767;
  }
  function add(o2, a3, b2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = a3[i] + b2[i];
    }
  }
  function sub(o2, a3, b2) {
    for (let i = 0; i < 16; i++) {
      o2[i] = a3[i] - b2[i];
    }
  }
  function mul(o2, a3, b2) {
    let v2, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b2[0], b1 = b2[1], b22 = b2[2], b3 = b2[3], b4 = b2[4], b5 = b2[5], b6 = b2[6], b7 = b2[7], b8 = b2[8], b9 = b2[9], b10 = b2[10], b11 = b2[11], b12 = b2[12], b13 = b2[13], b14 = b2[14], b15 = b2[15];
    v2 = a3[0];
    t0 += v2 * b0;
    t1 += v2 * b1;
    t2 += v2 * b22;
    t3 += v2 * b3;
    t4 += v2 * b4;
    t5 += v2 * b5;
    t6 += v2 * b6;
    t7 += v2 * b7;
    t8 += v2 * b8;
    t9 += v2 * b9;
    t10 += v2 * b10;
    t11 += v2 * b11;
    t12 += v2 * b12;
    t13 += v2 * b13;
    t14 += v2 * b14;
    t15 += v2 * b15;
    v2 = a3[1];
    t1 += v2 * b0;
    t2 += v2 * b1;
    t3 += v2 * b22;
    t4 += v2 * b3;
    t5 += v2 * b4;
    t6 += v2 * b5;
    t7 += v2 * b6;
    t8 += v2 * b7;
    t9 += v2 * b8;
    t10 += v2 * b9;
    t11 += v2 * b10;
    t12 += v2 * b11;
    t13 += v2 * b12;
    t14 += v2 * b13;
    t15 += v2 * b14;
    t16 += v2 * b15;
    v2 = a3[2];
    t2 += v2 * b0;
    t3 += v2 * b1;
    t4 += v2 * b22;
    t5 += v2 * b3;
    t6 += v2 * b4;
    t7 += v2 * b5;
    t8 += v2 * b6;
    t9 += v2 * b7;
    t10 += v2 * b8;
    t11 += v2 * b9;
    t12 += v2 * b10;
    t13 += v2 * b11;
    t14 += v2 * b12;
    t15 += v2 * b13;
    t16 += v2 * b14;
    t17 += v2 * b15;
    v2 = a3[3];
    t3 += v2 * b0;
    t4 += v2 * b1;
    t5 += v2 * b22;
    t6 += v2 * b3;
    t7 += v2 * b4;
    t8 += v2 * b5;
    t9 += v2 * b6;
    t10 += v2 * b7;
    t11 += v2 * b8;
    t12 += v2 * b9;
    t13 += v2 * b10;
    t14 += v2 * b11;
    t15 += v2 * b12;
    t16 += v2 * b13;
    t17 += v2 * b14;
    t18 += v2 * b15;
    v2 = a3[4];
    t4 += v2 * b0;
    t5 += v2 * b1;
    t6 += v2 * b22;
    t7 += v2 * b3;
    t8 += v2 * b4;
    t9 += v2 * b5;
    t10 += v2 * b6;
    t11 += v2 * b7;
    t12 += v2 * b8;
    t13 += v2 * b9;
    t14 += v2 * b10;
    t15 += v2 * b11;
    t16 += v2 * b12;
    t17 += v2 * b13;
    t18 += v2 * b14;
    t19 += v2 * b15;
    v2 = a3[5];
    t5 += v2 * b0;
    t6 += v2 * b1;
    t7 += v2 * b22;
    t8 += v2 * b3;
    t9 += v2 * b4;
    t10 += v2 * b5;
    t11 += v2 * b6;
    t12 += v2 * b7;
    t13 += v2 * b8;
    t14 += v2 * b9;
    t15 += v2 * b10;
    t16 += v2 * b11;
    t17 += v2 * b12;
    t18 += v2 * b13;
    t19 += v2 * b14;
    t20 += v2 * b15;
    v2 = a3[6];
    t6 += v2 * b0;
    t7 += v2 * b1;
    t8 += v2 * b22;
    t9 += v2 * b3;
    t10 += v2 * b4;
    t11 += v2 * b5;
    t12 += v2 * b6;
    t13 += v2 * b7;
    t14 += v2 * b8;
    t15 += v2 * b9;
    t16 += v2 * b10;
    t17 += v2 * b11;
    t18 += v2 * b12;
    t19 += v2 * b13;
    t20 += v2 * b14;
    t21 += v2 * b15;
    v2 = a3[7];
    t7 += v2 * b0;
    t8 += v2 * b1;
    t9 += v2 * b22;
    t10 += v2 * b3;
    t11 += v2 * b4;
    t12 += v2 * b5;
    t13 += v2 * b6;
    t14 += v2 * b7;
    t15 += v2 * b8;
    t16 += v2 * b9;
    t17 += v2 * b10;
    t18 += v2 * b11;
    t19 += v2 * b12;
    t20 += v2 * b13;
    t21 += v2 * b14;
    t22 += v2 * b15;
    v2 = a3[8];
    t8 += v2 * b0;
    t9 += v2 * b1;
    t10 += v2 * b22;
    t11 += v2 * b3;
    t12 += v2 * b4;
    t13 += v2 * b5;
    t14 += v2 * b6;
    t15 += v2 * b7;
    t16 += v2 * b8;
    t17 += v2 * b9;
    t18 += v2 * b10;
    t19 += v2 * b11;
    t20 += v2 * b12;
    t21 += v2 * b13;
    t22 += v2 * b14;
    t23 += v2 * b15;
    v2 = a3[9];
    t9 += v2 * b0;
    t10 += v2 * b1;
    t11 += v2 * b22;
    t12 += v2 * b3;
    t13 += v2 * b4;
    t14 += v2 * b5;
    t15 += v2 * b6;
    t16 += v2 * b7;
    t17 += v2 * b8;
    t18 += v2 * b9;
    t19 += v2 * b10;
    t20 += v2 * b11;
    t21 += v2 * b12;
    t22 += v2 * b13;
    t23 += v2 * b14;
    t24 += v2 * b15;
    v2 = a3[10];
    t10 += v2 * b0;
    t11 += v2 * b1;
    t12 += v2 * b22;
    t13 += v2 * b3;
    t14 += v2 * b4;
    t15 += v2 * b5;
    t16 += v2 * b6;
    t17 += v2 * b7;
    t18 += v2 * b8;
    t19 += v2 * b9;
    t20 += v2 * b10;
    t21 += v2 * b11;
    t22 += v2 * b12;
    t23 += v2 * b13;
    t24 += v2 * b14;
    t25 += v2 * b15;
    v2 = a3[11];
    t11 += v2 * b0;
    t12 += v2 * b1;
    t13 += v2 * b22;
    t14 += v2 * b3;
    t15 += v2 * b4;
    t16 += v2 * b5;
    t17 += v2 * b6;
    t18 += v2 * b7;
    t19 += v2 * b8;
    t20 += v2 * b9;
    t21 += v2 * b10;
    t22 += v2 * b11;
    t23 += v2 * b12;
    t24 += v2 * b13;
    t25 += v2 * b14;
    t26 += v2 * b15;
    v2 = a3[12];
    t12 += v2 * b0;
    t13 += v2 * b1;
    t14 += v2 * b22;
    t15 += v2 * b3;
    t16 += v2 * b4;
    t17 += v2 * b5;
    t18 += v2 * b6;
    t19 += v2 * b7;
    t20 += v2 * b8;
    t21 += v2 * b9;
    t22 += v2 * b10;
    t23 += v2 * b11;
    t24 += v2 * b12;
    t25 += v2 * b13;
    t26 += v2 * b14;
    t27 += v2 * b15;
    v2 = a3[13];
    t13 += v2 * b0;
    t14 += v2 * b1;
    t15 += v2 * b22;
    t16 += v2 * b3;
    t17 += v2 * b4;
    t18 += v2 * b5;
    t19 += v2 * b6;
    t20 += v2 * b7;
    t21 += v2 * b8;
    t22 += v2 * b9;
    t23 += v2 * b10;
    t24 += v2 * b11;
    t25 += v2 * b12;
    t26 += v2 * b13;
    t27 += v2 * b14;
    t28 += v2 * b15;
    v2 = a3[14];
    t14 += v2 * b0;
    t15 += v2 * b1;
    t16 += v2 * b22;
    t17 += v2 * b3;
    t18 += v2 * b4;
    t19 += v2 * b5;
    t20 += v2 * b6;
    t21 += v2 * b7;
    t22 += v2 * b8;
    t23 += v2 * b9;
    t24 += v2 * b10;
    t25 += v2 * b11;
    t26 += v2 * b12;
    t27 += v2 * b13;
    t28 += v2 * b14;
    t29 += v2 * b15;
    v2 = a3[15];
    t15 += v2 * b0;
    t16 += v2 * b1;
    t17 += v2 * b22;
    t18 += v2 * b3;
    t19 += v2 * b4;
    t20 += v2 * b5;
    t21 += v2 * b6;
    t22 += v2 * b7;
    t23 += v2 * b8;
    t24 += v2 * b9;
    t25 += v2 * b10;
    t26 += v2 * b11;
    t27 += v2 * b12;
    t28 += v2 * b13;
    t29 += v2 * b14;
    t30 += v2 * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c2 = 1;
    v2 = t0 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t0 = v2 - c2 * 65536;
    v2 = t1 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t1 = v2 - c2 * 65536;
    v2 = t2 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t2 = v2 - c2 * 65536;
    v2 = t3 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t3 = v2 - c2 * 65536;
    v2 = t4 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t4 = v2 - c2 * 65536;
    v2 = t5 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t5 = v2 - c2 * 65536;
    v2 = t6 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t6 = v2 - c2 * 65536;
    v2 = t7 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t7 = v2 - c2 * 65536;
    v2 = t8 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t8 = v2 - c2 * 65536;
    v2 = t9 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t9 = v2 - c2 * 65536;
    v2 = t10 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t10 = v2 - c2 * 65536;
    v2 = t11 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t11 = v2 - c2 * 65536;
    v2 = t12 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t12 = v2 - c2 * 65536;
    v2 = t13 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t13 = v2 - c2 * 65536;
    v2 = t14 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t14 = v2 - c2 * 65536;
    v2 = t15 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t15 = v2 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    c2 = 1;
    v2 = t0 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t0 = v2 - c2 * 65536;
    v2 = t1 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t1 = v2 - c2 * 65536;
    v2 = t2 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t2 = v2 - c2 * 65536;
    v2 = t3 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t3 = v2 - c2 * 65536;
    v2 = t4 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t4 = v2 - c2 * 65536;
    v2 = t5 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t5 = v2 - c2 * 65536;
    v2 = t6 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t6 = v2 - c2 * 65536;
    v2 = t7 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t7 = v2 - c2 * 65536;
    v2 = t8 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t8 = v2 - c2 * 65536;
    v2 = t9 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t9 = v2 - c2 * 65536;
    v2 = t10 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t10 = v2 - c2 * 65536;
    v2 = t11 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t11 = v2 - c2 * 65536;
    v2 = t12 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t12 = v2 - c2 * 65536;
    v2 = t13 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t13 = v2 - c2 * 65536;
    v2 = t14 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t14 = v2 - c2 * 65536;
    v2 = t15 + c2 + 65535;
    c2 = Math.floor(v2 / 65536);
    t15 = v2 - c2 * 65536;
    t0 += c2 - 1 + 37 * (c2 - 1);
    o2[0] = t0;
    o2[1] = t1;
    o2[2] = t2;
    o2[3] = t3;
    o2[4] = t4;
    o2[5] = t5;
    o2[6] = t6;
    o2[7] = t7;
    o2[8] = t8;
    o2[9] = t9;
    o2[10] = t10;
    o2[11] = t11;
    o2[12] = t12;
    o2[13] = t13;
    o2[14] = t14;
    o2[15] = t15;
  }
  function square(o2, a3) {
    mul(o2, a3, a3);
  }
  function inv25519(o2, inp) {
    const c2 = gf();
    for (let i = 0; i < 16; i++) {
      c2[i] = inp[i];
    }
    for (let i = 253; i >= 0; i--) {
      square(c2, c2);
      if (i !== 2 && i !== 4) {
        mul(c2, c2, inp);
      }
    }
    for (let i = 0; i < 16; i++) {
      o2[i] = c2[i];
    }
  }
  function scalarMult(n2, p3) {
    const z2 = new Uint8Array(32);
    const x2 = new Float64Array(80);
    const a3 = gf(), b2 = gf(), c2 = gf(), d2 = gf(), e = gf(), f = gf();
    for (let i = 0; i < 31; i++) {
      z2[i] = n2[i];
    }
    z2[31] = n2[31] & 127 | 64;
    z2[0] &= 248;
    unpack25519(x2, p3);
    for (let i = 0; i < 16; i++) {
      b2[i] = x2[i];
    }
    a3[0] = d2[0] = 1;
    for (let i = 254; i >= 0; --i) {
      const r2 = z2[i >>> 3] >>> (i & 7) & 1;
      sel25519(a3, b2, r2);
      sel25519(c2, d2, r2);
      add(e, a3, c2);
      sub(a3, a3, c2);
      add(c2, b2, d2);
      sub(b2, b2, d2);
      square(d2, e);
      square(f, a3);
      mul(a3, c2, a3);
      mul(c2, b2, e);
      add(e, a3, c2);
      sub(a3, a3, c2);
      square(b2, a3);
      sub(c2, d2, f);
      mul(a3, c2, _121665);
      add(a3, a3, d2);
      mul(c2, c2, a3);
      mul(a3, d2, f);
      mul(d2, b2, x2);
      square(b2, e);
      sel25519(a3, b2, r2);
      sel25519(c2, d2, r2);
    }
    for (let i = 0; i < 16; i++) {
      x2[i + 16] = a3[i];
      x2[i + 32] = c2[i];
      x2[i + 48] = b2[i];
      x2[i + 64] = d2[i];
    }
    const x32 = x2.subarray(32);
    const x16 = x2.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q2 = new Uint8Array(32);
    pack25519(q2, x16);
    return q2;
  }
  exports.scalarMult = scalarMult;
  function scalarMultBase(n2) {
    return scalarMult(n2, _9);
  }
  exports.scalarMultBase = scalarMultBase;
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair2(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_12.wipe)(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair2;
  function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
      let zeros = 0;
      for (let i = 0; i < result.length; i++) {
        zeros |= result[i];
      }
      if (zeros === 0) {
        throw new Error("X25519: invalid shared key");
      }
    }
    return result;
  }
  exports.sharedKey = sharedKey;
})(x25519);
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from2.length, ar2; i < l2; i++) {
      if (ar2 || !(i in from2)) {
        if (!ar2)
          ar2 = Array.prototype.slice.call(from2, 0, i);
        ar2[i] = from2[i];
      }
    }
  return to.concat(ar2 || Array.prototype.slice.call(from2));
};
var BrowserInfo = (
  /** @class */
  function() {
    function BrowserInfo2(name, version, os2) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  }()
);
var NodeInfo = (
  /** @class */
  function() {
    function NodeInfo2(version) {
      this.version = version;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  }()
);
var SearchBotDeviceInfo = (
  /** @class */
  function() {
    function SearchBotDeviceInfo2(name, version, os2, bot) {
      this.name = name;
      this.version = version;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  }()
);
var BotInfo = (
  /** @class */
  function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  }()
);
var ReactNativeInfo = (
  /** @class */
  function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  }()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua) {
  return ua !== "" && userAgentRules.reduce(function(matched, _a) {
    var browser2 = _a[0], regex = _a[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser2, uaMatch];
  }, false);
}
function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);
  if (!matchedRule) {
    return null;
  }
  var name = matchedRule[0], match = matchedRule[1];
  if (name === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version = versionParts.join(".");
  var os2 = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name, version, os2);
}
function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii], os2 = _a[0], regex = _a[1];
    var match = regex.exec(ua);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode = typeof process !== "undefined" && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii = 0; ii < count; ii++) {
    output.push("0");
  }
  return output;
}
var cjs$3 = {};
Object.defineProperty(cjs$3, "__esModule", { value: true });
cjs$3.getLocalStorage = cjs$3.getLocalStorageOrThrow = cjs$3.getCrypto = cjs$3.getCryptoOrThrow = getLocation_1 = cjs$3.getLocation = cjs$3.getLocationOrThrow = getNavigator_1 = cjs$3.getNavigator = cjs$3.getNavigatorOrThrow = getDocument_1 = cjs$3.getDocument = cjs$3.getDocumentOrThrow = cjs$3.getFromWindowOrThrow = cjs$3.getFromWindow = void 0;
function getFromWindow$1(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$3.getFromWindow = getFromWindow$1;
function getFromWindowOrThrow$1(name) {
  const res = getFromWindow$1(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$3.getFromWindowOrThrow = getFromWindowOrThrow$1;
function getDocumentOrThrow$1() {
  return getFromWindowOrThrow$1("document");
}
cjs$3.getDocumentOrThrow = getDocumentOrThrow$1;
function getDocument$1() {
  return getFromWindow$1("document");
}
var getDocument_1 = cjs$3.getDocument = getDocument$1;
function getNavigatorOrThrow$1() {
  return getFromWindowOrThrow$1("navigator");
}
cjs$3.getNavigatorOrThrow = getNavigatorOrThrow$1;
function getNavigator$1() {
  return getFromWindow$1("navigator");
}
var getNavigator_1 = cjs$3.getNavigator = getNavigator$1;
function getLocationOrThrow$1() {
  return getFromWindowOrThrow$1("location");
}
cjs$3.getLocationOrThrow = getLocationOrThrow$1;
function getLocation$1() {
  return getFromWindow$1("location");
}
var getLocation_1 = cjs$3.getLocation = getLocation$1;
function getCryptoOrThrow$1() {
  return getFromWindowOrThrow$1("crypto");
}
cjs$3.getCryptoOrThrow = getCryptoOrThrow$1;
function getCrypto$1() {
  return getFromWindow$1("crypto");
}
cjs$3.getCrypto = getCrypto$1;
function getLocalStorageOrThrow$1() {
  return getFromWindowOrThrow$1("localStorage");
}
cjs$3.getLocalStorageOrThrow = getLocalStorageOrThrow$1;
function getLocalStorage$1() {
  return getFromWindow$1("localStorage");
}
cjs$3.getLocalStorage = getLocalStorage$1;
var cjs$2 = {};
Object.defineProperty(cjs$2, "__esModule", { value: true });
var getWindowMetadata_1 = cjs$2.getWindowMetadata = void 0;
const window_getters_1$1 = cjs$3;
function getWindowMetadata$1() {
  let doc;
  let loc;
  try {
    doc = window_getters_1$1.getDocumentOrThrow();
    loc = window_getters_1$1.getLocationOrThrow();
  } catch (e) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
      const tag = metaTags[i];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
getWindowMetadata_1 = cjs$2.getWindowMetadata = getWindowMetadata$1;
var queryString$1 = {};
var filterObj = function(obj, predicate) {
  var ret = {};
  var keys = Object.keys(obj);
  var isArr = Array.isArray(predicate);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];
    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }
  return ret;
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), ":list="].join("")];
          }
          return [...result, [encode2(key, options), ":list=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode2(key, options), keyValueSep, encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a3, b2) => Number(a3) - Number(b2)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode2(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash2] = splitOnFirst$1(url, "#");
    return Object.assign(
      {
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
      },
      options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode2(hash2, options) } : {}
    );
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  };
  exports.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports.pick(input, exclusionFilter, options);
  };
})(queryString$1);
const RELAY_JSONRPC = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
const V$1 = "base10", c = "base16", R$1 = "base64pad", _$1 = "utf8", M$1 = 0, N$2 = 1, sn = 0, de = 1, K$1 = 12, k$2 = 32;
function cn() {
  const e = x25519.generateKeyPair();
  return { privateKey: toString(e.secretKey, c), publicKey: toString(e.publicKey, c) };
}
function an() {
  const e = random.randomBytes(k$2);
  return toString(e, c);
}
function un(e, n2) {
  const t = x25519.sharedKey(fromString(e, c), fromString(n2, c)), r2 = new HKDF_1(sha256.SHA256, t).expand(k$2);
  return toString(r2, c);
}
function dn(e) {
  const n2 = sha256.hash(fromString(e, c));
  return toString(n2, c);
}
function ln(e) {
  const n2 = sha256.hash(fromString(e, _$1));
  return toString(n2, c);
}
function le(e) {
  return fromString(`${e}`, V$1);
}
function S$1(e) {
  return Number(toString(e, V$1));
}
function fn(e) {
  const n2 = le(typeof e.type < "u" ? e.type : M$1);
  if (S$1(n2) === N$2 && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof e.senderPublicKey < "u" ? fromString(e.senderPublicKey, c) : void 0, r2 = typeof e.iv < "u" ? fromString(e.iv, c) : random.randomBytes(K$1), o2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, c)).seal(r2, fromString(e.message, _$1));
  return fe({ type: n2, sealed: o2, iv: r2, senderPublicKey: t });
}
function pn(e) {
  const n2 = new chacha20poly1305.ChaCha20Poly1305(fromString(e.symKey, c)), { sealed: t, iv: r2 } = L$1(e.encoded), o2 = n2.open(r2, t);
  if (o2 === null)
    throw new Error("Failed to decrypt");
  return toString(o2, _$1);
}
function fe(e) {
  if (S$1(e.type) === N$2) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return toString(concat([e.type, e.senderPublicKey, e.iv, e.sealed]), R$1);
  }
  return toString(concat([e.type, e.iv, e.sealed]), R$1);
}
function L$1(e) {
  const n2 = fromString(e, R$1), t = n2.slice(sn, de), r2 = de;
  if (S$1(t) === N$2) {
    const u3 = r2 + k$2, f = u3 + K$1, g2 = n2.slice(r2, u3), O2 = n2.slice(u3, f), p3 = n2.slice(f);
    return { type: t, sealed: p3, iv: O2, senderPublicKey: g2 };
  }
  const o2 = r2 + K$1, s = n2.slice(r2, o2), i = n2.slice(o2);
  return { type: t, sealed: i, iv: s };
}
function mn(e, n2) {
  const t = L$1(e);
  return pe({ type: S$1(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? toString(t.senderPublicKey, c) : void 0, receiverPublicKey: n2 == null ? void 0 : n2.receiverPublicKey });
}
function pe(e) {
  const n2 = (e == null ? void 0 : e.type) || M$1;
  if (n2 === N$2) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: n2, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function yn(e) {
  return e.type === N$2 && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var En = Object.defineProperty, me = Object.getOwnPropertySymbols, gn = Object.prototype.hasOwnProperty, hn = Object.prototype.propertyIsEnumerable, ye = (e, n2, t) => n2 in e ? En(e, n2, { enumerable: true, configurable: true, writable: true, value: t }) : e[n2] = t, Ee = (e, n2) => {
  for (var t in n2 || (n2 = {}))
    gn.call(n2, t) && ye(e, t, n2[t]);
  if (me)
    for (var t of me(n2))
      hn.call(n2, t) && ye(e, t, n2[t]);
  return e;
};
const ge = "ReactNative", v = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Ne$1 = "js";
function F$1() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ve() {
  return !getDocument_1() && !!getNavigator_1() && navigator.product === ge;
}
function be() {
  return !F$1() && !!getNavigator_1();
}
function H$1() {
  return ve() ? v.reactNative : F$1() ? v.node : be() ? v.browser : v.unknown;
}
function Oe$1(e, n2) {
  let t = queryString$1.parse(e);
  return t = Ee(Ee({}, t), n2), e = queryString$1.stringify(t), e;
}
function bn() {
  return getWindowMetadata_1() || { name: "", description: "", url: "", icons: [""] };
}
function Se$1() {
  const e = detect();
  if (e === null)
    return "unknown";
  const n2 = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [n2, e.name, e.version].join("-") : [n2, e.version].join("-");
}
function Ie$1() {
  var e;
  const n2 = H$1();
  return n2 === v.browser ? [n2, ((e = getLocation_1()) == null ? void 0 : e.host) || "unknown"].join(":") : n2;
}
function Te$1(e, n2, t) {
  const r2 = Se$1(), o2 = Ie$1();
  return [[e, n2].join("-"), [Ne$1, t].join("-"), r2, o2].join("/");
}
function Sn({ protocol: e, version: n2, relayUrl: t, sdkVersion: r2, auth: o2, projectId: s }) {
  const i = t.split("?"), u3 = Te$1(e, n2, r2), f = { auth: o2, ua: u3, projectId: s }, g2 = Oe$1(i[1] || "", f);
  return i[0] + "?" + g2;
}
function m$1(e, n2) {
  return e.filter((t) => n2.includes(t)).length === e.length;
}
function Un(e) {
  return Object.fromEntries(e.entries());
}
function Rn(e) {
  return new Map(Object.entries(e));
}
function Cn(e, n2) {
  return cjs$5.fromMiliseconds((n2 || Date.now()) + cjs$5.toMiliseconds(e));
}
function Dn(e) {
  return cjs$5.fromMiliseconds(Date.now()) >= cjs$5.toMiliseconds(e);
}
function $n(e) {
  const n2 = cjs$5.toMiliseconds(e || cjs$5.FIVE_MINUTES);
  let t, r2, o2;
  return { resolve: (s) => {
    o2 && t && (clearTimeout(o2), t(s));
  }, reject: (s) => {
    o2 && r2 && (clearTimeout(o2), r2(s));
  }, done: () => new Promise((s, i) => {
    o2 = setTimeout(i, n2), t = s, r2 = i;
  }) };
}
function jn(e, n2) {
  return new Promise(async (t, r2) => {
    const o2 = setTimeout(() => r2(), n2), s = await e;
    clearTimeout(o2), t(s);
  });
}
function q$1(e, n2) {
  if (typeof n2 == "string" && n2.startsWith(`${e}:`))
    return n2;
  if (e.toLowerCase() === "topic") {
    if (typeof n2 != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${n2}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof n2 != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${n2}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function Vn(e) {
  return q$1("topic", e);
}
function Mn(e) {
  return q$1("id", e);
}
function Kn(e) {
  const [n2, t] = e.split(":"), r2 = { id: void 0, topic: void 0 };
  if (n2 === "topic" && typeof t == "string")
    r2.topic = t;
  else if (n2 === "id" && Number.isInteger(Number(t)))
    r2.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${n2}:${t}`);
  return r2;
}
function kn(e, n2) {
  return `${e}${n2 ? `:${n2}` : ""}`;
}
const _e$1 = "irn";
function Ln(e) {
  return (e == null ? void 0 : e.relay) || { protocol: _e$1 };
}
function xn(e) {
  const n2 = RELAY_JSONRPC[e];
  if (typeof n2 > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return n2;
}
var Fn = Object.defineProperty, Ae$1 = Object.getOwnPropertySymbols, Hn = Object.prototype.hasOwnProperty, qn = Object.prototype.propertyIsEnumerable, we = (e, n2, t) => n2 in e ? Fn(e, n2, { enumerable: true, configurable: true, writable: true, value: t }) : e[n2] = t, Bn = (e, n2) => {
  for (var t in n2 || (n2 = {}))
    Hn.call(n2, t) && we(e, t, n2[t]);
  if (Ae$1)
    for (var t of Ae$1(n2))
      qn.call(n2, t) && we(e, t, n2[t]);
  return e;
};
function Ce$1(e, n2 = "-") {
  const t = {}, r2 = "relay" + n2;
  return Object.keys(e).forEach((o2) => {
    if (o2.startsWith(r2)) {
      const s = o2.replace(r2, ""), i = e[o2];
      t[s] = i;
    }
  }), t;
}
function Gn(e) {
  const n2 = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r2 = e.substring(0, n2), o2 = e.substring(n2 + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", i = queryString$1.parse(s);
  return { protocol: r2, topic: o2[0], version: parseInt(o2[1], 10), symKey: i.symKey, relay: Ce$1(i) };
}
function De(e, n2 = "-") {
  const t = "relay", r2 = {};
  return Object.keys(e).forEach((o2) => {
    const s = t + n2 + o2;
    e[o2] && (r2[s] = e[o2]);
  }), r2;
}
function zn(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + queryString$1.stringify(Bn({ symKey: e.symKey }, De(e.relay)));
}
function b$2(e) {
  const n2 = [];
  return e.forEach((t) => {
    const [r2, o2] = t.split(":");
    n2.push(`${r2}:${o2}`);
  }), n2;
}
function $e$1(e) {
  const n2 = [];
  return Object.values(e).forEach((t) => {
    n2.push(...b$2(t.accounts));
  }), n2;
}
function je$1(e, n2) {
  const t = [];
  return Object.values(e).forEach((r2) => {
    b$2(r2.accounts).includes(n2) && t.push(...r2.methods);
  }), t;
}
function Ve$1(e, n2) {
  const t = [];
  return Object.values(e).forEach((r2) => {
    b$2(r2.accounts).includes(n2) && t.push(...r2.events);
  }), t;
}
function Yn(e, n2) {
  const t = He$2(e, n2);
  if (t)
    throw new Error(t.message);
  const r2 = {};
  for (const [o2, s] of Object.entries(e))
    r2[o2] = { methods: s.methods, events: s.events, chains: s.accounts.map((i) => `${i.split(":")[0]}:${i.split(":")[1]}`) };
  return r2;
}
const Wn$1 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Jn = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function y$2(e, n2) {
  const { message: t, code: r2 } = Jn[e];
  return { message: n2 ? `${t} ${n2}` : t, code: r2 };
}
function h$2(e, n2) {
  const { message: t, code: r2 } = Wn$1[e];
  return { message: n2 ? `${t} ${n2}` : t, code: r2 };
}
function I$2(e, n2) {
  return Array.isArray(e) ? typeof n2 < "u" && e.length ? e.every(n2) : true : false;
}
function B$1(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function E$1(e) {
  return typeof e > "u";
}
function a2(e, n2) {
  return n2 && E$1(e) ? true : typeof e == "string" && Boolean(e.trim().length);
}
function w(e, n2) {
  return n2 && E$1(e) ? true : typeof e == "number" && !isNaN(e);
}
function Qn(e, n2) {
  const { requiredNamespaces: t } = n2, r2 = Object.keys(e.namespaces), o2 = Object.keys(t);
  let s = true;
  return m$1(o2, r2) ? (r2.forEach((i) => {
    const { accounts: u3, methods: f, events: g2 } = e.namespaces[i], O2 = b$2(u3), p3 = t[i];
    (!m$1(p3.chains, O2) || !m$1(p3.methods, f) || !m$1(p3.events, g2)) && (s = false);
  }), s) : false;
}
function C$2(e) {
  return a2(e, false) && e.includes(":") ? e.split(":").length === 2 : false;
}
function Me$1(e) {
  if (a2(e, false) && e.includes(":")) {
    const n2 = e.split(":");
    if (n2.length === 3) {
      const t = n2[0] + ":" + n2[1];
      return !!n2[2] && C$2(t);
    }
  }
  return false;
}
function Zn(e) {
  if (a2(e, false))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return false;
    }
  return false;
}
function Xn(e) {
  var n2;
  return (n2 = e == null ? void 0 : e.proposer) == null ? void 0 : n2.publicKey;
}
function et$1(e) {
  return e == null ? void 0 : e.topic;
}
function nt$1(e, n2) {
  let t = null;
  return a2(e == null ? void 0 : e.publicKey, false) || (t = y$2("MISSING_OR_INVALID", `${n2} controller public key should be a string`)), t;
}
function G(e) {
  let n2 = true;
  return I$2(e) ? e.length && (n2 = e.every((t) => a2(t, false))) : n2 = false, n2;
}
function Ke$1(e, n2, t) {
  let r2 = null;
  return I$2(n2) ? n2.forEach((o2) => {
    r2 || (!C$2(o2) || !o2.includes(e)) && (r2 = h$2("UNSUPPORTED_CHAINS", `${t}, chain ${o2} should be a string and conform to "namespace:chainId" format`));
  }) : r2 = h$2("UNSUPPORTED_CHAINS", `${t}, chains ${n2} should be an array of strings conforming to "namespace:chainId" format`), r2;
}
function ke$2(e, n2) {
  let t = null;
  return Object.entries(e).forEach(([r2, o2]) => {
    if (t)
      return;
    const s = Ke$1(r2, o2 == null ? void 0 : o2.chains, `${n2} requiredNamespace`);
    s && (t = s);
  }), t;
}
function Le$1(e, n2) {
  let t = null;
  return I$2(e) ? e.forEach((r2) => {
    t || Me$1(r2) || (t = h$2("UNSUPPORTED_ACCOUNTS", `${n2}, account ${r2} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = h$2("UNSUPPORTED_ACCOUNTS", `${n2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function xe$1(e, n2) {
  let t = null;
  return Object.values(e).forEach((r2) => {
    if (t)
      return;
    const o2 = Le$1(r2 == null ? void 0 : r2.accounts, `${n2} namespace`);
    o2 && (t = o2);
  }), t;
}
function Fe$2(e, n2) {
  let t = null;
  return G(e == null ? void 0 : e.methods) ? G(e == null ? void 0 : e.events) || (t = h$2("UNSUPPORTED_EVENTS", `${n2}, events should be an array of strings or empty array for no events`)) : t = h$2("UNSUPPORTED_METHODS", `${n2}, methods should be an array of strings or empty array for no methods`), t;
}
function z$1(e, n2) {
  let t = null;
  return Object.values(e).forEach((r2) => {
    if (t)
      return;
    const o2 = Fe$2(r2, `${n2}, namespace`);
    o2 && (t = o2);
  }), t;
}
function tt$1(e, n2) {
  let t = null;
  if (e && B$1(e)) {
    const r2 = z$1(e, n2);
    r2 && (t = r2);
    const o2 = ke$2(e, n2);
    o2 && (t = o2);
  } else
    t = y$2("MISSING_OR_INVALID", `${n2}, requiredNamespaces should be an object with data`);
  return t;
}
function He$2(e, n2) {
  let t = null;
  if (e && B$1(e)) {
    const r2 = z$1(e, n2);
    r2 && (t = r2);
    const o2 = xe$1(e, n2);
    o2 && (t = o2);
  } else
    t = y$2("MISSING_OR_INVALID", `${n2}, namespaces should be an object with data`);
  return t;
}
function qe$1(e) {
  return a2(e.protocol, true);
}
function rt$1(e, n2) {
  let t = false;
  return n2 && !e ? t = true : e && I$2(e) && e.length && e.forEach((r2) => {
    t = qe$1(r2);
  }), t;
}
function ot$1(e) {
  return typeof e == "number";
}
function st$1(e) {
  return typeof e < "u" && typeof e !== null;
}
function it$1(e) {
  return !(!e || typeof e != "object" || !e.code || !w(e.code, false) || !e.message || !a2(e.message, false));
}
function ct$1(e) {
  return !(E$1(e) || !a2(e.method, false));
}
function at$1(e) {
  return !(E$1(e) || E$1(e.result) && E$1(e.error) || !w(e.id, false) || !a2(e.jsonrpc, false));
}
function ut$1(e) {
  return !(E$1(e) || !a2(e.name, false));
}
function dt$1(e, n2) {
  return !(!C$2(n2) || !$e$1(e).includes(n2));
}
function lt$1(e, n2, t) {
  return a2(t, false) ? je$1(e, n2).includes(t) : false;
}
function ft$1(e, n2, t) {
  return a2(t, false) ? Ve$1(e, n2).includes(t) : false;
}
function pt$1(e, n2, t) {
  let r2 = null;
  const o2 = Object.keys(e), s = Object.keys(n2);
  return m$1(o2, s) ? o2.forEach((i) => {
    if (r2)
      return;
    const u3 = e[i].chains, f = b$2(n2[i].accounts);
    m$1(u3, f) ? m$1(e[i].methods, n2[i].methods) ? m$1(e[i].events, n2[i].events) || (r2 = y$2("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy requiredNamespaces events for ${i}`)) : r2 = y$2("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy requiredNamespaces methods for ${i}`) : r2 = y$2("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy requiredNamespaces chains for ${i}`);
  }) : r2 = y$2("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces`), r2;
}
function mt$1(e, n2) {
  return w(e, false) && e <= n2.max && e >= n2.min;
}
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
const resolveWebSocketImplementation = () => {
  if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
    return global.WebSocket;
  }
  if (typeof window !== "undefined" && typeof window.WebSocket !== "undefined") {
    return window.WebSocket;
  }
  return require("ws");
};
const isBrowser = () => typeof window !== "undefined";
const WS = resolveWebSocketImplementation();
class WsConnection {
  constructor(url) {
    this.url = url;
    this.events = new eventsExports.EventEmitter();
    this.registering = false;
    if (!isWsUrl(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    this.url = url;
  }
  get connected() {
    return typeof this.socket !== "undefined";
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    return new Promise((resolve, reject) => {
      if (typeof this.socket === "undefined") {
        reject(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = () => {
        this.onClose();
        resolve();
      };
      this.socket.close();
    });
  }
  async send(payload, context) {
    if (typeof this.socket === "undefined") {
      this.socket = await this.register();
    }
    try {
      this.socket.send(safeJsonStringify$1(payload));
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  register(url = this.url) {
    if (!isWsUrl(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", (error) => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.socket === "undefined") {
            return reject(new Error("WebSocket connection is missing or invalid"));
          }
          resolve(this.socket);
        });
      });
    }
    this.url = url;
    this.registering = true;
    return new Promise((resolve, reject) => {
      const opts = !cjs$8.isReactNative() ? { rejectUnauthorized: !isLocalhostUrl(url) } : void 0;
      const socket = new WS(url, [], opts);
      if (isBrowser()) {
        socket.onerror = (event) => {
          const errorEvent = event;
          reject(this.emitError(errorEvent.error));
        };
      } else {
        socket.on("error", (errorEvent) => {
          reject(this.emitError(errorEvent));
        });
      }
      socket.onopen = () => {
        this.onOpen(socket);
        resolve(socket);
      };
    });
  }
  onOpen(socket) {
    socket.onmessage = (event) => this.onPayload(event);
    socket.onclose = () => this.onClose();
    this.socket = socket;
    this.registering = false;
    this.events.emit("open");
  }
  onClose() {
    this.socket = void 0;
    this.registering = false;
    this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data === "undefined")
      return;
    const payload = typeof e.data === "string" ? safeJsonParse$1(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = formatJsonRpcError(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return parseConnectionError(e, url, "WS");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
  }
  emitError(errorEvent) {
    const error = this.parseError(new Error((errorEvent === null || errorEvent === void 0 ? void 0 : errorEvent.message) || `WebSocket connection failed for URL: ${this.url}`));
    this.events.emit("register_error", error);
    return error;
  }
}
var lodash_isequalExports = {};
var lodash_isequal = {
  get exports() {
    return lodash_isequalExports;
  },
  set exports(v2) {
    lodash_isequalExports = v2;
  }
};
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert2 = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert2 || (convert2 = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert2(object), convert2(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = isEqual;
})(lodash_isequal, lodash_isequalExports);
function wi(r2, e) {
  if (r2.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var s = 0; s < r2.length; s++) {
    var n2 = r2.charAt(s), a3 = n2.charCodeAt(0);
    if (t[a3] !== 255)
      throw new TypeError(n2 + " is ambiguous");
    t[a3] = s;
  }
  var o2 = r2.length, h3 = r2.charAt(0), d2 = Math.log(o2) / Math.log(256), l2 = Math.log(256) / Math.log(o2);
  function g2(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u3.length === 0)
      return "";
    for (var y3 = 0, O2 = 0, E3 = 0, _2 = u3.length; E3 !== _2 && u3[E3] === 0; )
      E3++, y3++;
    for (var R2 = (_2 - E3) * l2 + 1 >>> 0, b2 = new Uint8Array(R2); E3 !== _2; ) {
      for (var S2 = u3[E3], x2 = 0, f = R2 - 1; (S2 !== 0 || x2 < O2) && f !== -1; f--, x2++)
        S2 += 256 * b2[f] >>> 0, b2[f] = S2 % o2 >>> 0, S2 = S2 / o2 >>> 0;
      if (S2 !== 0)
        throw new Error("Non-zero carry");
      O2 = x2, E3++;
    }
    for (var T2 = R2 - O2; T2 !== R2 && b2[T2] === 0; )
      T2++;
    for (var K2 = h3.repeat(y3); T2 < R2; ++T2)
      K2 += r2.charAt(b2[T2]);
    return K2;
  }
  function U2(u3) {
    if (typeof u3 != "string")
      throw new TypeError("Expected String");
    if (u3.length === 0)
      return new Uint8Array();
    var y3 = 0;
    if (u3[y3] !== " ") {
      for (var O2 = 0, E3 = 0; u3[y3] === h3; )
        O2++, y3++;
      for (var _2 = (u3.length - y3) * d2 + 1 >>> 0, R2 = new Uint8Array(_2); u3[y3]; ) {
        var b2 = t[u3.charCodeAt(y3)];
        if (b2 === 255)
          return;
        for (var S2 = 0, x2 = _2 - 1; (b2 !== 0 || S2 < E3) && x2 !== -1; x2--, S2++)
          b2 += o2 * R2[x2] >>> 0, R2[x2] = b2 % 256 >>> 0, b2 = b2 / 256 >>> 0;
        if (b2 !== 0)
          throw new Error("Non-zero carry");
        E3 = S2, y3++;
      }
      if (u3[y3] !== " ") {
        for (var f = _2 - E3; f !== _2 && R2[f] === 0; )
          f++;
        for (var T2 = new Uint8Array(O2 + (_2 - f)), K2 = O2; f !== _2; )
          T2[K2++] = R2[f++];
        return T2;
      }
    }
  }
  function q2(u3) {
    var y3 = U2(u3);
    if (y3)
      return y3;
    throw new Error(`Non-${e} character`);
  }
  return { encode: g2, decodeUnsafe: U2, decode: q2 };
}
var vi = wi, Ii = vi;
const Ie = (r2) => {
  if (r2 instanceof Uint8Array && r2.constructor.name === "Uint8Array")
    return r2;
  if (r2 instanceof ArrayBuffer)
    return new Uint8Array(r2);
  if (ArrayBuffer.isView(r2))
    return new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Ci = (r2) => new TextEncoder().encode(r2), _i = (r2) => new TextDecoder().decode(r2);
class Ri {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Si {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ce(this, e);
  }
}
class Ti {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ce(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ce = (r2, e) => new Ti({ ...r2.decoders || { [r2.prefix]: r2 }, ...e.decoders || { [e.prefix]: e } });
class Pi {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Ri(e, t, i), this.decoder = new Si(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const k$1 = ({ name: r2, prefix: e, encode: t, decode: i }) => new Pi(r2, e, t, i), F = ({ prefix: r2, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = Ii(t, e);
  return k$1({ prefix: r2, name: e, encode: i, decode: (n2) => Ie(s(n2)) });
}, xi = (r2, e, t, i) => {
  const s = {};
  for (let l2 = 0; l2 < e.length; ++l2)
    s[e[l2]] = l2;
  let n2 = r2.length;
  for (; r2[n2 - 1] === "="; )
    --n2;
  const a3 = new Uint8Array(n2 * t / 8 | 0);
  let o2 = 0, h3 = 0, d2 = 0;
  for (let l2 = 0; l2 < n2; ++l2) {
    const g2 = s[r2[l2]];
    if (g2 === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h3 = h3 << t | g2, o2 += t, o2 >= 8 && (o2 -= 8, a3[d2++] = 255 & h3 >> o2);
  }
  if (o2 >= t || 255 & h3 << 8 - o2)
    throw new SyntaxError("Unexpected end of data");
  return a3;
}, Oi = (r2, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let n2 = "", a3 = 0, o2 = 0;
  for (let h3 = 0; h3 < r2.length; ++h3)
    for (o2 = o2 << 8 | r2[h3], a3 += 8; a3 > t; )
      a3 -= t, n2 += e[s & o2 >> a3];
  if (a3 && (n2 += e[s & o2 << t - a3]), i)
    for (; n2.length * t & 7; )
      n2 += "=";
  return n2;
}, p$1 = ({ name: r2, prefix: e, bitsPerChar: t, alphabet: i }) => k$1({ prefix: e, name: r2, encode(s) {
  return Oi(s, i, t);
}, decode(s) {
  return xi(s, i, t, r2);
} }), Ai = k$1({ prefix: "\0", name: "identity", encode: (r2) => _i(r2), decode: (r2) => Ci(r2) });
var zi = Object.freeze({ __proto__: null, identity: Ai });
const Ni = p$1({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Ui = Object.freeze({ __proto__: null, base2: Ni });
const Li = p$1({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Fi = Object.freeze({ __proto__: null, base8: Li });
const Mi = F({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ki = Object.freeze({ __proto__: null, base10: Mi });
const $i = p$1({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ki = p$1({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Bi = Object.freeze({ __proto__: null, base16: $i, base16upper: ki });
const ji = p$1({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Vi = p$1({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), qi = p$1({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Gi = p$1({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Yi = p$1({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Ji = p$1({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Hi = p$1({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Xi = p$1({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Wi = p$1({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Zi = Object.freeze({ __proto__: null, base32: ji, base32upper: Vi, base32pad: qi, base32padupper: Gi, base32hex: Yi, base32hexupper: Ji, base32hexpad: Hi, base32hexpadupper: Xi, base32z: Wi });
const Qi = F({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), es = F({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ts = Object.freeze({ __proto__: null, base36: Qi, base36upper: es });
const is = F({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), ss = F({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var rs = Object.freeze({ __proto__: null, base58btc: is, base58flickr: ss });
const ns = p$1({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), as = p$1({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), os = p$1({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), hs = p$1({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var cs = Object.freeze({ __proto__: null, base64: ns, base64pad: as, base64url: os, base64urlpad: hs });
const _e = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), us = _e.reduce((r2, e, t) => (r2[t] = e, r2), []), ls = _e.reduce((r2, e, t) => (r2[e.codePointAt(0)] = t, r2), []);
function ds(r2) {
  return r2.reduce((e, t) => (e += us[t], e), "");
}
function gs(r2) {
  const e = [];
  for (const t of r2) {
    const i = ls[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const ps = k$1({ prefix: "🚀", name: "base256emoji", encode: ds, decode: gs });
var Ds = Object.freeze({ __proto__: null, base256emoji: ps }), ys = Se, Re = 128, bs = 127, ms = ~bs, Es = Math.pow(2, 31);
function Se(r2, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r2 >= Es; )
    e[t++] = r2 & 255 | Re, r2 /= 128;
  for (; r2 & ms; )
    e[t++] = r2 & 255 | Re, r2 >>>= 7;
  return e[t] = r2 | 0, Se.bytes = t - i + 1, e;
}
var fs = ie$1, ws = 128, Te = 127;
function ie$1(r2, i) {
  var t = 0, i = i || 0, s = 0, n2 = i, a3, o2 = r2.length;
  do {
    if (n2 >= o2)
      throw ie$1.bytes = 0, new RangeError("Could not decode varint");
    a3 = r2[n2++], t += s < 28 ? (a3 & Te) << s : (a3 & Te) * Math.pow(2, s), s += 7;
  } while (a3 >= ws);
  return ie$1.bytes = n2 - i, t;
}
var vs = Math.pow(2, 7), Is = Math.pow(2, 14), Cs = Math.pow(2, 21), _s = Math.pow(2, 28), Rs = Math.pow(2, 35), Ss = Math.pow(2, 42), Ts = Math.pow(2, 49), Ps = Math.pow(2, 56), xs = Math.pow(2, 63), Os = function(r2) {
  return r2 < vs ? 1 : r2 < Is ? 2 : r2 < Cs ? 3 : r2 < _s ? 4 : r2 < Rs ? 5 : r2 < Ss ? 6 : r2 < Ts ? 7 : r2 < Ps ? 8 : r2 < xs ? 9 : 10;
}, As = { encode: ys, decode: fs, encodingLength: Os }, Pe = As;
const xe = (r2, e, t = 0) => (Pe.encode(r2, e, t), e), Oe = (r2) => Pe.encodingLength(r2), se$1 = (r2, e) => {
  const t = e.byteLength, i = Oe(r2), s = i + Oe(t), n2 = new Uint8Array(s + t);
  return xe(r2, n2, 0), xe(t, n2, i), n2.set(e, s), new zs(r2, t, e, n2);
};
class zs {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const Ae = ({ name: r2, code: e, encode: t }) => new Ns(r2, e, t);
class Ns {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? se$1(this.code, t) : t.then((i) => se$1(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const ze = (r2) => async (e) => new Uint8Array(await crypto.subtle.digest(r2, e)), Us = Ae({ name: "sha2-256", code: 18, encode: ze("SHA-256") }), Ls = Ae({ name: "sha2-512", code: 19, encode: ze("SHA-512") });
var Fs = Object.freeze({ __proto__: null, sha256: Us, sha512: Ls });
const Ne = 0, Ms = "identity", Ue = Ie, Ks = (r2) => se$1(Ne, Ue(r2)), $s = { code: Ne, name: Ms, encode: Ue, digest: Ks };
var ks = Object.freeze({ __proto__: null, identity: $s });
new TextEncoder(), new TextDecoder();
const Le = { ...zi, ...Ui, ...Fi, ...Ki, ...Bi, ...Zi, ...ts, ...rs, ...cs, ...Ds };
({ ...Fs, ...ks });
function Bs(r2 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r2) : new Uint8Array(r2);
}
function Fe$1(r2, e, t, i) {
  return { name: r2, prefix: e, encoder: { name: r2, prefix: e, encode: t }, decoder: { decode: i } };
}
const Me = Fe$1("utf8", "u", (r2) => "u" + new TextDecoder("utf8").decode(r2), (r2) => new TextEncoder().encode(r2.substring(1))), re = Fe$1("ascii", "a", (r2) => {
  let e = "a";
  for (let t = 0; t < r2.length; t++)
    e += String.fromCharCode(r2[t]);
  return e;
}, (r2) => {
  r2 = r2.substring(1);
  const e = Bs(r2.length);
  for (let t = 0; t < r2.length; t++)
    e[t] = r2.charCodeAt(t);
  return e;
}), js = { utf8: Me, "utf-8": Me, hex: Le.base16, latin1: re, ascii: re, binary: re, ...Le };
function Vs(r2, e = "utf8") {
  const t = js[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r2, "utf8") : t.decoder.decode(`${t.prefix}${r2}`);
}
const ne = "wc", Ke = 2, B = "core", P$1 = `${ne}@${2}:${B}:`, $e = { name: B, logger: "error" }, ke$1 = { database: ":memory:" }, Be$1 = "crypto", ae = "client_ed25519_seed", je = cjs$5.ONE_DAY, Ve = "keychain", qe = "0.3", Ge = "messages", Ye$1 = "0.3", Je$1 = cjs$5.SIX_HOURS, He$1 = "publisher", Xe$1 = "irn", We = "error", Ze$1 = "wss://relay.walletconnect.com", Qe$1 = "relayer", D$1 = { message: "relayer_message", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, et = "_subscription", M = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, oe = cjs$5.ONE_SECOND, tt = "2.3.3", it = "0.3", I$1 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, st = "subscription", rt = "0.3", nt = cjs$5.FIVE_SECONDS * 1e3, at = "pairing", ot = "0.3", N$1 = { wc_pairingDelete: { req: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$5.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$5.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 0 } } }, C$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, ht = "history", ct = "0.3", ut = "expirer", m = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, lt = "0.3";
class dt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = Ve, this.version = qe, this.initialized = false, this.storagePrefix = P$1, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = true;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: n2 } = y$2("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n2);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = cjs$4.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Un(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rn(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class gt {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = Be$1, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n2 = generateKeyPair(s);
      return encodeIss(n2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = cn();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const n2 = await this.getClientSeed(), a3 = generateKeyPair(n2), o2 = an(), h3 = je;
      return await signJWT(o2, s, h3, a3);
    }, this.generateSharedKey = (s, n2, a3) => {
      this.isInitialized();
      const o2 = this.getPrivateKey(s), h3 = un(o2, n2);
      return this.setSymKey(h3, a3);
    }, this.setSymKey = async (s, n2) => {
      this.isInitialized();
      const a3 = n2 || dn(s);
      return await this.keychain.set(a3, s), a3;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n2, a3) => {
      this.isInitialized();
      const o2 = pe(a3), h3 = safeJsonStringify$1(n2);
      if (yn(o2)) {
        const U2 = o2.senderPublicKey, q2 = o2.receiverPublicKey;
        s = await this.generateSharedKey(U2, q2);
      }
      const d2 = this.getSymKey(s), { type: l2, senderPublicKey: g2 } = o2;
      return fn({ type: l2, symKey: d2, message: h3, senderPublicKey: g2 });
    }, this.decode = async (s, n2, a3) => {
      this.isInitialized();
      const o2 = mn(n2, a3);
      if (yn(o2)) {
        const l2 = o2.receiverPublicKey, g2 = o2.senderPublicKey;
        s = await this.generateSharedKey(l2, g2);
      }
      const h3 = this.getSymKey(s), d2 = pn({ symKey: h3, encoded: n2 });
      return safeJsonParse$1(d2);
    }, this.core = e, this.logger = cjs$4.generateChildLogger(t, this.name), this.keychain = i || new dt(this.core, this.logger);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  getPayloadType(e) {
    const t = L$1(e);
    return S$1(t.type);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ae);
    } catch {
      e = an(), await this.keychain.set(ae, e);
    }
    return Vs(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class pt extends a$1 {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = Ge, this.version = Ye$1, this.initialized = false, this.storagePrefix = P$1, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const n2 = ln(s);
      let a3 = this.messages.get(i);
      return typeof a3 > "u" && (a3 = {}), typeof a3[n2] < "u" || (a3[n2] = s, this.messages.set(i, a3), await this.persist()), n2;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const n2 = this.get(i), a3 = ln(s);
      return typeof n2[a3] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = cjs$4.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Un(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rn(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Hs extends u$1 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new eventsExports.EventEmitter(), this.name = He$1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = 1e4, this.publish = async (i, s, n2) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n2 } });
      try {
        const a3 = (n2 == null ? void 0 : n2.ttl) || Je$1, o2 = Ln(n2), h3 = (n2 == null ? void 0 : n2.prompt) || false, d2 = (n2 == null ? void 0 : n2.tag) || 0, l2 = { topic: i, message: s, opts: { ttl: a3, relay: o2, prompt: h3, tag: d2 } }, g2 = ln(s);
        this.queue.set(g2, l2);
        try {
          await await jn(this.rpcPublish(i, s, a3, o2, h3, d2), this.publishTimeout), this.relayer.events.emit(D$1.publish, l2);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.relayer.events.emit(D$1.connection_stalled);
          return;
        }
        this.onPublish(g2, l2), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n2 } });
      } catch (a3) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a3), a3;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = cjs$4.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, i, s, n2, a3) {
    var o2, h3, d2, l2;
    const g2 = { method: xn(s.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: n2, tag: a3 } };
    return E$1((o2 = g2.params) == null ? void 0 : o2.prompt) && ((h3 = g2.params) == null || delete h3.prompt), E$1((d2 = g2.params) == null ? void 0 : d2.tag) && ((l2 = g2.params) == null || delete l2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: g2 }), this.relayer.provider.request(g2);
  }
  onPublish(e, t) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$6.HEARTBEAT_EVENTS.pulse, () => {
      this.checkQueue();
    });
  }
}
class Xs {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, t))
        return;
      const s = i.filter((n2) => n2 !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Ws = Object.defineProperty, Zs = Object.defineProperties, Qs = Object.getOwnPropertyDescriptors, Dt = Object.getOwnPropertySymbols, er = Object.prototype.hasOwnProperty, tr = Object.prototype.propertyIsEnumerable, yt = (r2, e, t) => e in r2 ? Ws(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t, j$2 = (r2, e) => {
  for (var t in e || (e = {}))
    er.call(e, t) && yt(r2, t, e[t]);
  if (Dt)
    for (var t of Dt(e))
      tr.call(e, t) && yt(r2, t, e[t]);
  return r2;
}, he = (r2, e) => Zs(r2, Qs(e));
class bt extends x {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Xs(), this.events = new eventsExports.EventEmitter(), this.name = st, this.version = rt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pendingSubInterval = 20, this.storagePrefix = P$1, this.subscribeTimeout = 1e4, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable());
    }, this.subscribe = async (i, s) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const n2 = Ln(s), a3 = { topic: i, relay: n2 };
        this.pending.set(i, a3);
        const o2 = await this.rpcSubscribe(i, n2);
        return this.onSubscribe(o2, a3), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } }), o2;
      } catch (n2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n2), n2;
      }
    }, this.unsubscribe = async (i, s) => {
      this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? true : await new Promise((s, n2) => {
      const a3 = new cjs$5.Watch();
      a3.start(this.pendingSubscriptionWatchLabel);
      const o2 = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(o2), a3.stop(this.pendingSubscriptionWatchLabel), s(true)), a3.elapsed(this.pendingSubscriptionWatchLabel) >= nt && (clearInterval(o2), a3.stop(this.pendingSubscriptionWatchLabel), n2(false));
      }, this.pendingSubInterval);
    }), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.restart = async () => {
      await this.restore(), await this.reset();
    }, this.relayer = e, this.logger = cjs$4.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = false;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear(), this.initialized = false;
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = Ln(i);
      await this.rpcUnsubscribe(e, t, s);
      const n2 = h$2("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: xn(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await jn(this.relayer.provider.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D$1.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: xn(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.provider.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, he(j$2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onResubscribe(e, t) {
    this.addSubscription(e, he(j$2({}, t), { id: e })), this.pending.delete(t.topic);
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, j$2({}, t)), this.topicMap.set(t.topic, e), this.events.emit(I$1.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = y$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(I$1.deleted, he(j$2({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(I$1.sync);
  }
  async reset() {
    this.cached.length && await Promise.all(this.cached.map(async (e) => await this.resubscribe(e))), this.events.emit(I$1.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = y$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async resubscribe(e) {
    if (!this.ids.includes(e.id)) {
      const { topic: t, relay: i } = e, s = { topic: t, relay: i };
      this.pending.set(s.topic, s);
      const n2 = await this.rpcSubscribe(s.topic, s.relay);
      this.onResubscribe(n2, s);
    }
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  checkPending() {
    this.relayer.transportExplicitlyClosed || this.pending.forEach(async (e) => {
      const t = await this.rpcSubscribe(e.topic, e.relay);
      this.onSubscribe(t, e);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$6.HEARTBEAT_EVENTS.pulse, () => {
      this.checkPending();
    }), this.relayer.on(D$1.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(D$1.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(I$1.created, async (e) => {
      const t = I$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(I$1.deleted, async (e) => {
      const t = I$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var ir = Object.defineProperty, mt = Object.getOwnPropertySymbols, sr = Object.prototype.hasOwnProperty, rr = Object.prototype.propertyIsEnumerable, Et = (r2, e, t) => e in r2 ? ir(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t, nr = (r2, e) => {
  for (var t in e || (e = {}))
    sr.call(e, t) && Et(r2, t, e[t]);
  if (mt)
    for (var t of mt(e))
      rr.call(e, t) && Et(r2, t, e[t]);
  return r2;
};
class ft extends g {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new eventsExports.EventEmitter(), this.name = Qe$1, this.transportExplicitlyClosed = false, this.initialized = false, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? cjs$4.generateChildLogger(e.logger, this.name) : browser$2(cjs$4.getDefaultLoggerOptions({ level: e.logger || We })), this.messages = new pt(this.logger, e.core), this.subscriber = new bt(this, this.logger), this.publisher = new Hs(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ze$1, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = true;
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t });
  }
  async subscribe(e, t) {
    this.isInitialized();
    let i = "";
    return await Promise.all([new Promise((s) => {
      this.subscriber.once(I$1.created, (n2) => {
        n2.topic === e && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(e, t), s();
    })]), i;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.connected && (await this.provider.disconnect(), this.events.emit(D$1.transport_closed));
  }
  async transportOpen(e) {
    this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = false;
    try {
      await Promise.all([new Promise((t) => {
        this.initialized || t(), this.subscriber.once(I$1.resubscribed, () => {
          t();
        });
      }), await Promise.race([this.provider.connect(), new Promise((t, i) => this.once(D$1.transport_closed, () => {
        i(new Error("closeTransport called before connection was established"));
      }))])]);
    } catch (t) {
      const i = t;
      if (!/socket hang up/i.test(i.message))
        throw new Error(i.message);
      this.logger.error(i), this.events.emit(D$1.transport_closed);
    }
  }
  async restartTransport(e) {
    await this.transportClose(), await new Promise((t) => setTimeout(t, oe)), await this.transportOpen(e);
  }
  async createProvider() {
    const e = await this.core.crypto.signJWT(this.relayUrl);
    return new JsonRpcProvider(new WsConnection(Sn({ sdkVersion: tt, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e })));
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    return await this.subscriber.isSubscribed(t) ? this.messages.has(t, i) : true;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(et))
        return;
      const t = e.params, { topic: i, message: s } = t.data, n2 = { topic: i, message: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(nr({ type: "event", event: t.id }, n2)), this.events.emit(t.id, n2), await this.acknowledgePayload(e), await this.onMessageEvent(n2);
    }
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D$1.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  registerEventListeners() {
    this.provider.on(M.payload, (e) => this.onProviderPayload(e)), this.provider.on(M.connect, () => {
      this.events.emit(D$1.connect);
    }), this.provider.on(M.disconnect, () => {
      this.events.emit(D$1.disconnect), this.attemptToReconnect();
    }), this.provider.on(M.error, (e) => this.events.emit(D$1.error, e)), this.events.on(D$1.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.transportOpen();
    }, cjs$5.toMiliseconds(oe));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var ar = Object.defineProperty, wt = Object.getOwnPropertySymbols, or = Object.prototype.hasOwnProperty, hr = Object.prototype.propertyIsEnumerable, vt = (r2, e, t) => e in r2 ? ar(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t, It = (r2, e) => {
  for (var t in e || (e = {}))
    or.call(e, t) && vt(r2, t, e[t]);
  if (wt)
    for (var t of wt(e))
      hr.call(e, t) && vt(r2, t, e[t]);
  return r2;
};
class Ct extends p$2 {
  constructor(e, t, i, s = P$1, n2 = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = it, this.cached = [], this.initialized = false, this.storagePrefix = P$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a3) => {
        Xn(a3) ? this.map.set(a3.id, a3) : et$1(a3) ? this.map.set(a3.topic, a3) : this.getKey && a3 !== null && !E$1(a3) && this.map.set(this.getKey(a3), a3);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (a3, o2) => {
      this.isInitialized(), this.map.has(a3) ? await this.update(a3, o2) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a3, value: o2 }), this.map.set(a3, o2), await this.persist());
    }, this.get = (a3) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a3 }), this.getData(a3)), this.getAll = (a3) => (this.isInitialized(), a3 ? this.values.filter((o2) => Object.keys(a3).every((h3) => lodash_isequalExports(o2[h3], a3[h3]))) : this.values), this.update = async (a3, o2) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a3, update: o2 });
      const h3 = It(It({}, this.getData(a3)), o2);
      this.map.set(a3, h3), await this.persist();
    }, this.delete = async (a3, o2) => {
      this.isInitialized(), this.map.has(a3) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a3, reason: o2 }), this.map.delete(a3), await this.persist());
    }, this.logger = cjs$4.generateChildLogger(t, this.name), this.storagePrefix = s, this.getKey = n2;
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i } = y$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = y$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class _t {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = at, this.version = ot, this.events = new eventsExports(), this.initialized = false, this.storagePrefix = P$1, this.ignoredPayloadTypes = [N$2], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = an(), s = await this.core.crypto.setSymKey(i), n2 = Cn(cjs$5.FIVE_MINUTES), a3 = { protocol: Xe$1 }, o2 = { topic: s, expiry: n2, relay: a3, active: false }, h3 = zn({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i, relay: a3 });
      return await this.pairings.set(s, o2), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n2), { topic: s, uri: h3 };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: n2, relay: a3 } = Gn(i.uri), o2 = Cn(cjs$5.FIVE_MINUTES), h3 = { topic: s, relay: a3, expiry: o2, active: false };
      return await this.pairings.set(s, h3), await this.core.crypto.setSymKey(n2, s), await this.core.relayer.subscribe(s, { relay: a3 }), this.core.expirer.set(s, o2), i.activatePairing && await this.activate({ topic: s }), h3;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = Cn(cjs$5.THIRTY_DAYS);
      await this.pairings.update(i, { active: true, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n2 = await this.sendRequest(s, "wc_pairingPing", {}), { done: a3, resolve: o2, reject: h3 } = $n();
        this.events.once(kn("pairing_ping", n2), ({ error: d2 }) => {
          d2 ? h3(d2) : o2();
        }), await a3();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", h$2("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, n2) => {
      const a3 = formatJsonRpcRequest(s, n2), o2 = await this.core.crypto.encode(i, a3), h3 = N$1[s].req;
      return this.core.history.set(i, a3), await this.core.relayer.publish(i, o2, h3), a3.id;
    }, this.sendResult = async (i, s, n2) => {
      const a3 = formatJsonRpcResult(i, n2), o2 = await this.core.crypto.encode(s, a3), h3 = await this.core.history.get(s, i), d2 = N$1[h3.request.method].res;
      await this.core.relayer.publish(s, o2, d2), await this.core.history.resolve(a3);
    }, this.sendError = async (i, s, n2) => {
      const a3 = formatJsonRpcError(i, n2), o2 = await this.core.crypto.encode(s, a3), h3 = await this.core.history.get(s, i), d2 = N$1[h3.request.method] ? N$1[h3.request.method].res : N$1.unregistered_method.res;
      await this.core.relayer.publish(s, o2, d2), await this.core.history.resolve(a3);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, h$2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => Dn(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: n2 } = i, a3 = n2.method;
      if (this.pairings.keys.includes(s))
        switch (a3) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(s, n2);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(s, n2);
          default:
            return this.onUnknownRpcMethodRequest(s, n2);
        }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: n2 } = i, a3 = (await this.core.history.get(s, n2.id)).request.method;
      if (this.pairings.keys.includes(s))
        switch (a3) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(s, n2);
          default:
            return this.onUnknownRpcMethodResponse(a3);
        }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: n2 } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n2, i, true), this.events.emit("pairing_ping", { id: n2, topic: i });
      } catch (a3) {
        await this.sendError(n2, i, a3), this.logger.error(a3);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: n2 } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(kn("pairing_ping", n2), {}) : isJsonRpcError(s) && this.events.emit(kn("pairing_ping", n2), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: n2 } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.sendResult(n2, i, true), await this.deletePairing(i), this.events.emit("pairing_delete", { id: n2, topic: i });
      } catch (a3) {
        await this.sendError(n2, i, a3), this.logger.error(a3);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: n2, method: a3 } = s;
      try {
        if (this.registeredMethods.includes(a3))
          return;
        const o2 = h$2("WC_METHOD_UNSUPPORTED", a3);
        await this.sendError(n2, i, o2), this.logger.error(o2);
      } catch (o2) {
        await this.sendError(n2, i, o2), this.logger.error(o2);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(h$2("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!st$1(i)) {
        const { message: s } = y$2("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(s);
      }
      if (!Zn(i.uri)) {
        const { message: s } = y$2("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (i) => {
      if (!st$1(i)) {
        const { message: n2 } = y$2("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!st$1(i)) {
        const { message: n2 } = y$2("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!a2(i, false)) {
        const { message: s } = y$2("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = y$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (Dn(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = y$2("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = cjs$4.generateChildLogger(t, this.name), this.pairings = new Ct(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(D$1.message, async (e) => {
      const { topic: t, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const s = await this.core.crypto.decode(t, i);
      isJsonRpcRequest(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : isJsonRpcResponse(s) && (await this.core.history.resolve(s), this.onRelayEventResponse({ topic: t, payload: s }));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(m.expired, async (e) => {
      const { topic: t } = Kn(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit("pairing_expire", { topic: t }));
    });
  }
}
class Rt extends h$3 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = ht, this.version = ct, this.cached = [], this.initialized = false, this.storagePrefix = P$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i, s, n2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n2 }), this.records.has(s.id))
        return;
      const a3 = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n2 };
      this.records.set(a3.id, a3), this.events.emit(C$1.created, a3);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.events.emit(C$1.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n2) => {
        if (n2.topic === i) {
          if (typeof s < "u" && n2.id !== s)
            return;
          this.records.delete(n2.id), this.events.emit(C$1.deleted, n2);
        }
      });
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : false), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = cjs$4.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = y$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(C$1.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = y$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(C$1.created, (e) => {
      const t = C$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(C$1.updated, (e) => {
      const t = C$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(C$1.deleted, (e) => {
      const t = C$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class St extends E$2 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new eventsExports.EventEmitter(), this.name = ut, this.version = lt, this.cached = [], this.initialized = false, this.storagePrefix = P$1, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const n2 = this.formatTarget(i), a3 = { target: n2, expiry: s };
      this.expirations.set(n2, a3), this.checkExpiry(n2, a3), this.events.emit(m.created, { target: n2, expiration: a3 });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n2 = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(m.deleted, { target: s, expiration: n2 });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = cjs$4.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return Vn(e);
    if (typeof e == "number")
      return Mn(e);
    const { message: t } = y$2("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(m.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = y$2("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = y$2("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    cjs$5.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(m.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(cjs$6.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(m.created, (e) => {
      const t = m.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(m.expired, (e) => {
      const t = m.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(m.deleted, (e) => {
      const t = m.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var cr = Object.defineProperty, Tt = Object.getOwnPropertySymbols, ur = Object.prototype.hasOwnProperty, lr = Object.prototype.propertyIsEnumerable, Pt = (r2, e, t) => e in r2 ? cr(r2, e, { enumerable: true, configurable: true, writable: true, value: t }) : r2[e] = t, xt = (r2, e) => {
  for (var t in e || (e = {}))
    ur.call(e, t) && Pt(r2, t, e[t]);
  if (Tt)
    for (var t of Tt(e))
      lr.call(e, t) && Pt(r2, t, e[t]);
  return r2;
};
class V extends n {
  constructor(e) {
    super(e), this.protocol = ne, this.version = Ke, this.name = B, this.events = new eventsExports.EventEmitter(), this.initialized = false, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e == null ? void 0 : e.projectId;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : browser$2(cjs$4.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || $e.logger }));
    this.logger = cjs$4.generateChildLogger(t, this.name), this.heartbeat = new cjs$6.HeartBeat(), this.crypto = new gt(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Rt(this, this.logger), this.expirer = new St(this, this.logger), this.storage = e != null && e.storage ? e.storage : new _default(xt(xt({}, ke$1), e == null ? void 0 : e.storageOptions)), this.relayer = new ft({ core: this, logger: this.logger, relayUrl: e == null ? void 0 : e.relayUrl, projectId: this.projectId }), this.pairing = new _t(this, this.logger);
  }
  static async init(e) {
    const t = new V(e);
    return await t.initialize(), t;
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const dr = V;
const U$1 = "wc", K = 2, z = "client", A$1 = `${U$1}@${K}:${z}:`, b$1 = { name: z, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, Z = "proposal", W = "session", T = cjs$5.SEVEN_DAYS, ee = "engine", P = { wc_sessionPropose: { req: { ttl: cjs$5.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$5.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$5.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$5.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$5.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$5.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$5.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$5.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$5.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$5.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: cjs$5.THIRTY_SECONDS, prompt: false, tag: 1115 } } }, C2 = { min: cjs$5.FIVE_MINUTES, max: cjs$5.SEVEN_DAYS }, se = "request";
var Ye = Object.defineProperty, ke = Object.defineProperties, Xe = Object.getOwnPropertyDescriptors, te = Object.getOwnPropertySymbols, Je = Object.prototype.hasOwnProperty, He = Object.prototype.propertyIsEnumerable, ie = (h3, n2, e) => n2 in h3 ? Ye(h3, n2, { enumerable: true, configurable: true, writable: true, value: e }) : h3[n2] = e, y$1 = (h3, n2) => {
  for (var e in n2 || (n2 = {}))
    Je.call(n2, e) && ie(h3, e, n2[e]);
  if (te)
    for (var e of te(n2))
      He.call(n2, e) && ie(h3, e, n2[e]);
  return h3;
}, j$1 = (h3, n2) => ke(h3, Xe(n2));
class Fe extends C$3 {
  constructor(n2) {
    super(n2), this.name = ee, this.events = new eventsExports(), this.initialized = false, this.ignoredPayloadTypes = [N$2], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(P) }), this.initialized = true);
    }, this.connect = async (e) => {
      this.isInitialized(), await this.isValidConnect(e);
      const { pairingTopic: s, requiredNamespaces: t, relays: i } = e;
      let r2 = s, o2, a3 = false;
      if (r2 && (a3 = this.client.core.pairing.pairings.get(r2).active), !r2 || !a3) {
        const { topic: E3, uri: g2 } = await this.client.core.pairing.create();
        r2 = E3, o2 = g2;
      }
      const l2 = await this.client.core.crypto.generateKeyPair(), d2 = { requiredNamespaces: t, relays: i ?? [{ protocol: Xe$1 }], proposer: { publicKey: l2, metadata: this.client.metadata } }, { reject: S2, resolve: w2, done: V2 } = $n();
      if (this.events.once(kn("session_connect"), async ({ error: E3, session: g2 }) => {
        if (E3)
          S2(E3);
        else if (g2) {
          g2.self.publicKey = l2;
          const O2 = j$1(y$1({}, g2), { requiredNamespaces: g2.requiredNamespaces });
          await this.client.session.set(g2.topic, O2), await this.setExpiry(g2.topic, g2.expiry), r2 && await this.client.core.pairing.updateMetadata({ topic: r2, metadata: g2.peer.metadata }), w2(O2);
        }
      }), !r2) {
        const { message: E3 } = y$2("NO_MATCHING_KEY", `connect() pairing topic: ${r2}`);
        throw new Error(E3);
      }
      const x2 = await this.sendRequest(r2, "wc_sessionPropose", d2), G2 = Cn(cjs$5.FIVE_MINUTES);
      return await this.setProposal(x2, y$1({ id: x2, expiry: G2 }, d2)), { uri: o2, approval: V2 };
    }, this.pair = async (e) => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      this.isInitialized(), await this.isValidApprove(e);
      const { id: s, relayProtocol: t, namespaces: i } = e, r2 = this.client.proposal.get(s);
      let { pairingTopic: o2, proposer: a3, requiredNamespaces: l2 } = r2;
      B$1(l2) || (l2 = Yn(i, "approve()"), this.client.proposal.set(s, j$1(y$1({}, r2), { requiredNamespaces: l2 })));
      const d2 = await this.client.core.crypto.generateKeyPair(), S2 = a3.publicKey, w2 = await this.client.core.crypto.generateSharedKey(d2, S2), V2 = { relay: { protocol: t ?? "irn" }, namespaces: i, requiredNamespaces: l2, controller: { publicKey: d2, metadata: this.client.metadata }, expiry: Cn(T) };
      await this.client.core.relayer.subscribe(w2);
      const x2 = await this.sendRequest(w2, "wc_sessionSettle", V2), { done: G2, resolve: E3, reject: g2 } = $n();
      this.events.once(kn("session_approve", x2), ({ error: Y }) => {
        Y ? g2(Y) : E3(this.client.session.get(w2));
      });
      const O2 = j$1(y$1({}, V2), { topic: w2, acknowledged: false, self: V2.controller, peer: { publicKey: a3.publicKey, metadata: a3.metadata }, controller: d2 });
      return await this.client.session.set(w2, O2), await this.setExpiry(w2, Cn(T)), o2 && await this.client.core.pairing.updateMetadata({ topic: o2, metadata: O2.peer.metadata }), o2 && s && (await this.sendResult(s, o2, { relay: { protocol: t ?? "irn" }, responderPublicKey: d2 }), await this.client.proposal.delete(s, h$2("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: o2 })), { topic: w2, acknowledged: G2 };
    }, this.reject = async (e) => {
      this.isInitialized(), await this.isValidReject(e);
      const { id: s, reason: t } = e, { pairingTopic: i } = this.client.proposal.get(s);
      i && (await this.sendError(s, i, t), await this.client.proposal.delete(s, h$2("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s, namespaces: t } = e, i = await this.sendRequest(s, "wc_sessionUpdate", { namespaces: t }), { done: r2, resolve: o2, reject: a3 } = $n();
      return this.events.once(kn("session_update", i), ({ error: l2 }) => {
        l2 ? a3(l2) : o2();
      }), await this.client.session.update(s, { namespaces: t }), { acknowledged: r2 };
    }, this.extend = async (e) => {
      this.isInitialized(), await this.isValidExtend(e);
      const { topic: s } = e, t = await this.sendRequest(s, "wc_sessionExtend", {}), { done: i, resolve: r2, reject: o2 } = $n();
      return this.events.once(kn("session_extend", t), ({ error: a3 }) => {
        a3 ? o2(a3) : r2();
      }), await this.setExpiry(s, Cn(T)), { acknowledged: i };
    }, this.request = async (e) => {
      this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s, request: t, topic: i, expiry: r2 } = e, o2 = await this.sendRequest(i, "wc_sessionRequest", { request: t, chainId: s }, r2), { done: a3, resolve: l2, reject: d2 } = $n(r2);
      return this.events.once(kn("session_request", o2), ({ error: S2, result: w2 }) => {
        S2 ? d2(S2) : l2(w2);
      }), await a3();
    }, this.respond = async (e) => {
      this.isInitialized(), await this.isValidRespond(e);
      const { topic: s, response: t } = e, { id: i } = t;
      isJsonRpcResult(t) ? await this.sendResult(i, s, t.result) : isJsonRpcError(t) && await this.sendError(i, s, t.error), this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 });
    }, this.ping = async (e) => {
      this.isInitialized(), await this.isValidPing(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const t = await this.sendRequest(s, "wc_sessionPing", {}), { done: i, resolve: r2, reject: o2 } = $n();
        this.events.once(kn("session_ping", t), ({ error: a3 }) => {
          a3 ? o2(a3) : r2();
        }), await i();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (e) => {
      this.isInitialized(), await this.isValidEmit(e);
      const { topic: s, event: t, chainId: i } = e;
      await this.sendRequest(s, "wc_sessionEvent", { event: t, chainId: i });
    }, this.disconnect = async (e) => {
      this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s } = e;
      this.client.session.keys.includes(s) ? (await this.sendRequest(s, "wc_sessionDelete", h$2("USER_DISCONNECTED")), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s) => Qn(s, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (e, s) => {
      const { self: t } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), await Promise.all([this.client.session.delete(e, h$2("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(t.publicKey), this.client.core.crypto.deleteSymKey(e), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deleteProposal = async (e, s) => {
      await Promise.all([this.client.proposal.delete(e, h$2("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s, t = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s), t ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s }), this.client.core.expirer.set(e, s);
    }, this.setProposal = async (e, s) => {
      await this.client.proposal.set(e, s), this.client.core.expirer.set(e, s.expiry);
    }, this.setPendingSessionRequest = async (e) => {
      const s = P.wc_sessionRequest.req.ttl, { id: t, topic: i, params: r2 } = e;
      await this.client.pendingRequest.set(t, { id: t, topic: i, params: r2 }), s && this.client.core.expirer.set(t, Cn(s));
    }, this.sendRequest = async (e, s, t, i) => {
      const r2 = formatJsonRpcRequest(s, t), o2 = await this.client.core.crypto.encode(e, r2), a3 = P[s].req;
      return i && (a3.ttl = i), this.client.core.history.set(e, r2), this.client.core.relayer.publish(e, o2, a3), r2.id;
    }, this.sendResult = async (e, s, t) => {
      const i = formatJsonRpcResult(e, t), r2 = await this.client.core.crypto.encode(s, i), o2 = await this.client.core.history.get(s, e), a3 = P[o2.request.method].res;
      this.client.core.relayer.publish(s, r2, a3), await this.client.core.history.resolve(i);
    }, this.sendError = async (e, s, t) => {
      const i = formatJsonRpcError(e, t), r2 = await this.client.core.crypto.encode(s, i), o2 = await this.client.core.history.get(s, e), a3 = P[o2.request.method].res;
      this.client.core.relayer.publish(s, r2, a3), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const e = [], s = [];
      this.client.session.getAll().forEach((t) => {
        Dn(t.expiry) && e.push(t.topic);
      }), this.client.proposal.getAll().forEach((t) => {
        Dn(t.expiry) && s.push(t.id);
      }), await Promise.all([...e.map((t) => this.deleteSession(t)), ...s.map((t) => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = (e) => {
      const { topic: s, payload: t } = e, i = t.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s, payload: t } = e, i = (await this.client.core.history.get(s, t.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onSessionProposeRequest = async (e, s) => {
      const { params: t, id: i } = s;
      try {
        this.isValidConnect(y$1({}, s.params));
        const r2 = Cn(cjs$5.FIVE_MINUTES), o2 = y$1({ id: i, pairingTopic: e, expiry: r2 }, t);
        await this.setProposal(i, o2), this.client.events.emit("session_proposal", { id: i, params: o2 });
      } catch (r2) {
        await this.sendError(i, e, r2), this.client.logger.error(r2);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const { id: t } = s;
      if (isJsonRpcResult(s)) {
        const { result: i } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const r2 = this.client.proposal.get(t);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: r2 });
        const o2 = r2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o2 });
        const a3 = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a3 });
        const l2 = await this.client.core.crypto.generateSharedKey(o2, a3);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l2 });
        const d2 = await this.client.core.relayer.subscribe(l2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d2 }), await this.client.core.pairing.activate({ topic: e });
      } else
        isJsonRpcError(s) && (await this.client.proposal.delete(t, h$2("USER_DISCONNECTED")), this.events.emit(kn("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: r2, controller: o2, expiry: a3, namespaces: l2, requiredNamespaces: d2 } = s.params, S2 = { topic: e, relay: r2, expiry: a3, namespaces: l2, acknowledged: true, requiredNamespaces: d2, controller: o2.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o2.publicKey, metadata: o2.metadata } };
        await this.sendResult(s.id, e, true), this.events.emit(kn("session_connect"), { session: S2 });
      } catch (r2) {
        await this.sendError(t, e, r2), this.client.logger.error(r2);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(kn("session_approve", t), {})) : isJsonRpcError(s) && (await this.client.session.delete(e, h$2("USER_DISCONNECTED")), this.events.emit(kn("session_approve", t), { error: s.error }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const { params: t, id: i } = s;
      try {
        this.isValidUpdate(y$1({ topic: e }, t)), await this.client.session.update(e, { namespaces: t.namespaces }), await this.sendResult(i, e, true), this.client.events.emit("session_update", { id: i, topic: e, params: t });
      } catch (r2) {
        await this.sendError(i, e, r2), this.client.logger.error(r2);
      }
    }, this.onSessionUpdateResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(kn("session_update", t), {}) : isJsonRpcError(s) && this.events.emit(kn("session_update", t), { error: s.error });
    }, this.onSessionExtendRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, Cn(T)), await this.sendResult(t, e, true), this.client.events.emit("session_extend", { id: t, topic: e });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(kn("session_extend", t), {}) : isJsonRpcError(s) && this.events.emit(kn("session_extend", t), { error: s.error });
    }, this.onSessionPingRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidPing({ topic: e }), await this.sendResult(t, e, true), this.client.events.emit("session_ping", { id: t, topic: e });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const { id: t } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(kn("session_ping", t), {}) : isJsonRpcError(s) && this.events.emit(kn("session_ping", t), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidDisconnect({ topic: e, reason: s.params }), this.client.core.relayer.once(D$1.publish, async () => {
          await this.deleteSession(e);
        }), await this.sendResult(t, e, true), this.client.events.emit("session_delete", { id: t, topic: e });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidRequest(y$1({ topic: e }, i)), await this.setPendingSessionRequest({ id: t, topic: e, params: i }), this.client.events.emit("session_request", { id: t, topic: e, params: i });
      } catch (r2) {
        await this.sendError(t, e, r2), this.client.logger.error(r2);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(kn("session_request", t), { result: s.result }) : isJsonRpcError(s) && this.events.emit(kn("session_request", t), { error: s.error });
    }, this.onSessionEventRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidEmit(y$1({ topic: e }, i)), this.client.events.emit("session_event", { id: t, topic: e, params: i });
      } catch (r2) {
        await this.sendError(t, e, r2), this.client.logger.error(r2);
      }
    }, this.isValidConnect = async (e) => {
      if (!st$1(e)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(o2);
      }
      const { pairingTopic: s, requiredNamespaces: t, relays: i } = e;
      if (E$1(s) || await this.isValidPairingTopic(s), !E$1(t) && B$1(t) === 0)
        return;
      const r2 = tt$1(t, "connect()");
      if (r2)
        throw new Error(r2.message);
      if (!rt$1(i, true)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `connect() relays: ${i}`);
        throw new Error(o2);
      }
    }, this.isValidApprove = async (e) => {
      if (!st$1(e))
        throw new Error(y$2("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s, namespaces: t, relayProtocol: i } = e;
      await this.isValidProposalId(s);
      const r2 = this.client.proposal.get(s), o2 = He$2(t, "approve()");
      if (o2)
        throw new Error(o2.message);
      const a$12 = pt$1(r2.requiredNamespaces, t, "update()");
      if (a$12)
        throw new Error(a$12.message);
      if (!a2(i, true)) {
        const { message: l2 } = y$2("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(l2);
      }
    }, this.isValidReject = async (e) => {
      if (!st$1(e)) {
        const { message: i } = y$2("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i);
      }
      const { id: s, reason: t } = e;
      if (await this.isValidProposalId(s), !it$1(t)) {
        const { message: i } = y$2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!st$1(e)) {
        const { message: l2 } = y$2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(l2);
      }
      const { relay: s, controller: t, namespaces: i, expiry: r2 } = e;
      if (!qe$1(s)) {
        const { message: l2 } = y$2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l2);
      }
      const o2 = nt$1(t, "onSessionSettleRequest()");
      if (o2)
        throw new Error(o2.message);
      const a3 = He$2(i, "onSessionSettleRequest()");
      if (a3)
        throw new Error(a3.message);
      if (Dn(r2)) {
        const { message: l2 } = y$2("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l2);
      }
    }, this.isValidUpdate = async (e) => {
      if (!st$1(e)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s, namespaces: t } = e;
      await this.isValidSessionTopic(s);
      const i = this.client.session.get(s), r2 = He$2(t, "update()");
      if (r2)
        throw new Error(r2.message);
      const o2 = pt$1(i.requiredNamespaces, t, "update()");
      if (o2)
        throw new Error(o2.message);
    }, this.isValidExtend = async (e) => {
      if (!st$1(e)) {
        const { message: t } = y$2("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (e) => {
      if (!st$1(e)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a3);
      }
      const { topic: s, request: t, chainId: i, expiry: r2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: o2 } = this.client.session.get(s);
      if (!dt$1(o2, i)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(a3);
      }
      if (!ct$1(t)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(a3);
      }
      if (!lt$1(o2, i, t.method)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(a3);
      }
      if (r2 && !mt$1(r2, C2)) {
        const { message: a3 } = y$2("MISSING_OR_INVALID", `request() expiry: ${r2}. Expiry must be a number (in seconds) between ${C2.min} and ${C2.max}`);
        throw new Error(a3);
      }
    }, this.isValidRespond = async (e) => {
      if (!st$1(e)) {
        const { message: i } = y$2("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(i);
      }
      const { topic: s, response: t } = e;
      if (await this.isValidSessionTopic(s), !at$1(t)) {
        const { message: i } = y$2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (e) => {
      if (!st$1(e)) {
        const { message: t } = y$2("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (e) => {
      if (!st$1(e)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o2);
      }
      const { topic: s, event: t, chainId: i } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: r2 } = this.client.session.get(s);
      if (!dt$1(r2, i)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o2);
      }
      if (!ut$1(t)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o2);
      }
      if (!ft$1(r2, i, t.name)) {
        const { message: o2 } = y$2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o2);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!st$1(e)) {
        const { message: t } = y$2("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: n2 } = y$2("NOT_INITIALIZED", this.name);
      throw new Error(n2);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(D$1.message, async (n2) => {
      const { topic: e, message: s } = n2;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const t = await this.client.core.crypto.decode(e, s);
      isJsonRpcRequest(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({ topic: e, payload: t })) : isJsonRpcResponse(t) && (await this.client.core.history.resolve(t), this.onRelayEventResponse({ topic: e, payload: t }));
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(m.expired, async (n2) => {
      const { topic: e, id: s } = Kn(n2.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, y$2("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, true), this.client.events.emit("session_expire", { topic: e })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  isValidPairingTopic(n2) {
    if (!a2(n2, false)) {
      const { message: e } = y$2("MISSING_OR_INVALID", `pairing topic should be a string: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(n2)) {
      const { message: e } = y$2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (Dn(this.client.core.pairing.pairings.get(n2).expiry)) {
      const { message: e } = y$2("EXPIRED", `pairing topic: ${n2}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(n2) {
    if (!a2(n2, false)) {
      const { message: e } = y$2("MISSING_OR_INVALID", `session topic should be a string: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(n2)) {
      const { message: e } = y$2("NO_MATCHING_KEY", `session topic doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (Dn(this.client.session.get(n2).expiry)) {
      await this.deleteSession(n2);
      const { message: e } = y$2("EXPIRED", `session topic: ${n2}`);
      throw new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(n2) {
    if (this.client.session.keys.includes(n2))
      await this.isValidSessionTopic(n2);
    else if (this.client.core.pairing.pairings.keys.includes(n2))
      this.isValidPairingTopic(n2);
    else if (a2(n2, false)) {
      const { message: e } = y$2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n2}`);
      throw new Error(e);
    } else {
      const { message: e } = y$2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n2}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(n2) {
    if (!ot$1(n2)) {
      const { message: e } = y$2("MISSING_OR_INVALID", `proposal id should be a number: ${n2}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(n2)) {
      const { message: e } = y$2("NO_MATCHING_KEY", `proposal id doesn't exist: ${n2}`);
      throw new Error(e);
    }
    if (Dn(this.client.proposal.get(n2).expiry)) {
      await this.deleteProposal(n2);
      const { message: e } = y$2("EXPIRED", `proposal id: ${n2}`);
      throw new Error(e);
    }
  }
}
class Qe extends Ct {
  constructor(n2, e) {
    super(n2, e, Z, A$1), this.core = n2, this.logger = e;
  }
}
class Be extends Ct {
  constructor(n2, e) {
    super(n2, e, W, A$1), this.core = n2, this.logger = e;
  }
}
class Ze extends Ct {
  constructor(n2, e) {
    super(n2, e, se, A$1), this.core = n2, this.logger = e;
  }
}
class L extends y$3 {
  constructor(n2) {
    super(n2), this.protocol = U$1, this.version = K, this.name = b$1.name, this.events = new eventsExports.EventEmitter(), this.on = (s, t) => this.events.on(s, t), this.once = (s, t) => this.events.once(s, t), this.off = (s, t) => this.events.off(s, t), this.removeListener = (s, t) => this.events.removeListener(s, t), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (n2 == null ? void 0 : n2.name) || b$1.name, this.metadata = (n2 == null ? void 0 : n2.metadata) || bn();
    const e = typeof (n2 == null ? void 0 : n2.logger) < "u" && typeof (n2 == null ? void 0 : n2.logger) != "string" ? n2.logger : browser$2(cjs$4.getDefaultLoggerOptions({ level: (n2 == null ? void 0 : n2.logger) || b$1.logger }));
    this.core = (n2 == null ? void 0 : n2.core) || new dr(n2), this.logger = cjs$4.generateChildLogger(e, this.name), this.session = new Be(this.core, this.logger), this.proposal = new Qe(this.core, this.logger), this.pendingRequest = new Ze(this.core, this.logger), this.engine = new Fe(this);
  }
  static async init(n2) {
    const e = new L(n2);
    return await e.initialize(), e;
  }
  get context() {
    return cjs$4.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (n2) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n2.message), n2;
    }
  }
}
var cjs$1 = {};
Object.defineProperty(cjs$1, "__esModule", { value: true });
cjs$1.getLocalStorage = cjs$1.getLocalStorageOrThrow = cjs$1.getCrypto = cjs$1.getCryptoOrThrow = cjs$1.getLocation = cjs$1.getLocationOrThrow = cjs$1.getNavigator = cjs$1.getNavigatorOrThrow = cjs$1.getDocument = cjs$1.getDocumentOrThrow = cjs$1.getFromWindowOrThrow = cjs$1.getFromWindow = void 0;
function getFromWindow(name) {
  let res = void 0;
  if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
    res = window[name];
  }
  return res;
}
cjs$1.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
  const res = getFromWindow(name);
  if (!res) {
    throw new Error(`${name} is not defined in Window`);
  }
  return res;
}
cjs$1.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
  return getFromWindowOrThrow("document");
}
cjs$1.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
  return getFromWindow("document");
}
cjs$1.getDocument = getDocument;
function getNavigatorOrThrow() {
  return getFromWindowOrThrow("navigator");
}
cjs$1.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
  return getFromWindow("navigator");
}
cjs$1.getNavigator = getNavigator;
function getLocationOrThrow() {
  return getFromWindowOrThrow("location");
}
cjs$1.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
  return getFromWindow("location");
}
cjs$1.getLocation = getLocation;
function getCryptoOrThrow() {
  return getFromWindowOrThrow("crypto");
}
cjs$1.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
  return getFromWindow("crypto");
}
cjs$1.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
  return getFromWindowOrThrow("localStorage");
}
cjs$1.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
  return getFromWindow("localStorage");
}
cjs$1.getLocalStorage = getLocalStorage;
var cjs = {};
Object.defineProperty(cjs, "__esModule", { value: true });
cjs.getWindowMetadata = void 0;
const window_getters_1 = cjs$1;
function getWindowMetadata() {
  let doc;
  let loc;
  try {
    doc = window_getters_1.getDocumentOrThrow();
    loc = window_getters_1.getLocationOrThrow();
  } catch (e) {
    return null;
  }
  function getIcons() {
    const links = doc.getElementsByTagName("link");
    const icons2 = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const rel = link.getAttribute("rel");
      if (rel) {
        if (rel.toLowerCase().indexOf("icon") > -1) {
          const href = link.getAttribute("href");
          if (href) {
            if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
              let absoluteHref = loc.protocol + "//" + loc.host;
              if (href.indexOf("/") === 0) {
                absoluteHref += href;
              } else {
                const path = loc.pathname.split("/");
                path.pop();
                const finalPath = path.join("/");
                absoluteHref += finalPath + "/" + href;
              }
              icons2.push(absoluteHref);
            } else if (href.indexOf("//") === 0) {
              const absoluteUrl = loc.protocol + href;
              icons2.push(absoluteUrl);
            } else {
              icons2.push(href);
            }
          }
        }
      }
    }
    return icons2;
  }
  function getWindowMetadataOfAny(...args) {
    const metaTags = doc.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
      const tag = metaTags[i];
      const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
        if (attr) {
          return args.includes(attr);
        }
        return false;
      });
      if (attributes.length && attributes) {
        const content = tag.getAttribute("content");
        if (content) {
          return content;
        }
      }
    }
    return "";
  }
  function getName() {
    let name2 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
    if (!name2) {
      name2 = doc.title;
    }
    return name2;
  }
  function getDescription() {
    const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
    return description2;
  }
  const name = getName();
  const description = getDescription();
  const url = loc.origin;
  const icons = getIcons();
  const meta = {
    description,
    url,
    icons,
    name
  };
  return meta;
}
cjs.getWindowMetadata = getWindowMetadata;
var queryString = {};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const filterObject = filterObj;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[", index, "]"].join("")];
          }
          return [
            ...result,
            [encode2(key, options), "[", encode2(index, options), "]=", encode2(value, options)].join("")
          ];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), "[]"].join("")];
          }
          return [...result, [encode2(key, options), "[]=", encode2(value, options)].join("")];
        };
      case "colon-list-separator":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode2(key, options), ":list="].join("")];
          }
          return [...result, [encode2(key, options), ":list=", encode2(value, options)].join("")];
        };
      case "comma":
      case "separator":
      case "bracket-separator": {
        const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          value = value === null ? "" : value;
          if (result.length === 0) {
            return [[encode2(key, options), keyValueSep, encode2(value, options)].join("")];
          }
          return [[result, encode2(value, options)].join(options.arrayFormatSeparator)];
        };
      }
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode2(key, options)];
          }
          return [...result, [encode2(key, options), "=", encode2(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "colon-list-separator":
        return (key, value, accumulator) => {
          result = /(:list)$/.exec(key);
          key = key.replace(/:list$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      case "bracket-separator":
        return (key, value, accumulator) => {
          const isArray = /(\[\])$/.test(key);
          key = key.replace(/\[\]$/, "");
          if (!isArray) {
            accumulator[key] = value ? decode2(value, options) : value;
            return;
          }
          const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
          if (accumulator[key] === void 0) {
            accumulator[key] = arrayValue;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], arrayValue);
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode2(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a3, b2) => Number(a3) - Number(b2)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash2 = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash2 = url.slice(hashStart);
    }
    return hash2;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = /* @__PURE__ */ Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      if (param === "") {
        continue;
      }
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k2 of Object.keys(value)) {
          value[k2] = parseValue(value[k2], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, /* @__PURE__ */ Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode2(key, options);
      }
      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === "bracket-separator") {
          return encode2(key, options) + "[]";
        }
        return value.reduce(formatter(key), []).join("&");
      }
      return encode2(key, options) + "=" + encode2(value, options);
    }).filter((x2) => x2.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash2] = splitOnFirst$1(url, "#");
    return Object.assign(
      {
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
      },
      options && options.parseFragmentIdentifier && hash2 ? { fragmentIdentifier: decode2(hash2, options) } : {}
    );
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true,
      [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash2 = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash2 = `#${options[encodeFragmentIdentifier] ? encode2(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    }
    return `${url}${queryString2}${hash2}`;
  };
  exports.pick = (input, filter, options) => {
    options = Object.assign({
      parseFragmentIdentifier: true,
      [encodeFragmentIdentifier]: false
    }, options);
    const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
      url,
      query: filterObject(query, filter),
      fragmentIdentifier
    }, options);
  };
  exports.exclude = (input, filter, options) => {
    const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
    return exports.pick(input, exclusionFilter, options);
  };
})(queryString);
const Wn = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function h$1(e, n2) {
  const { message: t, code: r2 } = Wn[e];
  return { message: n2 ? `${t} ${n2}` : t, code: r2 };
}
function I(e, n2) {
  return Array.isArray(e) ? typeof n2 < "u" && e.length ? e.every(n2) : true : false;
}
function y2(i) {
  var t;
  const e = (t = i[Object.keys(i)[0]]) == null ? void 0 : t.chains[0];
  return [e.split(":")[0], e.split(":")[1]];
}
function r(i, t) {
  let e;
  return t.rpcMap && (e = t.rpcMap[O([i])]), e;
}
function O(i) {
  return Number(i[0].split(":")[1]);
}
class E2 {
  constructor(t) {
    this.name = "eip155", this.namespace = t.namespace, this.client = t.client, this.events = t.events, this.httpProviders = this.createHttpProviders(), this.chainId = this.getDefaultChainId();
  }
  async request(t) {
    var e;
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain": {
        const s = t.request.params ? (e = t.request.params[0]) == null ? void 0 : e.chainId : "0x0";
        return this.setDefaultChain(parseInt(s, 16).toString()), null;
      }
      case "eth_chainId":
        return this.getDefaultChainId();
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, e) {
    if (this.chainId = parseInt(t), !this.httpProviders[t]) {
      const s = e || r(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit("chainChanged", this.chainId);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  createHttpProvider(t, e) {
    const s = e || r(t, this.namespace);
    return typeof s > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(s));
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  getDefaultChainId() {
    if (this.chainId)
      return this.chainId;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return parseInt(t.split(":")[1]);
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
}
class q {
  constructor(t) {
    this.name = "solana", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getDefaultChainId() {
    if (this.chainId)
      return this.chainId;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = e || r(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit("chainChanged", this.chainId);
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || r(t, this.namespace);
    return typeof s > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(s));
  }
}
class H {
  constructor(t) {
    this.name = "cosmos", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getDefaultChainId() {
    if (this.chainId)
      return this.chainId;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = e || r(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit("chainChanged", this.chainId);
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || r(t, this.namespace);
    return typeof s > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(s));
  }
}
class $ {
  constructor(t) {
    this.name = "cip34", this.namespace = t.namespace, this.events = t.events, this.client = t.client, this.chainId = this.getDefaultChainId(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e) => e.split(":")[1] === this.chainId.toString()).map((e) => e.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e) => {
      t[e] = this.createHttpProvider(e);
    }), t;
  }
  getDefaultChainId() {
    if (this.chainId)
      return this.chainId;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
    if (typeof e > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return e;
  }
  setDefaultChain(t, e) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = e || r(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit("chainChanged", this.chainId);
  }
  setHttpProvider(t, e) {
    const s = this.createHttpProvider(t, e);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, e) {
    const s = e || r(t, this.namespace);
    return typeof s > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(s));
  }
}
const h2 = "error", b = "wss://relay.walletconnect.com", S = "wc", A = "universal_provider", p2 = `${S}@${2}:${A}:`;
var N = Object.defineProperty, D = Object.defineProperties, j = Object.getOwnPropertyDescriptors, d = Object.getOwnPropertySymbols, k = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable, l = (i, t, e) => t in i ? N(i, t, { enumerable: true, configurable: true, writable: true, value: e }) : i[t] = e, u2 = (i, t) => {
  for (var e in t || (t = {}))
    k.call(t, e) && l(i, e, t[e]);
  if (d)
    for (var e of d(t))
      R.call(t, e) && l(i, e, t[e]);
  return i;
}, _ = (i, t) => D(i, j(t));
class o {
  constructor(t) {
    this.events = new eventsExports(), this.rpcProviders = {}, this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : browser$2(cjs$4.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || h2 }));
  }
  static async init(t) {
    const e = new o(t);
    return await e.initialize(), e;
  }
  async request(t, e) {
    const [s, n2] = this.validateChain(e);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: u2({}, t), chainId: `${s}:${n2}`, topic: this.session.topic });
  }
  sendAsync(t, e, s) {
    this.request(t, s).then((n2) => e(null, n2)).catch((n2) => e(n2, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: h$1("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    const { namespaces: e } = t;
    return this.setNamespaces(e), this.createProviders(), await this.cleanupPendingPairings(), t.skipPairing === true ? void 0 : await this.pair(t.pairingTopic);
  }
  on(t, e) {
    this.events.on(t, e);
  }
  once(t, e) {
    this.events.once(t, e);
  }
  removeListener(t, e) {
    this.events.removeListener(t, e);
  }
  off(t, e) {
    this.events.off(t, e);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(t) {
    const { uri: e, approval: s } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces });
    return e && (this.uri = e, this.events.emit("display_uri", e)), this.session = await s(), this.onSessionUpdate(), this.onConnect(), this.session;
  }
  setDefaultChain(t, e) {
    try {
      const [s, n2] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(n2, e);
    } catch (s) {
      if (!/Please call connect/.test(s.message))
        throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const e = this.client.pairing.getAll();
    if (I(e)) {
      for (const s of e)
        t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${e.length}`);
    }
  }
  async checkStorage() {
    if (this.namespaces = await this.client.core.storage.getItem(`${p2}/namespaces`) || {}, this.namespaces && this.createProviders(), this.client.session.length) {
      const t = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[t]), this.onSessionUpdate();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await L.init({ logger: this.providerOpts.logger || h2, relayUrl: this.providerOpts.relayUrl || b, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    Object.keys(this.namespaces).forEach((t) => {
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new E2({ client: this.client, namespace: this.namespaces[t], events: this.events });
          break;
        case "solana":
          this.rpcProviders[t] = new q({ client: this.client, namespace: this.namespaces[t], events: this.events });
          break;
        case "cosmos":
          this.rpcProviders[t] = new H({ client: this.client, namespace: this.namespaces[t], events: this.events });
          break;
        case "polkadot":
          break;
        case "cip34":
          this.rpcProviders[t] = new $({ client: this.client, namespace: this.namespaces[t], events: this.events });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      const { params: e } = t, { event: s } = e;
      s.name === "accountsChanged" ? this.events.emit("accountsChanged", s.data) : s.name === "chainChanged" ? this.onChainChanged(s.data, e.chainId) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: e }) => {
      var s;
      const { namespaces: n2 } = e, v2 = (s = this.client) == null ? void 0 : s.session.get(t);
      this.session = _(u2({}, v2), { namespaces: n2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: e });
    }), this.client.on("session_delete", async (t) => {
      await this.cleanup(), this.events.emit("session_delete", t);
    });
  }
  getProvider(t) {
    if (!this.rpcProviders[t])
      throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var e;
      this.getProvider(t).updateNamespace((e = this.session) == null ? void 0 : e.namespaces[t]);
    });
  }
  setNamespaces(t) {
    if (!t || !Object.keys(t).length)
      throw new Error("Namespaces must be not empty");
    this.client.core.storage.setItem(`${p2}/namespaces`, t), this.namespaces = t;
  }
  validateChain(t) {
    const [e, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (e && !Object.keys(this.namespaces).includes(e))
      throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
    return !e || !s ? y2(this.namespaces) : [e, s];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, e) {
    const [s, n2] = this.validateChain(e);
    this.getProvider(s).setDefaultChain(n2), this.events.emit("chainChanged", t);
  }
  onConnect() {
    this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, await this.cleanupPendingPairings({ deletePairings: true });
  }
}
const U = o;
export {
  U as UniversalProvider,
  o as default
};
