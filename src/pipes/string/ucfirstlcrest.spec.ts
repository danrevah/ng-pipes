import { UcFirstLcRestPipe } from './ucfirstlcrest';

describe('UcFirstLcRestPipe Tests', () => {
  let pipe: UcFirstLcRestPipe;

  beforeEach(() => {
    pipe = new UcFirstLcRestPipe();
  });

  it('Should return value if not a string', () => {
    expect(pipe.transform(23)).toEqual(23);
    expect(pipe.transform(true)).toEqual(true);
  });

  it('Should capitalize the first word and lowercase the rest', () => {
    const result = pipe.transform('foo Bar bAs baZ');
    expect(result).toEqual('Foo bar bas baz');
  });

  it('Should test mixed strings capitalize behaviour', () => {
    const result = pipe.transform('foo Bar bAs baZ &f $2 jUst A random STriNg FOR testinG');
    expect(result).toEqual('Foo bar bas baz &f $2 just a random string for testing');
  });

  it('Should test special names', () => {
    expect(pipe.transform('linked-in')).toEqual('Linked-in');
    expect(pipe.transform(`mcdonald's`)).toEqual(`Mcdonald's`);
  });
});
