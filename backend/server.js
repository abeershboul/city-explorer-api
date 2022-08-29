const express = require('express');
const cors =require('cors');
const server = express();
const weather= require('./weather.json');
server.use(cors());

server.get('/getweather',(req,res)=>{
    const result=weather.data.find((item)=>{
       if(item.city_name==req.query.name)
       { return item.city_name;}
       res.send(result);
    })
}
)

const PORT = 3000;
//http://localhost:3000/
server.get('/',(req,res)=>{
    res.send("hii");
})



server.listen(PORT,() =>{
console.log('HELLO');

})