addEventListener("DOMContentLoaded",()=>{
    console.log(`8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.`)

    let cargo = String(prompt(`Ingrese la opcion de su cargo, Opciones Administrativo (A), Planta (P)`))

    if(cargo==`A`){
        let temp = Number(prompt(`Ingrese el numero de horas: `))
        let horas = temp * 10000
        console.log(`Cargo Administrativo: Su pago es $${horas}`)
    }

    if(cargo==`P`){
        let temp = Number(prompt(`Ingrese el numero de horas: `))
        let horas = temp * 20000
        console.log(`Cargo Planta: Su pago es $${horas}`)
    }
})