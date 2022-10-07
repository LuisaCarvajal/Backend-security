const express = require('express');
const { getConnection } = require('./db/db-conection-mongo');
const cors = require ('cors');
require('dotenv').config();


const app = express();
//const port = process.env.PORT;
const port = 4000

app.use(cors());


getConnection();


app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estado-Equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-Equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)

});