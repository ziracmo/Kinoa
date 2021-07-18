const fetch = require('node-fetch');
const fs = require('fs');

async function generateCardAssets() {
    let counter = 0;
    const symbols = await fetch('https://api.scryfall.com/symbology').then(res => res.json());
    const data = symbols.data;

    for (let d of data) {
        const split = d.svg_uri.split('/');
        const name = split[split.length - 1];
        const buffer = await fetch(d.svg_uri).then(res => res.buffer());
        fs.writeFile('./src/assets/svgs/' + name, buffer, () => {
            counter++;
            console.log('Creating : ' + name);
            if (counter === data.length) {
                console.log('Assets generation success');
            }
        });
    }
}

generateCardAssets();
