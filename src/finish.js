import { Basis } from "./basis";

class Finish extends Basis {

    constructor(options) {
        super(options)
    }

}

export const finish = new Finish({
    id: 'finish',
    name: 'finish',
    width: 80,
    height: 100,
    posX: 950,
    posY: 350,
})