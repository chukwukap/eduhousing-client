import React from "react";
import { Range, getTrackBackground } from "react-range";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface PricingRangeProps {
  pricingRange: number[];
  setPricingRange: (value: number[]) => void;
}

export const PricingRange: React.FC<PricingRangeProps> = ({
  pricingRange,
  setPricingRange,
}) => {
  const MIN = 0;
  const MAX = 100000;
  const STEP = 1000;

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Label className="text-lg font-semibold text-gray-700">
            Pricing Range
          </Label>
          <span className="text-sm font-medium text-gray-500">
            ₦{pricingRange[0].toLocaleString()} - ₦
            {pricingRange[1].toLocaleString()}
          </span>
        </div>

        <Range
          values={pricingRange}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setPricingRange(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="h-9 flex w-full"
            >
              <div
                ref={props.ref}
                className="h-1 w-full rounded-full self-center"
                style={{
                  background: getTrackBackground({
                    values: pricingRange,
                    colors: ["#f3f4f6", "#3b82f6", "#f3f4f6"],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              className={`h-5 w-5 rounded-full bg-white shadow flex items-center justify-center ${
                isDragged ? "ring-4 ring-blue-200" : ""
              }`}
            >
              <div className="h-3 w-3 rounded-full bg-blue-500" />
            </div>
          )}
        />

        <div className="flex justify-between items-center text-sm font-medium text-gray-600">
          <span>₦{MIN.toLocaleString()}</span>
          <span>₦{MAX.toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
};
