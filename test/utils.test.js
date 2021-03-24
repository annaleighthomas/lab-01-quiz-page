// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { isYes } from "../utils.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('Yea');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes returns true');
    expect.equal(isYes('yeeees'), expected, 'yes is true');
    expect.equal(isYes('nope'), false, 'no is false');

});
