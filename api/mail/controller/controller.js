const transporter = require ('../service/settings')
const Mail = require('../model/Mail')

exports.sendmail = async function(req, res) {
    var mailOptions = {
        from: 'dustin.justfortesting@gmail.com',
        to: 'ducthinh481994@gmail.com',
        subject: 'City Hunt ' + req.body.user + ' feedback',
        text: req.body.email
    };
    try {
        await transporter.sendMail(mailOptions)
        res.send('Email sent')
        console.log('Email sent');
    } catch(e) {
        console.log(e);
    }
}

exports.sendmailtoDB = async function(req,res) {
    let mail = new Mail({
        user: req.body.user,
        platform: req.body.platform,
        email: req.body.email
    })
    try {
        mail = await mail.save()
        res.send(mail)
        console.log(mail)
    } catch(e) {
        res.send(e)
        console.log(e)
    }
}