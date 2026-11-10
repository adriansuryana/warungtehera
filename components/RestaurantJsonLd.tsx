export default function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "@id": "https://warungtehera.my.id/#restaurant",
    "name": "Warung Teh Hera (WTH)",
    "alternateName": [
      "Warung Teh Hera",
      "WTH",
      "Warung Teh Hera Cipanas",
      "WTH Cipanas"
    ],
    "url": "https://warungtehera.my.id",
    "logo": "https://warungtehera.my.id/wth-logo-01.svg",
    "image": "https://warungtehera.my.id/wth-logo-01.svg",
    "description":
      "Warung Teh Hera (WTH) - Authentic Indonesian Street Comfort Food & Signature Tea di Cipanas, Cianjur. Menu andalan: Nasi Bakar, Crispy Chicken Wings, Sate Taichan Grill, Mix Suke Broth, dan Jasmine Iced Tea segar.",
    "telephone": "+6282130704794",
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, QRIS",
    "servesCuisine": ["Indonesian", "Street Food", "Tea"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jln. Jeprah, Kp. Padarincang RT 004 / RW 004",
      "addressLocality": "Cipanas",
      "addressRegion": "Jawa Barat",
      "postalCode": "43253",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.7412,
      "longitude": 107.0394
    },
    "hasMap": "https://share.google/K7eRGvUQKXlRXPTGR",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://instagram.com/warung_tehera",
      "https://share.google/K7eRGvUQKXlRXPTGR"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/6282130704794?text=Halo%20Warung%20Teh%20Hera,%20saya%20mau%20order",
        "inLanguage": "id-ID",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "FoodEstablishmentReservation"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
