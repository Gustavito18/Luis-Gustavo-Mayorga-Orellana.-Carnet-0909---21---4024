function semana(dias) { //etiqueta para las opciones y hacer el funcionamiento de cada una de las opciones 
    switch (dias) {
        case 1:
            alert("El dia seleccionado es Lunes"); //demostracion al usario de cada funcion que hace cada boton
            
            break; //etiqueta para darle final a cada caso
        case 2:
            alert("El dia seleccionado es Martes");
            
            break;

        case 3:
            alert("El dia seleccionado es Miercosles");
            
            break;

        case 4:
            alert("El dia seleccionado es Jueves");
            
            break;

        case 5:
            alert("El dia seleccionado es Viernes");
            
            break;

        case 6:
            alert("El dia seleccionado es Sabádo");
            
            break;

        case 7:
            alert("El dia seleccionado es Domingo");
            
            break;
        default: //para mostrar la opcion de incorrecto si el usario ingresa una que no debe de ser
            alert("El dia seleccionado no existe")
            break;
    }
}