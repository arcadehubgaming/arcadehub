!function(t) {
    function e(s) {
        if (i[s])
            return i[s].exports;
        var n = i[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(n.exports, n, n.exports, e),
        n.l = !0,
        n.exports
    }
    var i = {};
    e.m = t,
    e.c = i,
    e.d = function(t, i, s) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: s
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function e() {
            return t.default
        }
        : function e() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 54)
}([function(t, e, i) {
    (function(e) {
        t.exports = e.Phaser = i(58)
    }
    ).call(e, i(27))
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(34);
    e.Images = s.default;
    var n = i(35);
    e.Constants = n.default;
    var a = i(36);
    e.Atlases = a.default;
    var o = i(63);
    e.Sounds = o.default;
    var r = i(64);
    e.JSONData = r.default
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(65);
    e.GameCore = s.GameCore;
    var n = i(13);
    e.MainGameCore = n.MainGameCore;
    var a = i(43);
    e.GameObject = a.GameObject;
    var o = i(77);
    e.IDisposed = o.IDisposed;
    var r = i(78);
    e.IUpdated = r.IUpdated;
    var h = i(79);
    e.IRestarted = h.IRestarted;
    var l = i(28);
    e.GamePhysics = l.GamePhysics;
    var c = i(22);
    e.NapePhysics = c.NapePhysics;
    var u = i(44);
    e.GameBuilder = u.GameBuilder;
    var d = i(20);
    e.MyRand = d.MyRand;
    var p = i(23);
    e.NapeUtil = p.NapeUtil;
    var f = i(38);
    e.GameView = f.GameView;
    var g = i(24);
    e.Inventory = g.Inventory;
    var m = i(82);
    e.CbTypes = m.CbTypes;
    var y = i(83);
    e.Filters = y.Filters;
    var v = i(84);
    e.Materials = v.Materials;
    var b = i(85);
    e.PlayerObject = b.PlayerObject;
    var _ = i(88);
    e.AIController = _.AIController;
    var x = i(92);
    e.AIController2 = x.AIController2;
    var w = i(25);
    e.BaseController = w.BaseController;
    var P = i(93);
    e.PlayerController = P.PlayerController;
    var T = i(94);
    e.PlayerController2 = T.PlayerController2;
    var S = i(95);
    e.PlayerControllerGeneral = S.PlayerControllerGeneral;
    var C = i(96);
    e.Teleport = C.Teleport;
    var A = i(45);
    e.BallObject = A.BallObject;
    var E = i(39);
    e.TimerObject = E.TimerObject;
    var I = i(97);
    e.CountDownObject = I.CountDownObject;
    var B = i(98);
    e.EnergyBar = B.EnergyBar;
    var M = i(99);
    e.MessageInfo = M.MessageInfo;
    var k = i(19);
    e.ObjectsType = k.ObjectsType;
    var O = i(100);
    e.BallTrail = O.BallTrail;
    var D = i(29);
    e.ObjectsData = D.ObjectsData;
    var L = i(101);
    e.PlayersData = L.PlayersData
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(1)
      , a = i(7)
      , o = i(9)
      , r = i(10)
      , h = i(4)
      , l = i(0)
      , c = i(37)
      , u = i(2)
      , d = i(12)
      , p = i(11)
      , f = i(5)
      , g = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.loadComplete = !0,
            i.bike = null,
            i.wait = null,
            i.wait2 = null,
            i.ccc = null,
            i.mainParent = null,
            i.backgroundBase = null,
            i
        }
        return s(e, t),
        e.prototype.preload = function() {
            var e = this;
            t.prototype.preload.call(this),
            this.game.sound.muteOnPause = !0,
            this.game.load.onFileComplete.add(this.fileComplete, this);
            var i = "x" + n.Constants.GAME_SCALE + "/";
            this.game.load.script("BlurX", "js/BlurX.js"),
            this.game.load.script("BlurY", "js/BlurY.js"),
            n.JSONData.list.forEach(function(t) {
                e.game.load.json(t, "assets/data/" + t + ".json")
            }),
            n.Images.list.forEach(function(t) {
                e.game.load.image(t, "assets/images/" + i + t + ".png")
            }),
            n.Atlases.list.forEach(function(t) {
                e.game.load.atlas(t, "assets/atlases/" + i + t + ".png", "assets/atlases/" + i + t + ".json")
            }),
            n.Sounds.list.forEach(function(t) {
                e.game.device.iOS ? e.game.load.audio(t, ["assets/sound/" + t + ".m4a"]) : e.game.load.audio(t, ["assets/sound/" + t + ".ogg", "assets/sound/" + t + ".mp3"])
            }),
            this.game.scale.onSizeChange.add(function() {
                e.game.state.getCurrentState().resize()
            }, this)
        }
        ,
        e.prototype.init = function() {
            this.game.world.removeAll(),
            this.backgroundBase = this.game.add.sprite(0, 0, n.Atlases.Preloader, o.default.getBG()),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill();
            var t = this.game.add.group()
              , e = this.game.add.group();
            this.backgroundBase.addChild(t),
            this.backgroundBase.addChild(e);
            var i = {
                font: "16px Impact2",
                fill: "#FFFFFF"
            };
            this.ccc = new r.default(this.game,100,300,"MADPUFFERS 2019©",i),
            this.ccc.anchor.set(.5),
            this.mainParent = this.game.add.group(),
            this.mainParent.x = this.game.width / 2,
            this.mainParent.y = this.game.height / 2,
            this.setPauseViewCar(this.mainParent),
            this.wait2 = this.game.add.text(this.game.width / 2, .75 * this.game.height, "LOADING...", n.Constants.styleLoading),
            this.wait2.anchor.set(.5),
            this.wait2.stroke = "#FFFFFF",
            this.wait2.strokeThickness = 5,
            this.wait = this.game.add.text(this.game.width / 2, .75 * this.game.height, "", n.Constants.styleLoading),
            this.wait.anchor.set(.5),
            this.wait.stroke = "#000000",
            this.wait.strokeThickness = 7,
            this.wait.mask = this.backgroundBaseMask,
            this.wait2.mask = this.backgroundBaseMask,
            this.ccc.mask = this.backgroundBaseMask,
            this.branding2.mask = this.backgroundBaseMask,
            this.inited = !0,
            this.resize()
        }
        ,
        e.prototype.setPauseViewCar = function(t) {
            null !== this.bike ? (this.bike.destroy(),
            this.bike = this.game.add.group(t)) : this.bike = this.game.add.group(t);
            var e = null;
            e = this.game.add.image(0, 0, n.Atlases.Preloader, "logo0000"),
            e.anchor.set(.5),
            this.branding2 = new a.default(this.game,"",null,null,null,n.Atlases.Preloader),
            this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            this.world.addChild(this.branding2),
            t.addChild(e)
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            this.resize()
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.wait);
            t.to({
                y: 800
            }, h.default.PRELOADER_TIME, l.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.wait2),
            t.to({
                y: 800
            }, h.default.PRELOADER_TIME, l.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                y: 800
            }, h.default.PRELOADER_TIME, l.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.ccc),
            t.to({
                y: 800
            }, h.default.PRELOADER_TIME, l.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.mainParent),
            t.to({
                y: -800
            }, h.default.PRELOADER_TIME, l.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.update = function() {
            t.prototype.update.call(this),
            this.loadComplete && (this.loadComplete = !1,
            e.game = this.game,
            this.startLocalGame())
        }
        ,
        e.prototype.startLocalGame = function() {
            p.default.getInstance(this.game, this.onLoadSfx, this)
        }
        ,
        e.prototype.onLoadSfx = function() {
            f.default.getInstance(this.game).playMusic(n.Sounds.MenuMusic),
            c.default.getInstance(this.game, this.onSaveGameLoad, this)
        }
        ,
        e.prototype.onSaveGameLoad = function() {
            u.Inventory.instance.initManagers(),
            new o.default(this.game,this,d.Menu.Name)
        }
        ,
        e.prototype.fileComplete = function(t, e, i, s, n) {
            this.wait2.setText("Loading " + t + "%")
        }
        ,
        e.prototype.resize = function() {
            if (this.inited) {
                var e = 1;
                e = this.game.width / n.Constants.WIDTH,
                e = e > 1 ? 1 : e,
                e *= 1.33333,
                this.backgroundBase.scale.set(e),
                this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
                this.backgroundBaseMask.scale.set(e, e),
                this.backgroundBaseMask.x = this.backgroundBase.x,
                this.backgroundBaseMask.y = this.backgroundBase.y,
                this.bike.scale.set(e),
                this.mainParent.alignIn(this.world.bounds, Phaser.TOP_CENTER),
                this.wait.alignIn(this.backgroundBase, Phaser.BOTTOM_CENTER, 0, -40),
                this.wait2.position.set(this.wait.x, this.wait.y),
                this.branding2.scale.set(e),
                this.branding2.alignIn(this.backgroundBase, Phaser.BOTTOM_RIGHT, -310, -10),
                this.ccc.scale.set(e),
                this.ccc.alignIn(this.backgroundBase, Phaser.BOTTOM_CENTER)
            }
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.mainParent = null,
            this.backgroundBase = null,
            this.wait = null,
            this.wait2 = null,
            this.branding2 = null,
            this.bike = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "preloader",
        e.game = null,
        e
    }(Phaser.State);
    e.default = g
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.WIDTH = 800,
        t.WIDTH2 = 400,
        t.GAME_W = 1066,
        t.GAME_H = 640,
        t.GAME_W2 = 400,
        t.GAME_H2 = 240,
        t.DISPLAY_W = 1066,
        t.DISPLAY_H = 640,
        t.DISPLAY_W2 = 533,
        t.DISPLAY_H2 = 320,
        t.PRELOADER_TIME = 325,
        t.PRELOADER_TIME_HALF = 325,
        t.STEP = .025,
        t.MATCH_TIME = 60,
        t.OVERTIME_TIME = 15,
        t.LIMITS_FOR_ACHIEVS = [20, 50, 5, 5, 20, 50, 500, 25, 25, 150, 150],
        t
    }();
    e.default = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(11)
      , n = function() {
        function t(t) {
            this.music = null,
            this.audioInstances = {},
            this.sound = t.sound
        }
        return t.getInstance = function(e) {
            if (null === t.instance) {
                if (!e)
                    throw new Error("Cant create a new instance without a game");
                t.instance = new t(e)
            }
            return t.instance
        }
        ,
        t.prototype.play = function(t, e, i) {
            return void 0 === e && (e = 1),
            void 0 === i && (i = !1),
            this.audioInstances.hasOwnProperty(t) || (this.audioInstances[t] = this.sound.add(t)),
            s.default.getInstance().sfx ? (this.audioInstances[t].play(void 0, void 0, e, i, !0),
            this.audioInstances[t]) : this.audioInstances[t].play(void 0, void 0, 0, i, !0)
        }
        ,
        t.prototype.stop = function(t) {
            this.audioInstances.hasOwnProperty(t) && this.audioInstances[t].stop()
        }
        ,
        t.prototype.playMusic = function(t) {
            if (!s.default.getInstance().music)
                return this.music = this.sound.play(t, .5, !0),
                void this.music.stop();
            null !== this.music && this.music.name === t || (null !== this.music && this.music.name !== t && this.music.stop(),
            this.music = this.sound.play(t, .5, !0))
        }
        ,
        t.prototype.fadeMusicVolume = function(t, e) {
            this.music && this.music.fadeTo(t, e)
        }
        ,
        t.prototype.stopMusic = function() {
            null !== this.music && this.music.isPlaying && this.music.stop()
        }
        ,
        t.prototype.toggleSfx = function() {
            s.default.getInstance().sfx = !s.default.getInstance().sfx
        }
        ,
        t.prototype.toggleMusic = function() {
            s.default.getInstance().music = !s.default.getInstance().music,
            s.default.getInstance().music ? this.music && this.music.play(void 0, void 0, 1, !0) : this.music && this.music.isPlaying && this.stopMusic()
        }
        ,
        t.instance = null,
        t
    }();
    e.default = n
}
, function(t, e, i) {
    (function(e) {
        t.exports = e.PIXI = i(57)
    }
    ).call(e, i(27))
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(10)
      , a = function(t) {
        function e(e, i, s, a, o, r) {
            void 0 === r && (r = null);
            var h = t.call(this, e) || this;
            return h._labelState = null,
            h._enable = !0,
            h._graphics = null,
            h._texts = null,
            h._dynamicScaleUp = 1.1,
            h._dynamicScaleDown = .9,
            h._sScale = 1,
            h._sLabelScale = 1,
            h.inputEnableChildren = !0,
            h._graphics = h.game.add.group(h),
            h._texts = h.game.add.group(h),
            h.btn = h.game.add.button(0, 0, r, a, o),
            h.btn.anchor.set(.5),
            h._graphics.addChild(h.btn),
            h.label = new n.default(h.game,0,2,i,s,70,40),
            h.label.anchor.set(.5),
            h._texts.addChild(h.label),
            null !== a && null !== o ? (h.label.inputEnabled = !0,
            h.label.events.onInputDown.add(a, o),
            h._graphics.inputEnableChildren = !0,
            h._graphics.onChildInputOver.add(h.onOver, h),
            h._graphics.onChildInputDown.add(h.onDownLabel, h),
            h._graphics.onChildInputOut.add(h.onOut, h),
            h._graphics.onChildInputUp.add(h.onOut, h),
            h._texts.inputEnableChildren = !0,
            h._texts.onChildInputOver.add(h.onOver, h),
            h._texts.onChildInputDown.add(h.onDownLabel, h),
            h._texts.onChildInputOut.add(h.onOut, h)) : (h._graphics.inputEnableChildren = !1,
            h._texts.inputEnableChildren = !1,
            h.btn.inputEnabled = !1),
            h.game.add.existing(h),
            h
        }
        return s(e, t),
        Object.defineProperty(e.prototype, "labelState", {
            get: function() {
                return this._labelState
            },
            set: function(t) {
                this._labelState = t,
                this._texts.addChild(t),
                this._labelState.anchor.set(.5)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "sScale", {
            set: function(t) {
                this._sScale = t,
                this._graphics.scale.set(this._sScale)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "sLabelScale", {
            set: function(t) {
                this._sLabelScale = t,
                this._texts.scale.set(this._sLabelScale)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "dynamicScaleDown", {
            set: function(t) {
                this._dynamicScaleDown = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "dynamicScaleUp", {
            set: function(t) {
                this._dynamicScaleUp = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.onOver = function() {
            this._graphics.scale.set(this._sScale * this._dynamicScaleUp),
            this._texts.scale.set(this._sLabelScale * this._dynamicScaleUp)
        }
        ,
        e.prototype.onDownLabel = function() {
            this._graphics.scale.set(this._sScale * this._dynamicScaleDown),
            this._texts.scale.set(this._sLabelScale * this._dynamicScaleDown)
        }
        ,
        e.prototype.onOut = function() {
            this._graphics.scale.set(this._sScale),
            this._texts.scale.set(this._sLabelScale)
        }
        ,
        e.prototype.setText = function(t) {
            this.label.setText(t)
        }
        ,
        e.prototype.setFrames = function(t, e, i, s) {
            this.btn.setFrames(t, e, i, s)
        }
        ,
        e.prototype.destroy = function(e) {
            this.id = null,
            this.label = null,
            this.btn = null,
            this._graphics = null,
            this._texts = null,
            this._labelState = null,
            t.prototype.destroy.call(this, e)
        }
        ,
        Object.defineProperty(e.prototype, "enable", {
            get: function() {
                return this._enable
            },
            set: function(t) {
                this._enable !== t && (this._enable = t,
                this.btn.inputEnabled = this._enable,
                this._enable ? (this.btn.tint = 16777215,
                this.label.tint = 16777215) : (this.btn.tint = 10066329,
                this.label.tint = 10066329))
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(Phaser.Group);
    e.default = a
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(10)
      , a = i(7)
      , o = function(t) {
        function e(e, i, s, o, r, h) {
            void 0 === h && (h = null);
            var l = t.call(this, e) || this;
            return l._colorFront = "#000000",
            l._thickFront = 7,
            l._colorBack = "#FFFFFF",
            l._thickBack = 15,
            l._callback = null,
            l._context = null,
            l.inputEnableChildren = !0,
            l.btn = new a.default(e,i,s,o,r,h),
            l.label = new n.default(l.game,0,2,i,s),
            l.label.anchor.set(.5),
            null !== o && null !== r && (l.label.inputEnabled = !0,
            l.btn.label.inputEnabled = !0,
            l.btn.label.input.useHandCursor = !0,
            l._callback = o,
            l._context = r),
            l.addChild(l.btn),
            l.btn.label.parent.addChildAt(l.label, 0),
            l.game.add.existing(l),
            l
        }
        return s(e, t),
        e.prototype.drawRectHit = function() {
            var t = 1
              , e = this.game.make.graphics();
            e.beginFill(16711680, 0),
            e.drawRect(1 * this.width / -2, 1 * this.height / -2, 1 * this.width, 1 * this.height),
            e.endFill(),
            e.inputEnabled = !0,
            this.btn.label.parent.inputEnableChildren = !0,
            this.btn.label.parent.onChildInputDown.add(this._callback, this._context),
            this.btn.label.parent.addChild(e)
        }
        ,
        e.prototype.setProp = function(t, e, i, s) {
            void 0 === t && (t = null),
            void 0 === e && (e = null),
            void 0 === i && (i = null),
            void 0 === s && (s = null),
            null !== t && (this._colorFront = t),
            null !== i && (this._colorBack = i),
            null !== s && (this._thickBack = s),
            null !== e && (this._thickFront = e),
            this.btn.label.stroke = this._colorFront,
            this.btn.label.strokeThickness = this._thickFront,
            this.label.stroke = this._colorBack,
            this.label.strokeThickness = this._thickBack,
            null !== this._callback && null !== this._context && this.drawRectHit()
        }
        ,
        e.prototype.setText = function(t) {
            this.label.setText(t),
            this.btn.setText(t)
        }
        ,
        e.prototype.setFrames = function(t, e, i, s) {
            this.btn.setFrames(t, e, i, s)
        }
        ,
        e.prototype.destroy = function(e) {
            this.btn = null,
            this.label = null,
            this._callback = null,
            this._context = null,
            t.prototype.destroy.call(this, e)
        }
        ,
        Object.defineProperty(e.prototype, "enable", {
            get: function() {
                return this.btn.enable
            },
            set: function(t) {
                this.btn.enable = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(Phaser.Group);
    e.default = o
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(4)
      , a = i(1)
      , o = i(0)
      , r = function(t) {
        function e(i, s, r, h) {
            var l = t.call(this, i) || this;
            if (2 === e.prevState.length && e.prevState.shift(),
            e.prevState.push(r + ""),
            i.add.existing(l),
            s.backgroundBase) {
                var c = l.game.make.sprite(0, 0, a.Atlases.Preloader, e.BASE_BG[e.INDEX_BG + 1 === 3 ? 0 : e.INDEX_BG + 1] + "0000");
                if (s.backgroundBase.addChildAt(c, 1),
                c.alpha = .03,
                s.popup) {
                    var u = l.game.add.tween(s.popup);
                    u.to({
                        alpha: 0
                    }, n.default.PRELOADER_TIME_HALF, o.Easing.Linear.None),
                    u.onComplete.add(function() {
                        l.startTransition(s, c, r, h)
                    }, l),
                    u.start()
                } else
                    l.startTransition(s, c, r, h)
            } else
                i.state.start(r, !0, !1, h);
            return l
        }
        return s(e, t),
        e.getBG = function() {
            return this.BASE_BG[this.INDEX_BG] + "0000"
        }
        ,
        e.prototype.startTransition = function(t, e, i, s) {
            var a = this;
            t.hide && t.hide();
            var r = this.game.add.tween(e);
            r.to({
                alpha: .5
            }, n.default.PRELOADER_TIME_HALF, o.Easing.Linear.None),
            r.onComplete.add(function() {
                a.game.state.start(i, !0, !1, s)
            }),
            r.start()
        }
        ,
        e.prevState = [],
        e.INDEX_BG = 0,
        e.BASE_BG = ["bg1", "bg2blue", "bg1red"],
        e
    }(Phaser.Graphics);
    e.default = r
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = function(t) {
        function e(e, i, s, n, a, o, r) {
            var h = t.call(this, e, i, s, n, a) || this;
            return h.maxWidth = o,
            h.maxHeight = r,
            h.game.add.existing(h),
            h
        }
        return s(e, t),
        e.prototype.setText = function(e) {
            return t.prototype.setText.call(this, e),
            (this.maxWidth || this.maxHeight) && this.makeFontFit(),
            this
        }
        ,
        e.prototype.setMaxSize = function(t, e) {
            this.maxWidth = t,
            this.maxHeight = e
        }
        ,
        e.prototype.makeFontFit = function() {
            for (var t = 10, e; this.width > this.maxWidth || this.height > this.maxHeight; ) {
                if ((e = parseInt(this.fontSize.toString().replace("px", ""), 10) - 1) < 10) {
                    e = 10,
                    this.fontSize = e;
                    break
                }
                this.fontSize = e
            }
        }
        ,
        e
    }(Phaser.Text);
    e.default = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(1)
      , n = function() {
        function t(t, e, i) {
            var n = this;
            this.musicOn = !0,
            this.sfxOn = !0,
            this.game = t,
            this.callback = e,
            this.callbackContext = i,
            this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX).then(function(t) {
                null === t || void 0 === t ? (n.initFirstSave(),
                n.callback && n.callbackContext && n.callback.call(n.callbackContext)) : n.restore()
            })
        }
        return t.prototype.initFirstSave = function() {
            this.sfxOn = !0,
            this.musicOn = !0,
            this.save()
        }
        ,
        t.getInstance = function(e, i, s) {
            return t.instance ? s && i.call(s) : t.instance = new t(e,i,s),
            t.instance
        }
        ,
        Object.defineProperty(t.prototype, "music", {
            get: function() {
                return this.musicOn
            },
            set: function(t) {
                this.musicOn = t,
                this.save()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "sfx", {
            get: function() {
                return this.sfxOn
            },
            set: function(t) {
                this.sfxOn = t,
                this.save()
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.save = function() {
            var t = JSON.stringify({
                m: this.musicOn,
                sf: this.sfxOn
            })
              , e = this.hash(t);
            this.game.storage.setItem(s.Constants.STORAGE_KEY_SFX, t),
            this.game.storage.setItem(s.Constants.STORAGE_KEY_SFX + "h", e)
        }
        ,
        t.prototype.restore = function() {
            var t = this, e = this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX), i = this.game.storage.getItem(s.Constants.STORAGE_KEY_SFX + "h"), n, a;
            Promise.all([e, i]).then(function(e) {
                if (n = e[0] || "",
                a = e[1] || "0",
                "" === n)
                    return t.initFirstSave(),
                    void (t.callback && t.callbackContext && t.callback.call(t.callbackContext));
                if (a !== t.hash(n))
                    return t.initFirstSave(),
                    void (t.callback && t.callbackContext && t.callback.call(t.callbackContext));
                if (n && "" !== n)
                    try {
                        var i = JSON.parse(n);
                        t.musicOn = i.m,
                        t.sfxOn = i.sf
                    } catch (e) {
                        t.initFirstSave()
                    }
                else
                    t.initFirstSave();
                t.callback && t.callbackContext && t.callback.call(t.callbackContext)
            })
        }
        ,
        t.prototype.hash = function(t) {
            var e = 0, i, s, n;
            if (0 === t.length)
                return e.toString();
            for (i = 0,
            n = t.length; i < n; i++)
                s = t.charCodeAt(i),
                e = (e << 5) - e + s,
                e |= 0;
            return e.toString()
        }
        ,
        t
    }();
    e.default = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(61);
    e.Boot = s.default;
    var n = i(31);
    e.Gameplay = n.default;
    var a = i(32);
    e.Menu = a.default;
    var o = i(26);
    e.RandomState = o.default;
    var r = i(105);
    e.TournamentState = r.default
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(2)
      , a = i(66)
      , o = i(3)
      , r = i(22)
      , h = i(0)
      , l = i(5)
      , c = i(24)
      , u = i(11)
      , d = i(76)
      , p = i(4)
      , f = i(15)
      , g = i(30)
      , m = i(1)
      , y = i(14)
      , v = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.isPlaying = !1,
            e.isPaused = !1,
            e.isWaiting = !1,
            e.scoredByHuman = !1,
            e.isEnd = !1,
            e.SIDE = 0,
            e.delayEndTime = 1.5,
            e.matchTime = 0,
            e.endTime = 0,
            e.leftCounter = 0,
            e.rightCounter = 0,
            e.nextState = "",
            e.slowSignal = new h.Signal,
            e.matchEndSignal = new h.Signal,
            e.menuPauseSignal = new h.Signal,
            f.Signals.MatchProcessorSignal.add(e.processMatchProcessor, e),
            e
        }
        return s(e, t),
        Object.defineProperty(e, "instance", {
            get: function() {
                return e._instance || (e._instance = new e),
                e._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.init = function(e) {
            t.prototype.init.call(this, e),
            this.view = new a.MainGameView(o.default.game),
            this.physics = new r.NapePhysics,
            this.physics2 = new d.Physics2,
            this.playersLeft = [],
            this.playersRight = [],
            this.opponents = []
        }
        ,
        e.prototype.start = function() {
            t.prototype.start.call(this),
            this.matchPreloader = this.view.matchPreloader,
            this.matchPreloader.setCallBacks(this.restart2, this.startPlay, this),
            f.Signals.MatchProcessorSignal.add(this.processMatchProcessor, this),
            f.Signals.EventSignal.add(this.processEvent, this),
            this.isTraining = 3 === c.Inventory.instance.gameMode,
            this.isTraining = this.isTraining;
            var e = 0 === c.Inventory.instance.matchData.matchMode;
            this.isSinglePlayer = e,
            this.infoPanel = this.view.infoPanel,
            this.timer = this.view.timer,
            this.infoPanel.start(c.Inventory.instance.matchData.teams, c.Inventory.instance.matchData.matchScore[0], c.Inventory.instance.matchData.matchScore[1]),
            this.winSnds = [],
            this.winSnds[0] = m.Sounds.m_win,
            this.winSnds[1] = c.Inventory.instance.isPvP() ? m.Sounds.m_win : m.Sounds.m_lost,
            this.startMatch(!0),
            this.isTraining || (this.m_tribune = l.default.getInstance().play(m.Sounds.m_tribune, u.default.getInstance().sfx ? 1 : 0, !0))
        }
        ,
        e.prototype.startMatch = function(t) {
            void 0 === t && (t = !0),
            this.SIDE = this.isTraining ? 1 : 0,
            this.isPlaying = !1,
            this.isPaused = !1,
            this.isOvertime = !1,
            this.isEnd = !1,
            this.isWaiting = !1,
            this.matchTime = 0;
            var i = this.isTraining ? 250 : 500;
            this.matchPreloader.setTime(i),
            this.isTraining || (this.endTime = t ? p.default.MATCH_TIME : p.default.OVERTIME_TIME,
            this.countDown.activate()),
            t && c.Inventory.instance.matchData.resetScore(),
            this.infoPanel.updateScore(c.Inventory.instance.matchData.matchScore[0], c.Inventory.instance.matchData.matchScore[1]),
            this.timer.start(this.endTime),
            this.restart2(),
            4 === c.Inventory.instance.gameMode ? c.Inventory.instance.firstRun2 && (c.Inventory.instance.firstRun2 = !1,
            g.default.instance.signalPause.dispatch(e.HELP)) : c.Inventory.instance.firstRun && (c.Inventory.instance.firstRun = !1,
            g.default.instance.signalPause.dispatch(e.HELP))
        }
        ,
        e.prototype.startPlay = function() {
            this.isScored = !1
        }
        ,
        e.prototype.restart2 = function() {
            this.restart(this.SIDE),
            this.matchPreloader.hide()
        }
        ,
        e.prototype.getNextState = function() {
            var t = "";
            return t = 0 === c.Inventory.instance.gameMode || 1 === c.Inventory.instance.gameMode || 3 === c.Inventory.instance.gameMode ? "GameMode" : "NumPlayers"
        }
        ,
        e.prototype.processMatchProcessor = function(t, e, i, s) {
            if (!this.isEnd) {
                var n = -1 === t ? 1 : 0;
                l.default.getInstance().play(this.winSnds[n]),
                c.Inventory.instance.matchData.matchScore[n] += e,
                this.timer.updateScore(t, c.Inventory.instance.matchData.matchScore[n]),
                this.view.shake(s),
                this.isTraining ? (this.matchPreloader.show(),
                this.setEmotions(0)) : (this.SIDE = t,
                this.isScored = !0,
                this.scoredByHuman = i,
                this.isWaiting || (this.processEvent(i, s),
                this.matchPreloader.show(),
                this.setEmotions(-t)))
            }
        }
        ,
        e.prototype.update = function(e) {
            this.isPaused ? this.m_tribune && (this.m_tribune.volume = 0) : (this.m_tribune && (this.m_tribune.volume = u.default.getInstance().sfx ? 1 : 0),
            this.isPlaying ? (this.isAlleyOop && this.physics2.update(e),
            t.prototype.update.call(this, e),
            this.isEnd ? (this.deltaEndTime += e,
            this.deltaEndTime > this.delayEndTime && (this.isOvertime ? this.startMatch(!1) : (this.isPlaying = !1,
            this.nextState = "PostMatch",
            this.finishMatch()))) : this.isWaiting || this.isScored || this.isTraining || this.isSuperShot || (this.matchTime += e,
            this.timer.process(this.matchTime),
            this.matchTime >= this.endTime && this.endOfTime())) : this.countDown.process(e) && (l.default.getInstance().play(m.Sounds.m_whistle),
            this.isPlaying = !0))
        }
        ,
        e.prototype.endOfTime = function() {
            l.default.getInstance().play(m.Sounds.m_buzzer),
            this.isBallInGame() ? (this.isWaiting = !0,
            this.activateWaiting(),
            f.Signals.MatchEndSignal.add(this.processMatchEnd, this)) : this.endMatch()
        }
        ,
        e.prototype.processMatchEnd = function() {
            f.Signals.MatchEndSignal.remove(this.processMatchEnd, this),
            this.isWaiting = !1,
            this.endMatch()
        }
        ,
        e.prototype.endMatch = function() {
            this.isEnd = !0,
            this.isOvertime = !1;
            var t = c.Inventory.instance.matchData.whoWins()
              , e = 10;
            0 === t && (e = 11,
            this.isOvertime = !0),
            this.setEmotions(t),
            this.isScored ? this.processEvent(this.scoredByHuman, 3, e) : this.messageInfo.show2(e),
            this.deltaEndTime = 0
        }
        ,
        e.prototype.add = function(e) {
            if (null !== e) {
                if (e.objType === n.ObjectsType.BALL)
                    this.ball = e,
                    this.ball.space2 = d.Physics2.space;
                else if (e.objType === n.ObjectsType.PLAYER) {
                    var i = e;
                    -1 === i.SIDE ? this.playersLeft.push(i) : this.playersRight.push(i)
                } else if (e.objType === n.ObjectsType.BASKET) {
                    var s = e;
                    -1 === s.side ? this.basket1 = s : this.basket2 = s
                } else
                    e.objType,
                    n.ObjectsType.ARENA;
                e instanceof n.CountDownObject && (this.countDown = e),
                t.prototype.add.call(this, e)
            }
        }
        ,
        e.prototype.restart = function(e) {
            void 0 === e && (e = 0),
            t.prototype.restart.call(this, e),
            this.isSuperShot = !1,
            this.isAlleyOop = !1,
            this.isTraining ? (this.ball.takeInHands(-1, 0, !0),
            this.playersLeft[0].takeBallInHands()) : 0 !== e ? -1 === e ? (this.ball.takeInHands(e, this.leftCounter, !0),
            this.playersLeft[this.leftCounter].takeBallInHands(),
            this.leftCounter = this.leftCounter++ / 2 >> 0) : (this.ball.takeInHands(e, this.rightCounter, !0),
            this.playersRight[this.rightCounter].takeBallInHands(),
            this.rightCounter = this.rightCounter++ / 2 >> 0) : p.default.isDesktop || y.default.instance.btnDown.labelState.loadTexture(m.Atlases.Gameplay, "shoot_icon0001"),
            this.physics.update(p.default.STEP)
        }
        ,
        e.prototype.ballInHands = function(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            for (var i = 0; i < this.playersLeft.length; i++)
                this.playersLeft[i].ballInHands(t, e);
            for (var s = 0; s < this.playersRight.length; s++)
                this.playersRight[s].ballInHands(t, e)
        }
        ,
        e.prototype.ballShooting = function(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            for (var i = 0; i < this.playersLeft.length; i++)
                this.playersLeft[i].ballShooting(t, e);
            for (var s = 0; s < this.playersRight.length; s++)
                this.playersRight[s].ballShooting(t, e)
        }
        ,
        e.prototype.ballOthers = function() {
            for (var t = 0; t < this.playersLeft.length; t++)
                this.playersLeft[t].ballOthers();
            for (var e = 0; e < this.playersRight.length; e++)
                this.playersRight[e].ballOthers()
        }
        ,
        e.prototype.setEmotions = function(t) {
            for (var e = 0; e < this.playersLeft.length; e++)
                this.playersLeft[e].setEmotion(t);
            for (var i = 0; i < this.playersRight.length; i++)
                this.playersRight[i].setEmotion(t)
        }
        ,
        e.prototype.release = function() {
            this.ball = null,
            this.basket1 = null,
            this.basket2 = null,
            this.playersLeft.splice(0, this.playersLeft.length),
            this.playersRight.splice(0, this.playersRight.length),
            this.opponents.splice(0, this.opponents.length),
            this.physics2.release(),
            f.Signals.MatchProcessorSignal.remove(this.processMatchProcessor, this),
            t.prototype.release.call(this)
        }
        ,
        e.prototype.steal = function(t, e, i, s) {
            if (!this.isTraining && !this.isSuperShot) {
                this.opponents = -1 === t ? this.playersRight : this.playersLeft;
                var n = !1;
                if (this.isSinglePlayer)
                    n = this.stealSinglePlayer(e, i, 0);
                else {
                    var a = this.opponents[0].checkToBeStolen(e, i);
                    if (a < 0)
                        n = this.stealSinglePlayer(e, i, 1);
                    else {
                        var o = this.opponents[1].checkToBeStolen(e, i);
                        o > 0 && o < a ? this.opponents[1].getBeStolen(e) : this.opponents[0].getBeStolen(e),
                        n = !0
                    }
                }
                s && n && f.Signals.EventSignal.dispatch(!0, 5)
            }
        }
        ,
        e.prototype.stealSinglePlayer = function(t, e, i) {
            return this.opponents[i].checkToBeStolen(t, e) >= 0 && (this.opponents[i].getBeStolen(t),
            !0)
        }
        ,
        e.prototype.isBallInGame = function() {
            return "shooting" === this.ball.state || "basket" === this.ball.state || "dunk" === this.ball.state || "block" === this.ball.state
        }
        ,
        e.prototype.activateWaiting = function() {
            this.ball.isWaiting = !0,
            this.setEmotions(0)
        }
        ,
        e.prototype.getTeamMate = function(t) {
            var e;
            if (this.isSinglePlayer)
                e = null;
            else {
                var i = 0 === t ? 1 : 0;
                e = this.playersLeft[i]
            }
            return e
        }
        ,
        e.prototype.processEvent = function(t, e, i) {
            void 0 === i && (i = 0),
            e < 9 && 4 !== e && 5 !== e && this.messageInfo.show2(e, i),
            0 === c.Inventory.instance.gameMode && t && e < 7 && c.Inventory.instance.statsMgr.updateData(e)
        }
        ,
        e.prototype.finishMatch = function() {
            this.isTraining || l.default.getInstance().stop(m.Sounds.m_tribune),
            "" === this.nextState && (this.nextState = e.FULL_TIME),
            this.isPaused = !0,
            e.instance.menuPauseSignal.dispatch(this.nextState)
        }
        ,
        e.PAUSE = "pause",
        e.HELP = "help",
        e.FULL_TIME = "PostMatch",
        e
    }(n.GameCore);
    e.MainGameCore = v
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = Phaser.Keyboard
      , n = i(1)
      , a = i(7)
      , o = i(4)
      , r = function() {
        function t() {
            this.container = null,
            this.keyLeft = null,
            this.keyRight = null,
            this.keyA = null,
            this.keyD = null,
            this.keyL = null,
            this.keyX = null,
            this.keyB = null,
            this.btnUp = null,
            this.btnZ = null,
            this.btnDown = null,
            this.btnLeft = null,
            this.btnLeftDownTime = 0,
            this.btnLeftUpTime = 0,
            this.btnRight = null,
            this.btnRightDownTime = 0,
            this.btnRightUpTime = 0,
            this._isbtnZ = !1,
            this._isbtnK = !1,
            this._isbtnX = !1,
            this._isbtnL = !1,
            this._isbtnV = !1,
            this._isbtnB = !1,
            this._isbtnUp = !1,
            this._isbtnDown = !1,
            this._isbtnLeft = !1,
            this._isbtnRight = !1,
            this._isbtnLeftDouble = !1,
            this._isbtnRightDouble = !1,
            this._isbtnADouble = !1,
            this._isbtnDDouble = !1
        }
        return Object.defineProperty(t.prototype, "isbtnZ", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.Z) : this._isbtnZ || this.keyboard.isDown(s.Z)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnX", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.X) : this._isbtnX || this.keyboard.isDown(s.X)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnK", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.K) : this._isbtnK || this.keyboard.isDown(s.K)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnL", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.L) : this._isbtnL || this.keyboard.isDown(s.L)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnV", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.V) : this._isbtnV || this.keyboard.isDown(s.V)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnB", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.B) : this._isbtnB || this.keyboard.isDown(s.B)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnUp", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.UP) : this._isbtnUp || this.keyboard.isDown(s.UP)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnDown", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.DOWN) : this._isbtnDown || this.keyboard.isDown(s.DOWN)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnLeft", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.LEFT) : this._isbtnLeft || this.keyboard.isDown(s.LEFT)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnLeftDouble", {
            get: function() {
                null === this.keyLeft && (this.keyLeft = this.keyboard.addKey(s.LEFT)),
                this.keyTimer = this.keyLeft.timeDown - this.keyLeft.timeUp;
                var t = this.keyTimer < 460 && this.keyLeft.justDown;
                if (o.default.isDesktop || t)
                    return t;
                var e = this.game.time.time
                  , i = e - this.btnLeftDownTime < 100;
                return this.btnLeftDownTime - this.btnLeftUpTime < 460 && i
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnRight", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.RIGHT) : this._isbtnRight || this.keyboard.isDown(s.RIGHT)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnRightDouble", {
            get: function() {
                null === this.keyRight && (this.keyRight = this.keyboard.addKey(s.RIGHT)),
                this.keyTimer = this.keyRight.timeDown - this.keyRight.timeUp;
                var t = this.keyTimer < 460 && this.keyRight.justDown;
                if (o.default.isDesktop || t)
                    return t;
                var e = this.game.time.time
                  , i = e - this.btnRightDownTime < 100
                  , n = this.btnRightDownTime - this.btnRightUpTime < 460;
                return n && i
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnW", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.W) : this._isbtnUp || this.keyboard.isDown(s.W)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnS", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.S) : this._isbtnDown || this.keyboard.isDown(s.S)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnADouble", {
            get: function() {
                return null === this.keyA && (this.keyA = this.keyboard.addKey(s.A)),
                this.keyTimer = this.keyA.timeDown - this.keyA.timeUp,
                this.keyTimer < 460 && this.keyA.justDown
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnA", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.A) : this._isbtnLeft || this.keyboard.isDown(s.A)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnDDouble", {
            get: function() {
                return null === this.keyD && (this.keyD = this.keyboard.addKey(s.D)),
                this.keyTimer = this.keyD.timeDown - this.keyD.timeUp,
                this.keyTimer < 460 && this.keyD.justDown
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isbtnD", {
            get: function() {
                return o.default.isDesktop ? this.keyboard.isDown(s.D) : this._isbtnRight || this.keyboard.isDown(s.D)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.init = function(t, e) {
            this.container = t,
            this.game = e,
            this.container.inputEnableChildren = !0,
            this.keyboard = this.game.input.keyboard,
            this.keyboard.addKeyCapture(s.RIGHT),
            this.keyboard.addKeyCapture(s.LEFT),
            this.keyboard.addKeyCapture(s.DOWN),
            this.keyboard.addKeyCapture(s.UP),
            this.keyboard.addKeyCapture(s.A),
            this.keyboard.addKeyCapture(s.W),
            this.keyboard.addKeyCapture(s.S),
            this.keyboard.addKeyCapture(s.D),
            this.keyboard.addKeyCapture(s.Z),
            this.keyboard.addKeyCapture(s.X),
            this.keyboard.addKeyCapture(s.K),
            this.keyboard.addKeyCapture(s.L),
            o.default.isDesktop || this.createButtons()
        }
        ,
        t.prototype.createButtons = function() {
            var t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon20000");
            t.anchor.set(.5),
            this.btnUp = new a.default(this.game,"",{},function() {}
            ,this,n.Atlases.Gameplay),
            this.btnUp.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000"),
            this.btnUp.x = 725,
            this.btnUp.y = 427,
            this.btnUp.btn.alpha = .9,
            this.container.addChild(this.btnUp),
            this.btnUp.label.parent.addChild(t);
            var e = this.game.make.graphics();
            e.beginFill(16711680, 0),
            e.drawRect((this.btnUp.width + 5) / -2, (this.btnUp.height + 5) / -2, this.btnUp.width + 30, this.btnUp.height + 10),
            e.endFill(),
            e.inputEnabled = !0,
            e.events.onInputDown.add(this.upTap, this),
            e.events.onInputUp.add(this.upUnTap, this),
            this.btnUp.label.parent.addChild(e),
            this.btnZ = new a.default(this.game,"",{},function() {}
            ,this,n.Atlases.Gameplay),
            this.btnZ.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000"),
            this.btnZ.x = 745,
            this.btnZ.y = 327,
            this.btnZ.btn.events.onInputDown.add(this.ZTap, this),
            this.btnZ.btn.events.onInputUp.add(this.ZUnTap, this),
            this.btnZ.btn.alpha = .9,
            this.container.addChild(this.btnZ),
            t = this.game.add.image(0, 0, n.Atlases.Gameplay, "shoot_icon0000"),
            t.anchor.set(.5),
            this.btnDown = new a.default(this.game,"",{},function() {}
            ,this,n.Atlases.Gameplay),
            this.btnDown.setFrames("btn_bg20000", "btn_bg20000", "btn_bg20000", "btn_bg20000"),
            this.btnDown.x = 615,
            this.btnDown.y = 427,
            this.btnDown.btn.events.onInputDown.add(this.XTap, this),
            this.btnDown.btn.events.onInputUp.add(this.XUnTap, this),
            this.btnDown.btn.alpha = .9,
            this.container.addChild(this.btnDown),
            this.btnDown.labelState = t,
            t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon0000"),
            t.anchor.set(.5),
            t.scale.set(.85),
            this.btnLeft = new a.default(this.game,"",{},function() {}
            ,this,n.Atlases.Gameplay),
            this.btnLeft.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.btnLeft.x = 75,
            this.btnLeft.y = 415,
            this.btnLeft.sScale = .57,
            this.btnLeft.btn.alpha = .9,
            this.container.addChild(this.btnLeft),
            t.angle = -180,
            this.btnLeft.label.parent.addChild(t),
            e = this.game.make.graphics(),
            e.beginFill(16711680, 0),
            e.drawRect((this.btnLeft.width + 59) / -2, (this.btnLeft.height + 5) / -2, this.btnLeft.width + 34, this.btnLeft.height + 10),
            e.endFill(),
            e.inputEnabled = !0,
            e.events.onInputDown.add(this.leftTap, this),
            e.events.onInputUp.add(this.leftUnTap, this),
            this.btnLeft.label.parent.addChild(e),
            t = this.game.add.image(0, 0, n.Atlases.Gameplay, "arrow_icon0000"),
            t.anchor.set(.5),
            t.scale.set(.85),
            this.btnRight = new a.default(this.game,"",{},function() {}
            ,this,n.Atlases.Gameplay),
            this.btnRight.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.btnRight.x = 185,
            this.btnRight.y = 415,
            this.btnRight.sScale = .57,
            this.btnRight.btn.alpha = .9,
            this.container.addChild(this.btnRight),
            this.btnRight.label.parent.addChild(t),
            e = this.game.make.graphics(),
            e.beginFill(16711680, 0),
            e.drawRect((this.btnRight.width + 59) / -2, (this.btnRight.height + 5) / -2, this.btnRight.width + 34, this.btnRight.height + 10),
            e.endFill(),
            e.inputEnabled = !0,
            e.events.onInputDown.add(this.rightTap, this),
            e.events.onInputUp.add(this.rightUnTap, this),
            this.btnRight.label.parent.addChild(e)
        }
        ,
        t.prototype.upTap = function() {
            this.btnUp.onDownLabel(),
            this._isbtnUp = !0
        }
        ,
        t.prototype.leftTap = function() {
            this.btnLeft.onDownLabel(),
            this.btnLeftDownTime = this.game.time.time,
            this._isbtnLeft = !0
        }
        ,
        t.prototype.rightTap = function() {
            this.btnRight.onDownLabel(),
            this.btnRightDownTime = this.game.time.time,
            this._isbtnRight = !0
        }
        ,
        t.prototype.ZTap = function() {
            this._isbtnZ = !0
        }
        ,
        t.prototype.XTap = function() {
            this._isbtnX = !0
        }
        ,
        t.prototype.upUnTap = function() {
            this.btnUp.onOut(),
            this._isbtnUp = !1
        }
        ,
        t.prototype.leftUnTap = function() {
            this.btnLeft.onOut(),
            this.btnLeftUpTime = this.game.time.time,
            this._isbtnLeft = !1
        }
        ,
        t.prototype.rightUnTap = function() {
            this.btnRight.onOut(),
            this.btnRightUpTime = this.game.time.time,
            this._isbtnRight = !1
        }
        ,
        t.prototype.ZUnTap = function() {
            this._isbtnZ = !1
        }
        ,
        t.prototype.XUnTap = function() {
            this._isbtnX = !1
        }
        ,
        t.prototype.resize = function(t) {
            if (this.container.parent && this.container.parent.parent,
            this.container) {
                this.container.scale.set(t);
                var e = 0;
                t >= 1 && this.game.width > n.Constants.WIDTH && (e = .5 * (this.game.width - n.Constants.WIDTH) / this.container.parent.scale.x),
                this.btnUp.x = 725 + e,
                this.btnUp.y = 427,
                this.btnZ.x = 745 + e,
                this.btnZ.y = 327,
                this.btnDown.x = 615 + e,
                this.btnDown.y = 427,
                this.btnLeft.x = 75 - e,
                this.btnLeft.y = 415,
                this.btnRight.x = 185 - e,
                this.btnRight.y = 415
            }
        }
        ,
        Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t),
                t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    }();
    e.default = r
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(0)
      , n = function() {
        function t() {}
        return t.dataLoadedSignal = new s.Signal,
        t.PlayerSignal = new s.Signal,
        t.SensorSignal = new s.Signal,
        t.MatchProcessorSignal = new s.Signal,
        t.MatchEndSignal = new s.Signal,
        t.EventSignal = new s.Signal,
        t
    }();
    e.Signals = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {
            this.brandInstances = {},
            this.brandDomains = [],
            this.brandInstances[t.YEP10] = "http://yep10.com/?utm_source=bb_2019",
            this.brandInstances[t.Google] = "https://play.google.com/store/apps/details?id=air.com.madpuffers.football",
            this.brandInstances[t.Apple] = "https://itunes.apple.com/us/app/euro-football-legends/id1124042258&utm_source=flash_fl2016&utm_medium=banner&utm_campaign=football_legends_ios",
            t.Current = t.YEP10,
            this.brandDomains = [],
            this.brandDomains.push("y8.com"),
            this.brandDomains.push("id.net"),
            this.brandDomains.push("pog.com"),
            this.brandDomains.push("gamepost.com"),
            this.brandDomains.push("dollmania.com"),
            this.brandDomains.push("madpuffers.com"),
            this.brandDomains.push("localhost:")
        }
        return t.getInstance = function() {
            return null === t.instance && (t.instance = new t),
            t.instance
        }
        ,
        t.prototype.checkDomain = function(t) {
            for (var e = 0; e < this.brandDomains.length; e++) {
                var i = this.brandDomains[e];
                if (-1 !== t.indexOf(i))
                    return !0
            }
            return !1
        }
        ,
        t.prototype.getUrlLock = function() {
            return null !== t.Current ? this.brandInstances[t.Current] : ""
        }
        ,
        t.prototype.getUrl = function(t) {
            return this.brandInstances[t]
        }
        ,
        t.instance = null,
        t.YEP10 = "yep10",
        t.Current = t.YEP10,
        t.Google = "google",
        t.Apple = "itunes",
        t
    }();
    e.default = s
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(1)
      , a = i(4)
      , o = i(9)
      , r = i(0)
      , h = function(t) {
        function e(e, i, s) {
            void 0 === s && (s = null);
            var h = t.call(this, e) || this;
            if (e.add.existing(h),
            i.backgroundBase) {
                var l = h.game.make.sprite(0, 0, n.Atlases.Preloader, o.default.BASE_BG[o.default.INDEX_BG + 1 === 3 ? 0 : o.default.INDEX_BG + 1] + "0000");
                i.backgroundBase.addChildAt(l, 0),
                l.alpha = .5;
                var c = h.game.add.tween(l);
                c.to({
                    alpha: 1
                }, a.default.PRELOADER_TIME_HALF, r.Easing.Linear.None),
                c.start(),
                o.default.INDEX_BG++,
                o.default.INDEX_BG >= o.default.BASE_BG.length && (o.default.INDEX_BG = 0),
                i.backgroundBaseMask && (i.backgroundBase.mask = i.backgroundBaseMask)
            }
            return null !== s && s.call(i),
            h
        }
        return s(e, t),
        e
    }(Phaser.Graphics);
    e.default = h
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(2)
      , c = i(10)
      , u = i(16)
      , d = i(11)
      , p = i(8)
      , f = i(32)
      , g = i(26)
      , m = i(12)
      , y = i(33)
      , v = i(4)
      , b = i(0)
      , _ = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.popup = null,
            i.popup_btn = null,
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll()
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            this.background = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.background4 = this.game.add.sprite(400, 290, a.Atlases.Interface, "bg0000");
            var e = null;
            e = this.game.add.sprite(-185, 66, a.Atlases.Interface, "body00000"),
            e.anchor.set(.5),
            this.background4.addChild(e),
            e = this.game.add.sprite(230, 55, a.Atlases.Interface, "body10000"),
            e.anchor.set(.5),
            this.background4.addChild(e),
            e = this.game.add.sprite(0, 15, a.Atlases.Interface, "0bg100000"),
            e.anchor.set(.5),
            e.scale.set(1.1, .9),
            this.background4.addChild(e),
            e = this.game.add.sprite(-213, -50, a.Atlases.Interface, "head00000"),
            e.anchor.set(.5),
            e.scale.set(.95),
            this.background4.addChild(e),
            e = this.game.add.sprite(215, -55, a.Atlases.Interface, "head10000"),
            e.anchor.set(.5),
            e.scale.set(.95),
            this.background4.addChild(e),
            this.background4.anchor.set(.5),
            this.playBtn1 = new p.default(this.game,"TOURNAMENT",a.Constants.stylePlay3,this.startTournament,this,a.Atlases.Interface),
            this.playBtn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn1.y = -110,
            this.playBtn1.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn1),
            this.playBtn1.scale.set(.75, 1),
            this.playBtn2 = new p.default(this.game,"RANDOM",a.Constants.stylePlay3,this.startRandom,this,a.Atlases.Interface),
            this.playBtn2.y = 0,
            this.playBtn2.label.parent.y = -50,
            this.playBtn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn2.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn2);
            var i = new p.default(this.game,"MATCH",a.Constants.stylePlay3,null,null,a.Atlases.Interface);
            i.label.parent.y = 50,
            i.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.setProp("#330099", 5, "#FF99FF", 10),
            i.inputEnableChildren = !0,
            this.playBtn2.label.addChild(i);
            var s = new p.default(this.game,"TRAINING",a.Constants.stylePlay2,this.startTraining,this,a.Atlases.Interface);
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.y = 70,
            s.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(s),
            this.playBtn3 = new p.default(this.game,"BACK",a.Constants.stylePlay4,this.onBack,this,a.Atlases.Interface),
            this.playBtn3.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000"),
            this.playBtn3.btn.btn.x = -110,
            this.playBtn3.setProp("#330099", 5, "#FF99FF", 10),
            this.playBtn3.x = 35,
            this.playBtn3.y = 130,
            this.background4.addChild(this.playBtn3),
            this.leaderBoardBtn = new o.default(this.game,"",null,this.onScoreList,this,a.Atlases.Interface),
            this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.leaderBoardBtn.sScale = .7,
            this.leaderBoardBtn.sLabelScale = .7;
            var n = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
            n.anchor.set(.5),
            this.leaderBoardBtn.label.parent.addChild(n),
            this.achievmentBtn = new o.default(this.game,"",null,this.onAchievment,this,a.Atlases.Gameplay),
            this.achievmentBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
            var l = this.game.add.image(0, 0, a.Atlases.Interface, "ach_icon0000");
            l.anchor.set(.5),
            this.achievmentBtn.label.parent.addChild(l),
            this.achievmentBtn.x = 730,
            this.achievmentBtn.y = 25,
            this.logo = this.game.add.sprite(400, 65, a.Atlases.Preloader, "logo0000"),
            this.logo.anchor.set(.5),
            this.backgroundBase2.addChild(this.logo),
            this.musicBtn = new o.default(this.game,"",{},this.toggleMusic,this,a.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.achievmentBtn.sScale = this.musicBtn.sScale = 42 / this.musicBtn.btn.width,
            this.musicBtn.x = 772,
            this.musicBtn.y = 25,
            this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000"),
            this.backgroundBase2.addChild(this.musicBtn),
            this.branding2 = new o.default(this.game,"",null,this.onMoreGames,this,a.Atlases.Preloader),
            this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            this.branding2.x = 698,
            this.branding2.y = 444,
            this.updateSoundButtons(),
            this.backgroundBase2.addChild(this.achievmentBtn),
            this.backgroundBase2.addChild(this.leaderBoardBtn),
            this.leaderBoardBtn.x = 730,
            this.leaderBoardBtn.y = 150,
            this.backgroundBase2.addChild(this.background4),
            this.backgroundBase2.addChild(this.branding2),
            this.leaderBoardBtn.visible = !1,
            this.resize(),
            new r.default(this.game,this,this.show)
        }
        ,
        e.prototype.show = function() {
            var t = this.game.add.tween(this.background4);
            t.from({
                y: 800
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.from({
                y: -145
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.from({
                x: 1600
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.from({
                x: 1600
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start()
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.background4);
            t.to({
                y: 800
            }, v.default.PRELOADER_TIME),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.to({
                y: -145
            }, v.default.PRELOADER_TIME),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.to({
                x: 1600
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                x: 1600
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.onMoreGames = function() {
            window.open(u.default.getInstance().getUrl(u.default.Current), "_blank")
        }
        ,
        e.prototype.startTournament = function() {
            if (n.default.getInstance().play(a.Sounds.Click),
            l.Inventory.instance.getTournament()) {
                this.createPopup("0bg100000");
                var t = this.popup.getChildAt(0);
                t.alpha = .5,
                t.inputEnabled = !0,
                t.events.onInputDown.addOnce(this.disposePopup, this);
                var e = new p.default(this.game,"CONTINUE TOURNAMENT",a.Constants.styleTournamentPopup,this.startOLDTournament,this,a.Atlases.Interface);
                e.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                e.setProp("#330099", 5, "#FF99FF", 10),
                e.y = -140,
                this.popup.getChildAt(1).addChild(e),
                e = new p.default(this.game,"NEW TOURNAMENT",a.Constants.styleTournamentPopup,this.startNEWTournament,this,a.Atlases.Interface),
                e.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                e.setProp("#330099", 5, "#FF99FF", 10),
                e.y = -65,
                this.popup.getChildAt(1).addChild(e);
                var i = {
                    font: "bold 28px Impact2",
                    fill: "#FF99FF"
                }
                  , s = new c.default(this.game,0,-10,"WARNING",i);
                s.anchor.set(.5),
                this.popup.getChildAt(1).addChild(s),
                s = new c.default(this.game,0,20,"IF YOU CHOOSE",i),
                s.anchor.set(.5),
                this.popup.getChildAt(1).addChild(s),
                s = new c.default(this.game,0,50,"NEW TOURNAMENT,",i),
                s.anchor.set(.5),
                this.popup.getChildAt(1).addChild(s),
                s = new c.default(this.game,0,80,"YOU WILL LOST",i),
                s.anchor.set(.5),
                this.popup.getChildAt(1).addChild(s),
                s = new c.default(this.game,0,110,"YOUR PROGRESS",i),
                s.anchor.set(.5),
                this.popup.getChildAt(1).addChild(s),
                this.resize()
            } else
                this.startNEWTournament()
        }
        ,
        e.prototype.startNEWTournament = function() {
            l.Inventory.instance.matchData.matchMode = 0,
            l.Inventory.instance.breakTournament(),
            new h.default(this.game,this,g.default.Name)
        }
        ,
        e.prototype.startOLDTournament = function() {
            l.Inventory.instance.matchData.matchMode = 0,
            new h.default(this.game,this,m.TournamentState.Name)
        }
        ,
        e.prototype.startRandom = function() {
            n.default.getInstance().play(a.Sounds.Click),
            l.Inventory.instance.matchData.resetScore(),
            l.Inventory.instance.gameMode = 1,
            new h.default(this.game,this,g.default.Name)
        }
        ,
        e.prototype.startTraining = function() {
            n.default.getInstance().play(a.Sounds.Click),
            l.Inventory.instance.matchData.resetScore(),
            l.Inventory.instance.gameMode = 3,
            new h.default(this.game,this,m.Gameplay.Name)
        }
        ,
        e.prototype.onScoreList = function() {
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.onAchievment = function() {
            n.default.getInstance().play(a.Sounds.Click),
            new h.default(this.game,this,y.default.Name)
        }
        ,
        e.prototype.toggleMusic = function() {
            d.default.getInstance().music ? n.default.getInstance().toggleMusic() : d.default.getInstance().sfx ? n.default.getInstance().toggleSfx() : (n.default.getInstance().toggleSfx(),
            n.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.updateSoundButtons = function() {
            var t = d.default.getInstance().music ? 0 : 1;
            t += d.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        e.prototype.onBack = function() {
            n.default.getInstance().play(a.Sounds.Click),
            new h.default(this.game,this,f.default.Name)
        }
        ,
        e.prototype.disposePopup = function() {
            this.popup.destroy(),
            this.popup = null,
            this.popup_btn && (this.popup_btn.destroy(),
            this.popup_btn = null)
        }
        ,
        e.prototype.backgroundPopup = function() {
            this.popup = this.game.add.sprite(350, 280, a.Atlases.Interface, "bg0000"),
            this.popup.anchor.set(.5),
            this.popup.scale.set(1.3);
            var t = this.game.add.sprite(0, 0, a.Atlases.Interface, "black0000");
            t.width = this.game.width + 500,
            t.height = this.game.height + 500,
            t.inputEnabled = !0,
            t.anchor.set(.5),
            this.popup.addChild(t)
        }
        ,
        e.prototype.createPopup = function(t) {
            void 0 === t && (t = "0bg100000"),
            null !== this.popup && this.disposePopup(),
            this.backgroundPopup();
            var e = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000");
            e.anchor.set(.5),
            e.inputEnabled = !0,
            this.popup.addChild(e);
            var i = this.game.add.sprite(0, -30, a.Atlases.Interface, t);
            i.scale.set(1.8, 1),
            i.anchor.set(.5),
            e.addChild(i)
        }
        ,
        e.prototype.resizePopup = function(t) {
            if (null !== this.popup) {
                var e = this.popup.removeChildAt(0);
                e.width = this.game.width + 500,
                e.height = this.game.height + 500,
                this.popup.x = this.world.bounds.centerX,
                this.popup.y = this.world.bounds.centerY,
                this.popup.addChildAt(e, 0),
                this.popup_btn && (this.popup_btn.x = this.world.bounds.centerX - 270 * t,
                this.popup_btn.y = this.world.bounds.centerY + 200 * t)
            }
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.background.scale.set(e),
            this.background.alignIn(this.backgroundBase2, Phaser.BOTTOM_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            this.resizePopup(e),
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.background = null,
            this.popup = null,
            this.popup_btn = null,
            this.playBtn1 = null,
            this.playBtn2 = null,
            this.playBtn3 = null,
            this.achievmentBtn = null,
            this.leaderBoardBtn = null,
            this.branding2 = null,
            this.musicBtn = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "menu2",
        e
    }(Phaser.State);
    e.default = _
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.ARENA = 0,
        t.BASKET = 1,
        t.BALL = 2,
        t.PLAYER = 3,
        t.SHADOW = 4,
        t.EFFECTS = 5,
        t.INFO = 6,
        t
    }();
    e.ObjectsType = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.normalizeAngle = function(t) {
            return t > Math.PI ? t -= 2 * Math.PI : t < -Math.PI && (t += 2 * Math.PI),
            t
        }
        ,
        t.normalizeAngle2 = function(t) {
            return t %= 2 * Math.PI,
            t > Math.PI ? t -= 2 * Math.PI : t < -Math.PI && (t += 2 * Math.PI),
            t
        }
        ,
        t.normalizeVertices = function(e) {
            var i = {};
            i.className = e.className,
            i.params = {},
            i.params.vertices = [];
            var s = e.params
              , n = s.x
              , a = s.y;
            for (var o in s)
                "vertices" !== o && (i.params[o] = s[o]);
            for (var r = t.TO_RAD * s.rotation, h = s.vertices, l = i.params.vertices, c = h.length, u = 0; u < c; u++) {
                var d = Math.round(h[u].x)
                  , p = Math.round(h[u].y);
                if (l[u] = {},
                0 === d && 0 === p)
                    l[u].x = n,
                    l[u].y = a;
                else {
                    var f = void 0;
                    f = Math.atan2(p, d);
                    var g = Math.sqrt(d * d + p * p);
                    f += r,
                    l[u].x = n + Math.cos(f) * g,
                    l[u].y = a + Math.sin(f) * g
                }
            }
            return i.params.x = 0,
            i.params.y = 0,
            i.params.rotation = 0,
            i
        }
        ,
        t.dist = function(t, e, i, s) {
            return Math.sqrt((t - i) * (t - i) + (e - s) * (e - s))
        }
        ,
        t.TO_RAD = Math.PI / 180,
        t.TO_DEG = 180 / Math.PI,
        t.PIdiv2 = Math.PI / 0,
        t.PIdiv4 = Math.PI / 4,
        t.PIdiv4mul3 = 3 * Math.PI / 4,
        t
    }();
    e.default = s;
    var n = function() {
        function t() {}
        return t.rand = function(t, e) {
            return t - .5 * e + e * Math.random()
        }
        ,
        t
    }();
    e.MyRand = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t(t, e) {
            void 0 === e && (e = 0),
            this.result = 0,
            this.delta = -1,
            this.fixed = e,
            this.range = t
        }
        return t.prototype.activate = function() {
            this.delta = 0,
            this.dispersion = Math.random() * this.range,
            this.delay = this.fixed + this.dispersion
        }
        ,
        t.prototype.update = function(t) {
            return this.delta >= 0 ? (this.result = 0,
            this.delta += t,
            this.delta >= this.delay && (this.result = 1,
            this.delta = -1),
            this.result) : -1
        }
        ,
        t.prototype.reset = function() {
            this.delta = -1
        }
        ,
        t
    }();
    e.FullDelay = s
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = nape.space.Space
      , a = i(28)
      , o = i(23)
      , r = nape.callbacks.CbEvent
      , h = nape.callbacks.InteractionListener
      , l = nape.callbacks.InteractionType
      , c = i(2)
      , u = i(40)
      , d = i(15)
      , p = function(t) {
        function e() {
            var i = t.call(this) || this;
            return e.space = new n(c.ObjectsData.GRAVITY),
            i
        }
        return s(e, t),
        e.prototype.start = function() {
            e.hasListeners || this.setupListners()
        }
        ,
        e.prototype.setupListners = function() {
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbGround,this.onBallGround)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbBorders,this.onBallBorder)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbBasket,this.onBallBasket)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbRing,this.onBallRing)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbShield,this.onBallShield)),
            e.space.listeners.add(new h(r.BEGIN,l.SENSOR,c.CbTypes.cbBall,c.CbTypes.cbPlayersHands,this.onBallHands)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbBall,c.CbTypes.cbPlayersBlock,this.onBallBlock)),
            e.space.listeners.add(new h(r.BEGIN,l.SENSOR,c.CbTypes.cbPlayersBlock,c.CbTypes.cbDownSensor,this.onBlockSensor)),
            e.space.listeners.add(new h(r.BEGIN,l.COLLISION,c.CbTypes.cbPlayer,c.CbTypes.cbGround,this.onPlayerGround)),
            e.space.listeners.add(new h(r.BEGIN,l.SENSOR,c.CbTypes.cbBall,c.CbTypes.cbUpperSensor,this.onUpperSensor)),
            e.space.listeners.add(new h(r.BEGIN,l.SENSOR,c.CbTypes.cbBall,c.CbTypes.cbDownSensor,this.onDownSensor)),
            e.hasListeners = !0
        }
        ,
        e.prototype.onBallGround = function(t) {
            t.int1.castBody.userData.owner.onGroundCollision(!0)
        }
        ,
        e.prototype.onBallBorder = function(t) {
            t.int1.castBody.userData.owner.onGroundCollision(!1)
        }
        ,
        e.prototype.onBallRing = function(t) {
            var e = t.int1.castBody.userData.owner;
            e.setState("basket"),
            t.arbiters.length > 0 && t.arbiters.at(0).collisionArbiter.contacts.at(0).position.y < 198 && e.playSnd(1)
        }
        ,
        e.prototype.onBallBasket = function(t) {
            var e = t.int1.castBody.userData.owner;
            e.setState("basket"),
            e.playSnd(2)
        }
        ,
        e.prototype.onBallBlock = function(t) {
            var e = t.int1.castBody.userData.owner
              , i = !1;
            if (t.int2.castShape.body && (i = (e.getX() - t.int2.castShape.worldCOM.x) * e.SIDE > 0),
            t.int2.castShape.body && i) {
                var s = t.int2.castShape.body.userData.owner;
                e.setState("block", s.SIDE),
                u.MatchProcessor.instance.block(s.SIDE, s.isHuman),
                d.Signals.EventSignal.dispatch(s.isHuman, 4)
            }
        }
        ,
        e.prototype.onBallHands = function(t) {
            var e = t.int2.castShape.body.userData.owner
              , i = e.SIDE
              , s = e.playerNo;
            e.canTakeInHands && t.int1.castBody.userData.owner.takeInHands(i, s)
        }
        ,
        e.prototype.onBlockSensor = function(t) {
            t.int1.castShape.body && t.int1.castShape.body.userData.owner.removeBlock()
        }
        ,
        e.prototype.onPlayerGround = function(t) {
            t.int1.castShape.body.userData.owner.onGroundCollision()
        }
        ,
        e.prototype.onUpperSensor = function(t) {
            d.Signals.SensorSignal.dispatch(0, t.int2.castShape.body.userData.side)
        }
        ,
        e.prototype.onDownSensor = function(t) {
            d.Signals.SensorSignal.dispatch(1, t.int2.castShape.body.userData.side),
            t.int1.castBody.userData.owner.onDownSensor()
        }
        ,
        e.prototype.onBallShield = function(t) {
            var e = t.int2.castShape.body.userData.side;
            t.int1.castBody.userData.owner.onShieldCollision(e)
        }
        ,
        e.prototype.update = function(t) {
            e.space.step(t)
        }
        ,
        e.prototype.updateGraphics = function() {
            for (var t = e.space.liveBodies.iterator(), i; t.hasNext(); ) {
                var s = t.next()
                  , n = s.userData;
                n.graphic && (i = n.graphic,
                i.x = s.position.x,
                i.y = s.position.y,
                i.rotation = s.rotation % (2 * Math.PI))
            }
        }
        ,
        e.prototype.add = function(t) {
            t.body && (t.body.space = e.space)
        }
        ,
        e.prototype.release = function() {
            for (; !e.space.bodies.empty(); )
                o.NapeUtil.disposeBody(e.space.bodies.at(0));
            t.prototype.release.call(this),
            e.space.clear(),
            e.space = null,
            e.hasListeners = !1
        }
        ,
        e.hasListeners = !1,
        e.isGoal = !1,
        e
    }(a.GamePhysics);
    e.NapePhysics = p
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(20)
      , n = nape.constraint.PivotJoint
      , a = nape.geom.GeomPoly
      , o = nape.geom.GeomPolyList
      , r = nape.geom.Vec2
      , h = nape.phys.Body
      , l = nape.phys.BodyList
      , c = nape.phys.BodyType
      , u = nape.shape.Circle
      , d = nape.shape.Polygon
      , p = function() {
        function t() {}
        return t.disposeBody = function(e) {
            t.clearUserData(e),
            e.cbTypes.clear(),
            e.compound ? e.compound = null : e.space = null
        }
        ,
        t.resetStartPos = function(t) {
            t.position.x = t.userData.sx,
            t.position.y = t.userData.sy,
            t.rotation = t.userData.sr
        }
        ,
        t.clearUserData = function(t) {
            for (var e in t.userData)
                t.userData.hasOwnProperty(e) && (t.userData[e] = null)
        }
        ,
        t.createRectBody = function(e, i, n, a, o, r) {
            void 0 === o && (o = null),
            void 0 === r && (r = null);
            var h = new d(d.box(a.width, a.height, !0),r,i);
            h.sensorEnabled = n;
            var l = t.createBody(e, a.x, a.y, s.default.TO_RAD * a.rotation, o);
            return l.shapes.add(h),
            l
        }
        ,
        t.createRectBodyWH = function(e, i, s, n, a, o, r, h, l, c) {
            void 0 === o && (o = 0),
            void 0 === r && (r = 0),
            void 0 === h && (h = 0),
            void 0 === l && (l = null),
            void 0 === c && (c = null);
            var u = new d(d.box(n, a, !0),c,i);
            u.sensorEnabled = s;
            var p = t.createBody(e, o, r, h, l);
            return p.shapes.add(u),
            p
        }
        ,
        t.createRegularBody = function(e, i, s, n, a, o, r, h, l, c, u) {
            void 0 === r && (r = 0),
            void 0 === h && (h = 0),
            void 0 === l && (l = 0),
            void 0 === c && (c = null),
            void 0 === u && (u = null);
            var p = new d(d.regular(.5 * n, .5 * a, o, 0, !0),u,i);
            p.sensorEnabled = s;
            var f = t.createBody(e, r, h, l, c);
            return f.shapes.add(p),
            f
        }
        ,
        t.createBody = function(t, e, i, s, n) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === s && (s = 0),
            void 0 === n && (n = null);
            var a = new h(t,r.weak(e, i));
            return a.rotation = s,
            null != n && a.cbTypes.add(n),
            a
        }
        ,
        t.createCircleBody = function(e, i, s, n, a, o, r, h, l) {
            void 0 === a && (a = 0),
            void 0 === o && (o = 0),
            void 0 === r && (r = 0),
            void 0 === h && (h = null),
            void 0 === l && (l = null);
            var c = new u(n,null,l,i);
            c.sensorEnabled = s;
            var d = t.createBody(e, a, o, r, h);
            return null != h && d.cbTypes.add(h),
            d.shapes.add(c),
            d
        }
        ,
        t.bodiesInCircle = function(e, i, s, n, a) {
            return void 0 === n && (n = !1),
            void 0 === a && (a = null),
            t.bodyList.clear(),
            e.bodiesInCircle(i, s, n, a, t.bodyList),
            t.bodyList
        }
        ,
        t.bodiesUnderPoint = function(e, i, s) {
            return void 0 === s && (s = null),
            t.bodyList.clear(),
            e.bodiesUnderPoint(i, s, t.bodyList),
            t.bodyList
        }
        ,
        t.createPolyBody = function(e, i, s, n) {
            var o, l;
            e instanceof Array ? (l = e,
            o = new h(n)) : (l = e.vertices,
            o = new h(n,r.weak(e.x, e.y)));
            for (var c = l.length, u = [], p = 0; p < c; p++)
                u[p] = r.get(l[p].x, l[p].y);
            var f = new a(u);
            if (f.isConvex())
                o.shapes.add(new d(f,i,s)),
                f.dispose();
            else
                for (f.convexDecomposition(!1, t.geomPolyList),
                f.dispose(); !t.geomPolyList.empty(); )
                    f = t.geomPolyList.pop(),
                    o.shapes.add(new d(f,i,s)),
                    f.dispose();
            return o
        }
        ,
        t.createPolyShape = function(e, i, s, n, o) {
            for (var h = i.vertices, l = h.length, c = [], u = 0; u < l; u++)
                c.push(r.get(i.x + h[u].x, i.y + h[u].y));
            var p = new a(c);
            if (p.isConvex()) {
                var f = new d(p,s,n);
                f.cbTypes.add(o),
                e.shapes.add(f),
                p.dispose()
            } else
                for (p.convexDecomposition(!1, t.geomPolyList),
                p.dispose(); !t.geomPolyList.empty(); ) {
                    p = t.geomPolyList.pop();
                    var g = new d(p,s,n);
                    g.cbTypes.add(o),
                    e.shapes.add(g),
                    p.dispose()
                }
        }
        ,
        t.createSensor = function(t, e, i) {
            var s = new d(d.rect(e.x, e.y - e.height / 2, e.width, e.height));
            s.sensorEnabled = !0,
            s.cbTypes.add(i),
            s.userData.id = e.id,
            t.shapes.add(s)
        }
        ,
        t.createPivot = function(t, e, i) {
            return new n(t,e,t.worldPointToLocal(i, !0),e.worldPointToLocal(i, !0))
        }
        ,
        t.disposeJoint = function(t) {
            t.active = !1,
            t.space = null,
            t.body1 = null,
            t.body2 = null
        }
        ,
        t.createPatherBody = function(t, e, i, s) {
            e = e.copy(),
            e.density = t.params.density;
            var n = new h(t.params.isStatic ? c.STATIC : c.DYNAMIC,r.weak(t.params.x, t.params.y)), o = [r.get(), r.get(), r.get(), r.get()], l = r.get(), u = r.get(), p = t.params.vertices, f, g = p.length, m;
            for (f = 0; f < g - 1; f++) {
                if (l.setxy(p[f + 1].x - p[f].x, p[f + 1].y - p[f].y),
                0 === f ? (m = l.angle + .5 * Math.PI,
                o[0].x = p[f].x - .5 * s * Math.cos(m),
                o[0].y = p[f].y - .5 * s * Math.sin(m),
                o[1].x = p[f].x + .5 * s * Math.cos(m),
                o[1].y = p[f].y + .5 * s * Math.sin(m)) : (o[0].x = o[3].x,
                o[0].y = o[3].y,
                o[1].x = o[2].x,
                o[1].y = o[2].y),
                f === g - 2)
                    m = l.angle + .5 * Math.PI,
                    o[3].x = p[f + 1].x - .5 * s * Math.cos(m),
                    o[3].y = p[f + 1].y - .5 * s * Math.sin(m),
                    o[2].x = p[f + 1].x + .5 * s * Math.cos(m),
                    o[2].y = p[f + 1].y + .5 * s * Math.sin(m);
                else {
                    l.muleq(-1 / l.length),
                    u.setxy(p[f + 2].x - p[f + 1].x, p[f + 2].y - p[f + 1].y),
                    u.muleq(1 / u.length);
                    var y = r.get(l.x + u.x, l.y + u.y);
                    m = y.angle,
                    o[3].x = p[f + 1].x - .5 * s * Math.cos(m),
                    o[3].y = p[f + 1].y - .5 * s * Math.sin(m),
                    o[2].x = p[f + 1].x + .5 * s * Math.cos(m),
                    o[2].y = p[f + 1].y + .5 * s * Math.sin(m),
                    y.dispose()
                }
                var v = new a(o)
                  , b = void 0;
                if (v.isConvex())
                    b = new d(o,e,i),
                    b.body = n;
                else {
                    var _ = o[3];
                    o[3] = o[2],
                    o[2] = _,
                    b = new d(o,e,i),
                    b.body = n
                }
            }
            return l.dispose(),
            u.dispose(),
            o[0].dispose(),
            o[1].dispose(),
            o[2].dispose(),
            o[3].dispose(),
            o = null,
            n.align(),
            n
        }
        ,
        t.geomPolyList = new o,
        t.bodyList = new l,
        t
    }();
    e.NapeUtil = p
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(37)
      , n = i(69)
      , a = i(70)
      , o = i(71)
      , r = i(72)
      , h = i(74)
      , l = function() {
        function t() {
            if (this.nickNames = ["points3", "dunks", "fromBlock", "buzzer", "blocks", "steals", "scores", "pointsM", "pointsMH", "pointsT", "pointsTH", "idNet", "forum", "GC1", "SC1", "BC1", "GC2", "SC2", "BC2", "GC1H", "GC2H"],
            this.save = null,
            this.firstEnter = !1,
            this.inited = !1,
            this.isLocal = !0,
            this.gameMode = 0,
            this.matchData = null,
            this.tournament = null,
            this.currentScore = 0,
            this.clearWin = 0,
            this.losesCount = 0,
            this.localGamesCount = 0,
            this.prevShowForum = 0,
            this.SAVE = "tsave",
            this.ACHIEVS = "achievs",
            this.STATS = "stats",
            this.outInfo = "",
            this.timeToShowAdditionalGUI = 18e5,
            this.notLogged = !0,
            null !== t._instance)
                throw new Error("Signleton: Must be only one Object");
            this.isLocal = !0,
            //!SaveGame.getInstance().useOnlineSave;
            this.matchData = new n.MatchData(this.isLocal),
            this.tournament = new a.TournamentData,
            this.matchData.matchMode = 0
        }
        return t.prototype.initManagers = function() {
            this.achievsMgr = new r.AchievsDataManager(this.save,this.ACHIEVS,!this.isLocal),
            this.achievsMgr.signalSave.add(s.default.getInstance().save, s.default.getInstance()),
            this.statsMgr = new h.StatsDataManager(this.save,this.STATS,!this.isLocal,this.achievsMgr),
            this.statsMgr.signalSave.add(s.default.getInstance().save, s.default.getInstance())
        }
        ,
        Object.defineProperty(t, "instance", {
            get: function() {
                return null === t._instance && (t._instance = new t),
                t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.init = function() {
            if (!this.inited) {
                this.inited = !0,
                this.save = {};
                var e = this.save[t.LAST_ENTER];
                this.save[t.LAST_ENTER] = Date.now(),
                e || (this.firstEnter = !0),
                this.gameMode = 0,
                this.currentScore = 0,
                this.clearWin = 0,
                this.losesCount = 0,
                this.localGamesCount = 0,
                this.prevShowForum = 0,
                t.instance.initManagers()
            }
        }
        ,
        t.prototype.saveTournament = function() {
            var t = this.tournament.getValues()
              , e = this.SAVE;
            this.save[e] = t,
            s.default.getInstance().save()
        }
        ,
        t.prototype.getTournament = function() {
            var t = this.SAVE
              , e = this.save[t];
            return !!e && (this.tournament.setValues(e),
            !0)
        }
        ,
        t.prototype.breakTournament = function() {
            this.clearTournamentData(),
            this.clearTournamentSave()
        }
        ,
        t.prototype.clearTournamentData = function() {
            this.tournament.resetAll()
        }
        ,
        t.prototype.clearTournamentSave = function() {
            var t = this.SAVE;
            delete this.save[t],
            s.default.getInstance().save()
        }
        ,
        t.prototype.reset = function() {
            this.inited = !1,
            this.init()
        }
        ,
        t.prototype.checkQuickMatch = function() {
            return 3 === this.gameMode
        }
        ,
        t.prototype.isFinal = function() {
            return this.team === this.rounds[28] || this.team === this.rounds[29]
        }
        ,
        t.prototype.summarizeMatch = function() {
            if (0 === this.gameMode) {
                this.matchScores = o.ScoresCalculator.calcScores(this.matchData.matchScore, this.tournament.state, this.tournament.difficulty, this.tournament.isSecondPlace()),
                this.tournament.scores += this.matchScores,
                this.statsMgr.updateScore(this.tournament.scores, this.tournament.mode);
                var t = this.matchData.matchScore[0];
                this.tournament.points += t,
                this.achievsMgr.updateData(7, t),
                1 === this.tournament.difficulty && this.achievsMgr.updateData(8, t)
            }
        }
        ,
        t.prototype.checkForumAchievement = function() {
            this.achievsMgr.updateData(12)
        }
        ,
        Object.defineProperty(t.prototype, "firstRun", {
            get: function() {
                return !this.save.hasOwnProperty("firstRun") || this.save.firstRun
            },
            set: function(t) {
                this.save.firstRun = t,
                s.default.getInstance().save()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "firstRun2", {
            get: function() {
                return !this.save.hasOwnProperty("firstRun2") || this.save.firstRun2
            },
            set: function(t) {
                this.save.firstRun2 = t,
                s.default.getInstance().save()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "rounds", {
            get: function() {
                return this.tournament.rounds
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "results", {
            get: function() {
                return this.tournament.results
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "opponent", {
            get: function() {
                return this.tournament.opponent
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "team", {
            get: function() {
                return this.tournament.team
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "teamNo", {
            get: function() {
                return this.tournament.teamRound
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.nextLeg = function() {
            var t = "Standings";
            this.calcVars();
            var e = this.tournament.generateResults(this.startId, this.endId, this.isFinalLegs, this.matchData.matchScore);
            if (this.tournament.state++,
            this.summarizeMatch(),
            4 === this.tournament.state)
                this.summarizeTournament(!0),
                t = "Final";
            else if (e)
                this.tournament.defineOpponent(),
                this.saveTournament(),
                t = "Standings";
            else {
                for (var i = this.tournament.state; i < 4; i++)
                    this.calcVars(),
                    this.tournament.generateResults(this.startId, this.endId, this.isFinalLegs),
                    this.tournament.state++;
                this.summarizeTournament(!1),
                t = "Final"
            }
            return [e, t]
        }
        ,
        t.prototype.calcVars = function() {
            this.isFinalLegs = !1;
            var t = this.tournament.state;
            0 === t ? (this.startId = 0,
            this.endId = 8) : 1 === t ? (this.startId = 8,
            this.endId = 12) : 2 === t ? (this.startId = 12,
            this.endId = 14,
            this.isFinalLegs = !0) : (this.startId = 14,
            this.endId = 16,
            this.isFinalLegs = !0)
        }
        ,
        t.prototype.summarizeTournament = function(t) {
            var e = this.tournament.getPlace();
            t && e < 4 && (this.achievsMgr.updateData(14 + 3 * this.tournament.mode + e),
            1 === e && (17 === this.tournament.team && this.achievsMgr.updateData(11),
            1 === this.tournament.difficulty && this.achievsMgr.updateData(13 + this.tournament.mode))),
            this.achievsMgr.updateData(9, this.tournament.points),
            1 === this.tournament.difficulty && this.achievsMgr.updateData(10, this.tournament.points)
        }
        ,
        t.prototype.breakMatch = function() {
            0 === this.gameMode && this.breakTournament(),
            this.matchData.finishMatch(this.gameMode)
        }
        ,
        t.prototype.getTitleFrame = function() {
            var t = -1 === this.matchData.whoWins(), e;
            return e = 4 === this.gameMode ? 2 === this.matchData.matchMode ? t ? 1 : 2 : t ? 3 : 4 : t ? 1 : 2
        }
        ,
        t.prototype.isPvP = function() {
            return 4 === this.gameMode && this.matchData.matchMode < 2
        }
        ,
        t.prototype.createNewTournament = function() {
            this.tournament.createNewTournament(this.matchData),
            this.saveTournament()
        }
        ,
        t.prototype.startTournamentMatch = function() {
            this.matchData.startTournamentMatch(this.tournament)
        }
        ,
        t.prototype.showAdditionalGUI = function() {
            0 === this.gameMode && this.matchData.matchScore[0] <= this.matchData.matchScore[1] && this.losesCount++,
            this.isLocal && this.notLogged && this.localGamesCount++;
            var t = Date.now();
            return this.losesCount >= 3 && (0 === this.prevShowForum || t - this.prevShowForum >= this.timeToShowAdditionalGUI) ? (this.prevShowForum = t,
            this.losesCount = 0,
            1) : this.localGamesCount >= 3 && (0 === this.prevShowRegister || t - this.prevShowRegister >= this.timeToShowAdditionalGUI) ? (this.prevShowRegister = t,
            this.localGamesCount = 0,
            2) : 0
        }
        ,
        t.prototype.getAchievsArray = function() {
            return this.achievsMgr.getValuesForRead()
        }
        ,
        t.prototype.getMatchScores = function() {
            return this.matchScores
        }
        ,
        t.prototype.getTournamentScores = function() {
            return this.tournament.scores
        }
        ,
        t.prototype.getTotalScores = function() {
            return this.statsMgr.getTotalScores()
        }
        ,
        t.LAST_ENTER = "l_e",
        t._instance = null,
        t
    }();
    e.Inventory = l
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t(t) {
            this.type = -1,
            this.player = t,
            this.SIDE = t.SIDE
        }
        return t.prototype.playerOnGround = function() {}
        ,
        t.prototype.playerOnBlock = function() {}
        ,
        t.prototype.ballInOwnHands = function(t) {
            void 0 === t && (t = 0)
        }
        ,
        t.prototype.ballInOpponentsHands = function(t) {
            void 0 === t && (t = 0)
        }
        ,
        t.prototype.ballOwnShoot = function(t) {
            void 0 === t && (t = 0)
        }
        ,
        t.prototype.ballOpponentShoot = function(t) {
            void 0 === t && (t = 0)
        }
        ,
        t.prototype.ballOthers = function() {}
        ,
        t.prototype.readyForAction = function() {
            return !1
        }
        ,
        t.prototype.releaseBlockOrPump = function(t) {
            return !1
        }
        ,
        t.prototype.restart = function(t) {}
        ,
        t.prototype.update = function(t) {}
        ,
        t.prototype.dispose = function() {
            this.player = null
        }
        ,
        t
    }();
    e.BaseController = s
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(2)
      , c = i(10)
      , u = i(11)
      , d = i(8)
      , p = i(31)
      , f = i(18)
      , g = i(102)
      , m = i(51)
      , y = i(12)
      , v = i(4)
      , b = i(0)
      , _ = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i._armatureDisplay = null,
            i._armatureDisplay2 = null,
            i._armatureDisplay3 = null,
            i._armatureDisplay4 = null,
            i.manager = null,
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll(),
            this.manager = l.Inventory.instance,
            dragonBones.PhaserFactory.init(this.game)
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this);
            var e = this.game.cache.getJSON(a.JSONData.DBPers)
              , i = this.game.cache.getJSON(a.JSONData.DBPers_Texture)
              , s = this.game.cache.getImage(a.Images.DBPers, !0).base;
            dragonBones.PhaserFactory.factory.parseDragonBonesData(e),
            dragonBones.PhaserFactory.factory.parseTextureAtlasData(i, s),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.background5 = this.game.add.sprite(600, 240, a.Atlases.Interface, "bg0000"),
            this.background4 = this.game.add.sprite(200, 240, a.Atlases.Interface, "bg0000"),
            this.background5.anchor.set(.5),
            this.background4.anchor.set(.5),
            this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay.x = -50,
            this._armatureDisplay.y = 90,
            this._armatureDisplay.animation.play("idle", 0),
            this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay2.x = 50,
            this._armatureDisplay2.y = 90,
            this._armatureDisplay2.animation.play("idle", 0),
            this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay3.x = -50,
            this._armatureDisplay3.y = 90,
            this._armatureDisplay3.animation.play("idle", 0),
            this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay4.x = 50,
            this._armatureDisplay4.y = 90,
            this._armatureDisplay4.animation.play("idle", 0),
            this.selectPlayer = new g.SelectPlayer(0,this._armatureDisplay.armature,this._armatureDisplay2.armature),
            this.selectPlayer.x = 162,
            this.selectPlayer.y = 131,
            this.backgroundBase2.addChild(this.selectPlayer),
            this.musicBtn = new o.default(this.game,"",{},this.toggleMusic,this,a.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.musicBtn.sScale = 42 / this.musicBtn.btn.width,
            this.musicBtn.x = 772,
            this.musicBtn.y = 25,
            this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000"),
            this.backgroundBase2.addChild(this.musicBtn),
            this.backgroundBase2.addChild(this.background4),
            this.updateSoundButtons(),
            this.manager.matchData.matchMode = 0,
            0 === this.manager.gameMode ? (0 === this.manager.matchData.matchMode && (this.createPanel(),
            this.createDifficultySelect()),
            this.selectPlayer.setUp(0)) : (this.createP2Select(),
            this.createPanel(),
            0 === this.manager.matchData.matchMode && 4 !== l.Inventory.instance.gameMode ? (this.selectPlayer.setUp(),
            this.selectPlayer2.setUp(2)) : 1 === this.manager.matchData.matchMode ? (this.selectPlayer.setUp(1),
            this.selectPlayer2.setUp(2)) : (this.selectPlayer.setUp(),
            this.selectPlayer2.setUp())),
            this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000"),
            this.logo.anchor.set(.5);
            var n = "RANDOM MATCH";
            4 === l.Inventory.instance.gameMode ? n = "2 PLAYERS MATCH" : 0 === l.Inventory.instance.gameMode && (n = "TOURNAMENT",
            l.Inventory.instance.tournament.state = 0);
            var c = new d.default(this.game,n,a.Constants.styleTitle2,null,null,a.Atlases.Interface);
            c.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            c.setProp("#330099", 7, "#FF99FF", 15),
            this.logo.addChild(c),
            this.logo.x = 400,
            this.backgroundBase2.addChild(this.logo),
            0 === l.Inventory.instance.gameMode ? (this.playBtn = new d.default(this.game,"NEXT",a.Constants.stylePlayGreen,this.onTournament,this,a.Atlases.Interface),
            this.playBtn.setFrames("arrow20000", "arrow20000", "arrow20000", "arrow20000"),
            this.playBtn.btn.btn.x = 110,
            this.playBtn.x = 646,
            this.playBtn.y = 450,
            this.background4.addChild(this.playBtn)) : (this.playBtn = new d.default(this.game,"PLAY",a.Constants.stylePlayGreen,this.onPlay,this,a.Atlases.Interface),
            this.playBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn.x = 716,
            this.playBtn.y = 450,
            this.background4.addChild(this.playBtn)),
            this.playBtn.setProp("#000000", 7, "#FFFFFF", 15),
            this.backBtn = new d.default(this.game,"BACK",a.Constants.styleBackArrow,this.onBack,this,a.Atlases.Interface),
            this.backBtn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000"),
            this.backBtn.btn.btn.x = -110,
            this.backBtn.setProp("#330099", 7, "#FF99FF", 15),
            this.backBtn.x = 150,
            this.backBtn.y = 450,
            this.backgroundBase2.addChild(this.backBtn),
            this.backgroundBase2.addChild(this.playBtn),
            this.resize(),
            new r.default(this.game,this,this.show)
        }
        ,
        e.prototype.show = function() {
            var t = this.game.add.tween(this.logo);
            t.from({
                y: -60
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.selectPlayer),
            t.from({
                x: -520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            this.selectPlayer2 && (t = this.game.add.tween(this.selectPlayer2),
            t.from({
                x: 1140
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start()),
            this.plateDifficulty && (t = this.game.add.tween(this.plateDifficulty),
            t.from({
                y: 720
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start()),
            t = this.game.add.tween(this.playBtn),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            this.matchModePanel && (t = this.game.add.tween(this.matchModePanel),
            t.from({
                y: 720
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start())
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.logo);
            t.to({
                y: -60
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.selectPlayer),
            t.to({
                x: -520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            this.selectPlayer2 && (t = this.game.add.tween(this.selectPlayer2),
            t.to({
                x: 1140
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start()),
            this.plateDifficulty && (t = this.game.add.tween(this.plateDifficulty),
            t.to({
                y: 720
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start()),
            t = this.game.add.tween(this.playBtn),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            this.matchModePanel && (t = this.game.add.tween(this.matchModePanel),
            t.to({
                y: 720
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start())
        }
        ,
        e.prototype.render = function() {
            dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1),
            t.prototype.render.call(this)
        }
        ,
        e.prototype.createPanel = function() {
            this.matchModePanel = new m.MatchModePanel(this),
            this.matchModePanel.x = 400,
            this.matchModePanel.y = 207,
            this.backgroundBase2.addChild(this.matchModePanel),
            this.processMatchMode()
        }
        ,
        e.prototype.createDifficultySelect = function() {
            this.plateDifficulty = this.game.add.sprite(400, 370, a.Atlases.Interface, "bg0000"),
            this.plateDifficulty.anchor.set(.5);
            var t = this.game.make.image(0, 0, a.Atlases.Interface, "0bg130000");
            t.anchor.set(.5),
            t.scale.set(1, .42),
            this.plateDifficulty.addChild(t),
            t = this.game.make.image(0, 0, a.Atlases.Interface, "line0000"),
            t.anchor.set(.5),
            t.scale.set(1),
            this.plateDifficulty.addChild(t);
            var e = new c.default(this.game,0,-26,"NORMAL",a.Constants.styleDIfficulltyBg);
            e.anchor.set(.5),
            this.plateDifficulty.addChild(e);
            var i = new c.default(this.game,0,26,"HARD",a.Constants.styleDIfficulltyBg2);
            i.anchor.set(.5),
            this.plateDifficulty.addChild(i),
            e.inputEnabled = !0,
            i.inputEnabled = !0,
            e.input.useHandCursor = !0,
            i.input.useHandCursor = !0;
            var s = new d.default(this.game,"NORMAL",a.Constants.styleNormalGreen,null,null,a.Atlases.Interface);
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.setProp("#000000", 3, "#FFFFFF", 5);
            var n = new d.default(this.game,"HARD",a.Constants.styleHardGreen,null,null,a.Atlases.Interface);
            n.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            n.setProp("#000000", 3, "#FFFFFF", 5),
            this.backgroundBase2.addChild(this.plateDifficulty),
            this.plateDifficulty.addChild(s),
            this.plateDifficulty.addChild(n),
            s.y = -26,
            n.y = 26,
            n.visible = !1,
            l.Inventory.instance.tournament.difficulty = 0,
            i.events.onInputDown.add(function() {
                n.visible = !0,
                s.visible = !1,
                l.Inventory.instance.tournament.difficulty = 1
            }),
            e.events.onInputDown.add(function() {
                s.visible = !0,
                n.visible = !1,
                l.Inventory.instance.tournament.difficulty = 0
            })
        }
        ,
        e.prototype.createP2Select = function() {
            this.selectPlayer2 = new g.SelectPlayer(1,this._armatureDisplay3.armature,this._armatureDisplay4.armature),
            this.selectPlayer2.x = 638,
            this.selectPlayer2.y = 131,
            this.backgroundBase2.addChild(this.selectPlayer2)
        }
        ,
        e.prototype.processMatchMode = function() {
            if (0 === this.manager.matchData.matchMode) {
                var t = 0 === this.manager.matchData.players[0][0] ? 0 : 1
                  , e = 0 === this.manager.matchData.players[1][0] ? 0 : 1;
                this.manager.matchData.players = [[t], [e]]
            }
            0 !== this.manager.gameMode ? 2 === this.manager.matchData.matchMode ? (this.selectPlayer.setUp(1),
            this.selectPlayer2.setUp(2)) : (this.selectPlayer.setUp(),
            this.selectPlayer2.setUp(4 === this.manager.gameMode ? 0 : 2)) : this.selectPlayer.setUp(0)
        }
        ,
        e.prototype.toggleMusic = function() {
            u.default.getInstance().music ? n.default.getInstance().toggleMusic() : u.default.getInstance().sfx ? n.default.getInstance().toggleSfx() : (n.default.getInstance().toggleSfx(),
            n.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.updateSoundButtons = function() {
            var t = u.default.getInstance().music ? 0 : 1;
            t += u.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        e.prototype.onBack = function() {
            n.default.getInstance().play(a.Sounds.Click),
            0 === l.Inventory.instance.gameMode ? new h.default(this.game,this,f.default.Name) : new h.default(this.game,this,y.Menu.Name)
        }
        ,
        e.prototype.onPlay = function() {
            n.default.getInstance().play(a.Sounds.Click),
            new h.default(this.game,this,p.default.Name)
        }
        ,
        e.prototype.onTournament = function() {
            n.default.getInstance().play(a.Sounds.Click),
            this.manager.createNewTournament(),
            new h.default(this.game,this,y.TournamentState.Name)
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            this.background5.scale.set(.65 * e),
            this.background5.alignIn(this.backgroundBase2, Phaser.RIGHT_CENTER, -20, 0),
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.backBtn = null,
            this.playBtn = null,
            this.musicBtn = null,
            this._armatureDisplay = null,
            this._armatureDisplay2 = null,
            this._armatureDisplay3 = null,
            this._armatureDisplay4 = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "randomstate",
        e
    }(Phaser.State);
    e.default = _
}
, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.prototype.add = function(t) {}
        ,
        t.prototype.release = function() {}
        ,
        t.prototype.update = function(t) {}
        ,
        t.prototype.updateGraphics = function() {}
        ,
        t.prototype.start = function() {}
        ,
        t
    }();
    e.GamePhysics = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = nape.geom.Vec2
      , n = i(4)
      , a = function() {
        function t() {}
        return t.GRAVITY = new s(0,450),
        t.BALL_RADIUS = 18,
        t.BALL_GRAVMASS = 2,
        t.BALL_BOUNCE = -400,
        t.BALL_UP_VELOCITY_Y = -500,
        t.BALL_STEAL_VELOCITY_X_BASE = 400,
        t.BALL_STEAL_VELOCITY_X_ADD = 200,
        t.BALL_STEAL_VELOCITY_Y = -100,
        t.BALL_INDENT_Y_CENTER = 300,
        t.BALL_INDENT_Y_PLAYER = 340,
        t.VERTICAL_DISPERSION = .1,
        t.DISPERSION = .01,
        t.BASKET_INDENT = 25,
        t.BASKET_RADIUS = 30,
        t.BASKET_CENTER = t.BASKET_INDENT + t.BASKET_RADIUS,
        t.BASKET_CENTER2 = n.default.WIDTH - t.BASKET_CENTER,
        t.BASKET_HEIGHT = 200,
        t.BASKET_PART_RADIUS = 7,
        t.GLASS_WIDTH = 12,
        t.GLASS_HEIGHT = 120,
        t.GLASS_Y = 20 - t.GLASS_HEIGHT,
        t.SENSOR_HALF = 25,
        t.SENSOR_WIDTH = 2 * t.SENSOR_HALF,
        t.SENSOR_HEIGHT = 5,
        t.SENSOR_UP = -10,
        t.SENSOR_DOWN = 15,
        t.PLAYER_JUMP = -600,
        t.PLAYER_MOVE = 250,
        t.PLAYER_MOVE_WITH_BALL = .85 * t.PLAYER_MOVE,
        t.PLAYER_INDENT_X = 30,
        t.PLAYER_INDENT_Y = 385,
        t.STEAL_DISTANCE = 55,
        t.INDENT_GENERAL_X = 50,
        t.PAINT_START_X = 100,
        t.PAINT_MIDDLE_X = 200,
        t.DUNK_ZONE1_Y = 280,
        t.DUNK_ZONE2_Y = 300,
        t.DUNK_X = 100,
        t.DUNK_Y = 180,
        t.ALLEY_OOP_X = 160,
        t.ALLEY_OOP_Y = 150,
        t.SUPER_DASH_X1 = 150,
        t.SUPER_DASH_X2 = 650,
        t.SUPER_DASH_Y = 385,
        t.OPPONENT_DELTA = 60,
        t.IDEAL_JUMP_BALL_JUMP = .5,
        t.IDEAL_ATTACK_JUMP = .41,
        t.CHANCE_FOR_THREE = .2,
        t.CHANCE_FOR_THREE2 = .4,
        t.ATTACK_ZONE_START = 120,
        t.ATTACK_ZONE_END = 350,
        t.DASH_ZONE_START = 300,
        t.DASH_ZONE_END = 700,
        t.DEFENSE_POINT = 250,
        t.STEAL_DURATION = .3,
        t.THREE_POINTS_DISTANCE = 500,
        t.DASH_DELAY = 1,
        t.DIG_TIME = 3,
        t.ENERGY_TIME = 3,
        t
    }();
    e.ObjectsData = a
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(1)
      , n = i(7)
      , a = i(14)
      , o = i(5)
      , r = i(11)
      , h = i(4)
      , l = i(2)
      , c = function() {
        function t() {
            this.signalRestart = null,
            this.signalPause = null,
            this.signalToggleMusic = null,
            this.game = null,
            this.scl = 1,
            this.container = null
        }
        return t.prototype.release = function() {
            h.default.isDesktop || a.default.instance.container && a.default.instance.container.destroy(),
            this.game = null,
            this.helpBtn = null,
            this.pauseBtn = null,
            this.musicBtn = null,
            this.signalToggleMusic.removeAll(),
            this.signalRestart.removeAll(),
            this.signalPause.removeAll(),
            this.signalToggleMusic = null,
            this.signalRestart = null,
            this.signalPause = null,
            this.container.destroy(),
            this.container = null
        }
        ,
        t.prototype.init = function(t, e) {
            this.container = t,
            this.game = e,
            this.scl = Math.max(this.game.width, this.game.height) / s.Constants.WIDTH,
            this.scl = this.scl > 1 ? 1 : this.scl,
            this.signalRestart = new Phaser.Signal,
            this.signalPause = new Phaser.Signal,
            this.signalToggleMusic = new Phaser.Signal,
            this.helpBtn = new n.default(this.game,"",{},this.onHelp,this,s.Atlases.Gameplay),
            this.helpBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.helpBtn.sScale = 42 / this.helpBtn.btn.width * 1.33333,
            this.helpBtn.x = h.default.GAME_W - Math.round(162.66626),
            this.helpBtn.y = Math.round(33.33325),
            this.helpBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGameHelpButton0000"),
            this.pauseBtn = new n.default(this.game,"",{},this.onPause,this,s.Atlases.Gameplay),
            this.pauseBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.pauseBtn.sScale = 42 / this.pauseBtn.btn.width * 1.33333,
            this.pauseBtn.x = h.default.GAME_W - Math.round(75 * 1.33333),
            this.pauseBtn.y = this.helpBtn.y,
            this.pauseBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGamePauseButton0000"),
            this.musicBtn = new n.default(this.game,"",{},this.toggleMusic,this,s.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.musicBtn.sScale = 42 / this.musicBtn.btn.width * 1.33333,
            this.musicBtn.x = h.default.GAME_W - Math.round(28 * 1.33333),
            this.musicBtn.y = this.helpBtn.y,
            this.musicBtn.labelState = this.game.add.image(0, 0, s.Atlases.Gameplay, "InGameMusicButton0000"),
            this.updateSoundButtons(),
            h.default.isDesktop ? this.container.addChild(this.helpBtn) : this.helpBtn.destroy(),
            this.container.addChild(this.pauseBtn),
            this.container.addChild(this.musicBtn),
            h.default.isDesktop || a.default.instance.container.parent.addChild(a.default.instance.container)
        }
        ,
        t.prototype.toggleMusic = function() {
            r.default.getInstance().music ? o.default.getInstance().toggleMusic() : r.default.getInstance().sfx ? o.default.getInstance().toggleSfx() : (o.default.getInstance().toggleSfx(),
            o.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            o.default.getInstance().play(s.Sounds.Click)
        }
        ,
        t.prototype.updateSoundButtons = function() {
            var t = r.default.getInstance().music ? 0 : 1;
            t += r.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(s.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        t.prototype.resize = function(t) {
            this.game.width / this.game.height < h.default.GAME_W / h.default.GAME_H ? (this.container.scale.set(t),
            this.container.x = 0) : (this.container.scale.set(t),
            this.container.x = this.game.width / 2 - h.default.DISPLAY_W2),
            h.default.isDesktop || a.default.instance.resize(t)
        }
        ,
        t.prototype.onPause = function() {
            this.signalPause.dispatch(l.MainGameCore.PAUSE)
        }
        ,
        t.prototype.onHelp = function() {
            this.signalPause.dispatch(l.MainGameCore.HELP)
        }
        ,
        Object.defineProperty(t, "instance", {
            get: function() {
                return t._instance || (t._instance = new t),
                t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    }();
    e.default = c
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(1)
      , a = i(36)
      , o = i(7)
      , r = i(5)
      , h = i(9)
      , l = i(34)
      , c = i(30)
      , u = i(44)
      , d = i(13)
      , p = i(32)
      , f = i(4)
      , g = i(8)
      , m = i(2)
      , y = i(52)
      , v = i(16)
      , b = i(18)
      , _ = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.popup = null,
            i.backgroudBase = null,
            i.transition = null,
            i._armatureDisplay = null,
            i._armatureDisplay2 = null,
            i._armatureDisplay3 = null,
            i._armatureDisplay4 = null,
            i
        }
        return s(e, t),
        e.prototype.onBuild = function() {
            d.MainGameCore.instance.start(),
            d.MainGameCore.instance.slowSignal.removeAll(),
            d.MainGameCore.instance.menuPauseSignal.removeAll(),
            d.MainGameCore.instance.menuPauseSignal.add(this.onCallPopup, this),
            d.MainGameCore.instance.slowSignal.add(d.MainGameCore.instance.slow, d.MainGameCore.instance)
        }
        ,
        e.prototype.init = function() {
            var i = this;
            t.prototype.init.call(this),
            this.game.world.removeAll(),
            e.loadedLevel = !1,
            dragonBones.PhaserFactory.init(this.game);
            var s = this.game.cache.getJSON(n.JSONData.DBPers2)
              , o = this.game.cache.getJSON(n.JSONData.DBPers_Texture2)
              , p = this.game.cache.getImage(l.default.DBPers2, !0).base;
            dragonBones.PhaserFactory.factory.parseDragonBonesData(s),
            dragonBones.PhaserFactory.factory.parseTextureAtlasData(o, p),
            s = this.game.cache.getJSON(n.JSONData.DBHelp),
            o = this.game.cache.getJSON(n.JSONData.DBHelp_Texture),
            p = this.game.cache.getImage(l.default.DBHelp, !0).base,
            dragonBones.PhaserFactory.factory.parseDragonBonesData(s),
            dragonBones.PhaserFactory.factory.parseTextureAtlasData(o, p),
            this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall"),
            this._armatureDisplay.animation.play("idle", 0),
            this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall"),
            this._armatureDisplay2.animation.play("idle", 0),
            this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall"),
            this._armatureDisplay3.animation.play("idle", 0),
            this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerSmall"),
            this._armatureDisplay4.animation.play("idle", 0);
            var g;
            this._armatureDisplayArr = [];
            for (var m = 0; m < 5; m++)
                g = dragonBones.PhaserFactory.factory.buildArmatureDisplay("playerH" + m),
                g.animation.play("anim", 0),
                g.visible = !1,
                this._armatureDisplayArr.push(g);
            this.initData(),
            this.game.time.advancedTiming = !0,
            this.game.time.desiredFps = 40,
            d.MainGameCore.instance.init(this.game),
            c.default.instance.init(this.game.add.group(), this.game),
            (new u.GameBuilder).start(this.onBuild, this, [this._armatureDisplay, this._armatureDisplay3, this._armatureDisplay2, this._armatureDisplay4]);
            var y = 1;
            y = this.game.width / n.Constants.WIDTH,
            y = y > 1 ? 1 : y,
            this.backgroudBase = this.game.add.sprite(0, 0, a.default.Preloader, h.default.getBG()),
            this.backgroudBase.scale.set(1.33333 * y),
            this.backgroudBase.x = this.game.width / 2 - this.backgroudBase.width / 2,
            this.transition = this.game.add.tween(this.backgroudBase),
            this.transition.to({
                alpha: 0
            }, 1, Phaser.Easing.Linear.None, !1, 500),
            this.transition.onComplete.add(function() {
                if (e.loadedLevel = !0,
                i.backgroudBase.destroy(),
                i.backgroudBase = null,
                i.transition = null,
                f.default.isDesktop) {
                    i.game.input.keyboard.addKey(Phaser.Keyboard.P).onUp.add(i.onP, i)
                }
                c.default.instance.signalPause.add(i.onPause, i)
            }),
            this.transition.start(),
            r.default.getInstance().playMusic(n.Sounds.GameMusic)
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            this.resize()
        }
        ,
        e.prototype.onP = function() {
            d.MainGameCore.instance.isPaused ? this.onResume() : this.onPause()
        }
        ,
        e.prototype.onPause = function(t) {
            void 0 === t && (t = ""),
            d.MainGameCore.instance.isPaused || d.MainGameCore.instance.menuPauseSignal.dispatch(0 === t.length ? d.MainGameCore.PAUSE : t)
        }
        ,
        e.prototype.onCallPopup = function(t) {
            this.closePopup();
            var e = "GAME PAUSED";
            if (t !== d.MainGameCore.PAUSE)
                return t === d.MainGameCore.HELP ? void this.createHelpPopup() : void this.onPostMatch();
            this.createPopup();
            var i = new g.default(this.game,e,n.Constants.stylePause,null,this,a.default.Interface);
            i.y = -210,
            i.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.setProp("#330099", 6, "#FF99FF", 13),
            i.btn.label.setMaxSize(600, 90),
            i.label.setMaxSize(600, 90),
            i.setText(e),
            this.popup.getChildAt(1).addChild(i);
            var s = new g.default(this.game,"MENU",n.Constants.stylePauseBtn1,this.confirmExit,this,a.default.Interface);
            s.x = -150,
            s.y = 200,
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.setProp("#330099", 6, "#FF99FF", 13),
            this.popup.getChildAt(1).addChild(s);
            var r = new g.default(this.game,"RESUME",n.Constants.stylePauseBtn2,this.onResume,this,a.default.Interface);
            r.x = 150,
            r.y = 200,
            r.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            r.setProp("#330099", 6, "#FF99FF", 13),
            this.popup.getChildAt(1).addChild(r);
            var h = new g.default(this.game,m.Inventory.instance.matchData.matchScore[0] + " : " + m.Inventory.instance.matchData.matchScore[1],n.Constants.styleEndMatchScore,null,null,a.default.Interface);
            h.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            h.setProp("#FFFFFF", 7, "#000000", 15),
            h.y = -90,
            this.popup.getChildAt(1).addChild(h);
            var l = m.Inventory.instance.matchData.teams[0] - 1
              , c = m.Inventory.instance.matchData.teams[1] - 1
              , u = this.game.add.image(-270, -90, a.default.Interface, "EmblemsBg0000");
            u.anchor.set(.5),
            u.scale.set(1.18),
            this.popup.getChildAt(1).addChild(u);
            var p = this.game.add.image(270, -90, a.default.Interface, "EmblemsBg0000");
            p.anchor.set(.5),
            p.scale.set(1.18),
            this.popup.getChildAt(1).addChild(p),
            u = this.game.add.image(-270, -90, a.default.Interface, "emptyBg0000"),
            u.scale.set(.8),
            this.popup.getChildAt(1).addChild(u),
            p = this.game.add.image(270, -90, a.default.Interface, "emptyBg0000"),
            p.scale.set(.8),
            this.popup.getChildAt(1).addChild(p),
            u.loadTexture(a.default.Interface, "Emblems00" + (l < 10 ? "0" : "") + l),
            p.loadTexture(a.default.Interface, "Emblems00" + (c < 10 ? "0" : "") + c),
            u.anchor.set(.5),
            p.anchor.set(.5);
            var f = new o.default(this.game,"",null,this.onMoreGames,this,a.default.Preloader);
            f.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            f.y = 80,
            this.popup.getChildAt(1).addChild(f);
            var y = 1;
            y = this.game.width / n.Constants.WIDTH,
            y = y > 1 ? 1 : y,
            this.resizePopup(y)
        }
        ,
        e.prototype.buildText = function(t, e, i, s) {
            void 0 === i && (i = 30),
            void 0 === s && (s = n.Constants.stylePopupContentSmall);
            for (var r, h = 0; h < t.length; h++)
                r = new o.default(this.game,t[h],s,null,null,a.default.Interface),
                r.y = h * i + 8,
                r.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                r.btn.inputEnabled = !1,
                0 === h && r.label.addColor("#66CCFF", 11),
                1 === h && (r.label.addColor("#66CCFF", 0),
                r.label.addColor("#ffffff", 5)),
                2 === h && r.label.addColor("#66CCFF", 10),
                e.label.parent.addChild(r)
        }
        ,
        e.prototype.buildText2 = function(t, e, i, s) {
            void 0 === i && (i = 30),
            void 0 === s && (s = n.Constants.stylePopupContent);
            for (var r, h = 0; h < t.length; h++)
                r = new o.default(this.game,t[h],s,null,null,a.default.Interface),
                r.y = h * i - 30,
                r.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                r.btn.inputEnabled = !1,
                e.label.parent.addChild(r)
        }
        ,
        e.prototype.onForum = function() {
            m.Inventory.instance.checkForumAchievement(),
            window.open("https://forum.y8.com/t/basketball-legends/1741", "_blank")
        }
        ,
        e.prototype.onMoreGames = function() {
            window.open(v.default.getInstance().getUrl(v.default.Current), "_blank")
        }
        ,
        e.prototype.onScoreList = function() {}
        ,
        e.prototype.disposePopup = function() {
            this.popup && this.popup.destroy(!0),
            this.popup = null,
            d.MainGameCore.instance.countDown.activate()
        }
        ,
        e.prototype.backgroundPopup = function() {
            this.popup = this.game.add.sprite(350, 250, a.default.Interface, "bg0000"),
            this.popup.anchor.set(.5),
            this.popup.scale.set(1.33333);
            var t = this.game.add.sprite(0, 0, a.default.Interface, "bg0000");
            t.width = this.game.width,
            t.height = this.game.height,
            t.inputEnabled = !0,
            t.anchor.set(.5),
            this.popup.addChild(t),
            this.world.addChild(c.default.instance.container)
        }
        ,
        e.prototype.createPopup = function() {
            null !== this.popup && this.disposePopup(),
            this.backgroundPopup();
            var t = this.game.add.sprite(0, 0, a.default.Preloader, h.default.BASE_BG[h.default.INDEX_BG] + "0000");
            t.anchor.set(.5),
            this.popup.addChild(t),
            d.MainGameCore.instance.isPlaying = !1,
            d.MainGameCore.instance.isPaused = !0,
            c.default.instance.pauseBtn.visible = !1,
            c.default.instance.helpBtn && (c.default.instance.helpBtn.visible = !1)
        }
        ,
        e.prototype.createHelpPopup = function() {
            null !== this.popup && this.disposePopup(),
            this.backgroundPopup();
            var t = this.game.add.sprite(0, 0, a.default.Interface, "0bg100000");
            t.anchor.set(.5),
            t.scale.set(2.2, 1.2),
            this.popup.addChild(t),
            d.MainGameCore.instance.isPlaying = !1,
            d.MainGameCore.instance.isPaused = !0,
            c.default.instance.pauseBtn.visible = !1,
            c.default.instance.helpBtn && (c.default.instance.helpBtn.visible = !1);
            var e = this.game.cache.getJSON(n.JSONData.Players)
              , i = this.parseStaticGraphic(e, 2);
            this.popup.addChild(i),
            i = 4 === m.Inventory.instance.gameMode ? this.parseStaticGraphic(e, 1) : this.parseStaticGraphic(e, 0),
            this.popup.addChild(i);
            var s = new g.default(this.game,"OK",n.Constants.styleOKGreen,this.closePopup,this,a.default.Interface);
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.y = 215,
            s.setProp("#330099", 5, "#FF99FF", 10),
            this.popup.addChild(s),
            s = new g.default(this.game,"HOW TO PLAY",n.Constants.styleHelpTitle,null,null,a.default.Interface),
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.y = -210,
            s.setProp("#330099", 5, "#FF99FF", 10),
            this.popup.addChild(s),
            this.resizePopup(1)
        }
        ,
        e.prototype.parseStaticGraphic = function(t, e) {
            for (var i = this.game.make.group(this.popup), s = null, r = -10, h = 0, l = t["control" + e], c = 0; c < 40; c++)
                if (l.hasOwnProperty(c))
                    if (h = 0,
                    0 === l[c].g.indexOf("arm_")) {
                        s = this.game.make.image(0, 0, a.default.Interface, "loginSelect0000"),
                        s.anchor.set(.5, .95),
                        s.x = l[c].x,
                        s.y = l[c].y + r,
                        i.addChild(s);
                        var u = parseInt(l[c].g.split("arm_")[1])
                          , d = this._armatureDisplayArr[u];
                        d.x = l[c].x + h,
                        d.y = l[c].y + r,
                        d.scale.set(.9),
                        d.visible = !0,
                        i.addChild(d),
                        d.animation.play("anim", 0)
                    } else if (0 === l[c].g.indexOf("txt_")) {
                        var p = l[c].g.split("txt_")[1]
                          , f = n.Constants.styleHelpLetter
                          , g = " ";
                        p.length > 3 ? f = n.Constants.styleHelpTxt0 : (p = p.charAt(0),
                        "X" === p && (h = 2),
                        "W" === p && (h = 1)),
                        (l[c].g.indexOf("Attack") > 0 || l[c].g.indexOf("Defense") > 0) && (f = n.Constants.styleHelpTxt1),
                        (l[c].g.indexOf("action") > 0 || l[c].g.indexOf("super") > 0) && (f = n.Constants.styleHelpTxt0,
                        g = " - "),
                        s = new o.default(this.game,g + p,f,null,null,a.default.Gameplay),
                        s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                        p.length > 3 && (s.label.stroke = "#0033FF",
                        s.label.strokeThickness = 1),
                        s.label.anchor.set(0),
                        s.x = l[c].x + h,
                        s.y = l[c].y + r,
                        i.addChild(s)
                    } else
                        s = this.game.make.image(l[c].x, l[c].y, a.default.Interface, l[c].g + "0000"),
                        s.anchor.set(.5),
                        s.x = l[c].x,
                        s.y = l[c].y + r,
                        s.angle = l[c].r,
                        s.scale.set(l[c].scaleX, l[c].scaleY),
                        l[c].g.indexOf("plate") > 0 ? i.addChildAt(s, 0) : i.addChild(s);
            return i
        }
        ,
        e.prototype.resizePopup = function(t) {
            if (null !== this.popup) {
                var e = this.popup.removeChildAt(0);
                e.width = this.game.width,
                e.height = this.game.height,
                this.popup.x = this.world.bounds.centerX,
                this.popup.y = 240 * t * 1.33333,
                this.popup.addChildAt(e, 0),
                this.popup.scale.set(1.33333 * t)
            }
        }
        ,
        e.prototype.closePopup = function() {
            if (this._armatureDisplayArr[0].visible)
                for (var t = 0; t < this._armatureDisplayArr.length; t++) {
                    var e = this._armatureDisplayArr[t];
                    e.parent.removeChild(e),
                    e.visible = !1
                }
            d.MainGameCore.instance.isPaused = !1,
            c.default.instance.pauseBtn.visible = !0,
            c.default.instance.helpBtn && (c.default.instance.helpBtn.visible = !0),
            c.default.instance.pauseBtn.onOut(),
            this.disposePopup()
        }
        ,
        e.prototype.onResume = function() {
            this.closePopup()
        }
        ,
        e.prototype.onPostMatch = function() {
            new h.default(this.game,0,y.default.Name)
        }
        ,
        e.prototype.confirmExit = function() {
            var t = new o.default(this.game,"",null,null,null,a.default.Interface);
            t.setFrames("0bg100000", "0bg100000", "0bg100000", "0bg100000"),
            t.btn.scale.set(1.3, 1);
            var e = this.game.add.sprite(0, 0, a.default.Interface, "black0000");
            e.width = this.game.width + 500,
            e.height = this.game.height + 500,
            e.inputEnabled = !0,
            e.anchor.set(.5),
            e.alpha = .5,
            t.btn.parent.addChildAt(e, 0);
            var i = new g.default(this.game,"WARNING!!",n.Constants.styleWarningLeave,null,this,a.default.Interface);
            i.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.setProp("#000000", 5, "#FFFFFF", 10),
            i.y = -95,
            t.addChild(i);
            var s = this.game.add.image(0, -55, a.default.Interface, "line0000");
            s.anchor.set(.5),
            t.label.parent.addChild(s),
            s = this.game.add.image(0, 55, a.default.Interface, "line0000"),
            s.anchor.set(.5),
            t.label.parent.addChild(s),
            this.popup.getChildAt(1).addChild(t);
            var r = ["IF YOU CONTINUE,", "YOU WIL LOST", "YOUR PROGRESS"];
            this.buildText2(r, t, 30);
            var h = new g.default(this.game,"OK",n.Constants.stylePopupPlay,this.onMenu,this,a.default.Interface);
            h.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            h.setProp("#000000", 6, "#FFFFFF", 12),
            h.x = -110,
            h.y = 90,
            t.label.parent.addChild(h),
            h = new g.default(this.game,"CANCEL",n.Constants.stylePopupCancel,function() {
                t.destroy()
            }
            ,this,a.default.Interface),
            h.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            h.setProp("#000000", 6, "#FFFFFF", 12),
            h.x = 60,
            h.y = 90,
            t.label.parent.addChild(h)
        }
        ,
        e.prototype.onMenu = function() {
            this.closePopup(),
            m.Inventory.instance.checkQuickMatch() ? new h.default(this.game,0,p.default.Name) : 0 === m.Inventory.instance.gameMode ? new h.default(this.game,0,b.default.Name) : new h.default(this.game,0,p.default.Name)
        }
        ,
        e.prototype.update = function() {
            if (!e.isAdsPause && (t.prototype.update.call(this),
            e.loadedLevel)) {
                if (this.isFirstUpdate)
                    return this.isFirstUpdate = !1,
                    this.timeAcc = 0,
                    void (this.prevTimeMS = Date.now());
                for (this.currTimeMS = Date.now(),
                this.deltaTime = (this.currTimeMS - this.prevTimeMS) / 1e3,
                this.deltaTime > e.MAX_FRAME_TIME && (this.deltaTime = e.MAX_FRAME_TIME),
                this.prevTimeMS = this.currTimeMS,
                this.timeAcc += this.deltaTime; this.timeAcc >= e.DESIRED_FRAME_TIME; )
                    this.updateGameController(e.DESIRED_FRAME_TIME),
                    this.timeAcc -= e.DESIRED_FRAME_TIME;
                d.MainGameCore.instance.isPaused || d.MainGameCore.instance.physics.updateGraphics()
            }
        }
        ,
        e.prototype.resize = function() {
            t.prototype.resize.call(this);
            var e = 1;
            e = this.game.width / n.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            d.MainGameCore.instance.view.resize(),
            d.MainGameCore.instance.view.scale.set(1.3333333 * e),
            d.MainGameCore.instance.view.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            c.default.instance.resize(e),
            this.resizePopup(e)
        }
        ,
        e.prototype.shutdown = function() {
            this.closePopup(),
            this._armatureDisplay = null,
            this._armatureDisplay2 = null,
            this._armatureDisplay3 = null,
            this._armatureDisplay4 = null,
            d.MainGameCore.instance.release(),
            c.default.instance.release(),
            t.prototype.shutdown.call(this)
        }
        ,
        e.prototype.render = function() {
            1 !== d.MainGameCore.instance.timeScale ? 0 === d.MainGameCore.instance.timeScale ? dragonBones.PhaserFactory.factory.dragonBones.advanceTime(.3 * f.default.STEP) : dragonBones.PhaserFactory.factory.dragonBones.advanceTime(f.default.STEP * d.MainGameCore.instance.timeScale) : dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1),
            t.prototype.render.call(this)
        }
        ,
        e.prototype.initData = function() {
            this.isFirstUpdate = !0
        }
        ,
        e.prototype.updateGameController = function(t) {
            d.MainGameCore.instance.update(t)
        }
        ,
        e.Name = "gameplay",
        e.pause = !1,
        e.MAX_FRAME_TIME = .1,
        e.DESIRED_FRAME_TIME = .025,
        e.isAdsPause = !1,
        e.loadedLevel = !1,
        e
    }(Phaser.State);
    e.default = _
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(4)
      , c = i(2)
      , u = i(10)
      , d = i(16)
      , p = i(11)
      , f = i(8)
      , g = i(31)
      , m = i(18)
      , y = i(33)
      , v = i(0)
      , b = i(26)
      , _ = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.popup = null,
            i.popup_btn = null,
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll()
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            c.PlayersData.setupPlayers(),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.background4 = this.game.add.sprite(400, 290, a.Atlases.Interface, "bg0000");
            var e = null;
            e = this.game.add.sprite(-185, 66, a.Atlases.Interface, "body00000"),
            e.anchor.set(.5),
            this.background4.addChild(e),
            e = this.game.add.sprite(230, 55, a.Atlases.Interface, "body10000"),
            e.anchor.set(.5),
            this.background4.addChild(e),
            e = this.game.add.sprite(0, 15, a.Atlases.Interface, "0bg100000"),
            e.anchor.set(.5),
            e.scale.set(1.1, .9),
            this.background4.addChild(e),
            e = this.game.add.sprite(-213, -50, a.Atlases.Interface, "head00000"),
            e.anchor.set(.5),
            e.scale.set(.95),
            this.background4.addChild(e),
            e = this.game.add.sprite(215, -55, a.Atlases.Interface, "head10000"),
            e.anchor.set(.5),
            e.scale.set(.95),
            this.background4.addChild(e),
            this.background4.anchor.set(.5),
            this.playBtn1 = new f.default(this.game,"1 PLAYER",a.Constants.stylePlay,this.start1Player,this,a.Atlases.Interface),
            this.playBtn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn1.y = -115,
            this.playBtn1.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn1),
            this.playBtn4 = new f.default(this.game,"CREDITS",a.Constants.stylePlay,this.onCredits,this,a.Atlases.Interface),
            this.playBtn4.y = 140,
            this.playBtn4.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn4.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn4),
            this.playBtn2 = new f.default(this.game,"2 PLAYERS",a.Constants.stylePlay,this.start2Player,this,a.Atlases.Interface),
            this.playBtn2.y = -45,
            this.playBtn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn2.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn2),
            this.playBtn3 = new f.default(this.game,"QUICK",a.Constants.stylePlay2,this.startQuickMath,this,a.Atlases.Interface),
            this.playBtn3.y = 70,
            this.playBtn3.label.parent.y = -50,
            this.playBtn3.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn3.setProp("#330099", 5, "#FF99FF", 10),
            this.background4.addChild(this.playBtn3);
            var i = new f.default(this.game,"MATCH",a.Constants.stylePlay2,null,null,a.Atlases.Interface);
            i.label.parent.y = 50,
            i.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.setProp("#330099", 5, "#FF99FF", 10),
            i.inputEnableChildren = !0,
            this.playBtn3.label.addChild(i),
            l.default.isDesktop || (this.playBtn2.visible = !1,
            this.playBtn1.y += 35,
            this.playBtn4.y += -35,
            this.playBtn3.y += -35),
            this.leaderBoardBtn = new o.default(this.game,"",null,this.onScoreList,this,a.Atlases.Interface),
            this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.leaderBoardBtn.sScale = .7,
            this.leaderBoardBtn.sLabelScale = .7;
            var s = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
            s.anchor.set(.5),
            this.leaderBoardBtn.label.parent.addChild(s),
            this.achievmentBtn = new o.default(this.game,"",null,this.onAchievment,this,a.Atlases.Gameplay),
            this.achievmentBtn.sScale = 42 / this.achievmentBtn.btn.width,
            this.achievmentBtn.x = 730,
            this.achievmentBtn.y = 25,
            this.achievmentBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000");
            var n = this.game.add.image(0, 0, a.Atlases.Interface, "ach_icon0000");
            n.anchor.set(.5),
            this.achievmentBtn.label.parent.addChild(n),
            this.logo = this.game.add.sprite(400, 65, a.Atlases.Preloader, "logo0000"),
            this.logo.anchor.set(.5),
            this.backgroundBase2.addChild(this.logo),
            this.musicBtn = new o.default(this.game,"",{},this.toggleMusic,this,a.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.achievmentBtn.sScale = this.musicBtn.sScale = 42 / this.musicBtn.btn.width,
            this.musicBtn.x = 772,
            this.musicBtn.y = 25,
            this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000"),
            this.backgroundBase2.addChild(this.musicBtn),
            this.textVersion = new u.default(this.game,0,465," " + a.Constants.VERSION,a.Constants.styleVersion),
            this.backgroundBase2.addChild(this.textVersion),
            this.branding2 = new o.default(this.game,"",null,this.onMoreGames,this,a.Atlases.Preloader),
            this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            this.branding2.x = 698,
            this.branding2.y = 444,
            this.updateSoundButtons(),
            this.backgroundBase2.addChild(this.achievmentBtn),
            this.backgroundBase2.addChild(this.leaderBoardBtn),
            this.leaderBoardBtn.x = 730,
            this.leaderBoardBtn.y = 150,
            this.backgroundBase2.addChild(this.background4),
            this.backgroundBase2.addChild(this.branding2),
            this.leaderBoardBtn.visible = !1,
            this.resize(),
            new r.default(this.game,this,this.show)
        }
        ,
        e.prototype.show = function() {
            var t = this.game.add.tween(this.background4);
            t.from({
                y: 800
            }, l.default.PRELOADER_TIME, v.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.from({
                y: -145
            }, l.default.PRELOADER_TIME, v.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.from({
                x: 1600
            }, l.default.PRELOADER_TIME, v.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.from({
                x: 1600
            }, l.default.PRELOADER_TIME, v.Easing.Back.Out),
            t.start()
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.background4);
            t.to({
                y: 800
            }, l.default.PRELOADER_TIME),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.to({
                y: -145
            }, l.default.PRELOADER_TIME),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.to({
                x: 1600
            }, l.default.PRELOADER_TIME, v.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                x: 1600
            }, l.default.PRELOADER_TIME, v.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.onMoreGames = function() {
            window.open(d.default.getInstance().getUrl(d.default.Current), "_blank")
        }
        ,
        e.prototype.showBanner = function() {
            if ("undefined" != typeof gdsdk && "undefined" !== gdsdk.showBanner)
                var t = gdsdk.showBanner()
        }
        ,
        e.prototype.start1Player = function() {
            n.default.getInstance().play(a.Sounds.Click),
            c.Inventory.instance.matchData.resetScore(),
            c.Inventory.instance.gameMode = 0,
            c.Inventory.instance.matchData.matchMode = 0,
            this.showBanner(),
            new h.default(this.game,this,m.default.Name)
        }
        ,
        e.prototype.start2Player = function() {
            n.default.getInstance().play(a.Sounds.Click),
            c.Inventory.instance.matchData.resetScore(),
            c.Inventory.instance.gameMode = 4,
            c.Inventory.instance.matchData.matchMode = 0,
            this.showBanner(),
            new h.default(this.game,this,b.default.Name)
        }
        ,
        e.prototype.startQuickMath = function() {
            n.default.getInstance().play(a.Sounds.Click),
            c.Inventory.instance.gameMode = 2,
            c.Inventory.instance.matchData.matchMode = 0,
            this.showBanner(),
            new h.default(this.game,this,g.default.Name)
        }
        ,
        e.prototype.onScoreList = function() {
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.onAchievment = function() {
            n.default.getInstance().play(a.Sounds.Click),
            new h.default(this.game,this,y.default.Name)
        }
        ,
        e.prototype.toggleMusic = function() {
            p.default.getInstance().music ? n.default.getInstance().toggleMusic() : p.default.getInstance().sfx ? n.default.getInstance().toggleSfx() : (n.default.getInstance().toggleSfx(),
            n.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.updateSoundButtons = function() {
            var t = p.default.getInstance().music ? 0 : 1;
            t += p.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        e.prototype.onCredits = function() {
            this.createPopup();
            var t = 19
              , e = new f.default(this.game,"CREDITS",a.Constants.styleCredits3,null,null,a.Atlases.Interface);
            e.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            e.setProp("#330099", 5, "#FF99FF", 10),
            e.y = -192,
            this.popup.getChildAt(1).addChild(e);
            for (var i, s = [" ", " ", " ", " ", " ", "CEO: Konstantin Matrunchik", "Coding: Yuriy Borozenets,", "Dmytro Borozenets", "Art: Andrey Zdyshchuk", "Roman Padaliuk", "Game Design: Vasiliy Kachor", "Ported by iriysoft.com"], n = 0; n < s.length; n++)
                i = new o.default(this.game,s[n],a.Constants.styleCredits2,null,this,a.Atlases.Interface),
                i.y = 19 * n - 48,
                i.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                i.btn.inputEnabled = !1,
                this.popup.getChildAt(1).addChild(i);
            this.popup_btn = new f.default(this.game,"BACK",a.Constants.styleBackArrow,this.disposePopup,this,a.Atlases.Interface),
            this.popup_btn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000"),
            this.popup_btn.btn.btn.x = -110,
            this.popup_btn.x = -250,
            this.popup_btn.y = 200,
            this.popup_btn.setProp("#330099", 5, "#FF99FF", 10);
            var r = new o.default(this.game,"",{},this.onLogo,this,a.Atlases.Interface);
            r.setFrames("logo_mad0000", "logo_mad0000", "logo_mad0000", "logo_mad0000"),
            r.position.set(0, -92),
            r.scale.set(.87),
            this.popup.getChildAt(1).addChild(r);
            var h = new o.default(this.game,"",{},this.onVK,this,a.Atlases.Interface);
            h.setFrames("vk_icon0000", "vk_icon0000", "vk_icon0000", "vk_icon0000"),
            h.position.set(0, 7),
            h.scale.set(.9),
            this.popup.getChildAt(1).addChild(h);
            var l = new o.default(this.game,"",{},this.onFB,this,a.Atlases.Interface);
            l.setFrames("fb_icon0000", "fb_icon0000", "fb_icon0000", "fb_icon0000"),
            l.position.set(70, 7),
            l.scale.set(.9),
            this.popup.getChildAt(1).addChild(l);
            var c = new o.default(this.game,"",{},this.onTW,this,a.Atlases.Interface);
            c.setFrames("tw_icon0000", "tw_icon0000", "tw_icon0000", "tw_icon0000"),
            c.position.set(-70, 7),
            c.scale.set(.9),
            this.popup.getChildAt(1).addChild(c),
            this.popup.getChildAt(1).addChild(this.popup_btn);
            var u = null
              , d = this.game.add.group();
            this.popup.getChildAt(1).addChildAt(d, 0),
            u = this.game.add.sprite(-175, 66, a.Atlases.Interface, "body00000"),
            u.anchor.set(.5),
            d.addChild(u),
            u = this.game.add.sprite(220, 55, a.Atlases.Interface, "body10000"),
            u.anchor.set(.5),
            d.addChild(u),
            u = this.game.add.sprite(0, 0, a.Atlases.Interface, "0bg100000"),
            u.anchor.set(.5),
            u.scale.set(1),
            d.addChild(u),
            u = this.game.add.sprite(-203, -50, a.Atlases.Interface, "head00000"),
            u.anchor.set(.5),
            u.scale.set(.95),
            d.addChild(u),
            u = this.game.add.sprite(205, -55, a.Atlases.Interface, "head10000"),
            u.anchor.set(.5),
            u.scale.set(.95),
            d.addChild(u),
            this.resize()
        }
        ,
        e.prototype.onLogo = function() {
            window.open("http://madpuffers.com/", "_blank")
        }
        ,
        e.prototype.onVK = function() {
            window.open("https://vk.com/madpuffers", "_blank")
        }
        ,
        e.prototype.onFB = function() {
            window.open("https://www.facebook.com/madpuffers", "_blank")
        }
        ,
        e.prototype.onTW = function() {
            window.open("https://twitter.com/MadPuffers", "_blank")
        }
        ,
        e.prototype.disposePopup = function() {
            this.popup.destroy(),
            this.popup = null,
            this.popup_btn.destroy(),
            this.popup_btn = null
        }
        ,
        e.prototype.backgroundPopup = function() {
            this.popup = this.game.add.sprite(350, 280, a.Atlases.Interface, "bg0000"),
            this.popup.anchor.set(.5),
            this.popup.scale.set(1.33333);
            var t = this.game.add.sprite(0, 0, a.Atlases.Interface, "black0000");
            t.width = this.game.width + 500,
            t.height = this.game.height + 500,
            t.inputEnabled = !0,
            t.anchor.set(.5),
            this.popup.addChild(t)
        }
        ,
        e.prototype.createPopup = function() {
            null !== this.popup && this.disposePopup(),
            this.backgroundPopup();
            var t = this.game.add.sprite(0, -15, a.Atlases.Interface, "0bg100000");
            t.anchor.set(.5),
            this.popup.addChild(t)
        }
        ,
        e.prototype.resizePopup = function(t) {
            if (null !== this.popup) {
                var e = this.popup.removeChildAt(0);
                e.width = this.game.width + 500,
                e.height = this.game.height + 500,
                this.popup.x = this.world.bounds.centerX,
                this.popup.y = 260 * t,
                this.popup.addChildAt(e, 0),
                this.popup.scale.set(t)
            }
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            this.resizePopup(e),
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.popup = null,
            this.popup_btn = null,
            this.playBtn1 = null,
            this.playBtn2 = null,
            this.playBtn3 = null,
            this.achievmentBtn = null,
            this.leaderBoardBtn = null,
            this.branding2 = null,
            this.musicBtn = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "menu",
        e
    }(Phaser.State);
    e.default = _
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(4)
      , c = i(2)
      , u = i(8)
      , d = i(18)
      , p = i(12)
      , f = i(0)
      , g = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll()
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.backBtn = new u.default(this.game,"BACK",a.Constants.styleBackArrow,this.onBack,this,a.Atlases.Interface),
            this.backBtn.setFrames("arrow0000", "arrow0000", "arrow0000", "arrow0000"),
            this.backBtn.btn.btn.x = -110,
            this.backBtn.setProp("#330099", 7, "#FF99FF", 15),
            this.backBtn.x = 130,
            this.backBtn.y = 450,
            this.backBtn.scale.set(.8, 1),
            this.backgroundBase2.addChild(this.backBtn),
            this.textHintArr = [];
            for (var e = 0; e < a.Constants.hints.length; e++) {
                var i = new u.default(this.game,a.Constants.hints[e],a.Constants.styleAchievDiscr,null,null,a.Atlases.Achiev);
                i.setFrames("hadr_ach_icon0000", "hadr_ach_icon0000", "hadr_ach_icon0000", "hadr_ach_icon0000"),
                i.btn.btn.visible = !1,
                i.btn.label.setMaxSize(600, 55),
                i.label.setMaxSize(600, 55),
                i.x = 500,
                i.y = 450,
                this.backgroundBase2.addChild(i),
                i.setText(a.Constants.hints[e]),
                i.setProp(null, 6, null, 12),
                this.textHintArr.push(i),
                i.visible = !1
            }
            this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000"),
            this.logo.anchor.set(.5);
            var s = new u.default(this.game,"ACHIEVEMENTS",a.Constants.stylePreMatchTop,null,null,a.Atlases.Interface);
            s.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            s.setProp("#330099", 7, "#FF99FF", 15),
            this.logo.addChild(s);
            var n = this.game.cache.getJSON(a.JSONData.Players), l;
            this.btns = this.game.add.group(),
            this.backgroundBase2.addChild(this.btns),
            this.backgroundBase2.addChild(this.logo);
            for (var d, e = 0; e < 19; e++) {
                if (l = new o.default(this.game,"",a.Constants.stylePopupContentSmall,this.onMouseOver,this,a.Atlases.Achiev),
                e >= 15) {
                    var p = 0;
                    switch (e) {
                    case 15:
                        p = 2;
                        break;
                    case 16:
                        p = 10;
                        break;
                    case 17:
                        p = 1;
                        break;
                    case 18:
                        p = 14
                    }
                    l.setFrames("icon_a" + p + "0000", "icon_a" + p + "0000", "icon_a" + p + "0000", "icon_a" + p + "0000"),
                    l.id = e + "",
                    d = new Phaser.Image(this.game,-45,-45,a.Atlases.Achiev,"hadr_ach_icon0000"),
                    d.scale.set(.9),
                    l.btn.parent.addChild(d)
                } else
                    l.id = e + "",
                    l.setFrames("icon_a" + e + "0000", "icon_a" + e + "0000", "icon_a" + e + "0000", "icon_a" + e + "0000");
                l.position.set(434 + n["a" + e].x, 240 + n["a" + e].y),
                l.btn.events.onInputOver.add(this.onMouseOver, this),
                l.btn.events.onInputDown.add(this.onMouseOver, this),
                l.btn.events.onInputOut.add(this.onMouseOut, this);
                var f = a.Constants.aNamesScreen.indexOf(a.Constants.aNames[parseInt(l.id)]);
                c.Inventory.instance.achievsMgr.getValuesForRead()[f] >= 1 || (l.btn.tint = 3355443),
                this.btns.addChild(l)
            }
            new r.default(this.game,this,this.show),
            this.resize()
        }
        ,
        e.prototype.tweenBtn = function(t) {
            var e = this.game.add.tween(t);
            e.from({
                y: -290
            }, l.default.PRELOADER_TIME, f.Easing.Back.Out),
            e.start()
        }
        ,
        e.prototype.tweenBtnHide = function(t) {
            var e = this.game.add.tween(t);
            e.to({
                y: -290
            }, l.default.PRELOADER_TIME, f.Easing.Back.Out),
            e.start()
        }
        ,
        e.prototype.show = function() {
            this.btns.forEach(this.tweenBtn, this, !0);
            var t = this.game.add.tween(this.logo);
            t.from({
                y: -60
            }, l.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.from({
                y: 520
            }, l.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.hide = function() {
            this.btns.forEach(this.tweenBtnHide, this, !0);
            var t = this.game.add.tween(this.logo);
            t.to({
                y: -60
            }, l.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.to({
                y: 520
            }, l.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.onMouseOver = function(t) {
            for (var e = parseInt(t.parent.parent.id), i = 0; i < this.textHintArr.length; i++) {
                this.textHintArr[i].visible = !1
            }
            this.textHintArr[e].visible = !0
        }
        ,
        e.prototype.onMouseOut = function(t) {
            for (var e = 0; e < this.textHintArr.length; e++) {
                this.textHintArr[e].visible = !1
            }
        }
        ,
        e.prototype.onBack = function() {
            n.default.getInstance().play(a.Sounds.Click),
            h.default.prevState[0] === p.Menu.Name ? new h.default(this.game,this,p.Menu.Name) : new h.default(this.game,this,d.default.Name)
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.backgroundBase2 = null,
            this.logo = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "achievment",
        e
    }(Phaser.State);
    e.default = g
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.DBHelp = "data3",
        t.DBPers2 = "data2",
        t.DBPers = "data",
        t.preloadList = [],
        t.list = [t.DBHelp, t.DBPers2, t.DBPers],
        t
    }();
    e.default = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.VERSION = "1.0.8g",
        t.GAME_SCALE = 1,
        t.CALCULATED_WIDTH = 0,
        t.CALCULATED_HEIGHT = 0,
        t.WIDTH = 1066,
        t.HEIGHT = 640,
        t.LANDSCAPE_LOCKED = !0,
        t.PORTRAIT_LOCKED = !1,
        t.GAME_DISTRIBUTION_LOCAL_ID = "",
        t.STORAGE_KEY = "bb_test",
        t.STORAGE_KEY_SFX = "bb_sfx_sv",
        t.styleFPS = {
            font: "24px Impact",
            fill: "#FF00FF"
        },
        t.styleTime = {
            font: "15px Impact",
            fill: "#DDD9D7"
        },
        t.stylePreMatchTop = {
            font: "60px Impact",
            fill: "#FFFFFF"
        },
        t.styleEndMatchTop = {
            font: "60px Impact",
            fill: "#FFFFFF"
        },
        t.stylePreMatchState = {
            font: "40px Impact",
            fill: "#FFFFFF"
        },
        t.stylePreMatchScore = {
            font: "80px CfCrackBold",
            fill: "#FEAE00"
        },
        t.styleEndMatchScore = {
            font: "90px CfCrackBold",
            fill: "#FEAE00"
        },
        t.stylePreMatchNames = {
            font: "20px Impact",
            fill: "#FFFFFF"
        },
        t.styleIDnetScore = {
            font: "18px Impact2",
            fill: "#FFFFFF"
        },
        t.styleIDnetScore2 = {
            font: "18px Impact2",
            fill: "#FF9900"
        },
        t.styleIDnetBestScore = {
            font: "18px Impact2",
            fill: "#FFFFFF"
        },
        t.styleIDnetBestScore2 = {
            font: "18px Impact2",
            fill: "#FF9900"
        },
        t.styleHintSkillKey = {
            font: "14px Impact",
            fill: "#1E292E"
        },
        t.stylePlay = {
            font: "40px Impact",
            fill: "#00CCFF"
        },
        t.stylePlay3 = {
            font: "40px Impact",
            fill: "#00CCFF"
        },
        t.stylePauseBtn1 = {
            font: "42px Impact",
            fill: "#FF9900"
        },
        t.stylePauseBtn2 = {
            font: "42px Impact",
            fill: "#00CCFF"
        },
        t.stylePlayLogin = {
            font: "42px Impact",
            fill: "#B1FE00"
        },
        t.stylePlayGreen = {
            font: "40px Impact",
            fill: "#B1FE00"
        },
        t.styleNormalGreen = {
            font: "25px Impact",
            fill: "#C254FF"
        },
        t.styleHardGreen = {
            font: "35px Impact",
            fill: "#C254FF"
        },
        t.styleDIfficulltyBg = {
            font: "25px Impact",
            fill: "#FFFFFF"
        },
        t.styleDIfficulltyBg2 = {
            font: "35px Impact",
            fill: "#FFFFFF"
        },
        t.stylePlay2 = {
            font: "40px Impact",
            fill: "#CDF00F"
        },
        t.stylePlay4 = {
            font: "40px Impact",
            fill: "#FF9900"
        },
        t.styleAchievDiscr = {
            font: "24px Impact",
            fill: "#FF9900"
        },
        t.styleTitle0 = {
            font: "88px Impact",
            fill: "#FFFFFF"
        },
        t.styleTitle1 = {
            font: "88px Impact",
            fill: "#000000"
        },
        t.styleTitle2 = {
            font: "34px Impact",
            fill: "#00CCFF"
        },
        t.styleTitleFinalTournamet = {
            font: "40px Impact",
            fill: "#FFFFFF"
        },
        t.styleVS = {
            font: "25px Impact",
            fill: "#FFFFFF"
        },
        t.styleVS2 = {
            font: "25px Impact",
            fill: "#C254FF"
        },
        t.styleCPU = {
            font: "10px Impact",
            fill: "#FFFFFF"
        },
        t.styleCPU2 = {
            font: "10px Impact",
            fill: "#C254FF"
        },
        t.stylePause = {
            font: "42px Impact",
            fill: "#FFFFFF"
        },
        t.styleWarningLeave = {
            font: "38px Impact",
            fill: "#FFFFFF"
        },
        t.styleWarningContext = {
            font: "28px Impact2",
            fill: "#FFFFFF"
        },
        t.styleOKGreen = {
            font: "42px Impact",
            fill: "#CDF00F"
        },
        t.styleCancel = {
            font: "52px Impact",
            fill: "#FF9900"
        },
        t.styleLoading = {
            font: "25px Impact",
            fill: "#FF00FF"
        },
        t.styleCredits0 = {
            font: "30px Impact",
            fill: "#FFFFFF"
        },
        t.styleBackArrow = {
            font: "40px Impact",
            fill: "#FF9900"
        },
        t.stylePopupContentSmall = {
            font: "17px Impact2",
            fill: "#FFFFFF"
        },
        t.stylePopupContent = {
            font: "30px Impact2",
            fill: "#FFFFFF"
        },
        t.stylePopupContentYellow = {
            font: "30px Impact2",
            fill: "#66CCFF"
        },
        t.stylePopupContent2 = {
            font: "46px Impact2",
            fill: "#000000"
        },
        t.stylePopupCancel = {
            font: "40px Impact",
            fill: "#FF9900"
        },
        t.stylePopupPlay = {
            font: "40px Impact",
            fill: "#B1FE00"
        },
        t.styleCredits1 = {
            font: "19px Impact2",
            fill: "#FFFFFF"
        },
        t.styleCredits2 = {
            font: "15px Impact2",
            fill: "#FFFFFF"
        },
        t.styleCredits3 = {
            font: "56px Impact",
            fill: "#FFFFFF"
        },
        t.styleCredits33 = {
            font: "42px Impact",
            fill: "#FFFFFF"
        },
        t.styleCredits4 = {
            font: "46px Impact",
            fill: "#FFFFFF"
        },
        t.styleCredits5 = {
            font: "27px Impact",
            fill: "#FFFFFF"
        },
        t.styleTournamentPopup = {
            font: "38px Impact",
            fill: "#00CCFF"
        },
        t.styleMSG = {
            font: "80px Impact3",
            fill: "#FF9900"
        },
        t.styleTimer = {
            font: "24px CfCrackBold",
            fill: "#CDF00F"
        },
        t.styleVersion = {
            font: "12px Impact",
            fill: "#FFFFFF"
        },
        t.styleHelpTxt0 = {
            font: "18px Impact2",
            fill: "#FFFFFF"
        },
        t.styleHelpTxt1 = {
            font: "24px Impact2",
            fill: "#FFFFFF"
        },
        t.styleHelpLetter = {
            font: "20px Impact2",
            fill: "#000000"
        },
        t.styleHelpTitle = {
            font: "40px Impact",
            fill: "#FFB600"
        },
        t.styleLogin = {
            font: "28px Impact",
            fill: "#FFB600",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        },
        t.styleLoginInfo = {
            font: "18px Impact2",
            fill: "#FFFFFF",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        },
        t.styleLoginInfoYellow = {
            font: "20px Impact2",
            fill: "#66CCFF",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        },
        t.styleLoginInfoYellow2 = {
            font: "20px Impact2",
            fill: "#FFFFFF",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        },
        t.styleLoginInfoIsf = {
            font: "16px Impact2",
            fill: "#FFFFFF"
        },
        t.stylePlayer = {
            font: "16px Impact2",
            fill: "#FF9900"
        },
        t.stylePlayerName = {
            font: "14px Impact2",
            fill: "#FFFFFF"
        },
        t.styleClubName = {
            font: "20px Impact2",
            fill: "#FFFFFF"
        },
        t.styleSkillName = {
            font: "14px Impact2",
            fill: "#FFFFFF"
        },
        t.aNames = ["Sniper", "Gold Cup 2", "Gold Cup", "Dunker", "Silver Cup 2", "Silver Cup", "Block Scorer", "Bronze Cup 2", "Bronze Cup", "Defender", "Match Leader", "Blocker", "Buzzer Beater", "Points Leader", "Tournament Leader", "Hard Gold Cup", "Hard Match Leader", "Hard Gold Cup 2", "Hard Tournament Leader"],
        t.aNamesScreen = ["Sniper", "Dunker", "Block Scorer", "Buzzer Beater", "Blocker", "Defender", "Points Leader", "Match Leader", "Hard Match Leader", "Tournament Leader", "Hard Tournament Leader", "Gold Cup", "Silver Cup", "Bronze Cup", "Gold Cup 2", "Silver Cup 2", "Bronze Cup 2", "Hard Gold Cup", "Hard Gold Cup 2"],
        t.hints = ["Sniper: Make 20 three-pointers", "Gold Cup 2: Win Gold Cup in 2 vs 2 mode", "Gold Cup: Win Gold Cup in 1 vs 1 mode", "Dunker: Make 50 dunks", "Silver Cup 2: Win Silver Cup in 2 vs 2 mode", "Silver Cup: Win Silver Cup in 1 vs 1 mode", "Block Scorer: Score 5 times using block", "Bronze Cup 2: Win Bronze Cup in 2 vs 2 mode", "Bronze Cup: Win Bronze Cup in 1 vs 1 mode", "Defender: Make 50 steals", "Match Leader: Score 25 points in one match", "Blocker: Make 20 blocks", "Buzzer Beater: Score 5 time after final buzzer", "Points Leader: Score 500 points", "Tournament Leader: Score 150 points in one tournament", "Hard Gold Cup: Win Gold Cup in 1 vs 1 Hard mode", "Hard Match Leader: Score 25 points in one match in Hard mode", "Hard Gold Cup 2: Win Gold Cup in 2 vs 2 Hard mode", "Hard Tournament Leader: Score 150 points in one tournament in Hard mode"],
        t
    }();
    e.default = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.Interface = "interface",
        t.Gameplay = "gameplay",
        t.Preloader = "preloader",
        t.Achiev = "ach",
        t.preloadList = [t.Preloader],
        t.list = [t.Interface, t.Gameplay, t.Achiev, t.Preloader],
        t
    }();
    e.default = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(1)
      , n = i(2)
      , a = function() {
        function t(t, e, i) {
            var n = this;
            this.carSaves = {},
            this.game = t,
            this.callback = e,
            this.callbackContext = i,
            this.game && this.game.storage.getItem(s.Constants.STORAGE_KEY).then(function(t) {
                null === t || void 0 === t ? (n.initFirstSave(),
                n.callback && n.callbackContext && n.callback.call(n.callbackContext)) : n.restore()
            })
        }
        return t.prototype.initFirstSave = function() {
            n.Inventory.instance.init(),
            this.save()
        }
        ,
        t.getInstance = function(e, i, s) {
            return t.instance ? s && i.call(s) : t.instance = new t(e,i,s),
            t.instance
        }
        ,
        t.prototype.save = function() {
            var t = JSON.stringify({
                invsav: n.Inventory.instance.save
            })
              , e = this.hash(t);
            this.game.storage.setItem(s.Constants.STORAGE_KEY, t),
            this.game.storage.setItem(s.Constants.STORAGE_KEY + "h", e)
        }
        ,
        t.prototype.restore = function() {
            var t = this, e = this.game.storage.getItem(s.Constants.STORAGE_KEY), i = this.game.storage.getItem(s.Constants.STORAGE_KEY + "h"), a, o;
            Promise.all([e, i]).then(function(e) {
                if (a = e[0] || "",
                o = e[1] || "0",
                "" === a)
                    return t.initFirstSave(),
                    void (t.callback && t.callbackContext && t.callback.call(t.callbackContext));
                if (o !== t.hash(a))
                    return t.initFirstSave(),
                    void (t.callback && t.callbackContext && t.callback.call(t.callbackContext));
                if (a && "" !== a)
                    try {
                        var i = JSON.parse(a);
                        n.Inventory.instance.save = i.invsav
                    } catch (e) {
                        t.initFirstSave()
                    }
                else
                    t.initFirstSave();
                t.callback && t.callbackContext && t.callback.call(t.callbackContext)
            })
        }
        ,
        t.prototype.hash = function(t) {
            var e = 0, i, s, n;
            if (0 === t.length)
                return e.toString();
            for (i = 0,
            n = t.length; i < n; i++)
                s = t.charCodeAt(i),
                e = (e << 5) - e + s,
                e |= 0;
            return e.toString()
        }
        ,
        t
    }();
    e.default = a
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(3)
      , a = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.game = e,
            i
        }
        return s(e, t),
        e.prototype.add = function(t) {}
        ,
        e.prototype.shake = function(t) {}
        ,
        e.prototype.shakeContainer = function(t, e) {
            void 0 === t && (t = null);
            var i = n.default.game.add.tween(t)
              , s = t.x
              , a = t.y;
            i.to({
                x: t.x - e,
                y: t.y - e
            }, 25, Phaser.Easing.Bounce.InOut, !1, 0, 4, !0),
            i.onComplete.addOnce(function() {
                t.x = s,
                t.y = a
            }, this),
            i.start()
        }
        ,
        e.prototype.release = function() {
            this.game = null
        }
        ,
        e.prototype.start = function() {}
        ,
        e.prototype.resize = function() {}
        ,
        e
    }(Phaser.Group);
    e.GameView = a
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(5)
      , a = i(3)
      , o = i(35)
      , r = i(13)
      , h = i(1)
      , l = i(7)
      , c = i(2)
      , u = i(15)
      , d = function(t) {
        function e() {
            var e = t.call(this, a.default.game) || this;
            return e.timer = null,
            e.x = 400,
            e.y = 77,
            e.timer = new l.default(a.default.game," ",o.default.styleTimer,null,null,h.Atlases.Gameplay),
            e.addChild(e.timer),
            e.timer.label.setMaxSize(150, 70),
            e.timer.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            e.timer.label.setShadow(3, 3, "rgba(0,0,0,0.5)", 5),
            e.timer.setText("2:00"),
            e
        }
        return s(e, t),
        e.prototype.start = function(t) {
            this.wasEnd = !1,
            this.fullTime = t,
            this.noticeTime = 4,
            this.process(0)
        }
        ,
        Object.defineProperty(e.prototype, "fullTimeMatch", {
            get: function() {
                return this.fullTime
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.updateScore = function(t, e) {
            1 === t ? r.MainGameCore.instance.infoPanel.updateScore(e, c.Inventory.instance.matchData.matchScore[1]) : r.MainGameCore.instance.infoPanel.updateScore(c.Inventory.instance.matchData.matchScore[0], e)
        }
        ,
        e.prototype.process = function(t) {
            var e = this.fullTime - t;
            if (e <= 0)
                this.wasEnd || (this.timer.label.text = "00.0",
                this.wasEnd = !0,
                u.Signals.MatchEndSignal.dispatch());
            else if (120 === e)
                this.timer.label.text = "2:00";
            else if (e >= 60) {
                var i = e - 60 >> 0;
                this.timer.label.text = i >= 10 ? "1:" + i.toString() : "1:0" + i.toString()
            } else {
                var s = e >> 0
                  , a = 10 * (e - s) >> 0;
                e >= 10 ? this.timer.label.text = s.toString() + "." + a.toString() : (this.timer.label.text = "0" + s.toString() + "." + a.toString(),
                s === this.noticeTime && this.noticeTime >= 0 && (n.default.getInstance().play(h.Sounds.m_countdown),
                this.noticeTime--))
            }
        }
        ,
        e
    }(Phaser.Group);
    e.TimerObject = d
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(15)
      , n = function() {
        function t() {
            this.callBack = s.Signals.MatchProcessorSignal,
            s.Signals.SensorSignal.add(this.processSensor, this)
        }
        return Object.defineProperty(t, "instance", {
            get: function() {
                return null === t._instance && (t._instance = new t),
                t._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.clearSensors = function() {
            this.canScore = !0,
            this.upperSensor = !1
        }
        ,
        t.prototype.shoot = function(t, e, i) {
            this.clearSensors(),
            this.shotSide = t,
            this.isHuman = e,
            this.throwType = i,
            this.blockSide = 0,
            this.blockIsHuman = !1
        }
        ,
        t.prototype.block = function(t, e) {
            this.clearSensors(),
            this.blockSide = t,
            this.blockIsHuman = e
        }
        ,
        t.prototype.processSensor = function(t, e) {
            this.canScore && (0 === t ? this.upperSensor = !0 : this.upperSensor ? this.sendScore(e) : this.canScore = !1)
        }
        ,
        t.prototype.sendScore = function(t) {
            var e;
            this.blockSide === -t ? (e = 2,
            this.isHuman = this.blockIsHuman,
            this.throwType = 2) : e = 0 === this.throwType ? 3 : 2,
            this.callBack.dispatch(t, e, this.isHuman, this.throwType)
        }
        ,
        t.prototype.finishMatch = function() {
            s.Signals.SensorSignal.remove(this.processSensor, this)
        }
        ,
        t._instance = null,
        t
    }();
    e.MatchProcessor = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(0)
      , n = function() {
        function t() {}
        return t.prototype.init = function(t, e, i) {
            this.values = this.baseData.getValues(),
            this.save = t,
            this.saveName = e,
            this.signalSave = new s.Signal,
            this.loadData()
        }
        ,
        t.prototype.loadData = function() {
            var t = null;
            null === this.save && (this.save = {}),
            t = this.save[this.saveName],
            null === t || void 0 === t ? (this.save[this.saveName] = {},
            this.saveData()) : this.baseData.setValues(t)
        }
        ,
        t.prototype.saveData = function() {
            this.save[this.saveName] = this.baseData.getValuesForWrite(),
            this.signalSave.dispatch()
        }
        ,
        t.prototype.updateData = function(t, e) {
            void 0 === e && (e = 0)
        }
        ,
        t
    }();
    e.BaseDataManager = n
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.prototype.createEmpty = function() {
            this.values = [];
            for (var t = 0; t < this.count; t++)
                this.values[t] = 0
        }
        ,
        t.prototype.getValuesForWrite = function() {
            for (var t = {}, e = 0; e < this.count; e++)
                t[this.names[e]] = this.values[e];
            return t
        }
        ,
        t.prototype.setValues = function(t) {
            for (var e in t) {
                var i = this.names.indexOf(e);
                this.values[i] = t[e]
            }
        }
        ,
        t.prototype.getValues = function() {
            return this.values
        }
        ,
        t
    }();
    e.BaseData = s
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(2)
      , n = i(13)
      , a = function() {
        function t() {
            this.graphic = null,
            this.objType = -1
        }
        return t.prototype.create = function(t) {
            void 0 === t && (t = null)
        }
        ,
        t.prototype.add = function() {
            this.body && this.updateGraphic(),
            n.MainGameCore.instance.add(this)
        }
        ,
        t.prototype.release = function() {
            if (this.graphic) {
                if (this.graphic.dispose)
                    try {
                        this.graphic.dispose()
                    } catch (t) {}
                this.graphic = null
            }
            if (this.body) {
                try {
                    s.NapeUtil.disposeBody(this.body)
                } catch (t) {}
                this.body = null
            }
        }
        ,
        t.prototype.updateGraphic = function() {
            this.graphic && (this.graphic.x = this.body.position.x,
            this.graphic.y = this.body.position.y,
            this.graphic.rotation = 180 * this.body.rotation / Math.PI % 360,
            this.body.userData.graphic = this.graphic)
        }
        ,
        t.prototype.start = function() {}
        ,
        t.prototype.update = function(t) {}
        ,
        t.prototype.getPosition = function() {
            return this.body ? this.body.position : null
        }
        ,
        t.prototype.getX = function() {
            return this.body ? this.body.position.x : -1e3
        }
        ,
        t.prototype.getY = function() {
            return this.body ? this.body.position.y : -1e3
        }
        ,
        t.prototype.stopVelocity = function() {
            this.body && this.body.velocity.setxy(0, 0)
        }
        ,
        t
    }();
    e.GameObject = a
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = i(2)
      , n = i(45)
      , a = i(24)
      , o = i(3)
      , r = i(80)
      , h = i(81)
      , l = i(47)
      , c = function() {
        function t() {
            var t = a.Inventory.instance.gameMode;
            0 === t ? a.Inventory.instance.startTournamentMatch() : 3 === t ? a.Inventory.instance.matchData.startTraining() : a.Inventory.instance.matchData.restarted ? (a.Inventory.instance.matchData.restarted = !1,
            a.Inventory.instance.matchData.resetScore()) : 1 === t ? a.Inventory.instance.matchData.startRandomMatch() : 2 === t ? a.Inventory.instance.matchData.startQuickMatch() : 4 === t && a.Inventory.instance.matchData.startPlayers2Match()
        }
        return t.prototype.start = function(t, e, i) {
            var c = new r.ArenaObject;
            new h.BasketObject(-1),
            new h.BasketObject(1),
            new n.BallObject,
            new s.CountDownObject,
            new s.MessageInfo;
            for (var u = a.Inventory.instance.matchData, d = 0; d < u.teams.length; d++)
                for (var p = 0; p < u.players[d].length; p++) {
                    var f = i.pop();
                    o.default.game.world.addChild(f),
                    new s.PlayerObject(d,u.teams[d],u.players[d][p],u.forms[d],p,u.pb[d][p],l.AISkillsData.botsSkills[u.skills[d][p]],f)
                }
            c.setLogo(u.teams[0]),
            t.call(e)
        }
        ,
        t
    }();
    e.GameBuilder = c
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = nape.geom.Vec2
      , a = nape.phys.BodyType
      , o = i(43)
      , r = i(23)
      , h = i(2)
      , l = i(19)
      , c = i(4)
      , u = i(29)
      , d = i(3)
      , p = i(1)
      , f = i(46)
      , g = i(15)
      , m = i(5)
      , y = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.isWaiting = !1,
            e.setVisibleOnframe = !1,
            e.gamecore = h.MainGameCore.instance,
            e.objType = l.ObjectsType.BALL,
            e.width = c.default.WIDTH,
            e.velUp = u.ObjectsData.BALL_UP_VELOCITY_Y,
            e.bounceVel = u.ObjectsData.BALL_BOUNCE,
            e.stealVelXBase = u.ObjectsData.BALL_STEAL_VELOCITY_X_BASE,
            e.stealVelXAdd = u.ObjectsData.BALL_STEAL_VELOCITY_X_ADD,
            e.stealVelY = u.ObjectsData.BALL_STEAL_VELOCITY_Y,
            e.xB1 = u.ObjectsData.BASKET_CENTER,
            e.xB2 = u.ObjectsData.BASKET_CENTER2,
            e.yB = u.ObjectsData.BASKET_HEIGHT,
            e.gravity = u.ObjectsData.GRAVITY.y * u.ObjectsData.BALL_GRAVMASS,
            e.alleyOopX1 = u.ObjectsData.ALLEY_OOP_X,
            e.alleyOopX2 = e.width - u.ObjectsData.ALLEY_OOP_X,
            e.alleyOopY = u.ObjectsData.ALLEY_OOP_Y,
            e.baseDispersion = u.ObjectsData.DISPERSION,
            e.vertDispersion = u.ObjectsData.VERTICAL_DISPERSION,
            e.maxVelX = u.ObjectsData.PLAYER_MOVE_WITH_BALL,
            e.basket1 = u.ObjectsData.BASKET_CENTER,
            e.basket2 = u.ObjectsData.BASKET_CENTER2,
            e.createBody(),
            e.createGraphic(),
            e.indent = n.get(c.default.WIDTH2, u.ObjectsData.BALL_INDENT_Y_CENTER),
            t.prototype.add.call(e),
            e.space1 = e.body.space,
            e
        }
        return s(e, t),
        e.prototype.createGraphic = function() {
            this.graphic = new Phaser.Group(d.default.game);
            var t = new Phaser.Sprite(d.default.game,0,0,p.Atlases.Gameplay,"BallMC0000");
            t.anchor.set(.5),
            this.graphic.addChild(t),
            this.shadow = new f.ShadowObject(this.graphic,0)
        }
        ,
        e.prototype.createBody = function() {
            this.body = r.NapeUtil.createCircleBody(a.DYNAMIC, h.Filters.BALL, !1, u.ObjectsData.BALL_RADIUS, 0, 0, 0, h.CbTypes.cbBall, h.Materials.BALL),
            this.body.userData.graphic = this.graphic,
            this.body.userData.owner = this,
            this.body.gravMass *= u.ObjectsData.BALL_GRAVMASS
        }
        ,
        e.prototype.restart = function(t) {
            void 0 === t && (t = 0),
            0 === t && (this.body.velocity.setxy(0, this.velUp),
            this.state = "up",
            this.body.position.set(this.indent),
            this.body.rotation = 0,
            this.body.angularVel = 0,
            this.updateGraphic(),
            this.shadow.update(),
            null === this.body.space && this.returnToPhysics())
        }
        ,
        e.prototype.setState = function(t, e, i, s) {
            void 0 === e && (e = 2),
            void 0 === i && (i = 0),
            void 0 === s && (s = !1),
            (t !== this.state || s) && (e < 2 && (this.SIDE = e),
            "inHands" === t ? this.gamecore.ballInHands(this.SIDE, i) : "shooting" === t ? this.gamecore.ballShooting(this.SIDE, i) : this.gamecore.ballOthers(),
            !this.isWaiting || "bounce" !== t && "score" !== t || (this.isWaiting = !1,
            g.Signals.MatchEndSignal.dispatch()),
            this.state = t)
        }
        ,
        e.prototype.shoot = function(t, e, i, s, n) {
            this.SIDE = t,
            this.body.position.setxy(e, i);
            var a = this.calcThrowVel(e, i)
              , o = 1 === t ? e : this.width - e
              , r = Math.abs(s) / this.maxVelX * .1
              , h = this.calcDispersion(o, i, r, n);
            h < 2 ? this.body.velocity.setxy(a.x * h, a.y) : 2 === h ? this.body.velocity.set(this.calcThrowVel(e, i, 30 * this.SIDE)) : this.body.velocity.set(this.calcThrowVel(e, i, 30 * -this.SIDE)),
            this.body.rotation = 0,
            this.body.angularVel = t * (5 + 10 * Math.random()),
            this.setState("shooting"),
            a.dispose(),
            this.returnToPhysics()
        }
        ,
        e.prototype.alleyOop = function(t, e, i, s) {
            this.player = s,
            this.SIDE = t,
            this.body.position.setxy(e, i),
            this.body.rotation = 0;
            var n = 1 === t ? this.alleyOopX1 : this.alleyOopX2;
            this.body.velocity.set(this.calcVel(e, i, n, this.alleyOopY, 150)),
            this.toPhysics2()
        }
        ,
        e.prototype.calcThrowVel = function(t, e, i) {
            void 0 === i && (i = 0);
            var s, n;
            1 === this.SIDE ? (s = this.xB1 + i,
            n = t) : (s = this.xB2 + i,
            n = this.width - t);
            var a;
            return a = n <= 150 ? 70 : n <= 250 ? 100 : n <= 350 ? .3 * n + 40 : n <= 540 ? 150 : 130,
            a *= 1 + .1 * (Math.random() <= .5 ? -1 : 1) * Math.random(),
            a > 185 && (a = 185),
            this.calcVel(t, e, s, this.yB, a)
        }
        ,
        e.prototype.calcVel = function(t, e, i, s, a) {
            var o = e - (s - a)
              , r = -Math.sqrt(2 * this.gravity * o)
              , h = -r / this.gravity
              , l = Math.sqrt(2 * a / this.gravity);
            return new n((i - t) / (h + l) * 1.035,r)
        }
        ,
        e.prototype.calcDispersion = function(t, e, i, s) {
            var n, a;
            if (e < 235)
                n = 0;
            else if (e >= 295)
                n = this.vertDispersion;
            else {
                var o = 295 - e;
                n = (1 - o / 60) * this.vertDispersion
            }
            a = t <= 100 ? 0 : t <= 200 ? .01 : t <= 300 ? .02 : t <= 400 ? .03 : t <= 490 ? .04 : t <= 540 ? .01 : .07;
            var r = Math.random() < .5 ? -1 : 1
              , h = r * (this.baseDispersion + n + a + s + i) * Math.random();
            return Math.abs(h) <= .02 ? 1 : h < -.08 ? 2 : h > .08 ? 3 : 1 + h
        }
        ,
        e.prototype.dunk = function(t, e) {
            this.SIDE = t;
            var i, s, a;
            return Math.random() <= e ? (i = 1 === t ? this.basket1 + 17 : this.basket2 - 17,
            s = n.get(-260 * t, 400),
            a = !0) : (i = 1 === t ? this.basket1 : this.basket2,
            s = n.get(-550 * t, 400),
            a = !1,
            m.default.getInstance().play(p.Sounds.b_brick)),
            this.body.position.setxy(i, 170),
            this.body.velocity.set(s),
            this.body.rotation = 0,
            this.body.angularVel = 0,
            this.setState("dunk"),
            this.returnToPhysics(),
            s.dispose(),
            a
        }
        ,
        e.prototype.takeInHands = function(t, e, i) {
            void 0 === i && (i = !1);
            var s = !1;
            return (i || "shooting" !== this.state && "inHands" !== this.state) && (this.removeFromPhysics(),
            this.SIDE = t,
            this.setState("inHands", this.SIDE, e, i),
            s = !0),
            s
        }
        ,
        e.prototype.fromHands = function(t, e) {
            this.setState("down"),
            this.body.position.set(t),
            this.body.velocity.setxy(150 * e, -100),
            this.returnToPhysics()
        }
        ,
        e.prototype.applySteal = function(t, e, i) {
            this.setState("steal"),
            this.body.position.set(t);
            var s = i * (this.stealVelXBase + e * this.stealVelXAdd);
            this.body.velocity.setxy(s, this.stealVelY),
            this.returnToPhysics()
        }
        ,
        e.prototype.onGroundCollision = function(t) {
            void 0 === t && (t = !0),
            "inHands" !== this.state && (this.setState("bounce"),
            t && (this.body.velocity.y = this.bounceVel,
            m.default.getInstance().play(p.Sounds.b_bounce)))
        }
        ,
        e.prototype.isInGame = function() {
            return null !== this.body.space
        }
        ,
        e.prototype.removeFromPhysics = function() {
            this.shadow.hide(),
            this.body.velocity.setxy(0, 0),
            this.body.angularVel = 0,
            this.body.rotation = 0,
            this.graphic.visible = !1,
            this.body.space = null
        }
        ,
        e.prototype.returnToPhysics = function() {
            this.body.space = this.space1,
            this.updateGraphic(),
            this.setVisibleOnframe = !0
        }
        ,
        e.prototype.toPhysics2 = function() {
            this.gamecore.isAlleyOop = !0,
            this.body.space = this.space2,
            this.updateGraphic(),
            this.graphic.visible = !0
        }
        ,
        e.prototype.playSnd = function(t) {
            if (0 === t)
                m.default.getInstance().play(p.Sounds.b_net);
            else if (1 === t) {
                var e = void 0
                  , i = Math.abs(this.body.velocity.length);
                e = i > 300 ? 1 : i / 300 * .8,
                m.default.getInstance().play(p.Sounds.b_ring, e)
            } else
                2 === t && m.default.getInstance().play(p.Sounds.b_basket)
        }
        ,
        e.prototype.onDownSensor = function() {
            this.setState("score"),
            this.playSnd(0)
        }
        ,
        e.prototype.onShieldCollision = function(t) {
            "score" !== this.state && (m.default.getInstance().play(p.Sounds.b_steel),
            this.body.velocity.setxy(-t * (200 + 100 * Math.random()), -200 - 100 * Math.random()),
            this.setState("basket"))
        }
        ,
        e.prototype.update = function(t) {
            void 0 === t && (t = 0),
            this.player && this.body.velocity.y > 0 && (this.player.continueAlleyOop(),
            this.player = null),
            this.setVisibleOnframe && (this.setVisibleOnframe = !1,
            this.graphic.visible = !0,
            this.shadow.show())
        }
        ,
        e.prototype.release = function() {
            this.shadow = null,
            this.space1 = null,
            this.space2 = null,
            this.indent.dispose(),
            this.indent = null,
            this.player = null,
            t.prototype.release.call(this)
        }
        ,
        e
    }(o.GameObject);
    e.BallObject = y
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(2)
      , a = i(0)
      , o = nape.geom.Ray
      , r = nape.geom.Vec2
      , h = i(22)
      , l = i(3)
      , c = i(1)
      , u = function(t) {
        function e(e, i) {
            var s = t.call(this) || this;
            s.objType = n.ObjectsType.SHADOW,
            s.space = h.NapePhysics.space,
            s.owner = e,
            s.ray = new o(r.weak(e.x, e.y),r.weak(0, 1)),
            s.graphic = new a.Sprite(l.default.game,0,0,c.Atlases.Gameplay,"ShadowMC0002"),
            s.graphic.anchor.set(.5),
            s.dist = 250;
            var u;
            return 0 === i ? (s.dist = 400,
            s.graphic.scale.set(.7)) : 1 === i || (2 === i ? (u = new Phaser.Image(l.default.game,0,0,c.Atlases.Gameplay,"ShadowMC0000"),
            u.anchor.set(.5),
            s.graphic.addChild(u)) : 3 === i && (u = new Phaser.Image(l.default.game,0,0,c.Atlases.Gameplay,"ShadowMC0001"),
            u.anchor.set(.5),
            s.graphic.addChild(u))),
            t.prototype.add.call(s),
            s
        }
        return s(e, t),
        e.prototype.update = function(t) {
            if (void 0 === t && (t = 0),
            this.space && this.graphic.visible) {
                this.ray.origin = r.weak(this.owner.x, this.owner.y);
                var e = this.space.rayCast(this.ray, !1, n.Filters.RAY);
                if (e) {
                    var i = this.ray.at(e.distance);
                    this.graphic.x = i.x,
                    this.graphic.y = i.y,
                    this.graphic.alpha = 1 - e.distance / this.dist > 0 ? 1 - e.distance / this.dist : 0,
                    i.dispose(),
                    e.dispose()
                }
            }
        }
        ,
        e.prototype.release = function() {
            this.space = null,
            this.owner = null,
            this.ray.origin.dispose(),
            this.ray.direction.dispose(),
            this.ray = null,
            t.prototype.release.call(this)
        }
        ,
        e.prototype.show = function() {
            this.graphic.visible = !0,
            this.update()
        }
        ,
        e.prototype.hide = function() {
            this.graphic.visible = !1
        }
        ,
        e
    }(n.GameObject);
    e.ShadowObject = u
}
, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var s = function() {
        function t() {}
        return t.create = function() {
            var e = {
                accuracy: .01,
                chanceToCompleteDunk: .9,
                coolDown: 18
            };
            t.botsSkills.push(e);
            var i;
            i = {
                accuracy: .14,
                chanceToCompleteDunk: .4,
                jumpBall: .45,
                chanceToRebound: .3,
                attack: .4,
                attackAtOnce: .2,
                avoidSteal: .2,
                makePump: .5,
                reactOnOpponent: .3,
                makeDash: 1,
                delayDash: 5,
                defence: .5,
                jumpThrow: .3,
                makeSteal: .3,
                delaySteal: 3,
                jumpPump: .8,
                makeBlock: .2,
                reboundFixed: .35,
                reboundRange: .1,
                moveDelay: .1,
                coolDown: 48
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .12,
                chanceToCompleteDunk: .45,
                jumpBall: .45,
                chanceToRebound: .35,
                attack: .4,
                attackAtOnce: .3,
                avoidSteal: .3,
                makePump: .5,
                reactOnOpponent: .4,
                makeDash: 1,
                delayDash: 4.5,
                defence: .5,
                jumpThrow: .4,
                makeSteal: .4,
                delaySteal: 2.5,
                jumpPump: .7,
                makeBlock: .3,
                reboundFixed: .3,
                reboundRange: .1,
                moveDelay: .08,
                coolDown: 48
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .1,
                chanceToCompleteDunk: .5,
                jumpBall: .45,
                chanceToRebound: .4,
                attack: .35,
                attackAtOnce: .4,
                avoidSteal: .4,
                makePump: .5,
                reactOnOpponent: .5,
                makeDash: 1,
                delayDash: 4,
                defence: .45,
                jumpThrow: .6,
                makeSteal: .5,
                delaySteal: 2,
                jumpPump: .6,
                makeBlock: .4,
                reboundFixed: .25,
                reboundRange: .1,
                moveDelay: .06,
                coolDown: 35
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .08,
                chanceToCompleteDunk: .6,
                jumpBall: .4,
                chanceToRebound: .5,
                attack: .3,
                attackAtOnce: .5,
                avoidSteal: .5,
                makePump: .5,
                reactOnOpponent: .6,
                makeDash: 1,
                delayDash: 3,
                defence: .3,
                jumpThrow: .8,
                makeSteal: .6,
                delaySteal: 1,
                jumpPump: .5,
                makeBlock: .5,
                reboundFixed: .2,
                reboundRange: .1,
                moveDelay: .05,
                coolDown: 35
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .04,
                chanceToCompleteDunk: .7,
                jumpBall: .4,
                chanceToRebound: .7,
                attack: .3,
                attackAtOnce: .6,
                avoidSteal: .6,
                makePump: .5,
                reactOnOpponent: .6,
                makeDash: 1,
                delayDash: 3,
                defence: .3,
                jumpThrow: 1,
                makeSteal: .7,
                delaySteal: 1,
                jumpPump: .5,
                makeBlock: .5,
                reboundFixed: .2,
                reboundRange: .1,
                moveDelay: .05,
                coolDown: 28
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .03,
                chanceToCompleteDunk: .75,
                jumpBall: .3,
                chanceToRebound: .8,
                attack: .2,
                attackAtOnce: .7,
                avoidSteal: .7,
                makePump: .5,
                reactOnOpponent: .7,
                makeDash: 1,
                delayDash: 2.5,
                defence: .2,
                jumpThrow: 1,
                makeSteal: .8,
                delaySteal: 1,
                jumpPump: .4,
                makeBlock: .5,
                reboundFixed: .15,
                reboundRange: .1,
                moveDelay: .05,
                coolDown: 28
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .02,
                chanceToCompleteDunk: .8,
                jumpBall: .2,
                chanceToRebound: .9,
                attack: .1,
                attackAtOnce: .8,
                avoidSteal: .8,
                makePump: .5,
                reactOnOpponent: .8,
                makeDash: 1,
                delayDash: 2,
                defence: .1,
                jumpThrow: 1,
                makeSteal: .9,
                delaySteal: 1,
                jumpPump: .3,
                makeBlock: .8,
                reboundFixed: .1,
                reboundRange: .1,
                moveDelay: .05,
                coolDown: 28
            },
            t.botsSkills.push(i),
            i = {
                accuracy: .01,
                chanceToCompleteDunk: .9,
                jumpBall: .1,
                chanceToRebound: 1,
                attack: .05,
                attackAtOnce: .9,
                avoidSteal: .9,
                makePump: .5,
                reactOnOpponent: .9,
                makeDash: 1,
                delayDash: 2,
                defence: .05,
                jumpThrow: 1,
                makeSteal: .9,
                delaySteal: 1,
                jumpPump: .2,
                makeBlock: 1,
                reboundFixed: 0,
                reboundRange: .1,
                moveDelay: .05,
                coolDown: 28
            },
            t.botsSkills.push(i)
        }
        ,
        t.botsSkills = [],
        t
    }();
    e.AISkillsData = s
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(25)
      , a = i(13)
      , o = i(4)
      , r = i(2)
      , h = i(21)
      , l = i(89)
      , c = i(90)
      , u = i(91)
      , d = i(15)
      , p = function(t) {
        function e(e, i) {
            var s = t.call(this, e) || this;
            return s.deltaDistance = 20,
            s.chanceToBlock = 1,
            s.downTime = 5,
            s.superShot = i,
            s.superID = e.superID,
            s.megaDunkDelay = new h.FullDelay(.5,.5),
            s.gamecore = a.MainGameCore.instance,
            s.ball = s.gamecore.ball,
            s.opponents = -1 === s.SIDE ? s.gamecore.playersRight : s.gamecore.playersLeft,
            s.playerNo = e.playerNo,
            s.width = o.default.WIDTH,
            s.delta = -1 === s.SIDE ? 0 : o.default.WIDTH,
            s.incDownTime = o.default.STEP,
            d.Signals.PlayerSignal.add(s.processPlayerSignal, s),
            s
        }
        return s(e, t),
        e.prototype.initZones = function() {
            1 === this.SIDE ? (this.attackZoneStart = r.ObjectsData.ATTACK_ZONE_START,
            this.attackZoneEnd = r.ObjectsData.ATTACK_ZONE_END,
            this.dashZoneStart = r.ObjectsData.DASH_ZONE_START,
            this.dashZoneEnd = r.ObjectsData.DASH_ZONE_END,
            0 === this.playerNo ? (this.baseEndPoint = 280,
            this.reboundPointInAttack = 190,
            this.reboundPointInDefence = 610) : (this.baseEndPoint = 400,
            this.reboundPointInAttack = 150,
            this.reboundPointInDefence = 680)) : (this.attackZoneStart = this.width - r.ObjectsData.ATTACK_ZONE_END,
            this.attackZoneEnd = this.width - r.ObjectsData.ATTACK_ZONE_START,
            this.dashZoneStart = this.width - r.ObjectsData.DASH_ZONE_END,
            this.dashZoneEnd = this.width - r.ObjectsData.DASH_ZONE_START,
            0 === this.playerNo ? (this.baseEndPoint = 580,
            this.reboundPointInAttack = 610,
            this.reboundPointInDefence = 190) : (this.baseEndPoint = 400,
            this.reboundPointInAttack = 650,
            this.reboundPointInDefence = 120))
        }
        ,
        e.prototype.init = function(t) {
            this.jumpBall = new l.NegativeDelay(r.ObjectsData.IDEAL_JUMP_BALL_JUMP,t.jumpBall),
            this.attack = new h.FullDelay(r.ObjectsData.IDEAL_ATTACK_JUMP,t.attack),
            this.attackJumpDelay = new c.SimpleDelay(t.attackAtOnce),
            this.chanceToRebound = t.chanceToRebound,
            this.chanceToAvoidSteal = t.avoidSteal,
            this.chanceToMakePump = t.makePump,
            this.chanceToReactOnCloseOpponent = t.reactOnOpponent,
            this.chanceToDash = t.makeDash,
            this.dashDelay = new u.AIUseDelay(.1,t.delayDash),
            this.defence = new c.SimpleDelay(t.defence),
            this.chanceToJumpWhenThrow = t.jumpThrow,
            this.chanceToUseSteal = t.makeSteal,
            this.stealDelay = new u.AIUseDelay(.1,r.ObjectsData.STEAL_DURATION + t.delaySteal),
            this.chanceToJumpWhenPump = t.jumpPump,
            this.chanceToBlock = t.makeBlock,
            this.blockDelay = new h.FullDelay(0,.2),
            this.reboundDelay = new h.FullDelay(t.reboundRange,t.reboundFixed),
            this.moveDelay = new h.FullDelay(t.moveDelay,.05),
            this.opponentDelta = r.ObjectsData.OPPONENT_DELTA,
            this.chanceForThree = r.ObjectsData.CHANCE_FOR_THREE,
            this.initZones()
        }
        ,
        e.prototype.restart = function(e) {
            this.strategy = 3,
            0 === e && this.onJumpBall(),
            this.deltaDownTime = 0,
            this.endPoint = this.baseEndPoint,
            this.currentSuper = !1,
            this.resetAllDelays(),
            this.resetCurrents(),
            this.isPumped = !1,
            this.pumpCount = 0,
            this.canJump = !0,
            this.willAttackAtOnce = !1,
            t.prototype.restart.call(this, e)
        }
        ,
        e.prototype.onJumpBall = function() {}
        ,
        e.prototype.resetCurrents = function(t, e, i, s) {
            void 0 === t && (t = 0),
            void 0 === e && (e = !1),
            void 0 === i && (i = !1),
            void 0 === s && (s = 0),
            this.currentMove = t,
            this.currentJump = e,
            this.currentAction = i,
            this.currentDash = s
        }
        ,
        e.prototype.resetBaseDelays = function() {
            this.attackJumpDelay.reset(),
            this.attack.reset(),
            this.defence.reset(),
            this.moveDelay.reset(),
            this.stealDelay.reset(),
            this.resetAvoidSteal()
        }
        ,
        e.prototype.resetAllDelays = function() {
            this.dashDelay.reset(),
            this.resetBaseDelays()
        }
        ,
        e.prototype.resetAvoidSteal = function() {
            this.avoidStealJump = !1,
            this.avoidStealMove = 0
        }
        ,
        e.prototype.ballInOwnHands = function(t) {
            void 0 === t && (t = 0),
            0 === this.superID && this.player.readyForSuper && this.megaDunkDelay.activate(),
            this.resetBaseDelays(),
            this.resetCurrents(),
            this.strategy = 2;
            var e = this.isReboundInAttackZone();
            if (-1 === e)
                this.willAttackAtOnce = !this.player.isGrounded,
                this.setAttackPoint(150, this.player.getX());
            else if (0 === e) {
                this.willAttackAtOnce = !this.player.isGrounded;
                var i = this.player.getX();
                this.setAttackPoint(i, i)
            } else
                this.setAttackPoint(0),
                Math.abs(this.player.getX() - this.attackPoint) < 50 ? this.willAttackAtOnce = !this.player.isGrounded : this.willAttackAtOnce = !1;
            this.willAttackAtOnce && (this.canJump = !1)
        }
        ,
        e.prototype.ballInOpponentsHands = function(t) {
            void 0 === t && (t = 0),
            this.resetBaseDelays(),
            this.resetCurrents(),
            this.willAttackAtOnce = !1,
            this.isPumped = !1,
            this.strategy = 0
        }
        ,
        e.prototype.ballOwnShoot = function(t) {
            void 0 === t && (t = 0),
            this.resetCurrents(),
            this.strategy = 4,
            this.reboundPoint = this.reboundPointInAttack
        }
        ,
        e.prototype.ballOpponentShoot = function(t) {
            void 0 === t && (t = 0),
            1 === this.superID && this.superShot(!0),
            this.resetCurrents(),
            this.strategy = 4,
            this.currentJump = this.opponent.isGrounded && this.isOpponentCloseBehind(120) && Math.random() <= this.chanceToJumpWhenThrow,
            this.reboundPoint = this.reboundPointInDefence
        }
        ,
        e.prototype.ballOthers = function() {
            this.strategy = 1
        }
        ,
        e.prototype.setAttackPoint = function(t, e) {
            void 0 === e && (e = 0),
            0 != t ? (this.attackPoint = t,
            this.jumpPoint = e) : ((this.player.getX() - 450) * this.SIDE > 0 && Math.random() <= this.chanceForThree ? this.attackPoint = 510 : Math.random() <= .7 ? this.attackPoint = 120 + 200 * Math.random() : this.attackPoint = 320 + 160 * Math.random(),
            this.jumpPoint = this.attackPoint <= 200 ? this.attackPoint + 100 : this.attackPoint),
            -1 === this.SIDE && (this.attackPoint = this.width - this.attackPoint,
            this.jumpPoint = this.width - this.jumpPoint)
        }
        ,
        e.prototype.processPlayerSignal = function(t, e, i) {
            void 0 === i && (i = 0),
            "startSteal" === t ? this.playerStartSteal(e, i) : "steal" === t ? this.playerSteal(e, i) : "jumpA" === t ? this.playerJumpA(e, i) : "pump" === t ? this.playerPump(e, i) : "dash" === t ? this.playerDash(e, i) : "stun" === t && this.playerStun(e, i)
        }
        ,
        e.prototype.playerStartSteal = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === -t ? this.player.withBall && this.player.isGrounded && (this.isOpponentCloseBehind(80) || this.isOpponentCloseBehind(140) && this.opponent.isMoving()) && this.tryToAvoid() : this.stealDelay.useIt()
        }
        ,
        e.prototype.tryToAvoid = function() {
            if (Math.random() <= this.chanceToAvoidSteal || this.player.getX() > 600) {
                var t = Math.random();
                t <= .1 && this.player.isReadyToDash() ? this.currentDash = -this.SIDE : t <= .4 && this.isInAttackZone() ? (this.avoidStealJump = !0,
                this.moveDelay.reset()) : this.avoidStealMove = this.SIDE
            }
        }
        ,
        e.prototype.playerJumpA = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === t ? e === this.playerNo && (this.resetAvoidSteal(),
            this.attack.activate(),
            this.throwPoint = this.player.getX(),
            this.directionToFly = this.player.getX() - this.attackPoint >= 0 ? -1 : 1) : Math.random() <= this.chanceToJumpWhenThrow && this.defence.activate()
        }
        ,
        e.prototype.playerPump = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === -t && this.player.canAct && ++this.pumpCount <= 3 && this.isOpponentCloseBehind(90) && Math.random() <= this.chanceToJumpWhenPump && (this.defence.activate(),
            this.stealDelay.reset(),
            this.currentMove = 0,
            this.isPumped = !0)
        }
        ,
        e.prototype.playerDash = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === t ? this.attack.reset() : 0 === this.strategy && this.player.canAct && this.isOpponentInRangeBehind() && Math.random() <= this.chanceToBlock && (this.resetCurrents(),
            this.resetAllDelays(),
            this.currentBlockOrPump = !0)
        }
        ,
        e.prototype.playerStun = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === t && this.resetAllDelays()
        }
        ,
        e.prototype.playerSteal = function(t, e) {
            void 0 === e && (e = 0),
            this.SIDE === -t && this.resetAvoidSteal()
        }
        ,
        e.prototype.playerOnGround = function() {
            this.isPumped = !1,
            this.player.withBall && this.willAttackAtOnce && (this.resetCurrents(),
            this.attackJumpDelay.activate())
        }
        ,
        e.prototype.playerOnDashEnd = function() {
            (this.player.getX() - this.attackPoint) * this.SIDE < 0 && (this.attackPoint = this.player.getX() - 10 * this.SIDE)
        }
        ,
        e.prototype.playerOnBlock = function() {
            this.currentBlockOrPump = !1,
            this.blockDelay.activate()
        }
        ,
        e.prototype.releaseBlockOrPump = function(t) {
            return 1 === this.blockDelay.update(t)
        }
        ,
        e.prototype.isReboundInAttackZone = function() {
            var t = this.player.getX()
              , e = 0;
            return (t - this.attackZoneStart) * this.SIDE <= 0 ? e = -1 : (t - this.attackZoneEnd) * this.SIDE >= 0 && (e = 1),
            e
        }
        ,
        e.prototype.isInAttackZone = function() {
            return 1 === this.SIDE ? this.player.getX() < 600 : this.player.getX() > 200
        }
        ,
        e.prototype.inDashingZone = function() {
            return this.playerX >= this.dashZoneStart
        }
        ,
        e.prototype.moveToo = function(t) {
            var e, i = this.player.getX() - t;
            return e = Math.abs(i) <= this.deltaDistance ? 0 : i > 0 ? -1 : 1
        }
        ,
        e.prototype.moveInAttack = function() {
            var t = this.moveToo(this.jumpPoint);
            return 0 === t ? (this.attackJump = !0,
            t = this.jumpPoint === this.attackPoint ? 2 : this.moveToo(this.attackPoint)) : (this.attackJump = !1,
            t = this.moveToo(this.attackPoint)),
            t
        }
        ,
        e.prototype.readyForAction = function() {
            return !0
        }
        ,
        e.prototype.dispose = function() {
            d.Signals.PlayerSignal.remove(this.processPlayerSignal, this),
            this.gamecore = null,
            this.ball = null,
            this.opponent = null,
            this.opponents = null,
            this.superShot = null,
            this.attackJumpDelay = null,
            this.moveDelay = null,
            this.stealDelay = null,
            this.dashDelay = null,
            this.jumpBall = null,
            this.attack = null,
            this.defence = null,
            this.blockDelay = null,
            this.reboundDelay = null,
            this.megaDunkDelay = null,
            t.prototype.dispose.call(this)
        }
        ,
        e.prototype.update = function(t) {
            this.currentDash = 0;
            var e = this.attackJumpDelay.update(t);
            e >= 0 ? 1 === e ? (this.currentMove = 0,
            this.currentJump = !0,
            this.currentAction = !1,
            this.canJump = !0) : (this.currentMove = this.avoidStealMove,
            this.currentJump = this.avoidStealJump) : (this.calcPositions(),
            0 === this.strategy ? this.strategyDefence(t) : 1 === this.strategy ? this.strategyBallFight(t) : 2 === this.strategy ? this.strategyAttack(t) : 3 === this.strategy ? this.strategyJumpBall(t) : 4 === this.strategy ? this.strategyRebound(t) : 5 === this.strategy && this.strategyDefence2(t))
        }
        ,
        e.prototype.calcPositions = function() {
            this.playerX = this.player.getX(),
            this.opponentX = this.opponent.getX()
        }
        ,
        e.prototype.strategyDefence = function(t) {
            var e = this.stealDelay.update(t)
              , i = this.moveDelay.update(t);
            if (this.isPumped)
                this.currentMove = 0;
            else {
                if (this.player.isGrounded) {
                    if (-1 === i) {
                        var s;
                        s = (this.opponentX - this.endPoint) * this.SIDE < 0 ? this.endPoint : this.opponent.isGrounded ? this.opponentX + this.SIDE * this.opponentDelta : this.opponentX + this.SIDE * (this.opponentDelta - 10),
                        this.currentMove = this.moveToo(s),
                        this.moveDelay.activate()
                    }
                } else
                    this.currentMove = this.moveToo(this.opponentX + this.SIDE * (this.opponentDelta - 10));
                -1 === e && this.tryToSteal()
            }
            this.currentJump = 1 === this.defence.update(t) && this.isOpponentCloseAbs(180),
            this.currentAction = 1 === e,
            !1 === this.currentAction && !1 === this.currentJump && 0 === this.currentMove ? (this.deltaDownTime += this.incDownTime,
            this.deltaDownTime >= this.downTime && (this.endPoint = 1 === this.SIDE ? 0 : this.width,
            this.deltaDownTime = 0)) : this.deltaDownTime = 0
        }
        ,
        e.prototype.tryToSteal = function() {
            this.opponent.isGrounded && (this.isOpponentCloseBehind(80) ? Math.random() <= this.chanceToUseSteal ? this.stealDelay.activate() : this.stealDelay.skipIt() : this.isOpponentCloseToBasket(45) && (Math.random() <= 1.5 * this.chanceToUseSteal ? this.stealDelay.activate() : this.stealDelay.skipIt()))
        }
        ,
        e.prototype.strategyDefence2 = function(t) {}
        ,
        e.prototype.strategyBallFight = function(t) {
            var e = this.ball.getX()
              , i = e - this.playerX >= 0 ? 10 : -10
              , s = this.reboundDelay.update(t);
            this.currentMove = this.moveToo(e + i),
            this.currentJump = !1,
            "bounce" != this.ball.state && "shooting" != this.ball.state && ("basket" === this.ball.state ? -1 === s && this.isBallInReboundZone() ? this.reboundDelay.activate() : this.currentJump = 1 === s && Math.random() < +this.chanceToRebound && this.isBallInReboundZone() : this.currentJump = Math.abs(this.deltaBallX()) < 60 && Math.abs(this.deltaBallY()) > 70),
            this.currentAction = !1
        }
        ,
        e.prototype.isBallInReboundZone = function() {
            return Math.abs(this.deltaBallX()) < 60 && Math.abs(this.deltaBallY()) > 70
        }
        ,
        e.prototype.strategyAttack = function(t) {
            if (this.player.withBall)
                if (1 === this.megaDunkDelay.update(t))
                    this.currentSuper = !0;
                else if (this.avoidStealJump || 0 != this.avoidStealMove)
                    this.currentMove = this.avoidStealMove,
                    this.currentJump = this.avoidStealJump;
                else if (this.player.isGrounded) {
                    if (-1 === this.moveDelay.update(t)) {
                        var e = this.moveInAttack();
                        this.attackJump ? (this.currentJump = !0,
                        this.currentMove = e) : this.isAICloserForBasket() ? e === -this.SIDE ? (this.currentMove = -this.SIDE,
                        this.currentJump = !1) : (this.currentMove = e,
                        this.currentJump = !0) : (this.currentJump = !1,
                        this.currentDash = 0,
                        this.isOpponentCloseBehind() ? this.isUnderOwnBasket() ? this.player.readyForDash ? (this.currentDash = -this.SIDE,
                        this.currentMove = 0) : (Math.random() <= .5 ? this.currentMove = -this.SIDE : this.currentMove = 0,
                        this.moveDelay.activate()) : Math.random() <= this.chanceToReactOnCloseOpponent ? (this.currentJump = !1,
                        this.player.readyForDash && this.inDashingZone() && Math.random() <= this.chanceToDash ? this.currentDash = -this.SIDE : (Math.random() <= .5 ? this.currentMove = 0 : this.currentMove = this.SIDE,
                        this.moveDelay.activate())) : (this.currentMove = -this.SIDE,
                        this.moveDelay.activate()) : this.currentMove = -this.SIDE)
                    }
                } else
                    this.currentMove = (this.playerX - this.attackPoint) * this.directionToFly > 0 ? this.directionToFly : 0,
                    this.currentJump = !1,
                    this.currentAction = 1 === this.attack.update(t)
        }
        ,
        e.prototype.strategyJumpBall = function(t) {
            this.currentMove = 0,
            this.currentJump = 1 === this.jumpBall.update(t),
            this.currentAction = !1
        }
        ,
        e.prototype.strategyRebound = function(t) {
            this.currentJump ? this.currentMove = 0 : this.currentMove = this.player.isGrounded ? this.moveToo(this.reboundPoint) : 0
        }
        ,
        e.prototype.deltaBallX = function() {
            return this.player.getX() - this.ball.getX()
        }
        ,
        e.prototype.deltaBallY = function() {
            return this.player.getY() - this.ball.getY()
        }
        ,
        e.prototype.isOpponentCloseBehind = function(t) {
            void 0 === t && (t = 100);
            var e = (this.player.getX() - this.opponent.getX()) * this.SIDE;
            return e > 0 && e <= t
        }
        ,
        e.prototype.isOpponentInRangeBehind = function(t, e) {
            void 0 === t && (t = 40),
            void 0 === e && (e = 180);
            var i = (this.player.getX() - this.opponent.getX()) * this.SIDE;
            return i > 0 && i >= t && i <= e
        }
        ,
        e.prototype.isOpponentCloseToBasket = function(t) {
            void 0 === t && (t = 30);
            var e = (this.playerX - this.opponentX) * this.SIDE;
            return e < 0 && e + t >= 0
        }
        ,
        e.prototype.isAICloserForBasket = function() {
            return (this.playerX - this.opponentX) * this.SIDE < 0
        }
        ,
        e.prototype.isOpponentCloseAbs = function(t) {
            return void 0 === t && (t = 100),
            Math.abs(this.playerX - this.opponentX) <= t
        }
        ,
        e.prototype.isUnderOwnBasket = function() {
            return 1 === this.SIDE ? this.playerX > 700 : this.playerX < 100
        }
        ,
        e
    }(n.BaseController);
    e.BaseAIController = p
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(25)
      , a = function(t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return s(e, t),
        e.prototype.update = function() {
            this.currentMove = 0
        }
        ,
        e.prototype.readyForAction = function() {
            return !1
        }
        ,
        e.prototype.releaseBlockOrPump = function() {
            return !1
        }
        ,
        e
    }(n.BaseController);
    e.PlayerBaseController = a
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(1)
      , a = i(16)
      , o = i(9)
      , r = i(3)
      , h = i(10)
      , l = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.bike = null,
            i.logo = null,
            i.mainParent = null,
            i
        }
        return s(e, t),
        e.prototype.preload = function() {
            t.prototype.preload.call(this);
            var e = a.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0]);
            -1 === document.URL.indexOf("84.42.47.232") && -1 === document.URL.indexOf("192.168.10.226") && -1 === document.URL.indexOf("iriysoft.com") || (e = !0),
            e ? this.preloadSplash() : this.preloadLock()
        }
        ,
        e.prototype.init = function() {
            t.prototype.init.call(this),
            this.mainParent = this.game.add.group(),
            this.mainParent.x = this.game.width / 2,
            this.mainParent.y = this.game.height / 2,
            this.setPauseViewCar(this.mainParent)
        }
        ,
        e.prototype.preloadLock = function() {
            this.game.load.atlas(n.Atlases.Preloader, "assets/atlases/x1/" + n.Atlases.Preloader + ".png", "assets/atlases/x1/" + n.Atlases.Preloader + ".json")
        }
        ,
        e.prototype.preloadSplash = function() {
            new o.default(this.game,0,r.default.Name)
        }
        ,
        e.prototype.createLock = function() {
            this.logo = this.game.add.image(0, -30, n.Atlases.Preloader, "branding_l20000"),
            this.logo.anchor.set(.5),
            this.logo.inputEnabled = !0,
            this.logo.input.useHandCursor = !0,
            this.logo.events.onInputDown.add(this.opensitelockLink, this);
            var t = {
                font: "25px Impact2",
                fill: "#A8DB2B"
            }
              , e = {
                font: "25px Impact2",
                fill: "#FFFFFF"
            }
              , i = new h.default(this.game,0,-200,"This is version is url-locked",t)
              , s = new h.default(this.game,0,-160,a.default.getInstance().getUrlLock(),e)
              , o = new h.default(this.game,0,100,"Contact to license this game",t)
              , r = new h.default(this.game,0,140,"madpuffers@gmail.com",e);
            i.anchor.set(.5),
            s.anchor.set(.5),
            o.anchor.set(.5),
            r.anchor.set(.5),
            this.mainParent.addChild(this.logo),
            this.mainParent.addChild(i),
            this.mainParent.addChild(s),
            this.mainParent.addChild(o),
            this.mainParent.addChild(r)
        }
        ,
        e.prototype.opensitelockLink = function() {
            window.open(a.default.getInstance().getUrlLock(), "_blank")
        }
        ,
        e.prototype.createSplash = function() {
            new o.default(this.game,0,r.default.Name)
        }
        ,
        e.prototype.fileComplete = function(t, e, i, s, n) {
            100 === t && this.game.load.onFileComplete.removeAll()
        }
        ,
        e.prototype.setPauseViewCar = function(t) {
            null !== this.bike ? (this.bike.destroy(),
            this.bike = this.game.add.group(t)) : this.bike = this.game.add.group(t),
            this.bike.x = 0,
            this.bike.y = 10
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this);
            var e = a.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0]);
            -1 === document.URL.indexOf("84.42.47.232") && -1 === document.URL.indexOf("192.168.10.38") && -1 === document.URL.indexOf("iriysoft.com") || (e = !0),
            e ? this.createSplash() : this.createLock()
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / n.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            this.mainParent && (this.mainParent.x = this.game.width / 2,
            this.mainParent.y = this.game.height / 2),
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "sitelock",
        e
    }(Phaser.State);
    e.default = l
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0;
    var n = i(3)
      , a = i(1)
      , o = i(2)
      , r = i(8)
      , h = i(5)
      , l = i(10)
      , c = function(t) {
        function e(e) {
            var i = t.call(this, n.default.game) || this;
            i.context = null,
            i.context = e,
            i.bg = i.game.add.sprite(0, 0, a.Atlases.Interface, "0bg130000"),
            i.bg.anchor.set(.5),
            i.addChild(i.bg);
            var s = {
                font: "bold 42px Impact2",
                fill: "#FFFFFF"
            };
            i.ccc = new l.default(i.game,0,-90,"MODE",s),
            i.ccc.anchor.set(.5),
            i.addChild(i.ccc),
            i.btn1 = new r.default(i.game,"VS",a.Constants.styleVS,i.onGameModeClick,i,a.Atlases.Interface),
            i.btn2 = new r.default(i.game,"VS",a.Constants.styleVS,i.onGameModeClick,i,a.Atlases.Interface),
            i.btn3 = new r.default(i.game,"VS",a.Constants.styleVS,i.onGameModeClick,i,a.Atlases.Interface),
            i.btnSelect = new r.default(i.game,"VS",a.Constants.styleVS2,null,null,a.Atlases.Interface),
            i.btn1.y = -30,
            i.btn2.y = 30,
            i.btn3.y = 90,
            i.btn1.btn.id = "1",
            i.btn2.btn.id = "2",
            i.btn3.btn.id = "3",
            i.btn1.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.btn2.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.btn3.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            i.btnSelect.setFrames("selectModeBg0000", "selectModeBg0000", "selectModeBg0000", "selectModeBg0000"),
            i.btn1.setProp("#000000", 3, "#FFFFFF", 5),
            i.btn2.setProp("#000000", 3, "#FFFFFF", 5),
            i.btn3.setProp("#000000", 3, "#FFFFFF", 5),
            i.btnSelect.setProp("#000000", 3, "#FFFFFF", 5),
            i.addChild(i.btn1),
            i.addChild(i.btn2),
            i.addChild(i.btn3),
            i.addChild(i.btnSelect);
            var h = i.game.add.image(-47, 0, a.Atlases.Interface, "iconPl0000");
            if (h.anchor.set(.5),
            i.btn1.btn.addChild(h),
            h = i.game.add.image(47, 0, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn1.btn.addChild(h),
            h = i.game.add.image(-55, -2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn2.btn.addChild(h),
            h = i.game.add.image(-35, 2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn2.btn.addChild(h),
            h = i.game.add.image(55, -2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn2.btn.addChild(h),
            h = i.game.add.image(35, 2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn2.btn.addChild(h),
            h = i.game.add.image(55, -2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn3.btn.addChild(h),
            h = i.game.add.image(35, 2, a.Atlases.Interface, "iconPl0000"),
            h.anchor.set(.5),
            i.btn3.btn.addChild(h),
            4 !== o.Inventory.instance.gameMode) {
                h = i.game.add.image(-45, 0, a.Atlases.Interface, "iconPl0000"),
                h.anchor.set(.5),
                i.btn3.btn.addChild(h),
                i.bg.crop(new Phaser.Rectangle(0,0,162,100), !1),
                i.bg.anchor.set(.5, 1),
                i.bg.y -= 30;
                var c = i.game.add.sprite(0, -30, a.Atlases.Interface, "0bg130000");
                c.anchor.set(.5, 1),
                c.crop(new Phaser.Rectangle(0,0,162,100), !1),
                c.angle = 180,
                i.addChildAt(c, 0),
                i.btn3.visible = !1
            } else
                h = i.game.add.image(-55, -2, a.Atlases.Interface, "iconPl0000"),
                h.anchor.set(.5),
                i.btn3.btn.addChild(h),
                h = i.game.add.image(-35, 2, a.Atlases.Interface, "iconPl0000"),
                h.anchor.set(.5),
                i.btn3.btn.addChild(h),
                i.cpu = new r.default(i.game,"CPU",a.Constants.styleCPU,null,null,a.Atlases.Interface),
                i.cpu.x = 60,
                i.cpu.y = 15,
                i.cpu.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                i.cpu.setProp("#000000", 3, "#FFFFFF", 5),
                i.btn3.addChild(i.cpu),
                i.cpu2 = new r.default(i.game,"CPU",a.Constants.styleCPU2,null,null,a.Atlases.Interface),
                i.cpu2.x = 60,
                i.cpu2.y = 15,
                i.cpu2.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
                i.cpu2.setProp("#000000", 3, "#FFFFFF", 5),
                i.btn3.addChild(i.cpu2),
                i.cpu2.visible = !1;
            return i.setButtonsState(o.Inventory.instance.matchData.matchMode),
            i.btn1.btn.dynamicScaleDown = 1,
            i.btn1.btn.dynamicScaleUp = 1,
            i.btn2.btn.dynamicScaleDown = 1,
            i.btn2.btn.dynamicScaleUp = 1,
            i.btn3.btn.dynamicScaleDown = 1,
            i.btn3.btn.dynamicScaleUp = 1,
            i.btn1.btn.btn.scale.set(13, 5),
            i.btn2.btn.btn.scale.set(14, 5),
            i.btn3.btn.btn.scale.set(14, 5),
            i
        }
        return s(e, t),
        e.prototype.onGameModeClick = function(t) {
            h.default.getInstance().play(a.Sounds.button);
            var e = parseInt(t.parent.parent.id) - 1;
            o.Inventory.instance.matchData.matchMode = e,
            this.setButtonsState(e),
            null !== this.context && this.context.processMatchMode()
        }
        ,
        e.prototype.updateIcon = function(t, e) {
            for (var i = 2; i < t.btn.children.length; i++) {
                var s = t.btn.children[i];
                this.updateSingleIcon(s, e),
                1 === e && (this.btnSelect.x = t.x,
                this.btnSelect.y = t.y)
            }
        }
        ,
        e.prototype.updateSingleIcon = function(t, e) {
            t.loadTexture(a.Atlases.Interface, "iconPl000" + e)
        }
        ,
        e.prototype.setButtonsState = function(t) {
            0 === t ? (this.updateIcon(this.btn1, 1),
            this.updateIcon(this.btn2, 0),
            this.updateIcon(this.btn3, 0),
            4 === o.Inventory.instance.gameMode && (this.cpu.visible = !0,
            this.cpu2.visible = !1)) : 1 === t ? (this.updateIcon(this.btn1, 0),
            this.updateIcon(this.btn2, 1),
            this.updateIcon(this.btn3, 0),
            4 === o.Inventory.instance.gameMode && (this.cpu.visible = !0,
            this.cpu2.visible = !1)) : 2 === t && (this.updateIcon(this.btn1, 0),
            this.updateIcon(this.btn2, 0),
            this.updateIcon(this.btn3, 1),
            4 === o.Inventory.instance.gameMode && (this.cpu.visible = !1,
            this.cpu2.visible = !0))
        }
        ,
        e.prototype.hideBG = function() {
            this.bg.visible = !1,
            this.ccc.visible = !1
        }
        ,
        e.prototype.showCurrentMode = function() {
            this.btn1.y = this.btn2.y = this.btn3.y = this.btnSelect.y = 0,
            0 === o.Inventory.instance.matchData.matchMode ? (this.btn1.visible = !0,
            this.btn2.visible = !1,
            this.btn3.visible = !1) : 1 === o.Inventory.instance.matchData.matchMode ? (this.btn1.visible = !1,
            this.btn2.visible = !0,
            this.btn3.visible = !1) : 2 === o.Inventory.instance.matchData.matchMode && (this.btn1.visible = !1,
            this.btn2.visible = !1,
            this.btn3.visible = !0)
        }
        ,
        e.prototype.destroy = function() {
            this.btn1 = null,
            this.btn2 = null,
            this.btn3 = null,
            this.context = null,
            t.prototype.destroy.call(this)
        }
        ,
        e
    }(Phaser.Group);
    e.MatchModePanel = c
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(2)
      , c = i(11)
      , u = i(8)
      , d = i(12)
      , p = i(26)
      , f = i(103)
      , g = i(16)
      , m = i(53)
      , y = i(104)
      , v = i(4)
      , b = i(0)
      , _ = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i.player1 = null,
            i.player2 = null,
            i.armatureDisplay = null,
            i.armatureDisplay2 = null,
            i._armatureDisplay = null,
            i._armatureDisplay2 = null,
            i.manager = null,
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll(),
            this.manager = l.Inventory.instance,
            dragonBones.PhaserFactory.init(this.game)
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this);
            var e = this.game.cache.getJSON(a.JSONData.DBPers)
              , i = this.game.cache.getJSON(a.JSONData.DBPers_Texture)
              , s = this.game.cache.getImage(a.Images.DBPers, !0).base;
            dragonBones.PhaserFactory.factory.parseDragonBonesData(e),
            dragonBones.PhaserFactory.factory.parseTextureAtlasData(i, s),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this.armatureDisplay.animation.play("idle", 0),
            this.armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this.armatureDisplay2.animation.play("idle", 0),
            this.logo = this.game.add.sprite(400, 100, a.Atlases.Interface, "bg0000"),
            this.logo.anchor.set(.5),
            this.logo.x = 400,
            this.backgroundBase2.addChild(this.logo),
            this.backBtn = new u.default(this.game,"RESTART",a.Constants.styleBackArrow,this.onBack,this,a.Atlases.Interface),
            this.backBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.backBtn.setProp("#000000", 7, "#FFFFFF", 14),
            this.backBtn.x = 130,
            this.backBtn.y = 450,
            this.backgroundBase2.addChild(this.backBtn);
            var n;
            0 === l.Inventory.instance.gameMode && (n = this.manager.nextLeg()),
            this.setUp(),
            3 === l.Inventory.instance.gameMode || 2 === l.Inventory.instance.gameMode ? this.nextState = d.Menu.Name : 0 === l.Inventory.instance.gameMode ? !0 === n[0] ? this.nextState = "Standings" === n[1] ? d.TournamentState.Name : m.default.Name : this.nextState = m.default.Name : this.nextState = p.default.Name,
            this.musicBtn = new o.default(this.game,"",{},this.toggleMusic,this,a.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.musicBtn.sScale = 42 / this.musicBtn.btn.width,
            this.musicBtn.x = 772,
            this.musicBtn.y = 25,
            this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000"),
            this.backgroundBase2.addChild(this.musicBtn),
            this.updateSoundButtons(),
            this.playBtn = new u.default(this.game,"NEXT",a.Constants.stylePlayGreen,this.onNextState,this,a.Atlases.Interface),
            this.playBtn.setFrames("arrow20000", "arrow20000", "arrow20000", "arrow20000"),
            this.playBtn.btn.btn.x = 110,
            this.playBtn.x = 655,
            this.playBtn.y = 450,
            this.playBtn.setProp("#000000", 7, "#FFFFFF", 14),
            this.backgroundBase2.addChild(this.playBtn),
            this.resize(),
            new r.default(this.game,this,this.show)
        }
        ,
        e.prototype.show = function() {
            var t = this.game.add.tween(this.scoreLabel);
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreText),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreBestLabel),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreBestText),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.playBtn),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.from({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.panel.score),
            t.from({
                y: -220
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.panel.title ? this.game.add.tween(this.panel.title) : this.game.add.tween(this.panel.title_state),
            t.from({
                y: -220
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.ccc),
            t.from({
                x: -600
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.team1),
            t.from({
                x: -550
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.player1),
            t.from({
                x: -550
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.panel.ccc2),
            t.from({
                x: 600
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.team2),
            t.from({
                x: 550
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.player2),
            t.from({
                x: 880
            }, v.default.PRELOADER_TIME, b.Easing.Back.Out),
            t.start()
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.scoreLabel);
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreText),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreBestLabel),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreBestText),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.playBtn),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.backBtn),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.to({
                y: 520
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.panel.score),
            t.to({
                y: -220
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.panel.title ? this.game.add.tween(this.panel.title) : this.game.add.tween(this.panel.title_state),
            t.to({
                y: -220
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.ccc),
            t.to({
                x: -600
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.team1),
            t.to({
                x: -550
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.player1),
            t.to({
                x: -550
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.panel.ccc2),
            t.to({
                x: 600
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.panel.team2),
            t.to({
                x: 550
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.player2),
            t.to({
                x: 880
            }, v.default.PRELOADER_TIME, b.Easing.Linear.None),
            t.start()
        }
        ,
        e.prototype.render = function() {
            dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1),
            t.prototype.render.call(this)
        }
        ,
        e.prototype.setUp = function() {
            l.PlayersData.switchPlayer(this.armatureDisplay.armature, 2 * (l.Inventory.instance.matchData.teams[0] - 1) + l.Inventory.instance.matchData.players[0][0], 2 * l.Inventory.instance.matchData.teams[0] - 2),
            l.PlayersData.switchPlayer(this.armatureDisplay2.armature, 2 * (l.Inventory.instance.matchData.teams[1] - 1) + l.Inventory.instance.matchData.players[1][0], 2 * l.Inventory.instance.matchData.teams[1] - 2 + 1);
            var t = l.Inventory.instance.matchData.matchScore[0]
              , e = l.Inventory.instance.matchData.matchScore[1];
            this.panel = new f.PreMatchPanelResult(2),
            t > e ? (this.armatureDisplay.armature.animation.play("happiness", -1),
            this.armatureDisplay2.armature.animation.play("sad", -1)) : (this.armatureDisplay.armature.animation.play("sad", -1),
            this.armatureDisplay2.armature.animation.play("happiness", -1)),
            this.player1 = this.game.add.group(),
            this.player1.x = 216,
            this.player1.y = 388,
            this.player2 = this.game.add.group(),
            this.player2.x = 584,
            this.player2.y = 388;
            var i = this.game.add.sprite(0, 0, a.Atlases.Gameplay, "ShadowMC0002");
            i.scale.set(2.5),
            i.anchor.set(.5),
            this.player1.addChild(i),
            i = this.game.add.sprite(0, 0, a.Atlases.Gameplay, "ShadowMC0002"),
            i.scale.set(2.5),
            i.anchor.set(.5),
            this.player2.addChild(i),
            this.player1.addChild(this.armatureDisplay.armature.display),
            this.player2.addChild(this.armatureDisplay2.armature.display),
            this.player1.scale.set(.9),
            this.player2.scale.set(-.9, .9),
            this.backgroundBase2.addChild(this.player1),
            this.backgroundBase2.addChild(this.player2),
            this.logo.addChild(this.panel),
            this.branding2 = new o.default(this.game,"",null,this.onMoreGames,this,a.Atlases.Preloader),
            this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            this.branding2.y = 200,
            this.branding2.sScale = 1.2,
            g.default.getInstance().checkDomain(document.URL.split("//")[1].split("/")[0]) && (this.branding2.inputEnableChildren = !1),
            this.panel.addChild(this.branding2);
            var s = {
                font: " 20px Impact2",
                fill: "#FFFFFF"
            };
            this.leaderBoardBtn = new o.default(this.game,"LEADERBOARD",s,this.onScoreList,this,a.Atlases.Interface),
            this.leaderBoardBtn.setFrames("btnRect0000", "btnRect0000", "btnRect0000", "btnRect0000"),
            this.leaderBoardBtn.sScale = 1,
            this.leaderBoardBtn.sLabelScale = 1,
            this.leaderBoardBtn.label.y = 5,
            this.leaderBoardBtn.x = this.branding2.x,
            this.leaderBoardBtn.y = this.branding2.y + 100,
            this.leaderBoardBtn.visible = !1,
            this.panel.addChild(this.leaderBoardBtn),
            this.scoreLabel = new u.default(this.game,"SCORE:",a.Constants.styleIDnetScore,null,null,a.Atlases.Interface),
            this.scoreLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreLabel.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreLabel.x = 250,
            this.scoreLabel.y = 460,
            this.backgroundBase2.addChild(this.scoreLabel),
            this.scoreBestLabel = new u.default(this.game,"BEST SCORE:",a.Constants.styleIDnetBestScore,null,null,a.Atlases.Interface),
            this.scoreBestLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreBestLabel.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreBestLabel.x = 460,
            this.scoreBestLabel.y = 460,
            this.backgroundBase2.addChild(this.scoreBestLabel),
            this.scoreText = new u.default(this.game,"",a.Constants.styleIDnetScore2,null,null,a.Atlases.Interface),
            this.scoreText.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreText.x = 310,
            this.scoreText.y = 460,
            this.backgroundBase2.addChild(this.scoreText),
            this.scoreBestText = new u.default(this.game,"",a.Constants.styleIDnetBestScore2,null,null,a.Atlases.Interface),
            this.scoreBestText.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreBestText.x = 540,
            this.scoreBestText.y = 460,
            this.backgroundBase2.addChild(this.scoreBestText),
            3 === l.Inventory.instance.gameMode || 2 === l.Inventory.instance.gameMode ? (this.scoreLabel.visible = !1,
            this.scoreText.visible = !1,
            this.scoreBestLabel.visible = !1,
            this.scoreBestText.visible = !1) : (this.backBtn.visible = !1,
            0 === l.Inventory.instance.gameMode ? (this.scoreText.setText(l.Inventory.instance.getMatchScores() + ""),
            this.scoreBestText.setText(l.Inventory.instance.getTournamentScores() + ""),
            this.scoreBestText.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreText.setProp("#000000", 5, "#FFFFFF", 10)) : (this.scoreLabel.visible = !1,
            this.scoreText.visible = !1,
            this.scoreBestLabel.visible = !1,
            this.scoreBestText.visible = !1));
            var n = this.manager.showAdditionalGUI();
            if (1 === n)
                this.popup = new y.PopupGUI(!1),
                this.popup.signalOk.addOnce(this.onOk, this),
                this.world.addChild(this.popup);
            else if (2 === n) {
                this.popup = new y.PopupGUI(!0),
                this.world.addChild(this.popup);
                var r = this.game.add.group(this.popup.popup)
                  , h = void 0;
                h = this.game.add.image(-55, 30, a.Atlases.Interface, "loginSelect0000"),
                h.anchor.set(.5),
                r.addChild(h),
                h = this.game.add.image(45, 30, a.Atlases.Interface, "loginSelect0000"),
                h.anchor.set(.5),
                r.addChild(h),
                h = this.game.add.image(-53, 122, a.Atlases.Gameplay, "btn_bg0000"),
                h.anchor.set(.5),
                h.scale.set(.43),
                r.addChild(h),
                h = this.game.add.image(48, 122, a.Atlases.Gameplay, "btn_bg0000"),
                h.anchor.set(.5),
                h.scale.set(.43),
                r.addChild(h),
                h = this.game.add.image(-53, 122, a.Atlases.Gameplay, "icon_ball0002"),
                h.anchor.set(.5),
                h.scale.set(.5),
                r.addChild(h),
                h = this.game.add.image(48, 122, a.Atlases.Gameplay, "icon_ball0003"),
                h.anchor.set(.5),
                h.scale.set(.5),
                r.addChild(h),
                this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
                this._armatureDisplay.x = -50,
                this._armatureDisplay.y = 90,
                this._armatureDisplay.animation.play("idle", 0),
                r.addChild(this._armatureDisplay),
                l.PlayersData.switchPlayer(this._armatureDisplay.armature, 32, 32),
                this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
                this._armatureDisplay2.x = 50,
                this._armatureDisplay2.y = 90,
                this._armatureDisplay2.animation.play("idle", 0),
                r.addChild(this._armatureDisplay2),
                l.PlayersData.switchPlayer(this._armatureDisplay2.armature, 33, 32),
                this._armatureDisplay.scale.set(.65),
                this._armatureDisplay2.scale.set(.65),
                r.scale.set(.8)
            }
        }
        ,
        e.prototype.onOk = function() {
            l.Inventory.instance.checkForumAchievement(),
            window.open("https://forum.y8.com/t/basketball-legends/1741", "_blank")
        }
        ,
        e.prototype.onMoreGames = function() {
            window.open(g.default.getInstance().getUrl(g.default.Current), "_blank")
        }
        ,
        e.prototype.onScoreList = function() {
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.toggleMusic = function() {
            c.default.getInstance().music ? n.default.getInstance().toggleMusic() : c.default.getInstance().sfx ? n.default.getInstance().toggleSfx() : (n.default.getInstance().toggleSfx(),
            n.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.updateSoundButtons = function() {
            var t = c.default.getInstance().music ? 0 : 1;
            t += c.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        e.prototype.onBack = function() {
            n.default.getInstance().play(a.Sounds.Click),
            l.Inventory.instance.matchData.resetScore(),
            new h.default(this.game,this,d.Gameplay.Name)
        }
        ,
        e.prototype.onNextState = function() {
            n.default.getInstance().play(a.Sounds.Click),
            this.showBanner(),
            new h.default(this.game,this,this.nextState)
        }
        ,
        e.prototype.showBanner = function() {
            if ("undefined" != typeof gdsdk && "undefined" !== gdsdk.showBanner)
                var t = gdsdk.showBanner()
        }
        ,
        e.prototype.resize = function() {
            t.prototype.resize.call(this);
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            this.popup && this.popup.resize(e)
        }
        ,
        e.prototype.shutdown = function() {
            this.backgroundBase2 = null,
            this.backgroundBaseMask = null,
            this.backBtn = null,
            this.playBtn = null,
            this.musicBtn = null,
            this.armatureDisplay = null,
            this.armatureDisplay2 = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "postmatchstate",
        e
    }(Phaser.State);
    e.default = _
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(6),
    i(0);
    var n = i(5)
      , a = i(1)
      , o = i(7)
      , r = i(17)
      , h = i(9)
      , l = i(2)
      , c = i(11)
      , u = i(8)
      , d = i(18)
      , p = i(16)
      , f = i(0)
      , g = i(4)
      , m = function(t) {
        function e() {
            var i = t.call(this) || this;
            return i.name = e.Name,
            i._armatureDisplay = null,
            i._armatureDisplay2 = null,
            i._armatureDisplay3 = null,
            i._armatureDisplay4 = null,
            i.thePlayer = null,
            i.player1 = null,
            i.player2 = null,
            i.player3 = null,
            i.player4 = null,
            i.tribune = null,
            i.tribune4 = null,
            i.place1 = null,
            i.place2 = null,
            i.place3 = null,
            i.place4 = null,
            i.manager = null,
            i.frame = "",
            i.texts = ["1st place!!!", "2nd place!!!", "3rd place!!!", "4th place", "You lost"],
            i
        }
        return s(e, t),
        e.prototype.init = function() {
            this.game.world.removeAll(),
            this.manager = l.Inventory.instance,
            dragonBones.PhaserFactory.init(this.game)
        }
        ,
        e.prototype.create = function() {
            t.prototype.create.call(this),
            this.background = this.game.add.sprite(0, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase = this.game.add.sprite(0, 0, a.Atlases.Preloader, h.default.getBG()),
            this.backgroundBase2 = this.game.add.sprite(299, 0, a.Atlases.Interface, "bg0000"),
            this.backgroundBase.addChild(this.backgroundBase2),
            this.backgroundBaseMask = this.game.add.graphics(0, 0),
            this.backgroundBaseMask.beginFill(65280, 0),
            this.backgroundBaseMask.drawRect(0, 0, 1398, 480),
            this.backgroundBaseMask.endFill(),
            this.background4 = this.game.add.sprite(200, 240, a.Atlases.Interface, "bg0000"),
            this.background4.anchor.set(.5),
            this._armatureDisplay = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay.x = -50,
            this._armatureDisplay.y = 60,
            this._armatureDisplay.animation.play("idle", 0),
            this._armatureDisplay2 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay2.x = 50,
            this._armatureDisplay2.y = 60,
            this._armatureDisplay2.animation.play("idle", 0),
            this._armatureDisplay3 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay3.x = -50,
            this._armatureDisplay3.y = 60,
            this._armatureDisplay3.animation.play("idle", 0),
            this._armatureDisplay4 = dragonBones.PhaserFactory.factory.buildArmatureDisplay("player"),
            this._armatureDisplay4.x = 50,
            this._armatureDisplay4.y = 60,
            this._armatureDisplay4.animation.play("idle", 0),
            this._armatureDisplay4.visible = !1,
            this.world.addChild(this._armatureDisplay),
            this.world.addChild(this._armatureDisplay2),
            this.world.addChild(this._armatureDisplay3),
            this.world.addChild(this._armatureDisplay4),
            this.musicBtn = new o.default(this.game,"",{},this.toggleMusic,this,a.Atlases.Gameplay),
            this.musicBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.musicBtn.sScale = 42 / this.musicBtn.btn.width,
            this.musicBtn.x = 772,
            this.musicBtn.y = 25,
            this.musicBtn.labelState = this.game.add.image(0, 0, a.Atlases.Gameplay, "InGameMusicButton0000"),
            this.backgroundBase2.addChild(this.musicBtn),
            this.backgroundBase2.addChild(this.background4),
            this.updateSoundButtons(),
            this.logo = this.game.add.sprite(400, 35, a.Atlases.Interface, "bg0000"),
            this.logo.anchor.set(.5),
            this.backgroundBase2.addChild(this.logo),
            this.playBtn = new u.default(this.game,"MENU",a.Constants.stylePlayGreen,this.onPlay,this,a.Atlases.Interface),
            this.playBtn.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.playBtn.x = 720,
            this.playBtn.y = 447,
            this.background4.addChild(this.playBtn),
            this.playBtn.setProp("#000000", 7, "#FFFFFF", 14),
            this.backgroundBase2.addChild(this.playBtn),
            this.branding2 = new o.default(this.game,"",null,this.onMoreGames,this,a.Atlases.Preloader),
            this.branding2.setFrames("branding_l20000", "branding_l20000", "branding_l20000", "branding_l20000"),
            this.branding2.position.set(70, 420),
            this.backgroundBase2.addChild(this.branding2),
            this.leaderBoardBtn = new o.default(this.game,"",null,this.onScoreList,this,a.Atlases.Gameplay),
            this.leaderBoardBtn.setFrames("btn_bg0000", "btn_bg0000", "btn_bg0000", "btn_bg0000"),
            this.leaderBoardBtn.sScale = 1,
            this.leaderBoardBtn.sLabelScale = 1;
            var e = this.game.add.image(0, 0, a.Atlases.Interface, "lead_icon0000");
            e.anchor.set(.5),
            this.leaderBoardBtn.label.parent.addChild(e),
            this.leaderBoardBtn.x = this.branding2.x,
            this.leaderBoardBtn.y = this.branding2.y - 130,
            this.leaderBoardBtn.visible = !1,
            this.backgroundBase2.addChild(this.leaderBoardBtn),
            this.setUp(),
            this.manager.breakTournament(),
            this.resize(),
            new r.default(this.game,this,this.show)
        }
        ,
        e.prototype.show = function() {
            var t = this.game.add.tween(this.place1);
            t.from({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out, !1, 50),
            t.start(),
            t = this.game.add.tween(this.place2),
            t.from({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out, !1, 50),
            t.start(),
            t = this.game.add.tween(this.place3),
            t.from({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out, !1, 50),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.from({
                y: -100
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out, !1, 100),
            t.start(),
            t = this.game.add.tween(this.tribune),
            t.from({
                y: 800
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.from({
                x: -110
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.from({
                x: -110
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.from({
                y: 600
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.from({
                y: 600
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreLabel),
            t.from({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreText),
            t.from({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreBestLabel),
            t.from({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.scoreTotalText),
            t.from({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.playBtn),
            t.from({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            this.player4 && (t = this.game.add.tween(this.place4),
            t.from({
                x: 900
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start(),
            t = this.game.add.tween(this.tribune4),
            t.from({
                x: 900
            }, g.default.PRELOADER_TIME, f.Easing.Back.Out),
            t.start())
        }
        ,
        e.prototype.hide = function() {
            var t = this.game.add.tween(this.place1);
            t.to({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None, !1, 50),
            t.start(),
            t = this.game.add.tween(this.place2),
            t.to({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None, !1, 50),
            t.start(),
            t = this.game.add.tween(this.place3),
            t.to({
                y: -60
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None, !1, 50),
            t.start(),
            t = this.game.add.tween(this.logo),
            t.to({
                y: -100
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None, !1, 100),
            t.start(),
            t = this.game.add.tween(this.tribune),
            t.to({
                y: 800
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.to({
                x: -110
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                x: -110
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.leaderBoardBtn),
            t.to({
                y: 600
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.branding2),
            t.to({
                y: 600
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreLabel),
            t.to({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreText),
            t.to({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreBestLabel),
            t.to({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.scoreTotalText),
            t.to({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.playBtn),
            t.to({
                y: 520
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            this.player4 && (t = this.game.add.tween(this.place4),
            t.to({
                x: 900
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start(),
            t = this.game.add.tween(this.tribune4),
            t.to({
                x: 900
            }, g.default.PRELOADER_TIME, f.Easing.Linear.None),
            t.start())
        }
        ,
        e.prototype.onScoreList = function() {
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.setUp = function() {
            this.tribune = new Phaser.Sprite(this.game,400,448,a.Atlases.Interface,"TribuneFinal0000"),
            this.tribune.anchor.set(.58, 1.2),
            this.tribune4 = new Phaser.Sprite(this.game,716,380,a.Atlases.Interface,"bg0000"),
            this.tribune4.anchor.set(.5),
            this.player1 = new Phaser.Group(this.game),
            this.player1.x = 40,
            this.player1.y = -168,
            this.player2 = new Phaser.Group(this.game),
            this.player2.x = -147,
            this.player2.y = -155,
            this.player3 = new Phaser.Group(this.game),
            this.player3.x = 147,
            this.player3.y = -146,
            this.player1.scale.set(.8),
            this.player2.scale.set(.8),
            this.player3.scale.set(.8),
            this.backgroundBase2.addChild(this.tribune),
            this.backgroundBase2.addChild(this.tribune4),
            this.tribune.addChild(this.player3),
            this.tribune.addChild(this.player1),
            this.tribune.addChild(this.player2);
            var t = this.manager.rounds
              , e = this.manager.tournament.getFinalistsArray()
              , i = l.Inventory.instance.matchData.teams[0]
              , s = l.Inventory.instance.matchData.players[0][0] + 1
              , n = ""
              , o = e.pop();
            1 === o ? (l.PlayersData.switchPlayer(this._armatureDisplay.armature, 2 * (i - 1) + (s - 1), 2 * i - 2),
            this._armatureDisplay.armature.animation.play("happiness"),
            this.thePlayer = this._armatureDisplay.armature,
            this.frame = "cup1",
            n = "1st PLACE!!!") : (l.PlayersData.switchPlayer(this._armatureDisplay.armature, 2 * (e[0] - 1), 2 * e[0] - 2),
            this._armatureDisplay.armature.animation.gotoAndPlay("idle")),
            2 === o ? (l.PlayersData.switchPlayer(this._armatureDisplay2.armature, 2 * (i - 1) + (s - 1), 2 * i - 2),
            this._armatureDisplay2.armature.animation.gotoAndPlay("happiness"),
            this.thePlayer = this._armatureDisplay2.armature,
            this.frame = "cup2",
            n = "2nd PLACE!!!") : (l.PlayersData.switchPlayer(this._armatureDisplay2.armature, 2 * (e[1] - 1), 2 * e[1] - 2),
            this._armatureDisplay2.armature.animation.gotoAndPlay("idle")),
            3 === o ? (l.PlayersData.switchPlayer(this._armatureDisplay3.armature, 2 * (i - 1) + (s - 1), 2 * i - 2),
            this._armatureDisplay3.armature.animation.gotoAndPlay("happiness"),
            this.thePlayer = this._armatureDisplay3.armature,
            this.frame = "cup3",
            n = "3d PLACE!!!") : (l.PlayersData.switchPlayer(this._armatureDisplay3.armature, 2 * (e[2] - 1), 2 * e[2] - 2),
            this._armatureDisplay3.armature.animation.gotoAndPlay("idle")),
            o >= 4 && (n = 4 === o ? "4th PLACE" : "YOU LOST");
            var r = new u.default(this.game,n,a.Constants.styleTitleFinalTournamet,null,null,a.Atlases.Interface);
            r.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            r.setProp("#000000", 7, "#FFFFFF", 15),
            this.logo.addChild(r),
            this.player1.addChild(this._armatureDisplay.armature.display),
            this.player2.addChild(this._armatureDisplay2.armature.display),
            this.player3.addChild(this._armatureDisplay3.armature.display),
            this.place1 = this.game.add.sprite(400, 110, a.Atlases.Gameplay, "btn_bg20000"),
            this.place2 = this.game.add.sprite(294, 110, a.Atlases.Gameplay, "btn_bg20000"),
            this.place3 = this.game.add.sprite(506, 110, a.Atlases.Gameplay, "btn_bg20000"),
            this.place1.anchor.set(.5),
            this.place2.anchor.set(.5),
            this.place3.anchor.set(.5),
            this.backgroundBase2.addChild(this.place1),
            this.backgroundBase2.addChild(this.place2),
            this.backgroundBase2.addChild(this.place3);
            var h = this.game.add.image(0, 0)
              , c = this.game.add.image(0, 0)
              , d = this.game.add.image(0, 0);
            if (this.place1.addChild(h),
            this.place2.addChild(c),
            this.place3.addChild(d),
            h.loadTexture(a.Atlases.Interface, "Emblems00" + (e[0] - 1 < 10 ? "0" : "") + (e[0] - 1)),
            c.loadTexture(a.Atlases.Interface, "Emblems00" + (e[1] - 1 < 10 ? "0" : "") + (e[1] - 1)),
            d.loadTexture(a.Atlases.Interface, "Emblems00" + (e[2] - 1 < 10 ? "0" : "") + (e[2] - 1)),
            h.anchor.set(.5),
            h.scale.set(.25),
            c.anchor.set(.5),
            c.scale.set(.25),
            d.anchor.set(.5),
            d.scale.set(.25),
            o <= 3)
                this.tribune4.visible = !1,
                this.thePlayer.getBone("effects stun").slot.childArmature.animation.gotoAndStop(this.frame, .1);
            else {
                this.place4 = this.game.add.sprite(716, 160, a.Atlases.Gameplay, "btn_bg20000"),
                this.place4.anchor.set(.5),
                this.backgroundBase2.addChild(this.place4);
                var p = this.game.add.image(0, 0, a.Atlases.Interface, "Emblems00" + (i - 1 < 10 ? "0" : "") + (i - 1));
                p.anchor.set(.5),
                p.scale.set(.25),
                this.place4.addChild(p),
                this.player4 = new Phaser.Group(this.game),
                this.player4.x = 40,
                this.player4.y = -72,
                this.player4.scale.set(-.8, .8);
                var f = new Phaser.Image(this.game,0,-23,a.Atlases.Gameplay,"ShadowMC0002");
                f.anchor.set(.5),
                f.scale.set(1.8),
                this.tribune4.addChild(f),
                this.tribune4.addChild(this.player4),
                this._armatureDisplay4.visible = !0,
                l.PlayersData.switchPlayer(this._armatureDisplay4.armature, 2 * (i - 1) + (s - 1), 2 * i - 2),
                this._armatureDisplay4.armature.animation.play("sad", -1),
                this.player4.addChild(this._armatureDisplay4.armature.display)
            }
            this.scoreLabel = new u.default(this.game,"SCORE:",a.Constants.styleIDnetScore,null,null,a.Atlases.Interface),
            this.scoreLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreLabel.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreLabel.x = 250,
            this.scoreLabel.y = 460,
            this.backgroundBase2.addChild(this.scoreLabel),
            this.scoreBestLabel = new u.default(this.game,"TOTAL SCORE:",a.Constants.styleIDnetBestScore,null,null,a.Atlases.Interface),
            this.scoreBestLabel.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreBestLabel.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreBestLabel.x = 460,
            this.scoreBestLabel.y = 460,
            this.backgroundBase2.addChild(this.scoreBestLabel),
            this.scoreText = new u.default(this.game,"",a.Constants.styleIDnetScore2,null,null,a.Atlases.Interface),
            this.scoreText.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreText.x = 330,
            this.scoreText.y = 460,
            this.backgroundBase2.addChild(this.scoreText),
            this.scoreTotalText = new u.default(this.game,"",a.Constants.styleIDnetBestScore2,null,null,a.Atlases.Interface),
            this.scoreTotalText.setFrames("bg0000", "bg0000", "bg0000", "bg0000"),
            this.scoreTotalText.x = 570,
            this.scoreTotalText.y = 460,
            this.backgroundBase2.addChild(this.scoreTotalText),
            this.scoreText.setText(this.manager.getTournamentScores().toString()),
            this.scoreTotalText.setText(this.manager.getTotalScores().toString()),
            this.scoreText.setProp("#000000", 5, "#FFFFFF", 10),
            this.scoreTotalText.setProp("#000000", 5, "#FFFFFF", 10)
        }
        ,
        e.prototype.onMoreGames = function() {
            window.open(p.default.getInstance().getUrl(p.default.Current), "_blank")
        }
        ,
        e.prototype.render = function() {
            dragonBones.PhaserFactory.factory.dragonBones.advanceTime(-1),
            t.prototype.render.call(this)
        }
        ,
        e.prototype.toggleMusic = function() {
            c.default.getInstance().music ? n.default.getInstance().toggleMusic() : c.default.getInstance().sfx ? n.default.getInstance().toggleSfx() : (n.default.getInstance().toggleSfx(),
            n.default.getInstance().toggleMusic()),
            this.updateSoundButtons(),
            n.default.getInstance().play(a.Sounds.Click)
        }
        ,
        e.prototype.updateSoundButtons = function() {
            var t = c.default.getInstance().music ? 0 : 1;
            t += c.default.getInstance().sfx ? 0 : 1,
            this.musicBtn.labelState.loadTexture(a.Atlases.Gameplay, "InGameMusicButton000" + t)
        }
        ,
        e.prototype.onPlay = function() {
            n.default.getInstance().play(a.Sounds.Click),
            l.Inventory.instance.clearTournamentData(),
            new h.default(this.game,this,d.default.Name)
        }
        ,
        e.prototype.resize = function() {
            var e = 1;
            e = this.game.width / a.Constants.WIDTH,
            e = e > 1 ? 1 : e,
            e *= 1.33333,
            this.backgroundBase.scale.set(e),
            this.backgroundBase.alignIn(this.world.bounds, Phaser.TOP_CENTER),
            this.backgroundBaseMask.scale.set(e, e),
            this.backgroundBaseMask.x = this.backgroundBase.x,
            this.backgroundBaseMask.y = this.backgroundBase.y,
            t.prototype.resize.call(this)
        }
        ,
        e.prototype.shutdown = function() {
            this.backgroundBase2 = null,
            this.backgroundBaseMask = null,
            this.playBtn = null,
            this.musicBtn = null,
            this._armatureDisplay = null,
            this._armatureDisplay2 = null,
            t.prototype.shutdown.call(this)
        }
        ,
        e.Name = "finaltournamentstate",
        e
    }(Phaser.State);
    e.default = m
}
, function(t, e, i) {
    "use strict";
    var s = this && this.__extends || function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        ;
        return function(e, i) {
            function s() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
    }();
    e.__esModule = !0,
    i(55),
    i(6),
    i(0);
    var n = i(60), a = i(12), o = i(3), r = i(50), h = i(18), l = i(52), c = i(53), u = i(33), d = i(30), p = i(4), f;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this, {
                    enableDebug: !1,
                    width: 1066,
                    height: 640,
                    renderer: Phaser.WEBGL,
                    parent: "content",
                    transparent: !0,
                    antialias: !0,
                    preserveDrawingBuffer: !1,
                    physicsConfig: null,
                    seed: "",
                    state: null,
                    forceSetTimeOut: !1
                }) || this;
                return e.clearBeforeRender = !1,
                Phaser.Device.whenReady(function() {
                    p.default.isDesktop = e.device.desktop,
                    e._isPad() && (p.default.isDesktop = !1),
                    e.stage.disableVisibilityChange = !0;
                    var t = p.default.isDesktop ? "click" : "touchstart";
                    document.getElementById("content").addEventListener(t, function(t) {
                        e.gameResumed(t)
                    }),
                    document.getElementById("content").addEventListener("SDK_GAME_START", function(t) {
                        e.adsResume()
                    }),
                    document.getElementById("content").addEventListener("SDK_GAME_PAUSE", function(t) {
                        e.adsPause()
                    })
                }),
                e.state.add("game", {
                    create: e.stateCreator.bind(e),
                    preload: e.statePreloader.bind(e)
                }, !0),
                e
            }
            return s(e, t),
            e.prototype._isPad = function() {
                var t = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
                return !!(!t && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) || t
            }
            ,
            e.prototype.statePreloader = function() {
                var t = this;
                ["js/phaser-cachebuster.min.js", "js/phaser-super-storage.min.js", "assets/box2dweb/dragonBones.min.js"].forEach(function(e) {
                    t.load.script(e, e)
                })
            }
            ,
            e.prototype.stateCreator = function() {
                var t = this;
                this.plugins.add(PhaserSuperStorage.StoragePlugin),
                this.plugins.add(PhaserCachebuster.CacheBuster),
                this.storage.forcePromises = !0,
                this.state.add(a.Boot.Name, a.Boot, !1),
                this.state.add(o.default.Name, o.default, !1),
                this.state.add(r.default.Name, r.default, !1),
                this.state.add(a.RandomState.Name, a.RandomState, !1),
                this.state.add(a.TournamentState.Name, a.TournamentState, !1),
                this.state.add(l.default.Name, l.default, !1),
                this.state.add(c.default.Name, c.default, !1),
                this.state.add(h.default.Name, h.default, !1),
                this.state.add(a.Menu.Name, a.Menu, !1),
                this.state.add(u.default.Name, u.default, !1),
                this.state.add(a.Gameplay.Name, a.Gameplay, !1);
                var e = function() {
                    t.recursiveUpdateText(t.stage)
                };
                n.load({
                    custom: {
                        families: ["Aller Display", "CfCrackBold", "Impact", "Impact2", "Impact3"],
                        urls: ["assets/css/AllerDisplay.css", "assets/css/CfCrackBold.css", "assets/css/impact.css", "assets/css/impact2.css", "assets/css/impact3.css"]
                    },
                    active: e,
                    inactive: e
                }),
                this.state.start(a.Boot.Name),
                this.state.remove("game")
            }
            ,
            e.prototype.recursiveUpdateText = function(t) {
                var e = this;
                t instanceof Phaser.Text && (t.dirty = !0),
                t.children && t.children.length > 0 && t.children.forEach(function(t) {
                    e.recursiveUpdateText(t)
                })
            }
            ,
            e.prototype.adsResume = function() {
                this.sound.mute = !1,
                a.Gameplay.isAdsPause = !1
            }
            ,
            e.prototype.adsPause = function() {
                this.sound.mute = !0,
                a.Gameplay.isAdsPause = !0,
                d.default.instance.signalPause && d.default.instance.signalPause.dispatch()
            }
            ,
            e
        }(Phaser.Game);
        t.Game = e
    }(f || (f = {})),
    new f.Game
}
, function(t, e, i) {
    (function(e) {
        t.exports = e.p2 = i(56)
    }
    ).call(e, i(27))
}
, function(t, e, i) {
    var s, s;
    !function(e) {
        var i;
        t.exports = e()
    }(function() {
        var t, e, i;
        return function t(e, i, n) {
            function a(r, h) {
                if (!i[r]) {
                    if (!e[r]) {
                        var l = "function" == typeof s && s;
                        if (!h && l)
                            return s(r, !0);
                        if (o)
                            return o(r, !0);
                        throw new Error("Cannot find module '" + r + "'")
                    }
                    var c = i[r] = {
                        exports: {}
                    };
                    e[r][0].call(c.exports, function(t) {
                        var i = e[r][1][t];
                        return a(i || t)
                    }, c, c.exports, t, e, i, n)
                }
                return i[r].exports
            }
            for (var o = "function" == typeof s && s, r = 0; r < n.length; r++)
                a(n[r]);
            return a
        }({
            1: [function(t, e, i) {
                function s() {}
                var n = t("./Scalar");
                e.exports = s,
                s.lineInt = function(t, e, i) {
                    i = i || 0;
                    var s = [0, 0], a, o, r, h, l, c, u;
                    return a = t[1][1] - t[0][1],
                    o = t[0][0] - t[1][0],
                    r = a * t[0][0] + o * t[0][1],
                    h = e[1][1] - e[0][1],
                    l = e[0][0] - e[1][0],
                    c = h * e[0][0] + l * e[0][1],
                    u = a * l - h * o,
                    n.eq(u, 0, i) || (s[0] = (l * r - o * c) / u,
                    s[1] = (a * c - h * r) / u),
                    s
                }
                ,
                s.segmentsIntersect = function(t, e, i, s) {
                    var n = e[0] - t[0]
                      , a = e[1] - t[1]
                      , o = s[0] - i[0]
                      , r = s[1] - i[1];
                    if (o * a - r * n == 0)
                        return !1;
                    var h = (n * (i[1] - t[1]) + a * (t[0] - i[0])) / (o * a - r * n)
                      , l = (o * (t[1] - i[1]) + r * (i[0] - t[0])) / (r * n - o * a);
                    return h >= 0 && h <= 1 && l >= 0 && l <= 1
                }
            }
            , {
                "./Scalar": 4
            }],
            2: [function(t, e, i) {
                function s() {}
                e.exports = s,
                s.area = function(t, e, i) {
                    return (e[0] - t[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (e[1] - t[1])
                }
                ,
                s.left = function(t, e, i) {
                    return s.area(t, e, i) > 0
                }
                ,
                s.leftOn = function(t, e, i) {
                    return s.area(t, e, i) >= 0
                }
                ,
                s.right = function(t, e, i) {
                    return s.area(t, e, i) < 0
                }
                ,
                s.rightOn = function(t, e, i) {
                    return s.area(t, e, i) <= 0
                }
                ;
                var n = []
                  , a = [];
                s.collinear = function(t, e, i, o) {
                    if (o) {
                        var r = n
                          , h = a;
                        r[0] = e[0] - t[0],
                        r[1] = e[1] - t[1],
                        h[0] = i[0] - e[0],
                        h[1] = i[1] - e[1];
                        var l = r[0] * h[0] + r[1] * h[1]
                          , c = Math.sqrt(r[0] * r[0] + r[1] * r[1])
                          , u = Math.sqrt(h[0] * h[0] + h[1] * h[1]);
                        return Math.acos(l / (c * u)) < o
                    }
                    return 0 == s.area(t, e, i)
                }
                ,
                s.sqdist = function(t, e) {
                    var i = e[0] - t[0]
                      , s = e[1] - t[1];
                    return i * i + s * s
                }
            }
            , {}],
            3: [function(t, e, i) {
                function s() {
                    this.vertices = []
                }
                function n(t, e, i, s, n) {
                    n = n || 0;
                    var a = e[1] - t[1]
                      , o = t[0] - e[0]
                      , h = a * t[0] + o * t[1]
                      , l = s[1] - i[1]
                      , c = i[0] - s[0]
                      , u = l * i[0] + c * i[1]
                      , d = a * c - l * o;
                    return r.eq(d, 0, n) ? [0, 0] : [(c * h - o * u) / d, (a * u - l * h) / d]
                }
                var a = t("./Line")
                  , o = t("./Point")
                  , r = t("./Scalar");
                e.exports = s,
                s.prototype.at = function(t) {
                    var e = this.vertices
                      , i = e.length;
                    return e[t < 0 ? t % i + i : t % i]
                }
                ,
                s.prototype.first = function() {
                    return this.vertices[0]
                }
                ,
                s.prototype.last = function() {
                    return this.vertices[this.vertices.length - 1]
                }
                ,
                s.prototype.clear = function() {
                    this.vertices.length = 0
                }
                ,
                s.prototype.append = function(t, e, i) {
                    if (void 0 === e)
                        throw new Error("From is not given!");
                    if (void 0 === i)
                        throw new Error("To is not given!");
                    if (i - 1 < e)
                        throw new Error("lol1");
                    if (i > t.vertices.length)
                        throw new Error("lol2");
                    if (e < 0)
                        throw new Error("lol3");
                    for (var s = e; s < i; s++)
                        this.vertices.push(t.vertices[s])
                }
                ,
                s.prototype.makeCCW = function() {
                    for (var t = 0, e = this.vertices, i = 1; i < this.vertices.length; ++i)
                        (e[i][1] < e[t][1] || e[i][1] == e[t][1] && e[i][0] > e[t][0]) && (t = i);
                    o.left(this.at(t - 1), this.at(t), this.at(t + 1)) || this.reverse()
                }
                ,
                s.prototype.reverse = function() {
                    for (var t = [], e = 0, i = this.vertices.length; e !== i; e++)
                        t.push(this.vertices.pop());
                    this.vertices = t
                }
                ,
                s.prototype.isReflex = function(t) {
                    return o.right(this.at(t - 1), this.at(t), this.at(t + 1))
                }
                ;
                var h = []
                  , l = [];
                s.prototype.canSee = function(t, e) {
                    var i, s, n = h, r = l;
                    if (o.leftOn(this.at(t + 1), this.at(t), this.at(e)) && o.rightOn(this.at(t - 1), this.at(t), this.at(e)))
                        return !1;
                    s = o.sqdist(this.at(t), this.at(e));
                    for (var c = 0; c !== this.vertices.length; ++c)
                        if ((c + 1) % this.vertices.length !== t && c !== t && o.leftOn(this.at(t), this.at(e), this.at(c + 1)) && o.rightOn(this.at(t), this.at(e), this.at(c)) && (n[0] = this.at(t),
                        n[1] = this.at(e),
                        r[0] = this.at(c),
                        r[1] = this.at(c + 1),
                        i = a.lineInt(n, r),
                        o.sqdist(this.at(t), i) < s))
                            return !1;
                    return !0
                }
                ,
                s.prototype.copy = function(t, e, i) {
                    var n = i || new s;
                    if (n.clear(),
                    t < e)
                        for (var a = t; a <= e; a++)
                            n.vertices.push(this.vertices[a]);
                    else {
                        for (var a = 0; a <= e; a++)
                            n.vertices.push(this.vertices[a]);
                        for (var a = t; a < this.vertices.length; a++)
                            n.vertices.push(this.vertices[a])
                    }
                    return n
                }
                ,
                s.prototype.getCutEdges = function() {
                    for (var t = [], e = [], i = [], n = new s, a = Number.MAX_VALUE, o = 0; o < this.vertices.length; ++o)
                        if (this.isReflex(o))
                            for (var r = 0; r < this.vertices.length; ++r)
                                if (this.canSee(o, r)) {
                                    e = this.copy(o, r, n).getCutEdges(),
                                    i = this.copy(r, o, n).getCutEdges();
                                    for (var h = 0; h < i.length; h++)
                                        e.push(i[h]);
                                    e.length < a && (t = e,
                                    a = e.length,
                                    t.push([this.at(o), this.at(r)]))
                                }
                    return t
                }
                ,
                s.prototype.decomp = function() {
                    var t = this.getCutEdges();
                    return t.length > 0 ? this.slice(t) : [this]
                }
                ,
                s.prototype.slice = function(t) {
                    if (0 == t.length)
                        return [this];
                    if (t instanceof Array && t.length && t[0]instanceof Array && 2 == t[0].length && t[0][0]instanceof Array) {
                        for (var e = [this], i = 0; i < t.length; i++)
                            for (var s = t[i], n = 0; n < e.length; n++) {
                                var a = e[n]
                                  , o = a.slice(s);
                                if (o) {
                                    e.splice(n, 1),
                                    e.push(o[0], o[1]);
                                    break
                                }
                            }
                        return e
                    }
                    var s = t
                      , i = this.vertices.indexOf(s[0])
                      , n = this.vertices.indexOf(s[1]);
                    return -1 != i && -1 != n && [this.copy(i, n), this.copy(n, i)]
                }
                ,
                s.prototype.isSimple = function() {
                    for (var t = this.vertices, e = 0; e < t.length - 1; e++)
                        for (var i = 0; i < e - 1; i++)
                            if (a.segmentsIntersect(t[e], t[e + 1], t[i], t[i + 1]))
                                return !1;
                    for (var e = 1; e < t.length - 2; e++)
                        if (a.segmentsIntersect(t[0], t[t.length - 1], t[e], t[e + 1]))
                            return !1;
                    return !0
                }
                ,
                s.prototype.quickDecomp = function(t, e, i, a, r, h) {
                    r = r || 100,
                    h = h || 0,
                    a = a || 25,
                    t = void 0 !== t ? t : [],
                    e = e || [],
                    i = i || [];
                    var l = [0, 0]
                      , c = [0, 0]
                      , u = [0, 0]
                      , d = 0
                      , p = 0
                      , f = 0
                      , g = 0
                      , m = 0
                      , y = 0
                      , v = 0
                      , b = new s
                      , _ = new s
                      , x = this
                      , w = this.vertices;
                    if (w.length < 3)
                        return t;
                    if (++h > r)
                        return t;
                    for (var P = 0; P < this.vertices.length; ++P)
                        if (x.isReflex(P)) {
                            e.push(x.vertices[P]),
                            d = p = Number.MAX_VALUE;
                            for (var T = 0; T < this.vertices.length; ++T)
                                o.left(x.at(P - 1), x.at(P), x.at(T)) && o.rightOn(x.at(P - 1), x.at(P), x.at(T - 1)) && (u = n(x.at(P - 1), x.at(P), x.at(T), x.at(T - 1)),
                                o.right(x.at(P + 1), x.at(P), u) && (f = o.sqdist(x.vertices[P], u)) < p && (p = f,
                                c = u,
                                y = T)),
                                o.left(x.at(P + 1), x.at(P), x.at(T + 1)) && o.rightOn(x.at(P + 1), x.at(P), x.at(T)) && (u = n(x.at(P + 1), x.at(P), x.at(T), x.at(T + 1)),
                                o.left(x.at(P - 1), x.at(P), u) && (f = o.sqdist(x.vertices[P], u)) < d && (d = f,
                                l = u,
                                m = T));
                            if (y == (m + 1) % this.vertices.length)
                                u[0] = (c[0] + l[0]) / 2,
                                u[1] = (c[1] + l[1]) / 2,
                                i.push(u),
                                P < m ? (b.append(x, P, m + 1),
                                b.vertices.push(u),
                                _.vertices.push(u),
                                0 != y && _.append(x, y, x.vertices.length),
                                _.append(x, 0, P + 1)) : (0 != P && b.append(x, P, x.vertices.length),
                                b.append(x, 0, m + 1),
                                b.vertices.push(u),
                                _.vertices.push(u),
                                _.append(x, y, P + 1));
                            else {
                                if (y > m && (m += this.vertices.length),
                                g = Number.MAX_VALUE,
                                m < y)
                                    return t;
                                for (var T = y; T <= m; ++T)
                                    o.leftOn(x.at(P - 1), x.at(P), x.at(T)) && o.rightOn(x.at(P + 1), x.at(P), x.at(T)) && (f = o.sqdist(x.at(P), x.at(T))) < g && (g = f,
                                    v = T % this.vertices.length);
                                P < v ? (b.append(x, P, v + 1),
                                0 != v && _.append(x, v, w.length),
                                _.append(x, 0, P + 1)) : (0 != P && b.append(x, P, w.length),
                                b.append(x, 0, v + 1),
                                _.append(x, v, P + 1))
                            }
                            return b.vertices.length < _.vertices.length ? (b.quickDecomp(t, e, i, a, r, h),
                            _.quickDecomp(t, e, i, a, r, h)) : (_.quickDecomp(t, e, i, a, r, h),
                            b.quickDecomp(t, e, i, a, r, h)),
                            t
                        }
                    return t.push(this),
                    t
                }
                ,
                s.prototype.removeCollinearPoints = function(t) {
                    for (var e = 0, i = this.vertices.length - 1; this.vertices.length > 3 && i >= 0; --i)
                        o.collinear(this.at(i - 1), this.at(i), this.at(i + 1), t) && (this.vertices.splice(i % this.vertices.length, 1),
                        i--,
                        e++);
                    return e
                }
            }
            , {
                "./Line": 1,
                "./Point": 2,
                "./Scalar": 4
            }],
            4: [function(t, e, i) {
                function s() {}
                e.exports = s,
                s.eq = function(t, e, i) {
                    return i = i || 0,
                    Math.abs(t - e) < i
                }
            }
            , {}],
            5: [function(t, e, i) {
                e.exports = {
                    Polygon: t("./Polygon"),
                    Point: t("./Point")
                }
            }
            , {
                "./Point": 2,
                "./Polygon": 3
            }],
            6: [function(t, e, i) {
                e.exports = {
                    name: "p2",
                    version: "0.7.0",
                    description: "A JavaScript 2D physics engine.",
                    author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                    keywords: ["p2.js", "p2", "physics", "engine", "2d"],
                    main: "./src/p2.js",
                    engines: {
                        node: "*"
                    },
                    repository: {
                        type: "git",
                        url: "https://github.com/schteppe/p2.js.git"
                    },
                    bugs: {
                        url: "https://github.com/schteppe/p2.js/issues"
                    },
                    licenses: [{
                        type: "MIT"
                    }],
                    devDependencies: {
                        grunt: "^0.4.5",
                        "grunt-contrib-jshint": "^0.11.2",
                        "grunt-contrib-nodeunit": "^0.4.1",
                        "grunt-contrib-uglify": "~0.4.0",
                        "grunt-contrib-watch": "~0.5.0",
                        "grunt-browserify": "~2.0.1",
                        "grunt-contrib-concat": "^0.4.0"
                    },
                    dependencies: {
                        "poly-decomp": "0.1.0"
                    }
                }
            }
            , {}],
            7: [function(t, e, i) {
                function s(t) {
                    this.lowerBound = n.create(),
                    t && t.lowerBound && n.copy(this.lowerBound, t.lowerBound),
                    this.upperBound = n.create(),
                    t && t.upperBound && n.copy(this.upperBound, t.upperBound)
                }
                var n = t("../math/vec2")
                  , a = t("../utils/Utils");
                e.exports = s;
                var o = n.create();
                s.prototype.setFromPoints = function(t, e, i, s) {
                    var a = this.lowerBound
                      , r = this.upperBound;
                    "number" != typeof i && (i = 0),
                    0 !== i ? n.rotate(a, t[0], i) : n.copy(a, t[0]),
                    n.copy(r, a);
                    for (var h = Math.cos(i), l = Math.sin(i), c = 1; c < t.length; c++) {
                        var u = t[c];
                        if (0 !== i) {
                            var d = u[0]
                              , p = u[1];
                            o[0] = h * d - l * p,
                            o[1] = l * d + h * p,
                            u = o
                        }
                        for (var f = 0; f < 2; f++)
                            u[f] > r[f] && (r[f] = u[f]),
                            u[f] < a[f] && (a[f] = u[f])
                    }
                    e && (n.add(this.lowerBound, this.lowerBound, e),
                    n.add(this.upperBound, this.upperBound, e)),
                    s && (this.lowerBound[0] -= s,
                    this.lowerBound[1] -= s,
                    this.upperBound[0] += s,
                    this.upperBound[1] += s)
                }
                ,
                s.prototype.copy = function(t) {
                    n.copy(this.lowerBound, t.lowerBound),
                    n.copy(this.upperBound, t.upperBound)
                }
                ,
                s.prototype.extend = function(t) {
                    for (var e = 2; e--; ) {
                        var i = t.lowerBound[e];
                        this.lowerBound[e] > i && (this.lowerBound[e] = i);
                        var s = t.upperBound[e];
                        this.upperBound[e] < s && (this.upperBound[e] = s)
                    }
                }
                ,
                s.prototype.overlaps = function(t) {
                    var e = this.lowerBound
                      , i = this.upperBound
                      , s = t.lowerBound
                      , n = t.upperBound;
                    return (s[0] <= i[0] && i[0] <= n[0] || e[0] <= n[0] && n[0] <= i[0]) && (s[1] <= i[1] && i[1] <= n[1] || e[1] <= n[1] && n[1] <= i[1])
                }
                ,
                s.prototype.containsPoint = function(t) {
                    var e = this.lowerBound
                      , i = this.upperBound;
                    return e[0] <= t[0] && t[0] <= i[0] && e[1] <= t[1] && t[1] <= i[1]
                }
                ,
                s.prototype.overlapsRay = function(t) {
                    var e = 0
                      , i = 1 / t.direction[0]
                      , s = 1 / t.direction[1]
                      , n = (this.lowerBound[0] - t.from[0]) * i
                      , a = (this.upperBound[0] - t.from[0]) * i
                      , o = (this.lowerBound[1] - t.from[1]) * s
                      , r = (this.upperBound[1] - t.from[1]) * s
                      , h = Math.max(Math.max(Math.min(n, a), Math.min(o, r)))
                      , l = Math.min(Math.min(Math.max(n, a), Math.max(o, r)));
                    return l < 0 ? -1 : h > l ? -1 : h
                }
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57
            }],
            8: [function(t, e, i) {
                function s(t) {
                    this.type = t,
                    this.result = [],
                    this.world = null,
                    this.boundingVolumeType = s.AABB
                }
                var n = t("../math/vec2")
                  , a = t("../objects/Body");
                e.exports = s,
                s.AABB = 1,
                s.BOUNDING_CIRCLE = 2,
                s.prototype.setWorld = function(t) {
                    this.world = t
                }
                ,
                s.prototype.getCollisionPairs = function(t) {}
                ;
                var o = n.create();
                s.boundingRadiusCheck = function(t, e) {
                    n.sub(o, t.position, e.position);
                    var i = n.squaredLength(o)
                      , s = t.boundingRadius + e.boundingRadius;
                    return i <= s * s
                }
                ,
                s.aabbCheck = function(t, e) {
                    return t.getAABB().overlaps(e.getAABB())
                }
                ,
                s.prototype.boundingVolumeCheck = function(t, e) {
                    var i;
                    switch (this.boundingVolumeType) {
                    case s.BOUNDING_CIRCLE:
                        i = s.boundingRadiusCheck(t, e);
                        break;
                    case s.AABB:
                        i = s.aabbCheck(t, e);
                        break;
                    default:
                        throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType)
                    }
                    return i
                }
                ,
                s.canCollide = function(t, e) {
                    var i = a.KINEMATIC
                      , s = a.STATIC;
                    return (t.type !== s || e.type !== s) && (!(t.type === i && e.type === s || t.type === s && e.type === i) && ((t.type !== i || e.type !== i) && ((t.sleepState !== a.SLEEPING || e.sleepState !== a.SLEEPING) && !(t.sleepState === a.SLEEPING && e.type === s || e.sleepState === a.SLEEPING && t.type === s))))
                }
                ,
                s.NAIVE = 1,
                s.SAP = 2
            }
            , {
                "../math/vec2": 30,
                "../objects/Body": 31
            }],
            9: [function(t, e, i) {
                function s() {
                    h.call(this, h.NAIVE)
                }
                var n = t("../shapes/Circle")
                  , a = t("../shapes/Plane")
                  , o = t("../shapes/Shape")
                  , r = t("../shapes/Particle")
                  , h = t("../collision/Broadphase")
                  , l = t("../math/vec2");
                e.exports = s,
                s.prototype = new h,
                s.prototype.constructor = s,
                s.prototype.getCollisionPairs = function(t) {
                    var e = t.bodies
                      , i = this.result;
                    i.length = 0;
                    for (var s = 0, n = e.length; s !== n; s++)
                        for (var a = e[s], o = 0; o < s; o++) {
                            var r = e[o];
                            h.canCollide(a, r) && this.boundingVolumeCheck(a, r) && i.push(a, r)
                        }
                    return i
                }
                ,
                s.prototype.aabbQuery = function(t, e, i) {
                    i = i || [];
                    for (var s = t.bodies, n = 0; n < s.length; n++) {
                        var a = s[n];
                        a.aabbNeedsUpdate && a.updateAABB(),
                        a.aabb.overlaps(e) && i.push(a)
                    }
                    return i
                }
            }
            , {
                "../collision/Broadphase": 8,
                "../math/vec2": 30,
                "../shapes/Circle": 39,
                "../shapes/Particle": 43,
                "../shapes/Plane": 44,
                "../shapes/Shape": 45
            }],
            10: [function(t, e, i) {
                function s() {
                    this.contactEquations = [],
                    this.frictionEquations = [],
                    this.enableFriction = !0,
                    this.enabledEquations = !0,
                    this.slipForce = 10,
                    this.frictionCoefficient = .3,
                    this.surfaceVelocity = 0,
                    this.contactEquationPool = new u({
                        size: 32
                    }),
                    this.frictionEquationPool = new d({
                        size: 64
                    }),
                    this.restitution = 0,
                    this.stiffness = f.DEFAULT_STIFFNESS,
                    this.relaxation = f.DEFAULT_RELAXATION,
                    this.frictionStiffness = f.DEFAULT_STIFFNESS,
                    this.frictionRelaxation = f.DEFAULT_RELAXATION,
                    this.enableFrictionReduction = !0,
                    this.collidingBodiesLastStep = new p,
                    this.contactSkinSize = .01
                }
                function n(t, e) {
                    o.set(t.vertices[0], .5 * -e.length, -e.radius),
                    o.set(t.vertices[1], .5 * e.length, -e.radius),
                    o.set(t.vertices[2], .5 * e.length, e.radius),
                    o.set(t.vertices[3], .5 * -e.length, e.radius)
                }
                function a(t, e, i, s) {
                    for (var n = K, a = J, l = Z, c = Q, u = t, d = e.vertices, p = null, f = 0; f !== d.length + 1; f++) {
                        var g = d[f % d.length]
                          , m = d[(f + 1) % d.length];
                        o.rotate(n, g, s),
                        o.rotate(a, m, s),
                        h(n, n, i),
                        h(a, a, i),
                        r(l, n, u),
                        r(c, a, u);
                        var y = o.crossLength(l, c);
                        if (null === p && (p = y),
                        y * p <= 0)
                            return !1;
                        p = y
                    }
                    return !0
                }
                var o = t("../math/vec2")
                  , r = o.sub
                  , h = o.add
                  , l = o.dot
                  , c = t("../utils/Utils")
                  , u = t("../utils/ContactEquationPool")
                  , d = t("../utils/FrictionEquationPool")
                  , p = t("../utils/TupleDictionary")
                  , f = t("../equations/Equation")
                  , g = t("../equations/ContactEquation")
                  , m = t("../equations/FrictionEquation")
                  , y = t("../shapes/Circle")
                  , v = t("../shapes/Convex")
                  , b = t("../shapes/Shape")
                  , _ = t("../objects/Body")
                  , x = t("../shapes/Box");
                e.exports = s;
                var w = o.fromValues(0, 1)
                  , P = o.fromValues(0, 0)
                  , T = o.fromValues(0, 0)
                  , S = o.fromValues(0, 0)
                  , C = o.fromValues(0, 0)
                  , A = o.fromValues(0, 0)
                  , E = o.fromValues(0, 0)
                  , I = o.fromValues(0, 0)
                  , B = o.fromValues(0, 0)
                  , M = o.fromValues(0, 0)
                  , k = o.fromValues(0, 0)
                  , O = o.fromValues(0, 0)
                  , D = o.fromValues(0, 0)
                  , L = o.fromValues(0, 0)
                  , R = o.fromValues(0, 0)
                  , F = o.fromValues(0, 0)
                  , G = o.fromValues(0, 0)
                  , N = o.fromValues(0, 0)
                  , U = o.fromValues(0, 0)
                  , j = []
                  , X = o.create()
                  , W = o.create();
                s.prototype.bodiesOverlap = function(t, e) {
                    for (var i = X, s = W, n = 0, a = t.shapes.length; n !== a; n++) {
                        var o = t.shapes[n];
                        t.toWorldFrame(i, o.position);
                        for (var r = 0, h = e.shapes.length; r !== h; r++) {
                            var l = e.shapes[r];
                            if (e.toWorldFrame(s, l.position),
                            this[o.type | l.type](t, o, i, o.angle + t.angle, e, l, s, l.angle + e.angle, !0))
                                return !0
                        }
                    }
                    return !1
                }
                ,
                s.prototype.collidedLastStep = function(t, e) {
                    var i = 0 | t.id
                      , s = 0 | e.id;
                    return !!this.collidingBodiesLastStep.get(i, s)
                }
                ,
                s.prototype.reset = function() {
                    this.collidingBodiesLastStep.reset();
                    for (var t = this.contactEquations, e = t.length; e--; ) {
                        var i = t[e]
                          , s = i.bodyA.id
                          , n = i.bodyB.id;
                        this.collidingBodiesLastStep.set(s, n, !0)
                    }
                    for (var a = this.contactEquations, o = this.frictionEquations, r = 0; r < a.length; r++)
                        this.contactEquationPool.release(a[r]);
                    for (var r = 0; r < o.length; r++)
                        this.frictionEquationPool.release(o[r]);
                    this.contactEquations.length = this.frictionEquations.length = 0
                }
                ,
                s.prototype.createContactEquation = function(t, e, i, s) {
                    var n = this.contactEquationPool.get();
                    return n.bodyA = t,
                    n.bodyB = e,
                    n.shapeA = i,
                    n.shapeB = s,
                    n.restitution = this.restitution,
                    n.firstImpact = !this.collidedLastStep(t, e),
                    n.stiffness = this.stiffness,
                    n.relaxation = this.relaxation,
                    n.needsUpdate = !0,
                    n.enabled = this.enabledEquations,
                    n.offset = this.contactSkinSize,
                    n
                }
                ,
                s.prototype.createFrictionEquation = function(t, e, i, s) {
                    var n = this.frictionEquationPool.get();
                    return n.bodyA = t,
                    n.bodyB = e,
                    n.shapeA = i,
                    n.shapeB = s,
                    n.setSlipForce(this.slipForce),
                    n.frictionCoefficient = this.frictionCoefficient,
                    n.relativeVelocity = this.surfaceVelocity,
                    n.enabled = this.enabledEquations,
                    n.needsUpdate = !0,
                    n.stiffness = this.frictionStiffness,
                    n.relaxation = this.frictionRelaxation,
                    n.contactEquations.length = 0,
                    n
                }
                ,
                s.prototype.createFrictionFromContact = function(t) {
                    var e = this.createFrictionEquation(t.bodyA, t.bodyB, t.shapeA, t.shapeB);
                    return o.copy(e.contactPointA, t.contactPointA),
                    o.copy(e.contactPointB, t.contactPointB),
                    o.rotate90cw(e.t, t.normalA),
                    e.contactEquations.push(t),
                    e
                }
                ,
                s.prototype.createFrictionFromAverage = function(t) {
                    var e = this.contactEquations[this.contactEquations.length - 1]
                      , i = this.createFrictionEquation(e.bodyA, e.bodyB, e.shapeA, e.shapeB)
                      , s = e.bodyA
                      , n = e.bodyB;
                    o.set(i.contactPointA, 0, 0),
                    o.set(i.contactPointB, 0, 0),
                    o.set(i.t, 0, 0);
                    for (var a = 0; a !== t; a++)
                        e = this.contactEquations[this.contactEquations.length - 1 - a],
                        e.bodyA === s ? (o.add(i.t, i.t, e.normalA),
                        o.add(i.contactPointA, i.contactPointA, e.contactPointA),
                        o.add(i.contactPointB, i.contactPointB, e.contactPointB)) : (o.sub(i.t, i.t, e.normalA),
                        o.add(i.contactPointA, i.contactPointA, e.contactPointB),
                        o.add(i.contactPointB, i.contactPointB, e.contactPointA)),
                        i.contactEquations.push(e);
                    var r = 1 / t;
                    return o.scale(i.contactPointA, i.contactPointA, r),
                    o.scale(i.contactPointB, i.contactPointB, r),
                    o.normalize(i.t, i.t),
                    o.rotate90cw(i.t, i.t),
                    i
                }
                ,
                s.prototype[b.LINE | b.CONVEX] = s.prototype.convexLine = function(t, e, i, s, n, a, o, r, h) {
                    return !h && 0
                }
                ,
                s.prototype[b.LINE | b.BOX] = s.prototype.lineBox = function(t, e, i, s, n, a, o, r, h) {
                    return !h && 0
                }
                ;
                var H = new x({
                    width: 1,
                    height: 1
                })
                  , V = o.create();
                s.prototype[b.CAPSULE | b.CONVEX] = s.prototype[b.CAPSULE | b.BOX] = s.prototype.convexCapsule = function(t, e, i, s, a, r, h, l, c) {
                    var u = V;
                    o.set(u, r.length / 2, 0),
                    o.rotate(u, u, l),
                    o.add(u, u, h);
                    var d = this.circleConvex(a, r, u, l, t, e, i, s, c, r.radius);
                    o.set(u, -r.length / 2, 0),
                    o.rotate(u, u, l),
                    o.add(u, u, h);
                    var p = this.circleConvex(a, r, u, l, t, e, i, s, c, r.radius);
                    if (c && (d || p))
                        return !0;
                    var f = H;
                    return n(f, r),
                    this.convexConvex(t, e, i, s, a, f, h, l, c) + d + p
                }
                ,
                s.prototype[b.CAPSULE | b.LINE] = s.prototype.lineCapsule = function(t, e, i, s, n, a, o, r, h) {
                    return !h && 0
                }
                ;
                var Y = o.create()
                  , q = o.create()
                  , z = new x({
                    width: 1,
                    height: 1
                });
                s.prototype[b.CAPSULE | b.CAPSULE] = s.prototype.capsuleCapsule = function(t, e, i, s, a, r, h, l, c) {
                    for (var u, d = Y, p = q, f = 0, g = 0; g < 2; g++) {
                        o.set(d, (0 === g ? -1 : 1) * e.length / 2, 0),
                        o.rotate(d, d, s),
                        o.add(d, d, i);
                        for (var m = 0; m < 2; m++) {
                            o.set(p, (0 === m ? -1 : 1) * r.length / 2, 0),
                            o.rotate(p, p, l),
                            o.add(p, p, h),
                            this.enableFrictionReduction && (u = this.enableFriction,
                            this.enableFriction = !1);
                            var y = this.circleCircle(t, e, d, s, a, r, p, l, c, e.radius, r.radius);
                            if (this.enableFrictionReduction && (this.enableFriction = u),
                            c && y)
                                return !0;
                            f += y
                        }
                    }
                    this.enableFrictionReduction && (u = this.enableFriction,
                    this.enableFriction = !1);
                    var v = z;
                    n(v, e);
                    var b = this.convexCapsule(t, v, i, s, a, r, h, l, c);
                    if (this.enableFrictionReduction && (this.enableFriction = u),
                    c && b)
                        return !0;
                    if (f += b,
                    this.enableFrictionReduction) {
                        var u = this.enableFriction;
                        this.enableFriction = !1
                    }
                    n(v, r);
                    var _ = this.convexCapsule(a, v, h, l, t, e, i, s, c);
                    return this.enableFrictionReduction && (this.enableFriction = u),
                    !(!c || !_) || (f += _,
                    this.enableFrictionReduction && f && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(f)),
                    f)
                }
                ,
                s.prototype[b.LINE | b.LINE] = s.prototype.lineLine = function(t, e, i, s, n, a, o, r, h) {
                    return !h && 0
                }
                ,
                s.prototype[b.PLANE | b.LINE] = s.prototype.planeLine = function(t, e, i, s, n, a, c, u, d) {
                    var p = P
                      , f = T
                      , g = S
                      , m = C
                      , y = A
                      , v = E
                      , b = I
                      , _ = B
                      , x = M
                      , k = j
                      , O = 0;
                    o.set(p, -a.length / 2, 0),
                    o.set(f, a.length / 2, 0),
                    o.rotate(g, p, u),
                    o.rotate(m, f, u),
                    h(g, g, c),
                    h(m, m, c),
                    o.copy(p, g),
                    o.copy(f, m),
                    r(y, f, p),
                    o.normalize(v, y),
                    o.rotate90cw(x, v),
                    o.rotate(_, w, s),
                    k[0] = p,
                    k[1] = f;
                    for (var D = 0; D < k.length; D++) {
                        var L = k[D];
                        r(b, L, i);
                        var R = l(b, _);
                        if (R < 0) {
                            if (d)
                                return !0;
                            var F = this.createContactEquation(t, n, e, a);
                            O++,
                            o.copy(F.normalA, _),
                            o.normalize(F.normalA, F.normalA),
                            o.scale(b, _, R),
                            r(F.contactPointA, L, b),
                            r(F.contactPointA, F.contactPointA, t.position),
                            r(F.contactPointB, L, c),
                            h(F.contactPointB, F.contactPointB, c),
                            r(F.contactPointB, F.contactPointB, n.position),
                            this.contactEquations.push(F),
                            this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(F))
                        }
                    }
                    return !d && (this.enableFrictionReduction || O && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(O)),
                    O)
                }
                ,
                s.prototype[b.PARTICLE | b.CAPSULE] = s.prototype.particleCapsule = function(t, e, i, s, n, a, o, r, h) {
                    return this.circleLine(t, e, i, s, n, a, o, r, h, a.radius, 0)
                }
                ,
                s.prototype[b.CIRCLE | b.LINE] = s.prototype.circleLine = function(t, e, i, s, n, a, c, u, d, p, f) {
                    var p = p || 0
                      , f = void 0 !== f ? f : e.radius
                      , g = P
                      , m = T
                      , y = S
                      , v = C
                      , b = A
                      , _ = E
                      , x = I
                      , w = B
                      , F = M
                      , G = k
                      , N = O
                      , U = D
                      , X = L
                      , W = R
                      , H = j;
                    o.set(w, -a.length / 2, 0),
                    o.set(F, a.length / 2, 0),
                    o.rotate(G, w, u),
                    o.rotate(N, F, u),
                    h(G, G, c),
                    h(N, N, c),
                    o.copy(w, G),
                    o.copy(F, N),
                    r(_, F, w),
                    o.normalize(x, _),
                    o.rotate90cw(b, x),
                    r(U, i, w);
                    var V = l(U, b);
                    r(v, w, c),
                    r(X, i, c);
                    var Y = f + p;
                    if (Math.abs(V) < Y) {
                        o.scale(g, b, V),
                        r(y, i, g),
                        o.scale(m, b, l(b, X)),
                        o.normalize(m, m),
                        o.scale(m, m, p),
                        h(y, y, m);
                        var q = l(x, y)
                          , z = l(x, w)
                          , K = l(x, F);
                        if (q > z && q < K) {
                            if (d)
                                return !0;
                            var J = this.createContactEquation(t, n, e, a);
                            return o.scale(J.normalA, g, -1),
                            o.normalize(J.normalA, J.normalA),
                            o.scale(J.contactPointA, J.normalA, f),
                            h(J.contactPointA, J.contactPointA, i),
                            r(J.contactPointA, J.contactPointA, t.position),
                            r(J.contactPointB, y, c),
                            h(J.contactPointB, J.contactPointB, c),
                            r(J.contactPointB, J.contactPointB, n.position),
                            this.contactEquations.push(J),
                            this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(J)),
                            1
                        }
                    }
                    H[0] = w,
                    H[1] = F;
                    for (var Z = 0; Z < H.length; Z++) {
                        var Q = H[Z];
                        if (r(U, Q, i),
                        o.squaredLength(U) < Math.pow(Y, 2)) {
                            if (d)
                                return !0;
                            var J = this.createContactEquation(t, n, e, a);
                            return o.copy(J.normalA, U),
                            o.normalize(J.normalA, J.normalA),
                            o.scale(J.contactPointA, J.normalA, f),
                            h(J.contactPointA, J.contactPointA, i),
                            r(J.contactPointA, J.contactPointA, t.position),
                            r(J.contactPointB, Q, c),
                            o.scale(W, J.normalA, -p),
                            h(J.contactPointB, J.contactPointB, W),
                            h(J.contactPointB, J.contactPointB, c),
                            r(J.contactPointB, J.contactPointB, n.position),
                            this.contactEquations.push(J),
                            this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(J)),
                            1
                        }
                    }
                    return 0
                }
                ,
                s.prototype[b.CIRCLE | b.CAPSULE] = s.prototype.circleCapsule = function(t, e, i, s, n, a, o, r, h) {
                    return this.circleLine(t, e, i, s, n, a, o, r, h, a.radius)
                }
                ,
                s.prototype[b.CIRCLE | b.CONVEX] = s.prototype[b.CIRCLE | b.BOX] = s.prototype.circleConvex = function(t, e, i, s, n, l, c, u, d, p) {
                    for (var p = "number" == typeof p ? p : e.radius, f = P, g = T, m = S, y = C, v = A, b = E, _ = I, x = B, w = M, N = k, U = O, j = -1, X = null, W = D, H = L, V = R, Y = F, q = G, z = !1, K = Number.MAX_VALUE, J = 0, Z = l.vertices, Q = 0; Q !== Z.length + 1; Q++) {
                        var $ = Z[Q % Z.length]
                          , tt = Z[(Q + 1) % Z.length];
                        if (o.rotate(f, $, u),
                        o.rotate(g, tt, u),
                        h(f, f, c),
                        h(g, g, c),
                        r(m, g, f),
                        o.normalize(y, m),
                        o.rotate90cw(v, y),
                        o.scale(V, v, -e.radius),
                        h(V, V, i),
                        a(V, l, c, u)) {
                            o.sub(Y, f, V);
                            var et = Math.abs(o.dot(Y, v));
                            et < K && (o.copy(q, V),
                            K = et,
                            o.scale(H, v, et),
                            o.add(H, H, V),
                            z = !0)
                        }
                    }
                    if (z) {
                        if (d)
                            return !0;
                        var it = this.createContactEquation(t, n, e, l);
                        return o.sub(it.normalA, q, i),
                        o.normalize(it.normalA, it.normalA),
                        o.scale(it.contactPointA, it.normalA, p),
                        h(it.contactPointA, it.contactPointA, i),
                        r(it.contactPointA, it.contactPointA, t.position),
                        r(it.contactPointB, H, c),
                        h(it.contactPointB, it.contactPointB, c),
                        r(it.contactPointB, it.contactPointB, n.position),
                        this.contactEquations.push(it),
                        this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(it)),
                        1
                    }
                    if (p > 0)
                        for (var Q = 0; Q < Z.length; Q++) {
                            var st = Z[Q];
                            if (o.rotate(U, st, u),
                            h(U, U, c),
                            r(N, U, i),
                            o.squaredLength(N) < Math.pow(p, 2)) {
                                if (d)
                                    return !0;
                                var it = this.createContactEquation(t, n, e, l);
                                return o.copy(it.normalA, N),
                                o.normalize(it.normalA, it.normalA),
                                o.scale(it.contactPointA, it.normalA, p),
                                h(it.contactPointA, it.contactPointA, i),
                                r(it.contactPointA, it.contactPointA, t.position),
                                r(it.contactPointB, U, c),
                                h(it.contactPointB, it.contactPointB, c),
                                r(it.contactPointB, it.contactPointB, n.position),
                                this.contactEquations.push(it),
                                this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(it)),
                                1
                            }
                        }
                    return 0
                }
                ;
                var K = o.create()
                  , J = o.create()
                  , Z = o.create()
                  , Q = o.create();
                s.prototype[b.PARTICLE | b.CONVEX] = s.prototype[b.PARTICLE | b.BOX] = s.prototype.particleConvex = function(t, e, i, s, n, c, u, d, p) {
                    var f = P
                      , g = T
                      , m = S
                      , y = C
                      , v = A
                      , b = E
                      , _ = I
                      , x = B
                      , w = M
                      , j = k
                      , X = O
                      , W = -1
                      , H = null
                      , V = D
                      , Y = L
                      , q = R
                      , z = F
                      , K = G
                      , J = N
                      , Z = U
                      , Q = Number.MAX_VALUE
                      , $ = 0
                      , tt = !1
                      , et = c.vertices;
                    if (!a(i, c, u, d))
                        return 0;
                    if (p)
                        return !0;
                    for (var it = null, st = 0; st !== et.length + 1; st++) {
                        var nt = et[st % et.length]
                          , at = et[(st + 1) % et.length];
                        o.rotate(f, nt, d),
                        o.rotate(g, at, d),
                        h(f, f, u),
                        h(g, g, u),
                        r(m, g, f),
                        o.normalize(y, m),
                        o.rotate90cw(v, y),
                        r(j, i, f);
                        var ot = l(j, v);
                        r(b, f, u),
                        r(_, i, u),
                        o.sub(J, f, i);
                        var rt = Math.abs(o.dot(J, v));
                        rt < Q && (Q = rt,
                        o.scale(Y, v, rt),
                        o.add(Y, Y, i),
                        o.copy(Z, v),
                        tt = !0)
                    }
                    if (tt) {
                        var ht = this.createContactEquation(t, n, e, c);
                        return o.scale(ht.normalA, Z, -1),
                        o.normalize(ht.normalA, ht.normalA),
                        o.set(ht.contactPointA, 0, 0),
                        h(ht.contactPointA, ht.contactPointA, i),
                        r(ht.contactPointA, ht.contactPointA, t.position),
                        r(ht.contactPointB, Y, u),
                        h(ht.contactPointB, ht.contactPointB, u),
                        r(ht.contactPointB, ht.contactPointB, n.position),
                        this.contactEquations.push(ht),
                        this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(ht)),
                        1
                    }
                    return 0
                }
                ,
                s.prototype[b.CIRCLE] = s.prototype.circleCircle = function(t, e, i, s, n, a, l, c, u, d, p) {
                    var f = P
                      , d = d || e.radius
                      , p = p || a.radius;
                    r(f, i, l);
                    var g = d + p;
                    if (o.squaredLength(f) > Math.pow(g, 2))
                        return 0;
                    if (u)
                        return !0;
                    var m = this.createContactEquation(t, n, e, a);
                    return r(m.normalA, l, i),
                    o.normalize(m.normalA, m.normalA),
                    o.scale(m.contactPointA, m.normalA, d),
                    o.scale(m.contactPointB, m.normalA, -p),
                    h(m.contactPointA, m.contactPointA, i),
                    r(m.contactPointA, m.contactPointA, t.position),
                    h(m.contactPointB, m.contactPointB, l),
                    r(m.contactPointB, m.contactPointB, n.position),
                    this.contactEquations.push(m),
                    this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(m)),
                    1
                }
                ,
                s.prototype[b.PLANE | b.CONVEX] = s.prototype[b.PLANE | b.BOX] = s.prototype.planeConvex = function(t, e, i, s, n, a, c, u, d) {
                    var p = P
                      , f = T
                      , g = S
                      , m = 0;
                    o.rotate(f, w, s);
                    for (var y = 0; y !== a.vertices.length; y++) {
                        var v = a.vertices[y];
                        if (o.rotate(p, v, u),
                        h(p, p, c),
                        r(g, p, i),
                        l(g, f) <= 0) {
                            if (d)
                                return !0;
                            m++;
                            var b = this.createContactEquation(t, n, e, a);
                            r(g, p, i),
                            o.copy(b.normalA, f);
                            var _ = l(g, b.normalA);
                            o.scale(g, b.normalA, _),
                            r(b.contactPointB, p, n.position),
                            r(b.contactPointA, p, g),
                            r(b.contactPointA, b.contactPointA, t.position),
                            this.contactEquations.push(b),
                            this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b))
                        }
                    }
                    return this.enableFrictionReduction && this.enableFriction && m && this.frictionEquations.push(this.createFrictionFromAverage(m)),
                    m
                }
                ,
                s.prototype[b.PARTICLE | b.PLANE] = s.prototype.particlePlane = function(t, e, i, s, n, a, h, c, u) {
                    var d = P
                      , p = T;
                    c = c || 0,
                    r(d, i, h),
                    o.rotate(p, w, c);
                    var f = l(d, p);
                    if (f > 0)
                        return 0;
                    if (u)
                        return !0;
                    var g = this.createContactEquation(n, t, a, e);
                    return o.copy(g.normalA, p),
                    o.scale(d, g.normalA, f),
                    r(g.contactPointA, i, d),
                    r(g.contactPointA, g.contactPointA, n.position),
                    r(g.contactPointB, i, t.position),
                    this.contactEquations.push(g),
                    this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(g)),
                    1
                }
                ,
                s.prototype[b.CIRCLE | b.PARTICLE] = s.prototype.circleParticle = function(t, e, i, s, n, a, l, c, u) {
                    var d = P;
                    if (r(d, l, i),
                    o.squaredLength(d) > Math.pow(e.radius, 2))
                        return 0;
                    if (u)
                        return !0;
                    var p = this.createContactEquation(t, n, e, a);
                    return o.copy(p.normalA, d),
                    o.normalize(p.normalA, p.normalA),
                    o.scale(p.contactPointA, p.normalA, e.radius),
                    h(p.contactPointA, p.contactPointA, i),
                    r(p.contactPointA, p.contactPointA, t.position),
                    r(p.contactPointB, l, n.position),
                    this.contactEquations.push(p),
                    this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(p)),
                    1
                }
                ;
                var $ = new y({
                    radius: 1
                })
                  , tt = o.create()
                  , et = o.create()
                  , it = o.create();
                s.prototype[b.PLANE | b.CAPSULE] = s.prototype.planeCapsule = function(t, e, i, s, n, a, r, l, c) {
                    var u = tt
                      , d = et
                      , p = $
                      , f = it;
                    o.set(u, -a.length / 2, 0),
                    o.rotate(u, u, l),
                    h(u, u, r),
                    o.set(d, a.length / 2, 0),
                    o.rotate(d, d, l),
                    h(d, d, r),
                    p.radius = a.radius;
                    var g;
                    this.enableFrictionReduction && (g = this.enableFriction,
                    this.enableFriction = !1);
                    var m = this.circlePlane(n, p, u, 0, t, e, i, s, c)
                      , y = this.circlePlane(n, p, d, 0, t, e, i, s, c);
                    if (this.enableFrictionReduction && (this.enableFriction = g),
                    c)
                        return m || y;
                    var v = m + y;
                    return this.enableFrictionReduction && v && this.frictionEquations.push(this.createFrictionFromAverage(v)),
                    v
                }
                ,
                s.prototype[b.CIRCLE | b.PLANE] = s.prototype.circlePlane = function(t, e, i, s, n, a, c, u, d) {
                    var p = t
                      , f = e
                      , g = i
                      , m = n
                      , y = a
                      , v = c
                      , b = u;
                    b = b || 0;
                    var _ = P
                      , x = T
                      , C = S;
                    r(_, g, v),
                    o.rotate(x, w, b);
                    var A = l(x, _);
                    if (A > f.radius)
                        return 0;
                    if (d)
                        return !0;
                    var E = this.createContactEquation(m, p, a, e);
                    return o.copy(E.normalA, x),
                    o.scale(E.contactPointB, E.normalA, -f.radius),
                    h(E.contactPointB, E.contactPointB, g),
                    r(E.contactPointB, E.contactPointB, p.position),
                    o.scale(C, E.normalA, A),
                    r(E.contactPointA, _, C),
                    h(E.contactPointA, E.contactPointA, v),
                    r(E.contactPointA, E.contactPointA, m.position),
                    this.contactEquations.push(E),
                    this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(E)),
                    1
                }
                ,
                s.prototype[b.CONVEX] = s.prototype[b.CONVEX | b.BOX] = s.prototype[b.BOX] = s.prototype.convexConvex = function(t, e, i, n, a, c, u, d, p, f) {
                    var g = P
                      , m = T
                      , y = S
                      , v = C
                      , b = A
                      , _ = E
                      , x = I
                      , w = B
                      , k = M
                      , O = 0
                      , f = "number" == typeof f ? f : 0;
                    if (!s.findSeparatingAxis(e, i, n, c, u, d, g))
                        return 0;
                    r(w, u, i),
                    l(g, w) > 0 && o.scale(g, g, -1);
                    var D = s.getClosestEdge(e, n, g, !0)
                      , L = s.getClosestEdge(c, d, g);
                    if (-1 === D || -1 === L)
                        return 0;
                    for (var R = 0; R < 2; R++) {
                        var F = D
                          , G = L
                          , N = e
                          , U = c
                          , j = i
                          , X = u
                          , W = n
                          , H = d
                          , V = t
                          , Y = a;
                        if (0 === R) {
                            var q;
                            q = F,
                            F = G,
                            G = q,
                            q = N,
                            N = U,
                            U = q,
                            q = j,
                            j = X,
                            X = q,
                            q = W,
                            W = H,
                            H = q,
                            q = V,
                            V = Y,
                            Y = q
                        }
                        for (var z = G; z < G + 2; z++) {
                            var K = U.vertices[(z + U.vertices.length) % U.vertices.length];
                            o.rotate(m, K, H),
                            h(m, m, X);
                            for (var J = 0, Z = F - 1; Z < F + 2; Z++) {
                                var Q = N.vertices[(Z + N.vertices.length) % N.vertices.length]
                                  , $ = N.vertices[(Z + 1 + N.vertices.length) % N.vertices.length];
                                o.rotate(y, Q, W),
                                o.rotate(v, $, W),
                                h(y, y, j),
                                h(v, v, j),
                                r(b, v, y),
                                o.rotate90cw(k, b),
                                o.normalize(k, k),
                                r(w, m, y);
                                var tt = l(k, w);
                                (Z === F && tt <= f || Z !== F && tt <= 0) && J++
                            }
                            if (J >= 3) {
                                if (p)
                                    return !0;
                                var et = this.createContactEquation(V, Y, N, U);
                                O++;
                                var Q = N.vertices[F % N.vertices.length]
                                  , $ = N.vertices[(F + 1) % N.vertices.length];
                                o.rotate(y, Q, W),
                                o.rotate(v, $, W),
                                h(y, y, j),
                                h(v, v, j),
                                r(b, v, y),
                                o.rotate90cw(et.normalA, b),
                                o.normalize(et.normalA, et.normalA),
                                r(w, m, y);
                                var tt = l(et.normalA, w);
                                o.scale(x, et.normalA, tt),
                                r(et.contactPointA, m, j),
                                r(et.contactPointA, et.contactPointA, x),
                                h(et.contactPointA, et.contactPointA, j),
                                r(et.contactPointA, et.contactPointA, V.position),
                                r(et.contactPointB, m, X),
                                h(et.contactPointB, et.contactPointB, X),
                                r(et.contactPointB, et.contactPointB, Y.position),
                                this.contactEquations.push(et),
                                this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(et))
                            }
                        }
                    }
                    return this.enableFrictionReduction && this.enableFriction && O && this.frictionEquations.push(this.createFrictionFromAverage(O)),
                    O
                }
                ;
                var st = o.fromValues(0, 0);
                s.projectConvexOntoAxis = function(t, e, i, s, n) {
                    var a = null, r = null, h, c, u = st;
                    o.rotate(u, s, -i);
                    for (var d = 0; d < t.vertices.length; d++)
                        h = t.vertices[d],
                        c = l(h, u),
                        (null === a || c > a) && (a = c),
                        (null === r || c < r) && (r = c);
                    if (r > a) {
                        var p = r;
                        r = a,
                        a = p
                    }
                    var f = l(e, s);
                    o.set(n, r + f, a + f)
                }
                ;
                var nt = o.fromValues(0, 0)
                  , at = o.fromValues(0, 0)
                  , ot = o.fromValues(0, 0)
                  , rt = o.fromValues(0, 0)
                  , ht = o.fromValues(0, 0)
                  , lt = o.fromValues(0, 0);
                s.findSeparatingAxis = function(t, e, i, n, a, h, l) {
                    var c = null
                      , u = !1
                      , d = !1
                      , p = nt
                      , f = at
                      , g = ot
                      , m = rt
                      , y = ht
                      , v = lt;
                    if (t instanceof x && n instanceof x)
                        for (var b = 0; 2 !== b; b++) {
                            var _ = t
                              , w = i;
                            1 === b && (_ = n,
                            w = h);
                            for (var P = 0; 2 !== P; P++) {
                                0 === P ? o.set(m, 0, 1) : 1 === P && o.set(m, 1, 0),
                                0 !== w && o.rotate(m, m, w),
                                s.projectConvexOntoAxis(t, e, i, m, y),
                                s.projectConvexOntoAxis(n, a, h, m, v);
                                var T = y
                                  , S = v
                                  , C = !1;
                                y[0] > v[0] && (S = y,
                                T = v,
                                C = !0);
                                var A = S[0] - T[1];
                                u = A <= 0,
                                (null === c || A > c) && (o.copy(l, m),
                                c = A,
                                d = u)
                            }
                        }
                    else
                        for (var b = 0; 2 !== b; b++) {
                            var _ = t
                              , w = i;
                            1 === b && (_ = n,
                            w = h);
                            for (var P = 0; P !== _.vertices.length; P++) {
                                o.rotate(f, _.vertices[P], w),
                                o.rotate(g, _.vertices[(P + 1) % _.vertices.length], w),
                                r(p, g, f),
                                o.rotate90cw(m, p),
                                o.normalize(m, m),
                                s.projectConvexOntoAxis(t, e, i, m, y),
                                s.projectConvexOntoAxis(n, a, h, m, v);
                                var T = y
                                  , S = v
                                  , C = !1;
                                y[0] > v[0] && (S = y,
                                T = v,
                                C = !0);
                                var A = S[0] - T[1];
                                u = A <= 0,
                                (null === c || A > c) && (o.copy(l, m),
                                c = A,
                                d = u)
                            }
                        }
                    return d
                }
                ;
                var ct = o.fromValues(0, 0)
                  , ut = o.fromValues(0, 0)
                  , dt = o.fromValues(0, 0);
                s.getClosestEdge = function(t, e, i, s) {
                    var n = ct
                      , a = ut
                      , h = dt;
                    o.rotate(n, i, -e),
                    s && o.scale(n, n, -1);
                    for (var c = -1, u = t.vertices.length, d = -1, p = 0; p !== u; p++) {
                        r(a, t.vertices[(p + 1) % u], t.vertices[p % u]),
                        o.rotate90cw(h, a),
                        o.normalize(h, h);
                        var f = l(h, n);
                        (-1 === c || f > d) && (c = p % u,
                        d = f)
                    }
                    return c
                }
                ;
                var pt = o.create()
                  , ft = o.create()
                  , gt = o.create()
                  , mt = o.create()
                  , yt = o.create()
                  , vt = o.create()
                  , bt = o.create();
                s.prototype[b.CIRCLE | b.HEIGHTFIELD] = s.prototype.circleHeightfield = function(t, e, i, s, n, a, l, c, u, d) {
                    var p = a.heights
                      , d = d || e.radius
                      , f = a.elementWidth
                      , g = ft
                      , m = pt
                      , y = yt
                      , v = bt
                      , b = vt
                      , _ = gt
                      , x = mt
                      , w = Math.floor((i[0] - d - l[0]) / f)
                      , P = Math.ceil((i[0] + d - l[0]) / f);
                    w < 0 && (w = 0),
                    P >= p.length && (P = p.length - 1);
                    for (var T = p[w], S = p[P], C = w; C < P; C++)
                        p[C] < S && (S = p[C]),
                        p[C] > T && (T = p[C]);
                    if (i[1] - d > T)
                        return !u && 0;
                    for (var A = !1, C = w; C < P; C++) {
                        o.set(_, C * f, p[C]),
                        o.set(x, (C + 1) * f, p[C + 1]),
                        o.add(_, _, l),
                        o.add(x, x, l),
                        o.sub(b, x, _),
                        o.rotate(b, b, Math.PI / 2),
                        o.normalize(b, b),
                        o.scale(m, b, -d),
                        o.add(m, m, i),
                        o.sub(g, m, _);
                        var E = o.dot(g, b);
                        if (m[0] >= _[0] && m[0] < x[0] && E <= 0) {
                            if (u)
                                return !0;
                            A = !0,
                            o.scale(g, b, -E),
                            o.add(y, m, g),
                            o.copy(v, b);
                            var I = this.createContactEquation(n, t, a, e);
                            o.copy(I.normalA, v),
                            o.scale(I.contactPointB, I.normalA, -d),
                            h(I.contactPointB, I.contactPointB, i),
                            r(I.contactPointB, I.contactPointB, t.position),
                            o.copy(I.contactPointA, y),
                            o.sub(I.contactPointA, I.contactPointA, n.position),
                            this.contactEquations.push(I),
                            this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(I))
                        }
                    }
                    if (A = !1,
                    d > 0)
                        for (var C = w; C <= P; C++)
                            if (o.set(_, C * f, p[C]),
                            o.add(_, _, l),
                            o.sub(g, i, _),
                            o.squaredLength(g) < Math.pow(d, 2)) {
                                if (u)
                                    return !0;
                                A = !0;
                                var I = this.createContactEquation(n, t, a, e);
                                o.copy(I.normalA, g),
                                o.normalize(I.normalA, I.normalA),
                                o.scale(I.contactPointB, I.normalA, -d),
                                h(I.contactPointB, I.contactPointB, i),
                                r(I.contactPointB, I.contactPointB, t.position),
                                r(I.contactPointA, _, l),
                                h(I.contactPointA, I.contactPointA, l),
                                r(I.contactPointA, I.contactPointA, n.position),
                                this.contactEquations.push(I),
                                this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(I))
                            }
                    return A ? 1 : 0
                }
                ;
                var _t = o.create()
                  , xt = o.create()
                  , wt = o.create()
                  , Pt = new v({
                    vertices: [o.create(), o.create(), o.create(), o.create()]
                });
                s.prototype[b.BOX | b.HEIGHTFIELD] = s.prototype[b.CONVEX | b.HEIGHTFIELD] = s.prototype.convexHeightfield = function(t, e, i, s, n, a, r, h, l) {
                    var c = a.heights
                      , u = a.elementWidth
                      , d = _t
                      , p = xt
                      , f = wt
                      , g = Pt
                      , m = Math.floor((t.aabb.lowerBound[0] - r[0]) / u)
                      , y = Math.ceil((t.aabb.upperBound[0] - r[0]) / u);
                    m < 0 && (m = 0),
                    y >= c.length && (y = c.length - 1);
                    for (var v = c[m], b = c[y], _ = m; _ < y; _++)
                        c[_] < b && (b = c[_]),
                        c[_] > v && (v = c[_]);
                    if (t.aabb.lowerBound[1] > v)
                        return !l && 0;
                    for (var x = !1, w = 0, _ = m; _ < y; _++) {
                        o.set(d, _ * u, c[_]),
                        o.set(p, (_ + 1) * u, c[_ + 1]),
                        o.add(d, d, r),
                        o.add(p, p, r);
                        var P = 100;
                        o.set(f, .5 * (p[0] + d[0]), .5 * (p[1] + d[1] - 100)),
                        o.sub(g.vertices[0], p, f),
                        o.sub(g.vertices[1], d, f),
                        o.copy(g.vertices[2], g.vertices[1]),
                        o.copy(g.vertices[3], g.vertices[0]),
                        g.vertices[2][1] -= 100,
                        g.vertices[3][1] -= 100,
                        w += this.convexConvex(t, e, i, s, n, g, f, 0, l)
                    }
                    return w
                }
            }
            , {
                "../equations/ContactEquation": 21,
                "../equations/Equation": 22,
                "../equations/FrictionEquation": 23,
                "../math/vec2": 30,
                "../objects/Body": 31,
                "../shapes/Box": 37,
                "../shapes/Circle": 39,
                "../shapes/Convex": 40,
                "../shapes/Shape": 45,
                "../utils/ContactEquationPool": 48,
                "../utils/FrictionEquationPool": 49,
                "../utils/TupleDictionary": 56,
                "../utils/Utils": 57
            }],
            11: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    this.from = t.from ? a.fromValues(t.from[0], t.from[1]) : a.create(),
                    this.to = t.to ? a.fromValues(t.to[0], t.to[1]) : a.create(),
                    this.checkCollisionResponse = void 0 === t.checkCollisionResponse || t.checkCollisionResponse,
                    this.skipBackfaces = !!t.skipBackfaces,
                    this.collisionMask = void 0 !== t.collisionMask ? t.collisionMask : -1,
                    this.collisionGroup = void 0 !== t.collisionGroup ? t.collisionGroup : -1,
                    this.mode = void 0 !== t.mode ? t.mode : s.ANY,
                    this.callback = t.callback || function(t) {}
                    ,
                    this.direction = a.create(),
                    this.length = 1,
                    this.update()
                }
                function n(t, e, i) {
                    a.sub(u, i, t);
                    var s = a.dot(u, e);
                    return a.scale(d, e, s),
                    a.add(d, d, t),
                    a.squaredDistance(i, d)
                }
                e.exports = s;
                var a = t("../math/vec2")
                  , o = t("../collision/RaycastResult")
                  , r = t("../shapes/Shape")
                  , h = t("../collision/AABB");
                s.prototype.constructor = s,
                s.CLOSEST = 1,
                s.ANY = 2,
                s.ALL = 4,
                s.prototype.update = function() {
                    var t = this.direction;
                    a.sub(t, this.to, this.from),
                    this.length = a.length(t),
                    a.normalize(t, t)
                }
                ,
                s.prototype.intersectBodies = function(t, e) {
                    for (var i = 0, s = e.length; !t.shouldStop(this) && i < s; i++) {
                        var n = e[i]
                          , a = n.getAABB();
                        (a.overlapsRay(this) >= 0 || a.containsPoint(this.from)) && this.intersectBody(t, n)
                    }
                }
                ;
                var l = a.create();
                s.prototype.intersectBody = function(t, e) {
                    var i = this.checkCollisionResponse;
                    if (!i || e.collisionResponse)
                        for (var s = l, n = 0, o = e.shapes.length; n < o; n++) {
                            var r = e.shapes[n];
                            if ((!i || r.collisionResponse) && (0 != (this.collisionGroup & r.collisionMask) && 0 != (r.collisionGroup & this.collisionMask))) {
                                a.rotate(s, r.position, e.angle),
                                a.add(s, s, e.position);
                                var h = r.angle + e.angle;
                                if (this.intersectShape(t, r, h, s, e),
                                t.shouldStop(this))
                                    break
                            }
                        }
                }
                ,
                s.prototype.intersectShape = function(t, e, i, s, a) {
                    n(this.from, this.direction, s) > e.boundingRadius * e.boundingRadius || (this._currentBody = a,
                    this._currentShape = e,
                    e.raycast(t, this, s, i),
                    this._currentBody = this._currentShape = null)
                }
                ,
                s.prototype.getAABB = function(t) {
                    var e = this.to
                      , i = this.from;
                    a.set(t.lowerBound, Math.min(e[0], i[0]), Math.min(e[1], i[1])),
                    a.set(t.upperBound, Math.max(e[0], i[0]), Math.max(e[1], i[1]))
                }
                ;
                var c = a.create();
                s.prototype.reportIntersection = function(t, e, i, n) {
                    var o = this.from
                      , r = this.to
                      , h = this._currentShape
                      , l = this._currentBody;
                    if (!(this.skipBackfaces && a.dot(i, this.direction) > 0))
                        switch (this.mode) {
                        case s.ALL:
                            t.set(i, h, l, e, n),
                            this.callback(t);
                            break;
                        case s.CLOSEST:
                            (e < t.fraction || !t.hasHit()) && t.set(i, h, l, e, n);
                            break;
                        case s.ANY:
                            t.set(i, h, l, e, n)
                        }
                }
                ;
                var u = a.create()
                  , d = a.create()
            }
            , {
                "../collision/AABB": 7,
                "../collision/RaycastResult": 12,
                "../math/vec2": 30,
                "../shapes/Shape": 45
            }],
            12: [function(t, e, i) {
                function s() {
                    this.normal = n.create(),
                    this.shape = null,
                    this.body = null,
                    this.faceIndex = -1,
                    this.fraction = -1,
                    this.isStopped = !1
                }
                var n = t("../math/vec2")
                  , a = t("../collision/Ray");
                e.exports = s,
                s.prototype.reset = function() {
                    n.set(this.normal, 0, 0),
                    this.shape = null,
                    this.body = null,
                    this.faceIndex = -1,
                    this.fraction = -1,
                    this.isStopped = !1
                }
                ,
                s.prototype.getHitDistance = function(t) {
                    return n.distance(t.from, t.to) * this.fraction
                }
                ,
                s.prototype.hasHit = function() {
                    return -1 !== this.fraction
                }
                ,
                s.prototype.getHitPoint = function(t, e) {
                    n.lerp(t, e.from, e.to, this.fraction)
                }
                ,
                s.prototype.stop = function() {
                    this.isStopped = !0
                }
                ,
                s.prototype.shouldStop = function(t) {
                    return this.isStopped || -1 !== this.fraction && t.mode === a.ANY
                }
                ,
                s.prototype.set = function(t, e, i, s, a) {
                    n.copy(this.normal, t),
                    this.shape = e,
                    this.body = i,
                    this.fraction = s,
                    this.faceIndex = a
                }
            }
            , {
                "../collision/Ray": 11,
                "../math/vec2": 30
            }],
            13: [function(t, e, i) {
                function s() {
                    a.call(this, a.SAP),
                    this.axisList = [],
                    this.axisIndex = 0;
                    var t = this;
                    this._addBodyHandler = function(e) {
                        t.axisList.push(e.body)
                    }
                    ,
                    this._removeBodyHandler = function(e) {
                        var i = t.axisList.indexOf(e.body);
                        -1 !== i && t.axisList.splice(i, 1)
                    }
                }
                var n = t("../utils/Utils")
                  , a = t("../collision/Broadphase");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.setWorld = function(t) {
                    this.axisList.length = 0,
                    n.appendArray(this.axisList, t.bodies),
                    t.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler),
                    t.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler),
                    this.world = t
                }
                ,
                s.sortAxisList = function(t, e) {
                    e |= 0;
                    for (var i = 1, s = t.length; i < s; i++) {
                        for (var n = t[i], a = i - 1; a >= 0 && !(t[a].aabb.lowerBound[e] <= n.aabb.lowerBound[e]); a--)
                            t[a + 1] = t[a];
                        t[a + 1] = n
                    }
                    return t
                }
                ,
                s.prototype.sortList = function() {
                    var t = this.axisList
                      , e = this.axisIndex;
                    s.sortAxisList(t, e)
                }
                ,
                s.prototype.getCollisionPairs = function(t) {
                    var e = this.axisList
                      , i = this.result
                      , s = this.axisIndex;
                    i.length = 0;
                    for (var n = e.length; n--; ) {
                        var o = e[n];
                        o.aabbNeedsUpdate && o.updateAABB()
                    }
                    this.sortList();
                    for (var r = 0, h = 0 | e.length; r !== h; r++)
                        for (var l = e[r], c = r + 1; c < h; c++) {
                            var u = e[c]
                              , d = u.aabb.lowerBound[s] <= l.aabb.upperBound[s];
                            if (!d)
                                break;
                            a.canCollide(l, u) && this.boundingVolumeCheck(l, u) && i.push(l, u)
                        }
                    return i
                }
                ,
                s.prototype.aabbQuery = function(t, e, i) {
                    i = i || [],
                    this.sortList();
                    var s = this.axisIndex
                      , n = "x";
                    1 === s && (n = "y"),
                    2 === s && (n = "z");
                    for (var a = this.axisList, o = e.lowerBound[n], r = e.upperBound[n], h = 0; h < a.length; h++) {
                        var l = a[h];
                        l.aabbNeedsUpdate && l.updateAABB(),
                        l.aabb.overlaps(e) && i.push(l)
                    }
                    return i
                }
            }
            , {
                "../collision/Broadphase": 8,
                "../utils/Utils": 57
            }],
            14: [function(t, e, i) {
                function s(t, e, i, s) {
                    this.type = i,
                    s = n.defaults(s, {
                        collideConnected: !0,
                        wakeUpBodies: !0
                    }),
                    this.equations = [],
                    this.bodyA = t,
                    this.bodyB = e,
                    this.collideConnected = s.collideConnected,
                    s.wakeUpBodies && (t && t.wakeUp(),
                    e && e.wakeUp())
                }
                e.exports = s;
                var n = t("../utils/Utils");
                s.prototype.update = function() {
                    throw new Error("method update() not implmemented in this Constraint subclass!")
                }
                ,
                s.DISTANCE = 1,
                s.GEAR = 2,
                s.LOCK = 3,
                s.PRISMATIC = 4,
                s.REVOLUTE = 5,
                s.prototype.setStiffness = function(t) {
                    for (var e = this.equations, i = 0; i !== e.length; i++) {
                        var s = e[i];
                        s.stiffness = t,
                        s.needsUpdate = !0
                    }
                }
                ,
                s.prototype.setRelaxation = function(t) {
                    for (var e = this.equations, i = 0; i !== e.length; i++) {
                        var s = e[i];
                        s.relaxation = t,
                        s.needsUpdate = !0
                    }
                }
            }
            , {
                "../utils/Utils": 57
            }],
            15: [function(t, e, i) {
                function s(t, e, i) {
                    i = r.defaults(i, {
                        localAnchorA: [0, 0],
                        localAnchorB: [0, 0]
                    }),
                    n.call(this, t, e, n.DISTANCE, i),
                    this.localAnchorA = o.fromValues(i.localAnchorA[0], i.localAnchorA[1]),
                    this.localAnchorB = o.fromValues(i.localAnchorB[0], i.localAnchorB[1]);
                    var s = this.localAnchorA
                      , h = this.localAnchorB;
                    if (this.distance = 0,
                    "number" == typeof i.distance)
                        this.distance = i.distance;
                    else {
                        var l = o.create()
                          , c = o.create()
                          , u = o.create();
                        o.rotate(l, s, t.angle),
                        o.rotate(c, h, e.angle),
                        o.add(u, e.position, c),
                        o.sub(u, u, l),
                        o.sub(u, u, t.position),
                        this.distance = o.length(u)
                    }
                    var d;
                    d = void 0 === i.maxForce ? Number.MAX_VALUE : i.maxForce;
                    var p = new a(t,e,-d,d);
                    this.equations = [p],
                    this.maxForce = d;
                    var u = o.create()
                      , f = o.create()
                      , g = o.create()
                      , m = this;
                    p.computeGq = function() {
                        var t = this.bodyA
                          , e = this.bodyB
                          , i = t.position
                          , n = e.position;
                        return o.rotate(f, s, t.angle),
                        o.rotate(g, h, e.angle),
                        o.add(u, n, g),
                        o.sub(u, u, f),
                        o.sub(u, u, i),
                        o.length(u) - m.distance
                    }
                    ,
                    this.setMaxForce(d),
                    this.upperLimitEnabled = !1,
                    this.upperLimit = 1,
                    this.lowerLimitEnabled = !1,
                    this.lowerLimit = 0,
                    this.position = 0
                }
                var n = t("./Constraint")
                  , a = t("../equations/Equation")
                  , o = t("../math/vec2")
                  , r = t("../utils/Utils");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s;
                var h = o.create()
                  , l = o.create()
                  , c = o.create();
                s.prototype.update = function() {
                    var t = this.equations[0]
                      , e = this.bodyA
                      , i = this.bodyB
                      , s = this.distance
                      , n = e.position
                      , a = i.position
                      , r = this.equations[0]
                      , u = t.G;
                    o.rotate(l, this.localAnchorA, e.angle),
                    o.rotate(c, this.localAnchorB, i.angle),
                    o.add(h, a, c),
                    o.sub(h, h, l),
                    o.sub(h, h, n),
                    this.position = o.length(h);
                    var d = !1;
                    if (this.upperLimitEnabled && this.position > this.upperLimit && (r.maxForce = 0,
                    r.minForce = -this.maxForce,
                    this.distance = this.upperLimit,
                    d = !0),
                    this.lowerLimitEnabled && this.position < this.lowerLimit && (r.maxForce = this.maxForce,
                    r.minForce = 0,
                    this.distance = this.lowerLimit,
                    d = !0),
                    (this.lowerLimitEnabled || this.upperLimitEnabled) && !d)
                        return void (r.enabled = !1);
                    r.enabled = !0,
                    o.normalize(h, h);
                    var p = o.crossLength(l, h)
                      , f = o.crossLength(c, h);
                    u[0] = -h[0],
                    u[1] = -h[1],
                    u[2] = -p,
                    u[3] = h[0],
                    u[4] = h[1],
                    u[5] = f
                }
                ,
                s.prototype.setMaxForce = function(t) {
                    var e = this.equations[0];
                    e.minForce = -t,
                    e.maxForce = t
                }
                ,
                s.prototype.getMaxForce = function() {
                    return this.equations[0].maxForce
                }
            }
            , {
                "../equations/Equation": 22,
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Constraint": 14
            }],
            16: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, n.GEAR, i),
                    this.ratio = void 0 !== i.ratio ? i.ratio : 1,
                    this.angle = void 0 !== i.angle ? i.angle : e.angle - this.ratio * t.angle,
                    i.angle = this.angle,
                    i.ratio = this.ratio,
                    this.equations = [new o(t,e,i)],
                    void 0 !== i.maxTorque && this.setMaxTorque(i.maxTorque)
                }
                var n = t("./Constraint")
                  , a = t("../equations/Equation")
                  , o = t("../equations/AngleLockEquation")
                  , r = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.update = function() {
                    var t = this.equations[0];
                    t.ratio !== this.ratio && t.setRatio(this.ratio),
                    t.angle = this.angle
                }
                ,
                s.prototype.setMaxTorque = function(t) {
                    this.equations[0].setMaxTorque(t)
                }
                ,
                s.prototype.getMaxTorque = function(t) {
                    return this.equations[0].maxForce
                }
            }
            , {
                "../equations/AngleLockEquation": 20,
                "../equations/Equation": 22,
                "../math/vec2": 30,
                "./Constraint": 14
            }],
            17: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, n.LOCK, i);
                    var s = void 0 === i.maxForce ? Number.MAX_VALUE : i.maxForce
                      , r = i.localAngleB || 0
                      , h = new o(t,e,-s,s)
                      , l = new o(t,e,-s,s)
                      , c = new o(t,e,-s,s)
                      , u = a.create()
                      , d = a.create()
                      , p = this;
                    h.computeGq = function() {
                        return a.rotate(u, p.localOffsetB, t.angle),
                        a.sub(d, e.position, t.position),
                        a.sub(d, d, u),
                        d[0]
                    }
                    ,
                    l.computeGq = function() {
                        return a.rotate(u, p.localOffsetB, t.angle),
                        a.sub(d, e.position, t.position),
                        a.sub(d, d, u),
                        d[1]
                    }
                    ;
                    var f = a.create()
                      , g = a.create();
                    c.computeGq = function() {
                        return a.rotate(f, p.localOffsetB, e.angle - p.localAngleB),
                        a.scale(f, f, -1),
                        a.sub(d, t.position, e.position),
                        a.add(d, d, f),
                        a.rotate(g, f, -Math.PI / 2),
                        a.normalize(g, g),
                        a.dot(d, g)
                    }
                    ,
                    this.localOffsetB = a.create(),
                    i.localOffsetB ? a.copy(this.localOffsetB, i.localOffsetB) : (a.sub(this.localOffsetB, e.position, t.position),
                    a.rotate(this.localOffsetB, this.localOffsetB, -t.angle)),
                    this.localAngleB = 0,
                    "number" == typeof i.localAngleB ? this.localAngleB = i.localAngleB : this.localAngleB = e.angle - t.angle,
                    this.equations.push(h, l, c),
                    this.setMaxForce(s)
                }
                var n = t("./Constraint")
                  , a = t("../math/vec2")
                  , o = t("../equations/Equation");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.setMaxForce = function(t) {
                    for (var e = this.equations, i = 0; i < this.equations.length; i++)
                        e[i].maxForce = t,
                        e[i].minForce = -t
                }
                ,
                s.prototype.getMaxForce = function() {
                    return this.equations[0].maxForce
                }
                ;
                var r = a.create()
                  , h = a.create()
                  , l = a.create()
                  , c = a.fromValues(1, 0)
                  , u = a.fromValues(0, 1);
                s.prototype.update = function() {
                    var t = this.equations[0]
                      , e = this.equations[1]
                      , i = this.equations[2]
                      , s = this.bodyA
                      , n = this.bodyB;
                    a.rotate(r, this.localOffsetB, s.angle),
                    a.rotate(h, this.localOffsetB, n.angle - this.localAngleB),
                    a.scale(h, h, -1),
                    a.rotate(l, h, Math.PI / 2),
                    a.normalize(l, l),
                    t.G[0] = -1,
                    t.G[1] = 0,
                    t.G[2] = -a.crossLength(r, c),
                    t.G[3] = 1,
                    e.G[0] = 0,
                    e.G[1] = -1,
                    e.G[2] = -a.crossLength(r, u),
                    e.G[4] = 1,
                    i.G[0] = -l[0],
                    i.G[1] = -l[1],
                    i.G[3] = l[0],
                    i.G[4] = l[1],
                    i.G[5] = a.crossLength(h, l)
                }
            }
            , {
                "../equations/Equation": 22,
                "../math/vec2": 30,
                "./Constraint": 14
            }],
            18: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, n.PRISMATIC, i);
                    var s = r.fromValues(0, 0)
                      , l = r.fromValues(1, 0)
                      , c = r.fromValues(0, 0);
                    i.localAnchorA && r.copy(s, i.localAnchorA),
                    i.localAxisA && r.copy(l, i.localAxisA),
                    i.localAnchorB && r.copy(c, i.localAnchorB),
                    this.localAnchorA = s,
                    this.localAnchorB = c,
                    this.localAxisA = l;
                    var u = this.maxForce = void 0 !== i.maxForce ? i.maxForce : Number.MAX_VALUE
                      , d = new o(t,e,-u,u)
                      , p = new r.create
                      , f = new r.create
                      , g = new r.create
                      , m = new r.create;
                    if (d.computeGq = function() {
                        return r.dot(g, m)
                    }
                    ,
                    d.updateJacobian = function() {
                        var i = this.G
                          , n = t.position
                          , a = e.position;
                        r.rotate(p, s, t.angle),
                        r.rotate(f, c, e.angle),
                        r.add(g, a, f),
                        r.sub(g, g, n),
                        r.sub(g, g, p),
                        r.rotate(m, l, t.angle + Math.PI / 2),
                        i[0] = -m[0],
                        i[1] = -m[1],
                        i[2] = -r.crossLength(p, m) + r.crossLength(m, g),
                        i[3] = m[0],
                        i[4] = m[1],
                        i[5] = r.crossLength(f, m)
                    }
                    ,
                    this.equations.push(d),
                    !i.disableRotationalLock) {
                        var y = new h(t,e,-u,u);
                        this.equations.push(y)
                    }
                    this.position = 0,
                    this.velocity = 0,
                    this.lowerLimitEnabled = void 0 !== i.lowerLimit,
                    this.upperLimitEnabled = void 0 !== i.upperLimit,
                    this.lowerLimit = void 0 !== i.lowerLimit ? i.lowerLimit : 0,
                    this.upperLimit = void 0 !== i.upperLimit ? i.upperLimit : 1,
                    this.upperLimitEquation = new a(t,e),
                    this.lowerLimitEquation = new a(t,e),
                    this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0,
                    this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = u,
                    this.motorEquation = new o(t,e),
                    this.motorEnabled = !1,
                    this.motorSpeed = 0;
                    var v = this
                      , b = this.motorEquation
                      , _ = b.computeGW;
                    b.computeGq = function() {
                        return 0
                    }
                    ,
                    b.computeGW = function() {
                        var t = this.G
                          , e = this.bodyA
                          , i = this.bodyB
                          , s = e.velocity
                          , n = i.velocity
                          , a = e.angularVelocity
                          , o = i.angularVelocity;
                        return this.gmult(t, s, a, n, o) + v.motorSpeed
                    }
                }
                var n = t("./Constraint")
                  , a = t("../equations/ContactEquation")
                  , o = t("../equations/Equation")
                  , r = t("../math/vec2")
                  , h = t("../equations/RotationalLockEquation");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s;
                var l = r.create()
                  , c = r.create()
                  , u = r.create()
                  , d = r.create()
                  , p = r.create()
                  , f = r.create();
                s.prototype.update = function() {
                    var t = this.equations
                      , e = t[0]
                      , i = this.upperLimit
                      , s = this.lowerLimit
                      , n = this.upperLimitEquation
                      , a = this.lowerLimitEquation
                      , o = this.bodyA
                      , h = this.bodyB
                      , g = this.localAxisA
                      , m = this.localAnchorA
                      , y = this.localAnchorB;
                    e.updateJacobian(),
                    r.rotate(l, g, o.angle),
                    r.rotate(d, m, o.angle),
                    r.add(c, d, o.position),
                    r.rotate(p, y, h.angle),
                    r.add(u, p, h.position);
                    var v = this.position = r.dot(u, l) - r.dot(c, l);
                    if (this.motorEnabled) {
                        var b = this.motorEquation.G;
                        b[0] = l[0],
                        b[1] = l[1],
                        b[2] = r.crossLength(l, p),
                        b[3] = -l[0],
                        b[4] = -l[1],
                        b[5] = -r.crossLength(l, d)
                    }
                    if (this.upperLimitEnabled && v > i)
                        r.scale(n.normalA, l, -1),
                        r.sub(n.contactPointA, c, o.position),
                        r.sub(n.contactPointB, u, h.position),
                        r.scale(f, l, i),
                        r.add(n.contactPointA, n.contactPointA, f),
                        -1 === t.indexOf(n) && t.push(n);
                    else {
                        var _ = t.indexOf(n);
                        -1 !== _ && t.splice(_, 1)
                    }
                    if (this.lowerLimitEnabled && v < s)
                        r.scale(a.normalA, l, 1),
                        r.sub(a.contactPointA, c, o.position),
                        r.sub(a.contactPointB, u, h.position),
                        r.scale(f, l, s),
                        r.sub(a.contactPointB, a.contactPointB, f),
                        -1 === t.indexOf(a) && t.push(a);
                    else {
                        var _ = t.indexOf(a);
                        -1 !== _ && t.splice(_, 1)
                    }
                }
                ,
                s.prototype.enableMotor = function() {
                    this.motorEnabled || (this.equations.push(this.motorEquation),
                    this.motorEnabled = !0)
                }
                ,
                s.prototype.disableMotor = function() {
                    if (this.motorEnabled) {
                        var t = this.equations.indexOf(this.motorEquation);
                        this.equations.splice(t, 1),
                        this.motorEnabled = !1
                    }
                }
                ,
                s.prototype.setLimits = function(t, e) {
                    "number" == typeof t ? (this.lowerLimit = t,
                    this.lowerLimitEnabled = !0) : (this.lowerLimit = t,
                    this.lowerLimitEnabled = !1),
                    "number" == typeof e ? (this.upperLimit = e,
                    this.upperLimitEnabled = !0) : (this.upperLimit = e,
                    this.upperLimitEnabled = !1)
                }
            }
            , {
                "../equations/ContactEquation": 21,
                "../equations/Equation": 22,
                "../equations/RotationalLockEquation": 24,
                "../math/vec2": 30,
                "./Constraint": 14
            }],
            19: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, n.REVOLUTE, i);
                    var s = this.maxForce = void 0 !== i.maxForce ? i.maxForce : Number.MAX_VALUE;
                    this.pivotA = h.create(),
                    this.pivotB = h.create(),
                    i.worldPivot ? (h.sub(this.pivotA, i.worldPivot, t.position),
                    h.sub(this.pivotB, i.worldPivot, e.position),
                    h.rotate(this.pivotA, this.pivotA, -t.angle),
                    h.rotate(this.pivotB, this.pivotB, -e.angle)) : (h.copy(this.pivotA, i.localPivotA),
                    h.copy(this.pivotB, i.localPivotB));
                    var f = this.equations = [new a(t,e,-s,s), new a(t,e,-s,s)]
                      , g = f[0]
                      , m = f[1]
                      , y = this;
                    g.computeGq = function() {
                        return h.rotate(l, y.pivotA, t.angle),
                        h.rotate(c, y.pivotB, e.angle),
                        h.add(p, e.position, c),
                        h.sub(p, p, t.position),
                        h.sub(p, p, l),
                        h.dot(p, u)
                    }
                    ,
                    m.computeGq = function() {
                        return h.rotate(l, y.pivotA, t.angle),
                        h.rotate(c, y.pivotB, e.angle),
                        h.add(p, e.position, c),
                        h.sub(p, p, t.position),
                        h.sub(p, p, l),
                        h.dot(p, d)
                    }
                    ,
                    m.minForce = g.minForce = -s,
                    m.maxForce = g.maxForce = s,
                    this.motorEquation = new o(t,e),
                    this.motorEnabled = !1,
                    this.angle = 0,
                    this.lowerLimitEnabled = !1,
                    this.upperLimitEnabled = !1,
                    this.lowerLimit = 0,
                    this.upperLimit = 0,
                    this.upperLimitEquation = new r(t,e),
                    this.lowerLimitEquation = new r(t,e),
                    this.upperLimitEquation.minForce = 0,
                    this.lowerLimitEquation.maxForce = 0
                }
                var n = t("./Constraint")
                  , a = t("../equations/Equation")
                  , o = t("../equations/RotationalVelocityEquation")
                  , r = t("../equations/RotationalLockEquation")
                  , h = t("../math/vec2");
                e.exports = s;
                var l = h.create()
                  , c = h.create()
                  , u = h.fromValues(1, 0)
                  , d = h.fromValues(0, 1)
                  , p = h.create();
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.setLimits = function(t, e) {
                    "number" == typeof t ? (this.lowerLimit = t,
                    this.lowerLimitEnabled = !0) : (this.lowerLimit = t,
                    this.lowerLimitEnabled = !1),
                    "number" == typeof e ? (this.upperLimit = e,
                    this.upperLimitEnabled = !0) : (this.upperLimit = e,
                    this.upperLimitEnabled = !1)
                }
                ,
                s.prototype.update = function() {
                    var t = this.bodyA
                      , e = this.bodyB
                      , i = this.pivotA
                      , s = this.pivotB
                      , n = this.equations
                      , a = n[0]
                      , o = n[1]
                      , r = n[0]
                      , p = n[1]
                      , f = this.upperLimit
                      , g = this.lowerLimit
                      , m = this.upperLimitEquation
                      , y = this.lowerLimitEquation
                      , v = this.angle = e.angle - t.angle;
                    if (this.upperLimitEnabled && v > f)
                        m.angle = f,
                        -1 === n.indexOf(m) && n.push(m);
                    else {
                        var b = n.indexOf(m);
                        -1 !== b && n.splice(b, 1)
                    }
                    if (this.lowerLimitEnabled && v < g)
                        y.angle = g,
                        -1 === n.indexOf(y) && n.push(y);
                    else {
                        var b = n.indexOf(y);
                        -1 !== b && n.splice(b, 1)
                    }
                    h.rotate(l, i, t.angle),
                    h.rotate(c, s, e.angle),
                    r.G[0] = -1,
                    r.G[1] = 0,
                    r.G[2] = -h.crossLength(l, u),
                    r.G[3] = 1,
                    r.G[4] = 0,
                    r.G[5] = h.crossLength(c, u),
                    p.G[0] = 0,
                    p.G[1] = -1,
                    p.G[2] = -h.crossLength(l, d),
                    p.G[3] = 0,
                    p.G[4] = 1,
                    p.G[5] = h.crossLength(c, d)
                }
                ,
                s.prototype.enableMotor = function() {
                    this.motorEnabled || (this.equations.push(this.motorEquation),
                    this.motorEnabled = !0)
                }
                ,
                s.prototype.disableMotor = function() {
                    if (this.motorEnabled) {
                        var t = this.equations.indexOf(this.motorEquation);
                        this.equations.splice(t, 1),
                        this.motorEnabled = !1
                    }
                }
                ,
                s.prototype.motorIsEnabled = function() {
                    return !!this.motorEnabled
                }
                ,
                s.prototype.setMotorSpeed = function(t) {
                    if (this.motorEnabled) {
                        var e = this.equations.indexOf(this.motorEquation);
                        this.equations[e].relativeVelocity = t
                    }
                }
                ,
                s.prototype.getMotorSpeed = function() {
                    return !!this.motorEnabled && this.motorEquation.relativeVelocity
                }
            }
            , {
                "../equations/Equation": 22,
                "../equations/RotationalLockEquation": 24,
                "../equations/RotationalVelocityEquation": 25,
                "../math/vec2": 30,
                "./Constraint": 14
            }],
            20: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
                    this.angle = i.angle || 0,
                    this.ratio = "number" == typeof i.ratio ? i.ratio : 1,
                    this.setRatio(this.ratio)
                }
                var n = t("./Equation")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeGq = function() {
                    return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
                }
                ,
                s.prototype.setRatio = function(t) {
                    var e = this.G;
                    e[2] = t,
                    e[5] = -1,
                    this.ratio = t
                }
                ,
                s.prototype.setMaxTorque = function(t) {
                    this.maxForce = t,
                    this.minForce = -t
                }
            }
            , {
                "../math/vec2": 30,
                "./Equation": 22
            }],
            21: [function(t, e, i) {
                function s(t, e) {
                    n.call(this, t, e, 0, Number.MAX_VALUE),
                    this.contactPointA = a.create(),
                    this.penetrationVec = a.create(),
                    this.contactPointB = a.create(),
                    this.normalA = a.create(),
                    this.restitution = 0,
                    this.firstImpact = !1,
                    this.shapeA = null,
                    this.shapeB = null
                }
                var n = t("./Equation")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeB = function(t, e, i) {
                    var s = this.bodyA
                      , n = this.bodyB
                      , o = this.contactPointA
                      , r = this.contactPointB
                      , h = s.position
                      , l = n.position
                      , c = this.penetrationVec
                      , u = this.normalA
                      , d = this.G
                      , p = a.crossLength(o, u)
                      , f = a.crossLength(r, u);
                    d[0] = -u[0],
                    d[1] = -u[1],
                    d[2] = -p,
                    d[3] = u[0],
                    d[4] = u[1],
                    d[5] = f,
                    a.add(c, l, r),
                    a.sub(c, c, h),
                    a.sub(c, c, o);
                    var g, m;
                    return this.firstImpact && 0 !== this.restitution ? (m = 0,
                    g = 1 / e * (1 + this.restitution) * this.computeGW()) : (m = a.dot(u, c) + this.offset,
                    g = this.computeGW()),
                    -m * t - g * e - i * this.computeGiMf()
                }
            }
            , {
                "../math/vec2": 30,
                "./Equation": 22
            }],
            22: [function(t, e, i) {
                function s(t, e, i, n) {
                    this.minForce = void 0 === i ? -Number.MAX_VALUE : i,
                    this.maxForce = void 0 === n ? Number.MAX_VALUE : n,
                    this.bodyA = t,
                    this.bodyB = e,
                    this.stiffness = s.DEFAULT_STIFFNESS,
                    this.relaxation = s.DEFAULT_RELAXATION,
                    this.G = new a.ARRAY_TYPE(6);
                    for (var o = 0; o < 6; o++)
                        this.G[o] = 0;
                    this.offset = 0,
                    this.a = 0,
                    this.b = 0,
                    this.epsilon = 0,
                    this.timeStep = 1 / 60,
                    this.needsUpdate = !0,
                    this.multiplier = 0,
                    this.relativeVelocity = 0,
                    this.enabled = !0
                }
                e.exports = s;
                var n = t("../math/vec2")
                  , a = t("../utils/Utils")
                  , o = t("../objects/Body");
                s.prototype.constructor = s,
                s.DEFAULT_STIFFNESS = 1e6,
                s.DEFAULT_RELAXATION = 4,
                s.prototype.update = function() {
                    var t = this.stiffness
                      , e = this.relaxation
                      , i = this.timeStep;
                    this.a = 4 / (i * (1 + 4 * e)),
                    this.b = 4 * e / (1 + 4 * e),
                    this.epsilon = 4 / (i * i * t * (1 + 4 * e)),
                    this.needsUpdate = !1
                }
                ,
                s.prototype.gmult = function(t, e, i, s, n) {
                    return t[0] * e[0] + t[1] * e[1] + t[2] * i + t[3] * s[0] + t[4] * s[1] + t[5] * n
                }
                ,
                s.prototype.computeB = function(t, e, i) {
                    var s = this.computeGW();
                    return -this.computeGq() * t - s * e - this.computeGiMf() * i
                }
                ;
                var r = n.create()
                  , h = n.create();
                s.prototype.computeGq = function() {
                    var t = this.G
                      , e = this.bodyA
                      , i = this.bodyB
                      , s = e.position
                      , n = i.position
                      , a = e.angle
                      , o = i.angle;
                    return this.gmult(t, r, a, h, o) + this.offset
                }
                ,
                s.prototype.computeGW = function() {
                    var t = this.G
                      , e = this.bodyA
                      , i = this.bodyB
                      , s = e.velocity
                      , n = i.velocity
                      , a = e.angularVelocity
                      , o = i.angularVelocity;
                    return this.gmult(t, s, a, n, o) + this.relativeVelocity
                }
                ,
                s.prototype.computeGWlambda = function() {
                    var t = this.G
                      , e = this.bodyA
                      , i = this.bodyB
                      , s = e.vlambda
                      , n = i.vlambda
                      , a = e.wlambda
                      , o = i.wlambda;
                    return this.gmult(t, s, a, n, o)
                }
                ;
                var l = n.create()
                  , c = n.create();
                s.prototype.computeGiMf = function() {
                    var t = this.bodyA
                      , e = this.bodyB
                      , i = t.force
                      , s = t.angularForce
                      , a = e.force
                      , o = e.angularForce
                      , r = t.invMassSolve
                      , h = e.invMassSolve
                      , u = t.invInertiaSolve
                      , d = e.invInertiaSolve
                      , p = this.G;
                    return n.scale(l, i, r),
                    n.multiply(l, t.massMultiplier, l),
                    n.scale(c, a, h),
                    n.multiply(c, e.massMultiplier, c),
                    this.gmult(p, l, s * u, c, o * d)
                }
                ,
                s.prototype.computeGiMGt = function() {
                    var t = this.bodyA
                      , e = this.bodyB
                      , i = t.invMassSolve
                      , s = e.invMassSolve
                      , n = t.invInertiaSolve
                      , a = e.invInertiaSolve
                      , o = this.G;
                    return o[0] * o[0] * i * t.massMultiplier[0] + o[1] * o[1] * i * t.massMultiplier[1] + o[2] * o[2] * n + o[3] * o[3] * s * e.massMultiplier[0] + o[4] * o[4] * s * e.massMultiplier[1] + o[5] * o[5] * a
                }
                ;
                var u = n.create()
                  , d = n.create()
                  , p = n.create()
                  , f = n.create()
                  , g = n.create()
                  , m = n.create();
                s.prototype.addToWlambda = function(t) {
                    var e = this.bodyA
                      , i = this.bodyB
                      , s = u
                      , a = d
                      , o = p
                      , r = f
                      , h = g
                      , l = e.invMassSolve
                      , c = i.invMassSolve
                      , y = e.invInertiaSolve
                      , v = i.invInertiaSolve
                      , b = m
                      , _ = this.G;
                    a[0] = _[0],
                    a[1] = _[1],
                    o[0] = _[3],
                    o[1] = _[4],
                    n.scale(s, a, l * t),
                    n.multiply(s, s, e.massMultiplier),
                    n.add(e.vlambda, e.vlambda, s),
                    e.wlambda += y * _[2] * t,
                    n.scale(s, o, c * t),
                    n.multiply(s, s, i.massMultiplier),
                    n.add(i.vlambda, i.vlambda, s),
                    i.wlambda += v * _[5] * t
                }
                ,
                s.prototype.computeInvC = function(t) {
                    return 1 / (this.computeGiMGt() + t)
                }
            }
            , {
                "../math/vec2": 30,
                "../objects/Body": 31,
                "../utils/Utils": 57
            }],
            23: [function(t, e, i) {
                function s(t, e, i) {
                    a.call(this, t, e, -i, i),
                    this.contactPointA = n.create(),
                    this.contactPointB = n.create(),
                    this.t = n.create(),
                    this.contactEquations = [],
                    this.shapeA = null,
                    this.shapeB = null,
                    this.frictionCoefficient = .3
                }
                var n = t("../math/vec2")
                  , a = t("./Equation")
                  , o = t("../utils/Utils");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.setSlipForce = function(t) {
                    this.maxForce = t,
                    this.minForce = -t
                }
                ,
                s.prototype.getSlipForce = function() {
                    return this.maxForce
                }
                ,
                s.prototype.computeB = function(t, e, i) {
                    var s = this.bodyA
                      , a = this.bodyB
                      , o = this.contactPointA
                      , r = this.contactPointB
                      , h = this.t
                      , l = this.G;
                    return l[0] = -h[0],
                    l[1] = -h[1],
                    l[2] = -n.crossLength(o, h),
                    l[3] = h[0],
                    l[4] = h[1],
                    l[5] = n.crossLength(r, h),
                    -this.computeGW() * e - i * this.computeGiMf()
                }
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Equation": 22
            }],
            24: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
                    this.angle = i.angle || 0;
                    var s = this.G;
                    s[2] = 1,
                    s[5] = -1
                }
                var n = t("./Equation")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s;
                var o = a.create()
                  , r = a.create()
                  , h = a.fromValues(1, 0)
                  , l = a.fromValues(0, 1);
                s.prototype.computeGq = function() {
                    return a.rotate(o, h, this.bodyA.angle + this.angle),
                    a.rotate(r, l, this.bodyB.angle),
                    a.dot(o, r)
                }
            }
            , {
                "../math/vec2": 30,
                "./Equation": 22
            }],
            25: [function(t, e, i) {
                function s(t, e) {
                    n.call(this, t, e, -Number.MAX_VALUE, Number.MAX_VALUE),
                    this.relativeVelocity = 1,
                    this.ratio = 1
                }
                var n = t("./Equation")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeB = function(t, e, i) {
                    var s = this.G;
                    s[2] = -1,
                    s[5] = this.ratio;
                    var n = this.computeGiMf();
                    return -this.computeGW() * e - i * n
                }
            }
            , {
                "../math/vec2": 30,
                "./Equation": 22
            }],
            26: [function(t, e, i) {
                var s = function() {};
                e.exports = s,
                s.prototype = {
                    constructor: s,
                    on: function(t, e, i) {
                        e.context = i || this,
                        void 0 === this._listeners && (this._listeners = {});
                        var s = this._listeners;
                        return void 0 === s[t] && (s[t] = []),
                        -1 === s[t].indexOf(e) && s[t].push(e),
                        this
                    },
                    has: function(t, e) {
                        if (void 0 === this._listeners)
                            return !1;
                        var i = this._listeners;
                        if (e) {
                            if (void 0 !== i[t] && -1 !== i[t].indexOf(e))
                                return !0
                        } else if (void 0 !== i[t])
                            return !0;
                        return !1
                    },
                    off: function(t, e) {
                        if (void 0 === this._listeners)
                            return this;
                        var i = this._listeners
                          , s = i[t].indexOf(e);
                        return -1 !== s && i[t].splice(s, 1),
                        this
                    },
                    emit: function(t) {
                        if (void 0 === this._listeners)
                            return this;
                        var e = this._listeners
                          , i = e[t.type];
                        if (void 0 !== i) {
                            t.target = this;
                            for (var s = 0, n = i.length; s < n; s++) {
                                var a = i[s];
                                a.call(a.context, t)
                            }
                        }
                        return this
                    }
                }
            }
            , {}],
            27: [function(t, e, i) {
                function s(t, e, i) {
                    if (i = i || {},
                    !(t instanceof n && e instanceof n))
                        throw new Error("First two arguments must be Material instances.");
                    this.id = s.idCounter++,
                    this.materialA = t,
                    this.materialB = e,
                    this.friction = void 0 !== i.friction ? Number(i.friction) : .3,
                    this.restitution = void 0 !== i.restitution ? Number(i.restitution) : 0,
                    this.stiffness = void 0 !== i.stiffness ? Number(i.stiffness) : a.DEFAULT_STIFFNESS,
                    this.relaxation = void 0 !== i.relaxation ? Number(i.relaxation) : a.DEFAULT_RELAXATION,
                    this.frictionStiffness = void 0 !== i.frictionStiffness ? Number(i.frictionStiffness) : a.DEFAULT_STIFFNESS,
                    this.frictionRelaxation = void 0 !== i.frictionRelaxation ? Number(i.frictionRelaxation) : a.DEFAULT_RELAXATION,
                    this.surfaceVelocity = void 0 !== i.surfaceVelocity ? Number(i.surfaceVelocity) : 0,
                    this.contactSkinSize = .005
                }
                var n = t("./Material")
                  , a = t("../equations/Equation");
                e.exports = s,
                s.idCounter = 0
            }
            , {
                "../equations/Equation": 22,
                "./Material": 28
            }],
            28: [function(t, e, i) {
                function s(t) {
                    this.id = t || s.idCounter++
                }
                e.exports = s,
                s.idCounter = 0
            }
            , {}],
            29: [function(t, e, i) {
                var s = {};
                s.GetArea = function(t) {
                    if (t.length < 6)
                        return 0;
                    for (var e = t.length - 2, i = 0, s = 0; s < e; s += 2)
                        i += (t[s + 2] - t[s]) * (t[s + 1] + t[s + 3]);
                    return .5 * -(i += (t[0] - t[e]) * (t[e + 1] + t[1]))
                }
                ,
                s.Triangulate = function(t) {
                    var e = t.length >> 1;
                    if (e < 3)
                        return [];
                    for (var i = [], n = [], a = 0; a < e; a++)
                        n.push(a);
                    for (var a = 0, o = e; o > 3; ) {
                        var r = n[(a + 0) % o]
                          , h = n[(a + 1) % o]
                          , l = n[(a + 2) % o]
                          , c = t[2 * r]
                          , u = t[2 * r + 1]
                          , d = t[2 * h]
                          , p = t[2 * h + 1]
                          , f = t[2 * l]
                          , g = t[2 * l + 1]
                          , m = !1;
                        if (s._convex(c, u, d, p, f, g)) {
                            m = !0;
                            for (var y = 0; y < o; y++) {
                                var v = n[y];
                                if (v != r && v != h && v != l && s._PointInTriangle(t[2 * v], t[2 * v + 1], c, u, d, p, f, g)) {
                                    m = !1;
                                    break
                                }
                            }
                        }
                        if (m)
                            i.push(r, h, l),
                            n.splice((a + 1) % o, 1),
                            o--,
                            a = 0;
                        else if (a++ > 3 * o)
                            break
                    }
                    return i.push(n[0], n[1], n[2]),
                    i
                }
                ,
                s._PointInTriangle = function(t, e, i, s, n, a, o, r) {
                    var h = o - i
                      , l = r - s
                      , c = n - i
                      , u = a - s
                      , d = t - i
                      , p = e - s
                      , f = h * h + l * l
                      , g = h * c + l * u
                      , m = h * d + l * p
                      , y = c * c + u * u
                      , v = c * d + u * p
                      , b = 1 / (f * y - g * g)
                      , _ = (y * m - g * v) * b
                      , x = (f * v - g * m) * b;
                    return _ >= 0 && x >= 0 && _ + x < 1
                }
                ,
                s._convex = function(t, e, i, s, n, a) {
                    return (e - s) * (n - i) + (i - t) * (a - s) >= 0
                }
                ,
                e.exports = s
            }
            , {}],
            30: [function(t, e, i) {
                var s = e.exports = {}
                  , n = t("../utils/Utils");
                s.crossLength = function(t, e) {
                    return t[0] * e[1] - t[1] * e[0]
                }
                ,
                s.crossVZ = function(t, e, i) {
                    return s.rotate(t, e, -Math.PI / 2),
                    s.scale(t, t, i),
                    t
                }
                ,
                s.crossZV = function(t, e, i) {
                    return s.rotate(t, i, Math.PI / 2),
                    s.scale(t, t, e),
                    t
                }
                ,
                s.rotate = function(t, e, i) {
                    if (0 !== i) {
                        var s = Math.cos(i)
                          , n = Math.sin(i)
                          , a = e[0]
                          , o = e[1];
                        t[0] = s * a - n * o,
                        t[1] = n * a + s * o
                    } else
                        t[0] = e[0],
                        t[1] = e[1]
                }
                ,
                s.rotate90cw = function(t, e) {
                    var i = e[0]
                      , s = e[1];
                    t[0] = s,
                    t[1] = -i
                }
                ,
                s.toLocalFrame = function(t, e, i, n) {
                    s.copy(t, e),
                    s.sub(t, t, i),
                    s.rotate(t, t, -n)
                }
                ,
                s.toGlobalFrame = function(t, e, i, n) {
                    s.copy(t, e),
                    s.rotate(t, t, n),
                    s.add(t, t, i)
                }
                ,
                s.vectorToLocalFrame = function(t, e, i) {
                    s.rotate(t, e, -i)
                }
                ,
                s.vectorToGlobalFrame = function(t, e, i) {
                    s.rotate(t, e, i)
                }
                ,
                s.centroid = function(t, e, i, n) {
                    return s.add(t, e, i),
                    s.add(t, t, n),
                    s.scale(t, t, 1 / 3),
                    t
                }
                ,
                s.create = function() {
                    var t = new n.ARRAY_TYPE(2);
                    return t[0] = 0,
                    t[1] = 0,
                    t
                }
                ,
                s.clone = function(t) {
                    var e = new n.ARRAY_TYPE(2);
                    return e[0] = t[0],
                    e[1] = t[1],
                    e
                }
                ,
                s.fromValues = function(t, e) {
                    var i = new n.ARRAY_TYPE(2);
                    return i[0] = t,
                    i[1] = e,
                    i
                }
                ,
                s.copy = function(t, e) {
                    return t[0] = e[0],
                    t[1] = e[1],
                    t
                }
                ,
                s.set = function(t, e, i) {
                    return t[0] = e,
                    t[1] = i,
                    t
                }
                ,
                s.add = function(t, e, i) {
                    return t[0] = e[0] + i[0],
                    t[1] = e[1] + i[1],
                    t
                }
                ,
                s.subtract = function(t, e, i) {
                    return t[0] = e[0] - i[0],
                    t[1] = e[1] - i[1],
                    t
                }
                ,
                s.sub = s.subtract,
                s.multiply = function(t, e, i) {
                    return t[0] = e[0] * i[0],
                    t[1] = e[1] * i[1],
                    t
                }
                ,
                s.mul = s.multiply,
                s.divide = function(t, e, i) {
                    return t[0] = e[0] / i[0],
                    t[1] = e[1] / i[1],
                    t
                }
                ,
                s.div = s.divide,
                s.scale = function(t, e, i) {
                    return t[0] = e[0] * i,
                    t[1] = e[1] * i,
                    t
                }
                ,
                s.distance = function(t, e) {
                    var i = e[0] - t[0]
                      , s = e[1] - t[1];
                    return Math.sqrt(i * i + s * s)
                }
                ,
                s.dist = s.distance,
                s.squaredDistance = function(t, e) {
                    var i = e[0] - t[0]
                      , s = e[1] - t[1];
                    return i * i + s * s
                }
                ,
                s.sqrDist = s.squaredDistance,
                s.length = function(t) {
                    var e = t[0]
                      , i = t[1];
                    return Math.sqrt(e * e + i * i)
                }
                ,
                s.len = s.length,
                s.squaredLength = function(t) {
                    var e = t[0]
                      , i = t[1];
                    return e * e + i * i
                }
                ,
                s.sqrLen = s.squaredLength,
                s.negate = function(t, e) {
                    return t[0] = -e[0],
                    t[1] = -e[1],
                    t
                }
                ,
                s.normalize = function(t, e) {
                    var i = e[0]
                      , s = e[1]
                      , n = i * i + s * s;
                    return n > 0 && (n = 1 / Math.sqrt(n),
                    t[0] = e[0] * n,
                    t[1] = e[1] * n),
                    t
                }
                ,
                s.dot = function(t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }
                ,
                s.str = function(t) {
                    return "vec2(" + t[0] + ", " + t[1] + ")"
                }
                ,
                s.lerp = function(t, e, i, s) {
                    var n = e[0]
                      , a = e[1];
                    return t[0] = n + s * (i[0] - n),
                    t[1] = a + s * (i[1] - a),
                    t
                }
                ,
                s.reflect = function(t, e, i) {
                    var s = e[0] * i[0] + e[1] * i[1];
                    t[0] = e[0] - 2 * i[0] * s,
                    t[1] = e[1] - 2 * i[1] * s
                }
                ,
                s.getLineSegmentsIntersection = function(t, e, i, n, a) {
                    var o = s.getLineSegmentsIntersectionFraction(e, i, n, a);
                    return !(o < 0) && (t[0] = e[0] + o * (i[0] - e[0]),
                    t[1] = e[1] + o * (i[1] - e[1]),
                    !0)
                }
                ,
                s.getLineSegmentsIntersectionFraction = function(t, e, i, s) {
                    var n = e[0] - t[0], a = e[1] - t[1], o = s[0] - i[0], r = s[1] - i[1], h, l;
                    return h = (-a * (t[0] - i[0]) + n * (t[1] - i[1])) / (-o * a + n * r),
                    l = (o * (t[1] - i[1]) - r * (t[0] - i[0])) / (-o * a + n * r),
                    h >= 0 && h <= 1 && l >= 0 && l <= 1 ? l : -1
                }
            }
            , {
                "../utils/Utils": 57
            }],
            31: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    c.call(this),
                    this.id = t.id || ++s._idCounter,
                    this.world = null,
                    this.shapes = [],
                    this.mass = t.mass || 0,
                    this.invMass = 0,
                    this.inertia = 0,
                    this.invInertia = 0,
                    this.invMassSolve = 0,
                    this.invInertiaSolve = 0,
                    this.fixedRotation = !!t.fixedRotation,
                    this.fixedX = !!t.fixedX,
                    this.fixedY = !!t.fixedY,
                    this.massMultiplier = n.create(),
                    this.position = n.fromValues(0, 0),
                    t.position && n.copy(this.position, t.position),
                    this.interpolatedPosition = n.fromValues(0, 0),
                    this.interpolatedAngle = 0,
                    this.previousPosition = n.fromValues(0, 0),
                    this.previousAngle = 0,
                    this.velocity = n.fromValues(0, 0),
                    t.velocity && n.copy(this.velocity, t.velocity),
                    this.vlambda = n.fromValues(0, 0),
                    this.wlambda = 0,
                    this.angle = t.angle || 0,
                    this.angularVelocity = t.angularVelocity || 0,
                    this.force = n.create(),
                    t.force && n.copy(this.force, t.force),
                    this.angularForce = t.angularForce || 0,
                    this.damping = "number" == typeof t.damping ? t.damping : .1,
                    this.angularDamping = "number" == typeof t.angularDamping ? t.angularDamping : .1,
                    this.type = s.STATIC,
                    void 0 !== t.type ? this.type = t.type : t.mass ? this.type = s.DYNAMIC : this.type = s.STATIC,
                    this.boundingRadius = 0,
                    this.aabb = new l,
                    this.aabbNeedsUpdate = !0,
                    this.allowSleep = void 0 === t.allowSleep || t.allowSleep,
                    this.wantsToSleep = !1,
                    this.sleepState = s.AWAKE,
                    this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .2,
                    this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1,
                    this.gravityScale = void 0 !== t.gravityScale ? t.gravityScale : 1,
                    this.collisionResponse = void 0 === t.collisionResponse || t.collisionResponse,
                    this.idleTime = 0,
                    this.timeLastSleepy = 0,
                    this.ccdSpeedThreshold = void 0 !== t.ccdSpeedThreshold ? t.ccdSpeedThreshold : -1,
                    this.ccdIterations = void 0 !== t.ccdIterations ? t.ccdIterations : 10,
                    this.concavePath = null,
                    this._wakeUpAfterNarrowphase = !1,
                    this.updateMassProperties()
                }
                var n = t("../math/vec2")
                  , a = t("poly-decomp")
                  , o = t("../shapes/Convex")
                  , r = t("../collision/RaycastResult")
                  , h = t("../collision/Ray")
                  , l = t("../collision/AABB")
                  , c = t("../events/EventEmitter");
                e.exports = s,
                s.prototype = new c,
                s.prototype.constructor = s,
                s._idCounter = 0,
                s.prototype.updateSolveMassProperties = function() {
                    this.sleepState === s.SLEEPING || this.type === s.KINEMATIC ? (this.invMassSolve = 0,
                    this.invInertiaSolve = 0) : (this.invMassSolve = this.invMass,
                    this.invInertiaSolve = this.invInertia)
                }
                ,
                s.prototype.setDensity = function(t) {
                    var e = this.getArea();
                    this.mass = e * t,
                    this.updateMassProperties()
                }
                ,
                s.prototype.getArea = function() {
                    for (var t = 0, e = 0; e < this.shapes.length; e++)
                        t += this.shapes[e].area;
                    return t
                }
                ,
                s.prototype.getAABB = function() {
                    return this.aabbNeedsUpdate && this.updateAABB(),
                    this.aabb
                }
                ;
                var u = new l
                  , d = n.create();
                s.prototype.updateAABB = function() {
                    for (var t = this.shapes, e = t.length, i = d, s = this.angle, a = 0; a !== e; a++) {
                        var o = t[a]
                          , r = o.angle + s;
                        n.rotate(i, o.position, s),
                        n.add(i, i, this.position),
                        o.computeAABB(u, i, r),
                        0 === a ? this.aabb.copy(u) : this.aabb.extend(u)
                    }
                    this.aabbNeedsUpdate = !1
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    for (var t = this.shapes, e = t.length, i = 0, s = 0; s !== e; s++) {
                        var a = t[s]
                          , o = n.length(a.position)
                          , r = a.boundingRadius;
                        o + r > i && (i = o + r)
                    }
                    this.boundingRadius = i
                }
                ,
                s.prototype.addShape = function(t, e, i) {
                    if (t.body)
                        throw new Error("A shape can only be added to one body.");
                    t.body = this,
                    e ? n.copy(t.position, e) : n.set(t.position, 0, 0),
                    t.angle = i || 0,
                    this.shapes.push(t),
                    this.updateMassProperties(),
                    this.updateBoundingRadius(),
                    this.aabbNeedsUpdate = !0
                }
                ,
                s.prototype.removeShape = function(t) {
                    var e = this.shapes.indexOf(t);
                    return -1 !== e && (this.shapes.splice(e, 1),
                    this.aabbNeedsUpdate = !0,
                    t.body = null,
                    !0)
                }
                ,
                s.prototype.updateMassProperties = function() {
                    if (this.type === s.STATIC || this.type === s.KINEMATIC)
                        this.mass = Number.MAX_VALUE,
                        this.invMass = 0,
                        this.inertia = Number.MAX_VALUE,
                        this.invInertia = 0;
                    else {
                        var t = this.shapes
                          , e = t.length
                          , i = this.mass / e
                          , a = 0;
                        if (this.fixedRotation)
                            this.inertia = Number.MAX_VALUE,
                            this.invInertia = 0;
                        else {
                            for (var o = 0; o < e; o++) {
                                var r = t[o]
                                  , h = n.squaredLength(r.position);
                                a += r.computeMomentOfInertia(i) + i * h
                            }
                            this.inertia = a,
                            this.invInertia = a > 0 ? 1 / a : 0
                        }
                        this.invMass = 1 / this.mass,
                        n.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1)
                    }
                }
                ;
                var p = n.create();
                s.prototype.applyForce = function(t, e) {
                    if (n.add(this.force, this.force, t),
                    e) {
                        var i = n.crossLength(e, t);
                        this.angularForce += i
                    }
                }
                ;
                var f = n.create()
                  , g = n.create()
                  , m = n.create();
                s.prototype.applyForceLocal = function(t, e) {
                    e = e || m;
                    var i = f
                      , s = g;
                    this.vectorToWorldFrame(i, t),
                    this.vectorToWorldFrame(s, e),
                    this.applyForce(i, s)
                }
                ;
                var y = n.create();
                s.prototype.applyImpulse = function(t, e) {
                    if (this.type === s.DYNAMIC) {
                        var i = y;
                        if (n.scale(i, t, this.invMass),
                        n.multiply(i, this.massMultiplier, i),
                        n.add(this.velocity, i, this.velocity),
                        e) {
                            var a = n.crossLength(e, t);
                            a *= this.invInertia,
                            this.angularVelocity += a
                        }
                    }
                }
                ;
                var v = n.create()
                  , b = n.create()
                  , _ = n.create();
                s.prototype.applyImpulseLocal = function(t, e) {
                    e = e || _;
                    var i = v
                      , s = b;
                    this.vectorToWorldFrame(i, t),
                    this.vectorToWorldFrame(s, e),
                    this.applyImpulse(i, s)
                }
                ,
                s.prototype.toLocalFrame = function(t, e) {
                    n.toLocalFrame(t, e, this.position, this.angle)
                }
                ,
                s.prototype.toWorldFrame = function(t, e) {
                    n.toGlobalFrame(t, e, this.position, this.angle)
                }
                ,
                s.prototype.vectorToLocalFrame = function(t, e) {
                    n.vectorToLocalFrame(t, e, this.angle)
                }
                ,
                s.prototype.vectorToWorldFrame = function(t, e) {
                    n.vectorToGlobalFrame(t, e, this.angle)
                }
                ,
                s.prototype.fromPolygon = function(t, e) {
                    e = e || {};
                    for (var i = this.shapes.length; i >= 0; --i)
                        this.removeShape(this.shapes[i]);
                    var s = new a.Polygon;
                    if (s.vertices = t,
                    s.makeCCW(),
                    "number" == typeof e.removeCollinearPoints && s.removeCollinearPoints(e.removeCollinearPoints),
                    void 0 === e.skipSimpleCheck && !s.isSimple())
                        return !1;
                    this.concavePath = s.vertices.slice(0);
                    for (var i = 0; i < this.concavePath.length; i++) {
                        var r = [0, 0];
                        n.copy(r, this.concavePath[i]),
                        this.concavePath[i] = r
                    }
                    var h;
                    h = e.optimalDecomp ? s.decomp() : s.quickDecomp();
                    for (var l = n.create(), i = 0; i !== h.length; i++) {
                        for (var c = new o({
                            vertices: h[i].vertices
                        }), u = 0; u !== c.vertices.length; u++) {
                            var r = c.vertices[u];
                            n.sub(r, r, c.centerOfMass)
                        }
                        n.scale(l, c.centerOfMass, 1),
                        c.updateTriangles(),
                        c.updateCenterOfMass(),
                        c.updateBoundingRadius(),
                        this.addShape(c, l)
                    }
                    return this.adjustCenterOfMass(),
                    this.aabbNeedsUpdate = !0,
                    !0
                }
                ;
                var x = n.fromValues(0, 0)
                  , w = n.fromValues(0, 0)
                  , P = n.fromValues(0, 0)
                  , T = n.fromValues(0, 0);
                s.prototype.adjustCenterOfMass = function() {
                    var t = w
                      , e = P
                      , i = T
                      , s = 0;
                    n.set(e, 0, 0);
                    for (var a = 0; a !== this.shapes.length; a++) {
                        var o = this.shapes[a];
                        n.scale(t, o.position, o.area),
                        n.add(e, e, t),
                        s += o.area
                    }
                    n.scale(i, e, 1 / s);
                    for (var a = 0; a !== this.shapes.length; a++) {
                        var o = this.shapes[a];
                        n.sub(o.position, o.position, i)
                    }
                    n.add(this.position, this.position, i);
                    for (var a = 0; this.concavePath && a < this.concavePath.length; a++)
                        n.sub(this.concavePath[a], this.concavePath[a], i);
                    this.updateMassProperties(),
                    this.updateBoundingRadius()
                }
                ,
                s.prototype.setZeroForce = function() {
                    n.set(this.force, 0, 0),
                    this.angularForce = 0
                }
                ,
                s.prototype.resetConstraintVelocity = function() {
                    var t = this
                      , e = t.vlambda;
                    n.set(e, 0, 0),
                    t.wlambda = 0
                }
                ,
                s.prototype.addConstraintVelocity = function() {
                    var t = this
                      , e = t.velocity;
                    n.add(e, e, t.vlambda),
                    t.angularVelocity += t.wlambda
                }
                ,
                s.prototype.applyDamping = function(t) {
                    if (this.type === s.DYNAMIC) {
                        var e = this.velocity;
                        n.scale(e, e, Math.pow(1 - this.damping, t)),
                        this.angularVelocity *= Math.pow(1 - this.angularDamping, t)
                    }
                }
                ,
                s.prototype.wakeUp = function() {
                    var t = this.sleepState;
                    this.sleepState = s.AWAKE,
                    this.idleTime = 0,
                    t !== s.AWAKE && this.emit(s.wakeUpEvent)
                }
                ,
                s.prototype.sleep = function() {
                    this.sleepState = s.SLEEPING,
                    this.angularVelocity = 0,
                    this.angularForce = 0,
                    n.set(this.velocity, 0, 0),
                    n.set(this.force, 0, 0),
                    this.emit(s.sleepEvent)
                }
                ,
                s.prototype.sleepTick = function(t, e, i) {
                    if (this.allowSleep && this.type !== s.SLEEPING) {
                        this.wantsToSleep = !1;
                        var a = this.sleepState;
                        n.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2) >= Math.pow(this.sleepSpeedLimit, 2) ? (this.idleTime = 0,
                        this.sleepState = s.AWAKE) : (this.idleTime += i,
                        this.sleepState = s.SLEEPY),
                        this.idleTime > this.sleepTimeLimit && (e ? this.wantsToSleep = !0 : this.sleep())
                    }
                }
                ,
                s.prototype.overlaps = function(t) {
                    return this.world.overlapKeeper.bodiesAreOverlapping(this, t)
                }
                ;
                var S = n.create()
                  , C = n.create();
                s.prototype.integrate = function(t) {
                    var e = this.invMass
                      , i = this.force
                      , s = this.position
                      , a = this.velocity;
                    n.copy(this.previousPosition, this.position),
                    this.previousAngle = this.angle,
                    this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * t),
                    n.scale(S, i, t * e),
                    n.multiply(S, this.massMultiplier, S),
                    n.add(a, S, a),
                    this.integrateToTimeOfImpact(t) || (n.scale(C, a, t),
                    n.add(s, s, C),
                    this.fixedRotation || (this.angle += this.angularVelocity * t)),
                    this.aabbNeedsUpdate = !0
                }
                ;
                var A = new r
                  , E = new h({
                    mode: h.ALL
                })
                  , I = n.create()
                  , B = n.create()
                  , M = n.create()
                  , k = n.create();
                s.prototype.integrateToTimeOfImpact = function(t) {
                    if (this.ccdSpeedThreshold < 0 || n.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2))
                        return !1;
                    n.normalize(I, this.velocity),
                    n.scale(B, this.velocity, t),
                    n.add(B, B, this.position),
                    n.sub(M, B, this.position);
                    var e = this.angularVelocity * t, i = n.length(M), s = 1, a, o = this;
                    if (A.reset(),
                    E.callback = function(t) {
                        t.body !== o && (a = t.body,
                        t.getHitPoint(B, E),
                        n.sub(M, B, o.position),
                        s = n.length(M) / i,
                        t.stop())
                    }
                    ,
                    n.copy(E.from, this.position),
                    n.copy(E.to, B),
                    E.update(),
                    this.world.raycast(A, E),
                    !a)
                        return !1;
                    var r = this.angle;
                    n.copy(k, this.position);
                    for (var h = 0, l = 0, c = 0, u = s; u >= l && h < this.ccdIterations; ) {
                        h++,
                        c = (u - l) / 2,
                        n.scale(C, M, s),
                        n.add(this.position, k, C),
                        this.angle = r + e * s,
                        this.updateAABB();
                        this.aabb.overlaps(a.aabb) && this.world.narrowphase.bodiesOverlap(this, a) ? l = c : u = c
                    }
                    return s = c,
                    n.copy(this.position, k),
                    this.angle = r,
                    n.scale(C, M, s),
                    n.add(this.position, this.position, C),
                    this.fixedRotation || (this.angle += e * s),
                    !0
                }
                ,
                s.prototype.getVelocityAtPoint = function(t, e) {
                    return n.crossVZ(t, e, this.angularVelocity),
                    n.subtract(t, this.velocity, t),
                    t
                }
                ,
                s.sleepyEvent = {
                    type: "sleepy"
                },
                s.sleepEvent = {
                    type: "sleep"
                },
                s.wakeUpEvent = {
                    type: "wakeup"
                },
                s.DYNAMIC = 1,
                s.STATIC = 2,
                s.KINEMATIC = 4,
                s.AWAKE = 0,
                s.SLEEPY = 1,
                s.SLEEPING = 2
            }
            , {
                "../collision/AABB": 7,
                "../collision/Ray": 11,
                "../collision/RaycastResult": 12,
                "../events/EventEmitter": 26,
                "../math/vec2": 30,
                "../shapes/Convex": 40,
                "poly-decomp": 5
            }],
            32: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    a.call(this, t, e, i),
                    this.localAnchorA = n.fromValues(0, 0),
                    this.localAnchorB = n.fromValues(0, 0),
                    i.localAnchorA && n.copy(this.localAnchorA, i.localAnchorA),
                    i.localAnchorB && n.copy(this.localAnchorB, i.localAnchorB),
                    i.worldAnchorA && this.setWorldAnchorA(i.worldAnchorA),
                    i.worldAnchorB && this.setWorldAnchorB(i.worldAnchorB);
                    var s = n.create()
                      , o = n.create();
                    this.getWorldAnchorA(s),
                    this.getWorldAnchorB(o);
                    var r = n.distance(s, o);
                    this.restLength = "number" == typeof i.restLength ? i.restLength : r
                }
                var n = t("../math/vec2")
                  , a = t("./Spring")
                  , o = t("../utils/Utils");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.setWorldAnchorA = function(t) {
                    this.bodyA.toLocalFrame(this.localAnchorA, t)
                }
                ,
                s.prototype.setWorldAnchorB = function(t) {
                    this.bodyB.toLocalFrame(this.localAnchorB, t)
                }
                ,
                s.prototype.getWorldAnchorA = function(t) {
                    this.bodyA.toWorldFrame(t, this.localAnchorA)
                }
                ,
                s.prototype.getWorldAnchorB = function(t) {
                    this.bodyB.toWorldFrame(t, this.localAnchorB)
                }
                ;
                var r = n.create()
                  , h = n.create()
                  , l = n.create()
                  , c = n.create()
                  , u = n.create()
                  , d = n.create()
                  , p = n.create()
                  , f = n.create()
                  , g = n.create();
                s.prototype.applyForce = function() {
                    var t = this.stiffness
                      , e = this.damping
                      , i = this.restLength
                      , s = this.bodyA
                      , a = this.bodyB
                      , o = r
                      , m = h
                      , y = l
                      , v = c
                      , b = g
                      , _ = u
                      , x = d
                      , w = p
                      , P = f;
                    this.getWorldAnchorA(_),
                    this.getWorldAnchorB(x),
                    n.sub(w, _, s.position),
                    n.sub(P, x, a.position),
                    n.sub(o, x, _);
                    var T = n.len(o);
                    n.normalize(m, o),
                    n.sub(y, a.velocity, s.velocity),
                    n.crossZV(b, a.angularVelocity, P),
                    n.add(y, y, b),
                    n.crossZV(b, s.angularVelocity, w),
                    n.sub(y, y, b),
                    n.scale(v, m, -t * (T - i) - e * n.dot(y, m)),
                    n.sub(s.force, s.force, v),
                    n.add(a.force, a.force, v);
                    var S = n.crossLength(w, v)
                      , C = n.crossLength(P, v);
                    s.angularForce -= S,
                    a.angularForce += C
                }
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Spring": 34
            }],
            33: [function(t, e, i) {
                function s(t, e, i) {
                    i = i || {},
                    a.call(this, t, e, i),
                    this.restAngle = "number" == typeof i.restAngle ? i.restAngle : e.angle - t.angle
                }
                var n = t("../math/vec2")
                  , a = t("./Spring");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.applyForce = function() {
                    var t = this.stiffness
                      , e = this.damping
                      , i = this.restAngle
                      , s = this.bodyA
                      , n = this.bodyB
                      , a = n.angle - s.angle
                      , o = n.angularVelocity - s.angularVelocity
                      , r = -t * (a - i) - e * o * 0;
                    s.angularForce -= r,
                    n.angularForce += r
                }
            }
            , {
                "../math/vec2": 30,
                "./Spring": 34
            }],
            34: [function(t, e, i) {
                function s(t, e, i) {
                    i = a.defaults(i, {
                        stiffness: 100,
                        damping: 1
                    }),
                    this.stiffness = i.stiffness,
                    this.damping = i.damping,
                    this.bodyA = t,
                    this.bodyB = e
                }
                var n = t("../math/vec2")
                  , a = t("../utils/Utils");
                e.exports = s,
                s.prototype.applyForce = function() {}
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57
            }],
            35: [function(t, e, i) {
                function s(t, e) {
                    e = e || {},
                    this.chassisBody = t,
                    this.wheels = [],
                    this.groundBody = new l({
                        mass: 0
                    }),
                    this.world = null;
                    var i = this;
                    this.preStepCallback = function() {
                        i.update()
                    }
                }
                function n(t, e) {
                    e = e || {},
                    this.vehicle = t,
                    this.forwardEquation = new h(t.chassisBody,t.groundBody),
                    this.sideEquation = new h(t.chassisBody,t.groundBody),
                    this.steerValue = 0,
                    this.engineForce = 0,
                    this.setSideFriction(void 0 !== e.sideFriction ? e.sideFriction : 5),
                    this.localForwardVector = a.fromValues(0, 1),
                    e.localForwardVector && a.copy(this.localForwardVector, e.localForwardVector),
                    this.localPosition = a.fromValues(0, 0),
                    e.localPosition && a.copy(this.localPosition, e.localPosition),
                    r.apply(this, t.chassisBody, t.groundBody),
                    this.equations.push(this.forwardEquation, this.sideEquation),
                    this.setBrakeForce(0)
                }
                var a = t("../math/vec2")
                  , o = t("../utils/Utils")
                  , r = t("../constraints/Constraint")
                  , h = t("../equations/FrictionEquation")
                  , l = t("../objects/Body");
                e.exports = s,
                s.prototype.addToWorld = function(t) {
                    this.world = t,
                    t.addBody(this.groundBody),
                    t.on("preStep", this.preStepCallback);
                    for (var e = 0; e < this.wheels.length; e++) {
                        var i = this.wheels[e];
                        t.addConstraint(i)
                    }
                }
                ,
                s.prototype.removeFromWorld = function() {
                    var t = this.world;
                    t.removeBody(this.groundBody),
                    t.off("preStep", this.preStepCallback);
                    for (var e = 0; e < this.wheels.length; e++) {
                        var i = this.wheels[e];
                        t.removeConstraint(i)
                    }
                    this.world = null
                }
                ,
                s.prototype.addWheel = function(t) {
                    var e = new n(this,t);
                    return this.wheels.push(e),
                    e
                }
                ,
                s.prototype.update = function() {
                    for (var t = 0; t < this.wheels.length; t++)
                        this.wheels[t].update()
                }
                ,
                n.prototype = new r,
                n.prototype.setBrakeForce = function(t) {
                    this.forwardEquation.setSlipForce(t)
                }
                ,
                n.prototype.setSideFriction = function(t) {
                    this.sideEquation.setSlipForce(t)
                }
                ;
                var c = a.create()
                  , u = a.create();
                n.prototype.getSpeed = function() {
                    return this.vehicle.chassisBody.vectorToWorldFrame(u, this.localForwardVector),
                    this.vehicle.chassisBody.getVelocityAtPoint(c, u),
                    a.dot(c, u)
                }
                ;
                var d = a.create();
                n.prototype.update = function() {
                    this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector),
                    a.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2),
                    this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t),
                    a.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue),
                    a.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue),
                    this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition),
                    a.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB),
                    this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition),
                    a.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA),
                    a.normalize(d, this.forwardEquation.t),
                    a.scale(d, d, this.engineForce),
                    this.vehicle.chassisBody.applyForce(d, this.forwardEquation.contactPointA)
                }
            }
            , {
                "../constraints/Constraint": 14,
                "../equations/FrictionEquation": 23,
                "../math/vec2": 30,
                "../objects/Body": 31,
                "../utils/Utils": 57
            }],
            36: [function(t, e, i) {
                var s = e.exports = {
                    AABB: t("./collision/AABB"),
                    AngleLockEquation: t("./equations/AngleLockEquation"),
                    Body: t("./objects/Body"),
                    Broadphase: t("./collision/Broadphase"),
                    Capsule: t("./shapes/Capsule"),
                    Circle: t("./shapes/Circle"),
                    Constraint: t("./constraints/Constraint"),
                    ContactEquation: t("./equations/ContactEquation"),
                    ContactEquationPool: t("./utils/ContactEquationPool"),
                    ContactMaterial: t("./material/ContactMaterial"),
                    Convex: t("./shapes/Convex"),
                    DistanceConstraint: t("./constraints/DistanceConstraint"),
                    Equation: t("./equations/Equation"),
                    EventEmitter: t("./events/EventEmitter"),
                    FrictionEquation: t("./equations/FrictionEquation"),
                    FrictionEquationPool: t("./utils/FrictionEquationPool"),
                    GearConstraint: t("./constraints/GearConstraint"),
                    GSSolver: t("./solver/GSSolver"),
                    Heightfield: t("./shapes/Heightfield"),
                    Line: t("./shapes/Line"),
                    LockConstraint: t("./constraints/LockConstraint"),
                    Material: t("./material/Material"),
                    Narrowphase: t("./collision/Narrowphase"),
                    NaiveBroadphase: t("./collision/NaiveBroadphase"),
                    Particle: t("./shapes/Particle"),
                    Plane: t("./shapes/Plane"),
                    Pool: t("./utils/Pool"),
                    RevoluteConstraint: t("./constraints/RevoluteConstraint"),
                    PrismaticConstraint: t("./constraints/PrismaticConstraint"),
                    Ray: t("./collision/Ray"),
                    RaycastResult: t("./collision/RaycastResult"),
                    Box: t("./shapes/Box"),
                    RotationalVelocityEquation: t("./equations/RotationalVelocityEquation"),
                    SAPBroadphase: t("./collision/SAPBroadphase"),
                    Shape: t("./shapes/Shape"),
                    Solver: t("./solver/Solver"),
                    Spring: t("./objects/Spring"),
                    TopDownVehicle: t("./objects/TopDownVehicle"),
                    LinearSpring: t("./objects/LinearSpring"),
                    RotationalSpring: t("./objects/RotationalSpring"),
                    Utils: t("./utils/Utils"),
                    World: t("./world/World"),
                    vec2: t("./math/vec2"),
                    version: t("../package.json").version
                };
                Object.defineProperty(s, "Rectangle", {
                    get: function() {
                        return this.Box
                    }
                })
            }
            , {
                "../package.json": 6,
                "./collision/AABB": 7,
                "./collision/Broadphase": 8,
                "./collision/NaiveBroadphase": 9,
                "./collision/Narrowphase": 10,
                "./collision/Ray": 11,
                "./collision/RaycastResult": 12,
                "./collision/SAPBroadphase": 13,
                "./constraints/Constraint": 14,
                "./constraints/DistanceConstraint": 15,
                "./constraints/GearConstraint": 16,
                "./constraints/LockConstraint": 17,
                "./constraints/PrismaticConstraint": 18,
                "./constraints/RevoluteConstraint": 19,
                "./equations/AngleLockEquation": 20,
                "./equations/ContactEquation": 21,
                "./equations/Equation": 22,
                "./equations/FrictionEquation": 23,
                "./equations/RotationalVelocityEquation": 25,
                "./events/EventEmitter": 26,
                "./material/ContactMaterial": 27,
                "./material/Material": 28,
                "./math/vec2": 30,
                "./objects/Body": 31,
                "./objects/LinearSpring": 32,
                "./objects/RotationalSpring": 33,
                "./objects/Spring": 34,
                "./objects/TopDownVehicle": 35,
                "./shapes/Box": 37,
                "./shapes/Capsule": 38,
                "./shapes/Circle": 39,
                "./shapes/Convex": 40,
                "./shapes/Heightfield": 41,
                "./shapes/Line": 42,
                "./shapes/Particle": 43,
                "./shapes/Plane": 44,
                "./shapes/Shape": 45,
                "./solver/GSSolver": 46,
                "./solver/Solver": 47,
                "./utils/ContactEquationPool": 48,
                "./utils/FrictionEquationPool": 49,
                "./utils/Pool": 55,
                "./utils/Utils": 57,
                "./world/World": 61
            }],
            37: [function(t, e, i) {
                function s(t) {
                    "number" == typeof arguments[0] && "number" == typeof arguments[1] && (t = {
                        width: arguments[0],
                        height: arguments[1]
                    }),
                    t = t || {};
                    var e = this.width = t.width || 1
                      , i = this.height = t.height || 1
                      , s = [n.fromValues(-e / 2, -i / 2), n.fromValues(e / 2, -i / 2), n.fromValues(e / 2, i / 2), n.fromValues(-e / 2, i / 2)]
                      , r = [n.fromValues(1, 0), n.fromValues(0, 1)];
                    t.vertices = s,
                    t.axes = r,
                    t.type = a.BOX,
                    o.call(this, t)
                }
                var n = t("../math/vec2")
                  , a = t("./Shape")
                  , o = t("./Convex");
                e.exports = s,
                s.prototype = new o,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    var e = this.width
                      , i = this.height;
                    return t * (i * i + e * e) / 12
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    var t = this.width
                      , e = this.height;
                    this.boundingRadius = Math.sqrt(t * t + e * e) / 2
                }
                ;
                var r = n.create()
                  , h = n.create()
                  , l = n.create()
                  , c = n.create();
                s.prototype.computeAABB = function(t, e, i) {
                    t.setFromPoints(this.vertices, e, i, 0)
                }
                ,
                s.prototype.updateArea = function() {
                    this.area = this.width * this.height
                }
            }
            , {
                "../math/vec2": 30,
                "./Convex": 40,
                "./Shape": 45
            }],
            38: [function(t, e, i) {
                function s(t) {
                    "number" == typeof arguments[0] && "number" == typeof arguments[1] && (t = {
                        length: arguments[0],
                        radius: arguments[1]
                    }),
                    t = t || {},
                    this.length = t.length || 1,
                    this.radius = t.radius || 1,
                    t.type = n.CAPSULE,
                    n.call(this, t)
                }
                var n = t("./Shape")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    var e = this.radius
                      , i = this.length + e
                      , s = 2 * e;
                    return t * (s * s + i * i) / 12
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.radius + this.length / 2
                }
                ,
                s.prototype.updateArea = function() {
                    this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
                }
                ;
                var o = a.create();
                s.prototype.computeAABB = function(t, e, i) {
                    var s = this.radius;
                    a.set(o, this.length / 2, 0),
                    0 !== i && a.rotate(o, o, i),
                    a.set(t.upperBound, Math.max(o[0] + s, -o[0] + s), Math.max(o[1] + s, -o[1] + s)),
                    a.set(t.lowerBound, Math.min(o[0] - s, -o[0] - s), Math.min(o[1] - s, -o[1] - s)),
                    a.add(t.lowerBound, t.lowerBound, e),
                    a.add(t.upperBound, t.upperBound, e)
                }
                ;
                var r = a.create()
                  , h = a.create()
                  , l = a.create()
                  , c = a.create()
                  , u = a.fromValues(0, 1);
                s.prototype.raycast = function(t, e, i, s) {
                    for (var n = e.from, o = e.to, d = e.direction, p = r, f = h, g = l, m = c, y = this.length / 2, v = 0; v < 2; v++) {
                        var b = this.radius * (2 * v - 1);
                        a.set(g, -y, b),
                        a.set(m, y, b),
                        a.toGlobalFrame(g, g, i, s),
                        a.toGlobalFrame(m, m, i, s);
                        var _ = a.getLineSegmentsIntersectionFraction(n, o, g, m);
                        if (_ >= 0 && (a.rotate(f, u, s),
                        a.scale(f, f, 2 * v - 1),
                        e.reportIntersection(t, _, f, -1),
                        t.shouldStop(e)))
                            return
                    }
                    for (var x = Math.pow(this.radius, 2) + Math.pow(y, 2), v = 0; v < 2; v++) {
                        a.set(g, y * (2 * v - 1), 0),
                        a.toGlobalFrame(g, g, i, s);
                        var w = Math.pow(o[0] - n[0], 2) + Math.pow(o[1] - n[1], 2)
                          , P = 2 * ((o[0] - n[0]) * (n[0] - g[0]) + (o[1] - n[1]) * (n[1] - g[1]))
                          , T = Math.pow(n[0] - g[0], 2) + Math.pow(n[1] - g[1], 2) - Math.pow(this.radius, 2)
                          , _ = Math.pow(P, 2) - 4 * w * T;
                        if (!(_ < 0))
                            if (0 === _) {
                                if (a.lerp(p, n, o, _),
                                a.squaredDistance(p, i) > x && (a.sub(f, p, g),
                                a.normalize(f, f),
                                e.reportIntersection(t, _, f, -1),
                                t.shouldStop(e)))
                                    return
                            } else {
                                var S = Math.sqrt(_)
                                  , C = 1 / (2 * w)
                                  , A = (-P - S) * C
                                  , E = (-P + S) * C;
                                if (A >= 0 && A <= 1 && (a.lerp(p, n, o, A),
                                a.squaredDistance(p, i) > x && (a.sub(f, p, g),
                                a.normalize(f, f),
                                e.reportIntersection(t, A, f, -1),
                                t.shouldStop(e))))
                                    return;
                                if (E >= 0 && E <= 1 && (a.lerp(p, n, o, E),
                                a.squaredDistance(p, i) > x && (a.sub(f, p, g),
                                a.normalize(f, f),
                                e.reportIntersection(t, E, f, -1),
                                t.shouldStop(e))))
                                    return
                            }
                    }
                }
            }
            , {
                "../math/vec2": 30,
                "./Shape": 45
            }],
            39: [function(t, e, i) {
                function s(t) {
                    "number" == typeof arguments[0] && (t = {
                        radius: arguments[0]
                    }),
                    t = t || {},
                    this.radius = t.radius || 1,
                    t.type = n.CIRCLE,
                    n.call(this, t)
                }
                var n = t("./Shape")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    var e = this.radius;
                    return t * e * e / 2
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.radius
                }
                ,
                s.prototype.updateArea = function() {
                    this.area = Math.PI * this.radius * this.radius
                }
                ,
                s.prototype.computeAABB = function(t, e, i) {
                    var s = this.radius;
                    a.set(t.upperBound, s, s),
                    a.set(t.lowerBound, -s, -s),
                    e && (a.add(t.lowerBound, t.lowerBound, e),
                    a.add(t.upperBound, t.upperBound, e))
                }
                ;
                var o = a.create()
                  , r = a.create();
                s.prototype.raycast = function(t, e, i, s) {
                    var n = e.from
                      , h = e.to
                      , l = this.radius
                      , c = Math.pow(h[0] - n[0], 2) + Math.pow(h[1] - n[1], 2)
                      , u = 2 * ((h[0] - n[0]) * (n[0] - i[0]) + (h[1] - n[1]) * (n[1] - i[1]))
                      , d = Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2) - Math.pow(l, 2)
                      , p = Math.pow(u, 2) - 4 * c * d
                      , f = o
                      , g = r;
                    if (!(p < 0))
                        if (0 === p)
                            a.lerp(f, n, h, p),
                            a.sub(g, f, i),
                            a.normalize(g, g),
                            e.reportIntersection(t, p, g, -1);
                        else {
                            var m = Math.sqrt(p)
                              , y = 1 / (2 * c)
                              , v = (-u - m) * y
                              , b = (-u + m) * y;
                            if (v >= 0 && v <= 1 && (a.lerp(f, n, h, v),
                            a.sub(g, f, i),
                            a.normalize(g, g),
                            e.reportIntersection(t, v, g, -1),
                            t.shouldStop(e)))
                                return;
                            b >= 0 && b <= 1 && (a.lerp(f, n, h, b),
                            a.sub(g, f, i),
                            a.normalize(g, g),
                            e.reportIntersection(t, b, g, -1))
                        }
                }
            }
            , {
                "../math/vec2": 30,
                "./Shape": 45
            }],
            40: [function(t, e, i) {
                function s(t) {
                    Array.isArray(arguments[0]) && (t = {
                        vertices: arguments[0],
                        axes: arguments[1]
                    }),
                    t = t || {},
                    this.vertices = [];
                    for (var e = void 0 !== t.vertices ? t.vertices : [], i = 0; i < e.length; i++) {
                        var s = a.create();
                        a.copy(s, e[i]),
                        this.vertices.push(s)
                    }
                    if (this.axes = [],
                    t.axes)
                        for (var i = 0; i < t.axes.length; i++) {
                            var o = a.create();
                            a.copy(o, t.axes[i]),
                            this.axes.push(o)
                        }
                    else
                        for (var i = 0; i < this.vertices.length; i++) {
                            var r = this.vertices[i]
                              , h = this.vertices[(i + 1) % this.vertices.length]
                              , l = a.create();
                            a.sub(l, h, r),
                            a.rotate90cw(l, l),
                            a.normalize(l, l),
                            this.axes.push(l)
                        }
                    if (this.centerOfMass = a.fromValues(0, 0),
                    this.triangles = [],
                    this.vertices.length && (this.updateTriangles(),
                    this.updateCenterOfMass()),
                    this.boundingRadius = 0,
                    t.type = n.CONVEX,
                    n.call(this, t),
                    this.updateBoundingRadius(),
                    this.updateArea(),
                    this.area < 0)
                        throw new Error("Convex vertices must be given in conter-clockwise winding.")
                }
                var n = t("./Shape")
                  , a = t("../math/vec2")
                  , o = t("../math/polyk")
                  , r = t("poly-decomp");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s;
                var h = a.create()
                  , l = a.create();
                s.prototype.projectOntoLocalAxis = function(t, e) {
                    for (var i = null, s = null, n, o, t = h, r = 0; r < this.vertices.length; r++)
                        n = this.vertices[r],
                        o = a.dot(n, t),
                        (null === i || o > i) && (i = o),
                        (null === s || o < s) && (s = o);
                    if (s > i) {
                        var l = s;
                        s = i,
                        i = l
                    }
                    a.set(e, s, i)
                }
                ,
                s.prototype.projectOntoWorldAxis = function(t, e, i, s) {
                    var n = l;
                    this.projectOntoLocalAxis(t, s),
                    0 !== i ? a.rotate(n, t, i) : n = t;
                    var o = a.dot(e, n);
                    a.set(s, s[0] + o, s[1] + o)
                }
                ,
                s.prototype.updateTriangles = function() {
                    this.triangles.length = 0;
                    for (var t = [], e = 0; e < this.vertices.length; e++) {
                        var i = this.vertices[e];
                        t.push(i[0], i[1])
                    }
                    for (var s = o.Triangulate(t), e = 0; e < s.length; e += 3) {
                        var n = s[e]
                          , a = s[e + 1]
                          , r = s[e + 2];
                        this.triangles.push([n, a, r])
                    }
                }
                ;
                var c = a.create()
                  , u = a.create()
                  , d = a.create()
                  , p = a.create()
                  , f = a.create()
                  , g = a.create()
                  , m = a.create()
                  , y = a.create()
                  , v = a.create();
                s.prototype.updateCenterOfMass = function() {
                    var t = this.triangles
                      , e = this.vertices
                      , i = this.centerOfMass
                      , n = c
                      , o = v
                      , r = d
                      , h = p
                      , l = f
                      , b = g
                      , _ = m
                      , x = y
                      , w = u;
                    a.set(i, 0, 0);
                    for (var P = 0, T = 0; T !== t.length; T++) {
                        var S = t[T]
                          , r = e[S[0]]
                          , h = e[S[1]]
                          , l = e[S[2]];
                        a.centroid(n, r, h, l);
                        var C = s.triangleArea(r, h, l);
                        P += C,
                        a.scale(w, n, C),
                        a.add(i, i, w)
                    }
                    a.scale(i, i, 1 / P)
                }
                ,
                s.prototype.computeMomentOfInertia = function(t) {
                    for (var e = 0, i = 0, s = this.vertices.length, n = s - 1, o = 0; o < s; n = o,
                    o++) {
                        var r = this.vertices[n]
                          , h = this.vertices[o]
                          , l = Math.abs(a.crossLength(r, h));
                        e += l * (a.dot(h, h) + a.dot(h, r) + a.dot(r, r)),
                        i += l
                    }
                    return t / 6 * (e / i)
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    for (var t = this.vertices, e = 0, i = 0; i !== t.length; i++) {
                        var s = a.squaredLength(t[i]);
                        s > e && (e = s)
                    }
                    this.boundingRadius = Math.sqrt(e)
                }
                ,
                s.triangleArea = function(t, e, i) {
                    return .5 * ((e[0] - t[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (e[1] - t[1]))
                }
                ,
                s.prototype.updateArea = function() {
                    this.updateTriangles(),
                    this.area = 0;
                    for (var t = this.triangles, e = this.vertices, i = 0; i !== t.length; i++) {
                        var n = t[i]
                          , a = e[n[0]]
                          , o = e[n[1]]
                          , r = e[n[2]]
                          , h = s.triangleArea(a, o, r);
                        this.area += h
                    }
                }
                ,
                s.prototype.computeAABB = function(t, e, i) {
                    t.setFromPoints(this.vertices, e, i, 0)
                }
                ;
                var b = a.create()
                  , _ = a.create()
                  , x = a.create();
                s.prototype.raycast = function(t, e, i, s) {
                    var n = b
                      , o = _
                      , r = x
                      , h = this.vertices;
                    a.toLocalFrame(n, e.from, i, s),
                    a.toLocalFrame(o, e.to, i, s);
                    for (var l = h.length, c = 0; c < l && !t.shouldStop(e); c++) {
                        var u = h[c]
                          , d = h[(c + 1) % l]
                          , p = a.getLineSegmentsIntersectionFraction(n, o, u, d);
                        p >= 0 && (a.sub(r, d, u),
                        a.rotate(r, r, -Math.PI / 2 + s),
                        a.normalize(r, r),
                        e.reportIntersection(t, p, r, c))
                    }
                }
            }
            , {
                "../math/polyk": 29,
                "../math/vec2": 30,
                "./Shape": 45,
                "poly-decomp": 5
            }],
            41: [function(t, e, i) {
                function s(t) {
                    if (Array.isArray(arguments[0]) && (t = {
                        heights: arguments[0]
                    },
                    "object" == typeof arguments[1]))
                        for (var e in arguments[1])
                            t[e] = arguments[1][e];
                    t = t || {},
                    this.heights = t.heights ? t.heights.slice(0) : [],
                    this.maxValue = t.maxValue || null,
                    this.minValue = t.minValue || null,
                    this.elementWidth = t.elementWidth || .1,
                    void 0 !== t.maxValue && void 0 !== t.minValue || this.updateMaxMinValues(),
                    t.type = a.HEIGHTFIELD,
                    a.call(this, t)
                }
                function n(t, e, i, s, n) {
                    var a, o, r, h;
                    a = i[0] - e[0],
                    o = i[1] - e[1],
                    r = n[0] - s[0],
                    h = n[1] - s[1];
                    var l, c;
                    if (l = (-o * (e[0] - s[0]) + a * (e[1] - s[1])) / (-r * o + a * h),
                    c = (r * (e[1] - s[1]) - h * (e[0] - s[0])) / (-r * o + a * h),
                    l >= 0 && l <= 1 && c >= 0 && c <= 1) {
                        var u = e[0] + c * a
                          , d = e[1] + c * o;
                        return t[0] = u,
                        t[1] = d,
                        c
                    }
                    return -1
                }
                var a = t("./Shape")
                  , o = t("../math/vec2")
                  , r = t("../utils/Utils");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.updateMaxMinValues = function() {
                    for (var t = this.heights, e = t[0], i = t[0], s = 0; s !== t.length; s++) {
                        var n = t[s];
                        n > e && (e = n),
                        n < i && (i = n)
                    }
                    this.maxValue = e,
                    this.minValue = i
                }
                ,
                s.prototype.computeMomentOfInertia = function(t) {
                    return Number.MAX_VALUE
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = Number.MAX_VALUE
                }
                ,
                s.prototype.updateArea = function() {
                    for (var t = this.heights, e = 0, i = 0; i < t.length - 1; i++)
                        e += (t[i] + t[i + 1]) / 2 * this.elementWidth;
                    this.area = e
                }
                ;
                var h = [o.create(), o.create(), o.create(), o.create()];
                s.prototype.computeAABB = function(t, e, i) {
                    o.set(h[0], 0, this.maxValue),
                    o.set(h[1], this.elementWidth * this.heights.length, this.maxValue),
                    o.set(h[2], this.elementWidth * this.heights.length, this.minValue),
                    o.set(h[3], 0, this.minValue),
                    t.setFromPoints(h, e, i)
                }
                ,
                s.prototype.getLineSegment = function(t, e, i) {
                    var s = this.heights
                      , n = this.elementWidth;
                    o.set(t, i * n, s[i]),
                    o.set(e, (i + 1) * n, s[i + 1])
                }
                ,
                s.prototype.getSegmentIndex = function(t) {
                    return Math.floor(t[0] / this.elementWidth)
                }
                ,
                s.prototype.getClampedSegmentIndex = function(t) {
                    var e = this.getSegmentIndex(t);
                    return e = Math.min(this.heights.length, Math.max(e, 0))
                }
                ;
                var l = o.create()
                  , c = o.create()
                  , u = o.create()
                  , d = o.create()
                  , p = o.create()
                  , f = o.create()
                  , g = o.fromValues(0, 1);
                s.prototype.raycast = function(t, e, i, s) {
                    var n = e.from
                      , a = e.to
                      , r = e.direction
                      , h = l
                      , g = c
                      , m = u
                      , y = d
                      , v = p
                      , b = f;
                    o.toLocalFrame(v, n, i, s),
                    o.toLocalFrame(b, a, i, s);
                    var _ = this.getClampedSegmentIndex(v)
                      , x = this.getClampedSegmentIndex(b);
                    if (_ > x) {
                        var w = _;
                        _ = x,
                        x = w
                    }
                    for (var P = 0; P < this.heights.length - 1; P++) {
                        this.getLineSegment(m, y, P);
                        var T = o.getLineSegmentsIntersectionFraction(v, b, m, y);
                        if (T >= 0 && (o.sub(g, y, m),
                        o.rotate(g, g, s + Math.PI / 2),
                        o.normalize(g, g),
                        e.reportIntersection(t, T, g, -1),
                        t.shouldStop(e)))
                            return
                    }
                }
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Shape": 45
            }],
            42: [function(t, e, i) {
                function s(t) {
                    "number" == typeof arguments[0] && (t = {
                        length: arguments[0]
                    }),
                    t = t || {},
                    this.length = t.length || 1,
                    t.type = n.LINE,
                    n.call(this, t)
                }
                var n = t("./Shape")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    return t * Math.pow(this.length, 2) / 12
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = this.length / 2
                }
                ;
                var o = [a.create(), a.create()];
                s.prototype.computeAABB = function(t, e, i) {
                    var s = this.length / 2;
                    a.set(o[0], -s, 0),
                    a.set(o[1], s, 0),
                    t.setFromPoints(o, e, i, 0)
                }
                ;
                var r = a.create()
                  , h = a.create()
                  , l = a.create()
                  , c = a.create()
                  , u = a.fromValues(0, 1);
                s.prototype.raycast = function(t, e, i, s) {
                    var n = e.from
                      , o = e.to
                      , r = l
                      , d = c
                      , p = this.length / 2;
                    a.set(r, -p, 0),
                    a.set(d, p, 0),
                    a.toGlobalFrame(r, r, i, s),
                    a.toGlobalFrame(d, d, i, s);
                    var f = a.getLineSegmentsIntersectionFraction(r, d, n, o);
                    if (f >= 0) {
                        var g = h;
                        a.rotate(g, u, s),
                        e.reportIntersection(t, f, g, -1)
                    }
                }
            }
            , {
                "../math/vec2": 30,
                "./Shape": 45
            }],
            43: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    t.type = n.PARTICLE,
                    n.call(this, t)
                }
                var n = t("./Shape")
                  , a = t("../math/vec2");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    return 0
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = 0
                }
                ,
                s.prototype.computeAABB = function(t, e, i) {
                    a.copy(t.lowerBound, e),
                    a.copy(t.upperBound, e)
                }
            }
            , {
                "../math/vec2": 30,
                "./Shape": 45
            }],
            44: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    t.type = n.PLANE,
                    n.call(this, t)
                }
                var n = t("./Shape")
                  , a = t("../math/vec2")
                  , o = t("../utils/Utils");
                e.exports = s,
                s.prototype = new n,
                s.prototype.constructor = s,
                s.prototype.computeMomentOfInertia = function(t) {
                    return 0
                }
                ,
                s.prototype.updateBoundingRadius = function() {
                    this.boundingRadius = Number.MAX_VALUE
                }
                ,
                s.prototype.computeAABB = function(t, e, i) {
                    var s = i % (2 * Math.PI)
                      , n = a.set
                      , o = Number.MAX_VALUE
                      , r = t.lowerBound
                      , h = t.upperBound;
                    0 === s ? (n(r, -o, -o),
                    n(h, o, 0)) : s === Math.PI / 2 ? (n(r, 0, -o),
                    n(h, o, o)) : s === Math.PI ? (n(r, -o, 0),
                    n(h, o, o)) : s === 3 * Math.PI / 2 ? (n(r, -o, -o),
                    n(h, 0, o)) : (n(r, -o, -o),
                    n(h, o, o)),
                    a.add(r, r, e),
                    a.add(h, h, e)
                }
                ,
                s.prototype.updateArea = function() {
                    this.area = Number.MAX_VALUE
                }
                ;
                var r = a.create()
                  , h = a.create()
                  , l = a.create()
                  , c = a.create()
                  , u = a.create();
                s.prototype.raycast = function(t, e, i, s) {
                    var n = e.from
                      , o = e.to
                      , d = e.direction
                      , p = r
                      , f = h
                      , g = l
                      , m = c
                      , y = u;
                    a.set(m, 0, 1),
                    a.rotate(m, m, s),
                    a.sub(y, n, i);
                    var v = a.dot(y, m);
                    if (a.sub(y, o, i),
                    !(v * a.dot(y, m) > 0 || a.squaredDistance(n, o) < v * v)) {
                        var b = a.dot(m, d);
                        a.sub(p, n, i);
                        var _ = -a.dot(m, p) / b / e.length;
                        e.reportIntersection(t, _, m, -1)
                    }
                }
            }
            , {
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Shape": 45
            }],
            45: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    this.body = null,
                    this.position = n.fromValues(0, 0),
                    t.position && n.copy(this.position, t.position),
                    this.angle = t.angle || 0,
                    this.type = t.type || 0,
                    this.id = s.idCounter++,
                    this.boundingRadius = 0,
                    this.collisionGroup = void 0 !== t.collisionGroup ? t.collisionGroup : 1,
                    this.collisionResponse = void 0 === t.collisionResponse || t.collisionResponse,
                    this.collisionMask = void 0 !== t.collisionMask ? t.collisionMask : 1,
                    this.material = t.material || null,
                    this.area = 0,
                    this.sensor = void 0 !== t.sensor && t.sensor,
                    this.type && this.updateBoundingRadius(),
                    this.updateArea()
                }
                e.exports = s;
                var n = t("../math/vec2");
                s.idCounter = 0,
                s.CIRCLE = 1,
                s.PARTICLE = 2,
                s.PLANE = 4,
                s.CONVEX = 8,
                s.LINE = 16,
                s.BOX = 32,
                Object.defineProperty(s, "RECTANGLE", {
                    get: function() {
                        return s.BOX
                    }
                }),
                s.CAPSULE = 64,
                s.HEIGHTFIELD = 128,
                s.prototype.computeMomentOfInertia = function(t) {}
                ,
                s.prototype.updateBoundingRadius = function() {}
                ,
                s.prototype.updateArea = function() {}
                ,
                s.prototype.computeAABB = function(t, e, i) {}
                ,
                s.prototype.raycast = function(t, e, i, s) {}
            }
            , {
                "../math/vec2": 30
            }],
            46: [function(t, e, i) {
                function s(t) {
                    o.call(this, t, o.GS),
                    t = t || {},
                    this.iterations = t.iterations || 10,
                    this.tolerance = t.tolerance || 1e-7,
                    this.arrayStep = 30,
                    this.lambda = new r.ARRAY_TYPE(this.arrayStep),
                    this.Bs = new r.ARRAY_TYPE(this.arrayStep),
                    this.invCs = new r.ARRAY_TYPE(this.arrayStep),
                    this.useZeroRHS = !1,
                    this.frictionIterations = 0,
                    this.usedIterations = 0
                }
                function n(t) {
                    for (var e = t.length; e--; )
                        t[e] = 0
                }
                var a = t("../math/vec2")
                  , o = t("./Solver")
                  , r = t("../utils/Utils")
                  , h = t("../equations/FrictionEquation");
                e.exports = s,
                s.prototype = new o,
                s.prototype.constructor = s,
                s.prototype.solve = function(t, e) {
                    this.sortEquations();
                    var i = 0
                      , o = this.iterations
                      , l = this.frictionIterations
                      , c = this.equations
                      , u = c.length
                      , d = Math.pow(this.tolerance * u, 2)
                      , p = e.bodies
                      , f = e.bodies.length
                      , g = a.add
                      , m = a.set
                      , y = this.useZeroRHS
                      , v = this.lambda;
                    if (this.usedIterations = 0,
                    u)
                        for (var b = 0; b !== f; b++) {
                            var _ = p[b];
                            _.updateSolveMassProperties()
                        }
                    v.length < u && (v = this.lambda = new r.ARRAY_TYPE(u + this.arrayStep),
                    this.Bs = new r.ARRAY_TYPE(u + this.arrayStep),
                    this.invCs = new r.ARRAY_TYPE(u + this.arrayStep)),
                    n(v);
                    for (var x = this.invCs, w = this.Bs, v = this.lambda, b = 0; b !== c.length; b++) {
                        var P = c[b];
                        (P.timeStep !== t || P.needsUpdate) && (P.timeStep = t,
                        P.update()),
                        w[b] = P.computeB(P.a, P.b, t),
                        x[b] = P.computeInvC(P.epsilon)
                    }
                    var T, S, P, C, b, A;
                    if (0 !== u) {
                        for (b = 0; b !== f; b++) {
                            var _ = p[b];
                            _.resetConstraintVelocity()
                        }
                        if (l) {
                            for (i = 0; i !== l; i++) {
                                for (C = 0,
                                A = 0; A !== u; A++) {
                                    P = c[A];
                                    var E = s.iterateEquation(A, P, P.epsilon, w, x, v, y, t, i);
                                    C += Math.abs(E)
                                }
                                if (this.usedIterations++,
                                C * C <= d)
                                    break
                            }
                            for (s.updateMultipliers(c, v, 1 / t),
                            A = 0; A !== u; A++) {
                                var I = c[A];
                                if (I instanceof h) {
                                    for (var B = 0, M = 0; M !== I.contactEquations.length; M++)
                                        B += I.contactEquations[M].multiplier;
                                    B *= I.frictionCoefficient / I.contactEquations.length,
                                    I.maxForce = B,
                                    I.minForce = -B
                                }
                            }
                        }
                        for (i = 0; i !== o; i++) {
                            for (C = 0,
                            A = 0; A !== u; A++) {
                                P = c[A];
                                var E = s.iterateEquation(A, P, P.epsilon, w, x, v, y, t, i);
                                C += Math.abs(E)
                            }
                            if (this.usedIterations++,
                            C * C <= d)
                                break
                        }
                        for (b = 0; b !== f; b++)
                            p[b].addConstraintVelocity();
                        s.updateMultipliers(c, v, 1 / t)
                    }
                }
                ,
                s.updateMultipliers = function(t, e, i) {
                    for (var s = t.length; s--; )
                        t[s].multiplier = e[s] * i
                }
                ,
                s.iterateEquation = function(t, e, i, s, n, a, o, r, h) {
                    var l = s[t]
                      , c = n[t]
                      , u = a[t]
                      , d = e.computeGWlambda()
                      , p = e.maxForce
                      , f = e.minForce;
                    o && (l = 0);
                    var g = c * (l - d - i * u)
                      , m = u + g;
                    return m < f * r ? g = f * r - u : m > p * r && (g = p * r - u),
                    a[t] += g,
                    e.addToWlambda(g),
                    g
                }
            }
            , {
                "../equations/FrictionEquation": 23,
                "../math/vec2": 30,
                "../utils/Utils": 57,
                "./Solver": 47
            }],
            47: [function(t, e, i) {
                function s(t, e) {
                    t = t || {},
                    a.call(this),
                    this.type = e,
                    this.equations = [],
                    this.equationSortFunction = t.equationSortFunction || !1
                }
                var n = t("../utils/Utils")
                  , a = t("../events/EventEmitter");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.solve = function(t, e) {
                    throw new Error("Solver.solve should be implemented by subclasses!")
                }
                ;
                var o = {
                    bodies: []
                };
                s.prototype.solveIsland = function(t, e) {
                    this.removeAllEquations(),
                    e.equations.length && (this.addEquations(e.equations),
                    o.bodies.length = 0,
                    e.getBodies(o.bodies),
                    o.bodies.length && this.solve(t, o))
                }
                ,
                s.prototype.sortEquations = function() {
                    this.equationSortFunction && this.equations.sort(this.equationSortFunction)
                }
                ,
                s.prototype.addEquation = function(t) {
                    t.enabled && this.equations.push(t)
                }
                ,
                s.prototype.addEquations = function(t) {
                    for (var e = 0, i = t.length; e !== i; e++) {
                        var s = t[e];
                        s.enabled && this.equations.push(s)
                    }
                }
                ,
                s.prototype.removeEquation = function(t) {
                    var e = this.equations.indexOf(t);
                    -1 !== e && this.equations.splice(e, 1)
                }
                ,
                s.prototype.removeAllEquations = function() {
                    this.equations.length = 0
                }
                ,
                s.GS = 1,
                s.ISLAND = 2
            }
            , {
                "../events/EventEmitter": 26,
                "../utils/Utils": 57
            }],
            48: [function(t, e, i) {
                function s() {
                    a.apply(this, arguments)
                }
                var n = t("../equations/ContactEquation")
                  , a = t("./Pool");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.create = function() {
                    return new n
                }
                ,
                s.prototype.destroy = function(t) {
                    return t.bodyA = t.bodyB = null,
                    this
                }
            }
            , {
                "../equations/ContactEquation": 21,
                "./Pool": 55
            }],
            49: [function(t, e, i) {
                function s() {
                    a.apply(this, arguments)
                }
                var n = t("../equations/FrictionEquation")
                  , a = t("./Pool");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.create = function() {
                    return new n
                }
                ,
                s.prototype.destroy = function(t) {
                    return t.bodyA = t.bodyB = null,
                    this
                }
            }
            , {
                "../equations/FrictionEquation": 23,
                "./Pool": 55
            }],
            50: [function(t, e, i) {
                function s() {
                    a.apply(this, arguments)
                }
                var n = t("../world/IslandNode")
                  , a = t("./Pool");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.create = function() {
                    return new n
                }
                ,
                s.prototype.destroy = function(t) {
                    return t.reset(),
                    this
                }
            }
            , {
                "../world/IslandNode": 60,
                "./Pool": 55
            }],
            51: [function(t, e, i) {
                function s() {
                    a.apply(this, arguments)
                }
                var n = t("../world/Island")
                  , a = t("./Pool");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.create = function() {
                    return new n
                }
                ,
                s.prototype.destroy = function(t) {
                    return t.reset(),
                    this
                }
            }
            , {
                "../world/Island": 58,
                "./Pool": 55
            }],
            52: [function(t, e, i) {
                function s() {
                    this.overlappingShapesLastState = new n,
                    this.overlappingShapesCurrentState = new n,
                    this.recordPool = new o({
                        size: 16
                    }),
                    this.tmpDict = new n,
                    this.tmpArray1 = []
                }
                var n = t("./TupleDictionary")
                  , a = t("./OverlapKeeperRecord")
                  , o = t("./OverlapKeeperRecordPool")
                  , r = t("./Utils");
                e.exports = s,
                s.prototype.tick = function() {
                    for (var t = this.overlappingShapesLastState, e = this.overlappingShapesCurrentState, i = t.keys.length; i--; ) {
                        var s = t.keys[i]
                          , n = t.getByKey(s)
                          , a = e.getByKey(s);
                        n && this.recordPool.release(n)
                    }
                    t.reset(),
                    t.copy(e),
                    e.reset()
                }
                ,
                s.prototype.setOverlapping = function(t, e, i, s) {
                    var n = this.overlappingShapesLastState
                      , a = this.overlappingShapesCurrentState;
                    if (!a.get(e.id, s.id)) {
                        var o = this.recordPool.get();
                        o.set(t, e, i, s),
                        a.set(e.id, s.id, o)
                    }
                }
                ,
                s.prototype.getNewOverlaps = function(t) {
                    return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, t)
                }
                ,
                s.prototype.getEndOverlaps = function(t) {
                    return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, t)
                }
                ,
                s.prototype.bodiesAreOverlapping = function(t, e) {
                    for (var i = this.overlappingShapesCurrentState, s = i.keys.length; s--; ) {
                        var n = i.keys[s]
                          , a = i.data[n];
                        if (a.bodyA === t && a.bodyB === e || a.bodyA === e && a.bodyB === t)
                            return !0
                    }
                    return !1
                }
                ,
                s.prototype.getDiff = function(t, e, i) {
                    var i = i || []
                      , s = t
                      , n = e;
                    i.length = 0;
                    for (var a = n.keys.length; a--; ) {
                        var o = n.keys[a]
                          , r = n.data[o];
                        if (!r)
                            throw new Error("Key " + o + " had no data!");
                        s.data[o] || i.push(r)
                    }
                    return i
                }
                ,
                s.prototype.isNewOverlap = function(t, e) {
                    var i = 0 | t.id
                      , s = 0 | e.id
                      , n = this.overlappingShapesLastState
                      , a = this.overlappingShapesCurrentState;
                    return !n.get(i, s) && !!a.get(i, s)
                }
                ,
                s.prototype.getNewBodyOverlaps = function(t) {
                    this.tmpArray1.length = 0;
                    var e = this.getNewOverlaps(this.tmpArray1);
                    return this.getBodyDiff(e, t)
                }
                ,
                s.prototype.getEndBodyOverlaps = function(t) {
                    this.tmpArray1.length = 0;
                    var e = this.getEndOverlaps(this.tmpArray1);
                    return this.getBodyDiff(e, t)
                }
                ,
                s.prototype.getBodyDiff = function(t, e) {
                    e = e || [];
                    for (var i = this.tmpDict, s = t.length; s--; ) {
                        var n = t[s];
                        i.set(0 | n.bodyA.id, 0 | n.bodyB.id, n)
                    }
                    for (s = i.keys.length; s--; ) {
                        var n = i.getByKey(i.keys[s]);
                        n && e.push(n.bodyA, n.bodyB)
                    }
                    return i.reset(),
                    e
                }
            }
            , {
                "./OverlapKeeperRecord": 53,
                "./OverlapKeeperRecordPool": 54,
                "./TupleDictionary": 56,
                "./Utils": 57
            }],
            53: [function(t, e, i) {
                function s(t, e, i, s) {
                    this.shapeA = e,
                    this.shapeB = s,
                    this.bodyA = t,
                    this.bodyB = i
                }
                e.exports = s,
                s.prototype.set = function(t, e, i, n) {
                    s.call(this, t, e, i, n)
                }
            }
            , {}],
            54: [function(t, e, i) {
                function s() {
                    a.apply(this, arguments)
                }
                var n = t("./OverlapKeeperRecord")
                  , a = t("./Pool");
                e.exports = s,
                s.prototype = new a,
                s.prototype.constructor = s,
                s.prototype.create = function() {
                    return new n
                }
                ,
                s.prototype.destroy = function(t) {
                    return t.bodyA = t.bodyB = t.shapeA = t.shapeB = null,
                    this
                }
            }
            , {
                "./OverlapKeeperRecord": 53,
                "./Pool": 55
            }],
            55: [function(t, e, i) {
                function s(t) {
                    t = t || {},
                    this.objects = [],
                    void 0 !== t.size && this.resize(t.size)
                }
                e.exports = s,
                s.prototype.resize = function(t) {
                    for (var e = this.objects; e.length > t; )
                        e.pop();
                    for (; e.length < t; )
                        e.push(this.create());
                    return this
                }
                ,
                s.prototype.get = function() {
                    var t = this.objects;
                    return t.length ? t.pop() : this.create()
                }
                ,
                s.prototype.release = function(t) {
                    return this.destroy(t),
                    this.objects.push(t),
                    this
                }
            }
            , {}],
            56: [function(t, e, i) {
                function s() {
                    this.data = {},
                    this.keys = []
                }
                var n = t("./Utils");
                e.exports = s,
                s.prototype.getKey = function(t, e) {
                    return t |= 0,
                    e |= 0,
                    (0 | t) == (0 | e) ? -1 : 0 | ((0 | t) > (0 | e) ? t << 16 | 65535 & e : e << 16 | 65535 & t)
                }
                ,
                s.prototype.getByKey = function(t) {
                    return t |= 0,
                    this.data[t]
                }
                ,
                s.prototype.get = function(t, e) {
                    return this.data[this.getKey(t, e)]
                }
                ,
                s.prototype.set = function(t, e, i) {
                    if (!i)
                        throw new Error("No data!");
                    var s = this.getKey(t, e);
                    return this.data[s] || this.keys.push(s),
                    this.data[s] = i,
                    s
                }
                ,
                s.prototype.reset = function() {
                    for (var t = this.data, e = this.keys, i = e.length; i--; )
                        delete t[e[i]];
                    e.length = 0
                }
                ,
                s.prototype.copy = function(t) {
                    this.reset(),
                    n.appendArray(this.keys, t.keys);
                    for (var e = t.keys.length; e--; ) {
                        var i = t.keys[e];
                        this.data[i] = t.data[i]
                    }
                }
            }
            , {
                "./Utils": 57
            }],
            57: [function(t, e, i) {
                function s() {}
                e.exports = s,
                s.appendArray = function(t, e) {
                    if (e.length < 15e4)
                        t.push.apply(t, e);
                    else
                        for (var i = 0, s = e.length; i !== s; ++i)
                            t.push(e[i])
                }
                ,
                s.splice = function(t, e, i) {
                    i = i || 1;
                    for (var s = e, n = t.length - i; s < n; s++)
                        t[s] = t[s + i];
                    t.length = n
                }
                ,
                "undefined" != typeof P2_ARRAY_TYPE ? s.ARRAY_TYPE = P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? s.ARRAY_TYPE = Float32Array : s.ARRAY_TYPE = Array,
                s.extend = function(t, e) {
                    for (var i in e)
                        t[i] = e[i]
                }
                ,
                s.defaults = function(t, e) {
                    t = t || {};
                    for (var i in e)
                        i in t || (t[i] = e[i]);
                    return t
                }
            }
            , {}],
            58: [function(t, e, i) {
                function s() {
                    this.equations = [],
                    this.bodies = []
                }
                var n = t("../objects/Body");
                e.exports = s,
                s.prototype.reset = function() {
                    this.equations.length = this.bodies.length = 0
                }
                ;
                var a = [];
                s.prototype.getBodies = function(t) {
                    var e = t || []
                      , i = this.equations;
                    a.length = 0;
                    for (var s = 0; s !== i.length; s++) {
                        var n = i[s];
                        -1 === a.indexOf(n.bodyA.id) && (e.push(n.bodyA),
                        a.push(n.bodyA.id)),
                        -1 === a.indexOf(n.bodyB.id) && (e.push(n.bodyB),
                        a.push(n.bodyB.id))
                    }
                    return e
                }
                ,
                s.prototype.wantsToSleep = function() {
                    for (var t = 0; t < this.bodies.length; t++) {
                        var e = this.bodies[t];
                        if (e.type === n.DYNAMIC && !e.wantsToSleep)
                            return !1
                    }
                    return !0
                }
                ,
                s.prototype.sleep = function() {
                    for (var t = 0; t < this.bodies.length; t++) {
                        this.bodies[t].sleep()
                    }
                    return !0
                }
            }
            , {
                "../objects/Body": 31
            }],
            59: [function(t, e, i) {
                function s(t) {
                    this.nodePool = new r({
                        size: 16
                    }),
                    this.islandPool = new h({
                        size: 8
                    }),
                    this.equations = [],
                    this.islands = [],
                    this.nodes = [],
                    this.queue = []
                }
                var n = t("../math/vec2")
                  , a = t("./Island")
                  , o = t("./IslandNode")
                  , r = t("./../utils/IslandNodePool")
                  , h = t("./../utils/IslandPool")
                  , l = t("../objects/Body");
                e.exports = s,
                s.getUnvisitedNode = function(t) {
                    for (var e = t.length, i = 0; i !== e; i++) {
                        var s = t[i];
                        if (!s.visited && s.body.type === l.DYNAMIC)
                            return s
                    }
                    return !1
                }
                ,
                s.prototype.visit = function(t, e, i) {
                    e.push(t.body);
                    for (var s = t.equations.length, n = 0; n !== s; n++) {
                        var a = t.equations[n];
                        -1 === i.indexOf(a) && i.push(a)
                    }
                }
                ,
                s.prototype.bfs = function(t, e, i) {
                    var n = this.queue;
                    for (n.length = 0,
                    n.push(t),
                    t.visited = !0,
                    this.visit(t, e, i); n.length; )
                        for (var a = n.pop(), o; o = s.getUnvisitedNode(a.neighbors); )
                            o.visited = !0,
                            this.visit(o, e, i),
                            o.body.type === l.DYNAMIC && n.push(o)
                }
                ,
                s.prototype.split = function(t) {
                    for (var e = t.bodies, i = this.nodes, n = this.equations; i.length; )
                        this.nodePool.release(i.pop());
                    for (var a = 0; a !== e.length; a++) {
                        var o = this.nodePool.get();
                        o.body = e[a],
                        i.push(o)
                    }
                    for (var r = 0; r !== n.length; r++) {
                        var h = n[r]
                          , a = e.indexOf(h.bodyA)
                          , l = e.indexOf(h.bodyB)
                          , c = i[a]
                          , u = i[l];
                        c.neighbors.push(u),
                        u.neighbors.push(c),
                        c.equations.push(h),
                        u.equations.push(h)
                    }
                    for (var d = this.islands, a = 0; a < d.length; a++)
                        this.islandPool.release(d[a]);
                    d.length = 0;
                    for (var p; p = s.getUnvisitedNode(i); ) {
                        var f = this.islandPool.get();
                        this.bfs(p, f.bodies, f.equations),
                        d.push(f)
                    }
                    return d
                }
            }
            , {
                "../math/vec2": 30,
                "../objects/Body": 31,
                "./../utils/IslandNodePool": 50,
                "./../utils/IslandPool": 51,
                "./Island": 58,
                "./IslandNode": 60
            }],
            60: [function(t, e, i) {
                function s(t) {
                    this.body = t,
                    this.neighbors = [],
                    this.equations = [],
                    this.visited = !1
                }
                e.exports = s,
                s.prototype.reset = function() {
                    this.equations.length = 0,
                    this.neighbors.length = 0,
                    this.visited = !1,
                    this.body = null
                }
            }
            , {}],
            61: [function(t, e, i) {
                function s(t) {
                    f.apply(this),
                    t = t || {},
                    this.springs = [],
                    this.bodies = [],
                    this.disabledBodyCollisionPairs = [],
                    this.solver = t.solver || new n,
                    this.narrowphase = new B(this),
                    this.islandManager = new O,
                    this.gravity = r.fromValues(0, -9.78),
                    t.gravity && r.copy(this.gravity, t.gravity),
                    this.frictionGravity = r.length(this.gravity) || 10,
                    this.useWorldGravityAsFrictionGravity = !0,
                    this.useFrictionGravityOnZeroGravity = !0,
                    this.broadphase = t.broadphase || new I,
                    this.broadphase.setWorld(this),
                    this.constraints = [],
                    this.defaultMaterial = new v,
                    this.defaultContactMaterial = new b(this.defaultMaterial,this.defaultMaterial),
                    this.lastTimeStep = 1 / 60,
                    this.applySpringForces = !0,
                    this.applyDamping = !0,
                    this.applyGravity = !0,
                    this.solveConstraints = !0,
                    this.contactMaterials = [],
                    this.time = 0,
                    this.accumulator = 0,
                    this.stepping = !1,
                    this.bodiesToBeRemoved = [],
                    this.islandSplit = void 0 === t.islandSplit || !!t.islandSplit,
                    this.emitImpactEvent = !0,
                    this._constraintIdCounter = 0,
                    this._bodyIdCounter = 0,
                    this.postStepEvent = {
                        type: "postStep"
                    },
                    this.addBodyEvent = {
                        type: "addBody",
                        body: null
                    },
                    this.removeBodyEvent = {
                        type: "removeBody",
                        body: null
                    },
                    this.addSpringEvent = {
                        type: "addSpring",
                        spring: null
                    },
                    this.impactEvent = {
                        type: "impact",
                        bodyA: null,
                        bodyB: null,
                        shapeA: null,
                        shapeB: null,
                        contactEquation: null
                    },
                    this.postBroadphaseEvent = {
                        type: "postBroadphase",
                        pairs: null
                    },
                    this.sleepMode = s.NO_SLEEPING,
                    this.beginContactEvent = {
                        type: "beginContact",
                        shapeA: null,
                        shapeB: null,
                        bodyA: null,
                        bodyB: null,
                        contactEquations: []
                    },
                    this.endContactEvent = {
                        type: "endContact",
                        shapeA: null,
                        shapeB: null,
                        bodyA: null,
                        bodyB: null
                    },
                    this.preSolveEvent = {
                        type: "preSolve",
                        contactEquations: null,
                        frictionEquations: null
                    },
                    this.overlappingShapesLastState = {
                        keys: []
                    },
                    this.overlappingShapesCurrentState = {
                        keys: []
                    },
                    this.overlapKeeper = new k
                }
                var n = t("../solver/GSSolver")
                  , a = t("../solver/Solver")
                  , o = t("../collision/Ray")
                  , r = t("../math/vec2")
                  , h = t("../shapes/Circle")
                  , l = t("../shapes/Convex")
                  , c = t("../shapes/Line")
                  , u = t("../shapes/Plane")
                  , d = t("../shapes/Capsule")
                  , p = t("../shapes/Particle")
                  , f = t("../events/EventEmitter")
                  , g = t("../objects/Body")
                  , m = t("../shapes/Shape")
                  , y = t("../objects/LinearSpring")
                  , v = t("../material/Material")
                  , b = t("../material/ContactMaterial")
                  , _ = t("../constraints/DistanceConstraint")
                  , x = t("../constraints/Constraint")
                  , w = t("../constraints/LockConstraint")
                  , P = t("../constraints/RevoluteConstraint")
                  , T = t("../constraints/PrismaticConstraint")
                  , S = t("../constraints/GearConstraint")
                  , C = t("../../package.json")
                  , A = t("../collision/Broadphase")
                  , E = t("../collision/AABB")
                  , I = t("../collision/SAPBroadphase")
                  , B = t("../collision/Narrowphase")
                  , M = t("../utils/Utils")
                  , k = t("../utils/OverlapKeeper")
                  , O = t("./IslandManager")
                  , D = t("../objects/RotationalSpring");
                e.exports = s,
                s.prototype = new Object(f.prototype),
                s.prototype.constructor = s,
                s.NO_SLEEPING = 1,
                s.BODY_SLEEPING = 2,
                s.ISLAND_SLEEPING = 4,
                s.prototype.addConstraint = function(t) {
                    this.constraints.push(t)
                }
                ,
                s.prototype.addContactMaterial = function(t) {
                    this.contactMaterials.push(t)
                }
                ,
                s.prototype.removeContactMaterial = function(t) {
                    var e = this.contactMaterials.indexOf(t);
                    -1 !== e && M.splice(this.contactMaterials, e, 1)
                }
                ,
                s.prototype.getContactMaterial = function(t, e) {
                    for (var i = this.contactMaterials, s = 0, n = i.length; s !== n; s++) {
                        var a = i[s];
                        if (a.materialA.id === t.id && a.materialB.id === e.id || a.materialA.id === e.id && a.materialB.id === t.id)
                            return a
                    }
                    return !1
                }
                ,
                s.prototype.removeConstraint = function(t) {
                    var e = this.constraints.indexOf(t);
                    -1 !== e && M.splice(this.constraints, e, 1)
                }
                ;
                var L = r.create()
                  , R = r.create()
                  , F = r.create()
                  , G = r.create()
                  , N = r.create()
                  , U = r.create()
                  , j = r.create()
                  , X = r.fromValues(0, 0)
                  , W = r.fromValues(0, 0)
                  , H = r.fromValues(0, 0)
                  , V = r.fromValues(0, 0);
                s.prototype.step = function(t, e, i) {
                    if (i = i || 10,
                    0 === (e = e || 0))
                        this.internalStep(t),
                        this.time += t;
                    else {
                        this.accumulator += e;
                        for (var s = 0; this.accumulator >= t && s < i; )
                            this.internalStep(t),
                            this.time += t,
                            this.accumulator -= t,
                            s++;
                        for (var n = this.accumulator % t / t, a = 0; a !== this.bodies.length; a++) {
                            var o = this.bodies[a];
                            r.lerp(o.interpolatedPosition, o.previousPosition, o.position, n),
                            o.interpolatedAngle = o.previousAngle + n * (o.angle - o.previousAngle)
                        }
                    }
                }
                ;
                var Y = [];
                s.prototype.internalStep = function(t) {
                    this.stepping = !0;
                    var e = this, i = this.springs.length, n = this.springs, a = this.bodies, o = this.gravity, h = this.solver, l = this.bodies.length, c = this.broadphase, u = this.narrowphase, d = this.constraints, p, f, m = N, y = U, v = j, b = r.scale, _ = r.add, x = r.rotate, w = this.islandManager;
                    if (this.overlapKeeper.tick(),
                    this.lastTimeStep = t,
                    this.useWorldGravityAsFrictionGravity) {
                        var P = r.length(this.gravity);
                        0 === P && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = P)
                    }
                    if (this.applyGravity)
                        for (var T = 0; T !== l; T++) {
                            var S = a[T]
                              , C = S.force;
                            S.type === g.DYNAMIC && S.sleepState !== g.SLEEPING && (r.scale(v, o, S.mass * S.gravityScale),
                            _(C, C, v))
                        }
                    if (this.applySpringForces)
                        for (var T = 0; T !== i; T++) {
                            var A = n[T];
                            A.applyForce()
                        }
                    if (this.applyDamping)
                        for (var T = 0; T !== l; T++) {
                            var S = a[T];
                            S.type === g.DYNAMIC && S.applyDamping(t)
                        }
                    for (var E = c.getCollisionPairs(this), I = this.disabledBodyCollisionPairs, T = I.length - 2; T >= 0; T -= 2)
                        for (var B = E.length - 2; B >= 0; B -= 2)
                            (I[T] === E[B] && I[T + 1] === E[B + 1] || I[T + 1] === E[B] && I[T] === E[B + 1]) && E.splice(B, 2);
                    var k = d.length;
                    for (T = 0; T !== k; T++) {
                        var O = d[T];
                        if (!O.collideConnected)
                            for (var B = E.length - 2; B >= 0; B -= 2)
                                (O.bodyA === E[B] && O.bodyB === E[B + 1] || O.bodyB === E[B] && O.bodyA === E[B + 1]) && E.splice(B, 2)
                    }
                    this.postBroadphaseEvent.pairs = E,
                    this.emit(this.postBroadphaseEvent),
                    this.postBroadphaseEvent.pairs = null,
                    u.reset(this);
                    for (var T = 0, D = E.length; T !== D; T += 2)
                        for (var L = E[T], R = E[T + 1], F = 0, G = L.shapes.length; F !== G; F++)
                            for (var X = L.shapes[F], W = X.position, H = X.angle, V = 0, q = R.shapes.length; V !== q; V++) {
                                var z = R.shapes[V]
                                  , K = z.position
                                  , J = z.angle
                                  , Z = this.defaultContactMaterial;
                                if (X.material && z.material) {
                                    var Q = this.getContactMaterial(X.material, z.material);
                                    Q && (Z = Q)
                                }
                                this.runNarrowphase(u, L, X, W, H, R, z, K, J, Z, this.frictionGravity)
                            }
                    for (var T = 0; T !== l; T++) {
                        var $ = a[T];
                        $._wakeUpAfterNarrowphase && ($.wakeUp(),
                        $._wakeUpAfterNarrowphase = !1)
                    }
                    if (this.has("endContact")) {
                        this.overlapKeeper.getEndOverlaps(Y);
                        for (var tt = this.endContactEvent, V = Y.length; V--; ) {
                            var et = Y[V];
                            tt.shapeA = et.shapeA,
                            tt.shapeB = et.shapeB,
                            tt.bodyA = et.bodyA,
                            tt.bodyB = et.bodyB,
                            this.emit(tt)
                        }
                        Y.length = 0
                    }
                    var it = this.preSolveEvent;
                    it.contactEquations = u.contactEquations,
                    it.frictionEquations = u.frictionEquations,
                    this.emit(it),
                    it.contactEquations = it.frictionEquations = null;
                    var k = d.length;
                    for (T = 0; T !== k; T++)
                        d[T].update();
                    if (u.contactEquations.length || u.frictionEquations.length || k)
                        if (this.islandSplit) {
                            for (w.equations.length = 0,
                            M.appendArray(w.equations, u.contactEquations),
                            M.appendArray(w.equations, u.frictionEquations),
                            T = 0; T !== k; T++)
                                M.appendArray(w.equations, d[T].equations);
                            w.split(this);
                            for (var T = 0; T !== w.islands.length; T++) {
                                var st = w.islands[T];
                                st.equations.length && h.solveIsland(t, st)
                            }
                        } else {
                            for (h.addEquations(u.contactEquations),
                            h.addEquations(u.frictionEquations),
                            T = 0; T !== k; T++)
                                h.addEquations(d[T].equations);
                            this.solveConstraints && h.solve(t, this),
                            h.removeAllEquations()
                        }
                    for (var T = 0; T !== l; T++) {
                        var $ = a[T];
                        $.integrate(t)
                    }
                    for (var T = 0; T !== l; T++)
                        a[T].setZeroForce();
                    if (this.emitImpactEvent && this.has("impact"))
                        for (var nt = this.impactEvent, T = 0; T !== u.contactEquations.length; T++) {
                            var at = u.contactEquations[T];
                            at.firstImpact && (nt.bodyA = at.bodyA,
                            nt.bodyB = at.bodyB,
                            nt.shapeA = at.shapeA,
                            nt.shapeB = at.shapeB,
                            nt.contactEquation = at,
                            this.emit(nt))
                        }
                    if (this.sleepMode === s.BODY_SLEEPING)
                        for (T = 0; T !== l; T++)
                            a[T].sleepTick(this.time, !1, t);
                    else if (this.sleepMode === s.ISLAND_SLEEPING && this.islandSplit) {
                        for (T = 0; T !== l; T++)
                            a[T].sleepTick(this.time, !0, t);
                        for (var T = 0; T < this.islandManager.islands.length; T++) {
                            var st = this.islandManager.islands[T];
                            st.wantsToSleep() && st.sleep()
                        }
                    }
                    this.stepping = !1;
                    for (var ot = this.bodiesToBeRemoved, T = 0; T !== ot.length; T++)
                        this.removeBody(ot[T]);
                    ot.length = 0,
                    this.emit(this.postStepEvent)
                }
                ,
                s.prototype.runNarrowphase = function(t, e, i, s, n, a, o, h, l, c, u) {
                    if (0 != (i.collisionGroup & o.collisionMask) && 0 != (o.collisionGroup & i.collisionMask)) {
                        r.rotate(X, s, e.angle),
                        r.rotate(W, h, a.angle),
                        r.add(X, X, e.position),
                        r.add(W, W, a.position);
                        var d = n + e.angle
                          , p = l + a.angle;
                        t.enableFriction = c.friction > 0,
                        t.frictionCoefficient = c.friction;
                        var f;
                        f = e.type === g.STATIC || e.type === g.KINEMATIC ? a.mass : a.type === g.STATIC || a.type === g.KINEMATIC ? e.mass : e.mass * a.mass / (e.mass + a.mass),
                        t.slipForce = c.friction * u * f,
                        t.restitution = c.restitution,
                        t.surfaceVelocity = c.surfaceVelocity,
                        t.frictionStiffness = c.frictionStiffness,
                        t.frictionRelaxation = c.frictionRelaxation,
                        t.stiffness = c.stiffness,
                        t.relaxation = c.relaxation,
                        t.contactSkinSize = c.contactSkinSize,
                        t.enabledEquations = e.collisionResponse && a.collisionResponse && i.collisionResponse && o.collisionResponse;
                        var m = t[i.type | o.type]
                          , y = 0;
                        if (m) {
                            var v = i.sensor || o.sensor
                              , b = t.frictionEquations.length;
                            y = i.type < o.type ? m.call(t, e, i, X, d, a, o, W, p, v) : m.call(t, a, o, W, p, e, i, X, d, v);
                            var _ = t.frictionEquations.length - b;
                            if (y) {
                                if (e.allowSleep && e.type === g.DYNAMIC && e.sleepState === g.SLEEPING && a.sleepState === g.AWAKE && a.type !== g.STATIC) {
                                    r.squaredLength(a.velocity) + Math.pow(a.angularVelocity, 2) >= 2 * Math.pow(a.sleepSpeedLimit, 2) && (e._wakeUpAfterNarrowphase = !0)
                                }
                                if (a.allowSleep && a.type === g.DYNAMIC && a.sleepState === g.SLEEPING && e.sleepState === g.AWAKE && e.type !== g.STATIC) {
                                    r.squaredLength(e.velocity) + Math.pow(e.angularVelocity, 2) >= 2 * Math.pow(e.sleepSpeedLimit, 2) && (a._wakeUpAfterNarrowphase = !0)
                                }
                                if (this.overlapKeeper.setOverlapping(e, i, a, o),
                                this.has("beginContact") && this.overlapKeeper.isNewOverlap(i, o)) {
                                    var x = this.beginContactEvent;
                                    if (x.shapeA = i,
                                    x.shapeB = o,
                                    x.bodyA = e,
                                    x.bodyB = a,
                                    x.contactEquations.length = 0,
                                    "number" == typeof y)
                                        for (var w = t.contactEquations.length - y; w < t.contactEquations.length; w++)
                                            x.contactEquations.push(t.contactEquations[w]);
                                    this.emit(x)
                                }
                                if ("number" == typeof y && _ > 1)
                                    for (var w = t.frictionEquations.length - _; w < t.frictionEquations.length; w++) {
                                        var P = t.frictionEquations[w];
                                        P.setSlipForce(P.getSlipForce() / _)
                                    }
                            }
                        }
                    }
                }
                ,
                s.prototype.addSpring = function(t) {
                    this.springs.push(t);
                    var e = this.addSpringEvent;
                    e.spring = t,
                    this.emit(e),
                    e.spring = null
                }
                ,
                s.prototype.removeSpring = function(t) {
                    var e = this.springs.indexOf(t);
                    -1 !== e && M.splice(this.springs, e, 1)
                }
                ,
                s.prototype.addBody = function(t) {
                    if (-1 === this.bodies.indexOf(t)) {
                        this.bodies.push(t),
                        t.world = this;
                        var e = this.addBodyEvent;
                        e.body = t,
                        this.emit(e),
                        e.body = null
                    }
                }
                ,
                s.prototype.removeBody = function(t) {
                    if (this.stepping)
                        this.bodiesToBeRemoved.push(t);
                    else {
                        t.world = null;
                        var e = this.bodies.indexOf(t);
                        -1 !== e && (M.splice(this.bodies, e, 1),
                        this.removeBodyEvent.body = t,
                        t.resetConstraintVelocity(),
                        this.emit(this.removeBodyEvent),
                        this.removeBodyEvent.body = null)
                    }
                }
                ,
                s.prototype.getBodyById = function(t) {
                    for (var e = this.bodies, i = 0; i < e.length; i++) {
                        var s = e[i];
                        if (s.id === t)
                            return s
                    }
                    return !1
                }
                ,
                s.prototype.disableBodyCollision = function(t, e) {
                    this.disabledBodyCollisionPairs.push(t, e)
                }
                ,
                s.prototype.enableBodyCollision = function(t, e) {
                    for (var i = this.disabledBodyCollisionPairs, s = 0; s < i.length; s += 2)
                        if (i[s] === t && i[s + 1] === e || i[s + 1] === t && i[s] === e)
                            return void i.splice(s, 2)
                }
                ,
                s.prototype.clear = function() {
                    this.time = 0,
                    this.solver && this.solver.equations.length && this.solver.removeAllEquations();
                    for (var t = this.constraints, e = t.length - 1; e >= 0; e--)
                        this.removeConstraint(t[e]);
                    for (var i = this.bodies, e = i.length - 1; e >= 0; e--)
                        this.removeBody(i[e]);
                    for (var n = this.springs, e = n.length - 1; e >= 0; e--)
                        this.removeSpring(n[e]);
                    for (var a = this.contactMaterials, e = a.length - 1; e >= 0; e--)
                        this.removeContactMaterial(a[e]);
                    s.apply(this)
                }
                ;
                var q = r.create()
                  , z = r.fromValues(0, 0)
                  , K = r.fromValues(0, 0);
                s.prototype.hitTest = function(t, e, i) {
                    i = i || 0;
                    var s = new g({
                        position: t
                    })
                      , n = new p
                      , a = t
                      , o = 0
                      , c = q
                      , f = z
                      , m = K;
                    s.addShape(n);
                    for (var y = this.narrowphase, v = [], b = 0, _ = e.length; b !== _; b++)
                        for (var x = e[b], w = 0, P = x.shapes.length; w !== P; w++) {
                            var T = x.shapes[w];
                            r.rotate(c, T.position, x.angle),
                            r.add(c, c, x.position);
                            var S = T.angle + x.angle;
                            (T instanceof h && y.circleParticle(x, T, c, S, s, n, a, 0, !0) || T instanceof l && y.particleConvex(s, n, a, 0, x, T, c, S, !0) || T instanceof u && y.particlePlane(s, n, a, 0, x, T, c, S, !0) || T instanceof d && y.particleCapsule(s, n, a, 0, x, T, c, S, !0) || T instanceof p && r.squaredLength(r.sub(m, c, t)) < i * i) && v.push(x)
                        }
                    return v
                }
                ,
                s.prototype.setGlobalStiffness = function(t) {
                    for (var e = this.constraints, i = 0; i !== e.length; i++)
                        for (var s = e[i], n = 0; n !== s.equations.length; n++) {
                            var a = s.equations[n];
                            a.stiffness = t,
                            a.needsUpdate = !0
                        }
                    for (var o = this.contactMaterials, i = 0; i !== o.length; i++) {
                        var s = o[i];
                        s.stiffness = s.frictionStiffness = t
                    }
                    var s = this.defaultContactMaterial;
                    s.stiffness = s.frictionStiffness = t
                }
                ,
                s.prototype.setGlobalRelaxation = function(t) {
                    for (var e = 0; e !== this.constraints.length; e++)
                        for (var i = this.constraints[e], s = 0; s !== i.equations.length; s++) {
                            var n = i.equations[s];
                            n.relaxation = t,
                            n.needsUpdate = !0
                        }
                    for (var e = 0; e !== this.contactMaterials.length; e++) {
                        var i = this.contactMaterials[e];
                        i.relaxation = i.frictionRelaxation = t
                    }
                    var i = this.defaultContactMaterial;
                    i.relaxation = i.frictionRelaxation = t
                }
                ;
                var J = new E
                  , Z = [];
                s.prototype.raycast = function(t, e) {
                    return e.getAABB(J),
                    this.broadphase.aabbQuery(this, J, Z),
                    e.intersectBodies(t, Z),
                    Z.length = 0,
                    t.hasHit()
                }
            }
            , {
                "../../package.json": 6,
                "../collision/AABB": 7,
                "../collision/Broadphase": 8,
                "../collision/Narrowphase": 10,
                "../collision/Ray": 11,
                "../collision/SAPBroadphase": 13,
                "../constraints/Constraint": 14,
                "../constraints/DistanceConstraint": 15,
                "../constraints/GearConstraint": 16,
                "../constraints/LockConstraint": 17,
                "../constraints/PrismaticConstraint": 18,
                "../constraints/RevoluteConstraint": 19,
                "../events/EventEmitter": 26,
                "../material/ContactMaterial": 27,
                "../material/Material": 28,
                "../math/vec2": 30,
                "../objects/Body": 31,
                "../objects/LinearSpring": 32,
                "../objects/RotationalSpring": 33,
                "../shapes/Capsule": 38,
                "../shapes/Circle": 39,
                "../shapes/Convex": 40,
                "../shapes/Line": 42,
                "../shapes/Particle": 43,
                "../shapes/Plane": 44,
                "../shapes/Shape": 45,
                "../solver/GSSolver": 46,
                "../solver/Solver": 47,
                "../utils/OverlapKeeper": 52,
                "../utils/Utils": 57,
                "./IslandManager": 59
            }]
        }, {}, [36])(36)
    })
}
, function(t, e, i) {
    /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*
* @overview
*
* Phaser - http://phaser.io
*
* v2.6.4 "Kore Springs" - Built: Thu Nov 16 2017 13:53:48
*
* By Richard Davey http://www.photonstorm.com @photonstorm
*
* Phaser is a fun, free and fast 2D game framework for making HTML5 games
* for desktop and mobile web browsers, supporting Canvas and WebGL rendering.
*
* Phaser uses Pixi.js for rendering, created by Mat Groves http://matgroves.com @Doormat23
* Phaser uses p2.js for full-body physics, created by Stefan Hedman https://github.com/schteppe/p2.js @schteppe
* Phaser contains a port of N+ Physics, converted by Richard Davey, original by http://www.metanetsoftware.com
*
* Many thanks to Adam Saltsman (@ADAMATOMIC) for releasing Flixel, from which both Phaser and my love of framework development originate.
*
* Follow development at http://phaser.io and on our forum
*
* "If you want your children to be intelligent,  read them fairy tales."
* "If you want them to be more intelligent, read them more fairy tales."
*                                                     -- Albert Einstein
*/
    (function() {
        var i = this
          , s = s || {};
        /**
* @author       Mat Groves http://matgroves.com @Doormat23
* @author       Richard Davey <rich@photonstorm.com>
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
        /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
        return s.game = null,
        s.WEBGL_RENDERER = 0,
        s.CANVAS_RENDERER = 1,
        s.VERSION = "v2.2.9",
        s._UID = 0,
        "undefined" != typeof Float32Array ? (s.Float32Array = Float32Array,
        s.Uint16Array = Uint16Array,
        s.Uint32Array = Uint32Array,
        s.ArrayBuffer = ArrayBuffer) : (s.Float32Array = Array,
        s.Uint16Array = Array),
        s.PI_2 = 2 * Math.PI,
        s.RAD_TO_DEG = 180 / Math.PI,
        s.DEG_TO_RAD = Math.PI / 180,
        s.RETINA_PREFIX = "@2x",
        s.DisplayObject = function() {
            this.position = new s.Point(0,0),
            this.scale = new s.Point(1,1),
            this.pivot = new s.Point(0,0),
            this.rotation = 0,
            this.alpha = 1,
            this.visible = !0,
            this.hitArea = null,
            this.renderable = !1,
            this.parent = null,
            this.worldAlpha = 1,
            this.worldTransform = new s.Matrix,
            this.worldPosition = new s.Point(0,0),
            this.worldScale = new s.Point(1,1),
            this.worldRotation = 0,
            this.filterArea = null,
            this._sr = 0,
            this._cr = 1,
            this._bounds = new s.Rectangle(0,0,0,0),
            this._currentBounds = null,
            this._mask = null,
            this._cacheAsBitmap = !1,
            this._cacheIsDirty = !1
        }
        ,
        s.DisplayObject.prototype.constructor = s.DisplayObject,
        s.DisplayObject.prototype = {
            destroy: function() {
                if (this.children) {
                    for (var t = this.children.length; t--; )
                        this.children[t].destroy();
                    this.children = []
                }
                this.hitArea = null,
                this.parent = null,
                this.worldTransform = null,
                this.filterArea = null,
                this.renderable = !1,
                this._bounds = null,
                this._currentBounds = null,
                this._mask = null,
                this._destroyCachedSprite()
            },
            updateTransform: function(t) {
                if (!t && !this.parent && !this.game)
                    return this;
                var e = this.parent;
                t ? e = t : this.parent || (e = this.game.world);
                var i = e.worldTransform, n = this.worldTransform, a, o, r, h, l, c;
                return this.rotation % s.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation,
                this._sr = Math.sin(this.rotation),
                this._cr = Math.cos(this.rotation)),
                a = this._cr * this.scale.x,
                o = this._sr * this.scale.x,
                r = -this._sr * this.scale.y,
                h = this._cr * this.scale.y,
                l = this.position.x,
                c = this.position.y,
                (this.pivot.x || this.pivot.y) && (l -= this.pivot.x * a + this.pivot.y * r,
                c -= this.pivot.x * o + this.pivot.y * h),
                n.a = a * i.a + o * i.c,
                n.b = a * i.b + o * i.d,
                n.c = r * i.a + h * i.c,
                n.d = r * i.b + h * i.d,
                n.tx = l * i.a + c * i.c + i.tx,
                n.ty = l * i.b + c * i.d + i.ty) : (a = this.scale.x,
                h = this.scale.y,
                l = this.position.x - this.pivot.x * a,
                c = this.position.y - this.pivot.y * h,
                n.a = a * i.a,
                n.b = a * i.b,
                n.c = h * i.c,
                n.d = h * i.d,
                n.tx = l * i.a + c * i.c + i.tx,
                n.ty = l * i.b + c * i.d + i.ty),
                this.worldAlpha = this.alpha * e.worldAlpha,
                this.worldPosition.set(n.tx, n.ty),
                this.worldScale.set(this.scale.x * Math.sqrt(n.a * n.a + n.c * n.c), this.scale.y * Math.sqrt(n.b * n.b + n.d * n.d)),
                this.worldRotation = Math.atan2(-n.c, n.d),
                this._currentBounds = null,
                this.transformCallback && this.transformCallback.call(this.transformCallbackContext, n, i),
                this
            },
            preUpdate: function() {},
            generateTexture: function(t, e, i) {
                var n = this.getLocalBounds()
                  , a = new s.RenderTexture(0 | n.width,0 | n.height,i,e,t);
                return s.DisplayObject._tempMatrix.tx = -n.x,
                s.DisplayObject._tempMatrix.ty = -n.y,
                a.render(this, s.DisplayObject._tempMatrix),
                a
            },
            updateCache: function() {
                return this._generateCachedSprite(),
                this
            },
            toGlobal: function(t) {
                return this.updateTransform(),
                this.worldTransform.apply(t)
            },
            toLocal: function(t, e) {
                return e && (t = e.toGlobal(t)),
                this.updateTransform(),
                this.worldTransform.applyInverse(t)
            },
            _renderCachedSprite: function(t) {
                this._cachedSprite.worldAlpha = this.worldAlpha,
                t.gl ? s.Sprite.prototype._renderWebGL.call(this._cachedSprite, t) : s.Sprite.prototype._renderCanvas.call(this._cachedSprite, t)
            },
            _generateCachedSprite: function() {
                this._cacheAsBitmap = !1;
                var t = this.getLocalBounds();
                if (t.width = Math.max(1, Math.ceil(t.width)),
                t.height = Math.max(1, Math.ceil(t.height)),
                this.updateTransform(),
                this._cachedSprite)
                    this._cachedSprite.texture.resize(t.width, t.height);
                else {
                    var e = new s.RenderTexture(t.width,t.height);
                    this._cachedSprite = new s.Sprite(e),
                    this._cachedSprite.worldTransform = this.worldTransform
                }
                var i = this._filters;
                this._filters = null,
                this._cachedSprite.filters = i,
                s.DisplayObject._tempMatrix.tx = -t.x,
                s.DisplayObject._tempMatrix.ty = -t.y,
                this._cachedSprite.texture.render(this, s.DisplayObject._tempMatrix, !0),
                this._cachedSprite.anchor.x = -t.x / t.width,
                this._cachedSprite.anchor.y = -t.y / t.height,
                this._filters = i,
                this._cacheAsBitmap = !0
            },
            _destroyCachedSprite: function() {
                this._cachedSprite && (this._cachedSprite.texture.destroy(!0),
                this._cachedSprite = null)
            }
        },
        s.DisplayObject.prototype.displayObjectUpdateTransform = s.DisplayObject.prototype.updateTransform,
        Object.defineProperties(s.DisplayObject.prototype, {
            x: {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.position.x = t
                }
            },
            y: {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.position.y = t
                }
            },
            worldVisible: {
                get: function() {
                    if (this.visible) {
                        var t = this.parent;
                        if (!t)
                            return this.visible;
                        do {
                            if (!t.visible)
                                return !1;
                            t = t.parent
                        } while (t);
                        return !0
                    }
                    return !1
                }
            },
            mask: {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    this._mask && (this._mask.isMask = !1),
                    this._mask = t,
                    t && (this._mask.isMask = !0)
                }
            },
            filters: {
                get: function() {
                    return this._filters
                },
                set: function(t) {
                    if (Array.isArray(t)) {
                        for (var e = [], i = 0; i < t.length; i++)
                            for (var n = t[i].passes, a = 0; a < n.length; a++)
                                e.push(n[a]);
                        this._filterBlock = {
                            target: this,
                            filterPasses: e
                        }
                    }
                    this._filters = t,
                    this.blendMode && this.blendMode === s.blendModes.MULTIPLY && (this.blendMode = s.blendModes.NORMAL)
                }
            },
            cacheAsBitmap: {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    this._cacheAsBitmap !== t && (t ? this._generateCachedSprite() : this._destroyCachedSprite(),
                    this._cacheAsBitmap = t)
                }
            }
        }),
        s.DisplayObjectContainer = function() {
            s.DisplayObject.call(this),
            this.children = [],
            this.ignoreChildInput = !1
        }
        ,
        s.DisplayObjectContainer.prototype = Object.create(s.DisplayObject.prototype),
        s.DisplayObjectContainer.prototype.constructor = s.DisplayObjectContainer,
        s.DisplayObjectContainer.prototype.addChild = function(t) {
            return this.addChildAt(t, this.children.length)
        }
        ,
        s.DisplayObjectContainer.prototype.addChildAt = function(t, e) {
            if (e >= 0 && e <= this.children.length)
                return t.parent && t.parent.removeChild(t),
                t.parent = this,
                this.children.splice(e, 0, t),
                t;
            throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
        }
        ,
        s.DisplayObjectContainer.prototype.swapChildren = function(t, e) {
            if (t !== e) {
                var i = this.getChildIndex(t)
                  , s = this.getChildIndex(e);
                if (i < 0 || s < 0)
                    throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                this.children[i] = e,
                this.children[s] = t
            }
        }
        ,
        s.DisplayObjectContainer.prototype.getChildIndex = function(t) {
            var e = this.children.indexOf(t);
            if (-1 === e)
                throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
        }
        ,
        s.DisplayObjectContainer.prototype.setChildIndex = function(t, e) {
            if (e < 0 || e >= this.children.length)
                throw new Error("The supplied index is out of bounds");
            var i = this.getChildIndex(t);
            this.children.splice(i, 1),
            this.children.splice(e, 0, t)
        }
        ,
        s.DisplayObjectContainer.prototype.getChildAt = function(t) {
            if (t < 0 || t >= this.children.length)
                throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
            return this.children[t]
        }
        ,
        s.DisplayObjectContainer.prototype.removeChild = function(t) {
            var e = this.children.indexOf(t);
            if (-1 !== e)
                return this.removeChildAt(e)
        }
        ,
        s.DisplayObjectContainer.prototype.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e && (e.parent = void 0,
            this.children.splice(t, 1)),
            e
        }
        ,
        s.DisplayObjectContainer.prototype.removeChildren = function(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.children.length);
            var i = e - t;
            if (i > 0 && i <= e) {
                for (var s = this.children.splice(begin, i), n = 0; n < s.length; n++) {
                    s[n].parent = void 0
                }
                return s
            }
            if (0 === i && 0 === this.children.length)
                return [];
            throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")
        }
        ,
        s.DisplayObjectContainer.prototype.updateTransform = function() {
            if (this.visible && (this.displayObjectUpdateTransform(),
            !this._cacheAsBitmap))
                for (var t = 0; t < this.children.length; t++)
                    this.children[t].updateTransform()
        }
        ,
        s.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = s.DisplayObjectContainer.prototype.updateTransform,
        s.DisplayObjectContainer.prototype.getBounds = function(t) {
            var e = t && t instanceof s.DisplayObject
              , i = !0;
            e ? i = t instanceof s.DisplayObjectContainer && t.contains(this) : t = this;
            var n;
            if (e) {
                var a = t.worldTransform;
                for (t.worldTransform = s.identityMatrix,
                n = 0; n < t.children.length; n++)
                    t.children[n].updateTransform()
            }
            var o = 1 / 0, r = 1 / 0, h = -1 / 0, l = -1 / 0, c, u, d, p = !1;
            for (n = 0; n < this.children.length; n++) {
                this.children[n].visible && (p = !0,
                c = this.children[n].getBounds(),
                o = o < c.x ? o : c.x,
                r = r < c.y ? r : c.y,
                u = c.width + c.x,
                d = c.height + c.y,
                h = h > u ? h : u,
                l = l > d ? l : d)
            }
            var f = this._bounds;
            if (!p) {
                f = new s.Rectangle;
                var g = f.x
                  , m = f.width + f.x
                  , y = f.y
                  , v = f.height + f.y
                  , b = this.worldTransform
                  , _ = b.a
                  , x = b.b
                  , w = b.c
                  , P = b.d
                  , T = b.tx
                  , S = b.ty
                  , C = _ * m + w * v + T
                  , A = P * v + x * m + S
                  , E = _ * g + w * v + T
                  , I = P * v + x * g + S
                  , B = _ * g + w * y + T
                  , M = P * y + x * g + S
                  , k = _ * m + w * y + T
                  , O = P * y + x * m + S;
                h = C,
                l = A,
                o = C,
                r = A,
                o = E < o ? E : o,
                o = B < o ? B : o,
                o = k < o ? k : o,
                r = I < r ? I : r,
                r = M < r ? M : r,
                r = O < r ? O : r,
                h = E > h ? E : h,
                h = B > h ? B : h,
                h = k > h ? k : h,
                l = I > l ? I : l,
                l = M > l ? M : l,
                l = O > l ? O : l
            }
            if (f.x = o,
            f.y = r,
            f.width = h - o,
            f.height = l - r,
            e)
                for (t.worldTransform = a,
                n = 0; n < t.children.length; n++)
                    t.children[n].updateTransform();
            if (!i) {
                var D = t.getBounds();
                f.x -= D.x,
                f.y -= D.y
            }
            return f
        }
        ,
        s.DisplayObjectContainer.prototype.getLocalBounds = function() {
            return this.getBounds(this)
        }
        ,
        s.DisplayObjectContainer.prototype.contains = function(t) {
            return !!t && (t === this || this.contains(t.parent))
        }
        ,
        s.DisplayObjectContainer.prototype._renderWebGL = function(t) {
            if (this.visible && !(this.alpha <= 0)) {
                if (this._cacheAsBitmap)
                    return void this._renderCachedSprite(t);
                var e;
                if (this._mask || this._filters) {
                    for (this._filters && (t.spriteBatch.flush(),
                    t.filterManager.pushFilter(this._filterBlock)),
                    this._mask && (t.spriteBatch.stop(),
                    t.maskManager.pushMask(this.mask, t),
                    t.spriteBatch.start()),
                    e = 0; e < this.children.length; e++)
                        this.children[e]._renderWebGL(t);
                    t.spriteBatch.stop(),
                    this._mask && t.maskManager.popMask(this._mask, t),
                    this._filters && t.filterManager.popFilter(),
                    t.spriteBatch.start()
                } else
                    for (e = 0; e < this.children.length; e++)
                        this.children[e]._renderWebGL(t)
            }
        }
        ,
        s.DisplayObjectContainer.prototype._renderCanvas = function(t) {
            if (!1 !== this.visible && 0 !== this.alpha) {
                if (this._cacheAsBitmap)
                    return void this._renderCachedSprite(t);
                this._mask && t.maskManager.pushMask(this._mask, t);
                for (var e = 0; e < this.children.length; e++)
                    this.children[e]._renderCanvas(t);
                this._mask && t.maskManager.popMask(t)
            }
        }
        ,
        Object.defineProperty(s.DisplayObjectContainer.prototype, "width", {
            get: function() {
                return this.getLocalBounds().width * this.scale.x
            },
            set: function(t) {
                var e = this.getLocalBounds().width;
                this.scale.x = 0 !== e ? t / e : 1,
                this._width = t
            }
        }),
        Object.defineProperty(s.DisplayObjectContainer.prototype, "height", {
            get: function() {
                return this.getLocalBounds().height * this.scale.y
            },
            set: function(t) {
                var e = this.getLocalBounds().height;
                this.scale.y = 0 !== e ? t / e : 1,
                this._height = t
            }
        }),
        s.Sprite = function(t) {
            s.DisplayObjectContainer.call(this),
            this.anchor = new s.Point,
            this.texture = t || s.Texture.emptyTexture,
            this._width = 0,
            this._height = 0,
            this.tint = 16777215,
            this.cachedTint = -1,
            this.tintedTexture = null,
            this.blendMode = s.blendModes.NORMAL,
            this.shader = null,
            this.exists = !0,
            this.texture.baseTexture.hasLoaded && this.onTextureUpdate(),
            this.renderable = !0
        }
        ,
        s.Sprite.prototype = Object.create(s.DisplayObjectContainer.prototype),
        s.Sprite.prototype.constructor = s.Sprite,
        Object.defineProperty(s.Sprite.prototype, "width", {
            get: function() {
                return this.scale.x * this.texture.frame.width
            },
            set: function(t) {
                this.scale.x = t / this.texture.frame.width,
                this._width = t
            }
        }),
        Object.defineProperty(s.Sprite.prototype, "height", {
            get: function() {
                return this.scale.y * this.texture.frame.height
            },
            set: function(t) {
                this.scale.y = t / this.texture.frame.height,
                this._height = t
            }
        }),
        s.Sprite.prototype.setTexture = function(t, e) {
            void 0 !== e && this.texture.baseTexture.destroy(),
            this.texture.baseTexture.skipRender = !1,
            this.texture = t,
            this.texture.valid = !0,
            this.cachedTint = -1
        }
        ,
        s.Sprite.prototype.onTextureUpdate = function() {
            this._width && (this.scale.x = this._width / this.texture.frame.width),
            this._height && (this.scale.y = this._height / this.texture.frame.height)
        }
        ,
        s.Sprite.prototype.getBounds = function(t) {
            var e = this.texture.frame.width
              , i = this.texture.frame.height
              , s = e * (1 - this.anchor.x)
              , n = e * -this.anchor.x
              , a = i * (1 - this.anchor.y)
              , o = i * -this.anchor.y
              , r = t || this.worldTransform
              , h = r.a
              , l = r.b
              , c = r.c
              , u = r.d
              , d = r.tx
              , p = r.ty
              , f = -1 / 0
              , g = -1 / 0
              , m = 1 / 0
              , y = 1 / 0;
            if (0 === l && 0 === c) {
                if (h < 0) {
                    h *= -1;
                    var v = s;
                    s = -n,
                    n = -v
                }
                if (u < 0) {
                    u *= -1;
                    var v = a;
                    a = -o,
                    o = -v
                }
                m = h * n + d,
                f = h * s + d,
                y = u * o + p,
                g = u * a + p
            } else {
                var b = h * n + c * o + d
                  , _ = u * o + l * n + p
                  , x = h * s + c * o + d
                  , w = u * o + l * s + p
                  , P = h * s + c * a + d
                  , T = u * a + l * s + p
                  , S = h * n + c * a + d
                  , C = u * a + l * n + p;
                m = b < m ? b : m,
                m = x < m ? x : m,
                m = P < m ? P : m,
                m = S < m ? S : m,
                y = _ < y ? _ : y,
                y = w < y ? w : y,
                y = T < y ? T : y,
                y = C < y ? C : y,
                f = b > f ? b : f,
                f = x > f ? x : f,
                f = P > f ? P : f,
                f = S > f ? S : f,
                g = _ > g ? _ : g,
                g = w > g ? w : g,
                g = T > g ? T : g,
                g = C > g ? C : g
            }
            var A = this._bounds;
            return A.x = m,
            A.width = f - m,
            A.y = y,
            A.height = g - y,
            this._currentBounds = A,
            A
        }
        ,
        s.Sprite.prototype.getLocalBounds = function() {
            var t = this.worldTransform;
            this.worldTransform = s.identityMatrix;
            for (var e = 0; e < this.children.length; e++)
                this.children[e].updateTransform();
            var i = this.getBounds();
            for (this.worldTransform = t,
            e = 0; e < this.children.length; e++)
                this.children[e].updateTransform();
            return i
        }
        ,
        s.Sprite.prototype._renderWebGL = function(t, e) {
            if (this.visible && !(this.alpha <= 0) && this.renderable) {
                var i = this.worldTransform;
                if (e && (i = e),
                this._mask || this._filters) {
                    var s = t.spriteBatch;
                    this._filters && (s.flush(),
                    t.filterManager.pushFilter(this._filterBlock)),
                    this._mask && (s.stop(),
                    t.maskManager.pushMask(this.mask, t),
                    s.start()),
                    s.render(this);
                    for (var n = 0; n < this.children.length; n++)
                        this.children[n]._renderWebGL(t);
                    s.stop(),
                    this._mask && t.maskManager.popMask(this._mask, t),
                    this._filters && t.filterManager.popFilter(),
                    s.start()
                } else {
                    t.spriteBatch.render(this);
                    for (var n = 0; n < this.children.length; n++)
                        this.children[n]._renderWebGL(t, i)
                }
            }
        }
        ,
        s.Sprite.prototype._renderCanvas = function(t, e) {
            if (!(!this.visible || 0 === this.alpha || !this.renderable || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
                var i = this.worldTransform;
                if (e && (i = e),
                this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode,
                t.context.globalCompositeOperation = s.blendModesCanvas[t.currentBlendMode]),
                this._mask && t.maskManager.pushMask(this._mask, t),
                this.texture.valid) {
                    var n = this.texture.baseTexture.resolution / t.resolution;
                    t.context.globalAlpha = this.worldAlpha,
                    t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode && (t.scaleMode = this.texture.baseTexture.scaleMode,
                    t.context[t.smoothProperty] = t.scaleMode === s.scaleModes.LINEAR);
                    var a = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width
                      , o = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height
                      , r = i.tx * t.resolution + t.shakeX
                      , h = i.ty * t.resolution + t.shakeY;
                    t.roundPixels ? (t.context.setTransform(i.a, i.b, i.c, i.d, 0 | r, 0 | h),
                    a |= 0,
                    o |= 0) : t.context.setTransform(i.a, i.b, i.c, i.d, r, h);
                    var l = this.texture.crop.width
                      , c = this.texture.crop.height;
                    if (a /= n,
                    o /= n,
                    16777215 !== this.tint)
                        (this.texture.requiresReTint || this.cachedTint !== this.tint) && (this.tintedTexture = s.CanvasTinter.getTintedTexture(this, this.tint),
                        this.cachedTint = this.tint,
                        this.texture.requiresReTint = !1),
                        t.context.drawImage(this.tintedTexture, 0, 0, l, c, a, o, l / n, c / n);
                    else {
                        var u = this.texture.crop.x
                          , d = this.texture.crop.y;
                        t.context.drawImage(this.texture.baseTexture.source, u, d, l, c, a, o, l / n, c / n)
                    }
                }
                for (var p = 0; p < this.children.length; p++)
                    this.children[p]._renderCanvas(t);
                this._mask && t.maskManager.popMask(t)
            }
        }
        ,
        s.SpriteBatch = function(t) {
            s.DisplayObjectContainer.call(this),
            this.textureThing = t,
            this.ready = !1
        }
        ,
        s.SpriteBatch.prototype = Object.create(s.DisplayObjectContainer.prototype),
        s.SpriteBatch.prototype.constructor = s.SpriteBatch,
        s.SpriteBatch.prototype.initWebGL = function(t) {
            this.fastSpriteBatch = new s.WebGLFastSpriteBatch(t),
            this.ready = !0
        }
        ,
        s.SpriteBatch.prototype.updateTransform = function() {
            this.displayObjectUpdateTransform()
        }
        ,
        s.SpriteBatch.prototype._renderWebGL = function(t) {
            !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(t.gl),
            this.fastSpriteBatch.gl !== t.gl && this.fastSpriteBatch.setContext(t.gl),
            t.spriteBatch.stop(),
            t.shaderManager.setShader(t.shaderManager.fastShader),
            this.fastSpriteBatch.begin(this, t),
            this.fastSpriteBatch.render(this),
            t.spriteBatch.start())
        }
        ,
        s.SpriteBatch.prototype._renderCanvas = function(t) {
            if (this.visible && !(this.alpha <= 0) && this.children.length) {
                var e = t.context;
                e.globalAlpha = this.worldAlpha,
                this.displayObjectUpdateTransform();
                for (var i = this.worldTransform, s = !0, n = 0; n < this.children.length; n++) {
                    var a = this.children[n];
                    if (a.visible) {
                        var o = a.texture
                          , r = o.frame;
                        if (e.globalAlpha = this.worldAlpha * a.alpha,
                        a.rotation % (2 * Math.PI) == 0)
                            s && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
                            s = !1),
                            e.drawImage(o.baseTexture.source, r.x, r.y, r.width, r.height, a.anchor.x * (-r.width * a.scale.x) + a.position.x + .5 + t.shakeX | 0, a.anchor.y * (-r.height * a.scale.y) + a.position.y + .5 + t.shakeY | 0, r.width * a.scale.x, r.height * a.scale.y);
                        else {
                            s || (s = !0),
                            a.displayObjectUpdateTransform();
                            var h = a.worldTransform
                              , l = h.tx * t.resolution + t.shakeX
                              , c = h.ty * t.resolution + t.shakeY;
                            t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | l, 0 | c) : e.setTransform(h.a, h.b, h.c, h.d, l, c),
                            e.drawImage(o.baseTexture.source, r.x, r.y, r.width, r.height, a.anchor.x * -r.width + .5 | 0, a.anchor.y * -r.height + .5 | 0, r.width, r.height)
                        }
                    }
                }
            }
        }
        ,
        s.hex2rgb = function(t) {
            return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
        }
        ,
        s.rgb2hex = function(t) {
            return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
        }
        ,
        s.canUseNewCanvasBlendModes = function() {
            if (void 0 === document)
                return !1;
            var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/"
              , e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
              , i = new Image;
            i.src = t + "AP804Oa6" + e;
            var n = new Image;
            n.src = t + "/wCKxvRF" + e;
            var a = s.CanvasPool.create(this, 6, 1)
              , o = a.getContext("2d");
            if (o.globalCompositeOperation = "multiply",
            o.drawImage(i, 0, 0),
            o.drawImage(n, 2, 0),
            !o.getImageData(2, 0, 1, 1))
                return !1;
            var r = o.getImageData(2, 0, 1, 1).data;
            return s.CanvasPool.remove(this),
            255 === r[0] && 0 === r[1] && 0 === r[2]
        }
        ,
        s.getNextPowerOfTwo = function(t) {
            if (t > 0 && 0 == (t & t - 1))
                return t;
            for (var e = 1; e < t; )
                e <<= 1;
            return e
        }
        ,
        s.isPowerOfTwo = function(t, e) {
            return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1)
        }
        ,
        s.CanvasPool = {
            create: function(t, e, i) {
                var n = s.CanvasPool.getFirst(), a;
                if (-1 === n) {
                    var o = {
                        parent: t,
                        canvas: document.createElement("canvas")
                    };
                    s.CanvasPool.pool.push(o),
                    a = o.canvas
                } else
                    s.CanvasPool.pool[n].parent = t,
                    a = s.CanvasPool.pool[n].canvas;
                return void 0 !== e && (a.width = e,
                a.height = i),
                a
            },
            getFirst: function() {
                for (var t = s.CanvasPool.pool, e = 0; e < t.length; e++)
                    if (!t[e].parent)
                        return e;
                return -1
            },
            remove: function(t) {
                for (var e = s.CanvasPool.pool, i = 0; i < e.length; i++)
                    e[i].parent === t && (e[i].parent = null,
                    e[i].canvas.width = 1,
                    e[i].canvas.height = 1)
            },
            removeByCanvas: function(t) {
                for (var e = s.CanvasPool.pool, i = 0; i < e.length; i++)
                    e[i].canvas === t && (e[i].parent = null,
                    e[i].canvas.width = 1,
                    e[i].canvas.height = 1)
            },
            getTotal: function() {
                for (var t = s.CanvasPool.pool, e = 0, i = 0; i < t.length; i++)
                    t[i].parent && e++;
                return e
            },
            getFree: function() {
                for (var t = s.CanvasPool.pool, e = 0, i = 0; i < t.length; i++)
                    t[i].parent || e++;
                return e
            }
        },
        s.CanvasPool.pool = [],
        s.initDefaultShaders = function() {}
        ,
        s.CompileVertexShader = function(t, e) {
            return s._CompileShader(t, e, t.VERTEX_SHADER)
        }
        ,
        s.CompileFragmentShader = function(t, e) {
            return s._CompileShader(t, e, t.FRAGMENT_SHADER)
        }
        ,
        s._CompileShader = function(t, e, i) {
            var s = e;
            Array.isArray(e) && (s = e.join("\n"));
            var n = t.createShader(i);
            return t.shaderSource(n, s),
            t.compileShader(n),
            t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (window.console.log(t.getShaderInfoLog(n)),
            null)
        }
        ,
        s.compileProgram = function(t, e, i) {
            var n = s.CompileFragmentShader(t, i)
              , a = s.CompileVertexShader(t, e)
              , o = t.createProgram();
            return t.attachShader(o, a),
            t.attachShader(o, n),
            t.linkProgram(o),
            t.getProgramParameter(o, t.LINK_STATUS) || (window.console.log(t.getProgramInfoLog(o)),
            window.console.log("Could not initialise shaders")),
            o
        }
        ,
        s.PixiShader = function(t) {
            this._UID = s._UID++,
            this.gl = t,
            this.program = null,
            this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
            this.textureCount = 0,
            this.firstRun = !0,
            this.dirty = !0,
            this.attributes = [],
            this.init()
        }
        ,
        s.PixiShader.prototype.constructor = s.PixiShader,
        s.PixiShader.prototype.init = function() {
            var t = this.gl
              , e = s.compileProgram(t, this.vertexSrc || s.PixiShader.defaultVertexSrc, this.fragmentSrc);
            t.useProgram(e),
            this.uSampler = t.getUniformLocation(e, "uSampler"),
            this.projectionVector = t.getUniformLocation(e, "projectionVector"),
            this.offsetVector = t.getUniformLocation(e, "offsetVector"),
            this.dimensions = t.getUniformLocation(e, "dimensions"),
            this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"),
            this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"),
            this.colorAttribute = t.getAttribLocation(e, "aColor"),
            -1 === this.colorAttribute && (this.colorAttribute = 2),
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var i in this.uniforms)
                this.uniforms[i].uniformLocation = t.getUniformLocation(e, i);
            this.initUniforms(),
            this.program = e
        }
        ,
        s.PixiShader.prototype.initUniforms = function() {
            this.textureCount = 1;
            var t = this.gl, e;
            for (var i in this.uniforms) {
                e = this.uniforms[i];
                var s = e.type;
                "sampler2D" === s ? (e._init = !1,
                null !== e.value && this.initSampler2D(e)) : "mat2" === s || "mat3" === s || "mat4" === s ? (e.glMatrix = !0,
                e.glValueLength = 1,
                "mat2" === s ? e.glFunc = t.uniformMatrix2fv : "mat3" === s ? e.glFunc = t.uniformMatrix3fv : "mat4" === s && (e.glFunc = t.uniformMatrix4fv)) : (e.glFunc = t["uniform" + s],
                e.glValueLength = "2f" === s || "2i" === s ? 2 : "3f" === s || "3i" === s ? 3 : "4f" === s || "4i" === s ? 4 : 1)
            }
        }
        ,
        s.PixiShader.prototype.initSampler2D = function(t) {
            if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
                var e = this.gl;
                if (e.activeTexture(e["TEXTURE" + this.textureCount]),
                e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]),
                t.textureData) {
                    var i = t.textureData
                      , s = i.magFilter ? i.magFilter : e.LINEAR
                      , n = i.minFilter ? i.minFilter : e.LINEAR
                      , a = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE
                      , o = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE
                      , r = i.luminance ? e.LUMINANCE : e.RGBA;
                    if (i.repeat && (a = e.REPEAT,
                    o = e.REPEAT),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY),
                    i.width) {
                        var h = i.width ? i.width : 512
                          , l = i.height ? i.height : 2
                          , c = i.border ? i.border : 0;
                        e.texImage2D(e.TEXTURE_2D, 0, r, h, l, c, r, e.UNSIGNED_BYTE, null)
                    } else
                        e.texImage2D(e.TEXTURE_2D, 0, r, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o)
                }
                e.uniform1i(t.uniformLocation, this.textureCount),
                t._init = !0,
                this.textureCount++
            }
        }
        ,
        s.PixiShader.prototype.syncUniforms = function() {
            this.textureCount = 1;
            var t, e = this.gl;
            for (var i in this.uniforms)
                t = this.uniforms[i],
                1 === t.glValueLength ? !0 === t.glMatrix ? t.glFunc.call(e, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(e, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(e, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (e.activeTexture(e["TEXTURE" + this.textureCount]),
                t.value.baseTexture._dirty[e.id] ? s.instances[e.id].updateTexture(t.value.baseTexture) : e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]),
                e.uniform1i(t.uniformLocation, this.textureCount),
                this.textureCount++) : this.initSampler2D(t))
        }
        ,
        s.PixiShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program),
            this.uniforms = null,
            this.gl = null,
            this.attributes = null
        }
        ,
        s.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"],
        s.PixiFastShader = function(t) {
            this._UID = s._UID++,
            this.gl = t,
            this.program = null,
            this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
            this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"],
            this.textureCount = 0,
            this.init()
        }
        ,
        s.PixiFastShader.prototype.constructor = s.PixiFastShader,
        s.PixiFastShader.prototype.init = function() {
            var t = this.gl
              , e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
            t.useProgram(e),
            this.uSampler = t.getUniformLocation(e, "uSampler"),
            this.projectionVector = t.getUniformLocation(e, "projectionVector"),
            this.offsetVector = t.getUniformLocation(e, "offsetVector"),
            this.dimensions = t.getUniformLocation(e, "dimensions"),
            this.uMatrix = t.getUniformLocation(e, "uMatrix"),
            this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"),
            this.aPositionCoord = t.getAttribLocation(e, "aPositionCoord"),
            this.aScale = t.getAttribLocation(e, "aScale"),
            this.aRotation = t.getAttribLocation(e, "aRotation"),
            this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"),
            this.colorAttribute = t.getAttribLocation(e, "aColor"),
            -1 === this.colorAttribute && (this.colorAttribute = 2),
            this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute],
            this.program = e
        }
        ,
        s.PixiFastShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program),
            this.uniforms = null,
            this.gl = null,
            this.attributes = null
        }
        ,
        s.StripShader = function(t) {
            this._UID = s._UID++,
            this.gl = t,
            this.program = null,
            this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"],
            this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"],
            this.init()
        }
        ,
        s.StripShader.prototype.constructor = s.StripShader,
        s.StripShader.prototype.init = function() {
            var t = this.gl
              , e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
            t.useProgram(e),
            this.uSampler = t.getUniformLocation(e, "uSampler"),
            this.projectionVector = t.getUniformLocation(e, "projectionVector"),
            this.offsetVector = t.getUniformLocation(e, "offsetVector"),
            this.colorAttribute = t.getAttribLocation(e, "aColor"),
            this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"),
            this.aTextureCoord = t.getAttribLocation(e, "aTextureCoord"),
            this.attributes = [this.aVertexPosition, this.aTextureCoord],
            this.translationMatrix = t.getUniformLocation(e, "translationMatrix"),
            this.alpha = t.getUniformLocation(e, "alpha"),
            this.program = e
        }
        ,
        s.StripShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program),
            this.uniforms = null,
            this.gl = null,
            this.attribute = null
        }
        ,
        s.PrimitiveShader = function(t) {
            this._UID = s._UID++,
            this.gl = t,
            this.program = null,
            this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"],
            this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"],
            this.init()
        }
        ,
        s.PrimitiveShader.prototype.constructor = s.PrimitiveShader,
        s.PrimitiveShader.prototype.init = function() {
            var t = this.gl
              , e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
            t.useProgram(e),
            this.projectionVector = t.getUniformLocation(e, "projectionVector"),
            this.offsetVector = t.getUniformLocation(e, "offsetVector"),
            this.tintColor = t.getUniformLocation(e, "tint"),
            this.flipY = t.getUniformLocation(e, "flipY"),
            this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"),
            this.colorAttribute = t.getAttribLocation(e, "aColor"),
            this.attributes = [this.aVertexPosition, this.colorAttribute],
            this.translationMatrix = t.getUniformLocation(e, "translationMatrix"),
            this.alpha = t.getUniformLocation(e, "alpha"),
            this.program = e
        }
        ,
        s.PrimitiveShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program),
            this.uniforms = null,
            this.gl = null,
            this.attributes = null
        }
        ,
        s.ComplexPrimitiveShader = function(t) {
            this._UID = s._UID++,
            this.gl = t,
            this.program = null,
            this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"],
            this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"],
            this.init()
        }
        ,
        s.ComplexPrimitiveShader.prototype.constructor = s.ComplexPrimitiveShader,
        s.ComplexPrimitiveShader.prototype.init = function() {
            var t = this.gl
              , e = s.compileProgram(t, this.vertexSrc, this.fragmentSrc);
            t.useProgram(e),
            this.projectionVector = t.getUniformLocation(e, "projectionVector"),
            this.offsetVector = t.getUniformLocation(e, "offsetVector"),
            this.tintColor = t.getUniformLocation(e, "tint"),
            this.color = t.getUniformLocation(e, "color"),
            this.flipY = t.getUniformLocation(e, "flipY"),
            this.aVertexPosition = t.getAttribLocation(e, "aVertexPosition"),
            this.attributes = [this.aVertexPosition, this.colorAttribute],
            this.translationMatrix = t.getUniformLocation(e, "translationMatrix"),
            this.alpha = t.getUniformLocation(e, "alpha"),
            this.program = e
        }
        ,
        s.ComplexPrimitiveShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program),
            this.uniforms = null,
            this.gl = null,
            this.attribute = null
        }
        ,
        s.glContexts = [],
        s.instances = [],
        s.WebGLRenderer = function(t) {
            this.game = t,
            s.defaultRenderer || (s.defaultRenderer = this),
            this.type = s.WEBGL_RENDERER,
            this.resolution = t.resolution,
            this.transparent = t.transparent,
            this.autoResize = !1,
            this.preserveDrawingBuffer = t.preserveDrawingBuffer,
            this.clearBeforeRender = t.clearBeforeRender,
            this.width = t.width,
            this.height = t.height,
            this.view = t.canvas,
            this._contextOptions = {
                alpha: this.transparent,
                antialias: t.antialias,
                premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                stencil: !0,
                preserveDrawingBuffer: this.preserveDrawingBuffer
            },
            this.projection = new s.Point,
            this.offset = new s.Point,
            this.shaderManager = new s.WebGLShaderManager,
            this.spriteBatch = new s.WebGLSpriteBatch,
            this.maskManager = new s.WebGLMaskManager,
            this.filterManager = new s.WebGLFilterManager,
            this.stencilManager = new s.WebGLStencilManager,
            this.blendModeManager = new s.WebGLBlendModeManager,
            this.renderSession = {},
            this.renderSession.game = this.game,
            this.renderSession.gl = this.gl,
            this.renderSession.drawCount = 0,
            this.renderSession.shaderManager = this.shaderManager,
            this.renderSession.maskManager = this.maskManager,
            this.renderSession.filterManager = this.filterManager,
            this.renderSession.blendModeManager = this.blendModeManager,
            this.renderSession.spriteBatch = this.spriteBatch,
            this.renderSession.stencilManager = this.stencilManager,
            this.renderSession.renderer = this,
            this.renderSession.resolution = this.resolution,
            this.initContext(),
            this.mapBlendModes()
        }
        ,
        s.WebGLRenderer.prototype.constructor = s.WebGLRenderer,
        s.WebGLRenderer.prototype.initContext = function() {
            var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
            if (this.gl = t,
            !t)
                throw new Error("This browser does not support webGL. Try using the canvas renderer");
            this.glContextId = t.id = s.WebGLRenderer.glContextId++,
            s.glContexts[this.glContextId] = t,
            s.instances[this.glContextId] = this,
            t.disable(t.DEPTH_TEST),
            t.disable(t.CULL_FACE),
            t.enable(t.BLEND),
            this.shaderManager.setContext(t),
            this.spriteBatch.setContext(t),
            this.maskManager.setContext(t),
            this.filterManager.setContext(t),
            this.blendModeManager.setContext(t),
            this.stencilManager.setContext(t),
            this.renderSession.gl = this.gl,
            this.resize(this.width, this.height)
        }
        ,
        s.WebGLRenderer.prototype.render = function(t) {
            if (!this.contextLost) {
                var e = this.gl;
                e.viewport(0, 0, this.width, this.height),
                e.bindFramebuffer(e.FRAMEBUFFER, null),
                this.game.clearBeforeRender && (e.clearColor(t._bgColor.r, t._bgColor.g, t._bgColor.b, t._bgColor.a),
                e.clear(e.COLOR_BUFFER_BIT)),
                this.offset.x = this.game.camera._shake.x,
                this.offset.y = this.game.camera._shake.y,
                this.renderDisplayObject(t, this.projection)
            }
        }
        ,
        s.WebGLRenderer.prototype.renderDisplayObject = function(t, e, i, n) {
            this.renderSession.blendModeManager.setBlendMode(s.blendModes.NORMAL),
            this.renderSession.drawCount = 0,
            this.renderSession.flipY = i ? -1 : 1,
            this.renderSession.projection = e,
            this.renderSession.offset = this.offset,
            this.spriteBatch.begin(this.renderSession),
            this.filterManager.begin(this.renderSession, i),
            t._renderWebGL(this.renderSession, n),
            this.spriteBatch.end()
        }
        ,
        s.WebGLRenderer.prototype.resize = function(t, e) {
            this.width = t * this.resolution,
            this.height = e * this.resolution,
            this.view.width = this.width,
            this.view.height = this.height,
            this.autoResize && (this.view.style.width = this.width / this.resolution + "px",
            this.view.style.height = this.height / this.resolution + "px"),
            this.gl.viewport(0, 0, this.width, this.height),
            this.projection.x = this.width / 2 / this.resolution,
            this.projection.y = -this.height / 2 / this.resolution
        }
        ,
        s.WebGLRenderer.prototype.updateTexture = function(t) {
            if (!t.hasLoaded)
                return !1;
            var e = this.gl;
            return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture()),
            e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR : e.NEAREST),
            t.mipmap && s.isPowerOfTwo(t.width, t.height) ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST),
            e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === s.scaleModes.LINEAR ? e.LINEAR : e.NEAREST),
            t._powerOf2 ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)),
            t._dirty[e.id] = !1,
            !0
        }
        ,
        s.WebGLRenderer.prototype.destroy = function() {
            s.glContexts[this.glContextId] = null,
            this.projection = null,
            this.offset = null,
            this.shaderManager.destroy(),
            this.spriteBatch.destroy(),
            this.maskManager.destroy(),
            this.filterManager.destroy(),
            this.shaderManager = null,
            this.spriteBatch = null,
            this.maskManager = null,
            this.filterManager = null,
            this.gl = null,
            this.renderSession = null,
            s.CanvasPool.remove(this),
            s.instances[this.glContextId] = null,
            s.WebGLRenderer.glContextId--
        }
        ,
        s.WebGLRenderer.prototype.mapBlendModes = function() {
            var t = this.gl;
            if (!s.blendModesWebGL) {
                var e = []
                  , i = s.blendModes;
                e[i.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.ADD] = [t.SRC_ALPHA, t.DST_ALPHA],
                e[i.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA],
                e[i.SCREEN] = [t.SRC_ALPHA, t.ONE],
                e[i.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                e[i.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                s.blendModesWebGL = e
            }
        }
        ,
        s.WebGLRenderer.glContextId = 0,
        s.WebGLBlendModeManager = function() {
            this.currentBlendMode = 99999
        }
        ,
        s.WebGLBlendModeManager.prototype.constructor = s.WebGLBlendModeManager,
        s.WebGLBlendModeManager.prototype.setContext = function(t) {
            this.gl = t
        }
        ,
        s.WebGLBlendModeManager.prototype.setBlendMode = function(t) {
            if (this.currentBlendMode === t)
                return !1;
            this.currentBlendMode = t;
            var e = s.blendModesWebGL[this.currentBlendMode];
            return e && this.gl.blendFunc(e[0], e[1]),
            !0
        }
        ,
        s.WebGLBlendModeManager.prototype.destroy = function() {
            this.gl = null
        }
        ,
        s.WebGLMaskManager = function() {}
        ,
        s.WebGLMaskManager.prototype.constructor = s.WebGLMaskManager,
        s.WebGLMaskManager.prototype.setContext = function(t) {
            this.gl = t
        }
        ,
        s.WebGLMaskManager.prototype.pushMask = function(t, e) {
            var i = e.gl;
            t.dirty && s.WebGLGraphics.updateGraphics(t, i),
            void 0 !== t._webGL[i.id] && void 0 !== t._webGL[i.id].data && 0 !== t._webGL[i.id].data.length && e.stencilManager.pushStencil(t, t._webGL[i.id].data[0], e)
        }
        ,
        s.WebGLMaskManager.prototype.popMask = function(t, e) {
            var i = this.gl;
            void 0 !== t._webGL[i.id] && void 0 !== t._webGL[i.id].data && 0 !== t._webGL[i.id].data.length && e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e)
        }
        ,
        s.WebGLMaskManager.prototype.destroy = function() {
            this.gl = null
        }
        ,
        s.WebGLStencilManager = function() {
            this.stencilStack = [],
            this.reverse = !0,
            this.count = 0
        }
        ,
        s.WebGLStencilManager.prototype.setContext = function(t) {
            this.gl = t
        }
        ,
        s.WebGLStencilManager.prototype.pushStencil = function(t, e, i) {
            var s = this.gl;
            this.bindGraphics(t, e, i),
            0 === this.stencilStack.length && (s.enable(s.STENCIL_TEST),
            s.clear(s.STENCIL_BUFFER_BIT),
            this.reverse = !0,
            this.count = 0),
            this.stencilStack.push(e);
            var n = this.count;
            s.colorMask(!1, !1, !1, !1),
            s.stencilFunc(s.ALWAYS, 0, 255),
            s.stencilOp(s.KEEP, s.KEEP, s.INVERT),
            1 === e.mode ? (s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0),
            this.reverse ? (s.stencilFunc(s.EQUAL, 255 - n, 255),
            s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, n, 255),
            s.stencilOp(s.KEEP, s.KEEP, s.INCR)),
            s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
            this.reverse ? s.stencilFunc(s.EQUAL, 255 - (n + 1), 255) : s.stencilFunc(s.EQUAL, n + 1, 255),
            this.reverse = !this.reverse) : (this.reverse ? (s.stencilFunc(s.EQUAL, n, 255),
            s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, 255 - n, 255),
            s.stencilOp(s.KEEP, s.KEEP, s.DECR)),
            s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0),
            this.reverse ? s.stencilFunc(s.EQUAL, n + 1, 255) : s.stencilFunc(s.EQUAL, 255 - (n + 1), 255)),
            s.colorMask(!0, !0, !0, !0),
            s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
            this.count++
        }
        ,
        s.WebGLStencilManager.prototype.bindGraphics = function(t, e, i) {
            this._currentGraphics = t;
            var n = this.gl, a = i.projection, o = i.offset, r;
            1 === e.mode ? (r = i.shaderManager.complexPrimitiveShader,
            i.shaderManager.setShader(r),
            n.uniform1f(r.flipY, i.flipY),
            n.uniformMatrix3fv(r.translationMatrix, !1, t.worldTransform.toArray(!0)),
            n.uniform2f(r.projectionVector, a.x, -a.y),
            n.uniform2f(r.offsetVector, -o.x, -o.y),
            n.uniform3fv(r.tintColor, s.hex2rgb(t.tint)),
            n.uniform3fv(r.color, e.color),
            n.uniform1f(r.alpha, t.worldAlpha * e.alpha),
            n.bindBuffer(n.ARRAY_BUFFER, e.buffer),
            n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, !1, 8, 0),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (r = i.shaderManager.primitiveShader,
            i.shaderManager.setShader(r),
            n.uniformMatrix3fv(r.translationMatrix, !1, t.worldTransform.toArray(!0)),
            n.uniform1f(r.flipY, i.flipY),
            n.uniform2f(r.projectionVector, a.x, -a.y),
            n.uniform2f(r.offsetVector, -o.x, -o.y),
            n.uniform3fv(r.tintColor, s.hex2rgb(t.tint)),
            n.uniform1f(r.alpha, t.worldAlpha),
            n.bindBuffer(n.ARRAY_BUFFER, e.buffer),
            n.vertexAttribPointer(r.aVertexPosition, 2, n.FLOAT, !1, 24, 0),
            n.vertexAttribPointer(r.colorAttribute, 4, n.FLOAT, !1, 24, 8),
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
        }
        ,
        s.WebGLStencilManager.prototype.popStencil = function(t, e, i) {
            var s = this.gl;
            if (this.stencilStack.pop(),
            this.count--,
            0 === this.stencilStack.length)
                s.disable(s.STENCIL_TEST);
            else {
                var n = this.count;
                this.bindGraphics(t, e, i),
                s.colorMask(!1, !1, !1, !1),
                1 === e.mode ? (this.reverse = !this.reverse,
                this.reverse ? (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255),
                s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, n + 1, 255),
                s.stencilOp(s.KEEP, s.KEEP, s.DECR)),
                s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
                s.stencilFunc(s.ALWAYS, 0, 255),
                s.stencilOp(s.KEEP, s.KEEP, s.INVERT),
                s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0),
                this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)) : (this.reverse ? (s.stencilFunc(s.EQUAL, n + 1, 255),
                s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255),
                s.stencilOp(s.KEEP, s.KEEP, s.INCR)),
                s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0),
                this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)),
                s.colorMask(!0, !0, !0, !0),
                s.stencilOp(s.KEEP, s.KEEP, s.KEEP)
            }
        }
        ,
        s.WebGLStencilManager.prototype.destroy = function() {
            this.stencilStack = null,
            this.gl = null
        }
        ,
        s.WebGLShaderManager = function() {
            this.maxAttibs = 10,
            this.attribState = [],
            this.tempAttribState = [];
            for (var t = 0; t < this.maxAttibs; t++)
                this.attribState[t] = !1;
            this.stack = []
        }
        ,
        s.WebGLShaderManager.prototype.constructor = s.WebGLShaderManager,
        s.WebGLShaderManager.prototype.setContext = function(t) {
            this.gl = t,
            this.primitiveShader = new s.PrimitiveShader(t),
            this.complexPrimitiveShader = new s.ComplexPrimitiveShader(t),
            this.defaultShader = new s.PixiShader(t),
            this.fastShader = new s.PixiFastShader(t),
            this.stripShader = new s.StripShader(t),
            this.setShader(this.defaultShader)
        }
        ,
        s.WebGLShaderManager.prototype.setAttribs = function(t) {
            var e;
            for (e = 0; e < this.tempAttribState.length; e++)
                this.tempAttribState[e] = !1;
            for (e = 0; e < t.length; e++) {
                var i = t[e];
                this.tempAttribState[i] = !0
            }
            var s = this.gl;
            for (e = 0; e < this.attribState.length; e++)
                this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e],
                this.tempAttribState[e] ? s.enableVertexAttribArray(e) : s.disableVertexAttribArray(e))
        }
        ,
        s.WebGLShaderManager.prototype.setShader = function(t) {
            return this._currentId !== t._UID && (this._currentId = t._UID,
            this.currentShader = t,
            this.gl.useProgram(t.program),
            this.setAttribs(t.attributes),
            !0)
        }
        ,
        s.WebGLShaderManager.prototype.destroy = function() {
            this.attribState = null,
            this.tempAttribState = null,
            this.primitiveShader.destroy(),
            this.complexPrimitiveShader.destroy(),
            this.defaultShader.destroy(),
            this.fastShader.destroy(),
            this.stripShader.destroy(),
            this.gl = null
        }
        ,
        s.WebGLSpriteBatch = function() {
            this.vertSize = 5,
            this.size = 2e3;
            var t = 4 * this.size * 4 * this.vertSize
              , e = 6 * this.size;
            this.vertices = new s.ArrayBuffer(t),
            this.positions = new s.Float32Array(this.vertices),
            this.colors = new s.Uint32Array(this.vertices),
            this.indices = new s.Uint16Array(e),
            this.lastIndexCount = 0;
            for (var i = 0, n = 0; i < e; i += 6,
            n += 4)
                this.indices[i + 0] = n + 0,
                this.indices[i + 1] = n + 1,
                this.indices[i + 2] = n + 2,
                this.indices[i + 3] = n + 0,
                this.indices[i + 4] = n + 2,
                this.indices[i + 5] = n + 3;
            this.drawing = !1,
            this.currentBatchSize = 0,
            this.currentBaseTexture = null,
            this.dirty = !0,
            this.textures = [],
            this.blendModes = [],
            this.shaders = [],
            this.sprites = [],
            this.defaultShader = new s.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"])
        }
        ,
        s.WebGLSpriteBatch.prototype.setContext = function(t) {
            this.gl = t,
            this.vertexBuffer = t.createBuffer(),
            this.indexBuffer = t.createBuffer(),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW),
            this.currentBlendMode = 99999;
            var e = new s.PixiShader(t);
            e.fragmentSrc = this.defaultShader.fragmentSrc,
            e.uniforms = {},
            e.init(),
            this.defaultShader.shaders[t.id] = e
        }
        ,
        s.WebGLSpriteBatch.prototype.begin = function(t) {
            this.renderSession = t,
            this.shader = this.renderSession.shaderManager.defaultShader,
            this.start()
        }
        ,
        s.WebGLSpriteBatch.prototype.end = function() {
            this.flush()
        }
        ,
        s.WebGLSpriteBatch.prototype.render = function(t, e) {
            var i = t.texture
              , s = t.worldTransform;
            e && (s = e),
            this.currentBatchSize >= this.size && (this.flush(),
            this.currentBaseTexture = i.baseTexture);
            var n = i._uvs;
            if (n) {
                var a = t.anchor.x, o = t.anchor.y, r, h, l, c;
                if (i.trim) {
                    var u = i.trim;
                    h = u.x - a * u.width,
                    r = h + i.crop.width,
                    c = u.y - o * u.height,
                    l = c + i.crop.height
                } else
                    r = i.frame.width * (1 - a),
                    h = i.frame.width * -a,
                    l = i.frame.height * (1 - o),
                    c = i.frame.height * -o;
                var d = 4 * this.currentBatchSize * this.vertSize
                  , p = i.baseTexture.resolution
                  , f = s.a / p
                  , g = s.b / p
                  , m = s.c / p
                  , y = s.d / p
                  , v = s.tx
                  , b = s.ty
                  , _ = this.colors
                  , x = this.positions;
                this.renderSession.roundPixels ? (x[d] = f * h + m * c + v | 0,
                x[d + 1] = y * c + g * h + b | 0,
                x[d + 5] = f * r + m * c + v | 0,
                x[d + 6] = y * c + g * r + b | 0,
                x[d + 10] = f * r + m * l + v | 0,
                x[d + 11] = y * l + g * r + b | 0,
                x[d + 15] = f * h + m * l + v | 0,
                x[d + 16] = y * l + g * h + b | 0) : (x[d] = f * h + m * c + v,
                x[d + 1] = y * c + g * h + b,
                x[d + 5] = f * r + m * c + v,
                x[d + 6] = y * c + g * r + b,
                x[d + 10] = f * r + m * l + v,
                x[d + 11] = y * l + g * r + b,
                x[d + 15] = f * h + m * l + v,
                x[d + 16] = y * l + g * h + b),
                x[d + 2] = n.x0,
                x[d + 3] = n.y0,
                x[d + 7] = n.x1,
                x[d + 8] = n.y1,
                x[d + 12] = n.x2,
                x[d + 13] = n.y2,
                x[d + 17] = n.x3,
                x[d + 18] = n.y3;
                var w = t.tint;
                _[d + 4] = _[d + 9] = _[d + 14] = _[d + 19] = (w >> 16) + (65280 & w) + ((255 & w) << 16) + (255 * t.worldAlpha << 24),
                this.sprites[this.currentBatchSize++] = t
            }
        }
        ,
        s.WebGLSpriteBatch.prototype.renderTilingSprite = function(t) {
            var e = t.tilingTexture;
            this.currentBatchSize >= this.size && (this.flush(),
            this.currentBaseTexture = e.baseTexture),
            t._uvs || (t._uvs = new s.TextureUvs);
            var i = t._uvs
              , n = e.baseTexture.width
              , a = e.baseTexture.height;
            t.tilePosition.x %= n * t.tileScaleOffset.x,
            t.tilePosition.y %= a * t.tileScaleOffset.y;
            var o = t.tilePosition.x / (n * t.tileScaleOffset.x)
              , r = t.tilePosition.y / (a * t.tileScaleOffset.y)
              , h = t.width / n / (t.tileScale.x * t.tileScaleOffset.x)
              , l = t.height / a / (t.tileScale.y * t.tileScaleOffset.y);
            i.x0 = 0 - o,
            i.y0 = 0 - r,
            i.x1 = 1 * h - o,
            i.y1 = 0 - r,
            i.x2 = 1 * h - o,
            i.y2 = 1 * l - r,
            i.x3 = 0 - o,
            i.y3 = 1 * l - r;
            var c = t.tint
              , u = (c >> 16) + (65280 & c) + ((255 & c) << 16) + (255 * t.worldAlpha << 24)
              , d = this.positions
              , p = this.colors
              , f = t.width
              , g = t.height
              , m = t.anchor.x
              , y = t.anchor.y
              , v = f * (1 - m)
              , b = f * -m
              , _ = g * (1 - y)
              , x = g * -y
              , w = 4 * this.currentBatchSize * this.vertSize
              , P = e.baseTexture.resolution
              , T = t.worldTransform
              , S = T.a / P
              , C = T.b / P
              , A = T.c / P
              , E = T.d / P
              , I = T.tx
              , B = T.ty;
            d[w++] = S * b + A * x + I,
            d[w++] = E * x + C * b + B,
            d[w++] = i.x0,
            d[w++] = i.y0,
            p[w++] = u,
            d[w++] = S * v + A * x + I,
            d[w++] = E * x + C * v + B,
            d[w++] = i.x1,
            d[w++] = i.y1,
            p[w++] = u,
            d[w++] = S * v + A * _ + I,
            d[w++] = E * _ + C * v + B,
            d[w++] = i.x2,
            d[w++] = i.y2,
            p[w++] = u,
            d[w++] = S * b + A * _ + I,
            d[w++] = E * _ + C * b + B,
            d[w++] = i.x3,
            d[w++] = i.y3,
            p[w++] = u,
            this.sprites[this.currentBatchSize++] = t
        }
        ,
        s.WebGLSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var t = this.gl, e;
                if (this.dirty) {
                    this.dirty = !1,
                    t.activeTexture(t.TEXTURE0),
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    e = this.defaultShader.shaders[t.id];
                    var i = 4 * this.vertSize;
                    t.vertexAttribPointer(e.aVertexPosition, 2, t.FLOAT, !1, i, 0),
                    t.vertexAttribPointer(e.aTextureCoord, 2, t.FLOAT, !1, i, 8),
                    t.vertexAttribPointer(e.colorAttribute, 4, t.UNSIGNED_BYTE, !0, i, 16)
                }
                if (this.currentBatchSize > .5 * this.size)
                    t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var n = this.positions.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    t.bufferSubData(t.ARRAY_BUFFER, 0, n)
                }
                for (var a, o, r, h = 0, l = 0, c = null, u = this.renderSession.blendModeManager.currentBlendMode, d = null, p = !1, f = !1, g, m = 0, y = this.currentBatchSize; m < y; m++) {
                    g = this.sprites[m],
                    a = g.tilingTexture ? g.tilingTexture.baseTexture : g.texture.baseTexture,
                    o = g.blendMode,
                    r = g.shader || this.defaultShader,
                    p = u !== o,
                    f = d !== r;
                    var v = a.skipRender;
                    if (v && g.children.length > 0 && (v = !1),
                    (c !== a && !v || p || f) && (this.renderBatch(c, h, l),
                    l = m,
                    h = 0,
                    c = a,
                    p && (u = o,
                    this.renderSession.blendModeManager.setBlendMode(u)),
                    f)) {
                        d = r,
                        e = d.shaders[t.id],
                        e || (e = new s.PixiShader(t),
                        e.fragmentSrc = d.fragmentSrc,
                        e.uniforms = d.uniforms,
                        e.init(),
                        d.shaders[t.id] = e),
                        this.renderSession.shaderManager.setShader(e),
                        e.dirty && e.syncUniforms();
                        var b = this.renderSession.projection;
                        t.uniform2f(e.projectionVector, b.x, b.y);
                        var _ = this.renderSession.offset;
                        t.uniform2f(e.offsetVector, _.x, _.y)
                    }
                    h++
                }
                this.renderBatch(c, h, l),
                this.currentBatchSize = 0
            }
        }
        ,
        s.WebGLSpriteBatch.prototype.renderBatch = function(t, e, i) {
            if (0 !== e) {
                var s = this.gl;
                if (t._dirty[s.id]) {
                    if (!this.renderSession.renderer.updateTexture(t))
                        return
                } else
                    s.bindTexture(s.TEXTURE_2D, t._glTextures[s.id]);
                s.drawElements(s.TRIANGLES, 6 * e, s.UNSIGNED_SHORT, 6 * i * 2),
                this.renderSession.drawCount++
            }
        }
        ,
        s.WebGLSpriteBatch.prototype.stop = function() {
            this.flush(),
            this.dirty = !0
        }
        ,
        s.WebGLSpriteBatch.prototype.start = function() {
            this.dirty = !0
        }
        ,
        s.WebGLSpriteBatch.prototype.destroy = function() {
            this.vertices = null,
            this.indices = null,
            this.gl.deleteBuffer(this.vertexBuffer),
            this.gl.deleteBuffer(this.indexBuffer),
            this.currentBaseTexture = null,
            this.gl = null
        }
        ,
        s.WebGLFastSpriteBatch = function(t) {
            this.vertSize = 10,
            this.maxSize = 6e3,
            this.size = this.maxSize;
            var e = 4 * this.size * this.vertSize
              , i = 6 * this.maxSize;
            this.vertices = new s.Float32Array(e),
            this.indices = new s.Uint16Array(i),
            this.vertexBuffer = null,
            this.indexBuffer = null,
            this.lastIndexCount = 0;
            for (var n = 0, a = 0; n < i; n += 6,
            a += 4)
                this.indices[n + 0] = a + 0,
                this.indices[n + 1] = a + 1,
                this.indices[n + 2] = a + 2,
                this.indices[n + 3] = a + 0,
                this.indices[n + 4] = a + 2,
                this.indices[n + 5] = a + 3;
            this.drawing = !1,
            this.currentBatchSize = 0,
            this.currentBaseTexture = null,
            this.currentBlendMode = 0,
            this.renderSession = null,
            this.shader = null,
            this.matrix = null,
            this.setContext(t)
        }
        ,
        s.WebGLFastSpriteBatch.prototype.constructor = s.WebGLFastSpriteBatch,
        s.WebGLFastSpriteBatch.prototype.setContext = function(t) {
            this.gl = t,
            this.vertexBuffer = t.createBuffer(),
            this.indexBuffer = t.createBuffer(),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
        }
        ,
        s.WebGLFastSpriteBatch.prototype.begin = function(t, e) {
            this.renderSession = e,
            this.shader = this.renderSession.shaderManager.fastShader,
            this.matrix = t.worldTransform.toArray(!0),
            this.start()
        }
        ,
        s.WebGLFastSpriteBatch.prototype.end = function() {
            this.flush()
        }
        ,
        s.WebGLFastSpriteBatch.prototype.render = function(t) {
            var e = t.children
              , i = e[0];
            if (i.texture._uvs) {
                this.currentBaseTexture = i.texture.baseTexture,
                i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(),
                this.renderSession.blendModeManager.setBlendMode(i.blendMode));
                for (var s = 0, n = e.length; s < n; s++)
                    this.renderSprite(e[s]);
                this.flush()
            }
        }
        ,
        s.WebGLFastSpriteBatch.prototype.renderSprite = function(t) {
            if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || t.texture.baseTexture.skipRender || (this.flush(),
            this.currentBaseTexture = t.texture.baseTexture,
            t.texture._uvs))) {
                var e, i = this.vertices, s, n, a, o, r, h, l;
                if (e = t.texture._uvs,
                s = t.texture.frame.width,
                n = t.texture.frame.height,
                t.texture.trim) {
                    var c = t.texture.trim;
                    o = c.x - t.anchor.x * c.width,
                    a = o + t.texture.crop.width,
                    h = c.y - t.anchor.y * c.height,
                    r = h + t.texture.crop.height
                } else
                    a = t.texture.frame.width * (1 - t.anchor.x),
                    o = t.texture.frame.width * -t.anchor.x,
                    r = t.texture.frame.height * (1 - t.anchor.y),
                    h = t.texture.frame.height * -t.anchor.y;
                l = 4 * this.currentBatchSize * this.vertSize,
                i[l++] = o,
                i[l++] = h,
                i[l++] = t.position.x,
                i[l++] = t.position.y,
                i[l++] = t.scale.x,
                i[l++] = t.scale.y,
                i[l++] = t.rotation,
                i[l++] = e.x0,
                i[l++] = e.y1,
                i[l++] = t.alpha,
                i[l++] = a,
                i[l++] = h,
                i[l++] = t.position.x,
                i[l++] = t.position.y,
                i[l++] = t.scale.x,
                i[l++] = t.scale.y,
                i[l++] = t.rotation,
                i[l++] = e.x1,
                i[l++] = e.y1,
                i[l++] = t.alpha,
                i[l++] = a,
                i[l++] = r,
                i[l++] = t.position.x,
                i[l++] = t.position.y,
                i[l++] = t.scale.x,
                i[l++] = t.scale.y,
                i[l++] = t.rotation,
                i[l++] = e.x2,
                i[l++] = e.y2,
                i[l++] = t.alpha,
                i[l++] = o,
                i[l++] = r,
                i[l++] = t.position.x,
                i[l++] = t.position.y,
                i[l++] = t.scale.x,
                i[l++] = t.scale.y,
                i[l++] = t.rotation,
                i[l++] = e.x3,
                i[l++] = e.y3,
                i[l++] = t.alpha,
                this.currentBatchSize++,
                this.currentBatchSize >= this.size && this.flush()
            }
        }
        ,
        s.WebGLFastSpriteBatch.prototype.flush = function() {
            if (0 !== this.currentBatchSize) {
                var t = this.gl;
                if (this.currentBaseTexture._glTextures[t.id] || this.renderSession.renderer.updateTexture(this.currentBaseTexture, t),
                t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]),
                this.currentBatchSize > .5 * this.size)
                    t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
                else {
                    var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                    t.bufferSubData(t.ARRAY_BUFFER, 0, e)
                }
                t.drawElements(t.TRIANGLES, 6 * this.currentBatchSize, t.UNSIGNED_SHORT, 0),
                this.currentBatchSize = 0,
                this.renderSession.drawCount++
            }
        }
        ,
        s.WebGLFastSpriteBatch.prototype.stop = function() {
            this.flush()
        }
        ,
        s.WebGLFastSpriteBatch.prototype.start = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE0),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var e = this.renderSession.projection;
            t.uniform2f(this.shader.projectionVector, e.x, e.y),
            t.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
            var i = 4 * this.vertSize;
            t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, !1, i, 0),
            t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, !1, i, 8),
            t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, !1, i, 16),
            t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, !1, i, 24),
            t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, !1, i, 28),
            t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, !1, i, 36)
        }
        ,
        s.WebGLFilterManager = function() {
            this.filterStack = [],
            this.offsetX = 0,
            this.offsetY = 0
        }
        ,
        s.WebGLFilterManager.prototype.constructor = s.WebGLFilterManager,
        s.WebGLFilterManager.prototype.setContext = function(t) {
            this.gl = t,
            this.texturePool = [],
            this.initShaderBuffers()
        }
        ,
        s.WebGLFilterManager.prototype.begin = function(t, e) {
            this.renderSession = t,
            this.defaultShader = t.shaderManager.defaultShader;
            var i = this.renderSession.projection;
            this.width = 2 * i.x,
            this.height = 2 * -i.y,
            this.buffer = e
        }
        ,
        s.WebGLFilterManager.prototype.pushFilter = function(t) {
            var e = this.gl
              , i = this.renderSession.projection
              , n = this.renderSession.offset;
            t._filterArea = t.target.filterArea || t.target.getBounds(),
            t._previous_stencil_mgr = this.renderSession.stencilManager,
            this.renderSession.stencilManager = new s.WebGLStencilManager,
            this.renderSession.stencilManager.setContext(e),
            e.disable(e.STENCIL_TEST),
            this.filterStack.push(t);
            var a = t.filterPasses[0];
            this.offsetX += t._filterArea.x,
            this.offsetY += t._filterArea.y;
            var o = this.texturePool.pop();
            o ? o.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution) : o = new s.FilterTexture(this.gl,this.width * this.renderSession.resolution,this.height * this.renderSession.resolution),
            e.bindTexture(e.TEXTURE_2D, o.texture);
            var r = t._filterArea
              , h = a.padding;
            r.x -= h,
            r.y -= h,
            r.width += 2 * h,
            r.height += 2 * h,
            r.x < 0 && (r.x = 0),
            r.width > this.width && (r.width = this.width),
            r.y < 0 && (r.y = 0),
            r.height > this.height && (r.height = this.height),
            e.bindFramebuffer(e.FRAMEBUFFER, o.frameBuffer),
            e.viewport(0, 0, r.width * this.renderSession.resolution, r.height * this.renderSession.resolution),
            i.x = r.width / 2,
            i.y = -r.height / 2,
            n.x = -r.x,
            n.y = -r.y,
            e.colorMask(!0, !0, !0, !0),
            e.clearColor(0, 0, 0, 0),
            e.clear(e.COLOR_BUFFER_BIT),
            t._glFilterTexture = o
        }
        ,
        s.WebGLFilterManager.prototype.popFilter = function() {
            var t = this.gl
              , e = this.filterStack.pop()
              , i = e._filterArea
              , n = e._glFilterTexture
              , a = this.renderSession.projection
              , o = this.renderSession.offset;
            if (e.filterPasses.length > 1) {
                t.viewport(0, 0, i.width * this.renderSession.resolution, i.height * this.renderSession.resolution),
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                this.vertexArray[0] = 0,
                this.vertexArray[1] = i.height,
                this.vertexArray[2] = i.width,
                this.vertexArray[3] = i.height,
                this.vertexArray[4] = 0,
                this.vertexArray[5] = 0,
                this.vertexArray[6] = i.width,
                this.vertexArray[7] = 0,
                t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray),
                t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
                this.uvArray[2] = i.width / this.width,
                this.uvArray[5] = i.height / this.height,
                this.uvArray[6] = i.width / this.width,
                this.uvArray[7] = i.height / this.height,
                t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
                var r = n
                  , h = this.texturePool.pop();
                h || (h = new s.FilterTexture(this.gl,this.width * this.renderSession.resolution,this.height * this.renderSession.resolution)),
                h.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution),
                t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer),
                t.clear(t.COLOR_BUFFER_BIT),
                t.disable(t.BLEND);
                for (var l = 0; l < e.filterPasses.length - 1; l++) {
                    var c = e.filterPasses[l];
                    t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer),
                    t.activeTexture(t.TEXTURE0),
                    t.bindTexture(t.TEXTURE_2D, r.texture),
                    this.applyFilterPass(c, i, i.width, i.height);
                    var u = r;
                    r = h,
                    h = u
                }
                t.enable(t.BLEND),
                n = r,
                this.texturePool.push(h)
            }
            var d = e.filterPasses[e.filterPasses.length - 1];
            this.offsetX -= i.x,
            this.offsetY -= i.y;
            var p = this.width
              , f = this.height
              , g = 0
              , m = 0
              , y = this.buffer;
            if (0 === this.filterStack.length)
                t.colorMask(!0, !0, !0, !0);
            else {
                var v = this.filterStack[this.filterStack.length - 1];
                i = v._filterArea,
                p = i.width,
                f = i.height,
                g = i.x,
                m = i.y,
                y = v._glFilterTexture.frameBuffer
            }
            a.x = p / 2,
            a.y = -f / 2,
            o.x = g,
            o.y = m,
            i = e._filterArea;
            var b = i.x - g
              , _ = i.y - m;
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            this.vertexArray[0] = b,
            this.vertexArray[1] = _ + i.height,
            this.vertexArray[2] = b + i.width,
            this.vertexArray[3] = _ + i.height,
            this.vertexArray[4] = b,
            this.vertexArray[5] = _,
            this.vertexArray[6] = b + i.width,
            this.vertexArray[7] = _,
            t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray),
            t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
            this.uvArray[2] = i.width / this.width,
            this.uvArray[5] = i.height / this.height,
            this.uvArray[6] = i.width / this.width,
            this.uvArray[7] = i.height / this.height,
            t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray),
            t.viewport(0, 0, p * this.renderSession.resolution, f * this.renderSession.resolution),
            t.bindFramebuffer(t.FRAMEBUFFER, y),
            t.activeTexture(t.TEXTURE0),
            t.bindTexture(t.TEXTURE_2D, n.texture),
            this.renderSession.stencilManager && this.renderSession.stencilManager.destroy(),
            this.renderSession.stencilManager = e._previous_stencil_mgr,
            e._previous_stencil_mgr = null,
            this.renderSession.stencilManager.count > 0 ? t.enable(t.STENCIL_TEST) : t.disable(t.STENCIL_TEST),
            this.applyFilterPass(d, i, p, f),
            this.texturePool.push(n),
            e._glFilterTexture = null
        }
        ,
        s.WebGLFilterManager.prototype.applyFilterPass = function(t, e, i, n) {
            var a = this.gl
              , o = t.shaders[a.id];
            o || (o = new s.PixiShader(a),
            o.fragmentSrc = t.fragmentSrc,
            o.uniforms = t.uniforms,
            o.init(),
            t.shaders[a.id] = o),
            this.renderSession.shaderManager.setShader(o),
            a.uniform2f(o.projectionVector, i / 2, -n / 2),
            a.uniform2f(o.offsetVector, 0, 0),
            t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width,
            t.uniforms.dimensions.value[1] = this.height,
            t.uniforms.dimensions.value[2] = this.vertexArray[0],
            t.uniforms.dimensions.value[3] = this.vertexArray[5]),
            o.syncUniforms(),
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
            a.vertexAttribPointer(o.aVertexPosition, 2, a.FLOAT, !1, 0, 0),
            a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
            a.vertexAttribPointer(o.aTextureCoord, 2, a.FLOAT, !1, 0, 0),
            a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer),
            a.vertexAttribPointer(o.colorAttribute, 2, a.FLOAT, !1, 0, 0),
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0),
            this.renderSession.drawCount++
        }
        ,
        s.WebGLFilterManager.prototype.initShaderBuffers = function() {
            var t = this.gl;
            this.vertexBuffer = t.createBuffer(),
            this.uvBuffer = t.createBuffer(),
            this.colorBuffer = t.createBuffer(),
            this.indexBuffer = t.createBuffer(),
            this.vertexArray = new s.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
            t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
            t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW),
            this.uvArray = new s.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
            t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
            t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW),
            this.colorArray = new s.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]),
            t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer),
            t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW),
            t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
        }
        ,
        s.WebGLFilterManager.prototype.destroy = function() {
            var t = this.gl;
            this.filterStack = null,
            this.offsetX = 0,
            this.offsetY = 0;
            for (var e = 0; e < this.texturePool.length; e++)
                this.texturePool[e].destroy();
            this.texturePool = null,
            t.deleteBuffer(this.vertexBuffer),
            t.deleteBuffer(this.uvBuffer),
            t.deleteBuffer(this.colorBuffer),
            t.deleteBuffer(this.indexBuffer)
        }
        ,
        s.FilterTexture = function(t, e, i, n) {
            this.gl = t,
            this.frameBuffer = t.createFramebuffer(),
            this.texture = t.createTexture(),
            n = n || s.scaleModes.DEFAULT,
            t.bindTexture(t.TEXTURE_2D, this.texture),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n === s.scaleModes.LINEAR ? t.LINEAR : t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n === s.scaleModes.LINEAR ? t.LINEAR : t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
            t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0),
            this.renderBuffer = t.createRenderbuffer(),
            t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer),
            this.resize(e, i)
        }
        ,
        s.FilterTexture.prototype.constructor = s.FilterTexture,
        s.FilterTexture.prototype.clear = function() {
            var t = this.gl;
            t.clearColor(0, 0, 0, 0),
            t.clear(t.COLOR_BUFFER_BIT)
        }
        ,
        s.FilterTexture.prototype.resize = function(t, e) {
            if (this.width !== t || this.height !== e) {
                this.width = t,
                this.height = e;
                var i = this.gl;
                i.bindTexture(i.TEXTURE_2D, this.texture),
                i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null),
                i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer),
                i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e)
            }
        }
        ,
        s.FilterTexture.prototype.destroy = function() {
            var t = this.gl;
            t.deleteFramebuffer(this.frameBuffer),
            t.deleteTexture(this.texture),
            this.frameBuffer = null,
            this.texture = null
        }
        ,
        s.CanvasBuffer = function(t, e) {
            this.width = t,
            this.height = e,
            this.canvas = s.CanvasPool.create(this, this.width, this.height),
            this.context = this.canvas.getContext("2d"),
            this.canvas.width = t,
            this.canvas.height = e
        }
        ,
        s.CanvasBuffer.prototype.constructor = s.CanvasBuffer,
        s.CanvasBuffer.prototype.clear = function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0),
            this.context.clearRect(0, 0, this.width, this.height)
        }
        ,
        s.CanvasBuffer.prototype.resize = function(t, e) {
            this.width = this.canvas.width = t,
            this.height = this.canvas.height = e
        }
        ,
        s.CanvasBuffer.prototype.destroy = function() {
            s.CanvasPool.remove(this)
        }
        ,
        s.CanvasMaskManager = function() {}
        ,
        s.CanvasMaskManager.prototype.constructor = s.CanvasMaskManager,
        s.CanvasMaskManager.prototype.pushMask = function(t, e) {
            var i = e.context;
            i.save();
            var n = t.alpha
              , a = t.worldTransform
              , o = e.resolution;
            i.setTransform(a.a * o, a.b * o, a.c * o, a.d * o, a.tx * o, a.ty * o),
            s.CanvasGraphics.renderGraphicsMask(t, i),
            i.clip(),
            t.worldAlpha = n
        }
        ,
        s.CanvasMaskManager.prototype.popMask = function(t) {
            t.context.restore()
        }
        ,
        s.CanvasTinter = function() {}
        ,
        s.CanvasTinter.getTintedTexture = function(t, e) {
            var i = t.tintedTexture || s.CanvasPool.create(this);
            return s.CanvasTinter.tintMethod(t.texture, e, i),
            i
        }
        ,
        s.CanvasTinter.tintWithMultiply = function(t, e, i) {
            var s = i.getContext("2d")
              , n = t.crop;
            i.width === n.width && i.height === n.height || (i.width = n.width,
            i.height = n.height),
            s.clearRect(0, 0, n.width, n.height),
            s.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
            s.fillRect(0, 0, n.width, n.height),
            s.globalCompositeOperation = "multiply",
            s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
            s.globalCompositeOperation = "destination-atop",
            s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
        }
        ,
        s.CanvasTinter.tintWithPerPixel = function(t, e, i) {
            var n = i.getContext("2d")
              , a = t.crop;
            i.width = a.width,
            i.height = a.height,
            n.globalCompositeOperation = "copy",
            n.drawImage(t.baseTexture.source, a.x, a.y, a.width, a.height, 0, 0, a.width, a.height);
            for (var o = s.hex2rgb(e), r = o[0], h = o[1], l = o[2], c = n.getImageData(0, 0, a.width, a.height), u = c.data, d = 0; d < u.length; d += 4)
                if (u[d + 0] *= r,
                u[d + 1] *= h,
                u[d + 2] *= l,
                !s.CanvasTinter.canHandleAlpha) {
                    var p = u[d + 3];
                    u[d + 0] /= 255 / p,
                    u[d + 1] /= 255 / p,
                    u[d + 2] /= 255 / p
                }
            n.putImageData(c, 0, 0)
        }
        ,
        s.CanvasTinter.checkInverseAlpha = function() {
            var t = new s.CanvasBuffer(2,1);
            t.context.fillStyle = "rgba(10, 20, 30, 0.5)",
            t.context.fillRect(0, 0, 1, 1);
            var e = t.context.getImageData(0, 0, 1, 1);
            if (null === e)
                return !1;
            t.context.putImageData(e, 1, 0);
            var i = t.context.getImageData(1, 0, 1, 1);
            return i.data[0] === e.data[0] && i.data[1] === e.data[1] && i.data[2] === e.data[2] && i.data[3] === e.data[3]
        }
        ,
        s.CanvasTinter.canHandleAlpha = s.CanvasTinter.checkInverseAlpha(),
        s.CanvasTinter.canUseMultiply = s.canUseNewCanvasBlendModes(),
        s.CanvasTinter.tintMethod = s.CanvasTinter.canUseMultiply ? s.CanvasTinter.tintWithMultiply : s.CanvasTinter.tintWithPerPixel,
        s.CanvasRenderer = function(t) {
            this.game = t,
            s.defaultRenderer || (s.defaultRenderer = this),
            this.type = s.CANVAS_RENDERER,
            this.resolution = t.resolution,
            this.clearBeforeRender = t.clearBeforeRender,
            this.transparent = t.transparent,
            this.autoResize = !1,
            this.width = t.width * this.resolution,
            this.height = t.height * this.resolution,
            this.view = t.canvas,
            this.context = this.view.getContext("2d", {
                alpha: this.transparent
            }),
            this.refresh = !0,
            this.count = 0,
            this.maskManager = new s.CanvasMaskManager,
            this.renderSession = {
                context: this.context,
                maskManager: this.maskManager,
                scaleMode: null,
                smoothProperty: Phaser.Canvas.getSmoothingPrefix(this.context),
                roundPixels: !1
            },
            this.mapBlendModes(),
            this.resize(this.width, this.height)
        }
        ,
        s.CanvasRenderer.prototype.constructor = s.CanvasRenderer,
        s.CanvasRenderer.prototype.render = function(t) {
            this.context.setTransform(1, 0, 0, 1, 0, 0),
            this.context.globalAlpha = 1,
            this.renderSession.currentBlendMode = 0,
            this.renderSession.shakeX = this.game.camera._shake.x,
            this.renderSession.shakeY = this.game.camera._shake.y,
            this.context.globalCompositeOperation = "source-over",
            navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black",
            this.context.clear()),
            this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : t._bgColor && (this.context.fillStyle = t._bgColor.rgba,
            this.context.fillRect(0, 0, this.width, this.height))),
            this.renderDisplayObject(t)
        }
        ,
        s.CanvasRenderer.prototype.destroy = function(t) {
            void 0 === t && (t = !0),
            t && this.view.parent && this.view.parent.removeChild(this.view),
            this.view = null,
            this.context = null,
            this.maskManager = null,
            this.renderSession = null
        }
        ,
        s.CanvasRenderer.prototype.resize = function(t, e) {
            this.width = t * this.resolution,
            this.height = e * this.resolution,
            this.view.width = this.width,
            this.view.height = this.height,
            this.autoResize && (this.view.style.width = this.width / this.resolution + "px",
            this.view.style.height = this.height / this.resolution + "px"),
            this.renderSession.smoothProperty && (this.context[this.renderSession.smoothProperty] = this.renderSession.scaleMode === s.scaleModes.LINEAR)
        }
        ,
        s.CanvasRenderer.prototype.renderDisplayObject = function(t, e, i) {
            this.renderSession.context = e || this.context,
            this.renderSession.resolution = this.resolution,
            t._renderCanvas(this.renderSession, i)
        }
        ,
        s.CanvasRenderer.prototype.mapBlendModes = function() {
            if (!s.blendModesCanvas) {
                var t = []
                  , e = s.blendModes
                  , i = s.canUseNewCanvasBlendModes();
                t[e.NORMAL] = "source-over",
                t[e.ADD] = "lighter",
                t[e.MULTIPLY] = i ? "multiply" : "source-over",
                t[e.SCREEN] = i ? "screen" : "source-over",
                t[e.OVERLAY] = i ? "overlay" : "source-over",
                t[e.DARKEN] = i ? "darken" : "source-over",
                t[e.LIGHTEN] = i ? "lighten" : "source-over",
                t[e.COLOR_DODGE] = i ? "color-dodge" : "source-over",
                t[e.COLOR_BURN] = i ? "color-burn" : "source-over",
                t[e.HARD_LIGHT] = i ? "hard-light" : "source-over",
                t[e.SOFT_LIGHT] = i ? "soft-light" : "source-over",
                t[e.DIFFERENCE] = i ? "difference" : "source-over",
                t[e.EXCLUSION] = i ? "exclusion" : "source-over",
                t[e.HUE] = i ? "hue" : "source-over",
                t[e.SATURATION] = i ? "saturation" : "source-over",
                t[e.COLOR] = i ? "color" : "source-over",
                t[e.LUMINOSITY] = i ? "luminosity" : "source-over",
                s.blendModesCanvas = t
            }
        }
        ,
        s.BaseTexture = function(t, e) {
            this.resolution = 1,
            this.width = 100,
            this.height = 100,
            this.scaleMode = e || s.scaleModes.DEFAULT,
            this.hasLoaded = !1,
            this.source = t,
            this.premultipliedAlpha = !0,
            this._glTextures = [],
            this.mipmap = !1,
            this._dirty = [!0, !0, !0, !0],
            t && ((this.source.complete || this.source.getContext) && this.source.width && this.source.height && (this.hasLoaded = !0,
            this.width = this.source.naturalWidth || this.source.width,
            this.height = this.source.naturalHeight || this.source.height,
            this.dirty()),
            this.skipRender = !1,
            this._powerOf2 = !1)
        }
        ,
        s.BaseTexture.prototype.constructor = s.BaseTexture,
        s.BaseTexture.prototype.forceLoaded = function(t, e) {
            this.hasLoaded = !0,
            this.width = t,
            this.height = e,
            this.dirty()
        }
        ,
        s.BaseTexture.prototype.destroy = function() {
            this.source && s.CanvasPool.removeByCanvas(this.source),
            this.source = null,
            this.unloadFromGPU()
        }
        ,
        s.BaseTexture.prototype.updateSourceImage = function(t) {}
        ,
        s.BaseTexture.prototype.dirty = function() {
            for (var t = 0; t < this._glTextures.length; t++)
                this._dirty[t] = !0
        }
        ,
        s.BaseTexture.prototype.unloadFromGPU = function() {
            this.dirty();
            for (var t = this._glTextures.length - 1; t >= 0; t--) {
                var e = this._glTextures[t]
                  , i = s.glContexts[t];
                i && e && i.deleteTexture(e)
            }
            this._glTextures.length = 0,
            this.dirty()
        }
        ,
        s.BaseTexture.fromCanvas = function(t, e) {
            return 0 === t.width && (t.width = 1),
            0 === t.height && (t.height = 1),
            new s.BaseTexture(t,e)
        }
        ,
        s.TextureSilentFail = !1,
        s.Texture = function(t, e, i, n) {
            this.noFrame = !1,
            e || (this.noFrame = !0,
            e = new s.Rectangle(0,0,1,1)),
            t instanceof s.Texture && (t = t.baseTexture),
            this.baseTexture = t,
            this.frame = e,
            this.trim = n,
            this.valid = !1,
            this.isTiling = !1,
            this.requiresUpdate = !1,
            this.requiresReTint = !1,
            this._uvs = null,
            this.width = 0,
            this.height = 0,
            this.crop = i || new s.Rectangle(0,0,1,1),
            t.hasLoaded && (this.noFrame && (e = new s.Rectangle(0,0,t.width,t.height)),
            this.setFrame(e))
        }
        ,
        s.Texture.prototype.constructor = s.Texture,
        s.Texture.prototype.onBaseTextureLoaded = function() {
            var t = this.baseTexture;
            this.noFrame && (this.frame = new s.Rectangle(0,0,t.width,t.height)),
            this.setFrame(this.frame)
        }
        ,
        s.Texture.prototype.destroy = function(t) {
            t && this.baseTexture.destroy(),
            this.valid = !1
        }
        ,
        s.Texture.prototype.setFrame = function(t) {
            if (this.noFrame = !1,
            this.frame = t,
            this.width = t.width,
            this.height = t.height,
            this.crop.x = t.x,
            this.crop.y = t.y,
            this.crop.width = t.width,
            this.crop.height = t.height,
            !this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) {
                if (!s.TextureSilentFail)
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                return void (this.valid = !1)
            }
            this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded,
            this.trim && (this.width = this.trim.width,
            this.height = this.trim.height,
            this.frame.width = this.trim.width,
            this.frame.height = this.trim.height),
            this.valid && this._updateUvs()
        }
        ,
        s.Texture.prototype._updateUvs = function() {
            this._uvs || (this._uvs = new s.TextureUvs);
            var t = this.crop
              , e = this.baseTexture.width
              , i = this.baseTexture.height;
            this._uvs.x0 = t.x / e,
            this._uvs.y0 = t.y / i,
            this._uvs.x1 = (t.x + t.width) / e,
            this._uvs.y1 = t.y / i,
            this._uvs.x2 = (t.x + t.width) / e,
            this._uvs.y2 = (t.y + t.height) / i,
            this._uvs.x3 = t.x / e,
            this._uvs.y3 = (t.y + t.height) / i
        }
        ,
        s.Texture.fromCanvas = function(t, e) {
            var i = s.BaseTexture.fromCanvas(t, e);
            return new s.Texture(i)
        }
        ,
        s.TextureUvs = function() {
            this.x0 = 0,
            this.y0 = 0,
            this.x1 = 0,
            this.y1 = 0,
            this.x2 = 0,
            this.y2 = 0,
            this.x3 = 0,
            this.y3 = 0
        }
        ,
        s.RenderTexture = function(t, e, i, n, a) {
            if (this.width = t || 100,
            this.height = e || 100,
            this.resolution = a || 1,
            this.frame = new s.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution),
            this.crop = new s.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution),
            this.baseTexture = new s.BaseTexture,
            this.baseTexture.width = this.width * this.resolution,
            this.baseTexture.height = this.height * this.resolution,
            this.baseTexture._glTextures = [],
            this.baseTexture.resolution = this.resolution,
            this.baseTexture.scaleMode = n || s.scaleModes.DEFAULT,
            this.baseTexture.hasLoaded = !0,
            s.Texture.call(this, this.baseTexture, new s.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution)),
            this.renderer = i || s.defaultRenderer,
            this.renderer.type === s.WEBGL_RENDERER) {
                var o = this.renderer.gl;
                this.baseTexture._dirty[o.id] = !1,
                this.textureBuffer = new s.FilterTexture(o,this.width,this.height,this.baseTexture.scaleMode),
                this.baseTexture._glTextures[o.id] = this.textureBuffer.texture,
                this.render = this.renderWebGL,
                this.projection = new s.Point(.5 * this.width,.5 * -this.height)
            } else
                this.render = this.renderCanvas,
                this.textureBuffer = new s.CanvasBuffer(this.width * this.resolution,this.height * this.resolution),
                this.baseTexture.source = this.textureBuffer.canvas;
            this.valid = !0,
            this.tempMatrix = new Phaser.Matrix,
            this._updateUvs()
        }
        ,
        s.RenderTexture.prototype = Object.create(s.Texture.prototype),
        s.RenderTexture.prototype.constructor = s.RenderTexture,
        s.RenderTexture.prototype.resize = function(t, e, i) {
            t === this.width && e === this.height || (this.valid = t > 0 && e > 0,
            this.width = t,
            this.height = e,
            this.frame.width = this.crop.width = t * this.resolution,
            this.frame.height = this.crop.height = e * this.resolution,
            i && (this.baseTexture.width = this.width * this.resolution,
            this.baseTexture.height = this.height * this.resolution),
            this.renderer.type === s.WEBGL_RENDERER && (this.projection.x = this.width / 2,
            this.projection.y = -this.height / 2),
            this.valid && this.textureBuffer.resize(this.width, this.height))
        }
        ,
        s.RenderTexture.prototype.clear = function() {
            this.valid && (this.renderer.type === s.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer),
            this.textureBuffer.clear())
        }
        ,
        s.RenderTexture.prototype.renderWebGL = function(t, e, i) {
            if (this.valid && 0 !== t.alpha) {
                var s = t.worldTransform;
                s.identity(),
                s.translate(0, 2 * this.projection.y),
                e && s.append(e),
                s.scale(1, -1);
                for (var n = 0; n < t.children.length; n++)
                    t.children[n].updateTransform();
                var a = this.renderer.gl;
                a.viewport(0, 0, this.width * this.resolution, this.height * this.resolution),
                a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                i && this.textureBuffer.clear(),
                this.renderer.spriteBatch.dirty = !0,
                this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer, e),
                this.renderer.spriteBatch.dirty = !0
            }
        }
        ,
        s.RenderTexture.prototype.renderCanvas = function(t, e, i) {
            if (this.valid && 0 !== t.alpha) {
                var s = t.worldTransform;
                s.identity(),
                e && s.append(e);
                for (var n = 0; n < t.children.length; n++)
                    t.children[n].updateTransform();
                i && this.textureBuffer.clear();
                var a = this.renderer.resolution;
                this.renderer.resolution = this.resolution,
                this.renderer.renderDisplayObject(t, this.textureBuffer.context, e),
                this.renderer.resolution = a
            }
        }
        ,
        s.RenderTexture.prototype.getImage = function() {
            var t = new Image;
            return t.src = this.getBase64(),
            t
        }
        ,
        s.RenderTexture.prototype.getBase64 = function() {
            return this.getCanvas().toDataURL()
        }
        ,
        s.RenderTexture.prototype.getCanvas = function() {
            if (this.renderer.type === s.WEBGL_RENDERER) {
                var t = this.renderer.gl
                  , e = this.textureBuffer.width
                  , i = this.textureBuffer.height
                  , n = new Uint8Array(4 * e * i);
                t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                t.readPixels(0, 0, e, i, t.RGBA, t.UNSIGNED_BYTE, n),
                t.bindFramebuffer(t.FRAMEBUFFER, null);
                var a = new s.CanvasBuffer(e,i)
                  , o = a.context.getImageData(0, 0, e, i);
                return o.data.set(n),
                a.context.putImageData(o, 0, 0),
                a.canvas
            }
            return this.textureBuffer.canvas
        }
        ,
        s.AbstractFilter = function(t, e) {
            this.passes = [this],
            this.shaders = [],
            this.dirty = !0,
            this.padding = 0,
            this.uniforms = e || {},
            this.fragmentSrc = t || []
        }
        ,
        s.AbstractFilter.prototype.constructor = s.AbstractFilter,
        s.AbstractFilter.prototype.syncUniforms = function() {
            for (var t = 0, e = this.shaders.length; t < e; t++)
                this.shaders[t].dirty = !0
        }
        ,
        s.Strip = function(t) {
            s.DisplayObjectContainer.call(this),
            this.texture = t,
            this.uvs = new s.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]),
            this.vertices = new s.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]),
            this.colors = new s.Float32Array([1, 1, 1, 1]),
            this.indices = new s.Uint16Array([0, 1, 2, 3]),
            this.dirty = !0,
            this.blendMode = s.blendModes.NORMAL,
            this.canvasPadding = 0,
            this.drawMode = s.Strip.DrawModes.TRIANGLE_STRIP
        }
        ,
        s.Strip.prototype = Object.create(s.DisplayObjectContainer.prototype),
        s.Strip.prototype.constructor = s.Strip,
        s.Strip.prototype._renderWebGL = function(t) {
            !this.visible || this.alpha <= 0 || (t.spriteBatch.stop(),
            this._vertexBuffer || this._initWebGL(t),
            t.shaderManager.setShader(t.shaderManager.stripShader),
            this._renderStrip(t),
            t.spriteBatch.start())
        }
        ,
        s.Strip.prototype._initWebGL = function(t) {
            var e = t.gl;
            this._vertexBuffer = e.createBuffer(),
            this._indexBuffer = e.createBuffer(),
            this._uvBuffer = e.createBuffer(),
            this._colorBuffer = e.createBuffer(),
            e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer),
            e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW),
            e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer),
            e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW),
            e.bindBuffer(e.ARRAY_BUFFER, this._colorBuffer),
            e.bufferData(e.ARRAY_BUFFER, this.colors, e.STATIC_DRAW),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer),
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)
        }
        ,
        s.Strip.prototype._renderStrip = function(t) {
            var e = t.gl
              , i = t.projection
              , n = t.offset
              , a = t.shaderManager.stripShader
              , o = this.drawMode === s.Strip.DrawModes.TRIANGLE_STRIP ? e.TRIANGLE_STRIP : e.TRIANGLES;
            t.blendModeManager.setBlendMode(this.blendMode),
            e.uniformMatrix3fv(a.translationMatrix, !1, this.worldTransform.toArray(!0)),
            e.uniform2f(a.projectionVector, i.x, -i.y),
            e.uniform2f(a.offsetVector, -n.x, -n.y),
            e.uniform1f(a.alpha, this.worldAlpha),
            this.dirty ? (this.dirty = !1,
            e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer),
            e.bufferData(e.ARRAY_BUFFER, this.vertices, e.STATIC_DRAW),
            e.vertexAttribPointer(a.aVertexPosition, 2, e.FLOAT, !1, 0, 0),
            e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer),
            e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW),
            e.vertexAttribPointer(a.aTextureCoord, 2, e.FLOAT, !1, 0, 0),
            e.activeTexture(e.TEXTURE0),
            this.texture.baseTexture._dirty[e.id] ? t.renderer.updateTexture(this.texture.baseTexture) : e.bindTexture(e.TEXTURE_2D, this.texture.baseTexture._glTextures[e.id]),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer),
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)) : (e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer),
            e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices),
            e.vertexAttribPointer(a.aVertexPosition, 2, e.FLOAT, !1, 0, 0),
            e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer),
            e.vertexAttribPointer(a.aTextureCoord, 2, e.FLOAT, !1, 0, 0),
            e.activeTexture(e.TEXTURE0),
            this.texture.baseTexture._dirty[e.id] ? t.renderer.updateTexture(this.texture.baseTexture) : e.bindTexture(e.TEXTURE_2D, this.texture.baseTexture._glTextures[e.id]),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer)),
            e.drawElements(o, this.indices.length, e.UNSIGNED_SHORT, 0)
        }
        ,
        s.Strip.prototype._renderCanvas = function(t) {
            var e = t.context
              , i = this.worldTransform
              , n = i.tx * t.resolution + t.shakeX
              , a = i.ty * t.resolution + t.shakeY;
            t.roundPixels ? e.setTransform(i.a, i.b, i.c, i.d, 0 | n, 0 | a) : e.setTransform(i.a, i.b, i.c, i.d, n, a),
            this.drawMode === s.Strip.DrawModes.TRIANGLE_STRIP ? this._renderCanvasTriangleStrip(e) : this._renderCanvasTriangles(e)
        }
        ,
        s.Strip.prototype._renderCanvasTriangleStrip = function(t) {
            var e = this.vertices
              , i = this.uvs
              , s = e.length / 2;
            this.count++;
            for (var n = 0; n < s - 2; n++) {
                var a = 2 * n;
                this._renderCanvasDrawTriangle(t, e, i, a, a + 2, a + 4)
            }
        }
        ,
        s.Strip.prototype._renderCanvasTriangles = function(t) {
            var e = this.vertices
              , i = this.uvs
              , s = this.indices
              , n = s.length;
            this.count++;
            for (var a = 0; a < n; a += 3) {
                var o = 2 * s[a]
                  , r = 2 * s[a + 1]
                  , h = 2 * s[a + 2];
                this._renderCanvasDrawTriangle(t, e, i, o, r, h)
            }
        }
        ,
        s.Strip.prototype._renderCanvasDrawTriangle = function(t, e, i, s, n, a) {
            var o = this.texture.baseTexture.source
              , r = this.texture.width
              , h = this.texture.height
              , l = e[s]
              , c = e[n]
              , u = e[a]
              , d = e[s + 1]
              , p = e[n + 1]
              , f = e[a + 1]
              , g = i[s] * r
              , m = i[n] * r
              , y = i[a] * r
              , v = i[s + 1] * h
              , b = i[n + 1] * h
              , _ = i[a + 1] * h;
            if (this.canvasPadding > 0) {
                var x = this.canvasPadding / this.worldTransform.a
                  , w = this.canvasPadding / this.worldTransform.d
                  , P = (l + c + u) / 3
                  , T = (d + p + f) / 3
                  , S = l - P
                  , C = d - T
                  , A = Math.sqrt(S * S + C * C);
                l = P + S / A * (A + x),
                d = T + C / A * (A + w),
                S = c - P,
                C = p - T,
                A = Math.sqrt(S * S + C * C),
                c = P + S / A * (A + x),
                p = T + C / A * (A + w),
                S = u - P,
                C = f - T,
                A = Math.sqrt(S * S + C * C),
                u = P + S / A * (A + x),
                f = T + C / A * (A + w)
            }
            t.save(),
            t.beginPath(),
            t.moveTo(l, d),
            t.lineTo(c, p),
            t.lineTo(u, f),
            t.closePath(),
            t.clip();
            var E = g * b + v * y + m * _ - b * y - v * m - g * _
              , I = l * b + v * u + c * _ - b * u - v * c - l * _
              , B = g * c + l * y + m * u - c * y - l * m - g * u
              , M = g * b * u + v * c * y + l * m * _ - l * b * y - v * m * u - g * c * _
              , k = d * b + v * f + p * _ - b * f - v * p - d * _
              , O = g * p + d * y + m * f - p * y - d * m - g * f
              , D = g * b * f + v * p * y + d * m * _ - d * b * y - v * m * f - g * p * _;
            t.transform(I / E, k / E, B / E, O / E, M / E, D / E),
            t.drawImage(o, 0, 0),
            t.restore()
        }
        ,
        s.Strip.prototype.renderStripFlat = function(t) {
            var e = this.context
              , i = t.vertices
              , s = i.length / 2;
            this.count++,
            e.beginPath();
            for (var n = 1; n < s - 2; n++) {
                var a = 2 * n
                  , o = i[a]
                  , r = i[a + 2]
                  , h = i[a + 4]
                  , l = i[a + 1]
                  , c = i[a + 3]
                  , u = i[a + 5];
                e.moveTo(o, l),
                e.lineTo(r, c),
                e.lineTo(h, u)
            }
            e.fillStyle = "#FF0000",
            e.fill(),
            e.closePath()
        }
        ,
        s.Strip.prototype.onTextureUpdate = function() {
            this.updateFrame = !0
        }
        ,
        s.Strip.prototype.getBounds = function(t) {
            for (var e = t || this.worldTransform, i = e.a, n = e.b, a = e.c, o = e.d, r = e.tx, h = e.ty, l = -1 / 0, c = -1 / 0, u = 1 / 0, d = 1 / 0, p = this.vertices, f = 0, g = p.length; f < g; f += 2) {
                var m = p[f]
                  , y = p[f + 1]
                  , v = i * m + a * y + r
                  , b = o * y + n * m + h;
                u = v < u ? v : u,
                d = b < d ? b : d,
                l = v > l ? v : l,
                c = b > c ? b : c
            }
            if (u === -1 / 0 || c === 1 / 0)
                return s.EmptyRectangle;
            var _ = this._bounds;
            return _.x = u,
            _.width = l - u,
            _.y = d,
            _.height = c - d,
            this._currentBounds = _,
            _
        }
        ,
        s.Strip.DrawModes = {
            TRIANGLE_STRIP: 0,
            TRIANGLES: 1
        },
        s.Rope = function(t, e) {
            s.Strip.call(this, t),
            this.points = e,
            this.vertices = new s.Float32Array(4 * e.length),
            this.uvs = new s.Float32Array(4 * e.length),
            this.colors = new s.Float32Array(2 * e.length),
            this.indices = new s.Uint16Array(2 * e.length),
            this.refresh()
        }
        ,
        s.Rope.prototype = Object.create(s.Strip.prototype),
        s.Rope.prototype.constructor = s.Rope,
        s.Rope.prototype.refresh = function() {
            var t = this.points;
            if (!(t.length < 1)) {
                var e = this.uvs
                  , i = t[0]
                  , s = this.indices
                  , n = this.colors;
                this.count -= .2,
                e[0] = 0,
                e[1] = 0,
                e[2] = 0,
                e[3] = 1,
                n[0] = 1,
                n[1] = 1,
                s[0] = 0,
                s[1] = 1;
                for (var a = t.length, o, r, h, l = 1; l < a; l++)
                    o = t[l],
                    r = 4 * l,
                    h = l / (a - 1),
                    e[r] = h,
                    e[r + 1] = 0,
                    e[r + 2] = h,
                    e[r + 3] = 1,
                    r = 2 * l,
                    n[r] = 1,
                    n[r + 1] = 1,
                    r = 2 * l,
                    s[r] = r,
                    s[r + 1] = r + 1,
                    i = o
            }
        }
        ,
        s.Rope.prototype.updateTransform = function() {
            var t = this.points;
            if (!(t.length < 1)) {
                var e = t[0], i, n = {
                    x: 0,
                    y: 0
                };
                this.count -= .2;
                for (var a = this.vertices, o = t.length, r, h, l, c, u, d = 0; d < o; d++)
                    r = t[d],
                    h = 4 * d,
                    i = d < t.length - 1 ? t[d + 1] : r,
                    n.y = -(i.x - e.x),
                    n.x = i.y - e.y,
                    l = 10 * (1 - d / (o - 1)),
                    l > 1 && (l = 1),
                    c = Math.sqrt(n.x * n.x + n.y * n.y),
                    u = this.texture.height / 2,
                    n.x /= c,
                    n.y /= c,
                    n.x *= u,
                    n.y *= u,
                    a[h] = r.x + n.x,
                    a[h + 1] = r.y + n.y,
                    a[h + 2] = r.x - n.x,
                    a[h + 3] = r.y - n.y,
                    e = r;
                s.DisplayObjectContainer.prototype.updateTransform.call(this)
            }
        }
        ,
        s.Rope.prototype.setTexture = function(t) {
            this.texture = t
        }
        ,
        s.TilingSprite = function(t, e, i) {
            s.Sprite.call(this, t),
            this._width = e || 128,
            this._height = i || 128,
            this.tileScale = new s.Point(1,1),
            this.tileScaleOffset = new s.Point(1,1),
            this.tilePosition = new s.Point,
            this.renderable = !0,
            this.tint = 16777215,
            this.textureDebug = !1,
            this.blendMode = s.blendModes.NORMAL,
            this.canvasBuffer = null,
            this.tilingTexture = null,
            this.tilePattern = null,
            this.refreshTexture = !0,
            this.frameWidth = 0,
            this.frameHeight = 0
        }
        ,
        s.TilingSprite.prototype = Object.create(s.Sprite.prototype),
        s.TilingSprite.prototype.constructor = s.TilingSprite,
        s.TilingSprite.prototype.setTexture = function(t) {
            this.texture !== t && (this.texture = t,
            this.refreshTexture = !0,
            this.cachedTint = 16777215)
        }
        ,
        s.TilingSprite.prototype._renderWebGL = function(t) {
            if (this.visible && this.renderable && 0 !== this.alpha) {
                if (this._mask && (t.spriteBatch.stop(),
                t.maskManager.pushMask(this.mask, t),
                t.spriteBatch.start()),
                this._filters && (t.spriteBatch.flush(),
                t.filterManager.pushFilter(this._filterBlock)),
                this.refreshTexture) {
                    if (this.generateTilingTexture(!0, t),
                    !this.tilingTexture)
                        return;
                    this.tilingTexture.needsUpdate && (t.renderer.updateTexture(this.tilingTexture.baseTexture),
                    this.tilingTexture.needsUpdate = !1)
                }
                t.spriteBatch.renderTilingSprite(this);
                for (var e = 0; e < this.children.length; e++)
                    this.children[e]._renderWebGL(t);
                t.spriteBatch.stop(),
                this._filters && t.filterManager.popFilter(),
                this._mask && t.maskManager.popMask(this._mask, t),
                t.spriteBatch.start()
            }
        }
        ,
        s.TilingSprite.prototype._renderCanvas = function(t) {
            if (this.visible && this.renderable && 0 !== this.alpha) {
                var e = t.context;
                this._mask && t.maskManager.pushMask(this._mask, t),
                e.globalAlpha = this.worldAlpha;
                var i = this.worldTransform
                  , n = t.resolution
                  , a = i.tx * n + t.shakeX
                  , o = i.ty * n + t.shakeY;
                if (e.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, a, o),
                this.refreshTexture) {
                    if (this.generateTilingTexture(!1, t),
                    !this.tilingTexture)
                        return;
                    this.tilePattern = e.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                }
                var r = t.currentBlendMode;
                this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode,
                e.globalCompositeOperation = s.blendModesCanvas[t.currentBlendMode]);
                var h = this.tilePosition
                  , l = this.tileScale;
                h.x %= this.tilingTexture.baseTexture.width,
                h.y %= this.tilingTexture.baseTexture.height,
                e.scale(l.x, l.y),
                e.translate(h.x + this.anchor.x * -this._width, h.y + this.anchor.y * -this._height),
                e.fillStyle = this.tilePattern;
                var a = -h.x
                  , o = -h.y
                  , c = this._width / l.x
                  , u = this._height / l.y;
                t.roundPixels && (a |= 0,
                o |= 0,
                c |= 0,
                u |= 0),
                e.fillRect(a, o, c, u),
                e.scale(1 / l.x, 1 / l.y),
                e.translate(-h.x + this.anchor.x * this._width, -h.y + this.anchor.y * this._height),
                this._mask && t.maskManager.popMask(t);
                for (var d = 0; d < this.children.length; d++)
                    this.children[d]._renderCanvas(t);
                r !== this.blendMode && (t.currentBlendMode = r,
                e.globalCompositeOperation = s.blendModesCanvas[r])
            }
        }
        ,
        s.TilingSprite.prototype.onTextureUpdate = function() {}
        ,
        s.TilingSprite.prototype.generateTilingTexture = function(t, e) {
            if (this.texture.baseTexture.hasLoaded) {
                var i = this.texture
                  , n = i.frame
                  , a = this._frame.sourceSizeW || this._frame.width
                  , o = this._frame.sourceSizeH || this._frame.height
                  , r = 0
                  , h = 0;
                this._frame.trimmed && (r = this._frame.spriteSourceSizeX,
                h = this._frame.spriteSourceSizeY),
                t && (a = s.getNextPowerOfTwo(a),
                o = s.getNextPowerOfTwo(o)),
                this.canvasBuffer ? (this.canvasBuffer.resize(a, o),
                this.tilingTexture.baseTexture.width = a,
                this.tilingTexture.baseTexture.height = o,
                this.tilingTexture.needsUpdate = !0) : (this.canvasBuffer = new s.CanvasBuffer(a,o),
                this.tilingTexture = s.Texture.fromCanvas(this.canvasBuffer.canvas),
                this.tilingTexture.isTiling = !0,
                this.tilingTexture.needsUpdate = !0),
                this.textureDebug && (this.canvasBuffer.context.strokeStyle = "#00ff00",
                this.canvasBuffer.context.strokeRect(0, 0, a, o));
                var l = i.crop.width
                  , c = i.crop.height;
                l === a && c === o || (l = a,
                c = o),
                this.canvasBuffer.context.drawImage(i.baseTexture.source, i.crop.x, i.crop.y, i.crop.width, i.crop.height, r, h, l, c),
                this.tileScaleOffset.x = n.width / a,
                this.tileScaleOffset.y = n.height / o,
                this.refreshTexture = !1,
                this.tilingTexture.baseTexture._powerOf2 = !0
            }
        }
        ,
        s.TilingSprite.prototype.getBounds = function() {
            var t = this._width
              , e = this._height
              , i = t * (1 - this.anchor.x)
              , s = t * -this.anchor.x
              , n = e * (1 - this.anchor.y)
              , a = e * -this.anchor.y
              , o = this.worldTransform
              , r = o.a
              , h = o.b
              , l = o.c
              , c = o.d
              , u = o.tx
              , d = o.ty
              , p = r * s + l * a + u
              , f = c * a + h * s + d
              , g = r * i + l * a + u
              , m = c * a + h * i + d
              , y = r * i + l * n + u
              , v = c * n + h * i + d
              , b = r * s + l * n + u
              , _ = c * n + h * s + d
              , x = -1 / 0
              , w = -1 / 0
              , P = 1 / 0
              , T = 1 / 0;
            P = p < P ? p : P,
            P = g < P ? g : P,
            P = y < P ? y : P,
            P = b < P ? b : P,
            T = f < T ? f : T,
            T = m < T ? m : T,
            T = v < T ? v : T,
            T = _ < T ? _ : T,
            x = p > x ? p : x,
            x = g > x ? g : x,
            x = y > x ? y : x,
            x = b > x ? b : x,
            w = f > w ? f : w,
            w = m > w ? m : w,
            w = v > w ? v : w,
            w = _ > w ? _ : w;
            var S = this._bounds;
            return S.x = P,
            S.width = x - P,
            S.y = T,
            S.height = w - T,
            this._currentBounds = S,
            S
        }
        ,
        s.TilingSprite.prototype.destroy = function() {
            s.Sprite.prototype.destroy.call(this),
            this.canvasBuffer && (this.canvasBuffer.destroy(),
            this.canvasBuffer = null),
            this.tileScale = null,
            this.tileScaleOffset = null,
            this.tilePosition = null,
            this.tilingTexture && (this.tilingTexture.destroy(!0),
            this.tilingTexture = null)
        }
        ,
        Object.defineProperty(s.TilingSprite.prototype, "width", {
            get: function() {
                return this._width
            },
            set: function(t) {
                this._width = t
            }
        }),
        Object.defineProperty(s.TilingSprite.prototype, "height", {
            get: function() {
                return this._height
            },
            set: function(t) {
                this._height = t
            }
        }),
        void 0 !== t && t.exports && (e = t.exports = s),
        e.PIXI = s,
        s
    }
    ).call(this)
}
, function(t, e, i) {
    (function(i) {
        /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*
* @overview
*
* Phaser - http://phaser.io
*
* v2.6.4 "Kore Springs" - Built: Thu Nov 16 2017 13:53:52
*
* By Richard Davey http://www.photonstorm.com @photonstorm
*
* Phaser is a fun, free and fast 2D game framework for making HTML5 games
* for desktop and mobile web browsers, supporting Canvas and WebGL rendering.
*
* Phaser uses Pixi.js for rendering, created by Mat Groves http://matgroves.com @Doormat23
* Phaser uses p2.js for full-body physics, created by Stefan Hedman https://github.com/schteppe/p2.js @schteppe
* Phaser contains a port of N+ Physics, converted by Richard Davey, original by http://www.metanetsoftware.com
*
* Many thanks to Adam Saltsman (@ADAMATOMIC) for releasing Flixel, from which both Phaser and my love of framework development originate.
*
* Follow development at http://phaser.io and on our forum
*
* "If you want your children to be intelligent,  read them fairy tales."
* "If you want them to be more intelligent, read them more fairy tales."
*                                                     -- Albert Einstein
*/
        /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
        (function() {
            function s(t, e) {
                this._scaleFactor = t,
                this._deltaMode = e,
                this.originalEvent = null
            }
            var n = this
              , a = a || {
                VERSION: "2.6.4",
                GAMES: [],
                AUTO: 0,
                CANVAS: 1,
                WEBGL: 2,
                HEADLESS: 3,
                NONE: 0,
                LEFT: 1,
                RIGHT: 2,
                UP: 3,
                DOWN: 4,
                SPRITE: 0,
                BUTTON: 1,
                IMAGE: 2,
                GRAPHICS: 3,
                TEXT: 4,
                TILESPRITE: 5,
                BITMAPTEXT: 6,
                GROUP: 7,
                RENDERTEXTURE: 8,
                TILEMAP: 9,
                TILEMAPLAYER: 10,
                EMITTER: 11,
                POLYGON: 12,
                BITMAPDATA: 13,
                CANVAS_FILTER: 14,
                WEBGL_FILTER: 15,
                ELLIPSE: 16,
                SPRITEBATCH: 17,
                RETROFONT: 18,
                POINTER: 19,
                ROPE: 20,
                CIRCLE: 21,
                RECTANGLE: 22,
                LINE: 23,
                MATRIX: 24,
                POINT: 25,
                ROUNDEDRECTANGLE: 26,
                CREATURE: 27,
                VIDEO: 28,
                PENDING_ATLAS: -1,
                HORIZONTAL: 0,
                VERTICAL: 1,
                LANDSCAPE: 0,
                PORTRAIT: 1,
                ANGLE_UP: 270,
                ANGLE_DOWN: 90,
                ANGLE_LEFT: 180,
                ANGLE_RIGHT: 0,
                ANGLE_NORTH_EAST: 315,
                ANGLE_NORTH_WEST: 225,
                ANGLE_SOUTH_EAST: 45,
                ANGLE_SOUTH_WEST: 135,
                TOP_LEFT: 0,
                TOP_CENTER: 1,
                TOP_RIGHT: 2,
                LEFT_TOP: 3,
                LEFT_CENTER: 4,
                LEFT_BOTTOM: 5,
                CENTER: 6,
                RIGHT_TOP: 7,
                RIGHT_CENTER: 8,
                RIGHT_BOTTOM: 9,
                BOTTOM_LEFT: 10,
                BOTTOM_CENTER: 11,
                BOTTOM_RIGHT: 12,
                blendModes: {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16
                },
                scaleModes: {
                    DEFAULT: 0,
                    LINEAR: 0,
                    NEAREST: 1
                },
                PIXI: PIXI || {}
            };
            if (/**
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            Math.trunc || (Math.trunc = function t(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }
            ),
            Function.prototype.bind || (Function.prototype.bind = function() {
                var t = Array.prototype.slice;
                return function(e) {
                    function i() {
                        var a = n.concat(t.call(arguments));
                        s.apply(this instanceof i ? this : e, a)
                    }
                    var s = this
                      , n = t.call(arguments, 1);
                    if ("function" != typeof s)
                        throw new TypeError;
                    return i.prototype = function t(e) {
                        if (e && (t.prototype = e),
                        !(this instanceof t))
                            return new t
                    }(s.prototype),
                    i
                }
            }()),
            Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ),
            Array.prototype.forEach || (Array.prototype.forEach = function(t) {
                "use strict";
                if (void 0 === this || null === this)
                    throw new TypeError;
                var e = Object(this)
                  , i = e.length >>> 0;
                if ("function" != typeof t)
                    throw new TypeError;
                for (var s = arguments.length >= 2 ? arguments[1] : void 0, n = 0; n < i; n++)
                    n in e && t.call(s, e[n], n, e)
            }
            ),
            "function" != typeof window.Uint32Array && "object" != typeof window.Uint32Array) {
                var o = function(t) {
                    var e = new Array;
                    window[t] = function(t) {
                        if ("number" == typeof t) {
                            Array.call(this, t),
                            this.length = t;
                            for (var e = 0; e < this.length; e++)
                                this[e] = 0
                        } else {
                            Array.call(this, t.length),
                            this.length = t.length;
                            for (var e = 0; e < this.length; e++)
                                this[e] = t[e]
                        }
                    }
                    ,
                    window[t].prototype = e,
                    window[t].constructor = window[t]
                };
                o("Uint32Array"),
                o("Int16Array")
            }
            window.console || (window.console = {},
            window.console.log = window.console.assert = function() {}
            ,
            window.console.warn = window.console.assert = function() {}
            ),
            /firefox/i.test(navigator.userAgent) && (window.oldGetComputedStyle = window.getComputedStyle,
            window.getComputedStyle = function(t, e) {
                var i = window.oldGetComputedStyle(t, e);
                return null === i ? {
                    getPropertyValue: function() {}
                } : i
            }
            ),
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Utils = {
                reverseString: function(t) {
                    return t.split("").reverse().join("")
                },
                getProperty: function(t, e) {
                    for (var i = e.split("."), s = i.pop(), n = i.length, a = 1, o = i[0]; a < n && (t = t[o]); )
                        o = i[a],
                        a++;
                    return t ? t[s] : null
                },
                setProperty: function(t, e, i) {
                    for (var s = e.split("."), n = s.pop(), a = s.length, o = 1, r = s[0]; o < a && (t = t[r]); )
                        r = s[o],
                        o++;
                    return t && (t[n] = i),
                    t
                },
                chanceRoll: function(t) {
                    return void 0 === t && (t = 50),
                    t > 0 && 100 * Math.random() <= t
                },
                randomChoice: function(t, e) {
                    return Math.random() < .5 ? t : e
                },
                parseDimension: function(t, e) {
                    var i = 0
                      , s = 0;
                    return "string" == typeof t ? "%" === t.substr(-1) ? (i = parseInt(t, 10) / 100,
                    s = 0 === e ? window.innerWidth * i : window.innerHeight * i) : s = parseInt(t, 10) : s = t,
                    s
                },
                pad: function(t, e, i, s) {
                    if (void 0 === e)
                        var e = 0;
                    if (void 0 === i)
                        var i = " ";
                    if (void 0 === s)
                        var s = 3;
                    t = t.toString();
                    var n = 0;
                    if (e + 1 >= t.length)
                        switch (s) {
                        case 1:
                            t = new Array(e + 1 - t.length).join(i) + t;
                            break;
                        case 3:
                            var a = Math.ceil((n = e - t.length) / 2)
                              , o = n - a;
                            t = new Array(o + 1).join(i) + t + new Array(a + 1).join(i);
                            break;
                        default:
                            t += new Array(e + 1 - t.length).join(i)
                        }
                    return t
                },
                isPlainObject: function(t) {
                    if ("object" != typeof t || t.nodeType || t === t.window)
                        return !1;
                    try {
                        if (t.constructor && !{}.hasOwnProperty.call(t.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (t) {
                        return !1
                    }
                    return !0
                },
                extend: function() {
                    var t, e, i, s, n, o, r = arguments[0] || {}, h = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof r && (c = r,
                    r = arguments[1] || {},
                    h = 2),
                    l === h && (r = this,
                    --h); h < l; h++)
                        if (null != (t = arguments[h]))
                            for (e in t)
                                i = r[e],
                                s = t[e],
                                r !== s && (c && s && (a.Utils.isPlainObject(s) || (n = Array.isArray(s))) ? (n ? (n = !1,
                                o = i && Array.isArray(i) ? i : []) : o = i && a.Utils.isPlainObject(i) ? i : {},
                                r[e] = a.Utils.extend(c, o, s)) : void 0 !== s && (r[e] = s));
                    return r
                },
                mixinPrototype: function(t, e, i) {
                    void 0 === i && (i = !1);
                    for (var s = Object.keys(e), n = 0; n < s.length; n++) {
                        var a = s[n]
                          , o = e[a];
                        !i && a in t || (!o || "function" != typeof o.get && "function" != typeof o.set ? t[a] = o : "function" == typeof o.clone ? t[a] = o.clone() : Object.defineProperty(t, a, o))
                    }
                },
                mixin: function(t, e) {
                    if (!t || "object" != typeof t)
                        return e;
                    for (var i in t) {
                        var s = t[i];
                        if (!s.childNodes && !s.cloneNode) {
                            var n = typeof t[i];
                            t[i] && "object" === n ? typeof e[i] === n ? e[i] = a.Utils.mixin(t[i], e[i]) : e[i] = a.Utils.mixin(t[i], new s.constructor) : e[i] = t[i]
                        }
                    }
                    return e
                }
            },
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Circle = function(t, e, i) {
                t = t || 0,
                e = e || 0,
                i = i || 0,
                this.x = t,
                this.y = e,
                this._diameter = i,
                this._radius = 0,
                i > 0 && (this._radius = .5 * i),
                this.type = a.CIRCLE
            }
            ,
            a.Circle.prototype = {
                circumference: function() {
                    return Math.PI * this._radius * 2
                },
                random: function(t) {
                    void 0 === t && (t = new a.Point);
                    var e = 2 * Math.PI * Math.random()
                      , i = Math.random() + Math.random()
                      , s = i > 1 ? 2 - i : i
                      , n = s * Math.cos(e)
                      , o = s * Math.sin(e);
                    return t.x = this.x + n * this.radius,
                    t.y = this.y + o * this.radius,
                    t
                },
                getBounds: function() {
                    return new a.Rectangle(this.x - this.radius,this.y - this.radius,this.diameter,this.diameter)
                },
                setTo: function(t, e, i) {
                    return this.x = t,
                    this.y = e,
                    this._diameter = i,
                    this._radius = .5 * i,
                    this
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.diameter)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                    t.y = this.y,
                    t.diameter = this._diameter,
                    t
                },
                distance: function(t, e) {
                    var i = a.Math.distance(this.x, this.y, t.x, t.y);
                    return e ? Math.round(i) : i
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new a.Circle(this.x,this.y,this.diameter) : t.setTo(this.x, this.y, this.diameter),
                    t
                },
                contains: function(t, e) {
                    return a.Circle.contains(this, t, e)
                },
                circumferencePoint: function(t, e, i) {
                    return a.Circle.circumferencePoint(this, t, e, i)
                },
                offset: function(t, e) {
                    return this.x += t,
                    this.y += e,
                    this
                },
                offsetPoint: function(t) {
                    return this.offset(t.x, t.y)
                },
                toString: function() {
                    return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]"
                }
            },
            a.Circle.prototype.constructor = a.Circle,
            Object.defineProperty(a.Circle.prototype, "diameter", {
                get: function() {
                    return this._diameter
                },
                set: function(t) {
                    t > 0 && (this._diameter = t,
                    this._radius = .5 * t)
                }
            }),
            Object.defineProperty(a.Circle.prototype, "radius", {
                get: function() {
                    return this._radius
                },
                set: function(t) {
                    t > 0 && (this._radius = t,
                    this._diameter = 2 * t)
                }
            }),
            Object.defineProperty(a.Circle.prototype, "left", {
                get: function() {
                    return this.x - this._radius
                },
                set: function(t) {
                    t > this.x ? (this._radius = 0,
                    this._diameter = 0) : this.radius = this.x - t
                }
            }),
            Object.defineProperty(a.Circle.prototype, "right", {
                get: function() {
                    return this.x + this._radius
                },
                set: function(t) {
                    t < this.x ? (this._radius = 0,
                    this._diameter = 0) : this.radius = t - this.x
                }
            }),
            Object.defineProperty(a.Circle.prototype, "top", {
                get: function() {
                    return this.y - this._radius
                },
                set: function(t) {
                    t > this.y ? (this._radius = 0,
                    this._diameter = 0) : this.radius = this.y - t
                }
            }),
            Object.defineProperty(a.Circle.prototype, "bottom", {
                get: function() {
                    return this.y + this._radius
                },
                set: function(t) {
                    t < this.y ? (this._radius = 0,
                    this._diameter = 0) : this.radius = t - this.y
                }
            }),
            Object.defineProperty(a.Circle.prototype, "area", {
                get: function() {
                    return this._radius > 0 ? Math.PI * this._radius * this._radius : 0
                }
            }),
            Object.defineProperty(a.Circle.prototype, "empty", {
                get: function() {
                    return 0 === this._diameter
                },
                set: function(t) {
                    !0 === t && this.setTo(0, 0, 0)
                }
            }),
            a.Circle.contains = function(t, e, i) {
                if (t.radius > 0 && e >= t.left && e <= t.right && i >= t.top && i <= t.bottom) {
                    return (t.x - e) * (t.x - e) + (t.y - i) * (t.y - i) <= t.radius * t.radius
                }
                return !1
            }
            ,
            a.Circle.equals = function(t, e) {
                return t.x === e.x && t.y === e.y && t.diameter === e.diameter
            }
            ,
            a.Circle.intersects = function(t, e) {
                return a.Math.distance(t.x, t.y, e.x, e.y) <= t.radius + e.radius
            }
            ,
            a.Circle.circumferencePoint = function(t, e, i, s) {
                return void 0 === i && (i = !1),
                void 0 === s && (s = new a.Point),
                !0 === i && (e = a.Math.degToRad(e)),
                s.x = t.x + t.radius * Math.cos(e),
                s.y = t.y + t.radius * Math.sin(e),
                s
            }
            ,
            a.Circle.intersectsRectangle = function(t, e) {
                var i = Math.abs(t.x - e.x - e.halfWidth);
                if (i > e.halfWidth + t.radius)
                    return !1;
                var s = Math.abs(t.y - e.y - e.halfHeight);
                if (s > e.halfHeight + t.radius)
                    return !1;
                if (i <= e.halfWidth || s <= e.halfHeight)
                    return !0;
                var n = i - e.halfWidth
                  , a = s - e.halfHeight;
                return n * n + a * a <= t.radius * t.radius
            }
            ,
            PIXI.Circle = a.Circle,
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Chad Engler <chad@pantherdev.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Ellipse = function(t, e, i, s) {
                t = t || 0,
                e = e || 0,
                i = i || 0,
                s = s || 0,
                this.x = t,
                this.y = e,
                this.width = i,
                this.height = s,
                this.type = a.ELLIPSE
            }
            ,
            a.Ellipse.prototype = {
                setTo: function(t, e, i, s) {
                    return this.x = t,
                    this.y = e,
                    this.width = i,
                    this.height = s,
                    this
                },
                getBounds: function() {
                    return new a.Rectangle(this.x - this.width,this.y - this.height,this.width,this.height)
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.width, t.height)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                    t.y = this.y,
                    t.width = this.width,
                    t.height = this.height,
                    t
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new a.Ellipse(this.x,this.y,this.width,this.height) : t.setTo(this.x, this.y, this.width, this.height),
                    t
                },
                contains: function(t, e) {
                    return a.Ellipse.contains(this, t, e)
                },
                random: function(t) {
                    void 0 === t && (t = new a.Point);
                    var e = Math.random() * Math.PI * 2
                      , i = Math.random();
                    return t.x = Math.sqrt(i) * Math.cos(e),
                    t.y = Math.sqrt(i) * Math.sin(e),
                    t.x = this.x + t.x * this.width / 2,
                    t.y = this.y + t.y * this.height / 2,
                    t
                },
                toString: function() {
                    return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]"
                }
            },
            a.Ellipse.prototype.constructor = a.Ellipse,
            Object.defineProperty(a.Ellipse.prototype, "left", {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    this.x = t
                }
            }),
            Object.defineProperty(a.Ellipse.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(t) {
                    t < this.x ? this.width = 0 : this.width = t - this.x
                }
            }),
            Object.defineProperty(a.Ellipse.prototype, "top", {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    this.y = t
                }
            }),
            Object.defineProperty(a.Ellipse.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(t) {
                    t < this.y ? this.height = 0 : this.height = t - this.y
                }
            }),
            Object.defineProperty(a.Ellipse.prototype, "empty", {
                get: function() {
                    return 0 === this.width || 0 === this.height
                },
                set: function(t) {
                    !0 === t && this.setTo(0, 0, 0, 0)
                }
            }),
            a.Ellipse.contains = function(t, e, i) {
                if (t.width <= 0 || t.height <= 0)
                    return !1;
                var s = (e - t.x) / t.width - .5
                  , n = (i - t.y) / t.height - .5;
                return s *= s,
                n *= n,
                s + n < .25
            }
            ,
            PIXI.Ellipse = a.Ellipse,
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Line = function(t, e, i, s) {
                t = t || 0,
                e = e || 0,
                i = i || 0,
                s = s || 0,
                this.start = new a.Point(t,e),
                this.end = new a.Point(i,s),
                this.type = a.LINE
            }
            ,
            a.Line.prototype = {
                setTo: function(t, e, i, s) {
                    return this.start.setTo(t, e),
                    this.end.setTo(i, s),
                    this
                },
                fromSprite: function(t, e, i) {
                    return void 0 === i && (i = !1),
                    i ? this.setTo(t.center.x, t.center.y, e.center.x, e.center.y) : this.setTo(t.x, t.y, e.x, e.y)
                },
                fromAngle: function(t, e, i, s) {
                    return this.start.setTo(t, e),
                    this.end.setTo(t + Math.cos(i) * s, e + Math.sin(i) * s),
                    this
                },
                rotate: function(t, e) {
                    var i = (this.start.x + this.end.x) / 2
                      , s = (this.start.y + this.end.y) / 2;
                    return this.start.rotate(i, s, t, e),
                    this.end.rotate(i, s, t, e),
                    this
                },
                rotateAround: function(t, e, i, s) {
                    return this.start.rotate(t, e, i, s),
                    this.end.rotate(t, e, i, s),
                    this
                },
                intersects: function(t, e, i) {
                    return a.Line.intersectsPoints(this.start, this.end, t.start, t.end, e, i)
                },
                reflect: function(t) {
                    return a.Line.reflect(this, t)
                },
                midPoint: function(t) {
                    return void 0 === t && (t = new a.Point),
                    t.x = (this.start.x + this.end.x) / 2,
                    t.y = (this.start.y + this.end.y) / 2,
                    t
                },
                centerOn: function(t, e) {
                    var i = (this.start.x + this.end.x) / 2
                      , s = (this.start.y + this.end.y) / 2
                      , n = t - i
                      , a = e - s;
                    this.start.add(n, a),
                    this.end.add(n, a)
                },
                pointOnLine: function(t, e) {
                    return (t - this.start.x) * (this.end.y - this.start.y) == (this.end.x - this.start.x) * (e - this.start.y)
                },
                pointOnSegment: function(t, e) {
                    var i = Math.min(this.start.x, this.end.x)
                      , s = Math.max(this.start.x, this.end.x)
                      , n = Math.min(this.start.y, this.end.y)
                      , a = Math.max(this.start.y, this.end.y);
                    return this.pointOnLine(t, e) && t >= i && t <= s && e >= n && e <= a
                },
                random: function(t) {
                    void 0 === t && (t = new a.Point);
                    var e = Math.random();
                    return t.x = this.start.x + e * (this.end.x - this.start.x),
                    t.y = this.start.y + e * (this.end.y - this.start.y),
                    t
                },
                coordinatesOnLine: function(t, e) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = []);
                    var i = Math.round(this.start.x)
                      , s = Math.round(this.start.y)
                      , n = Math.round(this.end.x)
                      , a = Math.round(this.end.y)
                      , o = Math.abs(n - i)
                      , r = Math.abs(a - s)
                      , h = i < n ? 1 : -1
                      , l = s < a ? 1 : -1
                      , c = o - r;
                    e.push([i, s]);
                    for (var u = 1; i !== n || s !== a; ) {
                        var d = c << 1;
                        d > -r && (c -= r,
                        i += h),
                        d < o && (c += o,
                        s += l),
                        u % t == 0 && e.push([i, s]),
                        u++
                    }
                    return e
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new a.Line(this.start.x,this.start.y,this.end.x,this.end.y) : t.setTo(this.start.x, this.start.y, this.end.x, this.end.y),
                    t
                }
            },
            Object.defineProperty(a.Line.prototype, "length", {
                get: function() {
                    return Math.sqrt((this.end.x - this.start.x) * (this.end.x - this.start.x) + (this.end.y - this.start.y) * (this.end.y - this.start.y))
                }
            }),
            Object.defineProperty(a.Line.prototype, "angle", {
                get: function() {
                    return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "slope", {
                get: function() {
                    return (this.end.y - this.start.y) / (this.end.x - this.start.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "perpSlope", {
                get: function() {
                    return -(this.end.x - this.start.x) / (this.end.y - this.start.y)
                }
            }),
            Object.defineProperty(a.Line.prototype, "x", {
                get: function() {
                    return Math.min(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "y", {
                get: function() {
                    return Math.min(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(a.Line.prototype, "left", {
                get: function() {
                    return Math.min(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "right", {
                get: function() {
                    return Math.max(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "top", {
                get: function() {
                    return Math.min(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(a.Line.prototype, "bottom", {
                get: function() {
                    return Math.max(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(a.Line.prototype, "width", {
                get: function() {
                    return Math.abs(this.start.x - this.end.x)
                }
            }),
            Object.defineProperty(a.Line.prototype, "height", {
                get: function() {
                    return Math.abs(this.start.y - this.end.y)
                }
            }),
            Object.defineProperty(a.Line.prototype, "normalX", {
                get: function() {
                    return Math.cos(this.angle - 1.5707963267948966)
                }
            }),
            Object.defineProperty(a.Line.prototype, "normalY", {
                get: function() {
                    return Math.sin(this.angle - 1.5707963267948966)
                }
            }),
            Object.defineProperty(a.Line.prototype, "normalAngle", {
                get: function() {
                    return a.Math.wrap(this.angle - 1.5707963267948966, -Math.PI, Math.PI)
                }
            }),
            a.Line.intersectsPoints = function(t, e, i, s, n, o) {
                void 0 === n && (n = !0),
                void 0 === o && (o = new a.Point);
                var r = e.y - t.y
                  , h = s.y - i.y
                  , l = t.x - e.x
                  , c = i.x - s.x
                  , u = e.x * t.y - t.x * e.y
                  , d = s.x * i.y - i.x * s.y
                  , p = r * c - h * l;
                if (0 === p)
                    return null;
                if (o.x = (l * d - c * u) / p,
                o.y = (h * u - r * d) / p,
                n) {
                    var f = (s.y - i.y) * (e.x - t.x) - (s.x - i.x) * (e.y - t.y)
                      , g = ((s.x - i.x) * (t.y - i.y) - (s.y - i.y) * (t.x - i.x)) / f
                      , m = ((e.x - t.x) * (t.y - i.y) - (e.y - t.y) * (t.x - i.x)) / f;
                    return g >= 0 && g <= 1 && m >= 0 && m <= 1 ? o : null
                }
                return o
            }
            ,
            a.Line.intersects = function(t, e, i, s) {
                return a.Line.intersectsPoints(t.start, t.end, e.start, e.end, i, s)
            }
            ,
            a.Line.intersectsRectangle = function(t, e) {
                if (!a.Rectangle.intersects(t, e))
                    return !1;
                var i = t.start.x
                  , s = t.start.y
                  , n = t.end.x
                  , o = t.end.y
                  , r = e.x
                  , h = e.y
                  , l = e.right
                  , c = e.bottom
                  , u = 0;
                if (i >= r && i <= l && s >= h && s <= c || n >= r && n <= l && o >= h && o <= c)
                    return !0;
                if (i < r && n >= r) {
                    if ((u = s + (o - s) * (r - i) / (n - i)) > h && u <= c)
                        return !0
                } else if (i > l && n <= l && (u = s + (o - s) * (l - i) / (n - i)) >= h && u <= c)
                    return !0;
                if (s < h && o >= h) {
                    if ((u = i + (n - i) * (h - s) / (o - s)) >= r && u <= l)
                        return !0
                } else if (s > c && o <= c && (u = i + (n - i) * (c - s) / (o - s)) >= r && u <= l)
                    return !0;
                return !1
            }
            ,
            a.Line.reflect = function(t, e) {
                return 2 * e.normalAngle - 3.141592653589793 - t.angle
            }
            ,
            /**
* @author       Mat Groves http://matgroves.com/ @Doormat23
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Matrix = function(t, e, i, s, n, o) {
                void 0 !== t && null !== t || (t = 1),
                void 0 !== e && null !== e || (e = 0),
                void 0 !== i && null !== i || (i = 0),
                void 0 !== s && null !== s || (s = 1),
                void 0 !== n && null !== n || (n = 0),
                void 0 !== o && null !== o || (o = 0),
                this.a = t,
                this.b = e,
                this.c = i,
                this.d = s,
                this.tx = n,
                this.ty = o,
                this.type = a.MATRIX
            }
            ,
            a.Matrix.prototype = {
                fromArray: function(t) {
                    return this.setTo(t[0], t[1], t[3], t[4], t[2], t[5])
                },
                setTo: function(t, e, i, s, n, a) {
                    return this.a = t,
                    this.b = e,
                    this.c = i,
                    this.d = s,
                    this.tx = n,
                    this.ty = a,
                    this
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new a.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty) : (t.a = this.a,
                    t.b = this.b,
                    t.c = this.c,
                    t.d = this.d,
                    t.tx = this.tx,
                    t.ty = this.ty),
                    t
                },
                copyTo: function(t) {
                    return t.copyFrom(this),
                    t
                },
                copyFrom: function(t) {
                    return this.a = t.a,
                    this.b = t.b,
                    this.c = t.c,
                    this.d = t.d,
                    this.tx = t.tx,
                    this.ty = t.ty,
                    this
                },
                toArray: function(t, e) {
                    return void 0 === e && (e = new PIXI.Float32Array(9)),
                    t ? (e[0] = this.a,
                    e[1] = this.b,
                    e[2] = 0,
                    e[3] = this.c,
                    e[4] = this.d,
                    e[5] = 0,
                    e[6] = this.tx,
                    e[7] = this.ty,
                    e[8] = 1) : (e[0] = this.a,
                    e[1] = this.c,
                    e[2] = this.tx,
                    e[3] = this.b,
                    e[4] = this.d,
                    e[5] = this.ty,
                    e[6] = 0,
                    e[7] = 0,
                    e[8] = 1),
                    e
                },
                apply: function(t, e) {
                    return void 0 === e && (e = new a.Point),
                    e.x = this.a * t.x + this.c * t.y + this.tx,
                    e.y = this.b * t.x + this.d * t.y + this.ty,
                    e
                },
                applyInverse: function(t, e) {
                    void 0 === e && (e = new a.Point);
                    var i = 1 / (this.a * this.d + this.c * -this.b)
                      , s = t.x
                      , n = t.y;
                    return e.x = this.d * i * s + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i,
                    e.y = this.a * i * n + -this.b * i * s + (-this.ty * this.a + this.tx * this.b) * i,
                    e
                },
                translate: function(t, e) {
                    return this.tx += t,
                    this.ty += e,
                    this
                },
                scale: function(t, e) {
                    return this.a *= t,
                    this.d *= e,
                    this.c *= t,
                    this.b *= e,
                    this.tx *= t,
                    this.ty *= e,
                    this
                },
                rotate: function(t) {
                    var e = Math.cos(t)
                      , i = Math.sin(t)
                      , s = this.a
                      , n = this.c
                      , a = this.tx;
                    return this.a = s * e - this.b * i,
                    this.b = s * i + this.b * e,
                    this.c = n * e - this.d * i,
                    this.d = n * i + this.d * e,
                    this.tx = a * e - this.ty * i,
                    this.ty = a * i + this.ty * e,
                    this
                },
                append: function(t) {
                    var e = this.a
                      , i = this.b
                      , s = this.c
                      , n = this.d;
                    return this.a = t.a * e + t.b * s,
                    this.b = t.a * i + t.b * n,
                    this.c = t.c * e + t.d * s,
                    this.d = t.c * i + t.d * n,
                    this.tx = t.tx * e + t.ty * s + this.tx,
                    this.ty = t.tx * i + t.ty * n + this.ty,
                    this
                },
                identity: function() {
                    return this.setTo(1, 0, 0, 1, 0, 0)
                }
            },
            a.identityMatrix = new a.Matrix,
            PIXI.Matrix = a.Matrix,
            PIXI.identityMatrix = a.identityMatrix,
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Point = function(t, e) {
                t = t || 0,
                e = e || 0,
                this.x = t,
                this.y = e,
                this.type = a.POINT
            }
            ,
            a.Point.prototype = {
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y)
                },
                invert: function() {
                    return this.setTo(this.y, this.x)
                },
                setTo: function(t, e) {
                    return this.x = t || 0,
                    this.y = e || (0 !== e ? this.x : 0),
                    this
                },
                set: function(t, e) {
                    return this.x = t || 0,
                    this.y = e || (0 !== e ? this.x : 0),
                    this
                },
                add: function(t, e) {
                    return this.x += t,
                    this.y += e,
                    this
                },
                subtract: function(t, e) {
                    return this.x -= t,
                    this.y -= e,
                    this
                },
                multiply: function(t, e) {
                    return this.x *= t,
                    this.y *= e,
                    this
                },
                divide: function(t, e) {
                    return this.x /= t,
                    this.y /= e,
                    this
                },
                clampX: function(t, e) {
                    return this.x = a.Math.clamp(this.x, t, e),
                    this
                },
                clampY: function(t, e) {
                    return this.y = a.Math.clamp(this.y, t, e),
                    this
                },
                clamp: function(t, e) {
                    return this.x = a.Math.clamp(this.x, t, e),
                    this.y = a.Math.clamp(this.y, t, e),
                    this
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new a.Point(this.x,this.y) : t.setTo(this.x, this.y),
                    t
                },
                copyTo: function(t) {
                    return t.x = this.x,
                    t.y = this.y,
                    t
                },
                distance: function(t, e) {
                    return a.Point.distance(this, t, e)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y
                },
                angle: function(t, e) {
                    return void 0 === e && (e = !1),
                    e ? a.Math.radToDeg(Math.atan2(t.y - this.y, t.x - this.x)) : Math.atan2(t.y - this.y, t.x - this.x)
                },
                rotate: function(t, e, i, s, n) {
                    return a.Point.rotate(this, t, e, i, s, n)
                },
                getMagnitude: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                },
                getMagnitudeSq: function() {
                    return this.x * this.x + this.y * this.y
                },
                setMagnitude: function(t) {
                    return this.normalize().multiply(t, t)
                },
                normalize: function() {
                    if (!this.isZero()) {
                        var t = this.getMagnitude();
                        this.x /= t,
                        this.y /= t
                    }
                    return this
                },
                isZero: function() {
                    return 0 === this.x && 0 === this.y
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y
                },
                cross: function(t) {
                    return this.x * t.y - this.y * t.x
                },
                perp: function() {
                    return this.setTo(-this.y, this.x)
                },
                rperp: function() {
                    return this.setTo(this.y, -this.x)
                },
                normalRightHand: function() {
                    return this.setTo(-1 * this.y, this.x)
                },
                floor: function() {
                    return this.setTo(Math.floor(this.x), Math.floor(this.y))
                },
                ceil: function() {
                    return this.setTo(Math.ceil(this.x), Math.ceil(this.y))
                },
                toString: function() {
                    return "[{Point (x=" + this.x + " y=" + this.y + ")}]"
                }
            },
            a.Point.prototype.constructor = a.Point,
            a.Point.add = function(t, e, i) {
                return void 0 === i && (i = new a.Point),
                i.x = t.x + e.x,
                i.y = t.y + e.y,
                i
            }
            ,
            a.Point.subtract = function(t, e, i) {
                return void 0 === i && (i = new a.Point),
                i.x = t.x - e.x,
                i.y = t.y - e.y,
                i
            }
            ,
            a.Point.multiply = function(t, e, i) {
                return void 0 === i && (i = new a.Point),
                i.x = t.x * e.x,
                i.y = t.y * e.y,
                i
            }
            ,
            a.Point.divide = function(t, e, i) {
                return void 0 === i && (i = new a.Point),
                i.x = t.x / e.x,
                i.y = t.y / e.y,
                i
            }
            ,
            a.Point.equals = function(t, e) {
                return t.x === e.x && t.y === e.y
            }
            ,
            a.Point.angle = function(t, e) {
                return Math.atan2(t.y - e.y, t.x - e.x)
            }
            ,
            a.Point.negative = function(t, e) {
                return void 0 === e && (e = new a.Point),
                e.setTo(-t.x, -t.y)
            }
            ,
            a.Point.multiplyAdd = function(t, e, i, s) {
                return void 0 === s && (s = new a.Point),
                s.setTo(t.x + e.x * i, t.y + e.y * i)
            }
            ,
            a.Point.interpolate = function(t, e, i, s) {
                return void 0 === s && (s = new a.Point),
                s.setTo(t.x + (e.x - t.x) * i, t.y + (e.y - t.y) * i)
            }
            ,
            a.Point.perp = function(t, e) {
                return void 0 === e && (e = new a.Point),
                e.setTo(-t.y, t.x)
            }
            ,
            a.Point.rperp = function(t, e) {
                return void 0 === e && (e = new a.Point),
                e.setTo(t.y, -t.x)
            }
            ,
            a.Point.distance = function(t, e, i) {
                var s = a.Math.distance(t.x, t.y, e.x, e.y);
                return i ? Math.round(s) : s
            }
            ,
            a.Point.project = function(t, e, i) {
                void 0 === i && (i = new a.Point);
                var s = t.dot(e) / e.getMagnitudeSq();
                return 0 !== s && i.setTo(s * e.x, s * e.y),
                i
            }
            ,
            a.Point.projectUnit = function(t, e, i) {
                void 0 === i && (i = new a.Point);
                var s = t.dot(e);
                return 0 !== s && i.setTo(s * e.x, s * e.y),
                i
            }
            ,
            a.Point.normalRightHand = function(t, e) {
                return void 0 === e && (e = new a.Point),
                e.setTo(-1 * t.y, t.x)
            }
            ,
            a.Point.normalize = function(t, e) {
                void 0 === e && (e = new a.Point);
                var i = t.getMagnitude();
                return 0 !== i && e.setTo(t.x / i, t.y / i),
                e
            }
            ,
            a.Point.rotate = function(t, e, i, s, n, o) {
                if (n && (s = a.Math.degToRad(s)),
                void 0 === o) {
                    t.subtract(e, i);
                    var r = Math.sin(s)
                      , h = Math.cos(s)
                      , l = h * t.x - r * t.y
                      , c = r * t.x + h * t.y;
                    t.x = l + e,
                    t.y = c + i
                } else {
                    var u = s + Math.atan2(t.y - i, t.x - e);
                    t.x = e + o * Math.cos(u),
                    t.y = i + o * Math.sin(u)
                }
                return t
            }
            ,
            a.Point.centroid = function(t, e) {
                if (void 0 === e && (e = new a.Point),
                "[object Array]" !== Object.prototype.toString.call(t))
                    throw new Error("Phaser.Point. Parameter 'points' must be an array");
                var i = t.length;
                if (i < 1)
                    throw new Error("Phaser.Point. Parameter 'points' array must not be empty");
                if (1 === i)
                    return e.copyFrom(t[0]),
                    e;
                for (var s = 0; s < i; s++)
                    a.Point.add(e, t[s], e);
                return e.divide(i, i),
                e
            }
            ,
            a.Point.parse = function(t, e, i) {
                e = e || "x",
                i = i || "y";
                var s = new a.Point;
                return t[e] && (s.x = parseInt(t[e], 10)),
                t[i] && (s.y = parseInt(t[i], 10)),
                s
            }
            ,
            PIXI.Point = a.Point,
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @author       Adrien Brault <adrien.brault@gmail.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Polygon = function() {
                this.area = 0,
                this._points = [],
                arguments.length > 0 && this.setTo.apply(this, arguments),
                this.closed = !0,
                this.flattened = !1,
                this.type = a.POLYGON
            }
            ,
            a.Polygon.prototype = {
                toNumberArray: function(t) {
                    void 0 === t && (t = []);
                    for (var e = 0; e < this._points.length; e++)
                        "number" == typeof this._points[e] ? (t.push(this._points[e]),
                        t.push(this._points[e + 1]),
                        e++) : (t.push(this._points[e].x),
                        t.push(this._points[e].y));
                    return t
                },
                flatten: function() {
                    return this._points = this.toNumberArray(),
                    this.flattened = !0,
                    this
                },
                clone: function(t) {
                    var e = this._points.slice();
                    return void 0 === t || null === t ? t = new a.Polygon(e) : t.setTo(e),
                    t
                },
                contains: function(t, e) {
                    var i = !1;
                    if (this.flattened)
                        for (var s = -2, n = this._points.length - 2; (s += 2) < this._points.length; n = s) {
                            var a = this._points[s]
                              , o = this._points[s + 1]
                              , r = this._points[n]
                              , h = this._points[n + 1];
                            (o <= e && e < h || h <= e && e < o) && t < (r - a) * (e - o) / (h - o) + a && (i = !i)
                        }
                    else
                        for (var s = -1, n = this._points.length - 1; ++s < this._points.length; n = s) {
                            var a = this._points[s].x
                              , o = this._points[s].y
                              , r = this._points[n].x
                              , h = this._points[n].y;
                            (o <= e && e < h || h <= e && e < o) && t < (r - a) * (e - o) / (h - o) + a && (i = !i)
                        }
                    return i
                },
                setTo: function(t) {
                    if (this.area = 0,
                    this._points = [],
                    arguments.length > 0) {
                        Array.isArray(t) || (t = Array.prototype.slice.call(arguments));
                        for (var e = Number.MAX_VALUE, i = 0, s = t.length; i < s; i++) {
                            if ("number" == typeof t[i]) {
                                var n = new PIXI.Point(t[i],t[i + 1]);
                                i++
                            } else if (Array.isArray(t[i]))
                                var n = new PIXI.Point(t[i][0],t[i][1]);
                            else
                                var n = new PIXI.Point(t[i].x,t[i].y);
                            this._points.push(n),
                            n.y < e && (e = n.y)
                        }
                        this.calculateArea(e)
                    }
                    return this
                },
                calculateArea: function(t) {
                    for (var e, i, s, n, a = 0, o = this._points.length; a < o; a++)
                        e = this._points[a],
                        i = a === o - 1 ? this._points[0] : this._points[a + 1],
                        s = (e.y - t + (i.y - t)) / 2,
                        n = e.x - i.x,
                        this.area += s * n;
                    return this.area
                }
            },
            a.Polygon.prototype.constructor = a.Polygon,
            Object.defineProperty(a.Polygon.prototype, "points", {
                get: function() {
                    return this._points
                },
                set: function(t) {
                    null != t ? this.setTo(t) : this.setTo()
                }
            }),
            PIXI.Polygon = a.Polygon,
            /**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/
            a.Rectangle = function(t, e, i, s) {
                t = t || 0,
                e = e || 0,
                i = i || 0,
                s = s || 0,
                this.x = t,
                this.y = e,
                this.width = i,
                this.height = s,
                this.type = a.RECTANGLE
            }
            ,
            a.Rectangle.prototype = {
                offset: function(t, e) {
                    return this.x += t,
                    this.y += e,
                    this
                },
                offsetPoint: function(t) {
                    return this.offset(t.x, t.y)
                },
                setTo: function(t, e, i, s) {
                    return this.x = t,
                    this.y = e,
                    this.width = i,
                    this.height = s,
                    this
                },
                scale: function(t, e) {
                    return void 0 === e && (e = t),
                    this.width *= t,
                    this.height *= e,
                    this
                },
                centerOn: function(t, e) {
                    return this.centerX = t,
                    this.centerY = e,
                    this
                },
                floor: function() {
                    this.x = Math.floor(this.x),
                    this.y = Math.floor(this.y)
                },
                floorAll: function() {
                    this.x = Math.floor(this.x),
                    this.y = Math.floor(this.y),
                    this.width = Math.floor(this.width),
                    this.height = Math.floor(this.height)
                },
                ceil: function() {
                    this.x = Math.ceil(this.x),
                    this.y = Math.ceil(this.y)
                },
                ceilAll: function() {
                    this.x = Math.ceil(this.x),
                    this.y = Math.ceil(this.y),
                    this.width = Math.ceil(this.width),
                    this.height = Math.ceil(this.height)
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.width, t.height)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                    t.y = this.y,
                    t.width = this.width,
                    t.height = this.height,
                    t
                },
                inflate: function(t, e) {
                    return a.Rectangle.inflate(this, t, e)
                },
                size: function(t) {
                    return a.Rectangle.size(this, t)
                },
                resize: function(t, e) {
                    return this.width = t,
                    this.height = e,
                    this
                },
                clone: function(t) {
                    return a.Rectangle.clone(this, t)
                },
                contains: function(t, e) {
                    return a.Rectangle.contains(this, t, e)
                },
                containsRect: function(t) {
                    return a.Rectangle.containsRect(t, this)
                },
                equals: function(t) {
                    return a.Rectangle.equals(this, t)
                },
                intersection: function(t, e) {
                    return a.Rectangle.intersection(this, t, e)
                },
                intersects: function(t) {
                    return a.Rectangle.intersects(this, t)
                },
                intersectsRaw: function(t, e, i, s, n) {
                    return a.Rectangle.intersectsRaw(this, t, e, i, s, n)
                },
                union: function(t, e) {
                    return a.Rectangle.union(this, t, e)
                },
                random: function(t) {
                    return void 0 === t && (t = new a.Point),
                    t.x = this.randomX,
                    t.y = this.randomY,
                    t
                },
                getPoint: function(t, e) {
                    switch (void 0 === e && (e = new a.Point),
                    t) {
                    default:
                    case a.TOP_LEFT:
                        return e.set(this.x, this.y);
                    case a.TOP_CENTER:
                        return e.set(this.centerX, this.y);
                    case a.TOP_RIGHT:
                        return e.set(this.right, this.y);
                    case a.LEFT_CENTER:
                        return e.set(this.x, this.centerY);
                    case a.CENTER:
                        return e.set(this.centerX, this.centerY);
                    case a.RIGHT_CENTER:
                        return e.set(this.right, this.centerY);
                    case a.BOTTOM_LEFT:
                        return e.set(this.x, this.bottom);
                    case a.BOTTOM_CENTER:
                        return e.set(this.centerX, this.bottom);
                    case a.BOTTOM_RIGHT:
                        return e.set(this.right, this.bottom)
                    }
                },
                toString: function() {
                    return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]"
                }
            },
            Object.defineProperty(a.Rectangle.prototype, "halfWidth", {
                get: function() {
                    return Math.round(this.width / 2)
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "halfHeight", {
                get: function() {
                    return Math.round(this.height / 2)
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(t) {
                    t <= this.y ? this.height = 0 : this.height = t - this.y
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "bottomLeft", {
                get: function() {
                    return new a.Point(this.x,this.bottom)
                },
                set: function(t) {
                    this.x = t.x,
                    this.bottom = t.y
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "bottomRight", {
                get: function() {
                    return new a.Point(this.right,this.bottom)
                },
                set: function(t) {
                    this.right = t.x,
                    this.bottom = t.y
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "left", {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    t >= this.right ? this.width = 0 : this.width = this.right - t,
                    this.x = t
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(t) {
                    t <= this.x ? this.width = 0 : this.width = t - this.x
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "volume", {
                get: function() {
                    return this.width * this.height
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "perimeter", {
                get: function() {
                    return 2 * this.width + 2 * this.height
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "centerX", {
                get: function() {
                    return this.x + this.halfWidth
                },
                set: function(t) {
                    this.x = t - this.halfWidth
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "centerY", {
                get: function() {
                    return this.y + this.halfHeight
                },
                set: function(t) {
                    this.y = t - this.halfHeight
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "randomX", {
                get: function() {
                    return this.x + Math.random() * this.width
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "randomY", {
                get: function() {
                    return this.y + Math.random() * this.height
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "top", {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    t >= this.bottom ? (this.height = 0,
                    this.y = t) : this.height = this.bottom - t
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "topLeft", {
                get: function() {
                    return new a.Point(this.x,this.y)
                },
                set: function(t) {
                    this.x = t.x,
                    this.y = t.y
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "topRight", {
                get: function() {
                    return new a.Point(this.x + this.width,this.y)
                },
                set: function(t) {
                    this.right = t.x,
                    this.y = t.y
                }
            }),
            Object.defineProperty(a.Rectangle.prototype, "empty", {
                get: function() {
                    return !this.width || !this.height
                },
                set: function(t) {
                    !0 === t && this.setTo(0, 0, 0, 0)
                }
            }),
            a.Rectangle.prototype.constructor = a.Rectangle,
            a.Rectangle.inflate = function(t, e, i) {
                return t.x -= e,
                t.width += 2 * e,
                t.y -= i,
                t.height += 2 * i,
                t
            }
            ,
            a.Rectangle.inflatePoint = function(t, e) {
                return a.Rectangle.inflate(t, e.x, e.y)
            }
            ,
            a.Rectangle.size = function(t, e) {
                return void 0 === e || null === e ? e = new a.Point(t.width,t.height) : e.setTo(t.width, t.height),
                e
            }
            ,
            a.Rectangle.clone = function(t, e) {
                return void 0 === e || null === e ? e = new a.Rectangle(t.x,t.y,t.width,t.height) : e.setTo(t.x, t.y, t.width, t.height),
                e
            }
            ,
            a.Rectangle.contains = function(t, e, i) {
             