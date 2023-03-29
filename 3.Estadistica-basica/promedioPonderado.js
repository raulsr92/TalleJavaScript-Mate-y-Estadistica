function calcularPromPonderado (array){

    let numerador=array.map((elemento)=>{return (elemento.nota*elemento.peso)});
    let sumaNumerador=numerador.reduce((acu, act)=>{return acu+act});

    let pesos = array.map((elemento)=>{return elemento.peso});
    let sumaPesos = pesos.reduce((acu,act)=>{return acu+act});

    let promedio = sumaNumerador/sumaPesos;

    return promedio;
}
