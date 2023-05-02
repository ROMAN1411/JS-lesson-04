/** Напиши функцію slugify(string) яка отримує рядок і повертає URL-slug
 *  Рядок складається тільки із букв і пробілів
 */

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

console.log('--------------------------------------');

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

console.log('--------------------------------------');

const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
