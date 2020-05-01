// Transcrypt'ed from Python, 2020-05-01 12:35:22
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {HumanStatus} from './human_status.js';
var __name__ = 'settings';
export var BG_COLOR = '#fff';
export var HUMAN_SIZE_RADIUS = 5;
export var HUMAN_CHANGE_VELOCITY_PROBABILITY = 0.05;
export var HUMAN_MAX_VELOCITY = 2;
export var HUMAN_STATUS_COLOR = dict ([[HumanStatus.SICK, '#f00'], [HumanStatus.HEALTHY, '#0f0']]);
export var HUMAN_COUNT = 100;
export var HUMAN_STATIONARY_PROBABILITY = 0.8;
export var HUMAN_SICK_PROBABILITY = 0.05;
export var INFECTION_DISTANCE = 2 * HUMAN_SIZE_RADIUS + 5;

//# sourceMappingURL=settings.map