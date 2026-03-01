class Book{
    title;
    author; 
    pages;
    isAvailable=true;
    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow()
    {
        this.isAvailable=false;
    }
    returnBook()
    {
        this.isAvailable=true;

    }
    getInfo()
    {
        console.log(`The ${this.title} by ${this.author} (${this.pages} pages)`);
    }
    isLongBook(pages)
    {
        return this.pages > 300;
  
    }
}
let b1=new Book("Atomic Habits","James Clear",200,true);
let b2=new Book("A","Ramu",300,true);
let b3=new Book("B","Somu",400,true);
let b4=new Book("C","Bheem",500,true);
let b5=new Book("D","Adolf",600,true);
const library=[b1,b2,b3,b4,b5];
console.log("All books:");
library.forEach(book => console.log(book.getInfo()));
b1.borrow();
b4.borrow()
console.log("After buying 2 books:");
library.forEach(book => {
  console.log(`${book.title} - Available: ${book.isAvailable}`);
});
b1.returnBook();

console.log("\nAfter returning 1 book:");
library.forEach(book => {
  console.log(`${book.title} - Available: ${book.isAvailable}`);
});
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("Number of long books:", longBooksCount);
const availableBooks = library.filter(book => book.isAvailable);
console.log("Available Books:");
availableBooks.forEach(book => console.log(book.getInfo()));