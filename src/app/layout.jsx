import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

export const metadata = {
  title: 'Simple website',
  description: 'A simple website using Next.js and React, but with coffee',
  icons: {
    icon: '/coffee-cup.png',
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body style={{
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Navbar />
      <div style={{
        display: 'flex',
        flex: 1,
      }}>
        <main style={{
          flex: 1,
          order: 1,
        }}>
          {children}
        </main>
        <Sidebar />
      </div>
      <Footer />
    </body>
  </html>
);

export default RootLayout;