class Cat < Pet

  def initialize(name)
    super(name.upcase)
    @remaining_lives = 9
    @thing_to_say = "Meow!"
  end

  def die
    if @remaining_lives > 0
      @remaining_lives -= 1
    else
      super
    end
  end


end
