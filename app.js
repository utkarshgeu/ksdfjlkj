require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password,
    },
});

const mailOptions = {
    from: process.env.Email_User,
    to: process.env.Email_User,
    subject: "test email",
    text: "test",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);  // Use "error" here instead of "err"
    }

    console.log(info.response);
});
