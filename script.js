// Arreglo que guarda los productos agregados al carrito
let carrito = [];

// Función que agrega un producto al carrito
function agregarAlCarrito(precio) {
  carrito.push(precio);
  actualizarCarrito();
}

// Función que actualiza la lista de productos en el carrito y el total
function actualizarCarrito() {
  const carritoElemento = document.getElementById("carrito");
  let carritoHTML = "";
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i];
    carritoHTML += "<li>Producto " + (i+1) + ": $" + carrito[i].toFixed(2) + "</li>";
  }
  carritoElemento.innerHTML = carritoHTML;
  document.getElementById("total").innerHTML = "$" + (total * 1.16).toFixed(2);
}
