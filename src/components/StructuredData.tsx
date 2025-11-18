import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/businessInfo";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_INFO.website,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "description": BUSINESS_INFO.description,
    "url": BUSINESS_INFO.website,
    "telephone": `+${BUSINESS_INFO.phoneTel}`,
    "email": BUSINESS_INFO.email,
    "image": `${BUSINESS_INFO.website}/Final-Logo-copy.png`,
    "logo": `${BUSINESS_INFO.website}/Final-Logo-copy.png`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zipCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": BUSINESS_INFO.hoursStructured.map(day => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day.day,
      "opens": day.open,
      "closes": day.close
    })),
    "areaServed": BUSINESS_INFO.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Device Repair Services",
      "itemListElement": BUSINESS_INFO.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": Object.values(BUSINESS_INFO.social).filter(url => url !== "")
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
