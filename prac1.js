// 1.
// Instruction:
// - Write class Book. Then, add a method to the object that outputs information about the 
// book.
// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties 
// 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no 
// author', and 0 respectively.
// Properties
// • title: type String
// • author: type String
// • yearPublished: type number
// Methods
// • getInfo(): This method return a string that combines the book's title, author, 
// and year of publication.
// Initiate code:
// Creating class Book 
// Insert your code here

class Book {
    // Constructor
    constructor(title, author, yearPublished) {
        // ถ้า title เป็นค่าว่างหรือไม่ได้รับค่า กำหนดให้เป็น 'no title'
        if (title === undefined || title === null || title === '' || typeof title !== 'string') {
            this.title = 'no title';
        } else {
            this.title = title;
        }

        // ถ้า author เป็นค่าว่างหรือไม่ได้รับค่า กำหนดให้เป็น 'no author'
        if (author === undefined || author === null || author === '' || typeof author !== 'string') {
            this.author = 'no author';
        } else {
            this.author = author;
        }

        // ถ้า yearPublished เป็นค่าว่างหรือไม่ได้รับค่า กำหนดให้เป็น 0
        if (yearPublished === undefined || yearPublished === null || isNaN(yearPublished) || typeof yearPublished !== 'number') {
            this.yearPublished = 0;
        } else {
            this.yearPublished = yearPublished;
        }
    }

    // Method to get information about the book
    getInfo() {
        return `${this.title} ${this.author} ${this.yearPublished}`
    }

}

const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

console.log(myBook.getInfo())
