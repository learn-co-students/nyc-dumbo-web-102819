Active Record Associations
===

## SWBATs
* Explain how Active Record works for non-related models
* Implement one-to-many relationships using Active Record has_many and belongs_to
* Implement many-to-many relationships using Active Record has_many, :through
* Describe the methods that the relationship macros add to a model
* Practice looking up library documentation for Active Record Migrations, Queries and Association Macros

## Outline
* Review migrations
  * `db:migrate` and `db:rollback`, `db:migrate:status`
  * `add_column` migration
  * Demonstrate `seeds.rb`
* Review/finish CRUD
  * update methods
  * delete methods
* Association methods
  * Before ActiveRecord, how did we write association methods?
  * How can we use ActiveRecord to write SQL to find associations?
  * What do `has_many` and `belongs_to` do for us?

### Active Record Setup Checklist

0. Setup the connection to the database
1. Create migration file
2. Write the migration code
3. Run the migration and check the schema/status
4. Create the Ruby class to connect to the table
5. Test the Ruby class in `rake console`

### Example App

Let's make a movie app for tracking actors and their roles in different films. For our domain, we'll need a many-to-many relationship between actors and films, where an actor has many films through roles and a film has many actors through roles. Roles will be the join between actors and films, so our roles table will need foreign keys for the movie_id and actor_id.

Our database tables would look something like this:

#### _movies_ table
| id | title          |
|----|----------------|
| 1  | Hobbs And Shaw |
| 2  | San Andreas    |
| 3  | Thor: Ragnarok |

#### _actors_ table
| id | name           |
|----|----------------|
| 1  | Dwayne Johnson |
| 2  | Jason Statham  |
| 3  | Idris Elba     |

#### _roles_ table
| id | character        | movie_id | actor_id |
|----|------------------|----------|----------|
| 1  | Hobbs            | 1        | 1        |
| 2  | Shaw             | 1        | 2        |
| 3  | Brixton          | 1        | 3        |
| 4  | Raymond Gaines   | 2        | 1        |
| 5  | Heimdall         | 3        | 3        |

### Association Methods

In our domain, we've described the relationships on our classes. This gives us a sense of how to query for data from one class to another - in SQL, this involves writing queries using the _foreign key_ to join between tables. We can also express this with Ruby code.

Since a _role_ belongs to a _movie_ and an _actor_, we can use ActiveRecord to write instance methods that let us access data across our different model:

```rb
class Role < ActiveRecord::Base

  def movie
    Movie.find(self.movie_id)
  end

  def actor
    Movie.find(self.actor_id)
  end

end
```

And since a _movie_ has many _roles_, and has many _actors_ through _roles_, we can also use ActiveRecord to query across classes from a movie instance:

```rb
class Movie < ActiveRecord::Base

  def roles
    # Role.where(movie_id: self.id)
    
    # or, like earlier in mod 1:
    Role.all.select do |role|
      role.movie_id == self.id
    end
  end

  def actors
    # and to return the actors:
    roles.map do |role|
      role.actor
    end
  end

end
```

Since these kinds of relationship are very common in domain modeling, ActiveRecord also gives us some additional association helper methods to write this code for us:

```rb
class Role < ActiveRecord::Base
  belongs_to :movie
  # lets us call an instance method Role#movie to return the Movie instance

  belongs_to :actor
  # lets us call an instance method Role#actor to return the Actor instance
end
```

```rb
class Movie < ActiveRecord::Base
  has_many :roles
  # lets us call an instance method Movie#roles to return a collection of Role instances

  has_many :actors, through: :roles
  # lets us call an instance method Movie#actors to return a collection of Actor instances
end
```

Pay close attention to the naming conventions! *belongs_to* should always take a _singular_ name as an argument, and *has_many_ should always take a _plural_ name as an argument.

### Resources
[Active Record Associations](https://guides.rubyonrails.org/association_basics.html)