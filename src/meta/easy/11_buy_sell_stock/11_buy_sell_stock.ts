export const getMaxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (minPrice > price) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
};
