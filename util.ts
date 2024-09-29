import { Persona } from "./Persona";


const transformarJsonAPersona = (objetoJson: any): Persona => {
    return new Persona(objetoJson.Nombre, objetoJson.Edad, objetoJson.Direccion)
}

const crearJsonYTransformar = (): void => {
    const jsonPersona = {
        nombre: "Carlos",
        edad: 35,
        direccion: {
            calle: "Av. Central",
            ciudad: "Bogota",
            Pais: "Colombia"
        }
    }
    const persona  = transformarJsonAPersona(jsonPersona)
    persona.saludar()
}

export { transformarJsonAPersona, crearJsonYTransformar }