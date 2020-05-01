// Transcrypt'ed from Python, 2020-05-01 14:53:17
var math = {};
var random = {};
var settings = {};
var time = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_time__ from './time.js';
__nest__ (time, '', __module_time__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import * as __module_settings__ from './settings.js';
__nest__ (settings, '', __module_settings__);
import {HumanStatus} from './human_status.js';
import {Element} from './element.js';
var __name__ = 'human';
export var Human =  __class__ ('Human', [Element], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, position, width, height, status, stationary) {
		__super__ (Human, '__init__') (self, position);
		self._velocity = tuple ([0, 0]);
		self._radius = settings.HUMAN_SIZE_RADIUS;
		self._status = status;
		self._stationary = stationary;
		self._color = settings.HUMAN_STATUS_COLOR [self._status];
		self._canvas_width = width;
		self._canvas_height = height;
		self._timer = time.time ();
	});},
	get _get_status () {return __get__ (this, function (self) {
		return self._status;
	});},
	get draw () {return __get__ (this, function (self, context) {
		context.fillStyle = self._color;
		context.beginPath ();
		context.arc (self.x, self.y, self._radius, 0, 2 * math.pi);
		context.fill ();
	});},
	get py_update () {return __get__ (this, function (self) {
		self._update_status ();
		if (!(self._stationary)) {
			self._update_position ();
		}
	});},
	get _update_position () {return __get__ (this, function (self) {
		self._position = tuple ([self._position [0] + self._velocity [0], self._position [1] + self._velocity [1]]);
		self._position_to_bounds ();
		if (random.random () < settings.HUMAN_CHANGE_VELOCITY_PROBABILITY) {
			self._velocity = tuple ([random.randint (-(settings.HUMAN_MAX_VELOCITY), settings.HUMAN_MAX_VELOCITY), random.randint (-(settings.HUMAN_MAX_VELOCITY), settings.HUMAN_MAX_VELOCITY)]);
		}
	});},
	get _update_status () {return __get__ (this, function (self) {
		if (self._status == HumanStatus.CONTAGIOUS && time.time () - self._timer > settings.CONTAGIOUS_TIME) {
			self._timer = time.time ();
			self.change_status (HumanStatus.SICK);
		}
		if (self._status == HumanStatus.SICK && time.time () - self._timer > settings.SICK_TIME) {
			self._timer = time.time ();
			self.change_status (HumanStatus.RECOVERED);
		}
	});},
	get change_status () {return __get__ (this, function (self, status) {
		self._status = status;
		self._color = settings.HUMAN_STATUS_COLOR [self._status];
	});},
	get _position_to_bounds () {return __get__ (this, function (self) {
		if (self._position [0] < self._radius) {
			self._position = tuple ([self._radius, self._position [1]]);
			self._velocity = tuple ([-(self._velocity [0]), self._velocity [1]]);
		}
		if (self._position [0] > self._canvas_width - self._radius) {
			self._position = tuple ([self._canvas_width - self._radius, self._position [1]]);
			self._velocity = tuple ([-(self._velocity [0]), self._velocity [1]]);
		}
		if (self._position [1] < self._radius) {
			self._position = tuple ([self._position [0], self._radius]);
			self._velocity = tuple ([self._velocity [0], -(self._velocity [1])]);
		}
		if (self._position [1] > self._canvas_height - self._radius) {
			self._position = tuple ([self._position [0], self._canvas_height - self._radius]);
			self._velocity = tuple ([self._velocity [0], -(self._velocity [1])]);
		}
	});}
});
Object.defineProperty (Human, 'status', property.call (Human, Human._get_status));;

//# sourceMappingURL=human.map