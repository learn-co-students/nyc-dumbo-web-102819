class SnacksController < ApplicationController

  def index
    if token_there_at_all?
      snacks = Snack.all
      render json: snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

end
