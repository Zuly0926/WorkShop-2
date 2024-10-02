import { Empleado } from "./Empleado"

export class Empresa {
    nombre: string
    empleados: Empleado[]

    constructor(nombre: string){
        this.nombre = nombre
        this.empleados = []
    }
    
    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado)
    }

    eliminarEmpleado(empleado: Empleado) {
        this.empleados = this.empleados.filter(e => e !== empleado)
    }

    calcularTotalSalarios(): number {
        return this.empleados.reduce((total, empleado)=> total + empleado.salario, 0)
    }
}