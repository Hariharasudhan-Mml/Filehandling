const e = require('express');
const express= require('express');
const fs=require('fs');



let app=express();

const date=new Date();
fileName=date.toDateString();
// /-route
app.get('/',(req,res)=>{
   res.writeHead(200,{'Content-type':'text/html'});
    fs.writeFile(fileName+".txt",`The current Time  stamp is ${date.toLocaleTimeString()}`,(err)=>{
        if (err){
            console.log(err);
        }
       console.log('File created')
    })
    res.write(`<h2>Here we write a new file named <small style="color:red"> ${fileName} </small> and You can Request this file by giving  <code style="color:grey"> /file </code>  in the address bar</h2>`);
    res.end();
});
// /file route
app.get('/file',(req,res)=>{
    fs.readFile(fileName+".txt",(err,data)=>{
        if(err)throw err;
       res.send(`<h2>${data}</h2>`)
        // res.writeHead(200,{'Content-type':'text/plain'})
        // res.write(data)
        // res.end();
       
    })
} );
app.listen(process.env.PORT || 5000 ,(err)=>{
    if (err){
        console.log(err)
    }
    console.log('Server is Up and Running');
})