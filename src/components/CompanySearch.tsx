import { Search, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CompanySearch = () => {
  return (
    <Card className="p-6">
      <div className="grid gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Digite o nome da empresa"
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

        <Button>
          <Search className="h-4 w-4 mr-2" />
          Buscar Empresas
        </Button>
      </div>
    </Card>
  );
};

export default CompanySearch;