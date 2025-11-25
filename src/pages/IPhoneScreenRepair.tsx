import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageSchema from "@/components/ServicePageSchema";
import { BUSINESS_INFO } from "@/lib/businessInfo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Smartphone, Shield, Clock, DollarSign } from "lucide-react";

const IPhoneScreenRepair = () => {
  const serviceName = "iPhone Screen Repair Brooklyn";
  const serviceDescription = "Professional iPhone screen repair services in Brooklyn, NY. Same-day repairs for cracked or damaged iPhone screens with quality parts and warranty. Serving Crown Heights, Prospect Heights, and Park Slope.";

  const offers = [
    { name: "iPhone 15 Screen Repair", description: "OLED display replacement for iPhone 15 series" },
    { name: "iPhone 14 Screen Repair", description: "Screen replacement for iPhone 14 Pro Max, Pro, Plus, and standard" },
    { name: "iPhone 13 Screen Repair", description: "Display repair for all iPhone 13 models" },
    { name: "iPhone 12 Screen Repair", description: "Screen replacement for iPhone 12 series" },
    { name: "iPhone 11 Screen Repair", description: "LCD and OLED screen repair for iPhone 11" },
    { name: "iPhone X/XR/XS Screen Repair", description: "Display replacement for iPhone X series" },
    { name: "iPhone 8/7/6 Screen Repair", description: "Screen repair for older iPhone models" }
  ];

  return (
    <>
      <Helmet>
        <title>{serviceName} | Same-Day Service | FLM 380 Wireless</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="iPhone screen repair Brooklyn, cracked iPhone screen, iPhone display replacement, same day iPhone repair, Crown Heights iPhone repair" />
        <link rel="canonical" href={`${BUSINESS_INFO.website}/iphone-screen-repair-brooklyn`} />
        <meta property="og:title" content={serviceName} />
        <meta property="og:description" content={serviceDescription} />
        <meta property="og:url" content={`${BUSINESS_INFO.website}/iphone-screen-repair-brooklyn`} />
      </Helmet>
      
      <ServicePageSchema
        serviceName={serviceName}
        serviceDescription={serviceDescription}
        serviceType="iPhone Screen Repair"
        offers={offers}
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              iPhone Screen Repair in Brooklyn
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Cracked or damaged iPhone screen? Get same-day repairs with quality parts and warranty. 
              Proudly serving Crown Heights, Prospect Heights, Park Slope, and all of Brooklyn.
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

          {/* Why Choose Us */}
          <section className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Same-Day Service</h3>
                <p className="text-sm text-muted-foreground">Most iPhone screen repairs completed in 30-60 minutes</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Quality Parts</h3>
                <p className="text-sm text-muted-foreground">High-quality replacement screens with warranty</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Fair Pricing</h3>
                <p className="text-sm text-muted-foreground">Competitive rates with transparent pricing</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">All iPhone Models</h3>
                <p className="text-sm text-muted-foreground">From iPhone 6 to latest iPhone 15 series</p>
              </div>
            </div>
          </section>

          {/* Supported Models */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">iPhone Models We Repair</h2>
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

          {/* Common Issues */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Common iPhone Screen Problems We Fix</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Cracked Glass</h3>
                <p className="text-sm text-muted-foreground">
                  Shattered or cracked front glass from drops or impacts. We replace the entire display assembly.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">LCD/OLED Damage</h3>
                <p className="text-sm text-muted-foreground">
                  Black spots, lines, or color issues on the display. Full screen replacement restores clarity.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-foreground">Touch Not Working</h3>
                <p className="text-sm text-muted-foreground">
                  Unresponsive touch or ghost touches. New digitizer restores full touch functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="max-w-4xl mx-auto mb-16 bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Visit Our Brooklyn Repair Shop</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground">
                <strong>{BUSINESS_INFO.address.fullAddress}</strong>
              </p>
              <p className="text-muted-foreground">
                Conveniently located in Crown Heights, easily accessible from Prospect Heights, Park Slope, 
                Bed-Stuy, Clinton Hill, and surrounding Brooklyn neighborhoods.
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

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Fix Your iPhone Screen?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Walk in or book an appointment. Most repairs completed in under an hour.
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

export default IPhoneScreenRepair;
