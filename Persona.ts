
export class Persona {
    Nombre: string
    Edad: number

    constructor(Nombre: string, Edad: number){
        this.Nombre = Nombre
        this.Edad = Edad
    }

    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.Nombre} y tienes ${this.Edad} años.`)
    }
}