let plScore = 0
let cpScore = 0
let empty = ''
const RockJpg = "img/ROCK.jpg"
const PaperJpg = "img/PAPER.jpg"
const ScissorJpg = "img/SCISSOR.jpg"
let user
function reset(){
    plScore = 0;
    cpScore = 0 ;
    document.getElementById('cp-score').innerHTML = cpScore
    document.getElementById('pl-score').innerHTML = plScore
    document.getElementById('result').innerHTML = ''
    document.getElementById('cp-img').style.display = 'none'
    document.getElementById('pl-img').style.display = 'none'
    document.getElementById('pl-chose').innerHTML = empty
    document.getElementById('cp-chose').innerHTML = empty
    _userGet()
}
function _userGet(){
    alert("-----The winner is the one whose score reaches 3 first-----")
    // user = prompt("choose your answer:")
    let _select
    _select = document.querySelectorAll('.top-container figure')
    console.log(_select);
    _select.forEach((val)=>{
        val.addEventListener('click', ()=>{
            user = val.getAttribute('data-data');
        

            // _ttl = user
            console.log(user);
            document.getElementById('pl-chose').innerHTML = user
            _game(user)


        })
    })

    

    


// *****show players choice *****

    
}
function _game(user){

    console.log(user);
// ******adjusting users choice with the image *****

if (user == 'scissors'){
    document.getElementById('pl-img').style.display = 'flex'
    x =document.getElementById('pl-img').setAttribute('src' , ScissorJpg)
    // console.log(x);
}
else if (user == 'rock'){
    document.getElementById('pl-img').style.display = 'flex'
    x =document.getElementById('pl-img').setAttribute('src' , RockJpg)
    // console.log(x);

}
else if (user == 'paper'){
    document.getElementById('pl-img').style.display = 'flex'
    x =document.getElementById('pl-img').setAttribute('src' , PaperJpg)
    // console.log(x);

}

// ******computer choice *******
x = Math.floor(Math.random()*10)
// console.log(x);
let computer
if( x < 3){
    computer = "scissors"
    document.getElementById('cp-chose').innerHTML = computer
    document.getElementById('cp-img').style.display = 'flex'
    document.getElementById('cp-img').setAttribute( 'src' , ScissorJpg)
    // console.log(computer);
}
else if( x < 6){
    computer = "rock"
    document.getElementById('cp-chose').innerHTML = computer
    document.getElementById('cp-img').style.display = 'flex'
    document.getElementById('cp-img').setAttribute( 'src' , RockJpg)
    // console.log(computer);
}
else if( x < 9 )
{
    computer = "paper"
    document.getElementById('cp-chose').innerHTML = computer
    document.getElementById('cp-img').style.display = 'flex'
    document.getElementById('cp-img').setAttribute( 'src' , PaperJpg)
    // console.log(computer);

}

// *******result******

if(user == computer){
    document.getElementById('result').innerHTML  = "it's a tie"
    document.getElementById('result').style.color = 'orange'

}
else if( user== 'paper'){
    if(computer == 'rock'){
    document.getElementById('pl-score').innerHTML = empty
    document.getElementById('result').innerHTML  = "you win!!!!"
    document.getElementById('result').style.color = 'green'
    plScore+=1
    document.getElementById('pl-score').innerHTML = plScore

    }else if( computer == 'scissors'){
    document.getElementById('cp-score').innerHTML = empty
    document.getElementById('result').innerHTML  = "you lose"
    document.getElementById('result').style.color = 'red'
    cpScore+=1
    document.getElementById('cp-score').innerHTML = cpScore
    }
}
else if( user == 'scissors'){
    if(computer == 'rock'){
        document.getElementById('cp-score').innerHTML = empty
        document.getElementById('result').innerHTML  = "you lose"
        document.getElementById('result').style.color = 'red'
        cpScore+=1
        document.getElementById('cp-score').innerHTML = cpScore

    }
    else if( computer == 'paper'){
        document.getElementById('pl-score').innerHTML = empty
        document.getElementById('result').innerHTML  = "you win!!!!"
        document.getElementById('result').style.color = 'green'
        plScore+=1
        document.getElementById('pl-score').innerHTML = plScore
    }
}
else if( user == 'rock'){
    if(computer == 'paper'){
        document.getElementById('cp-score').innerHTML = empty
        document.getElementById('result').innerHTML  = "you lose"
        document.getElementById('result').style.color = 'red'
        cpScore+=1
        document.getElementById('cp-score').innerHTML = cpScore

    }else if( computer == 'scissors'){
        document.getElementById('pl-score').innerHTML = empty
        document.getElementById('result').innerHTML  = "you win!!!!"
        document.getElementById('result').style.color = 'green'
        plScore+=1
        document.getElementById('pl-score').innerHTML = plScore

    }
}
// document.getElementById('again').addEventListener('click', _userGet)


setTimeout(() => {
    if(plScore == 3){
        alert('congratulations !!  🏆 you are the winner 🏆')
        plScore = 0
        cpScore = 0
    
    }else if(cpScore == 3){
        alert('computer is the winner.')
        
        plScore = 0
        cpScore = 0
    }
}, 1000);

// console.log(plScore);
// console.log(cpScore);
}
// while(plScore < 4 || cpScore <4){
//     _userGet()
//     console.log(plScore);
// }
