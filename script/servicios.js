
// ============================
// CARRITO
// ===========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function CopiaServicios(lista) {
  return [...lista];
}







// ============================
// FUNCIONES
// ============================

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
      
          <a href="#." class="link-descripcion link-opacity-10-hover"
          data-descripcion="${descripcion}">
          Ver descripcion
          </a>



        </p>

        <div class="descripcion"></div>

        <p class="card-text">${precio}.00 USD/U</p>

        <button class="btn btn-primary agregar-carrito"
         data-id="${id}"
         data-nombre="${nombre}"
         data-precio="${precio}">
         Agregar al carrito
         </button>

      </div>
    `;

    contenedorServicios.appendChild(nuevoElemento);
  }
}
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


// ============================
// EVENTOS
// ============================

  function mostrarDescripcion(e) {
  if (!e.target.classList.contains("link-descripcion")) return;
      e.preventDefault();


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
  if (!e.target.classList.contains("agregar-carrito")) return;

  const boton = e.target;

  const id = boton.dataset.id;
  const nombre = boton.dataset.nombre;
  const precio = Number(boton.dataset.precio);

  const servicioExistente = carrito.find(item => item.id === id);

  if (servicioExistente) {
    servicioExistente.cantidad++;
  } else {
    carrito.push({
      id,
      nombre,
      precio,
      cantidad: 1
    });
  }
console.log(carrito);
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
    total += servicio.precio * servicio.cantidad;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      ${servicio.nombre} x ${servicio.cantidad}
      <span>$${servicio.precio * servicio.cantidad}</span>
      <button class="btn btn-sm btn-danger" data-index="${index}">X</button>
    `;

    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}



// ============================
// CARGA DEL JSON
// ============================

document.addEventListener("DOMContentLoaded", () => {
  fetch(".data/servicios.json")
    .then(res => res.json())
    .then(data => insertarServicios(data))
    .catch(err => console.error("Error cargando JSON:", err));

  const contenedorServicios = document.querySelector("#servicios-card .contenedorServicios");
  contenedorServicios.addEventListener("click", mostrarDescripcion);
  contenedorServicios.addEventListener("click", agregarAlCarrito);


   document.getElementById("vaciarCarrito").addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
  });

  document.getElementById("finalizarCompra").addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    alert("Compra realizada con éxito 🎉");
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
  });

  mostrarCarrito();
});
