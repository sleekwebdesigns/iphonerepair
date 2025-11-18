import { useEffect, useRef, useState } from 'react';

const BookingWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('[BookingWidget] Starting to load script...');
    
    const script = document.createElement('script');
    script.src = 'https://wefixitcrm.flm380.com/bookings/includr.js?scrolling=no&height=800';
    script.async = true;

    script.onload = () => {
      console.log('[BookingWidget] Script loaded successfully');
      setLoading(false);
    };

    script.onerror = (err) => {
      console.error('[BookingWidget] Script failed to load:', err);
      setError('Failed to load booking widget. Please try again or call us at 347-450-7344.');
      setLoading(false);
    };

    if (containerRef.current) {
      console.log('[BookingWidget] Container found, appending script');
      containerRef.current.appendChild(script);
    } else {
      console.error('[BookingWidget] Container ref is null');
      setError('Widget container not found.');
      setLoading(false);
    }

    return () => {
      if (containerRef.current?.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

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
              width: 100%;
              height: 1200px; /* SAFE HEIGHT FOR ALL WIDGETS */
              overflow: hidden;
            }

            @media (max-width: 768px) {
              .rs-widget-container {
                height: 1500px; /* MOBILE FIX */
              }
            }

            .rs-widget-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: none;
            }
          `}
        </style>

        {loading && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Loading booking widget...</p>
            <p className="text-sm mt-2">This may take a few moments</p>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium mb-2">Widget Loading Error</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}

        <div 
          id="rs-widget-booking-container"
          className="rs-widget-container max-w-5xl mx-auto" 
          ref={containerRef} 
        />
      </div>
    </section>
  );
};

export default BookingWidget;
