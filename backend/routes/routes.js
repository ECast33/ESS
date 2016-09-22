var express = require('express'),
    router = express.Router(),
    mailer = require('../mail/mailer')();

router.route('/mail').post( mailer.sendEmail );



module.exports = router;
