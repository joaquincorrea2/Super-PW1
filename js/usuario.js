let regContraseña = /^([A-Z])(?=\w*\d)(?=\w*[a-z])\S{8,}$/;

const contraseña = document.querySelector("#contraseña");
const contraseña2 = document.querySelector("#contraseña-2");
const email = document.querySelector("#email");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");

const formUsuario = document.querySelector("#form-usuario");

const botonGuardar = document.querySelector("#guardar");

function validarContraseña() {
  const contraseñaValor = contraseña.value;
  if (!regContraseña.test(contraseñaValor)) {
    return false;
  } else {
    return true;
  }
}

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();
  //validarContraseña();
  contraseñasIguales();
});

function contraseñasIguales() {
  const contraseñaValor = contraseña.value;
  const contraseña2Valor = contraseña2.value;
  if (validarContraseña()) {
    if (contraseñaValor === contraseña2Valor) {
      //alert("Contraseñas coincidentes");

      contraseña.value = "";
      contraseña2.value = "";
      email.value = "";
      nombre.value = "";
      apellido.value = "";

      window.location.href = "login.html";
    } else {
      alert("Contraseñas no coincidentes");
    }
  } else {
    alert("Contraseña invalida");
  }
}
