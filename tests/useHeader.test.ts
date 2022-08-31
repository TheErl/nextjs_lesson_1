import {describe, expect, test} from '@jest/globals';
import useHeader from 'hooks/useHeader';
import { useState } from 'react';

// jest.mock('react');
jest.mock('react',() => ({ useState: jest.fn().mockReturnValue([null, null]) }));
jest.mock('react-redux',() => ({ useDispatch: jest.fn() }));
// const sum = (a: number, b: number) => a+b;


describe('useHeader hook', () => {
  test('function return a set of properties', () => {
    expect(useHeader()).toMatchObject({
      handleChangeTheme: expect.anything()
    });
  });
});