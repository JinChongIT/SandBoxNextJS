

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>Hello world</p>
        {children}
      </body>
    </html>
  );
}
