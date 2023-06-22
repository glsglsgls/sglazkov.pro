const frog = document.querySelector('.frog_img');
const back = document.querySelector('.fg');


function change_pic () {
    let pic_url;
    if (frog.getAttribute('src') === 'img/frog_l.png') {
        pic_url = 'img/frog_r.png';
    }
    else {
        pic_url = 'img/frog_l.png';
    }
    frog.setAttribute("src", pic_url);
}

function playMusic(){
    setTimeout(function(){document.querySelector('.fg').style.display= 'flex';}, 100)
    var music = new Audio('frog.mp3');
    music.play();
    setTimeout(function(){document.querySelector('.frog_img').style.display= 'block';}, 1700)

    let i = 0;
    let renew = setInterval(function(){
        change_pic();
    },325);
}

