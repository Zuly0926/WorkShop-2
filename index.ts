import { Empleado } from "./Empleado";
import { Direccion } from "./interface";
import { Persona } from "./Persona";
import { crearJsonYTransformar } from "./util";

const personas: Persona[] = []
for (let i = 1; i <= 10; i++) {
    const direccion: Direccion = { Calle: `Cslle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais`}
    const persona = new Persona(`Persona ${i}`, 20 + i, direccion)
    personas.push(persona)
}

personas.forEach(persona => persona.saludar())

const empleados: Empleado[] = []
for (let i = 1; i <= 10; i++) {
    const direccion: Direccion = { Calle: `Calle ${i}`, Ciudad: `Ciudad ${i}`, Pais: `Pais`}
    const empleado = new Empleado(`Empleado ${i}`, 25 + 1, 30000 + i * 10000, direccion)
    empleados.push(empleado)
}

empleados.forEach(empleado => empleado.saludar())

crearJsonYTransformar