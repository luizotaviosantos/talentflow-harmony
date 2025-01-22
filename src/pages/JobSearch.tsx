import Navbar from "@/components/Navbar";
import JobSearch from "@/components/JobSearch";
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturedCompanies from "@/components/FeaturedCompanies";

const JobSearchPage = () => {
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

        <JobSearch />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FeaturedJobs />
          <FeaturedCompanies />
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;