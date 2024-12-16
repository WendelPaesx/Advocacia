import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-blue-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-700">Bem-vindo à Advocacia XYZ</h2>
      <p className="text-lg mt-4 text-gray-700">Protegendo seus direitos com excelência e dedicação.</p>
      <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600">
        Saiba Mais
      </button>
    </section>
  );
};

export default Home;
