let zahl = 0
for (let Index = 0; Index <= 9; Index++) {
    basic.showNumber(Index + 1, 50)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
    zahl = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(zahl, 57)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        zahl += 1
    }
})
