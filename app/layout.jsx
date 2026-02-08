import './globals.css';
import { AuthProvider } from '../src/context/AuthContext';
import { PreferencesProvider } from '../src/context/PreferencesContext';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PreferencesProvider>
             {children}
          </PreferencesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
