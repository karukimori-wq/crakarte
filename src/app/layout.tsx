import type { Metadata } from "next";
import "./globals.css";
import AppNav from "@/components/AppNav";

export const metadata: Metadata = {
  title: "Crakarte | クリエイターの仕事を、ひとつのカルテに。",
  description: "個人クリエイター向けクライアント案件管理アプリ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body><AppNav />{children}</body>
    </html>
  );
}
