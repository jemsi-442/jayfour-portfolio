import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      alert("Message sent!");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Name" className="p-3 rounded border"
        />
        <input
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" type="email" className="p-3 rounded border"
        />
        <textarea
          value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder="Message" className="p-3 rounded border" rows={5}
        />
        <button type="submit" className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-500 transition">
          Send
        </button>
      </form>
    </section>
  );
}
