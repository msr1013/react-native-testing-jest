1. Which frameworks are available for unit testing?
   Jest,Enzyme,Jasmine,Karma,Mocha,Nightmare
2. Which is the most widely used framework?
   Jest
3. Configurations required for unit testing
   Following configuration is automatically added to package.json

{
"scripts":{
"test":"jest"
},
"jest":{
"preset":"react-native"
}
} 4. How to run a unit test?
npm run test

5. How to see the coverage of the unit test?
   npm run test -- --coverage --watchAll=false

6. Format of a unit test - name of test, expectation and result
   Jest uses "matchers" to let you test values in different ways.
   expect receives a value and has matchers as submethods.
   expect is what's going to check the result for us.
   For example,"toBeNull" evaluates if the value you passed to expect,is a null value.
