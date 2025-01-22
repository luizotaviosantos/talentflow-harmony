import Navbar from "@/components/Navbar";
import WhatsAppGroups from "@/components/WhatsAppGroups";

const WhatsAppGroupsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <WhatsAppGroups />
      </div>
    </div>
  );
};

export default WhatsAppGroupsPage;