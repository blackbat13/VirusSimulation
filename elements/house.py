from elements.element import Element


class House(Element):
    """
    Class for representing a house in the simulation.
    """

    def __init__(self, position: (int, int)):
        super().__init__(position)

    def draw(self, screen):
        pass
