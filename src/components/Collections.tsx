import React from 'react';

const Collections = () => {
  const collections = [
    {
      name: 'Genius Loci',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Design minimalista com portas sem puxadores e sistemas de abertura inovadores.',
      features: ['Sistema Push-Pull', 'Vidro temperado', 'LED integrado', 'Ergonomia superior']
    },
    {
      name: 'Artematica',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Elegância atemporal com acabamentos em vidro e alumínio reciclado.',
      features: ['Vidro reciclado', 'Estrutura em alumínio', 'Cores personalizáveis', 'Sustentabilidade']
    },
    {
      name: 'Logica System',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modularidade extrema para espaços compactos sem abrir mão do design.',
      features: ['Sistema modular', 'Otimização de espaço', 'Flexibilidade total', 'Design compacto']
    }
  ];

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Nossas
            <span className="block text-amber-600 font-normal">Coleções</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cada linha representa décadas de pesquisa em design, funcionalidade e sustentabilidade, 
            oferecendo soluções únicas para diferentes estilos de vida.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                    {collection.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {collection.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {collection.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-md hover:shadow-lg">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Personalize sua cozinha dos sonhos
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para criar uma solução única e personalizada 
            para o seu projeto, combinando suas necessidades com a excelência Valcucine.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Fale com nossos especialistas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;