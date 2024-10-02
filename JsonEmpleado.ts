
import { Empleado } from "./Empleado";
import { EstadoCivil } from "./enum";


export const empleadosJSON = [
    { nombre: "Empleado1", edad: 30, salario: 2100, direccion: {Calle: "Calle 1", Ciudad: "Ciudad A", Pais: "Pais A" }, EstadoCivil: EstadoCivil.Casado },
    { nombre: "Empleado2", edad: 31, salario: 2200, direccion: { Calle: "Calle 2",Ciudad: "Ciudad B", Pais: "Pais B"}, EstadoCivil: EstadoCivil.Casado },
    { nombre: "Empleado3", edad: 32, salario: 2300, direccion: { Calle: "Calle 3", Ciudad: "Ciudad C", Pais: "Pais C" }, EstadoCivil: EstadoCivil.Divorciado },
    { nombre: "Empleado4", edad: 33, salario: 2400, direccion: { Calle: "Calle 4", Ciudad: "Ciudad D", Pais: "Pais D" }, EstadoCivil: EstadoCivil.Soltero },
    { nombre: "Empleado5", edad: 34, salario: 2500, direccion: { Calle: "Calle 5", Ciudad: "Ciudad E", Pais: "Pais E"}, EstadoCivil: EstadoCivil.Casado },
    { nombre: "Empleado6", edad: 35, salario: 2600, direccion: { Calle: "Calle 6", Ciudad: "Ciudad F", Pais: "Pais F" }, EstadoCivil: EstadoCivil.Divorciado },
    { nombre: "Empleado7", edad: 36, salario: 2700, direccion: { Calle: "Calle 7", Ciudad: "Ciudad G", Pais: "Pais G"}, EstadoCivil: EstadoCivil.Divorciado },
    { nombre: "Empleado8", edad: 37, salario: 2800, direccion: { Calle: "Calle 8", Ciudad: "Ciudad H", Pais: "Pais H"}, EstadoCivil: EstadoCivil.Soltero },
    { nombre: "Empleado9", edad: 38, salario: 2900, direccion: { Calle: "Calle 9", Ciudad: "Ciudad I", Pais: "Pais I"}, EstadoCivil: EstadoCivil.Soltero },
    { nombre: "Empleado10", edad: 39, salario: 3000, direccion: { Calle: "Calle 10", Ciudad: "Ciudad J", Pais: "Pais J" }, EstadoCivil: EstadoCivil.Casado },
   
  ];

  const empleadosDesdeJson = empleadosJSON.map(obj => new Empleado(obj.nombre, obj.edad, obj.salario,obj.direccion, obj.EstadoCivil))

const empleadosAJson = (empleados: Empleado[]): string => {
    return JSON.stringify(empleados.map(emp => ({
        nombre: emp.Nombre,
        edad : emp.getEdad(),
        salario: emp.salario,
        direccion: emp.direccion,
        estadoCivil: emp.estadoCivil,
        

    })))
  }

console.log(empleadosAJson(empleadosDesdeJson))


  

 


  

  

