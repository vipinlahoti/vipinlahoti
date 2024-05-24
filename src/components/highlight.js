/**
 * Highlight component to create a visually highlighted effect for text.
 * @param {ReactNode} children - The content to be highlighted.
 * @returns {JSX.Element} The Highlight component.
 */
export const Highlight = ({ children }) => (
  // Outer span for the highlight effect
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block before:-z-10">
    {/* Inner span for the actual content */}
    <span className="relative">{children}</span>
  </span>
);
