addEventListener("DOMContentLoaded",()=>{
    console.log(`6. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
    en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
    mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.`)

    let options = String(prompt(`Ingresa una de las Opciones: Temperatura (T) - Presion (P)`))

    if(options==`T`){
        let temp = Number(prompt(`Ingresa la temperatura: `))
        if(temp>200){
            console.log(`Alarma!! La temperatura es mayor a 200!!`)
        }
        else{
            console.log(`La temperatura esta Normal`)
        }
    }

    if(options==`P`){
        let presion= Number(prompt(`Ingresa la presion: `))

        if(presion>100){
            console.log(`Alarma!! La presion es mayor a 100!!`)
        }

        else{
            console.log(`La presion esta Normal`)
        }
    }
})