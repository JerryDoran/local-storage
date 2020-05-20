const storeButton = document.getElementById('storeButton');
const retrieveButton = document.getElementById('retrieveButton');

// Local storage
const userId = 'u123';
const user = {
  name: 'Mario',
  age: 50,
  hobbies: ['Coding', 'Sports']
};

storeButton.addEventListener('click', () => {
  localStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveButton.addEventListener('click', () => {
  const id = localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  if (id) {
    console.log('Got the id ' + id);
  } else {
    console.log('Could not find id');
  }

  console.log(extractedUser);
});

// Cookies
console.log(document.Cookie);
