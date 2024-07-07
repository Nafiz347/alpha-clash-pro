function getARandomAlphabet(){
    //get or create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //geta arandom index between 0-25
    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);

    const alphabet = alphabets[index];

    return alphabet

}


function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    
}