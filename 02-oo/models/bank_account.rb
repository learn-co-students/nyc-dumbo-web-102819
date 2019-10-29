class BankAccount

  attr_reader :balance #:name
  # attr_writer :name
  attr_accessor  :name

  def initialize(account_holder_name, initial_balance)
    @name = account_holder_name
    @balance = initial_balance
    # $balance = initial_balance
  end

  def deposit(amount)
    # @balance = @balance + amount
    @balance += amount
  end

  def withdraw(amount)
    # @balance = @balance - amount
    @balance -= amount
  end

  # def balance
  #   @balance
  # end

  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

end