import * as React from 'react';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import AppHeader from '@/components/header/app.header';
import MainSlider from '@/components/main/main.slider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppHeader />
          <MainSlider />

          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
