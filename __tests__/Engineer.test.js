
const { exportAllDeclaration } = require('@babel/types');
const Engineer = require('../lib/Engineer')

test('creates engineer github username and github', () => {
    const engineer = new Engineer('Tara', 3, 'testing@test.com', 'tarahayes');

    expect(engineer.gitHub).toBe('tarahayes');
    expect(engineer.getGithub()).toBe('tarahayes');
    expect(engineer.getRole()), toBe('Engineer');
})