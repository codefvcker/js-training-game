// Just for practice. It could be bind/call/apply 
// or common class

export const create = Object.prototype.create = function (className) {
    let element = document.createElement('div')

    element.id = this.id
    element.style.position = 'absolute'
    element.style.left = this.posX + 'px'
    element.style.top = this.posY + 'px'
    element.style.width = this.width + 'px'
    element.style.height = this.height + 'px'
    element.innerHTML = this.name
    element.className = className

    board.append(element)
}

export const render = Object.prototype.render = function (el) {
    el.style.top = this.posY + 'px';
    el.style.left = this.posX + 'px';
}

