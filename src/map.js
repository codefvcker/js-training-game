import { Basis } from './basis.js'

class Map extends Basis {

    constructor(options) {
        super(options)
    }

    create(className) {
        let element = document.createElement('div')

        element.id = this.id
        element.style.position = 'absolute'
        element.style.left = this.posX + 'px'
        element.style.top = this.posY + 'px'
        element.style.width = this.width + '%'
        element.style.height = this.height + '%'
        element.innerHTML = this.name
        element.className = className

        board.append(element)
    }

}

export const map = new Map({
    id: 'map',
    width: 100,
    height: 100,
    posX: 0,
    posY: 0,
})