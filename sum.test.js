const sum = require('./sum');/* Línea de  importación */

test ('Debe de sumar dos números y retornar la suma', () =>{
    expect(sum(1,2)).toBe(3);/* Se espera que de introducir 1 y 2
    debe de ser 3 */
});
