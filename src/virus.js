import { Basis } from './basis.js'

class Virus extends Basis {

    constructor(options) {
        super(options)
    }

}

export const virus = new Virus({
    id: 'virus1',
    width: 30,
    height: 30,
    posX: 150,
    posY: 200,
})

