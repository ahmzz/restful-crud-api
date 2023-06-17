import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
const app=express()
const PORT=5000

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('This is the Home Page')
})

app.use('/users',usersRoutes)

app.listen(PORT,()=>{
    console.log(`Server UP at localhost:${PORT}`);
})