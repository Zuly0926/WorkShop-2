import { Persona } from "./Persona";

const personas: Persona[] = []
for (let i = 1; i <= 10; i++) {
    const persona = new Persona(`Persona ${i}`, 20 + i)
    personas.push(persona)
}

personas.forEach(persona => persona.saludar())