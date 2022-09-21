addEventListener("DOMContentLoaded",()=>{
    console.log(`12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
        caso contrario indicar con un mensaje que la operación no es posible realizarla.`)

    let numero = Number(prompt(`Ingresa un numero: `))
    let numero2 = Number(prompt(`Ingresa un numero: `))

    if(numero>numero2){
        let resta= (numero-numero2)
        console.log(`Resta= ${resta}`)
    }
    else{
        console.log(`La operacion no es posible de realizar!`)
    }
})