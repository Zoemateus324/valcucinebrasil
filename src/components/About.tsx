import React from 'react';
import { Award, Leaf, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustentabilidade',
      description: 'Compromisso com materiais eco-friendly e processos sustentáveis'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Inovação',
      description: 'Tecnologia de ponta e soluções modulares revolucionárias'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Ergonomia',
      description: 'Design centrado no bem-estar e conforto do usuário'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Atemporalidade',
      description: 'Designs clássicos que transcendem tendências passageiras'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                A excelência italiana
                <span className="block text-amber-600 font-normal">no Brasil</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Há mais de 35 anos, a Valcucine revoluciona o conceito de cozinha italiana, 
                combinando design atemporal, inovação tecnológica e sustentabilidade. 
                No Brasil, somos representados exclusivamente pela Habitat Naturale, 
                trazendo ao mercado nacional a mesma excelência e sofisticação que 
                conquistou o mundo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada projeto Valcucine é uma obra de arte funcional, pensada para 
                proporcionar experiências culinárias únicas e duradouras, respeitando 
                o meio ambiente e as necessidades de cada cliente.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group transition-colors duration-200"
              >
                Conheça nossas coleções
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Cozinha Valcucine de luxo"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-900 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;