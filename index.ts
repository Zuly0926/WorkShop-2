import { Coche, Moto } from "./claseAbstracta";
import { Empleado } from "./Empleado";
import { Direccion } from "./interface";
import { Persona } from "./Persona";
import { crearJsonYTransformar } from "./util";
import { empleadosJSON } from "./JsonEmpleado";

const personas: Persona[] = []
for (let i = 1; i <= 10; i++) {
    const direccion: Direccion = { Calle: `Cslle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais ${i}`}
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
    const direccion: Direccion = { Calle: `Calle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais ${i}`}
    const empleado = new Empleado(`Empleado ${i}`, 25 + 1, 30000 + i * 10000, direccion)

    empleados.push(empleado)
}

empleados.forEach(empleado => empleado.saludar())
crearJsonYTransformar


const transformarJsonAEmpleado = (empleadosJSON: any): Empleado => {
    const { nombre, edad,direccion, salario } = empleadosJSON
    return new Empleado(nombre,edad,direccion,salario)
  }

  const empleadosDesdeJson = empleadosJSON.map(transformarJsonAEmpleado)

  const empleadosComoJson = JSON.stringify(empleadosDesdeJson)
  console.log(empleadosComoJson)




