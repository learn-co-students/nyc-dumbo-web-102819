class Tweet
  attr_reader :message, :user

  @@all = []

  # message => string, user => user instance
  def initialize(message, user)
    @message = message
    @user = user
    
    @@all << self
  end
  
  def self.all
    @@all
  end

  def username
    self.user.username
  end

end # end of Tweet class