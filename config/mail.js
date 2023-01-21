nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'notificacionesecuavia@gmail.com', // generated ethereal user
      pass: 'cndundbqwrqdgfmw', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log("Ready for send");
  }
  );

  module.exports = {transporter};