// Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

// ==================================================

// Определяем конструктор книги
function Book(title, author, yearOfPublication) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = yearOfPublication;
  
    // Получаем название книги
    this.getTitle = function () {
      return this.title;
    };
  
    // Задаем новое название книги
    this.setTitle = function (newTitle) {
      this.title = newTitle;
    };
  
    // Задаем имя автора книги
    this.getAuthor = function () {
      return this.author;
    };
  
    // Задаем новое имя автора книги
    this.setAuthor = function (newAuthor) {
      this.author = newAuthor;
    };
  
    // Задаем год публикации книги
    this.getYearOfPublication = function () {
      return this.yearOfPublication;
    };
  
    // Задаем новый год публикации книги
    this.setYearOfPublication = function (newYear) {
      this.yearOfPublication = newYear;
    };
  }
  
  // Создаем книгу
  const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
  // Отображаем все свойства книги
  console.log("Title:", myBook.getTitle());
  console.log("Author:", myBook.getAuthor());
  console.log("Year of Publication:", myBook.getYearOfPublication());
  
  // Изменяем свойства книги
  myBook.setTitle("To Kill a Mockingbird");
  myBook.setAuthor("Harper Lee");
  myBook.setYearOfPublication(1960);
  
  // Отображаем обновленные свойства книги
  console.log("\nUpdated Title:", myBook.getTitle());
  console.log("Updated Author:", myBook.getAuthor());
  console.log("Updated Year of Publication:", myBook.getYearOfPublication());
  