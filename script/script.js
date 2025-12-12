

const servicios = [
    {
    id:1,
    nombre:"Mantenimientos mensuales",
    descripcion:"Mantenimientos mensuales de pc",
    precio:50.00
    },
    {
    id:2,
    nombre:"Redes y conectividad",
    descripcion:"Redes de pc",
    precio:60.00
    },
    {
    id:3,
    nombre:"Seguridad informatica",
    descripcion:"Mantenimientoy pentesting",
    precio:100.00
    },
    {
    id:4,
    nombre:"Soporte tecnico",
    descripcion:"Hora de soporte remoto",
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
 for(c=0; c < listaServicios.length ;c++){
    const servicioActual=listaServicios(c);

 }

};

insertarServicios();



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



