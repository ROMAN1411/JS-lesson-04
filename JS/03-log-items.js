/** Напиши функцію logItems(items) для перебору і логування масиву
 */

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kivi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавіатура', 'наушники', 'годинник']);
