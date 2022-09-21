addEventListener("DOMContentLoaded",()=>{
    console.log(`11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    de computación.`)

    var cont=0
    var n=0
    
    let nombre= String(prompt(`Ingresa tu nombre y apellido: `))
    let edad= Number(prompt(`Ingresa tu edad: `))
    var continuar= `si`
    while(continuar==`si`){
        let nota = Number(prompt(`Ingresa la notas: `))
        cont=cont+nota
        continuar= String(prompt(`Deseas agregar mas notas? (si/no)`))
        if(nota>0){
            n = n + 1
        }
        
        if(continuar==`no`){
            let promedio = cont/n
            console.log(`Estudiantes ${nombre}`)
            console.log(`Edad: ${edad}`)
            console.log(`Tu promedio es de: ${promedio}`)
        }
        
    }
})