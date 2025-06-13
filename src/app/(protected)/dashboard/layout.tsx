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
        <div className="flex-1 overflow-y-auto p-8 pb-24">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0">
          <BottomNav />
        </div>
      </div>
    </QueryClientProvider>
  );
}