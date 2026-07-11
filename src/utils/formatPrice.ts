const PRICE_DECIMALS = 5;

export const formatPrice = (value: unknown, fallback = "-") => {
  if (value === null || value === undefined || value === "") return fallback;

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) return fallback;

  const sign = numericValue < 0 ? "-" : "";
  const absoluteValue = Math.abs(numericValue);
  const plainValue = String(absoluteValue).includes("e")
    ? absoluteValue.toFixed(20).replace(/0+$/, "").replace(/\.$/, "")
    : String(absoluteValue);
  const [wholePart, fractionPart = ""] = plainValue.split(".");
  const truncatedFraction = fractionPart
    .padEnd(PRICE_DECIMALS, "0")
    .slice(0, PRICE_DECIMALS);

  return `${sign}${wholePart}.${truncatedFraction}`;
};
