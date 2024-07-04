'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highscore = 0 ;


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);

    console.log (guess, typeof guess);
//no input or 0
    if(!guess){
         if(score > 0){
        //     document.querySelector('.message').textContent = 'its your brain iq'
        //  score = score-1
        displayMessage('your brain iq')
        score = score-1
         document.querySelector('.score').textContent = score
         }else{
            displayMessage('you Lost')

         }
    }   
    //when player guess correct
    else if(guess === secretNumber){
        displayMessage('you did it')



        document.querySelector('body').style.backgroundColor = 'green'

        document.querySelector('.number').style.width = '30rem'

        document.querySelector('.number').textContent = secretNumber

        if(score > highscore ){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
    //when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            
            displayMessage(guess > secretNumber ? 'Too high' : 'too low')
            score--

            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('hehe you lost buddy')

            document.querySelector('.score').textContent = 0
        }
    }

});


document.querySelector('.again').addEventListener('click', function() {
    score = 20 

    secretNumber = Math.trunc(Math.random()*20)+1;
    
    displayMessage('start guessing again')

    document.querySelector('.score').textContent = score


    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value=''
})