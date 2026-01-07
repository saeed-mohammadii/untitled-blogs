import "./globals.css";

import {Inter} from 'next/font/google';
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {ThemeProvider} from "next-themes";

const inter = Inter({
    subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
    // const locale = params.locale;
    // const messages = (await import(`../../messages/${locale}.json`)).default;
    //
    return (
      <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        {/*<ThemeProvider*/}
        {/*    attribute="class"*/}
        {/*    defaultTheme="system"*/}
        {/*    enableSystem*/}
        {/*    disableTransitionOnChange*/}
        {/*>*/}
        {/*<NextIntlClientProvider locale={locale} messages={messages}>*/}
            <Header/>
              {children}
            <Footer/>
        {/*</NextIntlClientProvider>*/}
        {/*</ThemeProvider>*/}
      </body>
      </html>

  );
}
