"use client";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
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
        <FormItem className="flex flex-col">
          <FormLabel className="text-sm font-medium text-gray-700 mb-1">
            Nearby University
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? universities.find(
                        (university) => university.value === field.value
                      )?.label
                    : "Select university"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0">
              <Command>
                <CommandInput placeholder="Search university..." />
                <CommandEmpty>No university found.</CommandEmpty>
                <CommandGroup>
                  {/* {universities.map((university) => (
                    <CommandItem
                      key={university.value}
                      value={university.value}
                      onSelect={(currentValue) => {
                        form.setValue("university", currentValue);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          university.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {university.label}
                    </CommandItem>
                  ))} */}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className="text-xs text-red-500 mt-1" />
        </FormItem>
      )}
    />
  );
};
