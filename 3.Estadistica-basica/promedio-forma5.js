//FORMA 5

function prom(array){
    let media;
		
    let sum; 
    let valorInicial=0;

    // Invocar al método reduce( )

			sum = array.reduce(function(acumulador, valorActual){return acumulador+valorActual},valorInicial)
			
			console.log(sum);
    
    media = (sum / (array.length))
    console.log(media);
    return media;

}
