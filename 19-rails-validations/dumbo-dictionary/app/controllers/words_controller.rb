class WordsController < ApplicationController

  # get /words
  def index
    # model
    if params[:term]
      # see application.html.erb file for search form
      @words = Word.search(params[:term])
    else
      @words = Word.all
    end
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
    # redirect_to "/words/#{word.id}" <- option 1
    # redirect_to word_path(word.id) <- option 2
    # redirect_to word_path(word) <- option 3
    redirect_to word # <- option 4
  end

  def edit
    @word = Word.find(params[:id])
  end

  def update
    word = Word.find(params[:id])
    word.update(word_params)

    redirect_to word
  end

  def destroy
    word = Word.find(params[:id])
    word.destroy

    redirect_to "/words"
  end

  private

  def word_params
    params.require(:word).permit(:name, :author, :category, :likes)
  end

end
