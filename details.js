// ... existing products object ...
const products = {
  1: {
    name: "Suiting Box Executive",
    price: "Rs 2,500",
    desc: "Exquisitely crafted silver cufflinks designed for the modern gentleman. Perfect for formal gatherings and weddings.",
    img: "./images/box1.webp",
  },
  2: {
    name: "Suiting Box Elite",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/socs1.webp",
  },
  3: {
    name: "Premium Ankle Socks",
    price: "Rs 1,800",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/socs2.webp",
  },
  4: {
    name: "Premium Invisible Socks",
    price: "Rs 2,000",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/box2.webp",
  },
  5: {
    name: "Slate Magnetic Wallet",
    price: "Rs 2,500",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/wallet1.webp",
  },
  6: {
    name: "Dollar Size Wallet",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/wallet2.webp",
  },
  7: {
    name: "Matt Finish Wallet",
    price: "Rs 1,800",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/wallet3.webp",
  },
  8: {
    name: "Long Zip Leather",
    price: "Rs 2,000",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/wallet4.webp",
  },
  9: {
    name: "Deep Glose",
    price: "Rs 2,500",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/perfume1.webp",
  },
  10: {
    name: "Moon Light",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/perfume2.webp",
  },
  11: {
    name: "Whisper",
    price: "Rs 1,800",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/perfume3.webp",
  },
  12: {
    name: "Special Edition",
    price: "Rs 2,000",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/perfume4.webp",
  },
  13: {
    name: "Premium Wool",
    price: "Rs 2,500",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/shawl1.webp",
  },
  14: {
    name: "Season Collection",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/shawl2.webp",
  },
  15: {
    name: "Off Season",
    price: "Rs 1,800",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/shawl3.webp",
  },
  16: {
    name: "Cotton Silk",
    price: "Rs 2,000",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/shawl4.webp",
  },
  17: {
    name: "Silk Cotton",
    price: "Rs 2,500",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton1.webp",
  },
  18: {
    name: "Milano Cotton",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton2.webp",
  },
  19: {
    name: "Gizza Cotton",
    price: "Rs 1,800",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton3.webp",
  },
  20: {
    name: "Prisma Cotton",
    price: "Rs 2,000",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton4.webp",
  },
  21: {
    name: "Elegant Cotton",
    price: "Rs 2,500",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton5.webp",
  },
  22: {
    name: "Blue Mint Cotton",
    price: "Rs 1,200",
    desc: "A set of 8 premium metallic buttons to elevate your unstitched suit. Durable and tarnish-resistant.",
    img: "./images/cotton6.webp",
  },
};

// 2. Get the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const item = products[productId];

// 3. Display the Data
const container = document.getElementById("product-details");
if (item) {
  container.innerHTML = `
      <div class="detailsWrapper">
        <div class="details-image">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="details-info">
            <h1>${item.name}</h1>
            <div class="price-tag">${item.price}</div>
            
            <div class="viewing-status">
                <i class="fa-solid fa-circle" style="font-size: 8px;"></i>
                1208 People are viewing right now.
            </div>

            <div class="shipping-alert">FREE SHIPPING OVER RS. 10,000</div>

            <div class="trust-badges">
                <div class="trust-item"><i class="fa-solid fa-shield-halved"></i> Safe payments . Secure privacy</div>
                <div class="trust-item"><i class="fa-solid fa-truck"></i> Fast shipping Straight to Your Doorstep</div>
            </div>

            <div class="purchase-actions">
                <div class="qty-and-cart">
                    <div class="qty-selector">
                        <button onclick="changeQty(-1)">-</button>
                        <input type="text" id="qty" value="1" readonly>
                        <button onclick="changeQty(1)">+</button>
                    </div>
                    <button class="add-to-cart-btn">Add to cart</button>
                </div>
                <button class="buy-now-btn btn-primary checkout-btn pay-now">Buy it now</button>
            </div>

            <div class="pickup-box">
                <div>
                    <i class="fa-solid fa-circle-check" style="color: green;"></i>
                    <strong>Pickup available at Lahore</strong><br>
                    <small>Usually ready in 24 hours</small>
                </div>
                <a href="#" style="color: black; font-size: 0.8rem;">View store information</a>
            </div>
        </div>
        </div>
    `;
}

if (item) {
  const addToCartBtn = container.querySelector(".add-to-cart-btn");

  addToCartBtn.addEventListener("click", () => {
    const qty = parseInt(document.getElementById("qty").value);

    const cartItem = {
      id: productId,
      name: item.name,
      price: item.price,
      img: item.img,
      quantity: qty,
    };

    addToCart(cartItem);
  });
}

function addToCart(newItem) {
  let cart = JSON.parse(localStorage.getItem("zelviaCart")) || [];

  const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }
  localStorage.setItem("zelviaCart", JSON.stringify(cart));
  alert(`${newItem.name} added to cart!`);
}

function changeQty(val) {
  const qtyInput = document.getElementById("qty");
  let currentQty = parseInt(qtyInput.value);

  let newQty = currentQty + val;

  if (newQty < 1) {
    newQty = 1;
  }

  qtyInput.value = newQty;
}
