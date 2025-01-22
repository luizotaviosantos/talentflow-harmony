import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'João',
    role: 'Desenvolvedor',
    content: 'Consegui 3 entrevistas em uma semana!',
  },
  {
    name: 'Maria',
    role: 'Recrutadora',
    content: 'Encontrei o candidato ideal em menos de 48 horas.',
  },
  {
    name: 'Ana',
    role: 'Marketing',
    content: 'A análise de currículo mudou a forma como eu me candidato a vagas.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">O que nossos clientes dizem:</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="font-medium">
                <p className="text-primary">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;