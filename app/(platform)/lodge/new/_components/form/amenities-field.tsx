import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Wifi, Car, Droplet, Zap } from "lucide-react"; // Assuming you're using lucide-react for icons

const amenities = [
  { name: "WiFi", icon: Wifi },
  { name: "Parking", icon: Car },
  { name: "Water", icon: Droplet },
  { name: "Electricity", icon: Zap },
];

export const StyledAmenitiesField = ({ form }: { form: any }) => (
  <FormField
    control={form.control}
    name="amenities"
    render={() => (
      <FormItem className="space-y-4">
        <FormLabel className="text-lg font-semibold text-gray-700">
          Amenities
        </FormLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity) => (
            <FormField
              key={amenity.name}
              control={form.control}
              name="amenities"
              render={({ field }) => {
                const Icon = amenity.icon;
                return (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <label
                        className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                          field.value?.includes(amenity.name)
                            ? "bg-indigo-50 border-indigo-500"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Checkbox
                          checked={field.value?.includes(amenity.name)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, amenity.name])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== amenity.name
                                  )
                                );
                          }}
                          className="sr-only"
                        />
                        <Icon
                          className={`h-6 w-6 ${
                            field.value?.includes(amenity.name)
                              ? "text-indigo-500"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            field.value?.includes(amenity.name)
                              ? "text-indigo-700"
                              : "text-gray-700"
                          }`}
                        >
                          {amenity.name}
                        </span>
                      </label>
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          ))}
        </div>
        <FormMessage className="text-sm text-red-500" />
      </FormItem>
    )}
  />
);
