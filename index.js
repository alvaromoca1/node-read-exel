//https://www.npmjs.com/package/read-excel-file
const xlsxFile = require('read-excel-file/node');

//podesmo sacar la infoamcion del exel principal
xlsxFile('./example.xlsx').then((rows) => {
    rows.forEach((col) =>{
        col.forEach((data) =>{
            console.log(data);
        })
    })
})
//podesmo ver las diferenstes hojas del exel
xlsxFile('./example.xlsx',{getSheets:true}).then((sheets)=>{
    sheets.forEach((obj)=>{
        console.log(obj.name);
    })
})

//sacamos la informacion de una hoja especifica
xlsxFile('./example.xlsx',{sheet:1}).then((rows)=>{
    for(let i in rows){
        for(let j in rows[i]){
            console.log(rows[i][j]);
        }
    }
})