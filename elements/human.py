from elements.element import Element
from elements.human_status import HumanStatus
from environment import settings
import random


class Human(Element):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, position: (int, int), status: HumanStatus = HumanStatus.HEALTHY, stationary: bool = False):
        super().__init__(position)
        self._velocity = (0, 0)
        self._radius = settings.HUMAN_SIZE_RADIUS
        self._status = status
        self._stationary = stationary
        self._color = settings.HUMAN_STATUS_COLOR[self._status]

    @property
    def status(self) -> HumanStatus:
        return self._status

    def draw(self, screen):
        screen.draw.filled_circle(self._position, self._radius, self._color)

    def update(self):
        if self._stationary:
            return

        self._position = (self._position[0] + self._velocity[0], self._position[1] + self._velocity[1])
        self._position_to_bounds()
        if random.random() < settings.HUMAN_CHANGE_VELOCITY_PROBABILITY:
            self._velocity = (random.randint(-settings.HUMAN_MAX_VELOCITY, settings.HUMAN_MAX_VELOCITY),
                              random.randint(-settings.HUMAN_MAX_VELOCITY, settings.HUMAN_MAX_VELOCITY))

    def change_status(self, status: HumanStatus):
        """
        Changes status of the human element
        :param status: new status
        :return: None
        """
        self._status = status
        self._color = settings.HUMAN_STATUS_COLOR[self._status]

    def _position_to_bounds(self):
        """
        Clips element position to the bounds of the screen and reverse its velocity.
        :return: None
        """
        if self._position[0] < self._radius:
            self._position = (self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[0] > settings.WIDTH - self._radius:
            self._position = (settings.WIDTH - self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[1] < self._radius:
            self._position = (self._position[0], self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
        if self._position[1] > settings.HEIGHT - self._radius:
            self._position = (self._position[0], settings.HEIGHT - self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
