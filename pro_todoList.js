/*Proyecto donde el usuario puede ingresar una lista de deberes, y después marcar un elemento
de la lista que ya haya realizado*/


//Funcion que guarda el id de la tarea en una variables y hace que aparezca en el documento
function Add(){
    const task = document.getElementById("tarea");
    task.style.display = "block";
    return true;
}

function dark(){
    const changecolor = document.getElementById("fondo");
    changecolor.style.backgroundColor = "#191919";
    return true;
}

const task = document.getElementById("tarea");
//document.addEventListener('keyup', showTask(event));

/*function showTask(e){
    if(event.code === "Enter"){
        const mainDiv = document.getElementById("cuadro_principal");
        const element = document.getElementById("tarea").value;
        mainDiv+=`${e.code}`;
    }   
}*/

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let mainDiv = document.getElementById("cuadro_principal");
        let element = document.getElementById("tarea").value;
        let content = document.createTextNode(element);
        console.log(element);
        mainDiv.appendChild(content);
    }
});


