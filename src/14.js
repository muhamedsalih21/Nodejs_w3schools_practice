//node mailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muha15125.it@rmkec.ac.in',
    pass: 'Ziad280358'
  }
});

var mailOptions = {
  from: 'muha15125.it@rmkec.ac.in',
  to: 'muhamedsalih21@gmail.com',
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
