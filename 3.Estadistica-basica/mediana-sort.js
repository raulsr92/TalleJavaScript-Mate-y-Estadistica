// Funcion para calcular la mediana -JDC
/*
function esPar(array){
	if (array.length % 2){
		return false
	} else {
		return true
	}
}

function esImpar(array){
	if(array.length%2){
		return true
	} else{
		return false
	}
}*/

// Funcion para calcular si una lista es PAR o IMPAR - RAUL

function esPar(array){
	if (array.length % 2==0){
		return true
	} else {
		return false
	}
}

function esImpar(array){
	if(array.length%2==1){
		return true
	} else{
		return false
	}
}

// Funcion para calcular la mediana - RAUL

function mediana(array){
	let mediana;
	let indiceMediana;
	let arraySorted = ordenarLista(array);  // uso de método OrdenaLista de línea 57
	console.log(arraySorted);
	
	if(esImpar(arraySorted)){
		indiceMediana = ((arraySorted.length+1)/2)-1; //le resto 1 porque un array inicia en 0
		mediana = arraySorted[indiceMediana];
	} else if(esPar(arraySorted)){
		let indiceMediana1= (arraySorted.length/2)-1; //le resto 1 porque un array inicia en 0
		let indiceMediana2= indiceMediana1 + 1;
		mediana = prom([arraySorted[indiceMediana1],arraySorted[indiceMediana2]])
	}
	return mediana
}

// Función para ordenar un array con el método SORT

	// con arrow function

	function ordenarLista(array){
		
		const arraySorted = array.sort((a,b)=>{return a-b});

		return arraySorted;
	}


	// con callback function

	function ordenarLista2(arrayDesordenado){
		function compare(a, b){
			if(a<b){
				return -1;
			} else if( a==b){
				return 0;
			} else if (a>b){
				return 1
			}
		}
		const arraySorted = arrayDesordenado.sort(compare);
		return arraySorted
	}





// Función para calcular el promedio
function prom(array){
    let media;		
    let sum; 

    // callback function
		
			function sumar (acumulador, valorActual){
				return acumulador+valorActual
			}
    // Invocar al método reduce( )

			sum = array.reduce(sumar)		
			console.log(sum);
    
    media = (sum / (array.length))
    return media;

}
