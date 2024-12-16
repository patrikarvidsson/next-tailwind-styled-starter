import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Starter",
  description:
    "Built with Next.js, Tailwind CSS, twin.macro and Styled Components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
