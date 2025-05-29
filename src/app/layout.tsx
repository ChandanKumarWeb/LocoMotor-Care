// app/layout.tsx
import Navbar from './Components/Navbar';
import CustomCursor from './Components/CustomCursor';
import { ThemeProvider } from "@/app/Components/theme-provider"
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';
config.autoAddCss = false


export const metadata = {
  title: 'VedaMotion Care',
  description: 'Physiotherapy Website',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor/>
          <Navbar />
          {children}
        </ThemeProvider>
        <BackToTopButton />

        <Footer />
        {/* <Footer /> */}
      </body>
    </html>
  );
}

