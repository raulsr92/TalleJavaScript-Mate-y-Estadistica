console.log(salarios);

// 1° Encontrar a Sarita dentro el array Salarios - método find( )

let findJuanita = salarios.find((elemento)=>{return elemento.name=="Juanita"});
console.log(findJuanita);

// 2° Capturar Array de su propiedad "trabajos"

let arrayTrabajosAnita = findJuanita["trabajos"];
console.log(arrayTrabajosAnita);


// 3° Obtener array con solo con la propiedad "salarios" del array de trabajos de Juanita

let juanitaSalarios = arrayTrabajosAnita.map((elemento)=>{return elemento.salario});
console.log(juanitaSalarios)

// 4° Calcular la MEDIANA 

PlatziMath.calcularMediana(juanitaSalarios);


// BONUS: Desarrollar función automatizada

function medianaSalarios(empleado){
    if (salarios.find((elemento)=>{return elemento.name==empleado})){
        let findEmpleado = salarios.find((elemento)=>{return elemento.name==empleado});
        let arrayTrabajosEmpleado = findEmpleado["trabajos"];
        let empleadoSalarios = arrayTrabajosEmpleado.map((elemento)=>{return elemento.salario});
        return PlatziMath.calcularMediana(empleadoSalarios);
        
    } else{
        return console.log(`Le informamos que ${empleado} no trabaja aquí`)
    }
}


 // Clase 25: formar un array organizado por Empresas

 const empresas = {};

 for (persona of salarios) {
    console.log(persona)
 }

 for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        console.log(trabajo)
    }
 }

/* for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        console.log(trabajo.empresa)
        
        if (empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = empresas[trabajo.empresa]+1
        } else{
            empresas[trabajo.empresa] = 1
        }
    }
  
 }
 console.log(empresas)*/


 for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        console.log(trabajo.empresa)
        
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] =[];
        }   
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
 }
 console.log(empresas)

  // RETO Clase 25: Calcular la mediana de cada año en las empresas (crear Función con parámetros de empresa y año)

  function calcularMedianaPorAño (empresa, año){
    // Buscar la empresa: como "empresas" es un objeto, la buscamos de esta manera
    let findEmpresa = empresas[empresa];
    console.log(findEmpresa);

    // Buscar el año dentro del objeto empresa que ha sido encontrado, lo que nos devuelve un array con los salarios

    let findYear = findEmpresa[año];
    console.log(findYear);

    // calcular mediana

    return PlatziMath.calcularMediana(findYear);
   

  }

    // Clase 26: Mejoras en reto de clase 25

    function calcularMedianaPorAño (empresa, año){

        if(empresas[empresa]){
            // Buscar la empresa: como "empresas" es un objeto, la buscamos de esta manera
            let findEmpresa = empresas[empresa];
            console.log(findEmpresa);
            
            if (findEmpresa[año]){
                // Buscar el año dentro del objeto empresa que ha sido encontrado, lo que nos devuelve un array con los salarios
                let findYear = findEmpresa[año];
                console.log(findYear);
                return PlatziMath.calcularMediana(findYear);
            } else{
                return console.log(`No tenemos registros del año ${año} para la empresa ${empresa} .`)
            }

        } else{
            return console.log(`La empresa ${empresa} no se ecuentra en nuestro registro.`)
        }
       
      }