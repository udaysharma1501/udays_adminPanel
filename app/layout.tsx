import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uday's Admin Panel",
  description: "this is uday's admin panel description inside layout.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="dashboard-theme"
        >
          {/* <Navbar />
          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[350px]">
              <Sidebar />
            </div>
            <div className="p-5 w-full md:max-w-[1140px]:">{children}</div>
          </div> */}
          {/* so that the root layout doesnt use the navbar and the sidebar - shifted to main layout */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
