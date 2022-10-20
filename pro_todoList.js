/*Proyecto donde el usuario puede ingresar una lista de deberes, y después marcar un elemento
de la lista que ya haya realizado*/


//Funcion que guarda el id de la tarea en una variables y hace que aparezca en el documento
function Add(){
    const task = document.getElementById("tarea");
    task.style.display = "block";
    return true;
}