from settings import Settings
from elements.human import Human
from elements.human_status import HumanStatus
from elements.open_world import OpenWorld
from elements.isolation import Isolation
from elements.cemetery import Cemetery
import random


class Simulation:
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
                                     (
                                         self._settings.width - self._settings.isolation_width - self._settings.cemetery_width,
                                         self._settings.height),
                                     self)
        self._isolation = Isolation(self._settings, (0, 0), (self._settings.isolation_width, self._settings.height),
                                    self)
        self._cemetery = Cemetery(self._settings, (self._settings.width - self._settings.cemetery_width, 0),
                                  (self._settings.cemetery_width, self._settings.height), self)
        self.reset()

    @property
    def settings(self):
        return self._settings

    def draw(self):
        self._context.fillStyle = self._settings.bg_color
        self._context.fillRect(0, 0, self._settings.width, self._settings.height)
        self._open_world.draw(self._context)
        self._isolation.draw(self._context)
        self._cemetery.draw(self._context)

    def update(self):
        self._open_world.update()
        self._isolation.update()
        self._cemetery.update()

    def reset(self):
        self._settings.read_settings()
        self._generate_humans()

    def _generate_humans(self):
        self._open_world.clear()
        self._isolation.clear()
        self._cemetery.clear()
        for _ in range(self._settings.human_count):
            status = HumanStatus.HEALTHY

            if random.random() < self._settings.human_sick_probability:
                status = HumanStatus.SICK

            self._open_world.add_element(Human(self._settings,
                                               status,
                                               random.random() < self._settings.human_stationary_probability))

    def count(self, status: HumanStatus):
        return self._open_world.count(status) + self._isolation.count(status)

    def add_sick(self):
        self._open_world.add_element(Human(self._settings, HumanStatus.SICK, False))

    def add_healthy(self):
        self._open_world.add_element(Human(self._settings, HumanStatus.HEALTHY, False))

    def add_to_open_world(self, element):
        self._open_world.add_element(element)

    def add_to_isolation(self, element):
        self._isolation.add_element(element)

    def add_to_cemetery(self, element):
        self._cemetery.add_element(element)

    def is_isolation_full(self):
        return self._isolation.elements_count() >= self._settings.isolation_capacity


simulation = Simulation()
