alert();

// crea un nuevo proceso que ejecuta tarea.js
var worker = new Worker("./tarea.js");
// Worker es palabra reservada en html5

worker.addEventListener("message", function (e){
    //recibe de tarea el evento
    var otronombre = JSON.parse(ev.data);
    // parse hace que pasas de string a objeto de javascript
    console.log(e.data);
    //solo le pedimos los datos del objeto con .data
});
