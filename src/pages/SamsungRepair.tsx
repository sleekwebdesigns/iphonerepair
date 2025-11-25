import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageSchema from "@/components/ServicePageSchema";
import { BUSINESS_INFO } from "@/lib/businessInfo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Smartphone, Shield, Clock, Wrench } from "lucide-react";

const SamsungRepair = () => {
  const serviceName = "Samsung Phone Repair Brooklyn";
  const serviceDescription = "Expert Samsung Galaxy repair services in Brooklyn, NY. Screen replacement, battery service, and more for all Samsung models. Same-day repairs in Crown Heights, Prospect Heights, and Park Slope.";

  const offers = [
    { name: "Samsung Galaxy S24 Repair", description: "Screen, battery, and component repair for Galaxy S24 series" },
    { name: "Samsung Galaxy S23 Repair", description: "Full repair services for Galaxy S23 Ultra, Plus, and standard" },
    { name: "Samsung Galaxy S22 Repair", description: "Display and battery replacement for S22 models" },
    { name: "Samsung Galaxy Z Fold Repair", description: "Specialized repair for foldable Galaxy Z Fold devices" },
    { name: "Samsung Galaxy Z Flip Repair", description: "Screen and hinge repair for Galaxy Z Flip" },
    { name: "Samsung Galaxy A Series Repair", description: "Affordable repair for Galaxy A54, A34, A14, and more" },
    { name: "Samsung Galaxy Note Repair", description: "Repair services for Galaxy Note series" }
  ];

  return (
    <>
      <Helmet>
        <title>{serviceName} | Same-Day Service | FLM 380 Wireless</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="Samsung repair Brooklyn, Galaxy screen repair, Samsung battery replacement, Samsung Galaxy repair, Crown Heights Samsung repair" />
        <link rel="canonical" href={`${BUSINESS_INFO.website}/samsung-repair-brooklyn`} />
        <meta property="og:title" content={serviceName} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`${BUSINESS_INFO.website}/samsung-repair-brooklyn`} />
      </Helmet>
      
      <ServicePageSchema
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceType="Samsung Phone Repair"
        offers={offers}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Samsung Galaxy Repair in Brooklyn
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Broken Samsung Galaxy? We fix screens, batteries, charging ports, and more. 
              Expert same-day repair service in Crown Heights, Brooklyn.
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
                <h3 className="font-semibold mb-2 text-foreground">Same-Day Repairs</h3>
                <p className="text-sm text-muted-foreground">Most Samsung repairs done in 1-2 hours</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Quality Parts</h3>
                <p className="text-sm text-muted-foreground">OEM and high-quality aftermarket parts</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Expert Technicians</h3>
                <p className="text-sm text-muted-foreground">Certified Samsung repair specialists</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">All Samsung Models</h3>
                <p className="text-sm text-muted-foreground">Galaxy S, Z Fold, Z Flip, A Series, and Note</p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Samsung Repair Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Screen Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Cracked or broken AMOLED display? We replace Samsung Galaxy screens with quality parts and warranty.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Battery Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Battery draining fast? We install new high-capacity batteries to restore your Galaxy's battery life.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Charging Port Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Won't charge or loose connection? We repair or replace USB-C charging ports on all Samsung models.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Back Glass Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  Shattered back glass? We replace the rear panel to restore your Galaxy's appearance.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Camera Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Blurry photos or broken camera lens? We fix or replace camera modules on all Galaxy phones.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Water Damage Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Dropped in water? We offer professional water damage diagnostics and repair services.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Samsung Models We Repair</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Visit Our Brooklyn Samsung Repair Shop</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground">
                <strong>{BUSINESS_INFO.address.fullAddress}</strong>
              </p>
              <p className="text-muted-foreground">
                Serving Crown Heights, Prospect Heights, Park Slope, Bed-Stuy, and all of Brooklyn with expert Samsung Galaxy repair.
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Fix Your Samsung Galaxy?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Walk in or book online. Fast, reliable Samsung repair with warranty.
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

export default SamsungRepair;
