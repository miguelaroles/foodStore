import { StripToCurrencyPipe } from './strip-to-currency.pipe';

describe('StripToCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new StripToCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
