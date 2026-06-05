# Despliegue de la Aplicación Angular en VPS Linux

## Descripción

Este documento describe el proceso de despliegue de la aplicación web desarrollada en Angular para la presentación oficial del Grupo 2 de la Maestría en Inteligencia Artificial.

La aplicación se encuentra publicada en:

https://neurona-ia.com

---

## Tecnologías Utilizadas

* Angular
* Bootstrap
* Git y GitHub
* VPS Linux (Contabo)
* Rocky Linux 9
* Nginx
* Certbot
* Let's Encrypt
* Dominio personalizado

---

## Repositorio

Repositorio GitHub:

https://github.com/alfredohuaman89/sistema-presentacion-san-marcos

---

## Estructura del Proyecto

Ruta del proyecto en el VPS:

```bash
/root/proyectos/sistema-presentacion
```

Ruta de publicación:

```bash
/var/www/neurona-ia
```

---

## Compilación de Angular

Generar la versión de producción:

```bash
npx ng build --configuration production
```

Los archivos generados se almacenan en:

```bash
dist/sistema-presentacion/browser
```

---

## Despliegue Manual

Copiar los archivos compilados al directorio web:

```bash
cp -rf dist/sistema-presentacion/browser/* /var/www/neurona-ia/
```

Reiniciar Nginx:

```bash
systemctl restart nginx
```

---

## Script de Despliegue

Archivo:

```bash
deploy.sh
```

Contenido:

```bash
#!/bin/bash

echo "Compilando Angular..."
npx ng build --configuration production

echo "Copiando archivos..."
cp -rf dist/sistema-presentacion/browser/* /var/www/neurona-ia/

echo "Reiniciando Nginx..."
systemctl restart nginx

echo "Despliegue completado"
```

Ejecución:

```bash
./deploy.sh
```

---

## Configuración de Nginx

Archivo:

```bash
/etc/nginx/conf.d/neurona-ia.conf
```

Configuración principal:

```nginx
server {
    listen 80;
    server_name neurona-ia.com www.neurona-ia.com;

    root /var/www/neurona-ia;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Configuración DNS

Dominio:

```text
neurona-ia.com
```

Registro A:

```text
109.199.117.234
```

Registro CNAME:

```text
www -> neurona-ia.com
```

---

## Configuración HTTPS

Instalación de Certbot:

```bash
dnf install certbot python3-certbot-nginx -y
```

Generación del certificado:

```bash
certbot --nginx -d neurona-ia.com -d www.neurona-ia.com
```

Resultado:

* HTTPS habilitado.
* Certificado SSL emitido por Let's Encrypt.
* Renovación automática configurada.

Sitio seguro:

```text
https://neurona-ia.com
```

---

## Flujo de Actualización

```text
Modificar código
      ↓
git add .
      ↓
git commit
      ↓
git push origin main
      ↓
./deploy.sh
      ↓
Actualizar navegador
```

---

## Autor

Luis Alfredo Huamán Puente

Maestría en Inteligencia Artificial

Universidad Nacional Mayor de San Marcos
