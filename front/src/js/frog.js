const frogText = `
<div class="fg">
    <button class="close_btn">
        <div class="close_btn_text" href="#" onclick="stopShow();return false;"">X</div>
    </button>
    <img class="frog_img" src="img/toad.gif">
</div>
`;
document.querySelector('body').innerHTML += frogText;

const frog = document.querySelector('.frog_img');
const back = document.querySelector('.fg');
var music = new Audio('frog.mp3');


function showToad(){
    back.style.display = 'block';
    setTimeout(function(){frog.style.opacity = '100%';}, 1700);
    frog.setAttribute("src", 'img/toad.gif');
    setTimeout(function(){frog.setAttribute("src", 'img/toad2.gif');}, 12000);
}

function hideToad(){
    frog.style.opacity = '0%';
    back.style.display= 'none';
}

function playMusic(){
    setTimeout(function(){document.querySelector('.fg').style.display= 'flex';}, 100)
    showToad();
    music.play();
    music.onended = function() {hideToad();};
}

function stopShow(){
    hideToad();
    music.pause();
    music.currentTime = 0;
}

