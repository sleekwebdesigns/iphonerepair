import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageSchema from "@/components/ServicePageSchema";
import { BUSINESS_INFO } from "@/lib/businessInfo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Laptop, Shield, Clock, Wrench } from "lucide-react";

const MacBookRepair = () => {
  const serviceName = "MacBook Repair Brooklyn";
  const serviceDescription = "Expert MacBook repair services in Brooklyn, NY. Screen replacement, battery service, keyboard repair, and logic board repair for all MacBook models. Serving Crown Heights, Prospect Heights, and Park Slope.";

  const offers = [
    { name: "MacBook Pro Repair", description: "Screen, battery, and logic board repair for MacBook Pro M1, M2, M3" },
    { name: "MacBook Air Repair", description: "Complete repair services for MacBook Air models" },
    { name: "MacBook Screen Replacement", description: "Retina display and LCD screen replacement" },
    { name: "MacBook Battery Replacement", description: "Battery service for all MacBook models" },
    { name: "MacBook Keyboard Repair", description: "Butterfly and Magic Keyboard repair and replacement" },
    { name: "MacBook Logic Board Repair", description: "Diagnostics and repair for motherboard issues" },
    { name: "MacBook Water Damage Repair", description: "Professional liquid damage repair services" }
  ];

  return (
    <>
      <Helmet>
        <title>{serviceName} | Same-Day Service | FLM 380 Wireless</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="MacBook repair Brooklyn, MacBook screen repair, MacBook battery replacement, MacBook Pro repair, Crown Heights MacBook repair" />
        <link rel="canonical" href={`${BUSINESS_INFO.website}/macbook-repair-brooklyn`} />
        <meta property="og:title" content={serviceName} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`${BUSINESS_INFO.website}/macbook-repair-brooklyn`} />
      </Helmet>
      
      <ServicePageSchema
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceType="MacBook Repair"
        offers={offers}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              MacBook Repair in Brooklyn
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              MacBook won't turn on or broken screen? We repair MacBook Pro, MacBook Air, and all Apple laptops. 
              Expert service in Crown Heights, Brooklyn.
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
                <h3 className="font-semibold mb-2 text-foreground">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground">Many MacBook repairs same-day or next-day</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Apple Certified Parts</h3>
                <p className="text-sm text-muted-foreground">Genuine and OEM-quality components</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Expert Technicians</h3>
                <p className="text-sm text-muted-foreground">Experienced Apple MacBook specialists</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Laptop className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">All MacBook Models</h3>
                <p className="text-sm text-muted-foreground">M1, M2, M3 chips and Intel-based MacBooks</p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">MacBook Repair Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Screen Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Cracked Retina display or LCD issues? We replace MacBook screens with genuine parts and warranty.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Battery Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Service battery warning or won't hold charge? New battery installation restores MacBook battery life.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Keyboard Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Sticky or unresponsive keys? We repair butterfly keyboards and replace Magic Keyboards.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Logic Board Repair</h3>
                <p className="text-sm text-muted-foreground">
                  MacBook won't turn on or boot? We diagnose and repair logic board issues at component level.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Water Damage Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Spilled liquid on MacBook? Professional cleaning and component repair to save your device.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">SSD Upgrade & Data Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Need more storage or lost data? We upgrade SSDs and offer data recovery services.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">MacBook Models We Repair</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Visit Our Brooklyn MacBook Repair Shop</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground">
                <strong>{BUSINESS_INFO.address.fullAddress}</strong>
              </p>
              <p className="text-muted-foreground">
                Conveniently located in Crown Heights, Brooklyn. Serving Prospect Heights, Park Slope, 
                Bed-Stuy, Clinton Hill, and all Brooklyn neighborhoods.
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get Your MacBook Repaired Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bring your MacBook in for free diagnostics. Expert repair with warranty included.
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

export default MacBookRepair;
