const path = require("path");

function sendWithTransporter(transporter, action) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: action.params.FROM,
      to: action.params.TO,
      cc: action.params.CC,
      bcc: action.params.BCC,
      subject: action.params.SUBJECT,
      text: action.params.TEXT,
      html: action.params.HTML,
    };

    if (action.params.attachmentPath) {
      mailOptions.attachments = [
        {
          filename: path.parse(action.params.attachmentPath).base,
          path: action.params.attachmentPath,
        },
      ];
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
}

module.exports = {
  sendWithTransporter,
};
