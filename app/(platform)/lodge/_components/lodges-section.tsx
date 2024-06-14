import * as React from "react";
import { LodgeExcerpt } from "./lodge-excerpt";

function LodgesSection() {
  const mockLodges = [
    {
      id: "1",
      title: "Cozy Campus Cottage",
      type: "HOUSE",
      bedrooms: 3,
      bathrooms: 2,
      rent: 1200,
      university: "State University",
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      ],
      description:
        "A charming cottage near State University, perfect for students.",
      location: { lat: 40.7128, lng: -74.006 },
      amenities: ["WiFi", "Parking", "Laundry"],
      deposit: 1200,
      availableFrom: new Date("2024-09-01"),
      availableTo: new Date("2025-08-31"),
    },
    {
      id: "2",
      title: "Modern Downtown Apartment",
      type: "APARTMENT",
      bedrooms: 2,
      bathrooms: 1,
      rent: 1500,
      university: "City College",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      ],
      description:
        "Sleek apartment in the heart of downtown, close to City College.",
      location: { lat: 34.0522, lng: -118.2437 },
      amenities: ["Gym", "Pool", "Security"],
      deposit: 1500,
      availableFrom: new Date("2024-08-15"),
      availableTo: new Date("2025-07-31"),
    },
    {
      id: "3",
      title: "Spacious Suburban Home",
      type: "HOUSE",
      bedrooms: 4,
      bathrooms: 3,
      rent: 2000,
      university: "Tech Institute",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
      ],
      description:
        "Large family home in a quiet suburb, ideal for Tech Institute students.",
      location: { lat: 37.7749, lng: -122.4194 },
      amenities: ["Backyard", "Garage", "Dishwasher"],
      deposit: 2000,
      availableFrom: new Date("2024-09-01"),
      availableTo: new Date("2025-08-31"),
    },
    {
      id: "4",
      title: "Eco-Friendly Studio",
      type: "STUDIO",
      bedrooms: 1,
      bathrooms: 1,
      rent: 800,
      university: "Green University",
      images: [
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
        "https://images.unsplash.com/photo-1617098900591-3f90928e8c54",
      ],
      description: "Sustainable living space close to Green University campus.",
      location: { lat: 45.5231, lng: -122.6765 },
      amenities: ["Solar Panels", "Recycling", "Bike Storage"],
      deposit: 800,
      availableFrom: new Date("2024-08-20"),
      availableTo: new Date("2025-07-31"),
    },
    {
      id: "5",
      title: "Luxury Penthouse",
      type: "APARTMENT",
      bedrooms: 3,
      bathrooms: 2,
      rent: 3000,
      university: "Business School",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      ],
      description:
        "High-end penthouse with stunning views, near Business School.",
      location: { lat: 41.8781, lng: -87.6298 },
      amenities: ["Concierge", "Rooftop Terrace", "Smart Home"],
      deposit: 3000,
      availableFrom: new Date("2024-09-15"),
      availableTo: new Date("2025-09-14"),
    },
  ];

  return (
    <section className="w-full min-h-screen bg-rose-100">
      <div className="container">
        <div>
          <h1>Discover the lodge BEST for you!</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockLodges.map((lodge) => (
            <LodgeExcerpt key={lodge.id} lodge={lodge} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LodgesSection;
