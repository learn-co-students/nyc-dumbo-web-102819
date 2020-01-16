class SnacksController < ApplicationController

  def index
    if valid_token_exists
      snacks = Snack.all
      render json: snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

end
