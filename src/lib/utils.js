// Import necessary modules from dependencies
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define a function 'cn' that merges class names using clsx and tailwind-merge
export function cn(...inputs) {
  // Use clsx to merge the input class names into a single string
  const mergedClassNames = clsx(inputs);
  // Use twMerge to apply Tailwind CSS class name merging rules
  return twMerge(mergedClassNames);
}

/**
 * Formats a given date string or timestamp into a long format date string (e.g., "January 1, 2022").
 * @param {string | number} input - The date string or timestamp to format.
 * @returns {string} The formatted date string.
 */
export async function showIndiaTime() {
  const response = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  ); // Replace if needed
  const data = await response.json();
  const ISTTime = data.datetime.slice(11, 16); // Extract time portion (HH:MM)

  const hours = parseInt(ISTTime.slice(0, 2));
  const minutes = ISTTime.slice(3);
  const amPm = hours < 12 ? "AM" : "PM";
  const formattedTime = `${hours % 12 || 12}:${minutes} ${amPm}`; // 12-hour format with AM/PM
  return formattedTime;
}
