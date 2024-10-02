import { Empleado } from "./Empleado"

export class Departamento {
    nombre: string
    empleados: Empleado[]

    constructor(nombre: string) {
        this.nombre = nombre
        this.empleados = []
    }

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado)
    }

    eliminarEmpleado(empleado: Empleado) {
        this.empleados = this.empleados.filter(e => e !== empleado)
    }

    listarEmpleados(){
        console.log(`Empleados en el departamento ${this.nombre}:`)
        this.empleados.forEach(e => console.log(e.Nombre))
    }
}