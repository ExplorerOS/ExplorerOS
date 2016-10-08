/*! Copyright © 2016 Brian Wang, http://explorerOS.com */

(function(a, b) {
    var c = function(g, f) {
        var h = {
            issizeX: 0,
            issizeY: 0,
            issizeminX: 800,
            issizeminY: 600,
            islocked: false,
            isappmax: 20,
            isappnow: -1,
            isappsqn: [],
            isappidx: [],
            sele: {},
            waiter: {},
            msger: {},
            start: {},
            app: [],
            qlaunch: {},
            taskbar: {},
            user: {},
            date: {},
            langbar: {},
            config: {},
            exit: {},
            load: function() {},
            init: function() {},
            resize: function() {},
            refresh: function() {},
            newapp: function() {},
            clsapp: function() {},
            actapp: function() {},
            changelang: function() {},
            remoteon: function() {},
            hotkey: {
                global: function() {},
                local: function() {}
            },
            fn: {},
            lang: {},
            stl: {},
            xtn: {},
            idb: {},
            isfocused: false,
            isrepdur: 50,
            islanguage: 0,
            iswkpath: "ajax",
            isbrowser: ""
        };
        var d = {
            idbo: a.indexedDB || a.mozIndexedDB || a.webkitIndexedDB || a.msIndexedDB,
            idbt: a.IDBTransaction || a.webkitIDBTransaction || a.msIDBTransaction,
            idbk: a.IDBKeyRange || a.webkitIDBKeyRange || a.msIDBKeyRange
        };
        h.lang.sys = {
            operation_center: [ "Operation Center" ],
            task_center: [ "Task Center" ],
            attention: [ "Attention" ],
            warning: [ "Warning" ],
            confirm: [ "Confirm" ],
            ok: [ "OK" ],
            yes: [ "Yes" ],
            no: [ "No" ],
            sure_to_logout: [ "Are you sure you want to log out?" ],
            no_more_window: [ "Too many windows have been opened. Cannot open more!" ],
            window_is_open: [ "The window has been opened. Do you want to activate it?" ]
        };
        h.isbrowser = function() {
            var p = "";
            var m = navigator.userAgent.toLowerCase();
            var k = m.indexOf(".net") >= 0 || m.indexOf("ie") >= 0;
            var o = m.indexOf("edge") >= 0;
            var n = m.indexOf("firefox") >= 0;
            var l = m.indexOf("opera") >= 0 || m.indexOf("opr") >= 0;
            var j = m.indexOf("safari") >= 0;
            var i = m.indexOf("chrome") >= 0;
            p = k && "ie" || o && !k && "edge" || n && "firefox" || l && "opera" || j && !i && !l && "safari" || i && !l && "chrome" || "";
            console.log("Client is " + p);
            return p;
        }();
        h.fn.loadjs = function(k, j, i) {
            if (j === 1) {
                jQuery.ajaxSetup({
                    cache: false
                });
            } else {
                if (j === 2) {
                    jQuery.ajaxSetup({
                        cache: true
                    });
                } else {
                    jQuery.ajaxSetup({
                        cache: false
                    });
                }
            }
            jQuery.getScript(k, function() {
                jQuery.ajaxSetup({
                    cache: true
                });
                typeof i === "function" && i();
            });
        };
        h.fn.loadjss = function(k, j, i) {
            d.loadjss.obj = k;
            d.loadjss.len = k.length;
            d.loadjss.id = 0;
            d.loadjss.cbk = i || function() {};
            d.loadjss(j);
        };
        d.loadjss = function(i) {
            if (d.loadjss.id < d.loadjss.len) {
                if (i === 1) {
                    jQuery.ajaxSetup({
                        cache: false
                    });
                } else {
                    if (i === 2) {
                        jQuery.ajaxSetup({
                            cache: true
                        });
                    } else {
                        jQuery.ajaxSetup({
                            cache: false
                        });
                    }
                }
                jQuery.getScript(d.loadjss.obj[d.loadjss.id], function() {
                    d.loadjss.id++;
                    return d.loadjss(i);
                });
            } else {
                jQuery.ajaxSetup({
                    cache: true
                });
                d.loadjss.cbk();
            }
        };
        h.fn.loadimgs = function(j, k, i) {
            d.loadimgs.obj = j;
            d.loadimgs.len = j.length;
            d.loadimgs.id = 0;
            d.loadimgs.cbk = i || function() {};
            d.loadimgs.timein = 0;
            d.loadimgs.timeach = 30;
            d.loadimgs.timeout = k;
            d.loadimgs();
        };
        d.loadimgs = function(i) {
            if (typeof i === "object") {
                d.loadimgs.timein = d.loadimgs.timein + d.loadimgs.timeach;
                if (d.loadimgs.timein < d.loadimgs.timeout) {
                    setTimeout(function() {
                        if (i.complete) {
                            return d.loadimgs();
                        } else {
                            return d.loadimgs(i);
                        }
                    }, d.loadimgs.timeach);
                } else {
                    return d.loadimgs();
                }
            } else {
                if (d.loadimgs.id < d.loadimgs.len) {
                    d.loadimgs.timein = 0;
                    var i = new Image();
                    i.src = d.loadimgs.obj[d.loadimgs.id];
                    d.loadimgs.id++;
                    setTimeout(function() {
                        if (i.complete) {
                            return d.loadimgs();
                        } else {
                            return d.loadimgs(i);
                        }
                    }, d.loadimgs.timeach);
                } else {
                    d.loadimgs.cbk();
                    return;
                }
            }
        };
        h.fn.gettxtline = function(i, k) {
            var j = "";
            i = i.length > 1e3 ? i.substring(k, k + 1e3) : i.substring(k);
            k = i.indexOf("\n");
            j = k > 0 ? i.substring(0, k) : i;
            return j;
        };
        h.fn.initDB = function(i, k) {
            var j = d.idbo.open("explorerOS");
            j.onerror = function(l) {
                console.log("Database open error!");
            };
            j.onsuccess = function(l) {
                h.idb = l.target.result;
                if (h.idb.version >= i) {
                    h.idb.isupdated = false;
                    console.log("Database version is " + h.idb.version);
                } else {
                    h.idb.close();
                    j = d.idbo.open("explorerOS", i);
                    j.onerror = function(m) {
                        console.log("Database open error!");
                    };
                    j.onupgradeneeded = function(m) {
                        h.idb = m.target.result;
                        h.idb.isupdated = true;
                        typeof k === "function" && k(h.idb);
                        console.log("Database is updated to " + h.idb.version);
                    };
                }
            };
        };
        h.fn.updateBDO = function(j, i) {
            h.fn.wait2run(function() {
                return h.idb.name === "explorerOS";
            }, function() {
                var k = h.idb.transaction(j, "readwrite").objectStore(j);
                var l = i.length;
                for (var m = 0; m < l; m++) {
                    k.add(i[m]);
                }
            }, 5e3);
        };
        h.fn.readBDO = function(j, i, k) {
            h.fn.wait2run(function() {
                return h.idb.name === "explorerOS";
            }, function() {
                var l = h.idb.transaction(j).objectStore(j);
                var m = l.get(i);
                m.onsuccess = function(n) {
                    typeof k === "function" && k(n.target.result);
                };
            }, 5e3);
        };
        h.fn.wait2run = function(k, i, j) {
            if (k() === true) {
                i();
                return;
            } else {
                if (j > 0) {
                    j = j - h.isrepdur;
                    setTimeout(function() {
                        return h.fn.wait2run(k, i, j);
                    }, h.isrepdur);
                } else {
                    i();
                    return;
                }
            }
        };
        h.fn.md5 = {};
        h.fn.md5.hexcase = 0;
        h.fn.md5.b64pad = "";
        h.fn.md5.chrsz = 8;
        h.fn.md5.hex_md5 = function(j) {
            var i = h.fn.md5.binl2hex(h.fn.md5.core_md5(h.fn.md5.str2binl(j), j.length * h.fn.md5.chrsz));
            return i;
        };
        h.fn.md5.b64_md5 = function(j) {
            var i = h.fn.md5.binl2b64(h.fn.md5.core_md5(h.fn.md5.str2binl(j), j.length * h.fn.md5.chrsz));
            return i;
        };
        h.fn.md5.hex_hmac_md5 = function(j, k) {
            var i = h.fn.md5.binl2hex(h.fn.md5.core_hmac_md5(j, k));
            return i;
        };
        h.fn.md5.b64_hmac_md5 = function(j, k) {
            var i = h.fn.md5.binl2b64(h.fn.md5.core_hmac_md5(j, k));
            return i;
        };
        h.fn.md5.core_md5 = function(t, o) {
            t[o >> 5] |= 128 << o % 32;
            t[(o + 64 >>> 9 << 4) + 14] = o;
            var s = 1732584193;
            var r = -271733879;
            var q = -1732584194;
            var p = 271733878;
            for (var l = 0; l < t.length; l += 16) {
                var n = s;
                var m = r;
                var k = q;
                var j = p;
                s = h.fn.md5.md5_ff(s, r, q, p, t[l + 0], 7, -680876936);
                p = h.fn.md5.md5_ff(p, s, r, q, t[l + 1], 12, -389564586);
                q = h.fn.md5.md5_ff(q, p, s, r, t[l + 2], 17, 606105819);
                r = h.fn.md5.md5_ff(r, q, p, s, t[l + 3], 22, -1044525330);
                s = h.fn.md5.md5_ff(s, r, q, p, t[l + 4], 7, -176418897);
                p = h.fn.md5.md5_ff(p, s, r, q, t[l + 5], 12, 1200080426);
                q = h.fn.md5.md5_ff(q, p, s, r, t[l + 6], 17, -1473231341);
                r = h.fn.md5.md5_ff(r, q, p, s, t[l + 7], 22, -45705983);
                s = h.fn.md5.md5_ff(s, r, q, p, t[l + 8], 7, 1770035416);
                p = h.fn.md5.md5_ff(p, s, r, q, t[l + 9], 12, -1958414417);
                q = h.fn.md5.md5_ff(q, p, s, r, t[l + 10], 17, -42063);
                r = h.fn.md5.md5_ff(r, q, p, s, t[l + 11], 22, -1990404162);
                s = h.fn.md5.md5_ff(s, r, q, p, t[l + 12], 7, 1804603682);
                p = h.fn.md5.md5_ff(p, s, r, q, t[l + 13], 12, -40341101);
                q = h.fn.md5.md5_ff(q, p, s, r, t[l + 14], 17, -1502002290);
                r = h.fn.md5.md5_ff(r, q, p, s, t[l + 15], 22, 1236535329);
                s = h.fn.md5.md5_gg(s, r, q, p, t[l + 1], 5, -165796510);
                p = h.fn.md5.md5_gg(p, s, r, q, t[l + 6], 9, -1069501632);
                q = h.fn.md5.md5_gg(q, p, s, r, t[l + 11], 14, 643717713);
                r = h.fn.md5.md5_gg(r, q, p, s, t[l + 0], 20, -373897302);
                s = h.fn.md5.md5_gg(s, r, q, p, t[l + 5], 5, -701558691);
                p = h.fn.md5.md5_gg(p, s, r, q, t[l + 10], 9, 38016083);
                q = h.fn.md5.md5_gg(q, p, s, r, t[l + 15], 14, -660478335);
                r = h.fn.md5.md5_gg(r, q, p, s, t[l + 4], 20, -405537848);
                s = h.fn.md5.md5_gg(s, r, q, p, t[l + 9], 5, 568446438);
                p = h.fn.md5.md5_gg(p, s, r, q, t[l + 14], 9, -1019803690);
                q = h.fn.md5.md5_gg(q, p, s, r, t[l + 3], 14, -187363961);
                r = h.fn.md5.md5_gg(r, q, p, s, t[l + 8], 20, 1163531501);
                s = h.fn.md5.md5_gg(s, r, q, p, t[l + 13], 5, -1444681467);
                p = h.fn.md5.md5_gg(p, s, r, q, t[l + 2], 9, -51403784);
                q = h.fn.md5.md5_gg(q, p, s, r, t[l + 7], 14, 1735328473);
                r = h.fn.md5.md5_gg(r, q, p, s, t[l + 12], 20, -1926607734);
                s = h.fn.md5.md5_hh(s, r, q, p, t[l + 5], 4, -378558);
                p = h.fn.md5.md5_hh(p, s, r, q, t[l + 8], 11, -2022574463);
                q = h.fn.md5.md5_hh(q, p, s, r, t[l + 11], 16, 1839030562);
                r = h.fn.md5.md5_hh(r, q, p, s, t[l + 14], 23, -35309556);
                s = h.fn.md5.md5_hh(s, r, q, p, t[l + 1], 4, -1530992060);
                p = h.fn.md5.md5_hh(p, s, r, q, t[l + 4], 11, 1272893353);
                q = h.fn.md5.md5_hh(q, p, s, r, t[l + 7], 16, -155497632);
                r = h.fn.md5.md5_hh(r, q, p, s, t[l + 10], 23, -1094730640);
                s = h.fn.md5.md5_hh(s, r, q, p, t[l + 13], 4, 681279174);
                p = h.fn.md5.md5_hh(p, s, r, q, t[l + 0], 11, -358537222);
                q = h.fn.md5.md5_hh(q, p, s, r, t[l + 3], 16, -722521979);
                r = h.fn.md5.md5_hh(r, q, p, s, t[l + 6], 23, 76029189);
                s = h.fn.md5.md5_hh(s, r, q, p, t[l + 9], 4, -640364487);
                p = h.fn.md5.md5_hh(p, s, r, q, t[l + 12], 11, -421815835);
                q = h.fn.md5.md5_hh(q, p, s, r, t[l + 15], 16, 530742520);
                r = h.fn.md5.md5_hh(r, q, p, s, t[l + 2], 23, -995338651);
                s = h.fn.md5.md5_ii(s, r, q, p, t[l + 0], 6, -198630844);
                p = h.fn.md5.md5_ii(p, s, r, q, t[l + 7], 10, 1126891415);
                q = h.fn.md5.md5_ii(q, p, s, r, t[l + 14], 15, -1416354905);
                r = h.fn.md5.md5_ii(r, q, p, s, t[l + 5], 21, -57434055);
                s = h.fn.md5.md5_ii(s, r, q, p, t[l + 12], 6, 1700485571);
                p = h.fn.md5.md5_ii(p, s, r, q, t[l + 3], 10, -1894986606);
                q = h.fn.md5.md5_ii(q, p, s, r, t[l + 10], 15, -1051523);
                r = h.fn.md5.md5_ii(r, q, p, s, t[l + 1], 21, -2054922799);
                s = h.fn.md5.md5_ii(s, r, q, p, t[l + 8], 6, 1873313359);
                p = h.fn.md5.md5_ii(p, s, r, q, t[l + 15], 10, -30611744);
                q = h.fn.md5.md5_ii(q, p, s, r, t[l + 6], 15, -1560198380);
                r = h.fn.md5.md5_ii(r, q, p, s, t[l + 13], 21, 1309151649);
                s = h.fn.md5.md5_ii(s, r, q, p, t[l + 4], 6, -145523070);
                p = h.fn.md5.md5_ii(p, s, r, q, t[l + 11], 10, -1120210379);
                q = h.fn.md5.md5_ii(q, p, s, r, t[l + 2], 15, 718787259);
                r = h.fn.md5.md5_ii(r, q, p, s, t[l + 9], 21, -343485551);
                s = h.fn.md5.safe_add(s, n);
                r = h.fn.md5.safe_add(r, m);
                q = h.fn.md5.safe_add(q, k);
                p = h.fn.md5.safe_add(p, j);
            }
            return Array(s, r, q, p);
        };
        h.fn.md5.md5_cmn = function(n, k, j, i, m, l) {
            return h.fn.md5.safe_add(h.fn.md5.bit_rol(h.fn.md5.safe_add(h.fn.md5.safe_add(k, n), h.fn.md5.safe_add(i, l)), m), j);
        };
        h.fn.md5.md5_ff = function(k, j, o, n, i, m, l) {
            return h.fn.md5.md5_cmn(j & o | ~j & n, k, j, i, m, l);
        };
        h.fn.md5.md5_gg = function(k, j, o, n, i, m, l) {
            return h.fn.md5.md5_cmn(j & n | o & ~n, k, j, i, m, l);
        };
        h.fn.md5.md5_hh = function(k, j, o, n, i, m, l) {
            return h.fn.md5.md5_cmn(j ^ o ^ n, k, j, i, m, l);
        };
        h.fn.md5.md5_ii = function(k, j, o, n, i, m, l) {
            return h.fn.md5.md5_cmn(o ^ (j | ~n), k, j, i, m, l);
        };
        h.fn.md5.core_hmac_md5 = function(l, o) {
            var n = h.fn.md5.str2binl(l);
            if (n.length > 16) {
                n = h.fn.md5.core_md5(n, l.length * h.fn.md5.chrsz);
            }
            var j = Array(16), m = Array(16);
            for (var k = 0; k < 16; k++) {
                j[k] = n[k] ^ 909522486;
                m[k] = n[k] ^ 1549556828;
            }
            var p = h.fn.md5.core_md5(j.concat(h.fn.md5.str2binl(o)), 512 + o.length * h.fn.md5.chrsz);
            return h.fn.md5.core_md5(m.concat(p), 512 + 128);
        };
        h.fn.md5.safe_add = function(i, l) {
            var k = (i & 65535) + (l & 65535);
            var j = (i >> 16) + (l >> 16) + (k >> 16);
            return j << 16 | k & 65535;
        };
        h.fn.md5.bit_rol = function(i, j) {
            return i << j | i >>> 32 - j;
        };
        h.fn.md5.str2binl = function(m) {
            var l = Array();
            var j = (1 << h.fn.md5.chrsz) - 1;
            for (var k = 0; k < m.length * h.fn.md5.chrsz; k += h.fn.md5.chrsz) {
                l[k >> 5] |= (m.charCodeAt(k / h.fn.md5.chrsz) & j) << k % 32;
            }
            return l;
        };
        h.fn.md5.binl2hex = function(l) {
            var k = h.fn.md5.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var m = "";
            for (var j = 0; j < l.length * 4; j++) {
                m += k.charAt(l[j >> 2] >> j % 4 * 8 + 4 & 15) + k.charAt(l[j >> 2] >> j % 4 * 8 & 15);
            }
            return m;
        };
        h.fn.md5.binl2b64 = function(n) {
            var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var p = "";
            for (var l = 0; l < n.length * 4; l += 3) {
                var o = (n[l >> 2] >> 8 * (l % 4) & 255) << 16 | (n[l + 1 >> 2] >> 8 * ((l + 1) % 4) & 255) << 8 | n[l + 2 >> 2] >> 8 * ((l + 2) % 4) & 255;
                for (var k = 0; k < 4; k++) {
                    if (l * 8 + k * 6 > n.length * 32) {
                        p += h.fn.md5.b64pad;
                    } else {
                        p += m.charAt(o >> 6 * (3 - k) & 63);
                    }
                }
            }
            return p;
        };
        h.fn.aes128 = {
            sbox: [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ],
            Invsbox: [ 82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125 ],
            rcon: [ [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 2, 0, 0, 0 ], [ 4, 0, 0, 0 ], [ 8, 0, 0, 0 ], [ 16, 0, 0, 0 ], [ 32, 0, 0, 0 ], [ 64, 0, 0, 0 ], [ 128, 0, 0, 0 ], [ 27, 0, 0, 0 ], [ 54, 0, 0, 0 ] ],
            cipher: function(n, k) {
                var j = 4;
                var p = k.length / j - 1;
                var q = [ new Array(j), new Array(j), new Array(j), new Array(j) ];
                var m = new Array(4 * j);
                var o, l;
                for (o = 0; o < n.length; o++) {
                    q[o % 4][Math.floor(o / 4)] = n[o];
                }
                this.addRoundKey(q, k, 0, j);
                for (l = 1; l < p; l++) {
                    this.subBytes(q, j, 0);
                    this.shiftRows(q, j, 0);
                    this.mixColumns(q, j, 0);
                    this.addRoundKey(q, k, l, j);
                }
                this.subBytes(q, j, 0);
                this.shiftRows(q, j, 0);
                this.addRoundKey(q, k, p, j);
                for (o = 0; o < m.length; o++) {
                    m[o] = q[o % 4][Math.floor(o / 4)];
                }
                return m;
            },
            Invcipher: function(n, k) {
                var j = 4;
                var p = k.length / j - 1;
                var q = [ new Array(j), new Array(j), new Array(j), new Array(j) ];
                var m = new Array(4 * j);
                var o, l;
                for (o = 0; o < n.length; o++) {
                    q[o % 4][Math.floor(o / 4)] = n[o];
                }
                this.addRoundKey(q, k, p, j);
                for (l = p - 1; l >= 1; l--) {
                    this.shiftRows(q, j, 1);
                    this.subBytes(q, j, 1);
                    this.addRoundKey(q, k, l, j);
                    this.mixColumns(q, j, 1);
                }
                this.shiftRows(q, j, 1);
                this.subBytes(q, j, 1);
                this.addRoundKey(q, k, l, j);
                for (o = 0; o < m.length; o++) {
                    m[o] = q[o % 4][Math.floor(o / 4)];
                }
                return m;
            },
            subBytes: function(l, i, j) {
                var k, n;
                var j = j || 0;
                var m = j === 0 ? this.sbox : this.Invsbox;
                for (n = 0; n < i; n++) {
                    for (k = 0; k < 4; k++) {
                        l[k][n] = m[l[k][n]];
                    }
                }
            },
            shiftRows: function(m, i, k) {
                var j = new Array(i);
                var k = k || 0;
                var l, n;
                k = k === 0 ? 1 : -1;
                for (l = 1; l < 4; l++) {
                    for (n = 0; n < i; n++) {
                        j[n] = m[l][(n + l * k + i) % i];
                    }
                    for (n = 0; n < 4; n++) {
                        m[l][n] = j[n];
                    }
                }
            },
            mixColumns: function(p, j, m) {
                var o, s, l;
                var k = new Array(j);
                var q = [ [ 2, 3, 1, 1 ], [ 14, 11, 13, 9 ] ];
                for (s = 0; s < j; s++) {
                    for (o = 0; o < 4; o++) {
                        k[o] = p[o][s];
                    }
                    for (o = 0; o < 4; o++) {
                        p[o][s] = 0;
                        for (l = 0; l < 4; l++) {
                            p[o][s] ^= this.FFmul(q[m][l], k[(o + l) % 4]);
                        }
                    }
                }
            },
            FFmul: function(k, j) {
                var n = new Array(4);
                var m = 0;
                var l;
                n[0] = j;
                for (l = 1; l < 4; l++) {
                    n[l] = n[l - 1] << 1;
                    if (n[l - 1] & 128) {
                        n[l] ^= 283;
                    }
                }
                for (l = 0; l < 4; l++) {
                    if (k >> l & 1) {
                        m ^= n[l];
                    }
                }
                return m;
            },
            addRoundKey: function(m, j, k, i) {
                var l, n;
                for (n = 0; n < i; n++) {
                    for (l = 0; l < 4; l++) {
                        m[l][n] ^= j[k * 4 + n][l];
                    }
                }
            },
            keyExpansion: function(q) {
                var n = q.length / 4;
                var k = 4;
                var r = n + 6;
                var l = new Array(k * (r + 1));
                var m = new Array(4);
                var p, o;
                for (p = 0; p < n; p++) {
                    l[p] = [ q[4 * p], q[4 * p + 1], q[4 * p + 2], q[4 * p + 3] ];
                }
                for (p = n; p < l.length; p++) {
                    l[p] = new Array(4);
                    for (o = 0; o < 4; o++) {
                        m[o] = l[p - 1][o];
                    }
                    if (p % n === 0) {
                        this.rotWord(m);
                        this.subWord(m);
                        for (o = 0; o < 4; o++) {
                            m[o] ^= h.fn.aes128.rcon[p / n][o];
                        }
                    } else {
                        if (n > 6 && p % n === 4) {
                            this.subWord(m);
                        }
                    }
                    for (o = 0; o < 4; o++) {
                        l[p][o] = l[p - n][o] ^ m[o];
                    }
                }
                return l;
            },
            rotWord: function(j) {
                var k = j[0];
                var l;
                for (l = 0; l < 3; l++) {
                    j[l] = j[l + 1];
                }
                j[3] = k;
            },
            subWord: function(j) {
                var k;
                for (k = 0; k < 4; k++) {
                    j[k] = this.sbox[j[k]];
                }
            }
        };
        h.fn.aes128.Crypto = function(j) {
            this.String2Array = function(l, n) {
                var m;
                if (n != null) {
                    var k = new Array(16);
                    for (m = 0; m < 16; m++) {
                        k[m] = l.charCodeAt(16 * n + m) || 0;
                    }
                } else {
                    var o = l.length <= 16 ? 16 : l.length <= 24 ? 24 : 32;
                    var k = new Array(o);
                    for (m = 0; m < o; m++) {
                        k[m] = l.charCodeAt(m) || 0;
                    }
                }
                return k;
            };
            this.Byte2Char = function(l) {
                var m;
                var k = "";
                for (m = 0; m < l.length / 2; m++) {
                    k += String.fromCharCode(parseInt(l[m * 2], 16) * 16 + parseInt(l[m * 2 + 1], 16));
                }
                return k;
            };
            this.encrypt = function(l) {
                var o = Math.ceil(l.length / i);
                var k = [];
                var n, m, q;
                var p, r;
                for (p = 0; p < o; p++) {
                    n = h.fn.aes128.cipher(this.String2Array(l, p), this.keySchedule);
                    q = p * i;
                    for (r = 0; r < 16; r++) {
                        k[q + r] = n[r] < 16 ? "0" + n[r].toString(16) : n[r].toString(16);
                    }
                }
                return k.join("");
            };
            this.decrypt = function(l) {
                var o = Math.ceil(l.length / i * .5);
                var k = [];
                var n, m, q;
                var p, r;
                l = this.Byte2Char(l);
                for (p = 0; p < o; p++) {
                    n = h.fn.aes128.Invcipher(this.String2Array(l, p), this.keySchedule);
                    q = p * i;
                    for (r = 0; r < 16 && n[r] != 0; r++) {
                        k[q + r] = String.fromCharCode(n[r]);
                    }
                }
                return k.join("");
            };
            var i = 16;
            this.key = this.String2Array(j, null);
            this.keySchedule = h.fn.aes128.keyExpansion(this.key);
        };
        d.waiter = function(i) {
            i.isid = "eos-pagewaiter";
            i.sele = {};
            i.load = function() {
                h.sele.slf.append("<div id='eos-pagewaiter'><a id='eos-pagewaiter-spot1' class='eos-pagewaiter-spot'></a><a id='eos-pagewaiter-spot2' class='eos-pagewaiter-spot'></a><a id='eos-pagewaiter-spot3' class='eos-pagewaiter-spot'></a><a id='eos-pagewaiter-spot4' class='eos-pagewaiter-spot'></a><a id='eos-pagewaiter-spot5' class='eos-pagewaiter-spot'></a></div>");
                i.sele.slf = g("#eos-pagewaiter");
                i.sele.spt = g("#eos-pagewaiter-spot1, #eos-pagewaiter-spot2, #eos-pagewaiter-spot3, #eos-pagewaiter-spot4, #eos-pagewaiter-spot5");
            };
            i.init = function() {};
            i.show = function() {
                h.qlaunch.isanimating = "awaiting";
                h.taskbar.isanimating = "awaiting";
                h.sele.slf.css("cursor", "wait");
                i.sele.slf.css("visibility", "visible");
                i.sele.spt.addClass("eos-pagewaiter-spot-ani");
            };
            i.hide = function() {
                i.sele.slf.css("visibility", "hidden");
                i.sele.spt.removeClass("eos-pagewaiter-spot-ani");
                h.sele.slf.css("cursor", "auto");
                h.qlaunch.isanimating = false;
                h.taskbar.isanimating = false;
            };
        };
        d.msger = function(i) {
            i.isid = "eos-pagemsger";
            i.istype = 0;
            i.callback = function(j) {};
            i.ismovable = true;
            i.ismousedown = false;
            i.ismouseX = false;
            i.ismouseY = false;
            i.iscaption = [];
            i.iscaption_t1 = h.lang.sys.attention;
            i.iscaption_t2 = h.lang.sys.warning;
            i.iscaption_t3 = h.lang.sys.confirm;
            i.iscaption_b0 = h.lang.sys.ok;
            i.iscaption_b1 = h.lang.sys.yes;
            i.iscaption_b2 = h.lang.sys.no;
            i.sele = {};
            i.load = function() {
                h.sele.slf.append("<div id='eos-pagemsger'><div id='eos-pagemsger-window'><div id='eos-pagemsger-win1'><a id='eos-pagemsger-i'></a><a id='eos-pagemsger-t'></a></div><div id='eos-pagemsger-x'><a id='eos-pagemsger-x1'></a><a id='eos-pagemsger-x2'>&times;</a></div><div id='eos-pagemsger-win2'><a id='eos-pagemsger-c'></a></div><div id='eos-pagemsger-win3'><button id='eos-pagemsger-button0' class='eos-pagemsger-button' tabindex='1'>OK</button><button id='eos-pagemsger-button1' class='eos-pagemsger-button' tabindex='2'>Yes</button><button id='eos-pagemsger-button2' class='eos-pagemsger-button' tabindex='3'>No</button></div></div></div>");
                i.sele.slf = g("#eos-pagemsger");
                i.sele.win = g("#eos-pagemsger-window");
                i.sele.cpi = g("#eos-pagemsger-i");
                i.sele.cpt = g("#eos-pagemsger-t");
                i.sele.xls = g("#eos-pagemsger-x");
                i.sele.cpc = g("#eos-pagemsger-c");
                i.sele.bt0 = g("#eos-pagemsger-button0");
                i.sele.bt1 = g("#eos-pagemsger-button1");
                i.sele.bt2 = g("#eos-pagemsger-button2");
            };
            i.init = function() {
                i.sele.win.on("mousedown", i.mousedown).on("mouseup", i.mouseup).on("mousemove", i.mousemove);
                i.sele.xls.on("click", i.clickx);
                i.sele.bt0.on("click", i.click0).on("keydown", i.keydown0).on("focus", i.getfocus).on("blur", i.losefocus);
                i.sele.bt1.on("click", i.click1).on("keydown", i.keydown1).on("focus", i.getfocus).on("blur", i.losefocus);
                i.sele.bt2.on("click", i.click2).on("keydown", i.keydown2).on("focus", i.getfocus).on("blur", i.losefocus);
            };
            i.hotkey = function(j) {
                if (j.which === 27) {
                    i.sele.xls.click();
                } else {
                    if (j.which === 89 && i.istype === 3) {
                        i.sele.bt1.focus();
                        h.islocked = true;
                        setTimeout(function() {
                            h.islocked = false;
                            i.sele.bt1.click();
                        }, 90);
                    } else {
                        if (j.which === 78 && i.istype === 3) {
                            i.sele.bt2.focus();
                            h.islocked = true;
                            setTimeout(function() {
                                h.islocked = false;
                                i.sele.bt2.click();
                            }, 90);
                        }
                    }
                }
            };
            i.clickx = function() {
                if (!h.islocked) {
                    i.hide(function() {
                        i.callback(0);
                    });
                }
            };
            i.click0 = function() {
                if (!h.islocked) {
                    i.hide(function() {
                        i.callback(0);
                    });
                }
            };
            i.click1 = function() {
                if (!h.islocked) {
                    i.hide(function() {
                        i.callback(1);
                    });
                }
            };
            i.click2 = function() {
                if (!h.islocked) {
                    i.hide(function() {
                        i.callback(0);
                    });
                }
            };
            i.keydown0 = function(j) {
                if (!h.islocked) {}
            };
            i.keydown1 = function(j) {
                if (!h.islocked) {
                    if (j.which === 9 || j.which === 37 || j.which === 39) {
                        j.preventDefault();
                        i.sele.bt2.focus();
                    }
                }
            };
            i.keydown2 = function(j) {
                if (!h.islocked) {
                    if (j.which === 9 || j.which === 37 || j.which === 39) {
                        j.preventDefault();
                        i.sele.bt1.focus();
                    }
                }
            };
            i.mousedown = function(j) {
                if (!h.islocked) {
                    i.ismousedown = true;
                    i.ismouseX = j.pageX - i.sele.win.offset().left;
                    i.ismouseY = j.pageY - i.sele.win.offset().top;
                }
            };
            i.mouseup = function(j) {
                if (!h.islocked) {
                    i.ismousedown = false;
                }
            };
            i.mousemove = function(k) {
                if (!h.islocked) {
                    if (!h.isfocused && i.ismovable && i.ismousedown) {
                        var l = k.pageX - i.ismouseX;
                        var j = k.pageY - i.ismouseY;
                        i.sele.win.offset({
                            left: l,
                            top: j
                        });
                    }
                }
            };
            i.getfocus = function() {
                if (!h.islocked) {
                    h.isfocused = true;
                }
            };
            i.losefocus = function() {
                if (!h.islocked) {
                    h.isfocused = false;
                }
            };
            i.show = function() {
                h.qlaunch.isanimating = "awaiting";
                h.taskbar.isanimating = "awaiting";
                i.sele.slf.css("visibility", "visible");
                if (i.istype === 1) {
                    i.sele.cpi.html("!").css("border", "4px solid #e8d866").css("color", "#e8d866");
                    i.sele.cpt.html(i.iscaption_t1[h.islanguage]).css("color", "#e8d866");
                    i.sele.bt0.html(i.iscaption_b0[h.islanguage]).css("visibility", "visible").css("color", "#e8d866").attr("disabled", false);
                    i.sele.bt1.css("visibility", "hidden");
                    i.sele.bt2.css("visibility", "hidden");
                    i.sele.cpc.html(i.iscaption[h.islanguage]);
                    i.show.f = function() {
                        i.sele.bt0.focus();
                    };
                } else {
                    if (i.istype === 2) {
                        i.sele.cpi.html("X").css("border", "4px solid #ff973f").css("color", "#ff973f");
                        i.sele.cpt.html(i.iscaption_t2[h.islanguage]).css("color", "#ff973f");
                        i.sele.bt0.html(i.iscaption_b0[h.islanguage]).css("visibility", "visible").css("color", "#ff973f").attr("disabled", false);
                        i.sele.bt1.css("visibility", "hidden");
                        i.sele.bt2.css("visibility", "hidden");
                        i.sele.cpc.html(i.iscaption[h.islanguage]);
                        i.show.f = function() {
                            i.sele.bt0.focus();
                        };
                    } else {
                        if (i.istype === 3) {
                            i.sele.cpi.html("?").css("border", "4px solid #acd3db").css("color", "#acd3db");
                            i.sele.cpt.html(i.iscaption_t3[h.islanguage]).css("color", "#acd3db");
                            i.sele.bt0.css("visibility", "hidden");
                            i.sele.bt1.html(i.iscaption_b1[h.islanguage]).css("visibility", "visible").css("color", "#acd3db").attr("disabled", false);
                            i.sele.bt2.html(i.iscaption_b2[h.islanguage]).css("visibility", "visible").css("color", "#acd3db").attr("disabled", false);
                            i.sele.cpc.html(i.iscaption[h.islanguage]);
                            i.show.f = function() {
                                i.sele.bt2.focus();
                            };
                        }
                    }
                }
                i.sele.win.velocity({
                    scale: "85%",
                    opacity: 0
                }, 1).velocity({
                    scale: "100%",
                    opacity: 1
                }, {
                    duration: 130,
                    complete: function() {
                        setTimeout(i.show.f, 30);
                        h.hotkey.local = i.hotkey;
                    }
                });
            };
            i.hide = function(j) {
                h.hotkey.local = function() {};
                i.sele.bt0.attr("disabled", true);
                i.sele.bt1.attr("disabled", true);
                i.sele.bt2.attr("disabled", true);
                i.sele.win.velocity({
                    scale: "100%",
                    opacity: 1
                }, 1).velocity({
                    scale: "85%",
                    opacity: 0
                }, {
                    duration: 130,
                    complete: function() {
                        i.sele.slf.css("visibility", "hidden");
                        i.sele.bt0.css("visibility", "hidden");
                        i.sele.bt1.css("visibility", "hidden");
                        i.sele.bt2.css("visibility", "hidden");
                        i.sele.win.css("margin-left", "-240px").css("margin-top", "-144px").css("left", "50%").css("top", "40%");
                        h.qlaunch.isanimating = false;
                        h.taskbar.isanimating = false;
                        h.qlaunch.hoverOff();
                        h.taskbar.hoverOff();
                        typeof j === "function" && j();
                    }
                });
            };
        };
        d.start = function(i) {
            i.isid = "eos-start";
            i.isappid = -1;
            i.islocked = false;
            i.isactive = false;
            i.isanimating = false;
            i.ismovable = false;
            i.issizeX = 0;
            i.issizeY = 0;
            i.ismousedown = false;
            i.ismouseX = false;
            i.ismouseY = false;
            i.iscomponent = [];
            i.sele = {};
            i.chd = {};
            i.chd.hotkey = function() {};
            i.chd.focusit = function() {};
            i.addcom = function(j) {
                i.iscomponent.push(j);
            };
            i.load = function() {
                h.sele.slf.append("<div id='eos-start'></div>");
                i.sele.slf = g("#eos-start");
            };
            i.init = function() {
                i.issizeX = i.sele.slf.width();
                i.issizeY = i.sele.slf.height();
                i.sele.slf.hover(i.hoverOn, i.hoverOff).on("mousedown", i.mousedown).on("mouseup", i.mouseup).on("mousemove", i.mousemove).on("mouseenter", i.mouseenter).on("mouseleave", i.mouseleave);
            };
            i.hotkey = function(j) {
                if (!i.islocked) {
                    i.chd.hotkey(j);
                }
            };
            i.hoverOn = function() {
                if (!h.islocked && !i.islocked) {}
            };
            i.hoverOff = function() {
                if (!h.islocked && !i.islocked) {}
            };
            i.mousedown = function(j) {
                if (!h.islocked && !i.islocked) {
                    i.ismousedown = true;
                }
            };
            i.mouseup = function(j) {
                if (!h.islocked && !i.islocked) {
                    i.ismousedown = false;
                }
            };
            i.mousemove = function(j) {
                if (!h.islocked && !i.islocked) {}
            };
            i.mouseenter = function(j) {
                if (!h.islocked && !i.islocked) {}
            };
            i.mouseleave = function(j) {
                if (!h.islocked && !i.islocked) {
                    i.ismousedown = false;
                }
            };
            i.resize = function(k, m, l, j) {
                i.isanimating = "resize";
                i.issizeX = k;
                i.issizeY = m;
                i.sele.slf.velocity({
                    width: k,
                    height: m
                }, {
                    duration: l,
                    complete: function() {
                        i.isanimating = false;
                        typeof j === "function" && j();
                    }
                });
            };
            i.refresh = function() {
                var j = i.iscomponent.length;
                for (var k = 0; k < j; k++) {
                    i.chd[i.iscomponent[k]].refresh();
                }
            };
            i.enter = function(k, j) {
                i.isactive = false;
                i.isanimating = "enter";
                i.sele.slf.css("opacity", 0).css("visibility", "visible").velocity("fadeIn", {
                    duration: k,
                    easing: "easeInOutExpo",
                    complete: function() {
                        i.isanimating = false;
                        setTimeout(function() {
                            i.chd.focusit();
                        }, 30);
                        h.hotkey.local = i.hotkey;
                        typeof j === "function" && j();
                    }
                });
            };
            i.exit = function(k, j) {
                h.hotkey.local = function() {};
                i.isactive = false;
                i.isanimating = "exit";
                i.sele.slf.velocity("stop").velocity({
                    scale: "96%",
                    opacity: 0
                }, {
                    duration: k,
                    easing: "easeOutQuad"
                }).velocity({
                    left: 0,
                    top: i.issizeY,
                    opacity: 1,
                    scale: "100%"
                }, {
                    duration: 1,
                    complete: function() {
                        i.sele.slf.css("visibility", "hidden");
                        i.isanimating = false;
                        typeof j === "function" && j();
                    }
                });
            };
        };
        d.appframe = function(k, i) {
            k.isid = "eos-frm" + i;
            k.isappid = i;
            k.isoccupied = false;
            k.islocked = false;
            k.isactive = false;
            k.isanimating = false;
            k.ismovable = false;
            k.issizeX = 0;
            k.issizeY = 0;
            k.ismousedown = false;
            k.ismouseX = false;
            k.ismouseY = false;
            k.iscomponent = [];
            k.sele = {};
            k.chd = {};
            k.chd.iscaption = [];
            k.chd.isthumbnail = "";
            k.chd.hotkey = function() {};
            k.chd.focusit = function() {};
            k.addcom = function(j) {
                k.iscomponent.push(j);
            };
            k.load = function() {
                h.sele.slf.append("<div id='" + k.isid + "' class='eos-appframe'><div id='" + k.isid + "-1' class='eos-appframe-title'><div id='" + k.isid + "i' class='eos-appframei'><a id='" + k.isid + "i-s' class='eos-appframei-s'></a></div><div id='" + k.isid + "x' class='eos-appframex'><a class='eos-appframex1'></a><a class='eos-appframex2'>&times;</a></div><div class='eos-appframel'></div></div><div id='" + k.isid + "-2' class='eos-appframe-body'></div></div>");
                k.sele.slf = g("#" + k.isid);
                k.sele.cap = g("#" + k.isid + "i-s");
                k.sele.xls = g("#" + k.isid + "x");
                k.sele.bdy = g("#" + k.isid + "-2");
            };
            k.unload = function() {
                k.sele.slf.css("visibility", "hidden");
                k.sele.bdy.html("");
                k.isoccupied = false;
                k.iscomponent = [];
                k.chd = {};
                k.chd.iscaption = [];
                k.chd.isthumbnail = "";
                k.chd.hotkey = function() {};
                k.chd.focusit = function() {};
            };
            k.init = function() {
                k.issizeX = k.sele.slf.width();
                k.issizeY = k.sele.slf.height();
                k.sele.slf.hover(k.hoverOn, k.hoverOff).on("mousedown", k.mousedown).on("mouseup", k.mouseup).on("mousemove", k.mousemove).on("mouseenter", k.mouseenter).on("mouseleave", k.mouseleave);
                k.sele.xls.on("click", k.clickx);
            };
            k.hotkey = function(j) {
                if (!k.islocked) {
                    k.chd.hotkey(j);
                }
            };
            k.hoverOn = function() {
                if (!h.islocked && !k.islocked) {}
            };
            k.hoverOff = function() {
                if (!h.islocked && !k.islocked) {}
            };
            k.clickx = k.close = function() {
                if (!h.islocked && !k.islocked) {
                    h.clsapp(k.isappid);
                }
            };
            k.mousedown = function(j) {
                if (!h.islocked && !k.islocked) {
                    k.ismousedown = true;
                    if (k.ismovable) {
                        k.ismouseX = j.pageX - k.sele.slf.offset().left;
                        k.ismouseY = j.pageY - k.sele.slf.offset().top;
                    }
                }
            };
            k.mouseup = function(j) {
                if (!h.islocked && !k.islocked) {
                    k.ismousedown = false;
                }
            };
            k.mousemove = function(l) {
                if (!h.islocked && !k.islocked) {
                    if (!h.isfocused && k.ismovable && k.ismousedown) {
                        var m = l.pageX - k.ismouseX;
                        var j = l.pageY - k.ismouseY;
                        k.sele.slf.offset({
                            left: m,
                            top: j
                        });
                    }
                }
            };
            k.mouseenter = function(j) {
                if (!h.islocked && !k.islocked) {}
            };
            k.mouseleave = function(j) {
                if (!h.islocked && !k.islocked) {
                    k.ismousedown = false;
                }
            };
            k.resize = function(l, n, m, j) {
                k.isanimating = "resize";
                k.issizeX = l;
                k.issizeY = n;
                k.sele.slf.velocity({
                    width: l,
                    height: n
                }, {
                    duration: m,
                    complete: function() {
                        k.isanimating = false;
                        typeof j === "function" && j();
                    }
                });
            };
            k.refresh = function() {
                k.sele.cap.html(k.chd.iscaption[h.islanguage]);
                var j = k.iscomponent.length;
                for (var l = 0; l < j; l++) {
                    k.chd[k.iscomponent[l]].refresh();
                }
            };
            k.show = function(l, j) {
                k.isactive = false;
                k.isanimating = "show";
                if (h.isbrowser === "ie") {
                    k.sele.slf.css("left", k.issizeX + "px").css("top", "0").css("visibility", "visible").css("z-index", "1").velocity("stop").velocity({
                        opacity: 1,
                        scale: "100%"
                    }, 1).velocity({
                        left: 0,
                        top: 0
                    }, {
                        duration: l,
                        easing: "easeInOutExpo",
                        complete: function() {
                            k.isanimating = false;
                            h.hotkey.local = k.hotkey;
                            typeof j === "function" && j();
                        }
                    });
                } else {
                    k.sele.slf.css("left", k.issizeX + "px").css("top", "0").css("visibility", "visible").css("z-index", "1").velocity("stop").velocity({
                        opacity: 1,
                        scale: "100%",
                        blur: 0
                    }, 1).velocity({
                        left: 0,
                        top: 0
                    }, {
                        duration: l,
                        easing: "easeInOutExpo",
                        complete: function() {
                            k.isanimating = false;
                            h.hotkey.local = k.hotkey;
                            typeof j === "function" && j();
                        }
                    });
                }
            };
            k.hide = function(l, j) {
                h.hotkey.local = function() {};
                k.isactive = false;
                k.isanimating = "hide";
                if (h.isbrowser === "ie") {
                    k.sele.slf.css("z-index", "0").velocity("stop").velocity({
                        scale: "96%"
                    }, {
                        duration: l,
                        easing: "easeOutQuad"
                    }).velocity({
                        opacity: 0
                    }, {
                        duration: 180,
                        complete: function() {
                            k.sele.slf.css("visibility", "hidden");
                            k.isanimating = false;
                            typeof j === "function" && j();
                        }
                    });
                } else {
                    k.sele.slf.css("z-index", "0").velocity("stop").velocity({
                        scale: "96%",
                        blur: 1
                    }, {
                        duration: l,
                        easing: "easeOutQuad"
                    }).velocity({
                        opacity: 0
                    }, {
                        duration: 180,
                        complete: function() {
                            k.sele.slf.css("visibility", "hidden");
                            k.isanimating = false;
                            typeof j === "function" && j();
                        }
                    });
                }
            };
            k.stepIn = function(j) {
                if (k.isanimating === false || k.isanimating === "stepOut") {
                    k.isanimating = "stepIn";
                    if (h.isbrowser === "ie") {
                        k.sele.slf.velocity("stop").velocity({
                            scale: "100%"
                        }, {
                            duration: j,
                            easing: "easeInQuad",
                            complete: function() {
                                k.isanimating = false;
                                h.hotkey.local = k.hotkey;
                            }
                        });
                    } else {
                        k.sele.slf.velocity("stop").velocity({
                            scale: "100%",
                            blur: 0
                        }, {
                            duration: j,
                            easing: "easeInQuad",
                            complete: function() {
                                k.isanimating = false;
                                h.hotkey.local = k.hotkey;
                            }
                        });
                    }
                }
            };
            k.stepOut = function(j) {
                if (k.isanimating === false || k.isanimating === "stepIn") {
                    h.hotkey.local = function() {};
                    k.isanimating = "stepOut";
                    if (h.isbrowser === "ie") {
                        k.sele.slf.velocity("stop").velocity({
                            scale: "96%"
                        }, {
                            duration: j,
                            easing: "easeOutQuad",
                            complete: function() {
                                k.isanimating = false;
                            }
                        });
                    } else {
                        k.sele.slf.velocity("stop").velocity({
                            scale: "96%",
                            blur: 1
                        }, {
                            duration: j,
                            easing: "easeOutQuad",
                            complete: function() {
                                k.isanimating = false;
                            }
                        });
                    }
                }
            };
            k.enter = function(l, j) {
                k.isactive = true;
                k.isanimating = "enter";
                if (h.isbrowser === "ie") {
                    k.sele.slf.css("left", "0").css("top", k.issizeY + "px").css("visibility", "visible").css("z-index", "1").velocity("stop").velocity({
                        opacity: 1,
                        scale: "100%"
                    }, 1).velocity({
                        left: 0,
                        top: 0
                    }, {
                        duration: l,
                        easing: "easeOutCirc",
                        complete: function() {
                            k.isanimating = false;
                            setTimeout(function() {
                                k.chd.focusit();
                            }, 180);
                            h.hotkey.local = k.hotkey;
                            typeof j === "function" && j();
                        }
                    });
                } else {
                    k.sele.slf.css("left", "0").css("top", k.issizeY + "px").css("visibility", "visible").css("z-index", "1").velocity("stop").velocity({
                        opacity: 1,
                        scale: "100%",
                        blur: 0
                    }, 1).velocity({
                        left: 0,
                        top: 0
                    }, {
                        duration: l,
                        easing: "easeOutCirc",
                        complete: function() {
                            k.isanimating = false;
                            setTimeout(function() {
                                k.chd.focusit();
                            }, 180);
                            h.hotkey.local = k.hotkey;
                            typeof j === "function" && j();
                        }
                    });
                }
            };
            k.exit = function(l, j) {
                h.hotkey.local = function() {};
                k.isactive = false;
                k.isanimating = "exit";
                if (h.isbrowser === "ie") {
                    k.sele.slf.css("z-index", "0").velocity("stop").velocity({
                        scale: "96%",
                        opacity: 0
                    }, {
                        duration: l,
                        easing: "easeOutQuad"
                    }).velocity({
                        left: 0,
                        top: k.issizeY,
                        opacity: 1,
                        scale: "100%"
                    }, {
                        duration: 1,
                        complete: function() {
                            k.sele.slf.css("visibility", "hidden");
                            k.isanimating = false;
                            typeof j === "function" && j();
                        }
                    });
                } else {
                    k.sele.slf.css("z-index", "0").velocity("stop").velocity({
                        scale: "96%",
                        opacity: 0,
                        blur: 1
                    }, {
                        duration: l,
                        easing: "easeOutQuad"
                    }).velocity({
                        left: 0,
                        top: k.issizeY,
                        opacity: 1,
                        scale: "100%"
                    }, {
                        duration: 1,
                        complete: function() {
                            k.sele.slf.css("visibility", "hidden");
                            k.isanimating = false;
                            typeof j === "function" && j();
                        }
                    });
                }
            };
        };
        d.qlaunch = function(i) {
            i.isid = "eos-qlaunch";
            i.iscaption = h.lang.sys.operation_center;
            i.isactive = false;
            i.islocked = false;
            i.isanimating = false;
            i.sele = {};
            i.menu = {};
            i.menulist = [];
            i.addcom = function(j) {
                i.menulist.push(j);
            };
            i.load = function() {
                h.sele.slf.append("<div id='eos-qlaunch'><div id='eos-qlaunch-bdy'><div id='eos-qlaunch-ttl'><a id='eos-qlaunch-tta'>Operation Center</a></div><div id='eos-qlaunch-usr'></div><div id='eos-qlaunch-lst'></div><div id='eos-qlaunch-ftr'></div></div><div id='eos-qlaunch-dck'></div></div>");
                i.sele.slf = g("#eos-qlaunch");
                i.sele.tta = g("#eos-qlaunch-tta");
                i.sele.usr = g("#eos-qlaunch-usr");
                i.sele.lst = g("#eos-qlaunch-lst");
                i.sele.ftr = g("#eos-qlaunch-ftr");
                i.sele.dck = g("#eos-qlaunch-dck");
                var j = i.menulist.length;
                for (var k = 0; k < j; k++) {
                    i.menu[i.menulist[k]].load();
                }
            };
            i.init = function() {
                i.sele.slf.hover(i.hoverOn, i.hoverOff).on("click", i.click).on("dblclick", i.dblclick).on("mousedown", i.mousedown).on("mouseup", i.mouseup).on("mousemove", i.mousemove).on("mouseenter", i.mouseenter).on("mouseleave", i.mouseleave);
                var j = i.menulist.length;
                for (var k = 0; k < j; k++) {
                    i.menu[i.menulist[k]].init();
                }
            };
            i.unload = function() {
                i.sele.slf.remove();
            };
            i.hotkey = function(j) {};
            i.hoverOn = function() {
                if (!h.islocked) {
                    if (i.isanimating === false || i.isanimating === "hoverOff") {
                        i.isactive = true;
                        i.isanimating = "hoverOn";
                        i.sele.slf.velocity("stop").velocity({
                            left: 0
                        }, {
                            duration: 240,
                            easing: "easeOutCirc",
                            complete: function() {
                                i.isanimating = false;
                                h.hotkey.local = i.hotkey;
                            }
                        });
                        h.isappnow >= 0 && h.app[h.isappnow].stepOut(180);
                    }
                }
            };
            i.hoverOff = function() {
                if (!h.islocked) {
                    if (i.isanimating === false || i.isanimating === "hoverOn") {
                        h.hotkey.local = function() {};
                        i.isactive = false;
                        i.isanimating = "hoverOff";
                        i.sele.slf.velocity("stop").velocity({
                            left: -375
                        }, {
                            duration: 240,
                            easing: "easeInCubic",
                            complete: function() {
                                i.isanimating = false;
                            }
                        });
                        h.isappnow >= 0 && h.app[h.isappnow].stepIn(180);
                    }
                }
            };
            i.click = function() {
                if (!h.islocked) {}
            };
            i.dblclick = function() {
                if (!h.islocked) {}
            };
            i.mousedown = function(j) {
                if (!h.islocked) {}
            };
            i.mouseup = function(j) {
                if (!h.islocked) {}
            };
            i.mousemove = function(j) {
                if (!h.islocked) {}
            };
            i.mouseenter = function(j) {
                if (!h.islocked) {}
            };
            i.mouseleave = function(j) {
                if (!h.islocked) {}
            };
            i.resize = function(k, j) {
                i.isanimating = "resize";
                i.sele.slf.velocity({
                    height: k
                }, {
                    duration: j,
                    complete: function() {
                        i.isanimating = false;
                    }
                });
                i.sele.lst.velocity({
                    height: k
                }, j);
                i.sele.dck.velocity({
                    height: k
                }, j);
            };
            i.refresh = function() {
                var l = i.iscaption[h.islanguage];
                i.sele.tta.html(l);
                var j = i.menulist.length;
                for (var k = 0; k < j; k++) {
                    i.menu[i.menulist[k]].refresh();
                }
            };
            i.show = function(j) {
                i.sele.slf.css("visibility", "visible");
            };
            i.hide = function(j) {
                h.hotkey.local = function() {};
                i.isactive = false;
                i.isanimating = "hide";
                i.sele.slf.velocity("stop").velocity({
                    opacity: 0
                }, j).velocity({
                    left: -375,
                    opacity: .8
                }, {
                    duration: 1,
                    complete: function() {
                        i.isanimating = false;
                    }
                });
            };
        };
        d.qlaunchmenugroup1 = function(i) {
            i.isname = "";
            i.isid = "";
            i.isclass = "";
            i.iscaption = [];
            i.isanimating = false;
            i.sele = {};
        };
        d.qlaunchmenugroup2 = function(i) {
            i.isid = "eos-qmenu-group-" + i.isname;
            i.load0 = i.load || function() {};
            i.load = function() {
                h.qlaunch.sele.lst.append("<div id='" + i.isid + "' class='eos-qlaunchmenugroup'><a id='" + i.isid + "s' class='eos-qlaunchmenugroups'></a><a id='" + i.isid + "l' class='eos-qlaunchmenugroupl'></a></div>");
                i.sele.slf = g("#" + i.isid);
                i.sele.cap = g("#" + i.isid + "s");
                i.load0();
            };
            i.init0 = i.init || function() {};
            i.init = function() {
                i.sele.slf.addClass(i.isclass);
                i.init0();
            };
            i.refresh0 = i.refresh || function() {};
            i.refresh = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.cap.html(j);
                i.refresh0();
            };
            i.show0 = i.show || function() {};
            i.show = function(j) {
                i.show0(j);
            };
        };
        d.qlaunchmenubutton1 = function(i) {
            i.isname = "";
            i.isid = "";
            i.isclass = "";
            i.iscaption = [];
            i.isanimating = false;
            i.sele = {};
        };
        d.qlaunchmenubutton2 = function(i) {
            i.isid = "eos-qmenu-button-" + i.isname;
            i.load0 = i.load || function() {};
            i.load = function() {
                h.qlaunch.sele.lst.append("<div id='" + i.isid + "' class='eos-qlaunchmenubutton'><a id='" + i.isid + "i' class='eos-qlaunchmenubuttoni'></a><button id='" + i.isid + "s' class='eos-qlaunchmenubuttons'></button></div>");
                i.sele.slf = g("#" + i.isid);
                i.sele.cap = g("#" + i.isid + "s");
                i.load0();
            };
            i.init0 = i.init || function() {};
            i.init = function() {
                i.sele.slf.on("click", i.click).addClass(i.isclass);
                i.init0();
            };
            i.click0 = i.click || function() {};
            i.click = function() {
                if (!h.islocked && !h.qlaunch.islocked) {
                    h.wait(1);
                    i.click0();
                }
            };
            i.refresh0 = i.refresh || function() {};
            i.refresh = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.cap.html(j);
                i.refresh0();
            };
            i.show0 = i.show || function() {};
            i.show = function(j) {
                i.show0(j);
            };
        };
        d.taskbar = function(i) {
            i.isid = "eos-taskbar";
            i.iscaption = h.lang.sys.task_center;
            i.isactive = false;
            i.islocked = false;
            i.isanimating = false;
            i.sele = {};
            i.label = [];
            i.load = function() {
                h.sele.slf.append("<div id='eos-taskbar'><div id='eos-taskbar-dck'></div><div id='eos-taskbar-bdy'><div id='eos-taskbar-ttl'><a id='eos-taskbar-tta'>Task Center</a></div><div id='eos-taskbar-lst'></div><div id='eos-taskbar-ftr'></div></div></div>");
                i.sele.slf = g("#eos-taskbar");
                i.sele.dck = g("#eos-taskbar-dck");
                i.sele.tta = g("#eos-taskbar-tta");
                i.sele.lst = g("#eos-taskbar-lst");
                i.sele.ftr = g("#eos-taskbar-ftr");
            };
            i.init = function() {
                i.sele.slf.hover(function() {
                    h.islocked === false && i.hoverOn();
                }, function() {
                    h.islocked === false && i.hoverOff();
                }).on("click", function() {
                    h.islocked === false && i.click();
                }).on("dblclick", function() {
                    h.islocked === false && i.dblclick();
                }).on("mousedown", function(j) {
                    h.islocked === false && i.mousedown(j);
                }).on("mouseup", function(j) {
                    h.islocked === false && i.mouseup(j);
                }).on("mousemove", function(j) {
                    h.islocked === false && i.mousemove(j);
                }).on("mouseenter", function(j) {
                    h.islocked === false && i.mouseenter(j);
                }).on("mouseleave", function(j) {
                    h.islocked === false && i.mouseleave(j);
                });
            };
            i.unload = function() {
                i.sele.slf.remove();
            };
            i.hotkey = function(j) {};
            i.hoverOn = function() {
                if (!h.islocked) {
                    if (i.isanimating === false || i.isanimating === "hoverOff") {
                        i.isactive = true;
                        i.isanimating = "hoverOn";
                        i.sele.slf.velocity("stop").velocity({
                            right: 0
                        }, {
                            duration: 240,
                            easing: "easeOutCirc",
                            complete: function() {
                                i.isanimating = false;
                                h.hotkey.local = i.hotkey;
                            }
                        });
                        h.isappnow >= 0 && h.app[h.isappnow].stepOut(180);
                    }
                    var j = i.label.length;
                    for (var k = 0; k < j; k++) {
                        i.label[k].show(240);
                    }
                }
            };
            i.hoverOff = function() {
                if (!h.islocked) {
                    if (i.isanimating === false || i.isanimating === "hoverOn") {
                        h.hotkey.local = function() {};
                        i.isactive = false;
                        i.isanimating = "hoverOff";
                        i.sele.slf.velocity("stop").velocity({
                            right: -275
                        }, {
                            duration: 240,
                            easing: "easeInCubic",
                            complete: function() {
                                i.isanimating = false;
                            }
                        });
                        h.isappnow >= 0 && h.app[h.isappnow].stepIn(180);
                    }
                }
            };
            i.click = function() {
                if (!h.islocked) {}
            };
            i.dblclick = function() {
                if (!h.islocked) {}
            };
            i.mousedown = function(j) {
                if (!h.islocked) {}
            };
            i.mouseup = function(j) {
                if (!h.islocked) {}
            };
            i.mousemove = function(j) {
                if (!h.islocked) {}
            };
            i.mouseenter = function(j) {
                if (!h.islocked) {}
            };
            i.mouseleave = function(j) {
                if (!h.islocked) {}
            };
            i.resize = function(k, j) {
                i.isanimating = "resize";
                i.sele.slf.velocity({
                    height: k
                }, {
                    duration: j,
                    complete: function() {
                        i.isanimating = false;
                    }
                });
                i.sele.lst.velocity({
                    height: k
                }, j);
                i.sele.dck.velocity({
                    height: k
                }, j);
            };
            i.refresh = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.tta.html(j);
            };
            i.show = function(j) {
                i.sele.slf.css("visibility", "visible");
            };
            i.hide = function(j) {
                h.hotkey.local = function() {};
                i.isactive = false;
                i.isanimating = "hide";
                i.sele.slf.velocity("stop").velocity({
                    opacity: 0
                }, j).velocity({
                    right: -275,
                    opacity: .8
                }, {
                    duration: 1,
                    complete: function() {
                        i.isanimating = false;
                    }
                });
            };
        };
        d.taskbarlabel = function(k, i) {
            k.isid = "eos-taskbar-label" + i;
            k.isappid = i;
            k.iscaption = [];
            k.isanimating = false;
            k.istop = 0;
            k.sele = {};
            k.load = function() {
                h.taskbar.sele.lst.append("<div id='" + k.isid + "' class='eos-tasklabel'><div id='" + k.isid + "i' class='eos-tasklabeli'></div><div class='eos-tasklabelt'><a id='" + k.isid + "t' class='eos-tasklabelt0'></a></div><div id='" + k.isid + "x' class='eos-tasklabelx'><a class='eos-tasklabelx1'></a><a class='eos-tasklabelx2'>&times;</a></div></div>");
                k.sele.slf = g("#" + k.isid);
                k.sele.cvr = g("#" + k.isid + "i");
                k.sele.ttl = g("#" + k.isid + "t");
                k.sele.clx = g("#" + k.isid + "x");
            };
            k.init = function() {
                k.sele.slf.hover(k.hoverOn, k.hoverOff).on("click", k.click);
                k.sele.clx.on("click", k.clickx);
            };
            k.hoverOn = function() {
                if (!h.islocked && !h.taskbar.islocked) {
                    if (k.isanimating === false || k.isanimating === "hoverOff") {
                        k.isanimating = "hoverOn";
                        k.sele.cvr.velocity("stop").velocity({
                            opacity: .02
                        }, {
                            duration: 180,
                            complete: function() {
                                k.isanimating = false;
                            }
                        });
                    }
                }
            };
            k.hoverOff = function() {
                if (!h.islocked && !h.taskbar.islocked) {
                    if (k.isanimating === false || k.isanimating === "hoverOn") {
                        k.isanimating = "hoverOff";
                        k.sele.cvr.velocity("stop").velocity({
                            opacity: .32
                        }, {
                            duration: 180,
                            complete: function() {
                                k.isanimating = false;
                            }
                        });
                    }
                }
            };
            k.click = function() {
                if (!h.islocked && !h.taskbar.islocked) {
                    h.actapp(k.isappid);
                }
            };
            k.clickx = function() {
                if (!h.islocked && !h.taskbar.islocked) {
                    h.clsapp(k.isappid);
                }
            };
            k.refresh = function() {
                var j = k.iscaption[h.islanguage];
                k.sele.ttl.html(j);
            };
            k.relocate = function(m, l, j) {
                k.isanimating = "relocate";
                m = m * 130;
                k.istop = m;
                k.sele.slf.velocity({
                    top: m
                }, {
                    duration: l,
                    complete: function() {
                        k.isanimating = false;
                        typeof j === "function" && j();
                    }
                });
            };
            k.activate = function(j) {
                j = j * 130;
                k.istop = j;
                k.sele.slf.css("z-index", "1").css("top", j + "px").css("visibility", "visible");
            };
            k.inactivate = function() {
                k.sele.slf.css("z-index", "-1").css("top", "0").css("visibility", "hidden");
            };
            k.show = function(j) {};
        };
        d.user = function(i) {
            i.isid = "eos-user";
            i.sele = {};
            i.load = function() {
                h.qlaunch.sele.usr.append("<div id='eos-user'><div id='eos-user-tab'></div><div id='eos-user-uid'><a id='eos-user-uids'>User ID</a></div></div>");
                i.sele.slf = g("#eos-user");
                i.sele.uis = g("#eos-user-uids");
            };
            i.init = function() {
                i.sele.slf.on("click", i.click);
            };
            i.click = function() {
                if (!h.islocked) {
                    h.wait(1);
                    i.open();
                }
            };
            i.userid = function(j) {
                i.sele.uis.html(j);
            };
            i.open = function() {};
        };
        d.date = function(i) {
            i.isid = "eos-date";
            i.sele = {};
            i.load = function() {
                h.qlaunch.sele.ftr.append("<div id='eos-date'><a id='eos-date1'></a><a id='eos-date2'></a></div>");
                i.sele.slf = g("#eos-date");
                i.sele.dt1 = g("#eos-date1");
                i.sele.dt2 = g("#eos-date2");
            };
            i.init = function() {
                i.sele.slf.on("click", i.click);
                i.worker = new Worker(h.iswkpath + "/lib.eos.wkr.date.js");
                i.worker.onmessage = function(j) {
                    i.sele.dt1.html(j.data[0]);
                    i.sele.dt2.html(j.data[1]);
                };
            };
            i.click = function() {
                if (!h.islocked) {
                    h.wait(1);
                    i.open();
                }
            };
            i.open = function() {};
        };
        d.langbar = function(i) {
            i.isid = "eos-langbar";
            i.sele = {};
            i.islangtotal = 1;
            i.langlist = [];
            i.langlist[0] = "English,&nbsp;International";
            i.langlabel = [];
            i.langlabel[0] = "ENG";
            i.load = function() {
                h.qlaunch.sele.ftr.append("<div id='eos-langbar'><div id='eos-langbar-mnu'></div><div id='eos-langbar-but'><input id='eos-langbar-ipt' /></div><div id='eos-langbar-cur'><a id='eos-langbar-cua'>ENG</a></div></div>");
                i.sele.slf = g("#eos-langbar");
                i.sele.mnu = g("#eos-langbar-mnu");
                i.sele.but = g("#eos-langbar-but");
                i.sele.ipt = g("#eos-langbar-ipt");
                i.sele.cua = g("#eos-langbar-cua");
                i.sele.lan = [];
                for (var j = 0; j < i.islangtotal; j++) {
                    i.sele.mnu.append("<div id='eos-langbar-lang" + j + "' class='eos-langbar-li0'><a class='eos-langbar-li1'></a><a class='eos-langbar-li2'>" + i.langlist[j] + "</a><div>");
                    i.sele.lan[j] = g("#eos-langbar-lang" + j);
                }
            };
            i.init = function() {
                i.sele.but.on("click", i.clickb);
                i.sele.ipt.on("focus", i.getfocusi).on("blur", i.losefocusi);
                i.sele.lan[0].on("click", i.clickl00);
                typeof i.sele.lan[1] !== "undefined" && i.sele.lan[1].on("click", i.clickl01);
                typeof i.sele.lan[2] !== "undefined" && i.sele.lan[2].on("click", i.clickl02);
                typeof i.sele.lan[3] !== "undefined" && i.sele.lan[3].on("click", i.clickl03);
                typeof i.sele.lan[4] !== "undefined" && i.sele.lan[4].on("click", i.clickl04);
                typeof i.sele.lan[5] !== "undefined" && i.sele.lan[5].on("click", i.clickl05);
                typeof i.sele.lan[6] !== "undefined" && i.sele.lan[6].on("click", i.clickl06);
                typeof i.sele.lan[7] !== "undefined" && i.sele.lan[7].on("click", i.clickl07);
                typeof i.sele.lan[8] !== "undefined" && i.sele.lan[8].on("click", i.clickl08);
                typeof i.sele.lan[9] !== "undefined" && i.sele.lan[9].on("click", i.clickl09);
            };
            i.clickb = function() {
                if (!h.islocked) {
                    i.sele.mnu.height() === 0 && i.sele.ipt.focus();
                }
            };
            i.clickl00 = function() {
                if (!h.islocked) {
                    h.islanguage !== 0 && h.changelang(0);
                }
            };
            i.clickl01 = function() {
                if (!h.islocked) {
                    h.islanguage !== 1 && h.changelang(1);
                }
            };
            i.clickl02 = function() {
                if (!h.islocked) {
                    h.islanguage !== 2 && h.changelang(2);
                }
            };
            i.clickl03 = function() {
                if (!h.islocked) {
                    h.islanguage !== 3 && h.changelang(3);
                }
            };
            i.clickl04 = function() {
                if (!h.islocked) {
                    h.islanguage !== 4 && h.changelang(4);
                }
            };
            i.clickl05 = function() {
                if (!h.islocked) {
                    h.islanguage !== 5 && h.changelang(5);
                }
            };
            i.clickl06 = function() {
                if (!h.islocked) {
                    h.islanguage !== 6 && h.changelang(6);
                }
            };
            i.clickl07 = function() {
                if (!h.islocked) {
                    h.islanguage !== 7 && h.changelang(7);
                }
            };
            i.clickl08 = function() {
                if (!h.islocked) {
                    h.islanguage !== 8 && h.changelang(8);
                }
            };
            i.clickl09 = function() {
                if (!h.islocked) {
                    h.islanguage !== 9 && h.changelang(9);
                }
            };
            i.getfocusi = function() {
                if (!h.islocked) {
                    var j = i.islangtotal * 42;
                    i.sele.mnu.velocity("stop").velocity({
                        height: j
                    }, {
                        duration: 180,
                        easing: "easeOutCirc"
                    });
                }
            };
            i.losefocusi = function() {
                if (!h.islocked) {
                    setTimeout(function() {
                        i.sele.mnu.velocity("stop").velocity({
                            height: 0
                        }, {
                            duration: 180,
                            easing: "easeInCubic"
                        });
                    }, 130);
                }
            };
        };
        d.config = function(i) {
            i.isid = "eos-config";
            i.sele = {};
            i.load = function() {
                h.qlaunch.sele.ftr.append("<div id='eos-config'><div id='eos-config0'></div><div id='eos-config1'></div></div>");
                i.sele.slf = g("#eos-config");
            };
            i.init = function() {
                i.sele.slf.on("click", i.click);
            };
            i.click = function() {
                if (!h.islocked) {
                    h.wait(1);
                    i.open();
                }
            };
            i.open = function() {};
        };
        d.exit = function(i) {
            i.isid = "eos-exit";
            i.sele = {};
            i.load = function() {
                h.qlaunch.sele.ftr.append("<div id='eos-exit'><div id='eos-exit0'></div><div id='eos-exit1'></div></div>");
                i.sele.slf = g("#eos-exit");
            };
            i.init = function() {
                i.sele.slf.on("click", i.click);
            };
            i.click = function() {
                if (!h.islocked) {
                    h.msg(3, h.lang.sys.sure_to_logout, function(j) {
                        if (j === 1) {
                            open(location, "_self").close();
                        }
                    });
                }
            };
        };
        d.waiter(h.waiter);
        d.msger(h.msger);
        d.start(h.start);
        d.qlaunch(h.qlaunch);
        d.taskbar(h.taskbar);
        for (var e = 0; e <= h.isappmax; e++) {
            h.app[e] = {};
            d.appframe(h.app[e], e);
            h.taskbar.label[e] = {};
            d.taskbarlabel(h.taskbar.label[e], e);
        }
        d.user(h.user);
        d.date(h.date);
        d.langbar(h.langbar);
        d.config(h.config);
        d.exit(h.exit);
        h.load = function() {
            g("body").append("<div id='eos-pageframe'></div>");
            h.sele.slf = g("#eos-pageframe");
            h.waiter.load();
            h.msger.load();
            h.start.load();
            h.qlaunch.load();
            h.taskbar.load();
            for (var j = 0; j <= h.isappmax; j++) {
                h.app[j].load();
                h.taskbar.label[j].load();
            }
            h.user.load();
            h.date.load();
            h.langbar.load();
            h.config.load();
            h.exit.load();
        };
        h.init = function() {
            g(a).resize(function() {
                h.resize();
            }).keydown(function(i) {
                if (!h.islocked) {
                    h.hotkey.global(i);
                    h.hotkey.local(i);
                }
            });
            h.waiter.init();
            h.msger.init();
            h.start.init();
            h.qlaunch.init();
            h.taskbar.init();
            for (var j = 0; j <= h.isappmax; j++) {
                h.app[j].init();
                h.taskbar.label[j].init();
            }
            h.user.init();
            h.date.init();
            h.langbar.init();
            h.config.init();
            h.exit.init();
        };
        h.wait = function(i) {
            i === 1 ? h.waiter.show() : h.waiter.hide();
        };
        h.msg = function(j, k, i) {
            h.msger.istype = j;
            h.msger.iscaption = k;
            h.msger.callback = i || function() {};
            h.msger.show();
        };
        h.resize = function() {
            h.fn.wait2run(function() {
                return h.islocked === false ? true : false;
            }, function() {
                h.islocked = true;
                h.issizeX = g(a).width();
                h.issizeY = g(a).height();
                if (h.issizeX >= h.issizeminX && h.issizeY >= h.issizeminY) {
                    g("body").css("overflow", "hidden");
                } else {
                    g("body").css("overflow", "auto");
                }
                h.issizeX = h.issizeX < h.issizeminX ? h.issizeminX : h.issizeX;
                h.issizeY = h.issizeY < h.issizeminY ? h.issizeminY : h.issizeY;
                h.start.resize(h.issizeX, h.issizeY, 1);
                for (var j = 0; j <= h.isappmax; j++) {
                    h.app[j].resize(h.issizeX, h.issizeY, 1);
                }
                h.sele.slf.velocity({
                    width: h.issizeX,
                    height: h.issizeY
                }, {
                    duration: 1,
                    complete: function() {
                        h.islocked = false;
                    }
                });
            }, 12e3);
        };
        h.refresh = function(i) {
            h.fn.wait2run(function() {
                return h.islocked === false ? true : false;
            }, function() {
                h.islocked = true;
                i === 0 || h.wait(1);
                h.start.refresh();
                h.qlaunch.refresh();
                h.taskbar.refresh();
                for (var j = 0; j <= h.isappmax; j++) {
                    h.app[j].refresh();
                    h.taskbar.label[j].refresh();
                }
                setTimeout(function() {
                    h.islocked = false;
                    i === 0 || h.wait();
                }, 120);
            }, 12e3);
        };
        h.newapp = function(o, q, l, s) {
            if (h.islocked === false) {
                h.islocked = true;
                var r = h.isappnow;
                var m = -1;
                if (o >= 0 && o <= h.isappmax) {
                    h.isappnow = o;
                } else {
                    for (var p = 0; p <= h.isappmax; p++) {
                        if (h.app[p].isoccupied === false) {
                            h.isappnow = p;
                            break;
                        }
                    }
                    if (q === 1) {
                        for (var p = 0; p <= h.isappmax; p++) {
                            if (h.app[p].isoccupied === l) {
                                m = p;
                                break;
                            }
                        }
                    }
                }
                if (h.isappnow === r) {
                    h.islocked = false;
                    h.msg(2, h.lang.sys.no_more_window);
                } else {
                    if (m > 0) {
                        h.isappnow = r;
                        h.islocked = false;
                        h.msg(3, h.lang.sys.window_is_open, function(i) {
                            if (i === 1) {
                                h.actapp(m);
                            }
                        });
                    } else {
                        h.qlaunch.hide(60);
                        h.taskbar.hide(60);
                        h.app[h.isappnow].isoccupied = l;
                        s(h.app[h.isappnow]);
                        var n = h.isappidx.push(-1);
                        var k = -1;
                        var t = h.isappnow;
                        for (var p = 0; p < n; p++) {
                            k = h.isappidx[p];
                            h.isappidx[p] = t;
                            t = k;
                        }
                        h.isappsqn.push(h.isappnow);
                        h.taskbar.label[h.isappnow].iscaption = h.app[h.isappnow].chd.iscaption;
                        h.taskbar.label[h.isappnow].refresh();
                        h.taskbar.label[h.isappnow].activate(n - 1);
                        r >= 0 && h.app[r].hide(280);
                        h.app[h.isappnow].refresh();
                        h.app[h.isappnow].enter(280, function() {
                            h.islocked = false;
                        });
                    }
                }
            }
        };
        h.clsapp = function(m) {
            if (h.islocked === false) {
                h.islocked = true;
                if (m >= 0 && m <= h.isappmax && h.app[m].isoccupied !== false) {
                    var k = h.isappnow;
                    var l = h.isappidx.length;
                    var p = -1;
                    var o = m;
                    for (var n = 1; n <= l; n++) {
                        p = h.isappidx[l - n];
                        h.isappidx[l - n] = o;
                        o = p;
                        if (o === m) {
                            break;
                        }
                    }
                    h.isappidx.pop();
                    var l = h.isappsqn.length;
                    var p = -1;
                    var o = m;
                    for (var n = 1; n <= l; n++) {
                        p = h.isappsqn[l - n];
                        h.isappsqn[l - n] = o;
                        o = p;
                        if (o === m) {
                            break;
                        }
                    }
                    h.isappsqn.pop();
                    l = h.isappsqn.length;
                    h.taskbar.label[m].iscaption = "";
                    h.taskbar.label[m].inactivate();
                    if (m === h.isappnow) {
                        if (l > 0) {
                            h.isappnow = h.isappidx[0];
                            h.taskbar.isanimating = "label-relocate";
                            if (l > 1) {
                                for (var n = 0; n < l - 1; n++) {
                                    h.taskbar.label[h.isappsqn[n]].relocate(n, 180);
                                }
                                h.taskbar.label[h.isappsqn[l - 1]].relocate(l - 1, 180, function() {
                                    h.taskbar.isanimating = false;
                                });
                            } else {
                                h.taskbar.label[h.isappsqn[0]].relocate(0, 180, function() {
                                    h.taskbar.isanimating = false;
                                });
                            }
                            h.app[m].exit(360, function() {
                                h.app[h.isappnow].show(630, function() {
                                    h.app[m].unload();
                                    h.islocked = false;
                                });
                            });
                        } else {
                            h.isappnow = -1;
                            h.app[m].exit(360, function() {
                                h.app[m].unload();
                                h.islocked = false;
                            });
                        }
                    } else {
                        h.app[m].exit(1, function() {
                            h.app[m].unload();
                            if (l > 0) {
                                h.taskbar.isanimating = "label-relocate";
                                if (l > 1) {
                                    for (var j = 0; j < l - 1; j++) {
                                        h.taskbar.label[h.isappsqn[j]].relocate(j, 180);
                                    }
                                    h.taskbar.label[h.isappsqn[l - 1]].relocate(l - 1, 180, function() {
                                        h.taskbar.isanimating = false;
                                        h.islocked = false;
                                    });
                                } else {
                                    h.taskbar.label[h.isappsqn[0]].relocate(0, 180, function() {
                                        h.taskbar.isanimating = false;
                                        h.islocked = false;
                                    });
                                }
                            }
                        });
                    }
                } else {
                    h.islocked = false;
                }
            }
        };
        h.actapp = function(m) {
            if (h.islocked === false) {
                h.islocked = true;
                h.qlaunch.hide(60);
                if (m >= 0 && m <= h.isappmax && m != h.isappnow) {
                    h.taskbar.hide(60);
                    var k = h.isappnow;
                    var l = h.isappidx.length;
                    var p = -1;
                    var o = m;
                    for (var n = 0; n < l; n++) {
                        p = h.isappidx[n];
                        h.isappidx[n] = o;
                        o = p;
                        if (o === m) {
                            break;
                        }
                    }
                    h.isappnow = m;
                    h.app[k].hide(360);
                    setTimeout(function() {
                        h.app[m].show(360, function() {
                            h.islocked = false;
                        });
                    }, 6);
                } else {
                    h.islocked = false;
                }
            }
        };
        h.changelang = function(i) {
            h.langbar.sele.cua.html(h.langbar.langlabel[i]);
            h.islanguage = i;
            h.refresh();
        };
        h.remoteon.command = function() {};
        h.remoteon = function(i) {
            if (i === 1) {
                h.remoteon.worker = new Worker(h.iswkpath + "/lib.eos.wkr.remoteon.js");
                h.remoteon.worker.onmessage = function(j) {
                    h.remoteon.command(j.data);
                };
            } else {
                h.remoteon.worker && h.remoteon.worker.terminate();
            }
        };
        d.template1 = function(i) {
            i.isname = "";
            i.isid = "";
            i.isparent = false;
            i.isappid = -1;
            i.isclass = "";
            i.issizeX = 0;
            i.issizeY = 0;
            i.ismousedown = false;
            i.ismouseX = false;
            i.ismouseY = false;
            i.sele = {};
        };
        d.template2 = function(i) {
            i.load1 = i.load || function() {};
            i.load = function() {
                i.isappid = h.isappnow;
                i.isid = (i.isappid >= 0 ? h.app[i.isappid].isid : h.start.isid) + "-" + i.isname;
                i.isparent = i.isparent ? i.isparent.sele.slf : i.isappid >= 0 ? h.app[i.isappid].sele.bdy : h.start.sele.slf;
                typeof i.load0 === "function" && i.load0();
                i.load1();
                i.init();
            };
            i.init1 = i.init || function() {};
            i.init = function() {
                i.issizeX = i.sele.slf.width();
                i.issizeY = i.sele.slf.height();
                i.sele.slf.hover(i.hoverOn, i.hoverOff).on("click", i.click).on("dblclick", i.dblclick).on("mousedown", i.mousedown).on("mouseup", i.mouseup).on("mousemove", i.mousemove).on("mouseenter", i.mouseenter).on("mouseleave", i.mouseleave).on("keydown", i.keydown).on("keyup", i.keyup).on("keypress", i.keypress).on("focus", i.getfocus).on("blur", i.losefocus).addClass(i.isclass);
                i.isappid >= 0 ? h.app[i.isappid].addcom(i.isname) : h.start.addcom(i.isname);
                typeof i.init0 === "function" && i.init0();
                i.init1();
            };
            i.unload1 = i.unload || function() {};
            i.unload = function() {
                i.sele.slf.remove();
                typeof i.unload0 === "function" && i.unload0();
                i.unload1();
            };
            i.hoverOn1 = i.hoverOn || function() {};
            i.hoverOn = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.hoverOn0 === "function" && i.hoverOn0();
                    i.hoverOn1();
                }
            };
            i.hoverOff1 = i.hoverOff || function() {};
            i.hoverOff = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.hoverOff0 === "function" && i.hoverOff0();
                    i.hoverOff1();
                }
            };
            i.click1 = i.click || function() {};
            i.click = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.click0 === "function" && i.click0();
                    i.click1();
                }
            };
            i.dblclick1 = i.dblclick || function() {};
            i.dblclick = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.dblclick0 === "function" && i.dblclick0();
                    i.dblclick1();
                }
            };
            i.mousedown1 = i.mousedown || function() {};
            i.mousedown = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    i.ismousedown = true;
                    typeof i.mousedown0 === "function" && i.mousedown0(j);
                    i.mousedown1(j);
                }
            };
            i.mouseup1 = i.mouseup || function() {};
            i.mouseup = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    i.ismousedown = false;
                    typeof i.mouseup0 === "function" && i.mouseup0(j);
                    i.mouseup1(j);
                }
            };
            i.mousemove1 = i.mousemove || function() {};
            i.mousemove = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.mousemove0 === "function" && i.mousemove0(j);
                    i.mousemove1(j);
                }
            };
            i.mouseenter1 = i.mouseenter || function() {};
            i.mouseenter = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.mouseenter0 === "function" && i.mouseenter0(j);
                    i.mouseenter1(j);
                }
            };
            i.mouseleave1 = i.mouseleave || function() {};
            i.mouseleave = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    i.ismousedown = false;
                    typeof i.mouseleave0 === "function" && i.mouseleave0(j);
                    i.mouseleave1(j);
                }
            };
            i.keydown1 = i.keydown || function() {};
            i.keydown = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.keydown0 === "function" && i.keydown0(j);
                    i.keydown1(j);
                }
            };
            i.keyup1 = i.keyup || function() {};
            i.keyup = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.keyup0 === "function" && i.keyup0(j);
                    i.keyup1(j);
                }
            };
            i.keypress1 = i.keypress || function() {};
            i.keypress = function(j) {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    typeof i.keypress0 === "function" && i.keypress0(j);
                    i.keypress1(j);
                }
            };
            i.getfocus1 = i.getfocus || function() {};
            i.getfocus = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    i.isactive = true;
                    typeof i.getfocus0 === "function" && i.getfocus0();
                    i.getfocus1();
                }
            };
            i.losefocus1 = i.losefocus || function() {};
            i.losefocus = function() {
                if (!h.islocked && (i.isappid >= 0 ? !h.app[i.isappid].islocked : !h.start.islocked)) {
                    i.isactive = false;
                    typeof i.losefocus0 === "function" && i.losefocus0();
                    i.losefocus1();
                }
            };
            if (typeof i.setfocus0 === "function") {
                i.setfocus1 = i.setfocus || function() {};
                i.setfocus = function() {
                    i.sele.slf.focus();
                    i.setfocus0();
                    i.setfocus1();
                };
            }
            if (typeof i.enable0 === "function") {
                i.enable1 = i.enable || function() {};
                i.enable = function() {
                    i.sele.slf.attr("disabled", false);
                    i.enable0();
                    i.enable1();
                };
            }
            if (typeof i.disable0 === "function") {
                i.disable1 = i.disable || function() {};
                i.disable = function() {
                    i.sele.slf.attr("disabled", true);
                    i.disable0();
                    i.disable1();
                };
            }
            i.resize1 = i.resize || function() {};
            i.resize = function(j, l, k) {
                i.issizeX = j;
                i.issizeY = l;
                i.sele.slf.velocity({
                    width: j,
                    height: l
                }, k);
                typeof i.resize0 === "function" && i.resize0(j, l, k);
                i.resize1(j, l, k);
            };
            i.refresh1 = i.refresh || function() {};
            i.refresh = function() {
                typeof i.refresh0 === "function" && i.refresh0();
                i.refresh1();
            };
        };
        d.container = function(i) {
            i.ismovable = false;
            i.load0 = function() {
                i.isparent.append("<div id='" + i.isid + "' class='eos-container'></div>");
                i.sele.slf = g("#" + i.isid);
            };
            i.mousedown0 = function(j) {
                if (i.ismovable) {
                    i.ismouseX = j.pageX - i.sele.slf.offset().left;
                    i.ismouseY = j.pageY - i.sele.slf.offset().top;
                }
            };
            i.mousemove0 = function(k) {
                if (!h.isfocused && i.ismovable && i.ismousedown) {
                    var l = k.pageX - i.ismouseX;
                    var j = k.pageY - i.ismouseY;
                    i.sele.slf.offset({
                        left: l,
                        top: j
                    });
                }
            };
        };
        d.label = function(i) {
            i.iscaption = [];
            i.load0 = function() {
                i.isparent.append("<label id='" + i.isid + "' class='eos-label'></label>");
                i.sele.slf = g("#" + i.isid);
            };
            i.refresh0 = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.slf.html(j);
            };
        };
        d.link = function(i) {
            i.iscaption = [];
            i.load0 = function() {
                i.isparent.append("<a id='" + i.isid + "' class='eos-link'></a>");
                i.sele.slf = g("#" + i.isid);
            };
            i.refresh0 = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.slf.html(j);
            };
        };
        d.input = function(i) {
            i.istype = "text";
            i.islength = 20;
            i.load0 = function() {
                i.isparent.append("<input id='" + i.isid + "' class='eos-input' autocomplete='off'/>");
                i.sele.slf = g("#" + i.isid);
            };
            i.init0 = function() {
                i.sele.slf.attr("type", i.istype).attr("maxlength", i.islength);
            };
            i.getfocus0 = function() {
                h.isfocused = true;
            };
            i.losefocus0 = function() {
                h.isfocused = false;
            };
            i.setfocus0 = function() {};
            i.enable0 = function() {};
            i.disable0 = function() {};
            i.value = function(j) {
                if (j) {
                    return i.sele.slf.val(j);
                } else {
                    return i.sele.slf.val();
                }
            };
        };
        d.select = function(i) {
            i.isoption = [];
            i.isselected = -1;
            i.load0 = function() {
                i.isparent.append("<select id='" + i.isid + "' class='eos-select'></select>");
                i.sele.slf = g("#" + i.isid);
            };
            i.init0 = function() {
                var k = i.isoption.length;
                var j = "";
                if (k > 0) {
                    for (var l = 0; l < k; l++) {
                        if (l == i.isselected) {
                            j = j + "<option selected='selected'>" + i.isoption[l] + "</option>";
                        } else {
                            j = j + "<option>" + i.isoption[l] + "</option>";
                        }
                    }
                    i.sele.slf.html(j);
                }
            };
            i.getfocus0 = function() {
                h.isfocused = true;
            };
            i.losefocus0 = function() {
                h.isfocused = false;
            };
            i.setfocus0 = function() {};
            i.enable0 = function() {};
            i.disable0 = function() {};
            i.value = function() {
                return i.sele.slf.val();
            };
        };
        d.button = function(i) {
            i.iscaption = [];
            i.load0 = function() {
                i.isparent.append("<button id='" + i.isid + "' class='eos-button'></button>");
                i.sele.slf = g("#" + i.isid);
            };
            i.refresh0 = function() {
                var j = i.iscaption[h.islanguage];
                i.sele.slf.html(j);
            };
            i.getfocus0 = function() {
                h.isfocused = true;
            };
            i.losefocus0 = function() {
                h.isfocused = false;
            };
            i.setfocus0 = function() {};
            i.enable0 = function() {};
            i.disable0 = function() {};
        };
        d.grid = function(i) {
            i.isclassHead = "";
            i.isclassCell = "";
            i.dataobj = [];
            i.datasource = [];
            i.isheader = [];
            i.isrecmax = 20;
            i.isheihead = 32;
            i.isheicell = 25;
            i.isselectable = true;
            i.iscolorhover = "#e7e7e7";
            i.iscolorhovers = "#a9d5cf";
            i.iscolorselect = "#bbeae3";
            i.ispage = 0;
            i.isgridsx = 0;
            i.isadjedo = false;
            i.isadjedx = 0;
            i.waiter = {};
            i.head = {};
            i.body = {};
            i.load0 = function() {
                i.isparent.append("<div id='" + i.isid + "' class='eos-grid'><div id='" + i.isid + "-wait' class='eos-grid-wait'></div><div id='" + i.isid + "-0' class='eos-grid0'><div id='" + i.isid + "-head' class='eos-grid-head'></div><div id='" + i.isid + "-body' class='eos-grid-body'></div></div></div>");
                i.sele.slf = g("#" + i.isid);
                i.sele.wai = g("#" + i.isid + "-wait");
                i.sele.sl0 = g("#" + i.isid + "-0");
                i.sele.hdr = g("#" + i.isid + "-head");
                i.sele.bdy = g("#" + i.isid + "-body");
                var l = i.dataobj.length;
                d.grid.waiter(i.waiter, i);
                i.waiter.load();
                i.head.bng0 = {};
                d.grid.header0(i.head.bng0, i, "bng0");
                i.head.bng0.load();
                i.isgridsx = i.isgridsx + 20 + 1;
                for (var m = 0; m < l; m++) {
                    i.head[i.dataobj[m]] = {};
                    d.grid.header(i.head[i.dataobj[m]], i, m);
                    i.head[i.dataobj[m]].load();
                    i.isgridsx = i.isgridsx + i.isheader[m][2] + 1;
                }
                i.head.end0 = {};
                d.grid.header0(i.head.end0, i, "end0");
                i.head.end0.load();
                i.isgridsx = i.isgridsx + 20 + 1;
                i.body.bng0 = {};
                d.grid.column0(i.body.bng0, i, "bng0");
                i.body.bng0.load();
                i.body.bng0.rec = [];
                for (var k = 0; k < i.isrecmax; k++) {
                    i.body.bng0.rec[k] = {};
                    d.grid.cell(i.body.bng0.rec[k], i.body.bng0, k);
                    i.body.bng0.rec[k].load();
                    i.body.bng0.rec[k].isselected = false;
                    i.body.bng0.rec[k].isrecno = -1;
                    i.body.bng0.rec[k].sele.slf.addClass("eos-grid-cell0");
                }
                for (var m = 0; m < l; m++) {
                    i.body[i.dataobj[m]] = {};
                    d.grid.column(i.body[i.dataobj[m]], i, m);
                    i.body[i.dataobj[m]].load();
                    i.body[i.dataobj[m]].rec = [];
                    for (var k = 0; k < i.isrecmax; k++) {
                        i.body[i.dataobj[m]].rec[k] = {};
                        d.grid.cell(i.body[i.dataobj[m]].rec[k], i.body[i.dataobj[m]], k);
                        i.body[i.dataobj[m]].rec[k].load();
                    }
                }
                i.body.end0 = {};
                d.grid.column0(i.body.end0, i, "end0");
                i.body.end0.load();
                i.body.end0.rec = [];
                for (var k = 0; k < i.isrecmax; k++) {
                    i.body.end0.rec[k] = {};
                    d.grid.cell(i.body.end0.rec[k], i.body.end0, k);
                    i.body.end0.rec[k].load();
                }
                i.sele.hdr.width(i.isgridsx).height(i.isheihead);
                i.sele.bdy.width(i.isgridsx);
                i.head.bng0.sele.slf.css("z-index", "9");
                i.head[i.dataobj[0]].sele.slf.css("z-index", "8");
                i.body.bng0.sele.slf.css("z-index", "9");
                i.body[i.dataobj[0]].sele.slf.css("z-index", "8");
            };
            i.init0 = function() {
                i.sele.sl0.on("scroll", i.scroll);
                var l = i.dataobj.length;
                i.head.bng0.init();
                for (var m = 0; m < l; m++) {
                    i.head[i.dataobj[m]].init();
                }
                i.head.end0.init();
                i.body.bng0.init();
                for (var k = 0; k < i.isrecmax; k++) {
                    i.body.bng0.rec[k].init();
                }
                for (var m = 0; m < l; m++) {
                    i.body[i.dataobj[m]].init();
                    for (var k = 0; k < i.isrecmax; k++) {
                        i.body[i.dataobj[m]].rec[k].init();
                    }
                }
                i.body.end0.init();
                for (var k = 0; k < i.isrecmax; k++) {
                    i.body.end0.rec[k].init();
                }
            };
            i.mouseup0 = function(j) {
                i.isadjedo = false;
            };
            i.mousemove0 = function(l) {
                if (i.isadjedo && i.ismousedown) {
                    var k = l.pageX - i.ismouseX;
                    var j = i.isadjedx + k;
                    if (j > 9) {
                        i.isadjedo.sele.slf.width(j);
                        i.isadjedo.iscolumn.sele.slf.width(j);
                        var m = i.isgridsx + k;
                        i.sele.hdr.width(m);
                        i.sele.bdy.width(m);
                    }
                }
            };
            i.scroll = function() {
                var j = i.sele.sl0.scrollTop() + "px";
                var k = i.sele.sl0.scrollLeft() + "px";
                i.sele.hdr.css("top", j);
                i.head.bng0.sele.slf.css("left", k);
                i.head[i.dataobj[0]].sele.slf.css("left", k);
                i.body.bng0.sele.slf.css("left", k);
                i.body[i.dataobj[0]].sele.slf.css("left", k);
            };
            i.wait = function(j) {
                j === 1 ? i.waiter.show() : i.waiter.hide();
            };
            i.refresh0 = function() {
                var l = i.dataobj.length;
                for (var j = 0; j < l; j++) {
                    i.head[i.dataobj[j]].refresh();
                }
            };
            i.redata = function() {
                var k = i.datasource.length - i.isrecmax * i.ispage;
                var n = i.dataobj.length;
                var l = 0;
                for (var o = 0; o < i.isrecmax; o++) {
                    if (o < k) {
                        i.body.bng0.rec[o].isselected = false;
                        i.body.bng0.rec[o].isrecno = i.isrecmax * i.ispage + o;
                        i.body.bng0.rec[o].sele.slf.css("visibility", "visible").val("");
                        for (var m = 0; m < n; m++) {
                            var p = i.datasource[i.body.bng0.rec[o].isrecno][i.dataobj[m]];
                            i.body[i.dataobj[m]].rec[o].sele.slf.val(p).css("visibility", "visible");
                            if (i.isheader[m][1] === "n") {
                                i.body[i.dataobj[m]].rec[o].sele.slf.css("text-align", "right");
                            } else {
                                i.body[i.dataobj[m]].rec[o].sele.slf.css("text-align", "left");
                            }
                        }
                        i.body.end0.rec[o].sele.slf.css("visibility", "visible").val("");
                        l = l + (i.isheicell + 1);
                    } else {
                        i.body.bng0.rec[o].isselected = false;
                        i.body.bng0.rec[o].isrecno = -1;
                        i.body.bng0.rec[o].sele.slf.css("visibility", "hidden");
                        for (var m = 0; m < n; m++) {
                            i.body[i.dataobj[m]].rec[o].sele.slf.val("").css("visibility", "hidden");
                        }
                        i.body.end0.rec[o].sele.slf.css("visibility", "hidden");
                    }
                }
                i.sele.bdy.height(l);
            };
            i.hoverlineOn = function(l) {
                var j = i.dataobj.length;
                if (i.body.bng0.rec[l].isselected) {
                    i.body.bng0.rec[l].sele.slf.css("background", i.iscolorhovers);
                    for (var k = 0; k < j; k++) {
                        i.body[i.dataobj[k]].rec[l].sele.slf.css("background", i.iscolorhovers);
                    }
                    i.body.end0.rec[l].sele.slf.css("background", i.iscolorhovers);
                } else {
                    i.body.bng0.rec[l].sele.slf.css("background", i.iscolorhover);
                    for (var k = 0; k < j; k++) {
                        i.body[i.dataobj[k]].rec[l].sele.slf.css("background", i.iscolorhover);
                    }
                    i.body.end0.rec[l].sele.slf.css("background", i.iscolorhover);
                }
            };
            i.hoverlineOff = function(m) {
                var j = i.dataobj.length;
                if (i.body.bng0.rec[m].isselected) {
                    i.body.bng0.rec[m].sele.slf.css("background", i.iscolorselect);
                    for (var k = 0; k < j; k++) {
                        i.body[i.dataobj[k]].rec[m].sele.slf.css("background", i.iscolorselect);
                    }
                    i.body.end0.rec[m].sele.slf.css("background", i.iscolorselect);
                } else {
                    var l = i.body.bng0.rec[m].isbgcolor;
                    i.body.bng0.rec[m].sele.slf.css("background", l);
                    for (var k = 0; k < j; k++) {
                        i.body[i.dataobj[k]].rec[m].sele.slf.css("background", l);
                    }
                    i.body.end0.rec[m].sele.slf.css("background", l);
                }
            };
            i.select = function(k, j) {
                if (i.isselectable) {
                    if (j) {
                        if (j === 1) {
                            i.selectOn(k);
                        } else {
                            i.selectOff(k);
                        }
                    } else {
                        if (i.body.bng0.rec[k].isselected) {
                            i.selectOff(k);
                        } else {
                            i.selectOn(k);
                        }
                    }
                }
            };
            i.selectOn = function(l) {
                var j = i.dataobj.length;
                i.body.bng0.rec[l].sele.slf.css("background", i.iscolorselect).val("√");
                for (var k = 0; k < j; k++) {
                    i.body[i.dataobj[k]].rec[l].sele.slf.css("background", i.iscolorselect);
                }
                i.body.end0.rec[l].sele.slf.css("background", i.iscolorselect);
                i.body.bng0.rec[l].isselected = true;
            };
            i.selectOff = function(m) {
                var j = i.dataobj.length;
                var l = i.body.bng0.rec[m].isbgcolor;
                i.body.bng0.rec[m].sele.slf.css("background", l).val("");
                for (var k = 0; k < j; k++) {
                    i.body[i.dataobj[k]].rec[m].sele.slf.css("background", l);
                }
                i.body.end0.rec[m].sele.slf.css("background", l);
                i.body.bng0.rec[m].isselected = false;
            };
            i.getSelect = function() {
                var k = [];
                for (var j = 0; j < i.isrecmax; j++) {
                    if (i.body.bng0.rec[j].isselected) {
                        k.push(i.body.bng0.rec[j].isrecno);
                    }
                }
                return k;
            };
        };
        d.grid.waiter = function(j, i) {
            j.isid = i.isid;
            j.isgrid = i;
            j.sele = {};
            j.load = function() {
                j.isgrid.sele.wai.append("<div id='" + j.isid + "-wait1' class='eos-grid-wait1'><a class='eos-grid-wait-i'></a></div><div id='" + j.isid + "-wait2' class='eos-grid-wait2'><a class='eos-grid-wait-i'></a></div><div id='" + j.isid + "-wait3' class='eos-grid-wait3'><a class='eos-grid-wait-i'></a></div><div id='" + j.isid + "-wait4' class='eos-grid-wait4'><a class='eos-grid-wait-i'></a></div><div id='" + j.isid + "-wait5' class='eos-grid-wait5'><a class='eos-grid-wait-i'></a></div><div id='" + j.isid + "-wait6' class='eos-grid-wait6'><a class='eos-grid-wait-i'></a></div>");
                j.sele.was = g("#" + j.isid + "-wait1, #" + j.isid + "-wait2, #" + j.isid + "-wait3, #" + j.isid + "-wait4, #" + j.isid + "-wait5, #" + j.isid + "-wait6");
            };
            j.show = function() {
                j.isgrid.sele.wai.css("visibility", "visible");
                j.sele.was.addClass("eos-grid-wait-ani");
            };
            j.hide = function() {
                j.isgrid.sele.wai.css("visibility", "hidden");
                j.sele.was.removeClass("eos-grid-wait-ani");
            };
        };
        d.grid.header = function(k, i, j) {
            k.isoid = j;
            k.issid = i.dataobj[j];
            k.isid = i.isid + "-head-" + k.issid;
            k.isgrid = i;
            k.iscolumn = false;
            k.sele = {};
            k.load = function() {
                k.isgrid.sele.hdr.append("<div id='" + k.isid + "' class='eos-grid-header'><button id='" + k.isid + "-s' class='eos-grid-headers'></button><a id='" + k.isid + "-x' class='eos-grid-headerx'></a></div>");
                k.sele.slf = g("#" + k.isid);
                k.sele.sls = g("#" + k.isid + "-s");
                k.sele.slx = g("#" + k.isid + "-x");
                k.sele.slf.width(k.isgrid.isheader[k.isoid][2]);
            };
            k.init = function() {
                k.sele.sls.on("click", k.click).addClass(k.isgrid.isclassHead);
                k.sele.slx.on("mousedown", k.mousedownx);
            };
            k.click = function() {};
            k.mousedownx = function(l) {
                if (!h.islocked && (k.isgrid.isappid >= 0 ? !h.app[k.isgrid.isappid].islocked : true)) {
                    k.isgrid.isadjedo = k;
                    k.isgrid.isadjedx = k.sele.slf.width();
                    k.isgrid.ismouseX = l.pageX;
                    k.isgrid.isgridsx = k.isgrid.sele.hdr.width();
                }
            };
            k.refresh = function() {
                var l = k.isgrid.isheader[k.isoid][0][h.islanguage];
                k.sele.sls.html(l);
            };
        };
        d.grid.header0 = function(k, j, i) {
            k.isoid = -1;
            k.issid = i;
            k.isid = j.isid + "-head-" + k.issid;
            k.isgrid = j;
            k.iscolumn = false;
            k.sele = {};
            k.load = function() {
                k.isgrid.sele.hdr.append("<div id='" + k.isid + "' class='eos-grid-header'><button id='" + k.isid + "-s' class='eos-grid-headers'></button><a id='" + k.isid + "-x' class='eos-grid-headerx'></a></div>");
                k.sele.slf = g("#" + k.isid);
                k.sele.sls = g("#" + k.isid + "-s");
                k.sele.slx = g("#" + k.isid + "-x");
                k.sele.slf.width(20);
            };
            k.init = function() {
                k.sele.sls.on("click", k.click).addClass(k.isgrid.isclassHead);
            };
            k.click = function() {};
        };
        d.grid.column = function(k, i, j) {
            k.isoid = j;
            k.issid = i.dataobj[j];
            k.isid = i.isid + "-body-" + k.issid;
            k.isgrid = i;
            k.ishead = i.head[k.issid];
            k.sele = {};
            k.load = function() {
                k.isgrid.sele.bdy.append("<div id='" + k.isid + "' class='eos-grid-column'></div>");
                k.ishead.iscolumn = k;
                k.sele.slf = g("#" + k.isid);
                k.sele.slf.width(k.isgrid.isheader[k.isoid][2]);
            };
            k.init = function() {};
        };
        d.grid.column0 = function(k, j, i) {
            k.isoid = -1;
            k.issid = i;
            k.isid = j.isid + "-body-" + k.issid;
            k.isgrid = j;
            k.ishead = j.head[k.issid];
            k.sele = {};
            k.load = function() {
                k.isgrid.sele.bdy.append("<div id='" + k.isid + "' class='eos-grid-column'></div>");
                k.ishead.iscolumn = k;
                k.sele.slf = g("#" + k.isid);
                k.sele.slf.width(20);
            };
            k.init = function() {};
        };
        d.grid.cell = function(k, j, i) {
            k.isrecn = i;
            k.isid = j.isid + "-recn" + i;
            k.iscolu = j;
            k.isgrid = j.isgrid;
            k.isbgcolor = "";
            k.isslidein = 0;
            k.sele = {};
            k.load = function() {
                j.sele.slf.append("<input id='" + k.isid + "' class='eos-grid-cell' readonly='readonly' />");
                k.sele.slf = g("#" + k.isid);
                k.sele.slf.css("height", k.isgrid.isheicell + "px");
            };
            k.init = function() {
                k.sele.slf.hover(k.hoverOn, k.hoverOff).on("click", k.click).on("mouseup", k.mouseup).addClass(k.isgrid.isclassCell);
                k.isbgcolor = k.sele.slf.css("background");
            };
            k.hoverOn = function() {
                if (!h.islocked && (k.isgrid.isappid >= 0 ? !h.app[k.isgrid.isappid].islocked : true)) {
                    k.isgrid.hoverlineOn(k.isrecn);
                    if (k.isgrid.ismousedown) {
                        k.isslidein = 1;
                        k.sele.slf.css("cursor", "default");
                    }
                }
            };
            k.hoverOff = function() {
                if (!h.islocked && (k.isgrid.isappid >= 0 ? !h.app[k.isgrid.isappid].islocked : true)) {
                    k.isgrid.hoverlineOff(k.isrecn);
                    if (k.isgrid.ismousedown) {
                        k.isgrid.select(k.isrecn);
                    }
                    k.sele.slf.css("cursor", "auto");
                    k.isslidein = 0;
                }
            };
            k.click = function() {
                if (!h.islocked && (k.isgrid.isappid >= 0 ? !h.app[k.isgrid.isappid].islocked : true)) {
                    k.isgrid.select(k.isrecn);
                }
            };
            k.mouseup = function(l) {
                if (!h.islocked && (k.isgrid.isappid >= 0 ? !h.app[k.isgrid.isappid].islocked : true)) {
                    if (k.isslidein === 1) {
                        k.isgrid.select(k.isrecn);
                    }
                    k.sele.slf.css("cursor", "auto");
                    k.isslidein = 0;
                }
            };
        };
        d.wait = function(i) {
            i.isclassSpot = "";
            i.load0 = function() {
                i.isparent.append("<div id='" + i.isid + "' class='eos-wait'><div id='" + i.isid + "-wait1' class='eos-wait1'><a id='" + i.isid + "-wait1i' class='eos-wait-i'></a></div><div id='" + i.isid + "-wait2' class='eos-wait2'><a id='" + i.isid + "-wait2i' class='eos-wait-i'></a></div><div id='" + i.isid + "-wait3' class='eos-wait3'><a id='" + i.isid + "-wait3i' class='eos-wait-i'></a></div><div id='" + i.isid + "-wait4' class='eos-wait4'><a id='" + i.isid + "-wait4i' class='eos-wait-i'></a></div><div id='" + i.isid + "-wait5' class='eos-wait5'><a id='" + i.isid + "-wait5i' class='eos-wait-i'></a></div><div id='" + i.isid + "-wait6' class='eos-wait6'><a id='" + i.isid + "-wait6i' class='eos-wait-i'></a></div></div>");
                i.sele.slf = g("#" + i.isid);
                i.sele.was = g("#" + i.isid + "-wait1, #" + i.isid + "-wait2, #" + i.isid + "-wait3, #" + i.isid + "-wait4, #" + i.isid + "-wait5, #" + i.isid + "-wait6");
                i.sele.spt = g("#" + i.isid + "-wait1i, #" + i.isid + "-wait2i, #" + i.isid + "-wait3i, #" + i.isid + "-wait4i, #" + i.isid + "-wait5i, #" + i.isid + "-wait6i");
            };
            i.init0 = function() {
                i.sele.spt.addClass(i.isclassSpot);
            };
            i.show = function() {
                i.sele.slf.css("visibility", "visible");
                i.sele.was.addClass("eos-wait-ani");
            };
            i.hide = function() {
                i.sele.slf.css("visibility", "hidden");
                i.sele.was.removeClass("eos-wait-ani");
            };
        };
        h.fn.qmenugroup = function(i) {
            var j = function() {};
            d.qlaunchmenugroup1(j);
            typeof i === "function" && i(j);
            d.qlaunchmenugroup2(j);
            return j;
        };
        h.fn.qmenubutton = function(i) {
            var j = function() {};
            d.qlaunchmenubutton1(j);
            typeof i === "function" && i(j);
            d.qlaunchmenubutton2(j);
            return j;
        };
        h.fn.container = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.container(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.label = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.label(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.link = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.link(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.input = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.input(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.select = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.select(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.button = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.button(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.grid = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.grid(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        h.fn.wait = function(j, i) {
            var k = function() {};
            d.template1(k);
            d.wait(k);
            typeof j === "function" && j(k);
            typeof i === "function" && i(k);
            d.template2(k);
            return k;
        };
        return h;
    }(a.jQuery, a.event);
    a.eos = c;
})(window);
