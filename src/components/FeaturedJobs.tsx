import { Card } from "@/components/ui/card";

const FeaturedJobs = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vagas Populares</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((job) => (
          <div key={job} className="p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="font-semibold">Desenvolvedor Front-end</h3>
            <p className="text-sm text-gray-600">TalentFlow</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">São Paulo, SP</span>
              <span className="text-sm font-medium text-green-600">R$ 8.000,00</span>
            </div>
            <button className="mt-2 text-sm text-primary hover:underline">
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeaturedJobs;