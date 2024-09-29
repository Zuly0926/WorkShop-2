import { Direccion } from "./interface"

export class Persona {
    Nombre: string
   private Edad: number
   direccion: Direccion

    constructor(Nombre: string, Edad: number, direccion: Direccion){
        this.Nombre = Nombre
        this.Edad = Edad
        this.direccion = direccion
    }

    getEdad(): number {
        return this.Edad
    }

    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.Nombre} y tienes ${this.getEdad()} años. Vives en ${this.direccion.Ciudad}, ${this.direccion.Pais}`)
    }
}