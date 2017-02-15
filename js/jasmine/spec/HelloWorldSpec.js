describe("fizzBazz()", function() {

  it("returns value if not dividable by 3 or 5", function() {
    expect(fizzBazz(1)).toEqual(1);
    expect(fizzBazz(2)).toEqual(2);
  });

  it("returns 'Fizz' for values dividable by 3", function() {
    expect(fizzBazz(3)).toEqual('Fizz');
  });

  it("returns 'Bazz' for values dividable by 5", function() {
    expect(fizzBazz(5)).toEqual('Bazz');
  });

  it("returns 'FizzBazz' for values dividable by 5 and 3", function() {
    expect(fizzBazz(15)).toEqual('FizzBazz');
  });
});

describe('fizzBazz100()', () => {
  it('return the fizzBazz for 100 entries', () => {
    const result = fizzBazz100();
    expect(result.length).toEqual(100);
    expect(result).toEqual(jasmine.arrayContaining([1,2,'Fizz',4,'Bazz','Fizz',7,8,'Fizz', 'Bazz', 11, 'Fizz', 13, 14, 'FizzBazz']));
  });
});
