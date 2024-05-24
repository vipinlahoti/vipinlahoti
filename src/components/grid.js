// Define variants for the Grid component
const gridVariants = {
  // Gap sizes for the grid
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
  // Column layouts for the grid
  column: {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-6",
    7: "grid-cols-1 md:grid-cols-7",
    8: "grid-cols-1 md:grid-cols-8",
    9: "grid-cols-1 md:grid-cols-9",
    10: "grid-cols-1 md:grid-cols-10",
    11: "grid-cols-1 md:grid-cols-11",
    12: "grid-cols-1 md:grid-cols-12",
  },
};

/**
 * Grid component that creates a grid layout with customizable gap sizes and column layouts.
 * @param {string} className - Additional CSS classes to be applied to the grid.
 * @param {number} gap - The size of the gap between grid items. Default is 0 (no gap).
 * @param {number} column - The number of columns in the grid. Default is 1.
 * @param {boolean} isContainer - Whether the grid should be a container. Default is false.
 * @returns {JSX.Element} The Grid component.
 */
export const Grid = ({
  className,
  gap = 0,
  column = 1,
  isContainer = false,
  ...props
}) => {
  // Get the gap class from the gridVariants object based on the gap prop
  const gapClass = gridVariants.gap[gap];
  // Get the column class from the gridVariants object based on the column prop
  const columnClass = gridVariants.column[column];

  // Add a container class if isContainer is true
  const containerClass = isContainer ? "container" : "";

  // Generate the final class names for the grid
  const classes = `grid ${gapClass} ${columnClass} ${containerClass} ${className}`;

  // Return a div element with the generated class names and other HTML attributes
  return <div className={classes} {...props} />;
};
