const calc = require('../sources/calculadora')

it('Soma de 30 + 10 deve ser 40', () => {
    expect(calc.soma(30, 10)).toBe(40)
});

it('Subtracao  de 30 - 10 deve ser 20', () => {
    expect(calc.subt(30, 10)).toBe(20)
});

it('Divisa0 de 30 / 15 deve ser 2', () => {
    expect(calc.div(30, 15)).toBe(2)
});
it('Multiplicacao de 5 * 8 deve ser 40', () => {
    expect(calc.mult(5, 8)).toBe(40)
});