from element import Element
from human_status import HumanStatus
import settings
import random
import math
import time


class Human(Element):
    """
    Class for representing a human in the simulation.
    """

    def __init__(self, position: (int, int), width, height, status, stationary):
        super().__init__(position)
        self._velocity = (0, 0)
        self._radius = settings.HUMAN_SIZE_RADIUS
        self._status = status
        self._stationary = stationary
        self._color = settings.HUMAN_STATUS_COLOR[self._status]
        self._canvas_width = width
        self._canvas_height = height
        self._timer = time.time()

    @property
    def status(self) -> HumanStatus:
        return self._status

    def draw(self, context):
        context.fillStyle = self._color
        context.beginPath()
        context.arc(self.x, self.y, self._radius, 0, 2 * math.pi)
        # screen.draw.filled_circle(self._position, self._radius, self._color)
        context.fill()

    def update(self):
        self._update_status()

        if not self._stationary:
            self._update_position()

    def _update_position(self):
        self._position = (self._position[0] + self._velocity[0], self._position[1] + self._velocity[1])
        self._position_to_bounds()
        if random.random() < settings.HUMAN_CHANGE_VELOCITY_PROBABILITY:
            self._velocity = (random.randint(-settings.HUMAN_MAX_VELOCITY, settings.HUMAN_MAX_VELOCITY),
                              random.randint(-settings.HUMAN_MAX_VELOCITY, settings.HUMAN_MAX_VELOCITY))

    def _update_status(self):
        if self._status == HumanStatus.CONTAGIOUS and (time.time() - self._timer) > settings.CONTAGIOUS_TIME:
            self._timer = time.time()
            self.change_status(HumanStatus.SICK)

        if self._status == HumanStatus.SICK and (time.time() - self._timer) > settings.SICK_TIME:
            self._timer = time.time()
            self.change_status(HumanStatus.RECOVERED)

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
        if self._position[0] > self._canvas_width - self._radius:
            self._position = (self._canvas_width - self._radius, self._position[1])
            self._velocity = (-self._velocity[0], self._velocity[1])
        if self._position[1] < self._radius:
            self._position = (self._position[0], self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
        if self._position[1] > self._canvas_height - self._radius:
            self._position = (self._position[0], self._canvas_height - self._radius)
            self._velocity = (self._velocity[0], -self._velocity[1])
