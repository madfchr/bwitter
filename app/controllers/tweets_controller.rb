class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      render @tweet
    else
      render :index
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
