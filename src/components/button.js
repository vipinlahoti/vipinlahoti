import Link from "next/link";

// Define variants for the Button component
const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn",
  variant: {
    // Color variants for the button
    primary: "bg-primary text-primary-foreground hover:bg-primary/90", // Primary button color
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Secondary button color
    ghost:
      "text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground", // Ghost button color
    link: "text-primary underline-offset-4 hover:underline", // Link button color
  },
  size: {
    // Size variants for the button
    md: "h-12 px-4",
    sm: "h-9 rounded-md px-3",
    lg: "h-14 rounded-md px-6",
    icon: "p-2 p-2",
  },
};

/**
 * Button component that can be rendered as a button or a link.
 * @param {string} className - Additional classes to apply to the button.
 * @param {string} variant - The color variant of the button (primary, secondary, neutral, ghost, link).
 * @param {string} href - The URL to link to if the button is rendered as a link.
 * @param {string} size - The size variant of the button (md, xs, sm, lg, icon).
 * @returns {JSX.Element} The Button component.
 */
export const Button = ({
  href,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  // Default base class for the button
  const baseClass = buttonVariants.base;

  // Determine the color variant class for the button
  const variantClass = buttonVariants.variant[variant];

  // Determine the size variant class for the button
  let sizeClass = buttonVariants.size[size];
  // For link variant, size class is not applied
  if (variant === "link") {
    sizeClass = null;
  }

  // Generate class names based on props
  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  // Render the button as a link if asLink is true, otherwise render as a button
  if (href) {
    return <Link className={classes} href={href} {...props} />;
  }
  return <button className={classes} {...props} />;
};
