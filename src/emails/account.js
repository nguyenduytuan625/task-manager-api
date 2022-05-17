const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const businessEmail = 'nguyenduytuan@zohomail.com'

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: businessEmail,
        subject: 'Thanks for joing in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelatioEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: businessEmail,
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. I hope to see you back sometimes soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelatioEmail
}