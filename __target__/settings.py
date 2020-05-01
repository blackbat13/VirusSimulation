from human_status import HumanStatus

BG_COLOR = "#fff"
WIDTH = 800
HEIGHT = 800

HUMAN_SIZE_RADIUS = 5
HUMAN_CHANGE_VELOCITY_PROBABILITY = 0.05
HUMAN_MAX_VELOCITY = 2

HUMAN_STATUS_COLOR = {HumanStatus.SICK: "#f00", HumanStatus.HEALTHY: "#0f0"}

HUMAN_COUNT = 100
HUMAN_STATIONARY_PROBABILITY = 0.80
HUMAN_SICK_PROBABILITY = 0.05

INFECTION_DISTANCE = 2 * HUMAN_SIZE_RADIUS + 5
