// Moda

function calcularModa(array){
	const listaCount = {};

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		console.log(element);

		// crear propiedades del objeto listaCount con un condicional para contabilizar a la vez
		// el número de elementos por tipo de número y así determinar
		// la moda

		let claves = Object.keys(listaCount) //array con las claves (propiedades)
		console.log(claves);
		console.log(claves.find(value => value == array[i]));
		let isRepetido = claves.find(value => value == array[i])
		console.log(isRepetido);
		if(isRepetido){
			listaCount[element] = listaCount[element]+1;
			console.log(listaCount);
		} else{
			listaCount[element] = 1;
			console.log(listaCount);
		}

	}
	console.log(listaCount)


	// Ahora que tenemos nuestro objeto que ha agrupado a todos los elementos del array
	// geterminamos cuál es el mayor
	let valores = Object.values(listaCount);
	let claves = Object.keys(listaCount);
	console.log(valores);
	let mayor = valores[0];

	for (let j = 0; j < valores.length; j++) {
		if(valores[j]>mayor){
			mayor = valores[j];
		}
	}
	console.log(mayor);
	// capturamos el índice del elemento mayor
	let indexMayor= valores.indexOf(mayor);
	console.log(indexMayor);

	let moda = claves[indexMayor];
	return moda;
}





