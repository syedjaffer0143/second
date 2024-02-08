function addToCart(productName, price) {
    // Implement your cart logic here
    console.log(`Added ${productName} to cart. Price: ₹${price}`);
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function makePayment() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    // Implement your payment logic here
    console.log(`Payment made using ${paymentMethod}`);
}
