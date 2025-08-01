import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Coleções', href: '#collections' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sustentabilidade', href: '#sustainability' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' }
  ];

  const collections = [
    'Genius Loci',
    'Artematica',
    'Logica System',
    'New Logica System',
    'Forma Mentis',
    'Sine Tempore'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-amber-900">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Valcucine Brasil</h3>
                <p className="text-sm text-gray-300">by Habitat Naturale</p>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+55 (11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contato@valcucinebrasil.com.br</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-amber-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Coleções</h4>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    {collection}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receba novidades exclusivas sobre design italiano e lançamentos Valcucine.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="w-full bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 px-4 py-2 rounded-lg font-semibold hover:from-amber-200 hover:to-amber-300 transition-all duration-200">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Valcucine Brasil. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Valcucine Authorized Dealer</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Eco-Friendly Certified</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">Italian Design Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;