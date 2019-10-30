require 'pry'

require_relative 'models/bank_account'

ginger_bank_account = BankAccount.new("Geri Halliwell", 9_000)
posh_bank_account = BankAccount.new("Victoria Adams", 100_000)

posh_bank_account.name = "Victoria Beckham"

ginger_bank_account.win_the_lottery


BankAccount.all
BankAccount.millionaires

binding.pry


# ginger_spice_bank_account = {
#   name: "Geri Halliwell",
#   balance: 9_000
# }

# posh_spice_bank_account = {
#   account_holder_name: "Victoria Adams",
#   balance: 100_000
# }

# def win_the_lottery(spice_girl)
#   spice_girl[:balance] = spice_girl[:balance] + 1_000_000
#   puts "#{ spice_girl[:name] } won the lottery!"
# end


# # binding.pry 

# win_the_lottery(ginger_spice_bank_account)
# win_the_lottery(posh_spice_bank_account)


