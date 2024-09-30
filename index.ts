import { Coche, Moto, Vehiculo } from "./claseAbstracta";
import { Empleado } from "./Empleado";
import { Direccion } from "./interface";
import { Persona } from "./Persona";
import { crearJsonYTransformar } from "./util";

const personas: Persona[] = []
for (let i = 1; i <= 10; i++) {
    const direccion: Direccion = { Calle: `Cslle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais`}
    const persona = new Persona(`Persona ${i}`, 20 + i, direccion)

    if (i % 2 === 0) {
        persona.agregarVehiculo(new Coche());
    } else {
        persona.agregarVehiculo(new Moto());
    }

    personas.push(persona)
}

personas.forEach(persona => persona.saludar())
personas[0].vehiculos.forEach(Vehiculo  => Vehiculo.arrancar())
personas[1].vehiculos.forEach(Vehiculo  => Vehiculo.arrancar())

const empleados: Empleado[] = []
for (let i = 1; i <= 10; i++) {
    const direccion: Direccion = { Calle: `Calle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais`}
    const empleado = new Empleado(`Empleado ${i}`, 25 + 1, 30000 + i * 10000, direccion)

    if (i % 2 === 0) {
        empleado.agregarVehiculo(new Coche());
    } else {
        empleado.agregarVehiculo(new Moto());
    }

    empleados.push(empleado)
}

empleados.forEach(empleado => empleado.saludar())
empleados[0].vehiculos.forEach(Vehiculo => Vehiculo.arrancar())
empleados[1].vehiculos.forEach(Vehiculo => Vehiculo.arrancar())

crearJsonYTransformar