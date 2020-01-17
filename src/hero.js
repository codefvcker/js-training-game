class Hero {

    constructor(options) {
        this.name = options.name
        this.width = options.width
        this.height = options.height
        this.speed = options.speed
        this.posX = options.posX
        this.posY = options.posY
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

    render(el) {
        el.style.top = this.posY + 'px';
        el.style.left = this.posX + 'px';
    }

}

export const hero = new Hero({
    name: 'Hero',
    width: 20,
    height: 20,
    speed: 5,
    posX: 1,
    posY: 1
}) 