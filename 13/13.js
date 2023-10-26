// Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте подклассы,
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

// ==================================================

class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Shape class cannot be instantiated directly.");
      }
    }
  
    // Переопределяем методы подклассами
    calculateArea() {
      throw new Error("Subclasses must implement calculateArea method.");
    }
  
    calculatePerimeter() {
      throw new Error("Subclasses must implement calculatePerimeter method.");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (0.5 * this.base * this.height);
    }
  
    calculatePerimeter() {
      throw new Error("Cannot calculate the perimeter of a general triangle with just base and height.");
    }
  }
  
  // Примеры:
  const rectangle = new Rectangle(4, 5);
  console.log("Rectangle - Area: " + rectangle.calculateArea());
  console.log("Rectangle - Perimeter: " + rectangle.calculatePerimeter());
  
  const circle = new Circle(3);
  console.log("Circle - Area: " + circle.calculateArea());
  console.log("Circle - Perimeter: " + circle.calculatePerimeter());
  
  const triangle = new Triangle(6, 8);
  console.log("Triangle - Area: " + triangle.calculateArea());
  