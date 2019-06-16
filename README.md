# CursorPhonebookTest

Proyecto entregado por Cursor S.A. para poner a prueba conocimientos de Angular y Git.

## Compilación

Antes de todo, es necesario tener instalado Node.js y Angular 4 (1.4.10).

Al clonar el repositorio, para compilar y ejecutar se deben ejecutar los siguientes comandos

```
cd ./phonebook-test
npm install
ng serve
```

## Instrucciones

La aplicación presenta un buscador de personas que tiene filtros de región y comuna como muestra la siguiente imagen.


![alt text](https://i.imgur.com/Dd4GMrv.png)


Al escoger la región, se puede escoger la comuna para filtrar los resultados. Si no se escoge una comuna, muestra todos los resultados basados sólo en el nombre ingresado la búsqueda.

Los resultados son mostrados en forma de tarjeta que despliega los detalles al hacer click sobre ella.


![alt text](https://i.imgur.com/esFWhSh.gif)


Al escoger la comuna, se realiza nuevamente la búsqueda utilizando este filtro.

Las personas cuyos datos estén corruptos, se les muestra con un contador al lado del nombre que indica cuantos datos corruptos posee. Paralelamente en los detalles se muestra marcada con rojo, la fila que posee el dato corrupto. Como indica la imagen.


![alt text](https://i.imgur.com/UwN06yX.png)

