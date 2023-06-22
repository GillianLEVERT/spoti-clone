import "./globals.css";
import { Inter } from "next/font/google";
//components
import { Sidebar } from "@/components/Sidebar";
import { SupabaseProvider } from "@/providers/SupabaseProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spoti-Clone",
  description: "NextJS with Supabase Clone of Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
        <Sidebar>{children}</Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
