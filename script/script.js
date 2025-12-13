

const servicios = [
    {
    id:1,
    nombre:"Mantenimientos mensuales",
    img:"./imagenes/pexels-proxyclick-2451566.jpg",
    descripcion:"Nuestros planes están diseñados para Pymes que necesitan soporte informático confiable, estable y con disponibilidad diaria.",
    precio:50.00
    },
    {
    id:2,
    nombre:"Redes y conectividad",
     img:"./imagenes/networkservice.jpg",
    descripcion:"Configuración de routers, switches y Wi-Fi, Optimización de velocidad y estabilidad, Segmentación de red para mayor seguridad",
    precio:60.00
    },
    {
    id:3,
    nombre:"Seguridad informatica",
     img:"./imagenes/seguriadadinformatica.jpg",
    descripcion:"Antivirus y antimalware corporativo, Hardening y actualizaciones de seguridad, Configuración de Firewall, Copias de seguridad (backup local y en la nube)",
    precio:100.00
    },
    {
    id:4,
    nombre:"Soporte tecnico",
     img:"./imagenes/helpdesk.jpg",
    descripcion:"Atención rápida y confiable para resolver problemas de hardware, software, red, accesos, correo electrónico y sistemas: Soporte remoto y presencial, Atención por WhatsApp y ticketing, Resolución de incidentes diarios, Configuración de PCs, notebooks e impresoras",
    precio:30.00
    }
]


function CopiaServicios(lista){
return [...lista];

}

function insertarServicios(){
 const listaServicios=CopiaServicios(servicios);

 const contenedorServicios= document.querySelector("#servicios .contenedorServicios");
 console.log(contenedorServicios);

 for(let c= 0; c < listaServicios.length; c++){
    const servicioActual=listaServicios[c];
    //crear elemento html 
    const nuevoElemento= document.createElement("div");
    //asigno las clases
     nuevoElemento.className="card col-10 col-sm-8 col-lg-6";
     //creamos el contenido del elemento
       nuevoElemento.innerHTML= `
            <img src="${servicioActual.img}" class="card-img-top" alt="...">
            <div class="card-body">
           <h5 class="card-title">${servicioActual.nombre}</h5>
                       
                        <p><a class="link-opacity-10-hover" href="#." data-descripcion="${servicioActual.descripcion}">Ver descripcion</a></p>
                        <div class="contenedorDescripcion">
                        </div>
                        
                             <p class="card-text">
                            ${servicioActual.precio}.00 USD/U</p>
                        <a href="#" class="btn btn-primary"
                        data-id="${servicioActual.id}"
                        data-nombre="${servicioActual.nombre}"
                        data-precio="${servicioActual.precio}.00 USD"
                        >Agregar al carrito</a>
                    </div>
        `
        //insertamos en el html el elemento nuevo
        contenedorServicios.appendChild(nuevoElemento);
 }

}
function mostrarDescripcion(datosEvento){
    console.log(datosEvento.target.tagName);
    const elementoclicado=datosEvento.target.tagName;
    console.log(datosEvento.target.dataset);


}

insertarServicios();

const contenedorServicios = document.querySelector("#servicios .contenedorServicios");
console.log(contenedorServicios);
contenedorServicios.addEventListener("click", mostrarDescripcion);



/*
function mostarServicios(catalogo, titulo){
    
    console.log(`\n ----- ${titulo} ----`);
    for (const {id, nombre, precio} of catalogo){
        console.log(`ID: ${id} | servicio: ${nombre} | precio: ${precio.toFixed(2)} USD`);

    }
}

function crearServicio(idser, nombreser, descripcionser, precioser){
 const servicioNuevo=[
    {
     id: idser,
     nombre: nombreser,
     descripcion: descripcionser,
     precio: precioser
    }

 ]
 return servicioNuevo;

}
 


mostarServicios(crearServicio (5, "Retiro y entrega de equipo", "Retirar y entragar equipo a domicilio", 30.00), "Servicio nuevo");
     
*/



