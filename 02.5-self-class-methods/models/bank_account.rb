class BankAccount

  # p self # the class
  @@all = []

  attr_reader :balance
  attr_accessor :name

  def initialize(account_holder_name, initial_balance)
    @name = account_holder_name
    @balance = initial_balance
    @@all << self
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end

  def win_the_lottery # instance method
    # p self # the instance we called win the lottery on
    # p self.class.all # calling a class method in an instance methods
    deposit 1_000_000 
  end

  def self.all # class method
    @@all
  end

  def self.and_you_win_the_lottery
    self.all.each do |bank_account|
      bank_account.win_the_lottery
    end
  end

  def self.millionaires
    @@all.select do |account|
      account.balance >= 1_000_000
    end
  end

  # def change_name_to_ian_hollander
  #   # name = "Ian hollander"
  #   # p name
  #   # p self.name
  #   self.name = "Ian hollander"
  # end

end