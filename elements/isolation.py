from elements.container import Container
from elements.human_status import HumanStatus
from settings import Settings
import random
import math


class Isolation(Container):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int), simulation):
        super().__init__(settings, position, size, simulation)

    def update(self):
        Container.update(self)
        self._remove_recovered()

    def draw(self, context):
        context.fillStyle = self._settings.isolation_background_color
        context.fillRect(self.x, self.y, self.width, self.height)
        self._draw_text(context)
        Container.draw(self, context)

    def _draw_text(self, context):
        context.fillStyle = "black"
        context.textAlign = "center"
        context.font = "30px Arial"
        text = "ISOLATION"
        for i in range(len(text)):
            y = (i+1) * (self.height / (len(text) + 1)) + self.y
            context.fillText(text[i], (self.x + self.width) // 2, y)

    def _remove_recovered(self):
        recovered = list(filter(lambda h: h.status == HumanStatus.RECOVERED, self._elements))
        for rec in recovered:
            self._elements.remove(rec)
            self._simulation.add_to_open_world(rec)
