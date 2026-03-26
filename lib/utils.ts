// Utility helpers for Seasteel Marine
// Add shared utility functions here

/**
 * Combine class names (lightweight alternative to clsx for simple cases)
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}
