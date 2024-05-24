// Define variants for the Flex component
const flexVariants = {
  // Direction variants for flex container
  direction: {
    row: "flex flex-row", // Horizontal row
    column: "flex flex-col", // Vertical column
  },
  // Alignment variants for flex items
  align: {
    start: "items-start", // Align items at the start
    center: "items-center", // Align items at the center
    end: "items-end", // Align items at the end
  },
  // Justify variants for flex items
  justify: {
    start: "justify-start", // Justify items at the start
    center: "justify-center", // Justify items at the center
    end: "justify-end", // Justify items at the end
    between: "justify-between", // Justify items with space between them
  },
  // Gap variants for spacing between flex items
  gap: {
    // No gap
    0: "",
    // Small gaps
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    // Medium gaps
    5: "gap-6",
    6: "gap-8",
    7: "gap-10",
    8: "gap-12",
    9: "gap-14",
    // Large gaps
    10: "gap-16",
    11: "gap-20",
    12: "gap-12 md:gap-16 lg:gap-24",
    13: "gap-28",
    14: "gap-32",
    15: "gap-36",
  },
};

/**
 * Flex component for creating flexible layouts.
 * @param {string} align - Alignment of items along the cross axis.
 * @param {string} justify - Alignment of items along the main axis.
 * @param {number} gap - Gap between child elements.
 * @param {string} direction - Direction of the flex container.
 * @param {boolean} isContainer - Whether the flex container should be a container.
 * @returns {JSX.Element} The Flex component.
 */
export const Flex = ({
  className,
  align = "start",
  justify = "start",
  gap = 0,
  direction = "row",
  isContainer = false,
  children,
}) => {
  // Flex direction variant class
  const directionClass = flexVariants.direction[direction];

  // Alignment variant class
  const alignClass = flexVariants.align[align];

  // Justification variant class
  const justifyClass = flexVariants.justify[justify];

  // Gap variant class
  const gapClass = flexVariants.gap[gap];

  // Container variant class if isContainer is true
  const containerClass = isContainer ? "container" : "";

  // Generate class names based on props
  const classes = `${directionClass} ${alignClass} ${justifyClass} ${gapClass} ${containerClass} ${className}`;

  // Return the Flex component with the generated class names and other HTML attributes
  return <div className={classes}>{children}</div>;
};
