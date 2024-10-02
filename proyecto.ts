import { Empleado } from "./Empleado"

export class Proyecto {
    nombre: string
    empleados: Empleado[]


    constructor(nombre: string) {
        this.nombre = nombre
        this.empleados = []
    }

    asignarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado)
        empleado.asignarProyecto
    }

    listarEmpleado() {
        console.log(`Empleado en el proyecto ${this.nombre}:`)
        this.empleados.forEach(e => console.log(e.Nombre))
    }
}


