import { useState } from 'react';
import { Menu, X, ChevronDown, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Empresas', path: '/empresas', hasDropdown: true },
    { name: 'Recruiters', path: '/recruiters', hasDropdown: true },
    { name: 'Candidatos', path: '/candidatos', hasDropdown: true },
    { name: 'Carreiras', path: '/carreiras', hasDropdown: true },
    { name: 'Oportunidades', path: '/oportunidades', hasDropdown: true },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              TalentFlow
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors hover:bg-gray-50"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ))}
            
            <button className="text-gray-700 hover:text-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center hover:bg-gray-50">
              <Globe2 className="h-4 w-4 mr-1" />
              PT
            </button>

            <button className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:from-primary-hover hover:via-accent-hover hover:to-secondary-hover px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg ml-4">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary p-2 rounded-lg hover:bg-gray-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-50">
              <Globe2 className="h-4 w-4 inline mr-2" />
              PT
            </button>
            <button className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white hover:from-primary-hover hover:via-accent-hover hover:to-secondary-hover px-3 py-2 rounded-lg text-base font-medium mt-2">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;