export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('uk-UA').format(num);
};