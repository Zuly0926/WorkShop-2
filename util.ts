import { EstadoCivil } from "./enum";
import { Persona } from "./Persona";


export const transformarJsonAPersona = (objetoJson: any): Persona => {
    const { Nombre, Edad, Direccion, vehiculos, estadoCivil } = objetoJson
    return new Persona(Nombre, Edad,Direccion,vehiculos,)
}


