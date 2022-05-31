# Kaholo Sendmail Plugin
This plugin enables Kaholo pipelines to send email, either by service or by SMTP. It makes use of the [Nodemailer](https://www.npmjs.com/package/nodemailer) npm package.

Both text and HTML may be sent in the same email. Whether the recipient sees the text version, the HTML version or both depends on which email client they use to view the email and how it is configured. Typically if both are included only the HTML version will be made visible to the recipient.

## Access and Authentication
To use the plugin you will need access and authentication to some kind of email server or service. The credentials required depend on which method you use, SMTP or a service such as Gmail, iCloud, Outlook365, etc.

For SMTP you will need:
 * The DNS name or IP address of an SMTP server
 * The port number to use, typically 25 but may vary
 * A username with sufficient privilege to send outgoing emails
 * A password

For one of the various services you will need:
 * An API Key of some kind
 * A username
 * A password

In some instances username and password may not be required, but this is increasingly uncommon.

***CAUTION*** Email services and SMTP servers are common targets for attack in order to repurpose them to send spam and other nefarious email. Be sure to use a secure method and protect the credentials appropriately.

There may also be restrictions regarding what email addresses can be used and the frequency and total number of emails that can be sent. If your service or SMTP server denies you access the specific reason can usually be found in the error message in Activity Log. For example, the following is an error provided by the gmail service, and the reason for the error is because 2-factor authentication is enabled but this plugin does not support 2-factor authentication.

     Error: Invalid login: 534-5.7.9 Application-specific password required. Learn more at https://support.google.com/mail/?p=InvalidSecondFactor

## Plugin Installation
For download, installation, upgrade, downgrade and troubleshooting of plugins in general, see [INSTALL.md](./INSTALL.md).

## Plugin Settings
Plugin settings act as default parameter values. If configured in plugin settings, the action parameters may be left unconfigured. Action parameters configured anyway over-ride the plugin-level settings for that Action.
1. Services (Options) **Optional** - The default service to send mail with.
2. API Key (Options) **Optional** - The default API Key to authenticate with.
3. Username (String) **Optional** - The default username to authenticate with.
4. Password (Vault) **Optional** - The default password to authenticate with.

## Method: Send Mail by Service
Send a email using the specified service. Parameter Services provides a drop-down list of over 40 email services from which you may choose a supported service. These include:

 * 126
 * 163
 * 1und1
 * AOL
 * DebugMail
 * DynectEmail
 * FastMail
 * GandiMail
 * Gmail
 * Godaddy
 * GodaddyAsia
 * GodaddyEurope
 * hot.ee
 * Hotmail
 * iCloud
 * mail.ee
 * Mail.ru
 * Maildev
 * Mailgun
 * Mailjet
 * Mailosaur
 * Mandrill
 * Naver
 * OpenMailBox
 * Outlook365
 * Postmark
 * QQ
 * QQex
 * SendCloud
 * SendGrid
 * SendinBlue
 * SendPulse
 * SES
 * SES-US-EAST-1
 * SES-US-WEST-2
 * SES-EU-WEST-1
 * Sparkpost
 * Yahoo
 * Yandex
 * Zoho
 * qiye.aliyun


### Parameters:
1. Services (Options) **Required** - Select the service you use to send email.
2. API Key (Options) **Optional** - The API Key used to authentiate with the selected service.
3. Username (String) **Optional** - The username if required.
4. Password (Vault) **Optional** - The password if required.
5. From (String) **Required** - The email address of the sender of the email, e.g. `kaholo-pipeline@myorg.com`.
6. To (String) **Required** - The email addresses of the receivers. To enter multiple values, separate the values with commas.
7. cc (String) **Optional** - The email addresses of the receivers who will appear in the cc field. To enter multiple values, separate the values with commas.
8. bcc (String) **Optional** - The email addresses of the receivers who will appear in the bcc field. To enter multiple values, separate the values with commas.
9. Message subject (String) **Required** - The subject of the email.
10. Plaintext message (String) **Optional** - The plaintext version of the message.
11. HTML message (HTML String) **Optional** - The HTML version of the message.
12. Attachment Path (String) **Optional** - Path to a file on the Kaholo agent to attach to this email.

## Method: Send Mail by SMTP
TThere may be restrictions regarding what email addresses can be used and the frequency and total number of emails that can be sent. You will need a minimum of Host and Port, but likely also Username and Password to use SMTP. If your service denies you access the specific reason can usually be found in the error message in Activity Log.

### Parameters:
1. Host (String) **Required** - The address of the SMTP host to send the email to.
2. Port (String) **Required** - The port the SMTP service listens on.
3. Username (String) **Optional** - The username to authenticate with.
4. Password (Vault) **Optional** - The password to authenticate with.
5. From (String) **Required** - The email address of the sender.
6. To (String) **Required** - The email addresses of the receivers. To enter multiple values, separate the values with commas.
7. cc (String) **Optional** - The email addresses of the receivers who will appear in the cc field. To enter multiple values, separate the values with commas.
8. bcc (String) **Optional** - The email addresses of the receivers who will appear in the bcc field. To enter multiple values, separate the values with commas.
9. Message subject (String) **Required** - The subject of the email.
10. Plaintext message (String) **Optional** - The plaintext version of the message.
11. HTML message (HTML String) **Optional** - The HTML version of the message.
12. Attachment Path (String) **Optional** - Path to a file to attach to this email.
