const Manager = require('../lib/Manager');

test('create an office number and return of Manager', () => {
    const manager = new Manager('Sharrock', 1, 'testing@test.com', 100);

    expect(manager.officeNumber).toBe(100);
    expect(manager.getRole()).toBe('Manager');
})
