input.onPinPressed(TouchPin.P2, function () {
    if (0 == goal && 0 == gameover) {
        goal = 1
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        for (let index = 0; index < 5; index++) {
            basic.showNumber(score)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                . . . . .
                . # # # .
                . . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # . #
                . . . . #
                . . . # .
                . # # . .
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
    start()
})
input.onPinPressed(TouchPin.P1, function () {
    if (0 == goal && 0 == gameover) {
        gameover = 1
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showIcon(IconNames.No)
    }
})
function start () {
    gameover = 0
    goal = 0
    score = 100
    basic.showIcon(IconNames.Yes)
}
let score = 0
let gameover = 0
let goal = 0
start()
basic.forever(function () {
    if (0 == goal && 0 < score) {
        score += -1
    }
    basic.pause(500)
})
