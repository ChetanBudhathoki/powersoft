const express = require('express')
// mongodb://localhost:27017/powersoft
require('./db/db')
const edu = require('./db/model')

const app = express()
app.use(express.json())


function validate({body},res, next){
const key =Object.keys(body)
// key.forEach(el =>{
//     if(!body[el]){
//         res.status(400).send({error : `${el} not found `})
//     }
// })
next();
}


app.post('/append',async (req,res)=>{
    try {
        const data = await edu(req.body);
        await data.save();
        res.status(201).send(data)  
    } catch (error) {
        res.status(400).send(error)
    }

})

app.listen(process.env.PORT , ()=>{
    console.log('app is listing in port' + process.env.PORT)
})