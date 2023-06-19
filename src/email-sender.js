var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    secureConnection: false,
    auth: {
        user: 'nodetestmail2023@gmail.com',
        pass: 'Micr@s#ft'
    }
});
var mailOptions = {
    from: 'nodetestmail2023@gmail.com',
    to: 'taiebmehrez1986@gmail.com',
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