import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/businessInfo";

interface ServicePageSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  priceRange?: string;
  offers?: Array<{
    name: string;
    description: string;
  }>;
}

const ServicePageSchema = ({ 
  serviceName, 
  serviceDescription, 
  serviceType,
  priceRange = "$$",
  offers = []
}: ServicePageSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": BUSINESS_INFO.website,
      "name": BUSINESS_INFO.name,
      "telephone": `+${BUSINESS_INFO.phoneTel}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.state,
        "postalCode": BUSINESS_INFO.address.zipCode,
        "addressCountry": "US"
      }
    },
    "areaServed": BUSINESS_INFO.serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "priceRange": priceRange,
    "hasOfferCatalog": offers.length > 0 ? {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": offers.map((offer, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        "position": index + 1
      }))
    } : undefined,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BUSINESS_INFO.website
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${BUSINESS_INFO.website}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": window.location.href
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default ServicePageSchema;
