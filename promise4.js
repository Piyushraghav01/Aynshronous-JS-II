const divEle = document.querySelector('.card-container');

function getDetails(id) {
  fetch(`https://dummyjson.com/users/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Id does not match any data');
    }
    return response.json();
  })
    .then((user) => {
      displayUser(user, 'beforeend');
      return fetch(`https://dummyjson.com/users/${id - 1}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('No previous ID exist');
        }
      return response.json();
    })
    .then((user) => {
      displayUser(user, 'afterbegin', 'other');
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
