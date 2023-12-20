"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
    console.log("Esta es la data", data);

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Contact-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Mensaje enviado");
      setLoading(false);
      //reset
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error");
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col">
        <label className="font-bold text-grey-800" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          required
          className="p-4 bg-gray-50 border border-gray-100"
          placeholder="Nombre"
          autoComplete="off"
          id="name"
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="font-bold text-grey-800" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          required
          minLength={5}
          className="p-4 bg-gray-50 border border-gray-100"
          placeholder="example@example.com"
          autoComplete="off"
          id="email"
        />
      </div>
      <div>
        <label className="font-bold text-grey-800" htmlFor="email">
          Dejenos su consulta
        </label>
        <textarea
          rows={4}
          name="message"
          placeholder="Cual es tu consulta?"
          className=" w-full p-4 bg-gray-50 border border-gray-100"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 w-full mb-5 bg-gray-700 border rounded-lg disable:bg-grey-400 disable:text-grey-100 text-white font-md"
      >
        Enviar
      </button>
    </form>
  );
}
