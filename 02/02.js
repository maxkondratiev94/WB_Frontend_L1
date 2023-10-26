// Задача о странных числах: Напишите функцию, которая принимает число и возвращает `true`,
// если это число является странным, и `false` в противном случае.
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

// ==================================================

const isStrangeNumber = (num) => {
    // требуется найти все делители числа, получить их сумму
    // и сравнить с числом, если сумма больше, возвращаем true
    let sumDivisors = 0;
  
    for (let i = 1; i < num; i++) {
      // запускаем цикл, проверяем каждое целое число
      // является ли оно делителем
      if (num % i === 0) sumDivisors += i;
    }
  
    return sumDivisors > num ? true : false;
  }
  
  
  console.log(isStrangeNumber(16)); // false
  console.log(isStrangeNumber(46)); // false
  console.log(isStrangeNumber(65)); // false
  console.log(isStrangeNumber(9272)); // true
  console.log(isStrangeNumber(4030)); // true