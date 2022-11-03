/*Proyecto donde el usuario puede ingresar una lista de deberes, y después marcar un elemento
de la lista que ya haya realizado*/

//VARIABLES GLOBALES
const iconDark = document.getElementById("fondo_oscuro");
const changecolor = document.getElementById("fondo");
const iconLight = document.getElementById("fondo_claro");
const task = document.getElementById("tarea");
const mainDiv = document.getElementById("cuadro_principal");
const title = document.getElementById("title");
const colorBoxes = document.getElementById("agregar")
const colorBoxes2 = document.getElementById("eliminar")

 



//Funcion que guarda el id de la tarea en una variables y hace que aparezca en el documento
function Add(){
    task.style.display = "block";
    return true;
}

//Funcion que cambia el fondo claro a oscuro
function dark(){
    changecolor.style.backgroundColor = "#151515";
    iconDark.style.visibility = "hidden";
    iconLight.style.visibility = "visible";
    mainDiv.style.backgroundColor = "#191A19"
    task.style.backgroundColor = "#191A19"
    task.style.color = "#F2EBE9";
    mainDiv.style.color = "#F2EBE9";
    title.style.color = "#F2EBE9";
    colorBoxes.style.backgroundColor = "#191A19";
    colorBoxes2.style.backgroundColor = "#191A19";
    return true;
}


function hoverBoxesDark(){
    colorBoxes.style.backgroundColor = "#F2EBE9";
    colorBoxes2.style.backgroundColor = "#F2EBE9";
}


//Funcion que cambia el fondo oscuro a claro
function light(){
    changecolor.style.backgroundColor = "#F2EBE9";
    iconLight.style.visibility = "hidden";
    iconDark.style.visibility = "visible";
    mainDiv.style.backgroundColor = "#FCF8E8";
    mainDiv.style.color = "#191919";
    task.style.backgroundColor = "#FCF8E8";
    task.style.color = "#191919";
    title.style.color = "#243A73";
    colorBoxes.style.backgroundColor = "#243A73";
    colorBoxes2.style.backgroundColor = "#243A73";
}


const tasksArray = [];
//Funcion que agrega las tareas al div principal
document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let element = document.getElementById("tarea").value;
        if(element === "" || element === " "){
            return false;
        }
        tasksArray.push(element);
        console.log(tasksArray);
        document.getElementById("tarea").value = "";
        let content = document.createTextNode(element);
        let brackets = document.createTextNode("◼");
        mainDiv.appendChild(brackets);
        mainDiv.appendChild(content);
        mainDiv.appendChild(document.createElement('br'));
    }
});


function deleteTask(){
    if(confirm("This action will delete the last task, Do you want to procedd?") === true){
        for(let i = 0; i<3; i++){
            mainDiv.removeChild(mainDiv.lastChild);
        }
    }
    return 0;
}





