import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Residência Moderna SP',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Cozinha integrada com ilha central em Genius Loci'
    },
    {
      id: 2,
      title: 'Apartamento Jardins',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Design compacto com linha Logica System'
    },
    {
      id: 3,
      title: 'Cobertura Itaim',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Artematica com acabamento em vidro fumê'
    },
    {
      id: 4,
      title: 'Casa de Campo',
      category: 'residencial',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Integração perfeita com a natureza'
    },
    {
      id: 5,
      title: 'Loft Corporativo',
      category: 'comercial',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Espaço gourmet para eventos empresariais'
    },
    {
      id: 6,
      title: 'Showroom Flagship',
      category: 'comercial',
      image: 'https://images.pexels.com/photos/1834403/pexels-photo-1834403.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
      description: 'Exposição das principais linhas Valcucine'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'residencial', name: 'Residencial' },
    { id: 'comercial', name: 'Comercial' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Nossos
            <span className="block text-amber-600 font-normal">Projetos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Cada projeto é uma história única de design, funcionalidade e elegância. 
            Conheça algumas de nossas realizações mais marcantes.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'residencial' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.category === 'residencial' ? 'Residencial' : 'Comercial'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Gostaria de ver seu projeto aqui?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Vamos conversar sobre seu projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;