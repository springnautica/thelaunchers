mySprite = sprites.create(assets.image("""
    myImage4
"""), SpriteKind.player)
game.splash("Locker Cheese Studios presents・・・")
scene.set_background_color(8)
mySprite.set_position(84, 35)
animation.run_image_animation(mySprite, assets.animation("""
    myAnim1
"""), 200, False)
game.splash("THE LAUNCH")
game.show_long_text("The rocket ship has exploded!", DialogLayout.BOTTOM)
game.show_long_text(" Please bring the parts so we can fix it!!! ",
    DialogLayout.BOTTOM)
sprites.destroy(mySprite)
Player_1 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
controller.move_sprite(Player_1)
tiles.set_current_tilemap(tilemap("""
    level
"""))
scene.set_background_image(assets.image("""
    myImage5
"""))