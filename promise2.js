const divEle = document.querySelector('.card-container');

function getDetails(id) {
  //   const request = fetch(`https://dummyjson.com/users/${id}`);
  //   //console.log(request);

  //   const response = request.then((response) => {
  //     return response.json();
  //   });

  //   response.then((user) => console.log(user));

  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((user) => console.log(user))
}

getDetails(1);
