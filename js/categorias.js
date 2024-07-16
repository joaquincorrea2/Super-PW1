/*BUSCADOR*/
/*deshabilitar buscador*/
const search = document.querySelector(".buscador__barra");
const searchButton = document.querySelector(".buscador__boton");
const cardsCategoria = document.querySelectorAll(".card-categoria");
const contenedorCardsCategoria = document.querySelector(".categorias__cards");
const botonBorrar = document.querySelector(".buscador__boton-borrar");

search.disabled = false;
searchButton.disabled = false;

/*agregar categorias existentes al array*/
let categorias = [];

cardsCategoria.forEach((e) => {
  const titulo = e.querySelector(".card-categoria__titulo").textContent;
  const imagen = e.querySelector(".card-categoria__imagen img").src;

  const categoriaAgregada = {
    titulo: titulo,
    imagen: imagen,
  };

  categorias.push(categoriaAgregada);
});

/**/

function filtrar() {
  contenedorCardsCategoria.innerHTML = "";
  const texto = search.value.toLowerCase();
  for (const categoria of categorias) {
    let titulo = categoria.titulo.toLowerCase();
    if (titulo.indexOf(texto) !== -1) {
      contenedorCardsCategoria.innerHTML += `<div class="card-categoria">
        <a href="bebidas.html">
          <h3 class="card-categoria__titulo">${categoria.titulo}</h3>

          <!--img es en linea por eso le pongo un div para que se bloque-->
          <div class="card-categoria__imagen">
            <img src="${
              categoria.imagen
            }" alt="${categoria.titulo.toLowerCase()}" /></div
        ></a>
      </div>`;
    }
  }

  if (texto === "") {
    botonBorrar.classList.add("buscador__boton-borrar-no-mostrar");
  } else {
    botonBorrar.classList.remove("buscador__boton-borrar-no-mostrar");
  }
}

search.addEventListener("keyup", filtrar);

//

function borrarBotonBorrar() {
  botonBorrar.classList.add("buscador__boton-borrar-no-mostrar");

  search.value = "";

  contenedorCardsCategoria.innerHTML = "";
  for (const categoria of categorias) {
    contenedorCardsCategoria.innerHTML += `<div class="card-categoria">
        <a href="bebidas.html">
          <h3 class="card-categoria__titulo">${categoria.titulo}</h3>

          <!--img es en linea por eso le pongo un div para que se bloque-->
          <div class="card-categoria__imagen">
            <img src="${
              categoria.imagen
            }" alt="${categoria.titulo.toLowerCase()}" /></div
        ></a>
      </div>`;
  }
}

botonBorrar.addEventListener("click", borrarBotonBorrar);

function ocultarBotonBorrarAlInicio() {
  if (search.value === "") {
    console.log("aa");

    botonBorrar.classList.add("buscador__boton-borrar-no-mostrar");
  }
}

ocultarBotonBorrarAlInicio();
