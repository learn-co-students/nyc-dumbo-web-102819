class User < ApplicationRecord
  has_secure_password
  # validates :password, presence: true
  # attr_reader :password
  #
# def password=(pt_pw)
  #   self.password_digest = BCrypt::Password.create(pt_pw)
  # end
  #
  # def authenticate(pt_pw)
  #     if BCrypt::Password.new(self.password_digest) == pt_pw
  #       self
  #     else
  #       puts 'nah dawg try again'
  #     end
  #
  # end


end
