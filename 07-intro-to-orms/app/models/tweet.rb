class Tweet
  attr_accessor :username, :message

  # @@all = []

  def initialize(username, message)
    @username = username
    @message = message

    # TODO: replace with database!
    # @@all << self
  end

  def save
    # insert a new tweet into the database
    # using the username and message for that tweet
    # some_bad_sql = "'; drop table tweets --"

    sql = "INSERT INTO tweets (username, message) VALUES (?, ?)"

    results = DB[:conn].execute(sql, self.username, self.message)
  end

  # TODO: replace with database!
  def self.all
    # @@all
    sql = "SELECT * FROM tweets;"

    results = DB[:conn].execute(sql)

    results.map do |row|
      Tweet.new(row["username"], row["message"])
    end
  end

end