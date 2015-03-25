class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end

  def like
    @picture = Picture.find(params[:id])
    @picture.update_likes(current_user)

    # // 6. handle the response
    respond_to do |format|
      format.html { redirect_to root_path }
      format.js { }
    end
    
  end

end
