"use client";

import type { Metadata } from "next";

import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Template para projetos Next 13"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
