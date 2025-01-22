const CareerBoost = () => {
  const plans = [
    {
      name: "Basic",
      price: "120,00",
      features: [
        "Criação de Currículo",
        "Reestruturação do LinkedIn",
        "Modelo de Carta de Apresentação"
      ]
    },
    {
      name: "Platinum",
      price: "250,00",
      features: [
        "Criação de Currículo",
        "Reestruturação do LinkedIn",
        "Modelo de Carta de Apresentação",
        "Modelo de Abordagem no LinkedIn",
        "Reestruturação da Plataforma de Busca de Emprego (Gupy)",
        "Testes Comportamentais",
        "Análise SWOT Profissional",
        "Dicas de Sites de Busca de Emprego",
        "Bônus Surpresa"
      ]
    },
    {
      name: "Premium",
      price: "500,00",
      features: [
        "Criação de Currículo e Reestruturação do LinkedIn",
        "Modelo de Carta de Apresentação",
        "Modelo de Abordagem no LinkedIn",
        "Reestruturação da Plataforma de Busca de Emprego (Gupy)",
        "Testes Comportamentais",
        "Análise SWOT Profissional",
        "Plano de Ação Personalizado",
        "Roteiro para Vídeo Currículo",
        "Simulação de Entrevista",
        "Dicas de Sites de Busca de Emprego",
        "E-book: Entrevista de Emprego Descomplicada",
        "Bônus Surpresa"
      ]
    },
    {
      name: "Potencialize sua Carreira em TI",
      price: "1.000,00",
      features: [
        "Currículo Customizado: Design exclusivo que realça competências técnicas",
        "LinkedIn Avançado: Perfil destacado, alertas de vagas e network estratégico",
        "Showcase de Hard Skills: Apresentações que capturam a atenção dos RH",
        "Atualizações de Tools: Ferramentas essenciais atualizadas para o mercado de TI",
        "Mentoria de Portfólio: Estratégias para GitHub e artigos impactantes na Medium",
        "Simulação de Entrevistas: Abordagem estratégica para responder perguntas técnicas",
        "Guia de Sites de TI: Seleção dos melhores portais usados por recrutadores tecnológicos",
        "Todo o conteúdo do Pacote Platinum"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Potencialize sua carreira com a TalentFlow
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Escolha o plano ideal para sua carreira
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  R$ {plan.price}
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-200">
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg font-medium">
            Converse com um atendente
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerBoost;