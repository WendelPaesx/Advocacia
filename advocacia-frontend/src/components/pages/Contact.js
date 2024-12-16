import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-700 text-white text-center">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-4">Envie uma mensagem ou entre em contato conosco:</p>
      <form className="mt-6 max-w-md mx-auto">
        <input type="text" placeholder="Seu Nome" className="w-full p-2 mb-4 rounded" />
        <input type="email" placeholder="Seu Email" className="w-full p-2 mb-4 rounded" />
        <textarea placeholder="Sua Mensagem" className="w-full p-2 mb-4 rounded" rows="4"></textarea>
        <button className="w-full bg-white text-blue-700 py-2 rounded hover:bg-gray-200">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
