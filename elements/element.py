from abc import ABC, abstractmethod


class Element(ABC):
    """
    Abstract class for representing an element of the simulation.
    """

    def __init__(self, position: (int, int)):
        self._position = position

    @property
    def position(self) -> (int, int):
        return self._position

    @position.setter
    def position(self, value: (int, int)):
        self._position = value

    @abstractmethod
    def draw(self, screen):
        pass
