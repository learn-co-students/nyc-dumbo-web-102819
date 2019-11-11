## SWBATs

* [ ] Practice writing a command line application (CLI)
* [ ] Recognize the parts of the request-response lifecycle
    * [ ] Define client and describe setting up the request
    * [ ] Define server and describe how the response is formatted
    * [ ] Identify HTML as a response type
    * [ ] Identify and define JSON
* [ ] Define Application Programming Interface (API)
    * [ ] Explain the uses of an API on the internet
* [ ] Practice making requests to an API and parsing and examining the result

## Outline
- Review ActiveRecord/project setup
- Discuss user stories for our app
  - [x] As a user, I should be able to sign up/login to the application
  - [ ] As a user, I can search the Google API and save books to my library
  - [ ] As a user, I can view a list of my saved books
- Build welcome message and user login
- Implement search using Google API
*If there's time*
- Save search results to database
- Display saved books

### Google Books API

[Google Books API Docs](https://developers.google.com/books/docs/v1/using#PerformingSearch)
[Sample API Request](https://www.googleapis.com/books/v1/volumes?q=ruby+programming)

### Fun Gems For Your Projects
`faker` - randomly generated seed data fun
`colorize` - colored text output in your terminal
`rest-client` - make HTTP requests and get data from APIs
`tty-prompt` - nice interface for prompting for user input 
