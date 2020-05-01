// Transcrypt'ed from Python, 2020-05-01 14:45:32
var random = {};
var settings = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import {HumanStatus} from './human_status.js';
import {Human} from './human.js';
import * as __module_settings__ from './settings.js';
__nest__ (settings, '', __module_settings__);
var __name__ = '__main__';
export var Simulation =  __class__ ('Simulation', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._human_list = [];
		self._canvas = document.getElementById ('simulation_canvas');
		self._canvas.width = self._canvas.clientWidth;
		self._canvas.height = self._canvas.clientHeight;
		self._width = self._canvas.width;
		self._height = self._canvas.height;
		self._context = self._canvas.getContext ('2d');
		for (var _ = 0; _ < settings.HUMAN_COUNT; _++) {
			var status = HumanStatus.HEALTHY;
			if (random.random () < settings.HUMAN_SICK_PROBABILITY) {
				var status = HumanStatus.SICK;
			}
			self._human_list.append (Human (tuple ([random.randint (0, self._width), random.randint (0, self._height)]), self._width, self._height, status, random.random () < settings.HUMAN_STATIONARY_PROBABILITY));
		}
	});},
	get draw () {return __get__ (this, function (self) {
		self._context.fillStyle = settings.BG_COLOR;
		self._context.fillRect (0, 0, self._width, self._height);
		for (var h of self._human_list) {
			h.draw (self._context);
		}
	});},
	get py_update () {return __get__ (this, function (self) {
		for (var h of self._human_list) {
			h.py_update ();
		}
		var sick = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.SICK || h.status == HumanStatus.CONTAGIOUS;
		}), self._human_list));
		var healthy = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.HEALTHY;
		}), self._human_list));
		for (var s of sick) {
			for (var h of healthy) {
				if (s.distance (h) <= settings.INFECTION_DISTANCE) {
					h.change_status (HumanStatus.CONTAGIOUS);
				}
			}
		}
	});}
});
export var simulation = Simulation ();

//# sourceMappingURL=simulation.map