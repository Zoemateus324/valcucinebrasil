import React from 'react';
import { Recycle, Award, Leaf, Shield } from 'lucide-react';

const Sustainability = () => {
  const commitments = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Materiais Recicláveis',
      description: 'Utilizamos até 80% de materiais recicláveis em nossas cozinhas, incluindo vidro e alumínio reciclados.',
      stat: '80%'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certificações',
      description: 'Produtos certificados com os mais rigorosos padrões ambientais europeus e internacionais.',
      stat: '15+'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Processo Eco-friendly',
      description: 'Produção com energia renovável e processos que minimizam o impacto ambiental.',
      stat: '100%'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Durabilidade',
      description: 'Garantia estendida e produtos projetados para durar décadas, reduzindo o desperdício.',
      stat: '30 anos'
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Compromisso com o
                <span className="block text-green-600 font-normal">Futuro</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A sustentabilidade está no DNA da Valcucine desde sua fundação. 
                Fomos pioneiros no uso de materiais recicláveis e processos eco-friendly, 
                provando que luxo e responsabilidade ambiental podem caminhar juntos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada cozinha Valcucine é um investimento no futuro do planeta, 
                combinando design excepcional com práticas sustentáveis que fazem a diferença.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                Nossa Missão Sustentável
              </h3>
              <p className="text-green-800">
                "Criar cozinhas que não apenas transformem espaços, mas também contribuam 
                para um mundo mais sustentável e consciente para as próximas gerações."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Cozinha sustentável Valcucine"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Commitments Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                  {commitment.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {commitment.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
            Certificações e Reconhecimentos
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            A Valcucine é reconhecida mundialmente por suas práticas sustentáveis 
            e recebeu diversas certificações ambientais prestigiosas.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold">ISO 14001</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold">GREENGUARD</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold">FSC Certified</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold">EU Ecolabel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;