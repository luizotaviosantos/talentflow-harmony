import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block mb-2">Crie seu currículo perfeito com</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
              IA e receba uma análise gratuita!
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-3xl">
            Encontre as melhores oportunidades ou os melhores talentos com a nossa plataforma.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <button className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary-hover hover:via-accent-hover hover:to-secondary-hover transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl md:text-lg md:px-10">
              Comece Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;