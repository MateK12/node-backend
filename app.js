const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient } = require('mongodb');
const {ObjectId} = require('mongodb')
const mongoose = require('mongoose')
const MONGO_HOST="localhost"
const MONGO_PUERTO="27017"
const MONGO_URI="mongodb://"+MONGO_HOST+":"+MONGO_PUERTO+"/"

// mongoose.connect(MONGO_URI, { useUnifiedTopology: true })       //promesa para conectar a compass
//     .then(() => { console.log('Connected to MongoDB: %s \n ', MONGO_URI) }) //si sale bien
//     .catch((err) => { console.log('MongoDB connection error: %s \n', err); }) //si sale mal

const client = new MongoClient(MONGO_URI) //me conecto con URI
const dbname = "prueba"
const coll = "Coleccion"
let coleccion = client.db(dbname).collection(coll) //creo el db.coll
let objeto = {
    "titulo":"el principito",
    "descripcion":"elefante en un gorro"
}

async function main(){
    let insertar = await  coleccion.insertOne(objeto) //inserto un documento
    console.log(insertar)
    let leer = await coleccion.findOne({"_id": new ObjectId("6459747ad1f78d866b617708")})
    console.log(leer)
    coleccion.close
}
main()

client.close //cierro conexion

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