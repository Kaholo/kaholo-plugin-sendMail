const path = require("path");

function sendWithTransport(transporter, {
  attachmentPath,
  ...mailOptions
}) {
  const correctedMailOptions = Object.fromEntries(
    Object.entries(mailOptions).map(([key, value]) => [key.toLowerCase(), value]),
  );

  if (attachmentPath) {
    correctedMailOptions.attachments = [
      {
        filename: path.parse(attachmentPath).base,
        path: attachmentPath,
      },
    ];
  }

  return transporter.sendMail(correctedMailOptions);
}

module.exports = {
  sendWithTransport,
};
