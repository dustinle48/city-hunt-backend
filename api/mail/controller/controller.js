const transporter = require ('../service/settings')

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