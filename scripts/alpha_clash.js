function play(){
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    continueGame();
}

//continuue game
function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    //show the random alphabet on screeen

    const alphabetElement = document.getElementById('current-alphabet');
    alphabetElement.innerText = alphabet;

    //set background color by id

    addBackgroundColorById(alphabet);
}






