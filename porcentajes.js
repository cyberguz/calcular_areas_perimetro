    //calculo de descuento
    function precioConDescuento (precioInicial, descuento) {
        return precioInicial * (1-(descuento/100));
    }
    //Obtiene los input: precio y descuento para calcular el precio final
    function calcularPriceDiscount () {
        const inputPrice = document.getElementById("precioProducto").value;
        const inputDiscount = document.getElementById("precioDescuento").value;

        const value = precioConDescuento (inputPrice, inputDiscount);
        
        const resultadoPrecio = document.getElementById("resultadoPrecio");
        resultadoPrecio.innerText = "Tu precio con descuento es $" + value;
    }
    //Descuento fijo 25%, toma el precio incial del producto y el descuento del día.
    function aplicarDescuento () {
        const inputValor = document.getElementById("valor").innerHTML;
        const inputValorIni = Number.parseInt(inputValor, 10); 
        const descuento = 20;
        
        const value1 = precioConDescuento (inputValorIni, descuento)
        
        const resultadoMoneda  = document.getElementById("soles");
        resultadoMoneda.innerText = "S/";
        const resultadoPrecioDescuento  = document.getElementById("precio_Descuento");
        resultadoPrecioDescuento.innerText = value1;

        document.getElementById("valor").style.textDecoration = "line-through";
        document.getElementById("moneda").style.textDecoration = "line-through";
        document.getElementById("valor").style.color = "#a56c00";
        document.getElementById("moneda").style.color = "#a56c00";
        document.getElementById("carrito").style.visibility = "visible";
        document.getElementById("carrito").style.opacity = "1";
        //document.getElementById("puntero").style.cursor = "pointer";
    }
    //envia un alerta cada vez que se realiza una compra.
    function efectuarCompra() {
        alert("se agregó al carrito de compras")  
        const inputContador = document.getElementById("contador").innerHTML;
        
        const resultadoContador  = document.getElementById("contador");
        resultadoContador.innerText = Number(inputContador) + 1;   
                       
    }
    //contador de productos comprados
    //function contador() {
      //  const inputContador = document.getElementById("contador").innerHTML;
        
        //const resultadoContador  = document.getElementById("contador");
        //resultadoContador.innerText = inputContador + 1;
    //}
    
    //segundo descuento, con cupones
    

    function efectuarCupon() {
        const valueDescontado = document.getElementById("precio_Descuento").innerHTML;
        const valueNumberDescontado = Number.parseInt(valueDescontado, 10);
        const descuentos = 10;
        const value2 = precioConDescuento (valueNumberDescontado, descuentos);

        const resultadoPrecioDescuento  = document.getElementById("precio_Descuento_Final");
        resultadoPrecioDescuento.innerText = "S/" + value2;
        const resultadoPrecio = document.getElementById("cupon");
        resultadoPrecio.innerText = "-"+descuentos+"%";

        document.getElementById("soles").style.textDecoration = "line-through";
        document.getElementById("precio_Descuento").style.textDecoration = "line-through";
        document.getElementById("soles").style.color = "#a56c00";
        document.getElementById("precio_Descuento").style.color = "#a56c00";
        //document.getElementById("carrito").style.opacity = "0";
        //document.getElementById("puntero").style.cursor = "default";
        document.getElementById("carrito1").style.opacity = "1";
        document.getElementById("carrito").style.visibility = "hidden"; 
        
    }
    function efectuarCupon1() {
        const valueDescontado = document.getElementById("precio_Descuento").innerHTML;
        const valueNumberDescontado = Number.parseInt(valueDescontado, 10);
        const descuentos = 8;
        const value3 = precioConDescuento (valueNumberDescontado, descuentos);
        const value2 = value3.toFixed(2)

        const resultadoPrecioDescuento  = document.getElementById("precio_Descuento_Final");
        resultadoPrecioDescuento.innerText = "S/" + value2;
        const resultadoPrecio = document.getElementById("cupon");
        resultadoPrecio.innerText = "-"+descuentos+"%";

        document.getElementById("soles").style.textDecoration = "line-through";
        document.getElementById("precio_Descuento").style.textDecoration = "line-through";
        document.getElementById("soles").style.color = "#a56c00";
        document.getElementById("precio_Descuento").style.color = "#a56c00";
        document.getElementById("carrito").style.opacity = "0";
        document.getElementById("puntero").style.cursor = "default";
        document.getElementById("carrito1").style.opacity = "1";
        //document.getElementById("carrito").onclick = efectuarCompraConCupon ();
    }
    function efectuarCupon2() {
        const valueDescontado = document.getElementById("precio_Descuento").innerHTML;
        const valueNumberDescontado = Number.parseInt(valueDescontado, 10);
        const descuentos = 5;
        const value3 = precioConDescuento (valueNumberDescontado, descuentos);
        const value2 = value3.toFixed(2)

        const resultadoPrecioDescuento  = document.getElementById("precio_Descuento_Final");
        resultadoPrecioDescuento.innerText = "S/" + value2;
        const resultadoPrecio = document.getElementById("cupon");
        resultadoPrecio.innerText = "-"+descuentos+"%";

        document.getElementById("soles").style.textDecoration = "line-through";
        document.getElementById("precio_Descuento").style.textDecoration = "line-through";
        document.getElementById("soles").style.color = "#a56c00";
        document.getElementById("precio_Descuento").style.color = "#a56c00";
        document.getElementById("carrito").style.opacity = "0";
        document.getElementById("puntero").style.cursor = "default";
        document.getElementById("carrito1").style.opacity = "1";
        //document.getElementById("carrito").onclick = efectuarCompraConCupon ();
    }