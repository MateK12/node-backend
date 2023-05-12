const express = require('express')
const cors = require('cors')
const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(
    express.json({
        type:"*/*"
    })
)
app.use(cors())
let vari = {
    "prueba":"funcional"
}
app.get('/',(req,res)=>{
    res.send(JSON.stringify(vari))
})
app.post('/',(req,res)=>{
    console.log(req.body) //muestra el body que envio usuario
    res.send(vari)
})

app.listen(3000,()=>{
    console.log("Hola mundo")
})