let localProducts = [];

document.addEventListener('DOMContentLoaded', () => {
  loadLocalProducts();
  loadCatalog();
  let addProductButton = document.getElementById('addProduct');
  addProductButton.addEventListener('click', () => {
    let titleInput = document.getElementById('productTitle').value.trim();
    let descriptionInput = document.getElementById('productDescription').value.trim();
    let priceInput = parseFloat(document.getElementById('productPrice').value.trim());
    if (!titleInput || !descriptionInput || isNaN(priceInput)) {
      alert('Пожалуйста, заполните все поля корректно!');
      return;
    }
    let newProduct = {
      id: Date.now(),
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      images: ['https://via.placeholder.com/150'],
    };
    addLocalProduct(newProduct);
    resetInputFields();
  });
  let searchButton = document.getElementById('searchButton');
  let searchInput = document.getElementById('search-input');
  searchButton.addEventListener('click', () => {
    let query = searchInput.value.trim();
    loadCatalog(query);
  });
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      let query = searchInput.value.trim();
      loadCatalog(query);
    }
  });
});

function saveLocalProducts() {
  localStorage.setItem('localProducts', JSON.stringify(localProducts));
}

function loadLocalProducts() {
  let savedProducts = localStorage.getItem('localProducts');
  if (savedProducts) {
    localProducts = JSON.parse(savedProducts);
  }
}

function loadCatalog(query = '') {
  let apiUrl = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : 'https://dummyjson.com/products?limit=0&skip=9&select=title,description,images,price';
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let catalog = document.getElementById('catalog');
      catalog.innerHTML = '';
      data.products.forEach((product) => {
        createProductCard(product);
      });
      localProducts
        .filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
        .forEach((product) => {
          createProductCard(product);
        });

      if (data.products.length === 0 && localProducts.length === 0) {
        catalog.innerHTML = '<p>Нет результатов для данного запроса.</p>';
      }
    })
    .catch((error) => {
      console.error('Ошибка при загрузке данных:', error);
      document.getElementById('catalog').innerHTML =
        '<p>Не удалось загрузить каталог продуктов.</p>';
    });
}

function createProductCard(product) {
  let catalog = document.getElementById('catalog');
  let card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${product.images[0]}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p class="price">$${product.price.toFixed(2)}</p>
  `;
  card.addEventListener('click', () => openProductDetails(product));
  catalog.appendChild(card);
}

function addLocalProduct(product) {
  localProducts.push(product);
  saveLocalProducts();
  alert(`Товар "${product.title}" успешно добавлен!`);
  loadCatalog();
}

function resetInputFields() {
  document.getElementById('productTitle').value = '';
  document.getElementById('productDescription').value = '';
  document.getElementById('productPrice').value = '';
}

function openProductDetails(product) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>${product.title}</h2>
      <img src="${product.images[0]}" alt="${product.title}">
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.close-button').addEventListener('click', () => {
    modal.remove();
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });
}
