from elements.element import Element
from elements.human_status import HumanStatus
from settings import Settings
import random
import math
import time


class Human(Element):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int), status, stationary):
        super().__init__(settings, position)
        self._velocity = (0, 0)
        self._radius = settings.HUMAN_SIZE_RADIUS
        self._status = status
        self._stationary = stationary
        self._color = settings.HUMAN_STATUS_COLOR[self._status]
        self._timer = time.time()
        self._time_variation = random.randint(-settings.MAX_TIME_VARIATION, settings.MAX_TIME_VARIATION)
        self._immune = random.random() < self._settings.HUMAN_IMMUNITY_PROBABILITY
        if self._immune:
            self._status = HumanStatus.HEALTHY
            self._color = self._settings.HUMAN_STATUS_COLOR[HumanStatus.HEALTHY]

    @property
    def status(self) -> HumanStatus:
        return self._status

    def draw(self, context):
        context.fillStyle = self._color
        context.beginPath()
        context.arc(self.x, self.y, self._radius, 0, 2 * math.pi)
        context.fill()

    def update(self):
        self._update_status()

        if not self._stationary:
            self._update_position()

    def _update_position(self):
        self._position = (self._position[0] + self._velocity[0], self._position[1] + self._velocity[1])
        self._position_to_bounds()
        if random.random() < self._settings.HUMAN_CHANGE_VELOCITY_PROBABILITY:
            self._velocity = (random.randint(-self._settings.HUMAN_MAX_VELOCITY, self._settings.HUMAN_MAX_VELOCITY),
                              random.randint(-self._settings.HUMAN_MAX_VELOCITY, self._settings.HUMAN_MAX_VELOCITY))

    def _update_status(self):
        if self._status == HumanStatus.CONTAGIOUS and (time.time() - self._timer) > (
                self._settings.CONTAGIOUS_TIME + self._time_variation):
            self._timer = time.time()
            self.change_status(HumanStatus.SICK)

        if self._status == HumanStatus.SICK and (time.time() - self._timer) > (
                self._settings.SICK_TIME + self._time_variation):
            self._timer = time.time()
            if random.random() < self._settings.HUMAN_DEATH_PROBABILITY:
                self.change_status(HumanStatus.DEAD)
                self._stationary = True
            else:
                self.change_status(HumanStatus.RECOVERED)

    def change_status(self, status: HumanStatus):
        """
        Changes status of the human element
        :param status: new status
        :return: None
        """
        if self._immune:
            return
        self._status = status
        self._color = self._settings.HUMAN_STATUS_COLOR[self._status]

    def _position_to_bounds(self):
        """
        Clips element position to the bounds of the screen and reverse its velocity.
        :return: None
        """
        if self._position[0] < self._radius:
            self._position = (self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[0] > self._settings.WIDTH - self._radius:
            self._position = (self._settings.WIDTH - self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[1] < self._radius:
            self._position = (self._position[0], self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
        if self._position[1] > self._settings.HEIGHT - self._radius:
            self._position = (self._position[0], self._settings.HEIGHT - self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
