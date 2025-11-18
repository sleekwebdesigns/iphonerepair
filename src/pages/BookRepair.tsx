import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";

const BookRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Repair Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule your device repair or check pricing using the booking tool below
            </p>
          </div>
        </div>
        
        <BookingWidget />
      </div>

      <Footer />
    </div>
  );
};

export default BookRepair;
