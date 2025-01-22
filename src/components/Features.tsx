import { Brain, FileSearch, Users, Target } from 'lucide-react';

const features = [
  {
    name: 'Criação com IA',
    description: 'Nossa IA ajuda a criar currículos personalizados e eficientes, adaptados à sua área de atuação.',
    icon: Brain,
  },
  {
    name: 'Análise Gratuita',
    description: 'Receba uma análise detalhada do seu currículo, com sugestões de melhoria.',
    icon: FileSearch,
  },
  {
    name: 'Banco de Talentos Nacional',
    description: 'Acesso a milhares de talentos em todas as regiões do Brasil.',
    icon: Users,
  },
  {
    name: 'Match Perfeito',
    description: 'Nosso sistema encontra o candidato ideal para sua vaga em minutos.',
    icon: Target,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a TalentFlow?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa plataforma pode transformar sua experiência de recrutamento
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;