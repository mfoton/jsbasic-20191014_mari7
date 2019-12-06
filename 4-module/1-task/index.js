/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement('ul');

  for (let element of friends) {
    let li = document.createElement('li');
    li.innerHTML = element.firstName + " " + element.lastName;
    list.append(li);
  }
  document.body.append(list);
}
