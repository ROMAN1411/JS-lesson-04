// function foo(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

/** Знайти найдовше слово */

const findLongestWords = function (words) {
  let longestWord = '';
  const arrayOfWords = words.split(' ');

  for (const word of arrayOfWords) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }
  // console.log(longestWord);

  return longestWord;
};

const testFindLongestWord = function (result, expected) {
  if (result === expected) {
    console.log('Hooorey👍');
    return;
  }
  console.log('Error😠');
};

const words1 = 'kiwi banana tomato potato cucumber';
const words2 = 'audi bmw';

testFindLongestWord(findLongestWords(words1), 'cucumber');
testFindLongestWord(findLongestWords(words2), 'audi');

console.log('---------------------------------');

/** Напиши функцію, яка отримує два масиви довільної довжини в
 * параметри array1 та array2,
 * та повертає масив, який складається із тих елементів,
 * які присутні в обох вихідних масивах.
 */

const getCommonElements = function (array1, array2) {
  const result = [];

  for (const item of array1) {
    const hasItem = array2.includes(item);

    if (hasItem) {
      result.push(item);
    }
  }

  return result;
};

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [10, 15, 22, 4, 222, 7];

console.log(getCommonElements(array1, array2));
console.log('---------------------------------');

/** Знайти середнє значення елементів масиву */

const getAvarageValue = function (arr) {
  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  return sum / arr.length;
};

console.log(getAvarageValue([1, 5, 2, 3, 4]));
console.log('---------------------------------');

/** Знайти максимальне число */

const getMaxValue = function (arr) {
  let maxValue = arr[0];

  for (const item of arr) {
    if (item > maxValue) {
      maxValue = item;
    }
  }
  return maxValue;
};

console.log(getMaxValue([22, 11, 2222, 111]));
console.log('---------------------------------');
