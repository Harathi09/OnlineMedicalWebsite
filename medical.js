// JavaScript to handle the automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 3 seconds (adjust as needed)
}
// JavaScript to handle the pagination and show/hide images
// JavaScript to handle the pagination and show/hide images
let currentImage = 'image1';
showImage(currentImage);

function showImage(imageID) {
  let slides = document.getElementsByClassName("slide1");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let targetImage = document.getElementById(imageID);
  if (targetImage) {
    targetImage.style.display = "block";
  }

  currentImage = imageID;
}



// your_script.js
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addtocart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = button.dataset.productId;
      addToCart(productId);
    });
  });

  function addToCart(productId) {
    // You can use various methods to add the product to the cart,
    // such as local storage, cookies, or sending the product ID to the server.

    // For example, using local storage:
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(productId);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Redirect to the cart page:
    window.location.href = "cart.html";
  }
});
