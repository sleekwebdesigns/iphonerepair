const BookingWidget = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Book Your Repair or Check Prices
        </h2>

        <style>
          {`
            .rs-widget-container {
              position: relative;
              padding-bottom: 56.25%;
              padding-top: 35px;
              height: 100%;
            }
            .rs-widget-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          `}
        </style>

        <div className="rs-widget-container max-w-5xl mx-auto">
          <script
            src="https://wefixitcrm.flm380.com/bookings/includr.js?scrolling=no&height=800"
            async
          />
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
