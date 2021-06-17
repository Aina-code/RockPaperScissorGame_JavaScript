function rpsGame(yourChoice) {

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log (yourChoice.id);
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won
    message = finalMessage(results); //{'message': 'You won!' 'color': 'green'}
    rpsFrontEnd(yourChoice.id, botChoice, message)

}

function randToRpsInt(){
// create a random number between 0,1,2
return Math.floor(Math.random()*3);                 // Math.floor(Math.random()*3)
// add code here
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0}
    }

let yourScore = rpsDatabase[yourChoice][computerChoice];
let computerScore = rpsDatabase[computerChoice][yourChoice];
// return the scores in the form of array.
// e.g. [1,0] if lost
return[yourScore, computerScore];
// add code here
}

function finalMessage([yourScore, computerScore]){
// add code here
// hint: check the expected return statement from the rpsGame() function above
if (yourScore===0){

    return{'message':'Lose!', 'color':'red'};
    
    }else if (yourScore===1) {
        return {'message':'Win', 'color':'green'}
    
    }else {
        return{'message':'Draw!', 'color':'yellow'}
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // let's remove all the images
    // add code here
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "'; font-size: 60px; padding: 30px; >" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
 

}