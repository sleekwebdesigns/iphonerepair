import { useEffect, useRef } from 'react';

const DeviceRepairsWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://wefixitcrm.flm380.com/device_repairs/includr.js?height=800&scrolling=no';
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
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
          Device Repair Options
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

        <div className="rs-widget-container max-w-4xl mx-auto" ref={containerRef} />
      </div>
    </section>
  );
};

export default DeviceRepairsWidget;
