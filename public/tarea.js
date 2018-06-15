
//creamos un objeto en JSON y lo enviamos de tarea al main
var miMensaje = {
    name: {
        first: 'Luis',
        second: 'Jurado'
    }
};

self.onmessage = function(message) {
    
    //var x = JSON.stringify({message: message});
    var tempMessage = JSON.stringify(miMensaje);
    //stringify pasa el objeto a un string
    postMessage(message.data);
    // ahora no funciona el boton al meterlo dentro de self
}

var tempMessage = JSON.stringify(miMensaje);

postMessage(tempMessage);
