import React from "react";

// Import CSS for react-slick
import DetailsSection from "./_components/details-section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface LodgeDetailsProps {
  lodge: {
    id: string;
    title: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    rent: number;
    university: string;
    images: string[];
    description: string;
    location: { lat: number; lng: number };
    amenities: string[];
    deposit: number;
    availableFrom: Date;
    availableTo: Date;
  };
}

function LodgeDetailsPage({ params }: { params: { slug: string } }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const lodge = {
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
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{lodge.title}</h1>

      <DetailsSection />
    </div>
  );
}

export default LodgeDetailsPage;
