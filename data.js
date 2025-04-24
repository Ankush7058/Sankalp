/**
 * Mountain Bliss - Data for the website
 */

// Amenities data
const amenitiesData = [
    {
      icon: 'fa-swimming-pool',
      title: 'Infinity Edge Pool',
      description: 'Heated pool with panoramic mountain views, creating the illusion of swimming into the horizon.'
    },
    {
      icon: 'fa-spa',
      title: 'Luxury Spa & Wellness',
      description: 'Full-service spa featuring massage therapy, sauna, steam room, and cold plunge.'
    },
    {
      icon: 'fa-hiking',
      title: 'Private Hiking Trails',
      description: 'Exclusive trail network spanning over 25 miles through pristine wilderness.'
    },
    {
      icon: 'fa-utensils',
      title: 'Fine Dining Restaurant',
      description: 'Farm-to-table cuisine prepared by award-winning chefs using local ingredients.'
    },
    {
      icon: 'fa-dumbbell',
      title: 'State-of-the-Art Fitness',
      description: 'Comprehensive fitness facility with personal training and group classes.'
    },
    {
      icon: 'fa-wine-glass-alt',
      title: 'Wine Cellar & Tasting',
      description: 'Temperature-controlled wine storage with regular tastings and sommelier service.'
    }
  ];
  
  // Nearby attractions
  const nearbyAttractions = [
    {
      icon: 'fa-mountain',
      name: 'Alpine Ski Resort',
      distance: '15 minutes drive'
    },
    {
      icon: 'fa-water',
      name: 'Crystal Lake',
      distance: '10 minutes drive'
    },
    {
      icon: 'fa-store',
      name: 'Mountain Village',
      distance: '20 minutes drive'
    },
    {
      icon: 'fa-plane',
      name: 'International Airport',
      distance: '45 minutes drive'
    }
  ];
  
  // Property plans
  const propertyPlans = [
    {
      name: 'The Alpine Residence',
      category: 'Premium',
      image: 'b1.jpg',
      sqft: '3,200 sq.ft',
      beds: 4,
      baths: 3.5,
      price: '$2.4M',
      features: [
        "Chef's kitchen with premium appliances",
        "Primary suite with mountain views",
        "Floor-to-ceiling stone fireplace",
        "Private outdoor hot tub",
        "2-car heated garage"
      ]
    },
    {
      name: 'The Summit Estate',
      category: 'Luxury',
      image: 'b2.jpg',
      sqft: '4,500 sq.ft',
      beds: 5,
      baths: 4.5,
      price: '$3.8M',
      features: [
        "Butler's pantry and wine cellar",
        "Expansive outdoor living areas",
        "Home theater and game room",
        "Private sauna and spa room",
        "3-car garage with workshop"
      ]
    },
    {
      name: 'The Aspen Retreat',
      category: 'Elite',
      image: 'b3.jpg',
      sqft: '6,800 sq.ft',
      beds: 6,
      baths: 6.5,
      price: '$5.2M',
      features: [
        "Indoor swimming pool with mountain views",
        "Separate guest house (1,500 sq.ft)",
        "Fully equipped home gym",
        "Smart home technology throughout",
        "4-car garage with EV charging"
      ]
    }
  ];
  
  // Gallery images
  const galleryImages = [
    {
      url: 'b1.jpg',
      title: 'Grand Entrance',
      subtitle: 'The Alpine Residence',
      category: 'exteriors'
    },
    {
      url: 'b2.jpg',
      title: 'Living Room',
      subtitle: 'The Summit Estate',
      category: 'interiors'
    },
    {
      url: 'b3.jpg',
      title: 'Infinity Edge Pool',
      subtitle: 'Community Amenity',
      category: 'amenities'
    },
    {
      url: 'b4.jpg',
      title: 'Sunset Views',
      subtitle: 'From The Aspen Retreat',
      category: 'exteriors'
    },
    {
      url: 'b6.jpg',
      title: 'Chef\'s Kitchen',
      subtitle: 'The Alpine Residence',
      category: 'interiors'
    },
    {
      url: 'b5.jpg',
      title: 'Wine Cellar',
      subtitle: 'Community Amenity',
      category: 'amenities'
    },
    {
      url: 'p2.jpg',
      title: 'Mountain Backdrop',
      subtitle: 'Property Views',
      category: 'exteriors'
    },
    {
      url: 'p3.jpg',
      title: 'Master Bedroom',
      subtitle: 'The Aspen Retreat',
      category: 'interiors'
    },
    {
      url: 'p4.jpg',
      title: 'Wellness Center',
      subtitle: 'Community Amenity',
      category: 'amenities'
    }
  ];
  
  // Chat responses for the chat widget
  const agentResponses = [
    "Hello! Welcome to Mountain Bliss. How can I assist you today?",
    "I'd be happy to tell you more about our luxury residences. Which property interests you?",
    "The Alpine Residence features 4 bedrooms, 3.5 bathrooms, and spans 3,200 sq.ft. Would you like to schedule a viewing?",
    "Our amenities include an infinity edge pool, luxury spa, private hiking trails, and much more.",
    "I can connect you with our sales team who can provide more detailed information. What's the best time to reach you?",
    "Thank you for your interest! A member of our team will contact you shortly with more information."
  ];