import { Basis } from './basis.js'

class Lives extends Basis {

    constructor(options) {
        super(options)
        this.lives = options.lives
    }

    death() {
        return this.lives.pop()
    }

    showLives(arg) {
        arg.innerHTML = this.lives.length
    }

    livesLoad() {
        this.lives.length = 3
    }

    createTable(className) {
        let table = document.createElement('div')

        table.style.left = this.posX + '%'
        table.style.top = this.posY + '%'
        table.className = className
        board.append(table)
    }

}

export const lives = new Lives({
    id: 'lives',
    posX: 95,
    posY: 5,
    width: 100,
    height: 50,
    lives: [1, 2, 3]
})