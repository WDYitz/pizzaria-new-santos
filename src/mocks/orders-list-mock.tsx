import { OrderSkeleton } from "../components/order-skeleton";

const OrdersMock = () => {
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <OrderSkeleton />
      ))}
    </>
  );
};

export default OrdersMock;
