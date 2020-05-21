from settings import Settings
from elements.human import Human
from elements.human_status import HumanStatus
from elements.open_world import OpenWorld
import random


class SimulationRandom:
    """
    Class for simulation environment.
    """

    def __init__(self):
        self._settings = Settings()
        self._canvas = document.getElementById('simulation_canvas')
        self._canvas.width = self._canvas.clientWidth
        self._canvas.height = self._canvas.clientHeight

        self._settings.width = self._canvas.width
        self._settings.height = self._canvas.height

        self._context = self._canvas.getContext('2d')

        self._open_world = OpenWorld(self._settings, (self._settings.isolation_width, 0),
                                     (self._settings.width - self._settings.isolation_width, self._settings.height))
        self.reset()

    @property
    def settings(self):
        return self._settings

    def draw(self):
        self._context.fillStyle = self._settings.bg_color
        self._context.fillRect(0, 0, self._settings.width, self._settings.height)
        self._open_world.draw(self._context)

    def update(self):
        self._open_world.update()

    def reset(self):
        self._settings.read_settings()
        self._generate_humans()

    def _generate_humans(self):
        # TODO Clear elements
        for _ in range(self._settings.human_count):
            status = HumanStatus.HEALTHY

            if random.random() < self._settings.human_sick_probability:
                status = HumanStatus.SICK

            self._open_world.add_element(Human(self._settings,
                                               status,
                                               random.random() < self._settings.human_stationary_probability))

    def count(self, status: HumanStatus):
        return self._open_world.count(status)

    def add_sick(self):
        self._open_world.add_element(Human(self._settings,
                                           HumanStatus.SICK,
                                           False))


simulation = SimulationRandom()
