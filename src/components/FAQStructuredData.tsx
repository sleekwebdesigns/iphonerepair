import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/businessInfo";

const FAQStructuredData = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where are you located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We're at ${BUSINESS_INFO.address.fullAddress}.`
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Walk-ins are welcome. You can also book online or start a ticket on our website."
        }
      },
      {
        "@type": "Question",
        "name": "How long do repairs usually take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many screen and battery repairs are done the same day, depending on parts and how busy we are."
        }
      },
      {
        "@type": "Question",
        "name": "What forms of payment do you take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash and most major cards. Ask in-store for details."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an iPhone screen repair take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most iPhone screen repairs take about 30–90 minutes, depending on the model and workload."
        }
      },
      {
        "@type": "Question",
        "name": "Will my data be erased during repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most screen and battery repairs, your data stays safe. Still, we recommend backing up when you can."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use original Apple parts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use high-quality replacement parts tested for performance. We'll explain options and pricing before you decide."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair all Android brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We repair many major Android brands, including Samsung. For less common models, call first so we can confirm."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair iPad and other tablet screens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we repair iPad and many other tablet screens."
        }
      },
      {
        "@type": "Question",
        "name": "My laptop is very slow. Can you speed it up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can clean up software, remove viruses, and offer SSD upgrades to make your laptop much faster."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
};

export default FAQStructuredData;
