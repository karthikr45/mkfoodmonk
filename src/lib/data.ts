export type Store = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export type Video = {
  id: string;
  title: string;
  chef: string;
  duration: string;
  views: string;
  thumbnail: string;
  category: string;
};

export const stores: Store[] = [
  {
    id: "the-saffron-table",
    name: "The Saffron Table",
    cuisine: "Modern Indian",
    rating: 4.8,
    deliveryTime: "25-30 min",
    priceForTwo: "₹1,200 for two",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    tags: ["Premium", "Bestseller"],
    featured: true,
  },
  {
    id: "monk-fire-grill",
    name: "Monk Fire Grill",
    cuisine: "Charcoal BBQ",
    rating: 4.7,
    deliveryTime: "30-35 min",
    priceForTwo: "₹1,500 for two",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    tags: ["Smoky", "Chef's Pick"],
    featured: true,
  },
  {
    id: "verde-bowl",
    name: "Verde Bowl",
    cuisine: "Healthy & Vegan",
    rating: 4.6,
    deliveryTime: "20-25 min",
    priceForTwo: "₹800 for two",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    tags: ["Vegan", "Cold-pressed"],
  },
  {
    id: "noodle-republic",
    name: "Noodle Republic",
    cuisine: "Pan-Asian",
    rating: 4.5,
    deliveryTime: "28-32 min",
    priceForTwo: "₹950 for two",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    tags: ["Wok-tossed", "Spicy"],
  },
  {
    id: "patisserie-lumiere",
    name: "Patisserie Lumière",
    cuisine: "French Bakery",
    rating: 4.9,
    deliveryTime: "22-26 min",
    priceForTwo: "₹700 for two",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    tags: ["Artisan", "Premium"],
    featured: true,
  },
  {
    id: "coastal-catch",
    name: "Coastal Catch",
    cuisine: "Seafood",
    rating: 4.7,
    deliveryTime: "32-38 min",
    priceForTwo: "₹1,800 for two",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    tags: ["Fresh", "Coastal"],
  },
];

export const videos: Video[] = [
  {
    id: "smoked-tandoori",
    title: "The Art of Smoked Tandoori",
    chef: "Chef Aarav Mehta",
    duration: "08:42",
    views: "1.2M",
    thumbnail:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80",
    category: "Signature",
  },
  {
    id: "ramen-from-scratch",
    title: "Ramen From Scratch in 12 Steps",
    chef: "Chef Mei Lin",
    duration: "14:05",
    views: "880K",
    thumbnail:
      "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=900&q=80",
    category: "Masterclass",
  },
  {
    id: "plating-like-a-pro",
    title: "Plating Like a Michelin Pro",
    chef: "Chef Lucia Romano",
    duration: "06:18",
    views: "2.1M",
    thumbnail:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    category: "Technique",
  },
  {
    id: "dessert-illusions",
    title: "Dessert Illusions & Sugar Work",
    chef: "Chef Noah Carter",
    duration: "11:30",
    views: "640K",
    thumbnail:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    category: "Pastry",
  },
];
