export function basicModule() {
  console.log('start');

  const fetchUser = (firstName?: string = '', lastName?: string = '', age?: number = 1) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (firstName === 'Leonid') {
          resolve({
            firstName,
            lastName,
            age
          });
        } else {
          reject('user Leonid not found');
        }
      }, 2000);
    });
  };

  fetchUser('Leonid', 'Dobrinov', 23)
    .then((data) => {
      console.log('promise resolved');
      console.log(data);
    })
    .catch((error) => {
      console.log('promise rejected');
      console.log(error);
    })
    .finally(() => {
      console.log('promise completed');
    });

  console.log('end');
}
