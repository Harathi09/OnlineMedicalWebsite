
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.getElementById("cartItemsList");
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cartItemsList.innerHTML = ""; // Clear any previous items in the list
  
      // Predefined product data (you can replace this with data from the server)
      const products = [
        { id: 1, name: "Product 1", price: 150, image: "headache1.jpeg" },
        { id: 2, name: "Product 2", price: 120, image: "headach2.jpeg" },
        { id: 3, name: "Product 1", price: 100, image: "headach3.jpeg" },
        { id: 4, name: "Product 2", price: 120, image: "headach4.jpeg" },
        { id: 5, name: "Product 1", price: 150, image: "cold1.jpeg" },
        { id: 6, name: "Product 2", price: 120, image: "cold2.jpeg" },
        { id: 7, name: "Product 1", price: 100, image: "cold3.jpeg" },
        { id: 8, name: "Product 2", price: 120, image: "cofsil.jpeg" },
        { id: 9, name: "Product 1", price: 150, image: "zb2.jpeg" },
        { id: 10, name: "Product 2", price: 120, image: "zb1.jpeg" },
        { id: 11, name: "Product 1", price: 100, image: "zb3.jpeg" },
        { id: 12, name: "Product 2", price: 120, image: "zb4.jpeg" },
        { id: 13, name: "Product 1", price: 150, image: "vicks.jpeg" },
        { id: 14, name: "Product 2", price: 120, image: "vicks2.jpeg" },
        { id: 15, name: "Product 1", price: 100, image: "vicks3.jpeg" },
        { id: 16, name: "Product 2", price: 120, image: "vicks5.jpeg" },
        // Add more products here...
      ];
  
      let totalPrice = 0;
  
      // Loop through the cart items and find the corresponding product information
      cartItems.forEach((productId) => {
        const product = products.find((p) => p.id === Number(productId));
  
        if (product) {
          totalPrice += product.price;
  
          // Create a list item to display the product in the cart
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100" height="100"> 
            <div>${product.name}</div>
            <div>$${product.price}</div>
            <button class="removeButton" data-product-id="${product.id}">Remove</button>
          `;
  
          // Append the list item to the cartItemsList
          cartItemsList.appendChild(listItem);
        }
      });
  
      // Display the total price at the end
      const totalListItem = document.createElement("li");
      totalListItem.innerHTML = `<strong>Total: $${totalPrice}</strong>`;
      cartItemsList.appendChild(totalListItem);
  
      // Add event listeners to remove buttons
      const removeButtons = document.querySelectorAll(".removeButton");
      removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const productId = button.dataset.productId;
          removeItemFromCart(productId);
        });
      });
    }
  });
  
  function removeItemFromCart(productId) {
    // Retrieve the current cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Filter out the product with the specified ID from the cart items
    cartItems = cartItems.filter((item) => item !== productId);
  
    // Save the updated cart items back to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
    // Reload the cart page to update the displayed items
    window.location.reload();
  }
  