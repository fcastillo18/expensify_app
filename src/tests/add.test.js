const add = (a, b) => a+b;
const generateGreeting = (name = 'Anomymous') => `Hello ${name}!`;

test('should add two numbers', ()=>{
    const result = add(2, 5);

    // if (result !== 5){
    //     throw new Error(`Error, proccess expect 5 and result was ${result}`);
    // }

    //to make asociatons about values in the tests cases.
    expect(result).toBe(7);
});

test('should generate greeting for name', ()=>{
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!');
});

test('should generate greeting for NO name', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello Anomymous!');
});