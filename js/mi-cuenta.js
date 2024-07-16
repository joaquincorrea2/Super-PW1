/*TITULO USUARIO MI CUENTA*/
const usuarioTitulo = document.querySelector(".perfil h2");
let usuarioStorage = JSON.parse(localStorage.getItem("usuario"));

function ponerTituloUsuario() {
  if (usuarioStorage != null) {
    usuarioTitulo.textContent = usuarioStorage.usuario;
  }
}

ponerTituloUsuario();

/*DIRECCION*/
const botonDireccion = document.querySelector("#boton_direcciones");

const aliasDireccion = document.querySelector("#alias-direccion");
const provincia = document.querySelector("#provincia");
const localidad = document.querySelector("#localidad");
const direccion = document.querySelector("#direccion");
const telefono = document.querySelector("#telefono");
const piso = document.querySelector("#piso");
const dpto = document.querySelector("#dpto");

let direcciones = [];

//AGREGAR DIRECCION
function agregarDireccion() {
  const direccionAgregada = {
    aliasDireccion: aliasDireccion.value,
    provincia: provincia.value,
    localidad: localidad.value,
    direccion: direccion.value,
    telefono: telefono.value,
    piso: piso.value,
    dpto: dpto.value,
  };

  direcciones.push(direccionAgregada);
  localStorage.setItem("direccion", JSON.stringify(direcciones));

  const div = document.createElement("div");
  div.classList.add("tabla__datos");

  const contenido = `
            <p class="datos__importante">${aliasDireccion.value}</p>
            <p>${direccion.value}</p>
            <button class="datos__boton-eliminar"><i class="fa-regular fa-trash-can"></i></button>
            `;
  div.innerHTML = contenido;
  tablaDirecciones.appendChild(div);

  if (
    aliasDireccion.value != "" &&
    provincia.value != "" &&
    localidad.value != "" &&
    direccion.value != "" &&
    telefono.value != "" &&
    piso.value != "" &&
    dpto.value != ""
  ) {
    aliasDireccion.value = "";
    provincia.value = "";
    localidad.value = "";
    direccion.value = "";
    telefono.value = "";
    piso.value = "";
    dpto.value = "";
  }

  const buttonDatosDireccionaEliminar = document.querySelectorAll(
    ".datos__boton-eliminar"
  );

  buttonDatosDireccionaEliminar.forEach(function (e) {
    e.addEventListener("click", borrar);
  });
}

botonDireccion.addEventListener("click", agregarDireccion);

//
const tablaDirecciones = document.querySelector(".mis-direcciones__tabla");

function mostrarEnDirecciones() {
  let direccionStorage = JSON.parse(localStorage.getItem("direccion"));

  if (direccionStorage) {
    direcciones = direccionStorage;

    //esta seria la funcion render
    direccionStorage.forEach(function (item) {
      const div = document.createElement("div");
      div.classList.add("tabla__datos");

      const contenido = `
            <p class="datos__importante">${item.aliasDireccion}</p>
            <p>${item.direccion}</p>
            <button class="datos__boton-eliminar"><i class="fa-regular fa-trash-can"></i></button>
            `;
      div.innerHTML = contenido;
      tablaDirecciones.appendChild(div);
    });
  }
}

mostrarEnDirecciones();

//BORRAR ITEMS
const buttonDatosDireccionaEliminar = document.querySelectorAll(
  ".datos__boton-eliminar"
);

buttonDatosDireccionaEliminar.forEach(function (e) {
  e.addEventListener("click", borrar);
});

function borrar(e) {
  console.log(direcciones[0].aliasDireccion);
  const button = e.target;
  const item = button.closest(".tabla__datos");

  //array carrito
  const itemAlias = item.querySelector(".datos__importante");
  console.log(itemAlias.textContent);
  for (let i = 0; i < direcciones.length; i++) {
    if (direcciones[i].aliasDireccion === itemAlias.textContent) {
      direcciones.splice(i, 1);
      localStorage.setItem("direccion", JSON.stringify(direcciones));
    }
  }

  item.remove();
}

/*PAGO*/
const botonPago = document.querySelector("#boton_pago");

const aliasPago = document.querySelector("#alias-pago");
const numero = document.querySelector("#numero");
const codigo = document.querySelector("#codigo");
const vencimieto = document.querySelector("#vencimieto");
const nombre = document.querySelector("#nombre");

