// Perímetro del cuadrado

	const ladoCuadrado = 5;
	const perimetroCuadrado = ladoCuadrado*4;

// Área del cuadrado

	const areaCuadrado = ladoCuadrado**2;

	console.log({
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
  });

// Perímetro del triángulo

	const ladoTriangulo1 = 6;
	const ladoTriangulo2 = 6;
	const ladoTrianguloBase = 4;
	const alturaTriangulo = 5.5;

	const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTrianguloBase

// Área del triangulo

	const areaTriangulo = (ladoTrianguloBase*alturaTriangulo)/2;


	console.log({
		perimetroTriangulo,
		areaTriangulo,
});

// Utilizando funciones

function calcularPerimetroCuadrado(lado){
	const resultado = lado*4;
	return resultado;
};

function calcularAreaCuadrado(lado){
	const resultado = lado**2;
	return resultado;
};

function calcularPerimetroTriangulo(lado1,lado2,base){
	const resultado = lado1+lado2+base;
	return resultado;
};

function calcularAreaTriangulo(base, altura){
	const resultado = (base*altura)/2;
	return resultado;
};

// Utilizando funciones - parte 2

function calcularTriangulo (lado1, lado2, altura, base){
	return{
		perimetro: lado1+lado2+base,
		area: (base*altura)/2,
	}
}

function calcularCuadrado (lado){
	return{
		perimetro: lado*4,
		area: lado**2,
	}
}

// Perímetro y area de la circunferencia

	const radioCirculo = 3;
	const diametroCirculo = radioCirculo *2;
	const pi = 3.1415;

	const perimetroCircunferencia = radioCirculo*2*pi;
	const areaCirculo = (radioCirculo**2)*pi;

	console.log({
		perimetroCircunferencia,
		areaCirculo,
	});

	function calcularCirculo(radio, pi){
		return{
			perimetroCirculo: (radio*2)*pi,
			areaCirculo: 	(radio**2)*pi		
		}
	}

	// Utilizando math.pow

	function calcularCirculo2(radio){
		const diamet = radio *2;
		const radioAlCuadrado = Math.pow(radio, 2);
		return{
			perimetroCirculo: (diamet)*Math.PI.toFixed(5),
			areaCirculo: 	(radioAlCuadrado)*Math.PI.toFixed(5),	
		}
	}

	// Altura de un triángulo isósceles

		let alturaTrianguloIsosceles;
		const baseTrianguloIsosceles = 5;
		const ladoTrianguloIsosceles = 4;

		const firstPart =  Math.pow(ladoTrianguloIsosceles,2);
		const secondPart = (Math.pow(baseTrianguloIsosceles,2))/4;

		//Raúl

		function alturaTrianguloIsosc(lado,base){
			const firstPart =  Math.pow(lado,2);
			const secondPart = (Math.pow(base,2))/4;

			return{
				altura:Math.sqrt((firstPart-secondPart)),
				
			}
		};

		//Juan DC 

		function calcularAlturaTriangle (lado, base){
			if (lado == base){
				console.warn("El lado y la base no pueden ser iguales");
			} else {
				const firstPart =  Math.pow(lado,2);
				const secondPart = (Math.pow(base,2))/4;
				return Math.sqrt((firstPart-secondPart)).toFixed(2);
			};
		}

		
		//Altura de un triángulo escaleno

			function calcularAlturaTriangleEscaleno (ladoA, ladoB, base){
				if (ladoA==ladoB || ladoB==base || ladoA==base){
					console.warn("Tenga cuidado, los 3 lados tienen que ser diferentes");
				} else{
					const semiperimetro = (ladoA+ladoB+base)/2
					return ((2/base)*Math.sqrt((semiperimetro*(semiperimetro-ladoA)*(semiperimetro-ladoB)*(semiperimetro-base)))).toFixed(3)
				}
			};
		
			

