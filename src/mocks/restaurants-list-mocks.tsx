import { RestaurantSkeleton } from "@/components/restaurant-skeleton";

const RestaurantsMock = () => {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <RestaurantSkeleton />
      ))}
    </>
  );
};

export default RestaurantsMock;
