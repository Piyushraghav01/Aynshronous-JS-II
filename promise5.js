const divEle = document.querySelector('.card-container');

function getUser(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Id does not match any data');
    }
    return response.json();
  });
}
function getDetails(id) {
  getUser(`https://dummyjson.com/users/${id}`)
    .then((user) => {
      displayUser(user, 'beforeend');
      return getUser(`https://dummyjson.com/users/${id - 1}`);
    })
    .then((user) => {
      displayUser(user, 'afterbegin', 'other');
      return getUser(`https://dummyjson.com/users/${id - 2}`);
    })
    .then((user) => {
      displayUser(user, 'afterbegin', 'back');
    })
    .catch((err) => {
      console.error(err);
    });
}

function displayUser(data, pos, className = '') {
  const card = `<div class="user-card ${className}">
        <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName} </h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(4);
