class MathX {
    getNthNum = (num) => {
      let prevValue = 0;
      let nextValue = 1;
  
      
      for (let i = 0; i < num; i++) {
        nextValue += prevValue;
        prevValue = nextValue - prevValue;
      }
  
      return prevValue;
    }
  
    getAllNumBeforNthNum = (num) => {
      const result = [];
  
      for (let i = 0; i < num; i++) {
        result.push(this.getNthNum(i));
      }
  
      return result
    }
  
    getPrimeNum = (num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true
    }
  
    getAllPrimeNumBeforeNthNum = (num) => {
      const result = [];
  
      for (let i = 2; i <= num; i++) {
        if (this.getPrimeNum(i)) {
          result.push(i);
        }
      }
      return result;
    }
  }
  
  const mathX = new MathX();
  
  console.log(mathX.getNthNum(10)); 
  console.log(mathX.getAllNumBeforNthNum(9));
  console.log(mathX.getPrimeNum(11)); 
  console.log(mathX.getAllPrimeNumBeforeNthNum(17));