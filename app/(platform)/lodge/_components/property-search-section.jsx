import { useState } from "react";
import Select from "react-select";
// import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import axios from "axios";

const SearchComponent = () => {
  const [university, setUniversity] = useState("");
  const [lodgeType, setLodgeType] = useState("");
  //   const [pricingRange, setPricingRange] = useState([0, 100000]);
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

      const response = await axios.post("/api/v1/search", {
        university,
        lodgeType,
        // pricingRange,
      });

      setSearchResults(response.data);
    } catch (error) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-[30vh] border">
      <div className="container mt-5">
        <div className="flex gap-5 justify-between text-sm mb-10">
          <div className="filter-group">
            <label htmlFor="university-location">University</label>
            <Select
              id="university-location"
              options={universityLocations}
              value={universityLocations.find(
                (option) => option.value === university
              )}
              onChange={(option) => setUniversity(option.value)}
              placeholder="Select University"
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
          {/* <div className="filter-group">
            <label>Pricing Range:</label>
            <Slider
              range
              marks={{ 0: "₦0", 10000000: "₦10,000,000" }}
              min={0}
              max={100000}
              value={pricingRange}
              onChange={(value) => setPricingRange(value)}
            />
            <div className="slider-value">
              ₦{pricingRange[0].toLocaleString()} - ₦
              {pricingRange[1].toLocaleString()}
            </div>
          </div> */}
        </div>
        <div className="search-button">
          <button
            onClick={handleSearch}
            className="border w-full py-3 rounded-xl px-3"
          >
            {isLoading ? "Loading" : "Search Properties"}{" "}
          </button>
        </div>
        {error && <div>{error}</div>}

        {searchResults && <div>Search results goes here</div>}
      </div>
    </section>
  );
};

export default SearchComponent;
