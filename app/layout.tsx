import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import LayoutClient from '../components/layout/layout-client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Project Pulse',
    description: 'SaaS company offering a cloud-based project management tool'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>
                    <LayoutClient>{children}</LayoutClient>
                </Providers>
            </body>
        </html>
    );
}
