"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

interface ServiceCardProps {
    title: string,
    description: any,
    icon: any,
    href?: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card 
      className="w-full border-4 border-primary p-4 shadow-2xl sm:p-6 md:p-8 font-karantina"
      role="region"
      aria-labelledby="כותרת-כרטיס"
      aria-describedby="תיאור-כרטיס"
    >
      <CardContent>
        <CardHeader className="w-full flex flex-col justify-center items-center space-y-4">
          <div aria-hidden="true">{icon}</div>
          <CardTitle 
            id="כותרת-כרטיס"
            className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold"
          >
            {title || ""} 
          </CardTitle>
        </CardHeader>
        <CardDescription 
          id="תיאור-כרטיס"
          className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-center font-light"
        >
          { description || "" }
        </CardDescription>
      </CardContent>
    </Card>
  );
}
