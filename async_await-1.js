const divEle = document.querySelector('.card-container');

async function getDetails(id) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
      throw new Error('No Data present');
    }
    const userdata = await response.json();
    displayUser(userdata, 'beforeend');
  } catch (err) {
    console.log(err);
  }
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

getDetails(0);
