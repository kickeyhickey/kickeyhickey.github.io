
var bombSquare = Math.floor(Math.random() * 9)
var carmenSquare = Math.floor(Math.random() * 9)
  var allOthers = !bombSquare && !carmenSquare
    

if( bombSquare === carmenSquare){
    bombSquare = Math.floor(Math.random() * 9 -1)
}

const foundHer = (id) => {

if(carmenSquare === id){
    document.getElementById(id).innerHTML = "💃"
    alert("You found her!")
} else if (bombSquare === id){
    document.getElementById(id).innerHTML = "&#x2620"
} else if (carmenSquare != id && bombSquare != id){
    if(id === 0){
        document.getElementById(id).innerHTML = "🇯🇵"
    } else if (id === 1){
        document.getElementById(id).innerHTML = "🇵🇹"
    } else if (id === 2){
        document.getElementById(id).innerHTML = "🇧🇷"
    } else if (id === 3){
        document.getElementById(id).innerHTML = "🇳🇱"
    } else if (id === 4){
        document.getElementById(id).innerHTML = "🇸🇪"
    } else if (id === 5){
        document.getElementById(id).innerHTML = "🇮🇸"
    } else if (id === 6){
        document.getElementById(id).innerHTML = "🇹🇭"
    } else if (id === 7){
        document.getElementById(id).innerHTML = "🇨🇳"
    } else if (id === 8){
        document.getElementById(id).innerHTML = "🇨🇦"
    } 
} 

}


