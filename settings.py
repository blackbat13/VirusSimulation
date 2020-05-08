from elements.human_status import HumanStatus


class Settings:
    def __init__(self):
        self.BG_COLOR = "#F1F7EE"

        self.HUMAN_SIZE_RADIUS = 5
        self.HUMAN_CHANGE_VELOCITY_PROBABILITY = 0.05
        self.HUMAN_MAX_VELOCITY = 2

        self.HUMAN_STATUS_COLOR = {HumanStatus.SICK: "#ff000d",
                                   HumanStatus.HEALTHY: "#39ff14",
                                   HumanStatus.CONTAGIOUS: "#ff0490",
                                   HumanStatus.RECOVERED: "#0ff0fc",
                                   HumanStatus.DEAD: "#000000"}

        self.HUMAN_COUNT = 200
        self.HUMAN_STATIONARY_PROBABILITY = 0.60
        self.HUMAN_SICK_PROBABILITY = 0.20
        self.HUMAN_IMMUNITY_PROBABILITY = 0
        self.HUMAN_DEATH_PROBABILITY = 0.1

        self.CONTAGIOUS_TIME = 60
        self.SICK_TIME = 60
        self.MAX_TIME_VARIATION = 5

        self.INFECTION_DISTANCE = 2 * self.HUMAN_SIZE_RADIUS + 5
        self.INFECTION_PROBABILITY = 0.8

        self.ROAD_COLOR = "#555555"
        self.ROAD_WIDTH = self.HUMAN_SIZE_RADIUS * 6
        self.ROAD_COUNT = 3

        self.WIDTH = 0
        self.HEIGHT = 0

        self.ISOLATION_WIDTH = 150
        self.ISOLATION_BARRIER_WIDTH = 10
        self.ISOLATION_BARRIER_COLOR = "#000000"
        self.ISOLATION_BG_COLOR = "#aaaaaa"

    def set_width(self, width):
        self.WIDTH = width

    def set_height(self, height):
        self.HEIGHT = height

    def read_settings(self):
        self.HUMAN_COUNT = int(document.getElementById('human_count_input').value)
        self.HUMAN_SICK_PROBABILITY = float(document.getElementById("human_sick_probability_input").value)
        self.HUMAN_STATIONARY_PROBABILITY = float(document.getElementById("human_stationary_probability_input").value)
        self.HUMAN_DEATH_PROBABILITY = float(document.getElementById("human_death_probability_input").value)
        self.CONTAGIOUS_TIME = int(document.getElementById("contagious_time_input").value)
        self.SICK_TIME = int(document.getElementById("sick_time_input").value)
        self.MAX_TIME_VARIATION = int(document.getElementById("max_time_variation_input").value)
        self.INFECTION_PROBABILITY = float(document.getElementById("infection_probability_input").value)
        self.HUMAN_SIZE_RADIUS = int(document.getElementById("human_radius_input").value)
        self.INFECTION_DISTANCE = 2 * self.HUMAN_SIZE_RADIUS + int(
            document.getElementById("infection_distance_input").value)
        self.HUMAN_MAX_VELOCITY = int(document.getElementById("human_max_velocity_input").value)
        self.HUMAN_IMMUNITY_PROBABILITY = float(document.getElementById("human_immunity_probability_input").value)
