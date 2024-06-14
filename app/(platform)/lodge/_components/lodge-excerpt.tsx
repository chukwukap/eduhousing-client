import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LodgeExcerptProps {
  lodge: {
    id: string;
    title: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    rent: number;
    university: string;
    images: string[];
  };
}

export const LodgeExcerpt: React.FC<LodgeExcerptProps> = ({ lodge }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{lodge.title}</CardTitle>
        <Badge variant="secondary">{lodge.type}</Badge>
      </CardHeader>
      <CardContent>
        <img
          src={lodge.images[0]}
          alt={lodge.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            {lodge.bedrooms} bed • {lodge.bathrooms} bath
          </p>
          <p className="text-lg font-semibold">
            ${lodge.rent.toFixed(2)} / month
          </p>
          <p className="text-sm text-gray-500">Near {lodge.university}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/lodges/${lodge.id}`} passHref>
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
