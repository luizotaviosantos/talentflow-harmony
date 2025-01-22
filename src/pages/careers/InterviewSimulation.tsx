const InterviewSimulation = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Simulação de entrevista para o emprego dos sonhos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simulação de entrevista é feita conforme as vagas que você procura. Gravamos e apontamos os pontos de melhoria, ajudando você a se destacar. Veja uma imagem de pessoas simulando uma entrevista para se inspirar!
          </p>
          <div className="mt-8">
            <img
              src="/placeholder.svg"
              alt="Simulação de entrevista"
              className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSimulation;