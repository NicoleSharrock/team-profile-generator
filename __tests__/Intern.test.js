const Intern = require('../lib/Intern');

test('create an intern school and return of intern', () => {
    const intern = new Intern('Hayes', 2, 'testing@test.com', 'school');

    expect(intern.school).toBe('school');
    expect(intern.getSchool()).toBe('school');
    expect(intern.getRole()).toBe('Intern');
})