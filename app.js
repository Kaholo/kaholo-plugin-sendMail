const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const { sendWithTransporter } = require("./mail-service");

function sendMailByService(action, settings) {
  const service = action.params.SERVICE || settings.SERVICE;
  const apiKey = action.params.apiKey || settings.apiKey;
  const user = action.params.USERNAME || settings.USERNAME;
  const pass = action.params.PASSWORD || settings.PASSWORD;

  let transporter;
  if (service === "SendGrid") {
    transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey,
      }),
    );
  } else {
    const transporterOptions = {
      service,
    };
    if (apiKey) {
      transporterOptions.auth = {
        api_key: apiKey,
      };
    } else {
      transporterOptions.auth = {
        user,
        pass,
      };
    }
    transporter = nodemailer.createTransport(transporterOptions);
  }

  return sendWithTransporter(transporter, action);
}
function sendMailBySMTP(action) {
  const transporter = nodemailer.createTransport({
    host: action.params.HOST,
    port: action.params.PORT,
    secure: (action.params.PORT === 465),
    auth: {
      user: action.params.USERNAME,
      pass: action.params.PASSWORD,
    },
  });

  return sendWithTransporter(transporter, action);
}

module.exports = {
  sendMailByService,
  sendMailBySMTP,
};
