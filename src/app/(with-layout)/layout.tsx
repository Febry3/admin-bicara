import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AppBreadcrumb from "@/components/app-breadcrumb";
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader color="#7D944D" showSpinner={false} />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full py-6 px-8">
          <div className="flex flex-row items-center gap-4 justify-between">
            <SidebarTrigger />
            <AppBreadcrumb />
          </div>
          <div className="pt-3 w-full">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
