import pygame, sys, json

pygame.display.set_mode((1, 1))

img = pygame.image.load("./mesh_source.png").convert()

data = []
for y in range(img.get_height()):
    data.append([])
    for x in range(img.get_width()):
        color = img.get_at((x, y))
        tuple_color = (color.r, color.g, color.b)
        data[y].append(tuple_color)

with open("data.json", "w") as f:
    json.dump(data, f)
        
