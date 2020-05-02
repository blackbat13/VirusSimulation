// Transcrypt'ed from Python, 2020-05-02 12:19:01
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
import {RoadType} from './elements.road_type.js';
import {Road} from './elements.road.js';
import {HumanStatus} from './elements.human_status.js';
import {Human} from './elements.human.js';
import {Settings} from './settings.js';
var __name__ = '__main__';
export var SimulationRandom =  __class__ ('SimulationRandom', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._human_list = [];
		self._settings = Settings ();
		self._canvas = document.getElementById ('simulation_canvas');
		self._canvas.width = self._canvas.clientWidth;
		self._canvas.height = self._canvas.clientHeight;
		self._settings.WIDTH = self._canvas.width;
		self._settings.HEIGHT = self._canvas.height;
		self._context = self._canvas.getContext ('2d');
		self.reset ();
	});},
	get _get_settings () {return __get__ (this, function (self) {
		return self._settings;
	});},
	get draw () {return __get__ (this, function (self) {
		self._context.fillStyle = self._settings.BG_COLOR;
		self._context.fillRect (0, 0, self._settings.WIDTH, self._settings.HEIGHT);
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
				if (s.distance (h) <= self._settings.INFECTION_DISTANCE && random.random () < self._settings.INFECTION_PROBABILITY) {
					h.change_status (HumanStatus.CONTAGIOUS);
				}
			}
		}
	});},
	get reset () {return __get__ (this, function (self) {
		self._settings.read_settings ();
		self._generate_humans ();
	});},
	get _generate_humans () {return __get__ (this, function (self) {
		self._human_list = [];
		for (var _ = 0; _ < self._settings.HUMAN_COUNT; _++) {
			var status = HumanStatus.HEALTHY;
			if (random.random () < self._settings.HUMAN_SICK_PROBABILITY) {
				var status = HumanStatus.SICK;
			}
			self._human_list.append (Human (self._settings, tuple ([random.randint (0, self._settings.WIDTH), random.randint (0, self._settings.HEIGHT)]), status, random.random () < self._settings.HUMAN_STATIONARY_PROBABILITY));
		}
	});},
	get count () {return __get__ (this, function (self, status) {
		return sum ((function () {
			var __accu0__ = [];
			for (var h of self._human_list) {
				if (h.status == status) {
					__accu0__.append (1);
				}
			}
			return py_iter (__accu0__);
		}) ());
	});}
});
Object.defineProperty (SimulationRandom, 'settings', property.call (SimulationRandom, SimulationRandom._get_settings));;
export var SimulationHouses =  __class__ ('SimulationHouses', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self._human_list = [];
		self._road_list = [];
		self._settings = Settings ();
		self._canvas = document.getElementById ('simulation_canvas');
		self._canvas.width = self._canvas.clientWidth;
		self._canvas.height = self._canvas.clientHeight;
		self._settings.WIDTH = self._canvas.width;
		self._settings.HEIGHT = self._canvas.height;
		self._context = self._canvas.getContext ('2d');
		self.reset ();
	});},
	get _get_settings () {return __get__ (this, function (self) {
		return self._settings;
	});},
	get draw () {return __get__ (this, function (self) {
		self._context.fillStyle = self._settings.BG_COLOR;
		self._context.fillRect (0, 0, self._settings.WIDTH, self._settings.HEIGHT);
		for (var r of self._road_list) {
			r.draw (self._context);
		}
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
				if (s.distance (h) <= self._settings.INFECTION_DISTANCE && random.random () < self._settings.INFECTION_PROBABILITY) {
					h.change_status (HumanStatus.CONTAGIOUS);
				}
			}
		}
	});},
	get reset () {return __get__ (this, function (self) {
		self._settings.read_settings ();
		self._generate_humans ();
		self._generate_roads ();
	});},
	get _generate_humans () {return __get__ (this, function (self) {
		self._human_list = [];
		for (var _ = 0; _ < self._settings.HUMAN_COUNT; _++) {
			var status = HumanStatus.HEALTHY;
			if (random.random () < self._settings.HUMAN_SICK_PROBABILITY) {
				var status = HumanStatus.SICK;
			}
			self._human_list.append (Human (self._settings, tuple ([random.randint (0, self._settings.WIDTH), random.randint (0, self._settings.HEIGHT)]), status, random.random () < self._settings.HUMAN_STATIONARY_PROBABILITY));
		}
	});},
	get _generate_roads () {return __get__ (this, function (self) {
		self._road_list = [];
		var gap_width = self._settings.WIDTH / (self._settings.ROAD_COUNT + 1);
		for (var x of range (gap_width, self._settings.WIDTH, gap_width)) {
			self._road_list.append (Road (self._settings, tuple ([x - self._settings.ROAD_WIDTH / 2, 0]), RoadType.VERTICAL));
		}
		var gap_height = self._settings.HEIGHT / (self._settings.ROAD_COUNT + 1);
		for (var y of range (gap_height, self._settings.HEIGHT, gap_height)) {
			self._road_list.append (Road (self._settings, tuple ([0, y - self._settings.ROAD_WIDTH / 2]), RoadType.HORIZONTAL));
		}
	});},
	get count () {return __get__ (this, function (self, status) {
		return sum ((function () {
			var __accu0__ = [];
			for (var h of self._human_list) {
				if (h.status == status) {
					__accu0__.append (1);
				}
			}
			return py_iter (__accu0__);
		}) ());
	});}
});
Object.defineProperty (SimulationHouses, 'settings', property.call (SimulationHouses, SimulationHouses._get_settings));;
export var simulation = SimulationRandom ();

//# sourceMappingURL=simulation.map