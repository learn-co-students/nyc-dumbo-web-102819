Object Oriented Relationships
=============================

# One to Many Relationships continued

### SWBATs

* Implement one object to many objects relationship
  * One object _has many_ objects
  * One object _belongs to_ another object
* Practice passing custom objects as arguments to methods
* Infer type of method (class or instance) through naming conventions
* Demonstrate Single Source of Truth

### Outline

* Review our code from yesterday
* Complete our deliverables
* Discuss Single Source of Truth

### Deliverables

- [x] Create a User class. 
The class should have these methods:
  - [x] `User#initialize` takes a username 
    - [x] has a reader method for the username
  - [ ] `User#tweets` returns an array of Tweet instances
  - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection
- [x] Create a Tweet class. 
The class should have these methods:
  - [x] `Tweet#message` returns a string
  - [x] `Tweet#user` returns an instance of the user class
  - [x] `Tweet.all` returns all the Tweets created.
  - [x] `Tweet#username` returns the username of the tweet's user

--------
# Many to Many Relationship

### SWBATs

* Implement both sides of a many to many relationships
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate Single Source of Truth by not storing collections of objects on other objects
* Demonstrate Single Source of Truth by not storing one object in multiple collections

### Objectives

* Review Relationships (one to many => has many, belongs to)
* Expand on relationships to express many to many
  * We'll build out a new relationship from scratch to teach this concept

