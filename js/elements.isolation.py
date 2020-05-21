from elements.container import Container
from elements.human_status import HumanStatus
from settings import Settings
import random
import math


class Isolation(Container):
    """
    Isolation container.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int), simulation):
        super().__init__(settings, position, size, simulation)

    def update(self):
        Container.update(self)
        self._remove_recovered()
        self._update_cemetery()

    def draw(self, context):
        context.fillStyle = self._settings.isolation_background_color
        context.fillRect(self.x, self.y, self.width, self.height)
        self._draw_text(context, "ISOLATION")
        Container.draw(self, context)

    def _remove_recovered(self):
        recovered = list(filter(lambda h: h.status == HumanStatus.RECOVERED, self._elements))
        for rec in recovered:
            self._elements.remove(rec)
            self._simulation.add_to_open_world(rec)
