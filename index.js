let score = 0;
function checkAnswer(answer, question) {
    
    if (question === 'PIM ย่อมาจากอะไร ?') {
        if (answer === 'a') {
            score++;
        }
    }
    else {
        if (answer === 'b') {
            score++;
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