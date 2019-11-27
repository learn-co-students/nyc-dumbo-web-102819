class WordsController < ApplicationController
  before_action :set_word, only: [:show, :edit, :update, :destroy]
  # before_action :does_something_else, only: :edit

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
    # set_word
    @definitions = @word.definitions.order(likes: :desc)
  end

  # get /words/new
  def new
    @word = Word.new
  end

  # post /words
  def create
    # model
    word = Word.create(word_params)

    if word.valid?
      redirect_to word
    else
      # if the word isn't valid, give them another shot -> show them the form again
      flash[:some_key] = "whatever value"
      flash[:errors] = word.errors.full_messages
      redirect_to "/words/new" #new_word_path
    end
  end

  def edit
    # set_word
  end

  def update
    # set_word
    @word.update(word_params)

    redirect_to @word
  end

  def destroy
    # set_word
    @word.destroy

    redirect_to "/words"
  end

  private

  def set_word
    @word = Word.find(params[:id])
  end

  def does_something_else
    redirect_to "/somewhere"
  end

  def word_params
    params.require(:word).permit(:name, :author, :category, :likes)
  end

end
