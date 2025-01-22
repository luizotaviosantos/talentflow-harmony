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
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              TalentFlow
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary hover:shadow-sm px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ))}
            
            {/* Language Selector */}
            <button className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Globe2 className="h-4 w-4 mr-1" />
              PT
            </button>

            {/* Login Button */}
            <button className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              <Globe2 className="h-4 w-4 inline mr-2" />
              PT
            </button>
            <button className="w-full bg-primary text-white hover:bg-primary-hover px-3 py-2 rounded-md text-base font-medium mt-2">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;