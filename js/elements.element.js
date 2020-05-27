// Transcrypt'ed from Python, 2020-05-27 12:20:35
var math = {};
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Bounds} from './elements.bounds.js';
import {Container} from './elements.container.js';
import {Settings} from './settings.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
var __name__ = 'elements.element';
export var Element =  __class__ ('Element', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, settings) {
		self._settings = settings;
		self._position = tuple ([0, 0]);
		self._parent = null;
	});},
	get _get_parent () {return __get__ (this, function (self) {
		return self._parent;
	});},
	get _set_parent () {return __get__ (this, function (self, value) {
		self._parent = value;
	});},
	get _get_bounds () {return __get__ (this, function (self) {
		return self._parent.bounds;
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
	get set_random_position () {return __get__ (this, function (self) {
		self.x = random.randint (self.bounds.left, self.bounds.right);
		self.y = random.randint (self.bounds.top, self.bounds.bottom);
	});},
	get distance () {return __get__ (this, function (self, element) {
		return math.sqrt (Math.pow (self.x - element.x, 2) + Math.pow (self.y - element.y, 2));
	});},
	get draw () {return __get__ (this, function (self, context) {
		// pass;
	});},
	get py_update () {return __get__ (this, function (self) {
		// pass;
	});}
});
Object.defineProperty (Element, 'y', property.call (Element, Element._get_y, Element._set_y));
Object.defineProperty (Element, 'x', property.call (Element, Element._get_x, Element._set_x));
Object.defineProperty (Element, 'position', property.call (Element, Element._get_position, Element._set_position));
Object.defineProperty (Element, 'bounds', property.call (Element, Element._get_bounds));
Object.defineProperty (Element, 'parent', property.call (Element, Element._get_parent, Element._set_parent));;

//# sourceMappingURL=elements.element.map