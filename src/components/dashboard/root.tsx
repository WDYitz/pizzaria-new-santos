import { ChildrenType } from "@/types/ChildrenType";

export const DashboardRoot = ({ children }: ChildrenType) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {children}
    </div>
  );
};
