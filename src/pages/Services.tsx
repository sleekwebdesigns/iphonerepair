import { Smartphone, Laptop, Tablet, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavLink } from "@/components/NavLink";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Device Repair Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional repair services for all your devices in Brooklyn
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* iPhone Repairs */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    <NavLink to="/iphone-screen-repair-brooklyn" className="hover:text-primary transition-colors">
                      iPhone Repairs
                    </NavLink>
                  </h2>
                  <p className="text-muted-foreground">Fast, reliable iPhone repair services</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Common iPhone Repairs</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Screen replacement (cracked or unresponsive)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Battery replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Charging port repair</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Back glass repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Camera issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Water damage diagnostics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Samsung & Android */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    <NavLink to="/samsung-repair-brooklyn" className="hover:text-primary transition-colors">
                      Samsung & Android Repairs
                    </NavLink>
                  </h2>
                  <p className="text-muted-foreground">Expert Android device repairs</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Android Repair Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Screen replacement for Samsung, Google Pixel, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Battery replacement</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Charging & power issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Software / boot loop issues</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* iPad & Tablets */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Tablet className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    <NavLink to="/ipad-repair-brooklyn" className="hover:text-primary transition-colors">
                      iPad & Tablet Repairs
                    </NavLink>
                  </h2>
                  <p className="text-muted-foreground">Professional tablet repair services</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tablet Repair Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>iPad and tablet screen replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Battery replacement services</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Complete diagnostics and troubleshooting</span>
                </li>
              </ul>
            </div>

            {/* Computer & Laptop */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    <NavLink to="/macbook-repair-brooklyn" className="hover:text-primary transition-colors">
                      Computer & Laptop Repairs
                    </NavLink>
                  </h2>
                  <p className="text-muted-foreground">Mac and PC repair specialists</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Computer & Laptop Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Virus removal & system cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Slow computer optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Laptop screen replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Keyboard replacement</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SSD upgrades for faster performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Charging port repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>OS reinstall (Windows / macOS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Data transfer & backup services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center bg-muted/30 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Not Sure What You Need?</h3>
            <p className="text-muted-foreground mb-6">
              Call us at <a href="tel:13474507344" className="text-primary font-semibold hover:text-primary-dark">347-450-7344</a> or visit us at 232 Rogers Ave, Brooklyn, NY 11225. We'll diagnose your device and give you a clear price before starting any work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:13474507344"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Call 347-450-7344
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-card border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
