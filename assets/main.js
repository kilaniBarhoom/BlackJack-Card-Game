let path = "assets/black-jack/cards/"
let num = 0
let yourCount = 0
let opponentCount = 0

window.addEventListener("load",function(){
    document.querySelectorAll("img").forEach((e)=>{
        e.classList.remove("hoverEff")
    })
})

document.querySelector(".opponent-cards").innerHTML = `<span><img class="hoverEff" id="to-reveal" src="assets/black-jack/cards/back.png" alt=""></span>`

let temp = [
`${path}2-C.png`,
`${path}2-H.png`,
`${path}2-S.png`,
`${path}3-D.png`,
`${path}3-C.png`,
`${path}3-H.png`,
`${path}3-S.png`,
`${path}4-D.png`,
`${path}4-C.png`,
`${path}4-H.png`,
`${path}4-S.png`,
`${path}5-D.png`,
`${path}5-C.png`,
`${path}5-H.png`,
`${path}5-S.png`,
`${path}6-D.png`,
`${path}6-C.png`,
`${path}6-H.png`,
`${path}6-S.png`,
`${path}7-D.png`,
`${path}7-C.png`,
`${path}7-H.png`,
`${path}7-S.png`,
`${path}8-D.png`,
`${path}8-C.png`,
`${path}8-H.png`,
`${path}8-S.png`,
`${path}9-D.png`,
`${path}9-C.png`,
`${path}9-H.png`,
`${path}9-S.png`,
`${path}10-D.png`,
`${path}10-C.png`,
`${path}10-H.png`,
`${path}10-S.png`,
`${path}A-D.png`,
`${path}A-C.png`,
`${path}A-H.png`,
`${path}A-S.png`,
`${path}J-D.png`,
`${path}J-C.png`,
`${path}J-H.png`,
`${path}J-S.png`,
`${path}K-D.png`,
`${path}K-C.png`,
`${path}K-H.png`,
`${path}K-S.png`,
`${path}Q-D.png`,
`${path}Q-C.png`,
`${path}Q-H.png`,
`${path}Q-S.png`
]

let cards = temp


for(let i = 0; i < 2; i++){

    num = Math.floor(Math.random() * (cards.length))
    document.querySelector(".opponent-cards").innerHTML += 
    `<span><img class="hoverEff" src="${cards[num]}" alt=""></span>`
    opponentCount += parseInt(calculateCardValue(cards[num][24], cards[num][25]))
    cards.splice(num, 1); 

    num = Math.floor(Math.random() * (cards.length))
    document.querySelector(".your-cards").innerHTML += 
    `<span><img class="hoverEff" src="${cards[num]}" alt=""></span>`
    yourCount += parseInt(calculateCardValue(cards[num][24], cards[num][25]))
    cards.splice(num, 1); 
}

function calculateCardValue(n, is){
    if(n == 'K'|| n == 'Q'|| n == 'J'){
        return 10
    } else if(n == 'A'){
        if(yourCount > 21){
            return 1
        } else{
            return 1
        }
    }
    return is === '-'? n : n + is
}



function hit(){
    if(yourCount >= 21){
        return
    }
    num = Math.floor(Math.random() * (cards.length))
    document.querySelector(".your-cards").innerHTML += 
    `<span><img src="${cards[num]}" alt=""></span>`
    yourCount += parseInt(calculateCardValue(cards[num][24], cards[num][25]))
    cards.splice(num, 1);     
}

function stay(){
    let blockbtns1 = document.getElementById("hit")
    let blockbtns2 = document.getElementById("stay")
    blockbtns1.disabled = true
    blockbtns2.disabled = true
    num = Math.floor(Math.random() * (cards.length))
    document.getElementById("to-reveal").setAttribute("src", `${cards[num]}`)
    opponentCount += parseInt(calculateCardValue(cards[num][24], cards[num][25]))
    document.getElementById("oppocount").innerHTML = opponentCount
    document.getElementById("yourcount").innerHTML = yourCount

    let result = ""
    if(yourCount > 21 || yourCount < opponentCount){
        result = "You Lose !"
    } else if(yourCount > opponentCount){
            result = "You Win !"
    } else{
        result = "Tie !!"
    }
    document.querySelector(".container").innerHTML += `<h3 style="margin: 0;">${result}</h3>`
}

function resetGame(){
    location.reload()
}
