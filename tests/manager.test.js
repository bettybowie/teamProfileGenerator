const Manager = require("../lib/manager");

describe('Manager subclass', () => {
    it ("entends the Employee class's array", () => {
        const manager = new Manager('Betty', 'P1423127', 'bettybowielu@gmail.com', '315');

        expect(manager.getName()).toEqual('Betty');
        expect(manager.getId()).toEqual('P1423127');
        expect(manager.getEmail()).toEqual('bettybowielu@gmail.com');
        expect(manager.getOfficeNumber()).toEqual('315');
        expect(manager.getRole()).toEqual('Manager');
    });
});