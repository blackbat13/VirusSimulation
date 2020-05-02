from elements.element import Element
from elements.road_type import RoadType
from settings import Settings


class Road(Element):
    """
    Class for representing a road in the simulation.
    """

    def __init__(self, settings: Settings, position: (int, int), road_type: RoadType):
        super().__init__(settings, position)
        self._road_type = road_type

    def draw(self, context):
        context.fillStyle = self._settings.ROAD_COLOR
        if self._road_type == RoadType.VERTICAL:
            context.fillRect(self.x, self.y, self._settings.ROAD_WIDTH, self._settings.HEIGHT)
        elif self._road_type == RoadType.HORIZONTAL:
            context.fillRect(self.x, self.y, self._settings.WIDTH, self._settings.ROAD_WIDTH)

    def update(self):
        pass
