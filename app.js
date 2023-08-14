let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game Started");
        start = true;
        levelup();
    }
    console.log("Level 1");
});
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function usrflash(btn) {
    btn.classList.add("usrflash");
    setTimeout(function () {
        btn.classList.remove("usrflash");
    }, 300);
}
function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randomidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randomidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    flash(randbtn);
}
function check(index) {
    

    if (userseq[index] === gameseq[index]){
        if(userseq.length=== gameseq.length){
            setTimeout(levelup,500)
        }
        
    }
    else{
        h2.innerHTML = `Game Over! Your was<b> "${level}"</b> <br>Press Any Key To Start`;
        reset();

}

}

function btnpress() {
    let btn = this;
    console.log(this);
    usrflash(btn);

    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log()
    check(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress)
    console.log(btn)
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;

}
