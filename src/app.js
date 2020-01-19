import { player } from './hero.js';
import { virus } from './virus.js'
import { create, render } from './utils.js'
import { map } from './map.js'
import './styles.css'

// References

const board = document.querySelector('#board');

virus.create('virus');
player.create('hero');
map.create('map')

const gameMap = board.querySelector('#map')

const hero = board.querySelector('#player1');

// Controllers 

const rightBtn = document.querySelector('#controller-right')
const leftBtn = document.querySelector('#controller-left')
const topBtn = document.querySelector('#controller-top')
const bottomBtn = document.querySelector('#controller-bottom')

// Actions

const step = (el, direction) => {
    if (collision()) {
        player.render(el)
        console.log("da")
        // alert('Nelzya')
        // player.render(el)
        // console.log('From step', hero.style.left)
    } else {
        player.move(direction, player.speed)
        player.render(el)
        console.log(player.posX)
    }
}

// Events

rightBtn.addEventListener('click', () => step(hero, 'right'))
leftBtn.addEventListener('click', () => step(hero, 'left'))
topBtn.addEventListener('click', () => step(hero, 'top'))
bottomBtn.addEventListener('click', () => step(hero, 'bottom'))


function collision() {
    if (player.posX <= map.posX) {
        return player.posX = 1
    }
    if (player.posX + player.width >= gameMap.offsetWidth) {
        return player.posX = gameMap.offsetWidth - (player.width + 1)
    }
    if (player.posY <= map.posY) {
        return player.posY = 1
    }
    if (player.posY + player.height >= gameMap.offsetHeight) {
        return player.posY = gameMap.offsetHeight - (player.height + 1)
    }
    return false
}

// console.log(mmap.offsetWidth)

