import { hero } from './hero.js';
import './styles.css'

const div = document.querySelector('.hero');

// Controllers 

const rightBtn = document.querySelector('#controller-right')
const leftBtn = document.querySelector('#controller-left')
const topBtn = document.querySelector('#controller-top')
const bottomBtn = document.querySelector('#controller-bottom')

const move = (el, direction) => {
    hero.move(direction, hero.speed)
    hero.render(el)
    console.log('da')
}

// Events

rightBtn.addEventListener('click', () => move(div, 'right'))
leftBtn.addEventListener('click', () => move(div, 'left'))
topBtn.addEventListener('click', () => move(div, 'top'))
bottomBtn.addEventListener('click', () => move(div, 'bottom'))



