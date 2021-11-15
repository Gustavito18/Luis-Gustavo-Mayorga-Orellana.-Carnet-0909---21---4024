function calculo() {

    var edad = document.getElementById("edad").value; //seleccion del atributo id que se le asigno
    
    if (edad>=18) { //condicion para calcular las edades que tienen acceso y cuales no
        alert("Tu puedes entrar a esta pagina");
    } else {
        alert("Este contenido es prohibido para ti");
    }
    
}