const app = require("express")();
const bodyParser = require("body-parser");
const mailer = require("nodemailer");

var transport = mailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b018f6d06fb8b9",
    pass: "6a0c5d7aa57874"
  }
});

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const message = {
    from: "victor@pragana.com.br",
    to: "victor@pragana2.com.br",
    subject: "teste de email",
    text: "lorem ipsum alguma coisa"
  };

  transport.sendMail(message, (err, info) => {
    if (err) return res.json(400).send(err);

    return res.status(200).send("enviou");
  });

  return res.status(200).end();
});

app.listen(5000);
