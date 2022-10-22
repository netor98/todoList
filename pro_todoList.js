/*Proyecto donde el usuario puede ingresar una lista de deberes, y después marcar un elemento
de la lista que ya haya realizado*/

//VARIABLES GLOBALES
const iconDark = document.getElementById("fondo_oscuro");
const changecolor = document.getElementById("fondo");
const iconLight = document.getElementById("fondo_claro");
const task = document.getElementById("tarea");


//Funcion que guarda el id de la tarea en una variables y hace que aparezca en el documento
function Add(){
    task.style.display = "block";
    return true;
}

//Funcion que cambia el fondo claro a oscuro
function dark(){
    changecolor.style.backgroundColor = "#191919";
    iconDark.style.visibility = "hidden";
    iconLight.style.visibility = "visible";
    return true;
}


//Funcion que cambia el fondo oscuro a claro
function light(){
    changecolor.style.backgroundColor = "#F2EBE9";
    iconLight.style.visibility = "hidden";
    iconDark.style.visibility = "visible";

}


//Funcion que agrega las tareas al div principal
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let mainDiv = document.getElementById("cuadro_principal");
        let element = document.getElementById("tarea").value;
        let content = document.createTextNode(element);
        console.log(element);
        mainDiv.appendChild(content);
        mainDiv.appendChild(document.createElement('br'));
    }
});


