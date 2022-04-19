var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ducthinh.dummy@gmail.com',
        pass: 'saobietduoc'
    }
})

module.exports = transporter