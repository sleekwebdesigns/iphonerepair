import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageSchema from "@/components/ServicePageSchema";
import { BUSINESS_INFO } from "@/lib/businessInfo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Tablet, Shield, Clock, Wrench } from "lucide-react";

const IPadRepair = () => {
  const serviceName = "iPad Repair Brooklyn";
  const serviceDescription = "Professional iPad repair services in Brooklyn, NY. Screen replacement, battery service, charging port repair for all iPad models. Same-day service in Crown Heights, Prospect Heights, and Park Slope.";

  const offers = [
    { name: "iPad Pro Repair", description: "Screen and component repair for 11-inch and 12.9-inch iPad Pro" },
    { name: "iPad Air Repair", description: "Display replacement and battery service for iPad Air" },
    { name: "iPad Mini Repair", description: "Complete repair services for iPad Mini models" },
    { name: "iPad (Standard) Repair", description: "Affordable repair for standard iPad models" },
    { name: "iPad Screen Replacement", description: "Digitizer and LCD replacement for cracked iPad screens" },
    { name: "iPad Battery Replacement", description: "Battery service to restore iPad battery life" },
    { name: "iPad Charging Port Repair", description: "Fix charging issues and loose connections" }
  ];

  return (
    <>
      <Helmet>
        <title>{serviceName} | Same-Day Service | FLM 380 Wireless</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="iPad repair Brooklyn, iPad screen repair, iPad battery replacement, iPad Pro repair, Crown Heights iPad repair" />
        <link rel="canonical" href={`${BUSINESS_INFO.website}/ipad-repair-brooklyn`} />
        <meta property="og:title" content={serviceName} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`${BUSINESS_INFO.website}/ipad-repair-brooklyn`} />
      </Helmet>
      
      <ServicePageSchema
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceType="iPad Repair"
        offers={offers}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              iPad Repair in Brooklyn
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Broken iPad screen or battery issues? We repair all iPad models with same-day service. 
              Expert technicians in Crown Heights, Brooklyn.
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
                <h3 className="font-semibold mb-2 text-foreground">Same-Day Service</h3>
                <p className="text-sm text-muted-foreground">Most iPad repairs completed same day</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Quality Parts</h3>
                <p className="text-sm text-muted-foreground">OEM-quality screens and components</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Expert Repair</h3>
                <p className="text-sm text-muted-foreground">Experienced iPad repair technicians</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Tablet className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">All iPad Models</h3>
                <p className="text-sm text-muted-foreground">iPad Pro, Air, Mini, and standard models</p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Common iPad Repairs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Cracked Screen Repair</h3>
                <p className="text-sm text-muted-foreground">
                  Broken iPad glass or unresponsive touch? We replace digitizers and LCD screens for all iPad models.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Battery Replacement</h3>
                <p className="text-sm text-muted-foreground">
                  iPad won't hold a charge or shuts down unexpectedly? New battery installation restores full battery life.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Charging Port Repair</h3>
                <p className="text-sm text-muted-foreground">
                  iPad won't charge or loose Lightning/USB-C port? We repair or replace charging ports professionally.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Home Button & Power Button</h3>
                <p className="text-sm text-muted-foreground">
                  Button not working or stuck? We repair or replace home buttons, power buttons, and volume controls.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">iPad Models We Repair</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Tablet className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Visit Our Brooklyn iPad Repair Shop</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground">
                <strong>{BUSINESS_INFO.address.fullAddress}</strong>
              </p>
              <p className="text-muted-foreground">
                Located in Crown Heights, Brooklyn. Easy access from Prospect Heights, Park Slope, 
                Bed-Stuy, and surrounding neighborhoods.
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get Your iPad Repaired Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Walk in or schedule online. Professional iPad repair with warranty included.
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

export default IPadRepair;
