// import cors client server integration
const cors=require('cors')
// import dataservice folder from service folder
const dataservice=require('./service/dataservice')

// import  express
const express=require('express')
const { json } = require('express')

// using express create app
const app=express()

// connect front end should always give after creating app
app.use(cors({origin:'http://localhost:4200'}))

// to convert json data to js when coming to js file
app.use(express.json())




app.post('/register',(req,res)=>{
    dataservice.register(req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result) 
    })
})

// login

app.post('/login',(req,res)=>{

    dataservice.login(req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result) 
    })

})








// to set port number to app
app.listen(3000,()=>{
    console.log("server started at prt number 3000 Ecart");
})