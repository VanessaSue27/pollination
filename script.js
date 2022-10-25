const pictures=[
'👨‍🚀',
'👻',
'☂️',
'🧍',
'🕵🏻‍♂️',
'🎅🏻',
'👰🏻‍♀️',
'🧗🏻',
'🤹🏻',
'🫅🏿',
'🦃',
'🐷',
'☃️',
'🪐',
'🍫',
'🍽',
'🎳',
'📏',
'🚫',
'↪️'
]

// Function to choose randonly 3 pictures for each orange rectangles: 
const choosePic = pictures =>{
    return pictures [Math.floor(Math.random()*pictures.length)];
    pictures.splice(pictures, 1) //NOT WORKING
}

const intro1 = choosePic(pictures)
const intro2 = choosePic(pictures)
const intro3 = choosePic(pictures)
const develop1 = choosePic(pictures)
const develop2 = choosePic(pictures)
const develop3 = choosePic(pictures)
const conc1 = choosePic(pictures)
const conc2 = choosePic(pictures)
const conc3 = choosePic(pictures)

// Grouping the pictures for the same rectangle:

const intro=[
    intro1,
    intro2,
    intro3
]

const develop=[
    develop1,
    develop2,
    develop3
]

const conc=[
    conc1,
    conc2,
    conc3
]

// Functions to appear the image when clicking on the orange rectangle:
let mode = ''

switch (mode){ //MAYBE MY SWITCH IS WRONG BECAUSE IT IS NOT WORKING WITH IT
    case (document.getElementById('easy').checked ==true):
    mode = 'easy'
    break;

    case (document.getElementById('medium').checked ==true):
    mode = 'medium'
    break;

    case (document.getElementById('hard').checked ==true):
    mode = 'hard'
    break;

}

console.log(mode)

if (mode ==='hard'){
    document.getElementById('introduction').onclick = ()=> {
    document.getElementById('introImg').innerHTML = intro
    }

    document.getElementById('development').onclick = ()=> {
    document.getElementById('developImg').innerHTML = develop
    }

    document.getElementById('conclusion').onclick = ()=> {
    document.getElementById('concImg').innerHTML = conc
    }
} else {
    document.getElementById('play').onclick = ()=> {
    document.getElementById('introImg').innerHTML = intro
    document.getElementById('developImg').innerHTML = develop
    document.getElementById('concImg').innerHTML = conc
        }
}

//Refresh the page to play again:

function restart(){
    location.reload()
}