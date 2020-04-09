var menu = require('node-menu');

 
menu.addDelimiter('-', 40, 'Main Menu')
    .addItem(
        'Mostrar la llista d’alumnes',
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
    
    .addItem(
        'Afegir un alumne',
        

    .addItem(
            'Esborrar un alumne',
            


    .addDelimiter('*', 40)
    // .customHeader(function() {
    //     process.stdout.write("Hello\n");
    // })
    // .disableDefaultHeader()
    // .customPrompt(function() {
    //     process.stdout.write("\nEnter your selection:\n");
    // })
    // .disableDefaultPrompt()
    .start();