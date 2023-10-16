const arrayExample = [
    { name: 'John', age: 25, },
    { name: 'Alan', age: 47, },
    { name: 'Elizabeth', age: 38, },
    { name: 'Sarah', age: 35, },
    { name: 'Alex', age: 39, },
    { name: 'Justin', age: 28, },
    { name: 'William', age: 58, },
  ];
  
  // сортировка массива по определенному условию, методом sort
  const sortArrayByAge = (arr) => {
    // чтобы отсортировать массив по двум условиям, потребуется два цикла
    // однин цикл с несколькими проверками будет работать не правильно,
    // тк будут сравниваться последовательные элементы,
    // а если одинаковых элементов во втором условии несколько, результат будет ошибочный
    const arrayByAge = arr.sort((a, b) => {
  
      // проверяем возваст, чтобы поменять элементы местами, нужно вернуть отрицательное значение
      // если значение певого элемента больше чем второго, вернется true,
      // вторая проверка выдаст false,
      // true - false, вернет 1
  
      // если значение певого элемента меньше чем второго, вернется false,
      // вторая проверка вернет true,
      // false - true, вернет -1
  
      return (b.age < a.age) - (a.age < b.age);
    })
  
    const arrayByName = arrayByAge.sort((a, b) => {
      // проверяем, что возраст одинаковый
      if (a.age === b.age) {
  
        // аналогичная проверка на разницу двух строк первого и второго элемента
        return (b.name < a.name) - (a.name < b.name)
      }
    })
  
    return arrayByName; // массив возвращать необязательно, тк массив мутирует
  }
  
  console.log(sortArrayByAge(arrayExample));
  //{ name: 'John', age: 25 },
  //{ name: 'Justin', age: 28 },
  //{ name: 'Sarah', age: 35 },
  //{ name: 'Elizabeth', age: 38 },
  //{ name: 'Alex', age: 39 },
  //{ name: 'Alan', age: 47 },
  //{ name: 'William', age: 58 }