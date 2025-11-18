import { Smartphone, Laptop, Tablet, Clock, DollarSign, Award, MapPin, Phone, Navigation, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import DeviceRepairsWidget from "@/components/DeviceRepairsWidget";
import TicketForms from "@/components/TicketForms";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast iPhone, Computer & Device Repair in Brooklyn
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Same-day repairs for phones, tablets, laptops and more.
            </p>

            {/* NAP Block */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 inline-block">
              <p className="font-bold text-lg mb-2">FLM 380 Wireless</p>
              <p className="text-muted-foreground mb-2">232 Rogers Ave, Brooklyn, NY 11225</p>
              <a href="tel:13474507344" className="text-primary font-semibold text-xl hover:text-primary-dark flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                347-450-7344
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:13474507344"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir//232+Rogers+Ave,+Brooklyn,+NY+11225"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Brooklyn Chooses FLM 380 Wireless
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground text-sm">Many repairs done the same day</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground text-sm">Clear prices before we start</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Parts</h3>
              <p className="text-muted-foreground text-sm">Reliable, tested replacement parts</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Local Experts</h3>
              <p className="text-muted-foreground text-sm">Neighborhood shop on Rogers Ave</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Repair Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We repair phones, tablets, and computers. If you're not sure what's wrong, we'll diagnose it for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* iPhone Repairs */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">iPhone Repairs</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Screen replacement</li>
                <li>• Battery replacement</li>
                <li>• Charging port repair</li>
                <li>• Back glass repair</li>
                <li>• Camera issues</li>
                <li>• Water damage diagnostics</li>
              </ul>
            </div>

            {/* Samsung & Android */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Samsung & Android Repairs</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Screen replacement</li>
                <li>• Battery replacement</li>
                <li>• Charging & power issues</li>
                <li>• Some software / boot issues</li>
              </ul>
            </div>

            {/* iPad & Tablets */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Tablet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">iPad & Tablet Repairs</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Screen replacement</li>
                <li>• Battery replacement</li>
                <li>• Diagnostics</li>
              </ul>
            </div>

            {/* Computer & Laptop */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Computer & Laptop Repairs</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Virus removal / cleanup</li>
                <li>• Slow computer optimization</li>
                <li>• Laptop screen replacement</li>
                <li>• Keyboard replacement</li>
                <li>• SSD upgrades</li>
                <li>• Charging port repair</li>
                <li>• OS reinstall (Windows / macOS)</li>
                <li>• Data transfer & backup</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Call <a href="tel:13474507344" className="text-primary font-semibold hover:text-primary-dark">347-450-7344</a> to check your device and get a quick quote.
          </p>
        </div>
      </section>

      {/* Booking Widget */}
      <BookingWidget />

      {/* Device Repairs Widget */}
      <DeviceRepairsWidget />

      {/* Ticket Forms */}
      <TicketForms />

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Visit or Call Us</h3>
              <p className="text-muted-foreground text-sm">
                Stop by or call 347-450-7344
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Get a Quick Check & Price</h3>
              <p className="text-muted-foreground text-sm">
                We inspect your device and share the price before we start
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">We Repair & You Pick Up</h3>
              <p className="text-muted-foreground text-sm">
                Many repairs are done the same day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Got my iPhone screen fixed fast and it looks brand new."
              </p>
              <p className="font-semibold text-sm">Brooklyn Customer</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "They cleaned my laptop, and now it runs so much faster."
              </p>
              <p className="font-semibold text-sm">Crown Heights Resident</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Friendly and honest shop. Best spot on Rogers Ave."
              </p>
              <p className="font-semibold text-sm">Local Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us / Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Visit FLM 380 Wireless
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Location</h3>
                  <p className="text-muted-foreground mb-4">
                    232 Rogers Ave<br />
                    Brooklyn, NY 11225
                  </p>
                  <p className="font-semibold text-primary mb-2">
                    <a href="tel:13474507344" className="hover:text-primary-dark">347-450-7344</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We serve Crown Heights, Prospect Lefferts Gardens, Flatbush, and nearby areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Mon–Sat: 10 AM – 7 PM</p>
                    <p>Sun: 11 AM – 5 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96850.73182238804!2d-74.01983917296918!3d40.661069455030045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c9b16f34c23%3A0x4a4dd8b30d31f99e!2sFLM%20380%20WIRELESS!5e0!3m2!1sen!2sus!4v1763443221813!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FLM 380 Wireless Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
