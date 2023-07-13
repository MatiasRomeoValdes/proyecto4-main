#!/bin/bash

# Construir la aplicación con npm run build
npm run build

# Mover al directorio build
cd build

# Inicializar un repositorio git en el directorio de construcción
git init

# Configurar usuario y email de git
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Agregar todos los archivos al repositorio git
git add -A

# Hacer un commit con el mensaje "deploy"
git commit -m "deploy"

# Especificar la rama a la que se debe enviar la implementación (gh-pages)
git push -f git@github.com:Claudio-Gana/proyecto4.git master:gh-pages

# Volver al directorio anterior
cd -
