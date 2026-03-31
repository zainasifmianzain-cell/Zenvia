const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".prices h4:last-child");

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("zelviaCart")) || [];
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ""));
    total += priceNum * item.quantity;

    cartItemsContainer.innerHTML += `
            <div class="item">
                <div class="image-container">
                    <img src="${item.img}" alt="${item.name}" />
                </div>
                <div class="item-text">
                    <h3>${item.name}</h3>
                    <h4 class="item-price">${item.price}</h4>
                </div>
                <div class="quantity-value">
                    <button onclick="updateCartQty(${index}, -1)" class="quantity-btn">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <h4 class="item-value">${item.quantity}</h4>
                    <button onclick="updateCartQty(${index}, 1)" class="quantity-btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
  });

  totalPriceElement.innerText = `Rs ${total.toLocaleString()}`;
}
window.updateCartQty = function (index, change) {
  let cart = JSON.parse(localStorage.getItem("zelviaCart")) || [];
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("zelviaCart", JSON.stringify(cart));
  displayCart();
};
document.querySelector("#cart").addEventListener("click", displayCart);
