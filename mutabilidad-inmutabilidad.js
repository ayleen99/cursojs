//tipo de dato primitivo - inmutable 
let numero=23
numero=numero+10
console.log(numero)


let esVerdadero=true
esVerdadero=false
console.log(esVerdadero)

//tipo de dato comolejo - mutable 
let usuario={nombre:'Pepito',edad:15}
usuario.edad=20
console.log(usuario)


let frutas=['manzana','pera']
frutas[0]='sandia'
console.log(frutas)


function cambiarNombre(objeto){objeto.nombre='Nuevo nombre'}
let persona={nombre:'Antonio'}
cambiarNombre(persona)
console.log(persona)

//en conclusion a mi parecer los inmutables parecen ser mutables
//TIPOS DE DATOS 
//PRIMITIVOS  |  COMPLEJOS
//-string     |  -object
//-number     |  -array
//-boolean    |  -function
//-null
//-undefined
//-symbol