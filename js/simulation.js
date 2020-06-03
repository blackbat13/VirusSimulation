// Transcrypt'ed from Python, 2020-06-03 11:39:17
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import {Cemetery} from './elements.cemetery.js';
import {Isolation} from './elements.isolation.js';
import {OpenWorld} from './elements.open_world.js';
import {HumanStatus} from './elements.human_status.js';
import {Human} from './elements.human.js';
import {Settings} from './settings.js';
var __name__ = '__main__';
export var Simulation =  __class__ ('Simulation', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._settings = Settings ();
		self._canvas = document.getElementById ('simulation_canvas');
		self._canvas.width = self._canvas.clientWidth;
		self._canvas.height = self._canvas.clientHeight;
		self._settings.width = self._canvas.width;
		self._settings.height = self._canvas.height;
		self._context = self._canvas.getContext ('2d');
		self._open_world = OpenWorld (self._settings, tuple ([self._settings.isolation_width, 0]), tuple ([(self._settings.width - self._settings.isolation_width) - self._settings.cemetery_width, self._settings.height]), self);
		self._isolation = Isolation (self._settings, tuple ([0, 0]), tuple ([self._settings.isolation_width, self._settings.height]), self);
		self._cemetery = Cemetery (self._settings, tuple ([self._settings.width - self._settings.cemetery_width, 0]), tuple ([self._settings.cemetery_width, self._settings.height]), self);
		self.reset ();
	});},
	get _get_settings () {return __get__ (this, function (self) {
		return self._settings;
	});},
	get draw () {return __get__ (this, function (self) {
		self._context.fillStyle = self._settings.bg_color;
		self._context.fillRect (0, 0, self._settings.width, self._settings.height);
		self._open_world.draw (self._context);
		self._isolation.draw (self._context);
		self._cemetery.draw (self._context);
	});},
	get py_update () {return __get__ (this, function (self) {
		self._open_world.py_update ();
		self._isolation.py_update ();
		self._cemetery.py_update ();
	});},
	get reset () {return __get__ (this, function (self) {
		self._settings.read_settings ();
		self._generate_humans ();
	});},
	get _generate_humans () {return __get__ (this, function (self) {
		self._open_world.py_clear ();
		self._isolation.py_clear ();
		self._cemetery.py_clear ();
		for (var _ = 0; _ < self._settings.human_count; _++) {
			var status = HumanStatus.HEALTHY;
			if (random.random () < self._settings.human_sick_probability) {
				var status = HumanStatus.SICK;
			}
			self._open_world.add_element (Human (self._settings, status, random.random () < self._settings.human_stationary_probability));
		}
	});},
	get count () {return __get__ (this, function (self, status) {
		return self._open_world.count (status) + self._isolation.count (status);
	});},
	get add_sick () {return __get__ (this, function (self) {
		self._open_world.add_element (Human (self._settings, HumanStatus.SICK, false));
	});},
	get add_healthy () {return __get__ (this, function (self) {
		self._open_world.add_element (Human (self._settings, HumanStatus.HEALTHY, false));
	});},
	get add_to_open_world () {return __get__ (this, function (self, element) {
		self._open_world.add_element (element);
	});},
	get add_to_isolation () {return __get__ (this, function (self, element) {
		self._isolation.add_element (element);
	});},
	get add_to_cemetery () {return __get__ (this, function (self, element) {
		self._cemetery.add_element (element);
	});},
	get is_isolation_full () {return __get__ (this, function (self) {
		return self._isolation.elements_count () >= self._settings.isolation_capacity;
	});}
});
Object.defineProperty (Simulation, 'settings', property.call (Simulation, Simulation._get_settings));;
export var simulation = Simulation ();

//# sourceMappingURL=simulation.map