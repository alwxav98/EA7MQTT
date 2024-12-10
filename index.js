const express = require('express');
const app = express();
const path = require('path');
const mqtt = require('mqtt'); 

const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

// Settings in client MQTT
const brokerUrl = 'mqtt://test.mosquitto.org'; // URL broker MQTT
const client = mqtt.connect(brokerUrl); // Conexion to broker

// Client MQTT
client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    client.subscribe('miTopico', (err) => {
        if (!err) {
            console.log('Suscrito al tópico: miTopico');
        } else {
            console.error('Error al suscribirse:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Mensaje recibido en ${topic}: ${message.toString()}`);
});

// Principal rute
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Programacion Distribuida',
        university: 'Universidad Central del Ecuador',
        faculty: 'Facultad de Ingeniería y Ciencias Aplicadas',
        degree: 'Sistemas de Información',
        name: 'Tanya Alexandra Vaca Mena',
        studentId: 'SI8-002'
    });
});

// Send message to broker from rute
app.get('/publish', (req, res) => {
    const mensaje = 'Hola desde Node.js con MQTT';
    client.publish('miTopico', mensaje, (err) => {
        if (err) {
            return res.status(500).send('Error al publicar mensaje');
        }
        res.send('Mensaje publicado: ' + mensaje);
    });
});

// Start server en 0.0.0.0
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});