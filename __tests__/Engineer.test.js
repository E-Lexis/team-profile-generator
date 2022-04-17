const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.name).toBe('Lala');
    expect(engineer.id).toEqual('12345');
    expect(engineer.email).toBe('lala@gmail');
    expect(engineer.github).toBe('lalagit');
});

test("gets engineer's name as an object", () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.getName()).toBe('Lala');
});

test("gets engineer's ID as an object", () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.getId()).toBe('12345');
});

test("gets engineer's Email as an object", () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.getEmail()).toBe('lala@gmail');
});

test("gets engineer's Github as an object", () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.getGithub()).toBe('lalagit');
});

test("gets engineer's Role as an object", () => {
    const engineer = new Engineer('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(engineer.getRole()).toBe('Engineer');
});