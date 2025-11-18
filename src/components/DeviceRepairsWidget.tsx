import { useEffect, useState } from 'react';

const DeviceRepairsWidget = () => {
  const [blobUrl, setBlobUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('[DeviceRepairsWidget] Creating iframe with blob HTML wrapper...');
    
    const embedHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type='text/css'>
    body { 
      margin: 0; 
      padding: 0; 
      overflow: hidden; 
    }
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
      border: none;
    }
  </style>
</head>
<body>
  <div class='rs-widget-container'>
    <script src='https://wefixitcrm.flm380.com/device_repairs/includr.js?height=800&scrolling=no'></script>
  </div>
</body>
</html>
`;

    try {
      const blob = new Blob([embedHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
      console.log('[DeviceRepairsWidget] Blob URL created successfully');
      setLoading(false);
    } catch (err) {
      console.error('[DeviceRepairsWidget] Failed to create blob:', err);
      setError('Failed to initialize device repair widget. Please try again or call us at 347-450-7344.');
      setLoading(false);
    }

    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Device Repair Options
        </h2>

        {loading && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Loading device repair widget...</p>
            <p className="text-sm mt-2">This may take a few moments</p>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium mb-2">Widget Loading Error</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}

        {blobUrl && !error && (
          <div className="max-w-4xl mx-auto">
            <iframe
              src={blobUrl}
              style={{
                width: '100%',
                height: '1200px',
                border: 'none'
              }}
              title="Device Repairs Widget"
              onLoad={() => console.log('[DeviceRepairsWidget] Iframe loaded')}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DeviceRepairsWidget;
