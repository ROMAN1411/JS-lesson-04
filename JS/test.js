/** Напиши функцію getExtremeElements(array), яка приймає один параметр array -
 * масив елементів довільної довжини. Функція повинна повертати масив з двох елементів -
 * першого і останнього елемента параметра array. */

function getExtremeElements(array) {
  //   console.log(array);
  const newArray = [array[0], array[array.length - 1]];

  //   console.log(array[0]);
  //   console.log(array[array.length - 1]);

  //   newArray = [array[0] + ',' + array[array.length - 1]];

  //   newArray += array[array.length - 1];

  console.log(newArray);
  return newArray;
}

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(['Earth', 'Mars', 'Venus']);
getExtremeElements(['apple', 'peach', 'pear', 'banana']);

console.log('----------------------');

/** Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала 
 * ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). 
Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) 
та ціну гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку. */

function calculateEngravingPrice(message, pricePerWord) {
  const totalPrise = message.split(' ').length * pricePerWord;
  console.log(totalPrise);
  return totalPrise;
}

calculateEngravingPrice('JavaScript is in my blood', 10);
calculateEngravingPrice('JavaScript is in my blood', 20);
calculateEngravingPrice('Web-development is creative work', 40);
calculateEngravingPrice('Web-development is creative work', 20);
console.log('----------------------');

/** Напиши функцію slugify(title), яка приймає заголовок статті, параметр title,
 *  і повертає slug, створений з цього рядка. */

function slugify(title) {
  //   console.log(title);
  const slug = title.split(' ').join('-').toLowerCase();
  console.log(slug);
}

slugify('Arrays for begginers');
slugify('English for developer');
slugify('Ten secrets of JavaScript');
slugify('How to become a JUNIOR developer in TWO WEEKS');
console.log('----------------------');

/**Напиши функцію calculateTotalPrice(order), яка приймає один параметр order
 * - масив чисел, і обчислює загальну суму його елементів.
 * Загальна сума елементів повинна зберігатися у змінній total,
 * яка повертається як результат роботи функції. */

function calculateTotalPrice(order) {
  let total = 0;

  for (let index = 0; index < order.length; index++) {
    // console.log(order[index]);
    total += order[index];
  }
  console.log(total);

  return total;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);
console.log('----------------------');

/** Напиши функцію findLongestWord(string), яка приймає довільний рядок,
 * що складається тільки зі слів, розділених пробілом (параметр string),
 * і повертає найдовше слово в цьому рядку. */

function findLongestWord(string) {
  const newString = string.split(' ');
  console.log(newString);

  let longestWord = newString[0];

  for (let i = 0; i < newString.length; i++) {
    // console.log(newString[i]);

    if (longestWord.length < newString[i].length) {
      longestWord = newString[i];
    }
  }

  console.log(longestWord);
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');
console.log('----------------------');

/**Доповни код функції createArrayOfNumbers(min, max) таким чином,
 * щоб вона повертала масив усіх цілих чисел від значення min до max. */

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  return numbers;
}

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);
console.log('----------------------');

/**Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers)
 * і повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
 * які більші за значення параметра value (число). */

function filterArray(numbers, value) {
  let newArray = [];

  for (const number of numbers) {
    // console.log(number);
    if (number > value) {
      newArray.push(number);
    }
  }
  console.log(newArray);
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);
console.log('----------------------');

/**Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, 
оскільки вони присутні в обох вихідних масивах. 
А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини 
в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, 
які присутні в обох вихідних масивах. */

function getCommonElements(array1, array2) {
  let newArray = [];
  for (const item of array1) {
    if (array2.includes(item)) {
      newArray.push(item);
    }
  }
  console.log(newArray);
}

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);
console.log('----------------------');

/**Напиши функцію includes(array, value), яка робить те саме, 
 * що і метод масиву масив.includes(значення) - перевіряє, 
 * чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, 
 * і false в іншому випадку.

При виконанні цього завдання в тілі функції includes() не можна 
використовувати метод масив.includes(значення). */

function includes(array, value) {
  let checkValue;
  for (const item of array) {
    // console.log(item);
    if (item === value) {
      checkValue = true;
      break;
    }
    checkValue = false;
  }
  console.log(checkValue);
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
