import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageSchema from "@/components/ServicePageSchema";
import { BUSINESS_INFO } from "@/lib/businessInfo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Battery, Shield, Clock, Zap } from "lucide-react";

const IPhoneBatteryReplacement = () => {
  const serviceName = "iPhone Battery Replacement Brooklyn";
  const serviceDescription = "Fast iPhone battery replacement in Brooklyn, NY. Same-day service for all iPhone models with high-capacity batteries and warranty. Serving Crown Heights, Prospect Heights, and Park Slope.";

  const offers = [
    { name: "iPhone 15 Battery Replacement", description: "High-capacity battery for iPhone 15 series" },
    { name: "iPhone 14 Battery Replacement", description: "Battery replacement for all iPhone 14 models" },
    { name: "iPhone 13 Battery Replacement", description: "Restore battery life to iPhone 13" },
    { name: "iPhone 12 Battery Replacement", description: "Battery service for iPhone 12 series" },
    { name: "iPhone 11 Battery Replacement", description: "New battery for iPhone 11 Pro Max, Pro, and standard" },
    { name: "iPhone X/XR/XS Battery", description: "Battery replacement for iPhone X series" },
    { name: "iPhone 8/7/6 Battery", description: "Battery service for older iPhone models" }
  ];

  return (
    <>
      <Helmet>
        <title>{serviceName} | Same-Day Service | FLM 380 Wireless</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="iPhone battery replacement Brooklyn, iPhone battery drain, iPhone won't charge, iPhone battery service, Crown Heights iPhone battery" />
        <link rel="canonical" href={`${BUSINESS_INFO.website}/iphone-battery-replacement-brooklyn`} />
        <meta property="og:title" content={serviceName} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`${BUSINESS_INFO.website}/iphone-battery-replacement-brooklyn`} />
      </Helmet>
      
      <ServicePageSchema
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceType="iPhone Battery Replacement"
        offers={offers}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              iPhone Battery Replacement in Brooklyn
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              iPhone dying too fast? Get a fresh battery installed in 30 minutes. 
              Professional service in Crown Heights, Brooklyn with warranty included.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={`tel:${BUSINESS_INFO.phoneTel}`}>Call Now: {BUSINESS_INFO.phone}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <NavLink to="/book-repair">Book Your Repair</NavLink>
              </Button>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">30-Minute Service</h3>
                <p className="text-sm text-muted-foreground">Quick battery replacement while you wait</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">High-Capacity Batteries</h3>
                <p className="text-sm text-muted-foreground">Premium batteries for longer life</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Warranty Included</h3>
                <p className="text-sm text-muted-foreground">90-day warranty on all batteries</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Battery className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">All iPhone Models</h3>
                <p className="text-sm text-muted-foreground">From iPhone 6 to latest iPhone 15</p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Signs You Need a New iPhone Battery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Battery Drains Quickly</h3>
                <p className="text-sm text-muted-foreground">
                  Your iPhone loses charge rapidly, even with minimal use. Battery health below 80% means it's time for replacement.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Unexpected Shutdowns</h3>
                <p className="text-sm text-muted-foreground">
                  iPhone turns off at 20-30% battery or randomly shuts down. This indicates battery degradation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Slow Performance</h3>
                <p className="text-sm text-muted-foreground">
                  iOS throttles older batteries. A new battery can restore your iPhone's full speed.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Charging Issues</h3>
                <p className="text-sm text-muted-foreground">
                  Takes forever to charge or won't hold a charge. Often a sign of worn-out battery cells.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Battery Replacement for All iPhone Models</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Battery className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{offer.name}</h3>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16 bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Visit Our Brooklyn Battery Replacement Shop</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground">
                <strong>{BUSINESS_INFO.address.fullAddress}</strong>
              </p>
              <p className="text-muted-foreground">
                Located in Crown Heights, Brooklyn. Easy access from Prospect Heights, Park Slope, 
                Bed-Stuy, and all Brooklyn neighborhoods.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
              <Button asChild size="lg">
                <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
                <Button asChild variant="outline" size="lg">
                  <NavLink to="/contact">Contact Us</NavLink>
                </Button>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get Your iPhone Battery Replaced Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Walk in or schedule an appointment. Fast 30-minute service with warranty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={`tel:${BUSINESS_INFO.phoneTel}`}>Call: {BUSINESS_INFO.phone}</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <NavLink to="/book-repair">Book Online</NavLink>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IPhoneBatteryReplacement;
