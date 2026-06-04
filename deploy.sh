#!/bin/bash

echo "Compilando Angular..."
npx ng build --configuration production

echo "Copiando archivos..."
\cp -rf dist/sistema-presentacion/browser/* /var/www/neurona-ia/

echo "Reiniciando Nginx..."
systemctl restart nginx

echo "Despliegue completado"
