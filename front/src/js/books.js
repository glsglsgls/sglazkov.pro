let url = 'https://sglazkov.pro/api/v1/books';

function httpGet(theUrl)
{
    let res = [];
    try {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        res = JSON.parse(xmlHttp.responseText);
    }
    catch (error) {
        console.error(error);
        res = [
            {
                author: '',
                name: '',
                comments: 'Возникла проблема на стороне сервера..',
                img: ''
            }
        ];
    }
    
    // if (xmlHttp.status != 200) {
    return res.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }
    

let books = httpGet(url);

const books_div = document.querySelector('.content');

for (let i=0; i< books.length;i++) {
    let book_box = document.createElement('div');
    book_box.classList.add('book_box');
    
    let pic_box = document.createElement('div');
    pic_box.classList.add('book_pic');
    let img = document.createElement('img');
    img.classList.add('book_img')
    img.src = books[i].img;
    pic_box.appendChild(img);
    
    let text_box = document.createElement('div');
    text_box.classList.add('book_text');
    
    text_box.innerHTML = '<h3>' + books[i].name + ' - ' + books[i].author + '</h3>';
    text_box.innerHTML += books[i].comments

    let text_height = text_box.offsetHeight

    book_box.appendChild(pic_box);
    book_box.appendChild(text_box);

    books_div.appendChild(book_box);
};


