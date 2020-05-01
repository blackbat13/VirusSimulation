from environment import Simulation
import settings
import pgzrun

WIDTH = settings.WIDTH
HEIGHT = settings.HEIGHT

simulation = Simulation()


def draw():
    simulation.draw(screen)


def update():
    simulation.update()


pgzrun.go()
