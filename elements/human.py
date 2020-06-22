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

    def __init__(self, settings: Settings, status: HumanStatus, stationary: bool):
        super().__init__(settings)
        self._velocity = (0, 0)
        self._radius = settings.human_size_radius
        self._status = status
        self._stationary = stationary
        self._color = settings.human_status_color[self._status]
        self._timer = time.time()
        self._time_variation = random.randint(-settings.max_time_variation, settings.max_time_variation)
        if self._status == HumanStatus.SICK or self._status == HumanStatus.CONTAGIOUS:
            self._immune = False
        else:
            self._immune = random.random() < self._settings.human_immunity_probability
        self._to_isolation_timer = 0
        if self._immune:
            self._status = HumanStatus.HEALTHY
            self._color = self._settings.human_status_color[HumanStatus.HEALTHY]

    @property
    def status(self) -> HumanStatus:
        return self._status

    def start_isolation_timer(self):
        self._to_isolation_timer = time.time()

    def check_isolation_timer(self) -> bool:
        if self._to_isolation_timer == 0:
            self.start_isolation_timer()
        return (time.time() - self._to_isolation_timer) > (self._settings.to_isolation_time + self._time_variation)

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
        if random.random() < self._settings.human_change_velocity_probability:
            self._velocity = (random.randint(-self._settings.human_max_velocity, self._settings.human_max_velocity),
                              random.randint(-self._settings.human_max_velocity, self._settings.human_max_velocity))

    def _update_status(self):
        if self._status == HumanStatus.CONTAGIOUS and (time.time() - self._timer) > (
                self._settings.contagious_time + self._time_variation):
            self._timer = time.time()
            self.change_status(HumanStatus.SICK)

        if self._status == HumanStatus.SICK and (time.time() - self._timer) > (
                self._settings.sick_time + self._time_variation):
            self._timer = time.time()
            if random.random() < self._settings.human_death_probability:
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
        self._color = self._settings.human_status_color[self._status]

    def _position_to_bounds(self):
        """
        Clips element position to the bounds of the screen and reverse its velocity.
        :return: None
        """
        if self._position[0] < self.bounds.left + self._radius:
            self._position = (self.bounds.left + self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[0] > self.bounds.right - self._radius:
            self._position = (self.bounds.right - self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[1] < self.bounds.top + self._radius:
            self._position = (self._position[0], self.bounds.top + self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
        if self._position[1] > self.bounds.bottom - self._radius:
            self._position = (self._position[0], self.bounds.bottom - self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
