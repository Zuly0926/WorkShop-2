import { Vehiculo } from "./claseAbstracta"
import { EstadoCivil } from "./enum"
import { Direccion } from "./interface"

export class Persona {
    Nombre: string
   private Edad: number
   direccion: Direccion
   vehiculos: Vehiculo []
   estadoCivil: EstadoCivil
     

    constructor(Nombre: string, Edad: number, direccion: Direccion, estadoCivil: EstadoCivil){
        this.Nombre = Nombre
        this.Edad = Edad
        this.direccion = direccion
        this.vehiculos = []
        this.estadoCivil = estadoCivil
    }

    getEdad(): number {
        return this.Edad
    }

    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.Nombre} y tienes ${this.getEdad()} años. Vives en ${this.direccion.Ciudad}, ${this.direccion.Pais}, y tu estado civil es ${EstadoCivil[this.estadoCivil]}}`)
    }

    agregarVehiculo(vehiculo: Vehiculo): void{
        this.vehiculos.push(vehiculo)
    }
}