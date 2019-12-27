let startGame=confirm('Do you want to play a game?');
if(startGame){
    let firstprize=100;
    let maxPrize=100;
    let randomNumber=8;
    let attempt=0;
    let yourPrize=0
    let truth=false;
    let totalPrize=0;
    let nextgame;
    while(startGame){
    let a=Math.floor(Math.random()*(randomNumber+1));
console.log(a);
do{
        let level=parseInt(prompt('Choose a roulette pocket number from 0 to'+' '+randomNumber+ 
        '\n Attempts left:'+' '+(3-attempt)+
    '\n Total prize:'+' '+ totalPrize+
    '\n Possible prize on current attempt:'+' '+maxPrize+'$'));
    if (a===level){
        truth=true;
        yourPrize=firstprize;
        break;
    } else{
            attempt+=1;
            truth=false;
            firstprize /=2;
    }
        }
        
            while(attempt<3)
            if(truth===true){
                alert('Congratulation, you won!Your prize is:'+' '+yourPrize+'$');
                nextgame=confirm('Do you want to continue?');
            } else{
                startGame=false;
            }
            if(nextgame){
                totalPrize=+yourPrize;
                yourPrize*=2;
                firstprize*=2;
                attempt=0;
                randomNumber+=4;
                maxPrize*=2;
        } else{
            alert('Thank you for your participation.'+' '+yourPrize+'$');
            nextgame=confirm('Do you want to continue?');
        }
    }
    
} else {
    alert('You did not become a billionaire, but can.');

}
