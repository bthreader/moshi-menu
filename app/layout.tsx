import './globals.css';

export const metadata = {
  title: 'Moshi Menu',
  description: 'Meal planning for those that like to collaborate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
