const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const aut = require('./auth');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/form', (req,res) =>{

    console.log(req.body)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>First Name: ${req.body.first_name}</li>
            <li>Last Name: ${req.body.last_name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h4>Subject</h4>
        <p>${req.body.subject}</p>
        <h4>Message</h4>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: aut.user,
              pass: aut.pass,
            }

        })
        
        let mailOptions = {
            from: aut.user,
            to: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
            html: htmlEmail
        } 
        transporter.sendMail(mailOptions, (err, info) =>{
            if(err) {
                return console.log(err)
            }
            console.log("Message Send", info.message)
        })

   })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server listing to port ${PORT}`)
})