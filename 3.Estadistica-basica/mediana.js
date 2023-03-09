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

// Funcion para calcular la mediana - RAUL

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
	
	if(esImpar(array)){
		indiceMediana = ((array.length+1)/2)-1; //le resto 1 porque un array inicia en 0
		mediana = array[indiceMediana];
	} else if(esPar(array)){
		let indiceMediana1= (array.length/2)-1; //le resto 1 porque un array inicia en 0
		let indiceMediana2= indiceMediana1 + 1;
		mediana = prom([array[indiceMediana1],array[indiceMediana2]])
	}
	return mediana
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
    console.log(media);
    return media;

}
