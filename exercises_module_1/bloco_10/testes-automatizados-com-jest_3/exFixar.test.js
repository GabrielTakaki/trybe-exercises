const { somar, subtrair, multiplicar, dividir } = require('./exFixar');
jest.mock("./exFixar");

test('#subtrair', () => {
  subtrair.mockImplementation((a, b) => a - b);
  subtrair(2, 2);

  expect(subtrair).toHaveBeenCalled();
  expect(subtrair).toHaveBeenCalledTimes(1);
  expect(subtrair).toHaveBeenCalledWith(2, 2);
  expect(subtrair(2, 2)).toBe(0);
});

test('#multiplicar', () => {
  multiplicar.mockImplementation((a, b) => a * b);
  multiplicar(5, 2);

  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar).toHaveBeenCalledTimes(1);
  expect(multiplicar).toHaveBeenCalledWith(5, 2);
  expect(multiplicar(5, 2)).toBe(10);
});

test('#somar', () => {
  somar.mockImplementation((a, b) => a + b);
  somar(2, 3);

  // expect(somar).toHaveBeenCalledWith(2, 3);
  expect(somar(2, 3)).toBe(5);
});