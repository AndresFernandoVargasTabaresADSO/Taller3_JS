addEventListener("DOMContentLoaded",()=>{
    console.log(`1. Determinar si un número es positivo y menor que 100`)
    
    let number = Number(prompt(`Escribe un numero: `))

    if(number<100){
        console.log(`${number} Es menor que 100`)
    }

    else{
        console.log(`${number} Es mayor que 100`)
    }
    
    if(number<0){
        console.log(`${number} Es negativo`)
    }

    else{
        console.log(`${number} Es positivo`)
    }
})