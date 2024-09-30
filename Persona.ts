import { Vehiculo } from "./claseAbstracta"
import { Direccion } from "./interface"

export class Persona {
    Nombre: string
   private Edad: number
   direccion: Direccion
   vehiculos: Vehiculo []
     

    constructor(Nombre: string, Edad: number, direccion: Direccion, vehiculos: Vehiculo[]=[]){
        this.Nombre = Nombre
        this.Edad = Edad
        this.direccion = direccion
        this.vehiculos = vehiculos 
    }

    getEdad(): number {
        return this.Edad
    }

    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.Nombre} y tienes ${this.getEdad()} años. Vives en ${this.direccion.Ciudad}, ${this.direccion.Pais}.`)
    }

    agregarVehiculo(vehiculo: Vehiculo): void{
        this.vehiculos.push(vehiculo)
    }
}