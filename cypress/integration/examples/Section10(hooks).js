// Test hooks is not given by cypress but it is given by mocha which is supported by cypress 
// This are helpfull to set conditions that you want to run before tests or before each test 
// or it is also usefull for clean up after tests or after each test 
describe('hooks' ,function(){
    before(function(){
        // it runs before it block suppose we have 4 it block in one describe it will only run once
        // to initialize any test data, invoke the browser or hit the url
    })
    after(function(){
        // it runs after it block suppose we have 4 it block in one describe it will only run once
        // delete the cache 
        // delete the test data 
        // we dont need to close the browser as cypress automatically closes the browser after the test run 
    })
    beforeEach(function(){
        //difference is it will run before all it blocks  

    })
    afterEach(function(){
        //difference is it will run after all it blocks
    })
})