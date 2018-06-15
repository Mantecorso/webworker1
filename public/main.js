alert();


// crea un nuevo proceso que ejecuta tarea.js
// var worker = new Worker("./tarea.js");
// Worker es palabra reservada en html5

// worker.addEventListener("message", function (e){
    //recibe de tarea el evento
//    var otronombre = JSON.parse(e.data);
    // parse hace que pasas de string a objeto de javascript
//    console.log(otronombre);
    //solo le pedimos los datos del objeto con .data
// });


var worker;
function startWorker() {
    if(typeof(Worker) !== "undefined"){
        
    
    worker = new Worker("./tarea.js");

    worker.addEventListener("message", function (e){
        //recibe de tarea el evento
        var otronombre = JSON.parse(e.data);
        // parse hace que pasas de string a objeto de javascript
        console.log(otronombre);
        //solo le pedimos los datos del objeto con .data
    });
    } else {
        alert('No funciona webworker para este navegador');
    }
}

function stopWorker(){
    worker.terminate();
}
