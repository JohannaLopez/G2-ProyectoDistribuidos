const _ = require('lodash');
const db = require('../DB/index');

exports.parseDataEmpleadoRol = (empleado, rol = {}) => {
    let data;
    if (rol==null)    {
        data = {
            id:_.get(empleado, 'id'),
            nombre_completo: _.get(empleado, 'apellido_paterno')
            +' '+_.get(empleado, 'apellido_materno')
            +' '+_.get(empleado, 'primer_nombre'),
            rol:{valor:''}        
        };
    }else{
        data = {
            id:_.get(empleado, 'id'),
            nombre_completo: _.get(empleado, 'apellido_paterno')
            +' '+_.get(empleado, 'apellido_materno')
            +' '+_.get(empleado, 'primer_nombre'),
            rol:{
                id:_.get(rol, 'id'),
                valor:_.get(rol, 'valor')
            }        
        };
    }
    
    return data;
  };