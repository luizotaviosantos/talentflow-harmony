import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const cities = [
  'Ananindeua', 'Anápolis', 'Aparecida de Goiânia', 'Apucarana', 'Aracaju',
  'Arapiraca', 'Araçatuba', 'Belo Horizonte', 'Belém', 'Betim',
  // ... Add all cities
];

const WhatsAppGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="mt-16 p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Acesse nossos grupos de vagas no WhatsApp!
        </h2>
        <p className="text-gray-600">
          Neste grupo, divulgamos vagas de emprego diariamente. Todas as vagas são válidas e confirmadas com as empresas.
        </p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Digite o nome da cidade..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ScrollArea className="h-[300px] rounded-md border p-4">
        <div className="grid gap-2">
          {filteredCities.map((city) => (
            <Button
              key={city}
              variant="outline"
              className="w-full justify-start text-left"
              onClick={() => alert(`Em breve: grupo do WhatsApp para ${city}!`)}
            >
              🟢 {city}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-2">Não encontrou sua cidade?</h3>
        <p className="text-gray-600 mb-4">
          Cadastre-se para ser avisado quando o grupo da sua região estiver disponível.
        </p>
        <Button>Quero ser avisado</Button>
      </div>
    </Card>
  );
};

export default WhatsAppGroups;