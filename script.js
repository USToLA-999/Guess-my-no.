'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highscore = 0 ;

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);

    console.log (guess, typeof guess);
//no input or 0
    if(!guess){
         if(score > 0){
            document.querySelector('.message').textContent = 'its your brain iq'
         score = score-1
         document.querySelector('.score').textContent = score
         }else{
            document.querySelector('.message').textContent = 'you lost'

         }
    }   
    //when player guess correct
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'gotcha you  didit'



        document.querySelector('body').style.backgroundColor = 'green'

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber

        if(score > highscore ){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
   //when th no is high
    else if(guess > secretNumber){

        if(score > 0 ){
            document.querySelector('.message').textContent = 'your guess is too high'
            score = score-1
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'you lost'
        }

        
    }
    else if(guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'your guess is too low'
        score = score-1
        document.querySelector('.score').textContent = score

        

        
        }
    }
    
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20 

    secretNumber = Math.trunc(Math.random()*20)+1;
    
    document.querySelector('.message').textContent = 'Start guessing...'

    document.querySelector('.score').textContent = score


    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value=''
})