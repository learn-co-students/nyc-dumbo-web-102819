class WordsController < ApplicationController

  # get /words
  def index
    # model
    @words = Word.all
  end

  # get /words/:id
  def show
    @word = Word.find(params[:id])
  end

  # get /words/new
  def new
    @word = Word.new
  end

  # post /words
  def create
    # model
    word = Word.create(word_params)

    # response
    redirect_to "/words"
  end

  def edit
    @word = Word.find(params[:id])
  end

  def update
    word = Word.find(params[:id])
    word.update(word_params)

    redirect_to word
  end

  private

  def word_params
    params.require(:word).permit(:name, :author, :category, :likes)
  end

end
