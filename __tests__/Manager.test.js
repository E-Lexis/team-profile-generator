const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Lala', '12345', 'lala@gmail', '987456');

    expect(manager.name).toBe('Lala');
    expect(manager.id).toEqual('12345');
    expect(manager.email).toBe('lala@gmail');
    expect(manager.officeNumber).toBe('987456');
});

test("gets manager's name as an object", () => {
    const manager = new Manager('Lala', '12345', 'lala@gmail', '987456');

    expect(manager.getName()).toBe('Lala');
});

test("gets manager's ID as an object", () => {
    const manager = new Manager('Lala', '12345', 'lala@gmail', '987456');

    expect(manager.getId()).toBe('12345');
});

test("gets manager's Email as an object", () => {
    const manager = new Manager('Lala', '12345', 'lala@gmail', '987456');

    expect(manager.getEmail()).toBe('lala@gmail');
});

test("gets manager's Role as an object", () => {
    const manager = new Manager('Lala', '12345', 'lala@gmail', 'lalagit');

    expect(manager.getRole()).toBe('Manager');
});