from human_status import HumanStatus


class Settings:
    def __init__(self):
        self.BG_COLOR = "#F1F7EE"

        self.HUMAN_SIZE_RADIUS = 5
        self.HUMAN_CHANGE_VELOCITY_PROBABILITY = 0.05
        self.HUMAN_MAX_VELOCITY = 2

        self.HUMAN_STATUS_COLOR = {HumanStatus.SICK: "#ff000d",
                                   HumanStatus.HEALTHY: "#39ff14",
                                   HumanStatus.CONTAGIOUS: "#ff0490",
                                   HumanStatus.RECOVERED: "#ccff00",
                                   HumanStatus.DEAD: "#000000"}

        self.HUMAN_COUNT = 200
        self.HUMAN_STATIONARY_PROBABILITY = 0.60
        self.HUMAN_SICK_PROBABILITY = 0.20
        self.HUMAN_DEATH_PROBABILITY = 0.1

        self.CONTAGIOUS_TIME = 60
        self.SICK_TIME = 60

        self.INFECTION_DISTANCE = 2 * self.HUMAN_SIZE_RADIUS + 5

        self.WIDTH = 0
        self.HEIGHT = 0

    def read_settings(self):
        self.HUMAN_COUNT = document.getElementById('human_count_input').value
        self.HUMAN_SICK_PROBABILITY = document.getElementById("human_sick_probability_input").value
        self.HUMAN_STATIONARY_PROBABILITY = document.getElementById("human_stationary_probability_input").value
        self.HUMAN_DEATH_PROBABILITY = document.getElementById("human_death_probability_input").value
