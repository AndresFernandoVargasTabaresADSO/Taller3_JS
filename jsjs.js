addEventListener("DOMContentLoaded",()=>{
    console.log(`7. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    $130.000 el descuento será del 15%, de lo contrario no hay descuento`)

    var cont = `si`;
    var total = 0;

    while(cont==`si`){
        pagos = Number(prompt(`Ingresa los pagos: `))
        total = total + pagos
        cont = String(prompt(`Deseas agregar mas pagos? (si/no)`))
        
    }

    if(total>130000){
        descuento = total * 0.15
        destotal = total - descuento

        console.log(`Total: $${total}`)
        console.log(`Descuento $${descuento}`)
        console.log(`Presio final: $${destotal}`)
    }

    else{
        console.log(`Total: $${total}`)
    }
})