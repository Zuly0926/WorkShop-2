import { Coche, Moto, Vehiculo } from "./claseAbstracta";
import { Empleado } from "./Empleado";
import { Direccion } from "./interface";
import { Persona } from "./Persona";
import { transformarJsonAPersona } from "./util";
import { EstadoCivil } from "./enum";

const direccion: Direccion = { Calle: "Calle 123", Ciudad: "Ciudad X", Pais: "País Y" };

const personas: Persona[] = [];
for (let i = 1; i <= 10; i++) {
    const persona = new Persona(`Persona${i}`, 30 + i, direccion, EstadoCivil.Casado);
    personas.push(persona);
    persona.saludar();

    if (i % 2 === 0) {
        persona.agregarVehiculo(new Coche());
    } else {
        persona.agregarVehiculo(new Moto());
    }
}

personas[0].vehiculos.forEach(Vehiculo  => Vehiculo.arrancar())
personas[1].vehiculos.forEach(Vehiculo  => Vehiculo.arrancar())


const empleados: Empleado[] = []
for (let i = 1; i <= 10; i++) {
    const empleado = new Empleado(`Empleado ${i}`, 25 + 1, 30000 + i * 10000, direccion , EstadoCivil.Soltero)

    empleados.push(empleado)
    empleado.saludar()
}

const personaJson = {
    nombre: "Juan",
    edad : 25,
    direccion: {
        calle: "calle 123",
        ciudad: "ciudad A",
        pais: "pais A"
    }
}

const nuevaPersona = transformarJsonAPersona(personaJson)
nuevaPersona.saludar




  




