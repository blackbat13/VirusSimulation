from elements.human_status import HumanStatus


class Settings:
    def __init__(self):
        self.__bg_color = "#F1F7EE"

        self.__human_size_radius = 5
        self.__human_change_velocity_probability = 0.05
        self.__human_max_velocity = 2

        self.__human_status_color = {HumanStatus.SICK: "#ff000d",
                                     HumanStatus.HEALTHY: "#39ff14",
                                     HumanStatus.CONTAGIOUS: "#ff0490",
                                     HumanStatus.RECOVERED: "#0ff0fc",
                                     HumanStatus.DEAD: "#000000"}

        self.__human_count = 200
        self.__human_stationary_probability = 0.60
        self.__human_sick_probability = 0.20
        self.__human_immunity_probability = 0
        self.__human_death_probability = 0.1

        self.__contagious_time = 60
        self.__sick_time = 60
        self.__max_time_variation = 5

        self.__infection_distance = 2 * self.__human_size_radius + 5
        self.__infection_probability = 0.8

        self.__width = 0
        self.__height = 0

        self.__isolation_width_percentage = 0.1
        self.__isolation_width = 0

    @property
    def bg_color(self) -> str:
        return self.__bg_color

    @property
    def human_size_radius(self) -> int:
        return self.__human_size_radius

    @property
    def human_change_velocity_probability(self) -> float:
        return self.__human_change_velocity_probability

    @property
    def human_status_color(self) -> dict:
        return self.__human_status_color

    @property
    def human_count(self) -> int:
        return self.__human_count

    @property
    def human_stationary_probability(self) -> float:
        return self.__human_stationary_probability

    @property
    def human_sick_probability(self) -> float:
        return self.__human_sick_probability

    @property
    def human_immunity_probability(self) -> float:
        return self.__human_immunity_probability

    @property
    def human_death_probability(self) -> float:
        return self.__human_death_probability

    @property
    def contagious_time(self) -> int:
        return self.__contagious_time

    @property
    def sick_time(self) -> int:
        return self.__sick_time

    @property
    def infection_distance(self) -> int:
        return self.__infection_distance

    @property
    def infection_probability(self) -> float:
        return self.__infection_probability

    @property
    def isolation_width(self) -> int:
        return self.__isolation_width

    @property
    def max_time_variation(self) -> int:
        return self.__max_time_variation

    @property
    def human_max_velocity(self) -> int:
        return self.__human_max_velocity

    @property
    def width(self) -> int:
        return self.__width

    @width.setter
    def width(self, value: int):
        self.__width = value
        self.__isolation_width = int(self.__isolation_width_percentage * self.__width)

    @property
    def height(self) -> int:
        return self.__height

    @height.setter
    def height(self, value: int):
        self.__height = value

    def read_settings(self):
        self.__human_count = int(document.getElementById('human_count_input').value)
        self.__human_sick_probability = float(document.getElementById("human_sick_probability_input").value)
        self.__human_stationary_probability = float(document.getElementById("human_stationary_probability_input").value)
        self.__human_death_probability = float(document.getElementById("human_death_probability_input").value)
        self.__contagious_time = int(document.getElementById("contagious_time_input").value)
        self.__sick_time = int(document.getElementById("sick_time_input").value)
        self.__max_time_variation = int(document.getElementById("max_time_variation_input").value)
        self.__infection_probability = float(document.getElementById("infection_probability_input").value)
        self.__human_size_radius = int(document.getElementById("human_radius_input").value)
        self.__infection_distance = 2 * self.__human_size_radius + int(
            document.getElementById("infection_distance_input").value)
        self.__human_max_velocity = int(document.getElementById("human_max_velocity_input").value)
        self.__human_immunity_probability = float(document.getElementById("human_immunity_probability_input").value)
