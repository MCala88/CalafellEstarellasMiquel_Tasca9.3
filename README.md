# Llenguatges de Marques i Sistemes de Gestió d'Informació

# CalafellEstarellasMiquel_Tasca9.3

# Miquel Calafell Estarellas


Per fer el menu hem utilitzat "node-menu"

Executant _node index.js_ se incia el menu on es mostren les opcions que tenim disponibles.
La opció 1 ens mostrara la llista de alumnes que tenim a la variable de alumnes_json on tenim el 
contingut del json de alumnes.

> Si volem veure la llista desde un fitcher json podem utilitzar el seguent codig
>
>> menu.addItem( 
>>        'Mostrar la llista d’alumnes',
        function num1() {const fs = require('fs');
        fs.readFile('./alumnes.json', 'utf8', (err, fileContents) => {
            if (err) {
                console.error(err)
                return;
            }
            try {
                const data = JSON.parse(fileContents)
                console.log(data);
            } catch(err) {
                console.error(err);
            }
        })})

La opcio 2 en permet afegir un nou alumne, per fer-ho introduim la opcio 2 i en la mateixa linea introduim els altres camps tots aquests separats per un espai i entre comilles dobles si conté espais, en el camp de les asignatures asseguret de escriurer-lo igual que els altres i deixa-ho entre comilles dobles per el espais que conté.
Ex: 2 45697555M Miquel Calafell 18 "[{'Catalan': 8}, {'E.F.': 6}, {'Fisica': 9}]"
Si esta ben escrit et torrana la llista amb el nou alumne.


La opcio 3 serveix per eliminar un alumne introduint el seu dni, nomes hem de introduir la opcio 4 i seguit de un espai el dni de l'alumne que volem eliminar. Ex: 3 45397689E.
Després veurem la llista dels alumnes sense el que hem eliminat.

La opcio 4 es per sortir del menú.