
abstract class Vehiculo {
    abstract arrancar(): void
}

class Coche extends Vehiculo{
    arrancar(): void {
        console.log("El coche esta arrancando.")
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log("La moto esta arrancando.")
    }
}