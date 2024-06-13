import { useState } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SearchComponent = () => {
  const [university, setUniversity] = useState("");
  const [lodgeType, setLodgeType] = useState("");
  const [pricingRange, setPricingRange] = useState([0, 10000000]);
  const [propertySize, setPropertySize] = useState([0, 1000]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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

      const response = await axios.post("/api/search", {
        university,
        lodgeType,
        pricingRange,
        propertySize,
      });

      setSearchResults(response.data);
    } catch (error) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-[50vh]">
      <div className="container mt-5">
        <div className="search-header">
          <h2>Find Your Perfect Accommodation</h2>
        </div>
        <div className="flex gap-5 text-sm">
          <div className="filter-group">
            <label htmlFor="university-location">University</label>
            <Select
              id="university-location"
              options={universityLocations}
              value={universityLocations.find(
                (option) => option.value === university
              )}
              onChange={(option) => setUniversity(option.value)}
              placeholder="Select University Location"
            />
          </div>
          <div className="filter-group">
            <label htmlFor="lodge-type">Lodge Type:</label>
            <Select
              id="lodge-type"
              options={lodgeTypes}
              value={lodgeTypes.find((option) => option.value === lodgeType)}
              onChange={(option) => setLodgeType(option.value)}
              placeholder="Select Lodge Type"
            />
          </div>
          <div className="filter-group">
            <label>Pricing Range:</label>
            <Slider
              range
              marks={{ 0: "₦0", 10000000: "₦10,000,000" }}
              min={0}
              max={10000000}
              value={pricingRange}
              onChange={(value) => setPricingRange(value)}
            />
            <div className="slider-value">
              ₦{pricingRange[0].toLocaleString()} - ₦
              {pricingRange[1].toLocaleString()}
            </div>
          </div>
          <div className="filter-group">
            <label>Property Size (sqft):</label>
            <Slider
              range
              marks={{ 0: "0", 1000: "1,000" }}
              min={0}
              max={1000}
              value={propertySize}
              onChange={(value) => setPropertySize(value)}
            />
            <div className="slider-value">
              {propertySize[0]} - {propertySize[1]} sqft
            </div>
          </div>
        </div>
        <div className="search-button">
          <button onClick={handleSearch}>Search Properties</button>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;
