const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);   
        console.info('dbconnection on the run'); 
    } catch (error) {
        console.error(error);
        throw new Error('Error en la base de datos');
    }
    
}

module.exports = {
    dbConnection
}