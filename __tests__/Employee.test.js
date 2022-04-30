const Employee = require('../lib/Employee')

//creates employee object
test('create employee object', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
});

test('create a employee name, id, email', () => {
    const employee = new Employee('Nicole', 4, 'testing@test.com');

    expect(employee.name).toBe('Nicole');
    expect(employee.id).toBe(4);
    expect(employee.email).toBe('testing@test.com');
    expect(employee.getName()).toBe('Nicole')

    expect(employee.getRole()).toBe('Employee');
});

