
const express = require('express');

require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');
const { router } = require('./routes/usuarios');

const app = express();


app.use(cors());

// lectura y parseo del body
app.use(express.json());

// database

dbConnection();

// rutas
app.use('/api/usuarios', router);
app.use('/api/login', router);

// app.get('/api/usuarios',(req,res)=> {
//     res.status(200).json({
//         ok:true,
//         usuarios:[{
//             id:123,
//             msg:"hola mundo"
//         }
//         ]
//     });
// });

app.listen(process.env.PORT , () => {
    console.log(`server on run: ${process.env.PORT}`);
});