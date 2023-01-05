import { Dispatch, SetStateAction } from "react";

type BoolSetState = Dispatch<SetStateAction<boolean>>;

interface sendReqSetters {
  sent: BoolSetState;
  gotResponse: BoolSetState;
  success: BoolSetState;
}

const sendMail = async (
  name: string,
  mailAdress: string,
  message: string,
  setState: sendReqSetters
) => {
  const reqObj = {
    name: name,
    mailAdress: mailAdress,
    message: message,
  };

  setState.sent(true);

  const response = await fetch("/api/mailer", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(reqObj),
  });

  response ? setState.gotResponse(true) : null;

  let jsonRes = await response.json();
  const okay = Object.keys(jsonRes).reduce((accu: any, item: string) => {
    if (jsonRes[item].response.split(" ").includes("Ok:")) accu = true;
    return accu;
  }, false);
  if (okay) setState.success(true);
};

export default sendMail;
