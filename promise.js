const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log('Promise initiated');
    resolve({ firstName: 'Falak', lastName: 'Chandni' });
    //reject('Request has been rejected!!');
  }, 1000);
});

request
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('request completed'));

console.log(request);
