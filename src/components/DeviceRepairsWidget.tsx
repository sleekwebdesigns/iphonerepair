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
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <style type='text/css'>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body { 
      width: 100%;
      height: 100%;
      overflow: hidden; 
    }
    .rs-widget-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
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
    <section className="w-full bg-background">
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center py-6 bg-muted/30">
          Repair Starts Here
        </h2>

        {loading && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Loading device repair widget...</p>
            <p className="text-sm mt-2">This may take a few moments</p>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center m-4">
            <p className="text-destructive font-medium mb-2">Widget Loading Error</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}

        {blobUrl && !error && (
          <div className="w-full">
            <iframe
              src={blobUrl}
              style={{
                width: '100%',
                height: 'calc(100vh - 140px)',
                minHeight: '800px',
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
