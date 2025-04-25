// app/layout.tsx
import Navbar from './Components/Navbar';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


export const metadata = {
  title: 'Locomotor Care',
  description: 'Physiotherapy Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      {children}
        <Navbar/>
        
        {/* <Footer /> */}
      </body>
    </html>
  );
}
