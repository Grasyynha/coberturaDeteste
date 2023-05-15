const soma = require('../sources/soma_if')

test('Soma de 1 + 2 deve ser 3', () => {
    expect(soma(1,2)).toBe(3)
    
});
test('Soma de 100 + 200 deve ser 300', () => {
    expect(soma(100,200)).toBe(300)
});    


test('Subtracao  de 1 + 2 deve ser 3', () => {
    expect(soma(1,2)).toBe(3)

});    

test('Não deve somas strings', () => {
    expect(soma(1, 'a')).toBe(null)

});    