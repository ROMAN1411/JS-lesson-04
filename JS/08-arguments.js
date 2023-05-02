/** Псевдомасив arguments & Array.from & ... */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// console.log('----------------------------------------');

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(a, b, c);
//   console.log(a, b, c, args);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// console.log('----------------------------------------');
// fn('aloha', 1, 2, 3, 4, 5);
// console.log('----------------------------------------');
// fn('hi', 1, 2, 3, 4, 5, 6, 7);
// console.log('----------------------------------------');

/** Напиши функцію add для додавання довільної кількості аргументів (чисел)
 * - Array.from()
 * - Операція ... (rest)
 */

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// console.log('----------------------------------------');

/** Напиши функцію filterNumbersArray {, number1, ..} яка:
 * - Першим аргументом приймає масив чисел
 * - Після першого аргументу може бути довільна кількість
 * інших аргументів, які будуть числами
 * - Функція повинна повернути новий масив, в якому будуть тільки ті аргументи,
 * починаючи з другого
 * для яких є аналог в оригінальному масиві.
 */

const filterNumbersArray = function (array, ...args) {
  console.log('array:', array);
  console.log('args:', args);

  const uniqueElements = [];

  for (const element of array) {
    console.log(element);
    if (args.includes(element)) {
      console.log(`${element} is in both😀`);

      uniqueElements.push(element);
    }
  }

  return uniqueElements;
};

console.log(filterNumbersArray([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log('----------------------------------------');
console.log(filterNumbersArray([10, 15, 25, 30], 23, 30, 18, 15));
console.log('----------------------------------------');
console.log(filterNumbersArray([100, 200, 300, 400, 500], 7, 12, 200, 64));
