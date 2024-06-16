"use client";

import React from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MapPin,
  BedDouble,
  Bath,
  Wifi,
  Car,
  DollarSign,
  CalendarDays,
} from "lucide-react";
import Slider, { Settings } from "react-slick";
import { Separator } from "@/components/ui/separator";

function DetailsSection() {
  const sliderSettings: Settings = {
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
    <>
      <Slider {...sliderSettings} className="mb-8">
        {lodge.images.map((img, index) => (
          <div key={index} className="h-96">
            <img
              src={img}
              alt={`Lodge image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Lodge Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <BedDouble className="mr-2" />
                    <span>{lodge.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="mr-2" />
                    <span>{lodge.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2" />
                    <span>${lodge.rent.toFixed(2)} / month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="mr-2" />
                    <span>Near {lodge.university}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2" />
                    <span>
                      Available: {format(new Date(lodge.availableFrom), "PP")} -{" "}
                      {format(new Date(lodge.availableTo), "PP")}
                    </span>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-gray-500">{lodge.description}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Type</TableCell>
                    <TableCell>
                      <Badge>{lodge.type}</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bedrooms</TableCell>
                    <TableCell>{lodge.bedrooms}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bathrooms</TableCell>
                    <TableCell>{lodge.bathrooms}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rent</TableCell>
                    <TableCell>${lodge.rent.toFixed(2)} / month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deposit</TableCell>
                    <TableCell>${lodge.deposit.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">University</TableCell>
                    <TableCell>{lodge.university}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Available From
                    </TableCell>
                    <TableCell>
                      {format(new Date(lodge.availableFrom), "PP")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Available To</TableCell>
                    <TableCell>
                      {format(new Date(lodge.availableTo), "PP")}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities">
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-72 w-full rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  {lodge.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Wifi className="mr-2" />{" "}
                      {/* You can use different icons based on amenity type */}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location">
          <Card>
            <CardHeader>
              <CardTitle>Location Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>Latitude: {lodge.location.lat}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>Longitude: {lodge.location.lng}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for map component */}
                <p>Google Map Component</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default DetailsSection;
