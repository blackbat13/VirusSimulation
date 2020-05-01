from settings import Settings
from human import Human
from human_status import HumanStatus
import random


class Simulation:
    """
    Class for simulation environment.
    """

    def __init__(self):
        self._human_list = []
        self._settings = Settings()
        self._canvas = document.getElementById('simulation_canvas')
        self._canvas.width = self._canvas.clientWidth
        self._canvas.height = self._canvas.clientHeight

        self._settings.WIDTH = self._canvas.width
        self._settings.HEIGHT = self._canvas.height

        self._context = self._canvas.getContext('2d')

        self.reset()

    @property
    def settings(self):
        return self._settings

    def draw(self):
        self._context.fillStyle = self._settings.BG_COLOR
        self._context.fillRect(0, 0, self._settings.WIDTH, self._settings.HEIGHT)

        for h in self._human_list:
            h.draw(self._context)

    def update(self):
        for h in self._human_list:
            h.update()

        sick = list(
            filter(lambda h: h.status == HumanStatus.SICK or h.status == HumanStatus.CONTAGIOUS, self._human_list))
        healthy = list(filter(lambda h: h.status == HumanStatus.HEALTHY, self._human_list))

        for s in sick:
            for h in healthy:
                if s.distance(h) <= self._settings.INFECTION_DISTANCE:
                    h.change_status(HumanStatus.CONTAGIOUS)

    def reset(self):
        self._settings.read_settings()
        self._human_list = []

        for _ in range(self._settings.HUMAN_COUNT):
            status = HumanStatus.HEALTHY

            if random.random() < self._settings.HUMAN_SICK_PROBABILITY:
                status = HumanStatus.SICK

            self._human_list.append(Human(self._settings,
                                          (random.randint(0, self._settings.WIDTH),
                                           random.randint(0, self._settings.HEIGHT)),
                                          status,
                                          random.random() < self._settings.HUMAN_STATIONARY_PROBABILITY))

    def count(self, status: HumanStatus):
        return sum(1 for h in self._human_list if h.status == status)


simulation = Simulation()
