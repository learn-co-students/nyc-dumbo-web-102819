Object Oriented Relationships
=============================

## One to Many Relationships

### SWBATs

* Implement one object to many objects relationship
  * One object _has many_ objects
  * One object _belongs to_ another object
* Practice passing custom objects as arguments to methods
* Demonstrate Single Source of Truth
* Infer type of method (class or instance) through naming conventions

### Outline

* Quick review of OOP:
  * we created classes
  * we created instances of classes using `initialize`
  * we created instance and class methods
  * we used `attr_` macros for getters and setters
  * we looked at `self`
* Learn about object oriented relationships driven via _deliverables_!
  * Define terminology, understand the importance of using clear language in programming
    * Pair programming! Technical interviews!
  * Introduce new concepts
  * Convert those concepts to code
  * Learn how to test our own code (without Learn tests)

### Define

What do the following mean in plain English? What do they mean in programming?

* Model
* Domain
  * Show examples of websites and their domains
* Domain modeling
* Relationships
  * One to many relationship
  * Many to many relationship

_Why do we care so much about codifying and being really specific about the terminology of has-many/belongs-to?_ The terms are very powerful because we can use the same idea to describe relationships across many different types of domains. The relationship between artist and song, is the same as book and author, user and tweets, etc.

* Schema
* Single Source of Truth
  * How can we start thinking about the data in our models?

### How to think about relationships
1. For every one (x), how many (y)?
2. For every one (y), how many (x)?

### Deliverables

- [ ] Create a User class. The class should have these methods:
  - [ ] `User#initialize` takes a username and has a reader method for the username
  - [ ] `User#tweets` returns an array of Tweet instances
  - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection
- [ ] Create a Tweet class. The class should have these methods:
  - [ ] `Tweet#message` returns a string
  - [ ] `Tweet#user` returns an instance of the user class
  - [ ] `Tweet.all` returns all the Tweets created.
  - [ ] `Tweet#username` returns the username of the tweet's user