// Define variants for the Box component
const boxVariants = {
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
  size: {
    1: "py-6", // small size
    2: "py-12", // medium size
    3: "py-24", // large size
    4: "py-32", //extra-large size
    5: "py-48", // double extra-large size
  },
  isContainer: "container", //Box as a container
};

/**
 * Box component that provides a flexible container with configurable size and container properties.
 * @param {string} align - Alignment of items along the cross axis.
 * @param {string} justify - Alignment of items along the main axis.
 * @param {number} gap - Gap between child elements.
 * @param {string} direction - Direction of the flex container.
 * @param {boolean} isContainer - Whether the flex container should be a container.
 * @param {number} size - The size variant for the box (1-5).
 * @param {string} className - Additional classes to apply to the box.
 * @param {string} as - The HTML element to use as the box (default is "div").
 * @returns {JSX.Element} The Box component.
 */
export const Box = ({
  size,
  className = "",
  align = "start",
  justify = "start",
  gap = 0,
  direction = "row",
  as: Component = "div",
  ...props
}) => {
  // Flex direction variant class
  const directionClass = boxVariants.direction[direction];

  // Alignment variant class
  const alignClass = boxVariants.align[align];

  // Justification variant class
  const justifyClass = boxVariants.justify[justify];

  // Gap variant class
  const gapClass = boxVariants.gap[gap];

  // Determine the spacing variant class based on the size prop
  const sizeClass = size != null ? boxVariants.size[size] : "";

  // Generate class names based on props, including size, container, and any additional classes
  const classNames = `w-full ${directionClass} ${alignClass} ${justifyClass} ${gapClass} ${sizeClass} ${className}`;

  // Return the Flex component with the generated class names and other HTML attributes
  return <Component className={classNames} {...props} />;
};
