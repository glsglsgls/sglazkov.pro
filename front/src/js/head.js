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


const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
];

const head = document.querySelector('head');
head.innerHTML += head_part;

for (let i=0; i < scripts.length;i++) {
    let fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", scripts[i]);
    body.appendChild(fileref);
};

