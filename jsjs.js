addEventListener("DOMContentLoaded",()=>{
    console.log(`9. Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
    impares. Numero par es aquel que su residuo igual a cero (num mod !=0)`)

    let cantidad = Number(prompt(`Ingresa la cantidad de numeros que deseas usar: `))

    if(cantidad<=0){
        console.log(`Tienes que agregar por lo menos un numero positivo!!`)
    }

    else{
        var total = 0
        var pares = 0

        for(i=1;i<=cantidad;i++){
            let numeros = Number(prompt(`Ingresa el valor ${i}`))
            if(numeros % 2 ==0){
                pares +=1 
                fin= total+numeros
            }
        }
        console.log(`Cantidad de Numeros pares ${pares} , Cantidad de Numeros impares ${cantidad - pares}`)
    }
})