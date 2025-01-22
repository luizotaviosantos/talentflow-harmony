import { Card } from "@/components/ui/card";

const FeaturedCompanies = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Empresas que estão contratando</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((company) => (
          <div key={company} className="p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-500">T</span>
              </div>
              <div>
                <h3 className="font-semibold">TalentFlow</h3>
                <p className="text-sm text-gray-600">Tecnologia</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">12 vagas abertas</p>
            <button className="mt-2 text-sm text-primary hover:underline">
              Ver Vagas
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeaturedCompanies;