import "./globals.css";

export const metadata = {
  title: "HAULa — Gateway X Pitch Package",
  description:
    "HAULa's Gateway X Fall 2026 Fellowship pitch package, answering the 11 questions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
