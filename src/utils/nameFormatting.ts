export const normalizePersonName = (value: unknown): string => {
  const normalized = String(value ?? "").toLocaleLowerCase();
  const index = normalized.search(/\p{L}/u);
  return index < 0
    ? normalized
    : normalized.slice(0, index) + normalized[index].toLocaleUpperCase() + normalized.slice(index + 1);
};
