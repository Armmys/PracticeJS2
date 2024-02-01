class Book {
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }

    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }

    getTotalPagesByGenre(genre) {
        let totalPage = 0;
        for (let page of this.getBooksByGenre(genre)) {
            totalPage += page.pages;
        }
        return totalPage;
    }

    deleteBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
}

const book1 = new Book('Harry Wick', 'Conan', 345, 'Sci-Fi');
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 300, 'Fantasy');
const book3 = new Book('1984', 'George Orwell', 400, 'Dystopian');
const book4 = new Book('Harry Potter', 'Ben10', 345, 'Sci-Fi');

const library = new Library('My Library');

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

library.addBook(book1);
library.addBook(book2);
library.addBook(book4);

console.log(library.getBooksByGenre('Sci-Fi'));
console.log(library.getTotalPagesByGenre('Sci-Fi'));

// เพิ่มหนังสือเพื่อทดสอบ
const bookToDelete = new Book('To Delete', 'Some Author', 200, 'Mystery');
library.addBook(bookToDelete);

console.log(library.getBooksByGenre('Mystery'));

// ลบหนังสือ
library.deleteBook('To Delete');

console.log(library.getBooksByGenre('Mystery'));