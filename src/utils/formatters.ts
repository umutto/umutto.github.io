export function formatLocaleDate(date?: Date) {
  if (!date) {
    return;
  }

  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}
