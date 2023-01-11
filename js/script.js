let nombre;
let apellido;
let edad;
let correo;
let obraSocial;
let turno;

console.log("¡Bienvenidos al sistema de Turnos!")

nombre = prompt("Ingresar Nombre")

if (nombre == "") {
    alert("NO INGRESASTE NINGUN VALOR")
}else{
    alert("Nombre Ingresado:"+" "+nombre)
} 
.

console.log("Nombre Ingresado:" + " " + nombre)


apellido = prompt("Ingresar Apellido")

if (apellido == "") {
    alert("NO INGRESASTE NINGUN VALOR")
}else{
    alert("Apellido Ingresado:"+" "+ apellido)
}
console.log("Apellido Ingresado:" + " " + apellido)


edad = Number (prompt("Ingresar edad"))
if(edad < 18){
    alert("Para acceder al sistema de turnos debe ser mayor de 18 años")
}
    else if (edad > 60){
        alert("Para acceder al sistema de turnos debes ser menor de 60 años")
    }else{
    console.log("Edad Ingresada:"+" "+edad)
}


correo = prompt ("Ingresar E-mail")
if (correo == "") {
    alert("NO INGRESASTE NINGUN VALOR")
}else{
    alert("E-mail Ingresado:"+" "+correo)
}
console.log("E-mail ingresado:"+" "+ correo)



for (let turno = 1; turno <= 1; turno++) {
    let obraSocial = prompt("Ingresa Obra Social");
    if (obraSocial == "ESC"){
        break
    }
    alert(" Turno  N° "+turno+" Nombre: "+ nombre +" "+ apellido);
}
