const frogText = `
<div class="fg">
    <button class="close_btn" onclick="stopShow();return false;"">
        <div class="close_btn_text" href="#">X</div>
    </button>
</div>
`;
document.querySelector('body').innerHTML += frogText;
// <img class="frog_img slide-in-top" src="img/toad.gif"></img>

const frog = document.querySelector('.frog_img');
const back = document.querySelector('.fg');
var music = new Audio('frog.mp3');
let intervalLoop = setTimeout(() => 2, 1320);
var timeouts = [];



function __getOneToad(toad_el){
    toad_el.classList.add('frog_img', 'slide-in-top');
    toad_el.setAttribute("src", 'img/toad.gif');
    back.prepend(toad_el);
    timeouts.push(setTimeout(() => toad_el.classList.add('slide-out-left'), 470));
    timeouts.push(setTimeout(() => toad_el.remove(), 6000));
}

function getOneToad(){
    __getOneToad(document.createElement('img'));
}

function getManyToads(){
    getOneToad();
    timeouts.push(setTimeout(function(){getManyToads();}, 1320));
}



function getAnotherOneToad(){
    let toad_el = document.createElement('img')
    toad_el.classList.add('frog_img', 'fade-in');
    toad_el.setAttribute("src", 'img/toad2.gif');
    back.prepend(toad_el);
    
    timeouts.push(setTimeout(function(){
        toad_el.classList.remove('fade-in');
        toad_el.classList.add('vibrate-1');
    }, 505));
    timeouts.push(setTimeout(() => getBothToads(toad_el), 10800));
}

function getManyAnotherToads(){
    getAnotherOneToad();
}

function getBothToads(another_toad){
    hideToad();
}



function hideToad(){
    clearAllTimeouts();
    document.querySelectorAll('.frog_img').forEach(function(el){el.remove()});
}



function changeToad(){
    hideToad();
    getManyAnotherToads();
}


function startShow(){
    back.style.display = 'block';
    timeouts.push(setTimeout(() => getManyToads(), 1300));
    timeouts.push(setTimeout(() => changeToad(), 12000));
}



function playMusic(){
    timeouts.push(setTimeout(function(){document.querySelector('.fg').style.display= 'flex';}, 100));
    startShow();
    music.play();
    music.onended = () => stopShow();
}

function stopShow(){
    hideToad();
    music.pause();
    music.currentTime = 0;
    back.style.display= 'none';
}

function clearAllTimeouts(){
    for (var i=0; i<timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
}