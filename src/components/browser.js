import { Flex } from "@/components/flex";

/**
 * Browser component that simulates a browser window with optional square aspect ratio.
 * @param {ReactNode} children - The content to display inside the browser window.
 * @returns {JSX.Element} The Browser component.
 */
export const Browser = ({ children }) => (
  <div className="rounded-md overflow-hidden aspect-video w-1/2">
    <div className="flex items-center p-4 bg-secondary/95">
      <Flex gap={2}>
        <div className="w-3 h-3 bg-secondary-foreground/45 rounded-full"></div>
        <div className="w-3 h-3 bg-secondary-foreground/45 rounded-full"></div>
        <div className="w-3 h-3 bg-secondary-foreground/45 rounded-full"></div>
      </Flex>
    </div>
    <div className="bg-secondary/65 p-4 aspect-video">{children}</div>
  </div>
);
