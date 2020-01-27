import { player } from './hero.js';
import { virus, virus2, virus3, virus4, virus5 } from './virus.js'
import { create, render } from './utils.js'
import { map } from './map.js'
import { lives } from './lives.js'
import { finish } from './finish.js'
import './styles.css'

// References and create

const board = document.querySelector('#board');

player.create('hero');
map.create('map')
virus2.create('virus')
virus3.create('virus')
virus4.create('virus')
virus5.create('virus')
virus.create('virus')
finish.create('finish')

const gameMap = board.querySelector('#map')

const hero = board.querySelector('#player1');

// Controllers 

const rightBtn = document.querySelector('#controller-right')
const leftBtn = document.querySelector('#controller-left')
const topBtn = document.querySelector('#controller-top')
const bottomBtn = document.querySelector('#controller-bottom')
const saveBtn = document.querySelector('#save-results')
const recordBtn = document.querySelector('#show-records')

// Actions

const step = (el, direction, arr) => {
    if (virusCollision(arr) || collision()) {
        if (lives.lives.length === 1) {
            openModal('GAME OVER', `Your score ${player.points}`)
        }
        lives.death()
        lives.showLives(board.querySelector('.table'))
        toStart()
        player.render(el)
    } else {
        if (finishCollision()) {
            openModal('WIN', `Your score ${player.points}`)
            toStart()
        }
        player.move(direction, player.speed)
        player.render(el)
        player.addPoint()
    }
}

// Events

window.addEventListener('load', () => {
    lives.createTable('table')
    lives.showLives(board.querySelector('.table'))
})
rightBtn.addEventListener('click', () => step(hero, 'right', map.level))
leftBtn.addEventListener('click', () => step(hero, 'left', map.level))
topBtn.addEventListener('click', () => step(hero, 'top', map.level))
bottomBtn.addEventListener('click', () => step(hero, 'bottom', map.level))
saveBtn.addEventListener('click', () => saveResults(player.name, player.points))
recordBtn.addEventListener('click', () => getRecords())


// Collisions 

export function collision() {
    if (player.posX <= map.posX
        || player.posX + player.width >= gameMap.offsetWidth
        || player.posY <= map.posY
        || player.posY + player.height >= gameMap.offsetHeight) {
        return true
    }
}

export function virusCollision(arg) {
    let isCollided = false
    arg.map((item) => {
        if (player.posX + player.width >= item.posX
            && player.posX <= item.posX + item.width
            && player.posY + player.height >= item.posY
            && player.posY <= item.posY + item.height
        ) {
            isCollided = true
        }
    })
    return isCollided
}

export function finishCollision() {
    if (player.posX + player.width >= finish.posX
        && player.posX <= finish.posX + finish.width
        && player.posY + player.height >= finish.posY
        && player.posY <= finish.posY + finish.height
    ) {
        return true
    }
}

// Game and requests

function toStart() {
    player.posX = 1
    player.posY = 1
}

function saveResults(name, points) {
    let playerStats = {
        name,
        points
    }
    fetch('https://js-training-game.firebaseio.com/stats.json', {
        method: "POST",
        body: JSON.stringify(playerStats),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => console.log('data', data))
}

function getRecords() {
    return fetch('https://js-training-game.firebaseio.com/stats.json')
        .then(response => response.json())
        .then(data => openModal('RECORDS', showRecords(data)))
}


function createModal(title, content) {
    let modal = document.createElement('div')
    modal.classList.add('modal')
    modal.id = 'modal'

    modal.innerHTML = `
        <h1>${title}</h1>
        <div>${content}</div>
        <button id='retry'>Retry</button>
    `
    board.append(modal)
}


function openModal(text, content) {
    createModal(text, content)

    document
        .getElementById('retry')
        .addEventListener('click', () => retryHandler())

}

function retryHandler() {
    toStart()
    lives.livesLoad()
    player.pointsReset()
    lives.showLives(board.querySelector('.table'))
    modalClose(document
        .getElementById('modal'))
}

function modalClose(el) {
    el.remove()
}

function showRecords(data) {
    let items

    for (let key in data) {
        let res = data[key]
        items += `
            <li>name: ${res.name} points: ${res.points}</li>
        `
    }

    return `<ul>${items}</ul>`;
}
