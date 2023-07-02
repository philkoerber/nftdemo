"use client"

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js';

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NFT-Demo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider>
            <Header/>
      {children}
          </ChakraProvider>
           </CacheProvider>
                
      
      </body>
    </html>
  )
}