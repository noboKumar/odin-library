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
// form value
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const statusValue = document.querySelector('input[type="radio"]:checked').value;
});




