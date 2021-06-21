// const { randomNum } = require('./services');
const script = require('./script');
jest.mock("./script");

test('#randomNumber', () => {
  script.randomNum = jest.fn()
    .mockReturnValue(10);

  expect(script.randomNum()).toBe(10);
  expect(script.randomNum).toHaveBeenCalled();
  expect(script.randomNum).toHaveBeenCalledTimes(1);
});

// EX2:
test('Division using mock', () => {
  script.randomNum = jest.fn()
    .mockImplementation((a ,b) => a / b);
  script.randomNum(10, 5);
  expect(script.randomNum).toHaveBeenCalled();
  expect(script.randomNum).toHaveBeenCalledWith(10, 5);
  expect(script.randomNum(10, 5)).toBe(2)
})

// EX3:
test('Multiplication of three parameters, then reset it and return two times the result', () => {
  script.randomNum = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);
  script.randomNum(10, 2, 2);
  expect(script.randomNum).toHaveBeenCalledTimes(1);
  expect(script.randomNum(10, 2, 2)).toBe(40);

  script.randomNum.mockReset();

  script.randomNum = jest.fn()
    .mockImplementation((a) => a * a);
  script.randomNum(5);
  expect(script.randomNum).toHaveBeenCalledTimes(1);
  expect(script.randomNum(5)).toBe(25);  
});

// EX4:
describe('Changing three functions', () => {
  it('changes the string to lower case', () => {
    script.capsLk = jest.fn()
      .mockImplementation((str) => str.toLowerCase());
    script.capsLk('SIDVI');
    expect(script.capsLk('SIDVI')).toBe('sidvi');
  });

  it('Return last word of the string', () => {
    script.returnFirst = jest.fn()
      .mockImplementation(str => str.charAt(str.length - 1));
    expect(script.returnFirst('hi')).toBe('i');
    expect(script.returnFirst).toHaveBeenCalled();
    expect(script.returnFirst).toHaveBeenCalledTimes(1);
    expect(script.returnFirst).toHaveBeenCalledWith("hi");
  });

  it('Concat three strings', () => {
    script.concatTwo = jest.fn()
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    expect(script.concatTwo('hi', 'oi', 'hallo')).toBe('hioihallo');
  })
});