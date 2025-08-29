function showModule(moduleNum) {
    document.querySelectorAll('.module').forEach(module => module.style.display = 'none');
    document.getElementById(`module${moduleNum}`).style.display = 'block';
}

function checkAnswer(questionId, correctAnswer, correctMsg, incorrectMsg) {
    const answer = document.getElementById(questionId).value.toLowerCase();
    const feedback = document.getElementById(`feedback${questionId.slice(1)}`);
    feedback.style.display = 'block';
    if (answer === correctAnswer) {
        feedback.className = 'feedback correct';
        feedback.innerText = correctMsg;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerText = incorrectMsg;
    }
}

function allowDrop(ev) {
    ev.preventDefault();

}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, correctId) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const feedback = document.getElementById("feedback2");
    if (data === correctId) {
        feedback.style.display = 'block';
        feedback.className = 'feedback correct';
        feedback.innerText = 'Correct! Caixia Gao discussed environmental adaptation in Section E.';
    } else {
        feedback.style.display = 'block';
        feedback.className = 'feedback incorrect';
        feedback.innerText = 'Incorrect. Review Section E for Gao’s statements.';
    }
}