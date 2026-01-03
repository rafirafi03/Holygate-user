import Faq from "@/app/(home)/_components/Faq";
import ServiceCards from "@/app/(home)/_components/ServiceCard";
import MiraclesSection from "./_components/MiraclesSection";
import NearbyChurches from "./_components/NearbyChurches";

const HomePage = () => {

  return (
    <div className="bg-white">
      <ServiceCards />
      <MiraclesSection/>
      <NearbyChurches/>
      <Faq/>
    </div>
  );
};

export default HomePage;