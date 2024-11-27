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

}

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")

addBookToLibrary('zegora',"alemayehu",234,"true")


for (let i =0; i<myLibrary.length;i+=1){
    display=document.querySelector('.display-books')
    let newDiv = document.createElement('div');
    newDiv.classList.add('my-div');

    newDiv.classList.add(i % 2 === 0 ? 'even-div' : 'odd-div');

    let bookInfo = `Title: ${myLibrary[i].title}<br>
                    Author: ${myLibrary[i].author}<br>
                    Pages: ${myLibrary[i].pages}<br>
                    Read: ${myLibrary[i].isRead ? 'Yes' : 'No'}`;
    newDiv.innerHTML=bookInfo;
    display.append(newDiv)
}

