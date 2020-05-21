from settings import Settings
from elements.bounds import Bounds
from elements.human_status import HumanStatus


class Container:
    """
    Abstract class for representing a container of the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int), simulation):
        self._settings = settings
        self._position: (int, int) = position
        self._size: (int, int) = size
        self._elements: list = []
        self._simulation = simulation

    @property
    def width(self) -> int:
        return self._size[0]

    @property
    def height(self) -> int:
        return self._size[1]

    @property
    def bounds(self) -> Bounds:
        return Bounds(self.x, self.x + self.width, self.y, self.y + self.height)

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

    def draw(self, context):
        """
        Draws element on the screen.
        :param context: HTML canvas context to draw on
        :return: None
        """
        for element in self._elements:
            element.draw(context)

    def update(self):
        """
        Updates the element position etc.
        :return: None
        """
        for element in self._elements:
            element.update()

    def add_element(self, element):
        element.parent = self
        element.set_random_position()
        self._elements.append(element)

    def count(self, status: HumanStatus):
        return sum(1 for h in self._elements if h.status == status)

    def clear(self):
        self._elements.clear()

    def elements_count(self):
        return len(self._elements)
