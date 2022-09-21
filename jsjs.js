addEventListener("DOMContentLoaded",()=>{
    console.log(`3. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o
    si son iguales.`)
    
    let number = Number(prompt(`Escribe el primer numero: `))
    let numbertwo = Number(prompt(`Escribe un segundo numero: `))
    let numbertre = Number(prompt(`Escribe el tercer numero: `))

    if(number==numbertwo|number==numbertre|numbertwo==numbertre|numbertwo==number){
        if(numbertwo==number){
            console.log(`El primer numero es igual: ${numbertwo} Es igual al segundo numero: ${number}`)
        }

        if(numbertre==number){
            console.log(`El primer numero:${numbertre} Es igual al tercer numero ${number}`)
        }

        if(numbertwo==numbertre){
            console.log(`El segundo numero:${numbertre} Es igual al tercer numero ${number}`)
        }
    }

    if(number<numbertwo&numbertre<numbertwo){
        console.log(`${numbertwo} Es mayor que ${number} y ${numbertre}`)
    }
        
    if(numbertwo<number&numbertre<number){
        console.log(`${number} Es mayor que ${numbertwo} y ${numbertre}`)
    }
        
    if(number<numbertre&numbertwo<numbertre){
        console.log(`${numbertre} Es mayor que ${number} y ${numbertwo}`)
    }
        
    if(number>numbertwo&numbertre>numbertwo){
        console.log(`${numbertwo} Es menor que ${number} y ${numbertre}`)
    }
        
    if(numbertwo>number&numbertre>number){
        console.log(`${number} Es menor que ${numbertwo} y ${numbertre}`)
    }
        
    if(number>numbertre&numbertwo>numbertre){
        console.log(`${numbertre} Es menor que ${number} y ${numbertwo}`)
    }
    
})