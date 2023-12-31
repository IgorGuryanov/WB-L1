const arrayExample = [
    { name: 'John', age: 25, },
    { name: 'Alan', age: 47, },
    { name: 'Elizabeth', age: 38, },
    { name: 'Sarah', age: 35, },
    { name: 'Alex', age: 39, },
    { name: 'Justin', age: 28, },
    { name: 'William', age: 58, },
  ];
  
  // преобразуем объект в JSON
  const json = JSON.stringify(arrayExample);
  
    // Связанный список - это линейная структура данных, похожая на массив.
    // Однако, в отличие от массивов, элементы не хранятся в определенной ячейке памяти или индексе.
    // Скорее, каждый элемент представляет собой отдельный объект,
    // который содержит указатель или ссылку на следующий объект в этом списке.
  
  // за основу взято решение с канала "Front-end Science"
    class LinkedList {
      // в консткутор записываем две ссылки head и tail списка
      constructor() {
        this.head = null;
        this.tail = null;
      }
  
      // метод добавляет в конец объекта ссылку на новый элемент
      append = (value) => {
        const newNode = {
          value: value,
          next: null,
        };
  
        // если головы или хвоста списка нет, те список пуст, добавляем первый элемент
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
  
          return this;
        }
  
        // если элементы в списке есть
        // изменяем значение свойства объекта в хвосте (у последней ноды) на новый элемент, вместо null
        // a у нового элемента next уже смотрит на null
        this.tail.next = newNode;
        // записываем в ссылку хвоста новый узел
        this.tail = newNode;
      }
  
      // возращает голову объекта со всеми вложенными данными
      getList = () => {
        return this.head;
      }
    }
  
    // функция конвертация json строки в связный список
    const convertJsonToLinkedList = (json) => {
      // декодируем json-строку
      const list = JSON.parse(json);
      // создаём инстанс класса
      const linkedList = new LinkedList();
  
      // проверяем, что получен именно массив и он не пуст
      if (!(Array.isArray(list) && list.length > 0)) return 'not an array was passed or the array is empty'
  
      // перебираем массив и для каждого элемента вызываем метод добавления в связный массив
      list.forEach(obj => linkedList.append(obj));
  
      // возвращаем головной объект с ссылками на следующие элементы
      return linkedList.getList();
    }
  
    console.log(convertJsonToLinkedList(json));