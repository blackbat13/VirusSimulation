// Transcrypt'ed from Python, 2020-05-28 15:30:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {HumanStatus} from './elements.human_status.js';
var __name__ = 'settings';
export var Settings =  __class__ ('Settings', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.__bg_color = '#F1F7EE';
		self.__human_size_radius = 5;
		self.__human_change_velocity_probability = 0.05;
		self.__human_max_velocity = 2;
		self.__human_status_color = dict ([[HumanStatus.SICK, '#ff000d'], [HumanStatus.HEALTHY, '#39ff14'], [HumanStatus.CONTAGIOUS, '#ff0490'], [HumanStatus.RECOVERED, '#0ff0fc'], [HumanStatus.DEAD, '#000000']]);
		self.__human_count = 200;
		self.__human_stationary_probability = 0.6;
		self.__human_sick_probability = 0.2;
		self.__human_immunity_probability = 0;
		self.__human_death_probability = 0.1;
		self.__contagious_time = 60;
		self.__sick_time = 60;
		self.__max_time_variation = 5;
		self.__infection_distance = 2 * self.__human_size_radius + 5;
		self.__infection_probability = 0.8;
		self.__width = 0;
		self.__height = 0;
		self.__isolation_width_percentage = 0.1;
		self.__isolation_width = 0;
		self.__isolation_capacity = 50;
		self.__isolation_probability = 1;
		self.__isolation_background_color = '#D3D3D3';
		self.__cemetery_width_percentage = 0.05;
		self.__cemetery_width = 0;
		self.__cemetery_background_color = '#D3D3D3';
	});},
	get _get_bg_color () {return __get__ (this, function (self) {
		return self.__bg_color;
	});},
	get _get_human_size_radius () {return __get__ (this, function (self) {
		return self.__human_size_radius;
	});},
	get _get_human_change_velocity_probability () {return __get__ (this, function (self) {
		return self.__human_change_velocity_probability;
	});},
	get _get_human_status_color () {return __get__ (this, function (self) {
		return self.__human_status_color;
	});},
	get _get_human_count () {return __get__ (this, function (self) {
		return self.__human_count;
	});},
	get _get_human_stationary_probability () {return __get__ (this, function (self) {
		return self.__human_stationary_probability;
	});},
	get _get_human_sick_probability () {return __get__ (this, function (self) {
		return self.__human_sick_probability;
	});},
	get _get_human_immunity_probability () {return __get__ (this, function (self) {
		return self.__human_immunity_probability;
	});},
	get _get_human_death_probability () {return __get__ (this, function (self) {
		return self.__human_death_probability;
	});},
	get _get_contagious_time () {return __get__ (this, function (self) {
		return self.__contagious_time;
	});},
	get _get_sick_time () {return __get__ (this, function (self) {
		return self.__sick_time;
	});},
	get _get_infection_distance () {return __get__ (this, function (self) {
		return self.__infection_distance;
	});},
	get _get_infection_probability () {return __get__ (this, function (self) {
		return self.__infection_probability;
	});},
	get _get_isolation_width () {return __get__ (this, function (self) {
		return self.__isolation_width;
	});},
	get _get_max_time_variation () {return __get__ (this, function (self) {
		return self.__max_time_variation;
	});},
	get _get_human_max_velocity () {return __get__ (this, function (self) {
		return self.__human_max_velocity;
	});},
	get _get_isolation_capacity () {return __get__ (this, function (self) {
		return self.__isolation_capacity;
	});},
	get _get_isolation_probability () {return __get__ (this, function (self) {
		return self.__isolation_probability;
	});},
	get _get_isolation_background_color () {return __get__ (this, function (self) {
		return self.__isolation_background_color;
	});},
	get _get_cemetery_width () {return __get__ (this, function (self) {
		return self.__cemetery_width;
	});},
	get _get_cemetery_background_color () {return __get__ (this, function (self) {
		return self.__cemetery_background_color;
	});},
	get _get_width () {return __get__ (this, function (self) {
		return self.__width;
	});},
	get _set_width () {return __get__ (this, function (self, value) {
		self.__width = value;
		self.__isolation_width = int (self.__isolation_width_percentage * self.__width);
		self.__cemetery_width = int (self.__cemetery_width_percentage * self.__width);
	});},
	get _get_height () {return __get__ (this, function (self) {
		return self.__height;
	});},
	get _set_height () {return __get__ (this, function (self, value) {
		self.__height = value;
	});},
	get read_settings () {return __get__ (this, function (self) {
		self.__human_count = int (document.getElementById ('human_count_input').value);
		self.__human_sick_probability = float (document.getElementById ('human_sick_probability_input').value);
		self.__human_stationary_probability = float (document.getElementById ('human_stationary_probability_input').value);
		self.__human_death_probability = float (document.getElementById ('human_death_probability_input').value);
		self.__contagious_time = int (document.getElementById ('contagious_time_input').value);
		self.__sick_time = int (document.getElementById ('sick_time_input').value);
		self.__max_time_variation = int (document.getElementById ('max_time_variation_input').value);
		self.__infection_probability = float (document.getElementById ('infection_probability_input').value);
		self.__human_size_radius = int (document.getElementById ('human_radius_input').value);
		self.__infection_distance = 2 * self.__human_size_radius + int (document.getElementById ('infection_distance_input').value);
		self.__human_max_velocity = int (document.getElementById ('human_max_velocity_input').value);
		self.__human_immunity_probability = float (document.getElementById ('human_immunity_probability_input').value);
		self.__isolation_capacity = int (document.getElementById ('isolation_capacity_input').value);
	});}
});
Object.defineProperty (Settings, 'height', property.call (Settings, Settings._get_height, Settings._set_height));
Object.defineProperty (Settings, 'width', property.call (Settings, Settings._get_width, Settings._set_width));
Object.defineProperty (Settings, 'cemetery_background_color', property.call (Settings, Settings._get_cemetery_background_color));
Object.defineProperty (Settings, 'cemetery_width', property.call (Settings, Settings._get_cemetery_width));
Object.defineProperty (Settings, 'isolation_background_color', property.call (Settings, Settings._get_isolation_background_color));
Object.defineProperty (Settings, 'isolation_probability', property.call (Settings, Settings._get_isolation_probability));
Object.defineProperty (Settings, 'isolation_capacity', property.call (Settings, Settings._get_isolation_capacity));
Object.defineProperty (Settings, 'human_max_velocity', property.call (Settings, Settings._get_human_max_velocity));
Object.defineProperty (Settings, 'max_time_variation', property.call (Settings, Settings._get_max_time_variation));
Object.defineProperty (Settings, 'isolation_width', property.call (Settings, Settings._get_isolation_width));
Object.defineProperty (Settings, 'infection_probability', property.call (Settings, Settings._get_infection_probability));
Object.defineProperty (Settings, 'infection_distance', property.call (Settings, Settings._get_infection_distance));
Object.defineProperty (Settings, 'sick_time', property.call (Settings, Settings._get_sick_time));
Object.defineProperty (Settings, 'contagious_time', property.call (Settings, Settings._get_contagious_time));
Object.defineProperty (Settings, 'human_death_probability', property.call (Settings, Settings._get_human_death_probability));
Object.defineProperty (Settings, 'human_immunity_probability', property.call (Settings, Settings._get_human_immunity_probability));
Object.defineProperty (Settings, 'human_sick_probability', property.call (Settings, Settings._get_human_sick_probability));
Object.defineProperty (Settings, 'human_stationary_probability', property.call (Settings, Settings._get_human_stationary_probability));
Object.defineProperty (Settings, 'human_count', property.call (Settings, Settings._get_human_count));
Object.defineProperty (Settings, 'human_status_color', property.call (Settings, Settings._get_human_status_color));
Object.defineProperty (Settings, 'human_change_velocity_probability', property.call (Settings, Settings._get_human_change_velocity_probability));
Object.defineProperty (Settings, 'human_size_radius', property.call (Settings, Settings._get_human_size_radius));
Object.defineProperty (Settings, 'bg_color', property.call (Settings, Settings._get_bg_color));;

//# sourceMappingURL=settings.map