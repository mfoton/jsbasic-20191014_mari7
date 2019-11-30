/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let userSalary = [];
  for (let user of data) {
    if (user.age <= age) {
      let userData = [user.name, user.balance];
      userSalary.push(userData);
    }
  }
  return userSalary;
}
