import settings
from human import Human
from human_status import HumanStatus
import random


class Simulation:
    """
    Class for simulation environment.
    """

    def __init__(self):
        self._human_list = []
        self._canvas = document.getElementById('simulation_canvas')
        self._canvas.width = self._canvas.clientWidth
        self._canvas.height = self._canvas.clientHeight

        self._width = self._canvas.width
        self._height = self._canvas.height

        self._context = self._canvas.getContext('2d')

        for _ in range(settings.HUMAN_COUNT):
            status = HumanStatus.HEALTHY

            if random.random() < settings.HUMAN_SICK_PROBABILITY:
                status = HumanStatus.SICK

            # console.log(status, status == HumanStatus.SICK)
            self._human_list.append(Human((random.randint(0, self._width), random.randint(0, self._height)),
                                          self._width,
                                          self._height,
                                          status,
                                          random.random() < settings.HUMAN_STATIONARY_PROBABILITY))

    def draw(self):
        self._context.fillStyle = settings.BG_COLOR
        self._context.fillRect(0, 0, self._width, self._height)

        for h in self._human_list:
            h.draw(self._context)

    def update(self):
        # self._human_list[0].change_status(HumanStatus.HEALTHY)
        # self._human_list[1].change_status(HumanStatus.SICK)

        for h in self._human_list:
            h.update()

        sick = list(filter(lambda h: h.status == HumanStatus.SICK or h.status == HumanStatus.CONTAGIOUS, self._human_list))
        healthy = list(filter(lambda h: h.status == HumanStatus.HEALTHY, self._human_list))

        for s in sick:
            for h in healthy:
                # print(s.distance(h))
                if s.distance(h) <= settings.INFECTION_DISTANCE:
                    h.change_status(HumanStatus.CONTAGIOUS)

        # for i in range(len(self._human_list)):
        #     if self._human_list[i].status != HumanStatus.SICK:
        #         continue
        #     for j in range(len(self._human_list)):
        #         if self._human_list[j].status != HumanStatus.HEALTHY:
        #             continue
        #         if self._human_list[i].distance(self._human_list[j]) < settings.INFECTION_DISTANCE:
        #             self._human_list[j].change_status(HumanStatus.SICK)


simulation = Simulation()
