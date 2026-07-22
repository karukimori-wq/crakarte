import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crakarte | クリエイターの仕事を、ひとつのカルテに。",
  description: "個人クリエイター向けクライアント案件管理アプリ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
