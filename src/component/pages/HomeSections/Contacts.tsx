"use client";
import scss from "./Contacts.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

interface IFormTelegram {
  username: string;
  mail: string;
  subject: string;
  description: string;
}

const Contacts = () => {
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const massegeModel = (data: IFormTelegram) => {
    let message = `Username: <b>${data.username}</b>\n`;
    message += `Email: <b>${data.mail}</b>\n`;
    message += `Subject: <b>${data.subject}</b>\n`;
    message += `Description: <b>${data.description}</b>`;
    return message;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: massegeModel(data),
    });
    reset();
  };
  return (
    <section id="contact" className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <input
                placeholder="add Name"
                type="text"
                {...register("username", { required: true })}
              />
              <input
                placeholder="add Email"
                type="text"
                {...register("mail", { required: true })}
              />
              <input
                placeholder="add Subject"
                type="text"
                {...register("subject", { required: true })}
              />
              <input
                placeholder="add Description"
                type="text"
                {...register("description", { required: true })}
              />
            </div>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
