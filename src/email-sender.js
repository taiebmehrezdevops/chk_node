var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: "gmail", // hostname
  auth: {
      user: "taiebmehrez1986@gmail.com",
      pass: "rrviauzranzyblfv"
  },
  tls: {
      rejectUnauthorized: false
  }
});
var mailOptions = {
    from: 'taiebmehrez1986@gmail.com',
    to: 'taieb.mehrez.esprit@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 