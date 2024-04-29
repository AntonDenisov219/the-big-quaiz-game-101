const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);
var quastiontext;
var optiontext = [];
var currentquestion = 0;
var score = 0;

function preload() {

}

function create() {
    quastiontext = game.add.text[80, 100, "", {font: "24px Arial", fill: "white"}];
    for (var i = 0; i < 4; i++) {
        optiontext[i] = game.add.text[80, 200 + i * 80, "", {font: "24px Arial", fill: "white"}];
    optiontext.inputEnabled = true;
    optiontext.events.onInputDown.add(checkAnswer, this);
    optiontext.push(optiontext);
    }
    displayQuestion(); 
}

function displayQuestion() {
    var currentquestion = quastion[currentquestion];
    quastiontext.text = currentquestion.question;
    for (var i = 0; i < currentquestion.options.length; i++) {
        optiontext[i].text = currentquestion.options[i];
    }
}
function checkAnswer(event) {
    var selectedoption = optiontext.indexOf(event);
    var currentquestion = quastion[currentquestion];
    if (selectedoption === currentquestion.correctanswer) {
        score+=10;
    }
    else {
        score-=2;
    }
    currentquestion++;
    if (currentquestion < quastion.length) {
        displayQuestion();
    } else {
        console.log("Game Over");
    }
}
////////////////////////////////////////////////////////////////////////////////////

function playFireworks() {
    // Code to play fireworks animation or sound
    console.log("Fireworks!");
}

function checkAnswer(event) {
    var selectedoption = optiontext.indexOf(event);
    var currentquestion = quastion[currentquestion];
    if (selectedoption === currentquestion.correctanswer) {
        score+=10;
        playFireworks();
    }
    else {
        score-=2;
    }
    currentquestion++;
    if (currentquestion < quastion.length) {
        displayQuestion();
    } else {
        console.log("Game Over");
    }
}