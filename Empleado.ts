import { Direccion } from "./interface";
import { Persona } from "./Persona";

export class Empleado extends Persona {
    salario: number

    constructor(Nombre: string, Edad: number, salario: number, direccion: Direccion) {
        super(Nombre, Edad, direccion)
        this.salario = salario
    }

    trabajar(horas: number): void {
        console.log(`${this.Nombre} trabaja ${horas} horas al dia.`)
    }

    saludar(): void {
        console.log(`Empleado: Hola ${this.Nombre}, tu edad es ${this.getEdad()} y el salario es de ${this.salario}. Vives en ${this.direccion.Ciudad}, ${this.direccion.Pais}`)
    }
    
}