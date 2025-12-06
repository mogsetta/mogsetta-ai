export const metadata = {
  title: "Mogsetta Backend",
  description: "API Server for Mogsetta AI Coaches"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
