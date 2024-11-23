const addBookButton = document.getElementById('add-book-button');
const submitBookButton = document.getElementById("submit-book-button");
const cancelButton = document.getElementById('cancel-button');
const overlay = document.getElementById('overlay');
const form = document.querySelector('form');


// opening and closing form 
addBookButton.addEventListener('click', (event)=>{
    event.preventDefault();
    overlay.style.display = 'flex';
});

cancelButton.addEventListener('click', ()=>{
    overlay.style.display = 'none'; 
});

overlay.addEventListener('click', (event)=>{
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});

function addBooks(title, author, pages, status){
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    bookCard();
}
// form value
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.querySelector('input[type="radio"]:checked').value;

    addBooks(title, author, pages, status);
    form.reset();
    overlay.style.display = "none";
});

const myLibrary = [
    {title: "Atomic Habits", author: "James Clear", pages: 320, status: "read"},
    {title: "Rich Dad Poor Dad", author: "Robert T.Kiyosaki", pages: 220, status: "read"},
    {title: "The Psychology of Money", author: "Morgan Housel", pages: 256, status: "not read"},
    {title: "Ikigai", author: "Francesc Miralles", pages: 305, status: "read"},
    {title: "Deep Work", author: "Cal Newport", pages: 208, status: "not read"}
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
};

//add a book to array
function addBookToLibrary(book) {
  myLibrary.push(book)
  bookCard();
};

function bookCard(){
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ``;

            myLibrary.forEach((book, index)=>{
                const card = document.createElement('div');
                card.classList.add('card');
                
                card.innerHTML = `
                <button class="close-button" aria-label="Close">x</button>
                <h3>Title: ${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <button class = "status-button">${book.status}</button>`

                bookContainer.appendChild(card);

                //toggle status button
                const statusButton = card.querySelector('.status-button');
                statusButton.addEventListener('click', ()=>{
                    book.status = book.status === "read"? "not read":"read";
                    statusButton.textContent = book.status;
                });

                //remove button
                const removeBookButton = card.querySelector('.close-button');
                removeBookButton.addEventListener('click', ()=>{
                    myLibrary.splice(index, 1);
                    bookCard();
                })
            });
}
bookCard();