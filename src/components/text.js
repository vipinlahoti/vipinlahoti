// Define text styles for different variants, tags, and alignments
const textVariants = {
  base: "block", // Base style for all text elements
  as: {
    h1: "text-[clamp(4rem,1.2222rem+8.8889vw,9rem)] font-black leading-none",
    h2: "text-[clamp(3rem,1.1667rem+6.6667vw,6.75rem)] font-extrabold leading-tight",
    h3: "text-[clamp(2.5rem,1.1111rem+4.4444vw,5.25rem)] font-extrabold leading-tight",
    h4: "text-[clamp(2rem,1.0556rem+2.2222vw,4.5rem)] font-bold leading-tight",
    h5: "text-[clamp(1.5rem,1.0444rem+1.3333vw,3.375rem)] font-bold leading-tight",
    h6: "text-[clamp(1.25rem,1.0417rem+0.8889vw,2.625rem)] font-bold leading-tight",
    p: "",
    span: "",
  },
  variant: {
    overline: "text-sm font-extrabold uppercase leading-loose tracking-widest",
    lead: "text-[clamp(1.25rem,0.8333rem+1.3333vw,2rem)]",
    small: "text-sm font-medium text-secondary-foreground",
    muted: "text-secondary-foreground",
  },
  align: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

/**
 * Text component for rendering text with various styles and variants.
 * @param {string} className - Additional CSS classes to be applied.
 * @param {string} variant - The variant of the text (e.g., 'overline', 'lead').
 * @param {string} as - The HTML tag to use for the text (e.g., 'h1', 'p').
 * @returns {JSX.Element} The rendered Text component.
 */
export const Text = ({ variant, children, className = "", as = "p" }) => {
  // Determine the component to render based on the 'as' prop
  const Component = textVariants.as[as] ? as : "p";

  // Get the class for the specified tag (e.g., 'h1', 'p') from the textVariants object
  const asClass = textVariants.as[as];

  // Get the class for the specified variant (e.g., 'overline', 'lead') from the textVariants object
  const variantClass = textVariants.variant[variant] || "";

  // Combine base styles, tag styles, variant styles, and additional classes
  const combinedClass = `${textVariants.base} ${asClass} ${variantClass} ${className}`;

  // Render the text using the determined component and styles
  return <Component className={combinedClass}>{children}</Component>;
};
