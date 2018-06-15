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

    worker.onmessage = function (e) {
       // var tempoMessage = JSON.parse(e.data);
        console.log(e.data);
    }    
    //worker.addEventListener("message", function (e){
        //recibe de tarea el evento
     //   var otronombre = JSON.parse(e.data);
        // parse hace que pasas de string a objeto de javascript
       // console.log(otronombre);
        //solo le pedimos los datos del objeto con .data
    worker.onerror = function (err) {
        console.log(err);
    }
    worker.postMessage('Hola desde el main al tarea con amor');
    worker.postMessage('otro mensaje');
    worker.postMessage('mas mensajes');
    worker.postMessage('no pares, dont stop');
    } else {
        alert('No funciona webworker para este navegador')
    }
}

function stopWorker(){
    worker.terminate();
}

// gestionar errores en webworker
// filename 
// linemo   
// message  


