const search = document.querySelector(".buscador__barra");
const searchButton = document.querySelector(".buscador__boton");

search.disabled = true;
searchButton.disabled = true;

//ITEMS EN CARRITO

/*CARRITO*/
const carritoButton = document.querySelectorAll(".carrito__boton");
const tablaCarrito = document.querySelector(".resumen__tabla");
const tablaDatos = document.querySelector(".tabla__datos");
const precioTotal = document.querySelector(".datos__secundario--precio");

const buttonDatosEliminar = document.getElementsByClassName(
  "datos__boton-eliminar"
);
const numeroCarrito = document.querySelector(".carrito__numero");

let carrito = [];

//AGREGAR ITEMS A MATRIZ CARRITO Y EN LOCAL STORAGE
carritoButton.forEach(function (e) {
  e.addEventListener("click", agregarItemACarrito);
});

//agregar en la matriz
function agregarItemACarrito(e) {
  const button = e.target;
  console.log(button);
  const item = button.closest(".card-mas-vendidos");
  const itemTitulo = item.querySelector(".card-mas-vendidos__titulo").innerText;
  const itemPrecio = item.querySelector(
    ".card-mas-vendidos__carrito p"
  ).textContent;
  const itemCantidad = item.querySelector(".carrito__input").value;

  const itemAgregado = {
    titulo: itemTitulo,
    precio: itemPrecio,
    cantidad: itemCantidad,
  };

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].titulo === itemAgregado.titulo) {
      if (itemCantidad > 1) {
        carrito[i].cantidad =
          Number(carrito[i].cantidad) + Number(itemAgregado.cantidad);
      } else {
        carrito[i].cantidad++;
      }

      return null;
    }
  }

  carrito.push(itemAgregado);
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//RENDERIZAR EN CARRITO ITEMS
function mostrarEnCarrito() {
  if (!tablaCarrito === false) {
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

    if (carritoStorage) {
      carrito = carritoStorage;

      //esta seria la funcion render
      carritoStorage.forEach(function (item) {
        const div = document.createElement("div");
        div.classList.add("tabla__datos");

        const contenido = `<p class="datos__importante">${item.titulo}</p>
          <p class="datos__secundario">${item.cantidad}</p>
          <p class="datos__secundario">${item.precio}</p>
          <button class="datos__boton-eliminar"><i class="fa-regular fa-trash-can"></i></button>
          `;
        div.innerHTML = contenido;
        tablaCarrito.appendChild(div);
        calcularTotalCarrito();
      });
    }
  }
}

mostrarEnCarrito();

//CALCULAR TOTAL CARRITO

function calcularTotalCarrito() {
  let total = 0;

  let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ""));
    total += precio * item.cantidad;
    precioTotal.innerHTML = "$" + total;
  });

  if (carrito.length === 0 || carritoStorage.length === 0) {
    total = 0;
    precioTotal.innerHTML = "$" + total;
  }
}

//BORRAR ITEMS

Array.from(buttonDatosEliminar).forEach(function (e) {
  e.addEventListener("click", borrar);
});

function borrar(e) {
  const button = e.target;
  const item = button.closest(".tabla__datos");

  //array carrito
  const itemTitulo = item.querySelector(".datos__importante");
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].titulo === itemTitulo.textContent) {
      carrito.splice(i, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }

  calcularTotalCarrito();
  contarTotalItems();
  item.remove();
}

//ITEMS EN CARRITO

function contarTotalItems() {
  let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
  let totalItems = 0;
  carritoStorage.forEach((item) => {
    totalItems = Number(totalItems) + Number(item.cantidad);
  });
  numeroCarrito.textContent = totalItems;
  console.log(carritoStorage);
}
contarTotalItems();
