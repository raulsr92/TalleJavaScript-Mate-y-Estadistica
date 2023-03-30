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