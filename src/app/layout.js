"use client";
import './globals.css';
import './aos.css';
import { Inter } from 'next/font/google'
import { Provider } from "react-redux";
import store from './Store';
import { useEffect, useState } from 'react';
import Header from "../components/layouts/header";
import Script from 'next/script'
import Footer from "../components/layouts/footer";
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Provider store={store}>
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
          <title>Brotex Limited</title>
          <meta name="title" content="Brotex Limited | Innovation For Betterment" />
          <meta name="description" content="Discover a wide range of stylish and affordable apparel for men, women, and kids at Brotex. Stay on-trend with our fashionable clothing collection." />
          <meta name="keywords" content="apparel, clothing, fashion, trendy outfits, stylish apparel, men's clothing, women's fashion, kids' clothing, brotex limited" />
        </head>
        <body className={inter.className}>
          <Header />
            <ToastContainer/>
            {children}
          <Footer />
          
          {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
          {/* <script src="/animation.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `AOS.init();`,
            }}
          /> */}
        </body>
      </Provider>
    </html>
  )
}
