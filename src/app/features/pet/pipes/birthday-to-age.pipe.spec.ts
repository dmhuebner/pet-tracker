import { BirthdayToAgePipe } from './birthday-to-age.pipe';

describe('BirthdayToAgePipe', () => {
  it('create an instance', () => {
    const pipe = new BirthdayToAgePipe();
    expect(pipe).toBeTruthy();
  });
});
