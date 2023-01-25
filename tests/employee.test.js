const Employee = require("../lib/employee");

describe('Employee class', () => {
    it ("creates an array of info objects", () => {
        const employee = new Employee('Betty', 'P1423127', 'bettybowielu@gmail.com');

        expect(employee.getName()).toEqual('Betty');
        expect(employee.getId()).toEqual('P1423127');
        expect(employee.getEmail()).toEqual('bettybowielu@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    })
})