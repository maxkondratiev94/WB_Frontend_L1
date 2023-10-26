// Реализовать аналог библиотеки Math (можно назвать MathX) с
// базовым набором функций, используя замыкания:
//    вычисление N-го числа в ряду Фибоначчи
//    вычисление всех чисел в ряду Фибоначчи до числа N
//    вычисление N-го просто числа
//    вычисление всех простых чисел до числа N

// Будет плюсом, если задумаетесь и об оптимизации.

// ==================================================

// Числа Фибоначчи — это последовательность чисел, которые задаются по
// определённому правилу. Оно звучит так: каждое следующее число равно
// сумме двух предыдущих. Первые два числа заданы сразу и равны 0 и 1.


var MathX = (function() {
    // Функция для проверки того, является ли число простым
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
  
    // Функция для генерации n-го числа Фибоначчи
    function nthFibonacci(n) {
      if (n <= 1) return n;
      let a = 0, b = 1, temp;
      for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }
  
    // вычисление всех чисел в ряду Фибоначчи до числа N
    function allFibonacciNumbers(N) {
      let fibNumbers = [];
      let a = 0, b = 1, temp;
      while (a <= N) {
        fibNumbers.push(a);
        temp = a + b;
        a = b;
        b = temp;
      }
      return fibNumbers;
    }
  
    // Функция для генерации n-го простого числа
    function nthPrime(n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (isPrime(num)) {
          count++;
        }
        num++;
      }
      return num - 1;
    }
  
    // Функция для генерации всех простых чисел до N
    function allPrimesUpTo(N) {
      let primes = [];
      for (let i = 2; i <= N; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      return primes;
    }
  
    return {
      nthFibonacci: nthFibonacci,
      allFibonacciNumbers: allFibonacciNumbers,
      nthPrime: nthPrime,
      allPrimesUpTo: allPrimesUpTo
    };
  })();
  
  // Примеры:
  console.log(MathX.nthFibonacci(5)); // Calculate the 10th Fibonacci number
  console.log(MathX.allFibonacciNumbers(35)); // Calculate all Fibonacci numbers up to 50
  console.log(MathX.nthPrime(7)); // Calculate the 5th prime number
  console.log(MathX.allPrimesUpTo(40)); // Calculate all prime numbers up to 30
  
  