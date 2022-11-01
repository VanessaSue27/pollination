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
    const randomNumber = Math.floor(Math.random()*pictures.length)
    const pic = pictures [randomNumber];
    pictures.splice(randomNumber, 1) 
    return pic
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
function play(){
    
    if (document.getElementById('hard').checked ==true){
        document.getElementById('introImg').innerHTML = intro

        document.getElementById('development').onclick = ()=> {
        document.getElementById('developImg').innerHTML = develop
        }

        document.getElementById('conclusion').onclick = ()=> {
        document.getElementById('concImg').innerHTML = conc
        }
        document.getElementById('restartButton').disabled = false

    } else if (document.getElementById('medium').checked ==true || document.getElementById('easy').checked ==true) {
        document.getElementById('introImg').innerHTML = intro
        document.getElementById('developImg').innerHTML = develop
        document.getElementById('concImg').innerHTML = conc
        document.getElementById('restartButton').disabled = false

    } else {alert ('Choose how you want to play.')}

    
}

//Refresh the page to play again:

function restart(){
    location.reload()
}