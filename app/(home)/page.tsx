import Faq from "@/app/(home)/_components/Faq";
import ServiceCards from "@/app/(home)/_components/ServiceCard";
import MiraclesSection from "./_components/MiraclesSection";

const HomePage = () => {

  return (
    <div className="bg-white">
      <ServiceCards />
      <MiraclesSection/>
      <Faq/>
    </div>
  );
};

export default HomePage;