from elements.element import Element


class Human(Element):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, position: (int, int)):
        super().__init__(position)

    def draw(self, screen):
        pass
