class Margin:
    def __init__(self, left, right, top, bottom):
        self._left = left
        self._right = right
        self._top = top
        self._bottom = bottom

    @property
    def left(self):
        return self._left

    @property
    def right(self):
        return self._right

    @property
    def top(self):
        return self._top

    @property
    def bottom(self):
        return self._bottom
