"use client";

import React, { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LodgeType, lodgeSchema } from "@/lib/zod-schemas";
import { DollarSign, InfoIcon, Loader, Minus, Plus } from "lucide-react";
import { ImageUpload } from "./image-upload";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StyledAmenitiesField } from "./amenities-field";
import { UniversityField } from "./university-field";

interface ListLodgeFormValues {
  title: string;
  description: string;
  type: string;
  location: {
    city: string;
    country: string;
  };
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: FileList | null;
  rent: number;
  deposit: number;
  university: string;
  availableFrom: Date;
  availableTo: Date;
}

function CreateLodgeForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LodgeType>({
    resolver: zodResolver(lodgeSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "SELF_CONTAIN",
      location: {
        lat: 3,
        lng: 5,
      },
      bedrooms: 0,
      bathrooms: 0,
      amenities: [],
      images: [],
      rent: 0,
      deposit: 0,
      university: "",
      availableFrom: new Date(),
      availableTo: new Date(),
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch("/api/user-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error submitting data");
      }

      const responseData = await response.json();
      console.log("Form submission successful:", responseData);
      // Handle successful submission (e.g., redirect, display success message)
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle errors appropriately (e.g., display error messages to the user)
    }
  };

  return (
    <div className="py-8">
      <Form {...form} handleSubmit={form.handleSubmit}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Cozy apartment near campus"
                    {...field}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormDescription>
                  A brief, attractive title for your lodge.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your lodge..."
                    {...field}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </FormControl>
                <FormDescription>
                  Provide a detailed description of your lodge.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lodge Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <SelectValue placeholder="Select a lodge type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SELF_CONTAIN">Self Contain</SelectItem>
                    <SelectItem value="APARTMENT">Apartment</SelectItem>
                    <SelectItem value="HOUSE">House</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the type of lodge youre listing.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location.lng"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  @todo: integrate Google map for choosing location
                </FormLabel>
                <FormControl>
                  <div>nothing here</div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Number of Bedrooms
                </FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(1, (field.value || 1) - 1))
                      }
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value) || 1)
                      }
                      className="h-10 w-20 text-center"
                      min={1}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => field.onChange((field.value || 1) + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700">
                  Number of Bathrooms
                </FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(1, (field.value || 1) - 1))
                      }
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        field.onChange(parseInt(e.target.value) || 1);
                      }}
                      step="0.5"
                      min="0.5"
                      className="h-10 w-20 text-center"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => field.onChange((field.value || 1) + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <StyledAmenitiesField form={form} />

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => <ImageUpload field={field} form={form} />}
          />

          <FormField
            control={form.control}
            name="rent"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center">
                  Monthly Rent
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InfoIcon className="h-4 w-4 ml-2 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter the monthly rent amount in NGN.</p>
                    </TooltipContent>
                  </Tooltip>
                </FormLabel>
                <FormControl>
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <DollarSign
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                      className="block w-full rounded-md border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="0.00"
                      min="0"
                      step="10"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="price-currency"
                      >
                        NGN
                      </span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-sm text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deposit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deposit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <UniversityField form={form} />
          {/* <FormField

          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nearby University</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

          {/* <FormField
        control={form.control}
        name="availableFrom"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Available From</FormLabel>
            <DatePicker date={field.value} setDate={field.onChange} />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="availableTo"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Available To</FormLabel>
            <DatePicker date={field.value} setDate={field.onChange} />
            <FormMessage />
          </FormItem>
        )}
      /> */}

          {/* ... */}

          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            List Lodge
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateLodgeForm;
