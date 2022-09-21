addEventListener("DOMContentLoaded",()=>{
    console.log(`13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    Los descuentos son los siguientes:
    Tipo A 10% de descuento
    Tipo B 15% de descuento
    Tipo C 20% de descuento`)

    let client= String(prompt('Membresia: A-B-C'))
    let helado= Number(prompt(`Precio helado`))
    if(client==`A`){
        let descuento= helado - (helado * 0.10)
        console.log(`Total= ${helado}`)
        console.log(`Membresia A 10%: Total mas el descuento ${descuento}`)
    }
    if(client==`B`){
        let descuento= helado - (helado * 0.15)
        console.log(`Total= ${helado}`)
        console.log(`Membresia B 15%: Total mas el descuento ${descuento}`)
    }
    if(client==`C`){
        let descuento= helado - (helado * 0.20)
        console.log(`Total= ${helado}`)
        console.log(`Membresia C 20%: Total mas el descuento ${descuento}`)
    }
})