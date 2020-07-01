namespace SpriteKind {
    export const myCorg = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
9 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(
            hex`1400080000000000000000000000000000000000000000070000000000000000000000000000020202020207000000000000000000000000000000000000000700000000000000000202020202000000000000070000000000000000000000000000000000000007000000020202020200000000000000000000000700000000000000000000000000000000000000070303030303030303030303030303030303030307`,
            img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,sprites.builtin.brick,myTiles.tile1],
            TileScale.Sixteen
        ))
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow(true)
myCorg.updateSprite(true)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
