const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.name).toBe('Lala');
    expect(intern.id).toEqual('12345');
    expect(intern.email).toBe('lala@gmail');
    expect(intern.school).toBe('university');
});

test("gets intern's name as an object", () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.getName()).toBe('Lala');
});

test("gets intern's ID as an object", () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.getId()).toBe('12345');
});

test("gets intern's Email as an object", () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.getEmail()).toBe('lala@gmail');
});

test("gets intern's school as an object", () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.getSchool()).toBe('university');
});

test("gets intern's Role as an object", () => {
    const intern = new Intern('Lala', '12345', 'lala@gmail', 'university');

    expect(intern.getRole()).toBe('Intern');
});