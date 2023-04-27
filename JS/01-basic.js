//* Функції

/**Функціональний вираз
 * Аргументи і параметри
 * Повернення значення
 */

const add = function (x, y) {
  //   console.log(x);
  //   console.log(y);
  //   console.log('Виконується функція add');

  return x + y;
};

const r1 = add(5, 3);
console.log('Return:', r1);
console.log('--------------------');

const r2 = add(10, 15);
console.log('Return:', r2);
console.log('--------------------');

const r3 = add(30, 50);
console.log('Return:', r3);
console.log('--------------------');

const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return 'Меньше 50';
  }
  return 'Більше 50';
};

console.log('Результат функції:', fn(10));
console.log('Результат функції:', fn(1000));
console.log('--------------------');

/**Стек викликів  */
