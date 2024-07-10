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
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="w-full border-4 border-primary p-4 shadow-2xl sm:p-6 md:p-8 font-sans">
      <CardContent>
        <CardHeader className="w-full flex flex-col justify-center items-center space-y-4">
          <div>{icon}</div>
          <CardTitle className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            {title || ""} 
          </CardTitle>
        </CardHeader>
        <CardDescription className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          { description || "" }
        </CardDescription>
      </CardContent>
    </Card>
  );
}
