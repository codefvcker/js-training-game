import { Basis } from './basis.js'

class Virus extends Basis {

    constructor(options) {
        super(options)
    }

}

export const virus = new Virus({
    id: 'virus1',
    width: 30,
    height: 300,
    posX: 150,
    posY: 200,
})

export const virus2 = new Virus({
    id: 'virus2',
    width: 30,
    height: 300,
    posX: 250,
    posY: 0,
})

export const virus3 = new Virus({
    id: 'virus3',
    width: 30,
    height: 300,
    posX: 350,
    posY: 200,
})

export const virus4 = new Virus({
    id: 'virus4',
    width: 30,
    height: 300,
    posX: 550,
    posY: 0,
})

export const virus5 = new Virus({
    id: 'virus5',
    width: 30,
    height: 300,
    posX: 750,
    posY: 200,
})

