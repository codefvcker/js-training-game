import { Basis } from './basis.js'

class Player extends Basis {

    constructor(options) {
        super(options)
        this.name = options.name
        this.hp = options.hp
        this.speed = options.speed
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
}

export const player = new Player({
    id: 'player1',
    name: 'Hero',
    width: 20,
    height: 20,
    hp: 100,
    speed: 5,
    posX: 1,
    posY: 1
})

