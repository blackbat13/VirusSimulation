import math
import random
from settings import Settings
from elements.container import Container
from elements.bounds import Bounds


class Element:
    """
    Abstract class for representing an element of the simulation.
    """

    def __init__(self, settings: Settings):
        self._settings = settings
        self._position: (int, int) = (0, 0)
        self._parent: Container = None

    @property
    def parent(self) -> Container:
        return self._parent

    @parent.setter
    def parent(self, value: Container):
        self._parent = value

    @property
    def bounds(self) -> Bounds:
        return self._parent.bounds

    @property
    def position(self) -> (int, int):
        return self._position

    @position.setter
    def position(self, value: (int, int)):
        self._position = value

    @property
    def x(self) -> int:
        return self._position[0]

    @x.setter
    def x(self, value: int):
        self._position = (value, self._position[1])

    @property
    def y(self) -> int:
        return self._position[1]

    @y.setter
    def y(self, value: int):
        self._position = (self._position[0], value)

    def set_random_position(self):
        self.x = random.randint(self.bounds.left, self.bounds.right)
        self.y = random.randint(self.bounds.top, self.bounds.bottom)

    def distance(self, element):
        return math.sqrt((self.x - element.x) ** 2 + (self.y - element.y) ** 2)

    def draw(self, context):
        """
        Draws element on the screen.
        :param context: HTML canvas context to draw on
        :return: None
        """
        pass

    def update(self):
        """
        Updates the element position etc.
        :return: None
        """
        pass

