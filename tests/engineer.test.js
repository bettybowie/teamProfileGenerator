const Engineer = require("../lib/engineer");

describe('Engineer subclass', () => {
    it ("entends the Employee class's array", () => {
        const engineer = new Engineer('Betty', 'P1423127', 'bettybowielu@gmail.com', 'bettybowie');

        expect(engineer.getName()).toEqual('Betty');
        expect(engineer.getId()).toEqual('P1423127');
        expect(engineer.getEmail()).toEqual('bettybowielu@gmail.com');
        expect(engineer.getGithub()).toEqual('bettybowie');
        expect(engineer.getRole()).toEqual('Engineer');
    });
});