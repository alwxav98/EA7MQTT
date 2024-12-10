# MQTT project in Node.js

This project implements a basic MQTT-style architecture using Node.js, Express, and MQTT, and it is dockerized to run in a container.

## Instructions to run the project
### Prerequisites
1. Make sure you have Docker installed on your machine.
2. Clone this repository to your local machine:

   ```bash
   git clone  https://github.com/alwxav98/EA7MQTT.git
   cd  EA7MQTT
   ```

### Using Docker
1. Clone this repository to your local machine.
2. Build the Docker image with the following command:

   ```bash
   docker build -t node-mqtt .
   ```

3. Run the container with:

   ```bash
   docker run -d -p 3000:3000 --name mqtt-container node-mqtt
   ```
4. Access the application in your browser:
- Home page: http://localhost:3000
- API endpoint: http://localhost:3000/publish

## Testing the MQTT API Endpoint

### Publishing a message via the API endpoint:
Access the `/publish` endpoint in your browser to send a message to the MQTT broker. This will trigger a message to be published to the `myTopic` topic.

- In your browser, go to: http://localhost:3000/publish and the following message will appear:
    ```bash
    Mensaje publicado: Hola desde Node.js con MQTT
    ```

Once the message is sent, it will be published to the topic `miTopico` in the broker, which can be seen in the docker console as follows:
    ```bash
    
    Servidor corriendo en http://localhost:3000
    Conectado al broker MQTT
    Suscrito al tópico: miTopico
       
   ```
