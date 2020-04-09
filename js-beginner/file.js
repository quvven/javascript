var fs = require('fs')

// fs.readFile("deneme.txt", (err,data) => {
//     if(err) { throw err; }
    
//     console.log(data); // << data reference
// })

fs.unlink("test2.txt", (err) => {
    if(err) { console.log(err); }
    console.log("deleted");
})

// fs.writeFile("test2.txt", "Deneme Metni",(err) => {
//     if(err) { console.log(err); }
//     console.log("wrote");
// })