const formPago = document.querySelector("#form-pago");

let pagos = [];

//AGREGAR PAGO
function agregarPago() {
  const pagoAgregado = {
    aliasPago: aliasPago.value,
    numero: numero.value,
    codigo: codigo.value,
    vencimieto: vencimieto.value,
    nombre: nombre.value,
  };

  pagos.push(pagoAgregado);
  localStorage.setItem("pago", JSON.stringify(pagos));

  const div = document.createElement("div");
  div.classList.add("tabla-pago__datos");

  const contenido = `
                    <p class="datos-pagos__importante">${aliasPago.value}</p>
                    <button class="datos__boton-pago-eliminar"><i class="fa-regular fa-trash-can"></i></button>
                    `;
  div.innerHTML = contenido;
  tablaPago.appendChild(div);
  if (
    aliasPago.value != "" &&
    numero.value != "" &&
    codigo.value != "" &&
    vencimieto.value != "" &&
    nombre.value != ""
  ) {
    aliasPago.value = "";
    numero.value = "";
    codigo.value = "";
    vencimieto.value = "";
    nombre.value = "";
  }

  const buttonDatosPagoEliminar = document.querySelectorAll(
    ".datos__boton-pago-eliminar"
  );

  console.log(buttonDatosPagoEliminar);

  buttonDatosPagoEliminar.forEach(function (e) {
    e.addEventListener("click", borrarPago);
  });
}

//botonPago.addEventListener("click", agregarPago);

//
const tablaPago = document.querySelector(".pago__tabla");

function mostrarEnPagos() {
  let pagoStorage = JSON.parse(localStorage.getItem("pago"));

  if (pagoStorage) {
    pagos = pagoStorage;

    //esta seria la funcion render
    pagoStorage.forEach(function (item) {
      const div = document.createElement("div");
      div.classList.add("tabla-pago__datos");

      const contenido = `
            <p class="datos-pagos__importante">${item.aliasPago}</p>
            <button class="datos__boton-pago-eliminar"><i class="fa-regular fa-trash-can"></i></button>
            `;
      div.innerHTML = contenido;
      tablaPago.appendChild(div);
    });
  }
}

mostrarEnPagos();

//BORRAR ITEMS

const buttonDatosPagoEliminar = document.querySelectorAll(
  ".datos__boton-pago-eliminar"
);

buttonDatosPagoEliminar.forEach(function (e) {
  e.addEventListener("click", borrarPago);
});

function borrarPago(e) {
  const button = e.target;
  const item = button.closest(".tabla-pago__datos");

  //array carrito
  const itemAliasPago = item.querySelector(".datos-pagos__importante");
  for (let i = 0; i < pagos.length; i++) {
    if (pagos[i].aliasPago === itemAliasPago.textContent) {
      pagos.splice(i, 1);
      localStorage.setItem("pago", JSON.stringify(pagos));
    }
  }

  item.remove();
}

//MIS METODOS DE PAGO

let numTarjeta = /^[1-9]{10}$/;

function validarTarjeta() {
  const tarjeta = numero.value;
  if (!numTarjeta.test(tarjeta)) {
    alert("Numero de tarjeta invalido (Ingrese 10digitos sin 0)");
    return;
  }
  if (parOImpar()) {
    agregarPago();
  }
}

function parOImpar() {
  const tarjeta = numero.value;
  if (tarjeta.charAt(9) % 2 == 0) {
    const numeroPar = tarjeta.substring(0, 9);
    const numeroParArray = Array.from(numeroPar);
    const numeroParArrayInt = numeroParArray.map((x) => parseInt(x));
    const res = numeroParArrayInt.reduce((acumulador, item) => {
      return (acumulador = acumulador + item);
    });
    if (res % 2 == 0) {
      alert("Numero de tarjeta inválido");
      return false;
    }
    return true;
  } else {
    const numeroImpar = tarjeta.substring(0, 9);
    const numeroImparArray = Array.from(numeroImpar);
    const numeroImparArrayInt = numeroImparArray.map((x) => parseInt(x));
    const res = numeroImparArrayInt.reduce((acumulador, item) => {
      return (acumulador = acumulador + item);
    });
    if (res % 2 != 0) {
      alert("Numero de tarjeta inválido");
      return false;
    }
    return true;
  }
}

formPago.addEventListener("submit", (e) => {
  e.preventDefault();
  validarTarjeta();
});
