from environment import settings
from elements import House, Human, HumanStatus
from pgzero.screen import Screen
from typing import List
import random


class Simulation:
    """
    Class for simulation environment.
    """

    def __init__(self):
        self._human_list: List[Human] = []

        for _ in range(settings.HUMAN_COUNT):
            status = HumanStatus.HEALTHY
            if random.random() < settings.HUMAN_SICK_PROBABILITY:
                status = HumanStatus.SICK
            self._human_list.append(Human((random.randint(0, settings.WIDTH), random.randint(0, settings.HEIGHT)),
                                          status=status,
                                          stationary=random.random() < settings.HUMAN_STATIONARY_PROBABILITY))

    def draw(self, screen: Screen):
        screen.fill(settings.BG_COLOR)

        for h in self._human_list:
            h.draw(screen)

    def update(self):
        # self._human_list[0].change_status(HumanStatus.HEALTHY)
        # self._human_list[1].change_status(HumanStatus.SICK)

        for h in self._human_list:
            h.update()

        sick = list(filter(lambda h: h.status == HumanStatus.SICK, self._human_list))
        healthy = list(filter(lambda h: h.status == HumanStatus.HEALTHY, self._human_list))

        for s in sick:
            for h in healthy:
                # print(s.distance(h))
                if s.distance(h) <= settings.INFECTION_DISTANCE:
                    h.change_status(HumanStatus.SICK)



        # for i in range(len(self._human_list)):
        #     if self._human_list[i].status != HumanStatus.SICK:
        #         continue
        #     for j in range(len(self._human_list)):
        #         if self._human_list[j].status != HumanStatus.HEALTHY:
        #             continue
        #         if self._human_list[i].distance(self._human_list[j]) < settings.INFECTION_DISTANCE:
        #             self._human_list[j].change_status(HumanStatus.SICK)
