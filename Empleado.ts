import { Vehiculo } from "./claseAbstracta";
import { EstadoCivil } from "./enum";
import { Direccion } from "./interface";
import { Persona } from "./Persona";

export class Empleado extends Persona {
    salario: number

    constructor(Nombre: string, Edad: number, salario: number, direccion: Direccion, estadoCivil: EstadoCivil, vehiculos:Vehiculo[]=[]) {
        super (Nombre, Edad, direccion, estadoCivil)
        this.salario = salario
    }

    trabajar(horas: number): void {
        console.log(`${this.Nombre} trabaja ${horas} horas al dia.`)
    }

    saludar(): void {
        console.log(`Empleado: Hola ${this.Nombre}, tu edad es ${this.getEdad()} y el salario es de ${this.salario}. Vives en ${this.direccion.Ciudad}, ${this.direccion.Pais}. Su estado civil es: ${EstadoCivil[this.estadoCivil]}`)
    }
    
}