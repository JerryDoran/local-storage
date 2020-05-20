const storeButton = document.getElementById('storeButton');
const retrieveButton = document.getElementById('retrieveButton');

storeButton.addEventListener('click', () => {
  const userId = 'u123';
  const user = { name: 'Mario', age: 50 };
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveButton.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((item) => item.trim());
  console.log(data);
  console.log(data[0].split('=')[1]);
});

// Cookies
console.log(document.Cookie);
