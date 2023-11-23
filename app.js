// // Boton de cambio de color
// const color_mode_button = document.querySelector("#color_mode")
// const body = document.body;
// const solicitar_turno = document.querySelector(".solicitar_turno");
// const mis_turnos = document.querySelector(".mis_turnos")


// Evento Agendar Turno

const agendar_turno = document.querySelector(".contacto__galeria--formulario")
const nombre_ingresado = document.querySelector(".nombre")
const apellido_ingresado = document.querySelector(".apellido")
const dni_ingresado = document.querySelector(".dni")
const fecha_ingresada = document.querySelector(".fecha")

const abajo_turnos = document.querySelector(".abajo_solicitar_turno")


agendar_turno.addEventListener ("submit", agendar)
// const turnos = []


function agendar(e) {
    e.preventDefault();
    function Turno(nombre, apellido, dni, fecha) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.fecha = fecha
    }
    let nombre = nombre_ingresado.value
    let apellido = apellido_ingresado.value
    let dni = dni_ingresado.value
    let fecha = fecha_ingresada.value
    
    nuevo_turno = new Turno(nombre, apellido, dni, fecha)
    // console.log(nuevo_turno)
    agregar ();
    agendar_turno.reset();
}

let base_de_datos = []
function agregar() {
    base_de_datos.push(nuevo_turno)
    localStorage.setItem("turno_registrado", JSON.stringify(base_de_datos))
    Swal.fire({
    title: 'Exitoso',
    text: `${nuevo_turno.nombre}, su turno ha sido registrado correctamente.`,
    icon: 'success',
    confirmButtonText: 'Aceptar'
})
}



// Ver turnos Registrados

const turnos_registrados = document.querySelector(".mis_turnos--formulario")
const ver_turnos = document.querySelector(".mis_turnos--input")
const abajo_mis_turnos = document.querySelector(".abajo_mis_turnos")


turnos_registrados.addEventListener("submit", mostrar_turnos)
let nuevos_turnos_LS = JSON.parse(localStorage.getItem("turno_registrado"))






function mostrar_turnos(m) {
    m.preventDefault();
    if (nuevos_turnos_LS.find(turno => turno.dni == ver_turnos.value)) {
        position = nuevos_turnos_LS.findIndex(index => index.dni == ver_turnos.value)
        // console.log(nuevos_turnos_LS[position].nombre)
        abajo_mis_turnos.innerText = `${nuevos_turnos_LS[position].nombre} ${nuevos_turnos_LS[position].apellido}, usted tiene un turno registrado para el dia ${nuevos_turnos_LS[position].fecha}`
        
    } else {
        abajo_mis_turnos.innerText = `Usted no tiene turnos registrados`
    }
}