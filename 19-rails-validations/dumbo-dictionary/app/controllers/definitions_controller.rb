class DefinitionsController < ApplicationController

  def new
    @definition = Definition.new
  end

  def create
    # create a new definition using strong params
    definition = Definition.create(definition_params)
    # redirect to the word show page
    redirect_to word_path(definition.word)
  end

  private

  def definition_params
    params.require(:definition).permit(:body, :part_of_speech, :likes, :word_id)
  end
end
