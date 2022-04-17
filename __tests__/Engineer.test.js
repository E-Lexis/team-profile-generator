const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail');

    expect(engineer.name).toBe('Lala');
    expect(engineer.id).toEqual('12345');
    expect(engineer.email).toBe('lala@gmail');
    expect(engineer.role).toBe('Engineer');
});