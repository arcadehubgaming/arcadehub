(function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { (function ($hx_exports, $global) { "use strict";
$hx_exports["lime"] = $hx_exports["lime"] || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var flixel_util_IFlxDestroyable = function() { };
$hxClasses["flixel.util.IFlxDestroyable"] = flixel_util_IFlxDestroyable;
flixel_util_IFlxDestroyable.__name__ = "flixel.util.IFlxDestroyable";
flixel_util_IFlxDestroyable.__isInterface__ = true;
flixel_util_IFlxDestroyable.prototype = {
	destroy: null
	,__class__: flixel_util_IFlxDestroyable
};
var flixel_FlxBasic = function() {
	this.flixelType = 0;
	this.exists = true;
	this.alive = true;
	this.visible = true;
	this.active = true;
	this.ID = flixel_FlxBasic.idEnumerator++;
};
$hxClasses["flixel.FlxBasic"] = flixel_FlxBasic;
flixel_FlxBasic.__name__ = "flixel.FlxBasic";
flixel_FlxBasic.__interfaces__ = [flixel_util_IFlxDestroyable];
flixel_FlxBasic.prototype = {
	ID: null
	,active: null
	,visible: null
	,alive: null
	,exists: null
	,flixelType: null
	,_cameras: null
	,destroy: function() {
		this.set_exists(false);
		this._cameras = null;
	}
	,kill: function() {
		this.set_alive(false);
		this.set_exists(false);
	}
	,revive: function() {
		this.set_alive(true);
		this.set_exists(true);
	}
	,update: function(elapsed) {
	}
	,draw: function() {
	}
	,toString: function() {
		var value = this.active;
		var _this = flixel_util_LabelValuePair._pool.get();
		_this.label = "active";
		_this.value = value;
		var value = this.visible;
		var _this1 = flixel_util_LabelValuePair._pool.get();
		_this1.label = "visible";
		_this1.value = value;
		var value = this.alive;
		var _this2 = flixel_util_LabelValuePair._pool.get();
		_this2.label = "alive";
		_this2.value = value;
		var value = this.exists;
		var _this3 = flixel_util_LabelValuePair._pool.get();
		_this3.label = "exists";
		_this3.value = value;
		return flixel_util_FlxStringUtil.getDebugString([_this,_this1,_this2,_this3]);
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,set_active: function(Value) {
		return this.active = Value;
	}
	,set_exists: function(Value) {
		return this.exists = Value;
	}
	,set_alive: function(Value) {
		return this.alive = Value;
	}
	,get_camera: function() {
		if(this._cameras == null || this._cameras.length == 0) {
			return flixel_FlxCamera._defaultCameras[0];
		} else {
			return this._cameras[0];
		}
	}
	,set_camera: function(Value) {
		if(this._cameras == null) {
			this._cameras = [Value];
		} else {
			this._cameras[0] = Value;
		}
		return Value;
	}
	,get_cameras: function() {
		if(this._cameras == null) {
			return flixel_FlxCamera._defaultCameras;
		} else {
			return this._cameras;
		}
	}
	,set_cameras: function(Value) {
		return this._cameras = Value;
	}
	,__class__: flixel_FlxBasic
	,__properties__: {set_cameras:"set_cameras",get_cameras:"get_cameras",set_camera:"set_camera",get_camera:"get_camera",set_exists:"set_exists",set_alive:"set_alive",set_visible:"set_visible",set_active:"set_active"}
};
var flixel_util_IFlxPooled = function() { };
$hxClasses["flixel.util.IFlxPooled"] = flixel_util_IFlxPooled;
flixel_util_IFlxPooled.__name__ = "flixel.util.IFlxPooled";
flixel_util_IFlxPooled.__isInterface__ = true;
flixel_util_IFlxPooled.__interfaces__ = [flixel_util_IFlxDestroyable];
flixel_util_IFlxPooled.prototype = {
	put: null
	,_inPool: null
	,__class__: flixel_util_IFlxPooled
};
var flixel_util_IFlxPool = function() { };
$hxClasses["flixel.util.IFlxPool"] = flixel_util_IFlxPool;
flixel_util_IFlxPool.__name__ = "flixel.util.IFlxPool";
flixel_util_IFlxPool.__isInterface__ = true;
flixel_util_IFlxPool.prototype = {
	preAllocate: null
	,clear: null
	,__class__: flixel_util_IFlxPool
};
var flixel_util_FlxPool_$flixel_$math_$FlxRect = function(classObj) {
	this._count = 0;
	this._pool = [];
	this._class = classObj;
};
$hxClasses["flixel.util.FlxPool_flixel_math_FlxRect"] = flixel_util_FlxPool_$flixel_$math_$FlxRect;
flixel_util_FlxPool_$flixel_$math_$FlxRect.__name__ = "flixel.util.FlxPool_flixel_math_FlxRect";
flixel_util_FlxPool_$flixel_$math_$FlxRect.__interfaces__ = [flixel_util_IFlxPool];
flixel_util_FlxPool_$flixel_$math_$FlxRect.prototype = {
	_pool: null
	,_class: null
	,_count: null
	,get: function() {
		if(this._count == 0) {
			return Type.createInstance(this._class,[]);
		}
		return this._pool[--this._count];
	}
	,put: function(obj) {
		if(obj != null) {
			var i = this._pool.indexOf(obj);
			if(i == -1 || i >= this._count) {
				obj.destroy();
				this._pool[this._count++] = obj;
			}
		}
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool[this._count++] = obj;
		}
	}
	,preAllocate: function(numObjects) {
		while(numObjects-- > 0) this._pool[this._count++] = Type.createInstance(this._class,[]);
	}
	,clear: function() {
		this._count = 0;
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,get_length: function() {
		return this._count;
	}
	,__class__: flixel_util_FlxPool_$flixel_$math_$FlxRect
	,__properties__: {get_length:"get_length"}
};
var flixel_math_FlxRect = function(X,Y,Width,Height) {
	if(Height == null) {
		Height = 0;
	}
	if(Width == null) {
		Width = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	this._inPool = false;
	this._weak = false;
	var X1 = X;
	var Y1 = Y;
	var Width1 = Width;
	var Height1 = Height;
	if(Height1 == null) {
		Height1 = 0;
	}
	if(Width1 == null) {
		Width1 = 0;
	}
	if(Y1 == null) {
		Y1 = 0;
	}
	if(X1 == null) {
		X1 = 0;
	}
	this.x = X1;
	this.y = Y1;
	this.width = Width1;
	this.height = Height1;
};
$hxClasses["flixel.math.FlxRect"] = flixel_math_FlxRect;
flixel_math_FlxRect.__name__ = "flixel.math.FlxRect";
flixel_math_FlxRect.__interfaces__ = [flixel_util_IFlxPooled];
flixel_math_FlxRect.__properties__ = {get_pool:"get_pool"};
flixel_math_FlxRect.get = function(X,Y,Width,Height) {
	if(Height == null) {
		Height = 0;
	}
	if(Width == null) {
		Width = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	var _this = flixel_math_FlxRect._pool.get();
	var X1 = X;
	var Y1 = Y;
	var Width1 = Width;
	var Height1 = Height;
	if(Height1 == null) {
		Height1 = 0;
	}
	if(Width1 == null) {
		Width1 = 0;
	}
	if(Y1 == null) {
		Y1 = 0;
	}
	if(X1 == null) {
		X1 = 0;
	}
	_this.x = X1;
	_this.y = Y1;
	_this.width = Width1;
	_this.height = Height1;
	var rect = _this;
	rect._inPool = false;
	return rect;
};
flixel_math_FlxRect.weak = function(X,Y,Width,Height) {
	if(Height == null) {
		Height = 0;
	}
	if(Width == null) {
		Width = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	var X1 = X;
	var Y1 = Y;
	var Width1 = Width;
	var Height1 = Height;
	if(Height1 == null) {
		Height1 = 0;
	}
	if(Width1 == null) {
		Width1 = 0;
	}
	if(Y1 == null) {
		Y1 = 0;
	}
	if(X1 == null) {
		X1 = 0;
	}
	var _this = flixel_math_FlxRect._pool.get();
	var X = X1;
	var Y = Y1;
	var Width = Width1;
	var Height = Height1;
	if(Height == null) {
		Height = 0;
	}
	if(Width == null) {
		Width = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	_this.x = X;
	_this.y = Y;
	_this.width = Width;
	_this.height = Height;
	var rect = _this;
	rect._inPool = false;
	var rect1 = rect;
	rect1._weak = true;
	return rect1;
};
flixel_math_FlxRect.get_pool = function() {
	return flixel_math_FlxRect._pool;
};
flixel_math_FlxRect.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,_weak: null
	,_inPool: null
	,put: function() {
		if(!this._inPool) {
			this._inPool = true;
			this._weak = false;
			flixel_math_FlxRect._pool.putUnsafe(this);
		}
	}
	,putWeak: function() {
		if(this._weak) {
			if(!this._inPool) {
				this._inPool = true;
				this._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(this);
			}
		}
	}
	,setSize: function(Width,Height) {
		this.width = Width;
		this.height = Height;
		return this;
	}
	,setPosition: function(x,y) {
		this.x = x;
		this.y = y;
		return this;
	}
	,set: function(X,Y,Width,Height) {
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		if(Rect._weak) {
			if(!Rect._inPool) {
				Rect._inPool = true;
				Rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(Rect);
			}
		}
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		if(Rect._weak) {
			if(!Rect._inPool) {
				Rect._inPool = true;
				Rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(Rect);
			}
		}
		return Rect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyToFlash: function(FlashRect) {
		if(FlashRect == null) {
			FlashRect = new openfl_geom_Rectangle();
		}
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,overlaps: function(Rect) {
		var result = Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
		if(Rect._weak) {
			if(!Rect._inPool) {
				Rect._inPool = true;
				Rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(Rect);
			}
		}
		return result;
	}
	,containsPoint: function(Point) {
		var result = flixel_math_FlxMath.pointInFlxRect(Point.x,Point.y,this);
		if(Point._weak) {
			Point.put();
		}
		return result;
	}
	,union: function(Rect) {
		var minX = Math.min(this.x,Rect.x);
		var minY = Math.min(this.y,Rect.y);
		var maxX = Math.max(this.x + this.width,Rect.x + Rect.width);
		var maxY = Math.max(this.y + this.height,Rect.y + Rect.height);
		if(Rect._weak) {
			if(!Rect._inPool) {
				Rect._inPool = true;
				Rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(Rect);
			}
		}
		var X = minX;
		var Y = minY;
		var Width = maxX - minX;
		var Height = maxY - minY;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,floor: function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	}
	,ceil: function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	}
	,round: function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	}
	,fromTwoPoints: function(Point1,Point2) {
		var minX = Math.min(Point1.x,Point2.x);
		var minY = Math.min(Point1.y,Point2.y);
		var maxX = Math.max(Point1.x,Point2.x);
		var maxY = Math.max(Point1.y,Point2.y);
		if(Point1._weak) {
			Point1.put();
		}
		if(Point2._weak) {
			Point2.put();
		}
		var X = minX;
		var Y = minY;
		var Width = maxX - minX;
		var Height = maxY - minY;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,unionWithPoint: function(Point) {
		var minX = Math.min(this.x,Point.x);
		var minY = Math.min(this.y,Point.y);
		var maxX = Math.max(this.x + this.width,Point.x);
		var maxY = Math.max(this.y + this.height,Point.y);
		if(Point._weak) {
			Point.put();
		}
		var X = minX;
		var Y = minY;
		var Width = maxX - minX;
		var Height = maxY - minY;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
		return this;
	}
	,destroy: function() {
	}
	,equals: function(rect) {
		var result = Math.abs(this.x - rect.x) <= 0.0000001 && Math.abs(this.y - rect.y) <= 0.0000001 && Math.abs(this.width - rect.width) <= 0.0000001 && Math.abs(this.height - rect.height) <= 0.0000001;
		if(rect._weak) {
			if(!rect._inPool) {
				rect._inPool = true;
				rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(rect);
			}
		}
		return result;
	}
	,intersection: function(rect,result) {
		if(result == null) {
			var _this = flixel_math_FlxRect._pool.get();
			var X = 0;
			var Y = 0;
			var Width = 0;
			var Height = 0;
			if(Height == null) {
				Height = 0;
			}
			if(Width == null) {
				Width = 0;
			}
			if(Y == null) {
				Y = 0;
			}
			if(X == null) {
				X = 0;
			}
			_this.x = X;
			_this.y = Y;
			_this.width = Width;
			_this.height = Height;
			var rect1 = _this;
			rect1._inPool = false;
			result = rect1;
		}
		var x0 = this.x < rect.x ? rect.x : this.x;
		var x1 = this.x + this.width > rect.x + rect.width ? rect.x + rect.width : this.x + this.width;
		if(x1 <= x0) {
			if(rect._weak) {
				if(!rect._inPool) {
					rect._inPool = true;
					rect._weak = false;
					flixel_math_FlxRect._pool.putUnsafe(rect);
				}
			}
			return result;
		}
		var y0 = this.y < rect.y ? rect.y : this.y;
		var y1 = this.y + this.height > rect.y + rect.height ? rect.y + rect.height : this.y + this.height;
		if(y1 <= y0) {
			if(rect._weak) {
				if(!rect._inPool) {
					rect._inPool = true;
					rect._weak = false;
					flixel_math_FlxRect._pool.putUnsafe(rect);
				}
			}
			return result;
		}
		if(rect._weak) {
			if(!rect._inPool) {
				rect._inPool = true;
				rect._weak = false;
				flixel_math_FlxRect._pool.putUnsafe(rect);
			}
		}
		var X = x0;
		var Y = y0;
		var Width = x1 - x0;
		var Height = y1 - y0;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		result.x = X;
		result.y = Y;
		result.width = Width;
		result.height = Height;
		return result;
	}
	,toString: function() {
		var value = this.x;
		var _this = flixel_util_LabelValuePair._pool.get();
		_this.label = "x";
		_this.value = value;
		var value = this.y;
		var _this1 = flixel_util_LabelValuePair._pool.get();
		_this1.label = "y";
		_this1.value = value;
		var value = this.width;
		var _this2 = flixel_util_LabelValuePair._pool.get();
		_this2.label = "w";
		_this2.value = value;
		var value = this.height;
		var _this3 = flixel_util_LabelValuePair._pool.get();
		_this3.label = "h";
		_this3.value = value;
		return flixel_util_FlxStringUtil.getDebugString([_this,_this1,_this2,_this3]);
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(Value) {
		this.width -= Value - this.x;
		return this.x = Value;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(Value) {
		this.width = Value - this.x;
		return Value;
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(Value) {
		this.height -= Value - this.y;
		return this.y = Value;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(Value) {
		this.height = Value - this.y;
		return Value;
	}
	,get_isEmpty: function() {
		if(this.width != 0) {
			return this.height == 0;
		} else {
			return true;
		}
	}
	,__class__: flixel_math_FlxRect
	,__properties__: {get_isEmpty:"get_isEmpty",set_bottom:"set_bottom",get_bottom:"get_bottom",set_top:"set_top",get_top:"get_top",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left"}
};
var flixel_FlxObject = function(X,Y,Width,Height) {
	if(Height == null) {
		Height = 0;
	}
	if(Width == null) {
		Width = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	var _this = flixel_math_FlxRect._pool.get();
	_this.x = 0;
	_this.y = 0;
	_this.width = 0;
	_this.height = 0;
	_this._inPool = false;
	this._rect = _this;
	var point = flixel_math_FlxPoint._pool.get().set(0,0);
	point._inPool = false;
	this._point = point;
	this.path = null;
	this.collisonXDrag = true;
	this.allowCollisions = 4369;
	this.wasTouching = 0;
	this.touching = 0;
	this.health = 1;
	this.maxAngular = 10000;
	this.angularDrag = 0;
	this.angularAcceleration = 0;
	this.angularVelocity = 0;
	this.elasticity = 0;
	this.mass = 1;
	this.immovable = false;
	this.moves = true;
	this.angle = 0;
	this.pixelPerfectPosition = true;
	this.y = 0;
	this.x = 0;
	flixel_FlxBasic.call(this);
	this.set_x(X);
	this.set_y(Y);
	this.set_width(Width);
	this.set_height(Height);
	this.initVars();
};
$hxClasses["flixel.FlxObject"] = flixel_FlxObject;
flixel_FlxObject.__name__ = "flixel.FlxObject";
flixel_FlxObject.separate = function(Object1,Object2) {
	var separatedX = flixel_FlxObject.separateX(Object1,Object2);
	var separatedY = flixel_FlxObject.separateY(Object1,Object2);
	if(!separatedX) {
		return separatedY;
	} else {
		return true;
	}
};
flixel_FlxObject.updateTouchingFlags = function(Object1,Object2) {
	var touchingX = flixel_FlxObject.updateTouchingFlagsX(Object1,Object2);
	var touchingY = flixel_FlxObject.updateTouchingFlagsY(Object1,Object2);
	if(!touchingX) {
		return touchingY;
	} else {
		return true;
	}
};
flixel_FlxObject.computeOverlapX = function(Object1,Object2,checkMaxOverlap) {
	if(checkMaxOverlap == null) {
		checkMaxOverlap = true;
	}
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0 ? obj1delta : -obj1delta;
		var obj2deltaAbs = obj2delta > 0 ? obj2delta : -obj2delta;
		var _this = flixel_FlxObject._firstSeparateFlxRect;
		var X = Object1.x - (obj1delta > 0 ? obj1delta : 0);
		var Y = Object1.last.y;
		var Width = Object1.get_width() + obj1deltaAbs;
		var Height = Object1.get_height();
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.x = X;
		_this.y = Y;
		_this.width = Width;
		_this.height = Height;
		var obj1rect = _this;
		var _this = flixel_FlxObject._secondSeparateFlxRect;
		var X = Object2.x - (obj2delta > 0 ? obj2delta : 0);
		var Y = Object2.last.y;
		var Width = Object2.get_width() + obj2deltaAbs;
		var Height = Object2.get_height();
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.x = X;
		_this.y = Y;
		_this.width = Width;
		_this.height = Height;
		var obj2rect = _this;
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = checkMaxOverlap ? obj1deltaAbs + obj2deltaAbs + flixel_FlxObject.SEPARATE_BIAS : 0;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.get_width() - Object2.x;
				if(checkMaxOverlap && overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) {
					overlap = 0;
				} else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.get_width() - Object2.x;
				if(checkMaxOverlap && -overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) {
					overlap = 0;
				} else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	return overlap;
};
flixel_FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) {
		return false;
	}
	if(Object1.flixelType == 3) {
		var tilemap = Object1;
		return tilemap.overlapsWithCallback(Object2,flixel_FlxObject.separateX);
	}
	if(Object2.flixelType == 3) {
		var tilemap = Object2;
		return tilemap.overlapsWithCallback(Object1,flixel_FlxObject.separateX,true);
	}
	var overlap = flixel_FlxObject.computeOverlapX(Object1,Object2);
	if(overlap != 0) {
		var obj1v = Object1.velocity.x;
		var obj2v = Object2.velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_x(Object1.x - overlap);
			Object2.set_x(Object2.x + overlap);
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0 ? 1 : -1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0 ? 1 : -1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_x(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_x(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_x(Object1.x - overlap);
			Object1.velocity.set_x(obj2v - obj1v * Object1.elasticity);
		} else if(!obj2immovable) {
			Object2.set_x(Object2.x + overlap);
			Object2.velocity.set_x(obj1v - obj2v * Object2.elasticity);
		}
		return true;
	}
	return false;
};
flixel_FlxObject.updateTouchingFlagsX = function(Object1,Object2) {
	if(Object1.flixelType == 3) {
		var tilemap = Object1;
		return tilemap.overlapsWithCallback(Object2,flixel_FlxObject.updateTouchingFlagsX);
	}
	if(Object2.flixelType == 3) {
		var tilemap = Object2;
		return tilemap.overlapsWithCallback(Object1,flixel_FlxObject.updateTouchingFlagsX,true);
	}
	return flixel_FlxObject.computeOverlapX(Object1,Object2,false) != 0;
};
flixel_FlxObject.computeOverlapY = function(Object1,Object2,checkMaxOverlap) {
	if(checkMaxOverlap == null) {
		checkMaxOverlap = true;
	}
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0 ? obj1delta : -obj1delta;
		var obj2deltaAbs = obj2delta > 0 ? obj2delta : -obj2delta;
		var _this = flixel_FlxObject._firstSeparateFlxRect;
		var X = Object1.x;
		var Y = Object1.y - (obj1delta > 0 ? obj1delta : 0);
		var Width = Object1.get_width();
		var Height = Object1.get_height() + obj1deltaAbs;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.x = X;
		_this.y = Y;
		_this.width = Width;
		_this.height = Height;
		var obj1rect = _this;
		var _this = flixel_FlxObject._secondSeparateFlxRect;
		var X = Object2.x;
		var Y = Object2.y - (obj2delta > 0 ? obj2delta : 0);
		var Width = Object2.get_width();
		var Height = Object2.get_height() + obj2deltaAbs;
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.x = X;
		_this.y = Y;
		_this.width = Width;
		_this.height = Height;
		var obj2rect = _this;
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = checkMaxOverlap ? obj1deltaAbs + obj2deltaAbs + flixel_FlxObject.SEPARATE_BIAS : 0;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.get_height() - Object2.y;
				if(checkMaxOverlap && overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) {
					overlap = 0;
				} else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.get_height() - Object2.y;
				if(checkMaxOverlap && -overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) {
					overlap = 0;
				} else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	return overlap;
};
flixel_FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) {
		return false;
	}
	if(Object1.flixelType == 3) {
		var tilemap = Object1;
		return tilemap.overlapsWithCallback(Object2,flixel_FlxObject.separateY);
	}
	if(Object2.flixelType == 3) {
		var tilemap = Object2;
		return tilemap.overlapsWithCallback(Object1,flixel_FlxObject.separateY,true);
	}
	var overlap = flixel_FlxObject.computeOverlapY(Object1,Object2);
	if(overlap != 0) {
		var obj1delta = Object1.y - Object1.last.y;
		var obj2delta = Object2.y - Object2.last.y;
		var obj1v = Object1.velocity.y;
		var obj2v = Object2.velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_y(Object1.y - overlap);
			Object2.set_y(Object2.y + overlap);
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0 ? 1 : -1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0 ? 1 : -1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.set_y(average + obj1velocity * Object1.elasticity);
			Object2.velocity.set_y(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_y(Object1.y - overlap);
			Object1.velocity.set_y(obj2v - obj1v * Object1.elasticity);
			if(Object1.collisonXDrag && Object2.active && Object2.moves && obj1delta > obj2delta) {
				Object1.set_x(Object1.x + (Object2.x - Object2.last.x));
			}
		} else if(!obj2immovable) {
			Object2.set_y(Object2.y + overlap);
			Object2.velocity.set_y(obj1v - obj2v * Object2.elasticity);
			if(Object2.collisonXDrag && Object1.active && Object1.moves && obj1delta < obj2delta) {
				Object2.set_x(Object2.x + (Object1.x - Object1.last.x));
			}
		}
		return true;
	}
	return false;
};
flixel_FlxObject.updateTouchingFlagsY = function(Object1,Object2) {
	if(Object1.flixelType == 3) {
		var tilemap = Object1;
		return tilemap.overlapsWithCallback(Object2,flixel_FlxObject.updateTouchingFlagsY);
	}
	if(Object2.flixelType == 3) {
		var tilemap = Object2;
		return tilemap.overlapsWithCallback(Object1,flixel_FlxObject.updateTouchingFlagsY,true);
	}
	return flixel_FlxObject.computeOverlapY(Object1,Object2,false) != 0;
};
flixel_FlxObject.__super__ = flixel_FlxBasic;
flixel_FlxObject.prototype = $extend(flixel_FlxBasic.prototype,{
	x: null
	,y: null
	,width: null
	,height: null
	,pixelPerfectRender: null
	,pixelPerfectPosition: null
	,angle: null
	,moves: null
	,immovable: null
	,scrollFactor: null
	,velocity: null
	,acceleration: null
	,drag: null
	,maxVelocity: null
	,last: null
	,mass: null
	,elasticity: null
	,angularVelocity: null
	,angularAcceleration: null
	,angularDrag: null
	,maxAngular: null
	,health: null
	,touching: null
	,wasTouching: null
	,allowCollisions: null
	,collisonXDrag: null
	,path: null
	,_point: null
	,_rect: null
	,initVars: function() {
		this.flixelType = 1;
		var X = this.x;
		var Y = this.y;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.last = point;
		var X = 1;
		var Y = 1;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.scrollFactor = point;
		this.pixelPerfectPosition = flixel_FlxObject.defaultPixelPerfectPosition;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.velocity = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.acceleration = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.drag = point;
		var X = 10000;
		var Y = 10000;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.maxVelocity = point;
	}
	,initMotionVars: function() {
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.velocity = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.acceleration = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.drag = point;
		var X = 10000;
		var Y = 10000;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.maxVelocity = point;
	}
	,destroy: function() {
		flixel_FlxBasic.prototype.destroy.call(this);
		this.velocity = flixel_util_FlxDestroyUtil.put(this.velocity);
		this.acceleration = flixel_util_FlxDestroyUtil.put(this.acceleration);
		this.drag = flixel_util_FlxDestroyUtil.put(this.drag);
		this.maxVelocity = flixel_util_FlxDestroyUtil.put(this.maxVelocity);
		this.scrollFactor = flixel_util_FlxDestroyUtil.put(this.scrollFactor);
		this.last = flixel_util_FlxDestroyUtil.put(this.last);
		this._point = flixel_util_FlxDestroyUtil.put(this._point);
		this._rect = flixel_util_FlxDestroyUtil.put(this._rect);
	}
	,update: function(elapsed) {
		this.last.set(this.x,this.y);
		if(this.path != null && this.path.active) {
			this.path.update(elapsed);
		}
		if(this.moves) {
			this.updateMotion(elapsed);
		}
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,updateMotion: function(elapsed) {
		var velocityDelta = 0.5 * (flixel_math_FlxVelocity.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular,elapsed) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		this.set_angle(this.angle + this.angularVelocity * elapsed);
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (flixel_math_FlxVelocity.computeVelocity(this.velocity.x,this.acceleration.x,this.drag.x,this.maxVelocity.x,elapsed) - this.velocity.x);
		var fh = this.velocity;
		fh.set_x(fh.x + velocityDelta);
		var delta = this.velocity.x * elapsed;
		var fh = this.velocity;
		fh.set_x(fh.x + velocityDelta);
		this.set_x(this.x + delta);
		velocityDelta = 0.5 * (flixel_math_FlxVelocity.computeVelocity(this.velocity.y,this.acceleration.y,this.drag.y,this.maxVelocity.y,elapsed) - this.velocity.y);
		var fh = this.velocity;
		fh.set_y(fh.y + velocityDelta);
		delta = this.velocity.y * elapsed;
		var fh = this.velocity;
		fh.set_y(fh.y + velocityDelta);
		this.set_y(this.y + delta);
	}
	,draw: function() {
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) {
			InScreenSpace = false;
		}
		var group = flixel_group_FlxTypedGroup.resolveGroup(ObjectOrGroup);
		if(group != null) {
			return flixel_group_FlxTypedGroup.overlaps($bind(this,this.overlapsCallback),group,0,0,InScreenSpace,Camera);
		}
		if(ObjectOrGroup.flixelType == 3) {
			var tilemap = ObjectOrGroup;
			return tilemap.overlaps(this,InScreenSpace,Camera);
		}
		var object = ObjectOrGroup;
		if(!InScreenSpace) {
			if(object.x + object.get_width() > this.x && object.x < this.x + this.get_width() && object.y + object.get_height() > this.y) {
				return object.y < this.y + this.get_height();
			} else {
				return false;
			}
		}
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		var objectScreenPos = object.getScreenPosition(null,Camera);
		this.getScreenPosition(this._point,Camera);
		if(objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y) {
			return objectScreenPos.y < this._point.y + this.get_height();
		} else {
			return false;
		}
	}
	,overlapsCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlaps(ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) {
			InScreenSpace = false;
		}
		var group = flixel_group_FlxTypedGroup.resolveGroup(ObjectOrGroup);
		if(group != null) {
			return flixel_group_FlxTypedGroup.overlaps($bind(this,this.overlapsAtCallback),group,X,Y,InScreenSpace,Camera);
		}
		if(ObjectOrGroup.flixelType == 3) {
			var tilemap = ObjectOrGroup;
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object = ObjectOrGroup;
		if(!InScreenSpace) {
			if(object.x + object.get_width() > X && object.x < X + this.get_width() && object.y + object.get_height() > Y) {
				return object.y < Y + this.get_height();
			} else {
				return false;
			}
		}
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		var objectScreenPos = object.getScreenPosition(null,Camera);
		this.getScreenPosition(this._point,Camera);
		if(objectScreenPos.x + object.get_width() > this._point.x && objectScreenPos.x < this._point.x + this.get_width() && objectScreenPos.y + object.get_height() > this._point.y) {
			return objectScreenPos.y < this._point.y + this.get_height();
		} else {
			return false;
		}
	}
	,overlapsAtCallback: function(ObjectOrGroup,X,Y,InScreenSpace,Camera) {
		return this.overlapsAt(X,Y,ObjectOrGroup,InScreenSpace,Camera);
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) {
			InScreenSpace = false;
		}
		if(!InScreenSpace) {
			if(point.x >= this.x && point.x < this.x + this.get_width() && point.y >= this.y) {
				return point.y < this.y + this.get_height();
			} else {
				return false;
			}
		}
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		var xPos = point.x - Camera.scroll.x;
		var yPos = point.y - Camera.scroll.y;
		this.getScreenPosition(this._point,Camera);
		if(point._weak) {
			point.put();
		}
		if(xPos >= this._point.x && xPos < this._point.x + this.get_width() && yPos >= this._point.y) {
			return yPos < this._point.y + this.get_height();
		} else {
			return false;
		}
	}
	,inWorldBounds: function() {
		var tmp;
		if(this.x + this.get_width() > flixel_FlxG.worldBounds.x) {
			var _this = flixel_FlxG.worldBounds;
			tmp = this.x < _this.x + _this.width;
		} else {
			tmp = false;
		}
		if(tmp && this.y + this.get_height() > flixel_FlxG.worldBounds.y) {
			var _this = flixel_FlxG.worldBounds;
			return this.y < _this.y + _this.height;
		} else {
			return false;
		}
	}
	,getScreenPosition: function(point,Camera) {
		if(point == null) {
			var point1 = flixel_math_FlxPoint._pool.get().set(0,0);
			point1._inPool = false;
			point = point1;
		}
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		point.set(this.x,this.y);
		if(this.pixelPerfectPosition) {
			point.set_x(Math.floor(point.x));
			point.set_y(Math.floor(point.y));
		}
		var X = Camera.scroll.x * this.scrollFactor.x;
		var Y = Camera.scroll.y * this.scrollFactor.y;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		point.set_x(point.x - X);
		point.set_y(point.y - Y);
		return point;
	}
	,getPosition: function(point) {
		if(point == null) {
			var point1 = flixel_math_FlxPoint._pool.get().set(0,0);
			point1._inPool = false;
			point = point1;
		}
		return point.set(this.x,this.y);
	}
	,getMidpoint: function(point) {
		if(point == null) {
			var point1 = flixel_math_FlxPoint._pool.get().set(0,0);
			point1._inPool = false;
			point = point1;
		}
		return point.set(this.x + this.get_width() * 0.5,this.y + this.get_height() * 0.5);
	}
	,getHitbox: function(rect) {
		if(rect == null) {
			var _this = flixel_math_FlxRect._pool.get();
			var X = 0;
			var Y = 0;
			var Width = 0;
			var Height = 0;
			if(Height == null) {
				Height = 0;
			}
			if(Width == null) {
				Width = 0;
			}
			if(Y == null) {
				Y = 0;
			}
			if(X == null) {
				X = 0;
			}
			_this.x = X;
			_this.y = Y;
			_this.width = Width;
			_this.height = Height;
			var rect1 = _this;
			rect1._inPool = false;
			rect = rect1;
		}
		var X = this.x;
		var Y = this.y;
		var Width = this.get_width();
		var Height = this.get_height();
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		rect.x = X;
		rect.y = Y;
		rect.width = Width;
		rect.height = Height;
		return rect;
	}
	,reset: function(X,Y) {
		this.touching = 0;
		this.wasTouching = 0;
		this.setPosition(X,Y);
		this.last.set(this.x,this.y);
		this.velocity.set();
		this.revive();
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		this.getScreenPosition(this._point,Camera);
		var point = this._point;
		var width = this.get_width();
		var height = this.get_height();
		if(height == null) {
			height = 0;
		}
		if(width == null) {
			width = 0;
		}
		if(point.x + width > Camera.viewOffsetX && point.x < Camera.viewOffsetWidth && point.y + height > Camera.viewOffsetY) {
			return point.y < Camera.viewOffsetHeight;
		} else {
			return false;
		}
	}
	,isPixelPerfectRender: function(Camera) {
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		if(this.pixelPerfectRender == null) {
			return Camera.pixelPerfectRender;
		} else {
			return this.pixelPerfectRender;
		}
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,justTouched: function(Direction) {
		if((this.touching & Direction) > 0) {
			return (this.wasTouching & Direction) <= 0;
		} else {
			return false;
		}
	}
	,hurt: function(Damage) {
		this.health -= Damage;
		if(this.health <= 0) {
			this.kill();
		}
	}
	,screenCenter: function(axes) {
		if(axes == null) {
			axes = flixel_util_FlxAxes.XY;
		}
		if(axes != flixel_util_FlxAxes.Y) {
			this.set_x(flixel_FlxG.width / 2 - this.get_width() / 2);
		}
		if(axes != flixel_util_FlxAxes.X) {
			this.set_y(flixel_FlxG.height / 2 - this.get_height() / 2);
		}
		return this;
	}
	,setPosition: function(X,Y) {
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		this.set_x(X);
		this.set_y(Y);
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,getBoundingBox: function(camera) {
		this.getScreenPosition(this._point,camera);
		var _this = this._rect;
		var X = this._point.x;
		var Y = this._point.y;
		var Width = this.get_width();
		var Height = this.get_height();
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.x = X;
		_this.y = Y;
		_this.width = Width;
		_this.height = Height;
		this._rect = camera.transformRect(this._rect);
		if(this.isPixelPerfectRender(camera)) {
			var _this = this._rect;
			_this.x = Math.floor(_this.x);
			_this.y = Math.floor(_this.y);
			_this.width = Math.floor(_this.width);
			_this.height = Math.floor(_this.height);
		}
		return this._rect;
	}
	,toString: function() {
		var value = this.x;
		var _this = flixel_util_LabelValuePair._pool.get();
		_this.label = "x";
		_this.value = value;
		var value = this.y;
		var _this1 = flixel_util_LabelValuePair._pool.get();
		_this1.label = "y";
		_this1.value = value;
		var value = this.get_width();
		var _this2 = flixel_util_LabelValuePair._pool.get();
		_this2.label = "w";
		_this2.value = value;
		var value = this.get_height();
		var _this3 = flixel_util_LabelValuePair._pool.get();
		_this3.label = "h";
		_this3.value = value;
		var value = this.visible;
		var _this4 = flixel_util_LabelValuePair._pool.get();
		_this4.label = "visible";
		_this4.value = value;
		var value = this.velocity;
		var _this5 = flixel_util_LabelValuePair._pool.get();
		_this5.label = "velocity";
		_this5.value = value;
		return flixel_util_FlxStringUtil.getDebugString([_this,_this1,_this2,_this3,_this4,_this5]);
	}
	,set_x: function(NewX) {
		return this.x = NewX;
	}
	,set_y: function(NewY) {
		return this.y = NewY;
	}
	,set_width: function(Width) {
		return this.width = Width;
	}
	,set_height: function(Height) {
		return this.height = Height;
	}
	,get_width: function() {
		return this.width;
	}
	,get_height: function() {
		return this.height;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,set_solid: function(Solid) {
		this.set_allowCollisions(Solid ? 4369 : 0);
		return Solid;
	}
	,set_angle: function(Value) {
		return this.angle = Value;
	}
	,set_moves: function(Value) {
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		return this.immovable = Value;
	}
	,set_pixelPerfectRender: function(Value) {
		return this.pixelPerfectRender = Value;
	}
	,set_allowCollisions: function(Value) {
		return this.allowCollisions = Value;
	}
	,set_path: function(path) {
		if(this.path == path) {
			return path;
		}
		if(this.path != null) {
			this.path.object = null;
		}
		if(path != null) {
			path.object = this;
		}
		return this.path = path;
	}
	,__class__: flixel_FlxObject
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{set_path:"set_path",set_allowCollisions:"set_allowCollisions",set_solid:"set_solid",get_solid:"get_solid",set_immovable:"set_immovable",set_moves:"set_moves",set_angle:"set_angle",set_pixelPerfectRender:"set_pixelPerfectRender",set_height:"set_height",get_height:"get_height",set_width:"set_width",get_width:"get_width",set_y:"set_y",set_x:"set_x"})
});
var flixel_FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	this._facingFlip = new haxe_ds_IntMap();
	this._angleChanged = true;
	this._cosAngle = 1;
	this._sinAngle = 0;
	this._facingVerticalMult = 1;
	this._facingHorizontalMult = 1;
	this.useColorTransform = false;
	this.color = 16777215;
	this.flipY = false;
	this.flipX = false;
	this.facing = 16;
	this.alpha = 1.0;
	this.bakedRotationAngle = 0;
	this.numFrames = 0;
	this.frameHeight = 0;
	this.frameWidth = 0;
	this.dirty = true;
	this.antialiasing = false;
	this.useFramePixels = true;
	flixel_FlxObject.call(this,X,Y);
	this.set_useFramePixels(flixel_FlxG.renderBlit);
	if(SimpleGraphic != null) {
		this.loadGraphic(SimpleGraphic);
	}
};
$hxClasses["flixel.FlxSprite"] = flixel_FlxSprite;
flixel_FlxSprite.__name__ = "flixel.FlxSprite";
flixel_FlxSprite.__super__ = flixel_FlxObject;
flixel_FlxSprite.prototype = $extend(flixel_FlxObject.prototype,{
	animation: null
	,framePixels: null
	,useFramePixels: null
	,antialiasing: null
	,dirty: null
	,frame: null
	,frameWidth: null
	,frameHeight: null
	,numFrames: null
	,frames: null
	,graphic: null
	,bakedRotationAngle: null
	,alpha: null
	,facing: null
	,flipX: null
	,flipY: null
	,origin: null
	,offset: null
	,scale: null
	,blend: null
	,color: null
	,colorTransform: null
	,useColorTransform: null
	,clipRect: null
	,shader: null
	,_frame: null
	,_frameGraphic: null
	,_facingHorizontalMult: null
	,_facingVerticalMult: null
	,_flashPoint: null
	,_flashRect: null
	,_flashRect2: null
	,_flashPointZero: null
	,_matrix: null
	,_halfSize: null
	,_sinAngle: null
	,_cosAngle: null
	,_angleChanged: null
	,_facingFlip: null
	,initVars: function() {
		flixel_FlxObject.prototype.initVars.call(this);
		this.animation = new flixel_animation_FlxAnimationController(this);
		this._flashPoint = new openfl_geom_Point();
		this._flashRect = new openfl_geom_Rectangle();
		this._flashRect2 = new openfl_geom_Rectangle();
		this._flashPointZero = new openfl_geom_Point();
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.offset = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.origin = point;
		var X = 1;
		var Y = 1;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.scale = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this._halfSize = point;
		this._matrix = new flixel_math_FlxMatrix();
		this.colorTransform = new openfl_geom_ColorTransform();
	}
	,destroy: function() {
		flixel_FlxObject.prototype.destroy.call(this);
		this.animation = flixel_util_FlxDestroyUtil.destroy(this.animation);
		this.offset = flixel_util_FlxDestroyUtil.put(this.offset);
		this.origin = flixel_util_FlxDestroyUtil.put(this.origin);
		this.scale = flixel_util_FlxDestroyUtil.put(this.scale);
		this._halfSize = flixel_util_FlxDestroyUtil.put(this._halfSize);
		this.framePixels = flixel_util_FlxDestroyUtil.dispose(this.framePixels);
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this._matrix = null;
		this.colorTransform = null;
		this.set_blend(null);
		this.set_frames(null);
		this.set_graphic(null);
		this._frame = flixel_util_FlxDestroyUtil.destroy(this._frame);
		this._frameGraphic = flixel_util_FlxDestroyUtil.destroy(this._frameGraphic);
		this.shader = null;
	}
	,clone: function() {
		return new flixel_FlxSprite().loadGraphicFromSprite(this);
	}
	,loadGraphicFromSprite: function(Sprite) {
		this.set_frames(Sprite.frames);
		this.bakedRotationAngle = Sprite.bakedRotationAngle;
		if(this.bakedRotationAngle > 0) {
			this.set_width(Sprite.get_width());
			this.set_height(Sprite.get_height());
			this.centerOffsets();
		}
		this.set_antialiasing(Sprite.antialiasing);
		this.animation.copyFrom(Sprite.animation);
		this.graphicLoaded();
		this.set_clipRect(Sprite.clipRect);
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) {
			Unique = false;
		}
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Animated == null) {
			Animated = false;
		}
		var graph = flixel_FlxG.bitmap.add(Graphic,Unique,Key);
		if(graph == null) {
			return this;
		}
		if(Width == 0) {
			Width = Animated ? graph.height : graph.width;
			if(Width > graph.width) {
				Width = graph.width;
			}
		}
		if(Height == 0) {
			Height = Animated ? Width : graph.height;
			if(Height > graph.height) {
				Height = graph.height;
			}
		}
		if(Animated) {
			var X = Width;
			var Y = Height;
			if(Y == null) {
				Y = 0;
			}
			if(X == null) {
				X = 0;
			}
			var point = flixel_math_FlxPoint._pool.get().set(X,Y);
			point._inPool = false;
			this.set_frames(flixel_graphics_frames_FlxTileFrames.fromGraphic(graph,point));
		} else {
			this.set_frames(graph.get_imageFrame());
		}
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) {
			AutoBuffer = false;
		}
		if(AntiAliasing == null) {
			AntiAliasing = false;
		}
		if(Frame == null) {
			Frame = -1;
		}
		if(Rotations == null) {
			Rotations = 16;
		}
		var brushGraphic = flixel_FlxG.bitmap.add(Graphic,false,Key);
		if(brushGraphic == null) {
			return this;
		}
		var brush = brushGraphic.bitmap;
		var key = brushGraphic.key;
		if(Frame >= 0) {
			var brushSize = brush.height;
			var framesNum = brush.width / brushSize | 0;
			if(framesNum <= Frame) {
				Frame %= framesNum;
			}
			key += ":" + Frame;
			var full = brush;
			brush = new openfl_display_BitmapData(brushSize,brushSize,true,0);
			this._flashRect.setTo(Frame * brushSize,0,brushSize,brushSize);
			brush.copyPixels(full,this._flashRect,this._flashPointZero);
		}
		key += ":" + Rotations + ":" + (AutoBuffer == null ? "null" : "" + AutoBuffer);
		var tempGraph = flixel_FlxG.bitmap._cache.h[key];
		if(tempGraph == null) {
			var bitmap = flixel_util_FlxBitmapDataUtil.generateRotations(brush,Rotations,AntiAliasing,AutoBuffer);
			tempGraph = flixel_graphics_FlxGraphic.fromBitmapData(bitmap,false,key);
		}
		var max = brush.height > brush.width ? brush.height : brush.width;
		if(AutoBuffer) {
			max = max * 1.5 | 0;
		}
		var X = max;
		var Y = max;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.set_frames(flixel_graphics_frames_FlxTileFrames.fromGraphic(tempGraph,point));
		if(AutoBuffer) {
			this.set_width(brush.width);
			this.set_height(brush.height);
			this.centerOffsets();
		}
		this.bakedRotationAngle = 360 / Rotations;
		this.animation.createPrerotated();
		return this;
	}
	,loadRotatedFrame: function(Frame,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) {
			AutoBuffer = false;
		}
		if(AntiAliasing == null) {
			AntiAliasing = false;
		}
		if(Rotations == null) {
			Rotations = 16;
		}
		var key = Frame.parent.key;
		if(Frame.name != null) {
			key += ":" + Frame.name;
		} else {
			var _this = Frame.frame;
			var value = _this.x;
			var _this1 = flixel_util_LabelValuePair._pool.get();
			_this1.label = "x";
			_this1.value = value;
			var value = _this.y;
			var _this2 = flixel_util_LabelValuePair._pool.get();
			_this2.label = "y";
			_this2.value = value;
			var value = _this.width;
			var _this3 = flixel_util_LabelValuePair._pool.get();
			_this3.label = "w";
			_this3.value = value;
			var value = _this.height;
			var _this = flixel_util_LabelValuePair._pool.get();
			_this.label = "h";
			_this.value = value;
			key += ":" + flixel_util_FlxStringUtil.getDebugString([_this1,_this2,_this3,_this]);
		}
		var graphic = flixel_FlxG.bitmap._cache.h[key];
		if(graphic == null) {
			graphic = flixel_graphics_FlxGraphic.fromBitmapData(Frame.paint(),false,key);
		}
		return this.loadRotatedGraphic(graphic,Rotations,-1,AntiAliasing,AutoBuffer);
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) {
			Unique = false;
		}
		if(Color == null) {
			Color = -1;
		}
		var graph = flixel_FlxG.bitmap.create(Width,Height,Color,Unique,Key);
		this.set_frames(graph.get_imageFrame());
		return this;
	}
	,graphicLoaded: function() {
	}
	,resetSize: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetFrameSize: function() {
		if(this.frame != null) {
			this.frameWidth = this.frame.sourceSize.x | 0;
			this.frameHeight = this.frame.sourceSize.y | 0;
		}
		this._halfSize.set(0.5 * this.frameWidth,0.5 * this.frameHeight);
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetSizeFromFrame: function() {
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,resetFrame: function() {
		this.set_frame(this.frame);
	}
	,setGraphicSize: function(Width,Height) {
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Width <= 0 && Height <= 0) {
			return;
		}
		var newScaleX = Width / this.frameWidth;
		var newScaleY = Height / this.frameHeight;
		this.scale.set(newScaleX,newScaleY);
		if(Width <= 0) {
			this.scale.set_x(newScaleY);
		} else if(Height <= 0) {
			this.scale.set_y(newScaleX);
		}
	}
	,updateHitbox: function() {
		this.set_width(Math.abs(this.scale.x) * this.frameWidth);
		this.set_height(Math.abs(this.scale.y) * this.frameHeight);
		this.offset.set(-0.5 * (this.get_width() - this.frameWidth),-0.5 * (this.get_height() - this.frameHeight));
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,resetHelpers: function() {
		if(this.frame != null) {
			this.frameWidth = this.frame.sourceSize.x | 0;
			this.frameHeight = this.frame.sourceSize.y | 0;
		}
		this._halfSize.set(0.5 * this.frameWidth,0.5 * this.frameHeight);
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		if(this.graphic != null) {
			this._flashRect2.width = this.graphic.width;
			this._flashRect2.height = this.graphic.height;
		}
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		if(flixel_FlxG.renderBlit) {
			this.dirty = true;
			this.updateFramePixels();
		}
	}
	,update: function(elapsed) {
		flixel_FlxObject.prototype.update.call(this,elapsed);
		this.updateAnimation(elapsed);
	}
	,updateAnimation: function(elapsed) {
		this.animation.update(elapsed);
	}
	,checkEmptyFrame: function() {
		if(this._frame == null) {
			this.loadGraphic("flixel/images/logo/default.png");
		}
	}
	,draw: function() {
		this.checkEmptyFrame();
		if(this.alpha == 0 || this._frame.type == 2) {
			return;
		}
		if(this.dirty) {
			this.calcFrame(this.useFramePixels);
		}
		var _g = 0;
		var _g1 = this.get_cameras();
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(!camera.visible || !camera.exists || !this.isOnScreen(camera)) {
				continue;
			}
			this.getScreenPosition(this._point,camera).subtractPoint(this.offset);
			if(this.isSimpleRender(camera)) {
				this.drawSimple(camera);
			} else {
				this.drawComplex(camera);
			}
		}
	}
	,drawSimple: function(camera) {
		if(this.isPixelPerfectRender(camera)) {
			var _this = this._point;
			_this.set_x(Math.floor(_this.x));
			_this.set_y(Math.floor(_this.y));
		}
		var _this = this._point;
		var FlashPoint = this._flashPoint;
		if(FlashPoint == null) {
			FlashPoint = new openfl_geom_Point();
		}
		FlashPoint.x = _this.x;
		FlashPoint.y = _this.y;
		camera.copyPixels(this._frame,this.framePixels,this._flashRect,this._flashPoint,this.colorTransform,this.blend,this.antialiasing);
	}
	,drawComplex: function(camera) {
		var doFlipX = this.flipX != this._frame.flipX;
		var doFlipY = this.flipY != this._frame.flipY;
		this._frame.prepareMatrix(this._matrix,0,this.animation._curAnim != null ? doFlipX != this.animation._curAnim.flipX : doFlipX,this.animation._curAnim != null ? doFlipY != this.animation._curAnim.flipY : doFlipY);
		this._matrix.translate(-this.origin.x,-this.origin.y);
		this._matrix.scale(this.scale.x,this.scale.y);
		if(this.bakedRotationAngle <= 0) {
			if(this._angleChanged) {
				var radians = this.angle * (Math.PI / 180);
				this._sinAngle = Math.sin(radians);
				this._cosAngle = Math.cos(radians);
				this._angleChanged = false;
			}
			if(this.angle != 0) {
				var _this = this._matrix;
				var cos = this._cosAngle;
				var sin = this._sinAngle;
				var a1 = _this.a * cos - _this.b * sin;
				_this.b = _this.a * sin + _this.b * cos;
				_this.a = a1;
				var c1 = _this.c * cos - _this.d * sin;
				_this.d = _this.c * sin + _this.d * cos;
				_this.c = c1;
				var tx1 = _this.tx * cos - _this.ty * sin;
				_this.ty = _this.tx * sin + _this.ty * cos;
				_this.tx = tx1;
			}
		}
		var _this = this._point;
		var X = this.origin.x;
		var Y = this.origin.y;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		_this.set_x(_this.x + X);
		_this.set_y(_this.y + Y);
		this._matrix.translate(this._point.x,this._point.y);
		if(this.isPixelPerfectRender(camera)) {
			this._matrix.tx = Math.floor(this._matrix.tx);
			this._matrix.ty = Math.floor(this._matrix.ty);
		}
		camera.drawPixels(this._frame,this.framePixels,this._matrix,this.colorTransform,this.blend,this.antialiasing,this.shader);
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		Brush.drawFrame();
		if(this.graphic == null || Brush.graphic == null) {
			throw haxe_Exception.thrown("Cannot stamp to or from a FlxSprite with no graphics.");
		}
		var bitmapData = Brush.framePixels;
		if(this.isSimpleRenderBlit()) {
			this._flashPoint.x = X + this.frame.frame.x;
			this._flashPoint.y = Y + this.frame.frame.y;
			this._flashRect2.width = bitmapData.width;
			this._flashRect2.height = bitmapData.height;
			this.graphic.bitmap.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this.graphic.bitmap.width;
			this._flashRect2.height = this.graphic.bitmap.height;
		} else {
			this._matrix.identity();
			this._matrix.translate(-Brush.origin.x,-Brush.origin.y);
			this._matrix.scale(Brush.scale.x,Brush.scale.y);
			if(Brush.angle != 0) {
				this._matrix.rotate(Brush.angle * (Math.PI / 180));
			}
			this._matrix.translate(X + this.frame.frame.x + Brush.origin.x,Y + this.frame.frame.y + Brush.origin.y);
			var brushBlend = Brush.blend;
			this.graphic.bitmap.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		}
		if(flixel_FlxG.renderBlit) {
			this.dirty = true;
			this.calcFrame();
		}
	}
	,drawFrame: function(Force) {
		if(Force == null) {
			Force = false;
		}
		if(flixel_FlxG.renderBlit) {
			if(Force || this.dirty) {
				this.dirty = true;
				this.calcFrame();
			}
		} else {
			this.dirty = true;
			this.calcFrame(true);
		}
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) {
			AdjustPosition = false;
		}
		this.offset.set_x((this.frameWidth - this.get_width()) * 0.5);
		this.offset.set_y((this.frameHeight - this.get_height()) * 0.5);
		if(AdjustPosition) {
			this.set_x(this.x + this.offset.x);
			this.set_y(this.y + this.offset.y);
		}
	}
	,centerOrigin: function() {
		this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) {
			FetchPositions = false;
		}
		var positions = flixel_util_FlxBitmapDataUtil.replaceColor(this.graphic.bitmap,Color,NewColor,FetchPositions);
		if(positions != null) {
			this.dirty = true;
		}
		return positions;
	}
	,setColorTransform: function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
		if(alphaOffset == null) {
			alphaOffset = 0;
		}
		if(blueOffset == null) {
			blueOffset = 0;
		}
		if(greenOffset == null) {
			greenOffset = 0;
		}
		if(redOffset == null) {
			redOffset = 0;
		}
		if(alphaMultiplier == null) {
			alphaMultiplier = 1.0;
		}
		if(blueMultiplier == null) {
			blueMultiplier = 1.0;
		}
		if(greenMultiplier == null) {
			greenMultiplier = 1.0;
		}
		if(redMultiplier == null) {
			redMultiplier = 1.0;
		}
		var color = flixel_util_FlxColor._new();
		var Alpha = 1;
		if(Alpha == null) {
			Alpha = 1;
		}
		var Value = Math.round(redMultiplier * 255);
		color &= -16711681;
		color |= (Value > 255 ? 255 : Value < 0 ? 0 : Value) << 16;
		var Value = Math.round(greenMultiplier * 255);
		color &= -65281;
		color |= (Value > 255 ? 255 : Value < 0 ? 0 : Value) << 8;
		var Value = Math.round(blueMultiplier * 255);
		color &= -256;
		color |= Value > 255 ? 255 : Value < 0 ? 0 : Value;
		var Value = Math.round(Alpha * 255);
		color &= 16777215;
		color |= (Value > 255 ? 255 : Value < 0 ? 0 : Value) << 24;
		this.set_color(color & 16777215);
		this.set_alpha(alphaMultiplier);
		flixel_util_FlxColorTransformUtil.setMultipliers(this.colorTransform,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
		flixel_util_FlxColorTransformUtil.setOffsets(this.colorTransform,redOffset,greenOffset,blueOffset,alphaOffset);
		this.useColorTransform = this.alpha != 1 || this.color != 16777215 || flixel_util_FlxColorTransformUtil.hasRGBOffsets(this.colorTransform);
		this.dirty = true;
	}
	,updateColorTransform: function() {
		if(this.colorTransform == null) {
			this.colorTransform = new openfl_geom_ColorTransform();
		}
		this.useColorTransform = this.alpha != 1 || this.color != 16777215;
		if(this.useColorTransform) {
			flixel_util_FlxColorTransformUtil.setMultipliers(this.colorTransform,(this.color >> 16 & 255) / 255,(this.color >> 8 & 255) / 255,(this.color & 255) / 255,this.alpha);
		} else {
			flixel_util_FlxColorTransformUtil.setMultipliers(this.colorTransform,1,1,1,1);
		}
		this.dirty = true;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) {
			Mask = 255;
		}
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		this.getScreenPosition(this._point,Camera);
		this._point.subtractPoint(this.offset);
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(point._weak) {
			point.put();
		}
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) {
			return false;
		} else {
			var frameData = this.updateFramePixels();
			var pixelColor = frameData.getPixel32(this._flashPoint.x | 0,this._flashPoint.y | 0);
			return (pixelColor >> 24 & 255) * this.alpha >= Mask;
		}
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) {
			RunOnCpp = false;
		}
		this.checkEmptyFrame();
		if(flixel_FlxG.renderTile && !RunOnCpp) {
			return;
		}
		this.updateFramePixels();
	}
	,updateFramePixels: function() {
		if(this._frame == null || !this.dirty) {
			return this.framePixels;
		}
		if(flixel_FlxG.renderTile && this._frameGraphic != null) {
			this.dirty = false;
			return this.framePixels;
		}
		var doFlipX = this.flipX != this._frame.flipX;
		var doFlipX1 = this.animation._curAnim != null ? doFlipX != this.animation._curAnim.flipX : doFlipX;
		var doFlipY = this.flipY != this._frame.flipY;
		var doFlipY1 = this.animation._curAnim != null ? doFlipY != this.animation._curAnim.flipY : doFlipY;
		if(!doFlipX1 && !doFlipY1 && this._frame.type == 0) {
			this.framePixels = this._frame.paint(this.framePixels,this._flashPointZero,false,true);
		} else {
			this.framePixels = this._frame.paintRotatedAndFlipped(this.framePixels,this._flashPointZero,0,doFlipX1,doFlipY1,false,true);
		}
		if(this.useColorTransform) {
			this.framePixels.colorTransform(this._flashRect,this.colorTransform);
		}
		if(flixel_FlxG.renderTile && this.useFramePixels) {
			this._frameGraphic = flixel_util_FlxDestroyUtil.destroy(this._frameGraphic);
			this._frameGraphic = flixel_graphics_FlxGraphic.fromBitmapData(this.framePixels,false,null,false);
			this._frame = this._frameGraphic.get_imageFrame().get_frame().copyTo(this._frame);
		}
		this.dirty = false;
		return this.framePixels;
	}
	,getGraphicMidpoint: function(point) {
		if(point == null) {
			var point1 = flixel_math_FlxPoint._pool.get().set(0,0);
			point1._inPool = false;
			point = point1;
		}
		return point.set(this.x + this.frameWidth * 0.5,this.y + this.frameHeight * 0.5);
	}
	,isOnScreen: function(Camera) {
		if(Camera == null) {
			Camera = flixel_FlxG.camera;
		}
		var minX = this.x - this.offset.x - Camera.scroll.x * this.scrollFactor.x;
		var minY = this.y - this.offset.y - Camera.scroll.y * this.scrollFactor.y;
		if((this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1) {
			this._point.set(minX,minY);
			var point = this._point;
			var width = this.frameWidth;
			var height = this.frameHeight;
			if(height == null) {
				height = 0;
			}
			if(width == null) {
				width = 0;
			}
			if(point.x + width > Camera.viewOffsetX && point.x < Camera.viewOffsetWidth && point.y + height > Camera.viewOffsetY) {
				return point.y < Camera.viewOffsetHeight;
			} else {
				return false;
			}
		}
		var radiusX = this._halfSize.x;
		var radiusY = this._halfSize.y;
		var ox = this.origin.x;
		if(ox != radiusX) {
			var x1 = Math.abs(ox);
			var x2 = Math.abs(this.frameWidth - ox);
			radiusX = Math.max(x2,x1);
		}
		var oy = this.origin.y;
		if(oy != radiusY) {
			var y1 = Math.abs(oy);
			var y2 = Math.abs(this.frameHeight - oy);
			radiusY = Math.max(y2,y1);
		}
		radiusX *= Math.abs(this.scale.x);
		radiusY *= Math.abs(this.scale.y);
		var radius = Math.max(radiusX,radiusY);
		radius *= 1.41421356237;
		minX += ox - radius;
		minY += oy - radius;
		var doubleRadius = 2 * radius;
		this._point.set(minX,minY);
		var point = this._point;
		var width = doubleRadius;
		var height = doubleRadius;
		if(height == null) {
			height = 0;
		}
		if(width == null) {
			width = 0;
		}
		if(point.x + width > Camera.viewOffsetX && point.x < Camera.viewOffsetWidth && point.y + height > Camera.viewOffsetY) {
			return point.y < Camera.viewOffsetHeight;
		} else {
			return false;
		}
	}
	,isSimpleRender: function(camera) {
		if(flixel_FlxG.renderTile) {
			return false;
		}
		return this.isSimpleRenderBlit(camera);
	}
	,isSimpleRenderBlit: function(camera) {
		var result = (this.angle == 0 || this.bakedRotationAngle > 0) && this.scale.x == 1 && this.scale.y == 1 && this.blend == null;
		result = result && (camera != null ? this.isPixelPerfectRender(camera) : this.pixelPerfectRender);
		return result;
	}
	,setFacingFlip: function(Direction,FlipX,FlipY) {
		this._facingFlip.h[Direction] = { x : FlipX, y : FlipY};
	}
	,setFrames: function(Frames,saveAnimations) {
		if(saveAnimations == null) {
			saveAnimations = true;
		}
		if(saveAnimations) {
			var animations = this.animation._animations;
			var reverse = false;
			var index = 0;
			var frameIndex = this.animation.frameIndex;
			var currName = null;
			if(this.animation._curAnim != null) {
				reverse = this.animation._curAnim.reversed;
				index = this.animation._curAnim.curFrame;
				currName = this.animation._curAnim.name;
			}
			this.animation._animations = null;
			this.set_frames(Frames);
			this.set_frame(this.frames.frames[frameIndex]);
			this.animation._animations = animations;
			if(currName != null) {
				this.animation.play(currName,false,reverse,index);
			}
		} else {
			this.set_frames(Frames);
		}
		return this;
	}
	,get_pixels: function() {
		if(this.graphic == null) {
			return null;
		} else {
			return this.graphic.bitmap;
		}
	}
	,set_pixels: function(Pixels) {
		var key = flixel_FlxG.bitmap.findKeyForBitmap(Pixels);
		if(key == null) {
			key = flixel_FlxG.bitmap.getUniqueKey();
			this.set_graphic(flixel_FlxG.bitmap.add(Pixels,false,key));
		} else {
			this.set_graphic(flixel_FlxG.bitmap._cache.h[key]);
		}
		this.set_frames(this.graphic.get_imageFrame());
		return Pixels;
	}
	,set_frame: function(Value) {
		this.frame = Value;
		if(this.frame != null) {
			if(this.frame != null) {
				this.frameWidth = this.frame.sourceSize.x | 0;
				this.frameHeight = this.frame.sourceSize.y | 0;
			}
			this._halfSize.set(0.5 * this.frameWidth,0.5 * this.frameHeight);
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = this.frameWidth;
			this._flashRect.height = this.frameHeight;
			this.dirty = true;
		} else if(this.frames != null && this.frames.frames != null && this.numFrames > 0) {
			this.frame = this.frames.frames[0];
			this.dirty = true;
		} else {
			return null;
		}
		if(flixel_FlxG.renderTile) {
			this._frameGraphic = flixel_util_FlxDestroyUtil.destroy(this._frameGraphic);
		}
		if(this.clipRect != null) {
			this._frame = this.frame.clipTo(this.clipRect,this._frame);
		} else {
			this._frame = this.frame.copyTo(this._frame);
		}
		return this.frame;
	}
	,set_facing: function(Direction) {
		var flip = this._facingFlip.h[Direction];
		if(flip != null) {
			this.set_flipX(flip.x);
			this.set_flipY(flip.y);
		}
		return this.facing = Direction;
	}
	,set_alpha: function(Alpha) {
		if(this.alpha == Alpha) {
			return Alpha;
		}
		var lowerBound = Alpha < 0 ? 0 : Alpha;
		this.alpha = lowerBound > 1 ? 1 : lowerBound;
		this.updateColorTransform();
		return this.alpha;
	}
	,set_color: function(Color) {
		if(this.color == Color) {
			return Color;
		}
		this.color = Color;
		this.updateColorTransform();
		return this.color;
	}
	,set_angle: function(Value) {
		var newAngle = this.angle != Value;
		var ret = flixel_FlxObject.prototype.set_angle.call(this,Value);
		if(newAngle) {
			this._angleChanged = true;
			this.animation.update(0);
		}
		return ret;
	}
	,updateTrig: function() {
		if(this._angleChanged) {
			var radians = this.angle * (Math.PI / 180);
			this._sinAngle = Math.sin(radians);
			this._cosAngle = Math.cos(radians);
			this._angleChanged = false;
		}
	}
	,set_blend: function(Value) {
		return this.blend = Value;
	}
	,set_graphic: function(Value) {
		var oldGraphic = this.graphic;
		if(this.graphic != Value && Value != null) {
			Value.set_useCount(Value.get_useCount() + 1);
		}
		if(oldGraphic != null && oldGraphic != Value) {
			oldGraphic.set_useCount(oldGraphic.get_useCount() - 1);
		}
		return this.graphic = Value;
	}
	,set_clipRect: function(rect) {
		if(rect != null) {
			rect.x = Math.round(rect.x);
			rect.y = Math.round(rect.y);
			rect.width = Math.round(rect.width);
			rect.height = Math.round(rect.height);
			this.clipRect = rect;
		} else {
			this.clipRect = null;
		}
		if(this.frames != null) {
			this.set_frame(this.frames.frames[this.animation.frameIndex]);
		}
		return rect;
	}
	,set_frames: function(Frames) {
		if(this.animation != null) {
			this.animation.destroyAnimations();
		}
		if(Frames != null) {
			this.set_graphic(Frames.parent);
			this.frames = Frames;
			this.set_frame(this.frames.frames[0]);
			this.numFrames = this.frames.frames.length;
			this.resetHelpers();
			this.bakedRotationAngle = 0;
			this.animation.set_frameIndex(0);
			this.graphicLoaded();
		} else {
			this.frames = null;
			this.set_frame(null);
			this.set_graphic(null);
		}
		return Frames;
	}
	,set_flipX: function(Value) {
		if(flixel_FlxG.renderTile) {
			this._facingHorizontalMult = Value ? -1 : 1;
		}
		this.dirty = this.flipX != Value || this.dirty;
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(flixel_FlxG.renderTile) {
			this._facingVerticalMult = Value ? -1 : 1;
		}
		this.dirty = this.flipY != Value || this.dirty;
		return this.flipY = Value;
	}
	,set_antialiasing: function(value) {
		return this.antialiasing = value;
	}
	,set_useFramePixels: function(value) {
		if(flixel_FlxG.renderTile) {
			if(value != this.useFramePixels) {
				this.useFramePixels = value;
				this.set_frame(this.frame);
				if(value) {
					this.updateFramePixels();
				}
			}
			return value;
		} else {
			this.useFramePixels = true;
			return true;
		}
	}
	,checkFlipX: function() {
		var doFlipX = this.flipX != this._frame.flipX;
		if(this.animation._curAnim != null) {
			return doFlipX != this.animation._curAnim.flipX;
		}
		return doFlipX;
	}
	,checkFlipY: function() {
		var doFlipY = this.flipY != this._frame.flipY;
		if(this.animation._curAnim != null) {
			return doFlipY != this.animation._curAnim.flipY;
		}
		return doFlipY;
	}
	,__class__: flixel_FlxSprite
	,__properties__: $extend(flixel_FlxObject.prototype.__properties__,{set_clipRect:"set_clipRect",set_color:"set_color",set_blend:"set_blend",set_flipY:"set_flipY",set_flipX:"set_flipX",set_facing:"set_facing",set_alpha:"set_alpha",set_graphic:"set_graphic",set_frames:"set_frames",set_frame:"set_frame",set_pixels:"set_pixels",get_pixels:"get_pixels",set_antialiasing:"set_antialiasing",set_useFramePixels:"set_useFramePixels"})
});
var flixel_group_FlxTypedSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) {
		MaxSize = 0;
	}
	if(Y == null) {
		Y = 0;
	}
	if(X == null) {
		X = 0;
	}
	this._skipTransformChildren = false;
	this.directAlpha = false;
	flixel_FlxSprite.call(this,X,Y);
	this.group = new flixel_group_FlxTypedGroup(MaxSize);
	this._sprites = this.group.members;
};
$hxClasses["flixel.group.FlxTypedSpriteGroup"] = flixel_group_FlxTypedSpriteGroup;
flixel_group_FlxTypedSpriteGroup.__name__ = "flixel.group.FlxTypedSpriteGroup";
flixel_group_FlxTypedSpriteGroup.__super__ = flixel_FlxSprite;
flixel_group_FlxTypedSpriteGroup.prototype = $extend(flixel_FlxSprite.prototype,{
	transformChildren_flixel_math_FlxRect: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_flash_display_BlendMode: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_flixel_FlxCamera: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_flixel_math_FlxPoint: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_Array_flixel_FlxCamera: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_Int: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,transformChildren_Float: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,multiTransformChildren_Float: function(FunctionArray,ValueArray) {
		if(this.group == null) {
			return;
		}
		var numProps = FunctionArray.length;
		if(numProps > ValueArray.length) {
			return;
		}
		var lambda;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists) {
				var _g2 = 0;
				var _g3 = numProps;
				while(_g2 < _g3) {
					var i = _g2++;
					lambda = FunctionArray[i];
					lambda(sprite,ValueArray[i]);
				}
			}
		}
	}
	,transformChildren_Bool: function(Function1,Value) {
		if(this.group == null) {
			return;
		}
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				Function1(sprite,Value);
			}
		}
	}
	,group: null
	,directAlpha: null
	,_skipTransformChildren: null
	,_sprites: null
	,initVars: function() {
		this.flixelType = 4;
		this.offset = new flixel_math_FlxCallbackPoint($bind(this,this.offsetCallback));
		this.origin = new flixel_math_FlxCallbackPoint($bind(this,this.originCallback));
		this.scale = new flixel_math_FlxCallbackPoint($bind(this,this.scaleCallback));
		this.scrollFactor = new flixel_math_FlxCallbackPoint($bind(this,this.scrollFactorCallback));
		this.scale.set(1,1);
		this.scrollFactor.set(1,1);
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.velocity = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.acceleration = point;
		var point = flixel_math_FlxPoint._pool.get().set(0,0);
		point._inPool = false;
		this.drag = point;
		var X = 10000;
		var Y = 10000;
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var point = flixel_math_FlxPoint._pool.get().set(X,Y);
		point._inPool = false;
		this.maxVelocity = point;
	}
	,destroy: function() {
		this.offset = flixel_util_FlxDestroyUtil.destroy(this.offset);
		this.origin = flixel_util_FlxDestroyUtil.destroy(this.origin);
		this.scale = flixel_util_FlxDestroyUtil.destroy(this.scale);
		this.scrollFactor = flixel_util_FlxDestroyUtil.destroy(this.scrollFactor);
		this.group = flixel_util_FlxDestroyUtil.destroy(this.group);
		this._sprites = null;
		flixel_FlxSprite.prototype.destroy.call(this);
	}
	,clone: function() {
		var newGroup = new flixel_group_FlxTypedSpriteGroup(this.x,this.y,this.group.maxSize);
		var _g = 0;
		var _g1 = this.group.members;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				newGroup.add(sprite.clone());
			}
		}
		return newGroup;
	}
	,isOnScreen: function(Camera) {
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible && sprite.isOnScreen(Camera)) {
				return true;
			}
		}
		return false;
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) {
			InScreenSpace = false;
		}
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) {
				result = result || sprite.overlapsPoint(point,InScreenSpace,Camera);
			}
		}
		return result;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) {
			Mask = 255;
		}
		var result = false;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) {
				result = result || sprite.pixelsOverlapPoint(point,Mask,Camera);
			}
		}
		return result;
	}
	,update: function(elapsed) {
		this.group.update(elapsed);
		if(this.moves) {
			this.updateMotion(elapsed);
		}
	}
	,draw: function() {
		this.group.draw();
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) {
			FetchPositions = false;
		}
		var positions = null;
		if(FetchPositions) {
			positions = [];
		}
		var spritePositions;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				spritePositions = sprite.replaceColor(Color,NewColor,FetchPositions);
				if(FetchPositions) {
					positions = positions.concat(spritePositions);
				}
			}
		}
		return positions;
	}
	,add: function(Sprite) {
		this.preAdd(Sprite);
		return this.group.add(Sprite);
	}
	,insert: function(Position,Sprite) {
		this.preAdd(Sprite);
		return this.group.insert(Position,Sprite);
	}
	,preAdd: function(Sprite) {
		var sprite = Sprite;
		sprite.set_x(sprite.x + this.x);
		sprite.set_y(sprite.y + this.y);
		sprite.set_alpha(sprite.alpha * this.alpha);
		var _this = sprite.scrollFactor;
		var point = this.scrollFactor;
		_this.set_x(point.x);
		_this.set_y(point.y);
		if(point._weak) {
			point.put();
		}
		sprite.set_cameras(this._cameras);
		if(this.clipRect != null) {
			var ClipRect = this.clipRect;
			if(ClipRect == null) {
				sprite.set_clipRect(null);
			} else {
				var X = ClipRect.x - sprite.x + this.x;
				var Y = ClipRect.y - sprite.y + this.y;
				var Width = ClipRect.width;
				var Height = ClipRect.height;
				if(Height == null) {
					Height = 0;
				}
				if(Width == null) {
					Width = 0;
				}
				if(Y == null) {
					Y = 0;
				}
				if(X == null) {
					X = 0;
				}
				var _this = flixel_math_FlxRect._pool.get();
				var X1 = X;
				var Y1 = Y;
				var Width1 = Width;
				var Height1 = Height;
				if(Height1 == null) {
					Height1 = 0;
				}
				if(Width1 == null) {
					Width1 = 0;
				}
				if(Y1 == null) {
					Y1 = 0;
				}
				if(X1 == null) {
					X1 = 0;
				}
				_this.x = X1;
				_this.y = Y1;
				_this.width = Width1;
				_this.height = Height1;
				var rect = _this;
				rect._inPool = false;
				sprite.set_clipRect(rect);
			}
		}
	}
	,recycle: function(ObjectClass,ObjectFactory,Force,Revive) {
		if(Revive == null) {
			Revive = true;
		}
		if(Force == null) {
			Force = false;
		}
		return this.group.recycle(ObjectClass,ObjectFactory,Force,Revive);
	}
	,remove: function(Sprite,Splice) {
		if(Splice == null) {
			Splice = false;
		}
		var sprite = Sprite;
		sprite.set_x(sprite.x - this.x);
		sprite.set_y(sprite.y - this.y);
		sprite.set_cameras(null);
		return this.group.remove(Sprite,Splice);
	}
	,replace: function(OldObject,NewObject) {
		return this.group.replace(OldObject,NewObject);
	}
	,sort: function(Function1,Order) {
		if(Order == null) {
			Order = -1;
		}
		var Order1 = Order;
		if(Order1 == null) {
			Order1 = -1;
		}
		var _g = Function1;
		var a1 = Order1;
		var tmp = function(a2,a3) {
			return _g(a1,a2,a3);
		};
		this.group.members.sort(tmp);
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) {
			Force = false;
		}
		return this.group.getFirstAvailable(ObjectClass,Force);
	}
	,getFirstNull: function() {
		return this.group.getFirstNull();
	}
	,getFirstExisting: function() {
		return this.group.getFirstExisting();
	}
	,getFirstAlive: function() {
		return this.group.getFirstAlive();
	}
	,getFirstDead: function() {
		return this.group.getFirstDead();
	}
	,countLiving: function() {
		return this.group.countLiving();
	}
	,countDead: function() {
		return this.group.countDead();
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) {
			Length = 0;
		}
		if(StartIndex == null) {
			StartIndex = 0;
		}
		return this.group.getRandom(StartIndex,Length);
	}
	,iterator: function(filter) {
		return new flixel_group_FlxTypedGroupIterator(this.group.members,filter);
	}
	,forEach: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		this.group.forEach(Function1,Recurse);
	}
	,forEachAlive: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		this.group.forEachAlive(Function1,Recurse);
	}
	,forEachDead: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		this.group.forEachDead(Function1,Recurse);
	}
	,forEachExists: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		this.group.forEachExists(Function1,Recurse);
	}
	,forEachOfType: function(ObjectClass,Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		this.group.forEachOfType(ObjectClass,Function1,Recurse);
	}
	,clear: function() {
		this.group.clear();
	}
	,kill: function() {
		flixel_FlxSprite.prototype.kill.call(this);
		this.group.kill();
	}
	,revive: function() {
		flixel_FlxSprite.prototype.revive.call(this);
		this.group.revive();
	}
	,reset: function(X,Y) {
		this.revive();
		this.setPosition(X,Y);
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				sprite.reset(X,Y);
			}
		}
	}
	,setPosition: function(X,Y) {
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
		var dx = X - this.x;
		var dy = Y - this.y;
		this.multiTransformChildren_Float([$bind(this,this.xTransform),$bind(this,this.yTransform)],[dx,dy]);
		this._skipTransformChildren = true;
		this.set_x(X);
		this.set_y(Y);
		this._skipTransformChildren = false;
	}
	,set_camera: function(Value) {
		if(this.get_camera() != Value) {
			this.transformChildren_flixel_FlxCamera($bind(this,this.cameraTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_camera.call(this,Value);
	}
	,set_cameras: function(Value) {
		if(this.get_cameras() != Value) {
			this.transformChildren_Array_flixel_FlxCamera($bind(this,this.camerasTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_cameras.call(this,Value);
	}
	,set_exists: function(Value) {
		if(this.exists != Value) {
			this.transformChildren_Bool($bind(this,this.existsTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_exists.call(this,Value);
	}
	,set_visible: function(Value) {
		if(this.exists && this.visible != Value) {
			this.transformChildren_Bool($bind(this,this.visibleTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_visible.call(this,Value);
	}
	,set_active: function(Value) {
		if(this.exists && this.active != Value) {
			this.transformChildren_Bool($bind(this,this.activeTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_active.call(this,Value);
	}
	,set_alive: function(Value) {
		if(this.alive != Value) {
			this.transformChildren_Bool($bind(this,this.aliveTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_alive.call(this,Value);
	}
	,set_x: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.x != Value) {
			var offset = Value - this.x;
			this.transformChildren_Float($bind(this,this.xTransform),offset);
		}
		return this.x = Value;
	}
	,set_y: function(Value) {
		if(!this._skipTransformChildren && this.exists && this.y != Value) {
			var offset = Value - this.y;
			this.transformChildren_Float($bind(this,this.yTransform),offset);
		}
		return this.y = Value;
	}
	,set_angle: function(Value) {
		if(this.exists && this.angle != Value) {
			var offset = Value - this.angle;
			this.transformChildren_Float($bind(this,this.angleTransform),offset);
		}
		return this.angle = Value;
	}
	,set_alpha: function(Value) {
		var lowerBound = Value < 0 ? 0 : Value;
		Value = lowerBound > 1 ? 1 : lowerBound;
		if(this.exists && this.alpha != Value) {
			var factor = this.alpha > 0 ? Value / this.alpha : 0;
			if(!this.directAlpha && this.alpha != 0) {
				this.transformChildren_Float($bind(this,this.alphaTransform),factor);
			} else {
				this.transformChildren_Float($bind(this,this.directAlphaTransform),Value);
			}
		}
		return this.alpha = Value;
	}
	,set_facing: function(Value) {
		if(this.exists && this.facing != Value) {
			this.transformChildren_Int($bind(this,this.facingTransform),Value);
		}
		return this.facing = Value;
	}
	,set_flipX: function(Value) {
		if(this.exists && this.flipX != Value) {
			this.transformChildren_Bool($bind(this,this.flipXTransform),Value);
		}
		return this.flipX = Value;
	}
	,set_flipY: function(Value) {
		if(this.exists && this.flipY != Value) {
			this.transformChildren_Bool($bind(this,this.flipYTransform),Value);
		}
		return this.flipY = Value;
	}
	,set_moves: function(Value) {
		if(this.exists && this.moves != Value) {
			this.transformChildren_Bool($bind(this,this.movesTransform),Value);
		}
		return this.moves = Value;
	}
	,set_immovable: function(Value) {
		if(this.exists && this.immovable != Value) {
			this.transformChildren_Bool($bind(this,this.immovableTransform),Value);
		}
		return this.immovable = Value;
	}
	,set_solid: function(Value) {
		if(this.exists && (this.allowCollisions & 4369) > 0 != Value) {
			this.transformChildren_Bool($bind(this,this.solidTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_solid.call(this,Value);
	}
	,set_color: function(Value) {
		if(this.exists && this.color != Value) {
			this.transformChildren_Int($bind(this,this.gColorTransform),Value);
		}
		return this.color = Value;
	}
	,set_blend: function(Value) {
		if(this.exists && this.blend != Value) {
			this.transformChildren_flash_display_BlendMode($bind(this,this.blendTransform),Value);
		}
		return this.blend = Value;
	}
	,set_clipRect: function(rect) {
		if(this.exists) {
			this.transformChildren_flixel_math_FlxRect($bind(this,this.clipRectTransform),rect);
		}
		return flixel_FlxSprite.prototype.set_clipRect.call(this,rect);
	}
	,set_pixelPerfectRender: function(Value) {
		if(this.exists && this.pixelPerfectRender != Value) {
			this.transformChildren_Bool($bind(this,this.pixelPerfectTransform),Value);
		}
		return flixel_FlxSprite.prototype.set_pixelPerfectRender.call(this,Value);
	}
	,set_width: function(Value) {
		return Value;
	}
	,get_width: function() {
		if(this.group.length == 0) {
			return 0;
		}
		var minX = Infinity;
		var maxX = -Infinity;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			if(member == null) {
				continue;
			}
			var minMemberX = member.x;
			var maxMemberX = minMemberX + member.get_width();
			if(maxMemberX > maxX) {
				maxX = maxMemberX;
			}
			if(minMemberX < minX) {
				minX = minMemberX;
			}
		}
		return maxX - minX;
	}
	,set_height: function(Value) {
		return Value;
	}
	,get_height: function() {
		if(this.group.length == 0) {
			return 0;
		}
		var minY = Infinity;
		var maxY = -Infinity;
		var _g = 0;
		var _g1 = this._sprites;
		while(_g < _g1.length) {
			var member = _g1[_g];
			++_g;
			if(member == null) {
				continue;
			}
			var minMemberY = member.y;
			var maxMemberY = minMemberY + member.get_height();
			if(maxMemberY > maxY) {
				maxY = maxMemberY;
			}
			if(minMemberY < minY) {
				minY = minMemberY;
			}
		}
		return maxY - minY;
	}
	,get_length: function() {
		return this.group.length;
	}
	,get_maxSize: function() {
		return this.group.maxSize;
	}
	,set_maxSize: function(Size) {
		return this.group.set_maxSize(Size);
	}
	,get_members: function() {
		return this.group.members;
	}
	,xTransform: function(Sprite,X) {
		Sprite.set_x(Sprite.x + X);
	}
	,yTransform: function(Sprite,Y) {
		Sprite.set_y(Sprite.y + Y);
	}
	,angleTransform: function(Sprite,Angle) {
		Sprite.set_angle(Sprite.angle + Angle);
	}
	,alphaTransform: function(Sprite,Alpha) {
		if(Sprite.alpha != 0 || Alpha == 0) {
			Sprite.set_alpha(Sprite.alpha * Alpha);
		} else {
			Sprite.set_alpha(1 / Alpha);
		}
	}
	,directAlphaTransform: function(Sprite,Alpha) {
		Sprite.set_alpha(Alpha);
	}
	,facingTransform: function(Sprite,Facing) {
		Sprite.set_facing(Facing);
	}
	,flipXTransform: function(Sprite,FlipX) {
		Sprite.set_flipX(FlipX);
	}
	,flipYTransform: function(Sprite,FlipY) {
		Sprite.set_flipY(FlipY);
	}
	,movesTransform: function(Sprite,Moves) {
		Sprite.set_moves(Moves);
	}
	,pixelPerfectTransform: function(Sprite,PixelPerfect) {
		Sprite.set_pixelPerfectRender(PixelPerfect);
	}
	,gColorTransform: function(Sprite,Color) {
		Sprite.set_color(Color);
	}
	,blendTransform: function(Sprite,Blend) {
		Sprite.set_blend(Blend);
	}
	,immovableTransform: function(Sprite,Immovable) {
		Sprite.set_immovable(Immovable);
	}
	,visibleTransform: function(Sprite,Visible) {
		Sprite.set_visible(Visible);
	}
	,activeTransform: function(Sprite,Active) {
		Sprite.set_active(Active);
	}
	,solidTransform: function(Sprite,Solid) {
		Sprite.set_solid(Solid);
	}
	,aliveTransform: function(Sprite,Alive) {
		Sprite.set_alive(Alive);
	}
	,existsTransform: function(Sprite,Exists) {
		Sprite.set_exists(Exists);
	}
	,cameraTransform: function(Sprite,Camera) {
		Sprite.set_camera(Camera);
	}
	,camerasTransform: function(Sprite,Cameras) {
		Sprite.set_cameras(Cameras);
	}
	,offsetTransform: function(Sprite,Offset) {
		var _this = Sprite.offset;
		_this.set_x(Offset.x);
		_this.set_y(Offset.y);
		if(Offset._weak) {
			Offset.put();
		}
	}
	,originTransform: function(Sprite,Origin) {
		var _this = Sprite.origin;
		_this.set_x(Origin.x);
		_this.set_y(Origin.y);
		if(Origin._weak) {
			Origin.put();
		}
	}
	,scaleTransform: function(Sprite,Scale) {
		var _this = Sprite.scale;
		_this.set_x(Scale.x);
		_this.set_y(Scale.y);
		if(Scale._weak) {
			Scale.put();
		}
	}
	,scrollFactorTransform: function(Sprite,ScrollFactor) {
		var _this = Sprite.scrollFactor;
		_this.set_x(ScrollFactor.x);
		_this.set_y(ScrollFactor.y);
		if(ScrollFactor._weak) {
			ScrollFactor.put();
		}
	}
	,clipRectTransform: function(Sprite,ClipRect) {
		if(ClipRect == null) {
			Sprite.set_clipRect(null);
		} else {
			var X = ClipRect.x - Sprite.x + this.x;
			var Y = ClipRect.y - Sprite.y + this.y;
			var Width = ClipRect.width;
			var Height = ClipRect.height;
			if(Height == null) {
				Height = 0;
			}
			if(Width == null) {
				Width = 0;
			}
			if(Y == null) {
				Y = 0;
			}
			if(X == null) {
				X = 0;
			}
			var _this = flixel_math_FlxRect._pool.get();
			var X1 = X;
			var Y1 = Y;
			var Width1 = Width;
			var Height1 = Height;
			if(Height1 == null) {
				Height1 = 0;
			}
			if(Width1 == null) {
				Width1 = 0;
			}
			if(Y1 == null) {
				Y1 = 0;
			}
			if(X1 == null) {
				X1 = 0;
			}
			_this.x = X1;
			_this.y = Y1;
			_this.width = Width1;
			_this.height = Height1;
			var rect = _this;
			rect._inPool = false;
			Sprite.set_clipRect(rect);
		}
	}
	,offsetCallback: function(Offset) {
		this.transformChildren_flixel_math_FlxPoint($bind(this,this.offsetTransform),Offset);
	}
	,originCallback: function(Origin) {
		this.transformChildren_flixel_math_FlxPoint($bind(this,this.originTransform),Origin);
	}
	,scaleCallback: function(Scale) {
		this.transformChildren_flixel_math_FlxPoint($bind(this,this.scaleTransform),Scale);
	}
	,scrollFactorCallback: function(ScrollFactor) {
		this.transformChildren_flixel_math_FlxPoint($bind(this,this.scrollFactorTransform),ScrollFactor);
	}
	,loadGraphicFromSprite: function(Sprite) {
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Width,Height,Unique,Key) {
		if(Unique == null) {
			Unique = false;
		}
		if(Height == null) {
			Height = 0;
		}
		if(Width == null) {
			Width = 0;
		}
		if(Animated == null) {
			Animated = false;
		}
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) {
			AutoBuffer = false;
		}
		if(AntiAliasing == null) {
			AntiAliasing = false;
		}
		if(Frame == null) {
			Frame = -1;
		}
		if(Rotations == null) {
			Rotations = 16;
		}
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) {
			Unique = false;
		}
		if(Color == null) {
			Color = -1;
		}
		return this;
	}
	,set_pixels: function(Value) {
		return Value;
	}
	,set_frame: function(Value) {
		return Value;
	}
	,get_pixels: function() {
		return null;
	}
	,calcFrame: function(RunOnCpp) {
		if(RunOnCpp == null) {
			RunOnCpp = false;
		}
	}
	,resetHelpers: function() {
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) {
			Y = 0;
		}
		if(X == null) {
			X = 0;
		}
	}
	,set_frames: function(Frames) {
		return Frames;
	}
	,updateColorTransform: function() {
	}
	,__class__: flixel_group_FlxTypedSpriteGroup
	,__properties__: $extend(flixel_FlxSprite.prototype.__properties__,{set_maxSize:"set_maxSize",get_maxSize:"get_maxSize",get_length:"get_length",get_members:"get_members"})
});
var Alphabet = function(x,y,text,bold,typed) {
	if(typed == null) {
		typed = false;
	}
	if(bold == null) {
		bold = false;
	}
	if(text == null) {
		text = "";
	}
	this.personTalking = "gf";
	this.isBold = false;
	this.splitWords = [];
	this.lastWasSpace = false;
	this.xPosResetted = false;
	this.yMulti = 1;
	this.widthOfWords = flixel_FlxG.width;
	this._curText = "";
	this._finalText = "";
	this.text = "";
	this.isMenuItem = false;
	this.targetY = 0;
	this.paused = false;
	this.delay = 0.05;
	flixel_group_FlxTypedSpriteGroup.call(this,x,y);
	this._finalText = text;
	this.text = text;
	this.isBold = bold;
	if(text != "") {
		if(typed) {
			this.startTypedText();
		} else {
			this.addText();
		}
	}
};
$hxClasses["Alphabet"] = Alphabet;
Alphabet.__name__ = "Alphabet";
Alphabet.__super__ = flixel_group_FlxTypedSpriteGroup;
Alphabet.prototype = $extend(flixel_group_FlxTypedSpriteGroup.prototype,{
	delay: null
	,paused: null
	,targetY: null
	,isMenuItem: null
	,text: null
	,_finalText: null
	,_curText: null
	,widthOfWords: null
	,yMulti: null
	,lastSprite: null
	,xPosResetted: null
	,lastWasSpace: null
	,splitWords: null
	,isBold: null
	,addText: function() {
		this.doSplitWords();
		var xPos = 0;
		var _g = 0;
		var _g1 = this.splitWords;
		while(_g < _g1.length) {
			var character = _g1[_g];
			++_g;
			if(character == " " || character == "-") {
				this.lastWasSpace = true;
			}
			if(AlphaCharacter.alphabet.indexOf(character.toLowerCase()) != -1) {
				if(this.lastSprite != null) {
					xPos = this.lastSprite.x + this.lastSprite.get_width();
				}
				if(this.lastWasSpace) {
					xPos += 40;
					this.lastWasSpace = false;
				}
				var letter = new AlphaCharacter(xPos,0);
				if(this.isBold) {
					letter.createBold(character);
				} else {
					letter.createLetter(character);
				}
				this.add(letter);
				this.lastSprite = letter;
			}
		}
	}
	,doSplitWords: function() {
		this.splitWords = this._finalText.split("");
	}
	,personTalking: null
	,startTypedText: function() {
		var _gthis = this;
		this._finalText = this.text;
		this.doSplitWords();
		var loopNum = 0;
		var xPos = 0;
		var curRow = 0;
		new flixel_util_FlxTimer().start(0.05,function(tmr) {
			if(_gthis._finalText.charCodeAt(loopNum) == 10) {
				_gthis.yMulti += 1;
				_gthis.xPosResetted = true;
				xPos = 0;
				curRow += 1;
			}
			if(_gthis.splitWords[loopNum] == " ") {
				_gthis.lastWasSpace = true;
			}
			var isNumber = AlphaCharacter.numbers.indexOf(_gthis.splitWords[loopNum]) != -1;
			var isSymbol = AlphaCharacter.symbols.indexOf(_gthis.splitWords[loopNum]) != -1;
			if(AlphaCharacter.alphabet.indexOf(_gthis.splitWords[loopNum].toLowerCase()) != -1 || isNumber || isSymbol) {
				if(_gthis.lastSprite != null && !_gthis.xPosResetted) {
					_gthis.lastSprite.updateHitbox();
					xPos += _gthis.lastSprite.get_width() + 3;
				} else {
					_gthis.xPosResetted = false;
				}
				if(_gthis.lastWasSpace) {
					xPos += 20;
					_gthis.lastWasSpace = false;
				}
				var letter = new AlphaCharacter(xPos,55 * _gthis.yMulti);
				letter.row = curRow;
				if(_gthis.isBold) {
					letter.createBold(_gthis.splitWords[loopNum]);
				} else {
					if(isNumber) {
						letter.createNumber(_gthis.splitWords[loopNum]);
					} else if(isSymbol) {
						letter.createSymbol(_gthis.splitWords[loopNum]);
					} else {
						letter.createLetter(_gthis.splitWords[loopNum]);
					}
					letter.set_x(letter.x + 90);
				}
				var Chance = 40;
				if(Chance == null) {
					Chance = 50;
				}
				if(flixel_FlxG.random.float(0,100) < Chance) {
					var daSound = "GF_";
					flixel_FlxG.sound.play(Paths.sound(daSound + flixel_FlxG.random.int(1,4),null));
				}
				_gthis.add(letter);
				_gthis.lastSprite = letter;
			}
			loopNum += 1;
			tmr.time = flixel_FlxG.random.float(0.04,0.09);
		},this.splitWords.length);
	}
	,update: function(elapsed) {
		if(this.isMenuItem) {
			var scaledY = flixel_math_FlxMath.remapToRange(this.targetY,0,1,0,1.3);
			var a = this.y;
			this.set_y(a + 0.16 * (scaledY * 120 + flixel_FlxG.height * 0.48 - a));
			var a = this.x;
			this.set_x(a + 0.16 * (this.targetY * 20 + 90 - a));
		}
		flixel_group_FlxTypedSpriteGroup.prototype.update.call(this,elapsed);
	}
	,__class__: Alphabet
});
var AlphaCharacter = function(x,y) {
	this.row = 0;
	flixel_FlxSprite.call(this,x,y);
	var library = null;
	var tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "alphabet" + ".png","IMAGE",library),Paths.getPath("images/" + "alphabet" + ".xml","TEXT",library));
	this.set_frames(tex);
	this.set_antialiasing(true);
};
$hxClasses["AlphaCharacter"] = AlphaCharacter;
AlphaCharacter.__name__ = "AlphaCharacter";
AlphaCharacter.__super__ = flixel_FlxSprite;
AlphaCharacter.prototype = $extend(flixel_FlxSprite.prototype,{
	row: null
	,createBold: function(letter) {
		this.animation.addByPrefix(letter,letter.toUpperCase() + " bold",24);
		this.animation.play(letter);
		this.updateHitbox();
	}
	,createLetter: function(letter) {
		var letterCase = "lowercase";
		if(letter.toLowerCase() != letter) {
			letterCase = "capital";
		}
		this.animation.addByPrefix(letter,letter + " " + letterCase,24);
		this.animation.play(letter);
		this.updateHitbox();
		this.set_y(110 - this.get_height());
		this.set_y(this.y + this.row * 60);
	}
	,createNumber: function(letter) {
		this.animation.addByPrefix(letter,letter,24);
		this.animation.play(letter);
		this.updateHitbox();
	}
	,createSymbol: function(letter) {
		switch(letter) {
		case "!":
			this.animation.addByPrefix(letter,"exclamation point",24);
			this.animation.play(letter);
			break;
		case "'":
			this.animation.addByPrefix(letter,"apostraphie",24);
			this.animation.play(letter);
			this.set_y(this.y);
			break;
		case ".":
			this.animation.addByPrefix(letter,"period",24);
			this.animation.play(letter);
			this.set_y(this.y + 50);
			break;
		case "?":
			this.animation.addByPrefix(letter,"question mark",24);
			this.animation.play(letter);
			break;
		}
		this.updateHitbox();
	}
	,__class__: AlphaCharacter
});
var lime_app_IModule = function() { };
$hxClasses["lime.app.IModule"] = lime_app_IModule;
lime_app_IModule.__name__ = "lime.app.IModule";
lime_app_IModule.__isInterface__ = true;
lime_app_IModule.prototype = {
	__registerLimeModule: null
	,__unregisterLimeModule: null
	,__class__: lime_app_IModule
};
var lime_app_Module = function() {
	this.onExit = new lime_app__$Event_$Int_$Void();
};
$hxClasses["lime.app.Module"] = lime_app_Module;
lime_app_Module.__name__ = "lime.app.Module";
lime_app_Module.__interfaces__ = [lime_app_IModule];
lime_app_Module.prototype = {
	onExit: null
	,__registerLimeModule: function(application) {
	}
	,__unregisterLimeModule: function(application) {
	}
	,__class__: lime_app_Module
};
var lime__$internal_backend_html5_HTML5Application = function(parent) {
	this.gameDeviceCache = new haxe_ds_IntMap();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime_media_AudioManager.init();
	this.accelerometer = lime_system_Sensor.registerSensor(lime_system_SensorType.ACCELEROMETER,0);
};
$hxClasses["lime._internal.backend.html5.HTML5Application"] = lime__$internal_backend_html5_HTML5Application;
lime__$internal_backend_html5_HTML5Application.__name__ = "lime._internal.backend.html5.HTML5Application";
lime__$internal_backend_html5_HTML5Application.prototype = {
	accelerometer: null
	,currentUpdate: null
	,deltaTime: null
	,framePeriod: null
	,gameDeviceCache: null
	,hidden: null
	,lastUpdate: null
	,nextUpdate: null
	,parent: null
	,convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) {
			return keyCode + 32;
		}
		switch(keyCode) {
		case 12:
			return 1073741980;
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 19:
			return 1073741896;
		case 20:
			return 1073741881;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 35:
			return 1073741901;
		case 36:
			return 1073741898;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 41:
			return 1073741943;
		case 43:
			return 1073741940;
		case 44:
			return 1073741894;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 91:
			return 1073742051;
		case 92:
			return 1073742055;
		case 93:
			return 1073742055;
		case 95:
			return 1073742106;
		case 96:
			return 1073741922;
		case 97:
			return 1073741913;
		case 98:
			return 1073741914;
		case 99:
			return 1073741915;
		case 100:
			return 1073741916;
		case 101:
			return 1073741917;
		case 102:
			return 1073741918;
		case 103:
			return 1073741919;
		case 104:
			return 1073741920;
		case 105:
			return 1073741921;
		case 106:
			return 1073741909;
		case 107:
			return 1073741911;
		case 108:
			return 1073741923;
		case 109:
			return 1073741910;
		case 110:
			return 1073741923;
		case 111:
			return 1073741908;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 127:
			return 1073741931;
		case 128:
			return 1073741932;
		case 129:
			return 1073741933;
		case 130:
			return 1073741934;
		case 131:
			return 1073741935;
		case 132:
			return 1073741936;
		case 133:
			return 1073741937;
		case 134:
			return 1073741938;
		case 135:
			return 1073741939;
		case 144:
			return 1073741907;
		case 145:
			return 1073741895;
		case 160:
			return 94;
		case 161:
			return 33;
		case 163:
			return 35;
		case 164:
			return 36;
		case 166:
			return 1073742094;
		case 167:
			return 1073742095;
		case 168:
			return 1073742097;
		case 169:
			return 41;
		case 170:
			return 42;
		case 171:
			return 96;
		case 172:
			return 1073741898;
		case 173:
			return 45;
		case 174:
			return 1073741953;
		case 175:
			return 1073741952;
		case 176:
			return 1073742082;
		case 177:
			return 1073742083;
		case 178:
			return 1073742084;
		case 179:
			return 1073742085;
		case 180:
			return 1073742089;
		case 181:
			return 1073742086;
		case 182:
			return 1073741953;
		case 183:
			return 1073741952;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 193:
			return 63;
		case 194:
			return 1073741923;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		case 223:
			return 96;
		case 224:
			return 1073742051;
		case 226:
			return 92;
		}
		return keyCode;
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("devicemotion",$bind(this,this.handleSensorEvent),false);
		
			if (!CanvasRenderingContext2D.prototype.isPointInStroke) {
				CanvasRenderingContext2D.prototype.isPointInStroke = function (path, x, y) {
					return false;
				};
			}
			if (!CanvasRenderingContext2D.prototype.isPointInPath) {
				CanvasRenderingContext2D.prototype.isPointInPath = function (path, x, y) {
					return false;
				};
			}

			if ('performance' in window == false) {
				window.performance = {};
			}

			if ('now' in window.performance == false) {
				var offset = Date.now();
				if (performance.timing && performance.timing.navigationStart) {
					offset = performance.timing.navigationStart
				}
				window.performance.now = function now() {
					return Date.now() - offset;
				}
			}

			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}

			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); },
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};

			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};

			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		var _g = 0;
		var _g1 = this.parent.__windows;
		while(_g < _g1.length) {
			var $window = _g1[_g];
			++_g;
			$window.__backend.updateSize();
		}
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var _g = 0;
			var _g1 = this.parent.__windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				this.parent.onUpdate.dispatch(this.deltaTime | 0);
				if($window.context != null) {
					$window.onRender.dispatch($window.context);
				}
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
			} else {
				this.nextUpdate = this.currentUpdate - this.currentUpdate % this.framePeriod + this.framePeriod;
			}
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.__window != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null ? event.keyCode : event.which);
			var modifier = (event.shiftKey ? 3 : 0) | (event.ctrlKey ? 192 : 0) | (event.altKey ? 768 : 0) | (event.metaKey ? 3072 : 0);
			if(event.type == "keydown") {
				this.parent.__window.onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyDown.canceled && event.cancelable) {
					event.preventDefault();
				}
			} else {
				this.parent.__window.onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyUp.canceled && event.cancelable) {
					event.preventDefault();
				}
			}
		}
	}
	,handleSensorEvent: function(event) {
		this.accelerometer.onUpdate.dispatch(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y,event.accelerationIncludingGravity.z);
	}
	,handleWindowEvent: function(event) {
		if(this.parent.__window != null) {
			switch(event.type) {
			case "beforeunload":
				break;
			case "blur":
				if(!this.hidden) {
					this.parent.__window.onFocusOut.dispatch();
					this.parent.__window.onDeactivate.dispatch();
					this.hidden = true;
				}
				break;
			case "focus":
				if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			case "resize":
				this.parent.__window.__backend.handleResizeEvent(event);
				break;
			case "visibilitychange":
				if(window.document.hidden) {
					if(!this.hidden) {
						this.parent.__window.onFocusOut.dispatch();
						this.parent.__window.onDeactivate.dispatch();
						this.hidden = true;
					}
				} else if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			}
		}
	}
	,updateGameDevices: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		if(devices == null) {
			return;
		}
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g = 0;
		var _g1 = devices.length;
		while(_g < _g1) {
			var i = _g++;
			id = i;
			data = devices[id];
			if(data == null) {
				continue;
			}
			if(!this.gameDeviceCache.h.hasOwnProperty(id)) {
				cache = new lime__$internal_backend_html5_GameDeviceData();
				cache.id = id;
				cache.connected = data.connected;
				var _g2 = 0;
				var _g3 = data.buttons.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g4 = 0;
				var _g5 = data.axes.length;
				while(_g4 < _g5) {
					var i2 = _g4++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") {
					cache.isGamepad = true;
				}
				this.gameDeviceCache.h[id] = cache;
				if(data.connected) {
					lime_ui_Joystick.__connect(id);
					if(cache.isGamepad) {
						lime_ui_Gamepad.__connect(id);
					}
				}
			}
			cache = this.gameDeviceCache.h[id];
			joystick = lime_ui_Joystick.devices.h[id];
			gamepad = lime_ui_Gamepad.devices.h[id];
			if(data.connected) {
				var button;
				var value;
				var _g6 = 0;
				var _g7 = data.buttons.length;
				while(_g6 < _g7) {
					var i3 = _g6++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(4,value);
							}
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(5,value);
							}
						} else {
							if(value > 0) {
								joystick.onButtonDown.dispatch(i3);
							} else {
								joystick.onButtonUp.dispatch(i3);
							}
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) {
									gamepad.onButtonDown.dispatch(button);
								} else {
									gamepad.onButtonUp.dispatch(button);
								}
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g8 = 0;
				var _g9 = data.axes.length;
				while(_g8 < _g9) {
					var i4 = _g8++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) {
							gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						}
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				lime_ui_Joystick.__disconnect(id);
				lime_ui_Gamepad.__disconnect(id);
			}
		}
	}
	,__class__: lime__$internal_backend_html5_HTML5Application
};
var lime_app_Application = function() {
	this.onCreateWindow = new lime_app__$Event_$lime_$ui_$Window_$Void();
	this.onUpdate = new lime_app__$Event_$Int_$Void();
	lime_app_Module.call(this);
	if(lime_app_Application.current == null) {
		lime_app_Application.current = this;
	}
	this.meta = new haxe_ds_StringMap();
	this.modules = [];
	this.__windowByID = new haxe_ds_IntMap();
	this.__windows = [];
	this.__backend = new lime__$internal_backend_html5_HTML5Application(this);
	this.__registerLimeModule(this);
	this.__preloader = new lime_utils_Preloader();
	this.__preloader.onProgress.add($bind(this,this.onPreloadProgress));
	this.__preloader.onComplete.add($bind(this,this.onPreloadComplete));
};
$hxClasses["lime.app.Application"] = lime_app_Application;
lime_app_Application.__name__ = "lime.app.Application";
lime_app_Application.current = null;
lime_app_Application.__super__ = lime_app_Module;
lime_app_Application.prototype = $extend(lime_app_Module.prototype,{
	meta: null
	,modules: null
	,onUpdate: null
	,onCreateWindow: null
	,preloader: null
	,window: null
	,windows: null
	,__backend: null
	,__preloader: null
	,__window: null
	,__windowByID: null
	,__windows: null
	,addModule: function(module) {
		module.__registerLimeModule(this);
		this.modules.push(module);
	}
	,createWindow: function(attributes) {
		var $window = this.__createWindow(attributes);
		this.__addWindow($window);
		return $window;
	}
	,exec: function() {
		lime_app_Application.current = this;
		return this.__backend.exec();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onJoystickAxisMove: function(joystick,axis,value) {
	}
	,onJoystickButtonDown: function(joystick,button) {
	}
	,onJoystickButtonUp: function(joystick,button) {
	}
	,onJoystickConnect: function(joystick) {
	}
	,onJoystickDisconnect: function(joystick) {
	}
	,onJoystickHatMove: function(joystick,hat,position) {
	}
	,onJoystickTrackballMove: function(joystick,trackball,x,y) {
	}
	,onKeyDown: function(keyCode,modifier) {
	}
	,onKeyUp: function(keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(x,y,button) {
	}
	,onMouseMove: function(x,y) {
	}
	,onMouseMoveRelative: function(x,y) {
	}
	,onMouseUp: function(x,y,button) {
	}
	,onMouseWheel: function(deltaX,deltaY,deltaMode) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function() {
	}
	,onRenderContextRestored: function(context) {
	}
	,onTextEdit: function(text,start,length) {
	}
	,onTextInput: function(text) {
	}
	,onTouchCancel: function(touch) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function() {
	}
	,onWindowClose: function() {
	}
	,onWindowCreate: function() {
	}
	,onWindowDeactivate: function() {
	}
	,onWindowDropFile: function(file) {
	}
	,onWindowEnter: function() {
	}
	,onWindowExpose: function() {
	}
	,onWindowFocusIn: function() {
	}
	,onWindowFocusOut: function() {
	}
	,onWindowFullscreen: function() {
	}
	,onWindowLeave: function() {
	}
	,onWindowMove: function(x,y) {
	}
	,onWindowMinimize: function() {
	}
	,onWindowResize: function(width,height) {
	}
	,onWindowRestore: function() {
	}
	,removeModule: function(module) {
		if(module != null) {
			module.__unregisterLimeModule(this);
			HxOverrides.remove(this.modules,module);
		}
	}
	,render: function(context) {
	}
	,update: function(deltaTime) {
	}
	,__addWindow: function($window) {
		if($window != null) {
			this.__windows.push($window);
			this.__windowByID.h[$window.id] = $window;
			var _g = $bind(this,this.__onWindowClose);
			var window1 = $window;
			var tmp = function() {
				_g(window1);
			};
			$window.onClose.add(tmp,false,-10000);
			if(this.__window == null) {
				this.__window = $window;
				$window.onActivate.add($bind(this,this.onWindowActivate));
				$window.onRenderContextLost.add($bind(this,this.onRenderContextLost));
				$window.onRenderContextRestored.add($bind(this,this.onRenderContextRestored));
				$window.onDeactivate.add($bind(this,this.onWindowDeactivate));
				$window.onDropFile.add($bind(this,this.onWindowDropFile));
				$window.onEnter.add($bind(this,this.onWindowEnter));
				$window.onExpose.add($bind(this,this.onWindowExpose));
				$window.onFocusIn.add($bind(this,this.onWindowFocusIn));
				$window.onFocusOut.add($bind(this,this.onWindowFocusOut));
				$window.onFullscreen.add($bind(this,this.onWindowFullscreen));
				$window.onKeyDown.add($bind(this,this.onKeyDown));
				$window.onKeyUp.add($bind(this,this.onKeyUp));
				$window.onLeave.add($bind(this,this.onWindowLeave));
				$window.onMinimize.add($bind(this,this.onWindowMinimize));
				$window.onMouseDown.add($bind(this,this.onMouseDown));
				$window.onMouseMove.add($bind(this,this.onMouseMove));
				$window.onMouseMoveRelative.add($bind(this,this.onMouseMoveRelative));
				$window.onMouseUp.add($bind(this,this.onMouseUp));
				$window.onMouseWheel.add($bind(this,this.onMouseWheel));
				$window.onMove.add($bind(this,this.onWindowMove));
				$window.onRender.add($bind(this,this.render));
				$window.onResize.add($bind(this,this.onWindowResize));
				$window.onRestore.add($bind(this,this.onWindowRestore));
				$window.onTextEdit.add($bind(this,this.onTextEdit));
				$window.onTextInput.add($bind(this,this.onTextInput));
				this.onWindowCreate();
			}
			this.onCreateWindow.dispatch($window);
		}
	}
	,__createWindow: function(attributes) {
		var $window = new lime_ui_Window(this,attributes);
		if($window.id == -1) {
			return null;
		}
		return $window;
	}
	,__registerLimeModule: function(application) {
		application.onUpdate.add($bind(this,this.update));
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onExit.add($bind(this,this.__onModuleExit),false,0);
		var gamepad = lime_ui_Gamepad.devices.iterator();
		while(gamepad.hasNext()) {
			var gamepad1 = gamepad.next();
			this.__onGamepadConnect(gamepad1);
		}
		lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
		var joystick = lime_ui_Joystick.devices.iterator();
		while(joystick.hasNext()) {
			var joystick1 = joystick.next();
			this.__onJoystickConnect(joystick1);
		}
		lime_ui_Joystick.onConnect.add($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onCancel.add($bind(this,this.onTouchCancel));
		lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
	}
	,__removeWindow: function($window) {
		if($window != null && this.__windowByID.h.hasOwnProperty($window.id)) {
			if(this.__window == $window) {
				this.__window = null;
			}
			HxOverrides.remove(this.__windows,$window);
			this.__windowByID.remove($window.id);
			$window.close();
			if(this.__windows.length == 0) {
				lime_system_System.exit(0);
			}
		}
	}
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		var _g = $bind(this,this.onGamepadAxisMove);
		var gamepad1 = gamepad;
		var tmp = function(axis,value) {
			_g(gamepad1,axis,value);
		};
		gamepad.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onGamepadButtonDown);
		var gamepad2 = gamepad;
		var tmp = function(button) {
			_g1(gamepad2,button);
		};
		gamepad.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onGamepadButtonUp);
		var gamepad3 = gamepad;
		var tmp = function(button) {
			_g2(gamepad3,button);
		};
		gamepad.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onGamepadDisconnect);
		var gamepad4 = gamepad;
		var tmp = function() {
			_g3(gamepad4);
		};
		gamepad.onDisconnect.add(tmp);
	}
	,__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		var _g = $bind(this,this.onJoystickAxisMove);
		var joystick1 = joystick;
		var tmp = function(axis,value) {
			_g(joystick1,axis,value);
		};
		joystick.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onJoystickButtonDown);
		var joystick2 = joystick;
		var tmp = function(button) {
			_g1(joystick2,button);
		};
		joystick.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onJoystickButtonUp);
		var joystick3 = joystick;
		var tmp = function(button) {
			_g2(joystick3,button);
		};
		joystick.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onJoystickDisconnect);
		var joystick4 = joystick;
		var tmp = function() {
			_g3(joystick4);
		};
		joystick.onDisconnect.add(tmp);
		var _g4 = $bind(this,this.onJoystickHatMove);
		var joystick5 = joystick;
		var tmp = function(hat,position) {
			_g4(joystick5,hat,position);
		};
		joystick.onHatMove.add(tmp);
		var _g5 = $bind(this,this.onJoystickTrackballMove);
		var joystick6 = joystick;
		var tmp = function(trackball,x,y) {
			_g5(joystick6,trackball,x,y);
		};
		joystick.onTrackballMove.add(tmp);
	}
	,__onModuleExit: function(code) {
		this.__backend.exit();
	}
	,__onWindowClose: function($window) {
		if(this.__window == $window) {
			this.onWindowClose();
		}
		this.__removeWindow($window);
	}
	,__unregisterLimeModule: function(application) {
		application.onUpdate.remove($bind(this,this.update));
		application.onExit.remove($bind(this,this.__onModuleExit));
		application.onExit.remove($bind(this,this.onModuleExit));
		lime_ui_Gamepad.onConnect.remove($bind(this,this.__onGamepadConnect));
		lime_ui_Joystick.onConnect.remove($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onCancel.remove($bind(this,this.onTouchCancel));
		lime_ui_Touch.onStart.remove($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.remove($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.remove($bind(this,this.onTouchEnd));
		this.onModuleExit(0);
	}
	,get_preloader: function() {
		return this.__preloader;
	}
	,get_window: function() {
		return this.__window;
	}
	,get_windows: function() {
		return this.__windows;
	}
	,__class__: lime_app_Application
	,__properties__: {get_windows:"get_windows",get_window:"get_window",get_preloader:"get_preloader"}
});
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = "ApplicationMain";
ApplicationMain.main = function() {
	lime_system_System.__registerEntryPoint("vsgarcello",ApplicationMain.create);
};
ApplicationMain.create = function(config) {
	var app = new openfl_display_Application();
	ManifestResources.init(config);
	app.meta.h["build"] = "1";
	app.meta.h["company"] = "ninjamuffin99";
	app.meta.h["file"] = "vsgarcello";
	app.meta.h["name"] = "FNF | Smoke 'Em Out Struggle";
	app.meta.h["packageName"] = "com.ninjamuffin99.funkin";
	app.meta.h["version"] = "0.2.7.1- FNF";
	var attributes = { allowHighDPI : false, alwaysOnTop : false, borderless : false, element : null, frameRate : null, height : 720, hidden : false, maximized : false, minimized : false, parameters : { }, resizable : true, title : "FNF | Smoke 'Em Out Struggle", width : 1280, x : null, y : null};
	attributes.context = { antialiasing : 0, background : 0, colorDepth : 32, depth : true, hardware : true, stencil : true, type : null, vsync : false};
	if(app.__window == null) {
		if(config != null) {
			var _g = 0;
			var _g1 = Reflect.fields(config);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(attributes,field)) {
					attributes[field] = Reflect.field(config,field);
				} else if(Object.prototype.hasOwnProperty.call(attributes.context,field)) {
					attributes.context[field] = Reflect.field(config,field);
				}
			}
		}
	}
	app.createWindow(attributes);
	var preloader = new openfl_display_Preloader(new flixel_system_FlxPreloader());
	app.__preloader.onProgress.add(function(loaded,total) {
		preloader.update(loaded,total);
	});
	app.__preloader.onComplete.add(function() {
		preloader.start();
	});
	var stage = app.__window.stage;
	var tmp = function() {
		ApplicationMain.start(stage);
	};
	preloader.onComplete.add(tmp);
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraries;
	while(_g < _g1.length) {
		var library = _g1[_g];
		++_g;
		app.__preloader.addLibrary(library);
	}
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraryNames;
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		app.__preloader.addLibraryName(name);
	}
	app.__preloader.load();
	var result = app.exec();
};
ApplicationMain.start = function(stage) {
	try {
		Main.main();
		stage.dispatchEvent(new openfl_events_Event("resize",false,false));
		if(stage.window.__fullscreen) {
			stage.dispatchEvent(new openfl_events_FullScreenEvent("fullScreen",false,false,true,true));
		}
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
		var e = haxe_Exception.caught(_g).unwrap();
		stage.__handleError(e);
	}
};
var openfl_events_IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl_events_IEventDispatcher;
openfl_events_IEventDispatcher.__name__ = "openfl.events.IEventDispatcher";
openfl_events_IEventDispatcher.__isInterface__ = true;
openfl_events_IEventDispatcher.prototype = {
	addEventListener: null
	,dispatchEvent: null
	,hasEventListener: null
	,removeEventListener: null
	,willTrigger: null
	,__class__: openfl_events_IEventDispatcher
};
var openfl_events_EventDispatcher = function(target) {
	if(target != null) {
		this.__targetDispatcher = target;
	}
};
$hxClasses["openfl.events.EventDispatcher"] = openfl_events_EventDispatcher;
openfl_events_EventDispatcher.__name__ = "openfl.events.EventDispatcher";
openfl_events_EventDispatcher.__interfaces__ = [openfl_events_IEventDispatcher];
openfl_events_EventDispatcher.prototype = {
	__eventMap: null
	,__iterators: null
	,__targetDispatcher: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) {
			useWeakReference = false;
		}
		if(priority == null) {
			priority = 0;
		}
		if(useCapture == null) {
			useCapture = false;
		}
		if(listener == null) {
			return;
		}
		if(this.__eventMap == null) {
			this.__eventMap = new haxe_ds_StringMap();
			this.__iterators = new haxe_ds_StringMap();
		}
		if(!Object.prototype.hasOwnProperty.call(this.__eventMap.h,type)) {
			var list = [];
			list.push(new openfl_events__$EventDispatcher_Listener(listener,useCapture,priority));
			var iterator = new openfl_events__$EventDispatcher_DispatchIterator(list);
			this.__eventMap.h[type] = list;
			this.__iterators.h[type] = [iterator];
		} else {
			var list = this.__eventMap.h[type];
			var _g = 0;
			var _g1 = list.length;
			while(_g < _g1) {
				var i = _g++;
				if(list[i].match(listener,useCapture)) {
					return;
				}
			}
			var iterators = this.__iterators.h[type];
			var _g = 0;
			while(_g < iterators.length) {
				var iterator = iterators[_g];
				++_g;
				if(iterator.active) {
					iterator.copy();
				}
			}
			this.__addListenerByPriority(list,new openfl_events__$EventDispatcher_Listener(listener,useCapture,priority));
		}
	}
	,dispatchEvent: function(event) {
		if(this.__targetDispatcher != null) {
			event.target = this.__targetDispatcher;
		} else {
			event.target = this;
		}
		return this.__dispatchEvent(event);
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) {
			return false;
		}
		return Object.prototype.hasOwnProperty.call(this.__eventMap.h,type);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) {
			useCapture = false;
		}
		if(this.__eventMap == null || listener == null) {
			return;
		}
		var list = this.__eventMap.h[type];
		if(list == null) {
			return;
		}
		var iterators = this.__iterators.h[type];
		var _g = 0;
		var _g1 = list.length;
		while(_g < _g1) {
			var i = _g++;
			if(list[i].match(listener,useCapture)) {
				var _g2 = 0;
				while(_g2 < iterators.length) {
					var iterator = iterators[_g2];
					++_g2;
					iterator.remove(list[i],i);
				}
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) {
			var _this = this.__eventMap;
			var key = type;
			if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
				delete(_this.h[key]);
			}
			var _this = this.__iterators;
			var key = type;
			if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
				delete(_this.h[key]);
			}
		}
		var h = this.__eventMap.h;
		var inlStringMapValueIterator_h = h;
		var inlStringMapValueIterator_keys = Object.keys(h);
		var inlStringMapValueIterator_length = inlStringMapValueIterator_keys.length;
		var inlStringMapValueIterator_current = 0;
		if(inlStringMapValueIterator_current >= inlStringMapValueIterator_length) {
			this.__eventMap = null;
			this.__iterators = null;
		}
	}
	,toString: function() {
		var c = js_Boot.getClass(this);
		var full = c.__name__;
		var short = full.split(".").pop();
		return "[object " + short + "]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) {
			return true;
		}
		var type = event.type;
		var list = this.__eventMap.h[type];
		if(list == null) {
			return true;
		}
		if(event.target == null) {
			if(this.__targetDispatcher != null) {
				event.target = this.__targetDispatcher;
			} else {
				event.target = this;
			}
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 1;
		var iterators = this.__iterators.h[type];
		var iterator = iterators[0];
		if(iterator.active) {
			iterator = new openfl_events__$EventDispatcher_DispatchIterator(list);
			iterators.push(iterator);
		}
		iterator.start();
		var listener = iterator;
		while(listener.hasNext()) {
			var listener1 = listener.next();
			if(listener1 == null) {
				continue;
			}
			if(listener1.useCapture == capture) {
				listener1.callback(event);
				if(event.__isCanceledNow) {
					break;
				}
			}
		}
		iterator.stop();
		if(iterator != iterators[0]) {
			HxOverrides.remove(iterators,iterator);
		} else {
			iterator.reset(list);
		}
		return !event.isDefaultPrevented();
	}
	,__removeAllListeners: function() {
		this.__eventMap = null;
		this.__iterators = null;
	}
	,__addListenerByPriority: function(list,listener) {
		var numElements = list.length;
		var addAtPosition = numElements;
		var _g = 0;
		var _g1 = numElements;
		while(_g < _g1) {
			var i = _g++;
			if(list[i].priority < listener.priority) {
				addAtPosition = i;
				break;
			}
		}
		list.splice(addAtPosition,0,listener);
	}
	,__class__: openfl_events_EventDispatcher
};
var openfl_display_IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl_display_IBitmapDrawable;
openfl_display_IBitmapDrawable.__name__ = "openfl.display.IBitmapDrawable";
openfl_display_IBitmapDrawable.__isInterface__ = true;
openfl_display_IBitmapDrawable.prototype = {
	__blendMode: null
	,__drawableType: null
	,__isMask: null
	,__renderable: null
	,__renderTransform: null
	,__transform: null
	,__worldAlpha: null
	,__worldColorTransform: null
	,__worldTransform: null
	,__getBounds: null
	,__update: null
	,__updateTransforms: null
	,__mask: null
	,__scrollRect: null
	,__class__: openfl_display_IBitmapDrawable
};
var openfl_Vector = {};
openfl_Vector.__properties__ = {set_length:"set_length",get_length:"get_length",set_fixed:"set_fixed",get_fixed:"get_fixed"};
openfl_Vector.ofArray_Float = function(array) {
	var vector = openfl_Vector.toFloatVector(null);
	var _g = 0;
	var _g1 = array.length;
	while(_g < _g1) {
		var i = _g++;
		vector.set(i,array[i]);
	}
	return vector;
};
openfl_Vector.ofArray_Int = function(array) {
	var vector = openfl_Vector.toIntVector(null);
	var _g = 0;
	var _g1 = array.length;
	while(_g < _g1) {
		var i = _g++;
		vector.set(i,array[i]);
	}
	return vector;
};
openfl_Vector.concat = function(this1,vec) {
	return this1.concat(vec);
};
openfl_Vector.copy = function(this1) {
	return this1.copy();
};
openfl_Vector.filter = function(this1,callback) {
	return this1.filter(callback);
};
openfl_Vector.get = function(this1,index) {
	return this1.get(index);
};
openfl_Vector.indexOf = function(this1,searchElement,fromIndex) {
	if(fromIndex == null) {
		fromIndex = 0;
	}
	return this1.indexOf(searchElement,fromIndex);
};
openfl_Vector.insertAt = function(this1,index,element) {
	this1.insertAt(index,element);
};
openfl_Vector.iterator = function(this1) {
	return this1.iterator();
};
openfl_Vector.join = function(this1,sep) {
	if(sep == null) {
		sep = ",";
	}
	return this1.join(sep);
};
openfl_Vector.lastIndexOf = function(this1,searchElement,fromIndex) {
	return this1.lastIndexOf(searchElement,fromIndex);
};
openfl_Vector.pop = function(this1) {
	return this1.pop();
};
openfl_Vector.push = function(this1,value) {
	return this1.push(value);
};
openfl_Vector.removeAt = function(this1,index) {
	return this1.removeAt(index);
};
openfl_Vector.reverse = function(this1) {
	return this1.reverse();
};
openfl_Vector.set = function(this1,index,value) {
	return this1.set(index,value);
};
openfl_Vector.shift = function(this1) {
	return this1.shift();
};
openfl_Vector.slice = function(this1,startIndex,endIndex) {
	if(startIndex == null) {
		startIndex = 0;
	}
	return this1.slice(startIndex,endIndex);
};
openfl_Vector.sort = function(this1,sortBehavior) {
	this1.sort(sortBehavior);
};
openfl_Vector.splice = function(this1,startIndex,deleteCount) {
	return this1.splice(startIndex,deleteCount);
};
openfl_Vector.toString = function(this1) {
	if(this1 != null) {
		return this1.toString();
	} else {
		return null;
	}
};
openfl_Vector.unshift = function(this1,value) {
	this1.unshift(value);
};
openfl_Vector.convert = function(vec) {
	return vec;
};
openfl_Vector.toBoolVector = function(t,length,fixed,array) {
	return new openfl__$Vector_BoolVector(length,fixed,array);
};
openfl_Vector.toIntVector = function(t,length,fixed,array) {
	return new openfl__$Vector_IntVector(length,fixed,array);
};
openfl_Vector.toFloatVector = function(t,length,fixed,array) {
	return new openfl__$Vector_FloatVector(length,fixed,array,true);
};
openfl_Vector.toFunctionVector = function(t,length,fixed,array) {
	return new openfl__$Vector_FunctionVector(length,fixed,array);
};
openfl_Vector.toObjectVector = function(t,length,fixed,array) {
	return new openfl__$Vector_ObjectVector(length,fixed,array,true);
};
openfl_Vector.toNullVector = function(t,length,fixed,array) {
	return new openfl__$Vector_ObjectVector(length,fixed,array,true);
};
openfl_Vector.fromBoolVector = function(vector) {
	return vector;
};
openfl_Vector.fromIntVector = function(vector) {
	return vector;
};
openfl_Vector.fromFloatVector = function(vector) {
	return vector;
};
openfl_Vector.fromFunctionVector = function(vector) {
	return vector;
};
openfl_Vector.fromObjectVector = function(vector) {
	return vector;
};
openfl_Vector.get_fixed = function(this1) {
	return this1.fixed;
};
openfl_Vector.set_fixed = function(this1,value) {
	return this1.fixed = value;
};
openfl_Vector.get_length = function(this1) {
	return this1.get_length();
};
openfl_Vector.set_length = function(this1,value) {
	return this1.set_length(value);
};
var lime_utils_ObjectPool = function(create,clean,size) {
	this.__pool = new haxe_ds_ObjectMap();
	this.activeObjects = 0;
	this.inactiveObjects = 0;
	this.__inactiveObject0 = null;
	this.__inactiveObject1 = null;
	this.__inactiveObjectList = new haxe_ds_List();
	if(create != null) {
		this.create = create;
	}
	if(clean != null) {
		this.clean = clean;
	}
	if(size != null) {
		this.set_size(size);
	}
};
$hxClasses["lime.utils.ObjectPool"] = lime_utils_ObjectPool;
lime_utils_ObjectPool.__name__ = "lime.utils.ObjectPool";
lime_utils_ObjectPool.prototype = {
	activeObjects: null
	,inactiveObjects: null
	,__inactiveObject0: null
	,__inactiveObject1: null
	,__inactiveObjectList: null
	,__pool: null
	,__size: null
	,add: function(object) {
		if(!this.__pool.exists(object)) {
			this.__pool.set(object,false);
			this.clean(object);
			if(this.__inactiveObject0 == null) {
				this.__inactiveObject0 = object;
			} else if(this.__inactiveObject1 == null) {
				this.__inactiveObject1 = object;
			} else {
				this.__inactiveObjectList.add(object);
			}
			this.inactiveObjects++;
		}
	}
	,clean: function(object) {
	}
	,clear: function() {
		this.__pool = new haxe_ds_ObjectMap();
		this.activeObjects = 0;
		this.inactiveObjects = 0;
		this.__inactiveObject0 = null;
		this.__inactiveObject1 = null;
		this.__inactiveObjectList.clear();
	}
	,create: function() {
		return null;
	}
	,get: function() {
		var object = null;
		if(this.inactiveObjects > 0) {
			var object1 = null;
			if(this.__inactiveObject0 != null) {
				object1 = this.__inactiveObject0;
				this.__inactiveObject0 = null;
			} else if(this.__inactiveObject1 != null) {
				object1 = this.__inactiveObject1;
				this.__inactiveObject1 = null;
			} else {
				object1 = this.__inactiveObjectList.pop();
				if(this.__inactiveObjectList.length > 0) {
					this.__inactiveObject0 = this.__inactiveObjectList.pop();
				}
				if(this.__inactiveObjectList.length > 0) {
					this.__inactiveObject1 = this.__inactiveObjectList.pop();
				}
			}
			this.inactiveObjects--;
			this.activeObjects++;
			object = object1;
		} else if(this.__size == null || this.activeObjects < this.__size) {
			object = this.create();
			if(object != null) {
				this.__pool.set(object,true);
				this.activeObjects++;
			}
		}
		return object;
	}
	,release: function(object) {
		this.activeObjects--;
		if(this.__size == null || this.activeObjects + this.inactiveObjects < this.__size) {
			this.clean(object);
			if(this.__inactiveObject0 == null) {
				this.__inactiveObject0 = object;
			} else if(this.__inactiveObject1 == null) {
				this.__inactiveObject1 = object;
			} else {
				this.__inactiveObjectList.add(object);
			}
			this.inactiveObjects++;
		} else {
			this.__pool.remove(object);
		}
	}
	,remove: function(object) {
		if(this.__pool.exists(object)) {
			this.__pool.remove(object);
			if(this.__inactiveObject0 == object) {
				this.__inactiveObject0 = null;
				this.inactiveObjects--;
			} else if(this.__inactiveObject1 == object) {
				this.__inactiveObject1 = null;
				this.inactiveObjects--;
			} else if(this.__inactiveObjectList.remove(object)) {
				this.inactiveObjects--;
			} else {
				this.activeObjects--;
			}
		}
	}
	,__addInactive: function(object) {
		if(this.__inactiveObject0 == null) {
			this.__inactiveObject0 = object;
		} else if(this.__inactiveObject1 == null) {
			this.__inactiveObject1 = object;
		} else {
			this.__inactiveObjectList.add(object);
		}
		this.inactiveObjects++;
	}
	,__getInactive: function() {
		var object = null;
		if(this.__inactiveObject0 != null) {
			object = this.__inactiveObject0;
			this.__inactiveObject0 = null;
		} else if(this.__inactiveObject1 != null) {
			object = this.__inactiveObject1;
			this.__inactiveObject1 = null;
		} else {
			object = this.__inactiveObjectList.pop();
			if(this.__inactiveObjectList.length > 0) {
				this.__inactiveObject0 = this.__inactiveObjectList.pop();
			}
			if(this.__inactiveObjectList.length > 0) {
				this.__inactiveObject1 = this.__inactiveObjectList.pop();
			}
		}
		this.inactiveObjects--;
		this.activeObjects++;
		return object;
	}
	,__removeInactive: function(count) {
		if(count <= 0 || this.inactiveObjects == 0) {
			return;
		}
		if(this.__inactiveObject0 != null) {
			this.__pool.remove(this.__inactiveObject0);
			this.__inactiveObject0 = null;
			this.inactiveObjects--;
			--count;
		}
		if(count == 0 || this.inactiveObjects == 0) {
			return;
		}
		if(this.__inactiveObject1 != null) {
			this.__pool.remove(this.__inactiveObject1);
			this.__inactiveObject1 = null;
			this.inactiveObjects--;
			--count;
		}
		if(count == 0 || this.inactiveObjects == 0) {
			return;
		}
		var _g_head = this.__inactiveObjectList.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var object = val;
			this.__pool.remove(object);
			this.__inactiveObjectList.remove(object);
			this.inactiveObjects--;
			--count;
			if(count == 0 || this.inactiveObjects == 0) {
				return;
			}
		}
	}
	,get_size: function() {
		return this.__size;
	}
	,set_size: function(value) {
		if(value == null) {
			this.__size = null;
		} else {
			var current = this.inactiveObjects + this.activeObjects;
			this.__size = value;
			if(current > value) {
				this.__removeInactive(current - value);
			} else if(value > current) {
				var object;
				var _g = 0;
				var _g1 = value - current;
				while(_g < _g1) {
					var i = _g++;
					object = this.create();
					if(object != null) {
						this.__pool.set(object,false);
						this.__inactiveObjectList.add(object);
						this.inactiveObjects++;
					} else {
						break;
					}
				}
			}
		}
		return value;
	}
	,__class__: lime_utils_ObjectPool
	,__properties__: {set_size:"set_size",get_size:"get_size"}
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = "haxe.IMap";
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	get: null
	,set: null
	,exists: null
	,remove: null
	,keys: null
	,iterator: null
	,keyValueIterator: null
	,__class__: haxe_IMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = "haxe.ds.ObjectMap";
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.count = null;
haxe_ds_ObjectMap.prototype = {
	h: null
	,set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,keyValueIterator: function() {
		return new haxe_iterators_MapKeyValueIterator(this);
	}
	,toString: function() {
		var s_b = "";
		s_b += "{";
		var it = this.keys();
		var i = it;
		while(i.hasNext()) {
			var i1 = i.next();
			s_b += Std.string(Std.string(i1));
			s_b += " => ";
			s_b += Std.string(Std.string(this.h[i1.__id__]));
			if(it.hasNext()) {
				s_b += ", ";
			}
		}
		s_b += "}";
		return s_b;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
$hxClasses["haxe.ds.List"] = haxe_ds_List;
haxe_ds_List.__name__ = "haxe.ds.List";
haxe_ds_List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = new haxe_ds__$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l.item == v) {
				if(prev == null) {
					this.h = l.next;
				} else {
					prev.next = l.next;
				}
				if(this.q == l) {
					this.q = prev;
				}
				this.length--;
				return true;
			}
			prev = l;
			l = l.next;
		}
		return false;
	}
	,iterator: function() {
		return new haxe_ds__$List_ListIterator(this.h);
	}
	,__class__: haxe_ds_List
};
var openfl_display_DisplayObject = function() {
	openfl_events_EventDispatcher.call(this);
	this.__drawableType = 1;
	this.__alpha = 1;
	this.__blendMode = 10;
	this.__cacheAsBitmap = false;
	this.__transform = new openfl_geom_Matrix();
	this.__visible = true;
	this.__rotation = 0;
	this.__rotationSine = 0;
	this.__rotationCosine = 1;
	this.__scaleX = 1;
	this.__scaleY = 1;
	this.__worldAlpha = 1;
	this.__worldBlendMode = 10;
	this.__worldTransform = new openfl_geom_Matrix();
	this.__worldColorTransform = new openfl_geom_ColorTransform();
	this.__renderTransform = new openfl_geom_Matrix();
	this.__worldVisible = true;
	this.set_name("instance" + ++openfl_display_DisplayObject.__instanceCount);
	if(openfl_display_DisplayObject.__initStage != null) {
		this.stage = openfl_display_DisplayObject.__initStage;
		openfl_display_DisplayObject.__initStage = null;
		this.stage.addChild(this);
	}
};
$hxClasses["openfl.display.DisplayObject"] = openfl_display_DisplayObject;
openfl_display_DisplayObject.__name__ = "openfl.display.DisplayObject";
openfl_display_DisplayObject.__interfaces__ = [openfl_display_IBitmapDrawable];
openfl_display_DisplayObject.__initStage = null;
openfl_display_DisplayObject.__supportDOM = null;
openfl_display_DisplayObject.__calculateAbsoluteTransform = function(local,parentTransform,target) {
	target.a = local.a * parentTransform.a + local.b * parentTransform.c;
	target.b = local.a * parentTransform.b + local.b * parentTransform.d;
	target.c = local.c * parentTransform.a + local.d * parentTransform.c;
	target.d = local.c * parentTransform.b + local.d * parentTransform.d;
	target.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
	target.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
};
openfl_display_DisplayObject.__super__ = openfl_events_EventDispatcher;
openfl_display_DisplayObject.prototype = $extend(openfl_events_EventDispatcher.prototype,{
	opaqueBackground: null
	,parent: null
	,stage: null
	,__alpha: null
	,__blendMode: null
	,__cacheAsBitmap: null
	,__cacheAsBitmapMatrix: null
	,__cacheBitmap: null
	,__cacheBitmapBackground: null
	,__cacheBitmapColorTransform: null
	,__cacheBitmapData: null
	,__cacheBitmapData2: null
	,__cacheBitmapData3: null
	,__cacheBitmapMatrix: null
	,__cacheBitmapRenderer: null
	,__cairo: null
	,__children: null
	,__customRenderClear: null
	,__customRenderEvent: null
	,__drawableType: null
	,__filters: null
	,__graphics: null
	,__interactive: null
	,__isCacheBitmapRender: null
	,__isMask: null
	,__loaderInfo: null
	,__mask: null
	,__maskTarget: null
	,__name: null
	,__objectTransform: null
	,__renderable: null
	,__renderDirty: null
	,__renderParent: null
	,__renderTransform: null
	,__renderTransformCache: null
	,__renderTransformChanged: null
	,__rotation: null
	,__rotationCosine: null
	,__rotationSine: null
	,__scale9Grid: null
	,__scaleX: null
	,__scaleY: null
	,__scrollRect: null
	,__shader: null
	,__tempPoint: null
	,__transform: null
	,__transformDirty: null
	,__visible: null
	,__worldAlpha: null
	,__worldAlphaChanged: null
	,__worldBlendMode: null
	,__worldClip: null
	,__worldClipChanged: null
	,__worldColorTransform: null
	,__worldShader: null
	,__worldScale9Grid: null
	,__worldTransform: null
	,__worldVisible: null
	,__worldVisibleChanged: null
	,__worldTransformInvalid: null
	,__worldZ: null
	,__canvas: null
	,__context: null
	,__style: null
	,addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) {
			useWeakReference = false;
		}
		if(priority == null) {
			priority = 0;
		}
		if(useCapture == null) {
			useCapture = false;
		}
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!Object.prototype.hasOwnProperty.call(openfl_display_DisplayObject.__broadcastEvents.h,type)) {
				openfl_display_DisplayObject.__broadcastEvents.h[type] = [];
			}
			var dispatchers = openfl_display_DisplayObject.__broadcastEvents.h[type];
			if(dispatchers.indexOf(this) == -1) {
				dispatchers.push(this);
			}
			break;
		case "clearDOM":case "renderCairo":case "renderCanvas":case "renderDOM":case "renderOpenGL":
			if(this.__customRenderEvent == null) {
				this.__customRenderEvent = new openfl_events_RenderEvent(null);
				this.__customRenderEvent.objectColorTransform = new openfl_geom_ColorTransform();
				this.__customRenderEvent.objectMatrix = new openfl_geom_Matrix();
				this.__customRenderClear = true;
			}
			break;
		default:
		}
		openfl_events_EventDispatcher.prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
	}
	,dispatchEvent: function(event) {
		if(((event) instanceof openfl_events_MouseEvent)) {
			var mouseEvent = event;
			var _this = this.__getRenderTransform();
			mouseEvent.stageX = mouseEvent.localX * _this.a + mouseEvent.localY * _this.c + _this.tx;
			var _this = this.__getRenderTransform();
			mouseEvent.stageY = mouseEvent.localX * _this.b + mouseEvent.localY * _this.d + _this.ty;
		} else if(((event) instanceof openfl_events_TouchEvent)) {
			var touchEvent = event;
			var _this = this.__getRenderTransform();
			touchEvent.stageX = touchEvent.localX * _this.a + touchEvent.localY * _this.c + _this.tx;
			var _this = this.__getRenderTransform();
			touchEvent.stageY = touchEvent.localX * _this.b + touchEvent.localY * _this.d + _this.ty;
		}
		event.target = this;
		return this.__dispatchWithCapture(event);
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix = openfl_geom_Matrix.__pool.get();
		if(targetCoordinateSpace != null && targetCoordinateSpace != this) {
			matrix.copyFrom(this.__getWorldTransform());
			var targetMatrix = openfl_geom_Matrix.__pool.get();
			targetMatrix.copyFrom(targetCoordinateSpace.__getWorldTransform());
			targetMatrix.invert();
			matrix.concat(targetMatrix);
			openfl_geom_Matrix.__pool.release(targetMatrix);
		} else {
			matrix.identity();
		}
		var bounds = new openfl_geom_Rectangle();
		this.__getBounds(bounds,matrix);
		openfl_geom_Matrix.__pool.release(matrix);
		return bounds;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__globalToLocal(pos,new openfl_geom_Point());
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) {
			shapeFlag = false;
		}
		if(this.stage != null) {
			return this.__hitTest(x,y,shapeFlag,null,false,this);
		} else {
			return false;
		}
	}
	,invalidate: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
	}
	,localToGlobal: function(point) {
		return this.__getRenderTransform().transformPoint(point);
	}
	,removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) {
			useCapture = false;
		}
		openfl_events_EventDispatcher.prototype.removeEventListener.call(this,type,listener,useCapture);
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!this.hasEventListener(type)) {
				if(Object.prototype.hasOwnProperty.call(openfl_display_DisplayObject.__broadcastEvents.h,type)) {
					HxOverrides.remove(openfl_display_DisplayObject.__broadcastEvents.h[type],this);
				}
			}
			break;
		case "clearDOM":case "renderCairo":case "renderCanvas":case "renderDOM":case "renderOpenGL":
			if(!this.hasEventListener("clearDOM") && !this.hasEventListener("renderCairo") && !this.hasEventListener("renderCanvas") && !this.hasEventListener("renderDOM") && !this.hasEventListener("renderOpenGL")) {
				this.__customRenderEvent = null;
			}
			break;
		default:
		}
	}
	,__cleanup: function() {
		this.__cairo = null;
		this.__canvas = null;
		this.__context = null;
		if(this.__graphics != null) {
			this.__graphics.__cleanup();
		}
		if(this.__cacheBitmap != null) {
			this.__cacheBitmap.__cleanup();
			this.__cacheBitmap = null;
		}
		if(this.__cacheBitmapData != null) {
			this.__cacheBitmapData.dispose();
			this.__cacheBitmapData = null;
		}
	}
	,__dispatch: function(event) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl_events_EventDispatcher.prototype.__dispatchEvent.call(this,event);
			if(event.__isCanceled) {
				return true;
			}
			return result;
		}
		return true;
	}
	,__dispatchChildren: function(event) {
	}
	,__dispatchEvent: function(event) {
		var parent = event.bubbles ? this.parent : null;
		var result = openfl_events_EventDispatcher.prototype.__dispatchEvent.call(this,event);
		if(event.__isCanceled) {
			return true;
		}
		if(parent != null && parent != this) {
			event.eventPhase = 3;
			if(event.target == null) {
				event.target = this;
			}
			parent.__dispatchEvent(event);
		}
		return result;
	}
	,__dispatchWithCapture: function(event) {
		if(event.target == null) {
			event.target = this;
		}
		if(this.parent != null) {
			event.eventPhase = 1;
			if(this.parent == this.stage) {
				this.parent.__dispatch(event);
			} else {
				var stack = openfl_display_DisplayObject.__tempStack.get();
				var parent = this.parent;
				var i = 0;
				while(parent != null) {
					stack.set(i,parent);
					parent = parent.parent;
					++i;
				}
				var _g = 0;
				var _g1 = i;
				while(_g < _g1) {
					var j = _g++;
					stack.get(i - j - 1).__dispatch(event);
				}
				openfl_display_DisplayObject.__tempStack.release(stack);
			}
		}
		event.eventPhase = 2;
		return this.__dispatchEvent(event);
	}
	,__enterFrame: function(deltaTime) {
	}
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) {
			this.__graphics.__getBounds(rect,matrix);
		}
	}
	,__getCursor: function() {
		return null;
	}
	,__getFilterBounds: function(rect,matrix) {
		this.__getRenderBounds(rect,matrix);
		if(this.__filters != null) {
			var extension = openfl_geom_Rectangle.__pool.get();
			var _g = 0;
			var _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				extension.__expand(-filter.__leftExtension,-filter.__topExtension,filter.__leftExtension + filter.__rightExtension,filter.__topExtension + filter.__bottomExtension);
			}
			rect.width += extension.width;
			rect.height += extension.height;
			rect.x += extension.x;
			rect.y += extension.y;
			openfl_geom_Rectangle.__pool.release(extension);
		}
	}
	,__getInteractive: function(stack) {
		return false;
	}
	,__getLocalBounds: function(rect) {
		this.__getBounds(rect,this.__transform);
		rect.x -= this.__transform.tx;
		rect.y -= this.__transform.ty;
	}
	,__getRenderBounds: function(rect,matrix) {
		if(this.__scrollRect == null) {
			this.__getBounds(rect,matrix);
		} else {
			var r = openfl_geom_Rectangle.__pool.get();
			r.copyFrom(this.__scrollRect);
			r.__transform(r,matrix);
			rect.__expand(r.x,r.y,r.width,r.height);
			openfl_geom_Rectangle.__pool.release(r);
		}
	}
	,__getRenderTransform: function() {
		this.__getWorldTransform();
		return this.__renderTransform;
	}
	,__getWorldTransform: function() {
		var transformDirty = this.__transformDirty || this.__worldTransformInvalid;
		if(transformDirty) {
			var list = [];
			var current = this;
			if(this.parent == null) {
				this.__update(true,false);
			} else {
				while(current != this.stage) {
					list.push(current);
					current = current.parent;
					if(current == null) {
						break;
					}
				}
			}
			var i = list.length;
			while(--i >= 0) {
				current = list[i];
				current.__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__globalToLocal: function(global,local) {
		this.__getRenderTransform();
		if(global == local) {
			var _this = this.__renderTransform;
			var norm = _this.a * _this.d - _this.b * _this.c;
			if(norm == 0) {
				global.x = -_this.tx;
				global.y = -_this.ty;
			} else {
				var px = 1.0 / norm * (_this.c * (_this.ty - global.y) + _this.d * (global.x - _this.tx));
				global.y = 1.0 / norm * (_this.a * (global.y - _this.ty) + _this.b * (_this.tx - global.x));
				global.x = px;
			}
		} else {
			var _this = this.__renderTransform;
			var norm = _this.a * _this.d - _this.b * _this.c;
			local.x = norm == 0 ? -_this.tx : 1.0 / norm * (_this.c * (_this.ty - global.y) + _this.d * (global.x - _this.tx));
			var _this = this.__renderTransform;
			var norm = _this.a * _this.d - _this.b * _this.c;
			local.y = norm == 0 ? -_this.ty : 1.0 / norm * (_this.a * (global.y - _this.ty) + _this.b * (_this.tx - global.x));
		}
		return local;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.__graphics != null) {
			if(!hitObject.__visible || this.__isMask) {
				return false;
			}
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
				return false;
			}
			if(this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
				if(stack != null && !interactiveOnly) {
					stack.push(hitObject);
				}
				return true;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.__graphics != null) {
			if(this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) {
				return true;
			}
		}
		return false;
	}
	,__readGraphicsData: function(graphicsData,recurse) {
		if(this.__graphics != null) {
			this.__graphics.__readGraphicsData(graphicsData);
		}
	}
	,__setParentRenderDirty: function() {
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(renderParent != null && !renderParent.__renderDirty) {
			renderParent.__renderDirty = true;
			renderParent.__setParentRenderDirty();
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
	}
	,__setStageReference: function(stage) {
		this.stage = stage;
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			this.__setWorldTransformInvalid();
			this.__setParentRenderDirty();
		}
	}
	,__setWorldTransformInvalid: function() {
		this.__worldTransformInvalid = true;
	}
	,__stopAllMovieClips: function() {
	}
	,__update: function(transformOnly,updateChildren) {
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(this.__isMask && renderParent == null) {
			renderParent = this.__maskTarget;
		}
		this.__renderable = this.__visible && this.__scaleX != 0 && this.__scaleY != 0 && !this.__isMask && (renderParent == null || !renderParent.__isMask);
		this.__updateTransforms();
		this.__transformDirty = false;
		this.__worldTransformInvalid = false;
		if(!transformOnly) {
			if(openfl_display_DisplayObject.__supportDOM) {
				this.__renderTransformChanged = !this.__renderTransform.equals(this.__renderTransformCache);
				if(this.__renderTransformCache == null) {
					this.__renderTransformCache = this.__renderTransform.clone();
				} else {
					this.__renderTransformCache.copyFrom(this.__renderTransform);
				}
			}
			if(renderParent != null) {
				if(openfl_display_DisplayObject.__supportDOM) {
					var worldVisible = renderParent.__worldVisible && this.__visible;
					this.__worldVisibleChanged = this.__worldVisible != worldVisible;
					this.__worldVisible = worldVisible;
					var worldAlpha = this.get_alpha() * renderParent.__worldAlpha;
					this.__worldAlphaChanged = this.__worldAlpha != worldAlpha;
					this.__worldAlpha = worldAlpha;
				} else {
					this.__worldAlpha = this.get_alpha() * renderParent.__worldAlpha;
				}
				if(this.__objectTransform != null) {
					this.__worldColorTransform.__copyFrom(this.__objectTransform.__colorTransform);
					this.__worldColorTransform.__combine(renderParent.__worldColorTransform);
				} else {
					this.__worldColorTransform.__copyFrom(renderParent.__worldColorTransform);
				}
				if(this.__blendMode == null || this.__blendMode == 10) {
					this.__worldBlendMode = renderParent.__worldBlendMode;
				} else {
					this.__worldBlendMode = this.__blendMode;
				}
				if(this.__shader == null) {
					this.__worldShader = renderParent.__shader;
				} else {
					this.__worldShader = this.__shader;
				}
				if(this.__scale9Grid == null) {
					this.__worldScale9Grid = renderParent.__scale9Grid;
				} else {
					this.__worldScale9Grid = this.__scale9Grid;
				}
			} else {
				this.__worldAlpha = this.get_alpha();
				if(openfl_display_DisplayObject.__supportDOM) {
					this.__worldVisibleChanged = this.__worldVisible != this.__visible;
					this.__worldVisible = this.__visible;
					this.__worldAlphaChanged = this.__worldAlpha != this.get_alpha();
				}
				if(this.__objectTransform != null) {
					this.__worldColorTransform.__copyFrom(this.__objectTransform.__colorTransform);
				} else {
					this.__worldColorTransform.__identity();
				}
				this.__worldBlendMode = this.__blendMode;
				this.__worldShader = this.__shader;
				this.__worldScale9Grid = this.__scale9Grid;
			}
		}
		if(updateChildren && this.get_mask() != null) {
			this.get_mask().__update(transformOnly,true);
		}
	}
	,__updateTransforms: function(overrideTransform) {
		var overrided = overrideTransform != null;
		var local = overrided ? overrideTransform : this.__transform;
		if(this.__worldTransform == null) {
			this.__worldTransform = new openfl_geom_Matrix();
		}
		if(this.__renderTransform == null) {
			this.__renderTransform = new openfl_geom_Matrix();
		}
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(!overrided && this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var target = this.__worldTransform;
			target.a = local.a * parentTransform.a + local.b * parentTransform.c;
			target.b = local.a * parentTransform.b + local.b * parentTransform.d;
			target.c = local.c * parentTransform.a + local.d * parentTransform.c;
			target.d = local.c * parentTransform.b + local.d * parentTransform.d;
			target.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
			target.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
		} else {
			this.__worldTransform.copyFrom(local);
		}
		if(!overrided && renderParent != null) {
			var parentTransform = renderParent.__renderTransform;
			var target = this.__renderTransform;
			target.a = local.a * parentTransform.a + local.b * parentTransform.c;
			target.b = local.a * parentTransform.b + local.b * parentTransform.d;
			target.c = local.c * parentTransform.a + local.d * parentTransform.c;
			target.d = local.c * parentTransform.b + local.d * parentTransform.d;
			target.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
			target.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
		} else {
			this.__renderTransform.copyFrom(local);
		}
		if(this.__scrollRect != null) {
			var _this = this.__renderTransform;
			var px = -this.__scrollRect.x;
			var py = -this.__scrollRect.y;
			_this.tx = px * _this.a + py * _this.c + _this.tx;
			_this.ty = px * _this.b + py * _this.d + _this.ty;
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value > 1.0) {
			value = 1.0;
		}
		if(value < 0.0) {
			value = 0.0;
		}
		if(value != this.__alpha && !this.get_cacheAsBitmap()) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return this.__alpha = value;
	}
	,get_blendMode: function() {
		return this.__blendMode;
	}
	,set_blendMode: function(value) {
		if(value == null) {
			value = 10;
		}
		if(value != this.__blendMode) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return this.__blendMode = value;
	}
	,get_cacheAsBitmap: function() {
		if(this.__filters == null) {
			return this.__cacheAsBitmap;
		} else {
			return true;
		}
	}
	,set_cacheAsBitmap: function(value) {
		if(value != this.__cacheAsBitmap) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return this.__cacheAsBitmap = value;
	}
	,get_cacheAsBitmapMatrix: function() {
		return this.__cacheAsBitmapMatrix;
	}
	,set_cacheAsBitmapMatrix: function(value) {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
		return this.__cacheAsBitmapMatrix = value != null ? value.clone() : value;
	}
	,get_filters: function() {
		if(this.__filters == null) {
			return [];
		} else {
			return this.__filters.slice();
		}
	}
	,set_filters: function(value) {
		if(value != null && value.length > 0) {
			this.__filters = value;
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		} else if(this.__filters != null) {
			this.__filters = null;
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return value;
	}
	,get_height: function() {
		var rect = openfl_geom_Rectangle.__pool.get();
		this.__getLocalBounds(rect);
		var height = rect.height;
		openfl_geom_Rectangle.__pool.release(rect);
		return height;
	}
	,set_height: function(value) {
		var rect = openfl_geom_Rectangle.__pool.get();
		var matrix = openfl_geom_Matrix.__pool.get();
		matrix.identity();
		this.__getBounds(rect,matrix);
		if(value != rect.height) {
			this.set_scaleY(value / rect.height);
		} else {
			this.set_scaleY(1);
		}
		openfl_geom_Rectangle.__pool.release(rect);
		openfl_geom_Matrix.__pool.release(matrix);
		return value;
	}
	,get_loaderInfo: function() {
		if(this.stage != null) {
			return openfl_utils__$internal_Lib.current.__loaderInfo;
		}
		return null;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value == this.__mask) {
			return value;
		}
		if(value != this.__mask) {
			this.__setTransformDirty();
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		if(this.__mask != null) {
			this.__mask.__isMask = false;
			this.__mask.__maskTarget = null;
			this.__mask.__setTransformDirty();
			var _this = this.__mask;
			if(!_this.__renderDirty) {
				_this.__renderDirty = true;
				_this.__setParentRenderDirty();
			}
		}
		if(value != null) {
			value.__isMask = true;
			value.__maskTarget = this;
			value.__setWorldTransformInvalid();
		}
		if(this.__cacheBitmap != null && this.__cacheBitmap.get_mask() != value) {
			this.__cacheBitmap.set_mask(value);
		}
		return this.__mask = value;
	}
	,get_mouseX: function() {
		var mouseX = this.stage != null ? this.stage.__mouseX : openfl_utils__$internal_Lib.current.stage.__mouseX;
		var mouseY = this.stage != null ? this.stage.__mouseY : openfl_utils__$internal_Lib.current.stage.__mouseY;
		var _this = this.__getRenderTransform();
		var norm = _this.a * _this.d - _this.b * _this.c;
		if(norm == 0) {
			return -_this.tx;
		} else {
			return 1.0 / norm * (_this.c * (_this.ty - mouseY) + _this.d * (mouseX - _this.tx));
		}
	}
	,get_mouseY: function() {
		var mouseX = this.stage != null ? this.stage.__mouseX : openfl_utils__$internal_Lib.current.stage.__mouseX;
		var mouseY = this.stage != null ? this.stage.__mouseY : openfl_utils__$internal_Lib.current.stage.__mouseY;
		var _this = this.__getRenderTransform();
		var norm = _this.a * _this.d - _this.b * _this.c;
		if(norm == 0) {
			return -_this.ty;
		} else {
			return 1.0 / norm * (_this.a * (mouseY - _this.ty) + _this.b * (_this.tx - mouseX));
		}
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_root: function() {
		if(this.stage != null) {
			return openfl_utils__$internal_Lib.current;
		}
		return null;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			this.__rotation = value;
			var radians = this.__rotation * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
			this.__transform.a = this.__rotationCosine * this.__scaleX;
			this.__transform.b = this.__rotationSine * this.__scaleX;
			this.__transform.c = -this.__rotationSine * this.__scaleY;
			this.__transform.d = this.__rotationCosine * this.__scaleY;
			this.__setTransformDirty();
		}
		return value;
	}
	,get_scale9Grid: function() {
		if(this.__scale9Grid == null) {
			return null;
		}
		return this.__scale9Grid.clone();
	}
	,set_scale9Grid: function(value) {
		if(value == null && this.__scale9Grid == null) {
			return value;
		}
		if(value != null && this.__scale9Grid != null && this.__scale9Grid.equals(value)) {
			return value;
		}
		if(value != null) {
			if(this.__scale9Grid == null) {
				this.__scale9Grid = new openfl_geom_Rectangle();
			}
			this.__scale9Grid.copyFrom(value);
		} else {
			this.__scale9Grid = null;
		}
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
		return value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			this.__scaleX = value;
			if(this.__transform.b == 0) {
				if(value != this.__transform.a) {
					this.__setTransformDirty();
				}
				this.__transform.a = value;
			} else {
				var a = this.__rotationCosine * value;
				var b = this.__rotationSine * value;
				if(this.__transform.a != a || this.__transform.b != b) {
					this.__setTransformDirty();
				}
				this.__transform.a = a;
				this.__transform.b = b;
			}
		}
		return value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(value != this.__scaleY) {
			this.__scaleY = value;
			if(this.__transform.c == 0) {
				if(value != this.__transform.d) {
					this.__setTransformDirty();
				}
				this.__transform.d = value;
			} else {
				var c = -this.__rotationSine * value;
				var d = this.__rotationCosine * value;
				if(this.__transform.d != d || this.__transform.c != c) {
					this.__setTransformDirty();
				}
				this.__transform.c = c;
				this.__transform.d = d;
			}
		}
		return value;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) {
			return null;
		}
		return this.__scrollRect.clone();
	}
	,set_scrollRect: function(value) {
		if(value == null && this.__scrollRect == null) {
			return value;
		}
		if(value != null && this.__scrollRect != null && this.__scrollRect.equals(value)) {
			return value;
		}
		if(value != null) {
			if(this.__scrollRect == null) {
				this.__scrollRect = new openfl_geom_Rectangle();
			}
			this.__scrollRect.copyFrom(value);
		} else {
			this.__scrollRect = null;
		}
		this.__setTransformDirty();
		if(openfl_display_DisplayObject.__supportDOM) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return value;
	}
	,get_shader: function() {
		return this.__shader;
	}
	,set_shader: function(value) {
		this.__shader = value;
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
		return value;
	}
	,get_transform: function() {
		if(this.__objectTransform == null) {
			this.__objectTransform = new openfl_geom_Transform(this);
		}
		return this.__objectTransform;
	}
	,set_transform: function(value) {
		if(value == null) {
			throw haxe_Exception.thrown(new openfl_errors_TypeError("Parameter transform must be non-null."));
		}
		if(this.__objectTransform == null) {
			this.__objectTransform = new openfl_geom_Transform(this);
		}
		this.__setTransformDirty();
		this.__objectTransform.set_matrix(value.get_matrix());
		if(!this.__objectTransform.__colorTransform.__equals(value.__colorTransform,true) || !this.get_cacheAsBitmap() && this.__objectTransform.__colorTransform.alphaMultiplier != value.__colorTransform.alphaMultiplier) {
			this.__objectTransform.__colorTransform.__copyFrom(value.get_colorTransform());
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return this.__objectTransform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var rect = openfl_geom_Rectangle.__pool.get();
		this.__getLocalBounds(rect);
		var width = rect.width;
		openfl_geom_Rectangle.__pool.release(rect);
		return width;
	}
	,set_width: function(value) {
		var rect = openfl_geom_Rectangle.__pool.get();
		var matrix = openfl_geom_Matrix.__pool.get();
		matrix.identity();
		this.__getBounds(rect,matrix);
		if(value != rect.width) {
			this.set_scaleX(value / rect.width);
		} else {
			this.set_scaleX(1);
		}
		openfl_geom_Rectangle.__pool.release(rect);
		openfl_geom_Matrix.__pool.release(matrix);
		return value;
	}
	,get_x: function() {
		return this.__transform.tx;
	}
	,set_x: function(value) {
		if(value != this.__transform.tx) {
			this.__setTransformDirty();
		}
		return this.__transform.tx = value;
	}
	,get_y: function() {
		return this.__transform.ty;
	}
	,set_y: function(value) {
		if(value != this.__transform.ty) {
			this.__setTransformDirty();
		}
		return this.__transform.ty = value;
	}
	,__class__: openfl_display_DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_transform:"get_transform",set_shader:"set_shader",get_shader:"get_shader",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scale9Grid:"set_scale9Grid",get_scale9Grid:"get_scale9Grid",set_rotation:"set_rotation",get_rotation:"get_rotation",get_root:"get_root",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",get_loaderInfo:"get_loaderInfo",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_cacheAsBitmapMatrix:"set_cacheAsBitmapMatrix",get_cacheAsBitmapMatrix:"get_cacheAsBitmapMatrix",set_cacheAsBitmap:"set_cacheAsBitmap",get_cacheAsBitmap:"get_cacheAsBitmap",set_blendMode:"set_blendMode",get_blendMode:"get_blendMode",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
var openfl_display_InteractiveObject = function() {
	openfl_display_DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.__tabEnabled = null;
	this.__tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl_display_InteractiveObject;
openfl_display_InteractiveObject.__name__ = "openfl.display.InteractiveObject";
openfl_display_InteractiveObject.__super__ = openfl_display_DisplayObject;
openfl_display_InteractiveObject.prototype = $extend(openfl_display_DisplayObject.prototype,{
	doubleClickEnabled: null
	,focusRect: null
	,mouseEnabled: null
	,needsSoftKeyboard: null
	,softKeyboardInputAreaOfInterest: null
	,__tabEnabled: null
	,__tabIndex: null
	,requestSoftKeyboard: function() {
		openfl_utils__$internal_Lib.notImplemented({ fileName : "openfl/display/InteractiveObject.hx", lineNumber : 1251, className : "openfl.display.InteractiveObject", methodName : "requestSoftKeyboard"});
		return false;
	}
	,__allowMouseFocus: function() {
		return this.get_tabEnabled();
	}
	,__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
			if(this.parent != null) {
				this.parent.__getInteractive(stack);
			}
		}
		return true;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) {
			return false;
		}
		return openfl_display_DisplayObject.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject);
	}
	,__tabTest: function(stack) {
		if(this.get_tabEnabled()) {
			stack.push(this);
		}
	}
	,get_tabEnabled: function() {
		if(this.__tabEnabled == true) {
			return true;
		} else {
			return false;
		}
	}
	,set_tabEnabled: function(value) {
		if(this.__tabEnabled != value) {
			this.__tabEnabled = value;
			this.dispatchEvent(new openfl_events_Event("tabEnabledChange",true,false));
		}
		return this.__tabEnabled;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,set_tabIndex: function(value) {
		if(this.__tabIndex != value) {
			if(value < -1) {
				throw haxe_Exception.thrown(new openfl_errors_RangeError("Parameter tabIndex must be a non-negative number; got " + value));
			}
			this.__tabIndex = value;
			this.dispatchEvent(new openfl_events_Event("tabIndexChange",true,false));
		}
		return this.__tabIndex;
	}
	,__class__: openfl_display_InteractiveObject
	,__properties__: $extend(openfl_display_DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex",set_tabEnabled:"set_tabEnabled",get_tabEnabled:"get_tabEnabled"})
});
var openfl_display_DisplayObjectContainer = function() {
	openfl_display_InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__tabChildren = true;
	this.__children = [];
	this.__removedChildren = openfl_Vector.toObjectVector(null);
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl_display_DisplayObjectContainer;
openfl_display_DisplayObjectContainer.__name__ = "openfl.display.DisplayObjectContainer";
openfl_display_DisplayObjectContainer.__super__ = openfl_display_InteractiveObject;
openfl_display_DisplayObjectContainer.prototype = $extend(openfl_display_InteractiveObject.prototype,{
	mouseChildren: null
	,__removedChildren: null
	,__tabChildren: null
	,addChild: function(child) {
		return this.addChildAt(child,this.get_numChildren());
	}
	,addChildAt: function(child,index) {
		if(child == null) {
			var error = new openfl_errors_TypeError("Error #2007: Parameter child must be non-null.");
			error.errorID = 2007;
			throw haxe_Exception.thrown(error);
		} else if(child.stage == child) {
			var error = new openfl_errors_ArgumentError("Error #3783: A Stage object cannot be added as the child of another object.");
			error.errorID = 3783;
			throw haxe_Exception.thrown(error);
		}
		if(index > this.__children.length || index < 0) {
			throw haxe_Exception.thrown("Invalid index position " + index);
		}
		if(child.parent == this) {
			if(this.__children[index] != child) {
				HxOverrides.remove(this.__children,child);
				this.__children.splice(index,0,child);
				if(!this.__renderDirty) {
					this.__renderDirty = true;
					this.__setParentRenderDirty();
				}
			}
		} else {
			if(child.parent != null) {
				child.parent.removeChild(child);
			}
			this.__children.splice(index,0,child);
			child.parent = this;
			var addedToStage = this.stage != null && child.stage == null;
			if(addedToStage) {
				child.__setStageReference(this.stage);
			}
			child.__setTransformDirty();
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				child.__setParentRenderDirty();
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
			var event = new openfl_events_Event("added");
			event.bubbles = true;
			event.target = child;
			child.__dispatchWithCapture(event);
			if(addedToStage) {
				event = new openfl_events_Event("addedToStage",false,false);
				child.__dispatchWithCapture(event);
				child.__dispatchChildren(event);
			}
		}
		return child;
	}
	,areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
	,contains: function(child) {
		while(child != this && child != null) child = child.parent;
		return child == this;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) {
			return this.__children[index];
		}
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) {
				return child;
			}
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g = 0;
		var _g1 = this.__children.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.__children[i] == child) {
				return i;
			}
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		var stack = [];
		this.__hitTest(point.x,point.y,false,stack,false,this);
		stack.reverse();
		return stack;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			child.__setTransformDirty();
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				child.__setParentRenderDirty();
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
			var event = new openfl_events_Event("removed",true);
			child.__dispatchWithCapture(event);
			if(this.stage != null) {
				if(child.stage != null && this.stage.get_focus() == child) {
					this.stage.set_focus(null);
				}
				var event = new openfl_events_Event("removedFromStage",false,false);
				child.__dispatchWithCapture(event);
				child.__dispatchChildren(event);
				child.__setStageReference(null);
			}
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			child.__setTransformDirty();
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) {
			return this.removeChild(this.__children[index]);
		}
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = 2147483647;
		}
		if(beginIndex == null) {
			beginIndex = 0;
		}
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) {
				return;
			}
		}
		if(beginIndex > this.__children.length - 1) {
			return;
		} else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) {
			throw haxe_Exception.thrown(new openfl_errors_RangeError("The supplied index is out of bounds."));
		}
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			--numRemovals;
		}
	}
	,resolve: function(fieldName) {
		if(this.__children == null) {
			return null;
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == fieldName) {
				return child;
			}
		}
		return null;
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,stopAllMovieClips: function() {
		this.__stopAllMovieClips();
	}
	,swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = this.__children.indexOf(child1);
			var index2 = this.__children.indexOf(child2);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				this.__setParentRenderDirty();
			}
		}
	}
	,swapChildrenAt: function(index1,index2) {
		var swap = this.__children[index1];
		this.__children[index1] = this.__children[index2];
		this.__children[index2] = swap;
		swap = null;
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
	}
	,__cleanup: function() {
		openfl_display_InteractiveObject.prototype.__cleanup.call(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__cleanup();
		}
		var orphan = this.__removedChildren.iterator();
		while(orphan.hasNext()) {
			var orphan1 = orphan.next();
			if(orphan1.stage == null) {
				orphan1.__cleanup();
			}
		}
		this.__removedChildren.set_length(0);
	}
	,__cleanupRemovedChildren: function() {
		var orphan = this.__removedChildren.iterator();
		while(orphan.hasNext()) {
			var orphan1 = orphan.next();
			if(orphan1.stage == null) {
				orphan1.__cleanup();
			}
		}
		this.__removedChildren.set_length(0);
	}
	,__dispatchChildren: function(event) {
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				event.target = child;
				if(!child.__dispatchWithCapture(event)) {
					break;
				}
				child.__dispatchChildren(event);
			}
		}
	}
	,__enterFrame: function(deltaTime) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__enterFrame(deltaTime);
		}
	}
	,__getBounds: function(rect,matrix) {
		openfl_display_InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = openfl_geom_Matrix.__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0) {
				continue;
			}
			var local = child.__transform;
			childWorldTransform.a = local.a * matrix.a + local.b * matrix.c;
			childWorldTransform.b = local.a * matrix.b + local.b * matrix.d;
			childWorldTransform.c = local.c * matrix.a + local.d * matrix.c;
			childWorldTransform.d = local.c * matrix.b + local.d * matrix.d;
			childWorldTransform.tx = local.tx * matrix.a + local.ty * matrix.c + matrix.tx;
			childWorldTransform.ty = local.tx * matrix.b + local.ty * matrix.d + matrix.ty;
			child.__getBounds(rect,childWorldTransform);
		}
		openfl_geom_Matrix.__pool.release(childWorldTransform);
	}
	,__getFilterBounds: function(rect,matrix) {
		openfl_display_InteractiveObject.prototype.__getFilterBounds.call(this,rect,matrix);
		if(this.__scrollRect != null) {
			return;
		}
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = openfl_geom_Matrix.__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0 || child.__isMask) {
				continue;
			}
			var local = child.__transform;
			childWorldTransform.a = local.a * matrix.a + local.b * matrix.c;
			childWorldTransform.b = local.a * matrix.b + local.b * matrix.d;
			childWorldTransform.c = local.c * matrix.a + local.d * matrix.c;
			childWorldTransform.d = local.c * matrix.b + local.d * matrix.d;
			childWorldTransform.tx = local.tx * matrix.a + local.ty * matrix.c + matrix.tx;
			childWorldTransform.ty = local.tx * matrix.b + local.ty * matrix.d + matrix.ty;
			var childRect = openfl_geom_Rectangle.__pool.get();
			child.__getFilterBounds(childRect,childWorldTransform);
			rect.__expand(childRect.x,childRect.y,childRect.width,childRect.height);
			openfl_geom_Rectangle.__pool.release(childRect);
		}
		openfl_geom_Matrix.__pool.release(childWorldTransform);
	}
	,__getRenderBounds: function(rect,matrix) {
		if(this.__scrollRect != null) {
			openfl_display_InteractiveObject.prototype.__getRenderBounds.call(this,rect,matrix);
			return;
		} else {
			openfl_display_InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		}
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = openfl_geom_Matrix.__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0 || child.__isMask) {
				continue;
			}
			var local = child.__transform;
			childWorldTransform.a = local.a * matrix.a + local.b * matrix.c;
			childWorldTransform.b = local.a * matrix.b + local.b * matrix.d;
			childWorldTransform.c = local.c * matrix.a + local.d * matrix.c;
			childWorldTransform.d = local.c * matrix.b + local.d * matrix.d;
			childWorldTransform.tx = local.tx * matrix.a + local.ty * matrix.c + matrix.tx;
			childWorldTransform.ty = local.tx * matrix.b + local.ty * matrix.d + matrix.ty;
			child.__getRenderBounds(rect,childWorldTransform);
		}
		openfl_geom_Matrix.__pool.release(childWorldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		if(this.__scrollRect != null) {
			var point = openfl_geom_Point.__pool.get();
			point.setTo(x,y);
			var _this = this.__getRenderTransform();
			var norm = _this.a * _this.d - _this.b * _this.c;
			if(norm == 0) {
				point.x = -_this.tx;
				point.y = -_this.ty;
			} else {
				var px = 1.0 / norm * (_this.c * (_this.ty - point.y) + _this.d * (point.x - _this.tx));
				point.y = 1.0 / norm * (_this.a * (point.y - _this.ty) + _this.b * (_this.tx - point.x));
				point.x = px;
			}
			if(!this.__scrollRect.containsPoint(point)) {
				openfl_geom_Point.__pool.release(point);
				return false;
			}
			openfl_geom_Point.__pool.release(point);
		}
		var i = this.__children.length;
		if(interactiveOnly) {
			if(stack == null || !this.mouseChildren) {
				while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,true,this.__children[i])) {
					if(stack != null) {
						stack.push(hitObject);
					}
					return true;
				}
			} else if(stack != null) {
				var length = stack.length;
				var interactive = false;
				var hitTest = false;
				while(--i >= 0) {
					interactive = this.__children[i].__getInteractive(null);
					if(interactive || this.mouseEnabled && !hitTest) {
						if(this.__children[i].__hitTest(x,y,shapeFlag,stack,true,this.__children[i])) {
							hitTest = true;
							if(interactive && stack.length > length) {
								break;
							}
						}
					}
				}
				if(hitTest) {
					stack.splice(length,0,hitObject);
					return true;
				}
			}
		} else {
			var hitTest = false;
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,stack,false,this.__children[i])) {
				hitTest = true;
				if(stack == null) {
					break;
				}
			}
			return hitTest;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		var i = this.__children.length;
		while(--i >= 0) if(this.__children[i].__hitTestMask(x,y)) {
			return true;
		}
		return false;
	}
	,__readGraphicsData: function(graphicsData,recurse) {
		openfl_display_InteractiveObject.prototype.__readGraphicsData.call(this,graphicsData,recurse);
		if(recurse) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__readGraphicsData(graphicsData,recurse);
			}
		}
	}
	,__setStageReference: function(stage) {
		openfl_display_InteractiveObject.prototype.__setStageReference.call(this,stage);
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__setWorldTransformInvalid: function() {
		if(!this.__worldTransformInvalid) {
			this.__worldTransformInvalid = true;
			if(this.__children != null) {
				var _g = 0;
				var _g1 = this.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					child.__setWorldTransformInvalid();
				}
			}
		}
	}
	,__stopAllMovieClips: function() {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__stopAllMovieClips();
		}
	}
	,__tabTest: function(stack) {
		openfl_display_InteractiveObject.prototype.__tabTest.call(this,stack);
		if(!this.get_tabChildren()) {
			return;
		}
		var interactive = false;
		var interactiveObject = null;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			interactive = child.__getInteractive(null);
			if(interactive) {
				interactiveObject = child;
				interactiveObject.__tabTest(stack);
			}
		}
	}
	,__update: function(transformOnly,updateChildren) {
		openfl_display_InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren);
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true);
			}
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,get_tabChildren: function() {
		return this.__tabChildren;
	}
	,set_tabChildren: function(value) {
		if(this.__tabChildren != value) {
			this.__tabChildren = value;
			this.dispatchEvent(new openfl_events_Event("tabChildrenChange",true,false));
		}
		return this.__tabChildren;
	}
	,__class__: openfl_display_DisplayObjectContainer
	,__properties__: $extend(openfl_display_InteractiveObject.prototype.__properties__,{set_tabChildren:"set_tabChildren",get_tabChildren:"get_tabChildren",get_numChildren:"get_numChildren"})
});
var openfl_display_Sprite = function() {
	openfl_display_DisplayObjectContainer.call(this);
	this.__drawableType = 4;
	this.__buttonMode = false;
	this.useHandCursor = true;
};
$hxClasses["openfl.display.Sprite"] = openfl_display_Sprite;
openfl_display_Sprite.__name__ = "openfl.display.Sprite";
openfl_display_Sprite.__super__ = openfl_display_DisplayObjectContainer;
openfl_display_Sprite.prototype = $extend(openfl_display_DisplayObjectContainer.prototype,{
	dropTarget: null
	,hitArea: null
	,useHandCursor: null
	,__buttonMode: null
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) {
			lockCenter = false;
		}
		if(this.stage != null) {
			this.stage.__startDrag(this,lockCenter,bounds);
		}
	}
	,stopDrag: function() {
		if(this.stage != null) {
			this.stage.__stopDrag(this);
		}
	}
	,__getCursor: function() {
		if(this.__buttonMode && this.useHandCursor) {
			return "button";
		} else {
			return null;
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(interactiveOnly && !this.mouseEnabled && !this.mouseChildren) {
			return false;
		}
		if(!hitObject.get_visible() || this.__isMask) {
			return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
		}
		if(this.__scrollRect != null) {
			var point = openfl_geom_Point.__pool.get();
			point.setTo(x,y);
			var _this = this.__getRenderTransform();
			var norm = _this.a * _this.d - _this.b * _this.c;
			if(norm == 0) {
				point.x = -_this.tx;
				point.y = -_this.ty;
			} else {
				var px = 1.0 / norm * (_this.c * (_this.ty - point.y) + _this.d * (point.x - _this.tx));
				point.y = 1.0 / norm * (_this.a * (point.y - _this.ty) + _this.b * (_this.tx - point.x));
				point.x = px;
			}
			if(!this.__scrollRect.containsPoint(point)) {
				openfl_geom_Point.__pool.release(point);
				return this.__hitTestHitArea(x,y,shapeFlag,stack,true,hitObject);
			}
			openfl_geom_Point.__pool.release(point);
		}
		if(openfl_display_DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject)) {
			if(stack != null) {
				return interactiveOnly;
			} else {
				return true;
			}
		} else if(this.hitArea == null && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
			if(stack != null && (!interactiveOnly || this.mouseEnabled)) {
				stack.push(hitObject);
			}
			return true;
		}
		return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
	}
	,__hitTestHitArea: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.hitArea != null) {
			if(!this.hitArea.mouseEnabled) {
				this.hitArea.mouseEnabled = true;
				var hitTest = this.hitArea.__hitTest(x,y,shapeFlag,null,true,hitObject);
				this.hitArea.mouseEnabled = false;
				if(stack != null && hitTest) {
					stack[stack.length] = hitObject;
				}
				return hitTest;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(openfl_display_DisplayObjectContainer.prototype.__hitTestMask.call(this,x,y)) {
			return true;
		} else if(this.__graphics != null && this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) {
			return true;
		}
		return false;
	}
	,get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new openfl_display_Graphics(this);
		}
		return this.__graphics;
	}
	,get_tabEnabled: function() {
		if(this.__tabEnabled == null) {
			return this.__buttonMode;
		} else {
			return this.__tabEnabled;
		}
	}
	,get_buttonMode: function() {
		return this.__buttonMode;
	}
	,set_buttonMode: function(value) {
		return this.__buttonMode = value;
	}
	,__class__: openfl_display_Sprite
	,__properties__: $extend(openfl_display_DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics",set_buttonMode:"set_buttonMode",get_buttonMode:"get_buttonMode"})
});
var Main = function() {
	this.startFullscreen = false;
	this.skipSplash = true;
	this.framerate = 60;
	this.zoom = -1;
	this.initialState = TitleState;
	this.gameHeight = 720;
	this.gameWidth = 1280;
	openfl_display_Sprite.call(this);
	if(this.stage != null) {
		this.init();
	} else {
		this.addEventListener("addedToStage",$bind(this,this.init));
	}
};
$hxClasses["Main"] = Main;
Main.__name__ = "Main";
Main.main = function() {
	openfl_Lib.get_current().addChild(new Main());
};
Main.__super__ = openfl_display_Sprite;
Main.prototype = $extend(openfl_display_Sprite.prototype,{
	gameWidth: null
	,gameHeight: null
	,initialState: null
	,zoom: null
	,framerate: null
	,skipSplash: null
	,startFullscreen: null
	,init: function(E) {
		if(this.hasEventListener("addedToStage")) {
			this.removeEventListener("addedToStage",$bind(this,this.init));
		}
		this.setupGame();
	}
	,setupGame: function() {
		var stageWidth = openfl_Lib.get_current().stage.stageWidth;
		var stageHeight = openfl_Lib.get_current().stage.stageHeight;
		if(this.zoom == -1) {
			var ratioX = stageWidth / this.gameWidth;
			var ratioY = stageHeight / this.gameHeight;
			this.zoom = Math.min(ratioX,ratioY);
			this.gameWidth = Math.ceil(stageWidth / this.zoom);
			this.gameHeight = Math.ceil(stageHeight / this.zoom);
		}
		this.initialState = TitleState;
		this.addChild(new flixel_FlxGame(this.gameWidth,this.gameHeight,this.initialState,this.zoom,this.framerate,this.framerate,this.skipSplash,this.startFullscreen));
		this.addChild(new openfl_display_FPS(10,3,16777215));
	}
	,__class__: Main
});
var DocumentClass = function(current) {
	current.addChild(this);
	Main.call(this);
	this.dispatchEvent(new openfl_events_Event("addedToStage",false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = "DocumentClass";
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var BackgroundDancer = function(x,y) {
	this.danceDir = false;
	flixel_FlxSprite.call(this,x,y);
	var library = null;
	this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "limo/limoDancer" + ".png","IMAGE",library),Paths.getPath("images/" + "limo/limoDancer" + ".xml","TEXT",library)));
	this.animation.addByIndices("danceLeft","bg dancer sketch PINK",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
	this.animation.addByIndices("danceRight","bg dancer sketch PINK",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
	this.animation.play("danceLeft");
	this.set_antialiasing(true);
};
$hxClasses["BackgroundDancer"] = BackgroundDancer;
BackgroundDancer.__name__ = "BackgroundDancer";
BackgroundDancer.__super__ = flixel_FlxSprite;
BackgroundDancer.prototype = $extend(flixel_FlxSprite.prototype,{
	danceDir: null
	,dance: function() {
		this.danceDir = !this.danceDir;
		if(this.danceDir) {
			this.animation.play("danceRight",true);
		} else {
			this.animation.play("danceLeft",true);
		}
	}
	,__class__: BackgroundDancer
});
var BackgroundGirls = function(x,y) {
	this.danceDir = false;
	flixel_FlxSprite.call(this,x,y);
	var library = null;
	this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/bgFreaks" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/bgFreaks" + ".xml","TEXT",library)));
	this.animation.addByIndices("danceLeft","BG girls group",CoolUtil.numberArray(14),"",24,false);
	this.animation.addByIndices("danceRight","BG girls group",CoolUtil.numberArray(30,15),"",24,false);
	this.animation.play("danceLeft");
};
$hxClasses["BackgroundGirls"] = BackgroundGirls;
BackgroundGirls.__name__ = "BackgroundGirls";
BackgroundGirls.__super__ = flixel_FlxSprite;
BackgroundGirls.prototype = $extend(flixel_FlxSprite.prototype,{
	danceDir: null
	,getScared: function() {
		this.animation.addByIndices("danceLeft","BG fangirls dissuaded",CoolUtil.numberArray(14),"",24,false);
		this.animation.addByIndices("danceRight","BG fangirls dissuaded",CoolUtil.numberArray(30,15),"",24,false);
		this.dance();
	}
	,dance: function() {
		this.danceDir = !this.danceDir;
		if(this.danceDir) {
			this.animation.play("danceRight",true);
		} else {
			this.animation.play("danceLeft",true);
		}
	}
	,__class__: BackgroundGirls
});
var Character = function(x,y,character,isPlayer) {
	if(isPlayer == null) {
		isPlayer = false;
	}
	if(character == null) {
		character = "bf";
	}
	this.danced = false;
	this.holdTimer = 0;
	this.curCharacter = "bf";
	this.isPlayer = false;
	this.debugMode = false;
	flixel_FlxSprite.call(this,x,y);
	this.animOffsets = new haxe_ds_StringMap();
	this.curCharacter = character;
	this.isPlayer = isPlayer;
	var tex;
	this.set_antialiasing(true);
	switch(this.curCharacter) {
	case "bf":
		var tex1 = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "BOYFRIEND" + ".png","IMAGE","shared"),Paths.getPath("images/" + "BOYFRIEND" + ".xml","TEXT","shared"));
		this.set_frames(tex1);
		this.animation.addByPrefix("idle","BF idle dance",24,false);
		this.animation.addByPrefix("singUP","BF NOTE UP0",24,false);
		this.animation.addByPrefix("singLEFT","BF NOTE LEFT0",24,false);
		this.animation.addByPrefix("singRIGHT","BF NOTE RIGHT0",24,false);
		this.animation.addByPrefix("singDOWN","BF NOTE DOWN0",24,false);
		this.animation.addByPrefix("singUPmiss","BF NOTE UP MISS",24,false);
		this.animation.addByPrefix("singLEFTmiss","BF NOTE LEFT MISS",24,false);
		this.animation.addByPrefix("singRIGHTmiss","BF NOTE RIGHT MISS",24,false);
		this.animation.addByPrefix("singDOWNmiss","BF NOTE DOWN MISS",24,false);
		this.animation.addByPrefix("hey","BF HEY",24,false);
		this.animation.addByPrefix("firstDeath","BF dies",24,false);
		this.animation.addByPrefix("deathLoop","BF Dead Loop",24,true);
		this.animation.addByPrefix("deathConfirm","BF Dead confirm",24,false);
		this.animation.addByPrefix("scared","BF idle shaking",24);
		this.addOffset("idle",-5);
		this.addOffset("singUP",-29,27);
		this.addOffset("singRIGHT",-38,-7);
		this.addOffset("singLEFT",12,-6);
		this.addOffset("singDOWN",-10,-50);
		this.addOffset("singUPmiss",-29,27);
		this.addOffset("singRIGHTmiss",-30,21);
		this.addOffset("singLEFTmiss",12,24);
		this.addOffset("singDOWNmiss",-11,-19);
		this.addOffset("hey",7,4);
		this.addOffset("firstDeath",37,11);
		this.addOffset("deathLoop",37,5);
		this.addOffset("deathConfirm",37,69);
		this.addOffset("scared",-4);
		this.playAnim("idle");
		this.set_flipX(true);
		break;
	case "bf-car":
		var library = null;
		var tex1 = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "bfCar" + ".png","IMAGE",library),Paths.getPath("images/" + "bfCar" + ".xml","TEXT",library));
		this.set_frames(tex1);
		this.animation.addByPrefix("idle","BF idle dance",24,false);
		this.animation.addByPrefix("singUP","BF NOTE UP0",24,false);
		this.animation.addByPrefix("singLEFT","BF NOTE LEFT0",24,false);
		this.animation.addByPrefix("singRIGHT","BF NOTE RIGHT0",24,false);
		this.animation.addByPrefix("singDOWN","BF NOTE DOWN0",24,false);
		this.animation.addByPrefix("singUPmiss","BF NOTE UP MISS",24,false);
		this.animation.addByPrefix("singLEFTmiss","BF NOTE LEFT MISS",24,false);
		this.animation.addByPrefix("singRIGHTmiss","BF NOTE RIGHT MISS",24,false);
		this.animation.addByPrefix("singDOWNmiss","BF NOTE DOWN MISS",24,false);
		this.addOffset("idle",-5);
		this.addOffset("singUP",-29,27);
		this.addOffset("singRIGHT",-38,-7);
		this.addOffset("singLEFT",12,-6);
		this.addOffset("singDOWN",-10,-50);
		this.addOffset("singUPmiss",-29,27);
		this.addOffset("singRIGHTmiss",-30,21);
		this.addOffset("singLEFTmiss",12,24);
		this.addOffset("singDOWNmiss",-11,-19);
		this.playAnim("idle");
		this.set_flipX(true);
		break;
	case "bf-christmas":
		var library = null;
		var tex1 = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "christmas/bfChristmas" + ".png","IMAGE",library),Paths.getPath("images/" + "christmas/bfChristmas" + ".xml","TEXT",library));
		this.set_frames(tex1);
		this.animation.addByPrefix("idle","BF idle dance",24,false);
		this.animation.addByPrefix("singUP","BF NOTE UP0",24,false);
		this.animation.addByPrefix("singLEFT","BF NOTE LEFT0",24,false);
		this.animation.addByPrefix("singRIGHT","BF NOTE RIGHT0",24,false);
		this.animation.addByPrefix("singDOWN","BF NOTE DOWN0",24,false);
		this.animation.addByPrefix("singUPmiss","BF NOTE UP MISS",24,false);
		this.animation.addByPrefix("singLEFTmiss","BF NOTE LEFT MISS",24,false);
		this.animation.addByPrefix("singRIGHTmiss","BF NOTE RIGHT MISS",24,false);
		this.animation.addByPrefix("singDOWNmiss","BF NOTE DOWN MISS",24,false);
		this.animation.addByPrefix("hey","BF HEY",24,false);
		this.addOffset("idle",-5);
		this.addOffset("singUP",-29,27);
		this.addOffset("singRIGHT",-38,-7);
		this.addOffset("singLEFT",12,-6);
		this.addOffset("singDOWN",-10,-50);
		this.addOffset("singUPmiss",-29,27);
		this.addOffset("singRIGHTmiss",-30,21);
		this.addOffset("singLEFTmiss",12,24);
		this.addOffset("singDOWNmiss",-11,-19);
		this.addOffset("hey",7,4);
		this.playAnim("idle");
		this.set_flipX(true);
		break;
	case "bf-pixel":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/bfPixel" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/bfPixel" + ".xml","TEXT",library)));
		this.animation.addByPrefix("idle","BF IDLE",24,false);
		this.animation.addByPrefix("singUP","BF UP NOTE",24,false);
		this.animation.addByPrefix("singLEFT","BF LEFT NOTE",24,false);
		this.animation.addByPrefix("singRIGHT","BF RIGHT NOTE",24,false);
		this.animation.addByPrefix("singDOWN","BF DOWN NOTE",24,false);
		this.animation.addByPrefix("singUPmiss","BF UP MISS",24,false);
		this.animation.addByPrefix("singLEFTmiss","BF LEFT MISS",24,false);
		this.animation.addByPrefix("singRIGHTmiss","BF RIGHT MISS",24,false);
		this.animation.addByPrefix("singDOWNmiss","BF DOWN MISS",24,false);
		this.addOffset("idle");
		this.addOffset("singUP");
		this.addOffset("singRIGHT");
		this.addOffset("singLEFT");
		this.addOffset("singDOWN");
		this.addOffset("singUPmiss");
		this.addOffset("singRIGHTmiss");
		this.addOffset("singLEFTmiss");
		this.addOffset("singDOWNmiss");
		this.setGraphicSize(this.get_width() * 6 | 0);
		this.updateHitbox();
		this.playAnim("idle");
		this.set_width(this.get_width() - 100);
		this.set_height(this.get_height() - 100);
		this.set_antialiasing(false);
		this.set_flipX(true);
		break;
	case "bf-pixel-dead":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/bfPixelsDEAD" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/bfPixelsDEAD" + ".xml","TEXT",library)));
		this.animation.addByPrefix("singUP","BF Dies pixel",24,false);
		this.animation.addByPrefix("firstDeath","BF Dies pixel",24,false);
		this.animation.addByPrefix("deathLoop","Retry Loop",24,true);
		this.animation.addByPrefix("deathConfirm","RETRY CONFIRM",24,false);
		this.animation.play("firstDeath");
		this.addOffset("firstDeath");
		this.addOffset("deathLoop",-37);
		this.addOffset("deathConfirm",-37);
		this.playAnim("firstDeath");
		this.setGraphicSize(this.get_width() * 6 | 0);
		this.updateHitbox();
		this.set_antialiasing(false);
		this.set_flipX(true);
		break;
	case "bf-sad":
		var tex1 = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "BOYFRIEND_SAD" + ".png","IMAGE","shared"),Paths.getPath("images/" + "BOYFRIEND_SAD" + ".xml","TEXT","shared"));
		this.set_frames(tex1);
		this.animation.addByPrefix("idle","BF idle dance",24,false);
		this.animation.addByPrefix("singUP","BF NOTE UP0",24,false);
		this.animation.addByPrefix("singLEFT","BF NOTE LEFT0",24,false);
		this.animation.addByPrefix("singRIGHT","BF NOTE RIGHT0",24,false);
		this.animation.addByPrefix("singDOWN","BF NOTE DOWN0",24,false);
		this.animation.addByPrefix("singUPmiss","BF NOTE UP MISS",24,false);
		this.animation.addByPrefix("singLEFTmiss","BF NOTE LEFT MISS",24,false);
		this.animation.addByPrefix("singRIGHTmiss","BF NOTE RIGHT MISS",24,false);
		this.animation.addByPrefix("singDOWNmiss","BF NOTE DOWN MISS",24,false);
		this.animation.addByPrefix("hey","BF HEY",24,false);
		this.animation.addByPrefix("firstDeath","BF dies",24,false);
		this.animation.addByPrefix("deathLoop","BF Dead Loop",24,true);
		this.animation.addByPrefix("deathConfirm","BF Dead confirm",24,false);
		this.animation.addByPrefix("scared","BF idle shaking",24);
		this.addOffset("idle",-5);
		this.addOffset("singUP",-29,27);
		this.addOffset("singRIGHT",-38,-7);
		this.addOffset("singLEFT",12,-6);
		this.addOffset("singDOWN",-10,-50);
		this.addOffset("singUPmiss",-29,27);
		this.addOffset("singRIGHTmiss",-30,21);
		this.addOffset("singLEFTmiss",12,24);
		this.addOffset("singDOWNmiss",-11,-19);
		this.addOffset("hey",7,4);
		this.addOffset("firstDeath",37,11);
		this.addOffset("deathLoop",37,5);
		this.addOffset("deathConfirm",37,69);
		this.addOffset("scared",-4);
		this.playAnim("idle");
		this.set_flipX(true);
		break;
	case "dad":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "DADDY_DEAREST" + ".png","IMAGE",library),Paths.getPath("images/" + "DADDY_DEAREST" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","Dad idle dance",24);
		this.animation.addByPrefix("singUP","Dad Sing Note UP",24);
		this.animation.addByPrefix("singRIGHT","Dad Sing Note RIGHT",24);
		this.animation.addByPrefix("singDOWN","Dad Sing Note DOWN",24);
		this.animation.addByPrefix("singLEFT","Dad Sing Note LEFT",24);
		this.addOffset("idle");
		this.addOffset("singUP",-6,50);
		this.addOffset("singRIGHT",0,27);
		this.addOffset("singLEFT",-10,10);
		this.addOffset("singDOWN",0,-30);
		this.playAnim("idle");
		break;
	case "garcello":
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garcello_assets" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garcello_assets" + ".xml","TEXT","shared"));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","garcello idle dance",24);
		this.animation.addByPrefix("singUP","garcello Sing Note UP",24);
		this.animation.addByPrefix("singRIGHT","garcello Sing Note RIGHT",24);
		this.animation.addByPrefix("singDOWN","garcello Sing Note DOWN",24);
		this.animation.addByPrefix("singLEFT","garcello Sing Note LEFT",24);
		this.addOffset("idle");
		this.addOffset("singUP",0,0);
		this.addOffset("singRIGHT",0,0);
		this.addOffset("singLEFT",0,0);
		this.addOffset("singDOWN",0,0);
		this.playAnim("idle");
		break;
	case "garcellodead":
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garcellodead_assets" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garcellodead_assets" + ".xml","TEXT","shared"));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","garcello idle dance",24);
		this.animation.addByPrefix("singUP","garcello Sing Note UP",24);
		this.animation.addByPrefix("singRIGHT","garcello Sing Note RIGHT",24);
		this.animation.addByPrefix("singDOWN","garcello Sing Note DOWN",24);
		this.animation.addByPrefix("singLEFT","garcello Sing Note LEFT",24);
		this.animation.addByPrefix("garTightBars","garcello coolguy",15);
		this.addOffset("idle");
		this.addOffset("singUP",0,0);
		this.addOffset("singRIGHT",0,0);
		this.addOffset("singLEFT",0,0);
		this.addOffset("singDOWN",0,0);
		this.addOffset("garTightBars",0,0);
		this.playAnim("idle");
		break;
	case "garcelloghosty":
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garcelloghosty_assets" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garcelloghosty_assets" + ".xml","TEXT","shared"));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","garcello idle dance",24);
		this.animation.addByPrefix("singUP","garcello Sing Note UP",24);
		this.animation.addByPrefix("singRIGHT","garcello Sing Note RIGHT",24);
		this.animation.addByPrefix("singDOWN","garcello Sing Note DOWN",24);
		this.animation.addByPrefix("singLEFT","garcello Sing Note LEFT",24);
		this.animation.addByPrefix("garFarewell","garcello coolguy",15);
		this.addOffset("idle");
		this.addOffset("singUP",0,0);
		this.addOffset("singRIGHT",0,0);
		this.addOffset("singLEFT",0,0);
		this.addOffset("singDOWN",0,0);
		this.addOffset("garTightBars",0,0);
		this.playAnim("idle");
		break;
	case "garcellotired":
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garcellotired_assets" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garcellotired_assets" + ".xml","TEXT","shared"));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","garcellotired idle dance",24,false);
		this.animation.addByPrefix("singUP","garcellotired Sing Note UP",24,false);
		this.animation.addByPrefix("singRIGHT","garcellotired Sing Note RIGHT",24,false);
		this.animation.addByPrefix("singDOWN","garcellotired Sing Note DOWN",24,false);
		this.animation.addByPrefix("singLEFT","garcellotired Sing Note LEFT",24,false);
		this.animation.addByPrefix("singUP-alt","garcellotired Sing Note UP",24,false);
		this.animation.addByPrefix("singRIGHT-alt","garcellotired Sing Note RIGHT",24,false);
		this.animation.addByPrefix("singLEFT-alt","garcellotired Sing Note LEFT",24,false);
		this.animation.addByPrefix("singDOWN-alt","garcellotired cough",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",0,0);
		this.addOffset("singRIGHT",0,0);
		this.addOffset("singLEFT",0,0);
		this.addOffset("singDOWN",0,0);
		this.addOffset("singUP-alt",0,0);
		this.addOffset("singRIGHT-alt",0,0);
		this.addOffset("singLEFT-alt",0,0);
		this.addOffset("singDOWN-alt",0,0);
		this.playAnim("idle");
		break;
	case "gf":
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "GF_assets" + ".png","IMAGE","shared"),Paths.getPath("images/" + "GF_assets" + ".xml","TEXT","shared"));
		this.set_frames(tex);
		this.animation.addByPrefix("cheer","GF Cheer",24,false);
		this.animation.addByPrefix("singLEFT","GF left note",24,false);
		this.animation.addByPrefix("singRIGHT","GF Right Note",24,false);
		this.animation.addByPrefix("singUP","GF Up Note",24,false);
		this.animation.addByPrefix("singDOWN","GF Down Note",24,false);
		this.animation.addByIndices("sad","gf sad",[0,1,2,3,4,5,6,7,8,9,10,11,12],"",24,false);
		this.animation.addByIndices("danceLeft","GF Dancing Beat",[30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
		this.animation.addByIndices("danceRight","GF Dancing Beat",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
		this.animation.addByIndices("hairBlow","GF Dancing Beat Hair blowing",[0,1,2,3],"",24);
		this.animation.addByIndices("hairFall","GF Dancing Beat Hair Landing",[0,1,2,3,4,5,6,7,8,9,10,11],"",24,false);
		this.animation.addByPrefix("scared","GF FEAR",24);
		this.addOffset("cheer");
		this.addOffset("sad",-2,-2);
		this.addOffset("danceLeft",0,-9);
		this.addOffset("danceRight",0,-9);
		this.addOffset("singUP",0,4);
		this.addOffset("singRIGHT",0,-20);
		this.addOffset("singLEFT",0,-19);
		this.addOffset("singDOWN",0,-20);
		this.addOffset("hairBlow",45,-8);
		this.addOffset("hairFall",0,-9);
		this.addOffset("scared",-2,-17);
		this.playAnim("danceRight");
		break;
	case "gf-car":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "gfCar" + ".png","IMAGE",library),Paths.getPath("images/" + "gfCar" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByIndices("singUP","GF Dancing Beat Hair blowing CAR",[0],"",24,false);
		this.animation.addByIndices("danceLeft","GF Dancing Beat Hair blowing CAR",[30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
		this.animation.addByIndices("danceRight","GF Dancing Beat Hair blowing CAR",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
		this.addOffset("danceLeft",0);
		this.addOffset("danceRight",0);
		this.playAnim("danceRight");
		break;
	case "gf-christmas":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "christmas/gfChristmas" + ".png","IMAGE",library),Paths.getPath("images/" + "christmas/gfChristmas" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("cheer","GF Cheer",24,false);
		this.animation.addByPrefix("singLEFT","GF left note",24,false);
		this.animation.addByPrefix("singRIGHT","GF Right Note",24,false);
		this.animation.addByPrefix("singUP","GF Up Note",24,false);
		this.animation.addByPrefix("singDOWN","GF Down Note",24,false);
		this.animation.addByIndices("sad","gf sad",[0,1,2,3,4,5,6,7,8,9,10,11,12],"",24,false);
		this.animation.addByIndices("danceLeft","GF Dancing Beat",[30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
		this.animation.addByIndices("danceRight","GF Dancing Beat",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
		this.animation.addByIndices("hairBlow","GF Dancing Beat Hair blowing",[0,1,2,3],"",24);
		this.animation.addByIndices("hairFall","GF Dancing Beat Hair Landing",[0,1,2,3,4,5,6,7,8,9,10,11],"",24,false);
		this.animation.addByPrefix("scared","GF FEAR",24);
		this.addOffset("cheer");
		this.addOffset("sad",-2,-2);
		this.addOffset("danceLeft",0,-9);
		this.addOffset("danceRight",0,-9);
		this.addOffset("singUP",0,4);
		this.addOffset("singRIGHT",0,-20);
		this.addOffset("singLEFT",0,-19);
		this.addOffset("singDOWN",0,-20);
		this.addOffset("hairBlow",45,-8);
		this.addOffset("hairFall",0,-9);
		this.addOffset("scared",-2,-17);
		this.playAnim("danceRight");
		break;
	case "gf-pixel":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/gfPixel" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/gfPixel" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByIndices("singUP","GF IDLE",[2],"",24,false);
		this.animation.addByIndices("danceLeft","GF IDLE",[30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
		this.animation.addByIndices("danceRight","GF IDLE",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
		this.addOffset("danceLeft",0);
		this.addOffset("danceRight",0);
		this.playAnim("danceRight");
		this.setGraphicSize(this.get_width() * PlayState.daPixelZoom | 0);
		this.updateHitbox();
		this.set_antialiasing(false);
		break;
	case "mom":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "Mom_Assets" + ".png","IMAGE",library),Paths.getPath("images/" + "Mom_Assets" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","Mom Idle",24,false);
		this.animation.addByPrefix("singUP","Mom Up Pose",24,false);
		this.animation.addByPrefix("singDOWN","MOM DOWN POSE",24,false);
		this.animation.addByPrefix("singLEFT","Mom Left Pose",24,false);
		this.animation.addByPrefix("singRIGHT","Mom Pose Left",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",14,71);
		this.addOffset("singRIGHT",10,-60);
		this.addOffset("singLEFT",250,-23);
		this.addOffset("singDOWN",20,-160);
		this.playAnim("idle");
		break;
	case "mom-car":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "momCar" + ".png","IMAGE",library),Paths.getPath("images/" + "momCar" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","Mom Idle",24,false);
		this.animation.addByPrefix("singUP","Mom Up Pose",24,false);
		this.animation.addByPrefix("singDOWN","MOM DOWN POSE",24,false);
		this.animation.addByPrefix("singLEFT","Mom Left Pose",24,false);
		this.animation.addByPrefix("singRIGHT","Mom Pose Left",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",14,71);
		this.addOffset("singRIGHT",10,-60);
		this.addOffset("singLEFT",250,-23);
		this.addOffset("singDOWN",20,-160);
		this.playAnim("idle");
		break;
	case "monster":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "Monster_Assets" + ".png","IMAGE",library),Paths.getPath("images/" + "Monster_Assets" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","monster idle",24,false);
		this.animation.addByPrefix("singUP","monster up note",24,false);
		this.animation.addByPrefix("singDOWN","monster down",24,false);
		this.animation.addByPrefix("singLEFT","Monster left note",24,false);
		this.animation.addByPrefix("singRIGHT","Monster Right note",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",-20,50);
		this.addOffset("singRIGHT",-51);
		this.addOffset("singLEFT",-30);
		this.addOffset("singDOWN",-30,-40);
		this.playAnim("idle");
		break;
	case "monster-christmas":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "christmas/monsterChristmas" + ".png","IMAGE",library),Paths.getPath("images/" + "christmas/monsterChristmas" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","monster idle",24,false);
		this.animation.addByPrefix("singUP","monster up note",24,false);
		this.animation.addByPrefix("singDOWN","monster down",24,false);
		this.animation.addByPrefix("singLEFT","Monster left note",24,false);
		this.animation.addByPrefix("singRIGHT","Monster Right note",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",-20,50);
		this.addOffset("singRIGHT",-51);
		this.addOffset("singLEFT",-30);
		this.addOffset("singDOWN",-40,-94);
		this.playAnim("idle");
		break;
	case "parents-christmas":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "christmas/mom_dad_christmas_assets" + ".png","IMAGE",library),Paths.getPath("images/" + "christmas/mom_dad_christmas_assets" + ".xml","TEXT",library)));
		this.animation.addByPrefix("idle","Parent Christmas Idle",24,false);
		this.animation.addByPrefix("singUP","Parent Up Note Dad",24,false);
		this.animation.addByPrefix("singDOWN","Parent Down Note Dad",24,false);
		this.animation.addByPrefix("singLEFT","Parent Left Note Dad",24,false);
		this.animation.addByPrefix("singRIGHT","Parent Right Note Dad",24,false);
		this.animation.addByPrefix("singUP-alt","Parent Up Note Mom",24,false);
		this.animation.addByPrefix("singDOWN-alt","Parent Down Note Mom",24,false);
		this.animation.addByPrefix("singLEFT-alt","Parent Left Note Mom",24,false);
		this.animation.addByPrefix("singRIGHT-alt","Parent Right Note Mom",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",-47,24);
		this.addOffset("singRIGHT",-1,-23);
		this.addOffset("singLEFT",-30,16);
		this.addOffset("singDOWN",-31,-29);
		this.addOffset("singUP-alt",-47,24);
		this.addOffset("singRIGHT-alt",-1,-24);
		this.addOffset("singLEFT-alt",-30,15);
		this.addOffset("singDOWN-alt",-30,-27);
		this.playAnim("idle");
		break;
	case "pico":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "Pico_FNF_assetss" + ".png","IMAGE",library),Paths.getPath("images/" + "Pico_FNF_assetss" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("idle","Pico Idle Dance",24);
		this.animation.addByPrefix("singUP","pico Up note0",24,false);
		this.animation.addByPrefix("singDOWN","Pico Down Note0",24,false);
		if(isPlayer) {
			this.animation.addByPrefix("singLEFT","Pico NOTE LEFT0",24,false);
			this.animation.addByPrefix("singRIGHT","Pico Note Right0",24,false);
			this.animation.addByPrefix("singRIGHTmiss","Pico Note Right Miss",24,false);
			this.animation.addByPrefix("singLEFTmiss","Pico NOTE LEFT miss",24,false);
		} else {
			this.animation.addByPrefix("singLEFT","Pico Note Right0",24,false);
			this.animation.addByPrefix("singRIGHT","Pico NOTE LEFT0",24,false);
			this.animation.addByPrefix("singRIGHTmiss","Pico NOTE LEFT miss",24,false);
			this.animation.addByPrefix("singLEFTmiss","Pico Note Right Miss",24,false);
		}
		this.animation.addByPrefix("singUPmiss","pico Up note miss",24);
		this.animation.addByPrefix("singDOWNmiss","Pico Down Note MISS",24);
		this.addOffset("idle");
		this.addOffset("singUP",-29,27);
		this.addOffset("singRIGHT",-68,-7);
		this.addOffset("singLEFT",65,9);
		this.addOffset("singDOWN",200,-70);
		this.addOffset("singUPmiss",-19,67);
		this.addOffset("singRIGHTmiss",-60,41);
		this.addOffset("singLEFTmiss",62,64);
		this.addOffset("singDOWNmiss",210,-28);
		this.playAnim("idle");
		this.set_flipX(true);
		break;
	case "senpai":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/senpai" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/senpai" + ".xml","TEXT",library)));
		this.animation.addByPrefix("idle","Senpai Idle",24,false);
		this.animation.addByPrefix("singUP","SENPAI UP NOTE",24,false);
		this.animation.addByPrefix("singLEFT","SENPAI LEFT NOTE",24,false);
		this.animation.addByPrefix("singRIGHT","SENPAI RIGHT NOTE",24,false);
		this.animation.addByPrefix("singDOWN","SENPAI DOWN NOTE",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",5,37);
		this.addOffset("singRIGHT");
		this.addOffset("singLEFT",40);
		this.addOffset("singDOWN",14);
		this.playAnim("idle");
		this.setGraphicSize(this.get_width() * 6 | 0);
		this.updateHitbox();
		this.set_antialiasing(false);
		break;
	case "senpai-angry":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/senpai" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/senpai" + ".xml","TEXT",library)));
		this.animation.addByPrefix("idle","Angry Senpai Idle",24,false);
		this.animation.addByPrefix("singUP","Angry Senpai UP NOTE",24,false);
		this.animation.addByPrefix("singLEFT","Angry Senpai LEFT NOTE",24,false);
		this.animation.addByPrefix("singRIGHT","Angry Senpai RIGHT NOTE",24,false);
		this.animation.addByPrefix("singDOWN","Angry Senpai DOWN NOTE",24,false);
		this.addOffset("idle");
		this.addOffset("singUP",5,37);
		this.addOffset("singRIGHT");
		this.addOffset("singLEFT",40);
		this.addOffset("singDOWN",14);
		this.playAnim("idle");
		this.setGraphicSize(this.get_width() * 6 | 0);
		this.updateHitbox();
		this.set_antialiasing(false);
		break;
	case "spirit":
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSpriteSheetPacker(Paths.getPath("images/" + "weeb/spirit" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/spirit" + ".txt","TEXT",library)));
		this.animation.addByPrefix("idle","idle spirit_",24,false);
		this.animation.addByPrefix("singUP","up_",24,false);
		this.animation.addByPrefix("singRIGHT","right_",24,false);
		this.animation.addByPrefix("singLEFT","left_",24,false);
		this.animation.addByPrefix("singDOWN","spirit down_",24,false);
		this.addOffset("idle",-220,-280);
		this.addOffset("singUP",-220,-240);
		this.addOffset("singRIGHT",-220,-280);
		this.addOffset("singLEFT",-200,-280);
		this.addOffset("singDOWN",170,110);
		this.setGraphicSize(this.get_width() * 6 | 0);
		this.updateHitbox();
		this.playAnim("idle");
		this.set_antialiasing(false);
		break;
	case "spooky":
		var library = null;
		tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "spooky_kids_assets" + ".png","IMAGE",library),Paths.getPath("images/" + "spooky_kids_assets" + ".xml","TEXT",library));
		this.set_frames(tex);
		this.animation.addByPrefix("singUP","spooky UP NOTE",24,false);
		this.animation.addByPrefix("singDOWN","spooky DOWN note",24,false);
		this.animation.addByPrefix("singLEFT","note sing left",24,false);
		this.animation.addByPrefix("singRIGHT","spooky sing right",24,false);
		this.animation.addByIndices("danceLeft","spooky dance idle",[0,2,6],"",12,false);
		this.animation.addByIndices("danceRight","spooky dance idle",[8,10,12,14],"",12,false);
		this.addOffset("danceLeft");
		this.addOffset("danceRight");
		this.addOffset("singUP",-20,26);
		this.addOffset("singRIGHT",-130,-14);
		this.addOffset("singLEFT",130,-10);
		this.addOffset("singDOWN",-50,-130);
		this.playAnim("danceRight");
		break;
	}
	this.dance();
	if(isPlayer) {
		this.set_flipX(!this.flipX);
		if(!StringTools.startsWith(this.curCharacter,"bf")) {
			var oldRight = this.animation._animations.h["singRIGHT"].frames;
			this.animation._animations.h["singRIGHT"].frames = this.animation._animations.h["singLEFT"].frames;
			this.animation._animations.h["singLEFT"].frames = oldRight;
			if(this.animation._animations.h["singRIGHTmiss"] != null) {
				var oldMiss = this.animation._animations.h["singRIGHTmiss"].frames;
				this.animation._animations.h["singRIGHTmiss"].frames = this.animation._animations.h["singLEFTmiss"].frames;
				this.animation._animations.h["singLEFTmiss"].frames = oldMiss;
			}
		}
	}
};
$hxClasses["Character"] = Character;
Character.__name__ = "Character";
Character.__super__ = flixel_FlxSprite;
Character.prototype = $extend(flixel_FlxSprite.prototype,{
	animOffsets: null
	,debugMode: null
	,isPlayer: null
	,curCharacter: null
	,holdTimer: null
	,update: function(elapsed) {
		if(!StringTools.startsWith(this.curCharacter,"bf")) {
			if(StringTools.startsWith(this.animation._curAnim.name,"sing")) {
				this.holdTimer += elapsed;
			}
			var dadVar = 4;
			if(this.curCharacter == "dad") {
				dadVar = 6.1;
			}
			if(this.holdTimer >= Conductor.stepCrochet * dadVar * 0.001) {
				this.dance();
				this.holdTimer = 0;
			}
		}
		if(this.curCharacter == "gf") {
			if(this.animation._curAnim.name == "hairFall" && this.animation._curAnim.finished) {
				this.playAnim("danceRight");
			}
		}
		flixel_FlxSprite.prototype.update.call(this,elapsed);
	}
	,danced: null
	,dance: function() {
		if(!this.debugMode) {
			switch(this.curCharacter) {
			case "gf":
				if(!StringTools.startsWith(this.animation._curAnim.name,"hair")) {
					this.danced = !this.danced;
					if(this.danced) {
						this.playAnim("danceRight");
					} else {
						this.playAnim("danceLeft");
					}
				}
				break;
			case "gf-car":
				if(!StringTools.startsWith(this.animation._curAnim.name,"hair")) {
					this.danced = !this.danced;
					if(this.danced) {
						this.playAnim("danceRight");
					} else {
						this.playAnim("danceLeft");
					}
				}
				break;
			case "gf-christmas":
				if(!StringTools.startsWith(this.animation._curAnim.name,"hair")) {
					this.danced = !this.danced;
					if(this.danced) {
						this.playAnim("danceRight");
					} else {
						this.playAnim("danceLeft");
					}
				}
				break;
			case "gf-pixel":
				if(!StringTools.startsWith(this.animation._curAnim.name,"hair")) {
					this.danced = !this.danced;
					if(this.danced) {
						this.playAnim("danceRight");
					} else {
						this.playAnim("danceLeft");
					}
				}
				break;
			case "spooky":
				this.danced = !this.danced;
				if(this.danced) {
					this.playAnim("danceRight");
				} else {
					this.playAnim("danceLeft");
				}
				break;
			default:
				this.playAnim("idle");
			}
		}
	}
	,playAnim: function(AnimName,Force,Reversed,Frame) {
		if(Frame == null) {
			Frame = 0;
		}
		if(Reversed == null) {
			Reversed = false;
		}
		if(Force == null) {
			Force = false;
		}
		this.animation.play(AnimName,Force,Reversed,Frame);
		var daOffset = this.animOffsets.h[AnimName];
		if(Object.prototype.hasOwnProperty.call(this.animOffsets.h,AnimName)) {
			this.offset.set(daOffset[0],daOffset[1]);
		} else {
			this.offset.set(0,0);
		}
		if(this.curCharacter == "gf") {
			if(AnimName == "singLEFT") {
				this.danced = true;
			} else if(AnimName == "singRIGHT") {
				this.danced = false;
			}
			if(AnimName == "singUP" || AnimName == "singDOWN") {
				this.danced = !this.danced;
			}
		}
	}
	,addOffset: function(name,x,y) {
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		var v = [x,y];
		this.animOffsets.h[name] = v;
	}
	,__class__: Character
});
var Boyfriend = function(x,y,char) {
	if(char == null) {
		char = "bf";
	}
	this.stunned = false;
	Character.call(this,x,y,char,true);
};
$hxClasses["Boyfriend"] = Boyfriend;
Boyfriend.__name__ = "Boyfriend";
Boyfriend.__super__ = Character;
Boyfriend.prototype = $extend(Character.prototype,{
	stunned: null
	,update: function(elapsed) {
		if(!this.debugMode) {
			if(StringTools.startsWith(this.animation._curAnim.name,"sing")) {
				this.holdTimer += elapsed;
			} else {
				this.holdTimer = 0;
			}
			if(StringTools.endsWith(this.animation._curAnim.name,"miss") && this.animation._curAnim.finished && !this.debugMode) {
				this.playAnim("idle",true,false,10);
			}
			if(this.animation._curAnim.name == "firstDeath" && this.animation._curAnim.finished) {
				this.playAnim("deathLoop");
			}
		}
		Character.prototype.update.call(this,elapsed);
	}
	,__class__: Boyfriend
});
var flixel_group_FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) {
		MaxSize = 0;
	}
	this._marker = 0;
	this.length = 0;
	flixel_FlxBasic.call(this);
	this.members = [];
	this.set_maxSize(Math.abs(MaxSize) | 0);
	this.flixelType = 2;
};
$hxClasses["flixel.group.FlxTypedGroup"] = flixel_group_FlxTypedGroup;
flixel_group_FlxTypedGroup.__name__ = "flixel.group.FlxTypedGroup";
flixel_group_FlxTypedGroup.overlaps = function(Callback,Group,X,Y,InScreenSpace,Camera) {
	var result = false;
	if(Group != null) {
		var i = 0;
		var l = Group.length;
		var basic;
		while(i < l) {
			basic = Group.members[i++];
			if(basic != null && Callback(basic,X,Y,InScreenSpace,Camera)) {
				result = true;
				break;
			}
		}
	}
	return result;
};
flixel_group_FlxTypedGroup.resolveGroup = function(ObjectOrGroup) {
	var group = null;
	if(ObjectOrGroup != null) {
		if(ObjectOrGroup.flixelType == 2) {
			group = ObjectOrGroup;
		} else if(ObjectOrGroup.flixelType == 4) {
			var spriteGroup = ObjectOrGroup;
			group = spriteGroup.group;
		}
	}
	return group;
};
flixel_group_FlxTypedGroup.__super__ = flixel_FlxBasic;
flixel_group_FlxTypedGroup.prototype = $extend(flixel_FlxBasic.prototype,{
	members: null
	,maxSize: null
	,length: null
	,_memberAdded: null
	,_memberRemoved: null
	,_marker: null
	,destroy: function() {
		flixel_FlxBasic.prototype.destroy.call(this);
		flixel_util_FlxDestroyUtil.destroy(this._memberAdded);
		flixel_util_FlxDestroyUtil.destroy(this._memberRemoved);
		if(this.members != null) {
			var i = 0;
			var basic = null;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null) {
					basic.destroy();
				}
			}
			this.members = null;
		}
	}
	,update: function(elapsed) {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.active) {
				basic.update(elapsed);
			}
		}
	}
	,draw: function() {
		var i = 0;
		var basic = null;
		var oldDefaultCameras = flixel_FlxCamera._defaultCameras;
		if(this.get_cameras() != null) {
			flixel_FlxCamera._defaultCameras = this.get_cameras();
		}
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) {
				basic.draw();
			}
		}
		flixel_FlxCamera._defaultCameras = oldDefaultCameras;
	}
	,add: function(Object1) {
		if(Object1 == null) {
			return null;
		}
		if(this.members.indexOf(Object1) >= 0) {
			return Object1;
		}
		var index = this.getFirstNull();
		if(index != -1) {
			this.members[index] = Object1;
			if(index >= this.length) {
				this.length = index + 1;
			}
			if(this._memberAdded != null) {
				this._memberAdded.dispatch(Object1);
			}
			return Object1;
		}
		if(this.maxSize > 0 && this.length >= this.maxSize) {
			return Object1;
		}
		this.members.push(Object1);
		this.length++;
		if(this._memberAdded != null) {
			this._memberAdded.dispatch(Object1);
		}
		return Object1;
	}
	,insert: function(position,object) {
		if(object == null) {
			return null;
		}
		if(this.members.indexOf(object) >= 0) {
			return object;
		}
		if(position < this.length && this.members[position] == null) {
			this.members[position] = object;
			if(this._memberAdded != null) {
				this._memberAdded.dispatch(object);
			}
			return object;
		}
		if(this.maxSize > 0 && this.length >= this.maxSize) {
			return object;
		}
		this.members.splice(position,0,object);
		this.length++;
		if(this._memberAdded != null) {
			this._memberAdded.dispatch(object);
		}
		return object;
	}
	,recycle: function(ObjectClass,ObjectFactory,Force,Revive) {
		if(Revive == null) {
			Revive = true;
		}
		if(Force == null) {
			Force = false;
		}
		var basic = null;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				var object = null;
				if(ObjectFactory != null) {
					object = ObjectFactory();
					this.add(object);
				} else if(ObjectClass != null) {
					object = Type.createInstance(ObjectClass,[]);
					this.add(object);
				}
				return object;
			} else {
				basic = this.members[this._marker++];
				if(this._marker >= this.maxSize) {
					this._marker = 0;
				}
				if(Revive) {
					basic.revive();
				}
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass,Force);
			if(basic != null) {
				if(Revive) {
					basic.revive();
				}
				return basic;
			}
			var object = null;
			if(ObjectFactory != null) {
				object = ObjectFactory();
				this.add(object);
			} else if(ObjectClass != null) {
				object = Type.createInstance(ObjectClass,[]);
				this.add(object);
			}
			return object;
		}
	}
	,recycleCreateObject: function(ObjectClass,ObjectFactory) {
		var object = null;
		if(ObjectFactory != null) {
			object = ObjectFactory();
			this.add(object);
		} else if(ObjectClass != null) {
			object = Type.createInstance(ObjectClass,[]);
			this.add(object);
		}
		return object;
	}
	,remove: function(Object1,Splice) {
		if(Splice == null) {
			Splice = false;
		}
		if(this.members == null) {
			return null;
		}
		var index = this.members.indexOf(Object1);
		if(index < 0) {
			return null;
		}
		if(Splice) {
			this.members.splice(index,1);
			this.length--;
		} else {
			this.members[index] = null;
		}
		if(this._memberRemoved != null) {
			this._memberRemoved.dispatch(Object1);
		}
		return Object1;
	}
	,replace: function(OldObject,NewObject) {
		var index = this.members.indexOf(OldObject);
		if(index < 0) {
			return null;
		}
		this.members[index] = NewObject;
		if(this._memberRemoved != null) {
			this._memberRemoved.dispatch(OldObject);
		}
		if(this._memberAdded != null) {
			this._memberAdded.dispatch(NewObject);
		}
		return NewObject;
	}
	,sort: function(Function1,Order) {
		if(Order == null) {
			Order = -1;
		}
		var _g = Function1;
		var a1 = Order;
		var tmp = function(a2,a3) {
			return _g(a1,a2,a3);
		};
		this.members.sort(tmp);
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) {
			Force = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js_Boot.__instanceof(basic,ObjectClass))) {
				var tmp;
				if(Force) {
					var c = js_Boot.getClass(basic);
					tmp = c.__name__ != ObjectClass.__name__;
				} else {
					tmp = false;
				}
				if(tmp) {
					continue;
				}
				return this.members[i - 1];
			}
		}
		return null;
	}
	,getFirstNull: function() {
		var i = 0;
		while(i < this.length) {
			if(this.members[i] == null) {
				return i;
			}
			++i;
		}
		return -1;
	}
	,getFirstExisting: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) {
				return basic;
			}
		}
		return null;
	}
	,getFirstAlive: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) {
				return basic;
			}
		}
		return null;
	}
	,getFirstDead: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) {
				return basic;
			}
		}
		return null;
	}
	,countLiving: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) {
					count = 0;
				}
				if(basic.exists && basic.alive) {
					++count;
				}
			}
		}
		return count;
	}
	,countDead: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) {
					count = 0;
				}
				if(!basic.alive) {
					++count;
				}
			}
		}
		return count;
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) {
			Length = 0;
		}
		if(StartIndex == null) {
			StartIndex = 0;
		}
		if(StartIndex < 0) {
			StartIndex = 0;
		}
		if(Length <= 0) {
			Length = this.length;
		}
		return flixel_FlxG.random.getObject_flixel_group_FlxTypedGroup_T(this.members,null,StartIndex,Length);
	}
	,clear: function() {
		this.length = 0;
		if(this._memberRemoved != null) {
			var _g = 0;
			var _g1 = this.members;
			while(_g < _g1.length) {
				var member = _g1[_g];
				++_g;
				if(member != null) {
					this._memberRemoved.dispatch(member);
				}
			}
		}
		flixel_util_FlxArrayUtil.clearArray(this.members);
	}
	,kill: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) {
				basic.kill();
			}
		}
		flixel_FlxBasic.prototype.kill.call(this);
	}
	,revive: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists) {
				basic.revive();
			}
		}
		flixel_FlxBasic.prototype.revive.call(this);
	}
	,iterator: function(filter) {
		return new flixel_group_FlxTypedGroupIterator(this.members,filter);
	}
	,forEach: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse) {
					var group = flixel_group_FlxTypedGroup.resolveGroup(basic);
					if(group != null) {
						group.forEach(Function1,Recurse);
					}
				}
				Function1(basic);
			}
		}
	}
	,forEachAlive: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) {
				if(Recurse) {
					var group = flixel_group_FlxTypedGroup.resolveGroup(basic);
					if(group != null) {
						group.forEachAlive(Function1,Recurse);
					}
				}
				Function1(basic);
			}
		}
	}
	,forEachDead: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) {
				if(Recurse) {
					var group = flixel_group_FlxTypedGroup.resolveGroup(basic);
					if(group != null) {
						group.forEachDead(Function1,Recurse);
					}
				}
				Function1(basic);
			}
		}
	}
	,forEachExists: function(Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) {
				if(Recurse) {
					var group = flixel_group_FlxTypedGroup.resolveGroup(basic);
					if(group != null) {
						group.forEachExists(Function1,Recurse);
					}
				}
				Function1(basic);
			}
		}
	}
	,forEachOfType: function(ObjectClass,Function1,Recurse) {
		if(Recurse == null) {
			Recurse = false;
		}
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse) {
					var group = flixel_group_FlxTypedGroup.resolveGroup(basic);
					if(group != null) {
						group.forEachOfType(ObjectClass,Function1,Recurse);
					}
				}
				if(js_Boot.__instanceof(basic,ObjectClass)) {
					Function1(basic);
				}
			}
		}
	}
	,set_maxSize: function(Size) {
		this.maxSize = Math.abs(Size) | 0;
		if(this._marker >= this.maxSize) {
			this._marker = 0;
		}
		if(this.maxSize == 0 || this.members == null || this.maxSize >= this.length) {
			return this.maxSize;
		}
		var i = this.maxSize;
		var l = this.length;
		var basic = null;
		while(i < l) {
			basic = this.members[i++];
			if(basic != null) {
				if(this._memberRemoved != null) {
					this._memberRemoved.dispatch(basic);
				}
				basic.destroy();
			}
		}
		flixel_util_FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this.members,this.maxSize);
		this.length = this.members.length;
		return this.maxSize;
	}
	,get_memberAdded: function() {
		if(this._memberAdded == null) {
			this._memberAdded = new flixel_util__$FlxSignal_FlxSignal1();
		}
		return this._memberAdded;
	}
	,get_memberRemoved: function() {
		if(this._memberRemoved == null) {
			this._memberRemoved = new flixel_util__$FlxSignal_FlxSignal1();
		}
		return this._memberRemoved;
	}
	,__class__: flixel_group_FlxTypedGroup
	,__properties__: $extend(flixel_FlxBasic.prototype.__properties__,{get_memberRemoved:"get_memberRemoved",get_memberAdded:"get_memberAdded",set_maxSize:"set_maxSize"})
});
var flixel_FlxState = function(MaxSize) {
	this._requestSubStateReset = false;
	this.destroySubStates = true;
	this.persistentDraw = true;
	this.persistentUpdate = false;
	flixel_group_FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["flixel.FlxState"] = flixel_FlxState;
flixel_FlxState.__name__ = "flixel.FlxState";
flixel_FlxState.__super__ = flixel_group_FlxTypedGroup;
flixel_FlxState.prototype = $extend(flixel_group_FlxTypedGroup.prototype,{
	persistentUpdate: null
	,persistentDraw: null
	,destroySubStates: null
	,subState: null
	,_requestedSubState: null
	,_requestSubStateReset: null
	,_subStateOpened: null
	,_subStateClosed: null
	,create: function() {
	}
	,draw: function() {
		if(this.persistentDraw || this.subState == null) {
			flixel_group_FlxTypedGroup.prototype.draw.call(this);
		}
		if(this.subState != null) {
			this.subState.draw();
		}
	}
	,openSubState: function(SubState) {
		this._requestSubStateReset = true;
		this._requestedSubState = SubState;
	}
	,closeSubState: function() {
		this._requestSubStateReset = true;
	}
	,resetSubState: function() {
		if(this.subState != null) {
			if(this.subState.closeCallback != null) {
				this.subState.closeCallback();
			}
			if(this._subStateClosed != null) {
				this._subStateClosed.dispatch(this.subState);
			}
			if(this.destroySubStates) {
				this.subState.destroy();
			}
		}
		this.subState = this._requestedSubState;
		this._requestedSubState = null;
		if(this.subState != null) {
			if(!this.persistentUpdate) {
				flixel_FlxG.inputs.onStateSwitch();
			}
			this.subState._parentState = this;
			if(!this.subState._created) {
				this.subState._created = true;
				this.subState.create();
			}
			if(this.subState.openCallback != null) {
				this.subState.openCallback();
			}
			if(this._subStateOpened != null) {
				this._subStateOpened.dispatch(this.subState);
			}
		}
	}
	,destroy: function() {
		flixel_util_FlxDestroyUtil.destroy(this._subStateOpened);
		flixel_util_FlxDestroyUtil.destroy(this._subStateClosed);
		if(this.subState != null) {
			this.subState.destroy();
			this.subState = null;
		}
		flixel_group_FlxTypedGroup.prototype.destroy.call(this);
	}
	,switchTo: function(nextState) {
		return true;
	}
	,onFocusLost: function() {
	}
	,onFocus: function() {
	}
	,onResize: function(Width,Height) {
	}
	,tryUpdate: function(elapsed) {
		if(this.persistentUpdate || this.subState == null) {
			this.update(elapsed);
		}
		if(this._requestSubStateReset) {
			this._requestSubStateReset = false;
			this.resetSubState();
		}
		if(this.subState != null) {
			this.subState.tryUpdate(elapsed);
		}
	}
	,get_bgColor: function() {
		return flixel_FlxG.cameras.get_bgColor();
	}
	,set_bgColor: function(Value) {
		return flixel_FlxG.cameras.set_bgColor(Value);
	}
	,get_subStateOpened: function() {
		if(this._subStateOpened == null) {
			this._subStateOpened = new flixel_util__$FlxSignal_FlxSignal1();
		}
		return this._subStateOpened;
	}
	,get_subStateClosed: function() {
		if(this._subStateClosed == null) {
			this._subStateClosed = new flixel_util__$FlxSignal_FlxSignal1();
		}
		return this._subStateClosed;
	}
	,__class__: flixel_FlxState
	,__properties__: $extend(flixel_group_FlxTypedGroup.prototype.__properties__,{get_subStateClosed:"get_subStateClosed",get_subStateOpened:"get_subStateOpened",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"})
});
var flixel_addons_transition_FlxTransitionableState = function(TransIn,TransOut) {
	this._exiting = false;
	this.transOutFinished = false;
	this.transIn = TransIn;
	this.transOut = TransOut;
	if(this.transIn == null && flixel_addons_transition_FlxTransitionableState.defaultTransIn != null) {
		this.transIn = flixel_addons_transition_FlxTransitionableState.defaultTransIn;
	}
	if(this.transOut == null && flixel_addons_transition_FlxTransitionableState.defaultTransOut != null) {
		this.transOut = flixel_addons_transition_FlxTransitionableState.defaultTransOut;
	}
	flixel_FlxState.call(this);
};
$hxClasses["flixel.addons.transition.FlxTransitionableState"] = flixel_addons_transition_FlxTransitionableState;
flixel_addons_transition_FlxTransitionableState.__name__ = "flixel.addons.transition.FlxTransitionableState";
flixel_addons_transition_FlxTransitionableState.__super__ = flixel_FlxState;
flixel_addons_transition_FlxTransitionableState.prototype = $extend(flixel_FlxState.prototype,{
	transIn: null
	,transOut: null
	,destroy: function() {
		flixel_FlxState.prototype.destroy.call(this);
		this.transIn = null;
		this.transOut = null;
		this._onExit = null;
	}
	,create: function() {
		flixel_FlxState.prototype.create.call(this);
		this.transitionIn();
	}
	,switchTo: function(nextState) {
		if(!this.get_hasTransOut()) {
			return true;
		}
		if(!this._exiting) {
			this.transitionToState(nextState);
		}
		return this.transOutFinished;
	}
	,transitionToState: function(nextState) {
		this._exiting = true;
		this.transitionOut(function() {
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		});
		if(flixel_addons_transition_FlxTransitionableState.skipNextTransOut) {
			flixel_addons_transition_FlxTransitionableState.skipNextTransOut = false;
			this.finishTransOut();
		}
	}
	,transitionIn: function() {
		if(this.transIn != null && this.transIn.type != "none") {
			if(flixel_addons_transition_FlxTransitionableState.skipNextTransIn) {
				flixel_addons_transition_FlxTransitionableState.skipNextTransIn = false;
				if(this.finishTransIn != null) {
					this.finishTransIn();
				}
				return;
			}
			var _trans = this.createTransition(this.transIn);
			_trans.setStatus(3);
			this.openSubState(_trans);
			_trans.set_finishCallback($bind(this,this.finishTransIn));
			_trans.start(1);
		}
	}
	,transitionOut: function(OnExit) {
		this._onExit = OnExit;
		if(this.get_hasTransOut()) {
			var _trans = this.createTransition(this.transOut);
			_trans.setStatus(2);
			this.openSubState(_trans);
			_trans.set_finishCallback($bind(this,this.finishTransOut));
			_trans.start(0);
		} else {
			this._onExit();
		}
	}
	,transOutFinished: null
	,_exiting: null
	,_onExit: null
	,get_hasTransIn: function() {
		if(this.transIn != null) {
			return this.transIn.type != "none";
		} else {
			return false;
		}
	}
	,get_hasTransOut: function() {
		if(this.transOut != null) {
			return this.transOut.type != "none";
		} else {
			return false;
		}
	}
	,createTransition: function(data) {
		switch(data.type) {
		case "fade":
			return new flixel_addons_transition_Transition(data);
		case "tiles":
			return new flixel_addons_transition_Transition(data);
		default:
			return null;
		}
	}
	,finishTransIn: function() {
		this.closeSubState();
	}
	,finishTransOut: function() {
		this.transOutFinished = true;
		if(!this._exiting) {
			this.closeSubState();
		}
		if(this._onExit != null) {
			this._onExit();
		}
	}
	,__class__: flixel_addons_transition_FlxTransitionableState
	,__properties__: $extend(flixel_FlxState.prototype.__properties__,{get_hasTransOut:"get_hasTransOut",get_hasTransIn:"get_hasTransIn"})
});
var flixel_addons_ui_interfaces_IEventGetter = function() { };
$hxClasses["flixel.addons.ui.interfaces.IEventGetter"] = flixel_addons_ui_interfaces_IEventGetter;
flixel_addons_ui_interfaces_IEventGetter.__name__ = "flixel.addons.ui.interfaces.IEventGetter";
flixel_addons_ui_interfaces_IEventGetter.__isInterface__ = true;
flixel_addons_ui_interfaces_IEventGetter.prototype = {
	getEvent: null
	,getRequest: null
	,__class__: flixel_addons_ui_interfaces_IEventGetter
};
var flixel_addons_ui_interfaces_IFlxUIState = function() { };
$hxClasses["flixel.addons.ui.interfaces.IFlxUIState"] = flixel_addons_ui_interfaces_IFlxUIState;
flixel_addons_ui_interfaces_IFlxUIState.__name__ = "flixel.addons.ui.interfaces.IFlxUIState";
flixel_addons_ui_interfaces_IFlxUIState.__isInterface__ = true;
flixel_addons_ui_interfaces_IFlxUIState.__interfaces__ = [flixel_addons_ui_interfaces_IEventGetter];
flixel_addons_ui_interfaces_IFlxUIState.prototype = {
	forceFocus: null
	,tooltips: null
	,cursor: null
	,_tongue: null
	,__class__: flixel_addons_ui_interfaces_IFlxUIState
};
var flixel_addons_ui_FlxUIState = function(TransIn,TransOut) {
	this.getTextFallback = null;
	this._reload_countdown = 0;
	this._reload = false;
	this.reload_ui_on_resize = false;
	this._xml_id = "";
	this._cursorHidden = false;
	this.hideCursorOnSubstate = false;
	this.cursor = null;
	flixel_addons_transition_FlxTransitionableState.call(this,TransIn,TransOut);
};
$hxClasses["flixel.addons.ui.FlxUIState"] = flixel_addons_ui_FlxUIState;
flixel_addons_ui_FlxUIState.__name__ = "flixel.addons.ui.FlxUIState";
flixel_addons_ui_FlxUIState.__interfaces__ = [flixel_addons_ui_interfaces_IFlxUIState,flixel_addons_ui_interfaces_IEventGetter];
flixel_addons_ui_FlxUIState.__super__ = flixel_addons_transition_FlxTransitionableState;
flixel_addons_ui_FlxUIState.prototype = $extend(flixel_addons_transition_FlxTransitionableState.prototype,{
	destroyed: null
	,cursor: null
	,hideCursorOnSubstate: null
	,_cursorHidden: null
	,tooltips: null
	,_xml_id: null
	,_makeCursor: null
	,_ui_vars: null
	,_ui: null
	,_tongue: null
	,reload_ui_on_resize: null
	,_reload: null
	,_reload_countdown: null
	,getTextFallback: null
	,create: function() {
		if(flixel_addons_ui_FlxUIState.static_tongue != null) {
			this._tongue = flixel_addons_ui_FlxUIState.static_tongue;
		}
		if(this._makeCursor == true) {
			this.cursor = this.createCursor();
		}
		this.tooltips = new flixel_addons_ui_FlxUITooltipManager(this);
		var liveFile = null;
		this._ui = this.createUI(null,this,null,this._tongue);
		this.add(this._ui);
		if(this.getTextFallback != null) {
			this._ui.getTextFallback = this.getTextFallback;
		}
		if(this._xml_id != null && this._xml_id != "") {
			var data = null;
			var errorMsg = "";
			if(liveFile == null) {
				try {
					data = flixel_addons_ui_U.xml(this._xml_id);
				} catch( _g ) {
					haxe_NativeStackTrace.lastError = _g;
					var _g1 = haxe_Exception.caught(_g).unwrap();
					if(typeof(_g1) == "string") {
						var msg = _g1;
						errorMsg = msg;
					} else {
						throw _g;
					}
				}
				if(data == null) {
					try {
						data = flixel_addons_ui_U.xml(this._xml_id,"xml",true,"");
					} catch( _g ) {
						haxe_NativeStackTrace.lastError = _g;
						var _g1 = haxe_Exception.caught(_g).unwrap();
						if(typeof(_g1) == "string") {
							var msg2 = _g1;
							errorMsg += ", " + msg2;
						} else {
							throw _g;
						}
					}
				}
			}
			if(data == null) {
				if(liveFile != null) {
					this.loadUIFromData(liveFile);
				}
			} else {
				this.loadUIFromData(data);
			}
		} else {
			this.loadUIFromData(null);
		}
		if(this.cursor != null && this._ui != null) {
			this.add(this.cursor);
			this.cursor.addWidgetsFromUI(this._ui);
			this.cursor.findVisibleLocation(0);
		}
		this.tooltips.init();
		flixel_addons_transition_FlxTransitionableState.prototype.create.call(this);
		this.cleanup();
	}
	,update: function(elapsed) {
		flixel_addons_transition_FlxTransitionableState.prototype.update.call(this,elapsed);
		if(this.tooltips != null) {
			this.tooltips.update(elapsed);
		}
		if(this._reload) {
			if(this._reload_countdown > 0) {
				this._reload_countdown--;
				if(this._reload_countdown == 0) {
					this.reloadUI();
				}
			}
		}
	}
	,cleanup: function() {
		this._ui.cleanup();
	}
	,_cleanupUIVars: function() {
		if(this._ui_vars != null) {
			var h = this._ui_vars.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				var _this = this._ui_vars;
				if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
					delete(_this.h[key]);
				}
			}
			this._ui_vars = null;
		}
	}
	,setUIVariable: function(key,value) {
		if(this._ui != null) {
			this._ui.setVariable(key,value);
		} else {
			if(this._ui_vars == null) {
				this._ui_vars = new haxe_ds_StringMap();
			}
			this._ui_vars.h[key] = value;
		}
	}
	,resizeScreen: function(width,height) {
		if(height == null) {
			height = 600;
		}
		if(width == null) {
			width = 800;
		}
	}
	,openSubState: function(SubState) {
		if(this.cursor != null && this.hideCursorOnSubstate && this.cursor.visible == true) {
			this._cursorHidden = true;
			this.cursor.set_visible(false);
		}
		flixel_addons_transition_FlxTransitionableState.prototype.openSubState.call(this,SubState);
	}
	,closeSubState: function() {
		if(this.cursor != null && this.hideCursorOnSubstate && this._cursorHidden) {
			this._cursorHidden = false;
			this.cursor.set_visible(true);
		}
		flixel_addons_transition_FlxTransitionableState.prototype.closeSubState.call(this);
	}
	,onResize: function(Width,Height) {
		if(this.reload_ui_on_resize) {
			flixel_FlxG.scaleMode.onMeasure(Width,Height);
			this._reload_countdown = 1;
			this._reload = true;
		}
	}
	,onShowTooltip: function(t) {
	}
	,destroy: function() {
		this.destroyed = true;
		if(this._ui != null) {
			this._ui.destroy();
			this.remove(this._ui,true);
			this._ui = null;
		}
		if(this.tooltips != null) {
			this.tooltips.destroy();
			this.tooltips = null;
		}
		flixel_addons_transition_FlxTransitionableState.prototype.destroy.call(this);
	}
	,forceFocus: function(b,thing) {
		if(this._ui != null) {
			if(b) {
				this._ui.set_focus(thing);
			} else {
				this._ui.set_focus(null);
			}
		}
	}
	,onCursorEvent: function(code,target) {
		this.getEvent(code,target,null);
	}
	,getEvent: function(id,sender,data,params) {
	}
	,getRequest: function(id,sender,data,params) {
		return null;
	}
	,getText: function(Flag,Context,Safe) {
		if(Safe == null) {
			Safe = true;
		}
		if(Context == null) {
			Context = "ui";
		}
		if(this._tongue != null) {
			return this._tongue.get(Flag,Context,Safe);
		}
		if(this.getTextFallback != null) {
			return this.getTextFallback(Flag,Context,Safe);
		}
		return Flag;
	}
	,createCursor: function() {
		return new flixel_addons_ui_FlxUICursor($bind(this,this.onCursorEvent));
	}
	,createUI: function(data,ptr,superIndex_,tongue_,liveFilePath_) {
		if(liveFilePath_ == null) {
			liveFilePath_ = "";
		}
		var flxui = new flixel_addons_ui_FlxUI(data,ptr,superIndex_,tongue_,liveFilePath_,this._ui_vars);
		this._cleanupUIVars();
		return flxui;
	}
	,loadUIFromData: function(data) {
		this._ui.load(data);
	}
	,reloadUI: function(e) {
		if(this._ui != null) {
			this.remove(this._ui,true);
			this._ui.destroy();
			this._ui = null;
		}
		this._ui = this.createUI(null,this,null,this._tongue);
		this.add(this._ui);
		var data = flixel_addons_ui_U.xml(this._xml_id);
		if(data != null) {
			this.loadUIFromData(data);
		}
		this._reload = false;
		this._reload_countdown = 0;
	}
	,__class__: flixel_addons_ui_FlxUIState
});
var MusicBeatState = function(TransIn,TransOut) {
	this.curBeat = 0;
	this.curStep = 0;
	this.lastStep = 0;
	this.lastBeat = 0;
	flixel_addons_ui_FlxUIState.call(this,TransIn,TransOut);
};
$hxClasses["MusicBeatState"] = MusicBeatState;
MusicBeatState.__name__ = "MusicBeatState";
MusicBeatState.__super__ = flixel_addons_ui_FlxUIState;
MusicBeatState.prototype = $extend(flixel_addons_ui_FlxUIState.prototype,{
	lastBeat: null
	,lastStep: null
	,curStep: null
	,curBeat: null
	,get_controls: function() {
		return PlayerSettings.player1.controls;
	}
	,create: function() {
		if(this.transIn != null) {
			haxe_Log.trace("reg " + Std.string(this.transIn.region),{ fileName : "source/MusicBeatState.hx", lineNumber : 25, className : "MusicBeatState", methodName : "create"});
		}
		flixel_addons_ui_FlxUIState.prototype.create.call(this);
	}
	,update: function(elapsed) {
		var oldStep = this.curStep;
		this.updateCurStep();
		this.updateBeat();
		if(oldStep != this.curStep && this.curStep > 0) {
			this.stepHit();
		}
		flixel_addons_ui_FlxUIState.prototype.update.call(this,elapsed);
	}
	,updateBeat: function() {
		this.curBeat = Math.floor(this.curStep / 4);
	}
	,updateCurStep: function() {
		var lastChange = { stepTime : 0, songTime : 0, bpm : 0};
		var _g = 0;
		var _g1 = Conductor.bpmChangeMap.length;
		while(_g < _g1) {
			var i = _g++;
			if(Conductor.songPosition >= Conductor.bpmChangeMap[i].songTime) {
				lastChange = Conductor.bpmChangeMap[i];
			}
		}
		this.curStep = lastChange.stepTime + Math.floor((Conductor.songPosition - lastChange.songTime) / Conductor.stepCrochet);
	}
	,stepHit: function() {
		if(this.curStep % 4 == 0) {
			this.beatHit();
		}
	}
	,beatHit: function() {
	}
	,__class__: MusicBeatState
	,__properties__: $extend(flixel_addons_ui_FlxUIState.prototype.__properties__,{get_controls:"get_controls"})
});
var ChartingState = function(TransIn,TransOut) {
	this.daSpacing = 0.3;
	this.updatedSection = false;
	this.tempBpm = 0;
	this.GRID_SIZE = 40;
	this.amountSteps = 0;
	this.curSong = "Dadbattle";
	this.curSection = 0;
	MusicBeatState.call(this,TransIn,TransOut);
};
$hxClasses["ChartingState"] = ChartingState;
ChartingState.__name__ = "ChartingState";
ChartingState.__super__ = MusicBeatState;
ChartingState.prototype = $extend(MusicBeatState.prototype,{
	_file: null
	,UI_box: null
	,curSection: null
	,bpmTxt: null
	,strumLine: null
	,curSong: null
	,amountSteps: null
	,bullshitUI: null
	,highlight: null
	,GRID_SIZE: null
	,dummyArrow: null
	,curRenderedNotes: null
	,curRenderedSustains: null
	,gridBG: null
	,_song: null
	,typingShit: null
	,curSelectedNote: null
	,tempBpm: null
	,vocals: null
	,leftIcon: null
	,rightIcon: null
	,create: function() {
		this.curSection = ChartingState.lastSection;
		this.gridBG = flixel_addons_display_FlxGridOverlay.create(this.GRID_SIZE,this.GRID_SIZE,this.GRID_SIZE * 8,this.GRID_SIZE * 16);
		this.add(this.gridBG);
		this.leftIcon = new HealthIcon("bf");
		this.rightIcon = new HealthIcon("dad");
		this.leftIcon.scrollFactor.set(1,1);
		this.rightIcon.scrollFactor.set(1,1);
		this.leftIcon.setGraphicSize(0,45);
		this.rightIcon.setGraphicSize(0,45);
		this.add(this.leftIcon);
		this.add(this.rightIcon);
		this.leftIcon.setPosition(0,-100);
		this.rightIcon.setPosition(this.gridBG.get_width() / 2,-100);
		var gridBlackLine = new flixel_FlxSprite(this.gridBG.x + this.gridBG.get_width() / 2).makeGraphic(2,this.gridBG.get_height() | 0,-16777216);
		this.add(gridBlackLine);
		this.curRenderedNotes = new flixel_group_FlxTypedGroup();
		this.curRenderedSustains = new flixel_group_FlxTypedGroup();
		if(PlayState.SONG != null) {
			this._song = PlayState.SONG;
		} else {
			this._song = { song : "Test", notes : [], bpm : 150, needsVoices : true, player1 : "bf", player2 : "dad", speed : 1, validScore : false};
		}
		flixel_FlxG.mouse.set_visible(true);
		flixel_FlxG.save.bind("funkin","ninjamuffin99");
		this.tempBpm = this._song.bpm;
		this.addSection();
		this.updateGrid();
		this.loadSong(this._song.song);
		Conductor.changeBPM(this._song.bpm);
		Conductor.mapBPMChanges(this._song);
		this.bpmTxt = new flixel_text_FlxText(1000,50,0,"",16);
		this.bpmTxt.scrollFactor.set();
		this.add(this.bpmTxt);
		this.strumLine = new flixel_FlxSprite(0,50).makeGraphic(flixel_FlxG.width / 2 | 0,4);
		this.add(this.strumLine);
		this.dummyArrow = new flixel_FlxSprite().makeGraphic(this.GRID_SIZE,this.GRID_SIZE);
		this.add(this.dummyArrow);
		var tabs = [{ name : "Song", label : "Song"},{ name : "Section", label : "Section"},{ name : "Note", label : "Note"}];
		this.UI_box = new flixel_addons_ui_FlxUITabMenu(null,null,tabs,null,true);
		this.UI_box.resize(300,400);
		this.UI_box.set_x(flixel_FlxG.width / 2);
		this.UI_box.set_y(20);
		this.add(this.UI_box);
		this.addSongUI();
		this.addSectionUI();
		this.addNoteUI();
		this.add(this.curRenderedNotes);
		this.add(this.curRenderedSustains);
		MusicBeatState.prototype.create.call(this);
	}
	,addSongUI: function() {
		var _gthis = this;
		var UI_songTitle = new flixel_addons_ui_FlxUIInputText(10,10,70,this._song.song,8);
		this.typingShit = UI_songTitle;
		var check_voices = new flixel_addons_ui_FlxUICheckBox(10,25,null,null,"Has voice track",100);
		check_voices.set_checked(this._song.needsVoices);
		check_voices.callback = function() {
			_gthis._song.needsVoices = check_voices.checked;
			haxe_Log.trace("CHECKED!",{ fileName : "source/ChartingState.hx", lineNumber : 186, className : "ChartingState", methodName : "addSongUI"});
		};
		var check_mute_inst = new flixel_addons_ui_FlxUICheckBox(10,200,null,null,"Mute Instrumental (in editor)",100);
		check_mute_inst.set_checked(false);
		check_mute_inst.callback = function() {
			var vol = 1;
			if(check_mute_inst.checked) {
				vol = 0;
			}
			flixel_FlxG.sound.music.set_volume(vol);
		};
		var saveButton = new flixel_ui_FlxButton(110,8,"Save",function() {
			_gthis.saveLevel();
		});
		var reloadSong = new flixel_ui_FlxButton(saveButton.x + saveButton.get_width() + 10,saveButton.y,"Reload Audio",function() {
			_gthis.loadSong(_gthis._song.song);
		});
		var reloadSongJson = new flixel_ui_FlxButton(reloadSong.x,saveButton.y + 30,"Reload JSON",function() {
			_gthis.loadJson(_gthis._song.song.toLowerCase());
		});
		var loadAutosaveBtn = new flixel_ui_FlxButton(reloadSongJson.x,reloadSongJson.y + 30,"load autosave",$bind(this,this.loadAutosave));
		var stepperSpeed = new flixel_addons_ui_FlxUINumericStepper(10,80,0.1,1,0.1,10,1);
		stepperSpeed.set_value(this._song.speed);
		stepperSpeed.name = "song_speed";
		var stepperBPM = new flixel_addons_ui_FlxUINumericStepper(10,65,1,1,1,339,0);
		stepperBPM.set_value(Conductor.bpm);
		stepperBPM.name = "song_bpm";
		var characters = CoolUtil.coolTextFile(Paths.getPath("data/" + "characterList" + ".txt","TEXT",null));
		var player1DropDown = new flixel_addons_ui_FlxUIDropDownMenu(10,100,flixel_addons_ui_FlxUIDropDownMenu.makeStrIdLabelArray(characters,true),function(character) {
			_gthis._song.player1 = characters[Std.parseInt(character)];
		});
		player1DropDown.set_selectedLabel(this._song.player1);
		var player2DropDown = new flixel_addons_ui_FlxUIDropDownMenu(140,100,flixel_addons_ui_FlxUIDropDownMenu.makeStrIdLabelArray(characters,true),function(character) {
			_gthis._song.player2 = characters[Std.parseInt(character)];
		});
		player2DropDown.set_selectedLabel(this._song.player2);
		var tab_group_song = new flixel_addons_ui_FlxUI(null,this.UI_box);
		tab_group_song.name = "Song";
		tab_group_song.add(UI_songTitle);
		tab_group_song.add(check_voices);
		tab_group_song.add(check_mute_inst);
		tab_group_song.add(saveButton);
		tab_group_song.add(reloadSong);
		tab_group_song.add(reloadSongJson);
		tab_group_song.add(loadAutosaveBtn);
		tab_group_song.add(stepperBPM);
		tab_group_song.add(stepperSpeed);
		tab_group_song.add(player1DropDown);
		tab_group_song.add(player2DropDown);
		this.UI_box.addGroup(tab_group_song);
		this.UI_box.scrollFactor.set();
		flixel_FlxG.camera.follow(this.strumLine);
	}
	,stepperLength: null
	,check_mustHitSection: null
	,check_changeBPM: null
	,stepperSectionBPM: null
	,check_altAnim: null
	,addSectionUI: function() {
		var _gthis = this;
		var tab_group_section = new flixel_addons_ui_FlxUI(null,this.UI_box);
		tab_group_section.name = "Section";
		this.stepperLength = new flixel_addons_ui_FlxUINumericStepper(10,10,4,0,0,999,0);
		this.stepperLength.set_value(this._song.notes[this.curSection].lengthInSteps);
		this.stepperLength.name = "section_length";
		this.stepperSectionBPM = new flixel_addons_ui_FlxUINumericStepper(10,80,1,Conductor.bpm,0,999,0);
		this.stepperSectionBPM.set_value(Conductor.bpm);
		this.stepperSectionBPM.name = "section_bpm";
		var stepperCopy = new flixel_addons_ui_FlxUINumericStepper(110,130,1,1,-999,999,0);
		var copyButton = new flixel_ui_FlxButton(10,130,"Copy last section",function() {
			_gthis.copySection(stepperCopy.value | 0);
		});
		var clearSectionButton = new flixel_ui_FlxButton(10,150,"Clear",$bind(this,this.clearSection));
		var swapSection = new flixel_ui_FlxButton(10,170,"Swap section",function() {
			var _g = 0;
			var _g1 = _gthis._song.notes[_gthis.curSection].sectionNotes.length;
			while(_g < _g1) {
				var i = _g++;
				var note = _gthis._song.notes[_gthis.curSection].sectionNotes[i];
				note[1] = (note[1] + 4) % 8;
				_gthis._song.notes[_gthis.curSection].sectionNotes[i] = note;
				_gthis.updateGrid();
			}
		});
		this.check_mustHitSection = new flixel_addons_ui_FlxUICheckBox(10,30,null,null,"Must hit section",100);
		this.check_mustHitSection.name = "check_mustHit";
		this.check_mustHitSection.set_checked(true);
		this.check_altAnim = new flixel_addons_ui_FlxUICheckBox(10,400,null,null,"Alt Animation",100);
		this.check_altAnim.name = "check_altAnim";
		this.check_changeBPM = new flixel_addons_ui_FlxUICheckBox(10,60,null,null,"Change BPM",100);
		this.check_changeBPM.name = "check_changeBPM";
		tab_group_section.add(this.stepperLength);
		tab_group_section.add(this.stepperSectionBPM);
		tab_group_section.add(stepperCopy);
		tab_group_section.add(this.check_mustHitSection);
		tab_group_section.add(this.check_altAnim);
		tab_group_section.add(this.check_changeBPM);
		tab_group_section.add(copyButton);
		tab_group_section.add(clearSectionButton);
		tab_group_section.add(swapSection);
		this.UI_box.addGroup(tab_group_section);
	}
	,stepperSusLength: null
	,addNoteUI: function() {
		var tab_group_note = new flixel_addons_ui_FlxUI(null,this.UI_box);
		tab_group_note.name = "Note";
		this.stepperSusLength = new flixel_addons_ui_FlxUINumericStepper(10,10,Conductor.stepCrochet / 2,0,0,Conductor.stepCrochet * 16);
		this.stepperSusLength.set_value(0);
		this.stepperSusLength.name = "note_susLength";
		var applyLength = new flixel_ui_FlxButton(100,10,"Apply");
		tab_group_note.add(this.stepperSusLength);
		tab_group_note.add(applyLength);
		this.UI_box.addGroup(tab_group_note);
	}
	,loadSong: function(daSong) {
		var _gthis = this;
		if(flixel_FlxG.sound.music != null) {
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
		}
		flixel_FlxG.sound.playMusic("songs:assets/songs/" + daSong.toLowerCase() + "/Inst." + "mp3",0.6);
		this.vocals = new flixel_system_FlxSound().loadEmbedded("songs:assets/songs/" + daSong.toLowerCase() + "/Voices." + "mp3");
		flixel_FlxG.sound.list.add(this.vocals);
		flixel_FlxG.sound.music.pause();
		this.vocals.pause();
		flixel_FlxG.sound.music.onComplete = function() {
			_gthis.vocals.pause();
			_gthis.vocals.set_time(0);
			flixel_FlxG.sound.music.pause();
			flixel_FlxG.sound.music.set_time(0);
			_gthis.changeSection();
		};
	}
	,generateUI: function() {
		while(this.bullshitUI.members.length > 0) this.bullshitUI.remove(this.bullshitUI.members[0],true);
		var title = new flixel_text_FlxText(this.UI_box.x + 20,this.UI_box.y + 20,0);
		this.bullshitUI.add(title);
	}
	,getEvent: function(id,sender,data,params) {
		if(id == "click_check_box") {
			var check = sender;
			var label = check.getLabel().text;
			switch(label) {
			case "Alt Animation":
				this._song.notes[this.curSection].altAnim = check.checked;
				break;
			case "Change BPM":
				this._song.notes[this.curSection].changeBPM = check.checked;
				break;
			case "Must hit section":
				this._song.notes[this.curSection].mustHitSection = check.checked;
				this.updateHeads();
				break;
			}
		} else if(id == "change_numeric_stepper" && ((sender) instanceof flixel_addons_ui_FlxUINumericStepper)) {
			var nums = sender;
			var wname = nums.name;
			if(wname == "section_length") {
				this._song.notes[this.curSection].lengthInSteps = nums.value | 0;
				this.updateGrid();
			} else if(wname == "song_speed") {
				this._song.speed = nums.value;
			} else if(wname == "song_bpm") {
				this.tempBpm = nums.value | 0;
				Conductor.mapBPMChanges(this._song);
				Conductor.changeBPM(nums.value | 0);
			} else if(wname == "note_susLength") {
				this.curSelectedNote[2] = nums.value;
				this.updateGrid();
			} else if(wname == "section_bpm") {
				this._song.notes[this.curSection].bpm = nums.value | 0;
				this.updateGrid();
			}
		}
	}
	,updatedSection: null
	,sectionStartTime: function() {
		var daBPM = this._song.bpm;
		var daPos = 0;
		var _g = 0;
		var _g1 = this.curSection;
		while(_g < _g1) {
			var i = _g++;
			if(this._song.notes[i].changeBPM) {
				daBPM = this._song.notes[i].bpm;
			}
			daPos += 4 * (60000 / daBPM);
		}
		return daPos;
	}
	,update: function(elapsed) {
		var _gthis = this;
		this.curStep = this.recalculateSteps();
		Conductor.songPosition = flixel_FlxG.sound.music._time;
		this._song.song = this.typingShit.text;
		this.strumLine.set_y(this.getYfromStrum((Conductor.songPosition - this.sectionStartTime()) % (Conductor.stepCrochet * this._song.notes[this.curSection].lengthInSteps)));
		if(this.curBeat % 4 == 0 && this.curStep >= 16 * (this.curSection + 1)) {
			haxe_Log.trace(this.curStep,{ fileName : "source/ChartingState.hx", lineNumber : 481, className : "ChartingState", methodName : "update"});
			haxe_Log.trace(this._song.notes[this.curSection].lengthInSteps * (this.curSection + 1),{ fileName : "source/ChartingState.hx", lineNumber : 482, className : "ChartingState", methodName : "update"});
			haxe_Log.trace("DUMBSHIT",{ fileName : "source/ChartingState.hx", lineNumber : 483, className : "ChartingState", methodName : "update"});
			if(this._song.notes[this.curSection + 1] == null) {
				this.addSection();
			}
			this.changeSection(this.curSection + 1,false);
		}
		if(flixel_FlxG.mouse._leftButton.current == 2) {
			if(flixel_FlxG.mouse.overlaps(this.curRenderedNotes)) {
				this.curRenderedNotes.forEach(function(note) {
					if(flixel_FlxG.mouse.overlaps(note)) {
						var _this = flixel_FlxG.keys.pressed;
						if(_this.keyManager.checkStatus(17,_this.status)) {
							_gthis.selectNote(note);
						} else {
							haxe_Log.trace("tryin to delete note...",{ fileName : "source/ChartingState.hx", lineNumber : 510, className : "ChartingState", methodName : "update"});
							_gthis.deleteNote(note);
						}
					}
				});
			} else if(flixel_FlxG.mouse.x > this.gridBG.x && flixel_FlxG.mouse.x < this.gridBG.x + this.gridBG.get_width() && flixel_FlxG.mouse.y > this.gridBG.y && flixel_FlxG.mouse.y < this.gridBG.y + this.GRID_SIZE * this._song.notes[this.curSection].lengthInSteps) {
				this.addNote();
			}
		}
		if(flixel_FlxG.mouse.x > this.gridBG.x && flixel_FlxG.mouse.x < this.gridBG.x + this.gridBG.get_width() && flixel_FlxG.mouse.y > this.gridBG.y && flixel_FlxG.mouse.y < this.gridBG.y + this.GRID_SIZE * this._song.notes[this.curSection].lengthInSteps) {
			this.dummyArrow.set_x(Math.floor(flixel_FlxG.mouse.x / this.GRID_SIZE) * this.GRID_SIZE);
			var _this = flixel_FlxG.keys.pressed;
			if(_this.keyManager.checkStatus(16,_this.status)) {
				this.dummyArrow.set_y(flixel_FlxG.mouse.y);
			} else {
				this.dummyArrow.set_y(Math.floor(flixel_FlxG.mouse.y / this.GRID_SIZE) * this.GRID_SIZE);
			}
		}
		var _this = flixel_FlxG.keys.justPressed;
		if(_this.keyManager.checkStatus(13,_this.status)) {
			ChartingState.lastSection = this.curSection;
			PlayState.SONG = this._song;
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
			var _this = this.vocals;
			_this.cleanup(_this.autoDestroy,true);
			var nextState = new PlayState();
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
		var _this = flixel_FlxG.keys.justPressed;
		if(_this.keyManager.checkStatus(69,_this.status)) {
			this.changeNoteSustain(Conductor.stepCrochet);
		}
		var _this = flixel_FlxG.keys.justPressed;
		if(_this.keyManager.checkStatus(81,_this.status)) {
			this.changeNoteSustain(-Conductor.stepCrochet);
		}
		var _this = flixel_FlxG.keys.justPressed;
		if(_this.keyManager.checkStatus(9,_this.status)) {
			var _this = flixel_FlxG.keys.pressed;
			if(_this.keyManager.checkStatus(16,_this.status)) {
				var fh = this.UI_box;
				fh.set_selected_tab(fh.get_selected_tab() - 1);
				if(this.UI_box.get_selected_tab() < 0) {
					this.UI_box.set_selected_tab(2);
				}
			} else {
				var fh = this.UI_box;
				fh.set_selected_tab(fh.get_selected_tab() + 1);
				if(this.UI_box.get_selected_tab() >= 3) {
					this.UI_box.set_selected_tab(0);
				}
			}
		}
		if(!this.typingShit.hasFocus) {
			var _this = flixel_FlxG.keys.justPressed;
			if(_this.keyManager.checkStatus(32,_this.status)) {
				if(flixel_FlxG.sound.music._channel != null) {
					flixel_FlxG.sound.music.pause();
					this.vocals.pause();
				} else {
					this.vocals.play();
					flixel_FlxG.sound.music.play();
				}
			}
			var _this = flixel_FlxG.keys.justPressed;
			if(_this.keyManager.checkStatus(82,_this.status)) {
				var _this = flixel_FlxG.keys.pressed;
				if(_this.keyManager.checkStatus(16,_this.status)) {
					this.resetSection(true);
				} else {
					this.resetSection();
				}
			}
			if(flixel_FlxG.mouse.wheel != 0) {
				flixel_FlxG.sound.music.pause();
				this.vocals.pause();
				var fh = flixel_FlxG.sound.music;
				fh.set_time(fh._time - flixel_FlxG.mouse.wheel * Conductor.stepCrochet * 0.4);
				this.vocals.set_time(flixel_FlxG.sound.music._time);
			}
			var _this = flixel_FlxG.keys.pressed;
			if(!_this.keyManager.checkStatus(16,_this.status)) {
				var tmp;
				var _this = flixel_FlxG.keys.pressed;
				if(!_this.keyManager.checkStatus(87,_this.status)) {
					var _this = flixel_FlxG.keys.pressed;
					tmp = _this.keyManager.checkStatus(83,_this.status);
				} else {
					tmp = true;
				}
				if(tmp) {
					flixel_FlxG.sound.music.pause();
					this.vocals.pause();
					var daTime = 700 * flixel_FlxG.elapsed;
					var _this = flixel_FlxG.keys.pressed;
					if(_this.keyManager.checkStatus(87,_this.status)) {
						var fh = flixel_FlxG.sound.music;
						fh.set_time(fh._time - daTime);
					} else {
						var fh = flixel_FlxG.sound.music;
						fh.set_time(fh._time + daTime);
					}
					this.vocals.set_time(flixel_FlxG.sound.music._time);
				}
			} else {
				var tmp;
				var _this = flixel_FlxG.keys.justPressed;
				if(!_this.keyManager.checkStatus(87,_this.status)) {
					var _this = flixel_FlxG.keys.justPressed;
					tmp = _this.keyManager.checkStatus(83,_this.status);
				} else {
					tmp = true;
				}
				if(tmp) {
					flixel_FlxG.sound.music.pause();
					this.vocals.pause();
					var daTime = Conductor.stepCrochet * 2;
					var _this = flixel_FlxG.keys.justPressed;
					if(_this.keyManager.checkStatus(87,_this.status)) {
						var fh = flixel_FlxG.sound.music;
						fh.set_time(fh._time - daTime);
					} else {
						var fh = flixel_FlxG.sound.music;
						fh.set_time(fh._time + daTime);
					}
					this.vocals.set_time(flixel_FlxG.sound.music._time);
				}
			}
		}
		this._song.bpm = this.tempBpm;
		var shiftThing = 1;
		var _this = flixel_FlxG.keys.pressed;
		if(_this.keyManager.checkStatus(16,_this.status)) {
			shiftThing = 4;
		}
		var tmp;
		var _this = flixel_FlxG.keys.justPressed;
		if(!_this.keyManager.checkStatus(39,_this.status)) {
			var _this = flixel_FlxG.keys.justPressed;
			tmp = _this.keyManager.checkStatus(68,_this.status);
		} else {
			tmp = true;
		}
		if(tmp) {
			this.changeSection(this.curSection + shiftThing);
		}
		var tmp;
		var _this = flixel_FlxG.keys.justPressed;
		if(!_this.keyManager.checkStatus(37,_this.status)) {
			var _this = flixel_FlxG.keys.justPressed;
			tmp = _this.keyManager.checkStatus(65,_this.status);
		} else {
			tmp = true;
		}
		if(tmp) {
			this.changeSection(this.curSection - shiftThing);
		}
		this.bpmTxt.set_text(this.bpmTxt.set_text(Std.string(flixel_math_FlxMath.roundDecimal(Conductor.songPosition / 1000,2)) + " / " + Std.string(flixel_math_FlxMath.roundDecimal(flixel_FlxG.sound.music._length / 1000,2)) + "\nSection: " + this.curSection));
		MusicBeatState.prototype.update.call(this,elapsed);
	}
	,changeNoteSustain: function(value) {
		if(this.curSelectedNote != null) {
			if(this.curSelectedNote[2] != null) {
				this.curSelectedNote[2] += value;
				this.curSelectedNote[2] = Math.max(this.curSelectedNote[2],0);
			}
		}
		this.updateNoteUI();
		this.updateGrid();
	}
	,recalculateSteps: function() {
		var lastChange = { stepTime : 0, songTime : 0, bpm : 0};
		var _g = 0;
		var _g1 = Conductor.bpmChangeMap.length;
		while(_g < _g1) {
			var i = _g++;
			if(flixel_FlxG.sound.music._time > Conductor.bpmChangeMap[i].songTime) {
				lastChange = Conductor.bpmChangeMap[i];
			}
		}
		this.curStep = lastChange.stepTime + Math.floor((flixel_FlxG.sound.music._time - lastChange.songTime) / Conductor.stepCrochet);
		this.updateBeat();
		return this.curStep;
	}
	,resetSection: function(songBeginning) {
		if(songBeginning == null) {
			songBeginning = false;
		}
		this.updateGrid();
		flixel_FlxG.sound.music.pause();
		this.vocals.pause();
		flixel_FlxG.sound.music.set_time(this.sectionStartTime());
		if(songBeginning) {
			flixel_FlxG.sound.music.set_time(0);
			this.curSection = 0;
		}
		this.vocals.set_time(flixel_FlxG.sound.music._time);
		this.updateCurStep();
		this.updateGrid();
		this.updateSectionUI();
	}
	,changeSection: function(sec,updateMusic) {
		if(updateMusic == null) {
			updateMusic = true;
		}
		if(sec == null) {
			sec = 0;
		}
		haxe_Log.trace("changing section" + sec,{ fileName : "source/ChartingState.hx", lineNumber : 731, className : "ChartingState", methodName : "changeSection"});
		if(this._song.notes[sec] != null) {
			this.curSection = sec;
			this.updateGrid();
			if(updateMusic) {
				flixel_FlxG.sound.music.pause();
				this.vocals.pause();
				flixel_FlxG.sound.music.set_time(this.sectionStartTime());
				this.vocals.set_time(flixel_FlxG.sound.music._time);
				this.updateCurStep();
			}
			this.updateGrid();
			this.updateSectionUI();
		}
	}
	,copySection: function(sectionNum) {
		if(sectionNum == null) {
			sectionNum = 1;
		}
		var a = this.curSection;
		var daSec = a > sectionNum ? a : sectionNum;
		var _g = 0;
		var _g1 = this._song.notes[daSec - sectionNum].sectionNotes;
		while(_g < _g1.length) {
			var note = _g1[_g];
			++_g;
			var strum = note[0] + Conductor.stepCrochet * (this._song.notes[daSec].lengthInSteps * sectionNum);
			var copiedNote = [strum,note[1],note[2]];
			this._song.notes[daSec].sectionNotes.push(copiedNote);
		}
		this.updateGrid();
	}
	,updateSectionUI: function() {
		var sec = this._song.notes[this.curSection];
		this.stepperLength.set_value(sec.lengthInSteps);
		this.check_mustHitSection.set_checked(sec.mustHitSection);
		this.check_altAnim.set_checked(sec.altAnim);
		this.check_changeBPM.set_checked(sec.changeBPM);
		this.stepperSectionBPM.set_value(sec.bpm);
		this.updateHeads();
	}
	,updateHeads: function() {
		if(this.check_mustHitSection.checked) {
			this.leftIcon.animation.play("bf");
			this.rightIcon.animation.play("dad");
		} else {
			this.leftIcon.animation.play("dad");
			this.rightIcon.animation.play("bf");
		}
	}
	,updateNoteUI: function() {
		if(this.curSelectedNote != null) {
			this.stepperSusLength.set_value(this.curSelectedNote[2]);
		}
	}
	,updateGrid: function() {
		while(this.curRenderedNotes.members.length > 0) this.curRenderedNotes.remove(this.curRenderedNotes.members[0],true);
		while(this.curRenderedSustains.members.length > 0) this.curRenderedSustains.remove(this.curRenderedSustains.members[0],true);
		var sectionInfo = this._song.notes[this.curSection].sectionNotes;
		if(this._song.notes[this.curSection].changeBPM && this._song.notes[this.curSection].bpm > 0) {
			Conductor.changeBPM(this._song.notes[this.curSection].bpm);
		} else {
			var daBPM = this._song.bpm;
			var _g = 0;
			var _g1 = this.curSection;
			while(_g < _g1) {
				var i = _g++;
				if(this._song.notes[i].changeBPM) {
					daBPM = this._song.notes[i].bpm;
				}
			}
			Conductor.changeBPM(daBPM);
		}
		var _g = 0;
		while(_g < sectionInfo.length) {
			var i = sectionInfo[_g];
			++_g;
			var daNoteInfo = i[1];
			var daStrumTime = i[0];
			var daSus = i[2];
			var note = new Note(daStrumTime,daNoteInfo % 4);
			note.sustainLength = daSus;
			note.setGraphicSize(this.GRID_SIZE,this.GRID_SIZE);
			note.updateHitbox();
			note.set_x(Math.floor(daNoteInfo * this.GRID_SIZE));
			note.set_y(Math.floor(this.getYfromStrum((daStrumTime - this.sectionStartTime()) % (Conductor.stepCrochet * this._song.notes[this.curSection].lengthInSteps))));
			this.curRenderedNotes.add(note);
			if(daSus > 0) {
				var sustainVis = new flixel_FlxSprite(note.x + this.GRID_SIZE / 2,note.y + this.GRID_SIZE).makeGraphic(8,Math.floor(flixel_math_FlxMath.remapToRange(daSus,0,Conductor.stepCrochet * 16,0,this.gridBG.get_height())));
				this.curRenderedSustains.add(sustainVis);
			}
		}
	}
	,addSection: function(lengthInSteps) {
		if(lengthInSteps == null) {
			lengthInSteps = 16;
		}
		var sec = { lengthInSteps : lengthInSteps, bpm : this._song.bpm, changeBPM : false, mustHitSection : true, sectionNotes : [], typeOfSection : 0, altAnim : false};
		this._song.notes.push(sec);
	}
	,selectNote: function(note) {
		var swagNum = 0;
		var _g = 0;
		var _g1 = this._song.notes[this.curSection].sectionNotes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i.strumTime == note.strumTime && i.noteData % 4 == note.noteData) {
				this.curSelectedNote = this._song.notes[this.curSection].sectionNotes[swagNum];
			}
			++swagNum;
		}
		this.updateGrid();
		this.updateNoteUI();
	}
	,deleteNote: function(note) {
		var _g = 0;
		var _g1 = this._song.notes[this.curSection].sectionNotes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(i[0] == note.strumTime && i[1] % 4 == note.noteData) {
				HxOverrides.remove(this._song.notes[this.curSection].sectionNotes,i);
			}
		}
		this.updateGrid();
	}
	,clearSection: function() {
		this._song.notes[this.curSection].sectionNotes = [];
		this.updateGrid();
	}
	,clearSong: function() {
		var _g = 0;
		var _g1 = this._song.notes.length;
		while(_g < _g1) {
			var daSection = _g++;
			this._song.notes[daSection].sectionNotes = [];
		}
		this.updateGrid();
	}
	,addNote: function() {
		var noteStrum = this.getStrumTime(this.dummyArrow.y) + this.sectionStartTime();
		var noteData = Math.floor(flixel_FlxG.mouse.x / this.GRID_SIZE);
		var noteSus = 0;
		this._song.notes[this.curSection].sectionNotes.push([noteStrum,noteData,noteSus]);
		this.curSelectedNote = this._song.notes[this.curSection].sectionNotes[this._song.notes[this.curSection].sectionNotes.length - 1];
		var _this = flixel_FlxG.keys.pressed;
		if(_this.keyManager.checkStatus(17,_this.status)) {
			this._song.notes[this.curSection].sectionNotes.push([noteStrum,(noteData + 4) % 8,noteSus]);
		}
		haxe_Log.trace(noteStrum,{ fileName : "source/ChartingState.hx", lineNumber : 956, className : "ChartingState", methodName : "addNote"});
		haxe_Log.trace(this.curSection,{ fileName : "source/ChartingState.hx", lineNumber : 957, className : "ChartingState", methodName : "addNote"});
		this.updateGrid();
		this.updateNoteUI();
		this.autosaveSong();
	}
	,getStrumTime: function(yPos) {
		return flixel_math_FlxMath.remapToRange(yPos,this.gridBG.y,this.gridBG.y + this.gridBG.get_height(),0,16 * Conductor.stepCrochet);
	}
	,getYfromStrum: function(strumTime) {
		return flixel_math_FlxMath.remapToRange(strumTime,0,16 * Conductor.stepCrochet,this.gridBG.y,this.gridBG.y + this.gridBG.get_height());
	}
	,daSpacing: null
	,loadLevel: function() {
		haxe_Log.trace(this._song.notes,{ fileName : "source/ChartingState.hx", lineNumber : 1002, className : "ChartingState", methodName : "loadLevel"});
	}
	,getNotes: function() {
		var noteData = [];
		var _g = 0;
		var _g1 = this._song.notes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			noteData.push(i.sectionNotes);
		}
		return noteData;
	}
	,loadJson: function(song) {
		PlayState.SONG = Song.loadFromJson(song.toLowerCase(),song.toLowerCase());
		var nextState = Type.createInstance(js_Boot.getClass(flixel_FlxG.game._state),[]);
		if(flixel_FlxG.game._state.switchTo(nextState)) {
			flixel_FlxG.game._requestedState = nextState;
		}
	}
	,loadAutosave: function() {
		PlayState.SONG = Song.parseJSONshit(flixel_FlxG.save.data.autosave);
		var nextState = Type.createInstance(js_Boot.getClass(flixel_FlxG.game._state),[]);
		if(flixel_FlxG.game._state.switchTo(nextState)) {
			flixel_FlxG.game._requestedState = nextState;
		}
	}
	,autosaveSong: function() {
		flixel_FlxG.save.data.autosave = JSON.stringify({ "song" : this._song});
		flixel_FlxG.save.flush();
	}
	,saveLevel: function() {
		var json = { "song" : this._song};
		var data = JSON.stringify(json);
		if(data != null && data.length > 0) {
			this._file = new openfl_net_FileReference();
			this._file.addEventListener("complete",$bind(this,this.onSaveComplete));
			this._file.addEventListener("cancel",$bind(this,this.onSaveCancel));
			this._file.addEventListener("ioError",$bind(this,this.onSaveError));
			this._file.save(StringTools.trim(data),this._song.song.toLowerCase() + ".json");
		}
	}
	,onSaveComplete: function(_) {
		this._file.removeEventListener("complete",$bind(this,this.onSaveComplete));
		this._file.removeEventListener("cancel",$bind(this,this.onSaveCancel));
		this._file.removeEventListener("ioError",$bind(this,this.onSaveError));
		this._file = null;
	}
	,onSaveCancel: function(_) {
		this._file.removeEventListener("complete",$bind(this,this.onSaveComplete));
		this._file.removeEventListener("cancel",$bind(this,this.onSaveCancel));
		this._file.removeEventListener("ioError",$bind(this,this.onSaveError));
		this._file = null;
	}
	,onSaveError: function(_) {
		this._file.removeEventListener("complete",$bind(this,this.onSaveComplete));
		this._file.removeEventListener("cancel",$bind(this,this.onSaveCancel));
		this._file.removeEventListener("ioError",$bind(this,this.onSaveError));
		this._file = null;
	}
	,__class__: ChartingState
});
var Conductor = function() {
};
$hxClasses["Conductor"] = Conductor;
Conductor.__name__ = "Conductor";
Conductor.songPosition = null;
Conductor.lastSongPos = null;
Conductor.mapBPMChanges = function(song) {
	Conductor.bpmChangeMap = [];
	var curBPM = song.bpm;
	var totalSteps = 0;
	var totalPos = 0;
	var _g = 0;
	var _g1 = song.notes.length;
	while(_g < _g1) {
		var i = _g++;
		if(song.notes[i].changeBPM && song.notes[i].bpm != curBPM) {
			curBPM = song.notes[i].bpm;
			var event = { stepTime : totalSteps, songTime : totalPos, bpm : curBPM};
			Conductor.bpmChangeMap.push(event);
		}
		var deltaSteps = song.notes[i].lengthInSteps;
		totalSteps += deltaSteps;
		totalPos += 60 / curBPM * 1000 / 4 * deltaSteps;
	}
	haxe_Log.trace("new BPM map BUDDY " + Std.string(Conductor.bpmChangeMap),{ fileName : "source/Conductor.hx", lineNumber : 59, className : "Conductor", methodName : "mapBPMChanges"});
};
Conductor.changeBPM = function(newBpm) {
	Conductor.bpm = newBpm;
	Conductor.crochet = 60 / Conductor.bpm * 1000;
	Conductor.stepCrochet = Conductor.crochet / 4;
};
Conductor.prototype = {
	__class__: Conductor
};
var Device = $hxEnums["Device"] = { __ename__:"Device",__constructs__:null
	,Keys: {_hx_name:"Keys",_hx_index:0,__enum__:"Device",toString:$estr}
	,Gamepad: ($_=function(id) { return {_hx_index:1,id:id,__enum__:"Device",toString:$estr}; },$_._hx_name="Gamepad",$_.__params__ = ["id"],$_)
};
Device.__constructs__ = [Device.Keys,Device.Gamepad];
var Control = $hxEnums["Control"] = { __ename__:"Control",__constructs__:null
	,UP: {_hx_name:"UP",_hx_index:0,__enum__:"Control",toString:$estr}
	,LEFT: {_hx_name:"LEFT",_hx_index:1,__enum__:"Control",toString:$estr}
	,RIGHT: {_hx_name:"RIGHT",_hx_index:2,__enum__:"Control",toString:$estr}
	,DOWN: {_hx_name:"DOWN",_hx_index:3,__enum__:"Control",toString:$estr}
	,RESET: {_hx_name:"RESET",_hx_index:4,__enum__:"Control",toString:$estr}
	,ACCEPT: {_hx_name:"ACCEPT",_hx_index:5,__enum__:"Control",toString:$estr}
	,BACK: {_hx_name:"BACK",_hx_index:6,__enum__:"Control",toString:$estr}
	,PAUSE: {_hx_name:"PAUSE",_hx_index:7,__enum__:"Control",toString:$estr}
	,CHEAT: {_hx_name:"CHEAT",_hx_index:8,__enum__:"Control",toString:$estr}
};
Control.__constructs__ = [Control.UP,Control.LEFT,Control.RIGHT,Control.DOWN,Control.RESET,Control.ACCEPT,Control.BACK,Control.PAUSE,Control.CHEAT];
var KeyboardScheme = $hxEnums["KeyboardScheme"] = { __ename__:"KeyboardScheme",__constructs__:null
	,Solo: {_hx_name:"Solo",_hx_index:0,__enum__:"KeyboardScheme",toString:$estr}
	,Duo: ($_=function(first) { return {_hx_index:1,first:first,__enum__:"KeyboardScheme",toString:$estr}; },$_._hx_name="Duo",$_.__params__ = ["first"],$_)
	,None: {_hx_name:"None",_hx_index:2,__enum__:"KeyboardScheme",toString:$estr}
	,Custom: {_hx_name:"Custom",_hx_index:3,__enum__:"KeyboardScheme",toString:$estr}
};
KeyboardScheme.__constructs__ = [KeyboardScheme.Solo,KeyboardScheme.Duo,KeyboardScheme.None,KeyboardScheme.Custom];
var flixel_input_actions_FlxActionSet = function(Name,DigitalActions,AnalogActions) {
	this.active = true;
	this.name = "";
	this.name = Name;
	if(DigitalActions == null) {
		DigitalActions = [];
	}
	if(AnalogActions == null) {
		AnalogActions = [];
	}
	this.digitalActions = DigitalActions;
	this.analogActions = AnalogActions;
};
$hxClasses["flixel.input.actions.FlxActionSet"] = flixel_input_actions_FlxActionSet;
flixel_input_actions_FlxActionSet.__name__ = "flixel.input.actions.FlxActionSet";
flixel_input_actions_FlxActionSet.__interfaces__ = [flixel_util_IFlxDestroyable];
flixel_input_actions_FlxActionSet.fromJson = function(Data,CallbackDigital,CallbackAnalog) {
	var digitalActions = [];
	var analogActions = [];
	if(Data == null) {
		return null;
	}
	if(Data.digitalActions != null) {
		var arrD = Data.digitalActions;
		var _g = 0;
		while(_g < arrD.length) {
			var d = arrD[_g];
			++_g;
			var dName = d;
			var action = new flixel_input_actions_FlxActionDigital(dName,CallbackDigital);
			digitalActions.push(action);
		}
	}
	if(Data.analogActions != null) {
		var arrA = Data.analogActions;
		var _g = 0;
		while(_g < arrA.length) {
			var a = arrA[_g];
			++_g;
			var aName = a;
			var action = new flixel_input_actions_FlxActionAnalog(aName,CallbackAnalog);
			analogActions.push(action);
		}
	}
	if(Data.name != null) {
		var name = Data.name;
		var set = new flixel_input_actions_FlxActionSet(name,digitalActions,analogActions);
		return set;
	}
	return null;
};
flixel_input_actions_FlxActionSet.prototype = {
	name: null
	,digitalActions: null
	,analogActions: null
	,active: null
	,toJson: function() {
		var space = "\t";
		return JSON.stringify(this,function(key,value) {
			if(((value) instanceof flixel_input_actions_FlxAction)) {
				var fa = value;
				return { "type" : fa.type, "name" : fa.name, "steamHandle" : fa.steamHandle};
			}
			return value;
		},space);
	}
	,attachSteamController: function(Handle,Attach) {
		if(Attach == null) {
			Attach = true;
		}
		this.attachSteamControllerSub(Handle,Attach,flixel_input_actions_FlxInputType.DIGITAL,this.digitalActions,null);
		this.attachSteamControllerSub(Handle,Attach,flixel_input_actions_FlxInputType.ANALOG,null,this.analogActions);
	}
	,add: function(Action1) {
		if(Action1.type == flixel_input_actions_FlxInputType.DIGITAL) {
			var dAction = Action1;
			if(this.digitalActions.indexOf(dAction) != -1) {
				return false;
			}
			this.digitalActions.push(dAction);
			return true;
		} else if(Action1.type == flixel_input_actions_FlxInputType.ANALOG) {
			var aAction = Action1;
			if(this.analogActions.indexOf(aAction) != -1) {
				return false;
			}
			this.analogActions.push(aAction);
			return true;
		}
		return false;
	}
	,destroy: function() {
		this.digitalActions = flixel_util_FlxDestroyUtil.destroyArray(this.digitalActions);
		this.analogActions = flixel_util_FlxDestroyUtil.destroyArray(this.analogActions);
	}
	,remove: function(Action1,Destroy) {
		if(Destroy == null) {
			Destroy = true;
		}
		var result = false;
		if(Action1.type == flixel_input_actions_FlxInputType.DIGITAL) {
			result = HxOverrides.remove(this.digitalActions,Action1);
			if(result && Destroy) {
				Action1.destroy();
			}
		} else if(Action1.type == flixel_input_actions_FlxInputType.ANALOG) {
			result = HxOverrides.remove(this.analogActions,Action1);
			if(result && Destroy) {
				Action1.destroy();
			}
		}
		return result;
	}
	,update: function() {
		if(!this.active) {
			return;
		}
		var _g = 0;
		var _g1 = this.digitalActions;
		while(_g < _g1.length) {
			var digitalAction = _g1[_g];
			++_g;
			digitalAction.update();
		}
		var _g = 0;
		var _g1 = this.analogActions;
		while(_g < _g1.length) {
			var analogAction = _g1[_g];
			++_g;
			analogAction.update();
		}
	}
	,attachSteamControllerSub: function(Handle,Attach,InputType,DigitalActions,AnalogActions) {
		var length = InputType == flixel_input_actions_FlxInputType.DIGITAL ? DigitalActions.length : AnalogActions.length;
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			var action = InputType == flixel_input_actions_FlxInputType.DIGITAL ? DigitalActions[i] : AnalogActions[i];
			if(action.steamHandle != -1) {
				var inputExists = false;
				var theInput = null;
				if(action.inputs != null) {
					var _g2 = 0;
					var _g3 = action.inputs;
					while(_g2 < _g3.length) {
						var input = _g3[_g2];
						++_g2;
						if(input.device == flixel_input_actions_FlxInputDevice.STEAM_CONTROLLER && input.deviceID == Handle) {
							inputExists = true;
							theInput = input;
						}
					}
				}
				if(Attach) {
					if(!inputExists) {
						if(InputType == flixel_input_actions_FlxInputType.DIGITAL) {
							DigitalActions[i].add(new flixel_input_actions_FlxActionInputDigitalSteam(action.steamHandle,2,Handle));
						} else if(InputType == flixel_input_actions_FlxInputType.ANALOG) {
							AnalogActions[i].add(new flixel_input_actions_FlxActionInputAnalogSteam(action.steamHandle,1,3,Handle));
						}
					}
				} else if(inputExists) {
					action.remove(theInput);
				}
			}
		}
	}
	,__class__: flixel_input_actions_FlxActionSet
};
var Controls = function(name,scheme) {
	if(scheme == null) {
		scheme = KeyboardScheme.None;
	}
	this.keyboardScheme = KeyboardScheme.None;
	this.gamepadsAdded = [];
	this.byName = new haxe_ds_StringMap();
	this._cheat = new flixel_input_actions_FlxActionDigital("cheat");
	this._reset = new flixel_input_actions_FlxActionDigital("reset");
	this._pause = new flixel_input_actions_FlxActionDigital("pause");
	this._back = new flixel_input_actions_FlxActionDigital("back");
	this._accept = new flixel_input_actions_FlxActionDigital("accept");
	this._downR = new flixel_input_actions_FlxActionDigital("down-release");
	this._rightR = new flixel_input_actions_FlxActionDigital("right-release");
	this._leftR = new flixel_input_actions_FlxActionDigital("left-release");
	this._upR = new flixel_input_actions_FlxActionDigital("up-release");
	this._downP = new flixel_input_actions_FlxActionDigital("down-press");
	this._rightP = new flixel_input_actions_FlxActionDigital("right-press");
	this._leftP = new flixel_input_actions_FlxActionDigital("left-press");
	this._upP = new flixel_input_actions_FlxActionDigital("up-press");
	this._down = new flixel_input_actions_FlxActionDigital("down");
	this._right = new flixel_input_actions_FlxActionDigital("right");
	this._left = new flixel_input_actions_FlxActionDigital("left");
	this._up = new flixel_input_actions_FlxActionDigital("up");
	flixel_input_actions_FlxActionSet.call(this,name);
	this.add(this._up);
	this.add(this._left);
	this.add(this._right);
	this.add(this._down);
	this.add(this._upP);
	this.add(this._leftP);
	this.add(this._rightP);
	this.add(this._downP);
	this.add(this._upR);
	this.add(this._leftR);
	this.add(this._rightR);
	this.add(this._downR);
	this.add(this._accept);
	this.add(this._back);
	this.add(this._pause);
	this.add(this._reset);
	this.add(this._cheat);
	var _g = 0;
	var _g1 = this.digitalActions;
	while(_g < _g1.length) {
		var action = _g1[_g];
		++_g;
		this.byName.h[action.name] = action;
	}
	this.setKeyboardScheme(scheme,false);
};
$hxClasses["Controls"] = Controls;
Controls.__name__ = "Controls";
Controls.init = function() {
	var actions = new flixel_input_actions_FlxActionManager();
	flixel_FlxG.inputs.add_flixel_input_actions_FlxActionManager(actions);
};
Controls.addKeys = function(action,keys,state) {
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		action.addKey(key,state);
	}
};
Controls.removeKeys = function(action,keys) {
	var i = action.inputs.length;
	while(i-- > 0) {
		var input = action.inputs[i];
		if(input.device == flixel_input_actions_FlxInputDevice.KEYBOARD && keys.indexOf(input.inputID) != -1) {
			action.remove(input);
		}
	}
};
Controls.addButtons = function(action,buttons,state,id) {
	var _g = 0;
	while(_g < buttons.length) {
		var button = buttons[_g];
		++_g;
		action.addGamepad(button,state,id);
	}
};
Controls.removeButtons = function(action,gamepadID,buttons) {
	var i = action.inputs.length;
	while(i-- > 0) {
		var input = action.inputs[i];
		if(input.device == flixel_input_actions_FlxInputDevice.GAMEPAD && (gamepadID == -1 || input.deviceID == gamepadID) && buttons.indexOf(input.inputID) != -1) {
			action.remove(input);
		}
	}
};
Controls.isDevice = function(input,device) {
	switch(device._hx_index) {
	case 0:
		return input.device == flixel_input_actions_FlxInputDevice.KEYBOARD;
	case 1:
		var id = device.id;
		if(input.device == flixel_input_actions_FlxInputDevice.GAMEPAD) {
			if(id != -1) {
				return input.deviceID == id;
			} else {
				return true;
			}
		} else {
			return false;
		}
		break;
	}
};
Controls.isGamepad = function(input,deviceID) {
	if(input.device == flixel_input_actions_FlxInputDevice.GAMEPAD) {
		if(deviceID != -1) {
			return input.deviceID == deviceID;
		} else {
			return true;
		}
	} else {
		return false;
	}
};
Controls.__super__ = flixel_input_actions_FlxActionSet;
Controls.prototype = $extend(flixel_input_actions_FlxActionSet.prototype,{
	_up: null
	,_left: null
	,_right: null
	,_down: null
	,_upP: null
	,_leftP: null
	,_rightP: null
	,_downP: null
	,_upR: null
	,_leftR: null
	,_rightR: null
	,_downR: null
	,_accept: null
	,_back: null
	,_pause: null
	,_reset: null
	,_cheat: null
	,byName: null
	,gamepadsAdded: null
	,keyboardScheme: null
	,get_UP: function() {
		return this._up.check();
	}
	,get_LEFT: function() {
		return this._left.check();
	}
	,get_RIGHT: function() {
		return this._right.check();
	}
	,get_DOWN: function() {
		return this._down.check();
	}
	,get_UP_P: function() {
		return this._upP.check();
	}
	,get_LEFT_P: function() {
		return this._leftP.check();
	}
	,get_RIGHT_P: function() {
		return this._rightP.check();
	}
	,get_DOWN_P: function() {
		return this._downP.check();
	}
	,get_UP_R: function() {
		return this._upR.check();
	}
	,get_LEFT_R: function() {
		return this._leftR.check();
	}
	,get_RIGHT_R: function() {
		return this._rightR.check();
	}
	,get_DOWN_R: function() {
		return this._downR.check();
	}
	,get_ACCEPT: function() {
		return this._accept.check();
	}
	,get_BACK: function() {
		return this._back.check();
	}
	,get_PAUSE: function() {
		return this._pause.check();
	}
	,get_RESET: function() {
		return this._reset.check();
	}
	,get_CHEAT: function() {
		return this._cheat.check();
	}
	,update: function() {
		flixel_input_actions_FlxActionSet.prototype.update.call(this);
	}
	,checkByName: function(name) {
		return this.byName.h[name].check();
	}
	,getDialogueName: function(action) {
		var input = action.inputs[0];
		var _g = input.device;
		switch(_g._hx_index) {
		case 3:
			var tmp = input.inputID;
			return "[" + (tmp == null ? "null" : flixel_input_keyboard_FlxKey.toStringMap.h[tmp]) + "]";
		case 4:
			var tmp = input.inputID;
			return "(" + (tmp == null ? "null" : flixel_input_gamepad_FlxGamepadInputID.toStringMap.h[tmp]) + ")";
		default:
			var device = _g;
			throw haxe_Exception.thrown("unhandled device: " + Std.string(device));
		}
	}
	,getDialogueNameFromToken: function(token) {
		return this.getDialogueName(this.getActionFromControl(Type.createEnum(Control,token.toUpperCase(),null)));
	}
	,getActionFromControl: function(control) {
		switch(control._hx_index) {
		case 0:
			return this._up;
		case 1:
			return this._left;
		case 2:
			return this._right;
		case 3:
			return this._down;
		case 4:
			return this._reset;
		case 5:
			return this._accept;
		case 6:
			return this._back;
		case 7:
			return this._pause;
		case 8:
			return this._cheat;
		}
	}
	,forEachBound: function(control,func) {
		switch(control._hx_index) {
		case 0:
			func(this._up,1);
			func(this._upP,2);
			func(this._upR,-1);
			break;
		case 1:
			func(this._left,1);
			func(this._leftP,2);
			func(this._leftR,-1);
			break;
		case 2:
			func(this._right,1);
			func(this._rightP,2);
			func(this._rightR,-1);
			break;
		case 3:
			func(this._down,1);
			func(this._downP,2);
			func(this._downR,-1);
			break;
		case 4:
			func(this._reset,2);
			break;
		case 5:
			func(this._accept,2);
			break;
		case 6:
			func(this._back,2);
			break;
		case 7:
			func(this._pause,2);
			break;
		case 8:
			func(this._cheat,2);
			break;
		}
	}
	,replaceBinding: function(control,device,toAdd,toRemove) {
		if(toAdd == toRemove) {
			return;
		}
		switch(device._hx_index) {
		case 0:
			if(toRemove != null) {
				this.unbindKeys(control,[toRemove]);
			}
			if(toAdd != null) {
				this.bindKeys(control,[toAdd]);
			}
			break;
		case 1:
			var id = device.id;
			if(toRemove != null) {
				this.unbindButtons(control,id,[toRemove]);
			}
			if(toAdd != null) {
				this.bindButtons(control,id,[toAdd]);
			}
			break;
		}
	}
	,copyFrom: function(controls,device) {
		var h = controls.byName.h;
		var _g_h = h;
		var _g_keys = Object.keys(h);
		var _g_length = _g_keys.length;
		var _g_current = 0;
		while(_g_current < _g_length) {
			var key = _g_keys[_g_current++];
			var _g1_key = key;
			var _g1_value = _g_h[key];
			var name = _g1_key;
			var action = _g1_value;
			var _g = 0;
			var _g1 = action.inputs;
			while(_g < _g1.length) {
				var input = _g1[_g];
				++_g;
				if(device == null || Controls.isDevice(input,device)) {
					this.byName.h[name].add(input);
				}
			}
		}
		if(device == null) {
			var _g = 0;
			var _g1 = controls.gamepadsAdded;
			while(_g < _g1.length) {
				var gamepad = _g1[_g];
				++_g;
				if(this.gamepadsAdded.indexOf(gamepad) == -1) {
					this.gamepadsAdded.push(gamepad);
				}
			}
			this.mergeKeyboardScheme(controls.keyboardScheme);
		} else {
			switch(device._hx_index) {
			case 0:
				this.mergeKeyboardScheme(controls.keyboardScheme);
				break;
			case 1:
				var id = device.id;
				this.gamepadsAdded.push(id);
				break;
			}
		}
	}
	,copyTo: function(controls,device) {
		controls.copyFrom(this,device);
	}
	,mergeKeyboardScheme: function(scheme) {
		if(scheme != KeyboardScheme.None) {
			if(this.keyboardScheme._hx_index == 2) {
				this.keyboardScheme = scheme;
			} else {
				this.keyboardScheme = KeyboardScheme.Custom;
			}
		}
	}
	,bindKeys: function(control,keys) {
		switch(control._hx_index) {
		case 0:
			var action = this._up;
			var state = 1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._upP;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._upR;
			var state = -1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 1:
			var action = this._left;
			var state = 1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._leftP;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._leftR;
			var state = -1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 2:
			var action = this._right;
			var state = 1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._rightP;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._rightR;
			var state = -1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 3:
			var action = this._down;
			var state = 1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._downP;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			var action = this._downR;
			var state = -1;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 4:
			var action = this._reset;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 5:
			var action = this._accept;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 6:
			var action = this._back;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 7:
			var action = this._pause;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		case 8:
			var action = this._cheat;
			var state = 2;
			var _g = 0;
			while(_g < keys.length) {
				var key = keys[_g];
				++_g;
				action.addKey(key,state);
			}
			break;
		}
	}
	,unbindKeys: function(control,keys) {
		switch(control._hx_index) {
		case 0:
			Controls.removeKeys(this._up,keys);
			Controls.removeKeys(this._upP,keys);
			Controls.removeKeys(this._upR,keys);
			break;
		case 1:
			Controls.removeKeys(this._left,keys);
			Controls.removeKeys(this._leftP,keys);
			Controls.removeKeys(this._leftR,keys);
			break;
		case 2:
			Controls.removeKeys(this._right,keys);
			Controls.removeKeys(this._rightP,keys);
			Controls.removeKeys(this._rightR,keys);
			break;
		case 3:
			Controls.removeKeys(this._down,keys);
			Controls.removeKeys(this._downP,keys);
			Controls.removeKeys(this._downR,keys);
			break;
		case 4:
			Controls.removeKeys(this._reset,keys);
			break;
		case 5:
			Controls.removeKeys(this._accept,keys);
			break;
		case 6:
			Controls.removeKeys(this._back,keys);
			break;
		case 7:
			Controls.removeKeys(this._pause,keys);
			break;
		case 8:
			Controls.removeKeys(this._cheat,keys);
			break;
		}
	}
	,setKeyboardScheme: function(scheme,reset) {
		if(reset == null) {
			reset = true;
		}
		if(reset) {
			this.removeKeyboard();
		}
		this.keyboardScheme = scheme;
		switch(scheme._hx_index) {
		case 0:
			var keys = [74,38];
			switch(Control.UP._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [70,40];
			switch(Control.DOWN._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [68,37];
			switch(Control.LEFT._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [75,39];
			switch(Control.RIGHT._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [90,32,13];
			switch(Control.ACCEPT._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [8,27];
			switch(Control.BACK._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [80,13,27];
			switch(Control.PAUSE._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			var keys = [82];
			switch(Control.RESET._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._upR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 1:
				var action = this._left;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._leftR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 2:
				var action = this._right;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._rightR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 3:
				var action = this._down;
				var state = 1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downP;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				var action = this._downR;
				var state = -1;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 4:
				var action = this._reset;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 5:
				var action = this._accept;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 6:
				var action = this._back;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 7:
				var action = this._pause;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			case 8:
				var action = this._cheat;
				var state = 2;
				var _g = 0;
				while(_g < keys.length) {
					var key = keys[_g];
					++_g;
					action.addKey(key,state);
				}
				break;
			}
			break;
		case 1:
			if(scheme.first) {
				var keys = [87,38];
				switch(Control.UP._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [83,40];
				switch(Control.DOWN._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [65,37];
				switch(Control.LEFT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [68,39];
				switch(Control.RIGHT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [13,90];
				switch(Control.ACCEPT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [27,8];
				switch(Control.BACK._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [49];
				switch(Control.PAUSE._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [82];
				switch(Control.RESET._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
			} else {
				var keys = [38];
				switch(Control.UP._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [40];
				switch(Control.DOWN._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [37];
				switch(Control.LEFT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [39];
				switch(Control.RIGHT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [79];
				switch(Control.ACCEPT._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [80];
				switch(Control.BACK._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [13];
				switch(Control.PAUSE._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
				var keys = [8];
				switch(Control.RESET._hx_index) {
				case 0:
					var action = this._up;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._upR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 1:
					var action = this._left;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._leftR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 2:
					var action = this._right;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._rightR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 3:
					var action = this._down;
					var state = 1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downP;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					var action = this._downR;
					var state = -1;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 4:
					var action = this._reset;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 5:
					var action = this._accept;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 6:
					var action = this._back;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 7:
					var action = this._pause;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				case 8:
					var action = this._cheat;
					var state = 2;
					var _g = 0;
					while(_g < keys.length) {
						var key = keys[_g];
						++_g;
						action.addKey(key,state);
					}
					break;
				}
			}
			break;
		case 2:
			break;
		case 3:
			break;
		}
	}
	,removeKeyboard: function() {
		var _g = 0;
		var _g1 = this.digitalActions;
		while(_g < _g1.length) {
			var action = _g1[_g];
			++_g;
			var i = action.inputs.length;
			while(i-- > 0) {
				var input = action.inputs[i];
				if(input.device == flixel_input_actions_FlxInputDevice.KEYBOARD) {
					action.remove(input);
				}
			}
		}
	}
	,addGamepad: function(id,buttonMap) {
		this.gamepadsAdded.push(id);
		var map = buttonMap;
		var _g_map = map;
		var _g_keys = map.keys();
		while(_g_keys.hasNext()) {
			var key = _g_keys.next();
			var _g1_value = _g_map.get(key);
			var _g1_key = key;
			var control = _g1_key;
			var buttons = _g1_value;
			var id1 = id;
			var buttons1 = buttons;
			switch(control._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < buttons1.length) {
					var button = buttons1[_g];
					++_g;
					action.addGamepad(button,state,id1);
				}
				var action1 = this._upP;
				var state1 = 2;
				var _g1 = 0;
				while(_g1 < buttons1.length) {
					var button1 = buttons1[_g1];
					++_g1;
					action1.addGamepad(button1,state1,id1);
				}
				var action2 = this._upR;
				var state2 = -1;
				var _g2 = 0;
				while(_g2 < buttons1.length) {
					var button2 = buttons1[_g2];
					++_g2;
					action2.addGamepad(button2,state2,id1);
				}
				break;
			case 1:
				var action3 = this._left;
				var state3 = 1;
				var _g3 = 0;
				while(_g3 < buttons1.length) {
					var button3 = buttons1[_g3];
					++_g3;
					action3.addGamepad(button3,state3,id1);
				}
				var action4 = this._leftP;
				var state4 = 2;
				var _g4 = 0;
				while(_g4 < buttons1.length) {
					var button4 = buttons1[_g4];
					++_g4;
					action4.addGamepad(button4,state4,id1);
				}
				var action5 = this._leftR;
				var state5 = -1;
				var _g5 = 0;
				while(_g5 < buttons1.length) {
					var button5 = buttons1[_g5];
					++_g5;
					action5.addGamepad(button5,state5,id1);
				}
				break;
			case 2:
				var action6 = this._right;
				var state6 = 1;
				var _g6 = 0;
				while(_g6 < buttons1.length) {
					var button6 = buttons1[_g6];
					++_g6;
					action6.addGamepad(button6,state6,id1);
				}
				var action7 = this._rightP;
				var state7 = 2;
				var _g7 = 0;
				while(_g7 < buttons1.length) {
					var button7 = buttons1[_g7];
					++_g7;
					action7.addGamepad(button7,state7,id1);
				}
				var action8 = this._rightR;
				var state8 = -1;
				var _g8 = 0;
				while(_g8 < buttons1.length) {
					var button8 = buttons1[_g8];
					++_g8;
					action8.addGamepad(button8,state8,id1);
				}
				break;
			case 3:
				var action9 = this._down;
				var state9 = 1;
				var _g9 = 0;
				while(_g9 < buttons1.length) {
					var button9 = buttons1[_g9];
					++_g9;
					action9.addGamepad(button9,state9,id1);
				}
				var action10 = this._downP;
				var state10 = 2;
				var _g10 = 0;
				while(_g10 < buttons1.length) {
					var button10 = buttons1[_g10];
					++_g10;
					action10.addGamepad(button10,state10,id1);
				}
				var action11 = this._downR;
				var state11 = -1;
				var _g11 = 0;
				while(_g11 < buttons1.length) {
					var button11 = buttons1[_g11];
					++_g11;
					action11.addGamepad(button11,state11,id1);
				}
				break;
			case 4:
				var action12 = this._reset;
				var state12 = 2;
				var _g12 = 0;
				while(_g12 < buttons1.length) {
					var button12 = buttons1[_g12];
					++_g12;
					action12.addGamepad(button12,state12,id1);
				}
				break;
			case 5:
				var action13 = this._accept;
				var state13 = 2;
				var _g13 = 0;
				while(_g13 < buttons1.length) {
					var button13 = buttons1[_g13];
					++_g13;
					action13.addGamepad(button13,state13,id1);
				}
				break;
			case 6:
				var action14 = this._back;
				var state14 = 2;
				var _g14 = 0;
				while(_g14 < buttons1.length) {
					var button14 = buttons1[_g14];
					++_g14;
					action14.addGamepad(button14,state14,id1);
				}
				break;
			case 7:
				var action15 = this._pause;
				var state15 = 2;
				var _g15 = 0;
				while(_g15 < buttons1.length) {
					var button15 = buttons1[_g15];
					++_g15;
					action15.addGamepad(button15,state15,id1);
				}
				break;
			case 8:
				var action16 = this._cheat;
				var state16 = 2;
				var _g16 = 0;
				while(_g16 < buttons1.length) {
					var button16 = buttons1[_g16];
					++_g16;
					action16.addGamepad(button16,state16,id1);
				}
				break;
			}
		}
	}
	,addGamepadLiteral: function(id,buttonMap) {
		this.gamepadsAdded.push(id);
		var map = buttonMap;
		var _g_map = map;
		var _g_keys = map.keys();
		while(_g_keys.hasNext()) {
			var key = _g_keys.next();
			var _g1_value = _g_map.get(key);
			var _g1_key = key;
			var control = _g1_key;
			var buttons = _g1_value;
			var id1 = id;
			var buttons1 = buttons;
			switch(control._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < buttons1.length) {
					var button = buttons1[_g];
					++_g;
					action.addGamepad(button,state,id1);
				}
				var action1 = this._upP;
				var state1 = 2;
				var _g1 = 0;
				while(_g1 < buttons1.length) {
					var button1 = buttons1[_g1];
					++_g1;
					action1.addGamepad(button1,state1,id1);
				}
				var action2 = this._upR;
				var state2 = -1;
				var _g2 = 0;
				while(_g2 < buttons1.length) {
					var button2 = buttons1[_g2];
					++_g2;
					action2.addGamepad(button2,state2,id1);
				}
				break;
			case 1:
				var action3 = this._left;
				var state3 = 1;
				var _g3 = 0;
				while(_g3 < buttons1.length) {
					var button3 = buttons1[_g3];
					++_g3;
					action3.addGamepad(button3,state3,id1);
				}
				var action4 = this._leftP;
				var state4 = 2;
				var _g4 = 0;
				while(_g4 < buttons1.length) {
					var button4 = buttons1[_g4];
					++_g4;
					action4.addGamepad(button4,state4,id1);
				}
				var action5 = this._leftR;
				var state5 = -1;
				var _g5 = 0;
				while(_g5 < buttons1.length) {
					var button5 = buttons1[_g5];
					++_g5;
					action5.addGamepad(button5,state5,id1);
				}
				break;
			case 2:
				var action6 = this._right;
				var state6 = 1;
				var _g6 = 0;
				while(_g6 < buttons1.length) {
					var button6 = buttons1[_g6];
					++_g6;
					action6.addGamepad(button6,state6,id1);
				}
				var action7 = this._rightP;
				var state7 = 2;
				var _g7 = 0;
				while(_g7 < buttons1.length) {
					var button7 = buttons1[_g7];
					++_g7;
					action7.addGamepad(button7,state7,id1);
				}
				var action8 = this._rightR;
				var state8 = -1;
				var _g8 = 0;
				while(_g8 < buttons1.length) {
					var button8 = buttons1[_g8];
					++_g8;
					action8.addGamepad(button8,state8,id1);
				}
				break;
			case 3:
				var action9 = this._down;
				var state9 = 1;
				var _g9 = 0;
				while(_g9 < buttons1.length) {
					var button9 = buttons1[_g9];
					++_g9;
					action9.addGamepad(button9,state9,id1);
				}
				var action10 = this._downP;
				var state10 = 2;
				var _g10 = 0;
				while(_g10 < buttons1.length) {
					var button10 = buttons1[_g10];
					++_g10;
					action10.addGamepad(button10,state10,id1);
				}
				var action11 = this._downR;
				var state11 = -1;
				var _g11 = 0;
				while(_g11 < buttons1.length) {
					var button11 = buttons1[_g11];
					++_g11;
					action11.addGamepad(button11,state11,id1);
				}
				break;
			case 4:
				var action12 = this._reset;
				var state12 = 2;
				var _g12 = 0;
				while(_g12 < buttons1.length) {
					var button12 = buttons1[_g12];
					++_g12;
					action12.addGamepad(button12,state12,id1);
				}
				break;
			case 5:
				var action13 = this._accept;
				var state13 = 2;
				var _g13 = 0;
				while(_g13 < buttons1.length) {
					var button13 = buttons1[_g13];
					++_g13;
					action13.addGamepad(button13,state13,id1);
				}
				break;
			case 6:
				var action14 = this._back;
				var state14 = 2;
				var _g14 = 0;
				while(_g14 < buttons1.length) {
					var button14 = buttons1[_g14];
					++_g14;
					action14.addGamepad(button14,state14,id1);
				}
				break;
			case 7:
				var action15 = this._pause;
				var state15 = 2;
				var _g15 = 0;
				while(_g15 < buttons1.length) {
					var button15 = buttons1[_g15];
					++_g15;
					action15.addGamepad(button15,state15,id1);
				}
				break;
			case 8:
				var action16 = this._cheat;
				var state16 = 2;
				var _g16 = 0;
				while(_g16 < buttons1.length) {
					var button16 = buttons1[_g16];
					++_g16;
					action16.addGamepad(button16,state16,id1);
				}
				break;
			}
		}
	}
	,removeGamepad: function(deviceID) {
		if(deviceID == null) {
			deviceID = -1;
		}
		var _g = 0;
		var _g1 = this.digitalActions;
		while(_g < _g1.length) {
			var action = _g1[_g];
			++_g;
			var i = action.inputs.length;
			while(i-- > 0) {
				var input = action.inputs[i];
				if(input.device == flixel_input_actions_FlxInputDevice.GAMEPAD && (deviceID == -1 || input.deviceID == deviceID)) {
					action.remove(input);
				}
			}
		}
		HxOverrides.remove(this.gamepadsAdded,deviceID);
	}
	,addDefaultGamepad: function(id) {
		var _g = new haxe_ds_EnumValueMap();
		_g.set(Control.ACCEPT,[0]);
		_g.set(Control.BACK,[1]);
		_g.set(Control.UP,[11,34]);
		_g.set(Control.DOWN,[12,36]);
		_g.set(Control.LEFT,[13,37]);
		_g.set(Control.RIGHT,[14,35]);
		_g.set(Control.PAUSE,[7]);
		_g.set(Control.RESET,[3]);
		this.gamepadsAdded.push(id);
		var map = _g;
		var _g_map = map;
		var _g_keys = map.keys();
		while(_g_keys.hasNext()) {
			var key = _g_keys.next();
			var _g1_value = _g_map.get(key);
			var _g1_key = key;
			var control = _g1_key;
			var buttons = _g1_value;
			var id1 = id;
			var buttons1 = buttons;
			switch(control._hx_index) {
			case 0:
				var action = this._up;
				var state = 1;
				var _g = 0;
				while(_g < buttons1.length) {
					var button = buttons1[_g];
					++_g;
					action.addGamepad(button,state,id1);
				}
				var action1 = this._upP;
				var state1 = 2;
				var _g1 = 0;
				while(_g1 < buttons1.length) {
					var button1 = buttons1[_g1];
					++_g1;
					action1.addGamepad(button1,state1,id1);
				}
				var action2 = this._upR;
				var state2 = -1;
				var _g2 = 0;
				while(_g2 < buttons1.length) {
					var button2 = buttons1[_g2];
					++_g2;
					action2.addGamepad(button2,state2,id1);
				}
				break;
			case 1:
				var action3 = this._left;
				var state3 = 1;
				var _g3 = 0;
				while(_g3 < buttons1.length) {
					var button3 = buttons1[_g3];
					++_g3;
					action3.addGamepad(button3,state3,id1);
				}
				var action4 = this._leftP;
				var state4 = 2;
				var _g4 = 0;
				while(_g4 < buttons1.length) {
					var button4 = buttons1[_g4];
					++_g4;
					action4.addGamepad(button4,state4,id1);
				}
				var action5 = this._leftR;
				var state5 = -1;
				var _g5 = 0;
				while(_g5 < buttons1.length) {
					var button5 = buttons1[_g5];
					++_g5;
					action5.addGamepad(button5,state5,id1);
				}
				break;
			case 2:
				var action6 = this._right;
				var state6 = 1;
				var _g6 = 0;
				while(_g6 < buttons1.length) {
					var button6 = buttons1[_g6];
					++_g6;
					action6.addGamepad(button6,state6,id1);
				}
				var action7 = this._rightP;
				var state7 = 2;
				var _g7 = 0;
				while(_g7 < buttons1.length) {
					var button7 = buttons1[_g7];
					++_g7;
					action7.addGamepad(button7,state7,id1);
				}
				var action8 = this._rightR;
				var state8 = -1;
				var _g8 = 0;
				while(_g8 < buttons1.length) {
					var button8 = buttons1[_g8];
					++_g8;
					action8.addGamepad(button8,state8,id1);
				}
				break;
			case 3:
				var action9 = this._down;
				var state9 = 1;
				var _g9 = 0;
				while(_g9 < buttons1.length) {
					var button9 = buttons1[_g9];
					++_g9;
					action9.addGamepad(button9,state9,id1);
				}
				var action10 = this._downP;
				var state10 = 2;
				var _g10 = 0;
				while(_g10 < buttons1.length) {
					var button10 = buttons1[_g10];
					++_g10;
					action10.addGamepad(button10,state10,id1);
				}
				var action11 = this._downR;
				var state11 = -1;
				var _g11 = 0;
				while(_g11 < buttons1.length) {
					var button11 = buttons1[_g11];
					++_g11;
					action11.addGamepad(button11,state11,id1);
				}
				break;
			case 4:
				var action12 = this._reset;
				var state12 = 2;
				var _g12 = 0;
				while(_g12 < buttons1.length) {
					var button12 = buttons1[_g12];
					++_g12;
					action12.addGamepad(button12,state12,id1);
				}
				break;
			case 5:
				var action13 = this._accept;
				var state13 = 2;
				var _g13 = 0;
				while(_g13 < buttons1.length) {
					var button13 = buttons1[_g13];
					++_g13;
					action13.addGamepad(button13,state13,id1);
				}
				break;
			case 6:
				var action14 = this._back;
				var state14 = 2;
				var _g14 = 0;
				while(_g14 < buttons1.length) {
					var button14 = buttons1[_g14];
					++_g14;
					action14.addGamepad(button14,state14,id1);
				}
				break;
			case 7:
				var action15 = this._pause;
				var state15 = 2;
				var _g15 = 0;
				while(_g15 < buttons1.length) {
					var button15 = buttons1[_g15];
					++_g15;
					action15.addGamepad(button15,state15,id1);
				}
				break;
			case 8:
				var action16 = this._cheat;
				var state16 = 2;
				var _g16 = 0;
				while(_g16 < buttons1.length) {
					var button16 = buttons1[_g16];
					++_g16;
					action16.addGamepad(button16,state16,id1);
				}
				break;
			}
		}
	}
	,bindButtons: function(control,id,buttons) {
		switch(control._hx_index) {
		case 0:
			var action = this._up;
			var state = 1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._upP;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._upR;
			var state = -1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 1:
			var action = this._left;
			var state = 1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._leftP;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._leftR;
			var state = -1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 2:
			var action = this._right;
			var state = 1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._rightP;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._rightR;
			var state = -1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 3:
			var action = this._down;
			var state = 1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._downP;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			var action = this._downR;
			var state = -1;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 4:
			var action = this._reset;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 5:
			var action = this._accept;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 6:
			var action = this._back;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 7:
			var action = this._pause;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		case 8:
			var action = this._cheat;
			var state = 2;
			var _g = 0;
			while(_g < buttons.length) {
				var button = buttons[_g];
				++_g;
				action.addGamepad(button,state,id);
			}
			break;
		}
	}
	,unbindButtons: function(control,gamepadID,buttons) {
		switch(control._hx_index) {
		case 0:
			Controls.removeButtons(this._up,gamepadID,buttons);
			Controls.removeButtons(this._upP,gamepadID,buttons);
			Controls.removeButtons(this._upR,gamepadID,buttons);
			break;
		case 1:
			Controls.removeButtons(this._left,gamepadID,buttons);
			Controls.removeButtons(this._leftP,gamepadID,buttons);
			Controls.removeButtons(this._leftR,gamepadID,buttons);
			break;
		case 2:
			Controls.removeButtons(this._right,gamepadID,buttons);
			Controls.removeButtons(this._rightP,gamepadID,buttons);
			Controls.removeButtons(this._rightR,gamepadID,buttons);
			break;
		case 3:
			Controls.removeButtons(this._down,gamepadID,buttons);
			Controls.removeButtons(this._downP,gamepadID,buttons);
			Controls.removeButtons(this._downR,gamepadID,buttons);
			break;
		case 4:
			Controls.removeButtons(this._reset,gamepadID,buttons);
			break;
		case 5:
			Controls.removeButtons(this._accept,gamepadID,buttons);
			break;
		case 6:
			Controls.removeButtons(this._back,gamepadID,buttons);
			break;
		case 7:
			Controls.removeButtons(this._pause,gamepadID,buttons);
			break;
		case 8:
			Controls.removeButtons(this._cheat,gamepadID,buttons);
			break;
		}
	}
	,getInputsFor: function(control,device,list) {
		if(list == null) {
			list = [];
		}
		switch(device._hx_index) {
		case 0:
			var _g = 0;
			var _g1 = this.getActionFromControl(control).inputs;
			while(_g < _g1.length) {
				var input = _g1[_g];
				++_g;
				if(input.device == flixel_input_actions_FlxInputDevice.KEYBOARD) {
					list.push(input.inputID);
				}
			}
			break;
		case 1:
			var id = device.id;
			var _g = 0;
			var _g1 = this.getActionFromControl(control).inputs;
			while(_g < _g1.length) {
				var input = _g1[_g];
				++_g;
				if(input.deviceID == id) {
					list.push(input.inputID);
				}
			}
			break;
		}
		return list;
	}
	,removeDevice: function(device) {
		switch(device._hx_index) {
		case 0:
			this.setKeyboardScheme(KeyboardScheme.None);
			break;
		case 1:
			var id = device.id;
			this.removeGamepad(id);
			break;
		}
	}
	,__class__: Controls
	,__properties__: {get_CHEAT:"get_CHEAT",get_RESET:"get_RESET",get_PAUSE:"get_PAUSE",get_BACK:"get_BACK",get_ACCEPT:"get_ACCEPT",get_DOWN_R:"get_DOWN_R",get_RIGHT_R:"get_RIGHT_R",get_LEFT_R:"get_LEFT_R",get_UP_R:"get_UP_R",get_DOWN_P:"get_DOWN_P",get_RIGHT_P:"get_RIGHT_P",get_LEFT_P:"get_LEFT_P",get_UP_P:"get_UP_P",get_DOWN:"get_DOWN",get_RIGHT:"get_RIGHT",get_LEFT:"get_LEFT",get_UP:"get_UP"}
});
var flixel_FlxSubState = function(BGColor) {
	if(BGColor == null) {
		BGColor = 0;
	}
	this._created = false;
	flixel_FlxState.call(this);
	this.closeCallback = null;
	this.openCallback = null;
	if(flixel_FlxG.renderTile) {
		this._bgSprite = new flixel_system_FlxBGSprite();
	}
	this.set_bgColor(BGColor);
};
$hxClasses["flixel.FlxSubState"] = flixel_FlxSubState;
flixel_FlxSubState.__name__ = "flixel.FlxSubState";
flixel_FlxSubState.__super__ = flixel_FlxState;
flixel_FlxSubState.prototype = $extend(flixel_FlxState.prototype,{
	openCallback: null
	,closeCallback: null
	,_bgSprite: null
	,_parentState: null
	,_bgColor: null
	,_created: null
	,draw: function() {
		if(flixel_FlxG.renderBlit) {
			var _g = 0;
			var _g1 = this.get_cameras();
			while(_g < _g1.length) {
				var camera = _g1[_g];
				++_g;
				camera.fill(this._bgColor);
			}
		} else {
			this._bgSprite.draw();
		}
		flixel_FlxState.prototype.draw.call(this);
	}
	,destroy: function() {
		flixel_FlxState.prototype.destroy.call(this);
		this.closeCallback = null;
		this.openCallback = null;
		this._parentState = null;
		this._bgSprite = null;
	}
	,close: function() {
		if(this._parentState != null && this._parentState.subState == this) {
			this._parentState.closeSubState();
		}
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,set_bgColor: function(Value) {
		if(flixel_FlxG.renderTile && this._bgSprite != null) {
			this._bgSprite.get_pixels().setPixel32(0,0,Value);
		}
		return this._bgColor = Value;
	}
	,__class__: flixel_FlxSubState
});
var MusicBeatSubstate = function() {
	this.curBeat = 0;
	this.curStep = 0;
	this.lastStep = 0;
	this.lastBeat = 0;
	flixel_FlxSubState.call(this);
};
$hxClasses["MusicBeatSubstate"] = MusicBeatSubstate;
MusicBeatSubstate.__name__ = "MusicBeatSubstate";
MusicBeatSubstate.__super__ = flixel_FlxSubState;
MusicBeatSubstate.prototype = $extend(flixel_FlxSubState.prototype,{
	lastBeat: null
	,lastStep: null
	,curStep: null
	,curBeat: null
	,get_controls: function() {
		return PlayerSettings.player1.controls;
	}
	,update: function(elapsed) {
		var oldStep = this.curStep;
		this.updateCurStep();
		this.curBeat = Math.floor(this.curStep / 4);
		if(oldStep != this.curStep && this.curStep > 0) {
			this.stepHit();
		}
		flixel_FlxSubState.prototype.update.call(this,elapsed);
	}
	,updateCurStep: function() {
		var lastChange = { stepTime : 0, songTime : 0, bpm : 0};
		var _g = 0;
		var _g1 = Conductor.bpmChangeMap.length;
		while(_g < _g1) {
			var i = _g++;
			if(Conductor.songPosition > Conductor.bpmChangeMap[i].songTime) {
				lastChange = Conductor.bpmChangeMap[i];
			}
		}
		this.curStep = lastChange.stepTime + Math.floor((Conductor.songPosition - lastChange.songTime) / Conductor.stepCrochet);
	}
	,stepHit: function() {
		if(this.curStep % 4 == 0) {
			this.beatHit();
		}
	}
	,beatHit: function() {
	}
	,__class__: MusicBeatSubstate
	,__properties__: $extend(flixel_FlxSubState.prototype.__properties__,{get_controls:"get_controls"})
});
var ControlsState = function() {
	this.BLUE = -10592674;
	this.curSelected = 0;
	this.textMenuItems = ["DFJK","WASD"];
	MusicBeatSubstate.call(this);
	var bg = new flixel_FlxSprite(-80).loadGraphic(Paths.getPath("images/" + "menuDesat" + ".png","IMAGE",null));
	bg.scrollFactor.set_x(0);
	bg.scrollFactor.set_y(0.18);
	bg.setGraphicSize(bg.get_width() * 1.1 | 0);
	bg.updateHitbox();
	bg.screenCenter();
	bg.set_antialiasing(true);
	this.add(bg);
	this.grpOptionsTexts = new flixel_group_FlxTypedGroup();
	this.add(this.grpOptionsTexts);
	var _g = 0;
	var _g1 = this.textMenuItems.length;
	while(_g < _g1) {
		var i = _g++;
		var optionText = new flixel_text_FlxText(550,300 + i * 50,0,this.textMenuItems[i],32);
		optionText.ID = i;
		optionText.setFormat("assets/fonts/" + "vcr.ttf",32);
		this.grpOptionsTexts.add(optionText);
	}
};
$hxClasses["ControlsState"] = ControlsState;
ControlsState.__name__ = "ControlsState";
ControlsState.__super__ = MusicBeatSubstate;
ControlsState.prototype = $extend(MusicBeatSubstate.prototype,{
	textMenuItems: null
	,selector: null
	,curSelected: null
	,bg: null
	,bg2: null
	,BLUE: null
	,grpOptionsTexts: null
	,update: function(elapsed) {
		var _gthis = this;
		MusicBeatSubstate.prototype.update.call(this,elapsed);
		if(PlayerSettings.player1.controls._back.check()) {
			var nextState = new OptionsMenu();
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
		if(PlayerSettings.player1.controls._upP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected -= 1;
		}
		if(PlayerSettings.player1.controls._downP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected += 1;
		}
		if(this.curSelected < 0) {
			this.curSelected = this.textMenuItems.length - 1;
		}
		if(this.curSelected >= this.textMenuItems.length) {
			this.curSelected = 0;
		}
		this.grpOptionsTexts.forEach(function(txt) {
			txt.set_color(-16777216);
			if(txt.ID == _gthis.curSelected) {
				txt.set_color(-16776961);
			}
		});
		if(PlayerSettings.player1.controls._accept.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
		}
		switch(this.textMenuItems[this.curSelected]) {
		case "DFJK":
			PlayerSettings.player1.controls.setKeyboardScheme(KeyboardScheme.Solo,true);
			break;
		case "WASD":
			PlayerSettings.player1.controls.setKeyboardScheme(KeyboardScheme.Duo(true),true);
			break;
		}
	}
	,__class__: ControlsState
});
var CoolUtil = function() { };
$hxClasses["CoolUtil"] = CoolUtil;
CoolUtil.__name__ = "CoolUtil";
CoolUtil.difficultyString = function() {
	return CoolUtil.difficultyArray[PlayState.storyDifficulty];
};
CoolUtil.coolTextFile = function(path) {
	var daList = StringTools.trim(lime_utils_Assets.getText(path)).split("\n");
	var _g = 0;
	var _g1 = daList.length;
	while(_g < _g1) {
		var i = _g++;
		daList[i] = StringTools.trim(daList[i]);
	}
	return daList;
};
CoolUtil.numberArray = function(max,min) {
	if(min == null) {
		min = 0;
	}
	var dumbArray = [];
	var _g = min;
	var _g1 = max;
	while(_g < _g1) {
		var i = _g++;
		dumbArray.push(i);
	}
	return dumbArray;
};
var DialogueBox = function(talkingRight,dialogueList) {
	if(talkingRight == null) {
		talkingRight = true;
	}
	this.isEnding = false;
	this.dialogueStarted = false;
	this.dialogueOpened = false;
	this.dialogueList = [];
	this.curCharacter = "";
	var _gthis = this;
	flixel_group_FlxTypedSpriteGroup.call(this);
	switch(PlayState.SONG.song.toLowerCase()) {
	case "fading":
		flixel_FlxG.sound.playMusic(Paths.getPath("music/" + "city_ambience" + "." + "mp3","MUSIC","shared"),0);
		var _this = flixel_FlxG.sound.music;
		var Duration = 1;
		var From = 0;
		var To = 0.8;
		if(To == null) {
			To = 1;
		}
		if(From == null) {
			From = 0;
		}
		if(Duration == null) {
			Duration = 1;
		}
		if(_this._channel == null) {
			_this.play();
		}
		if(_this.fadeTween != null) {
			_this.fadeTween.cancel();
		}
		_this.fadeTween = flixel_tweens_FlxTween.num(From,To,Duration,{ onComplete : null},$bind(_this,_this.volumeTween));
		break;
	case "senpai":
		flixel_FlxG.sound.playMusic(Paths.getPath("music/" + "Lunchbox" + "." + "mp3","MUSIC",null),0);
		var _this = flixel_FlxG.sound.music;
		var Duration = 1;
		var From = 0;
		var To = 0.8;
		if(To == null) {
			To = 1;
		}
		if(From == null) {
			From = 0;
		}
		if(Duration == null) {
			Duration = 1;
		}
		if(_this._channel == null) {
			_this.play();
		}
		if(_this.fadeTween != null) {
			_this.fadeTween.cancel();
		}
		_this.fadeTween = flixel_tweens_FlxTween.num(From,To,Duration,{ onComplete : null},$bind(_this,_this.volumeTween));
		break;
	case "thorns":
		flixel_FlxG.sound.playMusic(Paths.getPath("music/" + "LunchboxScary" + "." + "mp3","MUSIC",null),0);
		var _this = flixel_FlxG.sound.music;
		var Duration = 1;
		var From = 0;
		var To = 0.8;
		if(To == null) {
			To = 1;
		}
		if(From == null) {
			From = 0;
		}
		if(Duration == null) {
			Duration = 1;
		}
		if(_this._channel == null) {
			_this.play();
		}
		if(_this.fadeTween != null) {
			_this.fadeTween.cancel();
		}
		_this.fadeTween = flixel_tweens_FlxTween.num(From,To,Duration,{ onComplete : null},$bind(_this,_this.volumeTween));
		break;
	}
	this.bgFade = new flixel_FlxSprite(-200,-200).makeGraphic(flixel_FlxG.width * 1.3 | 0,flixel_FlxG.height * 1.3 | 0,-4988968);
	this.bgFade.scrollFactor.set();
	this.bgFade.set_alpha(0);
	this.add(this.bgFade);
	new flixel_util_FlxTimer().start(0.5,function(tmr) {
		var fh = _gthis.bgFade;
		fh.set_alpha(fh.alpha + 0.13999999999999999);
		if(_gthis.bgFade.alpha > 0.7) {
			_gthis.bgFade.set_alpha(0.7);
		}
	},5);
	this.box = new flixel_FlxSprite(-20,45);
	var hasDialog = false;
	switch(PlayState.SONG.song.toLowerCase()) {
	case "fading":
		hasDialog = true;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garBox" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garBox" + ".xml","TEXT","shared")));
		this.box.animation.addByPrefix("normalOpen","Spirit Textbox spawn",24,false);
		this.box.animation.addByIndices("normal","Spirit Textbox spawn",[11],"",24);
		break;
	case "headache":
		hasDialog = true;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garBox" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garBox" + ".xml","TEXT","shared")));
		this.box.animation.addByPrefix("normalOpen","Spirit Textbox spawn",24,false);
		this.box.animation.addByIndices("normal","Spirit Textbox spawn",[11],"",24);
		break;
	case "nerves":
		hasDialog = true;
		flixel_FlxG.sound.play(Paths.sound("garWeak"));
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garBox" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garBox" + ".xml","TEXT","shared")));
		this.box.animation.addByPrefix("normalOpen","Spirit Textbox spawn",24,false);
		this.box.animation.addByIndices("normal","Spirit Textbox spawn",[11],"",24);
		break;
	case "release":
		hasDialog = true;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "garBox" + ".png","IMAGE","shared"),Paths.getPath("images/" + "garBox" + ".xml","TEXT","shared")));
		this.box.animation.addByPrefix("normalOpen","Spirit Textbox spawn",24,false);
		this.box.animation.addByIndices("normal","Spirit Textbox spawn",[11],"",24);
		break;
	case "roses":
		hasDialog = true;
		flixel_FlxG.sound.play(Paths.sound("ANGRY_TEXT_BOX"));
		var library = null;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-senpaiMad" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-senpaiMad" + ".xml","TEXT",library)));
		this.box.animation.addByPrefix("normalOpen","SENPAI ANGRY IMPACT SPEECH",24,false);
		this.box.animation.addByIndices("normal","SENPAI ANGRY IMPACT SPEECH",[4],"",24);
		break;
	case "senpai":
		hasDialog = true;
		var library = null;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-pixel" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-pixel" + ".xml","TEXT",library)));
		this.box.animation.addByPrefix("normalOpen","Text Box Appear",24,false);
		this.box.animation.addByIndices("normal","Text Box Appear",[4],"",24);
		break;
	case "thorns":
		hasDialog = true;
		var library = null;
		this.box.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-evil" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/pixelUI/dialogueBox-evil" + ".xml","TEXT",library)));
		this.box.animation.addByPrefix("normalOpen","Spirit Textbox spawn",24,false);
		this.box.animation.addByIndices("normal","Spirit Textbox spawn",[11],"",24);
		var face = new flixel_FlxSprite(320,170).loadGraphic(Paths.getPath("images/" + "weeb/spiritFaceForward" + ".png","IMAGE",null));
		face.setGraphicSize(face.get_width() * 6 | 0);
		this.add(face);
		break;
	}
	this.dialogueList = dialogueList;
	if(!hasDialog) {
		return;
	}
	if(PlayState.SONG.song.toLowerCase() == "senpai" || PlayState.SONG.song.toLowerCase() == "roses" || PlayState.SONG.song.toLowerCase() == "thorns") {
		this.portraitLeft = new flixel_FlxSprite(-20,40);
		var library = null;
		this.portraitLeft.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/senpaiPortrait" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/senpaiPortrait" + ".xml","TEXT",library)));
		this.portraitLeft.animation.addByPrefix("enter","Senpai Portrait Enter",24,false);
		this.portraitLeft.setGraphicSize(this.portraitLeft.get_width() * PlayState.daPixelZoom * 0.9 | 0);
		this.portraitLeft.updateHitbox();
		this.portraitLeft.scrollFactor.set();
		this.add(this.portraitLeft);
		this.portraitLeft.set_visible(false);
	} else if(PlayState.SONG.song.toLowerCase() == "headache") {
		this.portraitLeft = new flixel_FlxSprite(130,100);
		this.portraitLeft.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/gardialogue" + ".png","IMAGE","shared"),Paths.getPath("images/" + "weeb/gardialogue" + ".xml","TEXT","shared")));
		this.portraitLeft.animation.addByPrefix("enter","gar Default",24,false);
		this.portraitLeft.set_antialiasing(true);
		this.portraitLeft.updateHitbox();
		this.portraitLeft.scrollFactor.set();
		this.add(this.portraitLeft);
		this.portraitLeft.set_visible(false);
	} else if(PlayState.SONG.song.toLowerCase() == "nerves") {
		this.portraitLeft = new flixel_FlxSprite(130,100);
		this.portraitLeft.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/gardialogue" + ".png","IMAGE","shared"),Paths.getPath("images/" + "weeb/gardialogue" + ".xml","TEXT","shared")));
		this.portraitLeft.animation.addByPrefix("enter","gar Nervous",24,false);
		this.portraitLeft.set_antialiasing(true);
		this.portraitLeft.updateHitbox();
		this.portraitLeft.scrollFactor.set();
		this.add(this.portraitLeft);
		this.portraitLeft.set_visible(false);
	} else if(PlayState.SONG.song.toLowerCase() == "release") {
		this.portraitLeft = new flixel_FlxSprite(130,100);
		this.portraitLeft.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/gardialogue" + ".png","IMAGE","shared"),Paths.getPath("images/" + "weeb/gardialogue" + ".xml","TEXT","shared")));
		this.portraitLeft.animation.addByPrefix("enter","gar Ghost",24,false);
		this.portraitLeft.set_antialiasing(true);
		this.portraitLeft.updateHitbox();
		this.portraitLeft.scrollFactor.set();
		this.add(this.portraitLeft);
		this.portraitLeft.set_visible(false);
	} else if(PlayState.SONG.song.toLowerCase() == "fading") {
		this.portraitLeft = new flixel_FlxSprite(130,100);
		this.portraitLeft.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/gardialogue" + ".png","IMAGE","shared"),Paths.getPath("images/" + "weeb/gardialogue" + ".xml","TEXT","shared")));
		this.portraitLeft.animation.addByPrefix("enter","gar Dippy",24,false);
		this.portraitLeft.set_antialiasing(true);
		this.portraitLeft.updateHitbox();
		this.portraitLeft.scrollFactor.set();
		this.add(this.portraitLeft);
		this.portraitLeft.set_visible(false);
	}
	if(PlayState.SONG.song.toLowerCase() == "senpai" || PlayState.SONG.song.toLowerCase() == "roses") {
		this.portraitRight = new flixel_FlxSprite(0,40);
		var library = null;
		this.portraitRight.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/bfPortrait" + ".png","IMAGE",library),Paths.getPath("images/" + "weeb/bfPortrait" + ".xml","TEXT",library)));
		this.portraitRight.animation.addByPrefix("enter","Boyfriend portrait enter",24,false);
		this.portraitRight.setGraphicSize(this.portraitRight.get_width() * PlayState.daPixelZoom * 0.9 | 0);
		this.portraitRight.updateHitbox();
		this.portraitRight.scrollFactor.set();
		this.add(this.portraitRight);
		this.portraitRight.set_visible(false);
	} else if(PlayState.SONG.song.toLowerCase() == "headache" || PlayState.SONG.song.toLowerCase() == "nerves" || PlayState.SONG.song.toLowerCase() == "release" || PlayState.SONG.song.toLowerCase() == "fading") {
		this.portraitRight = new flixel_FlxSprite(770,200);
		this.portraitRight.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "weeb/bf_norm" + ".png","IMAGE","shared"),Paths.getPath("images/" + "weeb/bf_norm" + ".xml","TEXT","shared")));
		this.portraitRight.animation.addByPrefix("enter","Boyfriend portrait Enter",24,false);
		this.portraitRight.set_antialiasing(true);
		this.portraitRight.updateHitbox();
		this.portraitRight.scrollFactor.set();
		this.add(this.portraitRight);
		this.portraitRight.set_visible(false);
	}
	this.box.animation.play("normalOpen");
	this.box.setGraphicSize(this.box.get_width() * PlayState.daPixelZoom * 0.9 | 0);
	this.box.updateHitbox();
	this.add(this.box);
	this.box.screenCenter(flixel_util_FlxAxes.X);
	this.handSelect = new flixel_FlxSprite(flixel_FlxG.width * 0.9,flixel_FlxG.height * 0.9).loadGraphic(Paths.getPath("images/" + "weeb/pixelUI/hand_textbox" + ".png","IMAGE","shared"));
	this.add(this.handSelect);
	if(PlayState.SONG.song.toLowerCase() == "headache" || PlayState.SONG.song.toLowerCase() == "nerves" || PlayState.SONG.song.toLowerCase() == "release" || PlayState.SONG.song.toLowerCase() == "fading") {
		this.handSelect.set_antialiasing(true);
	}
	var tmp = !talkingRight;
	this.dropText = new flixel_text_FlxText(242,502,flixel_FlxG.width * 0.6 | 0,"",32);
	this.dropText.set_font("Pixel Arial 11 Bold");
	this.dropText.set_color(-2583404);
	this.add(this.dropText);
	this.swagDialogue = new flixel_addons_text_FlxTypeText(240,500,flixel_FlxG.width * 0.6 | 0,"",32);
	this.swagDialogue.set_font("Pixel Arial 11 Bold");
	this.swagDialogue.set_color(-12640223);
	var tmp = flixel_FlxG.sound.load(Paths.sound("pixelText"),0.6);
	this.swagDialogue.sounds = [tmp];
	this.add(this.swagDialogue);
	this.dialogue = new Alphabet(0,80,"",false,true);
};
$hxClasses["DialogueBox"] = DialogueBox;
DialogueBox.__name__ = "DialogueBox";
DialogueBox.__super__ = flixel_group_FlxTypedSpriteGroup;
DialogueBox.prototype = $extend(flixel_group_FlxTypedSpriteGroup.prototype,{
	box: null
	,curCharacter: null
	,dialogue: null
	,dialogueList: null
	,swagDialogue: null
	,dropText: null
	,finishThing: null
	,portraitLeft: null
	,portraitRight: null
	,handSelect: null
	,bgFade: null
	,dialogueOpened: null
	,dialogueStarted: null
	,update: function(elapsed) {
		var _gthis = this;
		if(PlayState.SONG.song.toLowerCase() == "roses") {
			this.portraitLeft.set_visible(false);
		}
		if(PlayState.SONG.song.toLowerCase() == "thorns") {
			this.portraitLeft.set_color(-16777216);
			this.swagDialogue.set_color(-1);
			this.dropText.set_color(-16777216);
		} else if(PlayState.SONG.song.toLowerCase() == "headache" || PlayState.SONG.song.toLowerCase() == "nerves") {
			this.swagDialogue.set_color(-1);
			this.dropText.set_color(-16777216);
		} else if(PlayState.SONG.song.toLowerCase() == "release") {
			this.swagDialogue.set_color(-15863682);
			this.dropText.set_color(-16777216);
		} else if(PlayState.SONG.song.toLowerCase() == "fading") {
			this.swagDialogue.set_color(-15863682);
			this.dropText.set_color(-16777216);
		}
		this.dropText.set_text(this.swagDialogue.text);
		if(this.box.animation._curAnim != null) {
			if(this.box.animation._curAnim.name == "normalOpen" && this.box.animation._curAnim.finished) {
				this.box.animation.play("normal");
				this.dialogueOpened = true;
			}
		}
		if(this.dialogueOpened && !this.dialogueStarted) {
			this.startDialogue();
			this.dialogueStarted = true;
		}
		if(flixel_FlxG.keys.justPressed.get_ANY() && this.dialogueStarted == true) {
			this.remove(this.dialogue);
			flixel_FlxG.sound.play(Paths.sound("Generic_Text"),0.8);
			if(this.dialogueList[1] == null && this.dialogueList[0] != null) {
				if(!this.isEnding) {
					this.isEnding = true;
					if(PlayState.SONG.song.toLowerCase() == "senpai" || PlayState.SONG.song.toLowerCase() == "thorns" || PlayState.SONG.song.toLowerCase() == "fading") {
						var _this = flixel_FlxG.sound.music;
						var Duration = 2.2;
						var To = 0;
						if(To == null) {
							To = 0;
						}
						if(Duration == null) {
							Duration = 1;
						}
						if(_this.fadeTween != null) {
							_this.fadeTween.cancel();
						}
						_this.fadeTween = flixel_tweens_FlxTween.num(_this._volume,To,Duration,{ onComplete : null},$bind(_this,_this.volumeTween));
					}
					new flixel_util_FlxTimer().start(0.2,function(tmr) {
						var fh = _gthis.box;
						fh.set_alpha(fh.alpha - 0.2);
						var fh = _gthis.bgFade;
						fh.set_alpha(fh.alpha - 0.13999999999999999);
						_gthis.portraitLeft.set_visible(false);
						_gthis.portraitRight.set_visible(false);
						var fh = _gthis.swagDialogue;
						fh.set_alpha(fh.alpha - 0.2);
						_gthis.dropText.set_alpha(_gthis.swagDialogue.alpha);
					},5);
					new flixel_util_FlxTimer().start(1.2,function(tmr) {
						_gthis.finishThing();
						_gthis.kill();
					});
				}
			} else {
				HxOverrides.remove(this.dialogueList,this.dialogueList[0]);
				this.startDialogue();
			}
		}
		flixel_group_FlxTypedSpriteGroup.prototype.update.call(this,elapsed);
	}
	,isEnding: null
	,startDialogue: function() {
		this.cleanDialog();
		this.swagDialogue.resetText(this.dialogueList[0]);
		this.swagDialogue.start(0.04,true);
		switch(this.curCharacter) {
		case "bf":
			this.portraitLeft.set_visible(false);
			if(!this.portraitRight.visible) {
				this.portraitRight.set_visible(true);
				this.portraitRight.animation.play("enter");
			}
			break;
		case "dad":
			this.portraitRight.set_visible(false);
			if(!this.portraitLeft.visible) {
				this.portraitLeft.set_visible(true);
				this.portraitLeft.animation.play("enter");
			}
			break;
		}
	}
	,cleanDialog: function() {
		var splitName = this.dialogueList[0].split(":");
		this.curCharacter = splitName[1];
		this.dialogueList[0] = StringTools.trim(HxOverrides.substr(this.dialogueList[0],splitName[1].length + 2,null));
	}
	,__class__: DialogueBox
});
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = "EReg";
EReg.prototype = {
	r: null
	,match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0 ? s : HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			var b = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b;
		}
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,map: function(s,f) {
		var offset = 0;
		var buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
	,__class__: EReg
};
var FreeplayState = function(TransIn,TransOut) {
	this.iconArray = [];
	this.curPlaying = false;
	this.intendedScore = 0;
	this.lerpScore = 0;
	this.curDifficulty = 1;
	this.curSelected = 0;
	this.songs = [];
	MusicBeatState.call(this,TransIn,TransOut);
};
$hxClasses["FreeplayState"] = FreeplayState;
FreeplayState.__name__ = "FreeplayState";
FreeplayState.__super__ = MusicBeatState;
FreeplayState.prototype = $extend(MusicBeatState.prototype,{
	songs: null
	,selector: null
	,curSelected: null
	,curDifficulty: null
	,scoreText: null
	,diffText: null
	,lerpScore: null
	,intendedScore: null
	,grpSongs: null
	,curPlaying: null
	,iconArray: null
	,create: function() {
		var initSonglist = CoolUtil.coolTextFile(Paths.getPath("data/" + "freeplaySonglist" + ".txt","TEXT",null));
		var _g = 0;
		var _g1 = initSonglist.length;
		while(_g < _g1) {
			var i = _g++;
			this.songs.push(new SongMetadata(initSonglist[i],1,"gf"));
		}
		var isDebug = false;
		if(StoryMenuState.weekUnlocked[2] || isDebug) {
			this.addWeek(["Bopeebo","Fresh","Dadbattle"],1,["dad"]);
		}
		if(StoryMenuState.weekUnlocked[2] || isDebug) {
			this.addWeek(["Spookeez","South"],2,["spooky"]);
		}
		if(StoryMenuState.weekUnlocked[2] || isDebug) {
			this.addWeek(["Monster"],2,["monster"]);
		}
		if(StoryMenuState.weekUnlocked[3] || isDebug) {
			this.addWeek(["Pico","Philly","Blammed"],3,["pico"]);
		}
		if(StoryMenuState.weekUnlocked[4] || isDebug) {
			this.addWeek(["Satin-Panties","High","Milf"],4,["mom"]);
		}
		if(StoryMenuState.weekUnlocked[5] || isDebug) {
			this.addWeek(["Cocoa","Eggnog","Winter-Horrorland"],5,["parents-christmas","parents-christmas","monster-christmas"]);
		}
		if(StoryMenuState.weekUnlocked[6] || isDebug) {
			this.addWeek(["Senpai","Roses","Thorns"],6,["senpai","senpai","spirit"]);
		}
		if(StoryMenuState.weekUnlocked[7] || isDebug) {
			this.addWeek(["Headache","Nerves","Release","Fading"],7,["garcello","garcellotired","garcellodead","garcellodip"]);
		}
		var bg = new flixel_FlxSprite().loadGraphic(Paths.getPath("images/" + "menuBGBlue" + ".png","IMAGE",null));
		this.add(bg);
		this.grpSongs = new flixel_group_FlxTypedGroup();
		this.add(this.grpSongs);
		var _g = 0;
		var _g1 = this.songs.length;
		while(_g < _g1) {
			var i = _g++;
			var songText = new Alphabet(0,70 * i + 30,this.songs[i].songName,true,false);
			songText.isMenuItem = true;
			songText.targetY = i;
			this.grpSongs.add(songText);
			var icon = new HealthIcon(this.songs[i].songCharacter);
			icon.sprTracker = songText;
			this.iconArray.push(icon);
			this.add(icon);
		}
		this.scoreText = new flixel_text_FlxText(flixel_FlxG.width * 0.7,5,0,"",32);
		this.scoreText.setFormat("assets/fonts/" + "vcr.ttf",32,-1,"right");
		var scoreBG = new flixel_FlxSprite(this.scoreText.x - 6,0).makeGraphic(flixel_FlxG.width * 0.35 | 0,66,-16777216);
		scoreBG.set_alpha(0.6);
		this.add(scoreBG);
		this.diffText = new flixel_text_FlxText(this.scoreText.x,this.scoreText.y + 36,0,"",24);
		this.diffText.set_font(this.scoreText._font);
		this.add(this.diffText);
		this.add(this.scoreText);
		this.changeSelection();
		this.changeDiff();
		this.selector = new flixel_text_FlxText();
		this.selector.set_size(40);
		this.selector.set_text(">");
		var swag = new Alphabet(1,0,"swag");
		MusicBeatState.prototype.create.call(this);
	}
	,addSong: function(songName,weekNum,songCharacter) {
		this.songs.push(new SongMetadata(songName,weekNum,songCharacter));
	}
	,addWeek: function(songs,weekNum,songCharacters) {
		if(songCharacters == null) {
			songCharacters = ["bf"];
		}
		var num = 0;
		var _g = 0;
		while(_g < songs.length) {
			var song = songs[_g];
			++_g;
			this.addSong(song,weekNum,songCharacters[num]);
			if(songCharacters.length != 1) {
				++num;
			}
		}
	}
	,update: function(elapsed) {
		MusicBeatState.prototype.update.call(this,elapsed);
		if(flixel_FlxG.sound.music._volume < 0.7) {
			var fh = flixel_FlxG.sound.music;
			fh.set_volume(fh._volume + 0.5 * flixel_FlxG.elapsed);
		}
		var a = this.lerpScore;
		this.lerpScore = Math.floor(a + 0.4 * (this.intendedScore - a));
		if(Math.abs(this.lerpScore - this.intendedScore) <= 10) {
			this.lerpScore = this.intendedScore;
		}
		this.scoreText.set_text("PERSONAL BEST:" + this.lerpScore);
		var upP = PlayerSettings.player1.controls._upP.check();
		var downP = PlayerSettings.player1.controls._downP.check();
		var accepted = PlayerSettings.player1.controls._accept.check();
		if(upP) {
			this.changeSelection(-1);
		}
		if(downP) {
			this.changeSelection(1);
		}
		if(PlayerSettings.player1.controls._leftP.check()) {
			this.changeDiff(-1);
		}
		if(PlayerSettings.player1.controls._rightP.check()) {
			this.changeDiff(1);
		}
		if(PlayerSettings.player1.controls._back.check()) {
			var nextState = new MainMenuState();
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
		if(accepted) {
			var poop = Highscore.formatSong(this.songs[this.curSelected].songName.toLowerCase(),this.curDifficulty);
			haxe_Log.trace(poop,{ fileName : "source/FreeplayState.hx", lineNumber : 228, className : "FreeplayState", methodName : "update"});
			PlayState.SONG = Song.loadFromJson(poop,this.songs[this.curSelected].songName.toLowerCase());
			PlayState.isStoryMode = false;
			PlayState.storyDifficulty = this.curDifficulty;
			PlayState.storyWeek = this.songs[this.curSelected].week;
			haxe_Log.trace("CUR WEEK" + PlayState.storyWeek,{ fileName : "source/FreeplayState.hx", lineNumber : 235, className : "FreeplayState", methodName : "update"});
			var nextState = LoadingState.getNextState(new PlayState(),false);
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
	}
	,changeDiff: function(change) {
		if(change == null) {
			change = 0;
		}
		this.curDifficulty += change;
		if(this.curDifficulty < 0) {
			this.curDifficulty = 2;
		}
		if(this.curDifficulty > 2) {
			this.curDifficulty = 0;
		}
		this.intendedScore = Highscore.getScore(this.songs[this.curSelected].songName,this.curDifficulty);
		switch(this.curDifficulty) {
		case 0:
			this.diffText.set_text("EASY");
			break;
		case 1:
			this.diffText.set_text("NORMAL");
			break;
		case 2:
			this.diffText.set_text("HARD");
			break;
		}
	}
	,changeSelection: function(change) {
		if(change == null) {
			change = 0;
		}
		flixel_FlxG.sound.play(Paths.sound("scrollMenu"),0.4);
		this.curSelected += change;
		if(this.curSelected < 0) {
			this.curSelected = this.songs.length - 1;
		}
		if(this.curSelected >= this.songs.length) {
			this.curSelected = 0;
		}
		this.intendedScore = Highscore.getScore(this.songs[this.curSelected].songName,this.curDifficulty);
		var bullShit = 0;
		var _g = 0;
		var _g1 = this.iconArray.length;
		while(_g < _g1) {
			var i = _g++;
			this.iconArray[i].set_alpha(0.6);
		}
		this.iconArray[this.curSelected].set_alpha(1);
		var _g = 0;
		var _g1 = this.grpSongs.members;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			item.targetY = bullShit - this.curSelected;
			++bullShit;
			item.set_alpha(0.6);
			if(item.targetY == 0) {
				item.set_alpha(1);
			}
		}
	}
	,__class__: FreeplayState
});
var SongMetadata = function(song,week,songCharacter) {
	this.songCharacter = "";
	this.week = 0;
	this.songName = "";
	this.songName = song;
	this.week = week;
	this.songCharacter = songCharacter;
};
$hxClasses["SongMetadata"] = SongMetadata;
SongMetadata.__name__ = "SongMetadata";
SongMetadata.prototype = {
	songName: null
	,week: null
	,songCharacter: null
	,__class__: SongMetadata
};
var GameOverSubstate = function(x,y) {
	this.isEnding = false;
	this.stageSuffix = "";
	var daStage = PlayState.curStage;
	var daBf = "";
	switch(daStage) {
	case "school":
		this.stageSuffix = "-pixel";
		daBf = "bf-pixel-dead";
		break;
	case "schoolEvil":
		this.stageSuffix = "-pixel";
		daBf = "bf-pixel-dead";
		break;
	default:
		daBf = "bf";
	}
	MusicBeatSubstate.call(this);
	Conductor.songPosition = 0;
	this.bf = new Boyfriend(x,y,daBf);
	this.add(this.bf);
	this.camFollow = new flixel_FlxObject(this.bf.getGraphicMidpoint().x,this.bf.getGraphicMidpoint().y,1,1);
	this.add(this.camFollow);
	flixel_FlxG.sound.play(Paths.sound("fnf_loss_sfx" + this.stageSuffix));
	Conductor.changeBPM(100);
	flixel_FlxG.camera.scroll.set();
	flixel_FlxG.camera.target = null;
	this.bf.playAnim("firstDeath");
};
$hxClasses["GameOverSubstate"] = GameOverSubstate;
GameOverSubstate.__name__ = "GameOverSubstate";
GameOverSubstate.__super__ = MusicBeatSubstate;
GameOverSubstate.prototype = $extend(MusicBeatSubstate.prototype,{
	bf: null
	,camFollow: null
	,stageSuffix: null
	,update: function(elapsed) {
		MusicBeatSubstate.prototype.update.call(this,elapsed);
		if(PlayerSettings.player1.controls._accept.check()) {
			this.endBullshit();
		}
		if(PlayerSettings.player1.controls._back.check()) {
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
			if(PlayState.isStoryMode) {
				var nextState = new StoryMenuState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
			} else {
				var nextState = new FreeplayState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
			}
		}
		if(this.bf.animation._curAnim.name == "firstDeath" && this.bf.animation._curAnim.curFrame == 12) {
			flixel_FlxG.camera.follow(this.camFollow,flixel_FlxCameraFollowStyle.LOCKON,0.01);
		}
		if(this.bf.animation._curAnim.name == "firstDeath" && this.bf.animation._curAnim.finished) {
			flixel_FlxG.sound.playMusic(Paths.getPath("music/" + ("gameOver" + this.stageSuffix) + "." + "mp3","MUSIC",null));
		}
		if(flixel_FlxG.sound.music._channel != null) {
			Conductor.songPosition = flixel_FlxG.sound.music._time;
		}
	}
	,beatHit: function() {
		MusicBeatSubstate.prototype.beatHit.call(this);
	}
	,isEnding: null
	,endBullshit: function() {
		if(!this.isEnding) {
			this.isEnding = true;
			this.bf.playAnim("deathConfirm",true);
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
			flixel_FlxG.sound.play(Paths.getPath("music/" + ("gameOverEnd" + this.stageSuffix) + "." + "mp3","MUSIC",null));
			new flixel_util_FlxTimer().start(0.7,function(tmr) {
				flixel_FlxG.camera.fade(-16777216,2,false,function() {
					var nextState = LoadingState.getNextState(new PlayState(),false);
					if(flixel_FlxG.game._state.switchTo(nextState)) {
						flixel_FlxG.game._requestedState = nextState;
					}
				});
			});
		}
	}
	,__class__: GameOverSubstate
});
var GhostState = function() {
	this.BLUE = -10592674;
	this.curSelected = 0;
	this.textMenuItems = ["ON","OFF"];
	MusicBeatSubstate.call(this);
	var bg = new flixel_FlxSprite(-80).loadGraphic(Paths.getPath("images/" + "menuDesat" + ".png","IMAGE",null));
	bg.scrollFactor.set_x(0);
	bg.scrollFactor.set_y(0.18);
	bg.setGraphicSize(bg.get_width() * 1.1 | 0);
	bg.updateHitbox();
	bg.screenCenter();
	bg.set_antialiasing(true);
	this.add(bg);
	this.grpOptionsTexts = new flixel_group_FlxTypedGroup();
	this.add(this.grpOptionsTexts);
	var _g = 0;
	var _g1 = this.textMenuItems.length;
	while(_g < _g1) {
		var i = _g++;
		var optionText = new flixel_text_FlxText(550,300 + i * 50,0,this.textMenuItems[i],32);
		optionText.ID = i;
		optionText.setFormat("assets/fonts/" + "vcr.ttf",32);
		this.grpOptionsTexts.add(optionText);
	}
};
$hxClasses["GhostState"] = GhostState;
GhostState.__name__ = "GhostState";
GhostState.__super__ = MusicBeatSubstate;
GhostState.prototype = $extend(MusicBeatSubstate.prototype,{
	textMenuItems: null
	,selector: null
	,curSelected: null
	,bg: null
	,bg2: null
	,BLUE: null
	,grpOptionsTexts: null
	,update: function(elapsed) {
		var _gthis = this;
		MusicBeatSubstate.prototype.update.call(this,elapsed);
		if(PlayerSettings.player1.controls._back.check()) {
			var nextState = new OptionsMenu();
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
		if(PlayerSettings.player1.controls._upP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected -= 1;
		}
		if(PlayerSettings.player1.controls._downP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected += 1;
		}
		if(this.curSelected < 0) {
			this.curSelected = this.textMenuItems.length - 1;
		}
		if(this.curSelected >= this.textMenuItems.length) {
			this.curSelected = 0;
		}
		this.grpOptionsTexts.forEach(function(txt) {
			txt.set_color(-16777216);
			if(txt.ID == _gthis.curSelected) {
				txt.set_color(-16776961);
			}
		});
		if(PlayerSettings.player1.controls._accept.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
		}
		switch(this.textMenuItems[this.curSelected]) {
		case "OFF":
			flixel_FlxG.save.data.coolinput = true;
			break;
		case "ON":
			flixel_FlxG.save.data.coolinput = false;
			break;
		}
	}
	,__class__: GhostState
});
var GitarooPause = function() {
	this.replaySelect = false;
	MusicBeatState.call(this);
};
$hxClasses["GitarooPause"] = GitarooPause;
GitarooPause.__name__ = "GitarooPause";
GitarooPause.__super__ = MusicBeatState;
GitarooPause.prototype = $extend(MusicBeatState.prototype,{
	replayButton: null
	,cancelButton: null
	,replaySelect: null
	,create: function() {
		if(flixel_FlxG.sound.music != null) {
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
		}
		var bg = new flixel_FlxSprite().loadGraphic(Paths.getPath("images/" + "pauseAlt/pauseBG" + ".png","IMAGE",null));
		this.add(bg);
		var bf = new flixel_FlxSprite(0,30);
		var library = null;
		bf.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "pauseAlt/bfLol" + ".png","IMAGE",library),Paths.getPath("images/" + "pauseAlt/bfLol" + ".xml","TEXT",library)));
		bf.animation.addByPrefix("lol","funnyThing",13);
		bf.animation.play("lol");
		this.add(bf);
		bf.screenCenter(flixel_util_FlxAxes.X);
		this.replayButton = new flixel_FlxSprite(flixel_FlxG.width * 0.28,flixel_FlxG.height * 0.7);
		var library = null;
		this.replayButton.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "pauseAlt/pauseUI" + ".png","IMAGE",library),Paths.getPath("images/" + "pauseAlt/pauseUI" + ".xml","TEXT",library)));
		this.replayButton.animation.addByPrefix("selected","bluereplay",0,false);
		this.replayButton.animation.appendByPrefix("selected","yellowreplay");
		this.replayButton.animation.play("selected");
		this.add(this.replayButton);
		this.cancelButton = new flixel_FlxSprite(flixel_FlxG.width * 0.58,this.replayButton.y);
		var library = null;
		this.cancelButton.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "pauseAlt/pauseUI" + ".png","IMAGE",library),Paths.getPath("images/" + "pauseAlt/pauseUI" + ".xml","TEXT",library)));
		this.cancelButton.animation.addByPrefix("selected","bluecancel",0,false);
		this.cancelButton.animation.appendByPrefix("selected","cancelyellow");
		this.cancelButton.animation.play("selected");
		this.add(this.cancelButton);
		this.changeThing();
		MusicBeatState.prototype.create.call(this);
	}
	,update: function(elapsed) {
		if(PlayerSettings.player1.controls._leftP.check() || PlayerSettings.player1.controls._rightP.check()) {
			this.changeThing();
		}
		if(PlayerSettings.player1.controls._accept.check()) {
			if(this.replaySelect) {
				var nextState = new PlayState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
			} else {
				var nextState = new MainMenuState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
			}
		}
		MusicBeatState.prototype.update.call(this,elapsed);
	}
	,changeThing: function() {
		this.replaySelect = !this.replaySelect;
		if(this.replaySelect) {
			this.cancelButton.animation._curAnim.set_curFrame(0);
			this.replayButton.animation._curAnim.set_curFrame(1);
		} else {
			this.cancelButton.animation._curAnim.set_curFrame(1);
			this.replayButton.animation._curAnim.set_curFrame(0);
		}
	}
	,__class__: GitarooPause
});
var HealthIcon = function(char,isPlayer) {
	if(isPlayer == null) {
		isPlayer = false;
	}
	if(char == null) {
		char = "bf";
	}
	flixel_FlxSprite.call(this);
	this.loadGraphic(Paths.getPath("images/" + "iconGrid" + ".png","IMAGE",null),true,150,150);
	this.set_antialiasing(true);
	this.animation.add("bf",[0,1],0,false,isPlayer);
	this.animation.add("bf-sad",[0,1],0,false,isPlayer);
	this.animation.add("bf-car",[0,1],0,false,isPlayer);
	this.animation.add("bf-christmas",[0,1],0,false,isPlayer);
	this.animation.add("bf-pixel",[21,21],0,false,isPlayer);
	this.animation.add("spooky",[2,3],0,false,isPlayer);
	this.animation.add("pico",[4,5],0,false,isPlayer);
	this.animation.add("mom",[6,7],0,false,isPlayer);
	this.animation.add("mom-car",[6,7],0,false,isPlayer);
	this.animation.add("tankman",[8,9],0,false,isPlayer);
	this.animation.add("face",[10,11],0,false,isPlayer);
	this.animation.add("dad",[12,13],0,false,isPlayer);
	this.animation.add("senpai",[22,22],0,false,isPlayer);
	this.animation.add("senpai-angry",[22,22],0,false,isPlayer);
	this.animation.add("spirit",[23,23],0,false,isPlayer);
	this.animation.add("bf-old",[14,15],0,false,isPlayer);
	this.animation.add("gf",[16],0,false,isPlayer);
	this.animation.add("garcello",[24,25],0,false,isPlayer);
	this.animation.add("garcellotired",[26,27],0,false,isPlayer);
	this.animation.add("garcellodead",[28,29],0,false,isPlayer);
	this.animation.add("garcellodip",[29,29],0,false,isPlayer);
	this.animation.add("garcelloghosty",[29,29],0,false,isPlayer);
	this.animation.add("parents-christmas",[17],0,false,isPlayer);
	this.animation.add("monster",[19,20],0,false,isPlayer);
	this.animation.add("monster-christmas",[19,20],0,false,isPlayer);
	this.animation.play(char);
	this.scrollFactor.set();
};
$hxClasses["HealthIcon"] = HealthIcon;
HealthIcon.__name__ = "HealthIcon";
HealthIcon.__super__ = flixel_FlxSprite;
HealthIcon.prototype = $extend(flixel_FlxSprite.prototype,{
	sprTracker: null
	,update: function(elapsed) {
		flixel_FlxSprite.prototype.update.call(this,elapsed);
		if(this.sprTracker != null) {
			this.setPosition(this.sprTracker.x + this.sprTracker.get_width() + 10,this.sprTracker.y - 30);
		}
	}
	,__class__: HealthIcon
});
var Highscore = function() { };
$hxClasses["Highscore"] = Highscore;
Highscore.__name__ = "Highscore";
Highscore.saveScore = function(song,score,diff) {
	if(diff == null) {
		diff = 0;
	}
	if(score == null) {
		score = 0;
	}
	var daSong = Highscore.formatSong(song,diff);
	var score1 = score;
	if(score1 == null) {
		score1 = 0;
	}
	if(NGio.isLoggedIn) {
		var id = io_newgrounds_NG.core.scoreBoards.keys();
		while(id.hasNext()) {
			var id1 = id.next();
			var board = io_newgrounds_NG.core.scoreBoards.h[id1];
			if(song == board._data.name) {
				board.postScore(score1,"Uhh meow?");
			}
		}
	}
	if(Object.prototype.hasOwnProperty.call(Highscore.songScores.h,daSong)) {
		if(Highscore.songScores.h[daSong] < score) {
			Highscore.setScore(daSong,score);
		}
	} else {
		Highscore.setScore(daSong,score);
	}
};
Highscore.saveWeekScore = function(week,score,diff) {
	if(diff == null) {
		diff = 0;
	}
	if(score == null) {
		score = 0;
	}
	if(week == null) {
		week = 1;
	}
	var score1 = score;
	var song = "Week " + week;
	if(score1 == null) {
		score1 = 0;
	}
	if(NGio.isLoggedIn) {
		var id = io_newgrounds_NG.core.scoreBoards.keys();
		while(id.hasNext()) {
			var id1 = id.next();
			var board = io_newgrounds_NG.core.scoreBoards.h[id1];
			if(song == board._data.name) {
				board.postScore(score1,"Uhh meow?");
			}
		}
	}
	var daWeek = Highscore.formatSong("week" + week,diff);
	if(Object.prototype.hasOwnProperty.call(Highscore.songScores.h,daWeek)) {
		if(Highscore.songScores.h[daWeek] < score) {
			Highscore.setScore(daWeek,score);
		}
	} else {
		Highscore.setScore(daWeek,score);
	}
};
Highscore.setScore = function(song,score) {
	Highscore.songScores.h[song] = score;
	flixel_FlxG.save.data.songScores = Highscore.songScores;
	flixel_FlxG.save.flush();
};
Highscore.formatSong = function(song,diff) {
	var daSong = song;
	if(diff == 0) {
		daSong += "-easy";
	} else if(diff == 2) {
		daSong += "-hard";
	}
	return daSong;
};
Highscore.getScore = function(song,diff) {
	var this1 = Highscore.songScores;
	var key = Highscore.formatSong(song,diff);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		Highscore.setScore(Highscore.formatSong(song,diff),0);
	}
	var this1 = Highscore.songScores;
	var key = Highscore.formatSong(song,diff);
	return this1.h[key];
};
Highscore.getWeekScore = function(week,diff) {
	var this1 = Highscore.songScores;
	var key = Highscore.formatSong("week" + week,diff);
	if(!Object.prototype.hasOwnProperty.call(this1.h,key)) {
		Highscore.setScore(Highscore.formatSong("week" + week,diff),0);
	}
	var this1 = Highscore.songScores;
	var key = Highscore.formatSong("week" + week,diff);
	return this1.h[key];
};
Highscore.load = function() {
	if(flixel_FlxG.save.data.songScores != null) {
		Highscore.songScores = flixel_FlxG.save.data.songScores;
	}
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = "HxOverrides";
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d["setTime"](0);
		d["setUTCHours"](k[0]);
		d["setUTCMinutes"](k[1]);
		d["setUTCSeconds"](k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw haxe_Exception.thrown("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIterator"] = IntIterator;
IntIterator.__name__ = "IntIterator";
IntIterator.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIterator
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = "Lambda";
Lambda.array = function(it) {
	var a = [];
	var i = $getIterator(it);
	while(i.hasNext()) {
		var i1 = i.next();
		a.push(i1);
	}
	return a;
};
Lambda.exists = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(f(x1)) {
			return true;
		}
	}
	return false;
};
var LoadingState = function(target,stopMusic) {
	this.danceLeft = false;
	this.stopMusic = false;
	MusicBeatState.call(this);
	this.target = target;
	this.stopMusic = stopMusic;
};
$hxClasses["LoadingState"] = LoadingState;
LoadingState.__name__ = "LoadingState";
LoadingState.getSongPath = function() {
	return "songs:assets/songs/" + PlayState.SONG.song.toLowerCase() + "/Inst." + "mp3";
};
LoadingState.getVocalPath = function() {
	return "songs:assets/songs/" + PlayState.SONG.song.toLowerCase() + "/Voices." + "mp3";
};
LoadingState.loadAndSwitchState = function(target,stopMusic) {
	if(stopMusic == null) {
		stopMusic = false;
	}
	var nextState = LoadingState.getNextState(target,stopMusic);
	if(flixel_FlxG.game._state.switchTo(nextState)) {
		flixel_FlxG.game._requestedState = nextState;
	}
};
LoadingState.getNextState = function(target,stopMusic) {
	if(stopMusic == null) {
		stopMusic = false;
	}
	Paths.setCurrentLevel("week" + PlayState.storyWeek);
	var loaded = LoadingState.isSoundLoaded(LoadingState.getSongPath()) && (!PlayState.SONG.needsVoices || LoadingState.isSoundLoaded(LoadingState.getVocalPath())) && LoadingState.isLibraryLoaded("shared");
	if(!loaded) {
		return new LoadingState(target,stopMusic);
	}
	if(stopMusic && flixel_FlxG.sound.music != null) {
		var _this = flixel_FlxG.sound.music;
		_this.cleanup(_this.autoDestroy,true);
	}
	return target;
};
LoadingState.isSoundLoaded = function(path) {
	return openfl_utils_Assets.cache.hasSound(path);
};
LoadingState.isLibraryLoaded = function(library) {
	return openfl_utils_Assets.getLibrary(library) != null;
};
LoadingState.initSongsManifest = function() {
	var id = "songs";
	var promise = new lime_app_Promise();
	var library = lime_utils_Assets.getLibrary(id);
	if(library != null) {
		return lime_app_Future.withValue(library);
	}
	var path = id;
	var rootPath = null;
	var libraryPaths = lime_utils_Assets.libraryPaths;
	if(Object.prototype.hasOwnProperty.call(libraryPaths.h,id)) {
		path = libraryPaths.h[id];
		rootPath = haxe_io_Path.directory(path);
	} else {
		if(StringTools.endsWith(path,".bundle")) {
			rootPath = path;
			path += "/library.json";
		} else {
			rootPath = haxe_io_Path.directory(path);
		}
		path = lime_utils_Assets.__cacheBreak(path);
	}
	lime_utils_AssetManifest.loadFromFile(path,rootPath).onComplete(function(manifest) {
		if(manifest == null) {
			promise.error("Cannot parse asset manifest for library \"" + id + "\"");
			return;
		}
		var library = lime_utils_AssetLibrary.fromManifest(manifest);
		if(library == null) {
			promise.error("Cannot open library \"" + id + "\"");
		} else {
			lime_utils_Assets.libraries.h[id] = library;
			library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
			promise.completeWith(lime_app_Future.withValue(library));
		}
	}).onError(function(_) {
		promise.error("There is no asset library with an ID of \"" + id + "\"");
	});
	return promise.future;
};
LoadingState.__super__ = MusicBeatState;
LoadingState.prototype = $extend(MusicBeatState.prototype,{
	target: null
	,stopMusic: null
	,callbacks: null
	,logo: null
	,gfDance: null
	,loading: null
	,danceLeft: null
	,create: function() {
		var _gthis = this;
		this.logo = new flixel_FlxSprite(-150,-100);
		var library = null;
		this.logo.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "logoBumpin" + ".png","IMAGE",library),Paths.getPath("images/" + "logoBumpin" + ".xml","TEXT",library)));
		this.logo.set_antialiasing(true);
		this.logo.animation.addByPrefix("bump","logo bumpin",24);
		this.logo.animation.play("bump");
		this.logo.updateHitbox();
		this.gfDance = new flixel_FlxSprite(flixel_FlxG.width * 0.4,flixel_FlxG.height * 0.07);
		var library = null;
		this.gfDance.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "gfDanceTitle" + ".png","IMAGE",library),Paths.getPath("images/" + "gfDanceTitle" + ".xml","TEXT",library)));
		this.gfDance.animation.addByIndices("danceLeft","gfDance",[30,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"",24,false);
		this.gfDance.animation.addByIndices("danceRight","gfDance",[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"",24,false);
		this.gfDance.set_antialiasing(true);
		this.add(this.gfDance);
		this.add(this.logo);
		var loading = new flixel_FlxSprite(-5,622).loadGraphic(Paths.getPath("images/" + "loading" + ".png","IMAGE",null));
		loading.set_antialiasing(true);
		this.add(loading);
		LoadingState.initSongsManifest().onComplete(function(lib) {
			_gthis.callbacks = new MultiCallback($bind(_gthis,_gthis.onLoad));
			var introComplete = _gthis.callbacks.add("introComplete");
			_gthis.checkLoadSong(LoadingState.getSongPath());
			if(PlayState.SONG.needsVoices) {
				_gthis.checkLoadSong(LoadingState.getVocalPath());
			}
			_gthis.checkLibrary("shared");
			if(PlayState.storyWeek > 0) {
				_gthis.checkLibrary("week" + PlayState.storyWeek);
			} else {
				_gthis.checkLibrary("tutorial");
			}
			var fadeTime = 0.5;
			flixel_FlxG.camera.fade(flixel_FlxG.camera.bgColor,fadeTime,true);
			new flixel_util_FlxTimer().start(fadeTime + 1.0,function(_) {
				introComplete();
			});
		});
	}
	,checkLoadSong: function(path) {
		if(!openfl_utils_Assets.cache.hasSound(path)) {
			var library = openfl_utils_Assets.getLibrary("songs");
			var symbolPath = path.split(":").pop();
			var callback = this.callbacks.add("song:" + path);
			openfl_utils_Assets.loadSound(path).onComplete(function(_) {
				callback();
			});
		}
	}
	,checkLibrary: function(library) {
		haxe_Log.trace(openfl_utils_Assets.hasLibrary(library),{ fileName : "source/LoadingState.hx", lineNumber : 100, className : "LoadingState", methodName : "checkLibrary"});
		if(openfl_utils_Assets.getLibrary(library) == null) {
			if(!Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraryPaths.h,library)) {
				throw haxe_Exception.thrown("Missing library: " + library);
			}
			var callback = this.callbacks.add("library:" + library);
			openfl_utils_Assets.loadLibrary(library).onComplete(function(_) {
				callback();
			});
		}
	}
	,beatHit: function() {
		MusicBeatState.prototype.beatHit.call(this);
		this.logo.animation.play("bump");
		this.danceLeft = !this.danceLeft;
		if(this.danceLeft) {
			this.gfDance.animation.play("danceRight");
		} else {
			this.gfDance.animation.play("danceLeft");
		}
	}
	,update: function(elapsed) {
		MusicBeatState.prototype.update.call(this,elapsed);
	}
	,onLoad: function() {
		if(this.stopMusic && flixel_FlxG.sound.music != null) {
			var _this = flixel_FlxG.sound.music;
			_this.cleanup(_this.autoDestroy,true);
		}
		var nextState = this.target;
		if(flixel_FlxG.game._state.switchTo(nextState)) {
			flixel_FlxG.game._requestedState = nextState;
		}
	}
	,destroy: function() {
		MusicBeatState.prototype.destroy.call(this);
		this.callbacks = null;
	}
	,__class__: LoadingState
});
var MultiCallback = function(callback,logId) {
	this.fired = [];
	this.unfired = new haxe_ds_StringMap();
	this.numRemaining = 0;
	this.length = 0;
	this.logId = null;
	this.callback = callback;
	this.logId = logId;
};
$hxClasses["MultiCallback"] = MultiCallback;
MultiCallback.__name__ = "MultiCallback";
MultiCallback.prototype = {
	callback: null
	,logId: null
	,length: null
	,numRemaining: null
	,unfired: null
	,fired: null
	,add: function(id) {
		if(id == null) {
			id = "untitled";
		}
		var _gthis = this;
		id = "" + this.length + ":" + id;
		this.length++;
		this.numRemaining++;
		var func = null;
		func = function() {
			if(Object.prototype.hasOwnProperty.call(_gthis.unfired.h,id)) {
				var _this = _gthis.unfired;
				if(Object.prototype.hasOwnProperty.call(_this.h,id)) {
					delete(_this.h[id]);
				}
				_gthis.fired.push(id);
				_gthis.numRemaining--;
				if(_gthis.logId != null) {
					if(_gthis.logId != null) {
						haxe_Log.trace("" + _gthis.logId + ": " + ("fired " + id + ", " + _gthis.numRemaining + " remaining"),{ fileName : "source/LoadingState.hx", lineNumber : 310, className : "MultiCallback", methodName : "log"});
					}
				}
				if(_gthis.numRemaining == 0) {
					if(_gthis.logId != null) {
						if(_gthis.logId != null) {
							haxe_Log.trace("" + _gthis.logId + ": " + "all callbacks fired",{ fileName : "source/LoadingState.hx", lineNumber : 310, className : "MultiCallback", methodName : "log"});
						}
					}
					_gthis.callback();
				}
			} else if(_gthis.logId != null) {
				haxe_Log.trace("" + _gthis.logId + ": " + ("already fired " + id),{ fileName : "source/LoadingState.hx", lineNumber : 310, className : "MultiCallback", methodName : "log"});
			}
		};
		this.unfired.h[id] = func;
		return func;
	}
	,log: function(msg) {
		if(this.logId != null) {
			haxe_Log.trace("" + this.logId + ": " + msg,{ fileName : "source/LoadingState.hx", lineNumber : 310, className : "MultiCallback", methodName : "log"});
		}
	}
	,getFired: function() {
		return this.fired.slice();
	}
	,getUnfired: function() {
		var _g = [];
		var h = this.unfired.h;
		var id_h = h;
		var id_keys = Object.keys(h);
		var id_length = id_keys.length;
		var id_current = 0;
		while(id_current < id_length) {
			var id = id_keys[id_current++];
			_g.push(id);
		}
		return _g;
	}
	,__class__: MultiCallback
};
var MainMenuState = function(TransIn,TransOut) {
	this.selectedSomethin = false;
	this.optionShit = ["story mode","freeplay","donate","options"];
	this.curSelected = 0;
	MusicBeatState.call(this,TransIn,TransOut);
};
$hxClasses["MainMenuState"] = MainMenuState;
MainMenuState.__name__ = "MainMenuState";
MainMenuState.__super__ = MusicBeatState;
MainMenuState.prototype = $extend(MusicBeatState.prototype,{
	curSelected: null
	,menuItems: null
	,optionShit: null
	,magenta: null
	,camFollow: null
	,create: function() {
		this.transIn = flixel_addons_transition_FlxTransitionableState.defaultTransIn;
		this.transOut = flixel_addons_transition_FlxTransitionableState.defaultTransOut;
		this.persistentUpdate = this.persistentDraw = true;
		var bg = new flixel_FlxSprite(-80).loadGraphic(Paths.getPath("images/" + "menuBG" + ".png","IMAGE",null));
		bg.scrollFactor.set_x(0);
		bg.scrollFactor.set_y(0.18);
		bg.setGraphicSize(bg.get_width() * 1.1 | 0);
		bg.updateHitbox();
		bg.screenCenter();
		bg.set_antialiasing(true);
		this.add(bg);
		this.camFollow = new flixel_FlxObject(0,0,1,1);
		this.add(this.camFollow);
		this.magenta = new flixel_FlxSprite(-80).loadGraphic(Paths.getPath("images/" + "menuDesat" + ".png","IMAGE",null));
		this.magenta.scrollFactor.set_x(0);
		this.magenta.scrollFactor.set_y(0.18);
		this.magenta.setGraphicSize(this.magenta.get_width() * 1.1 | 0);
		this.magenta.updateHitbox();
		this.magenta.screenCenter();
		this.magenta.set_visible(false);
		this.magenta.set_antialiasing(true);
		this.magenta.set_color(-167525);
		this.add(this.magenta);
		this.menuItems = new flixel_group_FlxTypedGroup();
		this.add(this.menuItems);
		var library = null;
		var tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "FNF_main_menu_assets" + ".png","IMAGE",library),Paths.getPath("images/" + "FNF_main_menu_assets" + ".xml","TEXT",library));
		var _g = 0;
		var _g1 = this.optionShit.length;
		while(_g < _g1) {
			var i = _g++;
			var menuItem = new flixel_FlxSprite(0,60 + i * 160);
			menuItem.set_frames(tex);
			menuItem.animation.addByPrefix("idle",this.optionShit[i] + " basic",24);
			menuItem.animation.addByPrefix("selected",this.optionShit[i] + " white",24);
			menuItem.animation.play("idle");
			menuItem.ID = i;
			menuItem.screenCenter(flixel_util_FlxAxes.X);
			this.menuItems.add(menuItem);
			menuItem.scrollFactor.set();
			menuItem.set_antialiasing(true);
		}
		flixel_FlxG.camera.follow(this.camFollow,null,0.06);
		var versionShit = new flixel_text_FlxText(5,flixel_FlxG.height - 18,0,"v" + lime_app_Application.current.meta.h["version"] + MainMenuState.BDE,12);
		versionShit.scrollFactor.set();
		versionShit.setFormat("VCR OSD Mono",16,-1,"left",flixel_text_FlxTextBorderStyle.OUTLINE,-16777216);
		this.add(versionShit);
		this.changeItem();
		MusicBeatState.prototype.create.call(this);
	}
	,selectedSomethin: null
	,update: function(elapsed) {
		var _gthis = this;
		if(flixel_FlxG.sound.music._volume < 0.8) {
			var fh = flixel_FlxG.sound.music;
			fh.set_volume(fh._volume + 0.5 * flixel_FlxG.elapsed);
		}
		if(!this.selectedSomethin) {
			if(PlayerSettings.player1.controls._upP.check()) {
				flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
				this.changeItem(-1);
			}
			if(PlayerSettings.player1.controls._downP.check()) {
				flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
				this.changeItem(1);
			}
			if(PlayerSettings.player1.controls._back.check()) {
				var nextState = new TitleState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
			}
			if(PlayerSettings.player1.controls._accept.check()) {
				if(this.optionShit[this.curSelected] == "donate") {
					var prefix = "";
					if(!new EReg("^https?://","").match("https://ninja-muffin24.itch.io/funkin")) {
						prefix = "http://";
					}
					openfl_Lib.getURL(new openfl_net_URLRequest(prefix + "https://ninja-muffin24.itch.io/funkin"),"_blank");
				} else {
					this.selectedSomethin = true;
					flixel_FlxG.sound.play(Paths.sound("confirmMenu"));
					flixel_effects_FlxFlicker.flicker(this.magenta,1.1,0.15,false);
					this.menuItems.forEach(function(spr) {
						if(_gthis.curSelected != spr.ID) {
							flixel_tweens_FlxTween.tween(spr,{ alpha : 0},0.4,{ ease : flixel_tweens_FlxEase.quadOut, onComplete : function(twn) {
								spr.kill();
							}});
						} else {
							flixel_effects_FlxFlicker.flicker(spr,1,0.06,false,false,function(flick) {
								var daChoice = _gthis.optionShit[_gthis.curSelected];
								switch(daChoice) {
								case "freeplay":
									var nextState = new FreeplayState();
									if(flixel_FlxG.game._state.switchTo(nextState)) {
										flixel_FlxG.game._requestedState = nextState;
									}
									haxe_Log.trace("Freeplay Menu Selected",{ fileName : "source/MainMenuState.hx", lineNumber : 178, className : "MainMenuState", methodName : "update"});
									break;
								case "options":
									flixel_addons_transition_FlxTransitionableState.skipNextTransIn = false;
									flixel_addons_transition_FlxTransitionableState.skipNextTransOut = false;
									var nextState = new OptionsMenu();
									if(flixel_FlxG.game._state.switchTo(nextState)) {
										flixel_FlxG.game._requestedState = nextState;
									}
									break;
								case "story mode":
									var nextState = new StoryMenuState();
									if(flixel_FlxG.game._state.switchTo(nextState)) {
										flixel_FlxG.game._requestedState = nextState;
									}
									haxe_Log.trace("Story Menu Selected",{ fileName : "source/MainMenuState.hx", lineNumber : 174, className : "MainMenuState", methodName : "update"});
									break;
								}
							});
						}
					});
				}
			}
		}
		MusicBeatState.prototype.update.call(this,elapsed);
		this.menuItems.forEach(function(spr) {
			spr.screenCenter(flixel_util_FlxAxes.X);
		});
	}
	,changeItem: function(huh) {
		if(huh == null) {
			huh = 0;
		}
		var _gthis = this;
		this.curSelected += huh;
		if(this.curSelected >= this.menuItems.length) {
			this.curSelected = 0;
		}
		if(this.curSelected < 0) {
			this.curSelected = this.menuItems.length - 1;
		}
		this.menuItems.forEach(function(spr) {
			spr.animation.play("idle");
			if(spr.ID == _gthis.curSelected) {
				spr.animation.play("selected");
				_gthis.camFollow.setPosition(spr.getGraphicMidpoint().x,spr.getGraphicMidpoint().y);
			}
			spr.updateHitbox();
		});
	}
	,__class__: MainMenuState
});
var ManifestResources = function() { };
$hxClasses["ManifestResources"] = ManifestResources;
ManifestResources.__name__ = "ManifestResources";
ManifestResources.preloadLibraries = null;
ManifestResources.preloadLibraryNames = null;
ManifestResources.rootPath = null;
ManifestResources.init = function(config) {
	ManifestResources.preloadLibraries = [];
	ManifestResources.preloadLibraryNames = [];
	ManifestResources.rootPath = null;
	if(config != null && Object.prototype.hasOwnProperty.call(config,"rootPath")) {
		ManifestResources.rootPath = Reflect.field(config,"rootPath");
	}
	if(ManifestResources.rootPath == null) {
		ManifestResources.rootPath = "./";
	}
	openfl_text_Font.registerFont(_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf);
	openfl_text_Font.registerFont(_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf);
	openfl_text_Font.registerFont(_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf);
	openfl_text_Font.registerFont(_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf);
	var bundle;
	var v = ManifestResources.rootPath + "manifest/songs.json";
	lime_utils_Assets.libraryPaths.h["songs"] = v;
	var v = ManifestResources.rootPath + "manifest/shared.json";
	lime_utils_Assets.libraryPaths.h["shared"] = v;
	var v = ManifestResources.rootPath + "manifest/tutorial.json";
	lime_utils_Assets.libraryPaths.h["tutorial"] = v;
	var v = ManifestResources.rootPath + "manifest/week1.json";
	lime_utils_Assets.libraryPaths.h["week1"] = v;
	var v = ManifestResources.rootPath + "manifest/week2.json";
	lime_utils_Assets.libraryPaths.h["week2"] = v;
	var v = ManifestResources.rootPath + "manifest/week3.json";
	lime_utils_Assets.libraryPaths.h["week3"] = v;
	var v = ManifestResources.rootPath + "manifest/week4.json";
	lime_utils_Assets.libraryPaths.h["week4"] = v;
	var v = ManifestResources.rootPath + "manifest/week5.json";
	lime_utils_Assets.libraryPaths.h["week5"] = v;
	var v = ManifestResources.rootPath + "manifest/week6.json";
	lime_utils_Assets.libraryPaths.h["week6"] = v;
	var v = ManifestResources.rootPath + "manifest/week7.json";
	lime_utils_Assets.libraryPaths.h["week7"] = v;
	var data = "{\"name\":null,\"assets\":\"aoy4:pathy43:assets%2Fdata%2Fblammed%2Fblammed-easy.jsony4:sizei26016y4:typey4:TEXTy2:idR1y7:preloadtgoR0y43:assets%2Fdata%2Fblammed%2Fblammed-hard.jsonR2i35763R3R4R5R7R6tgoR0y38:assets%2Fdata%2Fblammed%2Fblammed.jsonR2i29758R3R4R5R8R6tgoR0y43:assets%2Fdata%2Fbopeebo%2Fbopeebo-easy.jsonR2i4373R3R4R5R9R6tgoR0y43:assets%2Fdata%2Fbopeebo%2Fbopeebo-hard.jsonR2i4375R3R4R5R10R6tgoR0y38:assets%2Fdata%2Fbopeebo%2Fbopeebo.jsonR2i4373R3R4R5R11R6tgoR0y33:assets%2Fdata%2FcharacterList.txtR2i197R3R4R5R12R6tgoR0y39:assets%2Fdata%2Fcocoa%2Fcocoa-easy.jsonR2i18245R3R4R5R13R6tgoR0y39:assets%2Fdata%2Fcocoa%2Fcocoa-hard.jsonR2i22841R3R4R5R14R6tgoR0y34:assets%2Fdata%2Fcocoa%2Fcocoa.jsonR2i20141R3R4R5R15R6tgoR0y28:assets%2Fdata%2Fcontrols.txtR2i324R3R4R5R16R6tgoR0y47:assets%2Fdata%2Fdadbattle%2Fdadbattle-easy.jsonR2i18768R3R4R5R17R6tgoR0y47:assets%2Fdata%2Fdadbattle%2Fdadbattle-hard.jsonR2i23296R3R4R5R18R6tgoR0y42:assets%2Fdata%2Fdadbattle%2Fdadbattle.jsonR2i20149R3R4R5R19R6tgoR0y34:assets%2Fdata%2Fdata-goes-here.txtR2zR3R4R5R20R6tgoR0y41:assets%2Fdata%2Feggnog%2Feggnog-easy.jsonR2i21848R3R4R5R21R6tgoR0y41:assets%2Fdata%2Feggnog%2Feggnog-hard.jsonR2i141118R3R4R5R22R6tgoR0y36:assets%2Fdata%2Feggnog%2Feggnog.jsonR2i23782R3R4R5R23R6tgoR0y41:assets%2Fdata%2Ffading%2Ffading-easy.jsonR2i19104R3R4R5R24R6tgoR0y41:assets%2Fdata%2Ffading%2Ffading-hard.jsonR2i18981R3R4R5R25R6tgoR0y36:assets%2Fdata%2Ffading%2Ffading.jsonR2i19104R3R4R5R26R6tgoR0y43:assets%2Fdata%2Ffading%2FfadingDialogue.txtR2i434R3R4R5R27R6tgoR0y36:assets%2Fdata%2FfreeplaySonglist.txtR2i8R3R4R5R28R6tgoR0y39:assets%2Fdata%2Ffresh%2Ffresh-easy.jsonR2i11764R3R4R5R29R6tgoR0y39:assets%2Fdata%2Ffresh%2Ffresh-hard.jsonR2i12789R3R4R5R30R6tgoR0y34:assets%2Fdata%2Ffresh%2Ffresh.jsonR2i12560R3R4R5R31R6tgoR0y45:assets%2Fdata%2Fheadache%2Fheadache-easy.jsonR2i13937R3R4R5R32R6tgoR0y45:assets%2Fdata%2Fheadache%2Fheadache-hard.jsonR2i14129R3R4R5R33R6tgoR0y40:assets%2Fdata%2Fheadache%2Fheadache.jsonR2i13814R3R4R5R34R6tgoR0y47:assets%2Fdata%2Fheadache%2FheadacheDialogue.txtR2i486R3R4R5R35R6tgoR0y37:assets%2Fdata%2Fhigh%2Fhigh-easy.jsonR2i22690R3R4R5R36R6tgoR0y37:assets%2Fdata%2Fhigh%2Fhigh-hard.jsonR2i26047R3R4R5R37R6tgoR0y32:assets%2Fdata%2Fhigh%2Fhigh.jsonR2i24257R3R4R5R38R6tgoR0y29:assets%2Fdata%2FintroText.txtR2i1260R3R4R5R39R6tgoR0y29:assets%2Fdata%2Fmain-view.xmlR2i123R3R4R5R40R6tgoR0y37:assets%2Fdata%2Fmilf%2Fmilf-easy.jsonR2i44166R3R4R5R41R6tgoR0y37:assets%2Fdata%2Fmilf%2Fmilf-hard.jsonR2i52704R3R4R5R42R6tgoR0y32:assets%2Fdata%2Fmilf%2Fmilf.jsonR2i46976R3R4R5R43R6tgoR0y43:assets%2Fdata%2Fmonster%2Fmonster-easy.jsonR2i11977R3R4R5R44R6tgoR0y43:assets%2Fdata%2Fmonster%2Fmonster-hard.jsonR2i13965R3R4R5R45R6tgoR0y38:assets%2Fdata%2Fmonster%2Fmonster.jsonR2i13247R3R4R5R46R6tgoR0y41:assets%2Fdata%2Fnerves%2Fnerves-easy.jsonR2i11670R3R4R5R47R6tgoR0y41:assets%2Fdata%2Fnerves%2Fnerves-hard.jsonR2i12393R3R4R5R48R6tgoR0y36:assets%2Fdata%2Fnerves%2Fnerves.jsonR2i11670R3R4R5R49R6tgoR0y43:assets%2Fdata%2Fnerves%2FnervesDialogue.txtR2i356R3R4R5R50R6tgoR0y41:assets%2Fdata%2Fphilly%2Fphilly-easy.jsonR2i25122R3R4R5R51R6tgoR0y41:assets%2Fdata%2Fphilly%2Fphilly-hard.jsonR2i37051R3R4R5R52R6tgoR0y36:assets%2Fdata%2Fphilly%2Fphilly.jsonR2i29479R3R4R5R53R6tgoR0y37:assets%2Fdata%2Fpico%2Fpico-easy.jsonR2i16714R3R4R5R54R6tgoR0y37:assets%2Fdata%2Fpico%2Fpico-hard.jsonR2i19717R3R4R5R55R6tgoR0y32:assets%2Fdata%2Fpico%2Fpico.jsonR2i18465R3R4R5R56R6tgoR0y43:assets%2Fdata%2Frelease%2Frelease-easy.jsonR2i18663R3R4R5R57R6tgoR0y43:assets%2Fdata%2Frelease%2Frelease-hard.jsonR2i20639R3R4R5R58R6tgoR0y38:assets%2Fdata%2Frelease%2Frelease.jsonR2i18540R3R4R5R59R6tgoR0y45:assets%2Fdata%2Frelease%2FreleaseDialogue.txtR2i375R3R4R5R60R6tgoR0y34:assets%2Fdata%2Fridge%2Fridge.jsonR2i22981R3R4R5R61R6tgoR0y39:assets%2Fdata%2Froses%2Froses-easy.jsonR2i18012R3R4R5R62R6tgoR0y39:assets%2Fdata%2Froses%2Froses-hard.jsonR2i22812R3R4R5R63R6tgoR0y34:assets%2Fdata%2Froses%2Froses.jsonR2i20774R3R4R5R64R6tgoR0y41:assets%2Fdata%2Froses%2FrosesDialogue.txtR2i153R3R4R5R65R6tgoR0y55:assets%2Fdata%2Fsatin-panties%2Fsatin-panties-easy.jsonR2i27379R3R4R5R66R6tgoR0y55:assets%2Fdata%2Fsatin-panties%2Fsatin-panties-hard.jsonR2i36327R3R4R5R67R6tgoR0y50:assets%2Fdata%2Fsatin-panties%2Fsatin-panties.jsonR2i31463R3R4R5R68R6tgoR0y41:assets%2Fdata%2Fsenpai%2Fsenpai-easy.jsonR2i30618R3R4R5R69R6tgoR0y41:assets%2Fdata%2Fsenpai%2Fsenpai-hard.jsonR2i34573R3R4R5R70R6tgoR0y36:assets%2Fdata%2Fsenpai%2Fsenpai.jsonR2i32889R3R4R5R71R6tgoR0y43:assets%2Fdata%2Fsenpai%2FsenpaiDialogue.txtR2i162R3R4R5R72R6tgoR0y34:assets%2Fdata%2Fsmash%2Fsmash.jsonR2i102R3R4R5R73R6tgoR0y39:assets%2Fdata%2Fsouth%2Fsouth-easy.jsonR2i20031R3R4R5R74R6tgoR0y39:assets%2Fdata%2Fsouth%2Fsouth-hard.jsonR2i22927R3R4R5R75R6tgoR0y34:assets%2Fdata%2Fsouth%2Fsouth.jsonR2i22238R3R4R5R76R6tgoR0y33:assets%2Fdata%2FspecialThanks.txtR2i300R3R4R5R77R6tgoR0y45:assets%2Fdata%2Fspookeez%2Fspookeez-easy.jsonR2i19092R3R4R5R78R6tgoR0y45:assets%2Fdata%2Fspookeez%2Fspookeez-hard.jsonR2i21777R3R4R5R79R6tgoR0y40:assets%2Fdata%2Fspookeez%2Fspookeez.jsonR2i20289R3R4R5R80R6tgoR0y41:assets%2Fdata%2Fthorns%2Fthorns-easy.jsonR2i34656R3R4R5R81R6tgoR0y41:assets%2Fdata%2Fthorns%2Fthorns-hard.jsonR2i47868R3R4R5R82R6tgoR0y36:assets%2Fdata%2Fthorns%2Fthorns.jsonR2i40667R3R4R5R83R6tgoR0y43:assets%2Fdata%2Fthorns%2FthornsDialogue.txtR2i305R3R4R5R84R6tgoR0y45:assets%2Fdata%2Ftutorial%2Ftutorial-easy.jsonR2i5739R3R4R5R85R6tgoR0y45:assets%2Fdata%2Ftutorial%2Ftutorial-hard.jsonR2i6335R3R4R5R86R6tgoR0y40:assets%2Fdata%2Ftutorial%2Ftutorial.jsonR2i5739R3R4R5R87R6tgoR0y63:assets%2Fdata%2Fwinter-horrorland%2Fwinter-horrorland-easy.jsonR2i133150R3R4R5R88R6tgoR0y63:assets%2Fdata%2Fwinter-horrorland%2Fwinter-horrorland-hard.jsonR2i171649R3R4R5R89R6tgoR0y58:assets%2Fdata%2Fwinter-horrorland%2Fwinter-horrorland.jsonR2i148926R3R4R5R90R6tgoR0y30:assets%2Fimages%2Falphabet.pngR2i139836R3y5:IMAGER5R91R6tgoR0y30:assets%2Fimages%2Falphabet.xmlR2i39069R3R4R5R93R6tgoR0y45:assets%2Fimages%2Fcampaign_menu_UI_assets.pngR2i27171R3R92R5R94R6tgoR0y45:assets%2Fimages%2Fcampaign_menu_UI_assets.xmlR2i1893R3R4R5R95R6tgoR0y49:assets%2Fimages%2Fcampaign_menu_UI_characters.pngR2i2828164R3R92R5R96R6tgoR0y49:assets%2Fimages%2Fcampaign_menu_UI_characters.xmlR2i23905R3R4R5R97R6tgoR0y42:assets%2Fimages%2FFNF_main_menu_assets.pngR2i281298R3R92R5R98R6tgoR0y42:assets%2Fimages%2FFNF_main_menu_assets.xmlR2i4755R3R4R5R99R6tgoR0y34:assets%2Fimages%2FgfDanceTitle.pngR2i4387526R3R92R5R100R6tgoR0y34:assets%2Fimages%2FgfDanceTitle.xmlR2i5680R3R4R5R101R6tgoR0y30:assets%2Fimages%2FiconGrid.pngR2i244806R3R92R5R102R6tgoR0y29:assets%2Fimages%2Floading.pngR2i10740R3R92R5R103R6tgoR0y26:assets%2Fimages%2Flogo.pngR2i86924R3R92R5R104R6tgoR0y32:assets%2Fimages%2FlogoBumpin.pngR2i1197071R3R92R5R105R6tgoR0y32:assets%2Fimages%2FlogoBumpin.xmlR2i2192R3R4R5R106R6tgoR0y28:assets%2Fimages%2FmenuBG.pngR2i455517R3R92R5R107R6tgoR0y32:assets%2Fimages%2FmenuBGBlue.pngR2i469838R3R92R5R108R6tgoR0y35:assets%2Fimages%2FmenuBGMagenta.pngR2i444145R3R92R5R109R6tgoR0y31:assets%2Fimages%2FmenuDesat.pngR2i193048R3R92R5R110R6tgoR0y37:assets%2Fimages%2Fnewgrounds_logo.pngR2i57747R3R92R5R111R6tgoR0y26:assets%2Fimages%2Fnum0.pngR2i3738R3R92R5R112R6tgoR0y26:assets%2Fimages%2Fnum1.pngR2i3390R3R92R5R113R6tgoR0y26:assets%2Fimages%2Fnum2.pngR2i3990R3R92R5R114R6tgoR0y26:assets%2Fimages%2Fnum3.pngR2i4022R3R92R5R115R6tgoR0y26:assets%2Fimages%2Fnum4.pngR2i3989R3R92R5R116R6tgoR0y26:assets%2Fimages%2Fnum5.pngR2i4113R3R92R5R117R6tgoR0y26:assets%2Fimages%2Fnum6.pngR2i4181R3R92R5R118R6tgoR0y26:assets%2Fimages%2Fnum7.pngR2i3692R3R92R5R119R6tgoR0y26:assets%2Fimages%2Fnum8.pngR2i3914R3R92R5R120R6tgoR0y26:assets%2Fimages%2Fnum9.pngR2i3687R3R92R5R121R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek0.pngR2i7056R3R92R5R122R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek1.pngR2i6261R3R92R5R123R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek2.pngR2i6517R3R92R5R124R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek3.pngR2i7148R3R92R5R125R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek4.pngR2i6262R3R92R5R126R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek5.pngR2i6440R3R92R5R127R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek6.pngR2i6998R3R92R5R128R6tgoR0y39:assets%2Fimages%2Fstorymenu%2Fweek7.pngR2i8263R3R92R5R129R6tgoR0y32:assets%2Fimages%2FtitleEnter.pngR2i1449202R3R92R5R130R6tgoR0y32:assets%2Fimages%2FtitleEnter.xmlR2i4875R3R4R5R131R6tgoR2i2309657R3y5:MUSICR5y31:assets%2Fmusic%2FfreakyMenu.mp3y9:pathGroupaR133hR6tgoR2i17762R3R132R5y32:assets%2Fsounds%2FcancelMenu.mp3R134aR135hR6tgoR2i91950R3R132R5y33:assets%2Fsounds%2FconfirmMenu.mp3R134aR136hR6tgoR2i17762R3R132R5y32:assets%2Fsounds%2FscrollMenu.mp3R134aR137hR6tgoR0y48:mods%2FintroMod%2F_append%2Fdata%2FintroText.txtR2i20R3R4R5R138goR0y18:mods%2FmodList.txtR2i8R3R4R5R139goR0y17:mods%2Freadme.txtR2i90R3R4R5R140goR0y21:do%20NOT%20readme.txtR2i4326R3R4R5R141R6tgoR0y13:changelog.txtR2i7730R3R4R5R142R6tgoR0y34:assets%2Ffonts%2Ffonts-go-here.txtR2zR3R4R5R143R6tgoR2i14656R3y4:FONTy9:classNamey31:__ASSET__assets_fonts_pixel_otfR5y26:assets%2Ffonts%2Fpixel.otfR6tgoR2i75864R3R144R145y29:__ASSET__assets_fonts_vcr_ttfR5y24:assets%2Ffonts%2Fvcr.ttfR6tgoR2i2114R3R132R5y26:flixel%2Fsounds%2Fbeep.mp3R134aR150y26:flixel%2Fsounds%2Fbeep.ogghR6tgoR2i39706R3R132R5y28:flixel%2Fsounds%2Fflixel.mp3R134aR152y28:flixel%2Fsounds%2Fflixel.ogghR6tgoR2i5794R3y5:SOUNDR5R151R134aR150R151hgoR2i33629R3R154R5R153R134aR152R153hgoR2i15744R3R144R145y35:__ASSET__flixel_fonts_nokiafc22_ttfR5y30:flixel%2Ffonts%2Fnokiafc22.ttfR6tgoR2i29724R3R144R145y36:__ASSET__flixel_fonts_monsterrat_ttfR5y31:flixel%2Ffonts%2Fmonsterrat.ttfR6tgoR0y33:flixel%2Fimages%2Fui%2Fbutton.pngR2i519R3R92R5R159R6tgoR0y36:flixel%2Fimages%2Flogo%2Fdefault.pngR2i3280R3R92R5R160R6tgoR0y34:flixel%2Fflixel-ui%2Fimg%2Fbox.pngR2i912R3R92R5R161R6tgoR0y37:flixel%2Fflixel-ui%2Fimg%2Fbutton.pngR2i433R3R92R5R162R6tgoR0y48:flixel%2Fflixel-ui%2Fimg%2Fbutton_arrow_down.pngR2i446R3R92R5R163R6tgoR0y48:flixel%2Fflixel-ui%2Fimg%2Fbutton_arrow_left.pngR2i459R3R92R5R164R6tgoR0y49:flixel%2Fflixel-ui%2Fimg%2Fbutton_arrow_right.pngR2i511R3R92R5R165R6tgoR0y46:flixel%2Fflixel-ui%2Fimg%2Fbutton_arrow_up.pngR2i493R3R92R5R166R6tgoR0y42:flixel%2Fflixel-ui%2Fimg%2Fbutton_thin.pngR2i247R3R92R5R167R6tgoR0y44:flixel%2Fflixel-ui%2Fimg%2Fbutton_toggle.pngR2i534R3R92R5R168R6tgoR0y40:flixel%2Fflixel-ui%2Fimg%2Fcheck_box.pngR2i922R3R92R5R169R6tgoR0y41:flixel%2Fflixel-ui%2Fimg%2Fcheck_mark.pngR2i946R3R92R5R170R6tgoR0y37:flixel%2Fflixel-ui%2Fimg%2Fchrome.pngR2i253R3R92R5R171R6tgoR0y42:flixel%2Fflixel-ui%2Fimg%2Fchrome_flat.pngR2i212R3R92R5R172R6tgoR0y43:flixel%2Fflixel-ui%2Fimg%2Fchrome_inset.pngR2i192R3R92R5R173R6tgoR0y43:flixel%2Fflixel-ui%2Fimg%2Fchrome_light.pngR2i214R3R92R5R174R6tgoR0y44:flixel%2Fflixel-ui%2Fimg%2Fdropdown_mark.pngR2i156R3R92R5R175R6tgoR0y41:flixel%2Fflixel-ui%2Fimg%2Ffinger_big.pngR2i1724R3R92R5R176R6tgoR0y43:flixel%2Fflixel-ui%2Fimg%2Ffinger_small.pngR2i294R3R92R5R177R6tgoR0y38:flixel%2Fflixel-ui%2Fimg%2Fhilight.pngR2i129R3R92R5R178R6tgoR0y36:flixel%2Fflixel-ui%2Fimg%2Finvis.pngR2i128R3R92R5R179R6tgoR0y41:flixel%2Fflixel-ui%2Fimg%2Fminus_mark.pngR2i136R3R92R5R180R6tgoR0y40:flixel%2Fflixel-ui%2Fimg%2Fplus_mark.pngR2i147R3R92R5R181R6tgoR0y36:flixel%2Fflixel-ui%2Fimg%2Fradio.pngR2i191R3R92R5R182R6tgoR0y40:flixel%2Fflixel-ui%2Fimg%2Fradio_dot.pngR2i153R3R92R5R183R6tgoR0y37:flixel%2Fflixel-ui%2Fimg%2Fswatch.pngR2i185R3R92R5R184R6tgoR0y34:flixel%2Fflixel-ui%2Fimg%2Ftab.pngR2i201R3R92R5R185R6tgoR0y39:flixel%2Fflixel-ui%2Fimg%2Ftab_back.pngR2i210R3R92R5R186R6tgoR0y44:flixel%2Fflixel-ui%2Fimg%2Ftooltip_arrow.pngR2i18509R3R92R5R187R6tgoR0y39:flixel%2Fflixel-ui%2Fxml%2Fdefaults.xmlR2i1263R3R4R5R188R6tgoR0y53:flixel%2Fflixel-ui%2Fxml%2Fdefault_loading_screen.xmlR2i1953R3R4R5R189R6tgoR0y44:flixel%2Fflixel-ui%2Fxml%2Fdefault_popup.xmlR2i1848R3R4R5R190R6tgh\",\"rootPath\":null,\"version\":2,\"libraryArgs\":[],\"libraryType\":null}";
	var manifest = lime_utils_AssetManifest.parse(data,ManifestResources.rootPath);
	var library = lime_utils_AssetLibrary.fromManifest(manifest);
	lime_utils_Assets.registerLibrary("default",library);
	library = lime_utils_Assets.getLibrary("default");
	if(library != null) {
		ManifestResources.preloadLibraries.push(library);
	} else {
		ManifestResources.preloadLibraryNames.push("default");
	}
};
var lime_text_Font = function(name) {
	if(name != null) {
		this.name = name;
	}
	if(!this.__init) {
		if(this.ascender == undefined) {
			this.ascender = 0;
		}
		if(this.descender == undefined) {
			this.descender = 0;
		}
		if(this.height == undefined) {
			this.height = 0;
		}
		if(this.numGlyphs == undefined) {
			this.numGlyphs = 0;
		}
		if(this.underlinePosition == undefined) {
			this.underlinePosition = 0;
		}
		if(this.underlineThickness == undefined) {
			this.underlineThickness = 0;
		}
		if(this.unitsPerEM == undefined) {
			this.unitsPerEM = 0;
		}
		if(this.__fontID != null) {
			if(lime_utils_Assets.isLocal(this.__fontID)) {
				this.__fromBytes(lime_utils_Assets.getBytes(this.__fontID));
			}
		} else if(this.__fontPath != null) {
			this.__fromFile(this.__fontPath);
		}
	}
};
$hxClasses["lime.text.Font"] = lime_text_Font;
lime_text_Font.__name__ = "lime.text.Font";
lime_text_Font.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var font = new lime_text_Font();
	font.__fromBytes(bytes);
	return font;
};
lime_text_Font.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var font = new lime_text_Font();
	font.__fromFile(path);
	return font;
};
lime_text_Font.loadFromBytes = function(bytes) {
	return lime_app_Future.withValue(lime_text_Font.fromBytes(bytes));
};
lime_text_Font.loadFromFile = function(path) {
	var request = new lime_net__$HTTPRequest_$lime_$text_$Font();
	return request.load(path).then(function(font) {
		if(font != null) {
			return lime_app_Future.withValue(font);
		} else {
			return lime_app_Future.withError("");
		}
	});
};
lime_text_Font.loadFromName = function(path) {
	var font = new lime_text_Font();
	return font.__loadFromName(path);
};
lime_text_Font.__measureFontNode = function(fontFamily) {
	var node = window.document.createElement("span");
	node.setAttribute("aria-hidden","true");
	var text = window.document.createTextNode("BESbswy");
	node.appendChild(text);
	var style = node.style;
	style.display = "block";
	style.position = "absolute";
	style.top = "-9999px";
	style.left = "-9999px";
	style.fontSize = "300px";
	style.width = "auto";
	style.height = "auto";
	style.lineHeight = "normal";
	style.margin = "0";
	style.padding = "0";
	style.fontVariant = "normal";
	style.whiteSpace = "nowrap";
	style.fontFamily = fontFamily;
	window.document.body.appendChild(node);
	return node;
};
lime_text_Font.prototype = {
	ascender: null
	,descender: null
	,height: null
	,name: null
	,numGlyphs: null
	,src: null
	,underlinePosition: null
	,underlineThickness: null
	,unitsPerEM: null
	,__fontID: null
	,__fontPath: null
	,__init: null
	,decompose: function() {
		return null;
	}
	,getGlyph: function(character) {
		return -1;
	}
	,getGlyphs: function(characters) {
		if(characters == null) {
			characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^`'\"/\\&*()[]{}<>|:;_-+=?,. ";
		}
		return null;
	}
	,getGlyphMetrics: function(glyph) {
		return null;
	}
	,renderGlyph: function(glyph,fontSize) {
		return null;
	}
	,renderGlyphs: function(glyphs,fontSize) {
		return null;
	}
	,__copyFrom: function(other) {
		if(other != null) {
			this.ascender = other.ascender;
			this.descender = other.descender;
			this.height = other.height;
			this.name = other.name;
			this.numGlyphs = other.numGlyphs;
			this.src = other.src;
			this.underlinePosition = other.underlinePosition;
			this.underlineThickness = other.underlineThickness;
			this.unitsPerEM = other.unitsPerEM;
			this.__fontID = other.__fontID;
			this.__fontPath = other.__fontPath;
			this.__init = true;
		}
	}
	,__fromBytes: function(bytes) {
		this.__fontPath = null;
	}
	,__fromFile: function(path) {
		this.__fontPath = path;
	}
	,__initializeSource: function() {
		this.__init = true;
	}
	,__loadFromName: function(name) {
		var _gthis = this;
		var promise = new lime_app_Promise();
		this.name = name;
		var userAgent = $global.navigator.userAgent.toLowerCase();
		var isSafari = userAgent.indexOf(" safari/") >= 0 && userAgent.indexOf(" chrome/") < 0;
		var isUIWebView = new EReg("(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)","i").match(userAgent);
		if(!isSafari && !isUIWebView && (window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load)))) {
			window.document.fonts.load("1em '" + name + "'").then(function(_) {
				promise.complete(_gthis);
			},function(_) {
				lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 513, className : "lime.text.Font", methodName : "__loadFromName"});
				promise.complete(_gthis);
			});
		} else {
			var node1 = lime_text_Font.__measureFontNode("'" + name + "', sans-serif");
			var node2 = lime_text_Font.__measureFontNode("'" + name + "', serif");
			var width1 = node1.offsetWidth;
			var width2 = node2.offsetWidth;
			var interval = -1;
			var timeout = 3000;
			var intervalLength = 50;
			var intervalCount = 0;
			var loaded;
			var timeExpired;
			var checkFont = function() {
				intervalCount += 1;
				loaded = node1.offsetWidth != width1 || node2.offsetWidth != width2;
				timeExpired = intervalCount * intervalLength >= timeout;
				if(loaded || timeExpired) {
					window.clearInterval(interval);
					node1.parentNode.removeChild(node1);
					node2.parentNode.removeChild(node2);
					node1 = null;
					node2 = null;
					if(timeExpired) {
						lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 548, className : "lime.text.Font", methodName : "__loadFromName"});
					}
					promise.complete(_gthis);
				}
			};
			interval = window.setInterval(checkFont,intervalLength);
		}
		return promise.future;
	}
	,__setSize: function(size) {
	}
	,__class__: lime_text_Font
};
var _$_$ASSET_$_$assets_$fonts_$pixel_$otf = $hx_exports["__ASSET__assets_fonts_pixel_otf"] = function() {
	this.ascender = 1125;
	this.descender = -250;
	this.height = 1375;
	this.numGlyphs = 262;
	this.underlinePosition = -143;
	this.underlineThickness = 20;
	this.unitsPerEM = 1000;
	this.name = "Pixel Arial 11 Bold";
	lime_text_Font.call(this);
};
$hxClasses["__ASSET__assets_fonts_pixel_otf"] = _$_$ASSET_$_$assets_$fonts_$pixel_$otf;
_$_$ASSET_$_$assets_$fonts_$pixel_$otf.__name__ = "__ASSET__assets_fonts_pixel_otf";
_$_$ASSET_$_$assets_$fonts_$pixel_$otf.__super__ = lime_text_Font;
_$_$ASSET_$_$assets_$fonts_$pixel_$otf.prototype = $extend(lime_text_Font.prototype,{
	__class__: _$_$ASSET_$_$assets_$fonts_$pixel_$otf
});
var _$_$ASSET_$_$assets_$fonts_$vcr_$ttf = $hx_exports["__ASSET__assets_fonts_vcr_ttf"] = function() {
	this.ascender = 1800;
	this.descender = 0;
	this.height = 2000;
	this.numGlyphs = 204;
	this.underlinePosition = -292;
	this.underlineThickness = 150;
	this.unitsPerEM = 2048;
	this.name = "VCR OSD Mono";
	lime_text_Font.call(this);
};
$hxClasses["__ASSET__assets_fonts_vcr_ttf"] = _$_$ASSET_$_$assets_$fonts_$vcr_$ttf;
_$_$ASSET_$_$assets_$fonts_$vcr_$ttf.__name__ = "__ASSET__assets_fonts_vcr_ttf";
_$_$ASSET_$_$assets_$fonts_$vcr_$ttf.__super__ = lime_text_Font;
_$_$ASSET_$_$assets_$fonts_$vcr_$ttf.prototype = $extend(lime_text_Font.prototype,{
	__class__: _$_$ASSET_$_$assets_$fonts_$vcr_$ttf
});
var _$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf = $hx_exports["__ASSET__flixel_fonts_nokiafc22_ttf"] = function() {
	this.ascender = 2048;
	this.descender = -512;
	this.height = 2816;
	this.numGlyphs = 172;
	this.underlinePosition = -640;
	this.underlineThickness = 256;
	this.unitsPerEM = 2048;
	this.name = "Nokia Cellphone FC Small";
	lime_text_Font.call(this);
};
$hxClasses["__ASSET__flixel_fonts_nokiafc22_ttf"] = _$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf;
_$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf.__name__ = "__ASSET__flixel_fonts_nokiafc22_ttf";
_$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf.__super__ = lime_text_Font;
_$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf.prototype = $extend(lime_text_Font.prototype,{
	__class__: _$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf
});
var _$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf = $hx_exports["__ASSET__flixel_fonts_monsterrat_ttf"] = function() {
	this.ascender = 968;
	this.descender = -251;
	this.height = 1219;
	this.numGlyphs = 263;
	this.underlinePosition = -150;
	this.underlineThickness = 50;
	this.unitsPerEM = 1000;
	this.name = "Monsterrat";
	lime_text_Font.call(this);
};
$hxClasses["__ASSET__flixel_fonts_monsterrat_ttf"] = _$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf;
_$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf.__name__ = "__ASSET__flixel_fonts_monsterrat_ttf";
_$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf.__super__ = lime_text_Font;
_$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf.prototype = $extend(lime_text_Font.prototype,{
	__class__: _$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf
});
var openfl_text_Font = function(name) {
	lime_text_Font.call(this,name);
};
$hxClasses["openfl.text.Font"] = openfl_text_Font;
openfl_text_Font.__name__ = "openfl.text.Font";
openfl_text_Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) {
		enumerateDeviceFonts = false;
	}
	return openfl_text_Font.__registeredFonts;
};
openfl_text_Font.fromBytes = function(bytes) {
	var font = new openfl_text_Font();
	font.__fromBytes(openfl_utils_ByteArray.toBytes(bytes));
	return font;
};
openfl_text_Font.fromFile = function(path) {
	var font = new openfl_text_Font();
	font.__fromFile(path);
	return font;
};
openfl_text_Font.loadFromBytes = function(bytes) {
	return lime_text_Font.loadFromBytes(openfl_utils_ByteArray.toBytes(bytes)).then(function(limeFont) {
		var font = new openfl_text_Font();
		font.__fromLimeFont(limeFont);
		return lime_app_Future.withValue(font);
	});
};
openfl_text_Font.loadFromFile = function(path) {
	return lime_text_Font.loadFromFile(path).then(function(limeFont) {
		var font = new openfl_text_Font();
		font.__fromLimeFont(limeFont);
		return lime_app_Future.withValue(font);
	});
};
openfl_text_Font.loadFromName = function(path) {
	return lime_text_Font.loadFromName(path).then(function(limeFont) {
		var font = new openfl_text_Font();
		font.__fromLimeFont(limeFont);
		return lime_app_Future.withValue(font);
	});
};
openfl_text_Font.registerFont = function(font) {
	var instance = null;
	if(js_Boot.getClass(font) == null) {
		instance = js_Boot.__cast(Type.createInstance(font,[]) , openfl_text_Font);
	} else {
		instance = js_Boot.__cast(font , openfl_text_Font);
	}
	if(instance != null) {
		openfl_text_Font.__registeredFonts.push(instance);
		openfl_text_Font.__fontByName.h[instance.name] = instance;
	}
};
openfl_text_Font.__super__ = lime_text_Font;
openfl_text_Font.prototype = $extend(lime_text_Font.prototype,{
	fontStyle: null
	,fontType: null
	,__initialized: null
	,__fromLimeFont: function(font) {
		this.__copyFrom(font);
	}
	,__initialize: function() {
		return this.__initialized;
	}
	,get_fontName: function() {
		return this.name;
	}
	,set_fontName: function(value) {
		return this.name = value;
	}
	,__class__: openfl_text_Font
	,__properties__: {set_fontName:"set_fontName",get_fontName:"get_fontName"}
});
var _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf = $hx_exports["__ASSET__OPENFL__assets_fonts_pixel_otf"] = function() {
	this.__fromLimeFont(new _$_$ASSET_$_$assets_$fonts_$pixel_$otf());
	openfl_text_Font.call(this);
};
$hxClasses["__ASSET__OPENFL__assets_fonts_pixel_otf"] = _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf;
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf.__name__ = "__ASSET__OPENFL__assets_fonts_pixel_otf";
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf.__super__ = openfl_text_Font;
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf.prototype = $extend(openfl_text_Font.prototype,{
	__class__: _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$pixel_$otf
});
var _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf = $hx_exports["__ASSET__OPENFL__assets_fonts_vcr_ttf"] = function() {
	this.__fromLimeFont(new _$_$ASSET_$_$assets_$fonts_$vcr_$ttf());
	openfl_text_Font.call(this);
};
$hxClasses["__ASSET__OPENFL__assets_fonts_vcr_ttf"] = _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf;
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf.__name__ = "__ASSET__OPENFL__assets_fonts_vcr_ttf";
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf.__super__ = openfl_text_Font;
_$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf.prototype = $extend(openfl_text_Font.prototype,{
	__class__: _$_$ASSET_$_$OPENFL_$_$assets_$fonts_$vcr_$ttf
});
var _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf = $hx_exports["__ASSET__OPENFL__flixel_fonts_nokiafc22_ttf"] = function() {
	this.__fromLimeFont(new _$_$ASSET_$_$flixel_$fonts_$nokiafc22_$ttf());
	openfl_text_Font.call(this);
};
$hxClasses["__ASSET__OPENFL__flixel_fonts_nokiafc22_ttf"] = _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf;
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf.__name__ = "__ASSET__OPENFL__flixel_fonts_nokiafc22_ttf";
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf.__super__ = openfl_text_Font;
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf.prototype = $extend(openfl_text_Font.prototype,{
	__class__: _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$nokiafc22_$ttf
});
var _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf = $hx_exports["__ASSET__OPENFL__flixel_fonts_monsterrat_ttf"] = function() {
	this.__fromLimeFont(new _$_$ASSET_$_$flixel_$fonts_$monsterrat_$ttf());
	openfl_text_Font.call(this);
};
$hxClasses["__ASSET__OPENFL__flixel_fonts_monsterrat_ttf"] = _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf;
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf.__name__ = "__ASSET__OPENFL__flixel_fonts_monsterrat_ttf";
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf.__super__ = openfl_text_Font;
_$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf.prototype = $extend(openfl_text_Font.prototype,{
	__class__: _$_$ASSET_$_$OPENFL_$_$flixel_$fonts_$monsterrat_$ttf
});
Math.__name__ = "Math";
var MenuCharacter = function(x,character) {
	if(character == null) {
		character = "bf";
	}
	flixel_FlxSprite.call(this,x);
	this.character = character;
	var library = null;
	var tex = flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "campaign_menu_UI_characters" + ".png","IMAGE",library),Paths.getPath("images/" + "campaign_menu_UI_characters" + ".xml","TEXT",library));
	this.set_frames(tex);
	this.animation.addByPrefix("bf","BF idle dance white",24);
	this.animation.addByPrefix("bfConfirm","BF HEY!!",24,false);
	this.animation.addByPrefix("gf","GF Dancing Beat WHITE",24);
	this.animation.addByPrefix("dad","Dad idle dance BLACK LINE",24);
	this.animation.addByPrefix("spooky","spooky dance idle BLACK LINES",24);
	this.animation.addByPrefix("pico","Pico Idle Dance",24);
	this.animation.addByPrefix("mom","Mom Idle BLACK LINES",24);
	this.animation.addByPrefix("parents-christmas","Parent Christmas Idle",24);
	this.animation.addByPrefix("senpai","SENPAI idle Black Lines",24);
	this.animation.addByPrefix("garcello","garcello idle",24);
	this.animation.play(character);
	this.updateHitbox();
};
$hxClasses["MenuCharacter"] = MenuCharacter;
MenuCharacter.__name__ = "MenuCharacter";
MenuCharacter.__super__ = flixel_FlxSprite;
MenuCharacter.prototype = $extend(flixel_FlxSprite.prototype,{
	character: null
	,__class__: MenuCharacter
});
var MenuItem = function(x,y,weekNum) {
	if(weekNum == null) {
		weekNum = 0;
	}
	this.fakeFramerate = Math.round(1 / flixel_FlxG.elapsed / 10);
	this.isFlashing = false;
	this.flashingInt = 0;
	this.targetY = 0;
	flixel_group_FlxTypedSpriteGroup.call(this,x,y);
	this.week = new flixel_FlxSprite().loadGraphic(Paths.getPath("images/" + ("storymenu/week" + weekNum) + ".png","IMAGE",null));
	this.add(this.week);
};
$hxClasses["MenuItem"] = MenuItem;
MenuItem.__name__ = "MenuItem";
MenuItem.__super__ = flixel_group_FlxTypedSpriteGroup;
MenuItem.prototype = $extend(flixel_group_FlxTypedSpriteGroup.prototype,{
	targetY: null
	,week: null
	,flashingInt: null
	,isFlashing: null
	,startFlashing: function() {
		this.isFlashing = true;
	}
	,fakeFramerate: null
	,update: function(elapsed) {
		flixel_group_FlxTypedSpriteGroup.prototype.update.call(this,elapsed);
		var a = this.y;
		this.set_y(a + 0.17 * (this.targetY * 120 + 480 - a));
		if(this.isFlashing) {
			this.flashingInt += 1;
		}
		if(this.flashingInt % this.fakeFramerate >= Math.floor(this.fakeFramerate / 2)) {
			this.week.set_color(-13369345);
		} else {
			this.week.set_color(-1);
		}
	}
	,__class__: MenuItem
});
var flixel_util_FlxTypedSignal = {};
flixel_util_FlxTypedSignal.__properties__ = {get_dispatch:"get_dispatch"};
flixel_util_FlxTypedSignal.add = function(this1,listener) {
	this1.add(listener);
};
flixel_util_FlxTypedSignal.addOnce = function(this1,listener) {
	this1.addOnce(listener);
};
flixel_util_FlxTypedSignal.remove = function(this1,listener) {
	this1.remove(listener);
};
flixel_util_FlxTypedSignal.has = function(this1,listener) {
	return this1.has(listener);
};
flixel_util_FlxTypedSignal.removeAll = function(this1) {
	this1.removeAll();
};
flixel_util_FlxTypedSignal.get_dispatch = function(this1) {
	return this1.dispatch;
};
flixel_util_FlxTypedSignal.toSignal0 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal0();
};
flixel_util_FlxTypedSignal.toSignal1 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal1();
};
flixel_util_FlxTypedSignal.toSignal2 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal2();
};
flixel_util_FlxTypedSignal.toSignal3 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal3();
};
flixel_util_FlxTypedSignal.toSignal4 = function(signal) {
	return new flixel_util__$FlxSignal_FlxSignal4();
};
var NGio = function(api,encKey,sessionId) {
	haxe_Log.trace("connecting to newgrounds",{ fileName : "source/NGio.hx", lineNumber : 63, className : "NGio", methodName : "new"});
	io_newgrounds_NG.createAndCheckSession(api,null,sessionId);
	io_newgrounds_NG.core.verbose = true;
	io_newgrounds_NG.core.initEncryption(encKey);
	haxe_Log.trace(io_newgrounds_NG.core.attemptingLogin,{ fileName : "source/NGio.hx", lineNumber : 71, className : "NGio", methodName : "new"});
	if(io_newgrounds_NG.core.attemptingLogin) {
		haxe_Log.trace("attempting login",{ fileName : "source/NGio.hx", lineNumber : 78, className : "NGio", methodName : "new"});
		io_newgrounds_NG.core.onLogin.add($bind(this,this.onNGLogin));
	} else {
		io_newgrounds_NG.core.requestLogin($bind(this,this.onNGLogin));
	}
};
$hxClasses["NGio"] = NGio;
NGio.__name__ = "NGio";
NGio.noLogin = function(api) {
	haxe_Log.trace("INIT NOLOGIN",{ fileName : "source/NGio.hx", lineNumber : 38, className : "NGio", methodName : "noLogin"});
	NGio.GAME_VER = "v" + lime_app_Application.current.meta.h["version"];
	if(api.length != 0) {
		io_newgrounds_NG.create(api);
		new flixel_util_FlxTimer().start(2,function(tmr) {
			var call = io_newgrounds_NG.core.calls.app.getCurrentVersion(NGio.GAME_VER).addDataHandler(function(response) {
				NGio.GAME_VER = response.result.data.current_version;
				NGio.GAME_VER_NUMS = StringTools.trim(NGio.GAME_VER.split(" ")[0]);
				haxe_Log.trace("CURRENT NG VERSION: " + NGio.GAME_VER,{ fileName : "source/NGio.hx", lineNumber : 51, className : "NGio", methodName : "noLogin"});
				haxe_Log.trace("CURRENT NG VERSION: " + NGio.GAME_VER_NUMS,{ fileName : "source/NGio.hx", lineNumber : 52, className : "NGio", methodName : "noLogin"});
				NGio.gotOnlineVer = true;
			});
			call.send();
		});
	}
};
NGio.postScore = function(score,song) {
	if(score == null) {
		score = 0;
	}
	if(NGio.isLoggedIn) {
		var id = io_newgrounds_NG.core.scoreBoards.keys();
		while(id.hasNext()) {
			var id1 = id.next();
			var board = io_newgrounds_NG.core.scoreBoards.h[id1];
			if(song == board._data.name) {
				board.postScore(score,"Uhh meow?");
			}
		}
	}
};
NGio.logEvent = function(event) {
	io_newgrounds_NG.core.calls.event.logEvent(event).send();
	haxe_Log.trace("should have logged: " + event,{ fileName : "source/NGio.hx", lineNumber : 188, className : "NGio", methodName : "logEvent"});
};
NGio.unlockMedal = function(id) {
	if(NGio.isLoggedIn) {
		var medal = io_newgrounds_NG.core.medals.h[id];
		if(!medal._data.unlocked) {
			medal.sendUnlock();
		}
	}
};
NGio.prototype = {
	onNGLogin: function() {
		haxe_Log.trace("logged in! user:" + io_newgrounds_NG.core.get_user().name,{ fileName : "source/NGio.hx", lineNumber : 92, className : "NGio", methodName : "onNGLogin"});
		NGio.isLoggedIn = true;
		flixel_FlxG.save.data.sessionId = io_newgrounds_NG.core.sessionId;
		io_newgrounds_NG.core.requestMedals($bind(this,this.onNGMedalFetch));
		io_newgrounds_NG.core.requestScoreBoards($bind(this,this.onNGBoardsFetch));
		NGio.ngDataLoaded.dispatch();
	}
	,onNGMedalFetch: function() {
	}
	,onNGBoardsFetch: function() {
		haxe_Log.trace("shoulda got score by NOW!",{ fileName : "source/NGio.hx", lineNumber : 143, className : "NGio", methodName : "onNGBoardsFetch"});
	}
	,onNGScoresFetch: function() {
		NGio.scoreboardsLoaded = true;
		NGio.ngScoresLoaded.dispatch();
	}
	,__class__: NGio
};
var Note = function(strumTime,noteData,prevNote,sustainNote) {
	if(sustainNote == null) {
		sustainNote = false;
	}
	this.noteScore = 1;
	this.isSustainNote = false;
	this.sustainLength = 0;
	this.wasGoodHit = false;
	this.tooLate = false;
	this.canBeHit = false;
	this.noteData = 0;
	this.mustPress = false;
	this.strumTime = 0;
	flixel_FlxSprite.call(this);
	if(prevNote == null) {
		prevNote = this;
	}
	this.prevNote = prevNote;
	this.isSustainNote = sustainNote;
	this.set_x(this.x + 50);
	this.set_y(this.y - 2000);
	this.strumTime = strumTime;
	this.noteData = noteData;
	var daStage = PlayState.curStage;
	switch(daStage) {
	case "school":case "schoolEvil":
		this.loadGraphic(Paths.getPath("images/" + "weeb/pixelUI/arrows-pixels" + ".png","IMAGE",null),true,17,17);
		this.animation.add("greenScroll",[6]);
		this.animation.add("redScroll",[7]);
		this.animation.add("blueScroll",[5]);
		this.animation.add("purpleScroll",[4]);
		if(this.isSustainNote) {
			this.loadGraphic(Paths.getPath("images/" + "weeb/pixelUI/arrowEnds" + ".png","IMAGE",null),true,7,6);
			this.animation.add("purpleholdend",[4]);
			this.animation.add("greenholdend",[6]);
			this.animation.add("redholdend",[7]);
			this.animation.add("blueholdend",[5]);
			this.animation.add("purplehold",[0]);
			this.animation.add("greenhold",[2]);
			this.animation.add("redhold",[3]);
			this.animation.add("bluehold",[1]);
		}
		this.setGraphicSize(this.get_width() * PlayState.daPixelZoom | 0);
		this.updateHitbox();
		break;
	default:
		var library = null;
		this.set_frames(flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + "NOTE_assets" + ".png","IMAGE",library),Paths.getPath("images/" + "NOTE_assets" + ".xml","TEXT",library)));
		this.animation.addByPrefix("greenScroll","green0");
		this.animation.addByPrefix("redScroll","red0");
		this.animation.addByPrefix("blueScroll","blue0");
		this.animation.addByPrefix("purpleScroll","purple0");
		this.animation.addByPrefix("purpleholdend","pruple end hold");
		this.animation.addByPrefix("greenholdend","green hold end");
		this.animation.addByPrefix("redholdend","red hold end");
		this.animation.addByPrefix("blueholdend","blue hold end");
		this.animation.addByPrefix("purplehold","purple hold piece");
		this.animation.addByPrefix("greenhold","green hold piece");
		this.animation.addByPrefix("redhold","red hold piece");
		this.animation.addByPrefix("bluehold","blue hold piece");
		this.setGraphicSize(this.get_width() * 0.7 | 0);
		this.updateHitbox();
		this.set_antialiasing(true);
	}
	switch(noteData) {
	case 0:
		this.set_x(this.x + Note.swagWidth * 0);
		this.animation.play("purpleScroll");
		break;
	case 1:
		this.set_x(this.x + Note.swagWidth);
		this.animation.play("blueScroll");
		break;
	case 2:
		this.set_x(this.x + Note.swagWidth * 2);
		this.animation.play("greenScroll");
		break;
	case 3:
		this.set_x(this.x + Note.swagWidth * 3);
		this.animation.play("redScroll");
		break;
	}
	if(this.isSustainNote && prevNote != null) {
		this.set_alpha(0.6);
		this.set_x(this.x + this.get_width() / 2);
		switch(noteData) {
		case 0:
			this.animation.play("purpleholdend");
			break;
		case 1:
			this.animation.play("blueholdend");
			break;
		case 2:
			this.animation.play("greenholdend");
			break;
		case 3:
			this.animation.play("redholdend");
			break;
		}
		this.updateHitbox();
		this.set_x(this.x - this.get_width() / 2);
		if(StringTools.startsWith(PlayState.curStage,"school")) {
			this.set_x(this.x + 30);
		}
		if(prevNote.isSustainNote) {
			switch(prevNote.noteData) {
			case 0:
				prevNote.animation.play("purplehold");
				break;
			case 1:
				prevNote.animation.play("bluehold");
				break;
			case 2:
				prevNote.animation.play("greenhold");
				break;
			case 3:
				prevNote.animation.play("redhold");
				break;
			}
			var fh = prevNote.scale;
			fh.set_y(fh.y * (Conductor.stepCrochet / 100 * 1.5 * PlayState.SONG.speed));
			prevNote.updateHitbox();
		}
	}
};
$hxClasses["Note"] = Note;
Note.__name__ = "Note";
Note.__super__ = flixel_FlxSprite;
Note.prototype = $extend(flixel_FlxSprite.prototype,{
	strumTime: null
	,mustPress: null
	,noteData: null
	,canBeHit: null
	,tooLate: null
	,wasGoodHit: null
	,prevNote: null
	,sustainLength: null
	,isSustainNote: null
	,noteScore: null
	,update: function(elapsed) {
		flixel_FlxSprite.prototype.update.call(this,elapsed);
		if(this.mustPress) {
			if(this.strumTime > Conductor.songPosition - Conductor.safeZoneOffset && this.strumTime < Conductor.songPosition + Conductor.safeZoneOffset * 0.5) {
				this.canBeHit = true;
			} else {
				this.canBeHit = false;
			}
			if(this.strumTime < Conductor.songPosition - Conductor.safeZoneOffset && !this.wasGoodHit) {
				this.tooLate = true;
			}
		} else {
			this.canBeHit = false;
			if(this.strumTime <= Conductor.songPosition) {
				this.wasGoodHit = true;
			}
		}
		if(this.tooLate) {
			if(this.alpha > 0.3) {
				this.set_alpha(0.3);
			}
		}
	}
	,__class__: Note
});
var OptionsMenu = function() {
	this.BLUE = -10592674;
	this.curSelected = 0;
	this.textMenuItems = ["CONTROLS","GHOST TAPPING","SCROLL OPTIONS"];
	MusicBeatSubstate.call(this);
	var bg = new flixel_FlxSprite(-80).loadGraphic(Paths.getPath("images/" + "menuDesat" + ".png","IMAGE",null));
	bg.scrollFactor.set_x(0);
	bg.scrollFactor.set_y(0.18);
	bg.setGraphicSize(bg.get_width() * 1.1 | 0);
	bg.updateHitbox();
	bg.screenCenter();
	bg.set_antialiasing(true);
	this.add(bg);
	this.grpOptionsTexts = new flixel_group_FlxTypedGroup();
	this.add(this.grpOptionsTexts);
	var _g = 0;
	var _g1 = this.textMenuItems.length;
	while(_g < _g1) {
		var i = _g++;
		var optionText = new flixel_text_FlxText(550,300 + i * 50,0,this.textMenuItems[i],32);
		optionText.ID = i;
		optionText.setFormat("assets/fonts/" + "vcr.ttf",32);
		this.grpOptionsTexts.add(optionText);
	}
};
$hxClasses["OptionsMenu"] = OptionsMenu;
OptionsMenu.__name__ = "OptionsMenu";
OptionsMenu.__super__ = MusicBeatSubstate;
OptionsMenu.prototype = $extend(MusicBeatSubstate.prototype,{
	textMenuItems: null
	,selector: null
	,curSelected: null
	,bg: null
	,bg2: null
	,BLUE: null
	,grpOptionsTexts: null
	,update: function(elapsed) {
		var _gthis = this;
		MusicBeatSubstate.prototype.update.call(this,elapsed);
		if(PlayerSettings.player1.controls._back.check()) {
			var nextState = new MainMenuState();
			if(flixel_FlxG.game._state.switchTo(nextState)) {
				flixel_FlxG.game._requestedState = nextState;
			}
		}
		if(PlayerSettings.player1.controls._upP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected -= 1;
		}
		if(PlayerSettings.player1.controls._downP.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			this.curSelected += 1;
		}
		if(this.curSelected < 0) {
			this.curSelected = this.textMenuItems.length - 1;
		}
		if(this.curSelected >= this.textMenuItems.length) {
			this.curSelected = 0;
		}
		this.grpOptionsTexts.forEach(function(txt) {
			txt.set_color(-16777216);
			if(txt.ID == _gthis.curSelected) {
				txt.set_color(-16776961);
			}
		});
		if(PlayerSettings.player1.controls._accept.check()) {
			flixel_FlxG.sound.play(Paths.sound("scrollMenu"));
			switch(this.textMenuItems[this.curSelected]) {
			case "CONTROLS":
				var nextState = new ControlsState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
				break;
			case "GHOST TAPPING":
				var nextState = new GhostState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
				break;
			case "SCROLL OPTIONS":
				var nextState = new ScrollState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
				break;
			}
		}
	}
	,__class__: OptionsMenu
});
var Paths = function() { };
$hxClasses["Paths"] = Paths;
Paths.__name__ = "Paths";
Paths.currentLevel = null;
Paths.setCurrentLevel = function(name) {
	Paths.currentLevel = name.toLowerCase();
};
Paths.getPath = function(file,type,library) {
	if(library != null) {
		return Paths.getLibraryPath(file,library);
	}
	if(Paths.currentLevel != null) {
		var library = Paths.currentLevel;
		var levelPath = "" + library + ":assets/" + library + "/" + file;
		if(openfl_utils_Assets.exists(levelPath,type)) {
			return levelPath;
		}
		levelPath = "shared" + ":assets/" + "shared" + "/" + file;
		if(openfl_utils_Assets.exists(levelPath,type)) {
			return levelPath;
		}
	}
	return "assets/" + file;
};
Paths.getLibraryPath = function(file,library) {
	if(library == null) {
		library = "preload";
	}
	if(library == "preload" || library == "default") {
		return "assets/" + file;
	} else {
		return "" + library + ":assets/" + library + "/" + file;
	}
};
Paths.getLibraryPathForce = function(file,library) {
	return "" + library + ":assets/" + library + "/" + file;
};
Paths.getPreloadPath = function(file) {
	return "assets/" + file;
};
Paths.file = function(file,type,library) {
	if(type == null) {
		type = "TEXT";
	}
	return Paths.getPath(file,type,library);
};
Paths.txt = function(key,library) {
	return Paths.getPath("data/" + key + ".txt","TEXT",library);
};
Paths.xml = function(key,library) {
	return Paths.getPath("data/" + key + ".xml","TEXT",library);
};
Paths.json = function(key,library) {
	return Paths.getPath("data/" + key + ".json","TEXT",library);
};
Paths.sound = function(key,library) {
	return Paths.getPath("sounds/" + key + "." + "mp3","SOUND",library);
};
Paths.soundRandom = function(key,min,max,library) {
	return Paths.sound(key + flixel_FlxG.random.int(min,max),library);
};
Paths.music = function(key,library) {
	return Paths.getPath("music/" + key + "." + "mp3","MUSIC",library);
};
Paths.voices = function(song) {
	return "songs:assets/songs/" + song.toLowerCase() + "/Voices." + "mp3";
};
Paths.inst = function(song) {
	return "songs:assets/songs/" + song.toLowerCase() + "/Inst." + "mp3";
};
Paths.image = function(key,library) {
	return Paths.getPath("images/" + key + ".png","IMAGE",library);
};
Paths.font = function(key) {
	return "assets/fonts/" + key;
};
Paths.getSparrowAtlas = function(key,library) {
	return flixel_graphics_frames_FlxAtlasFrames.fromSparrow(Paths.getPath("images/" + key + ".png","IMAGE",library),Paths.getPath("images/" + key + ".xml","TEXT",library));
};
Paths.getPackerAtlas = function(key,library) {
	return flixel_graphics_frames_FlxAtlasFrames.fromSpriteSheetPacker(Paths.getPath("images/" + key + ".png","IMAGE",library),Paths.getPath("images/" + key + ".txt","TEXT",library));
};
var PauseSubState = function(x,y) {
	this.curSelected = 0;
	this.menuItems = ["Resume","Restart Song","Exit to menu"];
	MusicBeatSubstate.call(this);
	this.pauseMusic = new flixel_system_FlxSound().loadEmbedded(Paths.getPath("music/" + "breakfast" + "." + "mp3","MUSIC",null),true,true);
	this.pauseMusic.set_volume(0);
	this.pauseMusic.play(false,flixel_FlxG.random.int(0,this.pauseMusic._length / 2 | 0));
	flixel_FlxG.sound.list.add(this.pauseMusic);
	var bg = new flixel_FlxSprite().makeGraphic(flixel_FlxG.width,flixel_FlxG.height,-16777216);
	bg.set_alpha(0);
	bg.scrollFactor.set();
	this.add(bg);
	var levelInfo = new flixel_text_FlxText(20,15,0,"",32);
	levelInfo.set_text(levelInfo.text + PlayState.SONG.song);
	levelInfo.scrollFactor.set();
	levelInfo.setFormat("assets/fonts/" + "vcr.ttf",32);
	levelInfo.updateHitbox();
	this.add(levelInfo);
	var levelDifficulty = new flixel_text_FlxText(20,47,0,"",32);
	levelDifficulty.set_text(levelDifficulty.text + CoolUtil.difficultyString());
	levelDifficulty.scrollFactor.set();
	levelDifficulty.setFormat("assets/fonts/" + "vcr.ttf",32);
	levelDifficulty.updateHitbox();
	this.add(levelDifficulty);
	levelDifficulty.set_alpha(0);
	levelInfo.set_alpha(0);
	levelInfo.set_x(flixel_FlxG.width - (levelInfo.get_width() + 20));
	levelDifficulty.set_x(flixel_FlxG.width - (levelDifficulty.get_width() + 20));
	flixel_tweens_FlxTween.tween(bg,{ alpha : 0.6},0.4,{ ease : flixel_tweens_FlxEase.quartInOut});
	flixel_tweens_FlxTween.tween(levelInfo,{ alpha : 1, y : 20},0.4,{ ease : flixel_tweens_FlxEase.quartInOut, startDelay : 0.3});
	flixel_tweens_FlxTween.tween(levelDifficulty,{ alpha : 1, y : levelDifficulty.y + 5},0.4,{ ease : flixel_tweens_FlxEase.quartInOut, startDelay : 0.5});
	this.grpMenuShit = new flixel_group_FlxTypedGroup();
	this.add(this.grpMenuShit);
	var _g = 0;
	var _g1 = this.menuItems.length;
	while(_g < _g1) {
		var i = _g++;
		var songText = new Alphabet(0,70 * i + 30,this.menuItems[i],true,false);
		songText.isMenuItem = true;
		songText.targetY = i;
		this.grpMenuShit.add(songText);
	}
	this.changeSelection();
	this.set_cameras([flixel_FlxG.cameras.list[flixel_FlxG.cameras.list.length - 1]]);
};
$hxClasses["PauseSubState"] = PauseSubState;
PauseSubState.__name__ = "PauseSubState";
PauseSubState.__super__ = MusicBeatSubstate;
PauseSubState.prototype = $extend(MusicBeatSubstate.prototype,{
	grpMenuShit: null
	,menuItems: null
	,curSelected: null
	,pauseMusic: null
	,update: function(elapsed) {
		if(this.pauseMusic._volume < 0.5) {
			var fh = this.pauseMusic;
			fh.set_volume(fh._volume + 0.01 * elapsed);
		}
		MusicBeatSubstate.prototype.update.call(this,elapsed);
		var upP = PlayerSettings.player1.controls._upP.check();
		var downP = PlayerSettings.player1.controls._downP.check();
		var accepted = PlayerSettings.player1.controls._accept.check();
		if(upP) {
			this.changeSelection(-1);
		}
		if(downP) {
			this.changeSelection(1);
		}
		if(accepted) {
			var daSelected = this.menuItems[this.curSelected];
			switch(daSelected) {
			case "Exit to menu":
				var nextState = new MainMenuState();
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
				break;
			case "Restart Song":
				var nextState = Type.createInstance(js_Boot.getClass(flixel_FlxG.game._state),[]);
				if(flixel_FlxG.game._state.switchTo(nextState)) {
					flixel_FlxG.game._requestedState = nextState;
				}
				break;
			case "Resume":
				this.close();
				break;
			}
		}
		var _this = flixel_FlxG.keys.justPressed;
		var tmp = _this.keyManager.checkStatus(74,_this.status);
	}
	,destroy: function() {
		this.pauseMusic.destroy();
		MusicBeatSubstate.prototype.destroy.call(this);
	}
	,changeSelection: function(change) {
		if(change == null) {
			change = 0;
		}
		this.curSelected += change;
		if(this.curSelected < 0) {
			this.curSelected = this.menuItems.length - 1;
		}
		if(this.curSelected >= this.menuItems.length) {
			this.curSelected = 0;
		}
		var bullShit = 0;
		var _g = 0;
		var _g1 = this.grpMenuShit.members;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			item.targetY = bullShit - this.curSelected;
			++bullShit;
			item.set_alpha(0.6);
			if(item.targetY == 0) {
				item.set_alpha(1);
			}
		}
	}
	,__class__: PauseSubState
});
var PlayState = function(TransIn,TransOut) {
	this.curLight = 0;
	this.lightningOffset = 8;
	this.lightningStrikeBeat = 0;
	this.startedMoving = false;
	this.trainCooldown = 0;
	this.trainFinishing = false;
	this.trainCars = 8;
	this.trainFrameTiming = 0;
	this.trainMoving = false;
	this.fastCarCanDrive = true;
	this.endingSong = false;
	this.canPause = true;
	this.st