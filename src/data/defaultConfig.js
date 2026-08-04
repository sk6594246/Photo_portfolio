export const defaultConfig = {
  photographer: {
    name: "PhotoPortfolio Studio",
    tagline: "Capturing Unforgettable Moments & Fine Art Timelines",
    bio: "Visual storyteller specializing in emotional wedding moments, editorial portraits, epic landscapes, and commercial photography. Powered by high-resolution Google Photos integration.",
    heroImage: "/images/wedding.jpg"
  },
  contact: {
    phone: "+1 (555) 234-5678",
    whatsapp: "+15552345678",
    email: "contact@photoportfolio.studio",
    address: "Studio 402, Creative Arts District, San Francisco, CA 94107",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM EST"
  },
  googlePhotos: {
    albumUrl: "https://photos.app.goo.gl/sample-album-link",
    albumTitle: "Official Client Portfolio Album (Google Photos)",
    autoSyncEnabled: true,
    lastSynced: "Just now"
  },
  services: [
    {
      id: "service-1",
      title: "Wedding & Romance Storytelling",
      tagline: "Full day emotional coverage with 2 key photographers",
      price: "Starting at $2,499",
      icon: "Heart",
      description: "Documenting your special day from pre-ceremony preparations to grand receptions. Includes drone shots and hand-edited master gallery.",
      features: [
        "Up to 10 hours of active coverage",
        "High-resolution Google Album delivery",
        "Includes 500+ retouched master photos",
        "Complimentary engagement photo session",
        "Online print shop access"
      ]
    },
    {
      id: "service-2",
      title: "Editorial & Portrait Sessions",
      tagline: "Personal branding, creative portraits & fashion shoots",
      price: "Starting at $499",
      icon: "User",
      description: "Designed for artists, professionals, and models looking for magazine-grade portraits with dynamic studio or outdoor lighting.",
      features: [
        "2-hour dedicated studio or location shoot",
        "3 outfit changes included",
        "25 high-end retouched digital portraits",
        "Full commercial usage release",
        "Google Photos fast delivery link"
      ]
    },
    {
      id: "service-3",
      title: "Landscape & Fine Art Prints",
      tagline: "Bespoke nature prints for interiors & commercial spaces",
      price: "Starting at $299",
      icon: "Image",
      description: "Original limited-edition fine art landscape photography printed on premium museum-grade acrylic and archival metallic canvas.",
      features: [
        "Signed & numbered authenticity certificate",
        "Custom framing and acrylic finish options",
        "Free worldwide insured shipping",
        "Digital license for corporate backgrounds",
        "High DPI color calibration"
      ]
    },
    {
      id: "service-4",
      title: "Event & Commercial Coverage",
      tagline: "Corporate summits, galas, festivals & product launches",
      price: "Starting at $899",
      icon: "Camera",
      description: "Fast-turnaround event photography focused on keynotes, attendee engagement, branding details, and social media highlights.",
      features: [
        "Half-day or full-day coverage available",
        "Same-day press photo delivery option",
        "Google Photos shared album for instant event access",
        "Full commercial & PR distribution license",
        "Multiple photographer team setup"
      ]
    }
  ],
  termsOfBusiness: [
    {
      id: "term-1",
      title: "1. Booking & Retainer Deposit",
      content: "A non-refundable retainer fee of 30% of the total contract price is required upon booking confirmation to secure your date. Dates are allocated on a first-come, first-served basis."
    },
    {
      id: "term-2",
      title: "2. Payment Schedule & Final Settlement",
      content: "The remaining balance of 70% must be cleared no later than 7 calendar days prior to the date of event/shoot. Deliverables will be released only after final payment has been fully settled."
    },
    {
      id: "term-3",
      title: "3. Image Delivery & Google Photos Album Access",
      content: "Proof galleries are delivered within 14 business days via a private, high-resolution Google Photos Album link. Final retouched master images are maintained on cloud backup for 12 months."
    },
    {
      id: "term-4",
      title: "4. Copyright, Licensing & Personal Usage",
      content: "PhotoPortfolio Studio retains full copyright of all original photographic material. Clients are granted a non-exclusive, perpetual personal usage license for print, personal web, and social media posting with attribution."
    },
    {
      id: "term-5",
      title: "5. Cancellation & Rescheduling Policy",
      content: "If the client cancels more than 30 days before the scheduled event, the retainer may be transferred to a new date within 6 months, subject to availability. Cancellations within 14 days forfeit the retainer."
    }
  ],
  photos: [
    {
      id: "photo-1",
      title: "Golden Hour Romance",
      category: "Wedding",
      url: "/images/wedding.jpg",
      description: "Cinematic portrait captured during golden hour in wildflower field.",
      googlePhotoUrl: "https://photos.google.com"
    },
    {
      id: "photo-2",
      title: "Studio Light & Shadow",
      category: "Portrait",
      url: "/images/portrait.jpg",
      description: "Dramatic rim-light portrait celebrating elegance and form.",
      googlePhotoUrl: "https://photos.google.com"
    },
    {
      id: "photo-3",
      title: "Misty Mountain Sunset",
      category: "Landscape",
      url: "/images/landscape.jpg",
      description: "High altitude alpine reflection in crystal mountain lake.",
      googlePhotoUrl: "https://photos.google.com"
    },
    {
      id: "photo-4",
      title: "Urban Fashion Editorial",
      category: "Editorial",
      url: "/images/fashion.jpg",
      description: "Futuristic street style photography with ambient neon glows.",
      googlePhotoUrl: "https://photos.google.com"
    },
    {
      id: "photo-5",
      title: "Electric Festival Night",
      category: "Events",
      url: "/images/event.jpg",
      description: "High-energy concert stage atmosphere and audience laser lights.",
      googlePhotoUrl: "https://photos.google.com"
    }
  ]
};
