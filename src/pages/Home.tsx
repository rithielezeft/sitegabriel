import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Renova Car</h1>
          <Link 
            to="/login" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-semibold transition"
          >
            Login
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Excelência em Pintura e Funilaria
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Especialistas em martelinho de ouro, pintura automotiva e recuperação de lataria. 
            Devolvemos a beleza original do seu veículo com qualidade premium.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg transition"
            >
              Solicitar Orçamento
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold text-lg transition"
            >
              Nossos Serviços
            </Link>
          </div>
        </section>

        <section className="bg-black/50 py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-yellow-500 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">Pintura Automotiva</h3>
              <p className="text-gray-300">Pintura de alta qualidade com as melhores tintas do mercado</p>
            </div>
            <div className="text-center p-6">
              <div className="text-yellow-500 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">Martelinho de Ouro</h3>
              <p className="text-gray-300">Remoção de amassados sem comprometer a pintura original</p>
            </div>
            <div className="text-center p-6">
              <div className="text-yellow-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Funilaria</h3>
              <p className="text-gray-300">Recuperação completa da lataria do seu veículo</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}