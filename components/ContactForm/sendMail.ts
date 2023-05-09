import { Dispatch, SetStateAction } from "react";

interface sendReqSetters {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean | null>>;
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

  const { setLoading, setIsSuccess } = setState;

  setLoading(true);

  try {
    await fetch("/api/mailer", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqObj),
    });
    setIsSuccess(true);
  } catch (e) {
    console.error(e);
    setIsSuccess(false);
  } finally {
    setLoading(false);
  }
};

export default sendMail;
