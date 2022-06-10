const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const path = require('path');

function _send(transporter, action){
    return new Promise((resolve,reject) => {      
        let mailOptions = {
            from: action.params.FROM, 
            to: action.params.TO, 
            cc: action.params.CC,
            bcc: action.params.BCC,
            subject: action.params.SUBJECT, 
            text: action.params.TEXT, 
            html: action.params.HTML 
        };

        if(action.params.attachmentPath){
            mailOptions.attachments = [
                {
                    filename: path.parse(action.params.attachmentPath).base,
                    path: action.params.attachmentPath
                }
            ]
        }
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            resolve(info);
        });
    })
}

function sendMailByService(action, settings){
        const service = action.params.SERVICE || settings.SERVICE;
        const apiKey = action.params.apiKey || settings.apiKey;
        const user = action.params.USERNAME || settings.USERNAME;
        const pass = action.params.PASSWORD || settings.PASSWORD;

        let transporter;
        if(service == 'SendGrid'){
            transporter = nodemailer.createTransport(
                nodemailerSendgrid({
                    apiKey: apiKey
                })
            )
        } else {
            let transporterOptions = {
                service: service
            };
            if (apiKey){
                transporterOptions.auth = {
                    api_key : apiKey
                }
            } else {
                transporterOptions.auth = {
                    user: user, 
                    pass: pass
                }
            }
            transporter = nodemailer.createTransport(transporterOptions);

        }
    
    return _send(transporter, action);    
    
}
function sendMailBySMTP(action, settings){
        let transporter = nodemailer.createTransport({
            host:action.params.HOST,
            port:action.params.PORT,
            secure: (action.params.PORT == 465) ? true:false,
            auth: {
                user: action.params.USERNAME, 
                pass: action.params.PASSWORD 
            }
        });

        return _send(transporter, action);
}

module.exports = {
    sendMailByService:sendMailByService,
    sendMailBySMTP:sendMailBySMTP
}
