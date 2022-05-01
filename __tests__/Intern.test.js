const Intern = require('../lib/Intern');

test('create an intern school and return of intern', () => {
    const intern = new Intern('Hayes', 2, 'testing@test.com', 'westchester');

    expect(intern.school).toBe('westchester');
    expect(intern.getRole()).toBe('Intern');
})