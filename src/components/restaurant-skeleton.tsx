import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

export const RestaurantSkeleton = () => {
  return (
    <Card className="flex items-center gap-4 border-0  bg-light-gray p-4">
      <Skeleton className="h-16 w-16 animate-pulse bg-dark-gray" />
      <div className="flex w-full flex-col space-y-2">
        <Skeleton className="h-4 w-full max-w-48 animate-pulse bg-dark-gray" />
        <Skeleton className="h-4 w-full max-w-80 animate-pulse bg-dark-gray" />
      </div>
    </Card>
  );
};
