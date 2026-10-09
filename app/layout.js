import './globals.css';

export const metadata = {
  title: "Nexa AI - Study Assistant",
  description: "Your AI-powered study assistant for WAEC, NECO and JAMB",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
