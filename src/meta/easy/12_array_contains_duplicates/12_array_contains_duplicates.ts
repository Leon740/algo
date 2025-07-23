export const arrayContainsDuplicates = (
  { nums, k }: { nums: number[]; k: number } = { nums: [], k: 0 }
): boolean => {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const prevIndex = seen.get(nums[i]);

    if (prevIndex !== undefined && i - prevIndex <= k) {
      return true;
    }

    seen.set(nums[i], i);
  }

  return false;
};
