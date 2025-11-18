import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          q: "Where are you located?",
          a: "We're at 232 Rogers Ave, Brooklyn, NY 11225.",
        },
        {
          q: "Do I need an appointment?",
          a: "No. Walk-ins are welcome. You can also book online or start a ticket on our website.",
        },
        {
          q: "How long do repairs usually take?",
          a: "Many screen and battery repairs are done the same day, depending on parts and how busy we are.",
        },
        {
          q: "What forms of payment do you take?",
          a: "We accept cash and most major cards. Ask in-store for details.",
        },
        {
          q: "Do you give a warranty on repairs?",
          a: "Yes, we offer a limited warranty on most repairs. We'll explain coverage before you pay.",
        },
      ],
    },
    {
      title: "iPhone & Smartphone FAQs",
      questions: [
        {
          q: "How long does an iPhone screen repair take?",
          a: "Most iPhone screen repairs take about 30–90 minutes, depending on the model and workload.",
        },
        {
          q: "Will my data be erased during repair?",
          a: "For most screen and battery repairs, your data stays safe. Still, we recommend backing up when you can.",
        },
        {
          q: "Do you use original Apple parts?",
          a: "We use high-quality replacement parts tested for performance. We'll explain options and pricing before you decide.",
        },
        {
          q: "My phone doesn't turn on. Can you still help?",
          a: "Yes. We can run a diagnostic to see if it's the battery, screen, charging port, or something else.",
        },
      ],
    },
    {
      title: "Samsung & Android FAQs",
      questions: [
        {
          q: "Can you repair all Android brands?",
          a: "We repair many major Android brands, including Samsung. For less common models, call first so we can confirm.",
        },
        {
          q: "My Samsung screen is cracked but still works. Should I fix it now?",
          a: "It's best to repair it soon. Cracks can spread, and dust or moisture can cause more damage.",
        },
        {
          q: "Do you fix software issues like boot loops?",
          a: "In some cases, yes. We can check for software problems, but it depends on the device and issue.",
        },
      ],
    },
    {
      title: "iPad & Tablet FAQs",
      questions: [
        {
          q: "Do you repair iPad and other tablet screens?",
          a: "Yes, we repair iPad and many other tablet screens.",
        },
        {
          q: "Why do tablet repairs sometimes take longer?",
          a: "Tablet screens and parts can be harder to remove and may need special ordering, so repairs can take longer.",
        },
        {
          q: "Can you help if my tablet battery doesn't hold a charge?",
          a: "Yes. We can replace many tablet batteries or diagnose the charging issue.",
        },
      ],
    },
    {
      title: "Computer & Laptop FAQs",
      questions: [
        {
          q: "My laptop is very slow. Can you speed it up?",
          a: "Yes. We can clean up software, remove viruses, and offer SSD upgrades to make your laptop much faster.",
        },
        {
          q: "Do you repair both Mac and Windows computers?",
          a: "Yes, we work on many MacBook and Windows laptops, as well as some desktops. Bring your model and we'll let you know what's possible.",
        },
        {
          q: "Can you fix broken laptop screens?",
          a: "In many cases, yes. We can replace cracked or dead laptop screens, depending on the model and part availability.",
        },
        {
          q: "Can you recover my data?",
          a: "We can often move data from an old or damaged device, but recovery isn't always guaranteed. We'll explain your options after a diagnostic.",
        },
        {
          q: "Do you reinstall or reset operating systems?",
          a: "Yes. We can reinstall Windows or macOS and help you start fresh. This can erase data, so we recommend a backup when possible.",
        },
      ],
    },
    {
      title: "Ticket & Booking FAQs",
      questions: [
        {
          q: "How do I start a repair online?",
          a: "Use the 'Book Your Repair' widget or the 'Start a New Service Ticket' form on our website.",
        },
        {
          q: "How do I check the status of my repair?",
          a: "Use the 'Existing Ticket Lookup' form on our site. Enter your ticket number and last name to see updates.",
        },
        {
          q: "What if I lose my ticket number?",
          a: "Call us at 347-450-7344 or visit the shop. We'll look you up with your name and phone number.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Find answers to common questions about our repair services
            </p>

            <div className="space-y-12">
              {faqSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-card border border-border rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    {section.title}
                  </h2>

                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${sectionIndex}-${index}`}
                      >
                        <AccordionTrigger className="text-left font-semibold">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-12 bg-primary/5 border-2 border-primary rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Give us a call or visit our shop. We're happy to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:13474507344"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Call 347-450-7344
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-card border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
