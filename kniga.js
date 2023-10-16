const book = {
    // свойства объекта
    title: 'War and Peace',
    author: 'L. Tolstoy',
  
    // методы объекта, функции устанавливающие значения ключей
    setTitle: function(title) {
      if (title.length < 3) {
        alert('the title is too short');
        return
      };
      this.title = title;
    },
    setAuthor: function(author) {
      this.author = author;
    },
  
    // сеттер и геттер
    set published(value) {
      if (typeof value !== "number") {
        alert('pass the number');
        return
      };
  
      this._published = value;
    },
    get published() {
      return this._published;
    },
  
    // получить всю информацию
    getAllData: function() {
      return `${this.title}, ${this.author}, ${this._published}`;
    },
  }
  
  // вызываем метод объекта, чтобы получить всю информацию
  console.log(book.getAllData()); // War and Peace, L. Tolstoy, undefined
  
  // обращение к геттеру и сеттеру (акцессоры) производится без вызова, как метода
  book.published = 1869
  console.log(book.published); // 1869
  
  book.setTitle('War and Peace');
  
  console.log(book.getAllData()); // War and Peace, L. Tolstoy, 1869