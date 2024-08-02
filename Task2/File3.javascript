let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    // Clear the current cart items
    cartItems.innerHTML = '';

    // Add each item to the cart list
    cart.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total amount
    total = cart.reduce((acc, entry) => acc + entry.price, 0);
    totalAmount.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert(`Thank you for your purchase! Total amount: $${total.toFixed(2)}`);
    // Clear cart after checkout
    cart = [];
    updateCartUI();
}
