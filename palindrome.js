'use strict'

const noPalindrom = 'Bear';
const palindrom1 = 'Level';
const palindrom2 = 'У скал плакса ласкал плаксу';
const palindrom3 = 'Я вам пишу - чего же боле?';
  // перевернуть строку и сравнить с оригиналом
  const isPalindrom1 = (str) => {
    // приводим строку к нижнему регистру, и убираем пробелы
    str = str.toLowerCase().replace(/\s/g,'');

    // делим строку на символы, разворачиваем её и объединяем
    // сравниваем два варианта
    return str === str.split('').reverse().join('');
  }

  console.log(isPalindrom1(noPalindrom)) // false
  console.log(isPalindrom1(palindrom1)) // true
  console.log(isPalindrom1(palindrom2)) // true
  console.log(isPalindrom1(palindrom3)) // false