document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("contacto");

  // Si este script se carga en páginas donde no existe el formulario
  if (!formulario) return;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre) {
      alert("El nombre es obligatorio");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Ingrese un email válido");
      return;
    }

    if (!consulta) {
      alert("La consulta es obligatoria");
      return;
    }

    formulario.submit();
  });
});

