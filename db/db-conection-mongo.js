const mongoose = require('mongoose');

const getConnection = async () => {
     try {
         const url = 'mongodb://LuisaCar:escobaytrapero@ac-khzgb4j-shard-00-00.tz64zhe.mongodb.net:27017,ac-khzgb4j-shard-00-01.tz64zhe.mongodb.net:27017,ac-khzgb4j-shard-00-02.tz64zhe.mongodb.net:27017/inventarios-prueba?ssl=true&replicaSet=atlas-i9w950-shard-0&authSource=admin&retryWrites=true&w=majority'

         await mongoose.connect(url);

        console.log('conexion exitosa');
    }  catch (error){
          console.log(error);
    }
}
module.exports = {
    getConnection,
}