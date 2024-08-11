
document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const products = [
        { id: 1, name: "Labial Rojo", price: 10 },
        { id: 2, name: "Base de Maquillaje", price: 25 },
        { id: 3, name: "Rímel", price: 15 }
    ];

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        cartItems.innerHTML = "";

        let totalPrice = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = ${item.name} - $${item.price};
            cartItems.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = Total: $${totalPrice};
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productId = parseInt(this.parentElement.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        });
    });

    document.getElementById("checkout").addEventListener("click", function() {
        if (cart.length > 0) {
            alert("Gracias por tu compra. Procesaremos tu pedido pronto.");
            cart = [];
            updateCart();
        } else {
            alert("Tu carrito está vacío.");
        }
    });
});





