from environment import Simulation
import pgzrun

WIDTH = 500
HEIGHT = 500

simulation = Simulation()


def draw():
    simulation.draw(screen)


def update():
    simulation.update()


pgzrun.go()
