const PlatziMath = {};

PlatziMath.calcularPromedio =function calcularPromedio(array){
    let media;
		
    let sum; 
    let valorInicial=0;

	sum = array.reduce(function(acumulador, valorActual){return acumulador+valorActual},valorInicial)
			
	console.log(sum);
    
    media = (sum / (array.length))
    console.log(media);
    return media;
}

PlatziMath.calcularPromPonderado =function calcularPromPonderado (array){

    let numerador=array.map((elemento)=>{return (elemento.nota*elemento.peso)});
    let sumaNumerador=numerador.reduce((acu, act)=>{return acu+act});

    let pesos = array.map((elemento)=>{return elemento.peso});
    let sumaPesos = pesos.reduce((acu,act)=>{return acu+act});

    let promedio = sumaNumerador/sumaPesos;

    return promedio;
}

PlatziMath.calcularModaBiMulti =function calcularModaBiMulti(array){
	const listaCount = {};

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		let claves = Object.keys(listaCount) //array con las claves (propiedades)
		let isRepetido = claves.find(value => value == array[i])
		if(isRepetido){
			listaCount[element] = listaCount[element]+1;
		} else{
			listaCount[element] = 1;
		}

	}

	let valores = Object.values(listaCount);
	let claves = Object.keys(listaCount);
    let moda = {}; // objeto que agrupará a cantidad de modas del array

	let mayor = valores[0];

	for (let j = 0; j < valores.length; j++) {
		if(valores[j]>mayor){
			mayor = valores[j];
		}
	}

    let mayores =valores.filter(value=>value==mayor);

    if (mayores.length==2){
        let indices = [];
        let idx = valores.indexOf(mayor);
        while(idx !== -1){
            indices.push(idx);
            idx = valores.indexOf(mayor, idx +1);
        }
        moda["moda1"] = claves[indices[0]];
        moda["moda2"] = claves[indices[1]];
        return console.log(`El array es bimodal. Las modas son: ${moda.moda1} y ${moda.moda2}`)

    } else if(mayores.length>2){
        let indices = [];
        let idx = valores.indexOf(mayor);
        while(idx !== -1){
            indices.push(idx);
            idx = valores.indexOf(mayor, idx +1);
        }

        for (let k = 0; k < indices.length; k++) {
            moda[k+1] =  claves[indices[k]];
        }

        let modaKeys = Object.keys(moda);
        let modaValues = Object.values(moda);

        for (let l = 0; l < modaKeys.length; l++) {
            const atributo = modaKeys[l];            
            console.log(`El array es multimodal. La moda N° ${atributo} es ${moda[atributo]}`)
        }

    } else {
        // capturamos el índice del elemento mayor
        let indexMayor= valores.indexOf(mayor);
        moda["moda1"] = claves[indexMayor];
        return console.log(`La moda es:  ${moda.moda1}`)
    }
}

PlatziMath.calcularModaUni= function calcularModaUni(array){
	const listaCount = {};

    for (let i = 0; i < array.length; i++) {
		const element = array[i];

        if(listaCount[element]){
            listaCount[element] +=1 ;
        } else{
            listaCount[element] =1;
        }
    }
    console.log(listaCount)


    // Convertir objeto en un array Bidimendional

    const listaArray = Object.entries(listaCount);
    console.log(listaArray);
    

    // Ordenar el array Bidimensional

    const arrayBiSorted = ordenarListaBi(listaArray);

    console.log(arrayBiSorted);

    // Imprimir la moda (último elemento del array Bidimensional)

    const moda = arrayBiSorted[arrayBiSorted.length-1][0];
    return moda;

}

PlatziMath.calcularMediana=function calcularMediana(array){
	let mediana;
	let indiceMediana;
	console.log(array);
	let arraySorted = this.ordenarLista(array);  
	console.log(arraySorted);
	
	if(this.esImpar(arraySorted)){
		indiceMediana = ((arraySorted.length+1)/2)-1; 
		mediana = arraySorted[indiceMediana];
	} else if(this.esImpar(arraySorted)){
		let indiceMediana1= (arraySorted.length/2)-1; 
		let indiceMediana2= indiceMediana1 + 1;
		mediana = this.calcularPromedio([arraySorted[indiceMediana1],arraySorted[indiceMediana2]])
	}
	return mediana
}

PlatziMath.ordenarLista =function ordenarLista(array){
		
    const arraySorted = array.sort((a,b)=>{return a-b});

    return arraySorted;
}

PlatziMath.ordenarArrayBi=function ordenarArrayBi(listaArray){
    const arrayBiSorted = listaArray.sort((a,b)=>{return a[1]-b[1]});

    return arrayBiSorted;
}

PlatziMath.esPar =function esPar(array){
	if (array.length % 2==0){
		return true
	} else {
		return false
	}
}

PlatziMath.esImpar =function esImpar(array){
	if(array.length%2==1){
		return true
	} else{
		return false
	}
}



