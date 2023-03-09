//FORMA 1

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
