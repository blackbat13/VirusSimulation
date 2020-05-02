from settings import Settings
from elements.human import Human
from elements.human_status import HumanStatus
from elements.road import Road
from elements.road_type import RoadType
import random


class SimulationRandom:
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
                if s.distance(h) <= self._settings.INFECTION_DISTANCE \
                        and random.random() < self._settings.INFECTION_PROBABILITY:
                    h.change_status(HumanStatus.CONTAGIOUS)

    def reset(self):
        self._settings.read_settings()
        self._generate_humans()

    def _generate_humans(self):
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


class SimulationHouses:
    """
    Class for simulation environment.
    """

    def __init__(self):
        self._human_list = []
        self._road_list = []
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

        for r in self._road_list:
            r.draw(self._context)

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
                if s.distance(h) <= self._settings.INFECTION_DISTANCE \
                        and random.random() < self._settings.INFECTION_PROBABILITY:
                    h.change_status(HumanStatus.CONTAGIOUS)

    def reset(self):
        self._settings.read_settings()
        self._generate_humans()
        self._generate_roads()

    def _generate_humans(self):
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

    def _generate_roads(self):
        self._road_list = []

        gap_width = self._settings.WIDTH / (self._settings.ROAD_COUNT + 1)
        for x in range(gap_width, self._settings.WIDTH, gap_width):
            self._road_list.append(Road(self._settings,
                                        (x - self._settings.ROAD_WIDTH / 2, 0),
                                        RoadType.VERTICAL))

        gap_height = self._settings.HEIGHT / (self._settings.ROAD_COUNT + 1)
        for y in range(gap_height, self._settings.HEIGHT, gap_height):
            self._road_list.append(Road(self._settings,
                                        (0, y - self._settings.ROAD_WIDTH / 2),
                                        RoadType.HORIZONTAL))

    def count(self, status: HumanStatus):
        return sum(1 for h in self._human_list if h.status == status)


simulation = SimulationRandom()
# simulation = SimulationHouses()
