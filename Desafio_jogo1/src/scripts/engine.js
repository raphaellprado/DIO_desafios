const state = {
    view:{
        squares:document.querySelectorAll(".square"), 
        enemy: document.querySelector('.enemy'), 
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values:{
        
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 15,
    },
    actions: {
        timerId: null,
        countDownTimerId: setInterval(countDown, 1000),

    }
};
function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.mp3`);
    audio.volume = 0.2;
    audio.play()
};
function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <=0) {
        alert("Gamer Over! O seu resultado foi: " + state.values.result);
        playSound('pomba');
    }
};

function randonSquare() {
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });
    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id
};
function moveEnemy() {
    state.actions.timerId = setInterval(randonSquare, state.values.gameVelocity)
};

function addListenerHitBox() {
    state.view.squares.forEach((square) =>{
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound('aiai');
            }
        })
    });
};

function init(){

    moveEnemy();
    addListenerHitBox();
}
init();