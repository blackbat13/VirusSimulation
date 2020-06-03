from elements.container import Container
from elements.human_status import HumanStatus
from settings import Settings
import random
import time


class OpenWorld(Container):
    """
    Open world container.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int), simulation):
        super().__init__(settings, position, size, simulation)

    def update(self):
        Container.update(self)
        self._update_isolation()
        self._update_infection()
        self._update_cemetery()

    def _update_isolation(self):
        if self._simulation.is_isolation_full():
            return
        sick = list(
            filter(lambda h: h.status == HumanStatus.SICK, self._elements))
        for s in sick:
            if s.check_isolation_timer():
                self._simulation.add_to_isolation(s)
                self._elements.remove(s)
                if self._simulation.is_isolation_full():
                    return

    def _update_infection(self):
        sick = list(
            filter(lambda h: h.status == HumanStatus.SICK or h.status == HumanStatus.CONTAGIOUS, self._elements))
        healthy = list(filter(lambda h: h.status == HumanStatus.HEALTHY, self._elements))

        grid_size = self._settings.infection_distance * 2

        healthy_grid = [[[] for _ in range(self._settings.height // grid_size + 1)] for _ in
                        range(self._settings.width // grid_size + 1)]

        for h in healthy:
            healthy_grid[h.x // grid_size][h.y // grid_size].append(h)

        for s in sick:
            x = s.x // grid_size
            y = s.y // grid_size
            for kx in range(-1, 2):
                if x + kx < 0 or x + kx >= len(healthy_grid):
                    continue
                for ky in range(-1, 2):
                    if y + ky < 0 or y + ky >= len(healthy_grid[x + kx]):
                        continue
                    for h in healthy_grid[x + kx][y + ky]:
                        if s.distance(h) <= self._settings.infection_distance and \
                                random.random() < self._settings.infection_probability:
                            h.change_status(HumanStatus.CONTAGIOUS)
