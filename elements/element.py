from abc import ABC, abstractmethod
import pgzero.screen
import math


class Element(ABC):
    """
    Abstract class for representing an element of the simulation.
    """

    def __init__(self, position: (int, int)):
        self._position: (int, int) = position

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

    def distance(self, element):
        return math.sqrt((self.x - element.x) ** 2 + (self.y - element.y) ** 2)

    @abstractmethod
    def draw(self, screen: pgzero.screen.Screen):
        """
        Draws element on the screen.
        :param screen: screen to draw on
        :return: None
        """
        pass

    @abstractmethod
    def update(self):
        """
        Updates the element position etc.
        :return: None
        """
        pass
