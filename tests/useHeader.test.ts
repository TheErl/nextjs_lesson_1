import {describe, expect, test} from '@jest/globals';
import useHeader from 'hooks/useHeader';

const sum = (a: number, b: number) => a+b;

describe('useHeader hook', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});