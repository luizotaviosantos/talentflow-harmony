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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Por que escolher a TalentFlow?</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg border border-gray-100 hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;