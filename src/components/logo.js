import Link from "next/link";
import { siteConfig } from "@/lib/globals";

/**
 * Logo component for rendering the website logo.
 * @returns {JSX.Element} The Logo component.
 */
export const Logo = () => {
  // Render the logo as a link using the Link component
  return (
    <Link
      href="/"
      aria-label="Go to home page"
      className="text-2xl md:text-3xl font-extrabold tracking-tight"
    >
      {siteConfig.name}
    </Link>
  );
};
