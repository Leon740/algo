export class NumArray {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(leftIndex: number, rightIndex: number): number {
    // let sum = 0;

    // for (let i = leftIndex; i <= rightIndex; i++) {
    //   sum += this.nums[i];
    // }

    // return sum;
    return this.nums
      .slice(leftIndex, rightIndex + 1)
      .reduce((previousSum, currentNumber) => previousSum + currentNumber, 0);
  }
}
