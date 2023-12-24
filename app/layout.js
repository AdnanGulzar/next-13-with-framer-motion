import { Navbar } from '../components/navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <Navbar/>
      {children}
      
      </body>
    </html>
  )
}
