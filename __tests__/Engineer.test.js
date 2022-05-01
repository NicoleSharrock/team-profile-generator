const Engineer = require('../lib/Engineer')

test('create an engineer gitHub and return of engineer', () => {
    const engineer = new Engineer('Tara', 3, 'testing@test.com', 'user');

    expect(engineer.github).toBe('user');
    expect(engineer.getRole()).toBe('Engineer');
})