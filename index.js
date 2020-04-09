var menu = require('node-menu');

var alumnes_json =
{
  "alumnes":
  [
      {
          "dni": "36867720A",
          "nombre": "Paco",
          "apellido": "Gonzalez",
          "edad": 65,
          "lista de asignaturas": [{"Mates": 8}, {"Biologia": 6}]
      },
      {
          "dni": "45397689E",
          "nombre": "Benito",
          "apellido": "Martinez",
          "edad": 14,
          "lista de asignaturas": [{"Mates": 7}, {"Biologia": 7}, {"Castellano": 5}, {"Ingles": 8}, {"E.F.": 9}]
      },
      {
          "dni": "45695378F",
          "nombre": "Donald",
          "apellido": "Trump",
          "edad": 73,
          "lista de asignaturas": [{"Mates": 7}, {"Economia": 10}, {"Castellano": 5}]
      },
      {
          "dni": "51228248H",
          "nombre": "Helen",
          "apellido": "Chufe",
          "edad": 33,
          "lista de asignaturas": [{"Ingles": 5}, {"Biologia": 3}, {"Catalan": 4}]
      },
      {
          "dni": "3971830M",
          "nombre": "Alex",
          "apellido": "Tintor",
          "edad": 40,
          "lista_de_asignaturas": [{"Catalan": 8}, {"E.F.": 6}, {"Fisica": 9}]
      }
  ]
}
 
menu.addDelimiter('-', 40, 'Main Menu')
    .addItem(
        'Mostrar la llista d’alumnes',
        function num1() {console.log(alumnes_json);})
    
    .addItem(
        'Afegir un alumne',
        function num2(valor1, valor2, valor3, valor4, valor5) {
          var alumnes_json = new Object();
          alumnes_json.dni = valor1;
          alumnes_json.nombre = valor2;
          alumnes_json.apellido = valor3;
          alumnes_json.edad = valor4;
          alumnes_json.lista_de_asignaturas = valor5;
           
          var myString = JSON.stringify(alumnes_json);
            })

    .addItem(
            'Esborrar un alumne',
            function eliminarPorDni(dni){
              delete alumnes_json[dni];
                console.log(alumnes_json);
            })
          
    .addDelimiter('*', 40)
    .start();