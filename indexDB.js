const storeButton = document.getElementById('storeButton');
const retrieveButton = document.getElementById('retrieveButton');

const dbRequest = indexedDB.open('DummyStorage', 1);
let db;

dbRequest.onsuccess = (event) => {
  db = event.target.result;
};

dbRequest.onupgradeneeded = (event) => {
  db = event.target.result;

  const objectStore = db.createObjectStore('products', { keyPath: 'id' });

  objectStore.transaction.oncomplete = (event) => {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');

    productsStore.add({
      id: 'p1',
      title: 'A first product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  };
};

dbRequest.onerror = (event) => {
  console.log('ERROR!');
};

storeButton.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');

  productsStore.add({
    id: 'p2',
    title: 'A second product',
    price: 122.99,
    tags: ['Expensive', 'Luxury']
  });
});

retrieveButton.addEventListener('click', () => {
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');

  const request = productsStore.get('p2');

  request.onsuccess = () => {
    console.log(request.result);
  };
});
