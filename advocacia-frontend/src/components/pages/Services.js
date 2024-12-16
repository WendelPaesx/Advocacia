import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="font-bold text-xl text-blue-700">Consultoria Jurídica</h3>
            <p className="text-gray-600 mt-2">Ajudamos você a tomar decisões legais bem fundamentadas.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="font-bold text-xl text-blue-700">Defesa em Tribunais</h3>
            <p className="text-gray-600 mt-2">Defendemos seus interesses com profissionalismo e ética.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="font-bold text-xl text-blue-700">Mediação de Conflitos</h3>
            <p className="text-gray-600 mt-2">Facilitamos acordos para evitar processos judiciais longos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
