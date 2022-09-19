const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENGRID_KEY);

const sendMail = async (mail) => {
  const email = { ...mail, from: "militiasmilpitas@gmail.com" };
  await sgMail.send(email);
};

module.exports = sendMail;
