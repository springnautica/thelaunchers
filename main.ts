let mySprite = sprites.create(assets.image`myImage4`, SpriteKind.Player)
game.splash("Locker Cheese Studios presents・・・")
scene.setBackgroundColor(8)
mySprite.setPosition(84, 35)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim1`,
200,
false
)
game.splash("THE LAUNCH")
game.showLongText("The rocket ship has exploded!", DialogLayout.Bottom)
game.showLongText(" Please bring the parts so we can fix it!!! ", DialogLayout.Bottom)
sprites.destroy(mySprite)
let Player_1 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(Player_1)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer4)
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`myImage5`)
forever(function () {
    characterAnimations.runFrames(
    Player_1,
    assets.animation`myAnim`,
    200,
    characterAnimations.rule(Predicate.Moving)
    )
})
