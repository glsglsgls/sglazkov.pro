const head_part = `<title>Сергей Глазков - личный сайт</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=2.0, user-scalable=yes">
<meta name="description" content="Сайт находится в разработке" >
<meta name="author" content="GLSGLSGLS">
<meta name="mailru-domain" content="6vxO3pAeLwNAgGc8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
`;

const header = `
<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    <div class="burger-menu">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="/" class="logo__burger">
            <img src="./img/logo22.png" width="45" height="31" class="logo__burger logo__all" alt="sglazkov.pro logo">
        </a>
    </div>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item logo__full scale_when_hover_20">
                <a href="/">
                    <img src="./img/logo22.png" width="45" height="31" class="logo__full logo__all" alt=" logo">
                </a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="/#about">Обо мне</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="/#skills">Навыки</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="/books">Что по книгам?</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="#" onclick="playMusic();return false;">Выпусти жабу</a>
            </li>
        </ul>
    </div>
</nav>
`;

const footer = `<footer class="base_section">
    <div class="wrapper">
        <div class="foot">
            <p>Не переключайтесь ©</p>
        </div>
    </div>
</footer>`;


const head = document.querySelector('head');
head.innerHTML += head_part;

const body = document.querySelector('body');
let head_el = document.createElement('header');
head_el.classList.add('head');
head_el.innerHTML = header;
body.prepend(head_el);

body.innerHTML+= footer;
