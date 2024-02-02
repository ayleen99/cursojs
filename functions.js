//pasar funciones como argumentos --> callback
/*function a() {}
function b(a) {}
b(a)

//retornar funciones
function a() {
    function b(a) {}
return b
}

//asignar funciones a avariables --> expresion de funcion
const a = function() {}

//tener propiedades y metodos 
function a() {}
const obj = {}
a.call(obj)

//anidar funciones --> nested functions

function a () {
    function b () {
        function c () {   
        }
        c()
    }
    b()
}
a()*/

//es posible almacenar funciones en objetos?
 const rocket = {
 name: 'falcon 9',
 launchmessage: function launchmessage () {
    console.log('despego a las 10am')
 }
 }

 //funciones puras

//side effects
//1. modificar variables globales
//2. modificar parametros
//3. solicitudes http
//4. imprimir mensajes por consola
//5. manipulacion del dom
//6. obtenes la hora actual

//funcion pura
 function sum(a,b){return a+b}

 //funcion impura
function sum(a,b){console.log('A: ',a)
return a+b}

let total=0
function sumWithSideEffect(a){total+=a
return total}

//funcion pura
function square(x){return x*x}

function addTen(y){return y+10}

//mezcla de dos funciones puras
const number=5
const finalResut=addTen(square(number))
console.log(finalResut)

//identificador this
const house = {
    dogName: 'fido',
    dogGreeting: function() {
        console.log(`hi, i'm ${this.dogName}`)
    }
}
//this llama a una variable que no este declarada dentro de la funcion

//identificador call
const newHouse = {
    dogName: 'coconut'
}

dogGreeting.call(newHouse)