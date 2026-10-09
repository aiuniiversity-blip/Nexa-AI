import './globals.css';

export const metadata = {
  title: 'Nexa AI | Student Study Companion',
  description: 'Premium AI-powered study assistant for Nigerian students and beyond.',
  keywords: ['Nexa AI', 'AI tutor', 'study app', 'student dashboard'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
