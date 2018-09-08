import reverse from './reverse';

test('reverse string', () => {
  const a = 'abcd1234';
  const b = '4321dcba';
  const c = null;
  const d = '';
  expect(reverse(a)).toBe(b);
  expect(reverse(c)).toBe(c);
  expect(reverse()).toBe(c);
  expect(reverse(d)).toBe(d);
});
