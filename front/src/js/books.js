let url = location.origin + window.__BASE + "api/v1/books";

const fallbackBooks = [
    {
        author: '',
        name: '',
        comments: 'Возникла проблема на стороне сервера..',
        img: ''
    }
];

function shuffle(values) {
    return values
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

async function loadBooks() {
    let books = [];
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        books = await response.json();
    } catch (error) {
        console.error(error);
        books = fallbackBooks;
    }

    books = shuffle(books);

    const booksDiv = document.querySelector('.content');
    for (const book of books) {
        const box = document.createElement('div');
        box.classList.add('book_box');

        const textBox = document.createElement('div');
        textBox.classList.add('book_text');

        const name = document.createElement('h3');
        name.appendChild(document.createTextNode(book.name + ' - ' + book.author));

        const comments = document.createElement('div');
        comments.classList.add('comments_text');
        comments.appendChild(document.createTextNode(book.comments));

        textBox.appendChild(name);
        textBox.appendChild(comments);
        box.appendChild(textBox);
        booksDiv.appendChild(box);
    }
}

loadBooks();