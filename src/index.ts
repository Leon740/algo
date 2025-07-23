import { getMaxProfitTests } from './meta/easy/11_buy_sell_stock/11_buy_sell_stock.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: getMaxProfitTests
});
