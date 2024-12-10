# Usar una imagen base oficial de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
# para instalar las dependencias primero y aprovechar el cache de Docker
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que la aplicación escuchará
EXPOSE 3000

# Establecer el comando para iniciar la aplicación
CMD ["npm", "start"]