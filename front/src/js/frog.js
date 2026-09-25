(function () {
    var modal = document.createElement('div');
    modal.className = 'fg';
    modal.innerHTML = '<button class="close_btn" type="button" aria-label="Закрыть">' +
        '<span class="close_btn_text" aria-hidden="true">X</span></button>';
    document.body.appendChild(modal);

    var music = null;
    var stopped = false;
    var timeouts = [];

    function clearAllTimeouts() {
        timeouts.forEach(clearTimeout);
        timeouts = [];
    }

    function pushTimeout(fn, ms) {
        var t = setTimeout(function () {
            timeouts = timeouts.filter(function (item) { return item !== t; });
            if (!stopped) { fn(); }
        }, ms);
        timeouts.push(t);
        return t;
    }

    function addToad(src, cls, swapMs, liveMs, leaveMs) {
        var toad = document.createElement('img');
        toad.className = 'frog_img ' + cls;
        toad.src = src;
        toad.alt = '';
        modal.prepend(toad);
        if (swapMs) {
            pushTimeout(function () {
                toad.classList.remove('fade-in');
                toad.classList.add('vibrate-1');
            }, swapMs);
        }
        if (leaveMs) {
            pushTimeout(function () { toad.classList.add('slide-out-left'); }, leaveMs);
        }
        pushTimeout(function () { toad.remove(); }, liveMs);
        return toad;
    }

    function getManyToads() {
        addToad('img/toad.gif', 'slide-in-top', 0, 6000, 470);
        if (!stopped) { pushTimeout(getManyToads, 1320); }
    }

    function startShow() {
        clearAllTimeouts();
        stopped = false;
        modal.style.display = 'flex';
        pushTimeout(getManyToads, 1300);
        pushTimeout(function () { addToad('img/toad2.gif', 'fade-in', 505, 11300, 0); }, 12000);
        var closeBtn = modal.querySelector('.close_btn');
        if (closeBtn) { closeBtn.focus(); }
    }

    function stopShow() {
        stopped = true;
        clearAllTimeouts();
        modal.querySelectorAll('.frog_img').forEach(function (el) { el.remove(); });
        modal.style.display = 'none';
        if (music) {
            music.pause();
            music.currentTime = 0;
        }
    }

    function playMusic() {
        if (!music) {
            music = new Audio('frog.mp3');
            music.onended = stopShow;
        }
        startShow();
        music.currentTime = 0;
        music.play().catch(function () {});
    }

    modal.querySelector('.close_btn').addEventListener('click', stopShow);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') { stopShow(); }
    });

    window.playMusic = playMusic;
    window.stopShow = stopShow;
})();