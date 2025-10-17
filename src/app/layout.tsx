import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import AppHeader from '@/components/header/app.header';
import FooterPage from '@/components/footer/app.footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppHeader />
          {children}
          <FooterPage />
        </ThemeRegistry>
      </body>
    </html>
  );
}
