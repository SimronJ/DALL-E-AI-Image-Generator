import ClientProvider from '@/components/ClientProvider';
import '../styles/globals.css';

import Header from '@/components/Header';
import PromptInput from '@/components/PromptInput';

export const metadata = {
  title: 'Simranjeet | AI Image Generator',
  description: 'Created by Simranjeet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {/* Header */}
          <Header />

          {/* Prompt Input */}
          <PromptInput />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
