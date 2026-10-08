export const metadata = {
  title: "Nexa AI",
  description: "Your AI study assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
