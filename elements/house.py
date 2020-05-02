from elements.element import Element
from settings import Settings


class House(Element):
    """
    Class for representing a house in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int)):
        super().__init__(settings, position)

    def draw(self, context):
        pass

    def update(self):
        pass
