// Miquel Calafell

// Importam el node-menu en la variable menu per crear el nostre menu d'opcions
var menu = require('node-menu');

// Aqui tenim la variable amb les dades json dels alumnes  
var alumnes_json =
  [
      {
          "dni": "36867720A",
          "nombre": "Paco",
          "apellido": "Gonzalez",
          "edad": 65,
          "lista_de_asignaturas": [{'Mates': 8}, {'Biologia': 6}]
      },
      {
          "dni": "45397689E",
          "nombre": "Benito",
          "apellido": "Martinez",
          "edad": 14,
          "lista_de_asignaturas": [{'Mates': 7}, {'Biologia': 7}, {'Castellano': 5}, {'Ingles': 8}, {'E.F.': 9}]
      },
      {
          "dni": "45695378F",
          "nombre": "Donald",
          "apellido": "Trump",
          "edad": 73,
          "lista_de_asignaturas": [{'Mates': 7}, {'Economia': 10}, {'Castellano': 5}]
      },
      {
          "dni": "51228248H",
          "nombre": "Helen",
          "apellido": "Chufe",
          "edad": 33,
          "lista_de_asignaturas": [{'Ingles': 5}, {'Biologia': 3}, {'Catalan': 4}]
      },
      {
          "dni": "3971830M",
          "nombre": "Alex",
          "apellido": "Tintor",
          "edad": 40,
          "lista_de_asignaturas": [{'Catalan': 8}, {'E.F.': 6}, {'Fisica': 9}]
      }
  ]
 
/* En aquesta opció cream la delimitacio del començament del menu amb el text que volem, els caracters 
que té al costat i cuants n'hi haura */
menu.addDelimiter('-', 80, 'Main Menu')

/* A partir d'aqui indicarem les opcions del menu amb "addItem", en el seu interior el nom que tendra
seguit de la funcio que executa, aquesta sintaxis es igual per el altres */

//Mostra per consola el contingut de la variable alumnes_json
menu.addItem(
        'Mostrar la llista d’alumnes',
        function listarAlumnes() {console.log(alumnes_json);});

/* Les funcions amb parametres se especifiquen en el parentesis de la funció, en el codí que conté
y al final especificant el tipus de valor que hi has de pasar en cada parametre, una vegada se ha
afegit l'alumne motra per consola la llista d'alumnes per veure que ha funcionat */
menu.addItem(
        'Afegir un alumne',
        function añadirAlumne(valor1, valor2, valor3, valor4, valor5) {
          alumnes_json.dni = valor1;
          alumnes_json.nombre = valor2;
          alumnes_json.apellido = valor3;
          alumnes_json.edad = valor4;
          alumnes_json.lista_de_asignaturas = valor5;
        
          var myString = JSON.stringify(alumnes_json);
          console.log("Nuevo alumno añadido:", alumnes_json);
            },
            null, 
            [{'name': 'dni', 'type': 'string'}, {'name': 'nombre', 'type': 'string'}, {'name': 'apellido', 'type': 'string'},
            {'name': 'edad', 'type': 'numeric'}, {'name': 'lista_de_asignaturas', 'type': 'string'}]);

/* Li pases el dni de un alumne existent, cerca el element de la variable amb format json on estigui 
aquest dni i si el troba l'elimina de la llista. Despres mostres la llista per veure que l'alumne
ja no existeix */
menu.addItem(
            'Esborrar un alumne',
            function eliminarPerDni(dni) {
                const index = alumnes_json.findIndex(x => x.dni === dni);
                if (index !== undefined) alumnes_json.splice(index, 1);
                console.log("Alumno eliminado:", alumnes_json);
            },
            null, 
            [{'name': 'dni', 'type': 'string'}]);

// La funcio de sortir no apareix perque el node-menu ho té per defecta
          
// Indiques el final del menu que has creat al igual que en el delimitador del principi
menu.addDelimiter('*', 80)

// Aquest comande executa el menú
menu.start();