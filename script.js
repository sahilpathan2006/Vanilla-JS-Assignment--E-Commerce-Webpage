import { products } from './data.js';

const grid = document.getElementById('product-grid');

function displayProducts() {
  if (!grid) return;

  products.forEach((item) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="product-info">
                <h3>${item.name}</h3>
                <p class="rating">${item.rating} ★★★★☆</p>
                <div class="price-container">
                    <span class="old-price">&#8377;${item.originalPrice}</span>
                    <span class="new-price">&#8377;${item.discountedPrice}</span>
                </div>
                <p style="color: #28a745; font-weight: bold;">${item.discount}% OFF</p>
                <button class="add-btn">Add to Cart</button>
            </div>
        `;
    grid.append(productCard);
  });
}

displayProducts();
