import { Persona } from "./Persona";

class Empleado extends Persona {
    salario: number

    constructor(Nombre: string, Edad: number, salario: number) {
        super(Nombre, Edad)
        this.salario = salario
    }

    trabajar(horas: number): void {
        console.log(`${this.Nombre} trabaja ${horas} horas al dia.`)
    }
    
}