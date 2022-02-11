# kaholo-plugin-sendMail
Kaholo plugin to send emails either by service or by SMTP.

## Settings
1. Services (Options) **Optional** - The default service to send mail with.
2. API Key (Options) **Optional** - The default API Key to authenticate with.
3. Username (String) **Optional** - The default username to authenticate with.
4. Password (Vault) **Optional** - The default password to authenticate with.

## Method: Send mail by service
Send a email using the specified service.

### Parameters:
1. Services (Options) **Optional** - The service to send this email with.
2. API Key (Options) **Optional** - The API Key to authenticate with.
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

## Method: Send mail by SMTP
Send a email using SMTP.

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
