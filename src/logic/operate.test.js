import operate from "./operate";

describe('check the operation function', ()=> {
    test('add two number', ()=> {
        expect(operate(3, 2,'+')).toEqual('5');
    })
    test('add two number', ()=> {
        expect(operate(5, 2,'+')).toEqual('7');
    }); 
});