
// ============================
// CARRITO
// ============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ============================
// FUNCIONES
// ============================

function CopiaServicios(lista) {
  return [...lista];
}

function insertarServicios(servicios) {
  const listaServicios = CopiaServicios(servicios);

  const contenedorServicios = document.querySelector("#servicios-card .contenedorServicios");
  if (!contenedorServicios) return;

  contenedorServicios.innerHTML = "";

  for (const { id, nombre, img, descripcion, precio } of listaServicios) {
    const nuevoElemento = document.createElement("div");
   nuevoElemento.className = "card col-12 col-sm-6 col-lg-4";

    nuevoElemento.innerHTML = `
      <img src="${img}" class="card-img-top" alt="${nombre}">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>

        <p>
          <a href="#." class="link-opacity-10-hover"
             data-descripcion="${descripcion}">
             Ver descripcion
          </a>
        </p>

        <div class="descripcion"></div>

        <p class="card-text">${precio}.00 USD/U</p>

        <a href="#" class="btn btn-primary"
           data-id="${id}"
           data-nombre="${nombre}"
           data-precio="${precio}">
           Agregar al carrito
        </a>
      </div>
    `;

    contenedorServicios.appendChild(nuevoElemento);
  }
}

// ============================
// EVENTOS
// ============================

function mostrarDescripcion(e) {
  if (e.target.tagName !== "A") return;

  const link = e.target;
  const descripcion = link.dataset.descripcion;
  const card = link.closest(".card");
  const divDescripcion = card.querySelector(".descripcion");

  if (divDescripcion.children.length === 0) {
    const p = document.createElement("p");
    p.textContent = descripcion;
    divDescripcion.appendChild(p);
    link.textContent = "Ocultar descripcion";
  } else {
    divDescripcion.innerHTML = "";
    link.textContent = "Ver descripcion";
  }
}

function agregarAlCarrito(e) {
  // Solo si se hace click en "Agregar al carrito"
  if (!e.target.classList.contains("btn-primary")) return;

  e.preventDefault();

  const boton = e.target;

  const servicio = {
    id: boton.dataset.id,
    nombre: boton.dataset.nombre,
    precio: parseFloat(boton.dataset.precio),
  };

  carrito.push(servicio);
  guardarCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalSpan = document.getElementById("total");

  if (!lista || !totalSpan) return;

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((servicio, index) => {
    total += servicio.precio;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      ${servicio.nombre} - $${servicio.precio}
      <button class="btn btn-sm btn-danger" data-index="${index}">X</button>
    `;

    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


// ============================
// CARGA DEL JSON
// ============================

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/servicios.json")
    .then(res => res.json())
    .then(data => insertarServicios(data))
    .catch(err => console.error("Error cargando JSON:", err));

  const contenedorServicios = document.querySelector("#servicios-card .contenedorServicios");
  contenedorServicios.addEventListener("click", mostrarDescripcion);
contenedorServicios.addEventListener("click", agregarAlCarrito);

mostrarCarrito();

});
document.addEventListener("click", (e) => {
  if (!e.target.matches("#listaCarrito button")) return;

  const index = e.target.dataset.index;
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
});
