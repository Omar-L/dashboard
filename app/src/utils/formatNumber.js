// Take in a number, and format it with commas

export const formatNumber = (number) => {
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 })
};