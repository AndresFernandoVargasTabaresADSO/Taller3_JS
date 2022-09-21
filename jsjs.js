addEventListener("DOMContentLoaded",()=>{
    console.log(`4. Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
    ¿Qué figura quiere calcular (Escriba T o C)?
    Triangulo = base * altura / 2
    Circulo = PI * radio* radio`)
   
    let options = String(prompt(`Ingresa la Opcion de la figura que deas usar, Opciones: Trianguno (T) - Circulo (C): `))

    if(options==`T`){
        let base = Number(prompt(`Ingresa la base de tu triangulo: `))
        let altura = Number(prompt(`Ingresa la altura de tu triangulo: `))

        let solucion = (base * altura)/2
        console.log(`El area de tu triangulo es: ${solucion}`)
    }

    else{
        let radio = Number(prompt(`Ingresa el radio de tu circulo: `))

        let solucion = (Math.PI * Math.pow(radio,2))
        console.log(`El area de tu circuferencia es: ${solucion}`)
    }
})