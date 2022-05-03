import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import FormStyle from "./style";
import Loader from "../Loader";

type boolSetState = Dispatch<SetStateAction<boolean>>;

interface sendReqSetters {
  sent: boolSetState;
  gotResponse: boolSetState;
  success: boolSetState;
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

  const jsonRes = await response.json();
  const okay = Object.keys(jsonRes).reduce((accu: any, item: string) => {
    if (jsonRes[item].response.split(" ").includes("Ok:")) accu = true;
    return accu;
  }, false);
  if (okay) setState.success(true);
};

const Success = () => <h2>Message sent :)</h2>;
const Failure = () => <h2>That didnt work :/</h2>;

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const [success, setSuccess] = useState(false);

  const Feedback = () => {
    if (sent && !gotResponse) {
      return <Loader />;
    } else if (gotResponse) {
      if (success) {
        return <Success />;
      } else {
        return <Failure />;
      }
    } else return <input type="submit" value="Send" />;
  };

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  type InputChangeEvent = ChangeEvent<HTMLInputElement>;
  type TextareaChangeEvent = ChangeEvent<HTMLTextAreaElement>;

  const handleChange = (e: InputChangeEvent | TextareaChangeEvent) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") setName(value);
    if (name === "email") setMail(value);
    if (name === "message") setMessage(value);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log("name:", name, "mail:", mail, "message:", message);
    if (name && mail && message)
      sendMail(name, mail, message, {
        sent: setSent,
        gotResponse: setGotResponse,
        success: setSuccess,
      });
  };

  return (
    <FormStyle>
      <form onSubmit={submit}>
        <input
          required
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Who are you?"
        />
        <input
          required
          name="email"
          value={mail}
          onChange={handleChange}
          type="email"
          placeholder="What's your email adress?"
        />
        <textarea
          required
          name="message"
          onChange={handleChange}
          rows={5}
          placeholder="You can tell me anything!"
        />
        <Feedback />
      </form>
    </FormStyle>
  );
};

export default ContactForm;
