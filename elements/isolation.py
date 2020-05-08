from elements.element import Element
from settings import Settings


class Isolation(Element):
    """
    Class for representing an isolation in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int)):
        super().__init__(settings, position)

    def draw(self, context):
        context.fillStyle = self._settings.ISOLATION_BG_COLOR
        context.fillRect(self.x,
                         self.y,
                         self._settings.ISOLATION_WIDTH,
                         self._settings.HEIGHT)
        context.fillStyle = self._settings.ISOLATION_BARRIER_COLOR
        context.fillRect(self.x + self._settings.ISOLATION_WIDTH,
                         self.y,
                         self._settings.ISOLATION_BARRIER_WIDTH,
                         self._settings.HEIGHT)
        context.font = "20px Arial"
        context.fillText("ISOLATION", self.x + 20, self.y + 40)
