from environment import settings
from elements import House, Human
from pgzero.screen import Screen


class Simulation:
    """
    Class for simulation environment.
    """

    def __init__(self):
        pass

    def draw(self, screen: Screen):
        screen.fill(settings.BG_COLOR)

    def update(self):
        pass
