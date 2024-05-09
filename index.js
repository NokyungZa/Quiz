let score = 0;
let round = 0;
function checkAnswer(answer, question) {
    
    if (question === 'PIM ย่อมาจากอะไร ?') {
        if (answer === 'a') {
            round++;
            if (round <= 2){
                score++;
            }
            
        }
        else {
            round++;
        }
    }
    else {
        if (answer === 'b') {
            round++;
            if (round <= 2){
                score++;
            }
        }
        else {
            round++;
        }
    }
    
}


function showScore() {
    const result = document.getElementById('result');
    let userScore = `You scored ${score} out of 2.`;
    result.innerHTML = userScore;
    result.style.textAlign = "center";

}

function clickSubmit(){
    showScore()
}
