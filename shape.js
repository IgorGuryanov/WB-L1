class Shape {
    _getSquare = (square) => {
      console.log(`the area of the ${this.name} shape is equal to: ${square}`)
    }
  
    _getPerimeter = (perimeter) => {
      console.log(`the perimeter of the ${this.name} shape is equal to: ${perimeter}`)
    }
  }
  
  class Rectangle extends Shape {
    name = 'Rectangle';
  
    // площадь прямоугольника: S = a * a
    calculateSquare = (sideA, sideB) => {
      this._getSquare((sideA * sideB));
    }
  
    // периметр прямоугольника: P = 2 * (a + b)
    calculatePerimeter = (sideA, sideB) => {
      this._getPerimeter((2 * (sideA + sideB)));
    }
  }
  
  class Circle extends Shape {
    name = 'Circle';
  
    // площадь круга: S = π * (r * r)
    calculateSquare = (radius) => {
      this._getSquare(Math.round(Math.PI * radius ** 2));
    }
  
    // периметр круга: P = 2 * π * r
    calculatePerimeter = (radius) => {
      this._getPerimeter(Math.round(2 * Math.PI * radius));
    }
  }
  
  class Triangle extends Shape {
    name = 'Triangle';
  
    calculateSquare = (sideA, sideB, sideC) => {
      // полупериметр треугольника
      const S = (sideA + sideB + sideC) / 2;
      this._getSquare(Math.sqrt(S * (S - sideA) * (S - sideB) * (S - sideC)));
    }
  
    // периметр треугольника: P = a + b + c
    calculatePerimeter = (sideA, sideB, sideC) => {
      this._getPerimeter(sideA + sideB + sideC);
    }
  }
  
  const rectangle = new Rectangle();
  const circle = new Circle();
  const triangle = new Triangle();
  
  rectangle.calculateSquare(5, 6); // the area of the Rectangle shape is equal to: 30
  rectangle.calculatePerimeter(7, 13); // the area of the Rectangle shape is equal to: 40
  
  circle.calculateSquare(10); // the area of the Circle shape is equal to: 314
  circle.calculatePerimeter(15); // the perimeter of the Circle shape is equal to: 94
  
  triangle.calculateSquare(4, 6, 8) // the area of the Triangle shape is equal to: 11.61895003862225
  triangle.calculatePerimeter(4, 6, 8) // the perimeter of the Triangle shape is equal to: 18