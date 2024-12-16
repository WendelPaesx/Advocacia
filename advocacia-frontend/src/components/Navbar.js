import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Advocacia XYZ</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">Sobre</a></li>
          <li><a href="#services" className="hover:underline">Serviços</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
