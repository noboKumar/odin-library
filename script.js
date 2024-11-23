const addBookButton = document.getElementById('add-book-button');
const submitBookButton = document.getElementById("submit-book-button");
const cancelButton = document.getElementById('cancel-button');
const overlay = document.getElementById('overlay');

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