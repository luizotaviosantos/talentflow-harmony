import { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const JobSearch = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Card className="p-6">
      <div className="grid gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Digite o cargo ou área de interesse"
            className="pl-10"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Digite a cidade, estado ou região"
            className="pl-10"
          />
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filtros Avançados
          </Button>
          <Button className="flex-1">
            <Search className="h-4 w-4 mr-2" />
            Buscar Vagas
          </Button>
        </div>

        {showFilters && (
          <div className="grid gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium">Tipo de Vaga</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Autônomo', 'Estágio', 'Jovem Aprendiz', 'Meio-Período', 'Tempo Integral', 'Temporário'].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  {type}
                </label>
              ))}
            </div>

            <h3 className="font-medium mt-4">Benefícios</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Vale-refeição', 'Vale-transporte', 'Plano de saúde', 'Home office'].map((benefit) => (
                <label key={benefit} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  {benefit}
                </label>
              ))}
            </div>

            <h3 className="font-medium mt-4">Tipo de Contratação</h3>
            <div className="grid grid-cols-2 gap-2">
              {['CLT', 'PJ', 'Freelancer'].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  {type}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default JobSearch;