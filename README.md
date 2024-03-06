Title:  
    Tripleten QA Project 7
Description:
    This project consists of three main sections:
        1. Connecting to GitHub
            This should have been the easiest task of the entire project, but presented a huge problem for me.  The entirety of the task was to click the 'Link GitHub" button on the TripleTen project page and it would create the hm07-qa-us repository for you.  Clicking the button failed to work for me, however.  As of submission, the TripleTen team is still trying to figure out what the problem is and sent me the project files to work on locally in the meantime.
            The second step is to clone the GitHub repository to your local computer.  Obviously, I wasn't able to complete this step either.
        2. Writing
            For each of four different endpoints (GET, POST, PUT, and DELETE), I create two tests.  In each case, the first test is to check that the response returns a normal status code.  The second test checks that the body of the response contains the expected data.  This is different for each endpoint.
            The final writing task is to create this README.md file.  
        3. Submitting 
            When the tests are ready to be submitted for review, I commit and push the changes in the local folder hm07-qa-us to my GitHub page. At the time of writing, I haven't done this yet. My plan is to create my own repository in GitHub and push the local file there before submitting. In this, I hope to accomplish the same end as though I were able to link my GitHub in the first place.
Documentation source used:
    Swagger: {config.API_URL}/api/swagger
A description of the technologies and techniques used:
    1. API documentation
        Used to find the endpoints for testing, as well as the required parameters and example values
    2. JavaScript
        Used to write tests for the endpoints
        - the primary technique used in this project is writing asychronus tests in javascript.
    3. GitHub
        Used to store and submit project files
    4. Postman
        Used to find response body elements for testing.  Also used to double-check the results of the various http requests run during testing
        - The information from Postman is used to write http requests in the JavaScript tests
    5. Terminal app
        Used to execute tests, install npm, create project files (i.e. this README.md), and push project files to GitHub, 
    
Instructions for running the tests:
    1. Deploy server
    2. Copy the server address and use it to replace the existing address in the config.js file
    3. Open a terminal (Mac) and navigate to the project file hm07-qa-us.
    4. Run the command npm install
    5. Run each test with the command: npx jest tests/{filename}
