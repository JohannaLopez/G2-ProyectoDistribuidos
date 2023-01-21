/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');
const { query } = require('express');
//const {transporter} = require('../config/mail');

exports.getRolEmpleado = async (req, res) => {
  await validateRequest(req);
    try {  
      const { empleadoId,fecha } = req.query       
      let query = {
        where: { 
          fecha:Date.parse(fecha), 
          empleadoId           
        },          
      };
      const rolDePago = await db.RolPago.findOne(query);      
      
      const response = { 
        result:rolDePago,
      };
      return res.status(200).send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };

  
  exports.guardarRolEmpleado = async (req, res) => {
    await validateRequest(req);
    try {
        const {
          id,
          empleadoId,
          empresaId,
          areaId,
          fecha,
          enfermedad,
          maternidad,
          enf_mat,
          maternidad_dias,
          contrato_dias,
          desbloqueo_vacaciones,
          parametro_fondo_reserva,
          parametro_iess_personal,
          parametro_iess_dependiente,
          parametro_maternidad,
          parametro_sueldo_basico,
          sueldo,
          dias_laborados,
          sueldo_unificado,
          sobretiempo,
          bonificacion_produccion,
          otros_ingresos,
          vacaciones,
          vacaciones_pagadas,
          fondo_reserva,
          dts,
          dcs,
          total_ingresos,
          iess_personal,
          iess_dependiente,
          anticipo,
          otros_anticipos,
          iess_pq,
          iess_ph,
          comisariato,
          farmacia,
          genesis,
          seguro_medico,
          claro_equipo,
          claro_linea,
          prestamo_personal,
          descuento_facturas,
          pension_alimenticia,
          impuesto_larenta,
          descuento_dias_notrabajados,
          atrasos,
          multa,
          otros_descuentos,
          otros_descuentos_contribucion,
          total_egresos,
          total_recibir, 
          }= req.body;
        let miRolEmpleado;
        if (id!==null && id!==undefined){
          miRolEmpleado = await db.RolPago.update({
            empleadoId,
            empresaId,
            areaId,
            fecha,
            enfermedad,
            maternidad,
            enf_mat,
            maternidad_dias,
            contrato_dias,
            desbloqueo_vacaciones,
            parametro_fondo_reserva,
            parametro_iess_personal,
            parametro_iess_dependiente,
            parametro_maternidad,
            parametro_sueldo_basico,
            sueldo,
            dias_laborados,
            sueldo_unificado,
            sobretiempo,
            bonificacion_produccion,
            otros_ingresos,
            vacaciones,
            vacaciones_pagadas,
            fondo_reserva,
            dts,
            dcs,
            total_ingresos,
            iess_personal,
            iess_dependiente,
            anticipo,
            otros_anticipos,
            iess_pq,
            iess_ph,
            comisariato,
            farmacia,
            genesis,
            seguro_medico,
            claro_equipo,
            claro_linea,
            prestamo_personal,
            descuento_facturas,
            pension_alimenticia,
            impuesto_larenta,
            descuento_dias_notrabajados,
            atrasos,
            multa,
            otros_descuentos,
            otros_descuentos_contribucion,
            total_egresos,
            total_recibir,            
            updatedAt: Date.now(),
            },{
            where: {
              id,
            },});           
        }else{

          const existeRolDePago = await db.RolPago.findOne({where: { 
            fecha, 
            empleadoId           
            }}); 
            console.log("Verificar-ROl: "+existeRolDePago);
          if (existeRolDePago===null || existeRolDePago===undefined){ 
            miRolEmpleado = await db.RolPago.create({
              empleadoId,
              empresaId,
              areaId,
              fecha,
              enfermedad,
              maternidad,
              enf_mat,
              maternidad_dias,
              contrato_dias,
              desbloqueo_vacaciones,
              parametro_fondo_reserva,
              parametro_iess_personal,
              parametro_iess_dependiente,
              parametro_maternidad,
              parametro_sueldo_basico,
              sueldo,
              dias_laborados,
              sueldo_unificado,
              sobretiempo,
              bonificacion_produccion,
              otros_ingresos,
              vacaciones,
              vacaciones_pagadas,
              fondo_reserva,
              dts,
              dcs,
              total_ingresos,
              iess_personal,
              iess_dependiente,
              anticipo,
              otros_anticipos,
              iess_pq,
              iess_ph,
              comisariato,
              farmacia,
              genesis,
              seguro_medico,
              claro_equipo,
              claro_linea,
              prestamo_personal,
              descuento_facturas,
              pension_alimenticia,
              impuesto_larenta,
              descuento_dias_notrabajados,
              atrasos,
              multa,
              otros_descuentos,
              otros_descuentos_contribucion,
              total_egresos,
              total_recibir,   
              createdAt:Date.now(),
              }
              );
            }else{
              return res.status(500).send({ message: 'Something bad happened!',error:'ya existe'})
            }
        }
        if (miRolEmpleado.id){
          console.log('Crear Rol ' +miRolEmpleado.id+' Empleado '+empleadoId);
        }else{
          console.log('Actualizar Rol ' +id+' Empleado '+empleadoId);
        }
        
        const response = {
          mensaje: 'Lista registrada exitosamente.',
          result: miRolEmpleado,        
        };
        return res.send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };

  exports.getRolesEmpleados = async (req, res) => {
    await validateRequest(req);
      try {  
        const { fecha } = req.query       
        let query = {
          where: { 
            fecha:Date.parse(fecha),             
          },
          include: [{
            model: db.Empleado,          
          },{
            model: db.Empresa,          
          },{
            model: db.Area,          
          }],
          order: [         
            [db.Empresa, 'id', 'ASC'],
            [db.Area, 'prioridad', 'ASC'],
            [db.Empleado,'apellido_paterno', 'ASC'],       
            [db.Empleado,'apellido_materno', 'ASC'],
            [db.Empleado,'primer_nombre', 'ASC'], 
            [db.Empleado,'segundo_nombre', 'ASC'], 
          ]              
        };
        const sqlresult = await db.RolPago.findAndCountAll(query);      
        
        const response = { 
          count:sqlresult.count,
          result:sqlresult.rows,
        };
        return res.status(200).send(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('ERROR', error);
        const responseError = {
          message: 'Something bad happened!',
          error: error.stack,
        };
        return res.status(500).send(JSON.stringify(responseError));
      }
    };

    exports.envioCorreo = async (req, res) => {
      await validateRequest(req);
        try {  
          const { fecha,empleadoId } = req.query       
          let query = {
            where: { 
              empleadoId,
              fecha:Date.parse(fecha),             
            },
            include: [{
              model: db.Empleado,          
            },{
              model: db.Empresa,          
            },{
              model: db.Area,          
            }],
            order: [         
              [db.Empresa, 'id', 'ASC'],
              [db.Area, 'prioridad', 'ASC'],
              [db.Empleado,'apellido_paterno', 'ASC'],       
              [db.Empleado,'apellido_materno', 'ASC'],
              [db.Empleado,'primer_nombre', 'ASC'], 
              [db.Empleado,'segundo_nombre', 'ASC'], 
            ]              
          };          
          const sqlresult = await db.RolPago.findOne(query); 
          let rol =sqlresult;          
          let rolNombre=rol.Empleado.apellido_paterno+" "+rol.Empleado.primer_nombre;
          let info;
          let response = { 
            tipo:"success",
            mensaje:"Correo Enviado "+rolNombre,
          };
          if (rol.Empleado.correo!=='' && rol.Empleado.correo!==null && rol.Empleado.correo!==undefined ){
            let mailOptions = {
              from: '"Nomina Ecuavia" <notificacionesecuavia@gmail.com>', 
              to: rol.Empleado.correo, 
              subject: "Rol "+rolNombre+" "+rol.fecha,
              text: "", 
              html: htmlCorreo(rol,rolNombre), 
            };

            info = await transporter.sendMail(mailOptions,function(err, data) {
              if (err) {
                console.log("Error " + err);
                response.tipo="error"
                response.mensaje="Error " + err;
              } 
            });  
          }else{
            response.tipo="error"
            response.mensaje="No tiene Configurado Correo";
          }
          
         
          return res.status(200).send(response);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('ERROR', error);
          const responseError = {
            message: 'Something bad happened!',
            error: error.stack,
          };
          return res.status(500).send(JSON.stringify(responseError));
        }
      };

      exports.envioCorreoMasivo = async (req, res) => {
        await validateRequest(req);
          try {  
            const { fecha } = req.query       
            let query = {
              where: {                 
                fecha:Date.parse(fecha),             
              },
              include: [{
                model: db.Empleado,          
              },{
                model: db.Empresa,          
              },{
                model: db.Area,          
              }],
              order: [         
                [db.Empresa, 'id', 'ASC'],
                [db.Area, 'prioridad', 'ASC'],
                [db.Empleado,'apellido_paterno', 'ASC'],       
                [db.Empleado,'apellido_materno', 'ASC'],
                [db.Empleado,'primer_nombre', 'ASC'], 
                [db.Empleado,'segundo_nombre', 'ASC'], 
              ]              
            };            
            let index=0;
            const sqlresult = await db.RolPago.findAndCountAll(query); 
            const noEnviados=[];
            //for (rol of sqlresult.rows){ 
              sqlresult.rows.forEach(function (rol, index) {              
              setTimeout(async function () {           
                let rolNombre=rol.Empleado.apellido_paterno+" "+rol.Empleado.primer_nombre;
                console.log(rolNombre);
                let info;
                if (rol.Empleado.correo!=='' && rol.Empleado.correo!==null && rol.Empleado.correo!==undefined && rol.Empleado.envio_correo===true){
                  let mailOptions = {
                    from: '"Nomina Ecuavia" <rolesecuavia@gmail.com>', 
                    to: rol.Empleado.correo, 
                    subject: "Rol "+rolNombre+" "+rol.fecha,
                    text: "", 
                    html: htmlCorreo(rol,rolNombre), 
                  };
      
                  info = await transporter.sendMail(mailOptions,function(err, data) {
                    if (err) {
                      console.log("Error " + err);                      
                      noEnviados.push(rolNombre);
                    } else{
                      console.log("Enviado "+rolNombre)
                    }
                  });  
                }else{
                  noEnviados.push(rolNombre);
                }                
              }, 2000 * (index + 1));              
            }); 
            setTimeout(async function () { 
              const response = {             
                result:noEnviados,
              };
              return res.status(200).send(response);    

            }, 2000 * sqlresult.count);   
            
           
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('ERROR', error);
            const responseError = {
              message: 'Something bad happened!',
              error: error.stack,
            };
            return res.status(500).send(JSON.stringify(responseError));
          }
        };

      const htmlCorreo = (rol,rolNombre) =>{
        let html="";
        let estilo="";
        let cabecera="";
        let pie="";
        let detalle="";        
        let ingresos=[];
        let egresos=[];
        let mayor;        
          if (!verificarVacioCero(rol.sueldo_unificado))
          ingresos.push({nombre:'Sueldo Unificado',valor:rol.sueldo_unificado});
          if (!verificarVacioCero(rol.sobretiempo))
          ingresos.push({nombre:'Sobretiempo',valor:rol.sobretiempo});
          if (!verificarVacioCero(rol.bonificacion_produccion))
          ingresos.push({nombre:'Bonificacion Produccion',valor:rol.bonificacion_produccion});
          if (!verificarVacioCero(rol.otros_ingresos))
          ingresos.push({nombre:'Otros Ingresos',valor:rol.otros_ingresos});
          if (!verificarVacioCero(rol.vacaciones))
          ingresos.push({nombre:'Vacaciones',valor:rol.vacaciones});
          if (!verificarVacioCero(rol.vacaciones_pagadas))
          ingresos.push({nombre:'Vacaciones Pagadas',valor:rol.vacaciones_pagadas});
          if (!verificarVacioCero(rol.fondo_reserva))
          ingresos.push({nombre:'Fondo Reserva',valor:rol.fondo_reserva});
          if (!verificarVacioCero(rol.dts))
          ingresos.push({nombre:'Decimo Tercero',valor:rol.dts});
          if (!verificarVacioCero(rol.dcs))
          ingresos.push({nombre:'Decimo Cuarto',valor:rol.dcs});
                    
          if (!verificarVacioCero(rol.iess_personal))
          egresos.push({nombre:'IESS '+rol.parametro_iess_personal+'%',valor:rol.iess_personal});
          if (!verificarVacioCero(rol.iess_dependiente))
          egresos.push({nombre:'IESS '+rol.parametro_iess_personal+'%',valor:rol.iess_dependiente});          
          if (!verificarVacioCero(rol.anticipo))
          egresos.push({nombre:'Anticipo',valor:rol.anticipo});
          if (!verificarVacioCero(rol.otros_anticipos))
          egresos.push({nombre:'Otros Anticipos',valor:rol.otros_anticipos});
          if (!verificarVacioCero(rol.iess_pq))
          egresos.push({nombre:'IESS P.Q.',valor:rol.iess_pq});
          if (!verificarVacioCero(rol.iess_ph))
          egresos.push({nombre:'IESS P.H',valor:rol.iess_ph});
          if (!verificarVacioCero(rol.comisariato))
          egresos.push({nombre:'Comisariato',valor:rol.comisariato});
          if (!verificarVacioCero(rol.farmacia))
          egresos.push({nombre:'Farmacia',valor:rol.farmacia});
          if (!verificarVacioCero(rol.genesis))
          egresos.push({nombre:'Genesis',valor:rol.genesis});
          if (!verificarVacioCero(rol.seguro_medico))
          egresos.push({nombre:'Seguro Medico',valor:rol.seguro_medico});
          if (!verificarVacioCero(rol.claro_equipo))
          egresos.push({nombre:'Claro Equipo/Sim/Adendum',valor:rol.claro_equipo});
          if (!verificarVacioCero(rol.claro_linea))
          egresos.push({nombre:'Claro Linea',valor:rol.claro_linea});
          if (!verificarVacioCero(rol.prestamo_personal))
          egresos.push({nombre:'Prestamo personal',valor:rol.prestamo_personal});
          if (!verificarVacioCero(rol.descuento_facturas))
          egresos.push({nombre:'Descuento facturas',valor:rol.descuento_facturas});
          if (!verificarVacioCero(rol.pension_alimenticia))
          egresos.push({nombre:'Pension alimenticia',valor:rol.pension_alimenticia});
          if (!verificarVacioCero(rol.impuesto_larenta))
          egresos.push({nombre:'Immpuesto a la renta',valor:rol.impuesto_larenta});
          if (!verificarVacioCero(rol.descuento_dias_notrabajados))
          egresos.push({nombre:'Descuento dias no trabajados',valor:rol.descuento_dias_notrabajados});
          if (!verificarVacioCero(rol.atrasos))
          egresos.push({nombre:'Atrasos',valor:rol.atrasos});
          if (!verificarVacioCero(rol.multa))
          egresos.push({nombre:'Multa',valor:rol.multa});
          if (!verificarVacioCero(rol.otros_descuentos))
          egresos.push({nombre:'Otros descuentos',valor:rol.otros_descuentos});
          if (!verificarVacioCero(rol.otros_descuentos_contribucion))
          egresos.push({nombre:'Otros escuentos contribucion',valor:rol.otros_descuentos_contribucion});

          mayor=ingresos.length>egresos.length?ingresos.length:egresos.length;
          
          estilo=
            "<style>"
            +" .linea-abajo {"
            +"  border-bottom: 1px solid black;"
            +"  border-collapse: collapse;"
            +" }"                        
            +"</style>";

          cabecera=  
            "<tr>"
            +"<td><b>EMPRESA:</b></td> <td><p>"+rol.Empresa.nombre+"</p></td>"            
            +"<td style='width: 50px'></td>"            
            +"<td><b>AREA:</b></td> <td>"+rol.Area.nombre+"</td>"
            +"</tr>"
            +"<tr>"
            +"<td><b>EMPLEADO:</b></td> <td><p >"+rolNombre+"</p></td>"
            +"<td style='width: 50px'></td>"            
            +"<td><b>SUELDO:</b></td> <td><p style='text-align: right'>"+formatMiles(rol.sueldo)+"</p></td>"
            +"</tr>"
            +"<tr >"
            +"<td ><b>LIQUIDACION:</b></td> <td ><p >"+rol.fecha+"</p></td>"
            +"<td style='width: 50px'></td>"            
            +"<td ><b>DIAS TRAB:</b></td> <td ><p style='text-align: right'>"+parseInt(rol.dias_laborados)+"</p></td>"
            +"</tr>"
            +"<tr >"
            +"<td class='linea-abajo' COLSPAN=5></td>"            
            +"</tr> "
            ; 
          
          
          
          for (let index=0;index<mayor;index++){
            let iNombre=(index<ingresos.length)? ingresos[index].nombre.toString():("");
            let iValor=(index<ingresos.length)?ingresos[index].valor.toString():("");
            let eNombre= (index<egresos.length)?egresos[index].nombre.toString():("")
            let eValor=(index<egresos.length)?egresos[index].valor.toString():("");

            detalle=detalle+ 
            "<tr>"
            +"<td><p>"+ iNombre+"</p></td> "
            +"<td><p style='text-align: right'>"+formatMiles(iValor)+"</p></td>"            
            +"<td style='width: 50px'></td>"            
            +"<td><p>"+eNombre +"</p></td> "
            +"<td><p style='text-align: right'>"+formatMiles(eValor) +"</p></td>"            
            +"</tr>"
            +"<tr>";
          }  

          pie=
          "<tr>"
          +"<td class='linea-abajo' COLSPAN=5></td>"            
          +"</tr> "
          +"<tr>"
          +"<td ><b>Total Ingresos</b></td> <td ><b><p style='text-align: right'>"
          +formatMiles(rol.total_ingresos.toString())+"</p></b></td>"
          +"<td style='width: 50px'></td>"            
          +"<td ><b>Total Egresos</b></td> <td ><b><p style='text-align: right'>"
          +formatMiles(rol.total_egresos.toString())+"</p></b></td>"
          +"</tr>"          
          +"<tr>"
          +"<td><b>Total Recibir</b></td> <td ><b><p style='text-align: right'>"
          +formatMiles(rol.total_recibir.toString())+"</p></b></td>"          
          +"</tr>"
          ;           
          
            html=estilo
            +"<table>" 
            +cabecera 
            +detalle 
            +pie 
            +"</table>";
        return html;
      }

      const verificarVacioCero = (valor) =>{
        return (valor==='' 
        || valor===null 
        || valor===undefined 
        || valor===0
        || valor==='0'
        || valor==='0.00')?true:false;
    }

    const formatMiles =(valor)=>{
      valor = valor.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
      valor = valor.split('').reverse().join('').replace(/^[\.]/,'')
      valor = valor.replace(/^\,/,'');     
      return valor;
    }

  