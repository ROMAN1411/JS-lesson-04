/** Напиши функцію findLogin(allLogins, login) для пошуку логіну
 *
 * - Якщо логіну немає, вивести повідомлення "Користувач [логін] не знайдений."
 * - Якщо знайшли логін, вивести повідомлення "Користувач [логін] знайдений."
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений 😀`
//   : `Користувач ${loginToFind} не знайдений 😔`;

// console.log(message);

console.log('------------------------------------------');

// const findLogin = function (allLogins, loginToFind) {
//   //   console.log(allLogins);
//   //   console.log(loginToFind);

//   for (const login of allLogins) {
//     // console.log(login);
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдений 😀`;
//     }
//   }
//   return `Користувач ${loginToFind} не знайдений 😔`;
// };

console.log('------------------------------------------');

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений 😀`
    : `Користувач ${loginToFind} не знайдений 😔`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
