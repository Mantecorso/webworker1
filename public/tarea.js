
//creamos un objeto en JSON y lo enviamos de tarea al main
var miMensaje = {
    name: {
        first: 'Luis',
        second: 'Jurado'
    }
};

postMessage(JSON.stringify(miMensaje));

var tempMessage = JSON.stringify(miMensaje);
//stringify pasa el objeto a un string
postMessage(tempMessage);


