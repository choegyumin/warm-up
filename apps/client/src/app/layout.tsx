const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
RootLayout.displayName = 'RootLayout';

export default RootLayout;
