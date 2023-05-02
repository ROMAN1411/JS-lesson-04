/** Напиши функцію changeCase(string) яка змінює регістр
 * кожного символу в рядку на протилежний
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(string);
// console.log(letters);

// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);
console.log('------------------------------------');

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();

    console.log(invertedString);
  }

  return invertedString;
};

console.log(changeCase('qweRTY'));
console.log(changeCase('mAnGo'));
console.log(changeCase('AjAx'));
