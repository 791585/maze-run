scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    info.changeLifeBy(2)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage0`)
tiles.setCurrentTilemap(tilemap`level`)
let squeaks = sprites.create(assets.image`squeaks`, SpriteKind.Player)
controller.moveSprite(squeaks, 100, 100)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 0))
