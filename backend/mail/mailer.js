//ReqiuredFrameworks;
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://mobius1333%40gmail.com:castillo1@smtp.gmail.com');
//var transporter = nodemailer.createTransport();

module.exports = function ()
{

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