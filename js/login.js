const botonLogin = document.querySelector(".registrar__boton");
const inputUsuario = document.querySelector(".usuario__input");
const inputContraseña = document.querySelector(".contraseña__input");

//DESHABILITAR BOTON
botonLogin.disabled = true;

function habilitarLogin() {
  let valor = 0;

  if (inputUsuario.value == "") {
    valor++;
  }
  if (inputContraseña.value == "") {
    valor++;
  }
  if (valor == 0) {
    botonLogin.disabled = false;

    botonLogin.textContent = "";

    const a = document.createElement("a");
    const contenido = `Login`;
    a.href = href = "index.html";
    a.innerHTML = contenido;
    botonLogin.appendChild(a);
  } else {
    botonLogin.disabled = true;
    botonLogin.textContent = "Login";
    const botonLinkLogin = document.querySelector(".registrar__boton a");
    if (botonLinkLogin != null) {
      botonLinkLogin.remove();
    }
  }
}

inputUsuario.addEventListener("keyup", habilitarLogin);
inputContraseña.addEventListener("keyup", habilitarLogin);

//AGREGAR A STORAGE
function agregarUsuario() {
  /*let usuario = [];*/

  const usuarioAgregado = {
    usuario: inputUsuario.value,
    contraseña: inputContraseña.value,
  };

  localStorage.setItem("usuario", JSON.stringify(usuarioAgregado));

  if (inputUsuario.value != "" && inputContraseña.value != "") {
    inputUsuario.value = "";
    inputContraseña.value = "";
    botonLogin.disabled = true;
  }
}

botonLogin.addEventListener("click", agregarUsuario);
