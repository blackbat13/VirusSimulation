// Transcrypt'ed from Python, 2020-05-27 12:14:12
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import {Settings} from './settings.js';
import {HumanStatus} from './elements.human_status.js';
import {Container} from './elements.container.js';
var __name__ = 'elements.open_world';
export var OpenWorld =  __class__ ('OpenWorld', [Container], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, settings, position, size, simulation) {
		__super__ (OpenWorld, '__init__') (self, settings, position, size, simulation);
	});},
	get py_update () {return __get__ (this, function (self) {
		Container.py_update (self);
		self._update_isolation ();
		self._update_infection ();
		self._update_cemetery ();
	});},
	get _update_isolation () {return __get__ (this, function (self) {
		if (self._simulation.is_isolation_full ()) {
			return ;
		}
		var sick = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.SICK;
		}), self._elements));
		for (var s of sick) {
			if (s.to_isolation_counter == -(1)) {
				s.to_isolation_counter = random.randint (500, 1200);
				continue;
			}
			s.decrement_isolation_counter ();
			if (s.to_isolation_counter <= 0) {
				self._simulation.add_to_isolation (s);
				self._elements.remove (s);
				if (self._simulation.is_isolation_full ()) {
					return ;
				}
			}
		}
	});},
	get _update_infection () {return __get__ (this, function (self) {
		var sick = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.SICK || h.status == HumanStatus.CONTAGIOUS;
		}), self._elements));
		var healthy = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.HEALTHY;
		}), self._elements));
		var grid_size = self._settings.infection_distance * 2;
		var healthy_grid = (function () {
			var __accu0__ = [];
			for (var _ = 0; _ < Math.floor (self._settings.width / grid_size) + 1; _++) {
				__accu0__.append ((function () {
					var __accu1__ = [];
					for (var _ = 0; _ < Math.floor (self._settings.height / grid_size) + 1; _++) {
						__accu1__.append ([]);
					}
					return __accu1__;
				}) ());
			}
			return __accu0__;
		}) ();
		for (var h of healthy) {
			healthy_grid [Math.floor (h.x / grid_size)] [Math.floor (h.y / grid_size)].append (h);
		}
		for (var s of sick) {
			var x = Math.floor (s.x / grid_size);
			var y = Math.floor (s.y / grid_size);
			for (var kx = -(1); kx < 2; kx++) {
				if (x + kx < 0 || x + kx >= len (healthy_grid)) {
					continue;
				}
				for (var ky = -(1); ky < 2; ky++) {
					if (y + ky < 0 || y + ky >= len (healthy_grid [x + kx])) {
						continue;
					}
					for (var h of healthy_grid [x + kx] [y + ky]) {
						if (s.distance (h) <= self._settings.infection_distance && random.random () < self._settings.infection_probability) {
							h.change_status (HumanStatus.CONTAGIOUS);
						}
					}
				}
			}
		}
	});}
});

//# sourceMappingURL=elements.open_world.map