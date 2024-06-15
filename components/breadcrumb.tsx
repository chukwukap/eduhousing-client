import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { title: string; href?: string }[];
}

const Breadcrumbb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <Breadcrumb>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
            ) : (
              <span className="text-gray-500">{item.title}</span>
            )}
            {index !== items.length - 1 && (
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbb;
