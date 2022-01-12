import calculator from "./calculator";

describe('calculator test', () => {
    const testcase = { total: null, next: null, operation: null };
    test('should give null', () => {
        expect(calculate(testcase, 'AC')).toEqual({ total: null, next: null, operation: null });
    });

    test('should give 5 as next when button 5 is press', () => {
        const testcase = { total: null, next: null, operation: null };
        expect(calculate(testcase, '5')).toEqual({ next: '5', total: null });
    });

    test(' test operator + result 3', () => {
        const testcase = { total: '1', next: '2', operation: '+' };
        expect(calculate(testcase, '=')).toEqual({ total: '3', next: null, operation: null });
    });  
});