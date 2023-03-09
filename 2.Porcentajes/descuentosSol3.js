// capturar elemento html de botón

const boton = document.querySelector("#calcular");
const priceInput = document.querySelector("#price");
const couponInput = document.querySelector("#coupon");
const result = document.querySelector("#result");

boton.addEventListener("click", calcularDescuento);

const couponsArray = [];

couponsArray.push({
    name:"CuponA",
    discount: 25    
});
couponsArray.push({
    name:"CuponB",
    discount: 20    
});
couponsArray.push({
    name:"CuponC",
    discount: 15    
});
couponsArray.push({
    name:"CuponD",
    discount: 10    
});
couponsArray.push({
    name:"CuponE",
    discount: 5    
});


function calcularDescuento(){
    const price = priceInput.value;
    const coupon = couponInput.value;
    console.log(price);
    console.log(coupon);

    let discountAplied;

    // Método FIND

    let couponElegido;

    function buscarCupon(coupons){
        return coupons.name == coupon;
    }

    couponElegido = couponsArray.find(buscarCupon);
    console.log(couponElegido);

    if (couponElegido) {
        discountAplied = couponElegido.discount
    } else {
        return result.innerHTML= "El cupón:"+" "+coupon+", "+"no tiene descuento 😞 ";
    }
    
    const newPrice = ((price*(100-discountAplied))/100).toFixed(1);
    console.log(newPrice);
    return result.innerHTML= "El cupón es válido 😀 y el precio con descuento es $:" + newPrice;

    /*
    if (couponsObj[coupon]) {
        discount = couponsObj[coupon]
    } else {
        return result.innerHTML= "El cupón:"+" "+coupon+", "+"no tiene descuento 😞 ";
    }*/
    
   /* if (!price || !discount){
        return result.innerHTML= "Porfavor llena el formulario"
    } else if ( discount > 40){
        return result.innerHTML= "El descuento máximo es de 40%"
    } else{
        const newPrice = ((price*(100-discount))/100).toFixed(1);
        console.log(newPrice);
        return result.innerHTML= "El precio con descuento es $:" + newPrice;
    };*/
    
}
