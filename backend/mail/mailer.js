//ReqiuredFrameworks;
var nodemailer = require('nodemailer');
//var transporter = nodemailer.createTransport('smtps://mobius1333%40gmail.com:castillo1@smtp.gmail.com');

module.exports = function ()
{

    var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL,
                      // you can try with TLS, but port is then 587
        auth: {
            user: 'mobius1333@gmail.com', // Your email id
            pass: 'castillo1' // Your password
        }
    };

    var transporter = nodemailer.createTransport(smtpConfig);

    function sendEmail( req, res, next )
    {
        var data = req.body;

        var mailOptions =
        {
            from : data.email ,
            to   : 'ecast333@gmail.com',
            subject : 'Email: ' + data.email + ' Name: '+ data.name,
            text : data.message
            //html: '<b>Hello world ?</b>' // html body
        };

        transporter.sendMail( mailOptions,  function ( error, data )
        {
            if( error )
            {
                console.log( error ) ;
                return res.status( 401 ).send({
                    success: false,
                    message: "Mail Not sent"
                } );
            }

           return res.json( data );
        })

    }

    var service =
    {
        sendEmail: sendEmail
    };

    return service;

};