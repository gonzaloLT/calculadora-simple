const readline = require("readline-sync");

let operador1,
    operador2,
    opcion,
    seguir;


do{
    console.clear();
    console.log('CALCULADORA')
    console.log('Elija que operacion realizar')
    console.log('1. SUMAR');
    console.log('2. RESTAR')
    console.log('3. DIVIDIR')
    console.log('4. MULTIPLICAR')
    console.log('0. SALIR')
    opcion = readline.questionInt('Ingrese su opcion: ')
    switch(opcion){
        case 1:
            console.clear()
            console.log('SUMA')
            operador1 = readline.questionInt('Ingrese el primer operando: ')
            operador2 = readline.questionInt('Ingrese el segundo operando: ')

            console.log('')
            console.log(`El resultado de la suma de ${operador1} y ${operador2} es igual a ${operador1 + operador2}`)
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 2:
            console.clear()
            console.log("RESTA")
            operador1 = readline.questionInt('Ingrese el primer operando: ')
            operador2 = readline.questionInt('Ingrese el segundo operando: ')

            console.log('')
            console.log(`El resultado de la resta de ${operador1} y ${operador2} es igual a ${operador1 - operador2}`)
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 3:
            console.clear()
            console.log('DIVIDIR')
            operador1 = readline.questionInt('Ingrese el primer operando: ')
            operador2 = readline.questionInt('Ingrese el segundo operando: ')

            if(operador2 !== 0){
                console.log('')
                console.log(`El resultado de la division de ${operador1} y ${operador2} es igual a ${operador1 / operador2}`)
            } else {
                console.log("No se puede realizar la division porque el divisor no puede ser 0")
            }
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 4:
            console.clear()
            console.log('MULTIPLICAR')
            operador1 = readline.questionInt('Ingrese el primer operando: ')
            operador2 = readline.questionInt('Ingrese el segundo operando: ')

            console.log('')
            console.log(`El resultado de la multiplicacion de ${operador1} y ${operador2} es igual a ${operador1 * operador2}`)
            seguir = readline.question("Presione enter para continuar...")
            break;
        case 0:
            break;
    }
}while (opcion != 0);