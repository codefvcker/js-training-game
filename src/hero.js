import { Basis } from './basis.js'

class Player extends Basis {

    constructor(options) {
        super(options)
        this.name = options.name
        this.speed = options.speed
        this.points = options.points
    }

    move(direction, speed) {
        switch (direction) {
            case 'top':
                this.posY -= speed;
                break;
            case 'left':
                this.posX -= speed;
                break;
            case 'right':
                this.posX += speed;
                break;
            case 'bottom':
                this.posY += speed;
                break;
        };
    }

    addPoint() {
        this.points++
    }

    pointsReset() {
        this.points = 0
    }
}

export const player = new Player({
    id: 'player1',
    name: 'Hero',
    width: 40,
    height: 40,
    speed: 20,
    points: 0,
    posX: 1,
    posY: 1
})

