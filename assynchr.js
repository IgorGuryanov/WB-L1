// функция возвращающая промис для имитации асинхронного кода
const generateText = () => {
    // промис принимает колбэк с двумя функциями для обработки "успешного" результата и ошибки
    return new Promise((resolve, reject) => {
      // имитация асинхронного кода
      setTimeout(() => {
        resolve('example text');
      }, 2000);
  
      // блок для примера генерации ошибки
      // setTimeout(() => {
      //   reject(new Error('sorry'));
      // }, 2000);
    })
  }
  
  // async/await специальный синтаксис для работы с промисами
  // async всегда возвращает промис
  const getText = async () => {
    // await остановит интерпритатор javaScript до момента выполнения промиса справа
    const text = await generateText();
  
    return text
  }
  
  getText()
    // если промис вернул resolve
    .then(res => console.log(res))
    // если промис вернул ошибку
  .catch(err => console.log(err));