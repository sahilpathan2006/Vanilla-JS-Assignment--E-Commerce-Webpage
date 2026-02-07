import { products } from './data.js';

const grid = document.getElementById('product-grid');
const categoryDropdown = document.getElementById('category-selection');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const ratingInput = document.getElementById('rating-input');
const ratingOutput = document.getElementById('rating-output');

function displayProducts(filteredList) {
  if (!grid) return;
  grid.innerHTML = '';

  filteredList.forEach((item) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="product-info">
                <h3>${item.name}</h3>
                <p class="rating">${item.rating} ★</p>
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

function applyFilters() {
  const category = categoryDropdown.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const rating = parseFloat(ratingInput.value);

  ratingOutput.innerText = rating;

  const result = products.filter(p => {
    return (category === '' || p.category === category) &&
           (gender === '' || p.gender === gender) &&
           (p.rating >= rating);
  });

  displayProducts(result);
}

categoryDropdown.addEventListener('change', applyFilters);
genderRadios.forEach(radio => radio.addEventListener('change', applyFilters));
ratingInput.addEventListener('input', applyFilters);

displayProducts(products);
