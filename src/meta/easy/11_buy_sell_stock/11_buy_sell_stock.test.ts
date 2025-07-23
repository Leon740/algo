import { Test } from '@src/utils/log.ts';
import { getMaxProfit } from './11_buy_sell_stock.ts';

export const getMaxProfitTests: Test[] = [
  {
    name: 'returns max profit',
    expected: 5,
    actual: getMaxProfit([7, 1, 5, 3, 6, 4])
  },
  {
    name: 'returns max profit',
    expected: 5,
    actual: getMaxProfit([1, 5, 3, 6, 6])
  }
];
