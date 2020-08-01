let gameover = 0
let goal = 0
let score = 0
input.onButtonPressed(Button.AB, function () {
    control.reset()
    start()
})
function start () {
    gameover = 0
    goal = 0
    score = 100
}
basic.forever(function () {
	
})
