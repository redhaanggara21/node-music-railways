
const sayHello = require('./helloJest');

test('string returning hello there jest', () => {
   expect(sayHello()).toMatch('hello there jest');
});