// Transcrypt'ed from Python, 2020-06-22 09:38:00
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {HumanStatus} from './elements.human_status.js';
import {Bounds} from './elements.bounds.js';
import {Settings} from './settings.js';
var __name__ = 'elements.container';
export var Container =  __class__ ('Container', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, settings, position, size, simulation) {
		self._settings = settings;
		self._position = position;
		self._size = size;
		self._elements = [];
		self._simulation = simulation;
	});},
	get _get_width () {return __get__ (this, function (self) {
		return self._size [0];
	});},
	get _get_height () {return __get__ (this, function (self) {
		return self._size [1];
	});},
	get _get_bounds () {return __get__ (this, function (self) {
		return Bounds (self.x, self.x + self.width, self.y, self.y + self.height);
	});},
	get _get_position () {return __get__ (this, function (self) {
		return self._position;
	});},
	get _set_position () {return __get__ (this, function (self, value) {
		self._position = value;
	});},
	get _get_x () {return __get__ (this, function (self) {
		return self._position [0];
	});},
	get _set_x () {return __get__ (this, function (self, value) {
		self._position = tuple ([value, self._position [1]]);
	});},
	get _get_y () {return __get__ (this, function (self) {
		return self._position [1];
	});},
	get _set_y () {return __get__ (this, function (self, value) {
		self._position = tuple ([self._position [0], value]);
	});},
	get draw () {return __get__ (this, function (self, context) {
		for (var element of self._elements) {
			element.draw (context);
		}
	});},
	get py_update () {return __get__ (this, function (self) {
		for (var element of self._elements) {
			element.py_update ();
		}
	});},
	get _update_cemetery () {return __get__ (this, function (self) {
		var dead = list (filter ((function __lambda__ (h) {
			return h.status == HumanStatus.DEAD;
		}), self._elements));
		for (var d of dead) {
			self._simulation.add_to_cemetery (d);
			self._elements.remove (d);
		}
	});},
	get add_element () {return __get__ (this, function (self, element) {
		element.parent = self;
		element.set_random_position ();
		self._elements.append (element);
	});},
	get count () {return __get__ (this, function (self, status) {
		return sum ((function () {
			var __accu0__ = [];
			for (var h of self._elements) {
				if (h.status == status) {
					__accu0__.append (1);
				}
			}
			return py_iter (__accu0__);
		}) ());
	});},
	get py_clear () {return __get__ (this, function (self) {
		self._elements.py_clear ();
	});},
	get elements_count () {return __get__ (this, function (self) {
		return len (self._elements);
	});},
	get _draw_text () {return __get__ (this, function (self, context, text) {
		context.fillStyle = 'black';
		context.textAlign = 'center';
		context.font = '30px Arial';
		for (var i = 0; i < len (text); i++) {
			var y = (i + 1) * (self.height / (len (text) + 1)) + self.y;
			context.fillText (text [i], Math.floor ((self.x * 2 + self.width) / 2), y);
		}
	});}
});
Object.defineProperty (Container, 'y', property.call (Container, Container._get_y, Container._set_y));
Object.defineProperty (Container, 'x', property.call (Container, Container._get_x, Container._set_x));
Object.defineProperty (Container, 'position', property.call (Container, Container._get_position, Container._set_position));
Object.defineProperty (Container, 'bounds', property.call (Container, Container._get_bounds));
Object.defineProperty (Container, 'height', property.call (Container, Container._get_height));
Object.defineProperty (Container, 'width', property.call (Container, Container._get_width));;

//# sourceMappingURL=elements.container.map