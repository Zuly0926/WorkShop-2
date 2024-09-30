
export abstract class Vehiculo {
    abstract arrancar(): void
}

export class Coche extends Vehiculo{
    arrancar(): void {
        console.log("El coche esta arrancando.")
    }
}

export class Moto extends Vehiculo{
    arrancar(): void {
        console.log("La moto esta arrancando.")
    }
}