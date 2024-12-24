import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
      <title>Receive Customer Reviews - Customizable Feedback Forms</title>
      <meta name="description" content="Create customizable forms to collect valuable customer reviews and feedback. Enhance customer satisfaction, improve your business, and track client opinions with tailored forms for better insights and growth." />
      <meta name="keywords" content="customer reviews, feedback forms, testimonials, review collection, client opinions, custom forms, business improvement, enhance customer satisfaction, review generation, customizable feedback, client reviews, feedback collection, online forms, feedback tracking, review management, product feedback, service reviews, customer experience, brand reputation, business growth, user feedback, customer engagement, survey forms, client testimonials, positive reviews, customer insights, form creation, online feedback, feedback widget, review widget, review collection tool, customer service feedback, client survey, customizable surveys, real-time feedback, user experience, product reviews, service feedback, review system, custom survey design, testimonial gathering, customer satisfaction tracking, review requests, feedback solutions, feedback management tool, online review tools, user-generated content, business analytics, performance improvement, feedback integration, client communication." />

        <meta name="author" content="Formbase" />
        <link rel="icon" href="/" />
        </head>
        <body>
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId='G-KG96CBJYNM'/>
          {children}
        </body>
      </html>
  );
}
