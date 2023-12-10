const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const proyectosRoutes = require("./routes/proyectos");

const app = express();
const port = process.env.PORT || 9000;

//middelware
app.use(express.json());
app.use('/api', proyectosRoutes);


//routes
app.get('/', (req, res)=>{
    res.send("Software de pruebas");
})

//mongodb connection
mongoose
    //console.log(process.env.MONGODB_URI)
    .connect('mongodb+srv://datosmongo:azjAIxTBcFTVmaHh@clusterprueba.7fhdx7c.mongodb.net/')
    .then(() => console.log('Connected to MongoDB Luis'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port ',port));