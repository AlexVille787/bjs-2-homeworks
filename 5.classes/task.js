class PrintEditionItem {
    constructor (name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
}
fix(){
    this.state *= 1.5;
}
set state(value){
    if (value < 0){
        this._state = 0;
    }else if (value >100){
        this._state = 100;
    }else {
        this._state = value;
    }
}
get state(){
    return this._state;
}
}
class Magazine extends PrintEditionItem {
    constructor(...allParameters){
      super(...allParameters);
      this.type = "magazine"   
    }
}  
class Book extends PrintEditionItem {
    constructor(author,...allParameters){
        super(...allParameters);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book{
constructor(...allParameters){
    super(...allParameters);
    this.type = "novel";
}
}
class FantasticBook extends Book{
constructor(...allParameters){
    super(...allParameters);
    this.type = "fantastic";
}
}
class DetectiveBook extends Book{
constructor(...allParameters){
    super(...allParameters);
    this.type = "detective";
}
}
class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book)
         }
    }
    findBookBy(key, value){
        const book = this.books.find((book) => book [key]===value)  
        if(book === undefined){
            return null
        }
        return  book
    } 
    giveBookByName(bookName){
       const book = this. books.find((book) => book.name === bookName)
       if(book === undefined){
        return null
       }
       this.books = this.books.filter((bookItem) => bookItem !== book)
       return book
    }
}
