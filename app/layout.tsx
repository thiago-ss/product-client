"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ApolloProvider>
  );
}
