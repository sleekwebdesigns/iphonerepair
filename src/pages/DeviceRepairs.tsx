import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeviceRepairsWidget from "@/components/DeviceRepairsWidget";

const DeviceRepairs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Check Device Repair Prices
            </h1>
            <p className="text-lg text-muted-foreground">
              Select your device and see repair options and pricing
            </p>
          </div>
        </div>
        
        <DeviceRepairsWidget />
      </div>

      <Footer />
    </div>
  );
};

export default DeviceRepairs;
