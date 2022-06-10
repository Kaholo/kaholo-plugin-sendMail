const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const kaholoPluginLibrary = require("@kaholo/plugin-library");
const { sendWithTransport } = require("./mail-service");

function sendMailByService({
  SERVICE: service,
  USERNAME: user,
  PASSWORD: pass,
  apiKey,
  ...mailingDetails
}) {
  let transportCreationOptions;

  if (service === "SendGrid") {
    transportCreationOptions = nodemailerSendgrid({
      apiKey,
    });
  } else {
    transportCreationOptions = {
      service,
      auth: (
        apiKey ? {
          api_key: apiKey,
        } : {
          user,
          pass,
        }
      ),
    };
  }

  const transport = nodemailer.createTransport(transportCreationOptions);
  return sendWithTransport(transport, mailingDetails);
}

function sendMailBySMTP({
  HOST: host,
  PORT: port,
  USERNAME: user,
  PASSWORD: pass,
  ...mailingDetails
}) {
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return sendWithTransport(transport, mailingDetails);
}

module.exports = kaholoPluginLibrary.bootstrap({
  sendMailByService,
  sendMailBySMTP,
});
