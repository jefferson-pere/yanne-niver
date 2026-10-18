import './globals.css';
export const metadata = { title: 'Você está convidado!', description: 'Um convite especial para celebrar mais um ano de vida.' };
export const viewport = { themeColor: '#000000', viewportFit: 'cover' };
export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
