import { useState } from 'react';
import Navbar from "@/components/Navbar";
import JobSearch from "@/components/JobSearch";
import CompanySearch from "@/components/CompanySearch";
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import WhatsAppGroups from "@/components/WhatsAppGroups";

const Opportunities = () => {
  const [searchType, setSearchType] = useState<'jobs' | 'companies'>('jobs');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Encontre as Melhores Vagas de Emprego
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Temos mais de 320 mil oportunidades para você!
          </p>
          <p className="text-lg text-gray-500">
            Escolha a empresa onde trabalhar. Mais de 40 mil empresas trabalham conosco.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSearchType('jobs')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              searchType === 'jobs'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Vagas
          </button>
          <button
            onClick={() => setSearchType('companies')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              searchType === 'companies'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Empresas
          </button>
        </div>

        {searchType === 'jobs' ? <JobSearch /> : <CompanySearch />}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FeaturedJobs />
          <FeaturedCompanies />
        </div>

        <WhatsAppGroups />
      </div>
    </div>
  );
};

export default Opportunities;