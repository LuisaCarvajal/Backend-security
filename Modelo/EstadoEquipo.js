const {Schema, model} = require ('mongoose');

const EstadoEquipoSchema = Schema ({
    nombre: {
        type: String,
        requerid: true,
    },

    estado: {
        type: String,
        requerid: true,
        emun: ['Activo',
        'Inactivo']
    },
    fechaCreacion:{
        type: Date,
        required: true,
    },
    fechaActualizacion:{
        type: Date,
        required: true,

    }
});

module.exports = model('EstadoEquipo',EstadoEquipoSchema);