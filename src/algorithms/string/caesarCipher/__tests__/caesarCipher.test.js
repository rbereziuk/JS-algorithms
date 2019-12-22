import { caesarCipher } from '../caesarCipher';

test('Caesar Cipher', () => {
  expect(caesarCipher('baa', 1)).toBe('cbb');
});
