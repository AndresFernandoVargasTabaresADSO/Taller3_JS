addEventListener("DOMContentLoaded",()=>{
    console.log(`2. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes`)
    
    let number = Number(prompt(`Escribe el primer numero: `))
    let numbertwo = Number(prompt(`Escribe el segundo numero: `))
    let numbertre = Number(prompt(`Escribe el tercer numero: `))

    if(number<numbertwo,numbertre<numbertwo){
        console.log(`${numbertwo} Es mayor que ${number} y ${numbertre}`)
    }

    if(numbertwo<number,numbertre<number){
        console.log(`${number} Es mayor que ${numbertwo} y ${numbertre}`)
    }

    if(number<numbertre,numbertwo<numbertre){
        console.log(`${numbertre} Es mayor que ${number} y ${numbertwo}`)
    }
})