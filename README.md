# React and Electron webapp of Newton Raphson Method

## Versión de Desarrollo 

### Correr server de desarrollo de React
`npm start`

### Correr la versión de desarrollo de Electron
`npm run electron-dev`

## Versión de Producción

### Construir el proyecto de React
`npm run build`

### Correr la versión de producción en Electron
`npm run electron`

## Empaquetar Electron para distribución

### Instalar electron-packager
`npm install electron-packager -g`
### Construir para Windows
`electron-packager . nr-webapp --platform=win32 --arch=x64`
### Construir para Mac
`electron-packager . nr-webapp --platform=darwin --arch=x64`

### Construir para Linux
`electron-packager . nr-webapp --platform=linux --arch=x64`