const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Lala', '12345', 'lala@gmail');

    expect(employee.name).toBe('Lala');
    expect(employee.id).toEqual('12345');
    expect(employee.email).toBe('lala@gmail');
    expect(employee.role).toBe('Employee');
});

test("gets employee's name as an object", () => {
    const employee = new Employee('Lala', '12345', 'lala@gmail');

    expect(employee.getName()).toBe('Lala');
});

test("gets employee's ID as an object", () => {
    const employee = new Employee('Lala', '12345', 'lala@gmail');

    expect(employee.getId()).toBe('12345');
});

test("gets employee's Email as an object", () => {
    const employee = new Employee('Lala', '12345', 'lala@gmail');

    expect(employee.getEmail()).toBe('lala@gmail');
});

test("gets employee's Role as an object", () => {
    const employee = new Employee('Lala', '12345', 'lala@gmail');

    expect(employee.getRole()).toBe('Employee');
});


