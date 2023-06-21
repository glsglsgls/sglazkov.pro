const head_part = `<title>Сергей Глазков - личный сайт</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=2.0, user-scalable=yes">
<meta name="description" content="Сайт находится в разработке" >
<meta name="author" content="GLSGLSGLS">
<meta name="mailru-domain" content="6vxO3pAeLwNAgGc8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/logo.css">
<link rel="stylesheet" href="css/books.css">`;


const yametrika = `<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(93944403, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/93944403" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
`;


const header = `
<nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
    <div class="burger-menu">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="index.html" class="logo__burger">
            <img src="./img/logo22.png" width="45" height="31" class="logo__burger logo__all" alt="sglazkov.pro logo">
        </a>
    </div>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item logo__full scale_when_hover_20">
                <a href="">
                    <img src="./img/logo22.png" width="45" height="31" class="logo__full logo__all" alt=" logo">
                </a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="#about">Обо мне</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="#skills">Навыки</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="#gallery">Портфолио</a>
            </li>
            <li class="nav-item scale_when_hover_10">
                <a class="nav-link" href="/books">Что по книгам?</a>
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

const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
];

const body = document.querySelector('body');
const head = document.querySelector('head');
head.innerHTML += head_part;
head.innerHTML += yametrika;

let head_el = document.createElement('header');
head_el.classList.add('head');
head_el.innerHTML = header;
body.prepend(head_el);


body.innerHTML+= footer;


for (let i=0; i < scripts.length;i++) {
    let fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", scripts[i]);
    body.appendChild(fileref);
};

