import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "פיקדונות בנק ירושלים",
  description: "ממריאים לפיקדון מכובד אחר - פלטפורמת פיקדונות דיגיטלית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased font-sans bg-neutral-background text-neutral-text_primary">
        {children}
      </body>
    </html>
  );
}
