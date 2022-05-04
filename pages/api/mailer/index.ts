import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

import { emailHtml } from "./emailHtml";

interface MailArgs {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const sendMail = async (mailObj: MailArgs) => {
  const transporter = nodemailer.createTransport({
    host: "mail.lima-city.de",
    port: 465,
    auth: {
      user: "mail@moritzbecker.de",
      pass: "t8AXsN4xsZZNTVEy",
    },
  });

  const info = await transporter.sendMail(mailObj);
  console.log(info);
  return info;
};

const handleContact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.url) {
    const hostname = new URL(req.url, `http://${req.headers.host}`).hostname;
    if (
      req.method === "POST" &&
      hostname ===
        ("localhost" ||
          "127.0.0.1" ||
          "moritzbecker.de" ||
          "www.moritzbecker.de")
    ) {
      const { name, mailAdress, message } = req.body;
      // mail for informing me
      const myMailObj: MailArgs = {
        from: '"moritzbecker.de | contact form"<mail@moritzbecker.de>',
        to: "info@moritzbecker.de",
        subject: `New message from ${name}`,
        text: message,
      };
      const myInfo = await sendMail(myMailObj);

      // mail for the contactee
      const mailObj: MailArgs = {
        from: '"Moritz Becker | moritzbecker.de"<mail@moritzbecker.de>',
        to: mailAdress,
        subject: `Thank you for your message ${name}!`,
        html: emailHtml,
      };
      const info = await sendMail(mailObj);
      const resObj = { myInfo: myInfo, info: info };

      res.status(200).json(JSON.stringify({resp: resObj, reqHost: hostname}));
    }
  }
};

export default handleContact;
