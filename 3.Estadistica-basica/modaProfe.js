function calcularModa(array){
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



// Función para ordenar el array Bidimensional

    function ordenarListaBi(listaArray){
		const arrayBiSorted = listaArray.sort((a,b)=>{return a[1]-b[1]});

		return arrayBiSorted;
    }

    