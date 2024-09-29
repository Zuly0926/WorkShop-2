
export class Persona {
    Nombre: string
   private Edad: number

    constructor(Nombre: string, Edad: number){
        this.Nombre = Nombre
        this.Edad = Edad
    }

    getEdad(): number {
        return this.Edad
    }

    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.Nombre} y tienes ${this.getEdad} años.`)
    }
}