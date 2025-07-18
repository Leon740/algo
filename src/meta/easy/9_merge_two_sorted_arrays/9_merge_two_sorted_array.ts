export const mergeTwoSortedArrays = ({
  array0,
  m,
  array1,
  n
}: {
  array0: number[];
  m: number;
  array1: number[];
  n: number;
}): number[] => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    console.log(`array0[i] = ${array0[i]}`);
    console.log(`array1[j] = ${array1[j]}`);
    console.log(i);
    console.log(j);
    if (i >= 0 && array0[i] > array1[j]) {
      array0[k] = array0[i];
      i--;
    } else {
      array0[k] = array1[j];
      j--;
    }
    k--;
    console.log(array0);
  }

  return array0;
};
