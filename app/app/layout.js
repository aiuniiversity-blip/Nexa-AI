export const metadata = {
  title: "Nexa AI Study Assistant"
  description: "Your AI study assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
