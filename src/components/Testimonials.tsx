import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'João',
    role: 'Desenvolvedor',
    content: 'Consegui 3 entrevistas em uma semana!',
    avatar: '👨‍💻',
  },
  {
    name: 'Maria',
    role: 'Recrutadora',
    content: 'Encontrei o candidato ideal em menos de 48 horas.',
    avatar: '👩‍💼',
  },
  {
    name: 'Ana',
    role: 'Marketing',
    content: 'A análise de currículo mudou a forma como eu me candidato a vagas.',
    avatar: '👩‍🎨',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas carreiras com a TalentFlow
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 font-medium italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <span className="text-3xl mr-4">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;