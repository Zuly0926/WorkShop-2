import { Empleado } from "./Empleado";
import { Persona } from "./Persona";

const personas: Persona[] = []
for (let i = 1; i <= 10; i++) {
    const persona = new Persona(`Persona ${i}`, 20 + i)
    personas.push(persona)
}

personas.forEach(persona => persona.saludar())

const empleados: Empleado[] = []
for (let i = 1; i <= 10; i++) {
    const empleado = new Empleado(`Empleado ${i}`, 25 + 1, 30000 + i * 10000)
    empleados.push(empleado)
}

empleados.forEach(empleado => empleado.saludar())