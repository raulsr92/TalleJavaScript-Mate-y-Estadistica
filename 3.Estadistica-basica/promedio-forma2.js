//FORMA 2

function prom(array){
    let media;
		
    let sum; 

    // callback function
		
			function sumar (acumulador, valorActual){
				return acumulador+valorActual
			}

    // Invocar al método reduce( )

			sum = array.reduce(sumar,0)
			
			console.log(sum);
    

    media = (sum / (array.length))
    console.log(media);
    return media;

}
