// BiModal

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
    let moda = {};


    console.log(claves);
	console.log(valores);
	let mayor = valores[0];

	for (let j = 0; j < valores.length; j++) {
		if(valores[j]>mayor){
			mayor = valores[j];
		}
	}
    console.log(mayor);

    let mayores =valores.filter(value=>value==mayor);
    console.log(mayores);

    if (mayores.length==2){
        let indices = [];
        let idx = valores.indexOf(mayor);
        while(idx !== -1){
            indices.push(idx);
            idx = valores.indexOf(mayor, idx +1);
        }
        console.log(indices);
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
        console.log(indices);

        for (let k = 0; k < indices.length; k++) {
            const element = array[k];
            moda[k+1] =  claves[indices[k]];
        }
        console.log(moda);

        let modaKeys = Object.keys(moda);
        console.log(modaKeys.length)
        let modaValues = Object.values(moda);

        for (let l = 0; l < modaKeys.length; l++) {
            const atributo = modaKeys[l];            
            console.log(`El array es multimodal. La moda N° ${atributo} es ${moda[atributo]}`)
        }

    } else {
        // capturamos el índice del elemento mayor
        let indexMayor= valores.indexOf(mayor);
        console.log(indexMayor);
        moda["moda1"] = claves[indexMayor];
        console.log(moda);
        return console.log(`La moda es:  ${moda.moda1}`)
    }
}