class Api::V1::CommentsController < Api::ApplicationController
  before_action :authenticate_user!

  def create
    @room = Room.find params[:room_id]
    comment = Comment.new(comment_params)
    comment.room_id = params[:room_id]
    comment.user = current_user
    if comment.save
      render json: @room
    else
      render json: {error: comment.errors.full_messages}
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comments).permit(:body)
  end
end
