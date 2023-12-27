document.addEventListener('DOMContentLoaded', function () {
    displayBooks();
});

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;

    if (title && author) {
        const book = { title, author, category };
        saveBook(book);
        displayBooks();
        clearForm();
    }
}

function saveBook(book) {
    let books = getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

function displayBooks() {
    const books = getBooks();
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
        if (book.category) {
            li.innerHTML += ` (${book.category})`;
        }
        booksList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('category').value = '';
}
