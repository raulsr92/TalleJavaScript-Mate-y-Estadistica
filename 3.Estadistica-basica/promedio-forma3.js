//FORMA 3

function prom(array){
    let media;
		
    let sum; 
    let valorInicial=0;

    // callback function
		
			function sumar (acumulador, valorActual){
				return acumulador+valorActual
			}

    // Invocar al método reduce( )

			sum = array.reduce(sumar,valorInicial)
			
			console.log(sum);
    

    media = (sum / (array.length))
    console.log(media);
    return media;

}