"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import Select from "react-select";
import { PricingRange } from "./range-field";
import { Button } from "@/components/ui/button";

type UniversityLocation = {
  value: string;
  label: string;
};

const PropertySearchSection = () => {
  const [pricingRange, setPricingRange] = useState<number[]>([0, 10000]);
  const [university, setUniversity] = useState("");
  const [lodgeType, setLodgeType] = useState("");
  //   const [pricingRange, setPricingRange] = useState([0, 100000]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState([]);

  const universityLocations = [
    { value: "university-of-lagos", label: "University of Lagos" },
    { value: "university-of-ibadan", label: "University of Ibadan" },
    { value: "university-of-benin", label: "University of Benin" },
  ];

  const lodgeTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "flat", label: "Flat" },
    { value: "hostel", label: "Hostel" },
    { value: "self-contain", label: "Self Contain" },
    // Add more lodge types here
  ];
  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/v1/search", {
        body: JSON.stringify({
          university,
          lodgeType,
          // pricingRange,
        }),
      });
      const data = await response.json();

      setSearchResults(data);
    } catch (error) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-16 border py-10">
      <div className="container mt-5 max-w-3xl mx-auto">
        <div className="flex gap-5 justify-between text-sm mb-10">
          <div className="filter-group">
            <label htmlFor="university-location">University</label>
            <Select
              id="university-location"
              options={universityLocations}
              value={universityLocations.find(
                (option) => option.value === university
              )}
              onChange={(option) => setUniversity(option?.value || "")}
              placeholder="Select University"
            />
          </div>
          <div className="filter-group">
            <label htmlFor="lodge-type">Lodge Type:</label>
            <Select
              id="lodge-type"
              options={lodgeTypes}
              value={lodgeTypes.find((option) => option.value === lodgeType)}
              onChange={(option) => setLodgeType(option?.value || "")}
              placeholder="Select Lodge Type"
            />
          </div>
          {/* <div>
            <Label>Pricing Range</Label>
            <Slider
              value={pricingRange}
              onValueChange={(value) => setPricingRange(value)}
              max={100000}
              step={1000}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₦{pricingRange[0].toLocaleString()}</span>
              <span>₦{pricingRange[1].toLocaleString()}</span>
            </div>
          </div> */}
          <PricingRange
            pricingRange={pricingRange}
            setPricingRange={(values) => setPricingRange(() => [...values])}
          />
        </div>
        <div className="search-button">
          <Button
            onClick={handleSearch}
            className="border w-full py-3 rounded-xl px-3"
          >
            {isLoading ? "Loading" : "Search Properties"}{" "}
          </Button>
        </div>
        {error && <div>{error}</div>}

        {searchResults && <div>Search results goes here</div>}
      </div>
    </section>
  );
};

export default PropertySearchSection;
