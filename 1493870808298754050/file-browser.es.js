var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jszip_min = { exports: {} };
/*!

JSZip v3.7.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
(function(module, exports) {
  !function(t2) {
    module.exports = t2();
  }(function() {
    return function s(a, o, h) {
      function u2(r2, t3) {
        if (!o[r2]) {
          if (!a[r2]) {
            var e = typeof commonjsRequire == "function" && commonjsRequire;
            if (!t3 && e)
              return e(r2, true);
            if (l2)
              return l2(r2, true);
            var i = new Error("Cannot find module '" + r2 + "'");
            throw i.code = "MODULE_NOT_FOUND", i;
          }
          var n2 = o[r2] = { exports: {} };
          a[r2][0].call(n2.exports, function(t4) {
            var e2 = a[r2][1][t4];
            return u2(e2 || t4);
          }, n2, n2.exports, s, a, o, h);
        }
        return o[r2].exports;
      }
      for (var l2 = typeof commonjsRequire == "function" && commonjsRequire, t2 = 0; t2 < h.length; t2++)
        u2(h[t2]);
      return u2;
    }({ 1: [function(t2, e, r2) {
      var c = t2("./utils"), d = t2("./support"), p2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r2.encode = function(t3) {
        for (var e2, r3, i, n2, s, a, o, h = [], u2 = 0, l2 = t3.length, f = l2, d2 = c.getTypeOf(t3) !== "string"; u2 < t3.length; )
          f = l2 - u2, i = d2 ? (e2 = t3[u2++], r3 = u2 < l2 ? t3[u2++] : 0, u2 < l2 ? t3[u2++] : 0) : (e2 = t3.charCodeAt(u2++), r3 = u2 < l2 ? t3.charCodeAt(u2++) : 0, u2 < l2 ? t3.charCodeAt(u2++) : 0), n2 = e2 >> 2, s = (3 & e2) << 4 | r3 >> 4, a = 1 < f ? (15 & r3) << 2 | i >> 6 : 64, o = 2 < f ? 63 & i : 64, h.push(p2.charAt(n2) + p2.charAt(s) + p2.charAt(a) + p2.charAt(o));
        return h.join("");
      }, r2.decode = function(t3) {
        var e2, r3, i, n2, s, a, o = 0, h = 0, u2 = "data:";
        if (t3.substr(0, u2.length) === u2)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var l2, f = 3 * (t3 = t3.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
        if (t3.charAt(t3.length - 1) === p2.charAt(64) && f--, t3.charAt(t3.length - 2) === p2.charAt(64) && f--, f % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (l2 = d.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < t3.length; )
          e2 = p2.indexOf(t3.charAt(o++)) << 2 | (n2 = p2.indexOf(t3.charAt(o++))) >> 4, r3 = (15 & n2) << 4 | (s = p2.indexOf(t3.charAt(o++))) >> 2, i = (3 & s) << 6 | (a = p2.indexOf(t3.charAt(o++))), l2[h++] = e2, s !== 64 && (l2[h++] = r3), a !== 64 && (l2[h++] = i);
        return l2;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(t2, e, r2) {
      var i = t2("./external"), n2 = t2("./stream/DataWorker"), s = t2("./stream/Crc32Probe"), a = t2("./stream/DataLengthProbe");
      function o(t3, e2, r3, i2, n3) {
        this.compressedSize = t3, this.uncompressedSize = e2, this.crc32 = r3, this.compression = i2, this.compressedContent = n3;
      }
      o.prototype = { getContentWorker: function() {
        var t3 = new n2(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), e2 = this;
        return t3.on("end", function() {
          if (this.streamInfo.data_length !== e2.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), t3;
      }, getCompressedWorker: function() {
        return new n2(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, o.createWorkerFrom = function(t3, e2, r3) {
        return t3.pipe(new s()).pipe(new a("uncompressedSize")).pipe(e2.compressWorker(r3)).pipe(new a("compressedSize")).withStreamInfo("compression", e2);
      }, e.exports = o;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t2, e, r2) {
      var i = t2("./stream/GenericWorker");
      r2.STORE = { magic: "\0\0", compressWorker: function(t3) {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, r2.DEFLATE = t2("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t2, e, r2) {
      var i = t2("./utils");
      var o = function() {
        for (var t3, e2 = [], r3 = 0; r3 < 256; r3++) {
          t3 = r3;
          for (var i2 = 0; i2 < 8; i2++)
            t3 = 1 & t3 ? 3988292384 ^ t3 >>> 1 : t3 >>> 1;
          e2[r3] = t3;
        }
        return e2;
      }();
      e.exports = function(t3, e2) {
        return t3 !== void 0 && t3.length ? i.getTypeOf(t3) !== "string" ? function(t4, e3, r3, i2) {
          var n2 = o, s = i2 + r3;
          t4 ^= -1;
          for (var a = i2; a < s; a++)
            t4 = t4 >>> 8 ^ n2[255 & (t4 ^ e3[a])];
          return -1 ^ t4;
        }(0 | e2, t3, t3.length, 0) : function(t4, e3, r3, i2) {
          var n2 = o, s = i2 + r3;
          t4 ^= -1;
          for (var a = i2; a < s; a++)
            t4 = t4 >>> 8 ^ n2[255 & (t4 ^ e3.charCodeAt(a))];
          return -1 ^ t4;
        }(0 | e2, t3, t3.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(t2, e, r2) {
      r2.base64 = false, r2.binary = false, r2.dir = false, r2.createFolders = true, r2.date = null, r2.compression = null, r2.compressionOptions = null, r2.comment = null, r2.unixPermissions = null, r2.dosPermissions = null;
    }, {}], 6: [function(t2, e, r2) {
      var i = null;
      i = typeof Promise != "undefined" ? Promise : t2("lie"), e.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(t2, e, r2) {
      var i = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Uint32Array != "undefined", n2 = t2("pako"), s = t2("./utils"), a = t2("./stream/GenericWorker"), o = i ? "uint8array" : "array";
      function h(t3, e2) {
        a.call(this, "FlateWorker/" + t3), this._pako = null, this._pakoAction = t3, this._pakoOptions = e2, this.meta = {};
      }
      r2.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(t3) {
        this.meta = t3.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(o, t3.data), false);
      }, h.prototype.flush = function() {
        a.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], true);
      }, h.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function() {
        this._pako = new n2[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
        var e2 = this;
        this._pako.onData = function(t3) {
          e2.push({ data: t3, meta: e2.meta });
        };
      }, r2.compressWorker = function(t3) {
        return new h("Deflate", t3);
      }, r2.uncompressWorker = function() {
        return new h("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t2, e, r2) {
      function A2(t3, e2) {
        var r3, i2 = "";
        for (r3 = 0; r3 < e2; r3++)
          i2 += String.fromCharCode(255 & t3), t3 >>>= 8;
        return i2;
      }
      function i(t3, e2, r3, i2, n3, s2) {
        var a, o, h = t3.file, u2 = t3.compression, l2 = s2 !== O2.utf8encode, f = I2.transformTo("string", s2(h.name)), d = I2.transformTo("string", O2.utf8encode(h.name)), c = h.comment, p2 = I2.transformTo("string", s2(c)), m = I2.transformTo("string", O2.utf8encode(c)), _ = d.length !== h.name.length, g = m.length !== c.length, b = "", v2 = "", y2 = "", w = h.dir, k = h.date, x2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        e2 && !r3 || (x2.crc32 = t3.crc32, x2.compressedSize = t3.compressedSize, x2.uncompressedSize = t3.uncompressedSize);
        var S2 = 0;
        e2 && (S2 |= 8), l2 || !_ && !g || (S2 |= 2048);
        var z2 = 0, C2 = 0;
        w && (z2 |= 16), n3 === "UNIX" ? (C2 = 798, z2 |= function(t4, e3) {
          var r4 = t4;
          return t4 || (r4 = e3 ? 16893 : 33204), (65535 & r4) << 16;
        }(h.unixPermissions, w)) : (C2 = 20, z2 |= function(t4) {
          return 63 & (t4 || 0);
        }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v2 = A2(1, 1) + A2(B2(f), 4) + d, b += "up" + A2(v2.length, 2) + v2), g && (y2 = A2(1, 1) + A2(B2(p2), 4) + m, b += "uc" + A2(y2.length, 2) + y2);
        var E2 = "";
        return E2 += "\n\0", E2 += A2(S2, 2), E2 += u2.magic, E2 += A2(a, 2), E2 += A2(o, 2), E2 += A2(x2.crc32, 4), E2 += A2(x2.compressedSize, 4), E2 += A2(x2.uncompressedSize, 4), E2 += A2(f.length, 2), E2 += A2(b.length, 2), { fileRecord: R2.LOCAL_FILE_HEADER + E2 + f + b, dirRecord: R2.CENTRAL_FILE_HEADER + A2(C2, 2) + E2 + A2(p2.length, 2) + "\0\0\0\0" + A2(z2, 4) + A2(i2, 4) + f + b + p2 };
      }
      var I2 = t2("../utils"), n2 = t2("../stream/GenericWorker"), O2 = t2("../utf8"), B2 = t2("../crc32"), R2 = t2("../signature");
      function s(t3, e2, r3, i2) {
        n2.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e2, this.zipPlatform = r3, this.encodeFileName = i2, this.streamFiles = t3, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      I2.inherits(s, n2), s.prototype.push = function(t3) {
        var e2 = t3.meta.percent || 0, r3 = this.entriesCount, i2 = this._sources.length;
        this.accumulate ? this.contentBuffer.push(t3) : (this.bytesWritten += t3.data.length, n2.prototype.push.call(this, { data: t3.data, meta: { currentFile: this.currentFile, percent: r3 ? (e2 + 100 * (r3 - i2 - 1)) / r3 : 100 } }));
      }, s.prototype.openedSource = function(t3) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = t3.file.name;
        var e2 = this.streamFiles && !t3.file.dir;
        if (e2) {
          var r3 = i(t3, e2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: r3.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = true;
      }, s.prototype.closedSource = function(t3) {
        this.accumulate = false;
        var e2 = this.streamFiles && !t3.file.dir, r3 = i(t3, e2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r3.dirRecord), e2)
          this.push({ data: function(t4) {
            return R2.DATA_DESCRIPTOR + A2(t4.crc32, 4) + A2(t4.compressedSize, 4) + A2(t4.uncompressedSize, 4);
          }(t3), meta: { percent: 100 } });
        else
          for (this.push({ data: r3.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function() {
        for (var t3 = this.bytesWritten, e2 = 0; e2 < this.dirRecords.length; e2++)
          this.push({ data: this.dirRecords[e2], meta: { percent: 100 } });
        var r3 = this.bytesWritten - t3, i2 = function(t4, e3, r4, i3, n3) {
          var s2 = I2.transformTo("string", n3(i3));
          return R2.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(t4, 2) + A2(t4, 2) + A2(e3, 4) + A2(r4, 4) + A2(s2.length, 2) + s2;
        }(this.dirRecords.length, r3, t3, this.zipComment, this.encodeFileName);
        this.push({ data: i2, meta: { percent: 100 } });
      }, s.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function(t3) {
        this._sources.push(t3);
        var e2 = this;
        return t3.on("data", function(t4) {
          e2.processChunk(t4);
        }), t3.on("end", function() {
          e2.closedSource(e2.previous.streamInfo), e2._sources.length ? e2.prepareNextSource() : e2.end();
        }), t3.on("error", function(t4) {
          e2.error(t4);
        }), this;
      }, s.prototype.resume = function() {
        return !!n2.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
      }, s.prototype.error = function(t3) {
        var e2 = this._sources;
        if (!n2.prototype.error.call(this, t3))
          return false;
        for (var r3 = 0; r3 < e2.length; r3++)
          try {
            e2[r3].error(t3);
          } catch (t4) {
          }
        return true;
      }, s.prototype.lock = function() {
        n2.prototype.lock.call(this);
        for (var t3 = this._sources, e2 = 0; e2 < t3.length; e2++)
          t3[e2].lock();
      }, e.exports = s;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t2, e, r2) {
      var u2 = t2("../compressions"), i = t2("./ZipFileWorker");
      r2.generateWorker = function(t3, a, e2) {
        var o = new i(a.streamFiles, e2, a.platform, a.encodeFileName), h = 0;
        try {
          t3.forEach(function(t4, e3) {
            h++;
            var r3 = function(t5, e4) {
              var r4 = t5 || e4, i3 = u2[r4];
              if (!i3)
                throw new Error(r4 + " is not a valid compression method !");
              return i3;
            }(e3.options.compression, a.compression), i2 = e3.options.compressionOptions || a.compressionOptions || {}, n2 = e3.dir, s = e3.date;
            e3._compressWorker(r3, i2).withStreamInfo("file", { name: t4, dir: n2, date: s, comment: e3.comment || "", unixPermissions: e3.unixPermissions, dosPermissions: e3.dosPermissions }).pipe(o);
          }), o.entriesCount = h;
        } catch (t4) {
          o.error(t4);
        }
        return o;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t2, e, r2) {
      function i() {
        if (!(this instanceof i))
          return new i();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var t3 = new i();
          for (var e2 in this)
            typeof this[e2] != "function" && (t3[e2] = this[e2]);
          return t3;
        };
      }
      (i.prototype = t2("./object")).loadAsync = t2("./load"), i.support = t2("./support"), i.defaults = t2("./defaults"), i.version = "3.7.1", i.loadAsync = function(t3, e2) {
        return new i().loadAsync(t3, e2);
      }, i.external = t2("./external"), e.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t2, e, r2) {
      var i = t2("./utils"), n2 = t2("./external"), o = t2("./utf8"), h = t2("./zipEntries"), s = t2("./stream/Crc32Probe"), u2 = t2("./nodejsUtils");
      function l2(i2) {
        return new n2.Promise(function(t3, e2) {
          var r3 = i2.decompressed.getContentWorker().pipe(new s());
          r3.on("error", function(t4) {
            e2(t4);
          }).on("end", function() {
            r3.streamInfo.crc32 !== i2.decompressed.crc32 ? e2(new Error("Corrupted zip : CRC32 mismatch")) : t3();
          }).resume();
        });
      }
      e.exports = function(t3, s2) {
        var a = this;
        return s2 = i.extend(s2 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: o.utf8decode }), u2.isNode && u2.isStream(t3) ? n2.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", t3, true, s2.optimizedBinaryString, s2.base64).then(function(t4) {
          var e2 = new h(s2);
          return e2.load(t4), e2;
        }).then(function(t4) {
          var e2 = [n2.Promise.resolve(t4)], r3 = t4.files;
          if (s2.checkCRC32)
            for (var i2 = 0; i2 < r3.length; i2++)
              e2.push(l2(r3[i2]));
          return n2.Promise.all(e2);
        }).then(function(t4) {
          for (var e2 = t4.shift(), r3 = e2.files, i2 = 0; i2 < r3.length; i2++) {
            var n3 = r3[i2];
            a.file(n3.fileNameStr, n3.decompressed, { binary: true, optimizedBinaryString: true, date: n3.date, dir: n3.dir, comment: n3.fileCommentStr.length ? n3.fileCommentStr : null, unixPermissions: n3.unixPermissions, dosPermissions: n3.dosPermissions, createFolders: s2.createFolders });
          }
          return e2.zipComment.length && (a.comment = e2.zipComment), a;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t2, e, r2) {
      var i = t2("../utils"), n2 = t2("../stream/GenericWorker");
      function s(t3, e2) {
        n2.call(this, "Nodejs stream input adapter for " + t3), this._upstreamEnded = false, this._bindStream(e2);
      }
      i.inherits(s, n2), s.prototype._bindStream = function(t3) {
        var e2 = this;
        (this._stream = t3).pause(), t3.on("data", function(t4) {
          e2.push({ data: t4, meta: { percent: 0 } });
        }).on("error", function(t4) {
          e2.isPaused ? this.generatedError = t4 : e2.error(t4);
        }).on("end", function() {
          e2.isPaused ? e2._upstreamEnded = true : e2.end();
        });
      }, s.prototype.pause = function() {
        return !!n2.prototype.pause.call(this) && (this._stream.pause(), true);
      }, s.prototype.resume = function() {
        return !!n2.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
      }, e.exports = s;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t2, e, r2) {
      var n2 = t2("readable-stream").Readable;
      function i(t3, e2, r3) {
        n2.call(this, e2), this._helper = t3;
        var i2 = this;
        t3.on("data", function(t4, e3) {
          i2.push(t4) || i2._helper.pause(), r3 && r3(e3);
        }).on("error", function(t4) {
          i2.emit("error", t4);
        }).on("end", function() {
          i2.push(null);
        });
      }
      t2("../utils").inherits(i, n2), i.prototype._read = function() {
        this._helper.resume();
      }, e.exports = i;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t2, e, r2) {
      e.exports = { isNode: typeof Buffer != "undefined", newBufferFrom: function(t3, e2) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(t3, e2);
        if (typeof t3 == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(t3, e2);
      }, allocBuffer: function(t3) {
        if (Buffer.alloc)
          return Buffer.alloc(t3);
        var e2 = new Buffer(t3);
        return e2.fill(0), e2;
      }, isBuffer: function(t3) {
        return Buffer.isBuffer(t3);
      }, isStream: function(t3) {
        return t3 && typeof t3.on == "function" && typeof t3.pause == "function" && typeof t3.resume == "function";
      } };
    }, {}], 15: [function(t2, e, r2) {
      function s(t3, e2, r3) {
        var i2, n3 = u2.getTypeOf(e2), s2 = u2.extend(r3 || {}, f);
        s2.date = s2.date || new Date(), s2.compression !== null && (s2.compression = s2.compression.toUpperCase()), typeof s2.unixPermissions == "string" && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (t3 = g(t3)), s2.createFolders && (i2 = _(t3)) && b.call(this, i2, true);
        var a2 = n3 === "string" && s2.binary === false && s2.base64 === false;
        r3 && r3.binary !== void 0 || (s2.binary = !a2), (e2 instanceof d && e2.uncompressedSize === 0 || s2.dir || !e2 || e2.length === 0) && (s2.base64 = false, s2.binary = true, e2 = "", s2.compression = "STORE", n3 = "string");
        var o2 = null;
        o2 = e2 instanceof d || e2 instanceof l2 ? e2 : p2.isNode && p2.isStream(e2) ? new m(t3, e2) : u2.prepareContent(t3, e2, s2.binary, s2.optimizedBinaryString, s2.base64);
        var h2 = new c(t3, o2, s2);
        this.files[t3] = h2;
      }
      var n2 = t2("./utf8"), u2 = t2("./utils"), l2 = t2("./stream/GenericWorker"), a = t2("./stream/StreamHelper"), f = t2("./defaults"), d = t2("./compressedObject"), c = t2("./zipObject"), o = t2("./generate"), p2 = t2("./nodejsUtils"), m = t2("./nodejs/NodejsStreamInputAdapter"), _ = function(t3) {
        t3.slice(-1) === "/" && (t3 = t3.substring(0, t3.length - 1));
        var e2 = t3.lastIndexOf("/");
        return 0 < e2 ? t3.substring(0, e2) : "";
      }, g = function(t3) {
        return t3.slice(-1) !== "/" && (t3 += "/"), t3;
      }, b = function(t3, e2) {
        return e2 = e2 !== void 0 ? e2 : f.createFolders, t3 = g(t3), this.files[t3] || s.call(this, t3, null, { dir: true, createFolders: e2 }), this.files[t3];
      };
      function h(t3) {
        return Object.prototype.toString.call(t3) === "[object RegExp]";
      }
      var i = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(t3) {
        var e2, r3, i2;
        for (e2 in this.files)
          i2 = this.files[e2], (r3 = e2.slice(this.root.length, e2.length)) && e2.slice(0, this.root.length) === this.root && t3(r3, i2);
      }, filter: function(r3) {
        var i2 = [];
        return this.forEach(function(t3, e2) {
          r3(t3, e2) && i2.push(e2);
        }), i2;
      }, file: function(t3, e2, r3) {
        if (arguments.length !== 1)
          return t3 = this.root + t3, s.call(this, t3, e2, r3), this;
        if (h(t3)) {
          var i2 = t3;
          return this.filter(function(t4, e3) {
            return !e3.dir && i2.test(t4);
          });
        }
        var n3 = this.files[this.root + t3];
        return n3 && !n3.dir ? n3 : null;
      }, folder: function(r3) {
        if (!r3)
          return this;
        if (h(r3))
          return this.filter(function(t4, e3) {
            return e3.dir && r3.test(t4);
          });
        var t3 = this.root + r3, e2 = b.call(this, t3), i2 = this.clone();
        return i2.root = e2.name, i2;
      }, remove: function(r3) {
        r3 = this.root + r3;
        var t3 = this.files[r3];
        if (t3 || (r3.slice(-1) !== "/" && (r3 += "/"), t3 = this.files[r3]), t3 && !t3.dir)
          delete this.files[r3];
        else
          for (var e2 = this.filter(function(t4, e3) {
            return e3.name.slice(0, r3.length) === r3;
          }), i2 = 0; i2 < e2.length; i2++)
            delete this.files[e2[i2].name];
        return this;
      }, generate: function(t3) {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(t3) {
        var e2, r3 = {};
        try {
          if ((r3 = u2.extend(t3 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: n2.utf8encode })).type = r3.type.toLowerCase(), r3.compression = r3.compression.toUpperCase(), r3.type === "binarystring" && (r3.type = "string"), !r3.type)
            throw new Error("No output type specified.");
          u2.checkSupport(r3.type), r3.platform !== "darwin" && r3.platform !== "freebsd" && r3.platform !== "linux" && r3.platform !== "sunos" || (r3.platform = "UNIX"), r3.platform === "win32" && (r3.platform = "DOS");
          var i2 = r3.comment || this.comment || "";
          e2 = o.generateWorker(this, r3, i2);
        } catch (t4) {
          (e2 = new l2("error")).error(t4);
        }
        return new a(e2, r3.type || "string", r3.mimeType);
      }, generateAsync: function(t3, e2) {
        return this.generateInternalStream(t3).accumulate(e2);
      }, generateNodeStream: function(t3, e2) {
        return (t3 = t3 || {}).type || (t3.type = "nodebuffer"), this.generateInternalStream(t3).toNodejsStream(e2);
      } };
      e.exports = i;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t2, e, r2) {
      e.exports = t2("stream");
    }, { stream: void 0 }], 17: [function(t2, e, r2) {
      var i = t2("./DataReader");
      function n2(t3) {
        i.call(this, t3);
        for (var e2 = 0; e2 < this.data.length; e2++)
          t3[e2] = 255 & t3[e2];
      }
      t2("../utils").inherits(n2, i), n2.prototype.byteAt = function(t3) {
        return this.data[this.zero + t3];
      }, n2.prototype.lastIndexOfSignature = function(t3) {
        for (var e2 = t3.charCodeAt(0), r3 = t3.charCodeAt(1), i2 = t3.charCodeAt(2), n3 = t3.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
          if (this.data[s] === e2 && this.data[s + 1] === r3 && this.data[s + 2] === i2 && this.data[s + 3] === n3)
            return s - this.zero;
        return -1;
      }, n2.prototype.readAndCheckSignature = function(t3) {
        var e2 = t3.charCodeAt(0), r3 = t3.charCodeAt(1), i2 = t3.charCodeAt(2), n3 = t3.charCodeAt(3), s = this.readData(4);
        return e2 === s[0] && r3 === s[1] && i2 === s[2] && n3 === s[3];
      }, n2.prototype.readData = function(t3) {
        if (this.checkOffset(t3), t3 === 0)
          return [];
        var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t3);
        return this.index += t3, e2;
      }, e.exports = n2;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t2, e, r2) {
      var i = t2("../utils");
      function n2(t3) {
        this.data = t3, this.length = t3.length, this.index = 0, this.zero = 0;
      }
      n2.prototype = { checkOffset: function(t3) {
        this.checkIndex(this.index + t3);
      }, checkIndex: function(t3) {
        if (this.length < this.zero + t3 || t3 < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t3 + "). Corrupted zip ?");
      }, setIndex: function(t3) {
        this.checkIndex(t3), this.index = t3;
      }, skip: function(t3) {
        this.setIndex(this.index + t3);
      }, byteAt: function(t3) {
      }, readInt: function(t3) {
        var e2, r3 = 0;
        for (this.checkOffset(t3), e2 = this.index + t3 - 1; e2 >= this.index; e2--)
          r3 = (r3 << 8) + this.byteAt(e2);
        return this.index += t3, r3;
      }, readString: function(t3) {
        return i.transformTo("string", this.readData(t3));
      }, readData: function(t3) {
      }, lastIndexOfSignature: function(t3) {
      }, readAndCheckSignature: function(t3) {
      }, readDate: function() {
        var t3 = this.readInt(4);
        return new Date(Date.UTC(1980 + (t3 >> 25 & 127), (t3 >> 21 & 15) - 1, t3 >> 16 & 31, t3 >> 11 & 31, t3 >> 5 & 63, (31 & t3) << 1));
      } }, e.exports = n2;
    }, { "../utils": 32 }], 19: [function(t2, e, r2) {
      var i = t2("./Uint8ArrayReader");
      function n2(t3) {
        i.call(this, t3);
      }
      t2("../utils").inherits(n2, i), n2.prototype.readData = function(t3) {
        this.checkOffset(t3);
        var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t3);
        return this.index += t3, e2;
      }, e.exports = n2;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t2, e, r2) {
      var i = t2("./DataReader");
      function n2(t3) {
        i.call(this, t3);
      }
      t2("../utils").inherits(n2, i), n2.prototype.byteAt = function(t3) {
        return this.data.charCodeAt(this.zero + t3);
      }, n2.prototype.lastIndexOfSignature = function(t3) {
        return this.data.lastIndexOf(t3) - this.zero;
      }, n2.prototype.readAndCheckSignature = function(t3) {
        return t3 === this.readData(4);
      }, n2.prototype.readData = function(t3) {
        this.checkOffset(t3);
        var e2 = this.data.slice(this.zero + this.index, this.zero + this.index + t3);
        return this.index += t3, e2;
      }, e.exports = n2;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t2, e, r2) {
      var i = t2("./ArrayReader");
      function n2(t3) {
        i.call(this, t3);
      }
      t2("../utils").inherits(n2, i), n2.prototype.readData = function(t3) {
        if (this.checkOffset(t3), t3 === 0)
          return new Uint8Array(0);
        var e2 = this.data.subarray(this.zero + this.index, this.zero + this.index + t3);
        return this.index += t3, e2;
      }, e.exports = n2;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t2, e, r2) {
      var i = t2("../utils"), n2 = t2("../support"), s = t2("./ArrayReader"), a = t2("./StringReader"), o = t2("./NodeBufferReader"), h = t2("./Uint8ArrayReader");
      e.exports = function(t3) {
        var e2 = i.getTypeOf(t3);
        return i.checkSupport(e2), e2 !== "string" || n2.uint8array ? e2 === "nodebuffer" ? new o(t3) : n2.uint8array ? new h(i.transformTo("uint8array", t3)) : new s(i.transformTo("array", t3)) : new a(t3);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t2, e, r2) {
      r2.LOCAL_FILE_HEADER = "PK", r2.CENTRAL_FILE_HEADER = "PK", r2.CENTRAL_DIRECTORY_END = "PK", r2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r2.ZIP64_CENTRAL_DIRECTORY_END = "PK", r2.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(t2, e, r2) {
      var i = t2("./GenericWorker"), n2 = t2("../utils");
      function s(t3) {
        i.call(this, "ConvertWorker to " + t3), this.destType = t3;
      }
      n2.inherits(s, i), s.prototype.processChunk = function(t3) {
        this.push({ data: n2.transformTo(this.destType, t3.data), meta: t3.meta });
      }, e.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t2, e, r2) {
      var i = t2("./GenericWorker"), n2 = t2("../crc32");
      function s() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      t2("../utils").inherits(s, i), s.prototype.processChunk = function(t3) {
        this.streamInfo.crc32 = n2(t3.data, this.streamInfo.crc32 || 0), this.push(t3);
      }, e.exports = s;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t2, e, r2) {
      var i = t2("../utils"), n2 = t2("./GenericWorker");
      function s(t3) {
        n2.call(this, "DataLengthProbe for " + t3), this.propName = t3, this.withStreamInfo(t3, 0);
      }
      i.inherits(s, n2), s.prototype.processChunk = function(t3) {
        if (t3) {
          var e2 = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = e2 + t3.data.length;
        }
        n2.prototype.processChunk.call(this, t3);
      }, e.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t2, e, r2) {
      var i = t2("../utils"), n2 = t2("./GenericWorker");
      function s(t3) {
        n2.call(this, "DataWorker");
        var e2 = this;
        this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, t3.then(function(t4) {
          e2.dataIsReady = true, e2.data = t4, e2.max = t4 && t4.length || 0, e2.type = i.getTypeOf(t4), e2.isPaused || e2._tickAndRepeat();
        }, function(t4) {
          e2.error(t4);
        });
      }
      i.inherits(s, n2), s.prototype.cleanUp = function() {
        n2.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function() {
        return !!n2.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, i.delay(this._tickAndRepeat, [], this)), true);
      }, s.prototype._tickAndRepeat = function() {
        this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
      }, s.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return false;
        var t3 = null, e2 = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            t3 = this.data.substring(this.index, e2);
            break;
          case "uint8array":
            t3 = this.data.subarray(this.index, e2);
            break;
          case "array":
          case "nodebuffer":
            t3 = this.data.slice(this.index, e2);
        }
        return this.index = e2, this.push({ data: t3, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, e.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t2, e, r2) {
      function i(t3) {
        this.name = t3 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i.prototype = { push: function(t3) {
        this.emit("data", t3);
      }, end: function() {
        if (this.isFinished)
          return false;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = true;
        } catch (t3) {
          this.emit("error", t3);
        }
        return true;
      }, error: function(t3) {
        return !this.isFinished && (this.isPaused ? this.generatedError = t3 : (this.isFinished = true, this.emit("error", t3), this.previous && this.previous.error(t3), this.cleanUp()), true);
      }, on: function(t3, e2) {
        return this._listeners[t3].push(e2), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(t3, e2) {
        if (this._listeners[t3])
          for (var r3 = 0; r3 < this._listeners[t3].length; r3++)
            this._listeners[t3][r3].call(this, e2);
      }, pipe: function(t3) {
        return t3.registerPrevious(this);
      }, registerPrevious: function(t3) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = t3.streamInfo, this.mergeStreamInfo(), this.previous = t3;
        var e2 = this;
        return t3.on("data", function(t4) {
          e2.processChunk(t4);
        }), t3.on("end", function() {
          e2.end();
        }), t3.on("error", function(t4) {
          e2.error(t4);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return false;
        var t3 = this.isPaused = false;
        return this.generatedError && (this.error(this.generatedError), t3 = true), this.previous && this.previous.resume(), !t3;
      }, flush: function() {
      }, processChunk: function(t3) {
        this.push(t3);
      }, withStreamInfo: function(t3, e2) {
        return this.extraStreamInfo[t3] = e2, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var t3 in this.extraStreamInfo)
          this.extraStreamInfo.hasOwnProperty(t3) && (this.streamInfo[t3] = this.extraStreamInfo[t3]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = true, this.previous && this.previous.lock();
      }, toString: function() {
        var t3 = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + t3 : t3;
      } }, e.exports = i;
    }, {}], 29: [function(t2, e, r2) {
      var h = t2("../utils"), n2 = t2("./ConvertWorker"), s = t2("./GenericWorker"), u2 = t2("../base64"), i = t2("../support"), a = t2("../external"), o = null;
      if (i.nodestream)
        try {
          o = t2("../nodejs/NodejsStreamOutputAdapter");
        } catch (t3) {
        }
      function l2(t3, o2) {
        return new a.Promise(function(e2, r3) {
          var i2 = [], n3 = t3._internalType, s2 = t3._outputType, a2 = t3._mimeType;
          t3.on("data", function(t4, e3) {
            i2.push(t4), o2 && o2(e3);
          }).on("error", function(t4) {
            i2 = [], r3(t4);
          }).on("end", function() {
            try {
              var t4 = function(t5, e3, r4) {
                switch (t5) {
                  case "blob":
                    return h.newBlob(h.transformTo("arraybuffer", e3), r4);
                  case "base64":
                    return u2.encode(e3);
                  default:
                    return h.transformTo(t5, e3);
                }
              }(s2, function(t5, e3) {
                var r4, i3 = 0, n4 = null, s3 = 0;
                for (r4 = 0; r4 < e3.length; r4++)
                  s3 += e3[r4].length;
                switch (t5) {
                  case "string":
                    return e3.join("");
                  case "array":
                    return Array.prototype.concat.apply([], e3);
                  case "uint8array":
                    for (n4 = new Uint8Array(s3), r4 = 0; r4 < e3.length; r4++)
                      n4.set(e3[r4], i3), i3 += e3[r4].length;
                    return n4;
                  case "nodebuffer":
                    return Buffer.concat(e3);
                  default:
                    throw new Error("concat : unsupported type '" + t5 + "'");
                }
              }(n3, i2), a2);
              e2(t4);
            } catch (t5) {
              r3(t5);
            }
            i2 = [];
          }).resume();
        });
      }
      function f(t3, e2, r3) {
        var i2 = e2;
        switch (e2) {
          case "blob":
          case "arraybuffer":
            i2 = "uint8array";
            break;
          case "base64":
            i2 = "string";
        }
        try {
          this._internalType = i2, this._outputType = e2, this._mimeType = r3, h.checkSupport(i2), this._worker = t3.pipe(new n2(i2)), t3.lock();
        } catch (t4) {
          this._worker = new s("error"), this._worker.error(t4);
        }
      }
      f.prototype = { accumulate: function(t3) {
        return l2(this, t3);
      }, on: function(t3, e2) {
        var r3 = this;
        return t3 === "data" ? this._worker.on(t3, function(t4) {
          e2.call(r3, t4.data, t4.meta);
        }) : this._worker.on(t3, function() {
          h.delay(e2, arguments, r3);
        }), this;
      }, resume: function() {
        return h.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(t3) {
        if (h.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new o(this, { objectMode: this._outputType !== "nodebuffer" }, t3);
      } }, e.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t2, e, r2) {
      if (r2.base64 = true, r2.array = true, r2.string = true, r2.arraybuffer = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined", r2.nodebuffer = typeof Buffer != "undefined", r2.uint8array = typeof Uint8Array != "undefined", typeof ArrayBuffer == "undefined")
        r2.blob = false;
      else {
        var i = new ArrayBuffer(0);
        try {
          r2.blob = new Blob([i], { type: "application/zip" }).size === 0;
        } catch (t3) {
          try {
            var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            n2.append(i), r2.blob = n2.getBlob("application/zip").size === 0;
          } catch (t4) {
            r2.blob = false;
          }
        }
      }
      try {
        r2.nodestream = !!t2("readable-stream").Readable;
      } catch (t3) {
        r2.nodestream = false;
      }
    }, { "readable-stream": 16 }], 31: [function(t2, e, s) {
      for (var o = t2("./utils"), h = t2("./support"), r2 = t2("./nodejsUtils"), i = t2("./stream/GenericWorker"), u2 = new Array(256), n2 = 0; n2 < 256; n2++)
        u2[n2] = 252 <= n2 ? 6 : 248 <= n2 ? 5 : 240 <= n2 ? 4 : 224 <= n2 ? 3 : 192 <= n2 ? 2 : 1;
      u2[254] = u2[254] = 1;
      function a() {
        i.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function l2() {
        i.call(this, "utf-8 encode");
      }
      s.utf8encode = function(t3) {
        return h.nodebuffer ? r2.newBufferFrom(t3, "utf-8") : function(t4) {
          var e2, r3, i2, n3, s2, a2 = t4.length, o2 = 0;
          for (n3 = 0; n3 < a2; n3++)
            (64512 & (r3 = t4.charCodeAt(n3))) == 55296 && n3 + 1 < a2 && (64512 & (i2 = t4.charCodeAt(n3 + 1))) == 56320 && (r3 = 65536 + (r3 - 55296 << 10) + (i2 - 56320), n3++), o2 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
          for (e2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), n3 = s2 = 0; s2 < o2; n3++)
            (64512 & (r3 = t4.charCodeAt(n3))) == 55296 && n3 + 1 < a2 && (64512 & (i2 = t4.charCodeAt(n3 + 1))) == 56320 && (r3 = 65536 + (r3 - 55296 << 10) + (i2 - 56320), n3++), r3 < 128 ? e2[s2++] = r3 : (r3 < 2048 ? e2[s2++] = 192 | r3 >>> 6 : (r3 < 65536 ? e2[s2++] = 224 | r3 >>> 12 : (e2[s2++] = 240 | r3 >>> 18, e2[s2++] = 128 | r3 >>> 12 & 63), e2[s2++] = 128 | r3 >>> 6 & 63), e2[s2++] = 128 | 63 & r3);
          return e2;
        }(t3);
      }, s.utf8decode = function(t3) {
        return h.nodebuffer ? o.transformTo("nodebuffer", t3).toString("utf-8") : function(t4) {
          var e2, r3, i2, n3, s2 = t4.length, a2 = new Array(2 * s2);
          for (e2 = r3 = 0; e2 < s2; )
            if ((i2 = t4[e2++]) < 128)
              a2[r3++] = i2;
            else if (4 < (n3 = u2[i2]))
              a2[r3++] = 65533, e2 += n3 - 1;
            else {
              for (i2 &= n3 === 2 ? 31 : n3 === 3 ? 15 : 7; 1 < n3 && e2 < s2; )
                i2 = i2 << 6 | 63 & t4[e2++], n3--;
              1 < n3 ? a2[r3++] = 65533 : i2 < 65536 ? a2[r3++] = i2 : (i2 -= 65536, a2[r3++] = 55296 | i2 >> 10 & 1023, a2[r3++] = 56320 | 1023 & i2);
            }
          return a2.length !== r3 && (a2.subarray ? a2 = a2.subarray(0, r3) : a2.length = r3), o.applyFromCharCode(a2);
        }(t3 = o.transformTo(h.uint8array ? "uint8array" : "array", t3));
      }, o.inherits(a, i), a.prototype.processChunk = function(t3) {
        var e2 = o.transformTo(h.uint8array ? "uint8array" : "array", t3.data);
        if (this.leftOver && this.leftOver.length) {
          if (h.uint8array) {
            var r3 = e2;
            (e2 = new Uint8Array(r3.length + this.leftOver.length)).set(this.leftOver, 0), e2.set(r3, this.leftOver.length);
          } else
            e2 = this.leftOver.concat(e2);
          this.leftOver = null;
        }
        var i2 = function(t4, e3) {
          var r4;
          for ((e3 = e3 || t4.length) > t4.length && (e3 = t4.length), r4 = e3 - 1; 0 <= r4 && (192 & t4[r4]) == 128; )
            r4--;
          return r4 < 0 ? e3 : r4 === 0 ? e3 : r4 + u2[t4[r4]] > e3 ? r4 : e3;
        }(e2), n3 = e2;
        i2 !== e2.length && (h.uint8array ? (n3 = e2.subarray(0, i2), this.leftOver = e2.subarray(i2, e2.length)) : (n3 = e2.slice(0, i2), this.leftOver = e2.slice(i2, e2.length))), this.push({ data: s.utf8decode(n3), meta: t3.meta });
      }, a.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l2, i), l2.prototype.processChunk = function(t3) {
        this.push({ data: s.utf8encode(t3.data), meta: t3.meta });
      }, s.Utf8EncodeWorker = l2;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t2, e, a) {
      var o = t2("./support"), h = t2("./base64"), r2 = t2("./nodejsUtils"), i = t2("set-immediate-shim"), u2 = t2("./external");
      function n2(t3) {
        return t3;
      }
      function l2(t3, e2) {
        for (var r3 = 0; r3 < t3.length; ++r3)
          e2[r3] = 255 & t3.charCodeAt(r3);
        return e2;
      }
      a.newBlob = function(e2, r3) {
        a.checkSupport("blob");
        try {
          return new Blob([e2], { type: r3 });
        } catch (t3) {
          try {
            var i2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return i2.append(e2), i2.getBlob(r3);
          } catch (t4) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var s = { stringifyByChunk: function(t3, e2, r3) {
        var i2 = [], n3 = 0, s2 = t3.length;
        if (s2 <= r3)
          return String.fromCharCode.apply(null, t3);
        for (; n3 < s2; )
          e2 === "array" || e2 === "nodebuffer" ? i2.push(String.fromCharCode.apply(null, t3.slice(n3, Math.min(n3 + r3, s2)))) : i2.push(String.fromCharCode.apply(null, t3.subarray(n3, Math.min(n3 + r3, s2)))), n3 += r3;
        return i2.join("");
      }, stringifyByChar: function(t3) {
        for (var e2 = "", r3 = 0; r3 < t3.length; r3++)
          e2 += String.fromCharCode(t3[r3]);
        return e2;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch (t3) {
          return false;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && String.fromCharCode.apply(null, r2.allocBuffer(1)).length === 1;
        } catch (t3) {
          return false;
        }
      }() } };
      function f(t3) {
        var e2 = 65536, r3 = a.getTypeOf(t3), i2 = true;
        if (r3 === "uint8array" ? i2 = s.applyCanBeUsed.uint8array : r3 === "nodebuffer" && (i2 = s.applyCanBeUsed.nodebuffer), i2)
          for (; 1 < e2; )
            try {
              return s.stringifyByChunk(t3, r3, e2);
            } catch (t4) {
              e2 = Math.floor(e2 / 2);
            }
        return s.stringifyByChar(t3);
      }
      function d(t3, e2) {
        for (var r3 = 0; r3 < t3.length; r3++)
          e2[r3] = t3[r3];
        return e2;
      }
      a.applyFromCharCode = f;
      var c = {};
      c.string = { string: n2, array: function(t3) {
        return l2(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return c.string.uint8array(t3).buffer;
      }, uint8array: function(t3) {
        return l2(t3, new Uint8Array(t3.length));
      }, nodebuffer: function(t3) {
        return l2(t3, r2.allocBuffer(t3.length));
      } }, c.array = { string: f, array: n2, arraybuffer: function(t3) {
        return new Uint8Array(t3).buffer;
      }, uint8array: function(t3) {
        return new Uint8Array(t3);
      }, nodebuffer: function(t3) {
        return r2.newBufferFrom(t3);
      } }, c.arraybuffer = { string: function(t3) {
        return f(new Uint8Array(t3));
      }, array: function(t3) {
        return d(new Uint8Array(t3), new Array(t3.byteLength));
      }, arraybuffer: n2, uint8array: function(t3) {
        return new Uint8Array(t3);
      }, nodebuffer: function(t3) {
        return r2.newBufferFrom(new Uint8Array(t3));
      } }, c.uint8array = { string: f, array: function(t3) {
        return d(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return t3.buffer;
      }, uint8array: n2, nodebuffer: function(t3) {
        return r2.newBufferFrom(t3);
      } }, c.nodebuffer = { string: f, array: function(t3) {
        return d(t3, new Array(t3.length));
      }, arraybuffer: function(t3) {
        return c.nodebuffer.uint8array(t3).buffer;
      }, uint8array: function(t3) {
        return d(t3, new Uint8Array(t3.length));
      }, nodebuffer: n2 }, a.transformTo = function(t3, e2) {
        if (e2 = e2 || "", !t3)
          return e2;
        a.checkSupport(t3);
        var r3 = a.getTypeOf(e2);
        return c[r3][t3](e2);
      }, a.getTypeOf = function(t3) {
        return typeof t3 == "string" ? "string" : Object.prototype.toString.call(t3) === "[object Array]" ? "array" : o.nodebuffer && r2.isBuffer(t3) ? "nodebuffer" : o.uint8array && t3 instanceof Uint8Array ? "uint8array" : o.arraybuffer && t3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function(t3) {
        if (!o[t3.toLowerCase()])
          throw new Error(t3 + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(t3) {
        var e2, r3, i2 = "";
        for (r3 = 0; r3 < (t3 || "").length; r3++)
          i2 += "\\x" + ((e2 = t3.charCodeAt(r3)) < 16 ? "0" : "") + e2.toString(16).toUpperCase();
        return i2;
      }, a.delay = function(t3, e2, r3) {
        i(function() {
          t3.apply(r3 || null, e2 || []);
        });
      }, a.inherits = function(t3, e2) {
        function r3() {
        }
        r3.prototype = e2.prototype, t3.prototype = new r3();
      }, a.extend = function() {
        var t3, e2, r3 = {};
        for (t3 = 0; t3 < arguments.length; t3++)
          for (e2 in arguments[t3])
            arguments[t3].hasOwnProperty(e2) && r3[e2] === void 0 && (r3[e2] = arguments[t3][e2]);
        return r3;
      }, a.prepareContent = function(r3, t3, i2, n3, s2) {
        return u2.Promise.resolve(t3).then(function(i3) {
          return o.blob && (i3 instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(i3)) !== -1) && typeof FileReader != "undefined" ? new u2.Promise(function(e2, r4) {
            var t4 = new FileReader();
            t4.onload = function(t5) {
              e2(t5.target.result);
            }, t4.onerror = function(t5) {
              r4(t5.target.error);
            }, t4.readAsArrayBuffer(i3);
          }) : i3;
        }).then(function(t4) {
          var e2 = a.getTypeOf(t4);
          return e2 ? (e2 === "arraybuffer" ? t4 = a.transformTo("uint8array", t4) : e2 === "string" && (s2 ? t4 = h.decode(t4) : i2 && n3 !== true && (t4 = function(t5) {
            return l2(t5, o.uint8array ? new Uint8Array(t5.length) : new Array(t5.length));
          }(t4))), t4) : u2.Promise.reject(new Error("Can't read the data of '" + r3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, "set-immediate-shim": 54 }], 33: [function(t2, e, r2) {
      var i = t2("./reader/readerFor"), n2 = t2("./utils"), s = t2("./signature"), a = t2("./zipEntry"), o = (t2("./utf8"), t2("./support"));
      function h(t3) {
        this.files = [], this.loadOptions = t3;
      }
      h.prototype = { checkSignature: function(t3) {
        if (!this.reader.readAndCheckSignature(t3)) {
          this.reader.index -= 4;
          var e2 = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + n2.pretty(e2) + ", expected " + n2.pretty(t3) + ")");
        }
      }, isSignature: function(t3, e2) {
        var r3 = this.reader.index;
        this.reader.setIndex(t3);
        var i2 = this.reader.readString(4) === e2;
        return this.reader.setIndex(r3), i2;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var t3 = this.reader.readData(this.zipCommentLength), e2 = o.uint8array ? "uint8array" : "array", r3 = n2.transformTo(e2, t3);
        this.zipComment = this.loadOptions.decodeFileName(r3);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var t3, e2, r3, i2 = this.zip64EndOfCentralSize - 44; 0 < i2; )
          t3 = this.reader.readInt(2), e2 = this.reader.readInt(4), r3 = this.reader.readData(e2), this.zip64ExtensibleData[t3] = { id: t3, length: e2, value: r3 };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var t3, e2;
        for (t3 = 0; t3 < this.files.length; t3++)
          e2 = this.files[t3], this.reader.setIndex(e2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), e2.readLocalPart(this.reader), e2.handleUTF8(), e2.processAttributes();
      }, readCentralDir: function() {
        var t3;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); )
          (t3 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t3);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var t3 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
        if (t3 < 0)
          throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
        this.reader.setIndex(t3);
        var e2 = t3;
        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n2.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n2.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n2.MAX_VALUE_16BITS || this.centralDirRecords === n2.MAX_VALUE_16BITS || this.centralDirSize === n2.MAX_VALUE_32BITS || this.centralDirOffset === n2.MAX_VALUE_32BITS) {
          if (this.zip64 = true, (t3 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(t3), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var r3 = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (r3 += 20, r3 += 12 + this.zip64EndOfCentralSize);
        var i2 = e2 - r3;
        if (0 < i2)
          this.isSignature(e2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = i2);
        else if (i2 < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(i2) + " bytes.");
      }, prepareReader: function(t3) {
        this.reader = i(t3);
      }, load: function(t3) {
        this.prepareReader(t3), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, e.exports = h;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utf8": 31, "./utils": 32, "./zipEntry": 34 }], 34: [function(t2, e, r2) {
      var i = t2("./reader/readerFor"), s = t2("./utils"), n2 = t2("./compressedObject"), a = t2("./crc32"), o = t2("./utf8"), h = t2("./compressions"), u2 = t2("./support");
      function l2(t3, e2) {
        this.options = t3, this.loadOptions = e2;
      }
      l2.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(t3) {
        var e2, r3;
        if (t3.skip(22), this.fileNameLength = t3.readInt(2), r3 = t3.readInt(2), this.fileName = t3.readData(this.fileNameLength), t3.skip(r3), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((e2 = function(t4) {
          for (var e3 in h)
            if (h.hasOwnProperty(e3) && h[e3].magic === t4)
              return h[e3];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new n2(this.compressedSize, this.uncompressedSize, this.crc32, e2, t3.readData(this.compressedSize));
      }, readCentralPart: function(t3) {
        this.versionMadeBy = t3.readInt(2), t3.skip(2), this.bitFlag = t3.readInt(2), this.compressionMethod = t3.readString(2), this.date = t3.readDate(), this.crc32 = t3.readInt(4), this.compressedSize = t3.readInt(4), this.uncompressedSize = t3.readInt(4);
        var e2 = t3.readInt(2);
        if (this.extraFieldsLength = t3.readInt(2), this.fileCommentLength = t3.readInt(2), this.diskNumberStart = t3.readInt(2), this.internalFileAttributes = t3.readInt(2), this.externalFileAttributes = t3.readInt(4), this.localHeaderOffset = t3.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        t3.skip(e2), this.readExtraFields(t3), this.parseZIP64ExtraField(t3), this.fileComment = t3.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var t3 = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), t3 == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), t3 == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = true);
      }, parseZIP64ExtraField: function(t3) {
        if (this.extraFields[1]) {
          var e2 = i(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
        }
      }, readExtraFields: function(t3) {
        var e2, r3, i2, n3 = t3.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); t3.index + 4 < n3; )
          e2 = t3.readInt(2), r3 = t3.readInt(2), i2 = t3.readData(r3), this.extraFields[e2] = { id: e2, length: r3, value: i2 };
        t3.setIndex(n3);
      }, handleUTF8: function() {
        var t3 = u2.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
        else {
          var e2 = this.findExtraFieldUnicodePath();
          if (e2 !== null)
            this.fileNameStr = e2;
          else {
            var r3 = s.transformTo(t3, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(r3);
          }
          var i2 = this.findExtraFieldUnicodeComment();
          if (i2 !== null)
            this.fileCommentStr = i2;
          else {
            var n3 = s.transformTo(t3, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(n3);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var t3 = this.extraFields[28789];
        if (t3) {
          var e2 = i(t3.value);
          return e2.readInt(1) !== 1 ? null : a(this.fileName) !== e2.readInt(4) ? null : o.utf8decode(e2.readData(t3.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var t3 = this.extraFields[25461];
        if (t3) {
          var e2 = i(t3.value);
          return e2.readInt(1) !== 1 ? null : a(this.fileComment) !== e2.readInt(4) ? null : o.utf8decode(e2.readData(t3.length - 5));
        }
        return null;
      } }, e.exports = l2;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t2, e, r2) {
      function i(t3, e2, r3) {
        this.name = t3, this.dir = r3.dir, this.date = r3.date, this.comment = r3.comment, this.unixPermissions = r3.unixPermissions, this.dosPermissions = r3.dosPermissions, this._data = e2, this._dataBinary = r3.binary, this.options = { compression: r3.compression, compressionOptions: r3.compressionOptions };
      }
      var s = t2("./stream/StreamHelper"), n2 = t2("./stream/DataWorker"), a = t2("./utf8"), o = t2("./compressedObject"), h = t2("./stream/GenericWorker");
      i.prototype = { internalStream: function(t3) {
        var e2 = null, r3 = "string";
        try {
          if (!t3)
            throw new Error("No output type specified.");
          var i2 = (r3 = t3.toLowerCase()) === "string" || r3 === "text";
          r3 !== "binarystring" && r3 !== "text" || (r3 = "string"), e2 = this._decompressWorker();
          var n3 = !this._dataBinary;
          n3 && !i2 && (e2 = e2.pipe(new a.Utf8EncodeWorker())), !n3 && i2 && (e2 = e2.pipe(new a.Utf8DecodeWorker()));
        } catch (t4) {
          (e2 = new h("error")).error(t4);
        }
        return new s(e2, r3, "");
      }, async: function(t3, e2) {
        return this.internalStream(t3).accumulate(e2);
      }, nodeStream: function(t3, e2) {
        return this.internalStream(t3 || "nodebuffer").toNodejsStream(e2);
      }, _compressWorker: function(t3, e2) {
        if (this._data instanceof o && this._data.compression.magic === t3.magic)
          return this._data.getCompressedWorker();
        var r3 = this._decompressWorker();
        return this._dataBinary || (r3 = r3.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r3, t3, e2);
      }, _decompressWorker: function() {
        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new n2(this._data);
      } };
      for (var u2 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l2 = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < u2.length; f++)
        i.prototype[u2[f]] = l2;
      e.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t2, l2, e) {
      (function(e2) {
        var r2, i, t3 = e2.MutationObserver || e2.WebKitMutationObserver;
        if (t3) {
          var n2 = 0, s = new t3(u2), a = e2.document.createTextNode("");
          s.observe(a, { characterData: true }), r2 = function() {
            a.data = n2 = ++n2 % 2;
          };
        } else if (e2.setImmediate || e2.MessageChannel === void 0)
          r2 = "document" in e2 && "onreadystatechange" in e2.document.createElement("script") ? function() {
            var t4 = e2.document.createElement("script");
            t4.onreadystatechange = function() {
              u2(), t4.onreadystatechange = null, t4.parentNode.removeChild(t4), t4 = null;
            }, e2.document.documentElement.appendChild(t4);
          } : function() {
            setTimeout(u2, 0);
          };
        else {
          var o = new e2.MessageChannel();
          o.port1.onmessage = u2, r2 = function() {
            o.port2.postMessage(0);
          };
        }
        var h = [];
        function u2() {
          var t4, e3;
          i = true;
          for (var r3 = h.length; r3; ) {
            for (e3 = h, h = [], t4 = -1; ++t4 < r3; )
              e3[t4]();
            r3 = h.length;
          }
          i = false;
        }
        l2.exports = function(t4) {
          h.push(t4) !== 1 || i || r2();
        };
      }).call(this, typeof commonjsGlobal != "undefined" ? commonjsGlobal : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
    }, {}], 37: [function(t2, e, r2) {
      var n2 = t2("immediate");
      function u2() {
      }
      var l2 = {}, s = ["REJECTED"], a = ["FULFILLED"], i = ["PENDING"];
      function o(t3) {
        if (typeof t3 != "function")
          throw new TypeError("resolver must be a function");
        this.state = i, this.queue = [], this.outcome = void 0, t3 !== u2 && c(this, t3);
      }
      function h(t3, e2, r3) {
        this.promise = t3, typeof e2 == "function" && (this.onFulfilled = e2, this.callFulfilled = this.otherCallFulfilled), typeof r3 == "function" && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
      }
      function f(e2, r3, i2) {
        n2(function() {
          var t3;
          try {
            t3 = r3(i2);
          } catch (t4) {
            return l2.reject(e2, t4);
          }
          t3 === e2 ? l2.reject(e2, new TypeError("Cannot resolve promise with itself")) : l2.resolve(e2, t3);
        });
      }
      function d(t3) {
        var e2 = t3 && t3.then;
        if (t3 && (typeof t3 == "object" || typeof t3 == "function") && typeof e2 == "function")
          return function() {
            e2.apply(t3, arguments);
          };
      }
      function c(e2, t3) {
        var r3 = false;
        function i2(t4) {
          r3 || (r3 = true, l2.reject(e2, t4));
        }
        function n3(t4) {
          r3 || (r3 = true, l2.resolve(e2, t4));
        }
        var s2 = p2(function() {
          t3(n3, i2);
        });
        s2.status === "error" && i2(s2.value);
      }
      function p2(t3, e2) {
        var r3 = {};
        try {
          r3.value = t3(e2), r3.status = "success";
        } catch (t4) {
          r3.status = "error", r3.value = t4;
        }
        return r3;
      }
      (e.exports = o).prototype.finally = function(e2) {
        if (typeof e2 != "function")
          return this;
        var r3 = this.constructor;
        return this.then(function(t3) {
          return r3.resolve(e2()).then(function() {
            return t3;
          });
        }, function(t3) {
          return r3.resolve(e2()).then(function() {
            throw t3;
          });
        });
      }, o.prototype.catch = function(t3) {
        return this.then(null, t3);
      }, o.prototype.then = function(t3, e2) {
        if (typeof t3 != "function" && this.state === a || typeof e2 != "function" && this.state === s)
          return this;
        var r3 = new this.constructor(u2);
        this.state !== i ? f(r3, this.state === a ? t3 : e2, this.outcome) : this.queue.push(new h(r3, t3, e2));
        return r3;
      }, h.prototype.callFulfilled = function(t3) {
        l2.resolve(this.promise, t3);
      }, h.prototype.otherCallFulfilled = function(t3) {
        f(this.promise, this.onFulfilled, t3);
      }, h.prototype.callRejected = function(t3) {
        l2.reject(this.promise, t3);
      }, h.prototype.otherCallRejected = function(t3) {
        f(this.promise, this.onRejected, t3);
      }, l2.resolve = function(t3, e2) {
        var r3 = p2(d, e2);
        if (r3.status === "error")
          return l2.reject(t3, r3.value);
        var i2 = r3.value;
        if (i2)
          c(t3, i2);
        else {
          t3.state = a, t3.outcome = e2;
          for (var n3 = -1, s2 = t3.queue.length; ++n3 < s2; )
            t3.queue[n3].callFulfilled(e2);
        }
        return t3;
      }, l2.reject = function(t3, e2) {
        t3.state = s, t3.outcome = e2;
        for (var r3 = -1, i2 = t3.queue.length; ++r3 < i2; )
          t3.queue[r3].callRejected(e2);
        return t3;
      }, o.resolve = function(t3) {
        if (t3 instanceof this)
          return t3;
        return l2.resolve(new this(u2), t3);
      }, o.reject = function(t3) {
        var e2 = new this(u2);
        return l2.reject(e2, t3);
      }, o.all = function(t3) {
        var r3 = this;
        if (Object.prototype.toString.call(t3) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var i2 = t3.length, n3 = false;
        if (!i2)
          return this.resolve([]);
        var s2 = new Array(i2), a2 = 0, e2 = -1, o2 = new this(u2);
        for (; ++e2 < i2; )
          h2(t3[e2], e2);
        return o2;
        function h2(t4, e3) {
          r3.resolve(t4).then(function(t5) {
            s2[e3] = t5, ++a2 !== i2 || n3 || (n3 = true, l2.resolve(o2, s2));
          }, function(t5) {
            n3 || (n3 = true, l2.reject(o2, t5));
          });
        }
      }, o.race = function(t3) {
        var e2 = this;
        if (Object.prototype.toString.call(t3) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var r3 = t3.length, i2 = false;
        if (!r3)
          return this.resolve([]);
        var n3 = -1, s2 = new this(u2);
        for (; ++n3 < r3; )
          a2 = t3[n3], e2.resolve(a2).then(function(t4) {
            i2 || (i2 = true, l2.resolve(s2, t4));
          }, function(t4) {
            i2 || (i2 = true, l2.reject(s2, t4));
          });
        var a2;
        return s2;
      };
    }, { immediate: 36 }], 38: [function(t2, e, r2) {
      var i = {};
      (0, t2("./lib/utils/common").assign)(i, t2("./lib/deflate"), t2("./lib/inflate"), t2("./lib/zlib/constants")), e.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t2, e, r2) {
      var a = t2("./zlib/deflate"), o = t2("./utils/common"), h = t2("./utils/strings"), n2 = t2("./zlib/messages"), s = t2("./zlib/zstream"), u2 = Object.prototype.toString, l2 = 0, f = -1, d = 0, c = 8;
      function p2(t3) {
        if (!(this instanceof p2))
          return new p2(t3);
        this.options = o.assign({ level: f, method: c, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: d, to: "" }, t3 || {});
        var e2 = this.options;
        e2.raw && 0 < e2.windowBits ? e2.windowBits = -e2.windowBits : e2.gzip && 0 < e2.windowBits && e2.windowBits < 16 && (e2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r3 = a.deflateInit2(this.strm, e2.level, e2.method, e2.windowBits, e2.memLevel, e2.strategy);
        if (r3 !== l2)
          throw new Error(n2[r3]);
        if (e2.header && a.deflateSetHeader(this.strm, e2.header), e2.dictionary) {
          var i2;
          if (i2 = typeof e2.dictionary == "string" ? h.string2buf(e2.dictionary) : u2.call(e2.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e2.dictionary) : e2.dictionary, (r3 = a.deflateSetDictionary(this.strm, i2)) !== l2)
            throw new Error(n2[r3]);
          this._dict_set = true;
        }
      }
      function i(t3, e2) {
        var r3 = new p2(e2);
        if (r3.push(t3, true), r3.err)
          throw r3.msg || n2[r3.err];
        return r3.result;
      }
      p2.prototype.push = function(t3, e2) {
        var r3, i2, n3 = this.strm, s2 = this.options.chunkSize;
        if (this.ended)
          return false;
        i2 = e2 === ~~e2 ? e2 : e2 === true ? 4 : 0, typeof t3 == "string" ? n3.input = h.string2buf(t3) : u2.call(t3) === "[object ArrayBuffer]" ? n3.input = new Uint8Array(t3) : n3.input = t3, n3.next_in = 0, n3.avail_in = n3.input.length;
        do {
          if (n3.avail_out === 0 && (n3.output = new o.Buf8(s2), n3.next_out = 0, n3.avail_out = s2), (r3 = a.deflate(n3, i2)) !== 1 && r3 !== l2)
            return this.onEnd(r3), !(this.ended = true);
          n3.avail_out !== 0 && (n3.avail_in !== 0 || i2 !== 4 && i2 !== 2) || (this.options.to === "string" ? this.onData(h.buf2binstring(o.shrinkBuf(n3.output, n3.next_out))) : this.onData(o.shrinkBuf(n3.output, n3.next_out)));
        } while ((0 < n3.avail_in || n3.avail_out === 0) && r3 !== 1);
        return i2 === 4 ? (r3 = a.deflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === l2) : i2 !== 2 || (this.onEnd(l2), !(n3.avail_out = 0));
      }, p2.prototype.onData = function(t3) {
        this.chunks.push(t3);
      }, p2.prototype.onEnd = function(t3) {
        t3 === l2 && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t3, this.msg = this.strm.msg;
      }, r2.Deflate = p2, r2.deflate = i, r2.deflateRaw = function(t3, e2) {
        return (e2 = e2 || {}).raw = true, i(t3, e2);
      }, r2.gzip = function(t3, e2) {
        return (e2 = e2 || {}).gzip = true, i(t3, e2);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t2, e, r2) {
      var d = t2("./zlib/inflate"), c = t2("./utils/common"), p2 = t2("./utils/strings"), m = t2("./zlib/constants"), i = t2("./zlib/messages"), n2 = t2("./zlib/zstream"), s = t2("./zlib/gzheader"), _ = Object.prototype.toString;
      function a(t3) {
        if (!(this instanceof a))
          return new a(t3);
        this.options = c.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t3 || {});
        var e2 = this.options;
        e2.raw && 0 <= e2.windowBits && e2.windowBits < 16 && (e2.windowBits = -e2.windowBits, e2.windowBits === 0 && (e2.windowBits = -15)), !(0 <= e2.windowBits && e2.windowBits < 16) || t3 && t3.windowBits || (e2.windowBits += 32), 15 < e2.windowBits && e2.windowBits < 48 && (15 & e2.windowBits) == 0 && (e2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new n2(), this.strm.avail_out = 0;
        var r3 = d.inflateInit2(this.strm, e2.windowBits);
        if (r3 !== m.Z_OK)
          throw new Error(i[r3]);
        this.header = new s(), d.inflateGetHeader(this.strm, this.header);
      }
      function o(t3, e2) {
        var r3 = new a(e2);
        if (r3.push(t3, true), r3.err)
          throw r3.msg || i[r3.err];
        return r3.result;
      }
      a.prototype.push = function(t3, e2) {
        var r3, i2, n3, s2, a2, o2, h = this.strm, u2 = this.options.chunkSize, l2 = this.options.dictionary, f = false;
        if (this.ended)
          return false;
        i2 = e2 === ~~e2 ? e2 : e2 === true ? m.Z_FINISH : m.Z_NO_FLUSH, typeof t3 == "string" ? h.input = p2.binstring2buf(t3) : _.call(t3) === "[object ArrayBuffer]" ? h.input = new Uint8Array(t3) : h.input = t3, h.next_in = 0, h.avail_in = h.input.length;
        do {
          if (h.avail_out === 0 && (h.output = new c.Buf8(u2), h.next_out = 0, h.avail_out = u2), (r3 = d.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l2 && (o2 = typeof l2 == "string" ? p2.string2buf(l2) : _.call(l2) === "[object ArrayBuffer]" ? new Uint8Array(l2) : l2, r3 = d.inflateSetDictionary(this.strm, o2)), r3 === m.Z_BUF_ERROR && f === true && (r3 = m.Z_OK, f = false), r3 !== m.Z_STREAM_END && r3 !== m.Z_OK)
            return this.onEnd(r3), !(this.ended = true);
          h.next_out && (h.avail_out !== 0 && r3 !== m.Z_STREAM_END && (h.avail_in !== 0 || i2 !== m.Z_FINISH && i2 !== m.Z_SYNC_FLUSH) || (this.options.to === "string" ? (n3 = p2.utf8border(h.output, h.next_out), s2 = h.next_out - n3, a2 = p2.buf2string(h.output, n3), h.next_out = s2, h.avail_out = u2 - s2, s2 && c.arraySet(h.output, h.output, n3, s2, 0), this.onData(a2)) : this.onData(c.shrinkBuf(h.output, h.next_out)))), h.avail_in === 0 && h.avail_out === 0 && (f = true);
        } while ((0 < h.avail_in || h.avail_out === 0) && r3 !== m.Z_STREAM_END);
        return r3 === m.Z_STREAM_END && (i2 = m.Z_FINISH), i2 === m.Z_FINISH ? (r3 = d.inflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === m.Z_OK) : i2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
      }, a.prototype.onData = function(t3) {
        this.chunks.push(t3);
      }, a.prototype.onEnd = function(t3) {
        t3 === m.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = t3, this.msg = this.strm.msg;
      }, r2.Inflate = a, r2.inflate = o, r2.inflateRaw = function(t3, e2) {
        return (e2 = e2 || {}).raw = true, o(t3, e2);
      }, r2.ungzip = o;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t2, e, r2) {
      var i = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
      r2.assign = function(t3) {
        for (var e2 = Array.prototype.slice.call(arguments, 1); e2.length; ) {
          var r3 = e2.shift();
          if (r3) {
            if (typeof r3 != "object")
              throw new TypeError(r3 + "must be non-object");
            for (var i2 in r3)
              r3.hasOwnProperty(i2) && (t3[i2] = r3[i2]);
          }
        }
        return t3;
      }, r2.shrinkBuf = function(t3, e2) {
        return t3.length === e2 ? t3 : t3.subarray ? t3.subarray(0, e2) : (t3.length = e2, t3);
      };
      var n2 = { arraySet: function(t3, e2, r3, i2, n3) {
        if (e2.subarray && t3.subarray)
          t3.set(e2.subarray(r3, r3 + i2), n3);
        else
          for (var s2 = 0; s2 < i2; s2++)
            t3[n3 + s2] = e2[r3 + s2];
      }, flattenChunks: function(t3) {
        var e2, r3, i2, n3, s2, a;
        for (e2 = i2 = 0, r3 = t3.length; e2 < r3; e2++)
          i2 += t3[e2].length;
        for (a = new Uint8Array(i2), e2 = n3 = 0, r3 = t3.length; e2 < r3; e2++)
          s2 = t3[e2], a.set(s2, n3), n3 += s2.length;
        return a;
      } }, s = { arraySet: function(t3, e2, r3, i2, n3) {
        for (var s2 = 0; s2 < i2; s2++)
          t3[n3 + s2] = e2[r3 + s2];
      }, flattenChunks: function(t3) {
        return [].concat.apply([], t3);
      } };
      r2.setTyped = function(t3) {
        t3 ? (r2.Buf8 = Uint8Array, r2.Buf16 = Uint16Array, r2.Buf32 = Int32Array, r2.assign(r2, n2)) : (r2.Buf8 = Array, r2.Buf16 = Array, r2.Buf32 = Array, r2.assign(r2, s));
      }, r2.setTyped(i);
    }, {}], 42: [function(t2, e, r2) {
      var h = t2("./common"), n2 = true, s = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (t3) {
        n2 = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t3) {
        s = false;
      }
      for (var u2 = new h.Buf8(256), i = 0; i < 256; i++)
        u2[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
      function l2(t3, e2) {
        if (e2 < 65537 && (t3.subarray && s || !t3.subarray && n2))
          return String.fromCharCode.apply(null, h.shrinkBuf(t3, e2));
        for (var r3 = "", i2 = 0; i2 < e2; i2++)
          r3 += String.fromCharCode(t3[i2]);
        return r3;
      }
      u2[254] = u2[254] = 1, r2.string2buf = function(t3) {
        var e2, r3, i2, n3, s2, a = t3.length, o = 0;
        for (n3 = 0; n3 < a; n3++)
          (64512 & (r3 = t3.charCodeAt(n3))) == 55296 && n3 + 1 < a && (64512 & (i2 = t3.charCodeAt(n3 + 1))) == 56320 && (r3 = 65536 + (r3 - 55296 << 10) + (i2 - 56320), n3++), o += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
        for (e2 = new h.Buf8(o), n3 = s2 = 0; s2 < o; n3++)
          (64512 & (r3 = t3.charCodeAt(n3))) == 55296 && n3 + 1 < a && (64512 & (i2 = t3.charCodeAt(n3 + 1))) == 56320 && (r3 = 65536 + (r3 - 55296 << 10) + (i2 - 56320), n3++), r3 < 128 ? e2[s2++] = r3 : (r3 < 2048 ? e2[s2++] = 192 | r3 >>> 6 : (r3 < 65536 ? e2[s2++] = 224 | r3 >>> 12 : (e2[s2++] = 240 | r3 >>> 18, e2[s2++] = 128 | r3 >>> 12 & 63), e2[s2++] = 128 | r3 >>> 6 & 63), e2[s2++] = 128 | 63 & r3);
        return e2;
      }, r2.buf2binstring = function(t3) {
        return l2(t3, t3.length);
      }, r2.binstring2buf = function(t3) {
        for (var e2 = new h.Buf8(t3.length), r3 = 0, i2 = e2.length; r3 < i2; r3++)
          e2[r3] = t3.charCodeAt(r3);
        return e2;
      }, r2.buf2string = function(t3, e2) {
        var r3, i2, n3, s2, a = e2 || t3.length, o = new Array(2 * a);
        for (r3 = i2 = 0; r3 < a; )
          if ((n3 = t3[r3++]) < 128)
            o[i2++] = n3;
          else if (4 < (s2 = u2[n3]))
            o[i2++] = 65533, r3 += s2 - 1;
          else {
            for (n3 &= s2 === 2 ? 31 : s2 === 3 ? 15 : 7; 1 < s2 && r3 < a; )
              n3 = n3 << 6 | 63 & t3[r3++], s2--;
            1 < s2 ? o[i2++] = 65533 : n3 < 65536 ? o[i2++] = n3 : (n3 -= 65536, o[i2++] = 55296 | n3 >> 10 & 1023, o[i2++] = 56320 | 1023 & n3);
          }
        return l2(o, i2);
      }, r2.utf8border = function(t3, e2) {
        var r3;
        for ((e2 = e2 || t3.length) > t3.length && (e2 = t3.length), r3 = e2 - 1; 0 <= r3 && (192 & t3[r3]) == 128; )
          r3--;
        return r3 < 0 ? e2 : r3 === 0 ? e2 : r3 + u2[t3[r3]] > e2 ? r3 : e2;
      };
    }, { "./common": 41 }], 43: [function(t2, e, r2) {
      e.exports = function(t3, e2, r3, i) {
        for (var n2 = 65535 & t3 | 0, s = t3 >>> 16 & 65535 | 0, a = 0; r3 !== 0; ) {
          for (r3 -= a = 2e3 < r3 ? 2e3 : r3; s = s + (n2 = n2 + e2[i++] | 0) | 0, --a; )
            ;
          n2 %= 65521, s %= 65521;
        }
        return n2 | s << 16 | 0;
      };
    }, {}], 44: [function(t2, e, r2) {
      e.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(t2, e, r2) {
      var o = function() {
        for (var t3, e2 = [], r3 = 0; r3 < 256; r3++) {
          t3 = r3;
          for (var i = 0; i < 8; i++)
            t3 = 1 & t3 ? 3988292384 ^ t3 >>> 1 : t3 >>> 1;
          e2[r3] = t3;
        }
        return e2;
      }();
      e.exports = function(t3, e2, r3, i) {
        var n2 = o, s = i + r3;
        t3 ^= -1;
        for (var a = i; a < s; a++)
          t3 = t3 >>> 8 ^ n2[255 & (t3 ^ e2[a])];
        return -1 ^ t3;
      };
    }, {}], 46: [function(t2, e, r2) {
      var h, d = t2("../utils/common"), u2 = t2("./trees"), c = t2("./adler32"), p2 = t2("./crc32"), i = t2("./messages"), l2 = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, n2 = 2, v2 = 8, y2 = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x2 = 3, S2 = 258, z2 = S2 + x2 + 1, C2 = 42, E2 = 113, A2 = 1, I2 = 2, O2 = 3, B2 = 4;
      function R2(t3, e2) {
        return t3.msg = i[e2], e2;
      }
      function T2(t3) {
        return (t3 << 1) - (4 < t3 ? 9 : 0);
      }
      function D2(t3) {
        for (var e2 = t3.length; 0 <= --e2; )
          t3[e2] = 0;
      }
      function F2(t3) {
        var e2 = t3.state, r3 = e2.pending;
        r3 > t3.avail_out && (r3 = t3.avail_out), r3 !== 0 && (d.arraySet(t3.output, e2.pending_buf, e2.pending_out, r3, t3.next_out), t3.next_out += r3, e2.pending_out += r3, t3.total_out += r3, t3.avail_out -= r3, e2.pending -= r3, e2.pending === 0 && (e2.pending_out = 0));
      }
      function N2(t3, e2) {
        u2._tr_flush_block(t3, 0 <= t3.block_start ? t3.block_start : -1, t3.strstart - t3.block_start, e2), t3.block_start = t3.strstart, F2(t3.strm);
      }
      function U(t3, e2) {
        t3.pending_buf[t3.pending++] = e2;
      }
      function P2(t3, e2) {
        t3.pending_buf[t3.pending++] = e2 >>> 8 & 255, t3.pending_buf[t3.pending++] = 255 & e2;
      }
      function L2(t3, e2) {
        var r3, i2, n3 = t3.max_chain_length, s2 = t3.strstart, a2 = t3.prev_length, o2 = t3.nice_match, h2 = t3.strstart > t3.w_size - z2 ? t3.strstart - (t3.w_size - z2) : 0, u3 = t3.window, l3 = t3.w_mask, f2 = t3.prev, d2 = t3.strstart + S2, c2 = u3[s2 + a2 - 1], p3 = u3[s2 + a2];
        t3.prev_length >= t3.good_match && (n3 >>= 2), o2 > t3.lookahead && (o2 = t3.lookahead);
        do {
          if (u3[(r3 = e2) + a2] === p3 && u3[r3 + a2 - 1] === c2 && u3[r3] === u3[s2] && u3[++r3] === u3[s2 + 1]) {
            s2 += 2, r3++;
            do {
            } while (u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && u3[++s2] === u3[++r3] && s2 < d2);
            if (i2 = S2 - (d2 - s2), s2 = d2 - S2, a2 < i2) {
              if (t3.match_start = e2, o2 <= (a2 = i2))
                break;
              c2 = u3[s2 + a2 - 1], p3 = u3[s2 + a2];
            }
          }
        } while ((e2 = f2[e2 & l3]) > h2 && --n3 != 0);
        return a2 <= t3.lookahead ? a2 : t3.lookahead;
      }
      function j(t3) {
        var e2, r3, i2, n3, s2, a2, o2, h2, u3, l3, f2 = t3.w_size;
        do {
          if (n3 = t3.window_size - t3.lookahead - t3.strstart, t3.strstart >= f2 + (f2 - z2)) {
            for (d.arraySet(t3.window, t3.window, f2, f2, 0), t3.match_start -= f2, t3.strstart -= f2, t3.block_start -= f2, e2 = r3 = t3.hash_size; i2 = t3.head[--e2], t3.head[e2] = f2 <= i2 ? i2 - f2 : 0, --r3; )
              ;
            for (e2 = r3 = f2; i2 = t3.prev[--e2], t3.prev[e2] = f2 <= i2 ? i2 - f2 : 0, --r3; )
              ;
            n3 += f2;
          }
          if (t3.strm.avail_in === 0)
            break;
          if (a2 = t3.strm, o2 = t3.window, h2 = t3.strstart + t3.lookahead, u3 = n3, l3 = void 0, l3 = a2.avail_in, u3 < l3 && (l3 = u3), r3 = l3 === 0 ? 0 : (a2.avail_in -= l3, d.arraySet(o2, a2.input, a2.next_in, l3, h2), a2.state.wrap === 1 ? a2.adler = c(a2.adler, o2, l3, h2) : a2.state.wrap === 2 && (a2.adler = p2(a2.adler, o2, l3, h2)), a2.next_in += l3, a2.total_in += l3, l3), t3.lookahead += r3, t3.lookahead + t3.insert >= x2)
            for (s2 = t3.strstart - t3.insert, t3.ins_h = t3.window[s2], t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[s2 + 1]) & t3.hash_mask; t3.insert && (t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[s2 + x2 - 1]) & t3.hash_mask, t3.prev[s2 & t3.w_mask] = t3.head[t3.ins_h], t3.head[t3.ins_h] = s2, s2++, t3.insert--, !(t3.lookahead + t3.insert < x2)); )
              ;
        } while (t3.lookahead < z2 && t3.strm.avail_in !== 0);
      }
      function Z(t3, e2) {
        for (var r3, i2; ; ) {
          if (t3.lookahead < z2) {
            if (j(t3), t3.lookahead < z2 && e2 === l2)
              return A2;
            if (t3.lookahead === 0)
              break;
          }
          if (r3 = 0, t3.lookahead >= x2 && (t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[t3.strstart + x2 - 1]) & t3.hash_mask, r3 = t3.prev[t3.strstart & t3.w_mask] = t3.head[t3.ins_h], t3.head[t3.ins_h] = t3.strstart), r3 !== 0 && t3.strstart - r3 <= t3.w_size - z2 && (t3.match_length = L2(t3, r3)), t3.match_length >= x2)
            if (i2 = u2._tr_tally(t3, t3.strstart - t3.match_start, t3.match_length - x2), t3.lookahead -= t3.match_length, t3.match_length <= t3.max_lazy_match && t3.lookahead >= x2) {
              for (t3.match_length--; t3.strstart++, t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[t3.strstart + x2 - 1]) & t3.hash_mask, r3 = t3.prev[t3.strstart & t3.w_mask] = t3.head[t3.ins_h], t3.head[t3.ins_h] = t3.strstart, --t3.match_length != 0; )
                ;
              t3.strstart++;
            } else
              t3.strstart += t3.match_length, t3.match_length = 0, t3.ins_h = t3.window[t3.strstart], t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[t3.strstart + 1]) & t3.hash_mask;
          else
            i2 = u2._tr_tally(t3, 0, t3.window[t3.strstart]), t3.lookahead--, t3.strstart++;
          if (i2 && (N2(t3, false), t3.strm.avail_out === 0))
            return A2;
        }
        return t3.insert = t3.strstart < x2 - 1 ? t3.strstart : x2 - 1, e2 === f ? (N2(t3, true), t3.strm.avail_out === 0 ? O2 : B2) : t3.last_lit && (N2(t3, false), t3.strm.avail_out === 0) ? A2 : I2;
      }
      function W(t3, e2) {
        for (var r3, i2, n3; ; ) {
          if (t3.lookahead < z2) {
            if (j(t3), t3.lookahead < z2 && e2 === l2)
              return A2;
            if (t3.lookahead === 0)
              break;
          }
          if (r3 = 0, t3.lookahead >= x2 && (t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[t3.strstart + x2 - 1]) & t3.hash_mask, r3 = t3.prev[t3.strstart & t3.w_mask] = t3.head[t3.ins_h], t3.head[t3.ins_h] = t3.strstart), t3.prev_length = t3.match_length, t3.prev_match = t3.match_start, t3.match_length = x2 - 1, r3 !== 0 && t3.prev_length < t3.max_lazy_match && t3.strstart - r3 <= t3.w_size - z2 && (t3.match_length = L2(t3, r3), t3.match_length <= 5 && (t3.strategy === 1 || t3.match_length === x2 && 4096 < t3.strstart - t3.match_start) && (t3.match_length = x2 - 1)), t3.prev_length >= x2 && t3.match_length <= t3.prev_length) {
            for (n3 = t3.strstart + t3.lookahead - x2, i2 = u2._tr_tally(t3, t3.strstart - 1 - t3.prev_match, t3.prev_length - x2), t3.lookahead -= t3.prev_length - 1, t3.prev_length -= 2; ++t3.strstart <= n3 && (t3.ins_h = (t3.ins_h << t3.hash_shift ^ t3.window[t3.strstart + x2 - 1]) & t3.hash_mask, r3 = t3.prev[t3.strstart & t3.w_mask] = t3.head[t3.ins_h], t3.head[t3.ins_h] = t3.strstart), --t3.prev_length != 0; )
              ;
            if (t3.match_available = 0, t3.match_length = x2 - 1, t3.strstart++, i2 && (N2(t3, false), t3.strm.avail_out === 0))
              return A2;
          } else if (t3.match_available) {
            if ((i2 = u2._tr_tally(t3, 0, t3.window[t3.strstart - 1])) && N2(t3, false), t3.strstart++, t3.lookahead--, t3.strm.avail_out === 0)
              return A2;
          } else
            t3.match_available = 1, t3.strstart++, t3.lookahead--;
        }
        return t3.match_available && (i2 = u2._tr_tally(t3, 0, t3.window[t3.strstart - 1]), t3.match_available = 0), t3.insert = t3.strstart < x2 - 1 ? t3.strstart : x2 - 1, e2 === f ? (N2(t3, true), t3.strm.avail_out === 0 ? O2 : B2) : t3.last_lit && (N2(t3, false), t3.strm.avail_out === 0) ? A2 : I2;
      }
      function M2(t3, e2, r3, i2, n3) {
        this.good_length = t3, this.max_lazy = e2, this.nice_length = r3, this.max_chain = i2, this.func = n3;
      }
      function H2() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * w), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), D2(this.dyn_ltree), D2(this.dyn_dtree), D2(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(k + 1), this.heap = new d.Buf16(2 * s + 1), D2(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s + 1), D2(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function G2(t3) {
        var e2;
        return t3 && t3.state ? (t3.total_in = t3.total_out = 0, t3.data_type = n2, (e2 = t3.state).pending = 0, e2.pending_out = 0, e2.wrap < 0 && (e2.wrap = -e2.wrap), e2.status = e2.wrap ? C2 : E2, t3.adler = e2.wrap === 2 ? 0 : 1, e2.last_flush = l2, u2._tr_init(e2), m) : R2(t3, _);
      }
      function K2(t3) {
        var e2 = G2(t3);
        return e2 === m && function(t4) {
          t4.window_size = 2 * t4.w_size, D2(t4.head), t4.max_lazy_match = h[t4.level].max_lazy, t4.good_match = h[t4.level].good_length, t4.nice_match = h[t4.level].nice_length, t4.max_chain_length = h[t4.level].max_chain, t4.strstart = 0, t4.block_start = 0, t4.lookahead = 0, t4.insert = 0, t4.match_length = t4.prev_length = x2 - 1, t4.match_available = 0, t4.ins_h = 0;
        }(t3.state), e2;
      }
      function Y(t3, e2, r3, i2, n3, s2) {
        if (!t3)
          return _;
        var a2 = 1;
        if (e2 === g && (e2 = 6), i2 < 0 ? (a2 = 0, i2 = -i2) : 15 < i2 && (a2 = 2, i2 -= 16), n3 < 1 || y2 < n3 || r3 !== v2 || i2 < 8 || 15 < i2 || e2 < 0 || 9 < e2 || s2 < 0 || b < s2)
          return R2(t3, _);
        i2 === 8 && (i2 = 9);
        var o2 = new H2();
        return (t3.state = o2).strm = t3, o2.wrap = a2, o2.gzhead = null, o2.w_bits = i2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = n3 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x2 - 1) / x2), o2.window = new d.Buf8(2 * o2.w_size), o2.head = new d.Buf16(o2.hash_size), o2.prev = new d.Buf16(o2.w_size), o2.lit_bufsize = 1 << n3 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new d.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = e2, o2.strategy = s2, o2.method = r3, K2(t3);
      }
      h = [new M2(0, 0, 0, 0, function(t3, e2) {
        var r3 = 65535;
        for (r3 > t3.pending_buf_size - 5 && (r3 = t3.pending_buf_size - 5); ; ) {
          if (t3.lookahead <= 1) {
            if (j(t3), t3.lookahead === 0 && e2 === l2)
              return A2;
            if (t3.lookahead === 0)
              break;
          }
          t3.strstart += t3.lookahead, t3.lookahead = 0;
          var i2 = t3.block_start + r3;
          if ((t3.strstart === 0 || t3.strstart >= i2) && (t3.lookahead = t3.strstart - i2, t3.strstart = i2, N2(t3, false), t3.strm.avail_out === 0))
            return A2;
          if (t3.strstart - t3.block_start >= t3.w_size - z2 && (N2(t3, false), t3.strm.avail_out === 0))
            return A2;
        }
        return t3.insert = 0, e2 === f ? (N2(t3, true), t3.strm.avail_out === 0 ? O2 : B2) : (t3.strstart > t3.block_start && (N2(t3, false), t3.strm.avail_out), A2);
      }), new M2(4, 4, 8, 4, Z), new M2(4, 5, 16, 8, Z), new M2(4, 6, 32, 32, Z), new M2(4, 4, 16, 16, W), new M2(8, 16, 32, 32, W), new M2(8, 16, 128, 128, W), new M2(8, 32, 128, 256, W), new M2(32, 128, 258, 1024, W), new M2(32, 258, 258, 4096, W)], r2.deflateInit = function(t3, e2) {
        return Y(t3, e2, v2, 15, 8, 0);
      }, r2.deflateInit2 = Y, r2.deflateReset = K2, r2.deflateResetKeep = G2, r2.deflateSetHeader = function(t3, e2) {
        return t3 && t3.state ? t3.state.wrap !== 2 ? _ : (t3.state.gzhead = e2, m) : _;
      }, r2.deflate = function(t3, e2) {
        var r3, i2, n3, s2;
        if (!t3 || !t3.state || 5 < e2 || e2 < 0)
          return t3 ? R2(t3, _) : _;
        if (i2 = t3.state, !t3.output || !t3.input && t3.avail_in !== 0 || i2.status === 666 && e2 !== f)
          return R2(t3, t3.avail_out === 0 ? -5 : _);
        if (i2.strm = t3, r3 = i2.last_flush, i2.last_flush = e2, i2.status === C2)
          if (i2.wrap === 2)
            t3.adler = 0, U(i2, 31), U(i2, 139), U(i2, 8), i2.gzhead ? (U(i2, (i2.gzhead.text ? 1 : 0) + (i2.gzhead.hcrc ? 2 : 0) + (i2.gzhead.extra ? 4 : 0) + (i2.gzhead.name ? 8 : 0) + (i2.gzhead.comment ? 16 : 0)), U(i2, 255 & i2.gzhead.time), U(i2, i2.gzhead.time >> 8 & 255), U(i2, i2.gzhead.time >> 16 & 255), U(i2, i2.gzhead.time >> 24 & 255), U(i2, i2.level === 9 ? 2 : 2 <= i2.strategy || i2.level < 2 ? 4 : 0), U(i2, 255 & i2.gzhead.os), i2.gzhead.extra && i2.gzhead.extra.length && (U(i2, 255 & i2.gzhead.extra.length), U(i2, i2.gzhead.extra.length >> 8 & 255)), i2.gzhead.hcrc && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending, 0)), i2.gzindex = 0, i2.status = 69) : (U(i2, 0), U(i2, 0), U(i2, 0), U(i2, 0), U(i2, 0), U(i2, i2.level === 9 ? 2 : 2 <= i2.strategy || i2.level < 2 ? 4 : 0), U(i2, 3), i2.status = E2);
          else {
            var a2 = v2 + (i2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= i2.strategy || i2.level < 2 ? 0 : i2.level < 6 ? 1 : i2.level === 6 ? 2 : 3) << 6, i2.strstart !== 0 && (a2 |= 32), a2 += 31 - a2 % 31, i2.status = E2, P2(i2, a2), i2.strstart !== 0 && (P2(i2, t3.adler >>> 16), P2(i2, 65535 & t3.adler)), t3.adler = 1;
          }
        if (i2.status === 69)
          if (i2.gzhead.extra) {
            for (n3 = i2.pending; i2.gzindex < (65535 & i2.gzhead.extra.length) && (i2.pending !== i2.pending_buf_size || (i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), F2(t3), n3 = i2.pending, i2.pending !== i2.pending_buf_size)); )
              U(i2, 255 & i2.gzhead.extra[i2.gzindex]), i2.gzindex++;
            i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), i2.gzindex === i2.gzhead.extra.length && (i2.gzindex = 0, i2.status = 73);
          } else
            i2.status = 73;
        if (i2.status === 73)
          if (i2.gzhead.name) {
            n3 = i2.pending;
            do {
              if (i2.pending === i2.pending_buf_size && (i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), F2(t3), n3 = i2.pending, i2.pending === i2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = i2.gzindex < i2.gzhead.name.length ? 255 & i2.gzhead.name.charCodeAt(i2.gzindex++) : 0, U(i2, s2);
            } while (s2 !== 0);
            i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), s2 === 0 && (i2.gzindex = 0, i2.status = 91);
          } else
            i2.status = 91;
        if (i2.status === 91)
          if (i2.gzhead.comment) {
            n3 = i2.pending;
            do {
              if (i2.pending === i2.pending_buf_size && (i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), F2(t3), n3 = i2.pending, i2.pending === i2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = i2.gzindex < i2.gzhead.comment.length ? 255 & i2.gzhead.comment.charCodeAt(i2.gzindex++) : 0, U(i2, s2);
            } while (s2 !== 0);
            i2.gzhead.hcrc && i2.pending > n3 && (t3.adler = p2(t3.adler, i2.pending_buf, i2.pending - n3, n3)), s2 === 0 && (i2.status = 103);
          } else
            i2.status = 103;
        if (i2.status === 103 && (i2.gzhead.hcrc ? (i2.pending + 2 > i2.pending_buf_size && F2(t3), i2.pending + 2 <= i2.pending_buf_size && (U(i2, 255 & t3.adler), U(i2, t3.adler >> 8 & 255), t3.adler = 0, i2.status = E2)) : i2.status = E2), i2.pending !== 0) {
          if (F2(t3), t3.avail_out === 0)
            return i2.last_flush = -1, m;
        } else if (t3.avail_in === 0 && T2(e2) <= T2(r3) && e2 !== f)
          return R2(t3, -5);
        if (i2.status === 666 && t3.avail_in !== 0)
          return R2(t3, -5);
        if (t3.avail_in !== 0 || i2.lookahead !== 0 || e2 !== l2 && i2.status !== 666) {
          var o2 = i2.strategy === 2 ? function(t4, e3) {
            for (var r4; ; ) {
              if (t4.lookahead === 0 && (j(t4), t4.lookahead === 0)) {
                if (e3 === l2)
                  return A2;
                break;
              }
              if (t4.match_length = 0, r4 = u2._tr_tally(t4, 0, t4.window[t4.strstart]), t4.lookahead--, t4.strstart++, r4 && (N2(t4, false), t4.strm.avail_out === 0))
                return A2;
            }
            return t4.insert = 0, e3 === f ? (N2(t4, true), t4.strm.avail_out === 0 ? O2 : B2) : t4.last_lit && (N2(t4, false), t4.strm.avail_out === 0) ? A2 : I2;
          }(i2, e2) : i2.strategy === 3 ? function(t4, e3) {
            for (var r4, i3, n4, s3, a3 = t4.window; ; ) {
              if (t4.lookahead <= S2) {
                if (j(t4), t4.lookahead <= S2 && e3 === l2)
                  return A2;
                if (t4.lookahead === 0)
                  break;
              }
              if (t4.match_length = 0, t4.lookahead >= x2 && 0 < t4.strstart && (i3 = a3[n4 = t4.strstart - 1]) === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4]) {
                s3 = t4.strstart + S2;
                do {
                } while (i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && i3 === a3[++n4] && n4 < s3);
                t4.match_length = S2 - (s3 - n4), t4.match_length > t4.lookahead && (t4.match_length = t4.lookahead);
              }
              if (t4.match_length >= x2 ? (r4 = u2._tr_tally(t4, 1, t4.match_length - x2), t4.lookahead -= t4.match_length, t4.strstart += t4.match_length, t4.match_length = 0) : (r4 = u2._tr_tally(t4, 0, t4.window[t4.strstart]), t4.lookahead--, t4.strstart++), r4 && (N2(t4, false), t4.strm.avail_out === 0))
                return A2;
            }
            return t4.insert = 0, e3 === f ? (N2(t4, true), t4.strm.avail_out === 0 ? O2 : B2) : t4.last_lit && (N2(t4, false), t4.strm.avail_out === 0) ? A2 : I2;
          }(i2, e2) : h[i2.level].func(i2, e2);
          if (o2 !== O2 && o2 !== B2 || (i2.status = 666), o2 === A2 || o2 === O2)
            return t3.avail_out === 0 && (i2.last_flush = -1), m;
          if (o2 === I2 && (e2 === 1 ? u2._tr_align(i2) : e2 !== 5 && (u2._tr_stored_block(i2, 0, 0, false), e2 === 3 && (D2(i2.head), i2.lookahead === 0 && (i2.strstart = 0, i2.block_start = 0, i2.insert = 0))), F2(t3), t3.avail_out === 0))
            return i2.last_flush = -1, m;
        }
        return e2 !== f ? m : i2.wrap <= 0 ? 1 : (i2.wrap === 2 ? (U(i2, 255 & t3.adler), U(i2, t3.adler >> 8 & 255), U(i2, t3.adler >> 16 & 255), U(i2, t3.adler >> 24 & 255), U(i2, 255 & t3.total_in), U(i2, t3.total_in >> 8 & 255), U(i2, t3.total_in >> 16 & 255), U(i2, t3.total_in >> 24 & 255)) : (P2(i2, t3.adler >>> 16), P2(i2, 65535 & t3.adler)), F2(t3), 0 < i2.wrap && (i2.wrap = -i2.wrap), i2.pending !== 0 ? m : 1);
      }, r2.deflateEnd = function(t3) {
        var e2;
        return t3 && t3.state ? (e2 = t3.state.status) !== C2 && e2 !== 69 && e2 !== 73 && e2 !== 91 && e2 !== 103 && e2 !== E2 && e2 !== 666 ? R2(t3, _) : (t3.state = null, e2 === E2 ? R2(t3, -3) : m) : _;
      }, r2.deflateSetDictionary = function(t3, e2) {
        var r3, i2, n3, s2, a2, o2, h2, u3, l3 = e2.length;
        if (!t3 || !t3.state)
          return _;
        if ((s2 = (r3 = t3.state).wrap) === 2 || s2 === 1 && r3.status !== C2 || r3.lookahead)
          return _;
        for (s2 === 1 && (t3.adler = c(t3.adler, e2, l3, 0)), r3.wrap = 0, l3 >= r3.w_size && (s2 === 0 && (D2(r3.head), r3.strstart = 0, r3.block_start = 0, r3.insert = 0), u3 = new d.Buf8(r3.w_size), d.arraySet(u3, e2, l3 - r3.w_size, r3.w_size, 0), e2 = u3, l3 = r3.w_size), a2 = t3.avail_in, o2 = t3.next_in, h2 = t3.input, t3.avail_in = l3, t3.next_in = 0, t3.input = e2, j(r3); r3.lookahead >= x2; ) {
          for (i2 = r3.strstart, n3 = r3.lookahead - (x2 - 1); r3.ins_h = (r3.ins_h << r3.hash_shift ^ r3.window[i2 + x2 - 1]) & r3.hash_mask, r3.prev[i2 & r3.w_mask] = r3.head[r3.ins_h], r3.head[r3.ins_h] = i2, i2++, --n3; )
            ;
          r3.strstart = i2, r3.lookahead = x2 - 1, j(r3);
        }
        return r3.strstart += r3.lookahead, r3.block_start = r3.strstart, r3.insert = r3.lookahead, r3.lookahead = 0, r3.match_length = r3.prev_length = x2 - 1, r3.match_available = 0, t3.next_in = o2, t3.input = h2, t3.avail_in = a2, r3.wrap = s2, m;
      }, r2.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t2, e, r2) {
      e.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
      };
    }, {}], 48: [function(t2, e, r2) {
      e.exports = function(t3, e2) {
        var r3, i, n2, s, a, o, h, u2, l2, f, d, c, p2, m, _, g, b, v2, y2, w, k, x2, S2, z2, C2;
        r3 = t3.state, i = t3.next_in, z2 = t3.input, n2 = i + (t3.avail_in - 5), s = t3.next_out, C2 = t3.output, a = s - (e2 - t3.avail_out), o = s + (t3.avail_out - 257), h = r3.dmax, u2 = r3.wsize, l2 = r3.whave, f = r3.wnext, d = r3.window, c = r3.hold, p2 = r3.bits, m = r3.lencode, _ = r3.distcode, g = (1 << r3.lenbits) - 1, b = (1 << r3.distbits) - 1;
        t:
          do {
            p2 < 15 && (c += z2[i++] << p2, p2 += 8, c += z2[i++] << p2, p2 += 8), v2 = m[c & g];
            e:
              for (; ; ) {
                if (c >>>= y2 = v2 >>> 24, p2 -= y2, (y2 = v2 >>> 16 & 255) === 0)
                  C2[s++] = 65535 & v2;
                else {
                  if (!(16 & y2)) {
                    if ((64 & y2) == 0) {
                      v2 = m[(65535 & v2) + (c & (1 << y2) - 1)];
                      continue e;
                    }
                    if (32 & y2) {
                      r3.mode = 12;
                      break t;
                    }
                    t3.msg = "invalid literal/length code", r3.mode = 30;
                    break t;
                  }
                  w = 65535 & v2, (y2 &= 15) && (p2 < y2 && (c += z2[i++] << p2, p2 += 8), w += c & (1 << y2) - 1, c >>>= y2, p2 -= y2), p2 < 15 && (c += z2[i++] << p2, p2 += 8, c += z2[i++] << p2, p2 += 8), v2 = _[c & b];
                  r:
                    for (; ; ) {
                      if (c >>>= y2 = v2 >>> 24, p2 -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                        if ((64 & y2) == 0) {
                          v2 = _[(65535 & v2) + (c & (1 << y2) - 1)];
                          continue r;
                        }
                        t3.msg = "invalid distance code", r3.mode = 30;
                        break t;
                      }
                      if (k = 65535 & v2, p2 < (y2 &= 15) && (c += z2[i++] << p2, (p2 += 8) < y2 && (c += z2[i++] << p2, p2 += 8)), h < (k += c & (1 << y2) - 1)) {
                        t3.msg = "invalid distance too far back", r3.mode = 30;
                        break t;
                      }
                      if (c >>>= y2, p2 -= y2, (y2 = s - a) < k) {
                        if (l2 < (y2 = k - y2) && r3.sane) {
                          t3.msg = "invalid distance too far back", r3.mode = 30;
                          break t;
                        }
                        if (S2 = d, (x2 = 0) === f) {
                          if (x2 += u2 - y2, y2 < w) {
                            for (w -= y2; C2[s++] = d[x2++], --y2; )
                              ;
                            x2 = s - k, S2 = C2;
                          }
                        } else if (f < y2) {
                          if (x2 += u2 + f - y2, (y2 -= f) < w) {
                            for (w -= y2; C2[s++] = d[x2++], --y2; )
                              ;
                            if (x2 = 0, f < w) {
                              for (w -= y2 = f; C2[s++] = d[x2++], --y2; )
                                ;
                              x2 = s - k, S2 = C2;
                            }
                          }
                        } else if (x2 += f - y2, y2 < w) {
                          for (w -= y2; C2[s++] = d[x2++], --y2; )
                            ;
                          x2 = s - k, S2 = C2;
                        }
                        for (; 2 < w; )
                          C2[s++] = S2[x2++], C2[s++] = S2[x2++], C2[s++] = S2[x2++], w -= 3;
                        w && (C2[s++] = S2[x2++], 1 < w && (C2[s++] = S2[x2++]));
                      } else {
                        for (x2 = s - k; C2[s++] = C2[x2++], C2[s++] = C2[x2++], C2[s++] = C2[x2++], 2 < (w -= 3); )
                          ;
                        w && (C2[s++] = C2[x2++], 1 < w && (C2[s++] = C2[x2++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (i < n2 && s < o);
        i -= w = p2 >> 3, c &= (1 << (p2 -= w << 3)) - 1, t3.next_in = i, t3.next_out = s, t3.avail_in = i < n2 ? n2 - i + 5 : 5 - (i - n2), t3.avail_out = s < o ? o - s + 257 : 257 - (s - o), r3.hold = c, r3.bits = p2;
      };
    }, {}], 49: [function(t2, e, r2) {
      var I2 = t2("../utils/common"), O2 = t2("./adler32"), B2 = t2("./crc32"), R2 = t2("./inffast"), T2 = t2("./inftrees"), D2 = 1, F2 = 2, N2 = 0, U = -2, P2 = 1, i = 852, n2 = 592;
      function L2(t3) {
        return (t3 >>> 24 & 255) + (t3 >>> 8 & 65280) + ((65280 & t3) << 8) + ((255 & t3) << 24);
      }
      function s() {
        this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function a(t3) {
        var e2;
        return t3 && t3.state ? (e2 = t3.state, t3.total_in = t3.total_out = e2.total = 0, t3.msg = "", e2.wrap && (t3.adler = 1 & e2.wrap), e2.mode = P2, e2.last = 0, e2.havedict = 0, e2.dmax = 32768, e2.head = null, e2.hold = 0, e2.bits = 0, e2.lencode = e2.lendyn = new I2.Buf32(i), e2.distcode = e2.distdyn = new I2.Buf32(n2), e2.sane = 1, e2.back = -1, N2) : U;
      }
      function o(t3) {
        var e2;
        return t3 && t3.state ? ((e2 = t3.state).wsize = 0, e2.whave = 0, e2.wnext = 0, a(t3)) : U;
      }
      function h(t3, e2) {
        var r3, i2;
        return t3 && t3.state ? (i2 = t3.state, e2 < 0 ? (r3 = 0, e2 = -e2) : (r3 = 1 + (e2 >> 4), e2 < 48 && (e2 &= 15)), e2 && (e2 < 8 || 15 < e2) ? U : (i2.window !== null && i2.wbits !== e2 && (i2.window = null), i2.wrap = r3, i2.wbits = e2, o(t3))) : U;
      }
      function u2(t3, e2) {
        var r3, i2;
        return t3 ? (i2 = new s(), (t3.state = i2).window = null, (r3 = h(t3, e2)) !== N2 && (t3.state = null), r3) : U;
      }
      var l2, f, d = true;
      function j(t3) {
        if (d) {
          var e2;
          for (l2 = new I2.Buf32(512), f = new I2.Buf32(32), e2 = 0; e2 < 144; )
            t3.lens[e2++] = 8;
          for (; e2 < 256; )
            t3.lens[e2++] = 9;
          for (; e2 < 280; )
            t3.lens[e2++] = 7;
          for (; e2 < 288; )
            t3.lens[e2++] = 8;
          for (T2(D2, t3.lens, 0, 288, l2, 0, t3.work, { bits: 9 }), e2 = 0; e2 < 32; )
            t3.lens[e2++] = 5;
          T2(F2, t3.lens, 0, 32, f, 0, t3.work, { bits: 5 }), d = false;
        }
        t3.lencode = l2, t3.lenbits = 9, t3.distcode = f, t3.distbits = 5;
      }
      function Z(t3, e2, r3, i2) {
        var n3, s2 = t3.state;
        return s2.window === null && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I2.Buf8(s2.wsize)), i2 >= s2.wsize ? (I2.arraySet(s2.window, e2, r3 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (i2 < (n3 = s2.wsize - s2.wnext) && (n3 = i2), I2.arraySet(s2.window, e2, r3 - i2, n3, s2.wnext), (i2 -= n3) ? (I2.arraySet(s2.window, e2, r3 - i2, i2, 0), s2.wnext = i2, s2.whave = s2.wsize) : (s2.wnext += n3, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += n3))), 0;
      }
      r2.inflateReset = o, r2.inflateReset2 = h, r2.inflateResetKeep = a, r2.inflateInit = function(t3) {
        return u2(t3, 15);
      }, r2.inflateInit2 = u2, r2.inflate = function(t3, e2) {
        var r3, i2, n3, s2, a2, o2, h2, u3, l3, f2, d2, c, p2, m, _, g, b, v2, y2, w, k, x2, S2, z2, C2 = 0, E2 = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!t3 || !t3.state || !t3.output || !t3.input && t3.avail_in !== 0)
          return U;
        (r3 = t3.state).mode === 12 && (r3.mode = 13), a2 = t3.next_out, n3 = t3.output, h2 = t3.avail_out, s2 = t3.next_in, i2 = t3.input, o2 = t3.avail_in, u3 = r3.hold, l3 = r3.bits, f2 = o2, d2 = h2, x2 = N2;
        t:
          for (; ; )
            switch (r3.mode) {
              case P2:
                if (r3.wrap === 0) {
                  r3.mode = 13;
                  break;
                }
                for (; l3 < 16; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if (2 & r3.wrap && u3 === 35615) {
                  E2[r3.check = 0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0), l3 = u3 = 0, r3.mode = 2;
                  break;
                }
                if (r3.flags = 0, r3.head && (r3.head.done = false), !(1 & r3.wrap) || (((255 & u3) << 8) + (u3 >> 8)) % 31) {
                  t3.msg = "incorrect header check", r3.mode = 30;
                  break;
                }
                if ((15 & u3) != 8) {
                  t3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (l3 -= 4, k = 8 + (15 & (u3 >>>= 4)), r3.wbits === 0)
                  r3.wbits = k;
                else if (k > r3.wbits) {
                  t3.msg = "invalid window size", r3.mode = 30;
                  break;
                }
                r3.dmax = 1 << k, t3.adler = r3.check = 1, r3.mode = 512 & u3 ? 10 : 12, l3 = u3 = 0;
                break;
              case 2:
                for (; l3 < 16; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if (r3.flags = u3, (255 & r3.flags) != 8) {
                  t3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (57344 & r3.flags) {
                  t3.msg = "unknown header flags set", r3.mode = 30;
                  break;
                }
                r3.head && (r3.head.text = u3 >> 8 & 1), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 3;
              case 3:
                for (; l3 < 32; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                r3.head && (r3.head.time = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, E2[2] = u3 >>> 16 & 255, E2[3] = u3 >>> 24 & 255, r3.check = B2(r3.check, E2, 4, 0)), l3 = u3 = 0, r3.mode = 4;
              case 4:
                for (; l3 < 16; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                r3.head && (r3.head.xflags = 255 & u3, r3.head.os = u3 >> 8), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 5;
              case 5:
                if (1024 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  r3.length = u3, r3.head && (r3.head.extra_len = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0;
                } else
                  r3.head && (r3.head.extra = null);
                r3.mode = 6;
              case 6:
                if (1024 & r3.flags && (o2 < (c = r3.length) && (c = o2), c && (r3.head && (k = r3.head.extra_len - r3.length, r3.head.extra || (r3.head.extra = new Array(r3.head.extra_len)), I2.arraySet(r3.head.extra, i2, s2, c, k)), 512 & r3.flags && (r3.check = B2(r3.check, i2, c, s2)), o2 -= c, s2 += c, r3.length -= c), r3.length))
                  break t;
                r3.length = 0, r3.mode = 7;
              case 7:
                if (2048 & r3.flags) {
                  if (o2 === 0)
                    break t;
                  for (c = 0; k = i2[s2 + c++], r3.head && k && r3.length < 65536 && (r3.head.name += String.fromCharCode(k)), k && c < o2; )
                    ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, i2, c, s2)), o2 -= c, s2 += c, k)
                    break t;
                } else
                  r3.head && (r3.head.name = null);
                r3.length = 0, r3.mode = 8;
              case 8:
                if (4096 & r3.flags) {
                  if (o2 === 0)
                    break t;
                  for (c = 0; k = i2[s2 + c++], r3.head && k && r3.length < 65536 && (r3.head.comment += String.fromCharCode(k)), k && c < o2; )
                    ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, i2, c, s2)), o2 -= c, s2 += c, k)
                    break t;
                } else
                  r3.head && (r3.head.comment = null);
                r3.mode = 9;
              case 9:
                if (512 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  if (u3 !== (65535 & r3.check)) {
                    t3.msg = "header crc mismatch", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.head && (r3.head.hcrc = r3.flags >> 9 & 1, r3.head.done = true), t3.adler = r3.check = 0, r3.mode = 12;
                break;
              case 10:
                for (; l3 < 32; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                t3.adler = r3.check = L2(u3), l3 = u3 = 0, r3.mode = 11;
              case 11:
                if (r3.havedict === 0)
                  return t3.next_out = a2, t3.avail_out = h2, t3.next_in = s2, t3.avail_in = o2, r3.hold = u3, r3.bits = l3, 2;
                t3.adler = r3.check = 1, r3.mode = 12;
              case 12:
                if (e2 === 5 || e2 === 6)
                  break t;
              case 13:
                if (r3.last) {
                  u3 >>>= 7 & l3, l3 -= 7 & l3, r3.mode = 27;
                  break;
                }
                for (; l3 < 3; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                switch (r3.last = 1 & u3, l3 -= 1, 3 & (u3 >>>= 1)) {
                  case 0:
                    r3.mode = 14;
                    break;
                  case 1:
                    if (j(r3), r3.mode = 20, e2 !== 6)
                      break;
                    u3 >>>= 2, l3 -= 2;
                    break t;
                  case 2:
                    r3.mode = 17;
                    break;
                  case 3:
                    t3.msg = "invalid block type", r3.mode = 30;
                }
                u3 >>>= 2, l3 -= 2;
                break;
              case 14:
                for (u3 >>>= 7 & l3, l3 -= 7 & l3; l3 < 32; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if ((65535 & u3) != (u3 >>> 16 ^ 65535)) {
                  t3.msg = "invalid stored block lengths", r3.mode = 30;
                  break;
                }
                if (r3.length = 65535 & u3, l3 = u3 = 0, r3.mode = 15, e2 === 6)
                  break t;
              case 15:
                r3.mode = 16;
              case 16:
                if (c = r3.length) {
                  if (o2 < c && (c = o2), h2 < c && (c = h2), c === 0)
                    break t;
                  I2.arraySet(n3, i2, s2, c, a2), o2 -= c, s2 += c, h2 -= c, a2 += c, r3.length -= c;
                  break;
                }
                r3.mode = 12;
                break;
              case 17:
                for (; l3 < 14; ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if (r3.nlen = 257 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ndist = 1 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ncode = 4 + (15 & u3), u3 >>>= 4, l3 -= 4, 286 < r3.nlen || 30 < r3.ndist) {
                  t3.msg = "too many length or distance symbols", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 18;
              case 18:
                for (; r3.have < r3.ncode; ) {
                  for (; l3 < 3; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  r3.lens[A2[r3.have++]] = 7 & u3, u3 >>>= 3, l3 -= 3;
                }
                for (; r3.have < 19; )
                  r3.lens[A2[r3.have++]] = 0;
                if (r3.lencode = r3.lendyn, r3.lenbits = 7, S2 = { bits: r3.lenbits }, x2 = T2(0, r3.lens, 0, 19, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  t3.msg = "invalid code lengths set", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 19;
              case 19:
                for (; r3.have < r3.nlen + r3.ndist; ) {
                  for (; g = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  if (b < 16)
                    u3 >>>= _, l3 -= _, r3.lens[r3.have++] = b;
                  else {
                    if (b === 16) {
                      for (z2 = _ + 2; l3 < z2; ) {
                        if (o2 === 0)
                          break t;
                        o2--, u3 += i2[s2++] << l3, l3 += 8;
                      }
                      if (u3 >>>= _, l3 -= _, r3.have === 0) {
                        t3.msg = "invalid bit length repeat", r3.mode = 30;
                        break;
                      }
                      k = r3.lens[r3.have - 1], c = 3 + (3 & u3), u3 >>>= 2, l3 -= 2;
                    } else if (b === 17) {
                      for (z2 = _ + 3; l3 < z2; ) {
                        if (o2 === 0)
                          break t;
                        o2--, u3 += i2[s2++] << l3, l3 += 8;
                      }
                      l3 -= _, k = 0, c = 3 + (7 & (u3 >>>= _)), u3 >>>= 3, l3 -= 3;
                    } else {
                      for (z2 = _ + 7; l3 < z2; ) {
                        if (o2 === 0)
                          break t;
                        o2--, u3 += i2[s2++] << l3, l3 += 8;
                      }
                      l3 -= _, k = 0, c = 11 + (127 & (u3 >>>= _)), u3 >>>= 7, l3 -= 7;
                    }
                    if (r3.have + c > r3.nlen + r3.ndist) {
                      t3.msg = "invalid bit length repeat", r3.mode = 30;
                      break;
                    }
                    for (; c--; )
                      r3.lens[r3.have++] = k;
                  }
                }
                if (r3.mode === 30)
                  break;
                if (r3.lens[256] === 0) {
                  t3.msg = "invalid code -- missing end-of-block", r3.mode = 30;
                  break;
                }
                if (r3.lenbits = 9, S2 = { bits: r3.lenbits }, x2 = T2(D2, r3.lens, 0, r3.nlen, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  t3.msg = "invalid literal/lengths set", r3.mode = 30;
                  break;
                }
                if (r3.distbits = 6, r3.distcode = r3.distdyn, S2 = { bits: r3.distbits }, x2 = T2(F2, r3.lens, r3.nlen, r3.ndist, r3.distcode, 0, r3.work, S2), r3.distbits = S2.bits, x2) {
                  t3.msg = "invalid distances set", r3.mode = 30;
                  break;
                }
                if (r3.mode = 20, e2 === 6)
                  break t;
              case 20:
                r3.mode = 21;
              case 21:
                if (6 <= o2 && 258 <= h2) {
                  t3.next_out = a2, t3.avail_out = h2, t3.next_in = s2, t3.avail_in = o2, r3.hold = u3, r3.bits = l3, R2(t3, d2), a2 = t3.next_out, n3 = t3.output, h2 = t3.avail_out, s2 = t3.next_in, i2 = t3.input, o2 = t3.avail_in, u3 = r3.hold, l3 = r3.bits, r3.mode === 12 && (r3.back = -1);
                  break;
                }
                for (r3.back = 0; g = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if (g && (240 & g) == 0) {
                  for (v2 = _, y2 = g, w = b; g = (C2 = r3.lencode[w + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b = 65535 & C2, !(v2 + (_ = C2 >>> 24) <= l3); ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _, l3 -= _, r3.back += _, r3.length = b, g === 0) {
                  r3.mode = 26;
                  break;
                }
                if (32 & g) {
                  r3.back = -1, r3.mode = 12;
                  break;
                }
                if (64 & g) {
                  t3.msg = "invalid literal/length code", r3.mode = 30;
                  break;
                }
                r3.extra = 15 & g, r3.mode = 22;
              case 22:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  r3.length += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                r3.was = r3.length, r3.mode = 23;
              case 23:
                for (; g = (C2 = r3.distcode[u3 & (1 << r3.distbits) - 1]) >>> 16 & 255, b = 65535 & C2, !((_ = C2 >>> 24) <= l3); ) {
                  if (o2 === 0)
                    break t;
                  o2--, u3 += i2[s2++] << l3, l3 += 8;
                }
                if ((240 & g) == 0) {
                  for (v2 = _, y2 = g, w = b; g = (C2 = r3.distcode[w + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b = 65535 & C2, !(v2 + (_ = C2 >>> 24) <= l3); ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _, l3 -= _, r3.back += _, 64 & g) {
                  t3.msg = "invalid distance code", r3.mode = 30;
                  break;
                }
                r3.offset = b, r3.extra = 15 & g, r3.mode = 24;
              case 24:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  r3.offset += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                if (r3.offset > r3.dmax) {
                  t3.msg = "invalid distance too far back", r3.mode = 30;
                  break;
                }
                r3.mode = 25;
              case 25:
                if (h2 === 0)
                  break t;
                if (c = d2 - h2, r3.offset > c) {
                  if ((c = r3.offset - c) > r3.whave && r3.sane) {
                    t3.msg = "invalid distance too far back", r3.mode = 30;
                    break;
                  }
                  p2 = c > r3.wnext ? (c -= r3.wnext, r3.wsize - c) : r3.wnext - c, c > r3.length && (c = r3.length), m = r3.window;
                } else
                  m = n3, p2 = a2 - r3.offset, c = r3.length;
                for (h2 < c && (c = h2), h2 -= c, r3.length -= c; n3[a2++] = m[p2++], --c; )
                  ;
                r3.length === 0 && (r3.mode = 21);
                break;
              case 26:
                if (h2 === 0)
                  break t;
                n3[a2++] = r3.length, h2--, r3.mode = 21;
                break;
              case 27:
                if (r3.wrap) {
                  for (; l3 < 32; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 |= i2[s2++] << l3, l3 += 8;
                  }
                  if (d2 -= h2, t3.total_out += d2, r3.total += d2, d2 && (t3.adler = r3.check = r3.flags ? B2(r3.check, n3, d2, a2 - d2) : O2(r3.check, n3, d2, a2 - d2)), d2 = h2, (r3.flags ? u3 : L2(u3)) !== r3.check) {
                    t3.msg = "incorrect data check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 28;
              case 28:
                if (r3.wrap && r3.flags) {
                  for (; l3 < 32; ) {
                    if (o2 === 0)
                      break t;
                    o2--, u3 += i2[s2++] << l3, l3 += 8;
                  }
                  if (u3 !== (4294967295 & r3.total)) {
                    t3.msg = "incorrect length check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 29;
              case 29:
                x2 = 1;
                break t;
              case 30:
                x2 = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return U;
            }
        return t3.next_out = a2, t3.avail_out = h2, t3.next_in = s2, t3.avail_in = o2, r3.hold = u3, r3.bits = l3, (r3.wsize || d2 !== t3.avail_out && r3.mode < 30 && (r3.mode < 27 || e2 !== 4)) && Z(t3, t3.output, t3.next_out, d2 - t3.avail_out) ? (r3.mode = 31, -4) : (f2 -= t3.avail_in, d2 -= t3.avail_out, t3.total_in += f2, t3.total_out += d2, r3.total += d2, r3.wrap && d2 && (t3.adler = r3.check = r3.flags ? B2(r3.check, n3, d2, t3.next_out - d2) : O2(r3.check, n3, d2, t3.next_out - d2)), t3.data_type = r3.bits + (r3.last ? 64 : 0) + (r3.mode === 12 ? 128 : 0) + (r3.mode === 20 || r3.mode === 15 ? 256 : 0), (f2 == 0 && d2 === 0 || e2 === 4) && x2 === N2 && (x2 = -5), x2);
      }, r2.inflateEnd = function(t3) {
        if (!t3 || !t3.state)
          return U;
        var e2 = t3.state;
        return e2.window && (e2.window = null), t3.state = null, N2;
      }, r2.inflateGetHeader = function(t3, e2) {
        var r3;
        return t3 && t3.state ? (2 & (r3 = t3.state).wrap) == 0 ? U : ((r3.head = e2).done = false, N2) : U;
      }, r2.inflateSetDictionary = function(t3, e2) {
        var r3, i2 = e2.length;
        return t3 && t3.state ? (r3 = t3.state).wrap !== 0 && r3.mode !== 11 ? U : r3.mode === 11 && O2(1, e2, i2, 0) !== r3.check ? -3 : Z(t3, e2, i2, i2) ? (r3.mode = 31, -4) : (r3.havedict = 1, N2) : U;
      }, r2.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t2, e, r2) {
      var D2 = t2("../utils/common"), F2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      e.exports = function(t3, e2, r3, i, n2, s, a, o) {
        var h, u2, l2, f, d, c, p2, m, _, g = o.bits, b = 0, v2 = 0, y2 = 0, w = 0, k = 0, x2 = 0, S2 = 0, z2 = 0, C2 = 0, E2 = 0, A2 = null, I2 = 0, O2 = new D2.Buf16(16), B2 = new D2.Buf16(16), R2 = null, T2 = 0;
        for (b = 0; b <= 15; b++)
          O2[b] = 0;
        for (v2 = 0; v2 < i; v2++)
          O2[e2[r3 + v2]]++;
        for (k = g, w = 15; 1 <= w && O2[w] === 0; w--)
          ;
        if (w < k && (k = w), w === 0)
          return n2[s++] = 20971520, n2[s++] = 20971520, o.bits = 1, 0;
        for (y2 = 1; y2 < w && O2[y2] === 0; y2++)
          ;
        for (k < y2 && (k = y2), b = z2 = 1; b <= 15; b++)
          if (z2 <<= 1, (z2 -= O2[b]) < 0)
            return -1;
        if (0 < z2 && (t3 === 0 || w !== 1))
          return -1;
        for (B2[1] = 0, b = 1; b < 15; b++)
          B2[b + 1] = B2[b] + O2[b];
        for (v2 = 0; v2 < i; v2++)
          e2[r3 + v2] !== 0 && (a[B2[e2[r3 + v2]]++] = v2);
        if (c = t3 === 0 ? (A2 = R2 = a, 19) : t3 === 1 ? (A2 = F2, I2 -= 257, R2 = N2, T2 -= 257, 256) : (A2 = U, R2 = P2, -1), b = y2, d = s, S2 = v2 = E2 = 0, l2 = -1, f = (C2 = 1 << (x2 = k)) - 1, t3 === 1 && 852 < C2 || t3 === 2 && 592 < C2)
          return 1;
        for (; ; ) {
          for (p2 = b - S2, _ = a[v2] < c ? (m = 0, a[v2]) : a[v2] > c ? (m = R2[T2 + a[v2]], A2[I2 + a[v2]]) : (m = 96, 0), h = 1 << b - S2, y2 = u2 = 1 << x2; n2[d + (E2 >> S2) + (u2 -= h)] = p2 << 24 | m << 16 | _ | 0, u2 !== 0; )
            ;
          for (h = 1 << b - 1; E2 & h; )
            h >>= 1;
          if (h !== 0 ? (E2 &= h - 1, E2 += h) : E2 = 0, v2++, --O2[b] == 0) {
            if (b === w)
              break;
            b = e2[r3 + a[v2]];
          }
          if (k < b && (E2 & f) !== l2) {
            for (S2 === 0 && (S2 = k), d += y2, z2 = 1 << (x2 = b - S2); x2 + S2 < w && !((z2 -= O2[x2 + S2]) <= 0); )
              x2++, z2 <<= 1;
            if (C2 += 1 << x2, t3 === 1 && 852 < C2 || t3 === 2 && 592 < C2)
              return 1;
            n2[l2 = E2 & f] = k << 24 | x2 << 16 | d - s | 0;
          }
        }
        return E2 !== 0 && (n2[d + E2] = b - S2 << 24 | 64 << 16 | 0), o.bits = k, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(t2, e, r2) {
      e.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(t2, e, r2) {
      var n2 = t2("../utils/common"), o = 0, h = 1;
      function i(t3) {
        for (var e2 = t3.length; 0 <= --e2; )
          t3[e2] = 0;
      }
      var s = 0, a = 29, u2 = 256, l2 = u2 + 1 + a, f = 30, d = 19, _ = 2 * l2 + 1, g = 15, c = 16, p2 = 7, m = 256, b = 16, v2 = 17, y2 = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l2 + 2));
      i(z2);
      var C2 = new Array(2 * f);
      i(C2);
      var E2 = new Array(512);
      i(E2);
      var A2 = new Array(256);
      i(A2);
      var I2 = new Array(a);
      i(I2);
      var O2, B2, R2, T2 = new Array(f);
      function D2(t3, e2, r3, i2, n3) {
        this.static_tree = t3, this.extra_bits = e2, this.extra_base = r3, this.elems = i2, this.max_length = n3, this.has_stree = t3 && t3.length;
      }
      function F2(t3, e2) {
        this.dyn_tree = t3, this.max_code = 0, this.stat_desc = e2;
      }
      function N2(t3) {
        return t3 < 256 ? E2[t3] : E2[256 + (t3 >>> 7)];
      }
      function U(t3, e2) {
        t3.pending_buf[t3.pending++] = 255 & e2, t3.pending_buf[t3.pending++] = e2 >>> 8 & 255;
      }
      function P2(t3, e2, r3) {
        t3.bi_valid > c - r3 ? (t3.bi_buf |= e2 << t3.bi_valid & 65535, U(t3, t3.bi_buf), t3.bi_buf = e2 >> c - t3.bi_valid, t3.bi_valid += r3 - c) : (t3.bi_buf |= e2 << t3.bi_valid & 65535, t3.bi_valid += r3);
      }
      function L2(t3, e2, r3) {
        P2(t3, r3[2 * e2], r3[2 * e2 + 1]);
      }
      function j(t3, e2) {
        for (var r3 = 0; r3 |= 1 & t3, t3 >>>= 1, r3 <<= 1, 0 < --e2; )
          ;
        return r3 >>> 1;
      }
      function Z(t3, e2, r3) {
        var i2, n3, s2 = new Array(g + 1), a2 = 0;
        for (i2 = 1; i2 <= g; i2++)
          s2[i2] = a2 = a2 + r3[i2 - 1] << 1;
        for (n3 = 0; n3 <= e2; n3++) {
          var o2 = t3[2 * n3 + 1];
          o2 !== 0 && (t3[2 * n3] = j(s2[o2]++, o2));
        }
      }
      function W(t3) {
        var e2;
        for (e2 = 0; e2 < l2; e2++)
          t3.dyn_ltree[2 * e2] = 0;
        for (e2 = 0; e2 < f; e2++)
          t3.dyn_dtree[2 * e2] = 0;
        for (e2 = 0; e2 < d; e2++)
          t3.bl_tree[2 * e2] = 0;
        t3.dyn_ltree[2 * m] = 1, t3.opt_len = t3.static_len = 0, t3.last_lit = t3.matches = 0;
      }
      function M2(t3) {
        8 < t3.bi_valid ? U(t3, t3.bi_buf) : 0 < t3.bi_valid && (t3.pending_buf[t3.pending++] = t3.bi_buf), t3.bi_buf = 0, t3.bi_valid = 0;
      }
      function H2(t3, e2, r3, i2) {
        var n3 = 2 * e2, s2 = 2 * r3;
        return t3[n3] < t3[s2] || t3[n3] === t3[s2] && i2[e2] <= i2[r3];
      }
      function G2(t3, e2, r3) {
        for (var i2 = t3.heap[r3], n3 = r3 << 1; n3 <= t3.heap_len && (n3 < t3.heap_len && H2(e2, t3.heap[n3 + 1], t3.heap[n3], t3.depth) && n3++, !H2(e2, i2, t3.heap[n3], t3.depth)); )
          t3.heap[r3] = t3.heap[n3], r3 = n3, n3 <<= 1;
        t3.heap[r3] = i2;
      }
      function K2(t3, e2, r3) {
        var i2, n3, s2, a2, o2 = 0;
        if (t3.last_lit !== 0)
          for (; i2 = t3.pending_buf[t3.d_buf + 2 * o2] << 8 | t3.pending_buf[t3.d_buf + 2 * o2 + 1], n3 = t3.pending_buf[t3.l_buf + o2], o2++, i2 === 0 ? L2(t3, n3, e2) : (L2(t3, (s2 = A2[n3]) + u2 + 1, e2), (a2 = w[s2]) !== 0 && P2(t3, n3 -= I2[s2], a2), L2(t3, s2 = N2(--i2), r3), (a2 = k[s2]) !== 0 && P2(t3, i2 -= T2[s2], a2)), o2 < t3.last_lit; )
            ;
        L2(t3, m, e2);
      }
      function Y(t3, e2) {
        var r3, i2, n3, s2 = e2.dyn_tree, a2 = e2.stat_desc.static_tree, o2 = e2.stat_desc.has_stree, h2 = e2.stat_desc.elems, u3 = -1;
        for (t3.heap_len = 0, t3.heap_max = _, r3 = 0; r3 < h2; r3++)
          s2[2 * r3] !== 0 ? (t3.heap[++t3.heap_len] = u3 = r3, t3.depth[r3] = 0) : s2[2 * r3 + 1] = 0;
        for (; t3.heap_len < 2; )
          s2[2 * (n3 = t3.heap[++t3.heap_len] = u3 < 2 ? ++u3 : 0)] = 1, t3.depth[n3] = 0, t3.opt_len--, o2 && (t3.static_len -= a2[2 * n3 + 1]);
        for (e2.max_code = u3, r3 = t3.heap_len >> 1; 1 <= r3; r3--)
          G2(t3, s2, r3);
        for (n3 = h2; r3 = t3.heap[1], t3.heap[1] = t3.heap[t3.heap_len--], G2(t3, s2, 1), i2 = t3.heap[1], t3.heap[--t3.heap_max] = r3, t3.heap[--t3.heap_max] = i2, s2[2 * n3] = s2[2 * r3] + s2[2 * i2], t3.depth[n3] = (t3.depth[r3] >= t3.depth[i2] ? t3.depth[r3] : t3.depth[i2]) + 1, s2[2 * r3 + 1] = s2[2 * i2 + 1] = n3, t3.heap[1] = n3++, G2(t3, s2, 1), 2 <= t3.heap_len; )
          ;
        t3.heap[--t3.heap_max] = t3.heap[1], function(t4, e3) {
          var r4, i3, n4, s3, a3, o3, h3 = e3.dyn_tree, u4 = e3.max_code, l3 = e3.stat_desc.static_tree, f2 = e3.stat_desc.has_stree, d2 = e3.stat_desc.extra_bits, c2 = e3.stat_desc.extra_base, p3 = e3.stat_desc.max_length, m2 = 0;
          for (s3 = 0; s3 <= g; s3++)
            t4.bl_count[s3] = 0;
          for (h3[2 * t4.heap[t4.heap_max] + 1] = 0, r4 = t4.heap_max + 1; r4 < _; r4++)
            p3 < (s3 = h3[2 * h3[2 * (i3 = t4.heap[r4]) + 1] + 1] + 1) && (s3 = p3, m2++), h3[2 * i3 + 1] = s3, u4 < i3 || (t4.bl_count[s3]++, a3 = 0, c2 <= i3 && (a3 = d2[i3 - c2]), o3 = h3[2 * i3], t4.opt_len += o3 * (s3 + a3), f2 && (t4.static_len += o3 * (l3[2 * i3 + 1] + a3)));
          if (m2 !== 0) {
            do {
              for (s3 = p3 - 1; t4.bl_count[s3] === 0; )
                s3--;
              t4.bl_count[s3]--, t4.bl_count[s3 + 1] += 2, t4.bl_count[p3]--, m2 -= 2;
            } while (0 < m2);
            for (s3 = p3; s3 !== 0; s3--)
              for (i3 = t4.bl_count[s3]; i3 !== 0; )
                u4 < (n4 = t4.heap[--r4]) || (h3[2 * n4 + 1] !== s3 && (t4.opt_len += (s3 - h3[2 * n4 + 1]) * h3[2 * n4], h3[2 * n4 + 1] = s3), i3--);
          }
        }(t3, e2), Z(s2, u3, t3.bl_count);
      }
      function X(t3, e2, r3) {
        var i2, n3, s2 = -1, a2 = e2[1], o2 = 0, h2 = 7, u3 = 4;
        for (a2 === 0 && (h2 = 138, u3 = 3), e2[2 * (r3 + 1) + 1] = 65535, i2 = 0; i2 <= r3; i2++)
          n3 = a2, a2 = e2[2 * (i2 + 1) + 1], ++o2 < h2 && n3 === a2 || (o2 < u3 ? t3.bl_tree[2 * n3] += o2 : n3 !== 0 ? (n3 !== s2 && t3.bl_tree[2 * n3]++, t3.bl_tree[2 * b]++) : o2 <= 10 ? t3.bl_tree[2 * v2]++ : t3.bl_tree[2 * y2]++, s2 = n3, u3 = (o2 = 0) === a2 ? (h2 = 138, 3) : n3 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
      }
      function V(t3, e2, r3) {
        var i2, n3, s2 = -1, a2 = e2[1], o2 = 0, h2 = 7, u3 = 4;
        for (a2 === 0 && (h2 = 138, u3 = 3), i2 = 0; i2 <= r3; i2++)
          if (n3 = a2, a2 = e2[2 * (i2 + 1) + 1], !(++o2 < h2 && n3 === a2)) {
            if (o2 < u3)
              for (; L2(t3, n3, t3.bl_tree), --o2 != 0; )
                ;
            else
              n3 !== 0 ? (n3 !== s2 && (L2(t3, n3, t3.bl_tree), o2--), L2(t3, b, t3.bl_tree), P2(t3, o2 - 3, 2)) : o2 <= 10 ? (L2(t3, v2, t3.bl_tree), P2(t3, o2 - 3, 3)) : (L2(t3, y2, t3.bl_tree), P2(t3, o2 - 11, 7));
            s2 = n3, u3 = (o2 = 0) === a2 ? (h2 = 138, 3) : n3 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
      }
      i(T2);
      var q2 = false;
      function J2(t3, e2, r3, i2) {
        P2(t3, (s << 1) + (i2 ? 1 : 0), 3), function(t4, e3, r4, i3) {
          M2(t4), i3 && (U(t4, r4), U(t4, ~r4)), n2.arraySet(t4.pending_buf, t4.window, e3, r4, t4.pending), t4.pending += r4;
        }(t3, e2, r3, true);
      }
      r2._tr_init = function(t3) {
        q2 || (function() {
          var t4, e2, r3, i2, n3, s2 = new Array(g + 1);
          for (i2 = r3 = 0; i2 < a - 1; i2++)
            for (I2[i2] = r3, t4 = 0; t4 < 1 << w[i2]; t4++)
              A2[r3++] = i2;
          for (A2[r3 - 1] = i2, i2 = n3 = 0; i2 < 16; i2++)
            for (T2[i2] = n3, t4 = 0; t4 < 1 << k[i2]; t4++)
              E2[n3++] = i2;
          for (n3 >>= 7; i2 < f; i2++)
            for (T2[i2] = n3 << 7, t4 = 0; t4 < 1 << k[i2] - 7; t4++)
              E2[256 + n3++] = i2;
          for (e2 = 0; e2 <= g; e2++)
            s2[e2] = 0;
          for (t4 = 0; t4 <= 143; )
            z2[2 * t4 + 1] = 8, t4++, s2[8]++;
          for (; t4 <= 255; )
            z2[2 * t4 + 1] = 9, t4++, s2[9]++;
          for (; t4 <= 279; )
            z2[2 * t4 + 1] = 7, t4++, s2[7]++;
          for (; t4 <= 287; )
            z2[2 * t4 + 1] = 8, t4++, s2[8]++;
          for (Z(z2, l2 + 1, s2), t4 = 0; t4 < f; t4++)
            C2[2 * t4 + 1] = 5, C2[2 * t4] = j(t4, 5);
          O2 = new D2(z2, w, u2 + 1, l2, g), B2 = new D2(C2, k, 0, f, g), R2 = new D2(new Array(0), x2, 0, d, p2);
        }(), q2 = true), t3.l_desc = new F2(t3.dyn_ltree, O2), t3.d_desc = new F2(t3.dyn_dtree, B2), t3.bl_desc = new F2(t3.bl_tree, R2), t3.bi_buf = 0, t3.bi_valid = 0, W(t3);
      }, r2._tr_stored_block = J2, r2._tr_flush_block = function(t3, e2, r3, i2) {
        var n3, s2, a2 = 0;
        0 < t3.level ? (t3.strm.data_type === 2 && (t3.strm.data_type = function(t4) {
          var e3, r4 = 4093624447;
          for (e3 = 0; e3 <= 31; e3++, r4 >>>= 1)
            if (1 & r4 && t4.dyn_ltree[2 * e3] !== 0)
              return o;
          if (t4.dyn_ltree[18] !== 0 || t4.dyn_ltree[20] !== 0 || t4.dyn_ltree[26] !== 0)
            return h;
          for (e3 = 32; e3 < u2; e3++)
            if (t4.dyn_ltree[2 * e3] !== 0)
              return h;
          return o;
        }(t3)), Y(t3, t3.l_desc), Y(t3, t3.d_desc), a2 = function(t4) {
          var e3;
          for (X(t4, t4.dyn_ltree, t4.l_desc.max_code), X(t4, t4.dyn_dtree, t4.d_desc.max_code), Y(t4, t4.bl_desc), e3 = d - 1; 3 <= e3 && t4.bl_tree[2 * S2[e3] + 1] === 0; e3--)
            ;
          return t4.opt_len += 3 * (e3 + 1) + 5 + 5 + 4, e3;
        }(t3), n3 = t3.opt_len + 3 + 7 >>> 3, (s2 = t3.static_len + 3 + 7 >>> 3) <= n3 && (n3 = s2)) : n3 = s2 = r3 + 5, r3 + 4 <= n3 && e2 !== -1 ? J2(t3, e2, r3, i2) : t3.strategy === 4 || s2 === n3 ? (P2(t3, 2 + (i2 ? 1 : 0), 3), K2(t3, z2, C2)) : (P2(t3, 4 + (i2 ? 1 : 0), 3), function(t4, e3, r4, i3) {
          var n4;
          for (P2(t4, e3 - 257, 5), P2(t4, r4 - 1, 5), P2(t4, i3 - 4, 4), n4 = 0; n4 < i3; n4++)
            P2(t4, t4.bl_tree[2 * S2[n4] + 1], 3);
          V(t4, t4.dyn_ltree, e3 - 1), V(t4, t4.dyn_dtree, r4 - 1);
        }(t3, t3.l_desc.max_code + 1, t3.d_desc.max_code + 1, a2 + 1), K2(t3, t3.dyn_ltree, t3.dyn_dtree)), W(t3), i2 && M2(t3);
      }, r2._tr_tally = function(t3, e2, r3) {
        return t3.pending_buf[t3.d_buf + 2 * t3.last_lit] = e2 >>> 8 & 255, t3.pending_buf[t3.d_buf + 2 * t3.last_lit + 1] = 255 & e2, t3.pending_buf[t3.l_buf + t3.last_lit] = 255 & r3, t3.last_lit++, e2 === 0 ? t3.dyn_ltree[2 * r3]++ : (t3.matches++, e2--, t3.dyn_ltree[2 * (A2[r3] + u2 + 1)]++, t3.dyn_dtree[2 * N2(e2)]++), t3.last_lit === t3.lit_bufsize - 1;
      }, r2._tr_align = function(t3) {
        P2(t3, 2, 3), L2(t3, m, z2), function(t4) {
          t4.bi_valid === 16 ? (U(t4, t4.bi_buf), t4.bi_buf = 0, t4.bi_valid = 0) : 8 <= t4.bi_valid && (t4.pending_buf[t4.pending++] = 255 & t4.bi_buf, t4.bi_buf >>= 8, t4.bi_valid -= 8);
        }(t3);
      };
    }, { "../utils/common": 41 }], 53: [function(t2, e, r2) {
      e.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(t2, e, r2) {
      e.exports = typeof setImmediate == "function" ? setImmediate : function() {
        var t3 = [].slice.apply(arguments);
        t3.splice(1, 0, 0), setTimeout.apply(null, t3);
      };
    }, {}] }, {}, [10])(10);
  });
})(jszip_min);
var JSZip = jszip_min.exports;
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined$1(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject$2(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction$1(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject$2(val) && isFunction$1(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l2 = obj.length; i < l2; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge$1() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge$1(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge$1({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l2 = arguments.length; i < l2; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$d = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject: isObject$2,
  isPlainObject,
  isUndefined: isUndefined$1,
  isDate,
  isFile,
  isBlob,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge: merge$1,
  extend,
  trim,
  stripBOM
};
var utils$c = utils$d;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$c.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$c.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$c.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$c.forEach(val, function parseValue(v2) {
        if (utils$c.isDate(v2)) {
          v2 = v2.toISOString();
        } else if (utils$c.isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$b = utils$d;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$b.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$a = utils$d;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value, name2) {
    if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name2];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config2, code, request2, response) {
  error.config = config2;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config2, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config2, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$9 = utils$d;
var cookies$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name2, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name2 + "=" + encodeURIComponent(value));
      if (utils$9.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$9.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$9.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name2) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name2) {
      this.write(name2, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$8 = utils$d;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$8.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$8.trim(line.substr(0, i)).toLowerCase();
    val = utils$8.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$7 = utils$d;
var isURLSameOrigin$1 = utils$7.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$7.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
var utils$6 = utils$d;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    if (utils$6.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL$1(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle2(resolve, reject, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config2, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config2, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config2, config2.transitional && config2.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$6.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$6.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken) {
      config2.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request2) {
          return;
        }
        request2.abort();
        reject(cancel);
        request2 = null;
      });
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$5 = utils$d;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$5.isFormData(data) || utils$5.isArrayBuffer(data) || utils$5.isBuffer(data) || utils$5.isStream(data) || utils$5.isFile(data) || utils$5.isBlob(data)) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data.toString();
    }
    if (utils$5.isObject(data) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional2 = this.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults$3.headers = {
  common: {
    "Accept": "application/json, text/plain, */*"
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$d;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$3 = utils$d;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
}
var dispatchRequest$1 = function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData2.call(config2, config2.data, config2.headers, config2.transformRequest);
  config2.headers = utils$3.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
  utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config2.headers[method];
  });
  var adapter = config2.adapter || defaults$1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData2.call(config2, response.data, response.headers, config2.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$d;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  var valueFromConfig2Keys = ["url", "method", "data"];
  var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
  var defaultToConfig2Keys = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ];
  var directMergeKeys = ["validateStatus"];
  function getMergedValue(target, source2) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source2)) {
      return utils$2.merge(target, source2);
    } else if (utils$2.isPlainObject(source2)) {
      return utils$2.merge({}, source2);
    } else if (utils$2.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  }
  utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(void 0, config2[prop]);
    }
  });
  utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      config3[prop] = getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  utils$2.forEach(directMergeKeys, function merge2(prop) {
    if (prop in config2) {
      config3[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config3[prop] = getMergedValue(void 0, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils$2.forEach(otherKeys, mergeDeepProperties);
  return config3;
};
const name = "axios";
const version = "0.21.4";
const description = "Promise based HTTP client for the browser and node.js";
const main = "index.js";
const scripts = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
};
const repository = {
  type: "git",
  url: "https://github.com/axios/axios.git"
};
const keywords = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
];
const author = "Matt Zabriskie";
const license = "MIT";
const bugs = {
  url: "https://github.com/axios/axios/issues"
};
const homepage = "https://axios-http.com";
const devDependencies = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
};
const browser = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
const jsdelivr = "dist/axios.min.js";
const unpkg = "dist/axios.min.js";
const typings = "./index.d.ts";
const dependencies = {
  "follow-redirects": "^1.14.0"
};
const bundlesize = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
];
var require$$0 = {
  name,
  version,
  description,
  main,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  browser,
  jsdelivr,
  unpkg,
  typings,
  dependencies,
  bundlesize
};
var pkg = require$$0;
var validators$3 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$3[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
function isOlderVersion(version2, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
  var destVer = version2.split(".");
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}
validators$3.transitional = function transitional(validator2, version2, message) {
  var isDeprecated = version2 && isOlderVersion(version2);
  function formatMessage(opt, desc) {
    return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed in " + version2));
    }
    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  isOlderVersion,
  assertOptions,
  validators: validators$3
};
var utils$1 = utils$d;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators$2 = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config2) {
  if (typeof config2 === "string") {
    config2 = arguments[1] || {};
    config2.url = arguments[0];
  } else {
    config2 = config2 || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional2 = config2.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators$2.transitional(validators$2.boolean, "1.0.0"),
      forcedJSONParsing: validators$2.transitional(validators$2.boolean, "1.0.0"),
      clarifyTimeoutError: validators$2.transitional(validators$2.boolean, "1.0.0")
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  return buildURL2(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data
    }));
  };
});
var Axios_1 = Axios$1;
function Cancel$1(message) {
  this.message = message;
}
Cancel$1.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$1.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils = utils$d;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig2(axios$1.defaults, instanceConfig));
};
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof commonjsGlobal == "object" && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", typeof f2 != "string")
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
        return c(b2, d2, e2);
      var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && typeof FileReader != "undefined") {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l2 = f.URL || f.webkitURL, m = l2.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l2.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source2), true).forEach(function(key) {
        _defineProperty$2(target, key, source2[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source2));
    } else {
      ownKeys$2(Object(source2)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source2, key));
      });
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source2), true).forEach(function(key) {
        _defineProperty$1(target, key, source2[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source2));
    } else {
      ownKeys$1(Object(source2)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source2, key));
      });
    }
  }
  return target;
}
function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x2) {
    return fns.reduceRight(function(y2, f) {
      return f(y2);
    }, x2);
  };
}
function curry$1(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject$1(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty$1(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject$1(changes))
    errorHandler$1("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty$1(initial, field);
  }))
    errorHandler$1("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector))
    errorHandler$1("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$1(handler)))
    errorHandler$1("handlerType");
  if (isObject$1(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  }))
    errorHandler$1("handlersType");
}
function validateInitial(initial) {
  if (!initial)
    errorHandler$1("initialIsRequired");
  if (!isObject$1(initial))
    errorHandler$1("initialType");
  if (isEmpty(initial))
    errorHandler$1("initialContent");
}
function throwError$1(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages$1 = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create2(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state, handler);
  var update = curry$1(updateState)(state);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators$1.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index$1 = {
  create: create2
};
var config$1 = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"
  }
};
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function validateConfig(config2) {
  if (!config2)
    errorHandler("configIsRequired");
  if (!isObject(config2))
    errorHandler("configType");
  if (config2.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config2.urls.monacoBase
      }
    };
  }
  return config2;
}
function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}
function throwError(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}
var errorMessages = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};
var compose = function compose2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x2) {
    return fns.reduceRight(function(y2, f) {
      return f(y2);
    }, x2);
  };
};
function merge(target, source2) {
  Object.keys(source2).forEach(function(key) {
    if (source2[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source2[key], merge(target[key], source2[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source2);
}
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var _state$create = index$1.create({
  config: config$1,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}), _state$create2 = _slicedToArray(_state$create, 2), getState = _state$create2[0], setState = _state$create2[1];
function config(config2) {
  setState(function(state) {
    return {
      config: merge(state.config, validators.config(config2))
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized
    };
  });
  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return makeCancelable(Promise.resolve(window.monaco));
    }
    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }
  return makeCancelable(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config2 = _ref2.config, reject = _ref2.reject;
    return {
      config: config2,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config2 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config2,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config,
  init,
  __getMonacoInstance
};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source2 = arguments[i];
      for (var key in source2) {
        if (Object.prototype.hasOwnProperty.call(source2, key)) {
          target[key] = source2[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const loadingStyles = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};
function Loading$1({
  content
}) {
  return /* @__PURE__ */ React.createElement("div", {
    style: loadingStyles
  }, content);
}
const styles$1 = {
  wrapper: {
    display: "flex",
    position: "relative",
    textAlign: "initial"
  },
  fullWidth: {
    width: "100%"
  },
  hide: {
    display: "none"
  }
};
function MonacoContainer$1({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /* @__PURE__ */ React.createElement("section", _extends({
    style: __spreadProps(__spreadValues({}, styles$1.wrapper), {
      width,
      height
    })
  }, wrapperProps), !isEditorReady && /* @__PURE__ */ React.createElement(Loading$1, {
    content: loading
  }), /* @__PURE__ */ React.createElement("div", {
    ref: _ref,
    style: __spreadValues(__spreadValues({}, styles$1.fullWidth), !isEditorReady && styles$1.hide),
    className
  }));
}
MonacoContainer$1.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  isEditorReady: PropTypes.bool.isRequired,
  className: PropTypes.string,
  wrapperProps: PropTypes.object
};
var MonacoContainer = /* @__PURE__ */ React.memo(MonacoContainer$1);
function useMount(effect) {
  React.useEffect(effect, []);
}
function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = React.useRef(true);
  React.useEffect(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}
function noop() {
}
function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}
function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}
function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}
function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}
function isUndefined(input) {
  return input === void 0;
}
({
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,
  originalModelPath: PropTypes.string,
  modifiedModelPath: PropTypes.string,
  keepCurrentOriginalModel: PropTypes.bool,
  keepCurrentModifiedModel: PropTypes.bool,
  theme: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,
  beforeMount: PropTypes.func,
  onMount: PropTypes.func
});
function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const viewStates = /* @__PURE__ */ new Map();
function Editor$1({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,
  width,
  height,
  className,
  wrapperProps,
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = React.useState(true);
  const monacoRef = React.useRef(null);
  const editorRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const onMountRef = React.useRef(onMount);
  const beforeMountRef = React.useRef(beforeMount);
  const subscriptionRef = React.useRef(null);
  const valueRef = React.useRef(value);
  const previousPath = usePrevious(path);
  useMount(() => {
    const cancelable = loader.init();
    cancelable.then((monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch((error) => (error === null || error === void 0 ? void 0 : error.type) !== "cancelation" && console.error("Monaco initialization: error:", error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  useUpdate(() => {
    const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);
    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  useUpdate(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits("", [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  useUpdate(() => {
    if (!isUndefined(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = React.useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, __spreadValues({
      model: defaultModel,
      automaticLayout: true
    }, options), overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  React.useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  React.useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);
  valueRef.current = value;
  React.useEffect(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;
      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent((event) => {
        const editorValue = editorRef.current.getValue();
        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]);
  React.useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers((uris) => {
        var _editorRef$current$ge;
        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;
        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find((uri) => uri.path === editorUri.path);
          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);
  function disposeEditor() {
    var _subscriptionRef$curr2;
    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();
    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;
      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }
    editorRef.current.dispose();
  }
  return /* @__PURE__ */ React.createElement(MonacoContainer, {
    width,
    height,
    isEditorReady,
    loading,
    _ref: containerRef,
    className,
    wrapperProps
  });
}
Editor$1.propTypes = {
  defaultValue: PropTypes.string,
  defaultPath: PropTypes.string,
  defaultLanguage: PropTypes.string,
  value: PropTypes.string,
  language: PropTypes.string,
  path: PropTypes.string,
  theme: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  overrideServices: PropTypes.object,
  saveViewState: PropTypes.bool,
  keepCurrentModel: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperProps: PropTypes.object,
  beforeMount: PropTypes.func,
  onMount: PropTypes.func,
  onChange: PropTypes.func,
  onValidate: PropTypes.func
};
Editor$1.defaultProps = {
  theme: "light",
  loading: "Loading...",
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,
  width: "100%",
  height: "100%",
  wrapperProps: {},
  beforeMount: noop,
  onMount: noop,
  onValidate: noop
};
var index = /* @__PURE__ */ React.memo(Editor$1);
var Component = {};
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source2) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n = 60103, p = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = typeof Symbol === "function" && Symbol.iterator;
function y(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D() {
}
D.prototype = C.prototype;
function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = true;
var G = { current: null }, H = Object.prototype.hasOwnProperty, I = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h = null;
  if (b != null)
    for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (g === 1)
    d.children = c;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    d.children = f;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      d[e] === void 0 && (d[e] = g[e]);
  return { $$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current };
}
function K(a, b) {
  return { $$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M = /\/+/g;
function N(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h = false;
  if (a === null)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n:
          case p:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N(k, g);
      h += O(k, b, c, f, d);
    }
  else if (f = y(a), typeof f === "function")
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R = { current: null };
function S() {
  var a = R.current;
  if (a === null)
    throw Error(z(321));
  return a;
}
var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P, forEach: function(a, b, c) {
  P(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h = G.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    e.children = c;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S().useRef(a);
};
react_production_min.useState = function(a) {
  return S().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format$1(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format$1("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;
var _react = _interopRequireDefault(react.exports);
var _copyToClipboard = _interopRequireDefault(copyToClipboard);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source2, true).forEach(function(key) {
        _defineProperty(target, key, source2[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source2));
    } else {
      ownKeys(source2).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source2, key));
      });
    }
  }
  return target;
}
function _objectWithoutProperties(source2, excluded) {
  if (source2 == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source2, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key))
        continue;
      target[key] = source2[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source2, excluded) {
  if (source2 == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source2);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source2[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CopyToClipboard$1 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CopyToClipboard2, _React$PureComponent);
  function CopyToClipboard2() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, CopyToClipboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard2)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
      var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
      var elem = _react["default"].Children.only(children);
      var result = (0, _copyToClipboard["default"])(text, options);
      if (onCopy) {
        onCopy(text, result);
      }
      if (elem && elem.props && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    });
    return _this;
  }
  _createClass(CopyToClipboard2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
      _this$props2.text;
      _this$props2.onCopy;
      _this$props2.options;
      var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);
      var elem = _react["default"].Children.only(children);
      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);
  return CopyToClipboard2;
}(_react["default"].PureComponent);
Component.CopyToClipboard = CopyToClipboard$1;
_defineProperty(CopyToClipboard$1, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var _require = Component, CopyToClipboard = _require.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
const Upload = "_Upload_mcvbq_6";
const Loading = "_Loading_mcvbq_22";
const Unsupport = "_Unsupport_mcvbq_27";
const Menu = "_Menu_mcvbq_45";
const Copy = "_Copy_mcvbq_53";
const Visible = "_Visible_mcvbq_60";
const Invisible = "_Invisible_mcvbq_70";
const State = "_State_mcvbq_75";
const OK = "_OK_mcvbq_79";
const Icon = "_Icon_mcvbq_83";
const Language = "_Language_mcvbq_88";
const Editor = "_Editor_mcvbq_98";
const Filter = "_Filter_mcvbq_105";
const Download = "_Download_mcvbq_110";
const Input = "_Input_mcvbq_121";
const Tree = "_Tree_mcvbq_132";
const Size = "_Size_mcvbq_160";
const Modified = "_Modified_mcvbq_161";
const Name = "_Name_mcvbq_165";
const Highlight = "_Highlight_mcvbq_179";
var styles = {
  "File-Browser": "_File-Browser_mcvbq_1",
  Upload,
  Loading,
  Unsupport,
  "Code-Box": "_Code-Box_mcvbq_32",
  Menu,
  Copy,
  Visible,
  Invisible,
  State,
  OK,
  Icon,
  Language,
  Editor,
  Filter,
  Download,
  Input,
  Tree,
  Size,
  Modified,
  Name,
  Highlight
};
const SUPPORT_EXTENSIONS = {
  jsx: "javascript",
  tsx: "javascript",
  js: "javascript",
  java: "java",
  json: "json",
  yml: "yaml",
  py: "python",
  go: "go",
  css: "css",
  sh: "shell",
  sql: "sql",
  kt: "kotlin",
  html: "html",
  cpp: "cpp",
  c: "c",
  ts: "typescript",
  xml: "xml",
  txt: "plaintext",
  gradle: "plaintext",
  properties: "plaintext",
  gitignore: "plaintext"
};
function formatFileSize(fileSize) {
  var i = 0;
  var byteUnits = [" B", " kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
  while (fileSize > 1024) {
    fileSize = fileSize / 1024;
    i++;
  }
  return Math.round(fileSize) + byteUnits[i];
}
function format(date) {
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  return `${date.getFullYear()}\u5E74${(mm > 9 ? "" : "0") + mm}\u6708${(dd > 9 ? "" : "0") + dd}\u65E5`;
}
function random(len = 32) {
  var seed = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  var str = "";
  for (var i = 0; i < len; i++) {
    str += seed.charAt(Math.floor(Math.random() * seed.length));
  }
  return str;
}
function renderCopyIcon(color = "#333333") {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    className: styles.Icon,
    viewBox: "0 0 24 24",
    width: "24px",
    fill: color
  }, /* @__PURE__ */ React.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18,2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,16H9V4h9V16z M3,15v-2h2v2H3z M3,9.5h2v2H3V9.5z M10,20h2v2h-2V20z M3,18.5v-2h2v2H3z M5,22c-1.1,0-2-0.9-2-2h2V22z M8.5,22h-2v-2h2V22z M13.5,22L13.5,22l0-2h2 v0C15.5,21.1,14.6,22,13.5,22z M5,6L5,6l0,2H3v0C3,6.9,3.9,6,5,6z"
  }));
}
function renderOkIcon(color = "#333333") {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.Icon,
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"
  }));
}
const Widget$2 = ({ file: file2, text }) => {
  const [copied, setCopied] = React.useState();
  const editorRef = React.useRef();
  const containerRef = React.useRef();
  const onSizeChanged = (editorRef2, containerRef2) => {
    if (containerRef2.current == null) {
      return;
    }
    editorRef2.current.layout({
      width: containerRef2.current.clientWidth,
      height: editorRef2.current.getContentHeight()
    });
  };
  const handleEditorDidMount = (editorRef2, containerRef2) => {
    setTimeout(() => {
      onSizeChanged(editorRef2, containerRef2);
    }, 100);
    editorRef2.current.onDidContentSizeChange(({ contentHeightChanged }) => {
      if (!contentHeightChanged) {
        return;
      }
      onSizeChanged(editorRef2, containerRef2);
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["Code-Box"]
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: styles.Language
  }, file2.name), /* @__PURE__ */ React.createElement("div", {
    className: styles.Menu
  }, /* @__PURE__ */ React.createElement(lib.CopyToClipboard, {
    text,
    onCopy: () => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3e3);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Copy
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${styles.State} ${!copied ? styles.Visible : styles.Invisible}`
  }, renderCopyIcon("#999")), /* @__PURE__ */ React.createElement("div", {
    className: `${styles.OK} ${styles.State} ${copied ? styles.Visible : styles.Invisible}`
  }, renderOkIcon("#999")))))), /* @__PURE__ */ React.createElement("div", {
    ref: containerRef,
    className: styles.Editor
  }, /* @__PURE__ */ React.createElement(index, {
    language: SUPPORT_EXTENSIONS[file2.extension],
    value: text,
    options: {
      readOnly: true,
      fontSize: 14,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false
      },
      wrappingStrategy: "advanced",
      lineNumbersMinChars: 4,
      wordWrap: "off",
      overviewRulerLanes: 0,
      renderLineHighlight: "none",
      scrollbar: {
        alwaysConsumeMouseWheel: false
      }
    },
    onMount: (editor, monaco) => {
      editorRef.current = editor;
      handleEditorDidMount(editorRef, containerRef);
    }
  })));
};
function renderIcon(f) {
  if (f.dir) {
    return f.open ? folderOpened() : folder();
  }
  switch (f.extension) {
    default: {
      return file();
    }
  }
}
function folder() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "18px",
    style: { paddingLeft: "1px" },
    viewBox: "0 0 512 512",
    width: "18px",
    fill: "#333",
    className: styles.Icon
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "currentColor",
    d: "M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"
  }));
}
function folderOpened() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20px",
    width: "20px",
    fill: "#333",
    className: styles.Icon,
    viewBox: "0 0 576 512"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"
  }));
}
function file() {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20px",
    width: "20px",
    fill: "#333",
    className: styles.Icon,
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
  }));
}
const Widget$1 = ({ files, zipFileRef }) => {
  const [text, setText] = React.useState();
  const [value, setValue] = React.useState();
  const [file2, setFile] = React.useState();
  const [fileList, setFileList] = React.useState([]);
  const idRef = React.useRef(random());
  React.useEffect(() => {
    const searchList = files.filter((f) => {
      if (!!value) {
        return f.path.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      } else {
        return true;
      }
    });
    setFileList(files.filter((f) => {
      for (let i in searchList) {
        if (searchList[i].path.startsWith(f.path)) {
          return true;
        }
      }
      return false;
    }).map((f) => {
      if (!!value) {
        f.open = true;
      } else {
        f.open = false;
      }
      return f;
    }));
  }, [files, value]);
  const downloadFile = React.useCallback(() => {
    if (!zipFileRef.current) {
      return;
    }
    zipFileRef.current.generateAsync({ type: "blob" }).then(function(blob) {
      FileSaver_min.exports.saveAs(blob, "source.zip");
    });
  }, []);
  const updateZipText = React.useCallback(async (key) => {
    setText(await zipFileRef.current.file(key).async("text"));
  }, []);
  const renderDetail = React.useCallback(() => {
    const size = zipFileRef.current.file(file2.path)._data.uncompressedSize;
    if (size > 1024 * 100) {
      return /* @__PURE__ */ React.createElement("div", {
        className: styles.Unsupport
      }, "\u6587\u4EF6\u592A\u5927\uFF0C\u8BF7\u4E0B\u8F7D\u67E5\u770B");
    } else if (!SUPPORT_EXTENSIONS[file2.extension] && zipFileRef.current) {
      return /* @__PURE__ */ React.createElement("div", {
        className: styles.Unsupport
      }, "\u8BE5\u6587\u4EF6\u4E0D\u652F\u6301\u5728\u7EBF\u67E5\u770B");
    }
    updateZipText(file2.path);
    return /* @__PURE__ */ React.createElement(Widget$2, {
      file: file2,
      text
    });
  }, [text, file2]);
  React.useEffect(() => {
    let element = document.getElementById(idRef.current);
    if (element) {
      element.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [text]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.Tree
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.Filter
  }, /* @__PURE__ */ React.createElement("input", {
    placeholder: "\u641C\u7D22",
    className: styles.Input,
    type: "text",
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement("div", {
    onClick: () => {
      downloadFile();
    },
    className: styles.Download
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#333"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
  })))), /* @__PURE__ */ React.createElement("table", {
    cellSpacing: "0",
    cellPadding: "0"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "\u6587\u4EF6"), /* @__PURE__ */ React.createElement("th", {
    className: styles.Size
  }, "\u5927\u5C0F"), /* @__PURE__ */ React.createElement("th", {
    className: styles.Modified
  }, "\u4FEE\u6539\u65F6\u95F4"))), /* @__PURE__ */ React.createElement("tbody", null, fileList.filter((f) => {
    if (f.depth === 0) {
      return true;
    }
    let show = true;
    fileList.forEach((e) => {
      const subpath = f.path.substr(e.path.length);
      if (e.dir && e.path !== f.path && f.path.startsWith(e.path) && subpath.startsWith("/")) {
        show = show && e.open;
      }
    });
    return show;
  }).map((f, index2) => {
    return /* @__PURE__ */ React.createElement("tr", {
      key: index2,
      onClick: () => {
        if (f.dir) {
          setFileList((val) => {
            const list = Array.from(val);
            list.forEach((file22) => {
              if (file22.path === f.path) {
                file22.open = !file22.open;
              }
            });
            return list;
          });
        } else {
          setFile(f);
        }
      },
      className: `${file2 && file2.path === f.path ? styles.Highlight : ""}`
    }, /* @__PURE__ */ React.createElement("td", {
      className: styles.Name,
      style: {
        paddingLeft: `${f.depth * 16}px`
      }
    }, /* @__PURE__ */ React.createElement("div", null, renderIcon(f), f.name)), /* @__PURE__ */ React.createElement("td", {
      className: styles.Size
    }, f.dir ? "" : formatFileSize(f.size)), /* @__PURE__ */ React.createElement("td", {
      className: styles.Modified
    }, format(f.modified)));
  }))), file2 ? /* @__PURE__ */ React.createElement("div", {
    id: idRef.current
  }, renderDetail()) : null);
};
const Widget = ({ options }) => {
  const {
    input,
    onChange,
    onError,
    mode = "display",
    api: { upload }
  } = options;
  const [loading, setLoading] = React.useState();
  const [uploading, setUploading] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const zipFileRef = React.useRef();
  const getZipFiles = React.useCallback(async (zipUrl) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: zipUrl,
        responseType: "arraybuffer"
      });
      const zipFile = await JSZip.loadAsync(response.data);
      zipFileRef.current = zipFile;
      const fileList = Object.values(zipFile.files).filter((f) => {
        return !f.name.startsWith("__MACOSX");
      }).map((f) => {
        const path = f.name.endsWith("/") ? f.name.substring(0, f.name.length - 1) : f.name;
        const depth = path.split("/").length - 1;
        let index2 = path.lastIndexOf("/");
        const name2 = index2 > 0 ? path.substring(index2 + 1) : path;
        const file2 = {
          dir: f.dir,
          open: false,
          depth,
          path,
          name: name2,
          size: f.dir ? 0 : f._data.uncompressedSize,
          modified: f.date
        };
        index2 = name2.lastIndexOf(".");
        if (!f.dir && index2 >= 0) {
          const extension = name2.substring(index2 + 1);
          file2["extension"] = extension;
        }
        return file2;
      }).sort((a, b) => {
        for (let i = 0; i < a.path.length && i < b.path.length; i++) {
          if (a.path[i] === "/" && b.path[i] !== "/") {
            return -1;
          }
          if (b.path[i] === "/" && a.path[i] !== "/") {
            return 1;
          }
          if (a.path[i] != b.path[i]) {
            return a.path[i].charCodeAt(0) - b.path[i].charCodeAt(0);
          }
        }
        return a.path.length - b.path.length;
      });
      setFiles(fileList);
    } catch (e) {
      onError(e);
    } finally {
      setLoading(false);
    }
  }, []);
  React.useEffect(() => {
    if (!input) {
      return;
    }
    getZipFiles(input);
  }, [input]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles["File-Browser"]
  }, mode == "edit" ? /* @__PURE__ */ React.createElement("label", {
    className: styles.Upload
  }, /* @__PURE__ */ React.createElement("input", {
    type: "file",
    accept: "aplication/zip",
    onChange: async (e) => {
      if (e.target.files.length === 0) {
        return;
      }
      setUploading(true);
      try {
        const { url } = await upload(e.target.files[0]);
        onChange(url);
      } finally {
        setUploading(false);
      }
    }
  }), uploading ? "\u6B63\u5728\u4E0A\u4F20..." : "\u4E0A\u4F20zip\u5305") : null, loading ? /* @__PURE__ */ React.createElement("div", {
    className: styles.Loading
  }, "\u52A0\u8F7D\u4E2D...") : /* @__PURE__ */ React.createElement(Widget$1, {
    files,
    zipFileRef
  }));
};
export { Widget as default };
