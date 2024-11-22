document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const price = parseInt(product.getAttribute("data-price"));
            const name = product.querySelector("p").textContent;

            // Agregar producto al carrito
            const listItem = document.createElement("li");
            listItem.textContent = `${name} - $${price}`;
            cartItems.appendChild(listItem);

            // Actualizar total
            total += price;
            cartTotal.textContent = total;
        });
    });
});
