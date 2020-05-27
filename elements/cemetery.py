from settings import Settings
from elements.container import Container


class Cemetery(Container):
    """
    Cemetery container.
    """

    def __init__(self, settings: Settings, position: (int, int), size: (int, int), simulation):
        super().__init__(settings, position, size, simulation)

    def draw(self, context):
        context.fillStyle = self._settings.isolation_background_color
        context.fillRect(self.x, self.y, self.width, self.height)
        self._draw_text(context, "CEMETERY")
        Container.draw(self, context)
