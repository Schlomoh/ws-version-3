import React, { ChangeEvent, FormEvent, useState } from "react";
import FormStyle from "./style";
import sendMail from "./sendMail";
import { MoonLoader as Loader } from "react-spinners";

const Success = () => <h2>Message sent :)</h2>;
const Failure = () => <h2>That didnt work :/</h2>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setIsSuccess] = useState<null | boolean>(null);

  const Feedback = () => {
    if (loading) {
      return <Loader color="white" />;
    } else if (success === null) {
      return <input type="submit" value="Send" />;
    } else if (success) {
      return <Success />;
    } else {
      return <Failure />;
    }
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

    if (name && mail && message)
      sendMail(name, mail, message, {
        setLoading,
        setIsSuccess,
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
