import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeviceRepairsWidget from "@/components/DeviceRepairsWidget";

const DeviceRepairs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DeviceRepairsWidget />
      <Footer />
    </div>
  );
};

export default DeviceRepairs;
