class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end

  def like
    @picture = Picture.find(params[:id])
    @picture.update_likes(current_user)
    render :json => {message: @picture.likes_message(current_user)}
  end

end
