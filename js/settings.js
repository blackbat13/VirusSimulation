// Transcrypt'ed from Python, 2020-05-02 12:19:02
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {HumanStatus} from './elements.human_status.js';
var __name__ = 'settings';
export var Settings =  __class__ ('Settings', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.BG_COLOR = '#F1F7EE';
		self.HUMAN_SIZE_RADIUS = 5;
		self.HUMAN_CHANGE_VELOCITY_PROBABILITY = 0.05;
		self.HUMAN_MAX_VELOCITY = 2;
		self.HUMAN_STATUS_COLOR = dict ([[HumanStatus.SICK, '#ff000d'], [HumanStatus.HEALTHY, '#39ff14'], [HumanStatus.CONTAGIOUS, '#ff0490'], [HumanStatus.RECOVERED, '#ccff00'], [HumanStatus.DEAD, '#000000']]);
		self.HUMAN_COUNT = 200;
		self.HUMAN_STATIONARY_PROBABILITY = 0.6;
		self.HUMAN_SICK_PROBABILITY = 0.2;
		self.HUMAN_DEATH_PROBABILITY = 0.1;
		self.CONTAGIOUS_TIME = 60;
		self.SICK_TIME = 60;
		self.MAX_TIME_VARIATION = 5;
		self.INFECTION_DISTANCE = 2 * self.HUMAN_SIZE_RADIUS + 5;
		self.INFECTION_PROBABILITY = 0.8;
		self.ROAD_COLOR = '#555555';
		self.ROAD_WIDTH = self.HUMAN_SIZE_RADIUS * 6;
		self.ROAD_COUNT = 3;
		self.WIDTH = 0;
		self.HEIGHT = 0;
	});},
	get set_width () {return __get__ (this, function (self, width) {
		self.WIDTH = width;
	});},
	get set_height () {return __get__ (this, function (self, height) {
		self.HEIGHT = height;
	});},
	get read_settings () {return __get__ (this, function (self) {
		self.HUMAN_COUNT = document.getElementById ('human_count_input').value;
		self.HUMAN_SICK_PROBABILITY = document.getElementById ('human_sick_probability_input').value;
		self.HUMAN_STATIONARY_PROBABILITY = document.getElementById ('human_stationary_probability_input').value;
		self.HUMAN_DEATH_PROBABILITY = document.getElementById ('human_death_probability_input').value;
		self.CONTAGIOUS_TIME = int (document.getElementById ('contagious_time_input').value);
		self.SICK_TIME = int (document.getElementById ('sick_time_input').value);
		self.MAX_TIME_VARIATION = int (document.getElementById ('max_time_variation_input').value);
		self.INFECTION_PROBABILITY = document.getElementById ('infection_probability_input').value;
		console.log (self.INFECTION_PROBABILITY);
	});}
});

//# sourceMappingURL=settings.map