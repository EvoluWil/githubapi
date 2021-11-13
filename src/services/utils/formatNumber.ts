export const formatNumber = (value: string): string => {
  if (Number(value) > 1000) {
    const formatedValue = (Number(value) / 1000).toFixed(1);
    return `${formatedValue}k`;
  } else {
    return value;
  }
};
