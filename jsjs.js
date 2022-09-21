addEventListener("DOMContentLoaded",()=>{
    console.log(`5. Escriba un algoritmo que calcule el área de un cuadrado siempre y cuando los lados sean positivos:
    área triangulo= lado * lado.`)

    let lado = Number(prompt(`Ingresa el lado del cuadrado: `))

    if(lado>0){
        let solucion = lado*lado
        console.log(`El area de tu cuadrado es: ${solucion}`)
    }

    else{
        console.log(`Ingresa un numero positivo!!`)
    }
})