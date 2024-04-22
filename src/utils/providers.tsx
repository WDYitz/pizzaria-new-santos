"use client";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: { children: ReactNode }) => {
  const querClient = new QueryClient();

  return (
    <QueryClientProvider client={querClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
