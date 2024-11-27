function Book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead
}
let myLibrary=[]

function addBookToLibrary(title,author,pages,isRead){
    let book= new Book(title,author,pages,isRead)
    myLibrary.push(book)
    saveLibraryToLocalStorage();
    displayBooks();

}

function saveLibraryToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function loadLibraryFromLocalStorage() {
    const storedLibrary = localStorage.getItem('myLibrary');
    if (storedLibrary) {
        myLibrary = JSON.parse(storedLibrary);
    }
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    saveLibraryToLocalStorage();
    displayBooks();
}


function removeBook(index) {
    myLibrary.splice(index, 1);
    saveLibraryToLocalStorage();
    displayBooks();
}

function displayBooks() {
    const display = document.querySelector('.display-books');
    display.innerHTML = ''; 
    myLibrary.forEach((book, i) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('my-div');
        newDiv.classList.add(i % 2 === 0 ? 'even-div' : 'odd-div');

        let bookInfo = `Title: ${book.title}<br>
                        Author: ${book.author}<br>
                        Pages: ${book.pages}<br>
                        Read: ${book.isRead ? 'Yes' : 'No'}`;
        newDiv.innerHTML = bookInfo;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('change-btn');
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', function () {
            removeBook(i); 
        });

        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('change-btn');
        toggleBtn.textContent = 'Toggle Read Status';
        toggleBtn.addEventListener('click', function () {
            toggleReadStatus(i); 
        });

        newDiv.append(toggleBtn, removeBtn);
        display.append(newDiv);
    });
}

loadLibraryFromLocalStorage();
displayBooks();

add_btn=document.getElementById('newBook-btn')
form_display=document.querySelector('.form-to-newBook')
submit_btn=document.getElementById('submit-btn')

add_btn.addEventListener('click',function(){
    form_display.style.display='block'
})

submit_btn.addEventListener('click',function(e){
    e.preventDefault()

    const author = document.querySelector('input[type="text"]:nth-child(2)').value;
    const title=document.querySelector('input[type="text"]:nth-child(4)').value;
    const pages=document.querySelector('input[type="number"]').value;
    const Read=document.querySelector('input[type="checkbox"]').checked;

    addBookToLibrary(title, author, pages, Read);

    document.querySelector('input[type="text"]:nth-of-type(1)').value = "";
    document.querySelector('input[type="text"]:nth-of-type(2)').value = "";
    document.querySelector('input[type="number"]').value = "";
    document.querySelector('input[type="checkbox"]').checked = false;

    form_display.style.display = 'none';

});
console.log(myLibrary)

