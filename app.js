import Town from './town_source.js';
import exportJSON from './export.js';
import * as fs from 'fs';
import readline  from 'readline';

var txt = {town:[]};

const townList = ["Perilsville", "Ravenmore", "Salzberg"];

let i = 0;
for (i = 0; i < townList.length; i++)
{
    const newtown = new Town(townList[i]);
    txt.town.push(exportJSON(newtown));
}


// Convert to string and then push to JSON
let exportString = JSON.stringify(txt);
fs.writeFile("town.JSON", exportString, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})

console.log("Town successfully exported!");