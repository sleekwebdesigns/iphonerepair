import { Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About FLM 380 Wireless
            </h1>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  FLM 380 Wireless is a local repair shop in Brooklyn focused on fast, reliable repairs for phones, tablets, and computers.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  We know your devices are important for work, family, and everyday life, so we aim to complete many repairs the same day.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  Our team explains the problem in simple language and gives you a clear price before starting any work.
                </p>

                <p className="text-lg text-muted-foreground">
                  We're proud to serve our neighbors on Rogers Ave and across the Brooklyn community.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a Repair Today?</h2>
              <p className="text-muted-foreground mb-6">
                Visit us or give us a call to get your device fixed fast
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:13474507344"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call 347-450-7344
                </a>
                <a
                  href="https://www.google.com/maps/dir//232+Rogers+Ave,+Brooklyn,+NY+11225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-card border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  Get Directions
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                232 Rogers Ave, Brooklyn, NY 11225
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
