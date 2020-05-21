from elements.container import Container
from elements.human_status import HumanStatus
from settings import Settings
import random


class OpenWorld(Container):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int)):
        super().__init__(settings, position, size)

    def update(self):
        Container.update(self)
        self._update_infection()

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
