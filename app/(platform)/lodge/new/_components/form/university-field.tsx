"use client";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface UniversityFieldProps {
  form: UseFormReturn<any>;
}

const universities = [
  { value: "unn", label: "University of Nigeria" },
  { value: "uniben", label: "University of Benin" },
  { value: "unical", label: "University of Calabar" },
  { value: "uniport", label: "University of PortHarcourt" },
  { value: "unilag", label: "University of Lagos" },
  { value: "esut", label: "Enugu state university" },
];

export const UniversityField: React.FC<UniversityFieldProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="university"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select University</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Select university" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {universities.map((uni) => {
                return (
                  <SelectItem value={uni.value} key={uni.value}>
                    {uni.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormDescription>
            Select education institution nearest to you.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
