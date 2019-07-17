import hello from './index';

describe('it should say hello', () => {
    test('should greet "Juan"', () => {
      expect(hello()).toBe('Hello, Juan');
    });
    test('should greet "Daniel"', () => {
      expect(hello('Daniel')).toBe('Hello, Daniel');
    });
});