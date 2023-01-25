const Intern = require("../lib/intern");

describe('Intern subclass', () => {
    it ("entends the Employee class's array", () => {
        const intern = new Intern('Betty', 'P1423127', 'bettybowielu@gmail.com', 'University of Washington');

        expect(intern.getName()).toEqual('Betty');
        expect(intern.getId()).toEqual('P1423127');
        expect(intern.getEmail()).toEqual('bettybowielu@gmail.com');
        expect(intern.getSchool()).toEqual('University of Washington');
        expect(intern.getRole()).toEqual('Intern');
    });
});