import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'As Tendências de Design Italiano para 2024',
      excerpt: 'Descubra as principais tendências que estão moldando o design de cozinhas italianas neste ano.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Marina Silva',
      date: '15 Mar 2024',
      category: 'Design'
    },
    {
      id: 2,
      title: 'Sustentabilidade na Cozinha: Guia Completo',
      excerpt: 'Como criar uma cozinha sustentável sem abrir mão do luxo e da funcionalidade.',
      image: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Carlos Mendes',
      date: '12 Mar 2024',
      category: 'Sustentabilidade'
    },
    {
      id: 3,
      title: 'Maximizando Espaços Pequenos com Elegância',
      excerpt: 'Soluções inteligentes para cozinhas compactas que não comprometem o design.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Ana Rodrigues',
      date: '10 Mar 2024',
      category: 'Arquitetura'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Blog &
            <span className="block text-amber-600 font-normal">Insights</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências em design italiano, sustentabilidade 
            e inovações no mundo das cozinhas de luxo.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-amber-600 group-hover:text-amber-700 font-semibold">
                  <span>Ler artigo completo</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Receba nossos insights
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e receba mensalmente conteúdos exclusivos 
            sobre design, tendências e novidades do mundo Valcucine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-200 hover:to-amber-300 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;