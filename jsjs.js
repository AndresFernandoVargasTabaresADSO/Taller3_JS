addEventListener("DOMContentLoaded",()=>{
    console.log(`10. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    Iva, Subtotal y Total de la compra de los artículos.`)

    var continuar = `si`
    while(continuar==`si`){
        let p1 = Number(prompt(`Ingresa el valor del producto 1: `))
        let p2 = Number(prompt(`Ingresa el valor del producto 2: `))
        let p3 = Number(prompt(`Ingresa el valor del producto 3: `))
        let p4 = Number(prompt(`Ingresa el valor del producto 4: `))
        let p5 = Number(prompt(`Ingresa el valor del producto 5: `))
        let valoriva = Number(prompt(`Ingresa el valor del IVA: `))
        continuar = String(prompt(`Deas continuar? (si/no)`))
        
        let suma = (p1+p2+p3+p4+p5)
        let iva = (suma * valoriva/100)
        let total = (suma + iva) 
        console.log(`Valor sin iva ${suma}`)
        console.log(`IVA ${valoriva}%`)
        console.log(`Valor del iva ${valoriva} = ${iva}`)
        console.log(`Valor con iva: ${total}`)
    }

    if(continuar==`no`){
        console.log(`Gracias por su compra!`)
    }
    else{
        console.log(`Ingreso un dato no valido!`)
    }
})