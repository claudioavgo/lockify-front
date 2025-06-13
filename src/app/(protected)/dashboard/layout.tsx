"use client";

import BottomNav from "./_components/nav/bottom-nav";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col dark bg-background font-mono text-foreground">
        <div className="flex-1 h-full p-8">
          {children}
        </div>
        <BottomNav />
      </div>
    </QueryClientProvider>
  );
}