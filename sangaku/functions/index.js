const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// Sending the request
exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Getting query parameter from http request
    const to = req.body.data.to;
    // const to = req.query.to;
    const msg = req.body.data.msg;

    const mailOptions = {
      from: gmailEmail,
      to: to,
      subject: '[通知] 産学連携協力会',
      html: `${msg}`
    };

    // Getting results
    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro){
        // res.json({data: "req: " + req.body + to + "," + msg + " "+ erro.toString()});
        res.json({data: "[req] " + to });
      }
      res.json({data: "sended " + to + ", " + msg});
    });
  });
});

// exports.sendMail = functions.https.onCall((req, res) => {
//   const to = req.query.to;
//   const msg = req.query.msg;
//
//   const mailOptions = {
//     from: gmailEmail,
//     to: to,
//     subject: '[通知] 産学連携協力会',
//     html: `${msg}`
//   };
//
//   return transporter.sendMail(mailOptions, (erro, info) => {
//     if(erro){
//       res.send({"error": gmailEmail + "," + gmailPassword + " "+ erro.toString()});
//     }
//     res.send('Sended');
//   });
// });
