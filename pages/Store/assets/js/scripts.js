/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    // Array para almacenar los productos en el carrito
    let cart = [];

    // Obtener todos los botones "Add to Cart"
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    // Manejar el clic en los botones "Add to Cart"
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            // Obtener el producto relacionado con el botón
            const productId = button.getAttribute("data-product");

            // Simplemente como ejemplo, podrías agregar el producto a un array de carrito
            cart.push(productId);

            // Actualizar el contador del carrito
            const cartCounter = document.querySelector(".badge");
            cartCounter.textContent = cart.length;
        });
    });
});

