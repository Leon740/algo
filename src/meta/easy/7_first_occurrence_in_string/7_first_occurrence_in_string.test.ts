import { Test } from '@src/utils/log.ts';
import { getIndexOfFirstOccurrenceInString } from './7_first_occurrence_in_string.ts';

export const getIndexOfFirstOccurrenceInStringTests: Test[] = [
  {
    name: 'returns -1 if (searchableWord) is undefined',
    expected: -1,
    actual: getIndexOfFirstOccurrenceInString({ entireString: '' })
  },
  {
    name: 'returns -1 if (entireString) is undefined',
    expected: -1,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: '' })
  },
  {
    name: 'returns -1 if (searchableWord) is empty string',
    expected: -1,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: '', entireString: 'sadbutsad' })
  },
  {
    name: 'returns -1 if (entireString) is empty string',
    expected: -1,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'but', entireString: '' })
  },
  {
    name: 'returns -1 if occurrence of (searchableWord) {leetcode} not found in (entireString) {leet} | not found',
    expected: -1,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'leetcode', entireString: 'leet' })
  },
  {
    name: 'returns index of first occurrence of (searchableWord) {bab} in (entireString) {ababa}',
    expected: 1,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'bab', entireString: 'ababa' })
  },
  {
    name: 'returns index of first occurrence of (searchableWord) {but} in (entireString) {sadbutsad}',
    expected: 0,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'sad', entireString: 'sadbutsad' })
  },
  {
    name: 'returns index of first occurrence of (searchableWord) {sad} in (entireString) {sadbutsad} | [(entireString) with duplicates]',
    expected: 0,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'sad', entireString: 'sadbutsad' })
  },
  {
    name: 'returns index of first occurrence of (searchableWord) {a} found in (entireString) {a} | [one char (entireString)]',
    expected: 0,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'a', entireString: 'a' })
  },
  {
    name: 'returns index of first occurrence of (searchableWord) {hello} found in (entireString) {hello} | [same (searchableWord) (entireString)]',
    expected: 0,
    actual: getIndexOfFirstOccurrenceInString({ searchableWord: 'hello', entireString: 'hello' })
  }
];
